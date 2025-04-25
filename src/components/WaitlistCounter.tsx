
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const avatars = [
  "/lovable-uploads/006ea949-56ed-4b12-b6d9-169cec864ee6.png", // Cat with ETH cap
  "/lovable-uploads/19f9ad0b-7e03-4107-87c9-bb4ff12a649f.png", // Gorilla king
  "/lovable-uploads/656153e7-7f13-4b18-8750-a126d1c2f8ea.png", // Pixel robot
  "/lovable-uploads/8118fc44-ebdd-4c9c-94dd-00e03646f354.png", // Luchador
];

export const WaitlistCounter = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div 
      onClick={onClick}
      className="flex items-center gap-4 bg-black/20 rounded-full px-4 py-2 backdrop-blur-sm border border-white/10 cursor-pointer hover:bg-black/30 transition-colors"
    >
      <div className="flex -space-x-3">
        {avatars.map((avatar, i) => (
          <Avatar key={i} className="w-8 h-8 border-2 border-background/50 ring-2 ring-purple-500/20 transition-transform hover:scale-110">
            <AvatarImage src={avatar} alt={`NFT Member ${i + 1}`} />
          </Avatar>
        ))}
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-500/10 border-2 border-purple-500/20 text-white text-xs font-semibold">
          100+
        </div>
      </div>
    </div>
  );
};

