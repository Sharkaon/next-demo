interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
}

interface ProductExample {
  id: Product['id'];
  name: Product['name'];
}

export type { Product, ProductExample };
