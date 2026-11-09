import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ExternalLink, X, Check, ArrowUpRight, Sparkles, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  language: 'FR' | 'EN' | 'PL';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  const { projects } = PORTFOLIO_DATA;
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const labels = {
    FR: {
      kicker: "Travaux Académiques, PFE & Réalisations",
      title: "Projets d'Études, Recherche & Initiatives",
      subtitle: "Des réalisations concrètes classées selon leur priorité et leur niveau de validation documentaire.",
      viewProject: "Consulter la fiche détaillée",
      challengeLabel: "Problématique & Contexte",
      solutionLabel: "Méthodologie & Approche",
      resultsLabel: "Résultats & Impact Validé",
      skillsLabel: "Compétences Clés Mobilisées",
      deliverablesLabel: "Livrables Documentés",
      closeModal: "Fermer",
      explorationsTitle: "Concepts & Explorations Entrepreneuriales",
      explorationsSubtitle: "Projets d'innovation en cours de maturation et d'étude de faisabilité"
    },
    EN: {
      kicker: "Academic Casework, Thesis & Deliverables",
      title: "Study Projects, Applied Research & Leadership",
      subtitle: "Empirical casework prioritized according to their academic relevance and documented evidence.",
      viewProject: "View Full Project Details",
      challengeLabel: "Context & Challenge",
      solutionLabel: "Methodology & Approach",
      resultsLabel: "Key Validated Outcomes",
      skillsLabel: "Core Competencies Applied",
      deliverablesLabel: "Documented Deliverables",
      closeModal: "Close",
      explorationsTitle: "Concepts & Entrepreneurial Explorations",
      explorationsSubtitle: "Emerging innovation and feasibility studies in progress"
    },
    PL: {
      kicker: "Prace Akademickie, Praca Dyplomowa i Osiągnięcia",
      title: "Projekty Badawcze, PFE i Inicjatywy",
      subtitle: "Konkretne projekty ułożone według priorytetów merytorycznych i stopnia udokumentowania.",
      viewProject: "Zobacz Szczegóły Projektu",
      challengeLabel: "Wyzwanie i Kontekst",
      solutionLabel: "Metodologia",
      resultsLabel: "Wyniki",
      skillsLabel: "Kluczowe Umiejętności",
      deliverablesLabel: "Opracowane Materiały",
      closeModal: "Zamknij",
      explorationsTitle: "Koncepcje i Inicjatywy Przedsiębiorcze",
      explorationsSubtitle: "Projekty innowacyjne w fazie analizy wykonalności"
    }
  }[language];

  const conceptualProjects = [
    {
      title: "SmartLocker AI Morocco",
      subtitle: "Solution de Consignes Intelligentes & Logistique Dernier Kilomètre",
      description: "Étude d'opportunité d'un réseau de casiers automatiques intelligents connectés pour réduire les coûts de livraison e-commerce et optimiser le retrait colis au Maroc.",
      domain: "E-Commerce Logistics & AI"
    },
    {
      title: "SolarCity – Smart Solar Stations",
      subtitle: "Infrastructures Solaires Autonomes & Mobilité Durable",
      description: "Exploration de solutions énergétiques hybrides combinant mobilier urbain solaire, recharge d'équipements et capteurs environnementaux connectés.",
      domain: "Sustainable Innovation & Energy"
    }
  ];

  return (
    <section id="projets" className="py-16 sm:py-24 border-t border-slate-200/80 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-950/40">
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

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Project 1: PFE Le Millénaire (Priorité 1) - 8 cols */}
          <div
            onClick={() => setActiveProject(projects[0])}
            className="lg:col-span-8 group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-amber-400/80 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold text-white/90 bg-emerald-700/80 px-2.5 py-1 rounded backdrop-blur-sm font-mono-data">
                    Priorité 1 · Projet de Fin d'Études (Licence)
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-mono-data text-amber-300">
                    <span>{projects[0].category}</span>
                    <span>·</span>
                    <span>{projects[0].date}</span>
                  </div>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold leading-snug">
                    {projects[0].title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {projects[0].subtitle}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {projects[0].summary}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 font-mono-data">
                  {projects[0].skills.map((skill, i) => (
                    <React.Fragment key={i}>
                      <span>{skill}</span>
                      {i < projects[0].skills.length - 1 && <span aria-hidden="true">/</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 group-hover:underline">
                <span>{labels.viewProject}</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Project 2: Smart Ports & Digital Logistics (Priorité 2) - 4 cols */}
          <div
            onClick={() => setActiveProject(projects[1])}
            className="lg:col-span-4 group cursor-pointer flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-amber-400/80 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div>
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold text-white/90 bg-amber-700/80 px-2.5 py-1 rounded backdrop-blur-sm font-mono-data">
                    Priorité 2 · Recherche Académique
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-mono-data text-amber-300">
                    <span>{projects[1].category}</span>
                    <span>·</span>
                    <span>{projects[1].date}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {projects[1].title}
                </h3>
                <p className="mt-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {projects[1].subtitle}
                </p>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {projects[1].summary}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 group-hover:underline">
                <span>{labels.viewProject}</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Project 3: Leadership & Journée d'Intégration MCI (Priorité 3) - 7 cols */}
          <div
            onClick={() => setActiveProject(projects[2])}
            className="lg:col-span-7 group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-amber-400/80 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={projects[2].image}
                  alt={projects[2].title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold text-white bg-slate-950/70 px-2.5 py-1 rounded backdrop-blur-sm font-mono-data">
                    Priorité 3 · Leadership & Événementiel
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-mono-data text-amber-300">
                    <span>{projects[2].category}</span>
                    <span>·</span>
                    <span>{projects[2].date}</span>
                  </div>
                  <h3 className="text-lg font-bold">
                    {projects[2].title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {projects[2].subtitle}
                </p>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {projects[2].summary}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 group-hover:underline">
                <span>{labels.viewProject}</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Project 4: Rank Up Digital Marketing (Priorité 4) - 5 cols */}
          <div
            onClick={() => setActiveProject(projects[3])}
            className="lg:col-span-5 group cursor-pointer flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-amber-400/80 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <div>
              <div className="relative h-60 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={projects[3].image}
                  alt={projects[3].title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-semibold text-white/90 bg-slate-950/70 px-2.5 py-1 rounded backdrop-blur-sm font-mono-data">
                    Priorité 4 · Stage Marketing Digital
                  </span>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-mono-data text-amber-300">
                    <span>{projects[3].category}</span>
                    <span>·</span>
                    <span>{projects[3].date}</span>
                  </div>
                  <h3 className="text-lg font-bold">
                    {projects[3].title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {projects[3].subtitle}
                </p>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {projects[3].summary}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400 group-hover:underline">
                <span>{labels.viewProject}</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>

        </div>

        {/* Conceptual & Entrepreneurial Explorations (SmartLocker AI & SolarCity) */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 font-mono-data">
            <Sparkles className="h-4 w-4" />
            <span>{labels.explorationsTitle}</span>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {labels.explorationsSubtitle}
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {conceptualProjects.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-100 bg-slate-50/70 p-5 dark:border-slate-800 dark:bg-slate-800/50"
              >
                <span className="text-xs font-mono-data text-amber-700 dark:text-amber-400 font-semibold">
                  {item.domain}
                </span>
                <h4 className="mt-1 text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                  {item.subtitle}
                </p>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Lightbox for Project Details */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm">
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
              
              <button
                onClick={() => setActiveProject(null)}
                aria-label={labels.closeModal}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="pr-8">
                <div className="flex items-center gap-2 text-xs font-mono-data text-amber-700 dark:text-amber-400">
                  <span>{activeProject.category}</span>
                  <span>·</span>
                  <span>{activeProject.date}</span>
                </div>
                <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  {activeProject.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                  {activeProject.subtitle}
                </p>
              </div>

              <div className="mt-6 space-y-6 border-t border-slate-100 pt-6 dark:border-slate-800">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {labels.challengeLabel}
                  </h4>
                  <p className="mt-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeProject.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {labels.solutionLabel}
                  </h4>
                  <p className="mt-1.5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {labels.resultsLabel}
                  </h4>
                  <div className="mt-2 space-y-2">
                    {activeProject.results.map((res, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-slate-800 dark:text-slate-200">
                        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {labels.skillsLabel}
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activeProject.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 font-mono-data"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {labels.deliverablesLabel}
                    </h4>
                    <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {activeProject.deliverables.map((del, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-amber-500" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setActiveProject(null)}
                  className="rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600"
                >
                  {labels.closeModal}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
