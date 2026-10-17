import { useState, useEffect, useCallback } from 'react';
import { PassportData } from '../types';

const STORAGE_KEY = 'atlas_pasaporte_mundos_interiores_v1';

export const INITIAL_PASSPORT_DATA: PassportData = {
  name: '',
  birthDate: '',
  birthTime: '',
  birthPlace: '',
  sunSign: '',
  moonSign: '',
  ascendantSign: '',
  sunMoonQuestions: '',
  venusSign: '',
  venusHouse: '',
  venusTruePleasures: '',
  midheavenSign: '',
  midheavenConstruct: '',
  midheavenQuality: '',
  midheavenPurpose: '',
  algizLimit: '',
  intentionRune: 'ᛉ Algiz · Protección y límites sagrados',
  intentionRunePhrase: 'Hoy elijo cuidar mi espacio y respetar mis límites.',
  tarotCuriositySuit: 'Copas (Agua · Afectos y emociones)',
  tarotReflection: '',
  coreTheme: '',
  chosenWord: 'Calma',
  chosenWordAction: '',
  personalNotes: '',
  lastUpdated: new Date().toISOString(),
};

export function usePassportStorage() {
  const [data, setData] = useState<PassportData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...INITIAL_PASSPORT_DATA, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.warn('Error reading passport from localStorage', e);
    }
    return INITIAL_PASSPORT_DATA;
  });

  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  // Save to localStorage whenever data changes
  useEffect(() => {
    setSaveStatus('saving');
    const timer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        setSaveStatus('saved');
      } catch (e) {
        console.error('Error saving to localStorage', e);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [data]);

  const updateField = useCallback(<K extends keyof PassportData>(field: K, value: PassportData[K]) => {
    setData(prev => ({
      ...prev,
      [field]: value,
      lastUpdated: new Date().toISOString(),
    }));
  }, []);

  const updateMultipleFields = useCallback((fields: Partial<PassportData>) => {
    setData(prev => ({
      ...prev,
      ...fields,
      lastUpdated: new Date().toISOString(),
    }));
  }, []);

  const resetData = useCallback(() => {
    if (window.confirm('¿Deseás reiniciar todas las respuestas del pasaporte? Esta acción no se puede deshacer.')) {
      setData({ ...INITIAL_PASSPORT_DATA, lastUpdated: new Date().toISOString() });
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {
        console.error('Error clearing localStorage', e);
      }
    }
  }, []);

  const loadExampleData = useCallback(() => {
    setData({
      name: 'Lucía Fernández',
      birthDate: '1992-05-14',
      birthTime: '08:35',
      birthPlace: 'Buenos Aires, Argentina',
      sunSign: 'Tauro',
      moonSign: 'Escorpio',
      ascendantSign: 'Cáncer',
      sunMoonQuestions: 'Me doy cuenta de que mi Luna en Escorpio siente todo con mucha intensidad y necesita procesar en soledad antes de hablar. Mi Ascendente en Cáncer busca crear espacios seguros para los demás.',
      venusSign: 'Géminis',
      venusHouse: 'Casa XI (Comunidad, amistades e ideales colectivos)',
      venusTruePleasures: 'El aroma a café recién molido a la mañana, escuchar charlas largas con amigas sobre temas profundos, el sonido de la lluvia contra la ventana.',
      midheavenSign: 'Piscis',
      midheavenConstruct: 'Un espacio de acompañamiento terapéutico y creativo que combine arte y meditación.',
      midheavenQuality: 'Empatía y capacidad de escucha profunda sin juzgar.',
      midheavenPurpose: 'Facilitar círculos donde las personas se sientan habilitadas a ser vulnerables.',
      algizLimit: 'Desactivar las notificaciones de trabajo a partir de las 20:00 y no responder correos el fin de semana.',
      intentionRune: 'ᛉ Algiz · Protección y límites sagrados',
      intentionRunePhrase: 'Hoy elijo cuidar mi espacio sagrado y honrar mis ritmos internos.',
      tarotCuriositySuit: 'Copas (Agua · Afectos y emociones)',
      tarotReflection: 'Siento que el reino de las Copas me invita a no endurecerme ante los momentos difíciles y recordar la sensibilidad como una fortaleza.',
      coreTheme: 'Integrar la astrología y el Tarot en mi vida diaria como espejos de autoconocimiento.',
      chosenWord: 'Claridad',
      chosenWordAction: 'Escribir 10 minutos cada mañana en mi cuaderno antes de mirar cualquier pantalla.',
      personalNotes: '¿Cómo relacionar el tránsito lunar con los momentos de consulta de runas?',
      lastUpdated: new Date().toISOString(),
    });
  }, []);

  // Completion calculation
  const completedCount = [
    data.name,
    data.sunSign,
    data.moonSign,
    data.ascendantSign,
    data.venusTruePleasures,
    data.midheavenConstruct,
    data.algizLimit,
    data.intentionRune,
    data.tarotCuriositySuit,
    data.chosenWord,
  ].filter(Boolean).length;

  const totalKeyFields = 10;
  const progressPercent = Math.min(100, Math.round((completedCount / totalKeyFields) * 100));

  return {
    data,
    updateField,
    updateMultipleFields,
    resetData,
    loadExampleData,
    saveStatus,
    progressPercent,
    completedCount,
    totalKeyFields,
  };
}
