
import { ethers } from 'ethers';
import { config } from './config';

const nftAbi = [
  'function mint(address to, uint256 tokenId, string memory tokenURI) public',
];

const provider = new ethers.providers.JsonRpcProvider(config.infuraOrAlchemyUrl);
const wallet = new ethers.Wallet(config.privateKey, provider);
const nftContract = new ethers.Contract(config.nftContractAddress, nftAbi, wallet);

export async function mintNFT(metadataURI: string): Promise<void> {
  const tokenId = Math.floor(Math.random() * 1000000);

  try {
    const tx = await nftContract.mint(wallet.address, tokenId, metadataURI);
    await tx.wait();
    console.log('NFT minted successfully with tokenId:', tokenId);
  } catch (error) {
    console.error('Error minting NFT:', error);
    throw new Error('Failed to mint NFT');
  }
}
