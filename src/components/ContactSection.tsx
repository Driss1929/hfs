import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, GraduationCap, Printer, Copy, Check, FileText } from 'lucide-react';

interface ContactSectionProps {
  language: 'FR' | 'EN' | 'PL';
  onPrintDossier: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  onPrintDossier,
}) => {
  const { candidate } = PORTFOLIO_DATA;

  const labels = {
    FR: {
      kicker: "Disponibilité & Échanges",
      title: "Contact & Coordination Académique",
      subtitle: "Coordonnées directes pour la commission Erasmus+ et le bureau des relations internationales de WSB Merito Poznań.",
      printButton: "Télécharger / Imprimer la Fiche Synthétique (PDF)",
      footerCredits: "Portfolio officiel de candidature Erasmus+ · Hafsa El Mimouni · Uniwersytet WSB Merito w Poznaniu"
    },
    EN: {
      kicker: "Academic Coordination",
      title: "Contact & Information",
      subtitle: "Direct academic coordinates for the Erasmus+ selection board and WSB Merito Poznań International Office.",
      printButton: "Download / Print Application Dossier (PDF)",
      footerCredits: "Official Erasmus+ Application Portfolio · Hafsa El Mimouni · WSB Merito University in Poznań"
    },
    PL: {
      kicker: "Koordynacja Akademicka",
      title: "Kontakt",
      subtitle: "Bezpośrednie dane kontaktowe dla komisji rekrutacyjnej Erasmus+ oraz biura współpracy międzynarodowej WSB Merito w Poznaniu.",
      printButton: "Pobierz / Drukuj Portfolio (PDF)",
      footerCredits: "Oficjalne Portfolio Kandydata Erasmus+ · Hafsa El Mimouni · Uniwersytet WSB Merito w Poznaniu"
    }
  }[language];

  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, field: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-slate-200/80 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-950/40">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400 font-mono-data">
            {labels.kicker}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {labels.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            {labels.subtitle}
          </p>
        </div>

        {/* Centered Clean Contact Card */}
        <div className="mt-12 mx-auto max-w-xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="text-center pb-6 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Hafsa El Mimouni
              </h3>
              <p className="text-sm font-semibold text-amber-700 dark:text-amber-400 mt-1">
                Étudiante en Master Management et Commerce International (MCI)
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Faculté d'Économie et de Gestion de Taroudant · Université Ibn Zohr
              </p>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <a href={`mailto:${candidate.email}`} className="hover:underline font-medium">
                    {candidate.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(candidate.email, 'email')}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 font-mono-data px-2 py-1 rounded border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                  title="Copier l'adresse email"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 text-[11px]">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span className="text-[11px]">Copier</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                  <a href="tel:+212631112212" className="hover:underline font-mono-data font-semibold">
                    +212 631-112212
                  </a>
                </div>
                <button
                  onClick={() => handleCopy('+212631112212', 'phone')}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 font-mono-data px-2 py-1 rounded border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                  title="Copier le numéro"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 text-[11px]">Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span className="text-[11px]">Copier</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-3">
                  <svg className="h-4 w-4 fill-current text-[#0A66C2] dark:text-[#70b5f9] shrink-0" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <a
                    href={candidate.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A66C2] hover:underline dark:text-[#70b5f9] font-medium"
                  >
                    linkedin.com/in/elmimouni-hafsa
                  </a>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 font-mono-data">
                  Profil Vérifié
                </span>
              </div>

              <div className="flex items-center gap-3 p-2">
                <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{candidate.location}</span>
              </div>

              <div className="flex items-center gap-3 p-2">
                <GraduationCap className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{candidate.targetInstitution} ({candidate.mobilityYear})</span>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6 dark:border-slate-800 space-y-3">
              <button
                onClick={onPrintDossier}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold text-white shadow-sm transition-all hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500"
              >
                <Printer className="h-4 w-4" />
                <span>{labels.printButton}</span>
              </button>

              <a
                href={candidate.resumePdf}
                download="Hafsa_EL_Mimouni_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750"
              >
                <FileText className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>Télécharger le CV Officiel en PDF (1 page)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Footer */}
        <footer className="mt-16 border-t border-slate-200 pt-8 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
            <p>{labels.footerCredits}</p>
            <div className="flex items-center gap-4">
              <a href="#top" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                Haut de page ↑
              </a>
              <span aria-hidden="true">·</span>
              <span>Projet Erasmus+ 2026–2027</span>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};
