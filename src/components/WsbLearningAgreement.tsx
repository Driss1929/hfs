import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { MapPin } from 'lucide-react';

interface WsbLearningAgreementProps {
  language: 'FR' | 'EN' | 'PL';
}

export const WsbLearningAgreement: React.FC<WsbLearningAgreementProps> = ({ language }) => {
  const { candidate } = PORTFOLIO_DATA;

  const labels = {
    FR: {
      kicker: "Choix Stratégique & Contrat Pédagogique",
      title: "Pourquoi l'Université WSB Merito Poznań (Pologne) ?",
      subtitle: "Un projet d'études structuré et ciblé pour capitaliser sur l'excellence pragmatique de WSB Poznań en Semestre 2.",
      campusCaption: "Campus WSB Merito Poznań · Hub académique et logistique transeuropéen",
      reasonsTitle: "3 Piliers de la Candidature pour WSB Poznań",
      learningAgreementTitle: "Contrat Pédagogique Erasmus+ (Learning Agreement)",
      learningAgreementSubtitle: "Sélection de 5 modules majeurs représentant exactement 30 crédits ECTS avec équivalence directe.",
      totalEcts: "Total des Crédits",
      targetEcts: "30 / 30 ECTS",
      courseDetails: "Détails du Module Sélectionné",
      homeEquiv: "Équivalence Université d'Origine",
      creditsLabel: "Crédits ECTS",
      departmentLabel: "Département Académique",
      reasons: [
        {
          title: "Pédagogie Orientée Pratique & Monde Réel",
          desc: "WSB Merito est reconnue en Pologne pour son modèle d'enseignement axé sur les études de cas réelles et son corps professoral composé d'experts du monde des affaires."
        },
        {
          title: "La Pologne, Cœur Logistique & Numérique de l'UE",
          desc: "Un carrefour économique stratégique d'Europe Centrale avec un écosystème florissant en e-commerce transfrontalier, tech et services partagés."
        },
        {
          title: "Immersion Multiculturelle & Réseau International",
          desc: "Des campus accueillant des étudiants de plus de 50 nationalités, offrant un cadre optimal pour développer un leadership interculturel."
        }
      ]
    },
    EN: {
      kicker: "Strategic Alignment & Learning Agreement",
      title: "Why WSB Merito University (Poland)?",
      subtitle: "A targeted study plan designed to capitalize on WSB's hands-on business leadership.",
      campusCaption: "WSB Merito Campus · High-tech international study environment in Poland",
      reasonsTitle: "3 Core Pillars for Choosing WSB",
      learningAgreementTitle: "Erasmus+ Learning Agreement (30 ECTS)",
      learningAgreementSubtitle: "Curated selection of 5 core modules totalling exactly 30 ECTS with full direct recognition.",
      totalEcts: "Total Credits",
      targetEcts: "30 / 30 ECTS",
      courseDetails: "Selected Module Information",
      homeEquiv: "Home University Recognized Equivalent",
      creditsLabel: "ECTS Credits",
      departmentLabel: "Academic Department",
      reasons: [
        {
          title: "Hands-on, Real-World Business Methodology",
          desc: "WSB Merito is renowned across Poland for practical business curricula created in partnership with industry practitioners and corporate leaders."
        },
        {
          title: "Poland: Central European Logistics & Tech Hub",
          desc: "One of Europe's most resilient economies, leading continental logistics corridors and digital cross-border trade."
        },
        {
          title: "Vibrant Multicultural Student Community",
          desc: "A globally oriented campus hosting international students across 50+ countries, ideal for cross-border leadership."
        }
      ]
    },
    PL: {
      kicker: "Strategiczne Dopasowanie i Program Studiów",
      title: "Dlaczego Uniwersytet WSB Merito w Polsce?",
      subtitle: "Ukierunkowany plan studiów, czerpiący z praktycznego profilu kształcenia WSB Merito.",
      campusCaption: "Kampus WSB Merito · Nowoczesna przestrzeń akademicka w Polsce",
      reasonsTitle: "3 Filary Wyboru WSB Merito",
      learningAgreementTitle: "Porozumienie o Programie Zajęć (Learning Agreement)",
      learningAgreementSubtitle: "5 kluczowych przedmiotów odpowiadających 30 punktom ECTS z pełną uznawalnością.",
      totalEcts: "Punkty Łącznie",
      targetEcts: "30 / 30 ECTS",
      courseDetails: "Szczegóły Wybranego Przedmiotu",
      homeEquiv: "Odpowiednik na Uczelni Macierzystej",
      creditsLabel: "Punkty ECTS",
      departmentLabel: "Wydział / Instytut",
      reasons: [
        {
          title: "Praktyczne Podejście do Biznesu",
          desc: "WSB Merito wyróżnia się programami tworzonymi we współpracy z praktykami biznesu i międzynarodowymi korporacjami."
        },
        {
          title: "Polska jako Hub Logistyczny i Cyfrowy UE",
          desc: "Jeden z najdynamiczniej rozwijających się rynków w Europie Środkowej z silnym sektorem e-commerce i technologicznym."
        },
        {
          title: "Międzynarodowe Środowisko Akademickie",
          desc: "Wspólnota studentów z ponad 50 krajów, sprzyjająca rozwijaniu kompetencji międzykulturowych."
        }
      ]
    }
  }[language];

  return (
    <section id="programme-wsb" className="py-16 sm:py-24 border-t border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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

        {/* WSB Campus & Pillars Split */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Campus Imagery & Polish context (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 dark:border-slate-800 dark:bg-slate-800/40">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <img
                src={candidate.campusImg}
                alt="Campus Uniwersytet WSB Merito"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-mono-data uppercase tracking-wider text-amber-300">
                  Uniwersytet WSB Merito
                </span>
                <p className="text-sm font-medium text-slate-100">
                  {labels.campusCaption}
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <MapPin className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>Poznań, Pologne (Wielkopolska)</span>
                <span>·</span>
                <span>Mobilité Erasmus+ Semestre 2</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Située à mi-chemin entre Berlin et Varsovie, la métropole de Poznań constitue l'un des carrefours logistiques et industriels les plus dynamiques d'Europe Centrale. WSB Merito Poznań y offre une formation d'affaires moderne, directement connectée aux multinationales et aux réseaux de commerce transfrontalier.
              </p>
            </div>
          </div>

          {/* 3 Core Reasons List (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              {labels.reasonsTitle}
            </h3>

            {labels.reasons.map((reason, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-amber-400/60 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-xs font-bold text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-mono-data">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      {reason.title}
                    </h4>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
