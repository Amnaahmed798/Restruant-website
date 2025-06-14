"use client";

import { ProductCard } from "@/components/ProductCard";

const categories = [
  {
    name: "Starters",
    items: [
      { id:"brus", name: "Bruschetta", price: 8, image: "/images/bruschetta.png" },
      { id:"mush", name: "Stuffed Mushrooms", price: 7, image: "/images/stuffed-mashrooms.png" },
      { id:"caprese", name: "Caprese Skewers", price: 6, image: "/images/caprese.png" },
      { id:"quiche", name: "Mini Quiches", price: 6, image: "/images/mini-quiches.png" },
    ],
  },
  
  {
    name: "Main Course",
    items: [
      { id:"pizza", name: "Margherita Pizza", price: 15, image: "/images/Margherita-Pizza.webp" },
      { id:"pasta1", name: "Pasta Carbonara", price: 17, image: "/images/pasta-carbonara.png" },
      { id:"lasagna", name: "Classic Lasagna", price: 18, image: "/images/classic-lasagna.png" },
      { id:"risotto", name: "Mushroom Risotto", price: 16, image: "/images/mushroom-risotto.png" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { id:"tir", name: "Tiramisu", price: 9, image: "/images/tiramisu.png" },
      { id:"gel1", name: "Gelato", price: 7, image: "/images/gelato.png" },
      { id:"cheese", name: "New York Cheesecake", price: 8, image: "/images/cheese-cake.png" },
      { id:"panna", name: "Panna Cotta", price: 7, image: "/images/panna-cotta.png" },
    ],
  },
  {
    name: "Beverages",
    items: [
      { id:"esp", name: "Espresso", price: 4, image: "/images/expresso.png" },
      { id:"lem1", name: "Lemonade", price: 5, image: "/images/lemonade.png" },
      { id:"tea", name: "Iced Tea", price: 4, image: "/images/iced-tea.png" },
      { id:"oj", name: "Orange Juice", price: 4, image: "/images/orange-juice.webp" },
      { id:"capp", name: "Cappuccino", price: 5, image: "/images/Cappuccino.png" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-24 space-y-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      {categories.map((cat) => (
        <section key={cat.name} id={cat.name.toLowerCase().replace(/ /g, "-")}
          className="space-y-8">
          <h2 className="text-2xl font-semibold">{cat.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cat.items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
} 