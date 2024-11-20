import React, { useEffect } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ClientLogos } from "@/components/ClientLogos";
import { Features } from "@/components/Features";
import { PricingCard } from "@/components/PricingCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CoverageSection } from "@/components/CoverageSection";
import { PaymentMethods } from "@/components/PaymentMethods";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Constants
const plans = [
  { speed: "10", price: "150.000" },
  { speed: "15", price: "166.500" },
  { speed: "20", price: "200.000" },
  { speed: "25", price: "222.000" },
  { speed: "35", price: "250.000" },
  { speed: "50", price: "277.500" },
];

const testimonials = [
  {
    name: "Maestro A.",
    role: "IT Manager",
    company: "Tefa Omah",
    image: "/testi/maestro.jpg",
    content: "Selama kita memakai Citynet jaringan Internet tidak pernah ada kendala. Untuk respon komplain sangat cepat.",
  },
  {
    name: "Rezza G",
    role: "Streamer Game",
    company: "Streamer",
    image: "/testi/rezza.jpg",
    content: "Harga terjangkau, untuk live stream 2 platform sekaligus tidak ada kendala.",
  },
  {
    name: "Dwi Farhan",
    role: "Staff IT",
    company: "Balai Desa Odo",
    image: "/testi/farhan.jpg",
    content: "Sejauh ini jika ada kendala penanganannya super cepat, respon cs 24jam.",
  },
];

const Index = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scroll-reveal");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
      observer.observe(el);
      el.classList.add("opacity-0");
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <CoverageSection />
      <Features />
      
      {/* Pricing Section */}
      <section className="py-20 bg-pricing-gradient relative overflow-hidden scroll-reveal">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white animate-fade-up">
            CITYNET HOME
          </h2>
          
          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          {/* Mobile Carousel View */}
          <div className="md:hidden">
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {plans.map((plan, index) => (
                  <CarouselItem key={index}>
                    <PricingCard {...plan} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://api.whatsapp.com/send/?phone=6282220666657&text=Hallo%20bisa%20beri%20saya%20Price%20List%20terbaru%20daru%20Citynet?.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              More Package Contact Now
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 scroll-reveal">
        <div className="container mx-auto px-4">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white scroll-reveal">
        <div className="container mx-auto px-4">
          <ClientLogos />
        </div>
      </section>

      {/* Payment Methods Section */}
      <PaymentMethods />

      {/* Contact Section */}
      <section className="py-20 bg-white scroll-reveal">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-pricing-gradient animate-fade-up">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg animate-fade-up">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0849675338786!2d110.48230287589219!3d-7.344355392664331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a78400847ad29%3A0x2f8683b3966649ee!2sGrahamedia%20Net!5e0!3m2!1sid!2sid!4v1731593064635!5m2!1sid!2sid"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="space-y-6 animate-fade-up">
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-primary">Address</h3>
                <p className="text-gray-600">
                  Jl. Parikesit No.7, Dukuh, Kec. Sidomukti, Salatiga City, Central Java 50722
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-primary">Contact Us</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-800">Monday - Friday | 08:00 - 17:00</p>
                    <a href="https://wa.me/6282220666657" className="text-secondary hover:text-primary transition-colors block">
                      Admin Pemasangan: +62 822-2066-6657
                    </a>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800">Every day | 24 Hours</p>
                    <a href="https://wa.me/6282221201202" className="text-secondary hover:text-primary transition-colors block">
                      Technical Support: +62 822-2120-1202
                    </a>
                    <a href="tel:0298316363" className="text-secondary hover:text-primary transition-colors block">
                      Office: (0298) 316363
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-primary">Email Support</h3>
                <a href="mailto:support@grahamedia.net.id" className="text-secondary hover:text-primary transition-colors">
                  support@grahamedia.net.id
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
