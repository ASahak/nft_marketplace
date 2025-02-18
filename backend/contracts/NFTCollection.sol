// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC2981.sol";

contract NFTCollection is ERC721URIStorage, Ownable, IERC2981 {
    uint256 private _tokenIds;
    string public description;
    address private _royaltyReceiver;
    uint96 private _royaltyFee; // Basis points (10000 = 100%)

    constructor(
        string memory name,
        string memory symbol,
        string memory _description,
        address creator,
        address royaltyReceiver,
        uint96 royaltyFee
    ) ERC721(name, symbol) Ownable(creator) {
        _transferOwnership(creator);
        _royaltyReceiver = royaltyReceiver;
        _royaltyFee = royaltyFee;
        description = _description;
    }

    function mintNFT(
        address recipient,
        string memory tokenURI
    ) public onlyOwner returns (uint256) {
        _tokenIds++;
        uint256 newItemId = _tokenIds;
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }

    function royaltyInfo(uint256, uint256 salePrice) external view override returns (address receiver, uint256 royaltyAmount) {
        return (_royaltyReceiver, (salePrice * _royaltyFee) / 10000);
    }
}