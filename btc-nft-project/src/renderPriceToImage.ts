
import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';

export async function renderPriceToImage(price: number): Promise<string> {
  const width = 800;
  const height = 400;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  context.fillStyle = '#1a1a1a';
  context.fillRect(0, 0, width, height);

  context.fillStyle = '#ffffff';
  context.font = 'bold 40px Arial';
  context.fillText('Bitcoin Price (BTC)', 50, 80);

  context.font = 'bold 80px Arial';
  context.fillText(`$${price}`, 50, 200);

  const outputPath = path.join(__dirname, '../images/btc-price.png');
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  console.log('Image created successfully:', outputPath);
  return outputPath;
}
