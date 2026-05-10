import fs from 'fs/promises';
import path from 'path';
import { Product } from './types';

const dataFile = path.join(process.cwd(), 'products.json');

export async function getProducts(): Promise<Product[]> {
  try {
    const data = await fs.readFile(dataFile, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function saveProduct(product: Product): Promise<void> {
  const products = await getProducts();
  products.push(product);
  await fs.writeFile(dataFile, JSON.stringify(products, null, 2));
}

export async function updateProduct(slug: string, updatedProduct: Product): Promise<void> {
  const products = await getProducts();
  const index = products.findIndex(p => p.slug === slug);
  if (index !== -1) {
    products[index] = updatedProduct;
    await fs.writeFile(dataFile, JSON.stringify(products, null, 2));
  }
}

export async function deleteProduct(slug: string): Promise<void> {
  const products = await getProducts();
  const filtered = products.filter(p => p.slug !== slug);
  await fs.writeFile(dataFile, JSON.stringify(filtered, null, 2));
}
