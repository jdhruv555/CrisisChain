
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const avatars = [
  "https://i.pravatar.cc/150?u=1",
  "https://i.pravatar.cc/150?u=2",
  "https://i.pravatar.cc/150?u=3",
  "https://i.pravatar.cc/150?u=4",
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
            <AvatarImage src={avatar} alt={`Member ${i + 1}`} />
          </Avatar>
        ))}
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-purple-500/10 border-2 border-purple-500/20 text-white text-xs font-semibold">
          +99
        </div>
      </div>
    </div>
  );
};
