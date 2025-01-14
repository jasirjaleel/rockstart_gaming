"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import type { GameSlide } from "@/lib/games-slider-data";

interface PopularGamesGridProps {
  games: GameSlide[];
}

export function PopularGamesGrid({ games }: PopularGamesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
      {games.map((game) => (
        <motion.div
          key={game.id}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-1">{game.title}</h3>
              <p className="text-sm text-muted-foreground">{game.developer}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}