import React, { useState, useRef } from 'react';
import { Search, Loader2, Sprout, Camera, X, Image as ImageIcon, Mic, MicOff } from 'lucide-react';
import { Language } from '../types';

interface SearchBarProps {
  language: Language;
  onSearch: (query: string, image?: { base64: string, mimeType: string }) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ language, onSearch, isLoading }) => {
  const [query, setQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [imageData, setImageData] = useState<{ base64: string, mimeType: string } | null>(null);
  const [isListening, setIsListening] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null); // Use ref to persist recognition instance if needed, though strictly local is usually fine.

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() || imageData) {
      // If user sends only image, add a default prompt if query is empty
      const finalQuery = query.trim() || (language === 'ta' ? 'இந்த படத்தை விவரிக்கவும்.' : 'Describe this image.');
      onSearch(finalQuery, imageData || undefined);
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setSelectedImage(result);
        
        // Extract base64 data (remove "data:image/jpeg;base64," prefix)
        const base64Data = result.split(',')[1];
        setImageData({
          base64: base64Data,
          mimeType: file.type
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    setImageData(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const startListening = () => {
    // If already listening, stop it
    if (isListening) {
      stopListening();
      return;
    }

    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognitionRef.current = recognition;
      
      recognition.lang = language === 'ta' ? 'ta-IN' : 'en-US';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
        
        let errorMessage = '';
        if (event.error === 'network') {
           errorMessage = language === 'ta' 
             ? 'இணைய இணைப்பு பிழை. இணையத்தை சரிபார்க்கவும்.' 
             : 'Network error. Please check your internet connection.';
        } else if (event.error === 'not-allowed') {
           errorMessage = language === 'ta' 
             ? 'மைக்ரோஃபோன் அனுமதி மறுக்கப்பட்டது.' 
             : 'Microphone access denied.';
        } else if (event.error === 'no-speech') {
           // No speech detected, just ignore or show mild toast
           return; 
        } else {
           errorMessage = language === 'ta' 
             ? 'குரல் தேடலில் பிழை ஏற்பட்டது.' 
             : 'Error in voice search.';
        }
        
        if (errorMessage) alert(errorMessage);
      };

      recognition.onend = () => {
        setIsListening(false);
        recognitionRef.current = null;
      };

      try {
        recognition.start();
      } catch (e) {
        console.error("Failed to start recognition", e);
        setIsListening(false);
      }
    } else {
      alert(language === 'ta' ? 'உங்கள் உலாவியில் குரல் தேடல் வசதி இல்லை.' : 'Voice search is not supported in this browser.');
    }
  };

  const placeholder = language === 'ta' 
    ? 'கேள்வி கேட்கவும்...' 
    : 'Ask a question...';
    
  return (
    <div className="w-full max-w-2xl mx-auto mt-6 px-4">
      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleImageSelect}
      />

      {/* Image Preview Area */}
      {selectedImage && (
        <div className="mb-3 relative inline-block animate-fade-in">
          <img 
            src={selectedImage} 
            alt="Selected" 
            className="h-20 w-20 object-cover rounded-xl border-2 border-green-500 shadow-md"
          />
          <button 
            onClick={clearImage}
            className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-md hover:bg-red-600 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Sprout className="h-5 w-5 text-green-600 group-focus-within:text-green-700 transition-colors" />
        </div>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={isListening ? (language === 'ta' ? 'பேசவும்...' : 'Speak now...') : placeholder}
          className={`block w-full pl-12 pr-40 py-4 bg-white border-2 rounded-2xl shadow-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-4 transition-all text-lg
            ${isListening 
              ? 'border-red-400 focus:border-red-500 focus:ring-red-500/10 animate-pulse placeholder-red-500' 
              : 'border-green-100 focus:border-green-500 focus:ring-green-500/10'
            }`}
        />

        <div className="absolute right-2 top-2 bottom-2 flex items-center space-x-1">
          {/* Voice Search Button */}
          <button
            type="button"
            onClick={startListening}
            className={`p-2.5 rounded-xl transition-all duration-300 ${
              isListening 
                ? 'bg-red-500 text-white shadow-lg scale-110 animate-pulse' 
                : 'text-stone-400 hover:text-green-600 hover:bg-green-50'
            }`}
            title={language === 'ta' ? "குரல் தேடல்" : "Voice Search"}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          {/* Camera/Gallery Button */}
          <button
            type="button"
            onClick={triggerFileInput}
            className="p-2.5 text-stone-400 hover:text-green-600 hover:bg-green-50 rounded-xl transition-colors"
            title={language === 'ta' ? "புகைப்படம் சேர்க்கவும்" : "Add Photo"}
          >
            <Camera className="w-5 h-5" />
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || (!query.trim() && !imageData)}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl font-medium flex items-center space-x-2 hover:from-green-700 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md h-full"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};