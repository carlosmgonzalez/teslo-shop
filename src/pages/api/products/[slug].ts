import { db } from '@/database';
import { IProduct } from '@/interfaces/products';
import Product from '@/models/product';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { msg: string } | IProduct;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case "GET":
      return getProductBySlug(req, res );
  
    default:
      return res.status(400).json({msg: "Bad Request"});
  };
};

const getProductBySlug = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const {slug} = req.query;

  try {
    await db.connect();
    const product = await Product.findOne({slug}).lean();
    await db.disconnect();

    if (!product) {
      return res.status(404).json({msg: "Product not found"});
    };

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(401);
  };
};