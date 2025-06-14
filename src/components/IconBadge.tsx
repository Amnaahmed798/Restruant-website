"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  to: string;
  count?: number;
  children: ReactNode; // icon
}

export function IconBadge({ to, count = 0, children }: Props) {
  return (
    <Link href={to} className="relative inline-flex items-center justify-center p-2">
      <motion.span whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        {children}
        {count > 0 && (
          <span className="absolute -top-1 -right-1 text-[10px] min-w-4 h-4 px-1 rounded-full bg-red-500 text-white flex items-center justify-center">
            {count}
          </span>
        )}
      </motion.span>
    </Link>
  );
} 