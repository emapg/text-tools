import React from 'react';
import { Wand2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 rounded-lg">
              <Wand2 className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Text Wizard</h1>
              <p className="text-blue-100">Transform your text with powerful tools</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}