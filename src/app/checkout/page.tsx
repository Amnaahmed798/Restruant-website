"use client";

import { useStore } from "@/store/useStore";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart, cartTotal } = useStore();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder – normally would call an API
    alert("Order placed! Thank you.");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-24 space-y-12"
    >
      <h1 className="text-3xl font-bold text-center">Checkout</h1>

      {/* Summary */}
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <Image
              src={item.image}
              alt={item.name}
              width={60}
              height={60}
              className="rounded object-cover"
            />
            <p className="flex-1 font-medium">
              {item.quantity} x {item.name}
            </p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <div className="flex justify-end font-semibold text-lg">
          Total: ${cartTotal().toFixed(2)}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="font-medium">
            Full Name
          </label>
          <Input id="name" name="name" required value={form.name} onChange={handleChange} />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="address" className="font-medium">
            Address
          </label>
          <Input
            id="address"
            name="address"
            required
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="font-medium">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="pt-4 text-center">
          <Button type="submit" size="lg" className="px-8 py-4">
            Place Order
          </Button>
        </div>
      </form>
    </motion.div>
  );
} 