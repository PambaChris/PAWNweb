'use client';

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/CartContext';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center bg-muted text-foreground min-h-screen">
        <h1 className="text-4xl font-bold font-heading mb-4">Your Cart is Empty</h1>
        <p className="text-lg mb-8 font-body">Looks like you haven&#39;t added anything to your cart yet.</p>
        <Link href="/store">
          <Button variant="primary" size="lg">
            Go to Store
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 bg-muted text-foreground min-h-screen">
      <h1 className="text-4xl font-bold font-heading mb-8 text-center">Your Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-background rounded-xl shadow-md mb-4">
              <div className="flex-shrink-0 w-24 h-24 relative mb-4 sm:mb-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="ml-0 sm:ml-4 flex-grow w-full sm:w-auto">
                <h2 className="text-xl font-semibold font-heading text-foreground">{item.name}</h2>
                <p className="text-primary text-lg font-bold mt-1 font-body">{item.price}</p>
                <div className="flex items-center mt-2">
                  <label htmlFor={`quantity-${item.id}`} className="sr-only">Quantity</label>
                  <input
                    type="number"
                    id={`quantity-${item.id}`}
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 p-2 border border-muted-foreground/50 rounded-md bg-muted text-foreground"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </Button>
                </div>
              </div>
              <p className="text-lg font-bold font-body mt-4 sm:mt-0 sm:ml-auto">
                ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1 bg-background rounded-xl shadow-md p-6 h-fit">
          <h2 className="text-2xl font-bold font-heading mb-4 text-foreground">Order Summary</h2>
          <div className="flex justify-between items-center text-lg mb-2 font-body">
            <span>Subtotal:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-lg mb-4 font-body">
            <span>Shipping:</span>
            <span>Free</span> {/* For now, hardcode to Free */}
          </div>
          <div className="border-t border-muted-foreground/50 pt-4 mt-4 flex justify-between items-center text-2xl font-bold font-body">
            <span>Total:</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <Button variant="primary" size="lg" className="w-full mt-6">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
