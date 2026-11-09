import React from 'react';
import { Moon, Sun, Printer, Globe, FileText } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  language: 'FR' | 'EN' | 'PL';
  onChangeLanguage: (lang: 'FR' | 'EN' | 'PL') => void;
  onPrintDossier: () => void;
  onOpenDocumentModal?: (doc: 'resume' | 'efset') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  language,
  onChangeLanguage,
  onPrintDossier,
  onOpenDocumentModal,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-colors duration-200 dark:border-slate-800 dark:bg-slate-900/95 no-print">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="shrink-0 whitespace-nowrap text-lg font-bold tracking-tight text-slate-900 transition-colors hover:text-amber-700 dark:text-slate-100 dark:hover:text-amber-400"
        >
          Hafsa El Mimouni
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
          <a
            href="#apropos"
            className="shrink-0 whitespace-nowrap transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            {language === 'FR' ? 'À propos' : language === 'EN' ? 'About' : 'O mnie'}
          </a>
          <a
            href="#parcours"
            className="shrink-0 whitespace-nowrap transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            {language === 'FR' ? 'Parcours' : language === 'EN' ? 'Academic Track' : 'Edukacja'}
          </a>
          <a
            href="#projets"
            className="shrink-0 whitespace-nowrap transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            {language === 'FR' ? 'Projets' : language === 'EN' ? 'Case Studies' : 'Projekty'}
          </a>
          <a
            href="#programme-wsb"
            className="shrink-0 whitespace-nowrap transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            {language === 'FR' ? 'Programme WSB' : language === 'EN' ? 'WSB Curriculum' : 'Program WSB'}
          </a>
          <a
            href="#documents"
            className="shrink-0 whitespace-nowrap transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            {language === 'FR' ? 'Dossier' : language === 'EN' ? 'Documents' : 'Dokumenty'}
          </a>
        </nav>

        {/* Zone 3: 1 primary action button + theme & language controls */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Language selector */}
          <div className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5 text-xs font-semibold dark:border-slate-800 dark:bg-slate-800">
            {(['FR', 'EN', 'PL'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => onChangeLanguage(lang)}
                className={`rounded px-2 py-1 transition-colors ${
                  language === lang
                    ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
                title={`Passer en ${lang}`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/elmimouni-hafsa/"
            target="_blank"
            rel="noopener noreferrer"
            title="Consulter le profil LinkedIn de Hafsa El Mimouni"
            className="flex h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-2.5 text-xs font-semibold text-slate-700 transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] dark:border-slate-800 dark:text-slate-300 dark:hover:border-[#0A66C2] dark:hover:text-[#70b5f9] whitespace-nowrap"
          >
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span className="hidden lg:inline">LinkedIn</span>
          </a>

          {/* Theme switch */}
          <button
            onClick={onToggleTheme}
            aria-label="Basculer le mode sombre/clair"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* CV Officiel Modal Trigger */}
          {onOpenDocumentModal && (
            <button
              onClick={() => onOpenDocumentModal('resume')}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-900 transition-colors hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200 dark:hover:bg-amber-900/60 whitespace-nowrap shrink-0"
              title="Consulter le CV Officiel en format PDF"
            >
              <FileText className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span>CV Officiel</span>
            </button>
          )}

          {/* Primary CTA */}
          <button
            onClick={onPrintDossier}
            className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 whitespace-nowrap shrink-0"
          >
            <Printer className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">
              {language === 'FR' ? 'Imprimer Dossier' : language === 'EN' ? 'Print Dossier' : 'Drukuj portfolio'}
            </span>
            <span className="sm:hidden">PDF</span>
          </button>
        </div>

      </div>
    </header>
  );
};
