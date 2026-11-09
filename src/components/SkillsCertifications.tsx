import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Globe2, Award, Terminal, CheckCircle2, ShieldCheck, Cpu, FileText } from 'lucide-react';

interface SkillsCertificationsProps {
  language: 'FR' | 'EN' | 'PL';
  onOpenDocumentModal?: (doc: 'resume' | 'efset') => void;
}

export const SkillsCertifications: React.FC<SkillsCertificationsProps> = ({
  language,
  onOpenDocumentModal,
}) => {
  const { languages, certifications, tools } = PORTFOLIO_DATA;

  const labels = {
    FR: {
      kicker: "Compétences & Profil International",
      title: "Langues, Certifications & Outils Numériques",
      subtitle: "Un profil trilingue et agile, doté de certifications en IA pour le business et d'une pratique concrète des logiciels de gestion et de création.",
      languagesTitle: "Passeport de Compétences Linguistiques Européen",
      certificationsTitle: "Certifications & Formations de Formateurs",
      toolsTitle: "Outils Numériques & Gestion",
      verifiedBadge: "Formation Validée"
    },
    EN: {
      kicker: "Competencies & Global Agility",
      title: "Languages, Certifications & Digital Tools",
      subtitle: "A trilingual profile equipped with AI for business certificates, software management skills, and digital content creation tools.",
      languagesTitle: "European Language Competency Passport",
      certificationsTitle: "Certifications & Training of Trainers",
      toolsTitle: "Digital & Management Tooling",
      verifiedBadge: "Verified Credential"
    },
    PL: {
      kicker: "Kompetencje i Profil Globalny",
      title: "Języki, Certyfikaty i Narzędzia Cyfrowe",
      subtitle: "Trójjęzyczny profil poparty certyfikatami z zakresu AI w biznesie oraz praktyczną znajomością oprogramowania do zarządzania.",
      languagesTitle: "Europejski Paszport Językowy",
      certificationsTitle: "Certyfikaty i Warsztaty Trenerskie",
      toolsTitle: "Oprogramowanie i Narzędzia Cyfrowe",
      verifiedBadge: "Certyfikat Ukończenia"
    }
  }[language];

  return (
    <section className="py-16 sm:py-24 border-t border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900">
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

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Languages European Passport (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-800/40">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <Globe2 className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span>{labels.languagesTitle}</span>
            </div>

            <div className="mt-6 space-y-6">
              {languages.map((item, idx) => (
                <div key={idx} className="space-y-2 border-b border-slate-200/70 pb-5 last:border-none last:pb-0 dark:border-slate-700/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-base font-bold text-slate-900 dark:text-white">
                        {item.language}
                      </span>
                      <span className="ml-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                        {item.level}
                      </span>
                    </div>
                    <span className="text-xs font-mono-data font-bold text-amber-700 dark:text-amber-400">
                      {item.cefr}
                    </span>
                  </div>

                  {/* Progress bar indicator */}
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-700">
                    <div
                      style={{ width: `${item.percent}%` }}
                      className="h-full bg-slate-800 dark:bg-amber-500 transition-all duration-500"
                    />
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Tech Tools (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Certifications block */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <Award className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>{labels.certificationsTitle}</span>
              </div>

              <div className="mt-4 space-y-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/60"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {cert.name}
                      </h4>
                      <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono-data">
                        <span>{cert.issuer}</span>
                        <span>·</span>
                        <span>{cert.year}</span>
                      </div>
                      {cert.credentialUrl && (
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                          <span>{cert.credentialUrl}</span>
                          {idx === 0 && (
                            <>
                              {onOpenDocumentModal && (
                                <button
                                  onClick={() => onOpenDocumentModal('efset')}
                                  className="inline-flex items-center gap-1 font-semibold text-amber-700 hover:underline dark:text-amber-400"
                                >
                                  <FileText className="h-3 w-3" />
                                  <span>Voir Certificat PDF</span>
                                </button>
                              )}
                              <a
                                href="https://cert.efset.org/vky6FP"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-emerald-700 hover:underline dark:text-emerald-400"
                              >
                                · Vérifier sur efset.org ↗
                              </a>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                    <span className="shrink-0 text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-mono-data">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      {cert.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools block */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <Terminal className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>{labels.toolsTitle}</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2.5">
                {tools.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/70 px-3.5 py-2 text-xs dark:border-slate-800 dark:bg-slate-800/40"
                  >
                    <span className="font-semibold text-slate-800 dark:text-slate-200 font-mono-data">
                      {t.name}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-right">
                      {t.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
