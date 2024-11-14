
import dotenv from 'dotenv';
dotenv.config();

export const config = {
  infuraOrAlchemyUrl: process.env.INFURA_OR_ALCHEMY_URL || '',
  privateKey: process.env.PRIVATE_KEY || '',
  nftContractAddress: process.env.NFT_CONTRACT_ADDRESS || '',
  pinataApiKey: process.env.PINATA_API_KEY || '',
  pinataSecretApiKey: process.env.PINATA_SECRET_API_KEY || '',
};
