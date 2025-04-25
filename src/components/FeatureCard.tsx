
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/10">
      <Icon className="w-12 h-12 mb-4 text-red-500" />
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};
