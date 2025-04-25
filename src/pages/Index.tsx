import { Button } from "@/components/ui/button";
import { WaitlistCounter } from "@/components/WaitlistCounter";
import { FeatureCard } from "@/components/FeatureCard";
import { MapPin, Send, Check } from "lucide-react";
const Index = () => {
  return <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: "url('/lovable-uploads/d540c958-cba4-4cdb-b171-1a6b7ad492a5.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.7
    }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-red-600">Crisis</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Chain</span>
            </h1>
            <p className="text-xl mb-8 md:text-2xl font-normal text-gray-50">
              Mint real-time geo-tagged disaster alerts as NFTs.
              <br />
              Verify incidents. Mobilize global aid faster.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="glass rounded-lg p-4 flex items-center gap-4">
                <WaitlistCounter />
                <Button variant="default" className="bg-red-600 hover:bg-red-700">
                  Join Waitlist
                </Button>
              </div>
              <Button variant="outline" className="glass border-white/20 hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard icon={MapPin} title="Report" description="Snap and submit disaster events from your phone" />
            <FeatureCard icon={Check} title="Verify" description="Crowdsource truth via community voting" />
            <FeatureCard icon={Send} title="Respond" description="Aid orgs use verified alerts to act fast" />
          </div>
        </div>
      </div>
    </div>;
};
export default Index;