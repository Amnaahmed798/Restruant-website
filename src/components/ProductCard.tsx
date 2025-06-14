"use client";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useStore, Item } from "@/store/useStore";
import { cn } from "@/lib/utils";

interface Props {
  item: Item;
  className?: string;
}

export function ProductCard({ item, className }: Props) {
  const { addToCart, addToWishlist, removeFromWishlist, wishlist, cart } = useStore();

  const inWishlist = wishlist.some((w) => w.id === item.id);
  const inCart = cart.some((c) => c.id === item.id);

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  const handleAddCart = () => {
    if (!inCart) addToCart(item);
  };

  return (
    <Card className={cn("p-4 flex flex-col items-center text-center gap-4", className)}>
      <div className="relative w-full">
        <Image
          src={item.image}
          alt={item.name}
          width={240}
          height={240}
          className="rounded object-cover mx-auto bg-white"
          placeholder="empty"
        />
        {/* Heart icon */}
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleWishlist}
          className="absolute top-2 right-2 bg-white/80 backdrop-blur rounded-full p-1"
        >
          <Heart
            className={cn("h-5 w-5", inWishlist ? "fill-red-500 text-red-500" : "")}
          />
        </motion.button>
      </div>
      <Card.Title>{item.name}</Card.Title>
      <p className="font-medium">${item.price.toFixed(2)}</p>
      <Button onClick={handleAddCart} disabled={inCart} className="mt-auto">
        {inCart ? "Added" : (
          <div className="flex items-center gap-2"><ShoppingCart className="h-4 w-4"/> Add to Cart</div>
        )}
      </Button>
    </Card>
  );
} 