
import { Button } from "@/components/ui/button";
import { WaitlistCounter } from "@/components/WaitlistCounter";
import { FeatureCard } from "@/components/FeatureCard";
import { MapPin, Send, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="relative w-full">
      {/* First Section - Bronze Map */}
      <div className="relative min-h-screen w-full">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/47da862c-394e-4007-952d-562f5b8573cb.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#b08d57]">
                CrisisChain
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Mint real-time geo-tagged disaster alerts as NFTs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Blue Map */}
      <div className="relative min-h-screen w-full">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/a74d2bf6-2c4c-451e-8bee-ee8d7141a10d.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl mb-8 text-center text-gray-300">
              Verify incidents. Mobilize global aid faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="glass rounded-lg p-4 flex items-center gap-4">
                <WaitlistCounter />
                <Button variant="default" className="bg-primary hover:bg-primary/90">
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - Detailed Map */}
      <div className="relative min-h-screen w-full">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/lovable-uploads/8331a12e-d40f-4379-8fc0-556791e49c32.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon={MapPin}
                title="Report"
                description="Snap and submit disaster events from your phone"
              />
              <FeatureCard
                icon={Check}
                title="Verify"
                description="Crowdsource truth via community voting"
              />
              <FeatureCard
                icon={Send}
                title="Respond"
                description="Aid orgs use verified alerts to act fast"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
