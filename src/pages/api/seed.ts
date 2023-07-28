import { db } from '@/database'
import { initialData } from '@/database/products';
import Product from '@/models/product';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({msg: "You don't have access to this api"});
  };

  try {
    await db.connect();

    await Product.deleteMany();
    await Product.insertMany(initialData.products);

    await db.disconnect();
  
    res.status(200).json({msg: "All saved products"});
  
  } catch (error) {
    console.log(error);
    res.status(405);
  };
};