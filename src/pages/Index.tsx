
import { Button } from "@/components/ui/button";
import { WaitlistCounter } from "@/components/WaitlistCounter";
import { FeatureCard } from "@/components/FeatureCard";
import { MapPin, Send, Check } from "lucide-react";
import { useState } from "react";
import { LearnMoreModal } from "@/components/LearnMoreModal";
import { WaitlistForm } from "@/components/WaitlistForm";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Footer } from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const isMobile = useIsMobile();

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
      <div className="relative z-10 container mx-auto px-4 py-4 md:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center space-y-4 md:space-y-6 mb-6 md:mb-8">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="text-red-600 animate-pulse">Crisis</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Chain</span>
              </h1>
              <p className="text-lg md:text-2xl font-normal text-gray-50 mt-4">
                Mint real-time geo-tagged disaster alerts as NFTs on <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#14F195] to-[#9945FF]">SOLANA</span>.
                <br className="hidden md:block" />
                Verify incidents. Mobilize global aid faster.
              </p>
            </div>
            
            {/* Waitlist Section */}
            <div className="flex flex-col items-center justify-center gap-4 mt-4 md:mt-6">
              <div className="glass rounded-xl p-3 md:p-4 backdrop-blur-lg flex items-center gap-4 w-full sm:w-auto">
                {!isMobile ? <WaitlistCounter /> : null}
                <WaitlistForm />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <TooltipProvider>
            <div className="relative py-4">
              {/* Animated background effects */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#14F195]/5 via-transparent to-[#9945FF]/5 animate-pulse duration-5000" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />
              </div>
              
              {/* Cards grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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

              {/* Learn More Button - Moved to bottom with better spacing */}
              <div className="text-center mt-6 md:mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setShowLearnMore(true)}
                  className="glass rounded-xl border-white/20 hover:bg-white/10 backdrop-blur-md px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </TooltipProvider>
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
