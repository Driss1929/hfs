/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AcademicSection } from './components/AcademicSection';
import { WsbLearningAgreement } from './components/WsbLearningAgreement';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsCertifications } from './components/SkillsCertifications';
import { ApplicationDossier } from './components/ApplicationDossier';
import { ContactSection } from './components/ContactSection';
import { OfficialDocumentsModal } from './components/OfficialDocumentsModal';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [language, setLanguage] = useState<'FR' | 'EN' | 'PL'>('FR');
  const [activeModalDoc, setActiveModalDoc] = useState<'resume' | 'efset' | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handlePrintDossier = () => {
    window.print();
  };

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDoc = (docType: 'resume' | 'efset') => {
    setActiveModalDoc(docType);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-slate-100">
      <div id="top" />

      {/* Top Bar Navigation conforming to §2 */}
      <Navbar
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        language={language}
        onChangeLanguage={setLanguage}
        onPrintDossier={handlePrintDossier}
        onOpenDocumentModal={handleOpenDoc}
      />

      {/* Main Content Layout */}
      <main>
        {/* Split Hero Section with Academic Status & KPI Strip */}
        <Hero
          language={language}
          onNavigateToSection={handleNavigateToSection}
          onOpenDocumentModal={handleOpenDoc}
        />

        {/* Academic Excellence & Degree Progression */}
        <AcademicSection language={language} />

        {/* WSB Merito Poland Study Plan & 30 ECTS Learning Agreement */}
        <WsbLearningAgreement language={language} />

        {/* Bento Grid Case Studies & Projects */}
        <ProjectsSection language={language} />

        {/* CEFR Languages, Tools & Verified Credentials */}
        <SkillsCertifications
          language={language}
          onOpenDocumentModal={handleOpenDoc}
        />

        {/* Official Application Dossier: Letter of Motivation, Europass CV, Recommendations */}
        <ApplicationDossier
          language={language}
          onPrintDossier={handlePrintDossier}
          onOpenDocumentModal={handleOpenDoc}
        />

        {/* Contact, Mobility Information & Quiet Footer */}
        <ContactSection
          language={language}
          onPrintDossier={handlePrintDossier}
        />
      </main>

      {/* Interactive Official PDF Document Viewer Modal */}
      <OfficialDocumentsModal
        documentType={activeModalDoc}
        onClose={() => setActiveModalDoc(null)}
      />
    </div>
  );
}
