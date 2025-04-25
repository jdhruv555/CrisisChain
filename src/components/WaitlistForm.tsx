
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CircleDollarSign } from "lucide-react";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      if (error) throw error;

      toast.success("Thank you for joining our waitlist!");
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      toast.error("This email has already joined the waitlist.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="max-w-[200px] glass-gradient text-white placeholder:text-gray-400"
      />
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="waitlist-gradient text-white font-semibold hover:opacity-90 transition-opacity"
      >
        <CircleDollarSign className="mr-2" size={18} />
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
};
