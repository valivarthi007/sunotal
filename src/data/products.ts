import iphone14Pro from '@assets/generated_images/iphone-14-pro.jpg';
import galaxyS23Ultra from '@assets/generated_images/galaxy-s23-ultra.jpg';
import redmiNote12Pro from '@assets/generated_images/redmi-note-12-pro.jpg';
import oneplus11 from '@assets/generated_images/oneplus-11.jpg';
import airpodsPro from '@assets/generated_images/airpods-pro.jpg';
import appleWatch8 from '@assets/generated_images/apple-watch-8.jpg';

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: 'Smartphones' | 'Accessories' | 'Tablets';
  condition: 'Like New' | 'Good' | 'Fair';
  ram?: string;
  storage?: string;
  price: number;
  originalPrice: number;
  discountPercentage: number;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Apple iPhone 14 Pro',
    brand: 'Apple',
    category: 'Smartphones',
    condition: 'Like New',
    ram: '6GB',
    storage: '128GB',
    price: 65999,
    originalPrice: 129900,
    discountPercentage: 49,
    image: iphone14Pro,
    badge: 'Bestseller',
  },
  {
    id: 'p2',
    name: 'Samsung Galaxy S23 Ultra',
    brand: 'Samsung',
    category: 'Smartphones',
    condition: 'Like New',
    ram: '12GB',
    storage: '256GB',
    price: 84999,
    originalPrice: 149999,
    discountPercentage: 43,
    image: galaxyS23Ultra,
  },
  {
    id: 'p3',
    name: 'Xiaomi Redmi Note 12 Pro',
    brand: 'Xiaomi',
    category: 'Smartphones',
    condition: 'Good',
    ram: '8GB',
    storage: '128GB',
    price: 14999,
    originalPrice: 24999,
    discountPercentage: 40,
    image: redmiNote12Pro,
  },
  {
    id: 'p4',
    name: 'OnePlus 11 5G',
    brand: 'OnePlus',
    category: 'Smartphones',
    condition: 'Like New',
    ram: '16GB',
    storage: '256GB',
    price: 42999,
    originalPrice: 61999,
    discountPercentage: 30,
    image: oneplus11,
  },
  {
    id: 'p5',
    name: 'Apple AirPods Pro (2nd Gen)',
    brand: 'Apple',
    category: 'Accessories',
    condition: 'Like New',
    price: 16999,
    originalPrice: 24900,
    discountPercentage: 31,
    image: airpodsPro,
  },
  {
    id: 'p6',
    name: 'Apple Watch Series 8 (45mm)',
    brand: 'Apple',
    category: 'Accessories',
    condition: 'Good',
    price: 24999,
    originalPrice: 45900,
    discountPercentage: 45,
    image: appleWatch8,
  },
  {
    id: 'p7',
    name: 'Apple iPhone 13',
    brand: 'Apple',
    category: 'Smartphones',
    condition: 'Fair',
    ram: '4GB',
    storage: '128GB',
    price: 38999,
    originalPrice: 69900,
    discountPercentage: 44,
    image: iphone14Pro, // reusing image for mockup
  },
  {
    id: 'p8',
    name: 'Samsung Galaxy S22',
    brand: 'Samsung',
    category: 'Smartphones',
    condition: 'Good',
    ram: '8GB',
    storage: '128GB',
    price: 32999,
    originalPrice: 72999,
    discountPercentage: 54,
    image: galaxyS23Ultra, // reusing image for mockup
  },
  {
    id: 'p9',
    name: 'OnePlus Nord CE 3',
    brand: 'OnePlus',
    category: 'Smartphones',
    condition: 'Like New',
    ram: '8GB',
    storage: '128GB',
    price: 18999,
    originalPrice: 26999,
    discountPercentage: 29,
    image: oneplus11, // reusing image for mockup
  },
  {
    id: 'p10',
    name: 'Samsung Galaxy Watch 5',
    brand: 'Samsung',
    category: 'Accessories',
    condition: 'Good',
    price: 11999,
    originalPrice: 27999,
    discountPercentage: 57,
    image: appleWatch8, // reusing image for mockup
  }
];
