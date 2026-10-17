import React, { useState, useEffect } from 'react';
import { Shield, Play, Pause, RotateCcw, Check, Sparkles, Heart } from 'lucide-react';
import { RUNES } from '../data/content';
import { PassportData, ThemeId } from '../types';

interface AlgizRitualProps {
  passportData: PassportData;
  onUpdateField: <K extends keyof PassportData>(field: K, value: PassportData[K]) => void;
  currentTheme?: ThemeId;
}

export const AlgizRitual: React.FC<AlgizRitualProps> = ({
  passportData,
  onUpdateField,
}) => {
  // 5 minute timer state (300 seconds)
  const [timeLeft, setTimeLeft] = useState(300);
  const [isActive, setIsActive] = useState(false);

  // Breathing circle guide state
  const [breathPhase, setBreathPhase] = useState<'Inhalá' | 'Sostené' | 'Exhalá' | 'Pausa'>('Inhalá');

  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  // Breathing loop guide (4s inhale, 4s hold, 4s exhale, 2s pause)
  useEffect(() => {
    if (!isActive) return;
    const cycle = (300 - timeLeft) % 14;
    if (cycle < 4) setBreathPhase('Inhalá');
    else if (cycle < 8) setBreathPhase('Sostené');
    else if (cycle < 12) setBreathPhase('Exhalá');
    else setBreathPhase('Pausa');
  }, [timeLeft, isActive]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(300);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="max-w-4xl mx-auto space-y-8 p-6 sm:p-10 rounded-2xl border border-[#e2c074]/25 bg-[#121826]/80 shadow-md">
      {/* Title & Introduction */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-3 py-1 rounded border border-[#e2c074]/30 bg-[#141b2d] text-[#e2c074]">
          <Shield className="w-3.5 h-3.5" />
          <span>Ritual Guiado de 5 Minutos · Capítulos 04 y 05</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#f3ede2]">
          Mi Espacio, Mi Intención
        </h2>
        <p className="font-serif-body text-base sm:text-lg text-stone-300 leading-relaxed">
          «Pensá en la protección más allá de los amuletos: decir que no cuando hace falta, descansar, elegir con quién compartimos nuestro tiempo y cuidar nuestra energía emocional.»
        </p>
      </div>

      {/* Interactive Breathing & Timer Unit */}
      <div className="p-6 sm:p-8 rounded-xl border border-[#e2c074]/20 bg-[#0a0d14]/70 flex flex-col sm:flex-row items-center justify-around gap-6 text-center sm:text-left">
        
        {/* Breathing Orb */}
        <div className="flex flex-col items-center">
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Outer pulsating circle */}
            <div
              className={`absolute inset-0 rounded-full border-2 transition-all duration-1000 ${
                isActive
                  ? breathPhase === 'Inhalá'
                    ? 'scale-110 border-[#e2c074] bg-[#e2c074]/15'
                    : breathPhase === 'Exhalá'
                    ? 'scale-90 border-[#e2c074]/40 bg-transparent'
                    : 'scale-100 border-[#e2c074]/70'
                  : 'scale-95 border-[#e2c074]/20'
              }`}
            />
            {/* Center Rune */}
            <div className="text-4xl font-serif select-none text-[#e2c074]">ᛉ</div>
          </div>
          <div className="text-xs font-mono uppercase tracking-wider mt-2 text-[#e2c074]">
            {isActive ? `Respiración: ${breathPhase}` : 'Pausa serena'}
          </div>
        </div>

        {/* Timer controls */}
        <div className="space-y-3 sm:max-w-xs">
          <div className="text-4xl font-mono font-bold tracking-tight text-[#f3ede2]">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>
          <p className="text-xs text-stone-400 leading-relaxed">
            Un momento de quietud con una hoja y tu lapicera para fijar tu límite y sellar tu intención.
          </p>

          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <button
              onClick={toggleTimer}
              className="px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer transition-all bg-[#e2c074] text-[#0a0d14] hover:bg-[#edd8a4]"
            >
              {isActive ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isActive ? 'Pausar' : 'Comenzar 5 Minutos'}</span>
            </button>

            <button
              onClick={resetTimer}
              className="p-2 rounded-lg border border-[#e2c074]/30 hover:bg-[#e2c074]/10 cursor-pointer transition-all text-stone-300"
              title="Reiniciar temporizador"
            >
              <RotateCcw className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>
        </div>
      </div>

      {/* Step by Step Ritual Interactive Guide */}
      <div className="space-y-4">
        <h3 className="font-display text-lg font-bold text-[#f3ede2]">
          Los 5 Pasos del Ritual
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
          {[
            { num: '1', title: 'Respirar', text: 'Sentate cómodamente y hacé tres respiraciones lentas.' },
            { num: '2', title: 'Trazar ᛉ', text: 'Dibujá la runa Algiz en el centro de tu hoja o bitácora.' },
            { num: '3', title: 'Afirmar', text: 'Escribí: «Hoy elijo cuidar mi espacio y respetar mis límites».' },
            { num: '4', title: 'Acción', text: 'Pensá en una acción concreta: apagar alertas, decir que no, descansar.' },
            { num: '5', title: 'Honrar', text: 'Guardá la hoja a la vista y revisá en unos días si la cumpliste.' },
          ].map((s) => (
            <div key={s.num} className="p-3.5 rounded-xl border border-[#e2c074]/20 bg-[#141b2d]/70 space-y-1">
              <div className="font-mono font-bold text-[#e2c074]">Paso {s.num}</div>
              <div className="font-semibold text-sm text-[#f3ede2]">{s.title}</div>
              <p className="text-stone-300 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rune Selection & Personal Intention */}
      <div className="pt-6 border-t border-[#e2c074]/20 space-y-6">
        <div>
          <h3 className="font-display text-lg font-bold mb-1 text-[#f3ede2]">
            Explorador de Runas para Trabajar
          </h3>
          <p className="text-xs sm:text-sm text-stone-300">
            En un trabajo simbólico, identificamos una intención y elegimos una runa que nos ayude a recordarla:
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {RUNES.map((rune) => {
            const isChosen = passportData.intentionRune.includes(rune.name);
            return (
              <button
                key={rune.id}
                onClick={() => {
                  onUpdateField('intentionRune', `${rune.symbol} ${rune.name} · ${rune.keyword}`);
                  onUpdateField('intentionRunePhrase', `Hoy elijo ${rune.intentionTheme.toLowerCase()}`);
                }}
                className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between ${
                  isChosen
                    ? 'border-2 border-[#e2c074] bg-[#182033] shadow-md scale-[1.02]'
                    : 'border-[#e2c074]/20 hover:border-[#e2c074]/50 bg-[#141b2d]/60'
                }`}
              >
                <div>
                  <div className="text-2xl font-serif mb-1 text-[#e2c074]">{rune.symbol}</div>
                  <div className="font-display text-sm font-bold text-[#f3ede2]">{rune.name}</div>
                  <div className="text-[11px] text-stone-300">{rune.keyword}</div>
                </div>
                {isChosen && (
                  <div className="mt-2 text-[10px] uppercase font-mono tracking-wider flex items-center gap-1 text-[#e2c074]">
                    <Check className="w-3 h-3" />
                    <span>Seleccionada</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* User's Intention Inputs */}
        <div className="p-4 sm:p-6 rounded-xl border border-[#e2c074]/25 bg-[#141b2d]/70 space-y-4">
          <div className="space-y-1">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#e2c074]">
              Tu frase de intención rúnica
            </label>
            <input
              type="text"
              value={passportData.intentionRunePhrase}
              onChange={(e) => onUpdateField('intentionRunePhrase', e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#e2c074]/25 bg-[#182033] text-[#f3ede2] placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-[#e2c074]"
              placeholder="«Hoy elijo cuidar mi espacio y respetar mis límites...»"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#e2c074]">
              Acción concreta de protección para esta semana (Runa Algiz)
            </label>
            <textarea
              rows={2}
              value={passportData.algizLimit}
              onChange={(e) => onUpdateField('algizLimit', e.target.value)}
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#e2c074]/25 bg-[#182033] text-[#f3ede2] placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-[#e2c074]"
              placeholder="Ej: Silenciar notificaciones después de las 21 hs y no asumir compromisos el jueves..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
