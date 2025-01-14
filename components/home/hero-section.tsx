"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Video Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop')`
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-gaming-logo-3d-animation-8758-large.mp4" 
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay with stronger gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Content */}
      <div className="relative h-full mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Level Up Your Gaming Experience
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-xl text-gray-200">
          Join the ultimate gaming community with state-of-the-art equipment and premium facilities.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/pricing">View Packages</Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-2">
            <Link href="/games">Explore Games</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}