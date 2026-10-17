import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { ChapterReader } from './components/ChapterReader';
import { ChaptersOverview } from './components/ChaptersOverview';
import { AlgizRitual } from './components/AlgizRitual';
import { PassportView } from './components/PassportView';
import { usePassportStorage } from './hooks/usePassportStorage';
import { ThemeId } from './types';
import { EVENT_DETAILS } from './data/content';
import { ArrowUp, BookOpen, Compass, Shield, Award, Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'reader' | 'chapters' | 'ritual' | 'passport'>('reader');
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  
  // Fixed theme: Místico Nocturno
  const theme: ThemeId = 'mystic';

  const {
    data: passportData,
    updateField,
    resetData,
    loadExampleData,
    progressPercent,
  } = usePassportStorage();

  // Scroll to top when changing tab or chapter
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab, currentChapterIndex]);

  const handleStartReading = () => {
    setActiveTab('reader');
    setCurrentChapterIndex(0);
  };

  const handleSelectChapterFromIndex = (index: number) => {
    setCurrentChapterIndex(index);
    setActiveTab('reader');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0d14] text-[#f3ede2] selection:bg-[#e2c074]/30 selection:text-[#f3ede2]">
      {/* 3-Zone Top Navigation Header */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenPdf={() => setActiveTab('passport')}
        progressPercent={progressPercent}
        currentTheme={theme}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Banner on top of reading mode */}
        {activeTab === 'reader' && currentChapterIndex === 0 && (
          <HeroBanner
            onStartReading={() => {
              const el = document.getElementById('chapter-content-start');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onGoToPassport={() => setActiveTab('passport')}
            currentTheme={theme}
          />
        )}

        {/* Content Tabs */}
        <div id="chapter-content-start" className="pt-2">
          {activeTab === 'reader' && (
            <ChapterReader
              currentChapterIndex={currentChapterIndex}
              onSelectChapterIndex={setCurrentChapterIndex}
              passportData={passportData}
              onUpdateField={updateField}
              onGoToPassport={() => setActiveTab('passport')}
              currentTheme={theme}
            />
          )}

          {activeTab === 'chapters' && (
            <ChaptersOverview
              onSelectChapterIndex={handleSelectChapterFromIndex}
              currentTheme={theme}
            />
          )}

          {activeTab === 'ritual' && (
            <AlgizRitual
              passportData={passportData}
              onUpdateField={updateField}
              currentTheme={theme}
            />
          )}

          {activeTab === 'passport' && (
            <PassportView
              data={passportData}
              onUpdateField={updateField}
              onReset={resetData}
              onLoadExample={loadExampleData}
              progressPercent={progressPercent}
              currentTheme={theme}
            />
          )}
        </div>
      </main>

      {/* Quiet, refined Footer */}
      <footer className="mt-16 border-t border-current/15 py-10 px-4 sm:px-6 lg:px-8 text-xs opacity-75 no-print">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-display font-semibold tracking-wider uppercase text-sm">
              {EVENT_DETAILS.title}
            </div>
            <p>
              {EVENT_DETAILS.hosts} · {EVENT_DETAILS.date} · {EVENT_DETAILS.time}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a
              href={`https://${EVENT_DETAILS.website}`}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {EVENT_DETAILS.website}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href="https://instagram.com/rinconzen_reiki"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {EVENT_DETAILS.instagram}
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={EVENT_DETAILS.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              WhatsApp {EVENT_DETAILS.phone}
            </a>
          </div>

          <div className="text-center sm:text-right">
            <span>Pasaporte Energético sin base de datos · Guardado local</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
