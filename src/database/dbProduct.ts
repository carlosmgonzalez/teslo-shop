import Product from "@/models/product";
import { db } from ".";
import { IProduct } from "@/interfaces/products";


export const getProductBySlug= async (slug: string): Promise<IProduct | null > => {
  try {
    await db.connect();
    const product = await Product.findOne({slug}).lean();
    await db.disconnect();

    if (!product) {
      return null;
    };

    return JSON.parse(JSON.stringify(product));

  } catch (error) {
    console.log(error);
    throw error;
  };
};

interface ProductSlug {
  slug: string;
};

export const getAllProductSlugs = async (): Promise<ProductSlug[]> => {
  try {
    await db.connect();
    const slugs = await Product.find().select("slug -_id").lean();
    await db.disconnect();

    return slugs;
  } catch (error) {
    console.log(error);
    throw error;
  };
};

export const getProductsByTerm = async (query: string): Promise<IProduct[]> => {

  query = query.toString().toLowerCase();

  try {
    await db.connect();
    const products = await Product.find({
      $text: {$search: query}
    }).select("title images prices inStock slug -_id price").lean();
    await db.disconnect();

    return products;
  } catch (error) {
    console.log(error);
    throw error;
  };
};

export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    await db.connect();
    const products = await Product.find().lean();
    await db.disconnect();

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
    throw error;
  };
};