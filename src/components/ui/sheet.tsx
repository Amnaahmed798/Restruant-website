"use client";

import * as React from "react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";

interface SheetProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}

export function Sheet({ children, open, onOpenChange }: SheetProps) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.25 }}
        className="fixed inset-y-0 right-0 z-50 bg-white shadow-lg w-3/4 max-w-xs p-6 overflow-y-auto"
      >
        {children}
      </motion.div>
      <div
        onClick={() => onOpenChange(false)}
        className="fixed inset-0 bg-black/40 z-40"
      />
    </>,
    document.body
  );
}

export function SheetTrigger({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className="md:hidden">
      {children}
    </button>
  );
} 