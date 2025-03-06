// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTCollection is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;
    string public description;
    address private _royaltyReceiver;
    uint96 private _royaltyFee; // Basis points (10000 = 100%)
    mapping(uint256 => address) private _creators;

    constructor(
        string memory name,
        string memory symbol,
        string memory _description,
        address creator,
        address royaltyReceiver,
        uint96 royaltyFee
    ) ERC721(name, symbol) Ownable(creator) {
        _royaltyReceiver = royaltyReceiver;
        _royaltyFee = royaltyFee;
        description = _description;
    }

    function mintNFT(address recipient, string memory _tokenURI) external onlyOwner {
        _tokenIds++;
        uint256 newItemId = _tokenIds;
        _safeMint(recipient, newItemId);
        _creators[newItemId] = recipient;
        _setTokenURI(newItemId, _tokenURI);
    }

    function royaltyInfo(uint256, uint256 salePrice) external view returns (address receiver, uint256 royaltyAmount) {
        return (_royaltyReceiver, (salePrice * _royaltyFee) / 10000);
    }

    function getNFTCreatorById(uint256 tokenId) public view returns (address) {
        return _creators[tokenId];
    }

    function getMyNFTs(address user) external view returns (uint256[] memory) {
        uint256 count = balanceOf(user);
        uint256[] memory tokens = new uint256[](count);

        uint256 currentIndex = 0;
        for (uint256 i = 0; i < count; i++) {
            uint256 tokenId = i + 1;
            if (ownerOf(tokenId) != user) continue;
            tokens[currentIndex] = tokenId;
            currentIndex += 1;
        }

        return tokens;
    }
}
