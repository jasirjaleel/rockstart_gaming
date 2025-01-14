import { ContactForm } from "@/components/contact/contact-form";
import { BusinessHours } from "@/components/contact/business-hours";
import { ContactInfo } from "@/components/contact/contact-info";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary-foreground">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-primary-foreground/90">
              Get in touch with our gaming community
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <ContactInfo />
              <BusinessHours />
            </div>
            {/* <ContactForm /> */}
          </div>
        </div>
      </section>
    </div>
  );
}