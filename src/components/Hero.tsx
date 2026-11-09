import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowRight, FileText, CheckCircle2, GraduationCap, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  language: 'FR' | 'EN' | 'PL';
  onNavigateToSection: (id: string) => void;
  onOpenDocumentModal?: (doc: 'resume' | 'efset') => void;
}

export const Hero: React.FC<HeroProps> = ({
  language,
  onNavigateToSection,
  onOpenDocumentModal,
}) => {
  const { candidate, keyMetrics } = PORTFOLIO_DATA;

  const content = {
    FR: {
      kicker: "Programme Européen Erasmus+ · Projet de Mobilité Académique 2026–2027",
      title: "Hafsa El Mimouni",
      subtitle: "Management. Strategy. Digital Innovation.",
      tagline: "Understanding Business. Connecting Ideas. Creating Value.",
      targetTag: "Candidature officielle pour Uniwersytet WSB Merito w Poznaniu (Pologne)",
      description: "Étudiante en Master Management et Commerce International à l'Université Ibn Zohr (FEGT), après une Licence en Économie et Gestion. Mon profil allie réflexion stratégique, marketing international, transformation numérique et coordination associative en tant que Secrétaire Générale du Club MCI.",
      ctaPrimary: "Consulter le Programme WSB Poznań",
      ctaSecondary: "Lettre de Motivation Officielle",
      destinationLabel: "Uczelnia / Destination",
      statusLabel: "Statut du Dossier",
      statusValue: "Candidature Erasmus+ Prête",
      currentProgram: "Master 1 Management & Commerce International (MCI)",
      photoCaption: "Journée d'Intégration MCI · Présentation Officielle"
    },
    EN: {
      kicker: "European Erasmus+ Program · Academic Mobility Project 2026–2027",
      title: "Hafsa El Mimouni",
      subtitle: "Management. Strategy. Digital Innovation.",
      tagline: "Understanding Business. Connecting Ideas. Creating Value.",
      targetTag: "Official Candidate for WSB Merito University in Poznań (Poland)",
      description: "Master's student in Management and International Trade at Ibn Zohr University (FEGT) with a Bachelor's in Economics and Management. Combining strategic analysis, international marketing, digital business transformation, and student leadership as Secretary General of the MCI Club.",
      ctaPrimary: "Explore WSB Poznań Curriculum",
      ctaSecondary: "Official Motivation Letter",
      destinationLabel: "Host Institution",
      statusLabel: "Application Status",
      statusValue: "Erasmus+ Dossier Ready",
      currentProgram: "Master in Management & International Trade (MCI)",
      photoCaption: "MCI Integration Day · Student Leadership"
    },
    PL: {
      kicker: "Program Europejski Erasmus+ · Projekt Mobilności Akademickiej 2026–2027",
      title: "Hafsa El Mimouni",
      subtitle: "Zarządzanie. Strategia. Innowacje Cyfrowe.",
      tagline: "Understanding Business. Connecting Ideas. Creating Value.",
      targetTag: "Kandydatka na Uniwersytet WSB Merito w Poznaniu (Semestr 2)",
      description: "Studentka studiów magisterskich (MCI) na Uniwersytecie Ibn Zohr w Maroku. Łączy wiedzę z zakresu zarządzania strategicznego, marketingu międzynarodowego i transformacji cyfrowej z aktywnością społeczną jako Sekretarz Generalna Klubu MCI.",
      ctaPrimary: "Program Zajęć w WSB Poznań",
      ctaSecondary: "Oficjalny List Motywacyjny",
      destinationLabel: "Uczelnia Przyjmująca",
      statusLabel: "Status Aplikacji",
      statusValue: "Aplikacja Erasmus+ Kompletna",
      currentProgram: "Magister: Zarządzanie i Handel Międzynarodowy",
      photoCaption: "Dzień Integracji MCI · Oficjalne Wystąpienie"
    }
  }[language];

  return (
    <section id="apropos" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen Hero: Left Column Text, Right Column Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Unboxed Kicker metadata with separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide uppercase text-amber-700 dark:text-amber-400 font-mono-data">
              <span>{content.kicker}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {content.title}
              </h1>
              <p className="text-xl sm:text-2xl font-serif-display italic text-amber-700 dark:text-amber-400">
                {content.subtitle}
              </p>
              <p className="text-sm font-semibold tracking-wide text-slate-500 dark:text-slate-400">
                « {content.tagline} »
              </p>
            </div>

            {/* Target institution tag & description */}
            <div className="w-full rounded-xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/70">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-900 dark:text-slate-100">
                <GraduationCap className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{content.targetTag}</span>
              </div>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                <strong>Origine : </strong>{candidate.homeUniversity} · {candidate.homeFaculty} · {content.currentProgram}
              </p>
            </div>

            {/* Lead description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {content.description}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigateToSection('programme-wsb')}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-amber-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 whitespace-nowrap"
              >
                <span>{content.ctaPrimary}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              {onOpenDocumentModal && (
                <button
                  onClick={() => onOpenDocumentModal('resume')}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 whitespace-nowrap"
                >
                  <FileText className="h-4 w-4 text-amber-500" />
                  <span>Consulter le CV Officiel (PDF)</span>
                </button>
              )}

              <button
                onClick={() => onNavigateToSection('documents')}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750 whitespace-nowrap"
              >
                <span>{content.ctaSecondary}</span>
              </button>
            </div>

            {/* Trust and Verification details */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>Licence Économie & Gestion Validée (2022–2025)</span>
              </div>
              <span aria-hidden="true">·</span>
              <a
                href={candidate.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-semibold text-[#0A66C2] transition-colors hover:underline dark:text-[#70b5f9]"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn : in/elmimouni-hafsa</span>
              </a>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span>WSB Merito Poznań (Polska)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Frame with authentic photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden bg-slate-900">
                  <img
                    src={candidate.avatar}
                    alt="Hafsa El Mimouni sur scène lors de la Journée d'Intégration du Master MCI"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-xs font-semibold text-amber-300 font-mono-data">
                      {content.photoCaption}
                    </span>
                    <p className="text-xs text-slate-200 mt-0.5">
                      Faculté d'Économie et de Gestion de Taroudant · Club MCI
                    </p>
                  </div>
                </div>
                
                {/* Information Card attached at bottom */}
                <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-base font-bold text-slate-900 dark:text-white">
                        Hafsa El Mimouni
                      </h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Secrétaire Générale · Club Conférences & Formations MCI
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>{content.statusValue}</span>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-xs dark:border-slate-800">
                    <div>
                      <span className="text-slate-400">{content.destinationLabel}</span>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">WSB Merito Poznań</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Mobilité Erasmus+</span>
                      <p className="font-semibold text-slate-800 dark:text-slate-200">30 ECTS · Semestre 2</p>
                    </div>
                  </div>

                  {onOpenDocumentModal && (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onOpenDocumentModal('resume')}
                        className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-750"
                      >
                        <FileText className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                        <span>CV Officiel</span>
                      </button>
                      <button
                        onClick={() => onOpenDocumentModal('efset')}
                        className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-750"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>EF SET 53 (B2)</span>
                      </button>
                    </div>
                  )}

                  <a
                    href={candidate.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-[#0A66C2] dark:hover:text-[#70b5f9]"
                  >
                    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>Consulter le Profil LinkedIn Vérifié</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-metric strip below split */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {keyMetrics.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono-data tabular-nums">
                  {item.value}
                </span>
                {item.suffix && (
                  <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
                    {item.suffix}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                {item.label}
              </p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
