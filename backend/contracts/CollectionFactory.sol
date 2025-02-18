// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./NFTCollection.sol";

contract CollectionFactory {
    event CollectionCreated(
        address indexed collectionAddress,
        address indexed owner,
        string name,
        string symbol,
        string description,
        address royaltyReceiver,
        uint96 royaltyFee
    );

    function createCollection(
        string memory name,
        string memory symbol,
        string memory description,
        address royaltyReceiver,
        uint96 royaltyFee
    ) public returns (address) {
        NFTCollection collection = new NFTCollection(name, symbol, description, msg.sender, royaltyReceiver, royaltyFee);
        emit CollectionCreated(address(collection), msg.sender, name, symbol, description, royaltyReceiver, royaltyFee);
        return address(collection);
    }
}