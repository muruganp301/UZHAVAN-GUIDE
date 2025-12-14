import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowLeft, Share2, Copy, Volume2, Square } from 'lucide-react';

interface SearchResultViewProps {
  result: string | null;
  isLoading: boolean;
  onBack: () => void;
  language: 'en' | 'ta';
}

export const SearchResultView: React.FC<SearchResultViewProps> = ({ result, isLoading, onBack, language }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const toggleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      if (!result) return;
      
      const utterance = new SpeechSynthesisUtterance(result);
      utterance.lang = language === 'ta' ? 'ta-IN' : 'en-US';
      utterance.rate = 0.9; // Slightly slower for better clarity
      
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
    }
  };

  return (
    <div className="animate-fade-in min-h-[60vh]">
       {/* Navigation Header */}
       <div className="flex justify-between items-center mb-6">
          <button 
            onClick={onBack} 
            className="flex items-center text-stone-600 hover:text-green-700 transition-colors bg-white px-3 py-1.5 rounded-full shadow-sm border border-stone-200"
          >
             <ArrowLeft className="w-4 h-4 mr-2" />
             <span className="text-sm font-semibold">{language === 'ta' ? 'பின்செல்க' : 'Back'}</span>
          </button>
          
          <div className="flex items-center text-green-700 font-bold bg-green-100/50 px-3 py-1.5 rounded-full text-xs border border-green-200">
             <Sparkles className="w-3 h-3 mr-2 text-yellow-500 fill-yellow-500" />
             {language === 'ta' ? 'AI பதில்' : 'AI Answer'}
          </div>
       </div>

       {/* Main Content Card */}
       <div className="bg-white rounded-3xl p-6 shadow-md border border-stone-100 relative overflow-hidden min-h-[400px]">
           {/* Decorative bg element */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-yellow-50 rounded-bl-full opacity-60 pointer-events-none"></div>

           {isLoading ? (
              <div className="space-y-6 animate-pulse mt-4">
                  <div className="flex items-center space-x-3 mb-8">
                     <div className="w-10 h-10 bg-stone-200 rounded-full"></div>
                     <div className="h-4 bg-stone-200 rounded w-1/3"></div>
                  </div>
                  <div className="h-3 bg-stone-200 rounded w-full"></div>
                  <div className="h-3 bg-stone-200 rounded w-full"></div>
                  <div className="h-3 bg-stone-200 rounded w-5/6"></div>
                  <div className="h-3 bg-stone-200 rounded w-4/5"></div>
              </div>
           ) : (
              <div className="relative z-10">
                 {/* Text-to-Speech Button - Top Left */}
                 <div className="flex items-center justify-between mb-4">
                    <button 
                        onClick={toggleSpeech}
                        className={`flex items-center space-x-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                            isSpeaking 
                            ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                            : 'bg-stone-100 text-stone-600 hover:bg-green-100 hover:text-green-700'
                        }`}
                        title={language === 'ta' ? 'வாசிக்க' : 'Read Aloud'}
                    >
                        {isSpeaking ? (
                            <>
                                <Square className="w-4 h-4 fill-current" />
                                <span>{language === 'ta' ? 'நிறுத்து' : 'Stop'}</span>
                            </>
                        ) : (
                            <>
                                <Volume2 className="w-4 h-4" />
                                <span>{language === 'ta' ? 'கேட்க' : 'Listen'}</span>
                            </>
                        )}
                    </button>
                 </div>

                 <div className="prose prose-stone prose-sm md:prose-base max-w-none text-stone-700 leading-relaxed whitespace-pre-line">
                    {result}
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-stone-100 flex justify-end space-x-3">
                    <button 
                        className="text-stone-400 hover:text-green-600 transition-colors"
                        onClick={copyToClipboard}
                        title="Copy"
                    >
                        <Copy className="w-5 h-5" />
                    </button>
                    <button className="text-stone-400 hover:text-blue-600 transition-colors" title="Share">
                        <Share2 className="w-5 h-5" />
                    </button>
                 </div>
              </div>
           )}
       </div>
    </div>
  );
};