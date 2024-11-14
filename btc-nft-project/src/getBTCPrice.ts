
import axios from 'axios';

export async function getBTCPrice(): Promise<number> {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    return response.data.bitcoin.usd;
  } catch (error) {
    console.error('Error fetching BTC price:', error);
    throw new Error('Could not fetch BTC price');
  }
}
