import type {
  NextApiRequest,
  NextApiResponse,
} from 'next';

import type { Product } from '@/types/products';
import mockData from '@/pages/api/products/mockData';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<{
    id: Product['id'];
    name: Product['name'];
  }[]>
) {
  const returnData = mockData.map((product) => ({
    id: product.id,
    name: product.name,
  }));

  res.status(200).json(returnData);
}
