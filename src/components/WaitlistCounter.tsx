
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const avatars = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

export const WaitlistCounter = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex -space-x-3">
        {avatars.map((avatar, i) => (
          <Avatar key={i} className="w-8 h-8 border-2 border-background">
            <AvatarImage src={avatar} alt={`Member ${i + 1}`} />
          </Avatar>
        ))}
      </div>
      <span className="text-sm text-muted-foreground">100+ joined</span>
    </div>
  );
};
