import React from 'react';
import { Compass, Check, Sparkles } from 'lucide-react';
import { TAROT_SUITS, IMAGES } from '../data/content';
import { PassportData, ThemeId } from '../types';

interface TarotExplorerProps {
  passportData: PassportData;
  onUpdateField: <K extends keyof PassportData>(field: K, value: PassportData[K]) => void;
  currentTheme?: ThemeId;
}

export const TarotExplorer: React.FC<TarotExplorerProps> = ({
  passportData,
  onUpdateField,
}) => {
  return (
    <section className="max-w-4xl mx-auto space-y-8 p-6 sm:p-10 rounded-2xl border border-[#e2c074]/25 bg-[#121826]/80 shadow-md">
      {/* Visual illustration of Tarot & Runes */}
      <div className="relative rounded-xl overflow-hidden aspect-[16/7] border border-[#e2c074]/25 max-h-[300px]">
        <img
          src={IMAGES.tarotRunes}
          alt="Tarot de los cuatro elementos y runas nórdicas"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6">
          <div className="text-xs uppercase tracking-widest font-mono text-[#e2c074] mb-1">
            Capítulo 06 · Cuatro Palos, Cuatro Conversaciones
          </div>
          <h2 className="font-display text-xl sm:text-3xl font-bold text-[#f3ede2]">
            El Terreno Simbólico de los Elementos
          </h2>
        </div>
      </div>

      {/* Four elemental suits interactive selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {TAROT_SUITS.map((suit) => {
          const isSelected = passportData.tarotCuriositySuit.includes(suit.name);

          return (
            <div
              key={suit.id}
              onClick={() => onUpdateField('tarotCuriositySuit', `${suit.name} (${suit.element} · ${suit.keywords})`)}
              className={`p-5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-2 border-[#e2c074] bg-[#182033] shadow-md scale-[1.01]'
                  : 'border-[#e2c074]/20 hover:border-[#e2c074]/50 bg-[#141b2d]/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{suit.symbol.split(' ')[0]}</span>
                    <span className="font-display text-lg font-bold text-[#f3ede2]">{suit.name}</span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-[#e2c074]/20 text-[#e2c074] bg-[#0a0d14]/50">
                    Elemento {suit.element}
                  </span>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wide text-[#a7b3c6] mb-2">
                  {suit.keywords}
                </div>

                <p className="font-serif-body text-sm leading-relaxed text-stone-200 mb-4">
                  {suit.description}
                </p>

                <div className="p-3 rounded-lg border border-[#e2c074]/15 bg-[#0a0d14]/50 text-xs italic font-serif-body text-[#e2c074]">
                  «{suit.question}»
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e2c074]/15 flex items-center justify-between text-xs">
                <span className="text-stone-400">
                  {isSelected ? '✓ Palo de exploración seleccionado' : 'Hacé clic para elegir'}
                </span>
                {isSelected && <Check className="w-4 h-4 text-[#e2c074]" />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Reflection Input */}
      <div className="p-6 rounded-xl border border-[#e2c074]/25 bg-[#141b2d]/70 space-y-3">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#e2c074]">
          Tu lectura atenta: ¿Qué emoción, pregunta o detalle despierta este palo en vos hoy?
        </label>
        <textarea
          rows={3}
          value={passportData.tarotReflection}
          onChange={(e) => onUpdateField('tarotReflection', e.target.value)}
          placeholder="Escribí lo que observás en tu mundo interior en relación a este elemento..."
          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#e2c074]/25 bg-[#182033] text-[#f3ede2] placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-[#e2c074] resize-y"
        />
        <p className="text-xs text-stone-400">
          «No hay que adivinar una respuesta: estamos practicando una lectura atenta.»
        </p>
      </div>
    </section>
  );
};
