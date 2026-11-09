import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle2, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface OfficialDocumentsModalProps {
  documentType: 'resume' | 'efset' | null;
  onClose: () => void;
}

export const OfficialDocumentsModal: React.FC<OfficialDocumentsModalProps> = ({
  documentType,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!documentType) return null;

  const isResume = documentType === 'resume';
  const filePath = isResume
    ? PORTFOLIO_DATA.candidate.resumePdf
    : PORTFOLIO_DATA.candidate.efSetPdf;
  const fileName = isResume
    ? 'Hafsa_EL_Mimouni_Resume.pdf'
    : 'EF_SET_Certificate_Hafsa_El_Mimouni.pdf';
  const title = isResume
    ? 'Official Curriculum Vitae · Hafsa EL Mimouni'
    : 'Official EF SET English Certificate (53/100 · B2 Upper Intermediate)';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col w-full max-w-4xl h-[90vh] rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900 overflow-hidden"
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                {title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono-data">
                {isResume ? 'Master in Management & International Trade' : 'Verified CEFR B2 · Reading C1 (63/100)'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={filePath}
              download={fileName}
              className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Télécharger PDF</span>
            </a>

            {!isResume && (
              <a
                href="https://cert.efset.org/vky6FP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <ExternalLink className="h-3 w-3" />
                <span className="hidden sm:inline">Vérifier sur efset.org</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Modal PDF Viewer / Fallback Frame */}
        <div className="flex-1 bg-slate-100 dark:bg-slate-950 p-2 sm:p-4 overflow-hidden">
          <iframe
            src={`${filePath}#view=FitH`}
            title={title}
            className="w-full h-full rounded-xl border border-slate-200 dark:border-slate-800 shadow-inner bg-white"
          />
        </div>

      </div>
    </div>
  );
};
