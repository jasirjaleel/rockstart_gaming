import { GameSlider } from '@/components/home/featured-games/game-slider';
import { featuredGames } from '@/lib/games-slider-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Gamepad, Headphones, Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Featured Games Slider */}
      <GameSlider games={featuredGames} />

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Choose Rockstar Gaming?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Experience gaming like never before with our premium facilities
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <Monitor className="h-8 w-8 mb-4" />
                <CardTitle>High-End PCs</CardTitle>
              </CardHeader>
              <CardContent>
                Latest gaming rigs with RTX graphics and 240Hz monitors
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Gamepad className="h-8 w-8 mb-4" />
                <CardTitle>Console Gaming</CardTitle>
              </CardHeader>
              <CardContent>
                PS5, Xbox Series X, and Nintendo Switch stations
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Headphones className="h-8 w-8 mb-4" />
                <CardTitle>Premium Audio</CardTitle>
              </CardHeader>
              <CardContent>
                Professional gaming headsets for immersive experience
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 mb-4" />
                <CardTitle>24/7 Access</CardTitle>
              </CardHeader>
              <CardContent>
                Game whenever you want with our flexible hours
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary-foreground">
              Ready to Join the Gaming Elite?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/90">
              Get started with our affordable gaming packages today
            </p>
            <Button className="mt-8" size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}