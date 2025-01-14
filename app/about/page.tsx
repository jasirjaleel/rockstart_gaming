import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-black">
        <Image
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
          alt="Gaming Setup"
          width={1920}
          height={1080}
          className="object-cover w-full h-[400px] opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Our Story</h1>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-4">
              Building the ultimate gaming community since 2020
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The Rockstar Gaming Experience</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Founded by passionate gamers, Rockstar Gaming Hub was created to provide an unparalleled
                gaming experience for everyone - from casual players to professional esports athletes.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our state-of-the-art facility features the latest gaming technology, comfortable
                seating, and a vibrant community space where gamers can connect and compete.
              </p>
              <p className="text-lg text-muted-foreground">
                We're more than just a gaming center - we're a community hub where friendships
                are formed, skills are developed, and gaming dreams come true.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e"
                alt="Gaming Setup"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1598550476439-6847785fcea6"
                alt="Gaming Lounge"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96"
                alt="Esports Area"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <Image
                src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f"
                alt="VR Gaming"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}