"use client";

import { useStore } from "@/store/useStore";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useStore();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
        <Link href="/menu">
          <Button size="lg">Browse Menu</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-24 space-y-12">
      <h1 className="text-3xl font-bold text-center">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg bg-white shadow-sm">
            <Image
              src={item.image}
              alt={item.name}
              width={72}
              height={72}
              className="rounded object-cover bg-white"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold truncate">{item.name}</h3>
            </div>
            <div className="flex items-center gap-2">
              <Button size="icon" variant="outline" onClick={() => decreaseQty(item.id)}>-</Button>
              <span className="px-2 select-none">{item.quantity}</span>
              <Button size="icon" variant="outline" onClick={() => increaseQty(item.id)}>+</Button>
              <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                <Trash2 className="h-5 w-5 text-red-500" />
              </Button>
            </div>
            <p className="font-medium w-16 text-right">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-end items-center gap-6">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <Link href="/checkout">
          <Button size="lg">Proceed to Checkout</Button>
        </Link>
      </div>
    </div>
  );
} 