export interface Product {
  id: string;
  name: string;
  enName: string;
  price: number;
  originalPrice?: number;
  volume: string;
  packaging: string;
  tag: string;
  tagType?: 'bestseller' | 'new' | 'organic';
  rating: number;
  reviewCount: number;
  shortDesc: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  usage: string;
  image: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderForm {
  fullName: string;
  phone: string;
  address: string;
  notes: string;
  paymentMethod: 'cod' | 'vietqr' | 'momo';
}
