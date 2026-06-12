// Demo profile configuration for:
// Lic. Mara Esther Barrios Olvera
//
// This is a DEMO proposal, not an official final website.
// Replace/validate all professional information with the specialist before publishing.

const content = {
  es: {
    nav: {
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      terapias: 'Servicios',
      primeraConsulta: 'Primera consulta',
      metodo: 'Método',
      opiniones: 'Confianza',
      agenda: 'Agenda',
      contacto: 'Contacto',
      cta: 'Agendar en Doctoralia',
    },

    hero: {
      title: 'Psicoterapia profesional para acompañarte con claridad, respeto y compromiso',
      subtitle: 'Atención psicológica individual, de pareja y familiar en Querétaro, con enfoque cognitivo conductual y más de 15 años de experiencia clínica.',
      cta1: 'Agendar en Doctoralia',
      cta2: 'Contactar por WhatsApp',
      bookingHelper: 'La agenda se abre en Doctoralia para confirmar disponibilidad.',
      doctoraliaPanelLabel: 'Confianza Doctoralia',
      badges: [
        { label: 'Más de 15 años de experiencia' },
        { label: '56 opiniones en Doctoralia' },
        { label: 'Atención presencial y en línea' },
        { label: 'Enfoque cognitivo conductual' },
      ],
      trust: '56 opiniones en Doctoralia',
      photoAlt: 'Imagen de referencia del perfil profesional de la Lic. Mara Esther Barrios Olvera',
      photoSrc: '/doctors/mara-esther-barrios/profile-placeholder.jpg',
      doctoralia: {
        profileUrl: 'https://www.doctoralia.com.mx/mara-esther-barrios-olvera/psicologo/queretaro#address-id=530464&is-online-only=false&filters%5Bspecializations%5D%5B%5D=78',
        reviewCount: 56,
        rating: 5,
        reviewText: '56 opiniones en Doctoralia',
        location: 'Querétaro, México',
        modalities: 'Presencial y en línea',
        languages: 'Español',
        bookingCta: 'Agendar en Doctoralia',
      },
    },

    about: {
      label: 'Sobre mí',
      title: 'Experiencia clínica con enfoque humano y estructurado',
      p1: 'La Lic. Mara Esther Barrios Olvera es psicóloga con más de 15 años de experiencia brindando atención psicoterapéutica individual y de pareja, así como evaluación y tratamiento psicológico en instituciones públicas, privadas y espacios dedicados a la salud mental.',
      p2: 'Su enfoque terapéutico se basa principalmente en la perspectiva cognitivo conductual, una metodología orientada a comprender pensamientos, emociones y conductas para trabajar objetivos terapéuticos de manera clara, breve y estructurada.',
      p3: 'Su práctica se caracteriza por una postura ética, respetuosa y comprometida, buscando crear un espacio seguro que facilite el proceso terapéutico y el bienestar psicoemocional de cada paciente.',
      cta: 'Agendar en Doctoralia',
      highlights: [
        'Cédula profesional: 10715653',
        'Más de 15 años de experiencia clínica',
        'Consulta presencial y videoconsulta',
        'Atención profesional en Querétaro',
      ],
    },

    whoFor: {
      label: 'Áreas de atención',
      title: 'Este espacio terapéutico puede ayudarte en procesos como…',
      subtitle: 'Acompañamiento psicológico profesional para adolescentes, adultos, pareja y familia.',
      items: [
        'Ansiedad, depresión, estrés y ataques de pánico.',
        'Duelo, codependencia e intervención en crisis.',
        'Conflictos de pareja y dinámicas familiares complejas.',
        'Trastornos de la conducta y del aprendizaje.',
        'Evaluación psicológica y orientación vocacional.',
        'Procesos terapéuticos para adolescentes y adultos.',
      ],
    },

    services: {
      label: 'Servicios',
      title: 'Modalidades de atención psicológica',
      subtitle: 'Los servicios se organizan por tipo de necesidad terapéutica para facilitar una ruta de atención clara.',
      cards: [
        {
          title: 'Psicoterapia individual',
          desc: 'Ansiedad, depresión, estrés, ataques de pánico, duelo e intervención en crisis con objetivos terapéuticos claros.',
          cta: 'Ver horarios disponibles',
          featured: true,
        },
        {
          title: 'Terapia de pareja y familia',
          desc: 'Terapia de pareja, terapia familiar, psicoterapia familiar y acompañamiento en conflictos relacionales.',
          cta: 'Ver horarios disponibles',
          featured: false,
        },
        {
          title: 'Evaluación y orientación',
          desc: 'Evaluación psicológica, evaluaciones clínicas, evaluaciones psicométricas, orientación vocacional y Test de Machover.',
          cta: 'Ver horarios disponibles',
          featured: false,
        },
        {
          title: 'Atención a adolescentes y adultos',
          desc: 'Psicoterapia para adolescentes y adultos, terapia breve, terapia cognitivo conductual y terapia dialéctico conductual.',
          cta: 'Ver horarios disponibles',
          featured: false,
        },
      ],
      chipsLabel: 'Tipos de consulta y notas de atención',
      chips: [
        'Consulta presencial',
        'Videoconsulta',
        'Atención privada',
        'Formas de pago sujetas a confirmación',
        'Agenda por Doctoralia',
      ],
    },

    firstSession: {
      label: 'Primera consulta',
      title: 'Qué esperar en tu primer encuentro terapéutico',
      items: [
        'Espacio confidencial, respetuoso y seguro.',
        'Comprensión del motivo de consulta y contexto actual.',
        'Definición de objetivos terapéuticos iniciales.',
        'Orientación sobre frecuencia y tipo de atención.',
      ],
      processLabel: 'Proceso de agenda',
      processTitle: 'Cómo iniciar en 3 pasos',
      steps: [
        'Elegís modalidad: presencial o videoconsulta.',
        'Agendás directamente en Doctoralia según disponibilidad.',
        'Inicias un proceso terapéutico claro y acompañado.',
      ],
      cta1: 'Agendar en Doctoralia',
      cta2: 'Contactar por WhatsApp',
    },

    approach: {
      label: 'Método',
      title: 'Un enfoque cognitivo conductual, claro y orientado al proceso',
      subtitle: 'El trabajo terapéutico se basa en la constancia, el compromiso y la colaboración entre paciente y terapeuta. Desde el enfoque cognitivo conductual, se busca identificar patrones de pensamiento, emociones y conductas que influyen en el malestar actual, para construir herramientas prácticas y objetivos terapéuticos alcanzables.',
      items: [
        {
          title: 'Evaluación y comprensión del caso',
          desc: 'Se revisan motivos de consulta, historia clínica y factores actuales para construir un plan de trabajo terapéutico.',
          detail: 'Historia · Contexto · Objetivos',
        },
        {
          title: 'Intervención estructurada',
          desc: 'Se aplican estrategias cognitivo conductuales orientadas a modificar patrones que sostienen el malestar.',
          detail: 'Pensamientos · Emociones · Conductas',
        },
        {
          title: 'Seguimiento y ajuste clínico',
          desc: 'El proceso se revisa de manera continua para sostener avances realistas y herramientas aplicables en la vida diaria.',
          detail: 'Constancia · Colaboración · Claridad',
        },
      ],
    },

    testimonials: {
      label: 'Confianza',
      title: 'Un espacio de escucha, claridad y acompañamiento',
      items: [
        {
          text: 'Pacientes destacan su dedicación durante la consulta, sus explicaciones detalladas y la forma en que acompaña el proceso terapéutico con empatía, estructura y profesionalismo.',
          author: 'Síntesis referencial de comentarios públicos',
        },
        {
          text: 'La propuesta terapéutica busca brindar claridad en cada etapa del proceso, con objetivos alcanzables y comunicación profesional.',
          author: 'Enfoque de trabajo profesional',
        },
      ],
      note: 'No se publican testimonios textuales para proteger privacidad y mantener comunicación ética. Opiniones verificables disponibles en Doctoralia.',
      ctaProfile: 'Ver perfil en Doctoralia',
      ctaReviews: 'Ver opiniones en Doctoralia',
    },

    booking: {
      label: 'Agenda tu consulta',
      title: 'Agenda tu consulta',
      subtitle: 'Puedes agendar directamente a través de Doctoralia para consulta presencial en Querétaro o videoconsulta, según disponibilidad.',
      features: [
        'Atención en HOSPITAL SAN JOSE, Querétaro.',
        'Consulta presencial y videoconsulta.',
        'Más de 15 años de experiencia profesional.',
        'Cédula profesional: 10715653.',
      ],
      calendarCta: 'Agendar en Doctoralia',
      bookingHelper: 'La agenda se abre en Doctoralia para confirmar disponibilidad.',
      whatsappCta: 'Contactar por WhatsApp',
      whatsappNote: 'También podés escribir por WhatsApp para resolver dudas de coordinación.',
      orDivider: 'o, si lo preferís, completá el formulario',
      form: {
        name: 'Nombre completo',
        email: 'Correo electrónico',
        phone: 'Teléfono / WhatsApp',
        modality: 'Modalidad preferida',
        modalityOptions: [
          { value: '', label: 'Seleccionar modalidad…' },
          { value: 'presencial', label: 'Consulta presencial' },
          { value: 'online', label: 'Videoconsulta / consulta en línea' },
        ],
        reason: 'Motivo de consulta (opcional)',
        reasonPlaceholder: 'Compartí brevemente lo que te gustaría trabajar…',
        submit: 'Enviar mensaje',
        success: 'Mensaje enviado. La especialista o su equipo se pondrán en contacto contigo.',
        errors: {
          nameRequired: 'Por favor ingresa tu nombre.',
          emailRequired: 'Por favor ingresa tu correo.',
          emailInvalid: 'El formato del correo no es válido.',
          modalityRequired: 'Por favor selecciona una modalidad.',
        },
      },
    },

    contact: {
      label: 'Ubicación y contacto',
      title: 'Atención psicológica en Querétaro · Presencial y en línea',
      officeTitle: 'HOSPITAL SAN JOSE',
      officeAddress: 'AVE CONSTITUYENTES 302, El Jacal, Querétaro, 76187',
      officeNote: 'Dirección sujeta a validación al confirmar cita',
      onlineTitle: 'Videoconsulta / consulta en línea',
      onlineDesc: 'Atención a distancia con acompañamiento profesional según disponibilidad de agenda.',
      factsLabel: 'Información clave',
      facts: [
        'Ubicación: Querétaro, México',
        'Modalidades: presencial y en línea',
        'Idioma: español',
      ],
      phone: 'Teléfono / WhatsApp',
      email: 'Correo',
      bookingCta: 'Agendar en Doctoralia',
      doctoraliaCta: 'Ver perfil en Doctoralia',
      whatsappCta: 'Contactar por WhatsApp',
      mapNote: 'Ubicación referencial para facilitar orientación de consulta.',
    },

    footer: {
      tagline: 'Psicóloga',
      location: 'Querétaro, México',
      links: {
        sobreMi: 'Sobre mí',
        terapias: 'Servicios',
        primeraConsulta: 'Primera consulta',
        metodo: 'Método',
        agenda: 'Agendar en Doctoralia',
        contacto: 'Contacto',
      },
      disclaimer: 'La información de esta página no sustituye una evaluación o tratamiento profesional. En caso de crisis, acude a servicios de emergencia.',
      privacy: 'Aviso de privacidad',
      terms: 'Términos de uso',
      copyright: '© 2026 Lic. Mara Esther Barrios Olvera. Todos los derechos reservados.',
      demoDisclaimer: 'Esta es una propuesta visual de página profesional. La información puede ser ajustada y validada por la especialista antes de su publicación final.',
    },
  },

  pt: {
    nav: {
      inicio: 'Início',
      sobreMi: 'Sobre mim',
      terapias: 'Serviços',
      primeraConsulta: 'Primeira consulta',
      metodo: 'Método',
      opiniones: 'Confiança',
      agenda: 'Agenda',
      contacto: 'Contato',
      cta: 'Agendar no Doctoralia',
    },

    hero: {
      title: 'Psicoterapia profissional para acompanhar você com clareza, respeito e compromisso',
      subtitle: 'Atendimento psicológico individual, de casal e familiar em Querétaro, com enfoque cognitivo-comportamental e mais de 15 anos de experiência clínica.',
      cta1: 'Agendar no Doctoralia',
      cta2: 'Contato por WhatsApp',
      bookingHelper: 'A agenda abre no Doctoralia para confirmar disponibilidade.',
      doctoraliaPanelLabel: 'Confiança Doctoralia',
      badges: [
        { label: 'Mais de 15 anos de experiência' },
        { label: '56 opiniões no Doctoralia' },
        { label: 'Atendimento presencial e online' },
        { label: 'Enfoque cognitivo-comportamental' },
      ],
      trust: '56 opiniões no Doctoralia',
      photoAlt: 'Imagem de referência do perfil profissional da Lic. Mara Esther Barrios Olvera',
      photoSrc: '/doctors/mara-esther-barrios/profile-placeholder.jpg',
      doctoralia: {
        profileUrl: 'https://www.doctoralia.com.mx/mara-esther-barrios-olvera/psicologo/queretaro#address-id=530464&is-online-only=false&filters%5Bspecializations%5D%5B%5D=78',
        reviewCount: 56,
        rating: 5,
        reviewText: '56 opiniões no Doctoralia',
        location: 'Querétaro, México',
        modalities: 'Presencial e online',
        languages: 'Espanhol',
        bookingCta: 'Agendar no Doctoralia',
      },
    },

    about: {
      label: 'Sobre mim',
      title: 'Experiência clínica com abordagem humana e estruturada',
      p1: 'A Lic. Mara Esther Barrios Olvera é psicóloga com mais de 15 anos de experiência em psicoterapia individual e de casal, além de avaliação e tratamento psicológico em instituições públicas, privadas e espaços de saúde mental.',
      p2: 'Seu enfoque terapêutico se baseia principalmente na perspectiva cognitivo-comportamental, orientada a compreender pensamentos, emoções e comportamentos para trabalhar objetivos terapêuticos de forma clara, breve e estruturada.',
      p3: 'Sua prática se caracteriza por postura ética, respeitosa e comprometida, criando um espaço seguro que favorece o processo terapêutico e o bem-estar psicoemocional de cada paciente.',
      cta: 'Agendar no Doctoralia',
      highlights: [
        'Registro profissional (cédula): 10715653',
        'Mais de 15 anos de experiência clínica',
        'Consulta presencial e videochamada',
        'Atendimento profissional em Querétaro',
      ],
    },

    whoFor: {
      label: 'Áreas de atendimento',
      title: 'Este espaço terapêutico pode ajudar em processos como…',
      subtitle: 'Acompanhamento psicológico para adolescentes, adultos, casal e família.',
      items: [
        'Ansiedade, depressão, estresse e ataques de pânico.',
        'Luto, codependência e intervenção em crise.',
        'Conflitos de casal e dinâmicas familiares complexas.',
        'Transtornos de conduta e de aprendizagem.',
        'Avaliação psicológica e orientação vocacional.',
        'Processos terapêuticos para adolescentes e adultos.',
      ],
    },

    services: {
      label: 'Serviços',
      title: 'Modalidades de atendimento psicológico',
      subtitle: 'Os serviços são organizados por tipo de necessidade terapêutica para facilitar uma rota de atendimento clara.',
      cards: [
        {
          title: 'Psicoterapia individual',
          desc: 'Ansiedade, depressão, estresse, ataques de pânico, luto e intervenção em crise com objetivos terapêuticos claros.',
          cta: 'Ver horários disponíveis',
          featured: true,
        },
        {
          title: 'Terapia de casal e família',
          desc: 'Terapia de casal, terapia familiar, psicoterapia familiar e acompanhamento em conflitos relacionais.',
          cta: 'Ver horários disponíveis',
          featured: false,
        },
        {
          title: 'Avaliação e orientação',
          desc: 'Avaliação psicológica, avaliações clínicas, psicométricas, orientação vocacional e Teste de Machover.',
          cta: 'Ver horários disponíveis',
          featured: false,
        },
        {
          title: 'Atendimento para adolescentes e adultos',
          desc: 'Psicoterapia para adolescentes e adultos, terapia breve, terapia cognitivo-comportamental e terapia dialética comportamental.',
          cta: 'Ver horários disponíveis',
          featured: false,
        },
      ],
      chipsLabel: 'Tipos de consulta e notas de atendimento',
      chips: [
        'Consulta presencial',
        'Videochamada',
        'Atendimento privado',
        'Formas de pagamento sujeitas a confirmação',
        'Agenda pelo Doctoralia',
      ],
    },

    firstSession: {
      label: 'Primeira consulta',
      title: 'O que esperar no primeiro encontro terapêutico',
      items: [
        'Espaço confidencial, respeitoso e seguro.',
        'Compreensão do motivo da consulta e contexto atual.',
        'Definição de objetivos terapêuticos iniciais.',
        'Orientação sobre frequência e modalidade.',
      ],
      processLabel: 'Processo de agendamento',
      processTitle: 'Como iniciar em 3 passos',
      steps: [
        'Você escolhe modalidade: presencial ou videochamada.',
        'Agenda diretamente no Doctoralia conforme disponibilidade.',
        'Inicia um processo terapêutico claro e acompanhado.',
      ],
      cta1: 'Agendar no Doctoralia',
      cta2: 'Contato por WhatsApp',
    },

    approach: {
      label: 'Método',
      title: 'Uma abordagem cognitivo-comportamental, clara e orientada ao processo',
      subtitle: 'O trabalho terapêutico se baseia em constância, compromisso e colaboração entre paciente e terapeuta. A partir da abordagem cognitivo-comportamental, busca-se identificar padrões de pensamento, emoções e comportamentos que influenciam o sofrimento atual, para construir ferramentas práticas e objetivos terapêuticos alcançáveis.',
      items: [
        {
          title: 'Avaliação e compreensão do caso',
          desc: 'Revisão de motivos da consulta, história clínica e fatores atuais para construir um plano terapêutico.',
          detail: 'História · Contexto · Objetivos',
        },
        {
          title: 'Intervenção estruturada',
          desc: 'Aplicação de estratégias cognitivo-comportamentais orientadas a modificar padrões que sustentam o sofrimento.',
          detail: 'Pensamentos · Emoções · Condutas',
        },
        {
          title: 'Acompanhamento e ajuste clínico',
          desc: 'Revisão contínua do processo para sustentar avanços realistas e ferramentas aplicáveis no dia a dia.',
          detail: 'Constância · Colaboração · Clareza',
        },
      ],
    },

    testimonials: {
      label: 'Confiança',
      title: 'Um espaço de escuta, clareza e acompanhamento',
      items: [
        {
          text: 'Pacientes destacam sua dedicação durante a consulta, explicações detalhadas e a forma como acompanha o processo terapêutico com empatia, estrutura e profissionalismo.',
          author: 'Síntese referencial de comentários públicos',
        },
        {
          text: 'A proposta terapêutica busca oferecer clareza em cada etapa do processo, com objetivos alcançáveis e comunicação profissional.',
          author: 'Abordagem profissional',
        },
      ],
      note: 'Não publicamos depoimentos textuais para proteger a privacidade. Opiniões verificáveis disponíveis no Doctoralia.',
      ctaProfile: 'Ver perfil no Doctoralia',
      ctaReviews: 'Ver opiniões no Doctoralia',
    },

    booking: {
      label: 'Agende sua consulta',
      title: 'Agende sua consulta',
      subtitle: 'Você pode agendar diretamente no Doctoralia para consulta presencial em Querétaro ou videochamada, conforme disponibilidade.',
      features: [
        'Atendimento no HOSPITAL SAN JOSE, Querétaro.',
        'Consulta presencial e videochamada.',
        'Mais de 15 anos de experiência profissional.',
        'Registro profissional (cédula): 10715653.',
      ],
      calendarCta: 'Agendar no Doctoralia',
      bookingHelper: 'A agenda abre no Doctoralia para confirmar disponibilidade.',
      whatsappCta: 'Contato por WhatsApp',
      whatsappNote: 'Você também pode escrever no WhatsApp para dúvidas de coordenação.',
      orDivider: 'ou, se preferir, preencha o formulário',
      form: {
        name: 'Nome completo',
        email: 'E-mail',
        phone: 'Telefone / WhatsApp',
        modality: 'Modalidade preferida',
        modalityOptions: [
          { value: '', label: 'Selecionar modalidade…' },
          { value: 'presencial', label: 'Consulta presencial' },
          { value: 'online', label: 'Videochamada / consulta online' },
        ],
        reason: 'Motivo da consulta (opcional)',
        reasonPlaceholder: 'Compartilhe brevemente o que deseja trabalhar…',
        submit: 'Enviar mensagem',
        success: 'Mensagem enviada. A especialista ou equipe entrará em contato em breve.',
        errors: {
          nameRequired: 'Por favor, informe seu nome.',
          emailRequired: 'Por favor, informe seu e-mail.',
          emailInvalid: 'Formato de e-mail inválido.',
          modalityRequired: 'Por favor, selecione uma modalidade.',
        },
      },
    },

    contact: {
      label: 'Localização e contato',
      title: 'Atendimento psicológico em Querétaro · Presencial e online',
      officeTitle: 'HOSPITAL SAN JOSE',
      officeAddress: 'AVE CONSTITUYENTES 302, El Jacal, Querétaro, 76187',
      officeNote: 'Endereço sujeito a validação ao confirmar consulta',
      onlineTitle: 'Videochamada / consulta online',
      onlineDesc: 'Atendimento à distância com acompanhamento profissional conforme disponibilidade de agenda.',
      factsLabel: 'Informações-chave',
      facts: [
        'Localização: Querétaro, México',
        'Modalidades: presencial e online',
        'Idioma: espanhol',
      ],
      phone: 'Telefone / WhatsApp',
      email: 'E-mail',
      bookingCta: 'Agendar no Doctoralia',
      doctoraliaCta: 'Ver perfil no Doctoralia',
      whatsappCta: 'Contato por WhatsApp',
      mapNote: 'Localização referencial para facilitar orientação da consulta.',
    },

    footer: {
      tagline: 'Psicóloga',
      location: 'Querétaro, México',
      links: {
        sobreMi: 'Sobre mim',
        terapias: 'Serviços',
        primeraConsulta: 'Primeira consulta',
        metodo: 'Método',
        agenda: 'Agendar no Doctoralia',
        contacto: 'Contato',
      },
      disclaimer: 'As informações desta página não substituem avaliação ou tratamento profissional. Em caso de crise, procure serviços de emergência.',
      privacy: 'Aviso de privacidade',
      terms: 'Termos de uso',
      copyright: '© 2026 Lic. Mara Esther Barrios Olvera. Todos os direitos reservados.',
      demoDisclaimer: 'Esta es una propuesta visual de página profesional. La información puede ser ajustada y validada por la especialista antes de su publicación final.',
    },
  },
};

export const maraEstherBarriosDoctorData = {
  id: 'mara-esther-barrios',
  slug: 'mara-esther-barrios',
  profile: {
    name: 'Lic. Mara Esther Barrios Olvera',
    professionalPrefix: 'Lic.',
    professionalTitle: 'PSICÓLOGA',
    specialty: 'Psicóloga',
    audience: 'Adolescentes, adultos, pareja y familia',
    location: 'Querétaro, México',
    address: 'AVE CONSTITUYENTES 302, El Jacal, Querétaro, 76187',
    modalities: 'Presencial y videoconsulta',
    languages: 'Español',
    license: '10715653',
    experienceYears: 'Más de 15 años de experiencia',
    phone: '+52 442 424 8615',
    email: '',
  },
  links: {
    doctoralia: 'https://www.doctoralia.com.mx/mara-esther-barrios-olvera/psicologo/queretaro#address-id=530464&is-online-only=false&filters%5Bspecializations%5D%5B%5D=78',
    whatsapp: 'https://wa.me/524424248615',
    tel: 'tel:+524424248615',
    maps: 'https://maps.google.com/?q=HOSPITAL+SAN+JOSE+AVE+CONSTITUYENTES+302+El+Jacal+Queretaro+76187',
    mapsEmbed: '',
  },
  integrations: {
    doctoraliaWidget: {
      doctorId: 'mara-esther-barrios-olvera',
      type: 'big_with_calendar',
      opinion: false,
      hideBranding: true,
      saasOnly: true,
      ctaText: 'Reserve una cita',
      a11yTitle: 'Widget de reserva de citas médicas',
    },
  },
  assets: {
    logo: '/doctors/mara-esther-barrios/profile-placeholder.jpg',
    profilePhoto: '/doctors/mara-esther-barrios/profile-placeholder.jpg',
    profileFallbackPhoto: '/doctors/mara-esther-barrios/profile-placeholder.jpg',
    officePhoto: '/doctors/mara-esther-barrios/office-placeholder.jpg',
    ogImage: '/doctors/mara-esther-barrios/profile-placeholder.jpg',
  },
  seo: {
    es: {
      title: 'Lic. Mara Esther Barrios Olvera | Psicóloga en Querétaro',
      description: 'Página profesional de la Lic. Mara Esther Barrios Olvera, psicóloga en Querétaro con más de 15 años de experiencia en psicoterapia individual, terapia de pareja, ansiedad, depresión, duelo y enfoque cognitivo conductual.',
      keywords: 'psicóloga en querétaro, psicoterapia en querétaro, terapia de pareja, ansiedad, depresión, duelo, enfoque cognitivo conductual, videoconsulta psicología',
      ogTitle: 'Lic. Mara Esther Barrios Olvera | Psicóloga en Querétaro',
      ogDescription: 'Psicoterapia individual, de pareja y familiar en Querétaro. Atención presencial y videoconsulta con enfoque cognitivo conductual.',
      ogLocale: 'es_MX',
      ogUrl: '[REVISAR]',
    },
    pt: {
      title: 'Lic. Mara Esther Barrios Olvera | Psicóloga em Querétaro',
      description: 'Página profissional da Lic. Mara Esther Barrios Olvera, psicóloga em Querétaro com mais de 15 anos de experiência em psicoterapia individual, terapia de casal, ansiedade, depressão, luto e abordagem cognitivo-comportamental.',
      keywords: 'psicóloga em querétaro, psicoterapia em querétaro, terapia de casal, ansiedade, depressão, luto, abordagem cognitivo-comportamental, consulta online psicologia',
      ogTitle: 'Lic. Mara Esther Barrios Olvera | Psicóloga em Querétaro',
      ogDescription: 'Psicoterapia individual, de casal e familiar em Querétaro. Atendimento presencial e online com abordagem cognitivo-comportamental.',
      ogLocale: 'pt_BR',
      ogUrl: '[REVISAR]',
    },
  },
  theme: {
    colors: {
      bg: '#F5EFE8',
      bgWarm: '#EFE5D9',
      bgSage: '#E8E8DF',
      primary: '#2F3D37',
      accent: '#B5654A',
      text: '#1E1B18',
      textMuted: '#544A42',
      textLight: '#8C7C6E',
      border: '#DCCFC1',
      borderLight: '#EADFD3',
    },
  },
  content,
};

function getMonogram(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((token) => token[0]?.toUpperCase() || '')
    .join('');
}

function bindDoctorData(data) {
  const monogram = getMonogram(data.profile.name);
  const logoAlt = `Logo demo de ${data.profile.name}`;

  const localeCopy = {
    es: {
      footerNavigationTitle: 'Navegación',
      footerContactTitle: 'Contacto',
      mapIframeTitle: `Ubicación referencial de consulta de ${data.profile.name}`,
      mapFallbackTitle: 'HOSPITAL SAN JOSE',
      mapsCta: 'Ver en Google Maps',
      formLogoAlt: `Imagen placeholder de ${data.profile.name}`,
      legalDisclaimer: 'Sitio demo complementario al perfil de Doctoralia.',
    },
    pt: {
      footerNavigationTitle: 'Navegação',
      footerContactTitle: 'Contato',
      mapIframeTitle: `Localização referencial de consulta de ${data.profile.name}`,
      mapFallbackTitle: 'HOSPITAL SAN JOSE',
      mapsCta: 'Ver no Google Maps',
      formLogoAlt: `Imagem placeholder de ${data.profile.name}`,
      legalDisclaimer: 'Site demo complementar ao perfil do Doctoralia.',
    },
  };

  Object.entries(data.content).forEach(([lang, section]) => {
    const copy = localeCopy[lang] || localeCopy.es;

    section.nav.brandName = data.profile.name;
    section.nav.brandSubtitle = data.profile.professionalTitle;
    section.nav.logoAlt = logoAlt;

    section.hero.kicker = `${data.profile.professionalPrefix} ${data.profile.name}`;
    section.hero.monogram = monogram;
    section.hero.photoSrc = data.assets.profilePhoto;
    section.hero.photoFallbackSrc = data.assets.profileFallbackPhoto;
    section.hero.doctoralia.profileUrl = data.links.doctoralia;

    section.footer.brandName = data.profile.name;
    section.footer.logoAlt = logoAlt;
    section.footer.navigationTitle = copy.footerNavigationTitle;
    section.footer.contactTitle = copy.footerContactTitle;
    section.footer.whatsappLabel = 'WhatsApp';
    section.footer.doctoraliaLabel = 'Doctoralia';
    section.footer.legalDisclaimer = copy.legalDisclaimer;

    section.contact.mapIframeTitle = copy.mapIframeTitle;
    section.contact.mapFallbackTitle = copy.mapFallbackTitle;
    section.contact.mapsCta = copy.mapsCta;

    section.booking.form.logoAlt = copy.formLogoAlt;
  });
}

bindDoctorData(maraEstherBarriosDoctorData);
