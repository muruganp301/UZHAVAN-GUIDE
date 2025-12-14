import React, { useState, useRef } from 'react';
import { Vegetable, Language, SearchState } from './types';
import { VEGETABLES } from './constants';
import { askFarmingQuestion } from './services/geminiService';
import { LanguageToggle } from './components/LanguageToggle';
import { SearchBar } from './components/SearchBar';
import { VegetableCard } from './components/VegetableCard';
import { VegetableDetail } from './components/VegetableDetail';
import { SearchResultView } from './components/SearchResultView';
import { ScrollToTop } from './components/ScrollToTop';
import { Sprout, Leaf } from 'lucide-react';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ta');
  const [selectedVegetable, setSelectedVegetable] = useState<Vegetable | null>(null);
  
  const [searchState, setSearchState] = useState<SearchState>({
    query: '',
    isLoading: false,
    result: null,
    error: null,
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleSearch = async (query: string, image?: { base64: string, mimeType: string }) => {
    setSearchState({ query, isLoading: true, result: null, error: null });
    // Reset scroll when searching to show result at top
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    try {
      const answer = await askFarmingQuestion(query, language, image);
      setSearchState(prev => ({ ...prev, isLoading: false, result: answer }));
    } catch (error) {
      setSearchState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error: language === 'ta' ? 'பிழை ஏற்பட்டது.' : 'An error occurred.' 
      }));
    }
  };

  const clearSearch = () => {
    setSearchState({ query: '', isLoading: false, result: null, error: null });
  };

  const isSearching = searchState.isLoading || searchState.result;

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-stone-200">
      {/* Mobile Frame constrained to 390px */}
      <div className="w-full max-w-[390px] h-[100dvh] bg-[#FDFBF7] shadow-2xl relative overflow-hidden flex flex-col font-sans">
        
        {/* Scrolling Container */}
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto scroll-smooth no-scrollbar relative">
          
          {/* Header Section */}
          <header className="sticky top-0 z-40 bg-gradient-to-b from-green-800 to-green-700 text-white shadow-lg rounded-b-[2rem]">
            <div className="px-4 py-5">
              <div className="flex items-center justify-between mb-4">
                
                {/* Left: Branding */}
                <div className="flex items-center space-x-3">
                  <div className="bg-white/10 p-2 rounded-xl backdrop-blur-md border border-white/20">
                     <Sprout className="w-6 h-6 text-green-300" />
                  </div>
                  <div>
                      <h1 className="text-lg font-bold tracking-tight leading-tight">Uzhavan Guide</h1>
                  </div>
                </div>

                {/* Right: Language Toggle */}
                <LanguageToggle currentLanguage={language} onToggle={setLanguage} />
              </div>

              {/* Center: Hero Text & Search */}
              <div className="text-center pb-2">
                 {!isSearching && (
                    <>
                        <h1 className="text-2xl font-extrabold mb-1 drop-shadow-md">
                            {language === 'ta' ? 'விவசாய வழிகாட்டி' : 'Farming Guide'}
                        </h1>
                        <p className="text-green-100 text-xs font-medium opacity-90 mb-4">
                            {language === 'ta' 
                                ? 'விவசாய சந்தேகங்களுக்கு AI உதவி' 
                                : 'AI assistance for better yield'}
                        </p>
                    </>
                 )}
                 
                 <SearchBar 
                    language={language} 
                    onSearch={handleSearch} 
                    isLoading={searchState.isLoading} 
                 />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="px-4 py-6">
            
            {/* View Switcher: Search Result -> Detail -> List */}
            {isSearching ? (
                <SearchResultView 
                   result={searchState.result}
                   isLoading={searchState.isLoading}
                   onBack={clearSearch}
                   language={language}
                />
            ) : selectedVegetable ? (
              <VegetableDetail 
                vegetable={selectedVegetable} 
                language={language} 
                onBack={() => setSelectedVegetable(null)} 
              />
            ) : (
              <div className="animate-fade-in">
                 <div className="flex items-center space-x-2 mb-6 px-1">
                    <Leaf className="w-5 h-5 text-green-600" />
                    <h2 className="text-xl font-bold text-stone-800">
                        {language === 'ta' ? 'பயிர்கள் (Crops)' : 'Crops'}
                    </h2>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                    {VEGETABLES.map((veg) => (
                      <VegetableCard 
                        key={veg.id} 
                        vegetable={veg} 
                        language={language} 
                        onClick={setSelectedVegetable} 
                      />
                    ))}
                 </div>
              </div>
            )}
          </main>

          {/* Footer */}
          {!isSearching && (
            <footer className="bg-stone-100 py-6 mt-6 border-t border-stone-200">
                <div className="px-4 text-center text-stone-500 text-xs">
                <p>© 2024 Uzhavan Guide.</p>
                <p className="mt-1">{language === 'ta' ? 'விவசாயிகளுக்காக உருவாக்கப்பட்டது.' : 'Built for Farmers.'}</p>
                </div>
            </footer>
          )}
          
        </div>

        {/* Scroll to Top Button (Absolute inside frame) */}
        <ScrollToTop containerRef={scrollContainerRef} />

      </div>
      
      <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;