// Default doctor profile: Paula Andrea Cogorno
// Keep this file as the baseline production-like profile.

const content = {
  es: {
    nav: {
      inicio: 'Inicio',
      sobreMi: 'Sobre mí',
      terapias: 'Servicios',
      primeraConsulta: 'Primera consulta',
      metodo: 'Método',
      opiniones: 'Opiniones',
      agenda: 'Agenda',
      contacto: 'Contacto',
      cta: 'Agendar en Doctoralia',
    },

    hero: {
      title: 'Un espacio para escuchar lo que insiste y comprender lo que se repite',
      subtitle: 'Atención psicológica para adultos, parejas y familias.',
      cta1: 'Agendar una primera sesión',
      cta2: 'Conocer el método',
      cta2Href: '#metodo',
      bookingHelper: 'La agenda se abre en Doctoralia para confirmar disponibilidad.',
      doctoraliaPanelLabel: 'Confianza Doctoralia',
      badges: [
        { label: 'Polanco, CDMX' },
        { label: 'Presencial y online' },
        { label: 'Español · Português' },
        { label: 'Adultos, parejas y familias' },
      ],
      trust: '21 opiniones verificadas en Doctoralia',
      photoAlt: 'Paula Andrea Cogorno, psicóloga en su consultorio',
      photoSrc: '/doctors/paula-cogorno/paulacpic.jpeg',
      doctoralia: {
        profileUrl: 'https://www.doctoralia.com.mx/paula-andrea-cogorno/psicologo/miguel-hidalgo',
        reviewCount: 21,
        rating: 5,
        reviewText: '21 opiniones verificadas en Doctoralia',
        location: 'Polanco, CDMX',
        modalities: 'Presencial y online',
        languages: 'Español · Português',
        bookingCta: 'Agendar en Doctoralia',
      },
    },

    about: {
      label: 'Sobre mí',
      title: 'Una práctica clínica humana, clara y multicultural',
      p1: 'Soy Paula Cogorno, psicóloga con formación en Psicoanálisis y Terapia Cognitivo-Conductual.',
      p2: 'Acompaño procesos terapéuticos de adultos, parejas y familias desde una mirada cálida, ética y profesional. Mi trabajo se orienta a escuchar el malestar, comprender su historia y abrir nuevas formas de vincularse consigo mismo y con los demás.',
      p3: 'Trabajo con personas que atraviesan ansiedad, angustia, duelos, conflictos de pareja, crisis vitales, dependencia emocional, celos, separaciones y procesos de cambio personal.',
      p4: 'Nací en Buenos Aires, Argentina, y he vivido en Puerto Rico, Brasil y actualmente en Ciudad de México. Estas experiencias multiculturales han nutrido mi mirada clínica, permitiéndome acompañar a personas de distintos contextos, historias y formas de vida.',
      p5: 'Mi objetivo es ofrecer un espacio seguro donde puedas poner en palabras aquello que duele, se repite o todavía no ha podido ser elaborado.',
      cta: 'Agendar en Doctoralia',
    },

    whoFor: {
      label: '¿Para quién es este espacio?',
      title: 'Este espacio puede ayudarte si…',
      subtitle: 'Trabajo terapéutico orientado a personas que buscan acompañamiento profesional, humano y claro.',
      items: [
        'Estás sintiendo ansiedad, estrés o bloqueo emocional',
        'Buscas nuevas formas de vincularte con tu pareja, amigos o en tu trabajo',
        'Necesitas tomar decisiones con mayor claridad emocional',
        'Quieres resolver conflictos de pareja o familiares que se repiten',
        'Estás viviendo una transición, pérdida o crisis personal',
        'O simplemente quieres conocerte un poco más',
      ],
      closing: 'No siempre sabemos con claridad qué nos pasa. A veces, empezar terapia es darle lugar a eso que se repite, incomoda o necesita ser escuchado.',
    },

    services: {
      label: 'Servicios',
      title: 'Tipos de atención',
      subtitle: 'Elige el espacio terapéutico que mejor acompañe tu momento actual.',
      intro: 'Acompañamiento profesional, cálido y ético para adultos, parejas y familias.',
      cards: [
        {
          title: 'Terapia individual',
          tag: 'Para adultos',
          descPrimary: 'Un espacio para comprender tu historia, tus emociones y aquello que se repite en tus vínculos o decisiones.',
          descSecondary: 'Acompañamiento en procesos de ansiedad, duelo, autoestima, crisis vitales y cambios personales.',
          cta: 'Agendar terapia individual',
          featured: true,
        },
        {
          title: 'Terapia de pareja',
          tag: 'Coterapia',
          descPrimary: 'Proceso terapéutico en modalidad de "coterapia", acompañado de manera simultánea por las Mtras. Mónica Quintans y Paula Cogorno en cada sesión.',
          descSecondary: 'Orientado a parejas en crisis, distancia emocional, dificultades de comunicación, celos.',
          cta: 'Agendar terapia de pareja',
          featured: false,
        },
        {
          title: 'Terapia familiar',
          tag: 'Para familias',
          descPrimary: 'Un espacio para trabajar dinámicas familiares, conflictos, duelos, cambios importantes o dificultades en la comunicación.',
          descSecondary: 'Busca favorecer la escucha, la comprensión y nuevas formas de vincularse.',
          cta: 'Agendar terapia familiar',
          featured: false,
        },
      ],
      chipsLabel: 'Modalidades y opciones de atención',
      chips: [
        'Presencial en Polanco',
        'Online',
        'Primera consulta',
        'Intervención en crisis',
        'Terapia breve',
      ],
    },

    firstSession: {
      label: 'Antes de agendar',
      title: 'Qué esperar en tu primera consulta',
      intro: 'En este primer encuentro abrimos un espacio confidencial, seguro y sin juicios para escuchar qué te trae a consulta y comenzar a comprender tu situación.',
      items: [
        'Escucha del motivo de consulta',
        'Comprensión de tu momento actual',
        'Identificación de objetivos iniciales',
        'Orientación sobre modalidad, frecuencia y próximos pasos',
      ],
      closing: 'No necesitás saber exactamente por dónde empezar; la primera sesión también es para ordenar lo que estás viviendo.',
      processLabel: 'Proceso de agenda',
      processTitle: 'Reserva tu primera consulta en 3 pasos',
      steps: [
        'Elegí la modalidad: presencial u online.',
        'Agendá tu primera consulta.',
        'Definimos juntos el mejor camino terapéutico para vos.',
      ],
      cta1: 'Agendar en Doctoralia',
      cta2: 'Enviar WhatsApp',
    },

    approach: {
      label: 'Método',
      title: 'Cómo acompaño el proceso terapéutico',
      subtitle: 'Integro profundidad clínica y herramientas prácticas para que el proceso terapéutico sea claro, comprensible y útil en tu vida cotidiana.',
      items: [
        {
          title: 'Comprensión profunda',
          desc: 'Exploramos tu historia personal, tus vínculos y los patrones emocionales que se repiten, para comprender qué sostiene el malestar actual.',
          detail: 'Historia · Vínculos · Mundo interno',
        },
        {
          title: 'Herramientas concretas',
          desc: 'Trabajamos recursos para afrontar pensamientos, emociones y conductas que generan sufrimiento, promoviendo nuevas formas de respuesta.',
          detail: 'Regulación emocional · Recursos prácticos',
        },
        {
          title: 'Proceso terapéutico personalizado',
          desc: 'Definimos objetivos realistas y un ritmo de trabajo acorde a tu contexto, tu momento vital y tu necesidad clínica.',
          detail: 'Proceso claro · Seguimiento clínico',
        },
      ],
    },

    testimonials: {
      label: 'Opiniones',
      title: 'La confianza se construye en el proceso',
      items: [
        { text: 'El espacio terapéutico fue seguro y claro desde el inicio. Me sentí acompañada sin juicio.', author: 'Paciente — Ciudad de México' },
        { text: 'Me ayudó a ordenar ideas y a entender patrones que me hacían sufrir desde hacía años.', author: 'Paciente — Consulta online' },
        { text: 'Encontré una profesional cálida y muy seria al mismo tiempo. Eso me dio confianza para sostener el proceso.', author: 'Paciente — Polanco, CDMX' },
      ],
      note: 'Opiniones verificadas disponibles en Doctoralia. Los testimonios del sitio son referenciales para proteger la privacidad.',
      ctaProfile: 'Ver perfil en Doctoralia',
      ctaReviews: 'Leer opiniones verificadas',
    },

    booking: {
      label: 'Agenda tu consulta',
      title: 'Da el primer paso con claridad',
      subtitle: 'Puedes reservar tu horario en Doctoralia o escribirme por WhatsApp para coordinar la modalidad que mejor se adapte a tu situación.',
      features: [
        'Atención presencial en Polanco, CDMX',
        'Sesiones en línea por videollamada',
        'Atención en español y portugués',
        'Modalidad presencial u online según disponibilidad',
      ],
      calendarCta: 'Agendar en Doctoralia',
      bookingHelper: 'La agenda se confirma por Doctoralia, WhatsApp o correo.',
      whatsappCta: 'Escribir por WhatsApp',
      whatsappNote: '',
      orDivider: 'O, si prefieres, completa el formulario y me pondré en contacto contigo.',
      form: {
        name: 'Nombre completo',
        email: 'Correo electrónico',
        phone: 'Teléfono / WhatsApp',
        modality: 'Modalidad preferida',
        modalityOptions: [
          { value: '', label: 'Seleccionar modalidad…' },
          { value: 'presencial', label: 'Presencial en Polanco' },
          { value: 'online', label: 'Online (videollamada)' },
        ],
        reason: 'Motivo de consulta (opcional)',
        reasonPlaceholder: 'Contame brevemente qué te gustaría trabajar…',
        submit: 'Enviar mensaje',
        success: '¡Mensaje enviado! Paula se pondrá en contacto contigo pronto.',
        errors: {
          nameRequired: 'Por favor ingresa tu nombre.',
          emailRequired: 'Por favor ingresa tu correo.',
          emailInvalid: 'El formato del correo no es válido.',
          modalityRequired: 'Por favor selecciona una modalidad.',
        },
      },
    },

    contact: {
      label: 'Contacto',
      title: 'Polanco, CDMX · Atención presencial y online',
      officeTitle: 'Consultorio Polanco',
      officeAddress: 'Hegel 120, 5to piso, Oficina 501',
      officeNote: 'Polanco V Sección, Miguel Hidalgo · CP 11560',
      onlineTitle: 'Modalidad online',
      onlineDesc: 'Sesiones por videollamada para CDMX, México y pacientes de habla hispana y portuguesa.',
      factsLabel: 'Información clave de atención',
      facts: [
        'Ubicación: Polanco, CDMX',
        'Modalidades: presencial y online',
        'Idiomas: español y português',
      ],
      phone: 'Teléfono / WhatsApp',
      email: 'Correo',
      bookingCta: 'Agendar en Doctoralia',
      doctoraliaCta: 'Ver en Doctoralia',
      whatsappCta: 'Enviar WhatsApp',
      mapNote: 'Mapa referencial del área de atención en Polanco.',
    },

    footer: {
      tagline: 'Psicóloga',
      location: 'Hegel 120 Of. 501, Polanco · CDMX 11560',
      links: {
        sobreMi: 'Sobre mí',
        terapias: 'Servicios',
        primeraConsulta: 'Primera consulta',
        metodo: 'Método',
        agenda: 'Agendar en Doctoralia',
        contacto: 'Contacto',
      },
      disclaimer: 'La información de esta página no sustituye una evaluación o tratamiento profesional. Si estás en una crisis, comunícate con servicios de emergencia.',
      privacy: 'Aviso de privacidad',
      terms: 'Términos de uso',
      copyright: '© 2025 Paula Andrea Cogorno. Todos los derechos reservados.',
    },
  },

  pt: {
    nav: {
      inicio: 'Início',
      sobreMi: 'Sobre mim',
      terapias: 'Serviços',
      primeraConsulta: 'Primeira consulta',
      metodo: 'Método',
      opiniones: 'Opiniões',
      agenda: 'Agenda',
      contacto: 'Contato',
      cta: 'Agendar no Doctoralia',
    },

    hero: {
      title: 'Um espaço para colocar em palavras aquilo que insiste em silêncio.',
      subtitle: 'Atendimento psicológico para adultos, casais e famílias.',
      cta1: 'Agendar uma primeira sessão',
      cta2: 'Conhecer o método',
      cta2Href: '#metodo',
      bookingHelper: 'A agenda abre no Doctoralia para confirmar disponibilidade.',
      doctoraliaPanelLabel: 'Confiança Doctoralia',
      badges: [
        { label: 'Polanco, CDMX' },
        { label: 'Presencial y online' },
        { label: 'Espanhol · Português' },
        { label: 'Adultos, casais e famílias' },
      ],
      trust: '21 avaliações verificadas no Doctoralia',
      photoAlt: 'Paula Andrea Cogorno, psicóloga em seu consultório',
      photoSrc: '/doctors/paula-cogorno/paulacpic.jpeg',
      doctoralia: {
        profileUrl: 'https://www.doctoralia.com.mx/paula-andrea-cogorno/psicologo/miguel-hidalgo',
        reviewCount: 21,
        rating: 5,
        reviewText: '21 avaliações verificadas no Doctoralia',
        location: 'Polanco, CDMX',
        modalities: 'Presencial y online',
        languages: 'Espanhol · Português',
        bookingCta: 'Agendar no Doctoralia',
      },
    },

    about: {
      label: 'Sobre mim',
      title: 'Uma prática clínica humana, clara e multicultural',
      p1: 'Sou Paula Cogorno, psicóloga com formação em Psicanálise e Terapia Cognitivo-Comportamental.',
      p2: 'Acompanho processos terapêuticos de adultos, casais e famílias com uma abordagem calorosa, ética e profissional. Meu trabalho se orienta a escutar o sofrimento, compreender sua história e abrir novas formas de se relacionar consigo mesmo e com os outros.',
      p3: 'Trabalho com pessoas que atravessam ansiedade, angústia, lutos, conflitos de casal, crises vitais, dependência emocional, ciúmes, separações e processos de mudança pessoal.',
      p4: 'Nasci em Buenos Aires, Argentina, e vivi em Porto Rico, Brasil e atualmente na Cidade do México. Essas experiências multiculturais enriqueceram minha visão clínica, permitindo-me acompanhar pessoas de diferentes contextos, histórias e formas de vida.',
      p5: 'Meu objetivo é oferecer um espaço seguro onde você possa colocar em palavras aquilo que dói, se repete ou ainda não pôde ser elaborado.',
      cta: 'Agendar no Doctoralia',
    },

    whoFor: {
      label: 'Para quem é este espaço?',
      title: 'Este espaço pode te ajudar se…',
      subtitle: 'Trabalho terapêutico para pessoas que buscam acompanhamento profissional, humano e claro.',
      items: [
        'Você está atravessando ansiedade, estresse ou bloqueio emocional.',
        'Você vive conflitos de casal ou familiares recorrentes.',
        'Você quer entender padrões que se repetem nos vínculos.',
        'Você está em transição, perda ou crise pessoal.',
        'Você busca tomar decisões com mais clareza emocional.',
        'Você tem dificuldade em colocar limites ou sustentar suas decisões.',
        'Você sente que repete padrões nos seus relacionamentos.',
        'Você está atravessando um luto, separação ou mudança importante.',
        'Você se sente sobrecarregada/o ou desconectada/o de si.',
        'Você vive um processo migratório ou de adaptação a uma nova etapa.',
      ],
      closing: 'Não é preciso ter tudo resolvido para começar a terapia. Às vezes, basta sentir que algo se repete, incomoda ou precisa ser escutado.',
    },

    services: {
      label: 'Serviços',
      title: 'Tipos de atendimento',
      subtitle: 'Escolha o espaço terapêutico que melhor acompanhe seu momento atual.',
      intro: 'Acompanhamento profissional, caloroso e ético para adultos, casais e famílias.',
      cards: [
        {
          title: 'Terapia individual',
          tag: 'Para adultos',
          descPrimary: 'Um espaço para compreender sua história, suas emoções e aquilo que se repete nos seus vínculos ou decisões.',
          descSecondary: 'Acompanhamento em processos de ansiedade, luto, autoestima, crises vitais e mudanças pessoais.',
          cta: 'Agendar terapia individual',
          featured: true,
        },
        {
          title: 'Terapia de casal',
          tag: 'Coterapia',
          descPrimary: 'Processo terapêutico acompanhado pelas Mtras. Mónica Quintans e Paula Cogorno em cada sessão.',
          descSecondary: 'Orientado a casais que atravessam crises, distância emocional, dificuldades de comunicação, ciúmes ou conflitos recorrentes.',
          cta: 'Agendar terapia de casal',
          featured: false,
        },
        {
          title: 'Terapia familiar',
          tag: 'Para famílias',
          descPrimary: 'Um espaço para trabalhar dinâmicas familiares, conflitos, lutos, mudanças importantes ou dificuldades na comunicação.',
          descSecondary: 'Busca favorecer a escuta, a compreensão e novas formas de se relacionar.',
          cta: 'Agendar terapia familiar',
          featured: false,
        },
      ],
      chipsLabel: 'Modalidades e opções de atendimento',
      chips: [
        'Presencial em Polanco',
        'Online',
        'Primeira consulta',
        'Intervenção em crise',
        'Terapia breve',
      ],
    },

    firstSession: {
      label: 'Antes de agendar',
      title: 'O que esperar na sua primeira consulta',
      intro: 'Neste primeiro encontro abrimos um espaço confidencial, seguro e sem julgamentos para escutar o que te traz à consulta e começar a compreender sua situação.',
      items: [
        'Escuta do motivo da consulta',
        'Compreensão do seu momento atual',
        'Identificação de objetivos iniciais',
        'Orientação sobre modalidade, frequência e próximos passos',
      ],
      closing: 'Você não precisa saber exatamente por onde começar; a primeira sessão também é para organizar o que você está vivendo.',
      processLabel: 'Processo de agendamento',
      processTitle: 'Reserve sua primeira consulta em 3 passos',
      steps: [
        'Escolha a modalidade: presencial ou online.',
        'Agende sua primeira consulta.',
        'Definimos juntos o melhor caminho terapêutico para você.',
      ],
      cta1: 'Agendar no Doctoralia',
      cta2: 'Enviar WhatsApp',
    },

    approach: {
      label: 'Método',
      title: 'Como acompanho o processo terapêutico',
      subtitle: 'Integro profundidade clínica e ferramentas práticas para que o processo terapêutico seja claro, compreensível e útil na sua vida cotidiana.',
      items: [
        {
          title: 'Compreensão profunda',
          desc: 'Exploramos sua história pessoal, seus vínculos e os padrões emocionais que se repetem, para compreender o que sustenta o sofrimento atual.',
          detail: 'História · Vínculos · Mundo interno',
        },
        {
          title: 'Ferramentas concretas',
          desc: 'Trabalhamos recursos para enfrentar pensamentos, emoções e comportamentos que geram sofrimento, promovendo novas formas de resposta.',
          detail: 'Regulação emocional · Recursos práticos',
        },
        {
          title: 'Processo terapêutico personalizado',
          desc: 'Definimos objetivos realistas e um ritmo de trabalho adequado ao seu contexto, seu momento de vida e sua necessidade clínica.',
          detail: 'Processo claro · Acompanhamento clínico',
        },
      ],
    },

    testimonials: {
      label: 'Opiniões',
      title: 'A confiança se constrói no processo',
      items: [
        { text: 'O espaço terapêutico foi seguro e claro desde o início. Me senti acolhida sem julgamento.', author: 'Paciente — Cidade do México' },
        { text: 'Ela me ajudou a organizar ideias e entender padrões que se repetiam há muito tempo.', author: 'Paciente — Consulta online' },
        { text: 'Encontrei uma profissional acolhedora e muito séria ao mesmo tempo. Isso me deu confiança para sustentar o processo.', author: 'Paciente — Polanco, CDMX' },
      ],
      note: 'Opiniões verificadas disponíveis no Doctoralia. Os depoimentos do site são referenciais para proteger a privacidade.',
      ctaProfile: 'Ver perfil no Doctoralia',
      ctaReviews: 'Ler opiniões verificadas',
    },

    booking: {
      label: 'Agende sua consulta',
      title: 'Dê o primeiro passo com clareza',
      subtitle: 'Você pode reservar seu horário no Doctoralia ou me escrever pelo WhatsApp para coordenar a modalidade que melhor se adapte à sua situação.',
      features: [
        'Atendimento presencial em Polanco, CDMX',
        'Sessões online por videochamada',
        'Atendimento em espanhol e português',
        'Modalidade presencial ou online conforme disponibilidade',
      ],
      calendarCta: 'Agendar no Doctoralia',
      bookingHelper: 'A agenda se confirma pelo Doctoralia, WhatsApp ou e-mail.',
      whatsappCta: 'Escrever pelo WhatsApp',
      whatsappNote: '',
      orDivider: 'Ou, se preferir, preencha o formulário e entrarei em contato.',
      form: {
        name: 'Nome completo',
        email: 'E-mail',
        phone: 'Telefone / WhatsApp',
        modality: 'Modalidade preferida',
        modalityOptions: [
          { value: '', label: 'Selecionar modalidade…' },
          { value: 'presencial', label: 'Presencial em Polanco' },
          { value: 'online', label: 'Online (videochamada)' },
        ],
        reason: 'Motivo da consulta (opcional)',
        reasonPlaceholder: 'Conte brevemente o que você gostaria de trabalhar…',
        submit: 'Enviar mensagem',
        success: 'Mensagem enviada! Paula entrará em contato em breve.',
        errors: {
          nameRequired: 'Por favor, informe seu nome.',
          emailRequired: 'Por favor, informe seu e-mail.',
          emailInvalid: 'Formato de e-mail inválido.',
          modalityRequired: 'Por favor, selecione uma modalidade.',
        },
      },
    },

    contact: {
      label: 'Contato',
      title: 'Polanco, CDMX · Atendimento presencial e online',
      officeTitle: 'Consultório Polanco',
      officeAddress: 'Hegel 120, 5º andar, Sala 501',
      officeNote: 'Polanco V Sección, Miguel Hidalgo · CEP 11560',
      onlineTitle: 'Modalidade online',
      onlineDesc: 'Sessões por videochamada para CDMX, México e pacientes de língua espanhola e portuguesa.',
      factsLabel: 'Informações-chave de atendimento',
      facts: [
        'Localização: Polanco, CDMX',
        'Modalidades: presencial e online',
        'Idiomas: espanhol e português',
      ],
      phone: 'Telefone / WhatsApp',
      email: 'E-mail',
      bookingCta: 'Agendar no Doctoralia',
      doctoraliaCta: 'Ver no Doctoralia',
      whatsappCta: 'Enviar WhatsApp',
      mapNote: 'Mapa referencial da área de atendimento em Polanco.',
    },

    footer: {
      tagline: 'Psicóloga',
      location: 'Hegel 120 Sala 501, Polanco · CDMX 11560',
      links: {
        sobreMi: 'Sobre mim',
        terapias: 'Serviços',
        primeraConsulta: 'Primeira consulta',
        metodo: 'Método',
        agenda: 'Agendar no Doctoralia',
        contacto: 'Contato',
      },
      disclaimer: 'As informações desta página não substituem avaliação ou tratamento profissional. Em situação de crise, procure os serviços de emergência.',
      privacy: 'Aviso de privacidade',
      terms: 'Termos de uso',
      copyright: '© 2025 Paula Andrea Cogorno. Todos os direitos reservados.',
    },
  },
};

const paulaCogorno = {
  id: 'paula-cogorno',
  slug: 'paula-cogorno',
  profile: {
    name: 'Paula Andrea Cogorno',
    professionalPrefix: 'Mtra.',
    professionalTitle: 'Psicóloga',
    credential: 'Céd. Prof. 14352915',
    credentialNote: 'Cédula Profesional: 14352915',
    specialty: 'Psicóloga',
    audience: 'Adultos, parejas y familias',
    location: 'Polanco, CDMX',
    address: 'Hegel 120, 5to piso, Oficina 501, Polanco V Sección, Miguel Hidalgo 11560',
    modalities: 'Presencial y online',
    languages: 'Español · Português',
    phone: '+52 55 4343 0309',
    email: 'paulacogorno@gmail.com',
  },
  links: {
    doctoralia: 'https://www.doctoralia.com.mx/paula-andrea-cogorno/psicologo/miguel-hidalgo',
    whatsapp: 'https://wa.me/525543430309',
    tel: 'tel:+525543430309',
    maps: 'https://maps.google.com/?q=Hegel+120+Oficina+501,+Polanco+V+Secci%C3%B3n,+Miguel+Hidalgo,+CDMX+11560',
    mapsEmbed: 'https://maps.google.com/maps?q=Hegel+120,+Polanco+V+Secci%C3%B3n,+Miguel+Hidalgo,+CDMX+11560&hl=es&z=17&output=embed',
  },
  integrations: {
    doctoraliaWidget: {
      doctorId: 'paula-andrea-cogorno',
      type: 'big_with_calendar',
      opinion: false,
      hideBranding: true,
      saasOnly: true,
      ctaText: 'Reserve una cita',
      a11yTitle: 'Widget de reserva de citas médicas',
    },
  },
  assets: {
    logo: '/paufoto.png',
    profilePhoto: '/doctors/paula-cogorno/paulacpic.jpeg',
    profileFallbackPhoto: '/doctors/paula-cogorno/paulacpic.jpeg',
    officePhoto: '/doctors/paula-cogorno/office.jpg',
    ogImage: '/doctors/paula-cogorno/paulacpic.jpeg',
  },
  seo: {
    es: {
      title: 'Paula Andrea Cogorno · Psicóloga en Polanco, CDMX | Psicoterapia online y presencial',
      description: 'Paula Andrea Cogorno, psicóloga en Polanco, CDMX. Psicoterapia online y presencial para terapia individual, de pareja y familiar. Atención en español y português.',
      keywords: 'psicóloga en polanco, psicóloga cdmx, psicoterapia online y presencial, terapia individual, terapia de pareja, terapia familiar, psicoterapia en español y portugués',
      ogTitle: 'Paula Andrea Cogorno · Psicóloga en Polanco, CDMX',
      ogDescription: 'Psicoterapia online y presencial en CDMX: terapia individual, de pareja y familiar en español y português.',
      ogLocale: 'es_MX',
      ogUrl: '[REVISAR]',
    },
    pt: {
      title: 'Paula Andrea Cogorno · Psicóloga em Polanco, CDMX | Psicoterapia online e presencial',
      description: 'Paula Andrea Cogorno, psicóloga em Polanco, CDMX. Psicoterapia online e presencial para terapia individual, de casal e familiar. Atendimento em espanhol e português.',
      keywords: 'psicóloga em polanco, psicóloga cdmx, psicoterapia online e presencial, terapia individual, terapia de casal, terapia familiar, psicoterapia em espanhol e português',
      ogTitle: 'Paula Andrea Cogorno · Psicóloga em Polanco, CDMX',
      ogDescription: 'Psicoterapia online e presencial na CDMX: terapia individual, de casal e familiar em espanhol e português.',
      ogLocale: 'pt_BR',
      ogUrl: '[REVISAR]',
    },
  },
  theme: {
    colors: {
      bg: '#F2EEF8',
      bgWarm: '#EAE2F5',
      bgSage: '#E1D9EE',
      primary: '#2C3B35',
      accent: '#C4714A',
      text: '#1A1F1C',
      textMuted: '#4A5048',
      textLight: '#8A9088',
      border: '#DDD8D0',
      borderLight: '#EAE5DD',
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
  const logoAlt = `Logo de ${data.profile.name}`;

  const localeCopy = {
    es: {
      footerNavigationTitle: 'Navegación',
      footerContactTitle: 'Contacto',
      mapIframeTitle: `Ubicación del consultorio de ${data.profile.name}`,
      mapFallbackTitle: 'Polanco, Miguel Hidalgo',
      mapsCta: 'Ver en Google Maps',
      formLogoAlt: `Logo de ${data.profile.name}`,
    },
    pt: {
      footerNavigationTitle: 'Navegação',
      footerContactTitle: 'Contato',
      mapIframeTitle: `Localização do consultório de ${data.profile.name}`,
      mapFallbackTitle: 'Polanco, Miguel Hidalgo',
      mapsCta: 'Ver no Google Maps',
      formLogoAlt: `Logo de ${data.profile.name}`,
    },
  };

  Object.entries(data.content).forEach(([lang, section]) => {
    const copy = localeCopy[lang] || localeCopy.es;

    section.nav.brandName = data.profile.name;
    section.nav.brandSubtitle = data.profile.professionalTitle;
    section.nav.brandCredential = data.profile.credential || null;
    section.nav.logoAlt = logoAlt;
    section.footer.credential = data.profile.credentialNote || null;

    section.hero.kicker = `${data.profile.professionalPrefix} ${data.profile.name}`;
    section.hero.credential = data.profile.credentialNote || null;
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

    section.contact.mapIframeTitle = copy.mapIframeTitle;
    section.contact.mapFallbackTitle = copy.mapFallbackTitle;
    section.contact.mapsCta = copy.mapsCta;

    section.booking.form.logoAlt = copy.formLogoAlt;
  });
}

bindDoctorData(paulaCogorno);

export default paulaCogorno;
