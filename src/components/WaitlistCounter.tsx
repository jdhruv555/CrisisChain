
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
      <div className="flex -space-x-4">
        {avatars.map((avatar, i) => (
          <Avatar key={i} className="w-12 h-12 border-2 border-background ring-2 ring-red-500/20 transition-transform hover:scale-110">
            <AvatarImage src={avatar} alt={`Member ${i + 1}`} />
          </Avatar>
        ))}
      </div>
      <div className="flex flex-col items-start">
        <span className="text-xl font-semibold text-white">100+</span>
        <span className="text-sm text-gray-300">Already joined</span>
      </div>
    </div>
  );
};
