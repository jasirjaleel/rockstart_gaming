"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { GameCard } from '@/components/games/game-card';
import { CategoryFilter } from '@/components/games/category-filter';
import { gamesData, categories } from '@/lib/games-data';

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredGames = gamesData.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-foreground">
              Available Games
            </h1>
            <p className="mt-4 text-xl text-primary-foreground/90">
              Explore our extensive collection of games across multiple platforms
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            <Input
              type="search"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                title={game.title}
                image={game.image}
                platforms={game.platforms}
                category={game.category}
              />
            ))}
          </div>
          {filteredGames.length === 0 && (
            <p className="text-center text-muted-foreground">
              No games found matching your criteria.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}