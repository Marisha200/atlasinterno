import React from 'react';
import { Download, BookOpen, Compass, Shield, Award } from 'lucide-react';
import { ThemeId } from '../types';

interface HeaderProps {
  activeTab: 'reader' | 'chapters' | 'ritual' | 'passport';
  onSelectTab: (tab: 'reader' | 'chapters' | 'ritual' | 'passport') => void;
  onOpenPdf: () => void;
  progressPercent: number;
  currentTheme?: ThemeId;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenPdf,
  progressPercent,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b transition-colors duration-200 backdrop-blur-md bg-[#0a0d14]/90 border-[#e2c074]/20 text-[#f3ede2]">
      {/* 3-Zone Contract: Brand Zone — Nav Links Zone — 1 Primary Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onSelectTab('reader')}
          className="text-left group cursor-pointer focus-visible:outline-none"
        >
          <span className="font-display text-base sm:text-lg font-semibold tracking-wider uppercase block whitespace-nowrap text-[#f3ede2] group-hover:text-[#e2c074] transition-colors">
            Atlas de los Mundos Interiores
          </span>
        </button>

        {/* Zone 2: 4 single-line concise navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => onSelectTab('reader')}
            className={`whitespace-nowrap transition-colors pb-1 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'reader'
                ? 'text-[#e2c074] border-b-2 border-[#e2c074]'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Lectura</span>
          </button>

          <button
            onClick={() => onSelectTab('chapters')}
            className={`whitespace-nowrap transition-colors pb-1 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'chapters'
                ? 'text-[#e2c074] border-b-2 border-[#e2c074]'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Capítulos</span>
          </button>

          <button
            onClick={() => onSelectTab('ritual')}
            className={`whitespace-nowrap transition-colors pb-1 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'ritual'
                ? 'text-[#e2c074] border-b-2 border-[#e2c074]'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Shield className="w-4 h-4" />
            <span>Ritual Algiz</span>
          </button>

          <button
            onClick={() => onSelectTab('passport')}
            className={`whitespace-nowrap transition-colors pb-1 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'passport'
                ? 'text-[#e2c074] border-b-2 border-[#e2c074]'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Mi Pasaporte ({progressPercent}%)</span>
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPdf}
            className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded transition-all flex items-center gap-2 cursor-pointer shadow-sm bg-[#e2c074] text-[#0a0d14] hover:bg-[#edd8a4]"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span className="whitespace-nowrap">Descargar PDF</span>
          </button>
        </div>

      </div>

      {/* Mobile Nav strip */}
      <div className="flex md:hidden items-center justify-around py-2 border-t border-[#e2c074]/15 text-xs bg-[#0a0d14]/95">
        <button
          onClick={() => onSelectTab('reader')}
          className={`px-2 py-1 ${activeTab === 'reader' ? 'font-semibold text-[#e2c074] underline' : 'text-stone-400'}`}
        >
          Lectura
        </button>
        <button
          onClick={() => onSelectTab('chapters')}
          className={`px-2 py-1 ${activeTab === 'chapters' ? 'font-semibold text-[#e2c074] underline' : 'text-stone-400'}`}
        >
          Capítulos
        </button>
        <button
          onClick={() => onSelectTab('ritual')}
          className={`px-2 py-1 ${activeTab === 'ritual' ? 'font-semibold text-[#e2c074] underline' : 'text-stone-400'}`}
        >
          Ritual ᛉ
        </button>
        <button
          onClick={() => onSelectTab('passport')}
          className={`px-2 py-1 ${activeTab === 'passport' ? 'font-semibold text-[#e2c074] underline' : 'text-stone-400'}`}
        >
          Pasaporte ({progressPercent}%)
        </button>
      </div>
    </header>
  );
};
