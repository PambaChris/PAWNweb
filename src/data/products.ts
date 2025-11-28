export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Signature Tote Bag',
    price: '$25.00',
    image: '/product-1.svg',
    category: 'Accessories',
  },
  {
    id: 2,
    name: '"Empowered Woman" T-Shirt',
    price: '$30.00',
    image: '/product-2.svg',
    category: 'Apparel',
  },
  {
    id: 3,
    name: 'Handcrafted Beaded Necklace',
    price: '$45.00',
    image: '/product-3.svg',
    category: 'Jewelry',
  },
  {
    id: 4,
    name: 'Logo Mug',
    price: '$15.00',
    image: '/product-4.svg',
    category: 'Homeware',
  },
  {
    id: 5,
    name: 'Kente Pattern Scarf',
    price: '$35.00',
    image: '/product-5.svg',
    category: 'Accessories',
  },
  {
    id: 6,
    name: '"Legacy" Hardcover Journal',
    price: '$22.00',
    image: '/product-6.svg',
    category: 'Stationery',
  },
];
