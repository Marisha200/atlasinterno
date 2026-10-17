import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, BookOpen, Award, ArrowRight, Phone } from 'lucide-react';
import { EVENT_DETAILS, IMAGES } from '../data/content';
import { ThemeId } from '../types';

interface HeroBannerProps {
  onStartReading: () => void;
  onGoToPassport: () => void;
  currentTheme?: ThemeId;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onStartReading,
  onGoToPassport,
}) => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#e2c074]/25 mb-10 shadow-lg bg-[#0e1422]/60 backdrop-blur-sm">
      {/* Visual Header with generated celestial cartography engraving */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[21/8] min-h-[320px] max-h-[460px] overflow-hidden bg-[#0a0d14]">
        <img
          src={IMAGES.celestialCover}
          alt="Atlas de los Mundos Interiores - Cartografía celestial y astrolabio"
          className="w-full h-full object-cover object-center opacity-85 transition-transform duration-700 hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Scrim overlay for high legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/75 to-transparent" />

        {/* Floating badge top right */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <div className="text-xs uppercase tracking-widest px-3 py-1.5 rounded border border-[#e2c074]/30 bg-[#0a0d14]/80 backdrop-blur-md text-[#e2c074] font-mono">
            {EVENT_DETAILS.hosts}
          </div>
        </div>

        {/* Hero Content anchored over scrim */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 max-w-3xl">
          <div className="text-xs sm:text-sm uppercase tracking-widest font-mono text-[#e2c074] mb-2 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{EVENT_DETAILS.kicker}</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-2 sm:mb-3 leading-tight text-[#f3ede2]">
            {EVENT_DETAILS.title}
          </h1>
          <p className="text-base sm:text-xl font-serif-body italic text-[#d6cdbd] max-w-2xl leading-relaxed">
            {EVENT_DETAILS.subtitle}
          </p>
        </div>
      </div>

      {/* Editorial Body strip */}
      <div className="p-6 sm:p-10 space-y-6">
        {/* Central Quote */}
        <div className="text-center py-4 border-y border-[#e2c074]/20 max-w-2xl mx-auto">
          <p className="font-serif-body text-xl sm:text-2xl italic leading-relaxed text-[#f3ede2]">
            {EVENT_DETAILS.quoteIntro}
          </p>
          <p className="text-xs uppercase tracking-widest text-[#a7b3c6] mt-2 font-mono">
            Una antesala interactiva para completar tu Pasaporte Energético
          </p>
        </div>

        {/* Operational Strip - Event details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm pt-2">
          <div className="flex items-center gap-3 p-3.5 rounded-lg border border-[#e2c074]/20 bg-[#141b2d]/60">
            <Calendar className="w-5 h-5 shrink-0 text-[#e2c074]" />
            <div>
              <div className="font-medium text-[#f3ede2]">{EVENT_DETAILS.date}</div>
              <div className="text-xs text-stone-400">{EVENT_DETAILS.time}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-lg border border-[#e2c074]/20 bg-[#141b2d]/60">
            <MapPin className="w-5 h-5 shrink-0 text-[#e2c074]" />
            <div>
              <div className="font-medium text-[#f3ede2]">Encuentro presencial</div>
              <div className="text-xs text-stone-400">Cupos reducidos · Rincón Zen</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-lg border border-[#e2c074]/20 bg-[#141b2d]/60">
            <Phone className="w-5 h-5 shrink-0 text-[#e2c074]" />
            <div>
              <div className="font-medium text-[#f3ede2]">{EVENT_DETAILS.phone}</div>
              <a
                href={EVENT_DETAILS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#e2c074] underline hover:text-[#edd8a4]"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* CTA Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#e2c074]/20">
          <p className="text-xs sm:text-sm text-stone-400 max-w-md">
            Podés ir leyendo los 7 capítulos a tu ritmo y contestar las preguntas. Tus respuestas se guardan en este dispositivo y podés descargar tu Pasaporte en PDF.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onStartReading}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all bg-[#e2c074] text-[#0a0d14] hover:bg-[#edd8a4] shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>Empezar Lectura</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={onGoToPassport}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded font-medium text-sm border border-[#e2c074]/30 hover:border-[#e2c074]/60 hover:bg-[#e2c074]/10 text-[#f3ede2] flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Award className="w-4 h-4 text-[#e2c074]" />
              <span>Ver Pasaporte</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
