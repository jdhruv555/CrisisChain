
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      "relative group",
      "bg-gradient-to-br from-black/40 to-black/60",
      "backdrop-blur-xl rounded-2xl p-6 md:p-8",
      "border border-white/10",
      "transition-all duration-500 ease-out",
      "hover:border-[#14F195]/50 hover:from-black/60 hover:to-black/80",
      "hover:shadow-[0_0_30px_-5px_rgba(20,241,149,0.3)]",
      className
    )}>
      {/* Background gradient animation */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#14F195]/10 to-[#9945FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon with glowing background */}
      <div className={`relative mb-4 ${isMobile ? 'inline-flex' : 'inline-block'}`}>
        <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#14F195] to-[#9945FF] opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
        <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#14F195]/10 to-[#9945FF]/10 border border-white/10">
          <Icon className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-[#14F195] transition-colors duration-500" 
                strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2 md:space-y-3 relative">
        <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 group-hover:from-[#14F195] group-hover:to-[#9945FF] transition-all duration-500">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
          {description}
        </p>
      </div>

      {/* Decorative corner gradients */}
      <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#14F195]/20 rounded-tl-2xl rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tl from-[#9945FF]/20 rounded-br-2xl rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};
