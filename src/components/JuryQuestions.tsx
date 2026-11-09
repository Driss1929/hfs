import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ChevronDown, MessageSquare, Sparkles } from 'lucide-react';

interface JuryQuestionsProps {
  language: 'FR' | 'EN' | 'PL';
}

export const JuryQuestions: React.FC<JuryQuestionsProps> = ({ language }) => {
  const { juryQAs } = PORTFOLIO_DATA;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const labels = {
    FR: {
      kicker: "Préparation & Vision Personnelle",
      title: "Questions Clés de la Commission Erasmus+",
      subtitle: "Réponses structurées aux interrogations fondamentales du jury de sélection et des coordinateurs WSB.",
      clickToExpand: "Cliquez pour voir l'argumentation détaillée",
      readyBadge: "Préparation Entretien : 100%"
    },
    EN: {
      kicker: "Preparation & Personal Vision",
      title: "Key Selection Committee Q&A",
      subtitle: "Structured rationales addressing the core considerations of the Erasmus+ evaluation committee and WSB coordinators.",
      clickToExpand: "Click to reveal detailed rationale",
      readyBadge: "Interview Readiness: 100%"
    },
    PL: {
      kicker: "Przygotowanie i Wizja Osobista",
      title: "Kluczowe Pytania Komisji Kwalifikacyjnej",
      subtitle: "Odpowiedzi na kluczowe pytania komisji rekrutacyjnej oraz koordynatorów WSB Merito.",
      clickToExpand: "Kliknij, aby rozwinąć odpowiedź",
      readyBadge: "Gotowość do rozmowy: 100%"
    }
  }[language];

  return (
    <section className="py-16 sm:py-24 border-t border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400">
              {labels.kicker}
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              {labels.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              {labels.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3.5 py-2 text-xs font-semibold text-amber-900 dark:border-amber-900/40 dark:bg-amber-950/40 dark:text-amber-300 font-mono-data shrink-0">
            <Sparkles className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <span>{labels.readyBadge}</span>
          </div>
        </div>

        {/* Q&A Accordion */}
        <div className="mt-12 space-y-4">
          {juryQAs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 transition-all dark:border-slate-800 dark:bg-slate-800/40"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <div className="pr-4">
                    <span className="text-xs font-mono-data font-semibold text-amber-700 dark:text-amber-400 uppercase">
                      {item.category}
                    </span>
                    <h3 className="mt-1 text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600 dark:text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200/60 p-6 pt-5 dark:border-slate-700/60">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
