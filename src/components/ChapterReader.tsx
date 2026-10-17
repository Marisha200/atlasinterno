import React from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Bookmark, Sparkles, Award } from 'lucide-react';
import { CHAPTERS, RUNES, ZODIAC_SIGNS, ASTROLOGICAL_HOUSES } from '../data/content';
import { Chapter, PassportData, ThemeId } from '../types';

interface ChapterReaderProps {
  currentChapterIndex: number;
  onSelectChapterIndex: (index: number) => void;
  passportData: PassportData;
  onUpdateField: <K extends keyof PassportData>(field: K, value: PassportData[K]) => void;
  onGoToPassport: () => void;
  currentTheme?: ThemeId;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  currentChapterIndex,
  onSelectChapterIndex,
  passportData,
  onUpdateField,
  onGoToPassport,
}) => {
  const chapter = CHAPTERS[currentChapterIndex] || CHAPTERS[0];

  const hasNext = currentChapterIndex < CHAPTERS.length - 1;
  const hasPrev = currentChapterIndex > 0;

  return (
    <article className="max-w-4xl mx-auto space-y-10">
      {/* Chapter Rail Selector */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-[#e2c074]/20 scrollbar-none">
        {CHAPTERS.map((c, idx) => {
          const isActive = idx === currentChapterIndex;
          return (
            <button
              key={c.id}
              onClick={() => onSelectChapterIndex(idx)}
              className={`px-3 py-1.5 text-xs font-mono rounded cursor-pointer whitespace-nowrap transition-all flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#e2c074] text-[#0a0d14] font-bold shadow-md'
                  : 'bg-[#141b2d]/60 text-stone-300 hover:bg-[#141b2d] hover:text-[#f3ede2] border border-[#e2c074]/15'
              }`}
            >
              <span>{c.number}</span>
              <span className="hidden sm:inline font-sans text-xs">{c.title.split(':')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Chapter Editorial Header */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#e2c074]">
          <span>Capítulo {chapter.number}</span>
          <span aria-hidden="true">·</span>
          <span>{chapter.themeKicker}</span>
          <span aria-hidden="true">·</span>
          <span className="text-stone-400">{chapter.readTime}</span>
        </div>

        <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight leading-snug text-[#f3ede2]">
          {chapter.title}
        </h2>
      </div>

      {/* Main Prose Content */}
      <div className="prose max-w-prose space-y-6 text-base sm:text-lg leading-relaxed font-serif-body text-[#e5ded0]">
        {chapter.contentSections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-4">
            {section.heading && (
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#f3ede2] mt-6 mb-2 tracking-wide font-sans">
                {section.heading}
              </h3>
            )}

            {section.paragraphs.map((p, pIdx) => {
              // Apply drop cap to the very first paragraph of the chapter
              const isFirstParagraph = sIdx === 0 && pIdx === 0;
              return (
                <p
                  key={pIdx}
                  className={
                    isFirstParagraph
                      ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-[#e2c074] text-[#f3ede2]'
                      : 'text-[#e5ded0]'
                  }
                >
                  {p}
                </p>
              );
            })}

            {/* Formula Block (Chapter 01) */}
            {section.formula && (
              <div className="my-6 p-5 rounded-xl border border-[#e2c074]/25 bg-[#121826]/90 space-y-3 font-sans">
                <div className="font-display font-semibold text-sm tracking-wider uppercase text-[#e2c074]">
                  {section.formula.title}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                  {section.formula.items.map((item, i) => (
                    <div key={i} className="p-3.5 rounded border border-[#e2c074]/15 bg-[#182033]/80">
                      <div className="font-bold text-sm mb-1 text-[#f3ede2]">{item.label}</div>
                      <div className="text-xs text-stone-300 leading-relaxed">{item.description}</div>
                    </div>
                  ))}
                </div>
                {section.formula.note && (
                  <p className="text-xs italic text-[#e2c074]/80 pt-2 border-t border-[#e2c074]/15 font-serif-body">
                    {section.formula.note}
                  </p>
                )}
              </div>
            )}

            {/* Ritual Steps (Chapter 05) */}
            {section.ritualSteps && (
              <div className="my-6 p-5 rounded-xl border border-[#e2c074]/25 bg-[#121826]/90 space-y-2.5 font-sans">
                {section.ritualSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm">
                    <span className="font-mono text-xs text-[#e2c074] font-bold mt-0.5">{idx + 1}.</span>
                    <span className="leading-relaxed text-stone-200">{step.replace(/^\d+\.\s*/, '')}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Curiosity / Surprising Fact Box */}
      {chapter.curiosityFact && (
        <div className="p-5 rounded-xl border border-[#e2c074]/30 bg-[#141b2d]/80 max-w-prose space-y-1.5 font-sans">
          <div className="text-xs font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5 text-[#e2c074]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{chapter.curiosityFact.title}</span>
          </div>
          <p className="leading-relaxed text-stone-200 font-serif-body text-base">
            {chapter.curiosityFact.text}
          </p>
        </div>
      )}

      {/* Editorial Pull Quote */}
      {chapter.quote && (
        <blockquote className="py-6 border-y border-[#e2c074]/20 text-center max-w-prose mx-auto space-y-2">
          <p className="font-serif-body text-xl sm:text-2xl italic leading-relaxed text-[#f3ede2]">
            {chapter.quote.text}
          </p>
          <cite className="block text-xs uppercase tracking-widest font-mono text-[#e2c074] not-italic">
            — {chapter.quote.author}
          </cite>
        </blockquote>
      )}

      {/* Interactive Bitácora Exercise connected to Passport */}
      <section className="p-6 sm:p-8 rounded-2xl border border-[#e2c074]/30 bg-[#121826]/90 shadow-md space-y-6">
        <div className="flex items-start justify-between gap-4 border-b border-[#e2c074]/20 pb-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#e2c074] mb-1">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Bitácora Activa · Pasaporte Energético</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#f3ede2]">
              {chapter.exercise.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              {chapter.exercise.description}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-emerald-400 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
            <span>Guardado automático</span>
          </div>
        </div>

        {/* Dynamic Fields for the Chapter */}
        <div className="space-y-4">
          {chapter.exercise.fields.map((field) => {
            const currentValue = String(passportData[field.key] || '');

            return (
              <div key={String(field.key)} className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#e2c074]">
                  {field.label}
                </label>

                {field.type === 'select' && field.options ? (
                  <select
                    value={currentValue}
                    onChange={(e) => onUpdateField(field.key, e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#e2c074]/25 bg-[#182033] text-[#f3ede2] focus:outline-none focus:ring-1 focus:ring-[#e2c074]"
                  >
                    <option value="" disabled className="text-stone-400 bg-[#121826]">
                      {field.placeholder}
                    </option>
                    {field.options.map((opt) => (
                      <option key={opt} value={opt} className="text-[#f3ede2] bg-[#121826]">
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'textarea' ? (
                  <textarea
                    rows={3}
                    value={currentValue}
                    onChange={(e) => onUpdateField(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#e2c074]/25 bg-[#182033] text-[#f3ede2] placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-[#e2c074] resize-y"
                  />
                ) : (
                  <input
                    type="text"
                    value={currentValue}
                    onChange={(e) => onUpdateField(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#e2c074]/25 bg-[#182033] text-[#f3ede2] placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-[#e2c074]"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="text-xs text-stone-400 flex items-center justify-between pt-2 border-t border-[#e2c074]/15">
          <span>Esta información se sincroniza con tu Pasaporte Celestial.</span>
          <button
            onClick={onGoToPassport}
            className="text-[#e2c074] hover:text-[#edd8a4] underline cursor-pointer font-medium"
          >
            Ver pasaporte completo →
          </button>
        </div>
      </section>

      {/* Chapter Pagination Nav */}
      <div className="flex items-center justify-between pt-6 border-t border-[#e2c074]/20">
        {hasPrev ? (
          <button
            onClick={() => onSelectChapterIndex(currentChapterIndex - 1)}
            className="flex items-center gap-2 text-sm font-medium text-stone-300 hover:text-[#e2c074] cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Capítulo {CHAPTERS[currentChapterIndex - 1].number}</span>
          </button>
        ) : (
          <div />
        )}

        <div className="text-xs font-mono text-stone-400">
          {currentChapterIndex + 1} de {CHAPTERS.length}
        </div>

        {hasNext ? (
          <button
            onClick={() => onSelectChapterIndex(currentChapterIndex + 1)}
            className="flex items-center gap-2 text-sm font-medium text-stone-300 hover:text-[#e2c074] cursor-pointer"
          >
            <span>Capítulo {CHAPTERS[currentChapterIndex + 1].number}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onGoToPassport}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg cursor-pointer bg-[#e2c074] text-[#0a0d14] hover:bg-[#edd8a4]"
          >
            <Award className="w-4 h-4" />
            <span>Ver Pasaporte Completo</span>
          </button>
        )}
      </div>
    </article>
  );
};
