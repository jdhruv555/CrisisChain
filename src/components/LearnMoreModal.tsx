
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Shield, Users, Connection, FileCheck, Rocket } from "lucide-react";

interface LearnMoreModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LearnMoreModal = ({ open, onOpenChange }: LearnMoreModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl bg-gradient-to-b from-black/95 to-purple-950/90 border border-white/10 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            About CrisisChain
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8 text-left">
          <p className="text-xl text-gray-200 leading-relaxed">
            CrisisChain is revolutionizing disaster response through the fusion of blockchain technology 
            and real-time crisis reporting. We're building a future where emergency response is 
            immediate, transparent, and globally coordinated.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="glass p-6 rounded-xl space-y-3 hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <Shield className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">Verified Disaster Alerts</h3>
              </div>
              <p className="text-gray-300">Transform critical incident reports into geo-tagged NFTs, ensuring authenticity and immediate response.</p>
            </div>

            <div className="glass p-6 rounded-xl space-y-3 hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <Users className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">Community Verification</h3>
              </div>
              <p className="text-gray-300">Leverage collective intelligence through our decentralized verification system for accurate crisis assessment.</p>
            </div>

            <div className="glass p-6 rounded-xl space-y-3 hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <Connection className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">Global Aid Network</h3>
              </div>
              <p className="text-gray-300">Connect directly with international aid organizations for swift and coordinated emergency response.</p>
            </div>

            <div className="glass p-6 rounded-xl space-y-3 hover:bg-white/5 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <FileCheck className="w-6 h-6 text-purple-300" />
                </div>
                <h3 className="text-lg font-semibold text-white">Immutable Records</h3>
              </div>
              <p className="text-gray-300">Maintain permanent, transparent records of all crisis events and response efforts on the blockchain.</p>
            </div>
          </div>

          <div className="glass p-6 rounded-xl mt-6 bg-gradient-to-r from-purple-500/10 to-transparent">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <Rocket className="w-6 h-6 text-purple-300" />
              </div>
              <p className="text-lg text-white"><span className="font-semibold">Our Mission:</span> To accelerate emergency response times and save lives through decentralized crisis management.</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
