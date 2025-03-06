const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTCollection", function () {
  let NFTCollection: any, nftCollection: any;
  let owner: any, user1: any, user2: any, royaltyReceiver: any;
  const collectionName = "MyNFTs";
  const collectionSymbol = "MNFT";
  const collectionDescription = "This is a test collection";
  const royaltyFee = 500; // 5% in basis points
  const tokenURI = "ipfs://test-metadata-uri";

  beforeEach(async function () {
    [owner, user1, user2, royaltyReceiver] = await ethers.getSigners();

    NFTCollection = await ethers.getContractFactory("NFTCollection");
    nftCollection = await NFTCollection.deploy(
      collectionName,
      collectionSymbol,
      collectionDescription,
      owner.address,
      royaltyReceiver.address,
      royaltyFee
    );
    await nftCollection.waitForDeployment();
  });

  it("Should deploy with correct details", async function () {
    expect(await nftCollection.name()).to.equal(collectionName);
    expect(await nftCollection.symbol()).to.equal(collectionSymbol);
    expect(await nftCollection.description()).to.equal(collectionDescription);
  });

  it("Should allow the owner to mint an NFT", async function () {
    await expect(nftCollection.connect(owner).mintNFT(user1.address, tokenURI))
      .to.emit(nftCollection, "Transfer") // ERC721 emits a Transfer event on mint
      .withArgs(ethers.ZeroAddress, user1.address, 1);

    expect(await nftCollection.ownerOf(1)).to.equal(user1.address);
    expect(await nftCollection.tokenURI(1)).to.equal(tokenURI);
  });

  it("Should not allow non-owner to mint NFTs", async function () {
    await expect(nftCollection.connect(user1).mintNFT(user1.address, tokenURI))
      .to.be.reverted;
  });

  it("Should return correct royalty information", async function () {
    const salePrice = ethers.parseEther("1"); // 1 ETH
    const expectedRoyalty = (salePrice * BigInt(royaltyFee)) / BigInt(10000); // 5%

    const royaltyInfo = await nftCollection.royaltyInfo(1, salePrice);
    expect(royaltyInfo[0]).to.equal(royaltyReceiver.address);
    expect(royaltyInfo[1]).to.equal(expectedRoyalty);
  });


  it("Should return NFTs owned by a user", async function () {
    await nftCollection.connect(owner).mintNFT(user1.address, tokenURI);
    await nftCollection.connect(owner).mintNFT(user1.address, tokenURI);

    const nfts = await nftCollection.getMyNFTs(user1.address);
    expect(nfts.length).to.equal(2);
    expect(nfts[0]).to.equal(1);
    expect(nfts[1]).to.equal(2);
  });
});
