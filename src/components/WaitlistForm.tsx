import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CircleDollarSign } from "lucide-react";
import { WaitlistCounter } from "./WaitlistCounter";

export const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showCounter, setShowCounter] = useState(false);

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
      setShowCounter(true);
    } catch (error) {
      console.error("Error:", error);
      toast.error("This email has already joined the waitlist.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showCounter) {
    return <WaitlistCounter />;
  }

  if (!showForm) {
    return (
      <Button 
        onClick={() => setShowForm(true)}
        className="bg-gradient-to-r from-[#14F195] to-[#9945FF] text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
      >
        Join Waitlist
      </Button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 items-center bg-black/20 rounded-full p-1.5 backdrop-blur-sm border border-white/10">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 min-w-[240px] glass-gradient text-white placeholder:text-gray-400 border-0 rounded-full focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="waitlist-gradient text-white font-medium rounded-full hover:opacity-90 transition-opacity"
      >
        <CircleDollarSign className="mr-2" size={16} />
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
};
