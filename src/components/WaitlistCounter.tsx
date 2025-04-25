
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const avatars = [
  "https://i.pravatar.cc/150?u=1",
  "https://i.pravatar.cc/150?u=2",
  "https://i.pravatar.cc/150?u=3",
  "https://i.pravatar.cc/150?u=4",
];

export const WaitlistCounter = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        {avatars.map((avatar, i) => (
          <Avatar key={i} className="w-10 h-10 border-2 border-background ring-2 ring-purple-500/20 transition-transform hover:scale-110">
            <AvatarImage src={avatar} alt={`Member ${i + 1}`} />
          </Avatar>
        ))}
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-500/10 border-2 border-purple-500/20 text-white font-semibold text-sm">
          +99
        </div>
      </div>
      <div className="flex flex-col items-start">
        <span className="text-lg font-semibold text-white">Join our</span>
        <span className="text-sm text-purple-300">growing waitlist</span>
      </div>
    </div>
  );
};
