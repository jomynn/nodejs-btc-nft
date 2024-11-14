
import { getBTCPrice } from './getBTCPrice';
import { renderPriceToImage } from './renderPriceToImage';
import { uploadToIPFS } from './uploadToIPFS';
import { mintNFT } from './mintNFT';

async function main() {
  try {
    const btcPrice = await getBTCPrice();
    console.log('BTC Price:', btcPrice);

    const imagePath = await renderPriceToImage(btcPrice);

    const ipfsURL = await uploadToIPFS(imagePath);
    console.log('Image uploaded to IPFS:', ipfsURL);

    await mintNFT(ipfsURL);
  } catch (error) {
    console.error('Error in main workflow:', error);
  }
}

main();
