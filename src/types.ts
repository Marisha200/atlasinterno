export type ThemeId = 'mystic';

export interface PassportData {
  // Datos personales de viajero
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;

  // Cap 01: Sol, Luna, Ascendente
  sunSign: string;
  moonSign: string;
  ascendantSign: string;
  sunMoonQuestions: string;

  // Cap 02: Venus
  venusSign: string;
  venusHouse: string;
  venusTruePleasures: string;

  // Cap 03: Medio Cielo
  midheavenSign: string;
  midheavenConstruct: string;
  midheavenQuality: string;
  midheavenPurpose: string;

  // Cap 04: Algiz y límites
  algizLimit: string;

  // Cap 05: Consultar vs Trabajar con runa
  intentionRune: string;
  intentionRunePhrase: string;

  // Cap 06: Tarot y palos
  tarotCuriositySuit: string;
  tarotReflection: string;

  // Cap 07: Bitácora final y palabra clave
  coreTheme: string;
  chosenWord: string;
  chosenWordAction: string;
  personalNotes: string;

  lastUpdated: string;
}

export interface Chapter {
  id: number;
  number: string;
  title: string;
  subtitle?: string;
  readTime: string;
  themeKicker: string;
  quote?: {
    text: string;
    author: string;
  };
  curiosityFact?: {
    title: string;
    text: string;
  };
  contentSections: {
    heading?: string;
    paragraphs: string[];
    formula?: {
      title: string;
      items: { label: string; description: string }[];
      note?: string;
    };
    ritualSteps?: string[];
  }[];
  exercise: {
    title: string;
    description: string;
    fields: {
      key: keyof PassportData;
      label: string;
      placeholder: string;
      type?: 'text' | 'textarea' | 'select';
      options?: string[];
    }[];
  };
}

export interface RuneInfo {
  id: string;
  symbol: string;
  name: string;
  phonetic: string;
  keyword: string;
  description: string;
  intentionTheme: string;
}

export interface TarotSuitInfo {
  id: string;
  name: string;
  element: string;
  symbol: string;
  keywords: string;
  description: string;
  question: string;
}

export interface ZodiacSignInfo {
  name: string;
  symbol: string;
  element: 'Fuego' | 'Tierra' | 'Aire' | 'Agua';
  dates: string;
}
