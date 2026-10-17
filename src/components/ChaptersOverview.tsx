import React from 'react';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { CHAPTERS } from '../data/content';
import { ThemeId } from '../types';

interface ChaptersOverviewProps {
  onSelectChapterIndex: (index: number) => void;
  currentTheme?: ThemeId;
}

export const ChaptersOverview: React.FC<ChaptersOverviewProps> = ({
  onSelectChapterIndex,
}) => {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#e2c074]">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Índice Editorial Completo</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#f3ede2]">
          Los 7 Portales de Exploración
        </h2>
        <p className="font-serif-body text-base text-stone-300">
          Cada capítulo profundiza en un símbolo y te propone una pregunta para tu Pasaporte Energético.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {CHAPTERS.map((ch, idx) => (
          <div
            key={ch.id}
            onClick={() => onSelectChapterIndex(idx)}
            className="p-6 rounded-2xl border border-[#e2c074]/20 bg-[#121826]/80 hover:border-[#e2c074]/50 hover:bg-[#182033] cursor-pointer transition-all flex flex-col justify-between group shadow-sm"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                <span className="font-bold text-[#e2c074]">Capítulo {ch.number}</span>
                <span>{ch.readTime}</span>
              </div>

              <div className="text-xs font-semibold uppercase tracking-wider text-[#a7b3c6]">
                {ch.themeKicker}
              </div>

              <h3 className="font-display text-lg font-bold text-[#f3ede2] group-hover:text-[#e2c074] transition-colors">
                {ch.title}
              </h3>

              {ch.quote && (
                <p className="font-serif-body text-xs italic text-[#e5ded0]/80 pt-1">
                  {ch.quote.text} — {ch.quote.author}
                </p>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-[#e2c074]/15 flex items-center justify-between text-xs font-medium text-stone-300">
              <span className="group-hover:text-[#f3ede2]">
                {ch.exercise.title}
              </span>
              <ArrowRight className="w-4 h-4 text-[#e2c074] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
