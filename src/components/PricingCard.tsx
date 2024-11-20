import { Card } from "@/components/ui/card";
import { useState } from "react";
import { RegistrationForm } from "./RegistrationForm";

interface PricingCardProps {
  speed: string;
  price: string;
}

export const PricingCard = ({ speed, price }: PricingCardProps) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Card className="group bg-card-gradient backdrop-blur-sm rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300 animate-fade-up">
        <div className="space-y-4">
          <div className="text-lg font-semibold text-gray-600 mb-4">CITYNET</div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl font-bold bg-clip-text text-transparent bg-pricing-gradient">{speed}</span>
            <div className="text-left">
              <span className="text-xl font-semibold text-gray-800">Mbps</span>
            </div>
          </div>
          <div className="text-sm text-gray-600">Harga Include PPN 11%</div>
          <div className="text-sm text-gray-600 mb-2">Hanya</div>
          <div className="text-3xl font-bold text-gray-800 mb-6">
            Rp {price}
          </div>
          <button 
            onClick={() => setShowForm(true)}
            className="block w-full bg-pricing-gradient text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity group-hover:shadow-lg"
          >
            Daftar Sekarang
          </button>
        </div>
      </Card>
      <RegistrationForm open={showForm} onOpenChange={setShowForm} />
    </>
  );
};