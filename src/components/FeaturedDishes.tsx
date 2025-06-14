import { ProductCard } from "@/components/ProductCard";

// Removed unused imports

const dishes = [
  {
    id: "dish1",
    name: "Special Salad",
    price: 12,
    image: "/images/special-salad.png",
    description: "Food is any substance consumed by an organism for nutritional support.",
  },
  {
    id: "dish2",
    name: "Russian Salad",
    price: 12,
    image: "/images/rusian-salad.png",
    description: "Food is any substance consumed by an organism for nutritional support.",
  },
  {
    id: "dish3",
    name: "Asian Salad",
    price: 12,
    image: "/images/asian-salad.png",
    description: "Food is any substance consumed by an organism for nutritional support.",
  },
  {
    id: "dish4",
    name: "American Salad",
    price: 12,
    image: "/images/american-salad.png",
    description: "Food is any substance consumed by an organism for nutritional support.",
  },
];

export function FeaturedDishes() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Delicious and Special Salad
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12">
          Lorem ipsum dolor sit amet consectetur. Tellus cursus mattis nibh nec
          et vulputate. Turpis tortor mi sitimperdiet quis accumsan.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish) => (
            <ProductCard key={dish.id} item={dish} />
          ))}
        </div>
      </div>
    </section>
  );
} 