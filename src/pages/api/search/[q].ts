import { db } from '@/database';
import { IProduct } from '@/interfaces/products';
import Product from '@/models/product';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { msg: string } | IProduct[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  switch (req.method) {
    case "GET":
      return searchProducts(req, res);

    default:
      return res.status(400).json({msg: "Bad Request"});
  };
  
};

const searchProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let {q = ""} = req.query;

  if (q.length === 0) {
    return res.status(400).json({msg: "You must specify the query"})
  };

  q = q.toString().toLowerCase();
  
  try {
    await db.connect();
    const products = await Product.find({
      $text: {$search: q}
    }).select("title images prices inStock slug -_id price").lean();
    await db.disconnect();

    res.status(200).json(products)
  } catch (error) {
    console.log(error);
    res.status(401);
  };
};