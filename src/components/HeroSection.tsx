"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Savor Every Moment <br /> Where Flavor Meets Ambiance
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-prose">
            Indulge in handcrafted dishes and unforgettable experiences, all
            served with a side of charm.
          </p>
          <Button className="px-6 py-3 text-base">Reserve a Table</Button>
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <Image
            src="/images/special-salad.png"
            alt="Salad Dish"
            width={600}
            height={600}
            className="rounded-full shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
} 