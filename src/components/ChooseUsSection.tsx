"use client";

import { Star } from "lucide-react";
import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Tristique cursus mattis nibh nec et vulputate. Turpis tortor mi sit imperdiet quis accumsan. Ligula toros semper lo ultrices, lectus vestibulum in eget eget.",
    author: "Business Man",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Tristique cursus mattis nibh nec et vulputate. Turpis tortor mi sit imperdiet quis accumsan. Ligula toros semper lo ultrices, lectus vestibulum in eget eget.",
    author: "Business Man",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur. Tristique cursus mattis nibh nec et vulputate. Turpis tortor mi sit imperdiet quis accumsan. Ligula toros semper lo ultrices, lectus vestibulum in eget eget.",
    author: "Business Man",
  },
];

function CountUp({ target, suffix = "+", duration = 1 }: { target: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, target, {
      duration,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [target, duration]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 1287, label: "Visitors Daily" },
  { value: 578, label: "Deliveries Monthly" },
  { value: 1440, label: "Positive Feedback" },
  { value: 40, label: "Awards and Honors" },
];

export function ChooseUsSection() {
  return (
    <section className="bg-yellow-50 py-24">
      <div className="container mx-auto px-4 space-y-16">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Why people choose us?</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius
            facilisis eget cras sit semper sit enim. Turpis aliquet ac eu
            posuere, iac sagittis vestibulum at quis non massa netus.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="rounded-lg bg-white p-6 shadow-sm flex flex-col justify-between"
            >
              <div className="relative mb-4">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400 text-2xl font-bold">
                  {"\u201D"}
                </div>
                <p className="text-sm text-muted-foreground mt-8">{t.quote}</p>
              </div>
              <div className="space-y-2">
                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm font-medium text-right">{t.author}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className="h-2 w-2 rounded-full bg-yellow-400/40 inline-block"
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="space-y-1">
              <p className="text-3xl md:text-4xl font-extrabold text-yellow-400">
                <CountUp target={s.value} />
              </p>
              <p className="uppercase text-xs text-muted-foreground tracking-wide">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 