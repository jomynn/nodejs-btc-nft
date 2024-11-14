
# BTC NFT Project

This project generates an NFT based on the live Bitcoin (BTC) price. It fetches the BTC price from a cryptocurrency API, renders it as an image, uploads the image to IPFS, and mints it as an NFT on an Ethereum-compatible blockchain using Node.js and TypeScript.

## Project Structure

```
btc-nft-project/
│
├── src/
│   ├── index.ts                # Main application file
│   ├── getBTCPrice.ts          # Fetches BTC price from CoinGecko
│   ├── renderPriceToImage.ts   # Renders BTC price as an image
│   ├── uploadToIPFS.ts         # Uploads image to IPFS
│   ├── mintNFT.ts              # Mints the image as an NFT
│   └── config.ts               # Configuration file for environment variables
│
├── images/
│   └── btc-price.png           # Generated BTC price image (output)
│
├── .env                        # Environment variables file
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies
└── README.md                   # Project documentation
```

## Prerequisites

- Node.js and npm
- An Ethereum-compatible wallet with some testnet or mainnet funds for minting NFTs
- API keys from [Pinata](https://pinata.cloud/) for IPFS storage
- [Alchemy](https://www.alchemy.com/) or [Infura](https://infura.io/) for Ethereum JSON-RPC access

## Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/btc-nft-project.git
   cd btc-nft-project
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```plaintext
   INFURA_OR_ALCHEMY_URL=YOUR_INFURA_OR_ALCHEMY_URL
   PRIVATE_KEY=YOUR_PRIVATE_KEY
   NFT_CONTRACT_ADDRESS=YOUR_NFT_CONTRACT_ADDRESS
   PINATA_API_KEY=YOUR_PINATA_API_KEY
   PINATA_SECRET_API_KEY=YOUR_PINATA_SECRET_API_KEY
   ```

   - `INFURA_OR_ALCHEMY_URL`: Your Ethereum JSON-RPC provider URL.
   - `PRIVATE_KEY`: Your wallet's private key for signing transactions.
   - `NFT_CONTRACT_ADDRESS`: The address of your deployed ERC-721 contract.
   - `PINATA_API_KEY` and `PINATA_SECRET_API_KEY`: Your Pinata API keys for uploading images to IPFS.

4. **Compile TypeScript**:

   ```bash
   npm run build
   ```

## Usage

To execute the program and mint an NFT:

```bash
npm start
```

This will:
1. Fetch the current BTC price from the CoinGecko API.
2. Render the price as an image and save it in the `images/` directory.
3. Upload the image to IPFS via Pinata and get the IPFS link.
4. Mint the NFT using the IPFS link as metadata for the token.

### Expected Output

After running the application, you should see logs indicating:
- The fetched BTC price
- The location of the generated image
- The IPFS URL of the image
- Confirmation of successful NFT minting

### Example Workflow

1. **Fetch BTC Price**: Retrieves the latest BTC price in USD.
2. **Render to Image**: Creates an image displaying the price.
3. **Upload to IPFS**: Stores the image on IPFS and retrieves a unique IPFS URL.
4. **Mint NFT**: Calls the mint function on the ERC-721 contract with the IPFS URL as metadata.

## Customizing the Project

- **ERC-721 Contract**: This example assumes you already have an ERC-721 contract deployed. You can use tools like [Remix](https://remix.ethereum.org/) or [Hardhat](https://hardhat.org/) to deploy your own.
- **Blockchain Network**: By default, this script uses the network configured in `INFURA_OR_ALCHEMY_URL`. This can be a testnet or mainnet, depending on your provider's URL.

## Dependencies

- `axios`: For HTTP requests to fetch BTC price and upload to IPFS.
- `canvas`: To render the BTC price image.
- `ethers`: For blockchain interactions.
- `dotenv`: To load environment variables.
- `form-data`: To upload the image to Pinata.

## Notes

- **Gas Fees**: Minting NFTs on mainnet incurs gas fees. To avoid costs during development, consider using a testnet (like Rinkeby or Goerli).
- **Security**: Keep your private key and API keys secure. Avoid committing sensitive information to version control.

## License

This project is open-source and available under the MIT License.
