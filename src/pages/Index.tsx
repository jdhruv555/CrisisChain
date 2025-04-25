
import { Button } from "@/components/ui/button";
import { WaitlistCounter } from "@/components/WaitlistCounter";
import { FeatureCard } from "@/components/FeatureCard";
import { MapPin, Send, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="https://player.vimeo.com/external/477892592.sd.mp4?s=c3c472226e2652442ce7bc09c8edcb0b08c5659c&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20 space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                <span className="text-red-600 animate-pulse">Crisis</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Chain</span>
              </h1>
              <p className="text-xl md:text-3xl font-normal text-gray-50 
                animate-fade-in 
                transition-all duration-700 
                hover:scale-105 
                hover:text-white 
                hover:tracking-wider 
                drop-shadow-[0_0_15px_rgba(255,0,0,0.4)]
                leading-relaxed">
                Mint real-time geo-tagged disaster alerts as NFTs.
                <br className="hidden md:block" />
                Verify incidents. Mobilize global aid faster.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in delay-200">
              <div className="glass rounded-xl p-6 backdrop-blur-lg flex items-center gap-6">
                <WaitlistCounter />
                <Button variant="default" 
                  className="bg-red-600 hover:bg-red-700 text-lg px-8 py-6 h-auto font-semibold
                    transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
                  Join Waitlist
                </Button>
              </div>
              <Button variant="outline" 
                className="glass border-white/20 hover:bg-white/10 text-lg px-8 py-6 h-auto">
                Learn More
              </Button>
            </div>
          </div>

          {/* Features Grid with new attractive layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 blur-3xl -z-10" />
            <FeatureCard 
              icon={MapPin} 
              title="Report" 
              description="Snap and submit disaster events from your phone" 
              className="transform hover:scale-105 hover:rotate-1"
            />
            <FeatureCard 
              icon={Check} 
              title="Verify" 
              description="Crowdsource truth via community voting" 
              className="transform hover:scale-105 hover:-rotate-1"
            />
            <FeatureCard 
              icon={Send} 
              title="Respond" 
              description="Aid orgs use verified alerts to act fast" 
              className="transform hover:scale-105 hover:rotate-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
