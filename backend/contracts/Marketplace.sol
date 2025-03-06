// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract Marketplace is ReentrancyGuard {
    struct MarketItem {
        uint256 marketItemId;
        address nftContractAddress;
        uint256 tokenId;
        address payable creator;
        address payable seller;
        address payable owner;
        uint256 price;
    }

    uint256 private marketItemId;
    uint256 private listingFee = 0.001 ether;
    address payable private owner;

    mapping(address => mapping(uint256 => MarketItem)) public listings;

    event NFTSold(address indexed collection, uint256 indexed tokenId, address buyer, uint256 price);
    event MarketItemListed(
        uint256 indexed marketItemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address creator,
        address seller,
        address owner,
        uint256 price
    );

    constructor() {
        owner = payable(msg.sender);
    }

    function listNFT(address contractAddress, uint256 tokenId, uint256 price) external payable nonReentrant returns(uint256) {
        IERC721 nft = IERC721(contractAddress);
        require(nft.ownerOf(tokenId) == msg.sender, "Not the owner");
        require(msg.value == listingFee, "You have to pay exact listing fee!");
        require(nft.getApproved(tokenId) == address(this), "Marketplace not approved");
        require(price > 0, "Price must be greater than 0");

        address creator = nft.ownerOf(tokenId);
        marketItemId++;

        listings[contractAddress][marketItemId] = MarketItem(
            marketItemId,
            contractAddress,
            tokenId,
            payable(creator),
            payable(msg.sender),
            payable(address(0)),
            price
        );

        IERC721(contractAddress).transferFrom(msg.sender, address(this), tokenId);

        emit MarketItemListed(
            marketItemId,
            contractAddress,
            tokenId,
            payable(creator),
            payable(msg.sender),
            payable(address(0)),
            price
        );

        return marketItemId;
    }

    function getListingFee() public view returns (uint256) {
        return listingFee;
    }

    function buyNFT(address contractAddress, uint256 _marketItemId) external payable nonReentrant {
        uint256 price = listings[contractAddress][_marketItemId].price;
        uint256 tokenId = listings[contractAddress][_marketItemId].tokenId;

        require(msg.value == price, "Please submit the asking price in order to continue");

        listings[contractAddress][_marketItemId].owner = payable(msg.sender);
        listings[contractAddress][_marketItemId].seller.transfer(msg.value);
        IERC721(contractAddress).transferFrom(address(this), msg.sender, tokenId);
        delete listings[contractAddress][_marketItemId];

        payable(owner).transfer(listingFee);

        emit NFTSold(contractAddress, tokenId, msg.sender, price);
    }

//    function getListedNFTs() external view returns (Listing[] memory) {
//        return allListings;
//    }
}
