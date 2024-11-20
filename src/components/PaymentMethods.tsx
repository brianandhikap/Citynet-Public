import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface PaymentMethodProps {
  title: string;
  subtitle: string;
  description: string;
  logos: string[];
}

const paymentMethods = [
  {
    title: "Bank Transfer",
    subtitle: "( Virtual Account )",
    description: "Pembayaran melalui ATM, Mobile Banking atau Internet Banking dari Bank BCA, BNI, BRI, Mandiri, BSI, CIMB Niaga, Permata Bank, Muamalat, Sinarmas, Maybank.",
    logos: [
      "/pembayaran/bca-logo.svg",
      "/pembayaran/bni-logo.svg",
      "/pembayaran/mandiri-logo.svg",
      "/pembayaran/permata-logo.svg",
      "/pembayaran/cimb-logo.svg",
      "/pembayaran/bjb-logo.svg",
      "/pembayaran/bri-logo.svg",
      "/pembayaran/bsi-logo.svg",
    ]
  },
  {
    title: "Dompet Digital",
    subtitle: "( E-Wallet )",
    description: "Pembayaran dengan Scan QR Code (QRIS) melalui Aplikasi Dana, OVO, ShopeePay, GoPay, LinkAja dan sebagainya.",
    logos: [
      "/pembayaran/astrapay-logo.svg",
      "/pembayaran/dana-logo.svg",
      "/pembayaran/ovo-logo.svg",
      "/pembayaran/shopeepay-logo.svg",
      "/pembayaran/linkaja-logo.svg",
    ]
  },
  {
    title: "Minimarket",
    subtitle: "( Convenience Store )",
    description: "Pembayaran melalui Outlet Minimarket Alfamart",
    logos: [
      "/pembayaran/alfamart-logo.svg",
    ]
  }
];

const PaymentMethod = ({ title, subtitle, description, logos }: PaymentMethodProps) => (
  <div className="bg-white rounded-xl">
    <div className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {logos.map((logo, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <img src={logo} alt={`${title} logo ${index + 1}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const PaymentMethods = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-pricing-gradient">
          Metode Pembayaran
        </h2>
        
        {/* Desktop View */}
        <div className="hidden md:block">
          <Accordion type="single" collapsible className="space-y-4">
            {paymentMethods.map((method, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-xl overflow-hidden">
                <AccordionTrigger className={cn(
                  "px-6 py-4 hover:no-underline",
                  "data-[state=open]:bg-primary/5"
                )}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-semibold">{method.title}</span>
                    <span className="text-sm text-gray-500">{method.subtitle}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <PaymentMethod {...method} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {paymentMethods.map((method, index) => (
            <PaymentMethod key={index} {...method} />
          ))}
        </div>
      </div>
    </section>
  );
};
