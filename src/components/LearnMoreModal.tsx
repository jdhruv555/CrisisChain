
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LearnMoreModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LearnMoreModal = ({ open, onOpenChange }: LearnMoreModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">About CrisisChain</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-left">
          <p className="text-lg">
            CrisisChain revolutionizes disaster response by combining blockchain technology with real-time crisis reporting. Our platform enables:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Instant geo-tagged disaster alerts as verified NFTs</li>
            <li>Community-driven verification system</li>
            <li>Direct connection to global aid organizations</li>
            <li>Transparent and immutable record of crisis events</li>
            <li>Faster mobilization of emergency resources</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};
