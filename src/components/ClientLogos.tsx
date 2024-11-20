import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const clients = [
  { name: "Mikrotik", logo: "/carousel/mikrotik.png" },
  { name: "Cisco", logo: "/carousel/cisco.png" },
  { name: "Cpanel", logo: "/carousel/cpanel.png" },
  { name: "Grahamedia", logo: "/carousel/grahamedia.png" },
  { name: "Huawei", logo: "/carousel/huawei.png" },
  { name: "Xendit", logo: "/carousel/xendit.png" },
  { name: "Zimbra", logo: "/carousel/zimbra.png" },
  { name: "ZTE", logo: "/carousel/zte.png" },
  { name: "Mysql", logo: "/carousel/mysql.png" },
  { name: "Ubuntu", logo: "/carousel/ubuntu.png" },
];

export const ClientLogos = () => {
  return (
    <div className="w-full bg-white/50 backdrop-blur-sm py-8 rounded-xl">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {clients.map((client, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
              <div className="p-4">
                <div className="bg-white rounded-lg shadow-md p-4 h-24 flex items-center justify-center hover:shadow-lg transition-shadow">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
