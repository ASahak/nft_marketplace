import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NFTCollectionModule = buildModule("NFTCollectionModule", (m) => {
  // Define deployment parameters
  const name = "Test Collection";
  const symbol = "TC";
  const description = "A sample NFT collection";
  const creator = m.getAccount(0); // Deploy using the first account
  const royaltyReceiver = m.getAccount(0); // Set the first account as the royalty receiver
  const royaltyFee = 500; // 5% (500 basis points)

  // Deploy the NFTCollection contract
  const nftCollection = m.contract("NFTCollection", [
    name,
    symbol,
    description,
    creator,
    royaltyReceiver,
    royaltyFee
  ]);

  return { nftCollection };
});

export default NFTCollectionModule;
