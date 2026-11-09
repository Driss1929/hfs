export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  skills: string[];
  deliverables: string[];
  statusLabel?: string;
}

export interface WsbCourse {
  code: string;
  title: string;
  titlePl: string;
  credits: number;
  homeEquivalence: string;
  description: string;
  semester: string;
  professorField: string;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string;
  tasks: string[];
  tools: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  badge: string;
  credentialUrl?: string;
}

export interface LanguageSkill {
  language: string;
  level: string;
  cefr: string;
  details: string;
  percent: number;
}

export interface AssociativeRole {
  organization: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  candidate: {
    fullName: "Hafsa El Mimouni",
    title: "Étudiante en Master Management et Commerce International (MCI)",
    tagline: "Management. Strategy. Digital Innovation.",
    slogan: "Understanding Business. Connecting Ideas. Creating Value.",
    shortBio: "Étudiante en Master Management et Commerce International à l'Université Ibn Zohr, titulaire d'une Licence en Économie et Gestion. Mon parcours associe marketing digital, gestion comptable, communication et coordination associative. Candidate à la mobilité Erasmus+ à l'Université WSB Merito Poznań (Pologne).",
    targetProgram: "Mobilité Académique Erasmus+ (Semestre 2)",
    targetInstitution: "Uniwersytet WSB Merito w Poznaniu (Polska)",
    targetCity: "Poznań, Pologne",
    homeUniversity: "Université Ibn Zohr",
    homeFaculty: "Faculté d'Économie et de Gestion de Taroudant (FEGT)",
    currentDegree: "Master Management et Commerce International (MCI)",
    previousDegree: "Licence en Économie et Gestion (09/2021 – 07/2025)",
    email: "hafsaelmimouni3@gmail.com",
    phone: "+212 631-112212",
    linkedinUrl: "https://www.linkedin.com/in/elmimouni-hafsa/",
    location: "Taroudant, Maroc · Mobilité ciblée : Poznań, Pologne",
    mobilityYear: "Projet Erasmus+ 2026–2027 (Semestre 2)",
    avatar: "/assets/aistudio/image_6eceb516.png", // Authentic photo on stage
    resumePdf: "/assets/aistudio/Hafsa_EL_Mimoun_Resume_93f06db5.pdf",
    efSetPdf: "/assets/aistudio/EF_SET_Certificate_15648c26.pdf",
    campusImg: "/src/assets/images/wsb_university_campus_1794242161089.jpg",
    projectImg: "/src/assets/images/business_case_project_1794242160713.jpg",
    polandImg: "/src/assets/images/erasmus_cultural_poland_1794242160396.jpg",
  },

  keyMetrics: [
    { value: "Master MCI", suffix: "", label: "Formation d'Excellence", sublabel: "Université Ibn Zohr · Taroudant" },
    { value: "30", suffix: " ECTS", label: "Mobilité WSB Poznań", sublabel: "Semestre 2 · Validation directe" },
    { value: "B2 (53)", suffix: "/100", label: "Anglais Certifié EF SET", sublabel: "Reading C1 (63) · cert.efset.org/vky6FP" },
    { value: "Secrétaire Générale", suffix: "", label: "Leadership Associatif", sublabel: "Club Conférences & Formations MCI" }
  ],

  academicTimeline: [
    {
      period: "12/2025 – Current",
      degree: "Master's Degree in Management and International Trade (MCI)",
      institution: "Faculty of Economics and Management of Taroudant · Ibn Zohr University",
      status: "In progress · Erasmus+ Candidate",
      description: "Advanced master's track covering international strategic management, global marketing, supply chain and cross-border trade operations.",
      keyCourses: [
        "International Strategic Management",
        "Global Marketing Strategies & Consumer Behaviour",
        "Supply Chain Management & Smart Logistics",
        "Digital Business Transformation & Information Systems",
        "Cross-Cultural Communication & Business Ethics"
      ]
    },
    {
      period: "09/2021 – 07/2025",
      degree: "Bachelor's Degree in Economics and Management",
      institution: "Faculty of Economics and Management of Taroudant · Ibn Zohr University",
      status: "Degree Awarded · Thesis Validated",
      description: "Comprehensive foundational degree in economics, quantitative methods, financial management, accounting frameworks, and business marketing.",
      keyCourses: [
        "General Economics & Macroeconomics",
        "Financial & Analytical Accounting",
        "Marketing & Consumer Behavior",
        "Corporate Taxation & Business Law",
        "Statistics & Econometrics"
      ]
    }
  ],

  experiences: [
    {
      company: "MCI Conference & Training Club",
      role: "Secretary General (Secrétaire Générale)",
      location: "Taroudant, Morocco",
      period: "01/2026 – Current",
      description: "Executive coordination of academic conferences, student integration, and industry study tours for the Master's program.",
      tasks: [
        "Contributed to the organization and coordination of a pedagogical study visit to COPAG",
        "Participated in organizing the MCI Integration Day to welcome new students and promote team cohesion",
        "Led official communication, event logistics, and partnership outreach"
      ],
      tools: ["Event Management", "Canva", "Public Speaking", "Team Coordination"]
    },
    {
      company: "ENACTUS",
      role: "Sponsorship Manager (Responsable Sponsoring & Partenariats)",
      location: "Taroudant, Morocco",
      period: "08/2024 – 06/2025",
      description: "Prospection, negotiation, and fundraising for student social entrepreneurship and innovation projects.",
      tasks: [
        "Identified and contacted potential sponsors, institutional partners, and corporate executives",
        "Developed comprehensive sponsorship proposals and structured partnership agreements",
        "Negotiated resources and support for community-driven social entrepreneurship initiatives"
      ],
      tools: ["Sponsorship Pitching", "B2B Negotiation", "Proposal Drafting", "Partnership Outreach"]
    },
    {
      company: "RANKUP",
      role: "Digital Marketing Intern (Stage en Marketing Digital)",
      location: "Agadir, Morocco",
      period: "08/2024 – 10/2024",
      description: "Digital agency internship delivering social media strategy, visual asset creation, and client prospecting.",
      tasks: [
        "Created engaging digital content, visual assets and short-form videos with Canva and CapCut",
        "Supported multi-channel social media campaigns and audience engagement strategies",
        "Conducted targeted teleprospecting and contributed to commercial partnership development"
      ],
      tools: ["Canva", "CapCut", "Social Media Management", "Teleprospecting", "Content Strategy"]
    },
    {
      company: "ENACTUS",
      role: "Active Member & Club Trainer",
      location: "Taroudant, Morocco",
      period: "11/2023 – 07/2024",
      description: "Active engagement in social entrepreneurship, workshop facilitation, and leadership development.",
      tasks: [
        "Participated in organizing a March 8th event in collaboration with the Women's Club to promote women's empowerment",
        "Delivered two structured training sessions for club members on Pricing Strategies and Prototyping",
        "Earned the Training of Trainers (ToT) – Prototyping certification"
      ],
      tools: ["Training & Workshop Delivery", "Prototyping", "Design Thinking", "Community Engagement"]
    }
  ] as Experience[],

  associativeRoles: [
    {
      organization: "Club Conférences et Formations du Master MCI",
      role: "Secrétaire Générale",
      period: "2025 – Présent",
      description: "Poste exécutif central garantissant la coordination opérationnelle des initiatives académiques, des formations et des partenariats du Master.",
      highlights: [
        "Organisation de la 'Journée d'Intégration MCI' (10 Février 2026) : gestion logistique, coordination des intervenants et animation",
        "Préparation de conférences universitaires et d'ateliers méthodologiques pour les étudiants",
        "Communication visuelle officielle (affiches et supports promotionnels conçus sous Canva)",
        "Organisation de la visite pédagogique de l'entreprise COPAG (18 Mai 2026) pour étudier les flux agro-industriels"
      ]
    },
    {
      organization: "ENACTUS Morocco",
      role: "Membre Active & Formation Training of Trainers (ToT)",
      period: "Février – Mars 2024",
      description: "Engagement dans l'entrepreneuriat social étudiant et le développement de solutions durables à impact.",
      highlights: [
        "Certification 'Training of Trainers (ToT) – Prototyping' délivrée par Enactus Morocco",
        "Participation à l'organisation d'événements associatifs en collaboration avec le Club Pour Elle",
        "Pratique des méthodologies de design thinking, prototypage rapide et gestion de projet d'équipe"
      ]
    },
    {
      organization: "AgWater Hackathon",
      role: "Participante & Résolution Collaborative de Problèmes",
      period: "6 – 7 Décembre 2024",
      description: "Participation à un hackathon intensif de 48h consacré à l'innovation durable autour des défis hydriques et agricoles.",
      highlights: [
        "Travail en équipe multidisciplinaire sous contrainte de temps",
        "Élaboration d'une proposition de valeur et d'un pitch stratégique",
        "Application des outils d'analyse de faisabilité et d'impact socio-économique"
      ]
    }
  ] as AssociativeRole[],

  wsbLearningAgreement: [
    {
      code: "WSB-MGT-401",
      title: "International Strategic Management in Central Europe",
      titlePl: "Zarządzanie Strategiczne na Rynkach Europy Środkowej",
      credits: 6,
      homeEquivalence: "Management Stratégique International (MCI Semestre 2)",
      semester: "Semestre 2 (Mobilité Erasmus+ WSB Poznań)",
      professorField: "Dept. of International Business & Strategic Management",
      description: "Analyse des stratégies concurrentielles des multinationales en Pologne et dans l'espace UE, analyse PESTEL/SWOT approfondie et intégration des chaînes de valeur régionales."
    },
    {
      code: "WSB-MKT-403",
      title: "Global Marketing Strategies & Consumer Behaviour",
      titlePl: "Globalne Strategie Marketingowe i Zachowania Konsumentów",
      credits: 6,
      homeEquivalence: "Marketing Stratégique & International (MCI Semestre 2)",
      semester: "Semestre 2 (Mobilité Erasmus+ WSB Poznań)",
      professorField: "Institute of Marketing & Digital Communications",
      description: "Conception de campagnes marketing transfrontalières, segmentation interculturelle, études de cas réelles et exploration des approches de neuromarketing."
    },
    {
      code: "WSB-SCM-405",
      title: "International Supply Chain & Smart Logistics Hubs",
      titlePl: "Międzynarodowy Łańcuch Dostaw i Inteligentne Huby Logistyczne",
      credits: 6,
      homeEquivalence: "Supply Chain & Logistique Internationale (MCI Semestre 2)",
      semester: "Semestre 2 (Mobilité Erasmus+ WSB Poznań)",
      professorField: "Department of Logistics & Transport Systems",
      description: "Étude des corridors logistiques de Pologne (Poznań étant un hub multimodal clé Berlin-Varsovie), technologies Smart Port, IoT et décarbonation des transports."
    },
    {
      code: "WSB-DIG-408",
      title: "Digital Business Transformation & Artificial Intelligence in Management",
      titlePl: "Cyfrowa Transformacja Biznesu i AI w Zarządzaniu",
      credits: 6,
      homeEquivalence: "Transformation Numérique & SI (MCI Semestre 2)",
      semester: "Semestre 2 (Mobilité Erasmus+ WSB Poznań)",
      professorField: "Center for Digital Business & AI",
      description: "Application pratique de l'intelligence artificielle et des outils de Business Intelligence dans l'optimisation des processus administratifs et commerciaux."
    },
    {
      code: "WSB-LNG-102",
      title: "Polish Business Culture & Cross-Cultural Negotiation",
      titlePl: "Język Polski i Negocjacje Międzykulturowe w Biznesie",
      credits: 6,
      homeEquivalence: "Communication & Langue du Pays d'Accueil (UE)",
      semester: "Semestre 2 (Mobilité Erasmus+ WSB Poznań)",
      professorField: "Language & Intercultural Studies Center",
      description: "Apprentissage linguistique immersif (Polonais A1-A2), protocoles d'affaires en Pologne, dynamiques de groupe et communication interculturelle selon Hofstede et Trompenaars."
    }
  ] as WsbCourse[],

  projects: [
    {
      id: "pfe-digitalisation",
      title: "PFE : L'Impact de la Digitalisation sur la Gestion Documentaire",
      subtitle: "Projet de Fin d'Études de Licence · Cas du Bureau d'Études Le Millénaire SARL (Priorité 1)",
      category: "Transformation Numérique & Gestion",
      date: "2025",
      image: "/src/assets/images/business_case_project_1794242160713.jpg",
      summary: "Étude de cas empirique explorant comment la transition numérique des flux documentaires et comptables dans un cabinet de conseil améliore l'efficience administrative et la traçabilité.",
      challenge: "Les cabinets comptables et administratifs traitent d'importants volumes de pièces justificatives papier (factures, bordereaux CNSS, liasses fiscales), engendrant des délais de traitement, des risques d'égarement et un coût élevé d'archivage physique.",
      solution: "Analyse des processus existants sous le logiciel NTCompta11, cartographie des flux entrants et sortants, et formulation de recommandations pour une gestion électronique des documents (GED) intégrée.",
      results: [
        "PFE soutenu et validé avec succès pour l'obtention de la Licence en Économie et Gestion",
        "Cartographie complète du circuit documentaire comptable (TVA, IS, écritures de lettrage)",
        "Formulation de préconisations organisationnelles immédiatement exploitables par le cabinet"
      ],
      skills: ["Gestion Documentaire", "NTCompta11", "Comptabilité & Fiscalité", "Analyse Organisationnelle"],
      deliverables: ["Rapport de PFE structuré", "Schéma du processus documentaire avant/après", "Présentation de soutenance"]
    },
    {
      id: "smart-port-logistics",
      title: "Smart Ports : Rôle des Technologies Numériques dans la Logistique Portuaire",
      subtitle: "Travail de Recherche Académique (Supervisé par Pr. Y. Es-Saady & Pr. A. Sadiq) (Priorité 2)",
      category: "Logistique & Supply Chain",
      date: "2025",
      image: "/src/assets/images/wsb_university_campus_1794242161089.jpg",
      summary: "Recherche sur l'intégration des technologies IoT, Cloud Computing et Blockchain pour optimiser la fluidité des flux de marchandises et la coordination intermodale dans les ports modernes.",
      challenge: "L'explosion des échanges maritimes internationaux exige des infrastructures portuaires une réduction drastique des temps d'escale des navires et une traçabilité sans faille des conteneurs.",
      solution: "Étude de la convergence technologique (capteurs IoT, plateformes cloud collaboratives et registres distribués blockchain) appliquée à la gestion prédictive des quais et corridors terrestres.",
      results: [
        "Analyse comparative des meilleures pratiques de Smart Ports mondiaux et régionaux (Tanger Med, Rotterdam)",
        "Identification des leviers d'interopérabilité applicables aux plateformes logistiques multimodales",
        "Excellente appréciation pédagogique de la part des professeurs encadrants"
      ],
      skills: ["Supply Chain Internationale", "Technologies IoT & Blockchain", "Logistique Portuaire", "Analyse Technologique"],
      deliverables: ["Dossier d'analyse sectorielle", "Schéma d'architecture technologique IoT-Cloud-Blockchain", "Diaporama de synthèse"]
    },
    {
      id: "mci-integration-leadership",
      title: "Organisation de la Journée d'Intégration MCI & Engagement Associatif",
      subtitle: "Secrétaire Générale · Club Conférences & Formations du Master MCI (Priorité 3)",
      category: "Leadership & Événementiel",
      date: "2025 – 2026",
      image: "/assets/aistudio/image_6eceb516.png", // Authentic photo of Hafsa at the conference
      summary: "Pilotage complet de la Journée d'Intégration du 10 février 2026 ('Intégration solidaire et excellence') et des initiatives de partage de connaissances du Master MCI.",
      challenge: "Fédérer les nouvelles promotions du Master, coordonner les interventions d'enseignants-chercheurs et de professionnels, et promouvoir une culture d'excellence et d'entraide.",
      solution: "Prise en charge du rétroplanning, conception intégrale des supports de communication sous Canva, gestion des aspects logistiques de la salle des conférences et animation sur scène.",
      results: [
        "Succès marquant de la Journée d'Intégration avec forte adhésion des étudiants et du corps professoral",
        "Coordination de la visite pédagogique de l'entreprise agro-industrielle COPAG (18 mai 2026)",
        "Renforcement durable du sentiment d'appartenance et de la visibilité du Master MCI"
      ],
      skills: ["Coordination d'Événements", "Communication Visuelle (Canva)", "Prise de Parole Publique", "Esprit d'Équipe"],
      deliverables: ["Affiches et roll-ups de l'événement", "Programme officiel de la journée", "Compte-rendu de coordination associative"]
    },
    {
      id: "digital-marketing-rankup",
      title: "Stratégie de Contenu & Prospection Digitale chez Rank Up",
      subtitle: "Stage Professionnel en Agence de Marketing Digital · Agadir (Priorité 4)",
      category: "Marketing Digital",
      date: "2024",
      image: "/src/assets/images/erasmus_cultural_poland_1794242160396.jpg",
      summary: "Contribution active aux campagnes de communication sur les réseaux sociaux, production de contenus visuels et vidéo et actions de prospection ciblée.",
      challenge: "Créer des contenus visuels percutants et réguliers adaptés aux algorithmes des réseaux sociaux tout en qualifiant de nouveaux prospects commerciaux.",
      solution: "Conception de gabarits visuels sous Canva, montage de vidéos promotionnelles courtes avec CapCut et téléprospection méthodique auprès de partenaires d'affaires.",
      results: [
        "Production de dizaines de visuels graphiques et capsules vidéo pour les clients de l'agence",
        "Acquisition d'une méthodologie rigoureuse de téléprospection et d'écoute client",
        "Validation pratique des concepts théoriques de marketing digital"
      ],
      skills: ["Canva & CapCut", "Social Media Management", "Téléprospection", "Communication Commerciale"],
      deliverables: ["Publications réseaux sociaux", "Scripts d'appels de téléprospection", "Rapport de stage validé"]
    }
  ] as Project[],

  languages: [
    { language: "Français", level: "Bilingue / Langue d'études", cefr: "C1/C2", details: "Langue principale d'enseignement supérieur universitaire, excellente aisance rédactionnelle et oratoire.", percent: 95 },
    { language: "Anglais", level: "B2 Upper Intermediate (Certifié EF SET 53/100)", cefr: "B2", details: "Certificat officiel EF SET 53/100. Lecture : 63/100 (C1 Advanced), Expression orale : 58/100 (B2). Vérification : cert.efset.org/vky6FP.", percent: 85 },
    { language: "Arabe", level: "Langue Maternelle", cefr: "C2", details: "Arabe littéraire moderne et dialectal, parfaite maîtrise orale et écrite.", percent: 100 },
    { language: "Polonais", level: "Notions Actives en Apprentissage", cefr: "A1", details: "Apprentissage proactif et autonome du vocabulaire fondamental en préparation de la mobilité à WSB Poznań.", percent: 30 }
  ] as LanguageSkill[],

  certifications: [
    {
      name: "EF SET English Certificate (B2 Upper Intermediate)",
      issuer: "EF Standard English Test (EF SET)",
      year: "03 Nov 2026",
      badge: "Score: 53/100 (B2)",
      credentialUrl: "cert.efset.org/vky6FP · Reading: 63 (C1), Speaking: 58 (B2)"
    },
    {
      name: "AI Strategies for Marketing and Sales",
      issuer: "Simplilearn",
      year: "Septembre 2026",
      badge: "IA & Marketing",
      credentialUrl: "Formation spécialisée en stratégie IA pour le marketing et la vente"
    },
    {
      name: "Elements of AI for Business",
      issuer: "MinnaLearn",
      year: "Novembre – Décembre 2025",
      badge: "IA for Business",
      credentialUrl: "Fondamentaux de l'intelligence artificielle appliquée aux décisions d'affaires"
    },
    {
      name: "Training of Trainers (ToT) – Prototyping",
      issuer: "ENACTUS Morocco",
      year: "Février – Mars 2024",
      badge: "Formation de Formateurs",
      credentialUrl: "Méthodes de prototypage et animation d'ateliers collaboratifs"
    }
  ] as Certification[],

  tools: [
    { name: "Canva", category: "Design Visuel & Affiches de Conférences" },
    { name: "CapCut", category: "Montage Vidéo & Contenus Courts" },
    { name: "NTCompta11", category: "Logiciel de Saisie & Gestion Comptable" },
    { name: "Microsoft Excel", category: "Tableaux de bord, Calculs & Gestion de Données" },
    { name: "Microsoft PowerPoint", category: "Présentations Académiques & Séminaires" },
    { name: "Microsoft Word", category: "Rédaction de Rapports de PFE & Dossiers" },
    { name: "Outils d'IA & Stratégie", category: "Prompt Engineering & Productivité Business" }
  ],

  motivationLetter: {
    recipient: "À l'attention des membres de la Commission de Sélection Erasmus+ & du Bureau des Relations Internationales de WSB Merito University Poznań (Pologne)",
    date: "Candidature Mobilité Erasmus+ · Semestre 2",
    subject: "Candidature pour une mobilité académique Erasmus+ au sein de l'Université WSB Merito à Poznań (Pologne)",
    paragraphs: [
      "Madame, Monsieur les membres du jury et coordinateurs Erasmus+,",
      "Actuellement étudiante en Master Management et Commerce International (MCI) à la Faculté d'Économie et de Gestion de Taroudant (Université Ibn Zohr, Maroc), après l'obtention de ma Licence en Économie et Gestion, j'ai l'honneur de vous soumettre ma candidature officielle pour une mobilité académique d'un semestre dans le cadre du programme Erasmus+ au sein de l'Université WSB Merito à Poznań.",
      "Mon projet académique s'articule autour de trois piliers fondamentaux : le management stratégique, le marketing international et la transformation numérique des organisations. L'Université WSB Merito Poznań s'est imposée à mon esprit comme le choix le plus pertinent et le plus stimulant. Réputée en Pologne pour sa pédagogie concrète connectée aux défis des entreprises et son rayonnement au sein de la région de Grande-Pologne (Wielkopolska) — l'un des cœurs logistiques et industriels d'Europe Centrale —, WSB Merito offre un environnement académique international de premier plan.",
      "Sur le plan académique, mon cursus en Master MCI m'a permis de développer une vision transversale du fonctionnement des entreprises, enrichie par mon Projet de Fin d'Études portant sur la digitalisation documentaire dans un cabinet comptable (Bureau d'Études Le Millénaire) ainsi que par mes travaux de recherche sur la logistique portuaire intelligente (Smart Ports). Les modules proposés en anglais à WSB Poznań en gestion de la Supply Chain, stratégie internationale et transformation digitale s'inscrivent en continuité exacte avec mon programme d'études, garantissant une validation fluide des 30 crédits ECTS visés.",
      "Au-delà des cours, mon engagement associatif en tant que Secrétaire Générale du Club Conférences et Formations du Master MCI et ma formation de formateurs (ToT) avec Enactus Morocco démontrent ma volonté constante de m'investir dans la vie de la communauté. À WSB Poznań, je souhaite être une ambassadrice enthousiaste du dialogue interculturel entre le Maroc et l'Union Européenne, en m'impliquant activement dans les initiatives du réseau Erasmus Student Network (ESN).",
      "Déterminée, proactive et préparée sur les plans linguistique et organisationnel, je suis impatiente de mettre mon énergie au service de cette aventure européenne. Je vous remercie vivement pour l'attention que vous porterez à mon dossier et me tiens à votre entière disposition pour tout entretien de sélection.",
      "Veuillez agréer, Madame, Monsieur les membres de la commission, l'expression de mes salutations distinguées."
    ],
    signature: "Hafsa El Mimouni"
  },

  juryQAs: [
    {
      category: "Choix de Poznań & de l'Université WSB",
      question: "Pourquoi avoir spécifiquement choisi l'Université WSB Merito à Poznań ?",
      answer: "WSB Merito à Poznań se situe dans l'un des carrefours économiques et logistiques les plus prospères de Pologne, au croisement direct des axes transeuropéens reliant Berlin, Varsovie et la Baltique. Son modèle d'apprentissage fondé sur des cas pratiques animés par des professionnels résonne particulièrement avec mon profil de Master MCI. Après mes travaux sur les Smart Ports et la digitalisation, étudier à Poznań me permet de confronter directement mes connaissances aux hubs logistiques et industriels polonais."
    },
    {
      category: "Cohérence avec le Master MCI",
      question: "Comment cette mobilité s'inscrit-elle dans votre cursus à l'Université Ibn Zohr ?",
      answer: "Elle constitue la concrétisation internationale de mon Master Management et Commerce International. Les 5 modules de mon Learning Agreement (Stratégie Internationale en Europe Centrale, Marketing Global, Smart Logistics, Transformation Digitale & IA, Culture d'Affaires Polonaise) correspondent point par point aux enseignements du semestre 2 de mon Master à la FEGT Taroudant. C'est une opportunité unique d'acquérir une double perspective maroco-européenne."
    },
    {
      category: "Capacité d'Adaptation & Langues",
      question: "Comment vous préparez-vous à la barrière de la langue et au nouvel environnement académique ?",
      answer: "L'ensemble des cours ciblés à WSB Poznań est dispensé en anglais, langue dans laquelle je dispose d'un niveau B2 certifié (EF SET 51) me permettant de suivre les cours et d'interagir avec aisance. De plus, j'ai commencé l'apprentissage autonome des bases du polonais (A1) et j'ai inscrit le cours de polonais des affaires à mon contrat pédagogique. Mes expériences en association et ma fonction de Secrétaire Générale m'ont appris à être autonome, sociable et résiliente face à la nouveauté."
    },
    {
      category: "Apport à la Communauté WSB",
      question: "Qu'allez-vous apporter à l'Université WSB Merito et à la communauté étudiante ?",
      answer: "J'apporterai mon expérience concrète en organisation d'événements universitaires (Journée d'Intégration MCI, visites d'entreprises, ateliers) et une perspective culturelle méditerranéenne et marocaine enrichissante pour les travaux de groupe internationaux. Je compte m'impliquer activement auprès du bureau local ESN pour aider à l'accueil et créer des ponts d'amitié entre étudiants de toutes origines."
    }
  ]
};
