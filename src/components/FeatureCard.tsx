
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <div className={cn(
      "glass p-8 rounded-xl transition-all duration-500 relative overflow-hidden",
      "hover:bg-black/40 group cursor-pointer",
      "border border-white/10 hover:border-white/20",
      className
    )}>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#14F195]/5 to-[#9945FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon Container */}
      <div className="relative mb-6">
        <div className="absolute -inset-2 bg-gradient-to-r from-[#14F195] to-[#9945FF] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" />
        <div className="relative bg-black/40 rounded-lg p-4 backdrop-blur-sm">
          <Icon className="w-12 h-12 text-red-500 group-hover:scale-110 transition-transform duration-500" />
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors relative">
        {title}
      </h3>
      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors relative">
        {description}
      </p>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[#14F195]/30 rounded-xl transition-colors duration-500" />
    </div>
  );
};
