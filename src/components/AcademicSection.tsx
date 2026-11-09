import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Briefcase, Users, Award, Check, MapPin, Calendar, Sparkles } from 'lucide-react';

interface AcademicSectionProps {
  language: 'FR' | 'EN' | 'PL';
}

export const AcademicSection: React.FC<AcademicSectionProps> = ({ language }) => {
  const { academicTimeline, experiences, associativeRoles } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<'academic' | 'professional' | 'associative'>('academic');

  const labels = {
    FR: {
      kicker: "Parcours Global · 3 Dimensions Complémentaires",
      title: "Formation Académique, Expériences & Leadership",
      subtitle: "Un profil équilibré alliant rigueur universitaire en économie & gestion, expériences de terrain et coordination associative active.",
      tabAcademic: "Formation Académique (LMD)",
      tabProfessional: "Expériences & Responsabilités (4)",
      tabAssociative: "Leadership Associatif & MCI (3)",
      ectsTitle: "Progression du Cursus Européen (LMD)",
      creditsAcquired: "Licence Validée (180 ECTS) · Master MCI en cours",
      creditsTargeted: "+ 30 ECTS Mobilité WSB Poznań",
      currentTrackNotice: "Cursus actuel : Master 1 Management & Commerce International (MCI) à la Faculté d'Économie et de Gestion de Taroudant (Université Ibn Zohr).",
      keyModules: "Enseignements majeurs suivis",
      keyTasks: "Activités & Réalisations documentées",
      keyTools: "Outils mobilisés"
    },
    EN: {
      kicker: "Global Profile · 3 Complementary Dimensions",
      title: "Academic Track, Professional Experience & Leadership",
      subtitle: "A balanced profile combining academic rigor in economics & management, hands-on business internships, and active student coordination.",
      tabAcademic: "Academic Education",
      tabProfessional: "Professional Experience & Roles (4)",
      tabAssociative: "Student Leadership & Club (3)",
      ectsTitle: "European Degree Progression (ECTS)",
      creditsAcquired: "Bachelor Completed · Master MCI Ongoing",
      creditsTargeted: "+ 30 ECTS WSB Poznań Exchange",
      currentTrackNotice: "Current Degree: Master's in Management & International Trade (MCI), Faculty of Economics and Management Taroudant (Ibn Zohr University).",
      keyModules: "Core Modules Completed",
      keyTasks: "Documented Responsibilities & Tasks",
      keyTools: "Applied Tools"
    },
    PL: {
      kicker: "Profil Całościowy · 3 Wymiary",
      title: "Edukacja, Doświadczenie Zawodowe i Przywództwo",
      subtitle: "Zrównoważony profil łączący wiedzę akademicką z zakresu ekonomii i zarządzania, staże zawodowe oraz działalność w samorządzie studenckim.",
      tabAcademic: "Ścieżka Akademicka",
      tabProfessional: "Doświadczenie Zawodowe (4)",
      tabAssociative: "Działalność Społeczna i Klub MCI (3)",
      ectsTitle: "Europejski System Punktów (ECTS)",
      creditsAcquired: "Licencjat Ukończony · Studia Magisterskie w Trakcie",
      creditsTargeted: "+ 30 ECTS Mobilność WSB Poznań",
      currentTrackNotice: "Obecne studia: Magister Zarządzania i Handlu Międzynarodowego (MCI) na Wydziale Ekonomii i Zarządzania w Taroudant (Uniwersytet Ibn Zohr).",
      keyModules: "Kluczowe Przedmioty",
      keyTasks: "Udokumentowane Obowiązki",
      keyTools: "Narzędzia"
    }
  }[language];

  return (
    <section id="parcours" className="py-16 sm:py-24 border-t border-slate-200/80 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400 font-mono-data">
            {labels.kicker}
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            {labels.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {labels.subtitle}
          </p>
        </div>

        {/* ECTS & Curriculum Progression Banner */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>{labels.ectsTitle}</span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {labels.currentTrackNotice}
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
              <span className="text-emerald-700 dark:text-emerald-400 font-mono-data">
                {labels.creditsAcquired}
              </span>
              <span className="text-amber-700 dark:text-amber-400 font-mono-data">
                {labels.creditsTargeted}
              </span>
            </div>
          </div>

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div className="flex h-full w-full">
              <div
                style={{ width: '85%' }}
                className="h-full bg-emerald-600 transition-all duration-500"
                title="Licence Validée & Semestre 1 MCI en cours"
              />
              <div
                style={{ width: '15%' }}
                className="h-full bg-amber-500 transition-all duration-500"
                title="Mobilité Erasmus+ WSB Poznań (Semestre 2 - 30 ECTS)"
              />
            </div>
          </div>

          <div className="mt-2.5 flex justify-between text-xs text-slate-500 dark:text-slate-400 font-mono-data">
            <span>Licence Économie & Gestion (2022–2025)</span>
            <span>Master 1 MCI (S1 Taroudant)</span>
            <span className="font-bold text-amber-600 dark:text-amber-400">Mobilité WSB Poznań (S2 · 30 ECTS)</span>
          </div>
        </div>

        {/* 3 Pillars Segmented Control (Interactive Filter Buttons adhering to §1.A) */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3 dark:border-slate-800">
          <button
            onClick={() => setActiveCategory('academic')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${
              activeCategory === 'academic'
                ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <GraduationCap className="h-4 w-4" />
            <span>{labels.tabAcademic}</span>
          </button>

          <button
            onClick={() => setActiveCategory('professional')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${
              activeCategory === 'professional'
                ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Briefcase className="h-4 w-4" />
            <span>{labels.tabProfessional}</span>
          </button>

          <button
            onClick={() => setActiveCategory('associative')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-semibold transition-colors ${
              activeCategory === 'associative'
                ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
            }`}
          >
            <Users className="h-4 w-4" />
            <span>{labels.tabAssociative}</span>
          </button>
        </div>

        {/* Tab 1: Formation Académique */}
        {activeCategory === 'academic' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {academicTimeline.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono-data text-amber-700 dark:text-amber-400 font-semibold">
                    <span>{item.period}</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-sans">{item.status}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {item.institution}
                  </p>
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    {labels.keyModules}
                  </h4>
                  <div className="space-y-1.5">
                    {item.keyCourses.map((c, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Expériences Professionnelles */}
        {activeCategory === 'professional' && (
          <div className="mt-8 space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-mono-data font-semibold text-amber-700 dark:text-amber-400">
                      {exp.period} · {exp.location}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      Entreprise : <strong>{exp.company}</strong>
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mt-4 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {labels.keyTasks}
                  </h4>
                  {exp.tasks.map((task, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <span className="text-xs text-slate-400 font-medium">{labels.keyTools} :</span>
                  {exp.tools.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-mono-data text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Leadership Associatif & Universitaire */}
        {activeCategory === 'associative' && (
          <div className="mt-8 space-y-6">
            {associativeRoles.map((role, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 dark:border-slate-800">
                  <div>
                    <span className="text-xs font-mono-data font-semibold text-amber-700 dark:text-amber-400">
                      {role.period}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {role.role}
                    </h3>
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
                      Organisation : <strong>{role.organization}</strong>
                    </p>
                  </div>
                  {idx === 0 && (
                    <span className="self-start sm:self-auto rounded-lg bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200 dark:border-amber-900/40">
                      Mandat Actuel
                    </span>
                  )}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {role.description}
                </p>

                <div className="mt-4 space-y-1.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Actions & Réalisations Majeures
                  </h4>
                  {role.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <Check className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
