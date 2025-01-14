import { pricingTiers } from "@/lib/pricing-data";
import { PricingCard } from "@/components/pricing/pricing-card";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-foreground">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-4 text-xl text-primary-foreground/90">
              Choose the perfect gaming package for your needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <PricingCard key={tier.name} {...tier} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                What's included in the gaming setup?
              </h3>
              <p className="text-muted-foreground">
                Each station includes a high-performance gaming PC, gaming chair, 
                premium peripherals, and high-refresh-rate monitor.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Can I bring my own peripherals?
              </h3>
              <p className="text-muted-foreground">
                Yes! Feel free to bring your own keyboard, mouse, or headset.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Do you offer group discounts?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer special rates for groups and events. Contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}