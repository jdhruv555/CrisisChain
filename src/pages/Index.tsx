
import { Button } from "@/components/ui/button";
import { WaitlistCounter } from "@/components/WaitlistCounter";
import { FeatureCard } from "@/components/FeatureCard";
import { MapPin, Send, Check } from "lucide-react";
import { useState } from "react";
import { LearnMoreModal } from "@/components/LearnMoreModal";
import { WaitlistForm } from "@/components/WaitlistForm";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [showLearnMore, setShowLearnMore] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
        style={{ 
          backgroundImage: 'url("/lovable-uploads/8bf8bece-c2f4-404a-b5e5-2a6c54d72562.png")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="text-red-600 animate-pulse">Crisis</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Chain</span>
              </h1>
              <p className="text-lg md:text-2xl font-normal text-gray-50 mt-4">
                Mint real-time geo-tagged disaster alerts as NFTs on Solana.
                <br className="hidden md:block" />
                Verify incidents. Mobilize global aid faster.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <div className="glass rounded-xl p-4 backdrop-blur-lg flex items-center gap-4">
                <WaitlistForm />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <TooltipProvider>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9945FF]/20 via-transparent to-[#14F195]/20 blur-3xl -z-10" />
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
          </TooltipProvider>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              onClick={() => setShowLearnMore(true)}
              className="glass border-white/20 hover:bg-white/10 px-8">
              Learn More About CrisisChain
            </Button>
          </div>
        </div>
      </div>

      <LearnMoreModal 
        open={showLearnMore} 
        onOpenChange={setShowLearnMore}
      />
      
      <Footer />
    </div>
  );
};

export default Index;
