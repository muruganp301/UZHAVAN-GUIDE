import React from 'react';
import { Language } from '../types';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  currentLanguage: Language;
  onToggle: (lang: Language) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onToggle }) => {
  return (
    <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm p-1 rounded-full border border-white/30">
        <Languages className="w-5 h-5 text-white ml-2" />
      <button
        onClick={() => onToggle('ta')}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${
          currentLanguage === 'ta'
            ? 'bg-green-700 text-white shadow-md'
            : 'text-green-900 hover:bg-white/40'
        }`}
      >
        தமிழ்
      </button>
      <button
        onClick={() => onToggle('en')}
        className={`px-3 py-1 rounded-full text-sm font-bold transition-all ${
          currentLanguage === 'en'
            ? 'bg-green-700 text-white shadow-md'
            : 'text-green-900 hover:bg-white/40'
        }`}
      >
        ENG
      </button>
    </div>
  );
};