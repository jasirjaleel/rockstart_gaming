"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import type { GameSlide } from "@/lib/games-slider-data";

interface GameSlideProps extends GameSlide {
  isActive: boolean;
}

export function GameSlide({
  title,
  description,
  image,
  releaseYear,
  developer,
  isActive
}: GameSlideProps) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            
            <div className="absolute bottom-20 left-8 right-8 text-white">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold mb-2">{title}</h2>
                <p className="text-lg mb-1 text-gray-200">{description}</p>
                <p className="text-sm mb-4 text-gray-300">
                  {releaseYear} • {developer}
                </p>
                <div className="flex gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/games">View Games</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}