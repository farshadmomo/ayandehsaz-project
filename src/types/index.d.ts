interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

interface ProductState {
  items: Product[];
}
