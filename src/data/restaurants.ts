
export interface Restaurant {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  deliveryTime: string;
  deliveryFee: number;
  minimumOrder: number;
  isOpen: boolean;
  cuisine: string[];
  featured: boolean;
}

export interface FoodItem {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  restaurantId: string;
  restaurantName: string;
  ingredients?: string[];
  spicy?: boolean;
  vegetarian?: boolean;
}

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Palace',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop',
    description: 'Authentic Italian pizza with fresh ingredients',
    category: 'Italian',
    rating: 4.8,
    reviews: 267,
    deliveryTime: '25-35 min',
    deliveryFee: 2.99,
    minimumOrder: 15,
    isOpen: true,
    cuisine: ['Italian', 'Pizza'],
    featured: true
  },
  {
    id: '2',
    name: 'Burger House',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    description: 'Gourmet burgers and crispy fries',
    category: 'Fast Food',
    rating: 4.6,
    reviews: 189,
    deliveryTime: '20-30 min',
    deliveryFee: 1.99,
    minimumOrder: 12,
    isOpen: true,
    cuisine: ['American', 'Burgers'],
    featured: false
  },
  {
    id: '3',
    name: 'Sushi Express',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    description: 'Fresh sushi and Japanese cuisine',
    category: 'Japanese',
    rating: 4.9,
    reviews: 342,
    deliveryTime: '30-45 min',
    deliveryFee: 3.99,
    minimumOrder: 20,
    isOpen: true,
    cuisine: ['Japanese', 'Sushi'],
    featured: true
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
    description: 'Authentic Mexican tacos and burritos',
    category: 'Mexican',
    rating: 4.5,
    reviews: 156,
    deliveryTime: '25-40 min',
    deliveryFee: 2.49,
    minimumOrder: 10,
    isOpen: false,
    cuisine: ['Mexican', 'Tacos'],
    featured: false
  },
  {
    id: '5',
    name: 'Healthy Bowls',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    description: 'Nutritious salads and healthy options',
    category: 'Healthy',
    rating: 4.7,
    reviews: 98,
    deliveryTime: '20-25 min',
    deliveryFee: 2.99,
    minimumOrder: 8,
    isOpen: true,
    cuisine: ['Healthy', 'Salads'],
    featured: true
  },
  {
    id: '6',
    name: 'Pasta Corner',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop',
    description: 'Homemade pasta and Italian classics',
    category: 'Italian',
    rating: 4.4,
    reviews: 203,
    deliveryTime: '35-45 min',
    deliveryFee: 2.99,
    minimumOrder: 15,
    isOpen: true,
    cuisine: ['Italian', 'Pasta'],
    featured: false
  }
];

export const foodCategories = [
  'All',
  'Italian',
  'Fast Food',
  'Japanese',
  'Mexican',
  'Healthy',
  'Pizza',
  'Burgers',
  'Sushi'
];

export const featuredCategories = [
  { name: 'Pizza', icon: '🍕', color: 'bg-red-100 text-red-600' },
  { name: 'Burgers', icon: '🍔', color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Sushi', icon: '🍣', color: 'bg-blue-100 text-blue-600' },
  { name: 'Mexican', icon: '🌮', color: 'bg-orange-100 text-orange-600' },
  { name: 'Healthy', icon: '🥗', color: 'bg-green-100 text-green-600' },
  { name: 'Italian', icon: '🍝', color: 'bg-purple-100 text-purple-600' }
];
