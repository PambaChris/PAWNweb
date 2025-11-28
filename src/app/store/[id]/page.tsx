import React from 'react';
import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useCart } from '../../../lib/CartContext';

interface ProductDetailsPageProps {
  params: {
    id: string;
  };
}

const ProductDetailsPage = ({ params }: ProductDetailsPageProps) => {
  const { addToCart } = useCart();
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-background text-foreground">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-primary text-3xl font-semibold mb-6">{product.price}</p>
          <p className="text-muted-foreground text-lg mb-4">{product.category}</p>
          <p className="text-muted-foreground text-base mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Button variant="primary" size="lg" className="w-full md:w-auto" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
