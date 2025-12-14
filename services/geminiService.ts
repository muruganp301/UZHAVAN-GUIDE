import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

interface ImageData {
  base64: string;
  mimeType: string;
}

export const askFarmingQuestion = async (query: string, language: Language, image?: ImageData): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const systemInstruction = language === 'ta' 
    ? "நீங்கள் தமிழ்நாடு விவசாயிகளுக்கு ஒரு நிபுணர் விவசாய ஆலோசகர். விவசாயம், பயிர் நோய்கள், மண் வளம் மற்றும் வானிலை பற்றிய கேள்விகளுக்கு தமிழில், விரிவான, தெளிவான மற்றும் நடைமுறைக்கேற்ற பதில்களை அளிக்கவும். பயிர் படங்கள் கொடுக்கப்பட்டால், அவற்றின் நோய் அல்லது குறைபாடுகளை கண்டறிந்து தீர்வு சொல்லவும்."
    : "You are an expert agricultural advisor for farmers in Tamil Nadu. Provide practical, detailed, and clear answers regarding farming, crop diseases, soil health, and weather in English. If crop images are provided, analyze them for diseases or deficiencies and suggest remedies.";

  try {
    // Construct content parts
    let contents;
    
    if (image) {
      // Multimodal request (Text + Image)
      contents = {
        parts: [
          { text: query },
          {
            inlineData: {
              mimeType: image.mimeType,
              data: image.base64
            }
          }
        ]
      };
    } else {
      // Text-only request
      contents = query;
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 5000,
      }
    });

    return response.text || (language === 'ta' ? "பதில் கிடைக்கவில்லை. மீண்டும் முயற்சிக்கவும்." : "No response available. Please try again.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error(language === 'ta' ? "தவறு ஏற்பட்டது. சிறிது நேரம் கழித்து முயற்சிக்கவும்." : "An error occurred. Please try again later.");
  }
};