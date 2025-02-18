// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Marketplace {
    struct Listing {
        address seller;
        uint256 price;
    }

    mapping(address => mapping(uint256 => Listing)) public listings;

    event NFTListed(address indexed collection, uint256 indexed tokenId, address seller, uint256 price);
    event NFTSold(address indexed collection, uint256 indexed tokenId, address buyer, uint256 price);

    function listNFT(address collection, uint256 tokenId, uint256 price) external {
        ERC721 nft = ERC721(collection);
        require(nft.ownerOf(tokenId) == msg.sender, "Not the owner");
        require(price > 0, "Price must be greater than 0");

        listings[collection][tokenId] = Listing(msg.sender, price);
        emit NFTListed(collection, tokenId, msg.sender, price);
    }

    function buyNFT(address collection, uint256 tokenId) external payable {
        Listing memory listing = listings[collection][tokenId];
        require(listing.price > 0, "NFT not listed");
        require(msg.value == listing.price, "Incorrect price");

        ERC721 nft = ERC721(collection);
        address seller = listing.seller;
        delete listings[collection][tokenId];
        nft.safeTransferFrom(seller, msg.sender, tokenId);
        payable(seller).transfer(msg.value);

        emit NFTSold(collection, tokenId, msg.sender, listing.price);
    }
}