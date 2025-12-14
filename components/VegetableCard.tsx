import React from 'react';
import { Vegetable, Language } from '../types';
import { ArrowRight } from 'lucide-react';

interface VegetableCardProps {
  vegetable: Vegetable;
  language: Language;
  onClick: (veg: Vegetable) => void;
}

export const VegetableCard: React.FC<VegetableCardProps> = ({ vegetable, language, onClick }) => {
  return (
    <button
      onClick={() => onClick(vegetable)}
      className={`group relative flex flex-col items-center justify-between p-6 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 ${vegetable.color} bg-white`}
    >
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="w-5 h-5 text-stone-400" />
      </div>
      
      <div className="w-24 h-24 flex items-center justify-center text-7xl mb-4 drop-shadow-sm transform group-hover:rotate-12 transition-transform duration-300">
        {vegetable.icon}
      </div>
      
      <div className="text-center w-full">
        <h3 className="text-xl font-bold mb-1 text-stone-800">
          {language === 'ta' ? vegetable.nameTa : vegetable.nameEn}
        </h3>
        <p className="text-xs font-medium opacity-60 uppercase tracking-wider text-stone-600">
          {language === 'ta' ? vegetable.nameEn : vegetable.nameTa}
        </p>
      </div>
      
      <div className="mt-4 w-full bg-stone-100 rounded-full h-1.5 overflow-hidden">
        <div className="bg-current opacity-20 h-full w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </button>
  );
};