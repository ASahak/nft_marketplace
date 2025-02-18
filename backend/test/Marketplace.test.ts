import { ethers } from "hardhat";
import { expect } from "chai";

describe("NFT Marketplace", () => {
  let owner: any, seller: any, buyer: any, nftCollection: any, marketplace: any;

  beforeEach(async () => {
    [owner, seller, buyer] = await ethers.getSigners();

    const NFTCollection = await ethers.getContractFactory("NFTCollection");
    nftCollection = await NFTCollection.connect(seller).deploy(
      "TestCollection",
      "TC",
      "Test Description",
      seller.address, // creator
      seller.address, // royalty receiver
      500 // 5% royalties (500 basis points)
    );
    await nftCollection.waitForDeployment();

    const Marketplace = await ethers.getContractFactory("Marketplace");
    marketplace = await Marketplace.deploy();
    await marketplace.waitForDeployment();
  });

  it("should mint an NFT and verify ownership", async () => {
    await nftCollection.connect(seller).mintNFT(seller.address, "ipfs://metadata");
    expect(await nftCollection.ownerOf(1)).to.equal(seller.address);
  });

  it("should list an NFT for sale", async () => {
    await nftCollection.connect(seller).mintNFT(seller.address, "ipfs://metadata");
    await nftCollection.connect(seller).approve(marketplace.address, 1);
    await marketplace.connect(seller).listNFT(nftCollection.address, 1, ethers.utils.parseEther("1"));

    const listing = await marketplace.listings(nftCollection.address, 1);
    expect(listing.seller).to.equal(seller.address);
    expect(listing.price.toString()).to.equal(ethers.utils.parseEther("1").toString());
  });

  it("should allow a buyer to purchase a listed NFT", async () => {
    await nftCollection.connect(seller).mintNFT(seller.address, "ipfs://metadata");
    await nftCollection.connect(seller).approve(marketplace.address, 1);
    await marketplace.connect(seller).listNFT(nftCollection.address, 1, ethers.utils.parseEther("1"));

    await marketplace.connect(buyer).buyNFT(nftCollection.address, 1, { value: ethers.utils.parseEther("1") });
    expect(await nftCollection.ownerOf(1)).to.equal(buyer.address);
  });
});
