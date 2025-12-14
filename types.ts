export type Language = 'en' | 'ta';

export interface Step {
  titleEn: string;
  titleTa: string;
  descriptionEn: string;
  descriptionTa: string;
  imageKeyword?: string;
}

export interface Vegetable {
  id: string;
  nameEn: string;
  nameTa: string;
  icon: string; // Emoji or Icon name
  color: string;
  steps: Step[];
}

export interface SearchState {
  query: string;
  isLoading: boolean;
  result: string | null;
  error: string | null;
}
