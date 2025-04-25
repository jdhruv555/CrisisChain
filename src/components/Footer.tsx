
import React from 'react';
import { Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full py-4 bg-black/30 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 flex items-center justify-center text-gray-300">
        <Globe className="mr-2 text-red-600" size={20} />
        <p className="text-sm">
          Built for the World • Connecting Communities in Crisis
        </p>
      </div>
    </footer>
  );
};
