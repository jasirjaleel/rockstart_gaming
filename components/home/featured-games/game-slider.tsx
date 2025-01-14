"use client";

import { useState, useEffect, useCallback } from "react";
import { GameSlide } from "./game-slide";
import { SliderControls } from "./slider-controls";
import type { GameSlide as GameSlideType } from "@/lib/games-slider-data";

interface GameSliderProps {
  games: GameSlideType[];
  autoplayInterval?: number;
}

export function GameSlider({ 
  games, 
  autoplayInterval = 5000 
}: GameSliderProps) {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % games.length);
  }, [games.length]);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + games.length) % games.length);
  };

  useEffect(() => {
    if (!mounted || isAutoplayPaused) return;

    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  }, [mounted, nextSlide, autoplayInterval, isAutoplayPaused]);

  if (!mounted) {
    return (
      <div className="relative h-[80vh] bg-muted">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse bg-accent rounded-lg w-32 h-32" />
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative h-[80vh] overflow-hidden"
      onMouseEnter={() => setIsAutoplayPaused(true)}
      onMouseLeave={() => setIsAutoplayPaused(false)}
    >
      {games.map((game, index) => (
        <GameSlide
          key={game.id}
          {...game}
          isActive={currentSlide === index}
        />
      ))}
      
      <SliderControls
        currentSlide={currentSlide}
        totalSlides={games.length}
        onPrevious={previousSlide}
        onNext={nextSlide}
        onDotClick={setCurrentSlide}
      />
    </div>
  );
}