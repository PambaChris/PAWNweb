"use client";

import Image from 'next/image';
import { Product } from '@/data/products';
import Button from '../ui/Button';
import { useCart } from '../../lib/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-background rounded-xl shadow-md overflow-hidden flex flex-col h-full group transition-transform hover:scale-[1.02]">
      <div className="relative w-full h-48">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold font-heading text-foreground mb-2">{product.name}</h3>
        <p className="text-primary text-lg font-bold font-body mb-3">{product.price}</p>
        <p className="font-body text-muted-foreground text-sm mb-4 flex-grow">{product.category}</p>
        <Button variant="primary" size="md" className="w-full" onClick={() => addToCart(product)}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
