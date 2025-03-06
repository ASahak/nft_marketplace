// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./NFTCollection.sol";

contract CollectionFactory {
    event CollectionCreated(
        address indexed collectionAddress,
        address indexed owner,
        string name,
        string symbol,
        string description
    );

    NFTCollection[] public collections;

    function createCollection(
        string memory name,
        string memory symbol,
        string memory description,
        address royaltyReceiver,
        uint96 royaltyFee
    ) public returns (address) {
        NFTCollection collection = new NFTCollection(name, symbol, description, msg.sender, royaltyReceiver, royaltyFee);
        collections.push(collection);
        emit CollectionCreated(address(collection), msg.sender, name, symbol, description);
        return address(collection);
    }

    function getAllCollections() public view returns (NFTCollection[] memory) {
        return collections;
    }

    function getMyCollections(address user) public view returns (NFTCollection[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < collections.length; i++) {
            if (collections[i].owner() == user) {
                count++;
            }
        }

        NFTCollection[] memory myCollections = new NFTCollection[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < collections.length; i++) {
            if (collections[i].owner() == user) {
                myCollections[index] = collections[i];
                index++;
            }
        }

        return myCollections;
    }
}
