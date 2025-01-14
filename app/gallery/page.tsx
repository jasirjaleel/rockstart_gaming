import { galleryImages, categories } from "@/lib/gallery-data";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-foreground">
              Our Gaming Hub Gallery
            </h1>
            <p className="mt-4 text-xl text-primary-foreground/90">
              Take a tour of our premium gaming facilities
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} categories={categories} />
        </div>
      </section>
    </div>
  );
}