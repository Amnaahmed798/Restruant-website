import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 mt-16 pt-16 border-t text-sm text-muted-foreground">
      <div className="container mx-auto px-4 space-y-12">
        {/* Upper grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-lime-500">LøTavola&apos;s</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Tristique cursus mattis nibh nec et vulputate. Turpis tortor mi sit imperdiet quis accumsan.
            </p>
            <div className="flex gap-4 text-gray-600">
              <Link href="#" className="hover:text-lime-500"><Facebook size={18} /></Link>
              <Link href="#" className="hover:text-lime-500"><Twitter size={18} /></Link>
              <Link href="#" className="hover:text-lime-500"><Instagram size={18} /></Link>
              <Link href="#" className="hover:text-lime-500"><Linkedin size={18} /></Link>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Opening Restaurant</h4>
            <p>Sa – We 09:00am – 10:00pm</p>
            <p>Thu – We 03:00pm – 10:00pm</p>
            <p className="italic text-xs">Friday Closed</p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">User Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-lime-500">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-lime-500">Contact Us</Link></li>
              <li><Link href="/menu" className="hover:text-lime-500">Our Menu</Link></li>
              <li><Link href="#" className="hover:text-lime-500">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact / Subscribe */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Contact Us</h4>
            <address className="not-italic leading-relaxed">
              5aJ Country Club Ave,<br />
              NC 2761, London UK<br />
              +987 654879
            </address>
            <div className="flex w-full max-w-xs gap-2">
              <Input placeholder="Email" className="flex-1" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-6 text-xs">
          <p>© {year} LøTavola&apos;s, All right reserved</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-lime-500">Privacy Policy</Link>
            <Link href="#" className="hover:text-lime-500">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 