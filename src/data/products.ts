
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    description: 'Premium wireless headphones with noise cancellation and superior sound quality.',
    category: 'Electronics',
    inStock: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: '2',
    name: 'Minimalist Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    description: 'Elegant minimalist watch with leather strap and Swiss movement.',
    category: 'Accessories',
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Smart Phone',
    price: 699.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    description: 'Latest smartphone with advanced camera system and all-day battery life.',
    category: 'Electronics',
    inStock: true,
    rating: 4.9,
    reviews: 342
  },
  {
    id: '4',
    name: 'Leather Backpack',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    description: 'Handcrafted leather backpack perfect for work and travel.',
    category: 'Bags',
    inStock: false,
    rating: 4.7,
    reviews: 56
  },
  {
    id: '5',
    name: 'Coffee Maker',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop',
    description: 'Professional-grade coffee maker for the perfect cup every time.',
    category: 'Kitchen',
    inStock: true,
    rating: 4.5,
    reviews: 78
  },
  {
    id: '6',
    name: 'Desk Lamp',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop',
    description: 'Modern LED desk lamp with adjustable brightness and USB charging port.',
    category: 'Home',
    inStock: true,
    rating: 4.4,
    reviews: 23
  }
];

export const categories = [
  'All',
  'Electronics',
  'Accessories',
  'Bags',
  'Kitchen',
  'Home'
];
