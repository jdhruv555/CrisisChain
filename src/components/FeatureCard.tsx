
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
      "glass p-8 rounded-xl transition-all duration-500",
      "hover:bg-white/10 group",
      "border border-white/10 hover:border-white/20",
      className
    )}>
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
        <Icon className="relative w-12 h-12 mb-4 text-red-500 group-hover:scale-110 transition-transform duration-500" />
      </div>
      <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-red-400 transition-colors">{title}</h3>
      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors">{description}</p>
    </div>
  );
};
