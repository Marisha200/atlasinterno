import React, { useState } from 'react';
import { Download, Printer, RefreshCw, CheckCircle2, Sparkles, Award, Edit3, Eye, Phone } from 'lucide-react';
import { PassportData, ThemeId } from '../types';
import { PrintablePassport } from './PrintablePassport';
import { exportPassportToPDF } from '../utils/pdfExport';
import { EVENT_DETAILS, ZODIAC_SIGNS, ASTROLOGICAL_HOUSES, RUNES } from '../data/content';

interface PassportViewProps {
  data: PassportData;
  onUpdateField: <K extends keyof PassportData>(field: K, value: PassportData[K]) => void;
  onReset: () => void;
  onLoadExample: () => void;
  progressPercent: number;
  currentTheme?: ThemeId;
}

export const PassportView: React.FC<PassportViewProps> = ({
  data,
  onUpdateField,
  onReset,
  onLoadExample,
  progressPercent,
}) => {
  const [isExporting, setIsExporting] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<'preview' | 'edit'>('preview');

  const handleDownloadPdf = async () => {
    setIsExporting(true);
    try {
      const fileName = data.name
        ? `Pasaporte-Celestial-${data.name.replace(/\s+/g, '-')}.pdf`
        : 'Pasaporte-Celestial-Atlas.pdf';
      await exportPassportToPDF('printable-passport-container', fileName);
    } catch (e) {
      console.error(e);
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Top action header */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[#e2c074]/30 bg-[#121826]/90 shadow-md space-y-6 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e2c074]/20 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e2c074] mb-1">
              <Award className="w-4 h-4" />
              <span>Tu Pasaporte Energético Personal</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#f3ede2]">
              {data.name ? `Pasaporte de ${data.name}` : 'Mi Pasaporte Celestial'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Guardado automáticamente en tu navegador. Podés descargarlo en PDF para llevarlo al encuentro del {EVENT_DETAILS.date}.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-2 shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#f3ede2]">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{progressPercent}% Completado</span>
            </div>
            {/* Progress bar */}
            <div className="w-36 h-2 bg-[#182033] rounded-full overflow-hidden border border-[#e2c074]/20">
              <div
                className="h-full bg-[#e2c074] transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Primary Download & Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPdf}
              disabled={isExporting}
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 cursor-pointer transition-all shadow-sm bg-[#e2c074] text-[#0a0d14] hover:bg-[#edd8a4]"
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? 'Generando PDF...' : 'Descargar en PDF'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium border border-[#e2c074]/30 hover:bg-[#e2c074]/10 text-stone-200 flex items-center gap-2 cursor-pointer transition-all"
              title="Abre el cuadro de diálogo de impresión para guardar como PDF nítido"
            >
              <Printer className="w-4 h-4 opacity-80" />
              <span className="hidden sm:inline">Imprimir / Guardar</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* View switcher */}
            <div className="flex items-center p-1 rounded-lg border border-[#e2c074]/20 bg-[#141b2d] text-xs">
              <button
                onClick={() => setActiveSubTab('preview')}
                className={`px-3 py-1 rounded cursor-pointer transition-all flex items-center gap-1.5 ${
                  activeSubTab === 'preview'
                    ? 'bg-[#e2c074] text-[#0a0d14] font-semibold'
                    : 'text-stone-300 hover:text-[#f3ede2]'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Vista Documento</span>
              </button>

              <button
                onClick={() => setActiveSubTab('edit')}
                className={`px-3 py-1 rounded cursor-pointer transition-all flex items-center gap-1.5 ${
                  activeSubTab === 'edit'
                    ? 'bg-[#e2c074] text-[#0a0d14] font-semibold'
                    : 'text-stone-300 hover:text-[#f3ede2]'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edición Rápida</span>
              </button>
            </div>

            <button
              onClick={onLoadExample}
              className="text-xs text-stone-300 hover:text-[#e2c074] underline cursor-pointer px-2"
              title="Carga un ejemplo con datos completos para probar la descarga"
            >
              Cargar ejemplo
            </button>

            <button
              onClick={onReset}
              className="text-xs text-rose-400 hover:text-rose-300 underline cursor-pointer px-2"
            >
              Reiniciar
            </button>
          </div>
        </div>
      </div>

      {/* Edit Mode Panel */}
      {activeSubTab === 'edit' && (
        <section className="p-6 sm:p-8 rounded-2xl border border-[#e2c074]/30 bg-[#121826]/90 space-y-6 no-print shadow-md">
          <h3 className="font-display text-xl font-bold text-[#f3ede2]">
            Edición Rápida de tu Bitácora Celestial
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase text-[#e2c074]">Tu Nombre Completo</label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => onUpdateField('name', e.target.value)}
                placeholder="Ej: Sofía Gómez"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#e2c074]/25 bg-[#182033] text-[#f3ede2]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase text-[#e2c074]">Lugar y Fecha de Nacimiento</label>
              <input
                type="text"
                value={data.birthPlace}
                onChange={(e) => onUpdateField('birthPlace', e.target.value)}
                placeholder="Ej: Buenos Aires, 15/04/1990"
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#e2c074]/25 bg-[#182033] text-[#f3ede2]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase text-[#e2c074]">☉ Signo Solar</label>
              <select
                value={data.sunSign}
                onChange={(e) => onUpdateField('sunSign', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#e2c074]/25 bg-[#182033] text-[#f3ede2]"
              >
                <option value="" className="text-stone-400 bg-[#121826]">Seleccionar Sol</option>
                {ZODIAC_SIGNS.map((s) => (
                  <option key={s.name} value={s.name} className="text-[#f3ede2] bg-[#121826]">
                    {s.symbol} {s.name} ({s.element})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase text-[#e2c074]">☽ Signo Lunar</label>
              <select
                value={data.moonSign}
                onChange={(e) => onUpdateField('moonSign', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#e2c074]/25 bg-[#182033] text-[#f3ede2]"
              >
                <option value="" className="text-stone-400 bg-[#121826]">Seleccionar Luna</option>
                {ZODIAC_SIGNS.map((s) => (
                  <option key={s.name} value={s.name} className="text-[#f3ede2] bg-[#121826]">
                    {s.symbol} {s.name} ({s.element})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase text-[#e2c074]">↑ Ascendente</label>
              <select
                value={data.ascendantSign}
                onChange={(e) => onUpdateField('ascendantSign', e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#e2c074]/25 bg-[#182033] text-[#f3ede2]"
              >
                <option value="" className="text-stone-400 bg-[#121826]">Seleccionar Ascendente</option>
                {ZODIAC_SIGNS.map((s) => (
                  <option key={s.name} value={s.name} className="text-[#f3ede2] bg-[#121826]">
                    {s.symbol} {s.name} ({s.element})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase text-[#e2c074]">Palabra Guía para el Encuentro</label>
              <input
                type="text"
                value={data.chosenWord}
                onChange={(e) => onUpdateField('chosenWord', e.target.value)}
                placeholder="Ej: Claridad, Calma, Valentía, Curiosidad..."
                className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-[#e2c074]/25 bg-[#182033] text-[#f3ede2]"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setActiveSubTab('preview')}
              className="px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer bg-[#e2c074] text-[#0a0d14] hover:bg-[#edd8a4]"
            >
              Guardar y Ver Documento
            </button>
          </div>
        </section>
      )}

      {/* Render the printable document layout */}
      <div className="overflow-x-auto pb-4">
        <PrintablePassport data={data} />
      </div>

      {/* Information strip for the in-person event */}
      <div className="p-6 rounded-2xl border border-[#e2c074]/20 bg-[#121826]/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs no-print">
        <div>
          <div className="font-semibold text-sm mb-1 text-[#f3ede2]">{EVENT_DETAILS.title} · Encuentro Presencial</div>
          <p className="text-stone-300">
            {EVENT_DETAILS.date} · {EVENT_DETAILS.time} · {EVENT_DETAILS.modality}
          </p>
        </div>

        <a
          href={EVENT_DETAILS.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg border border-[#e2c074]/30 hover:bg-[#e2c074]/10 text-[#e2c074] flex items-center gap-2 cursor-pointer shrink-0 font-medium"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Consultar cupo por WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
