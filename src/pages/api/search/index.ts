import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg: string
};

export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(400).json({ msg: 'There is no endpoint' })
};