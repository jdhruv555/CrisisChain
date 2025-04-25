
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=3",
  "https://i.pravatar.cc/150?img=4",
];

export const WaitlistCounter = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-3">
        {avatars.map((avatar, i) => (
          <Avatar key={i} className="w-8 h-8 border-2 border-background ring-2 ring-red-500/20">
            <AvatarImage src={avatar} alt={`Member ${i + 1}`} />
          </Avatar>
        ))}
      </div>
      <span className="text-sm text-gray-300">100+ joined</span>
    </div>
  );
};
