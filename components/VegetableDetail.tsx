import React from 'react';
import { Vegetable, Language } from '../types';
import { ArrowLeft, Droplets, Sun, Calendar, Sprout } from 'lucide-react';

interface VegetableDetailProps {
  vegetable: Vegetable;
  language: Language;
  onBack: () => void;
}

export const VegetableDetail: React.FC<VegetableDetailProps> = ({ vegetable, language, onBack }) => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto pb-20">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-green-800 hover:text-green-600 font-semibold bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        {language === 'ta' ? 'திரும்பச் செல்' : 'Back to Home'}
      </button>

      {/* Header Section */}
      <div className={`rounded-3xl p-8 mb-8 text-center relative overflow-hidden bg-white border-b-4 border-green-500 shadow-lg`}>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8">
          <div className="w-32 h-32 bg-stone-50 rounded-full flex items-center justify-center text-8xl shadow-inner border-4 border-white">
            {vegetable.icon}
          </div>
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-2">
              {language === 'ta' ? vegetable.nameTa : vegetable.nameEn}
            </h2>
            <p className="text-xl text-stone-500 font-medium">
              {language === 'ta' ? vegetable.nameEn : vegetable.nameTa}
            </p>
          </div>
        </div>

        {/* Quick Info Badges (Mock Data for visual) */}
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            <div className="flex items-center space-x-2 bg-blue-50 text-blue-800 px-3 py-1.5 rounded-lg text-sm font-medium">
                <Droplets className="w-4 h-4" />
                <span>{language === 'ta' ? 'மிதமான நீர்' : 'Moderate Water'}</span>
            </div>
            <div className="flex items-center space-x-2 bg-orange-50 text-orange-800 px-3 py-1.5 rounded-lg text-sm font-medium">
                <Sun className="w-4 h-4" />
                <span>{language === 'ta' ? 'முழு சூரிய ஒளி' : 'Full Sun'}</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-50 text-purple-800 px-3 py-1.5 rounded-lg text-sm font-medium">
                <Calendar className="w-4 h-4" />
                <span>{language === 'ta' ? '90-120 நாட்கள்' : '90-120 Days'}</span>
            </div>
        </div>
      </div>

      {/* Steps Timeline */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-stone-800 px-4">
          {language === 'ta' ? 'சாகுபடி முறைகள் (Step by Step)' : 'Cultivation Steps'}
        </h3>
        
        <div className="relative border-l-4 border-green-200 ml-4 md:ml-8 space-y-12 py-4">
          {vegetable.steps.map((step, index) => {
            // Generate a context-aware image URL using Pollinations.ai
            // Prompt example: "agriculture farming Tomato Seed Selection photorealistic"
            const imagePrompt = encodeURIComponent(`agriculture farming ${vegetable.nameEn} ${step.titleEn} photorealistic close up`);
            const imageUrl = `https://image.pollinations.ai/prompt/${imagePrompt}?width=800&height=400&nologo=true&seed=${index + vegetable.id.length}`;

            return (
              <div key={index} className="relative pl-8 md:pl-12 pr-4 group">
                {/* Timeline Node */}
                <div className="absolute -left-[14px] top-0 bg-green-100 border-4 border-green-500 w-6 h-6 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-sm z-10"></div>
                
                <div className="bg-white p-6 rounded-2xl shadow-md border border-stone-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">
                          {language === 'ta' ? `படி ${index + 1}` : `Step ${index + 1}`}
                      </span>
                      <h4 className="text-xl font-bold text-stone-900">
                          {language === 'ta' ? step.titleTa : step.titleEn}
                      </h4>
                    </div>
                    <Sprout className="w-6 h-6 text-green-300" />
                  </div>
                  
                  <p className="text-stone-600 leading-relaxed text-lg">
                    {language === 'ta' ? step.descriptionTa : step.descriptionEn}
                  </p>

                  {/* Context-aware Step Image */}
                  <div className="mt-4 rounded-xl overflow-hidden h-48 w-full bg-stone-100 relative">
                      <img 
                          src={imageUrl}
                          alt={`${step.titleEn} for ${vegetable.nameEn}`}
                          loading="lazy"
                          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};