import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Starters", img: "/images/garlicbread.png" },
  { name: "Main Course", img: "/images/Margherita-Pizza.webp" },
  { name: "Desserts", img: "/images/tiramisu.png" },
  { name: "Beverages", img: "/images/expresso.png" },
];

export function MenuPreview({ className }: { className?: string }) {
  return (
    <section className={cn("py-24", className)}>
      <div className="container mx-auto px-4 text-center space-y-12">
        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Explore Our Menu</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From appetizers to desserts, discover flavours that delight every palate.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/menu#${cat.name.toLowerCase().replace(/ /g, "-")}`}
              className="group relative overflow-hidden rounded-lg shadow hover:shadow-lg transition"
            >
              <Image
                src={cat.img}
                alt={cat.name}
                width={300}
                height={300}
                className="object-cover w-full h-40 md:h-48 group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white text-lg font-semibold tracking-wide">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div>
          <Link href="/menu">
            <Button size="lg" className="px-8 py-4 text-base">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 