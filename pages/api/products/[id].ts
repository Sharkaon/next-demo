import type {
  NextApiRequest,
  NextApiResponse,
} from 'next';

import type { Product } from '@/types/products';
import mockData from './mockData';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | null>
) {
  const { id } = req.query;
  const product = mockData.find((product) => product.id === Number(id));

  res.status(200).json(product || null);
}
