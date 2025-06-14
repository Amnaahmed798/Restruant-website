"use client";

import { create } from "zustand";

export interface Item {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Item {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void;
  decreaseQty: (id: string) => void;
  addToWishlist: (item: Item) => void;
  removeFromWishlist: (id: string) => void;
  moveWishlistToCart: (id: string) => void;
  cartTotal: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  wishlist: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((c) => c.id === item.id);
      if (existing) {
        return {
          cart: state.cart.map((c) =>
            c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((c) => c.id !== id) })),
  increaseQty: (id) =>
    set((state) => ({
      cart: state.cart.map((c) => (c.id === id ? { ...c, quantity: c.quantity + 1 } : c)),
    })),
  decreaseQty: (id) =>
    set((state) => ({
      cart: state.cart
        .map((c) => (c.id === id ? { ...c, quantity: c.quantity - 1 } : c))
        .filter((c) => c.quantity > 0),
    })),
  addToWishlist: (item) =>
    set((state) => {
      if (state.wishlist.some((w) => w.id === item.id)) return {};
      return { wishlist: [...state.wishlist, item] };
    }),
  removeFromWishlist: (id) =>
    set((state) => ({ wishlist: state.wishlist.filter((w) => w.id !== id) })),
  moveWishlistToCart: (id) =>
    set((state) => {
      const item = state.wishlist.find((w) => w.id === id);
      if (!item) return {};
      const without = state.wishlist.filter((w) => w.id !== id);
      const existing = state.cart.find((c) => c.id === id);
      let newCart: CartItem[];
      if (existing) {
        newCart = state.cart.map((c) =>
          c.id === id ? { ...c, quantity: c.quantity + 1 } : c
        );
      } else {
        newCart = [...state.cart, { ...item, quantity: 1 }];
      }
      return { wishlist: without, cart: newCart };
    }),
  cartTotal: () => {
    const { cart } = get();
    return cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  },
})); 