/**
 * CONFIGURACIÓN Y DATOS OFICIALES DEL EVENTO
 * "Construyendo Sueños – Educación & Deporte"
 * Organiza: CEDEIT S.A.S.
 * 
 * Puedes editar fácilmente los campos de este archivo para actualizar
 * la información del evento, horarios, enlaces, fotos y logos.
 */

export interface EventConfig {
  eventName: string;
  subtitle: string;
  concept: string;
  eventDate: string; // ISO date string or formatted date
  eventDateFormatted: string;
  city: string;
  country: string;
  organizer: string;
  organizerFullName: string;
  sloganMain: string;
  sloganSecondary: string;
  primaryHashtag: string;
  allHashtags: string[];
  
  // CAMPOS FÁCILES DE EDITAR / PERSONALIZAR POSTERIORMENTE
  eventTime: string; // Ejemplo: "8:00 a. m. - 5:30 p. m."
  exactAddress: string; // Ejemplo: "Complejo Deportivo Villa Olímpica / Coliseo Mayor, Popayán"
  registrationPrice: string; // Ejemplo: "Entrada Gratuita con Inscripción Previa" o "$15.000 COP"
  registrationFormUrl: string; // Enlace a Google Forms o API externa
  whatsappNumber: string; // Número sin espacios con código de país, p. ej. "573001234567"
  whatsappDefaultMessage: string;
  contactEmail: string;
  
  // LOGOS Y RECURSOS VISUALES
  logos: {
    cedeitLogoUrl: string;
    eventLogoUrl: string;
    allies: Array<{
      name: string;
      logoUrl: string;
      category: string;
    }>;
  };
}

export const EVENT_DATA: EventConfig = {
  eventName: "Construyendo Sueños",
  subtitle: "Educación & Deporte",
  concept: "Integración académica, deportiva y cultural",
  eventDate: "2026-08-22T08:00:00-05:00", // 22 de Agosto de 2026
  eventDateFormatted: "22 de Agosto de 2026",
  city: "Popayán",
  country: "Colombia",
  organizer: "CEDEIT",
  organizerFullName: "Centro para el Desarrollo Integral y Tecnológico S.A.S.",
  sloganMain: "“El juego donde todos aprendemos y ganamos.”",
  sloganSecondary: "“Educación, deporte y comunidad en un solo lugar.”",
  primaryHashtag: "#ConstruyendoSueñosPopayán",
  allHashtags: [
    "#ConstruyendoSueñosPopayán",
    "#IntegraciónCEDEIT",
    "#EducaciónYDeporte",
    "#PopayánSeMueve"
  ],
  
  // CAMPOS EDITABLES
  eventTime: "8:00 a. m. – 5:30 p. m.",
  exactAddress: "Colegio Las Salesianas – I.E. Sagrado Corazón de Jesús, Popayán, Cauca",
  registrationPrice: "Entrada libre con inscripción previa",
  registrationFormUrl: "#registro", // Puedes reemplazar con https://forms.google.com/tu-formulario
  whatsappNumber: "573176424746", // Número oficial de WhatsApp de CEDEIT
  whatsappDefaultMessage: "¡Hola! Quisiera obtener más información sobre el evento Construyendo Sueños en Popayán.",
  contactEmail: "contacto@cedeit.com.co",

  logos: {
    cedeitLogoUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&auto=format&fit=crop&q=80", // Placeholder de alta resolución
    eventLogoUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&auto=format&fit=crop&q=80",
    allies: [
      {
        name: "Corporación Universitaria Comfacauca",
        logoUrl: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=200&auto=format&fit=crop&q=80",
        category: "Educación Superior"
      },
      {
        name: "Unicomfacauca",
        logoUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&auto=format&fit=crop&q=80",
        category: "Aliado Institucional"
      },
      {
        name: "Comfacauca",
        logoUrl: "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=200&auto=format&fit=crop&q=80",
        category: "Caja de Compensación"
      },
      {
        name: "Secretaría de Educación y Deporte",
        logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&auto=format&fit=crop&q=80",
        category: "Apoyo Gubernamental"
      }
    ]
  }
};

export interface PillarItem {
  id: string;
  title: string;
  iconName: string;
  color: string; // Tailwind class or hex
  accentBg: string;
  textColor: string;
  borderClass: string;
  summary: string;
  highlights: string[];
  imageUrl: string;
}

export const EVENT_PILLARS: PillarItem[] = [
  {
    id: "educacion",
    title: "Educación",
    iconName: "BookOpen",
    color: "#2B5B84",
    accentBg: "bg-[#2B5B84]",
    textColor: "text-[#2B5B84]",
    borderClass: "border-[#2B5B84]",
    summary: "Actividades académicas, experiencias de aprendizaje e innovación tecnológica.",
    highlights: ["Retos del conocimiento", "Muestras de innovación", "Talleres de liderazgo y tecnología"],
    imageUrl: "https://lh3.googleusercontent.com/d/1oyw61YINEDgxQYMoZOgb_pzbHhyzdIhn"
  },
  {
    id: "deporte",
    title: "Deporte",
    iconName: "Trophy",
    color: "#7BC043",
    accentBg: "bg-[#7BC043]",
    textColor: "text-[#7BC043]",
    borderClass: "border-[#7BC043]",
    summary: "Competencias deportivas, torneo relámpago de fútbol sala y premiaciones.",
    highlights: ["Torneo relámpago de fútbol sala", "Premiaciones e incentivos", "Superación y trabajo colaborativo"],
    imageUrl: "https://lh3.googleusercontent.com/d/1nJZ81jij0mIcgLpBF7GEBvz2cMVyDdVR"
  },
  {
    id: "cultura",
    title: "Cultura",
    iconName: "Palette",
    color: "#FF7A00",
    accentBg: "bg-[#FF7A00]",
    textColor: "text-[#FF7A00]",
    borderClass: "border-[#FF7A00]",
    summary: "Expresiones artísticas y espacios de integración comunitaria que celebran el talento.",
    highlights: ["Muestras folclóricas y de danza", "Presentaciones musicales", "Expresión plástica y comunitaria"],
    imageUrl: "https://lh3.googleusercontent.com/d/1S57soTBjZeLUfRSBPcNhcDq50JgJiLvc"
  }
];

export interface AudienceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  bgGradient: string;
}

export const AUDIENCE_LIST: AudienceCategory[] = [
  {
    id: "estudiantes",
    title: "Estudiantes",
    description: "Jóvenes y niños de colegios e instituciones deseosos de aprender, competir y demostrar sus talentos.",
    iconName: "GraduationCap",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    id: "instituciones",
    title: "Instituciones Educativas",
    description: "Colegios, universidades y centros de formación que impulsan el desarrollo integral de su alumnado.",
    iconName: "School",
    bgGradient: "from-orange-500/10 to-amber-500/10"
  },
  {
    id: "docentes",
    title: "Docentes y Mentores",
    description: "Educadores y entrenadores comprometidos con ser guía de las nuevas generaciones.",
    iconName: "UserCheck",
    bgGradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    id: "familias",
    title: "Familias",
    description: "Padres y acudientes que apoyan activamente a sus hijos en una jornada de integración y sana convivencia.",
    iconName: "HeartHandshake",
    bgGradient: "from-purple-500/10 to-indigo-500/10"
  },
  {
    id: "deportistas",
    title: "Deportistas y Atletas",
    description: "Promesas deportivas locales listas para competir con valores, fair play y entusiasmo.",
    iconName: "Award",
    bgGradient: "from-teal-500/10 to-cyan-500/10"
  },
  {
    id: "comunidad",
    title: "Comunidad Local",
    description: "Ciudadanía de Popayán y municipios vecinos unida alrededor del crecimiento social y la educación.",
    iconName: "Users",
    bgGradient: "from-yellow-500/10 to-orange-500/10"
  }
];

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: "deporte" | "educacion" | "cultura" | "comunidad";
  badgeColor: string;
}

export const ACTIVITIES_LIST: ActivityItem[] = [
  {
    id: "torneos",
    title: "Torneo relámpago de fútbol sala",
    description: "Encuentros deportivos relámpago de fútbol sala con eliminación directa entre los equipos participantes.",
    iconName: "Dumbbell",
    category: "deporte",
    badgeColor: "bg-[#7BC043] text-white"
  },
  {
    id: "retos-academicos",
    title: "Retos académicos",
    description: "Competencias de lógica, matemáticas, ciencia divertida y debate entre instituciones.",
    iconName: "BrainCircuit",
    category: "educacion",
    badgeColor: "bg-[#2B5B84] text-white"
  },
  {
    id: "presentaciones-culturales",
    title: "Presentaciones culturales",
    description: "Música en vivo, obras de teatro, danzas tradicionales y muestras folclóricas del Cauca.",
    iconName: "Sparkles",
    category: "cultura",
    badgeColor: "bg-[#FF7A00] text-white"
  },
  {
    id: "espacios-integracion",
    title: "Espacios de integración",
    description: "Dinámicas grupales, juegos de integración y dinámicas comunitarias para hacer nuevos amigos.",
    iconName: "Smile",
    category: "comunidad",
    badgeColor: "bg-[#00A8E8] text-white"
  },
  {
    id: "reconocimientos",
    title: "Premiaciones",
    description: "Ceremonia de premiación para los mejores equipos del torneo relámpago de fútbol sala e incentivos.",
    iconName: "Medal",
    category: "deporte",
    badgeColor: "bg-[#7BC043] text-white"
  },
  {
    id: "actividades-familias",
    title: "Actividades para familias",
    description: "Estaciones de juegos tradicionales, zonas de pic-nic y retos padres e hijos.",
    iconName: "Heart",
    category: "comunidad",
    badgeColor: "bg-[#00A8E8] text-white"
  },
  {
    id: "muestras-institucionales",
    title: "Muestras institucionales",
    description: "Stands informativos de ofertas educativas, becas universitarias y orientación vocacional.",
    iconName: "Landmark",
    category: "educacion",
    badgeColor: "bg-[#2B5B84] text-white"
  },
  {
    id: "tecnologia-innovacion",
    title: "Tecnología e innovación",
    description: "Exhibición de robótica, experiencias interactivas CEDEIT y talleres de habilidades digitales.",
    iconName: "Cpu",
    category: "educacion",
    badgeColor: "bg-[#2B5B84] text-white"
  }
];

export interface AgendaSlot {
  id: string;
  time: string;
  title: string;
  description: string;
  category: "Apertura" | "Académico" | "Deportivo" | "Descanso" | "Cultural" | "Cierre";
  iconName: string;
  accentColor: string;
}

export const AGENDA_TIMELINE: AgendaSlot[] = [
  {
    id: "slot-1",
    time: "8:00 a. m.",
    title: "Registro y bienvenida",
    description: "Acreditación de delegaciones, entrega de kits de participantes y ubicación en las sedes.",
    category: "Apertura",
    iconName: "ClipboardCheck",
    accentColor: "border-l-blue-500"
  },
  {
    id: "slot-2",
    time: "9:00 a. m.",
    title: "Apertura oficial",
    description: "Acto protocolario con directivos de CEDEIT, autoridades locales y desfile de las delegaciones.",
    category: "Apertura",
    iconName: "Megaphone",
    accentColor: "border-l-orange-500"
  },
  {
    id: "slot-3",
    time: "9:30 a. m.",
    title: "Inicio de actividades académicas y deportivas",
    description: "Arranque en simultáneo de la primera ronda de torneos deportivos y ferias de ciencia e innovación.",
    category: "Deportivo",
    iconName: "Activity",
    accentColor: "border-l-green-500"
  },
  {
    id: "slot-4",
    time: "12:30 p. m.",
    title: "Integración y descanso",
    description: "Pausa para almuerzo, zona de comidas, música en vivo y dinámicas de integración entre familias.",
    category: "Descanso",
    iconName: "Coffee",
    accentColor: "border-l-cyan-500"
  },
  {
    id: "slot-5",
    time: "2:00 p. m.",
    title: "Actividades culturales y finales deportivas",
    description: "Grandes finales de torneos, muestras de danza, teatro, bandas musicales y concursos artísticos.",
    category: "Cultural",
    iconName: "Music",
    accentColor: "border-l-purple-500"
  },
  {
    id: "slot-6",
    time: "4:30 p. m.",
    title: "Premiación y reconocimientos",
    description: "Entrega de trofeos, medallas, becas especiales y reconocimientos al mérito deportivo e institucional.",
    category: "Cierre",
    iconName: "Trophy",
    accentColor: "border-l-yellow-500"
  },
  {
    id: "slot-7",
    time: "5:30 p. m.",
    title: "Cierre del evento",
    description: "Agradecimientos oficiales, foto oficial de la jornada y concierto de cierre.",
    category: "Cierre",
    iconName: "CheckCircle2",
    accentColor: "border-l-orange-500"
  }
];

export interface BenefitCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const EVENT_BENEFITS: BenefitCard[] = [
  {
    id: "ben-1",
    title: "Fortalecer habilidades y talentos",
    description: "Descubre tus fortalezas atléticas, académicas y artísticas en un entorno estimulante.",
    iconName: "Zap"
  },
  {
    id: "ben-2",
    title: "Promover el trabajo en equipo",
    description: "Aprende el valor del compañerismo, la empatía y el apoyo mutuo en cada disciplina.",
    iconName: "Users2"
  },
  {
    id: "ben-3",
    title: "Compartir con otras instituciones",
    description: "Amplía tu horizonte relacionándote con delegaciones de múltiples colegios y centros educativos.",
    iconName: "Building2"
  },
  {
    id: "ben-4",
    title: "Vivir experiencias deportivas y culturales",
    description: "Disfruta de competencias sanas, espectáculos artísticos y sorpresas en una sola jornada.",
    iconName: "Sparkles"
  },
  {
    id: "ben-5",
    title: "Recibir reconocimiento por la participación",
    description: "Todos los participantes y colegios aliados recibirán certificado oficial respaldado por CEDEIT.",
    iconName: "Award"
  },
  {
    id: "ben-6",
    title: "Crear nuevas conexiones",
    description: "Construye lazos duraderos con mentores, entrenadores, becarios y futuros colegas.",
    iconName: "Network"
  },
  {
    id: "ben-7",
    title: "Representar a la institución o comunidad",
    description: "Porta con orgullo la camiseta de tu colegio o barrio dejando en alto su nombre.",
    iconName: "Flag"
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_LIST: FaqItem[] = [
  {
    question: "¿Quiénes pueden participar en Construyendo Sueños?",
    answer: "El evento está abierto a niños, jóvenes, estudiantes de colegios públicos y privados, docentes, deportistas, familias y miembros de la comunidad en general de Popayán y el departamento del Cauca."
  },
  {
    question: "¿La inscripción tiene algún costo?",
    answer: "La participación general y el acceso a las actividades como espectadores y competidores registrados es completamente libre mediante registro previo hasta agotar aforos oficiales."
  },
  {
    question: "¿Dónde se realizará el evento exactamente?",
    answer: "El evento se llevará a cabo en Popayán, Colombia. La dirección exacta del complejo deportivo y escenario cultural se notificará a todos los inscritos vía correo electrónico y WhatsApp antes del 22 de agosto de 2026."
  },
  {
    question: "¿Qué debo llevar el día del evento?",
    answer: "Recomendamos llevar tu documento de identidad original o copia, vestimenta deportiva cómoda, termo reutilizable para hidratación, protección solar y toda la mejor actitud para participar."
  },
  {
    question: "¿Puedo participar representando una institución educativa?",
    answer: "¡Por supuesto! De hecho, animamos a las delegaciones escolares, clubes deportivos y colectivos a inscribirse en grupo seleccionando la opción 'Institución Educativa' en el formulario."
  },
  {
    question: "¿Habrá certificados o reconocimientos?",
    answer: "Sí. Se entregará certificado digital de participación expedido por CEDEIT S.A.S. a todos los asistentes registrados, así como medallas y trofeos a los ganadores de los torneos y retos."
  },
  {
    question: "¿Cómo puedo ser patrocinador o aliado del evento?",
    answer: "Las empresas e instituciones interesadas en sumarse como patrocinadores o aliados estratégicos pueden comunicarse directamente al número de WhatsApp de CEDEIT o enviar un correo a contacto@cedeit.com.co."
  },
  {
    question: "¿Dónde puedo solicitar más información?",
    answer: "Puedes escribirnos al botón flotante de WhatsApp habilitado en la página o contactarnos directamente por nuestras redes sociales oficiales de CEDEIT."
  }
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "Deporte" | "Educación" | "Cultura" | "Familias" | "Comunidad";
  imageUrl: string;
  altText: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Encuentro Comunitario y Deportivo",
    category: "Comunidad",
    imageUrl: "https://lh3.googleusercontent.com/d/1S57soTBjZeLUfRSBPcNhcDq50JgJiLvc",
    altText: "Jóvenes y comunidad reunidos en jornada de integración Construyendo Sueños"
  },
  {
    id: "gal-2",
    title: "Torneo Relámpago de Fútbol Sala",
    category: "Deporte",
    imageUrl: "https://lh3.googleusercontent.com/d/1oyw61YINEDgxQYMoZOgb_pzbHhyzdIhn",
    altText: "Deportistas en acción durante el torneo de fútbol sala"
  },
  {
    id: "gal-3",
    title: "Integración Académica y Formativa",
    category: "Educación",
    imageUrl: "https://lh3.googleusercontent.com/d/1nJZ81jij0mIcgLpBF7GEBvz2cMVyDdVR",
    altText: "Estudiantes y participantes en actividades del evento"
  },
  {
    id: "gal-4",
    title: "Jornada de Convivencia y Futuro",
    category: "Familias",
    imageUrl: "https://lh3.googleusercontent.com/d/1MOQIger82RP2U8XzyV_9s5bleJEtoUey",
    altText: "Participantes compartiendo experiencias y trabajo en equipo"
  }
];
