import { Wifi, Shield, Clock, BarChart } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    icon: Wifi,
    title: "High-Speed Internet",
    description: "Lightning-fast connectivity for seamless streaming and gaming",
  },
  {
    icon: Shield,
    title: "Secure Connection",
    description: "Advanced security protocols to protect your online activities",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance whenever you need it",
  },
  {
    icon: BarChart,
    title: "99.9% Uptime",
    description: "Reliable service with minimal downtime",
  },
];

export const Features = () => {
  return (
    <section className="py-16 bg-gray-50 scroll-reveal">
      <div className="container mx-auto px-4">
        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <Carousel className="w-full max-w-xs mx-auto">
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index}>
                  <FeatureCard {...feature} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};