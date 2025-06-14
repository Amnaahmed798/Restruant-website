"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { IconBadge } from "@/components/IconBadge";
import { useStore } from "@/store/useStore";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const cartCount = useStore((s) => s.cart.reduce((sum, i) => sum + i.quantity, 0));
  const wishCount = useStore((s) => s.wishlist.length);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between p-4 md:px-8">
        <Link href="/" className="text-lg font-bold text-lime-500">
          LøTavola&apos;s
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-lime-500",
                pathname === link.href && "text-lime-500"
              )}
            >
              {link.label}
            </Link>
          ))}
          {/* Icons */}
          <div className="flex gap-4">
            <IconBadge to="/wishlist" count={wishCount}>
              <Heart className="h-5 w-5" />
            </IconBadge>
            <IconBadge to="/cart" count={cartCount}>
              <ShoppingCart className="h-5 w-5" />
            </IconBadge>
          </div>
          <Button size="sm">Book a Table</Button>
        </div>
        {/* Mobile toggle */}
        <SheetTrigger onClick={() => setOpen(true)}>
          <Menu className="h-5 w-5" />
        </SheetTrigger>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-lime-500",
                pathname === link.href && "text-lime-500"
              )}
            >
              {link.label}
            </Link>
          ))}
          {/* Icons */}
          <div className="flex gap-6">
            <IconBadge to="/wishlist" count={wishCount}>
              <Heart className="h-5 w-5" />
            </IconBadge>
            <IconBadge to="/cart" count={cartCount}>
              <ShoppingCart className="h-5 w-5" />
            </IconBadge>
          </div>
          <Button onClick={() => setOpen(false)}>Book a Table</Button>
        </div>
      </Sheet>
    </nav>
  );
} 