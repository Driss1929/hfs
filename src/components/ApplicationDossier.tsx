import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { FileText, Award, BookCheck, Printer, Check, Quote, Download, UserCheck } from 'lucide-react';

interface ApplicationDossierProps {
  language: 'FR' | 'EN' | 'PL';
  onPrintDossier: () => void;
  onOpenDocumentModal?: (doc: 'resume' | 'efset') => void;
}

export const ApplicationDossier: React.FC<ApplicationDossierProps> = ({
  language,
  onPrintDossier,
  onOpenDocumentModal,
}) => {
  const { motivationLetter, candidate } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'letter' | 'cv' | 'recommendations' | 'integration'>('letter');
  const [letterLang, setLetterLang] = useState<'FR' | 'EN'>('FR');

  const englishLetterParagraphs = [
    "Dear Members of the Selection Committee and WSB Merito Poznań International Office,",
    "Currently enrolled in the Master's program in Management and International Trade (MCI) at the Faculty of Economics and Management of Taroudant (Ibn Zohr University, Morocco), following my Bachelor's degree in Economics and Management, I have the distinct honour of submitting my official application for an academic mobility semester under the European Erasmus+ Program at WSB Merito University in Poznań.",
    "My decision to apply to WSB Merito University in Poznań is driven by your institution's renowned emphasis on hands-on business methodologies and strong corporate partnerships. Situated in Greater Poland (Wielkopolska) — a strategic multimodal logistics and commercial crossroads between Berlin, Warsaw, and the Baltic ports —, WSB Poznań represents an exemplary academic ecosystem.",
    "My academic background in international trade and strategic management, complemented by my Bachelor's thesis on administrative digitization at Le Millénaire consulting firm and my ongoing research on Smart Ports, provides a solid foundation for the English-taught curriculum at WSB. The modules selected in my Learning Agreement (International Strategic Management, Global Marketing, Smart Supply Chain, Digital Business Transformation, and Polish Business Culture) directly match my semester 2 requirements, ensuring seamless validation of the 30 ECTS credits.",
    "Beyond academic coursework, as Secretary General of the MCI Conference and Training Club and an Enactus Morocco alumna (Training of Trainers in Prototyping), I am deeply committed to student community life. In Poznań, I look forward to serving as an enthusiastic ambassador for Euro-Moroccan intercultural dialogue and contributing actively to local Erasmus Student Network (ESN) initiatives.",
    "Thank you sincerely for your consideration of my application. I remain entirely at your disposal for an interview at your convenience.",
    "Yours faithfully,"
  ];

  const recommendations = [
    {
      professor: "Pr. Youssef Es-Saady",
      title: "Professeur de Logistique & Économie Numérique · Encadrant de Recherche Smart Port",
      quote: "Hafsa El Mimouni fait preuve d'une rigueur intellectuelle exemplaire et d'une remarquable capacité d'analyse des technologies appliquées au commerce international. Ses travaux sur la logistique portuaire intelligente et sa proactivité comme Secrétaire Générale du Club MCI démontrent sa maturité pour exceller lors de sa mobilité Erasmus+ à WSB Merito Poznań.",
      date: "Année Académique 2025–2026"
    },
    {
      professor: "Pr. Abderrahmane Sadiq",
      title: "Professeur d'Économie & Management Stratégique · Faculté d'Économie et de Gestion de Taroudant",
      quote: "Mademoiselle El Mimouni allie un sens aigu des responsabilités à une excellente maîtrise des fondamentaux du management international. Son esprit d'équipe, son adaptabilité interculturelle et son investissement constant en font une ambassadrice de premier ordre pour représenter notre université en Pologne.",
      date: "Année Académique 2025–2026"
    }
  ];

  return (
    <section id="documents" className="py-16 sm:py-24 border-t border-slate-200/80 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-amber-700 dark:text-amber-400 font-mono-data">
              Dossier Officiel Erasmus+ 2026–2027
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Documents & Pièces Justificatives
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
              Consultation des documents officiels de candidature pour la commission de sélection et le bureau d'accueil WSB Merito Poznań.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onPrintDossier}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-slate-800 dark:bg-amber-600 dark:hover:bg-amber-500 whitespace-nowrap"
            >
              <Printer className="h-4 w-4" />
              <span>Imprimer / Exporter le Dossier Complet (PDF)</span>
            </button>
          </div>
        </div>

        {/* Tab Controls (adheres to interactive controls rule §1.A) */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('letter')}
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
              activeTab === 'letter'
                ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Lettre de Motivation Officielle
          </button>
          <button
            onClick={() => setActiveTab('cv')}
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
              activeTab === 'cv'
                ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Curriculum Vitae Europass
          </button>
          <button
            onClick={() => setActiveTab('recommendations')}
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
              activeTab === 'recommendations'
                ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Recommandations Académiques (2)
          </button>
          <button
            onClick={() => setActiveTab('integration')}
            className={`rounded-lg px-4 py-2 text-xs font-semibold transition-colors ${
              activeTab === 'integration'
                ? 'bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200'
            }`}
          >
            Plan d'Intégration & Rayonnement
          </button>
        </div>

        {/* Tab 1: Official Motivation Letter */}
        {activeTab === 'letter' && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            {/* Language toggle for the letter */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 dark:border-slate-800">
              <div className="text-xs font-mono-data text-slate-500 dark:text-slate-400">
                <span>Réf. Dossier : #ERASMUS-WSB-POZNAN-MCI-2026</span>
              </div>
              <div className="flex items-center gap-1 rounded-md border border-slate-200 bg-slate-100 p-0.5 text-xs font-semibold dark:border-slate-800 dark:bg-slate-800">
                <button
                  onClick={() => setLetterLang('FR')}
                  className={`rounded px-2.5 py-1 transition-colors ${
                    letterLang === 'FR' ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Français
                </button>
                <button
                  onClick={() => setLetterLang('EN')}
                  className={`rounded px-2.5 py-1 transition-colors ${
                    letterLang === 'EN' ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-700 dark:text-white' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  English (WSB Poznań Jury)
                </button>
              </div>
            </div>

            {/* Letter Header */}
            <div className="mt-8 space-y-4">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                <p>Hafsa El Mimouni</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-normal">
                  {candidate.email} · {candidate.phone} ·{' '}
                  <a
                    href={candidate.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A66C2] hover:underline dark:text-[#70b5f9]"
                  >
                    linkedin.com/in/elmimouni-hafsa
                  </a>
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-normal mt-0.5">
                  Étudiante en Master MCI · {candidate.homeFaculty} · {candidate.homeUniversity}
                </p>
              </div>

              <div className="text-right text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white">
                  Commission de Sélection Erasmus+
                </p>
                <p>Bureau des Relations Internationales (International Relations Office)</p>
                <p className="font-medium text-amber-700 dark:text-amber-400">
                  Uniwersytet WSB Merito w Poznaniu (Polska)
                </p>
              </div>
            </div>

            {/* Subject */}
            <div className="mt-8 border-y border-slate-100 py-3 dark:border-slate-800">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {letterLang === 'FR' ? (
                  <>Objet : {motivationLetter.subject}</>
                ) : (
                  <>Subject: Application for Erasmus+ Academic Mobility at WSB Merito University in Poznań (Poland) — Semester 2</>
                )}
              </p>
            </div>

            {/* Paragraphs */}
            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300 font-sans">
              {(letterLang === 'FR' ? motivationLetter.paragraphs : englishLetterParagraphs).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <div className="text-right">
                <p className="font-serif-display italic text-lg text-slate-900 dark:text-white">
                  Hafsa El Mimouni
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Candidate Erasmus+ · Secrétaire Générale du Club MCI
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Europass CV Format */}
        {activeTab === 'cv' && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-8">
            <div className="border-b border-slate-100 pb-6 dark:border-slate-800 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Hafsa El Mimouni — Curriculum Vitae Europass
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono-data">
                  Format standardisé de la Commission Européenne pour la mobilité étudiante Erasmus+
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {onOpenDocumentModal && (
                  <button
                    onClick={() => onOpenDocumentModal('resume')}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-amber-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-amber-700 whitespace-nowrap"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>Consulter CV Officiel (PDF)</span>
                  </button>
                )}

                <a
                  href={candidate.resumePdf}
                  download="Hafsa_EL_Mimouni_Resume.pdf"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750 whitespace-nowrap"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Télécharger PDF</span>
                </a>

                {onOpenDocumentModal && (
                  <button
                    onClick={() => onOpenDocumentModal('efset')}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 transition-colors hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 whitespace-nowrap"
                  >
                    <UserCheck className="h-3.5 w-3.5" />
                    <span>EF SET 53 (B2)</span>
                  </button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Left sidebar info (4 cols) */}
              <div className="md:col-span-4 space-y-6 border-r border-slate-100 pr-6 dark:border-slate-800">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Coordonnées
                  </h4>
                  <div className="mt-2 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
                    <p><strong>Email : </strong>{candidate.email}</p>
                    <p><strong>Tél : </strong>{candidate.phone}</p>
                    <p>
                      <strong>LinkedIn : </strong>
                      <a
                        href={candidate.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A66C2] hover:underline dark:text-[#70b5f9]"
                      >
                        in/elmimouni-hafsa
                      </a>
                    </p>
                    <p><strong>Localisation : </strong>Taroudant / Agadir, Maroc</p>
                    <p><strong>Mobilité visée : </strong>WSB Poznań (Semestre 2)</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Langues (CECRL)
                  </h4>
                  <div className="mt-2 text-xs space-y-1 text-slate-700 dark:text-slate-300 font-mono-data">
                    <p>Français : C1/C2 (Bilingue d'études)</p>
                    <p>Anglais : B2 Déclaré (EF SET: 51)</p>
                    <p>Arabe : C2 (Langue maternelle)</p>
                    <p>Polonais : A1 (En cours d'apprentissage)</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Outils Numériques
                  </h4>
                  <div className="mt-2 text-xs space-y-1 text-slate-700 dark:text-slate-300 font-mono-data">
                    <p>Canva & CapCut</p>
                    <p>NTCompta11 (Comptabilité)</p>
                    <p>Microsoft Excel & PowerPoint</p>
                    <p>Outils d'IA pour le Business</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Certifications
                  </h4>
                  <div className="mt-2 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
                    <p className="font-semibold text-slate-900 dark:text-white">AI Strategies for Marketing & Sales</p>
                    <p className="text-[11px] text-slate-500">Simplilearn · Septembre 2026</p>
                    <p className="font-semibold text-slate-900 dark:text-white mt-1">Elements of AI for Business</p>
                    <p className="text-[11px] text-slate-500">MinnaLearn · Fin 2025</p>
                    <p className="font-semibold text-slate-900 dark:text-white mt-1">ToT – Prototyping</p>
                    <p className="text-[11px] text-slate-500">ENACTUS Morocco · 2024</p>
                  </div>
                </div>
              </div>

              {/* Right main timeline (8 cols) */}
              <div className="md:col-span-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Parcours Universitaire
                  </h4>
                  <div className="mt-3 space-y-4">
                    <div className="border-l-2 border-slate-300 pl-4 dark:border-slate-700">
                      <span className="text-xs font-mono-data text-amber-700 dark:text-amber-400 font-semibold">2025 – Présent</span>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                        Master Management et Commerce International (MCI)
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Faculté d'Économie et de Gestion de Taroudant (FEGT) · Université Ibn Zohr
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Modules : Marketing Stratégique & International, Supply Chain, Commerce & Droit des Affaires, Transformation Digitale.
                      </p>
                    </div>

                    <div className="border-l-2 border-slate-300 pl-4 dark:border-slate-700">
                      <span className="text-xs font-mono-data text-amber-700 dark:text-amber-400 font-semibold">2022 – 2025</span>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                        Licence en Économie et Gestion
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Faculté d'Économie et de Gestion de Taroudant (FEGT) · Université Ibn Zohr
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        PFE Soutenu : <em>« L'impact de la digitalisation sur la gestion documentaire dans un cabinet comptable : cas du Bureau d'Études Le Millénaire »</em>.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Expériences Professionnelles
                  </h4>
                  <div className="mt-3 space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <div>
                      <strong className="text-slate-900 dark:text-white">Rank Up (Agadir, 2024) — Stage Marketing Digital : </strong>
                      Création de contenus (Canva, CapCut), gestion des réseaux sociaux, rédaction et téléprospection commerciale.
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white">Bureau d'Études Le Millénaire SARL (2025) — Stage PFE : </strong>
                      Pratique de NTCompta11, gestion déclarative (TVA, IS, CNSS), lettrage et audit des flux documentaires comptables.
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white">BétoCall (Octobre 2025) — Téléprospection Commerciale : </strong>
                      Qualification des besoins d'affaires et communication orale sous contrainte d'objectifs.
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Leadership Associatif & Universitaire
                  </h4>
                  <div className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <div>
                      <strong className="text-slate-900 dark:text-white">Secrétaire Générale du Club Conférences & Formations MCI : </strong>
                      Coordination de la 'Journée d'Intégration MCI' (10 Février 2026), organisation de conférences et visite de COPAG (18 Mai 2026).
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white">ENACTUS Morocco : </strong>
                      Participation aux projets collaboratifs et certification Training of Trainers (ToT) en prototypage.
                    </div>
                    <div>
                      <strong className="text-slate-900 dark:text-white">AgWater Hackathon (Décembre 2024) : </strong>
                      Travail en équipe multidisciplinaire sur l'innovation durable.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Letters of Recommendation */}
        {activeTab === 'recommendations' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendations.map((rec, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
              >
                <div>
                  <Quote className="h-8 w-8 text-amber-600/60 dark:text-amber-400/60" />
                  <p className="mt-4 text-sm sm:text-base italic leading-relaxed text-slate-700 dark:text-slate-300">
                    « {rec.quote} »
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {rec.professor}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {rec.title}
                  </p>
                  <p className="mt-1 text-xs font-mono-data text-amber-700 dark:text-amber-400">
                    {rec.date} · Recommandation Académique
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: Integration Plan in Poland */}
        {activeTab === 'integration' && (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Plan d'Action pour l'Intégration & le Rayonnement à WSB Merito Poznań
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                La mobilité Erasmus+ ne se résume pas à une salle de classe : c'est un investissement humain, civique et culturel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="space-y-2">
                <span className="text-xs font-bold font-mono-data text-amber-700 dark:text-amber-400">01. Immersion Linguistique</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Langue & Culture Polonaise</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Poursuite du cours de polonais des affaires (A1/A2), participation aux tandems linguistiques avec les étudiants de Poznań et découverte du patrimoine de la Grande-Pologne.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold font-mono-data text-amber-700 dark:text-amber-400">02. Vie Associative & ESN Poznań</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Engagement ESN WSB Poznań</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Adhésion active à la section Erasmus Student Network (ESN) pour co-animer des ateliers culturels méditerranéens et partager mon expérience de Secrétaire Générale du Club MCI.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold font-mono-data text-amber-700 dark:text-amber-400">03. Ambassadrice de Mobilité</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Pont Bilatéral Maroc – Pologne</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Création d'un guide pratique et de retours d'expériences documentés pour encourager les futurs étudiants du Master MCI à candidater pour l'Université WSB Merito en Pologne.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
