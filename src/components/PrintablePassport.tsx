import React from 'react';
import { PassportData } from '../types';
import { EVENT_DETAILS, IMAGES } from '../data/content';

interface PrintablePassportProps {
  data: PassportData;
}

export const PrintablePassport: React.FC<PrintablePassportProps> = ({ data }) => {
  return (
    <div
      id="printable-passport-container"
      className="bg-[#fbf9f5] text-[#241e19] p-8 sm:p-12 max-w-[820px] mx-auto border-2 border-[#8c7456]/40 rounded-lg shadow-sm font-serif-body space-y-8"
      style={{
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Ornate Header */}
      <div className="text-center border-b-2 border-[#8c7456]/40 pb-6 relative">
        <div className="text-xs uppercase tracking-widest font-mono text-[#8c7456] mb-1">
          {EVENT_DETAILS.hosts}
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#241e19]">
          Pasaporte Celestial
        </h1>
        <div className="text-xs font-mono tracking-widest uppercase text-[#5a4e44] mt-1">
          Atlas de los Mundos Interiores · Bitácora Oracular
        </div>

        {/* Seal Stamp */}
        <div className="mt-4 flex justify-center">
          <img
            src={IMAGES.passportSeal}
            alt="Sello oficial Pasaporte Celestial"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain rounded-full shadow-sm border border-[#8c7456]/30"
          />
        </div>
      </div>

      {/* Traveler Personal Info Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 border border-[#8c7456]/30 bg-[#f4efe4] rounded text-sm font-sans">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#8c7456] block font-semibold">
            Viajero(a) / Nombre:
          </span>
          <span className="font-display font-bold text-base text-[#241e19]">
            {data.name || 'Sin especificar'}
          </span>
        </div>

        <div>
          <span className="text-xs uppercase tracking-wider text-[#8c7456] block font-semibold">
            Nacimiento (Fecha / Lugar / Hora):
          </span>
          <span className="text-xs sm:text-sm text-[#443830]">
            {[data.birthDate, data.birthTime, data.birthPlace].filter(Boolean).join(' · ') || 'No registrados'}
          </span>
        </div>
      </div>

      {/* Section 1: Tríada Astral Básica (Capítulo 01) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 border-b border-[#8c7456]/30 pb-1.5">
          <span className="text-xs font-mono font-bold text-[#8c7456]">01</span>
          <h2 className="font-display text-sm font-bold tracking-wide uppercase text-[#241e19]">
            La Tríada de Identidad y Emociones
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <div className="p-3 border border-[#8c7456]/20 bg-white/70 rounded">
            <span className="text-xs font-mono uppercase text-[#8c7456] block font-semibold">
              ☉ Mi Sol (Identidad / Voluntad)
            </span>
            <span className="font-bold text-base block mt-0.5">
              {data.sunSign ? `Sol en ${data.sunSign}` : '—'}
            </span>
          </div>

          <div className="p-3 border border-[#8c7456]/20 bg-white/70 rounded">
            <span className="text-xs font-mono uppercase text-[#8c7456] block font-semibold">
              ☽ Mi Luna (Emociones / Refugio)
            </span>
            <span className="font-bold text-base block mt-0.5">
              {data.moonSign ? `Luna en ${data.moonSign}` : '—'}
            </span>
          </div>

          <div className="p-3 border border-[#8c7456]/20 bg-white/70 rounded">
            <span className="text-xs font-mono uppercase text-[#8c7456] block font-semibold">
              ↑ Mi Ascendente (Puerta al mundo)
            </span>
            <span className="font-bold text-base block mt-0.5">
              {data.ascendantSign ? `Ascendente en ${data.ascendantSign}` : '—'}
            </span>
          </div>
        </div>

        {data.sunMoonQuestions && (
          <div className="text-xs p-3 bg-white/50 border border-[#8c7456]/15 rounded italic">
            <span className="not-italic font-semibold text-[#8c7456] block mb-1">
              Reflexión sobre Luna y Ascendente:
            </span>
            «{data.sunMoonQuestions}»
          </div>
        )}
      </div>

      {/* Section 2: Venus & Medio Cielo (Capítulos 02 y 03) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 border-b border-[#8c7456]/30 pb-1.5">
          <span className="text-xs font-mono font-bold text-[#8c7456]">02 · 03</span>
          <h2 className="font-display text-sm font-bold tracking-wide uppercase text-[#241e19]">
            Venus, Disfrute y Propósito (Medio Cielo)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-3.5 border border-[#8c7456]/20 bg-white/70 rounded space-y-1.5">
            <div className="font-semibold text-xs uppercase tracking-wider text-[#8c7456]">
              Venus (Armonía y Disfrute Verdadero)
            </div>
            <div>
              <span className="font-bold">Posición: </span>
              {data.venusSign ? `${data.venusSign} ${data.venusHouse ? `(${data.venusHouse})` : ''}` : 'No especificada'}
            </div>
            {data.venusTruePleasures && (
              <p className="text-xs italic text-[#443830] pt-1 border-t border-[#8c7456]/15">
                «{data.venusTruePleasures}»
              </p>
            )}
          </div>

          <div className="p-3.5 border border-[#8c7456]/20 bg-white/70 rounded space-y-1.5">
            <div className="font-semibold text-xs uppercase tracking-wider text-[#8c7456]">
              Medio Cielo MC (Hacia dónde queremos crecer)
            </div>
            <div>
              <span className="font-bold">MC en: </span>
              {data.midheavenSign || 'No especificado'}
            </div>
            {data.midheavenConstruct && (
              <div className="text-xs text-[#443830]">
                <span className="font-medium">Quiero construir: </span> {data.midheavenConstruct}
              </div>
            )}
            {data.midheavenQuality && (
              <div className="text-xs text-[#443830]">
                <span className="font-medium">Cualidad a reconocer: </span> {data.midheavenQuality}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section 3: Runas y Límites de Protección (Capítulos 04 y 05) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 border-b border-[#8c7456]/30 pb-1.5">
          <span className="text-xs font-mono font-bold text-[#8c7456]">04 · 05</span>
          <h2 className="font-display text-sm font-bold tracking-wide uppercase text-[#241e19]">
            Límites Sagrados y Trabajo con Runas
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-3.5 border border-[#8c7456]/20 bg-white/70 rounded space-y-1.5">
            <div className="font-semibold text-xs uppercase tracking-wider text-[#8c7456]">
              ᛉ Runa Algiz · Límite de Protección Concreto
            </div>
            <p className="text-xs leading-relaxed text-[#3a3028]">
              {data.algizLimit || 'Sin registrar aún.'}
            </p>
          </div>

          <div className="p-3.5 border border-[#8c7456]/20 bg-white/70 rounded space-y-1.5">
            <div className="font-semibold text-xs uppercase tracking-wider text-[#8c7456]">
              Runa de Intención Consagrada
            </div>
            <div className="font-bold text-sm text-[#241e19]">
              {data.intentionRune || 'ᛉ Algiz'}
            </div>
            <p className="text-xs italic text-[#443830]">
              {data.intentionRunePhrase ? `«${data.intentionRunePhrase}»` : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Tarot y Espejo Elemental (Capítulo 06) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 border-b border-[#8c7456]/30 pb-1.5">
          <span className="text-xs font-mono font-bold text-[#8c7456]">06</span>
          <h2 className="font-display text-sm font-bold tracking-wide uppercase text-[#241e19]">
            Tarot: Terreno Elemental Elegido
          </h2>
        </div>

        <div className="p-3.5 border border-[#8c7456]/20 bg-white/70 rounded text-xs sm:text-sm space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-sm">{data.tarotCuriositySuit || 'Copas'}</span>
            <span className="text-xs uppercase font-mono text-[#8c7456]">Lectura Simbólica</span>
          </div>
          {data.tarotReflection && (
            <p className="text-xs italic text-[#443830] pt-1">
              «{data.tarotReflection}»
            </p>
          )}
        </div>
      </div>

      {/* Section 5: Síntesis de la Bitácora y Palabra de Poder (Capítulo 07) */}
      <div className="space-y-3 border-2 border-[#8c7456]/50 p-4 sm:p-5 rounded bg-[#f4efe4]">
        <div className="flex items-center justify-between border-b border-[#8c7456]/30 pb-2">
          <h2 className="font-display text-base font-bold uppercase text-[#241e19]">
            Página de Sellado · Tu Palabra para el Encuentro
          </h2>
          <span className="text-xs font-mono text-[#8c7456] uppercase font-bold">
            07 Bitácora
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-1">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#8c7456] block font-semibold">
              Palabra de Poder Elegida:
            </span>
            <span className="font-display text-xl font-bold text-[#8c3a1c] block mt-0.5">
              {data.chosenWord || 'Calma'}
            </span>
            {data.chosenWordAction && (
              <p className="text-xs text-[#443830] mt-1">
                <span className="font-semibold">Acción para expresarla: </span> {data.chosenWordAction}
              </p>
            )}
          </div>

          <div>
            <span className="text-xs uppercase tracking-wider text-[#8c7456] block font-semibold">
              Tema que más deseo explorar:
            </span>
            <p className="text-xs text-[#3a3028] mt-1">
              {data.coreTheme || 'Astrología, runas y Tarot integrados'}
            </p>
          </div>
        </div>

        {data.personalNotes && (
          <div className="pt-2 border-t border-[#8c7456]/20 text-xs">
            <span className="font-semibold text-[#8c7456]">Notas para las facilitadoras: </span>
            <span className="text-[#443830] italic">{data.personalNotes}</span>
          </div>
        )}
      </div>

      {/* Footer with Event Credentials */}
      <div className="text-center pt-6 border-t-2 border-[#8c7456]/30 space-y-2 text-xs text-[#5a4e44]">
        <div className="font-display font-semibold tracking-wider uppercase text-sm text-[#241e19]">
          Encuentro Presencial · {EVENT_DETAILS.date} · {EVENT_DETAILS.time}
        </div>
        <div>
          {EVENT_DETAILS.hosts} · WhatsApp: {EVENT_DETAILS.phone} · {EVENT_DETAILS.website}
        </div>
        <p className="text-[10px] italic max-w-lg mx-auto opacity-80 pt-1">
          {EVENT_DETAILS.disclaimer}
        </p>
      </div>
    </div>
  );
};
