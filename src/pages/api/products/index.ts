import { SHOP_CONSTANTS, db } from '@/database'
import { IProduct } from '@/interfaces/products';
import Product from '@/models/product';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { msg?: string; } | IProduct[];

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  switch (req.method) {
    case "GET":
      return getProducts(req, res);

    default:
      return res.status(400).json({msg: "Bad Request"});
  }
};

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const {gender = "all"} = req.query;

  let condition = {};

  if (gender !== "all" && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
    condition = {gender};
  };

  try {
    await db.connect();
    const products = await Product.find(condition).select("title images prices inStock slug -_id price").lean();
    await db.disconnect();

    res.status(200).json(products);
    
  } catch (error) {
    console.log(error);
    res.status(401);
  };
};