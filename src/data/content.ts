import { Chapter, RuneInfo, TarotSuitInfo, ZodiacSignInfo } from '../types';

export const IMAGES = {
  celestialCover: '/src/assets/images/atlas_celestial_cover_1792200231664.jpg',
  tarotRunes: '/src/assets/images/atlas_tarot_runes_1792200231517.jpg',
  passportSeal: '/src/assets/images/atlas_passport_seal_1792200231655.jpg',
};

export const EVENT_DETAILS = {
  title: 'Atlas de los Mundos Interiores',
  subtitle: 'Pequeños secretos de astrología, Tarot y runas',
  kicker: 'Una antesala de nuestro encuentro oracular',
  quoteIntro: '“Hay más de una manera de mirar el cielo. Y también de mirarnos por dentro.”',
  summary: 'Un pequeño libro para despertar preguntas, descubrir símbolos y llegar al encuentro con la curiosidad encendida.',
  date: 'Sábado 24 de octubre',
  time: '15 a 20 hs',
  modality: 'Encuentro presencial · Cupos reducidos',
  hosts: 'Rincón Zen × Camino Wayra',
  website: 'www.rinconzen.com.ar',
  instagram: '@rinconzen_reiki',
  phone: '+54 9 11 4980-1624',
  whatsappUrl: 'https://wa.me/5491149801624?text=Hola!%20Vengo%20del%20Atlas%20de%20los%20Mundos%20Interiores%20y%20quiero%20consultar%20sobre%20el%20encuentro%20presencial.',
  disclaimer: 'Una nota sobre nuestro enfoque: compartimos tradiciones y sistemas simbólicos como herramientas culturales de exploración personal, no como métodos científicamente validados para predecir el futuro o describir la personalidad.',
};

export const ZODIAC_SIGNS: ZodiacSignInfo[] = [
  { name: 'Aries', symbol: '♈', element: 'Fuego', dates: '21 Mar - 19 Abr' },
  { name: 'Tauro', symbol: '♉', element: 'Tierra', dates: '20 Abr - 20 May' },
  { name: 'Géminis', symbol: '♊', element: 'Aire', dates: '21 May - 20 Jun' },
  { name: 'Cáncer', symbol: '♋', element: 'Agua', dates: '21 Jun - 22 Jul' },
  { name: 'Leo', symbol: '♌', element: 'Fuego', dates: '23 Jul - 22 Ago' },
  { name: 'Virgo', symbol: '♍', element: 'Tierra', dates: '23 Ago - 22 Sep' },
  { name: 'Libra', symbol: '♎', element: 'Aire', dates: '23 Sep - 22 Oct' },
  { name: 'Escorpio', symbol: '♏', element: 'Agua', dates: '23 Oct - 21 Nov' },
  { name: 'Sagitario', symbol: '♐', element: 'Fuego', dates: '22 Nov - 21 Dic' },
  { name: 'Capricornio', symbol: '♑', element: 'Tierra', dates: '22 Dic - 19 Ene' },
  { name: 'Acuario', symbol: '♒', element: 'Aire', dates: '20 Ene - 18 Feb' },
  { name: 'Piscis', symbol: '♓', element: 'Agua', dates: '19 Feb - 20 Mar' },
];

export const ASTROLOGICAL_HOUSES = [
  'Casa I (Identidad e inicio)',
  'Casa II (Recursos y valor propio)',
  'Casa III (Comunicación y entorno cercano)',
  'Casa IV (Hogar, raíces y refugio íntimo)',
  'Casa V (Creatividad, placer y autoexpresión)',
  'Casa VI (Rutinas, cuerpo y servicio cotidiano)',
  'Casa VII (Vínculos, parejas y espejos)',
  'Casa VIII (Transformación, misterio y lo compartido)',
  'Casa IX (Filosofía, viajes y búsqueda de sentido)',
  'Casa X (Vocación, Medio Cielo y proyección pública)',
  'Casa XI (Comunidad, amistades e ideales colectivos)',
  'Casa XII (Inconsciente, retiro y espiritualidad)',
];

export const RUNES: RuneInfo[] = [
  {
    id: 'algiz',
    symbol: 'ᛉ',
    name: 'Algiz',
    phonetic: 'Elhaz',
    keyword: 'Protección y límites sagrados',
    description: 'Asociada con la capacidad de resguardo, la atención despierta y el establecimiento consciente de límites cotidianos.',
    intentionTheme: 'Cuidar mi energía, decir que no con serenidad y habitar mi espacio.',
  },
  {
    id: 'raidho',
    symbol: 'ᚱ',
    name: 'Raidho',
    phonetic: 'Raidho',
    keyword: 'Viaje y movimiento armónico',
    description: 'La rueda que avanza, el ritmo del camino personal y la sincronización con los ciclos vitales.',
    intentionTheme: 'Tomar la dirección de mi camino y fluir con el ritmo correcto.',
  },
  {
    id: 'gebo',
    symbol: 'ᚷ',
    name: 'Gebo',
    phonetic: 'Gebo',
    keyword: 'Intercambio, dones y reciprocidad',
    description: 'El equilibrio sagrado entre el dar y el recibir en los vínculos afectivos y con el universo.',
    intentionTheme: 'Reconocer mis dones y cultivar relaciones en equilibrio genuino.',
  },
  {
    id: 'fehu',
    symbol: 'ᚠ',
    name: 'Fehu',
    phonetic: 'Fehu',
    keyword: 'Energía nutricia y abundancia',
    description: 'El ganado primal, la energía circulante, el impulso fértil y los recursos que florecen.',
    intentionTheme: 'Canalizar mi vitalidad y abrirme a la prosperidad compartida.',
  },
  {
    id: 'kenaz',
    symbol: 'ᚲ',
    name: 'Kenaz',
    phonetic: 'Kenaz',
    keyword: 'Antorcha, claridad y revelación',
    description: 'El fuego controlado de la sabiduría, la chispa intuitiva y la claridad mental frente a dudas.',
    intentionTheme: 'Iluminar aquello que estaba en sombras con entendimiento compasivo.',
  },
  {
    id: 'sowilo',
    symbol: 'ᛋ',
    name: 'Sowilo',
    phonetic: 'Sowilo',
    keyword: 'Fuerza solar y plenitud',
    description: 'La rueda solar que disipa las nieblas, calor reconfortante e integración interna.',
    intentionTheme: 'Reconectar con mi entusiasmo y confiar en mi brillo natural.',
  },
  {
    id: 'wunjo',
    symbol: 'ᚹ',
    name: 'Wunjo',
    phonetic: 'Wunjo',
    keyword: 'Alegría, reposo y gozo del alma',
    description: 'La satisfacción tras la labor realizada, comunión en afecto y deleite pacífico.',
    intentionTheme: 'Permitirme el disfrute sencillo y celebrar los pequeños milagros cotidianos.',
  },
  {
    id: 'ansuz',
    symbol: 'ᚨ',
    name: 'Ansuz',
    phonetic: 'Ansuz',
    keyword: 'Palabra sagrada e inspiración oracular',
    description: 'El susurro del viento, la escucha atenta de las señales y la comunicación verdadera.',
    intentionTheme: 'Expresar mi verdad con ternura y escuchar la voz de mi sabiduría interna.',
  },
];

export const TAROT_SUITS: TarotSuitInfo[] = [
  {
    id: 'copas',
    name: 'Copas',
    element: 'Agua',
    symbol: '🌊 🏆',
    keywords: 'Afectos, emociones, sensibilidad y relaciones',
    description: 'Una carta de Copas puede invitarnos a mirar cómo nos sentimos verdaderamente, cómo fluyen nuestras aguas internas y de qué manera nos vinculamos desde el corazón.',
    question: '¿Qué emoción pide hoy ser escuchada con ternura?',
  },
  {
    id: 'bastos',
    name: 'Bastos',
    element: 'Fuego',
    symbol: '🔥 🪄',
    keywords: 'Impulso, creatividad, deseo de actuar y entusiasmo',
    description: 'Su lenguaje suele girar alrededor de aquello que nos moviliza, enciende la chispa vital y queremos poner en marcha con convicción.',
    question: '¿Hacia dónde arde tu entusiasmo en este momento?',
  },
  {
    id: 'espadas',
    name: 'Espadas',
    element: 'Aire',
    symbol: '🌬️ ⚔️',
    keywords: 'Ideas, decisiones, palabras, discernimiento y claridad',
    description: 'No son cartas «malas»: a veces pensar con claridad implica cortar lo superfluo o enfrentar una conversación incómoda para recuperar la paz.',
    question: '¿Qué verdad necesita ser formulada con claridad y respeto?',
  },
  {
    id: 'oros',
    name: 'Oros / Pentáculos',
    element: 'Tierra',
    symbol: '🌱 🪙',
    keywords: 'Recursos, cuerpo, trabajo, estabilidad y vida material',
    description: 'Nos recuerdan que muchas decisiones también necesitan tiempo de maduración, hábitos sostenibles, escucha al cuerpo y cuidado concreto de la materia.',
    question: '¿Qué aspecto tangible de tu bienestar necesita más enraizamiento?',
  },
];

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    number: '01',
    title: 'No sos solamente tu signo solar',
    readTime: '3 min de lectura',
    themeKicker: 'Astrología Simbólica · La Tríada Básica',
    quote: {
      text: '“El mapa no es el territorio.”',
      author: 'Alfred Korzybski',
    },
    curiosityFact: {
      title: 'Dato que sorprende',
      text: 'Dos personas nacidas el mismo día pueden compartir el Sol y tener Ascendentes distintos. La hora importa muchísimo.',
    },
    contentSections: [
      {
        paragraphs: [
          'Si alguna vez dijiste «soy de tal signo, pero no me identifico para nada», tenemos una noticia: en astrología, tu signo solar es apenas una pieza del rompecabezas. La carta natal es una representación simbólica del cielo en un momento y lugar determinados. Para empezar a leerla, hay tres referencias que vale la pena conocer.',
        ],
      },
      {
        heading: 'Sol: el centro de nuestra identidad',
        paragraphs: [
          'El Sol simboliza la vitalidad, la voluntad y el modo en que buscamos afirmarnos. No describe toda nuestra personalidad: propone una imagen de aquello que queremos desarrollar y expresar.',
        ],
      },
      {
        heading: 'Luna: el idioma de nuestras emociones',
        paragraphs: [
          'La Luna se vincula con las necesidades afectivas, las reacciones espontáneas, los hábitos y la sensación de refugio. En una lectura simbólica, nos invita a preguntarnos qué necesitamos para sentirnos a salvo.',
        ],
      },
      {
        heading: 'Ascendente: nuestra puerta de entrada al mundo',
        paragraphs: [
          'Es el signo que ascendía por el horizonte oriental en el momento del nacimiento. Se interpreta como una manera de presentarnos, encarar situaciones nuevas y entrar en contacto con el entorno. Para calcularlo se necesitan hora y lugar de nacimiento razonablemente precisos.',
        ],
      },
      {
        heading: 'Una fórmula que te va a servir',
        paragraphs: [],
        formula: {
          title: 'La Tríada de Interpretación',
          items: [
            { label: 'Planeta', description: 'Qué función observamos (ej. la vitalidad, las emociones, los afectos).' },
            { label: 'Signo', description: 'Cómo se expresa esa energía (el tono, estilo y elemento).' },
            { label: 'Casa', description: 'En qué ámbito específico de la vida se despliega el escenario.' },
          ],
          note: 'Por ejemplo: una Luna en Tauro en Casa IV se puede leer como una búsqueda de seguridad emocional a través de la estabilidad y el hogar. Es una interpretación, no una sentencia.',
        },
      },
    ],
    exercise: {
      title: 'Tu Tríada Astral en la Bitácora',
      description: 'Anotá tus tres posiciones principales y la pregunta que te despiertan.',
      fields: [
        { key: 'sunSign', label: 'Mi Sol está en', placeholder: 'Seleccioná tu signo solar', type: 'select', options: ZODIAC_SIGNS.map(s => s.name) },
        { key: 'moonSign', label: 'Mi Luna está en', placeholder: 'Seleccioná tu signo lunar', type: 'select', options: ZODIAC_SIGNS.map(s => s.name) },
        { key: 'ascendantSign', label: 'Mi Ascendente está en', placeholder: 'Seleccioná tu signo ascendente', type: 'select', options: ZODIAC_SIGNS.map(s => s.name) },
        { key: 'sunMoonQuestions', label: '¿Qué preguntas o sensaciones te despiertan tu Luna y tu Ascendente?', placeholder: 'Ej: Siento que mi Luna me pide más silencio del que me permito, y mi Ascendente me desafía a mostrarme...', type: 'textarea' },
      ],
    },
  },
  {
    id: 2,
    number: '02',
    title: 'Venus no es solamente romance',
    readTime: '3 min de lectura',
    themeKicker: 'Astrología Simbólica · Placer y Valor Propio',
    quote: {
      text: '“La belleza es verdad, la verdad belleza.”',
      author: 'John Keats, «Oda a una urna griega»',
    },
    curiosityFact: {
      title: 'Una curiosidad',
      text: 'En astronomía, Venus es uno de los objetos más brillantes del cielo nocturno. Por eso fue conocido desde la Antigüedad como lucero de la mañana y de la tarde. Es el mismo planeta: cambia su posición aparente respecto del Sol.',
    },
    contentSections: [
      {
        paragraphs: [
          'Cuando escuchamos «Venus», pensamos en amor, flores y corazones. Pero su simbolismo astrológico es bastante más amplio y, por eso mismo, más interesante.',
          'Venus habla de la manera en que buscamos armonía, construimos vínculos, elegimos lo que nos gusta y reconocemos aquello que tiene valor para nosotras. También se asocia con el disfrute, la belleza, el placer y la capacidad de recibir.',
        ],
      },
      {
        heading: 'El mismo planeta, distintos estilos',
        paragraphs: [
          'Venus en Tauro suele interpretarse como una valoración de la estabilidad, el contacto sensorial y los placeres simples. Venus en Géminis, en cambio, se asocia con la conversación, la curiosidad y el intercambio de ideas. Ninguna posición es «mejor»: son lenguajes simbólicos diferentes.',
        ],
      },
      {
        heading: '¿Y qué tiene que ver la casa?',
        paragraphs: [
          'Muchísimo. Venus en Casa III podría llevarnos a explorar el valor que damos a las palabras y al intercambio cotidiano. Venus en Casa X, a preguntarnos cómo buscamos armonía o reconocimiento en la vida pública. El signo matiza la expresión; la casa aporta el escenario.',
        ],
      },
    ],
    exercise: {
      title: 'Una pregunta para tu cuaderno',
      description: 'Esa lista puede ser una manera muy humana de empezar a conversar con el símbolo de Venus.',
      fields: [
        { key: 'venusSign', label: 'Mi Venus está en (Signo)', placeholder: 'Signo de tu Venus', type: 'select', options: ZODIAC_SIGNS.map(s => s.name) },
        { key: 'venusHouse', label: 'En Casa', placeholder: 'Casa astrológica de tu Venus', type: 'select', options: ASTROLOGICAL_HOUSES },
        { key: 'venusTruePleasures', label: '¿Qué cosas te hacen disfrutar de verdad, incluso cuando nadie más las considera importantes?', placeholder: 'Pensá en un aroma, una conversación, una canción, un espacio particular...', type: 'textarea' },
      ],
    },
  },
  {
    id: 3,
    number: '03',
    title: 'Medio Cielo: ¿hacia dónde queremos crecer?',
    readTime: '3 min de lectura',
    themeKicker: 'Astrología Simbólica · Vocación y Propósito',
    quote: {
      text: '“No hay viento favorable para quien no sabe a qué puerto se dirige.”',
      author: 'Atribuida a Séneca',
    },
    curiosityFact: {
      title: 'Dato que sorprende',
      text: 'El Medio Cielo es un punto geométrico, no un planeta. Y no equivale a «tu trabajo actual»: su interpretación es mucho más amplia y vocacional.',
    },
    contentSections: [
      {
        paragraphs: [
          'Hay un punto de la carta natal que suele despertar preguntas apasionantes: el Medio Cielo, o MC. En muchos sistemas de casas está vinculado con la cúspide de la Casa X y se utiliza para reflexionar sobre la vocación, la proyección pública, los logros y el lugar que aspiramos a ocupar en el mundo.',
          'No es una etiqueta profesional. No dice «vas a ser médica» o «tenés que dedicarte al arte». Nos ofrece un símbolo para conversar sobre la dirección que queremos darle a nuestra vida y la forma en que deseamos contribuir.',
        ],
      },
      {
        heading: 'Una distinción importante',
        paragraphs: [
          'El Sol se asocia con la identidad; el Medio Cielo, con la orientación pública o vocacional. Podés sentirte muy identificada con tu signo solar y, sin embargo, encontrar que tu Medio Cielo describe otro tipo de aspiraciones.',
        ],
      },
      {
        heading: '¿Siempre coincide con la Casa X?',
        paragraphs: [
          'No necesariamente. En algunos sistemas, como Placidus, el MC es la cúspide de la Casa X. En otros, como casas de signo entero, puede caer en otra casa. En nuestro encuentro vamos a aclarar qué sistema usamos para que todas estemos leyendo el mismo mapa.',
        ],
      },
    ],
    exercise: {
      title: 'Mini ejercicio: Tres preguntas del Medio Cielo',
      description: 'No hace falta responder perfecto. Las preguntas valiosas rara vez vienen con casilleros para tildar.',
      fields: [
        { key: 'midheavenSign', label: 'Mi Medio Cielo (MC) está en', placeholder: 'Signo de tu Medio Cielo', type: 'select', options: ZODIAC_SIGNS.map(s => s.name) },
        { key: 'midheavenConstruct', label: '1. ¿Qué me gustaría construir con el tiempo?', placeholder: 'Un proyecto, un espacio de calma, una comunidad, un modo de vida...', type: 'textarea' },
        { key: 'midheavenQuality', label: '2. ¿Qué cualidad me gustaría que otras personas reconocieran en mí?', placeholder: 'Ej: templanza, generosidad, claridad, calidez...', type: 'text' },
        { key: 'midheavenPurpose', label: '3. ¿Qué actividad me da una sensación genuina de propósito?', placeholder: 'Aquello en lo que el tiempo vuela y te sentís plenamente presente...', type: 'textarea' },
      ],
    },
  },
  {
    id: 4,
    number: '04',
    title: 'Algiz: el símbolo de proteger nuestro espacio',
    readTime: '3 min de lectura',
    themeKicker: 'Tradición Rúnica · Límites Sagrados',
    quote: {
      text: '“Conocete a vos misma.”',
      author: 'Adaptación del aforismo délfico «Conócete a ti mismo»',
    },
    curiosityFact: {
      title: 'Algo que vale la pena saber',
      text: 'No hay evidencia histórica suficiente para afirmar que Algiz se usara en la Antigüedad exactamente como se usa hoy en rituales modernos de protección. Podemos disfrutar su simbolismo sin inventarle una historia.',
    },
    contentSections: [
      {
        paragraphs: [
          'Las runas nacieron como signos de escritura utilizados por pueblos germánicos. El Futhark antiguo tiene 24 caracteres. Con el paso del tiempo, y especialmente en corrientes esotéricas modernas, esos signos recibieron nuevos usos simbólicos y contemplativos.',
        ],
      },
      {
        heading: 'ᛉ Una runa que despierta curiosidad',
        paragraphs: [
          'Algiz se representa habitualmente con un trazo vertical y dos ramas que se abren hacia arriba. En las interpretaciones rúnicas contemporáneas suele asociarse con la protección, la alerta y la capacidad de establecer límites.',
          'A veces se la compara visualmente con una persona que eleva los brazos o con ramas abiertas. Son imágenes interpretativas actuales, no explicaciones históricas demostradas de su forma original.',
        ],
      },
      {
        heading: 'Protegerse también puede ser algo cotidiano',
        paragraphs: [
          'Pensá en la protección más allá de los amuletos: decir que no cuando hace falta, descansar, elegir con quién compartimos nuestro tiempo, cuidar nuestra energía emocional y reconocer lo que nos hace bien.',
        ],
      },
    ],
    exercise: {
      title: 'Una pregunta para llevarte',
      description: 'Escribilo como una acción, no como un deseo abstracto.',
      fields: [
        { key: 'algizLimit', label: '¿Qué límite pequeño y concreto podrías establecer esta semana para cuidar mejor tu tiempo o tu bienestar?', placeholder: 'Ej: Silenciar el teléfono a partir de las 21 hs, no asumir compromisos extras este jueves, o reservar una hora a solas...', type: 'textarea' },
      ],
    },
  },
  {
    id: 5,
    number: '05',
    title: '¿Consultar una runa o trabajar con ella?',
    readTime: '4 min de lectura',
    themeKicker: 'Tradición Rúnica · Consulta vs Intención',
    curiosityFact: {
      title: 'La parte esencial',
      text: 'El dibujo no reemplaza la acción. El símbolo puede ayudarte a recordar lo que elegiste hacer. Si te gustan las velas, usalas con precaución y nunca las dejes encendidas sin supervisión.',
    },
    contentSections: [
      {
        paragraphs: [
          'Aunque suenen parecidos, son dos maneras distintas de acercarnos a un símbolo. Y entender esa diferencia hace que una práctica sea más clara y, sobre todo, más personal.',
        ],
      },
      {
        heading: 'Consultar: abrir una pregunta',
        paragraphs: [
          'En una consulta, elegimos una pregunta abierta y extraemos una runa. Después exploramos su significado como disparador de reflexión. Por ejemplo: «¿Qué necesito observar antes de tomar esta decisión?». No necesitamos convertir el resultado en una predicción infalible.',
        ],
      },
      {
        heading: 'Trabajar: elegir una intención',
        paragraphs: [
          'En un trabajo simbólico hacemos el camino inverso: primero identificamos una intención y luego elegimos una runa que nos ayude a recordarla. Si queremos pensar en límites, podríamos elegir Algiz; si buscamos revisar un cambio de rumbo, Raidho; si nos interesa el equilibrio entre dar y recibir, Gebo.',
        ],
      },
      {
        heading: 'Un ritualcito sencillo: mi espacio, mi intención',
        paragraphs: [
          'Duración: cinco minutos. Vas a necesitar una hoja, una lapicera y un rincón tranquilo. Una vela o una infusión son opcionales; no hace falta nada especial.',
        ],
        ritualSteps: [
          '1. Sentate cómodamente y hacé tres respiraciones lentas.',
          '2. Dibujá Algiz (ᛉ) en el centro de la hoja.',
          '3. Escribí debajo: «Hoy elijo cuidar mi espacio y respetar mis límites».',
          '4. Pensá en una acción concreta que acompañe esa frase: apagar notificaciones, reservar un momento de descanso o decir que no a algo.',
          '5. Guardá la hoja donde puedas verla y revisá dentro de unos días si hiciste esa acción.',
        ],
      },
    ],
    exercise: {
      title: 'Mi Elección de Intención Rúnica',
      description: 'Elegí la runa con la que querés trabajar hoy y sellá tu frase de intención.',
      fields: [
        { key: 'intentionRune', label: 'Runa elegida para trabajar', placeholder: 'Elegí una runa', type: 'select', options: RUNES.map(r => `${r.symbol} ${r.name} · ${r.keyword}`) },
        { key: 'intentionRunePhrase', label: 'Mi frase de intención rúnica y acción concreta', placeholder: '«Hoy elijo cuidar mi espacio y respetar mis límites...»', type: 'textarea' },
      ],
    },
  },
  {
    id: 6,
    number: '06',
    title: 'Tarot: cuatro palos, cuatro conversaciones',
    readTime: '3 min de lectura',
    themeKicker: 'Tarot Simbólico · Los Cuatro Elementos',
    quote: {
      text: '“La imaginación es más importante que el conocimiento.”',
      author: 'Albert Einstein (cita célebre atribuida)',
    },
    curiosityFact: {
      title: 'Dato que sorprende',
      text: 'El Tarot no nació como un sistema exclusivamente adivinatorio: sus antecedentes están en juegos de cartas de la Europa del siglo XV. Sus lecturas esotéricas se desarrollaron más tarde.',
    },
    contentSections: [
      {
        paragraphs: [
          'A veces una carta del Tarot parece difícil de interpretar hasta que recordamos algo simple: los Arcanos Menores se organizan en cuatro palos. Cada palo ofrece una primera pista sobre el terreno simbólico que estamos explorando.',
        ],
      },
      {
        heading: 'Los cuatro terrenos elementales',
        paragraphs: [
          '• Copas · Agua: Afectos, emociones, sensibilidad y relaciones. Una carta de Copas puede invitarnos a mirar cómo nos sentimos y cómo nos vinculamos.',
          '• Bastos · Fuego: Impulso, creatividad, deseo de actuar y entusiasmo. Su lenguaje suele girar alrededor de aquello que nos moviliza y queremos poner en marcha.',
          '• Espadas · Aire: Ideas, decisiones, palabras, tensiones y discernimiento. No son cartas «malas»: a veces pensar con claridad implica enfrentar una conversación incómoda.',
          '• Oros · Tierra: Recursos, cuerpo, trabajo, estabilidad y vida material. Nos recuerdan que muchas decisiones también necesitan tiempo, organización y cuidado concreto.',
        ],
      },
      {
        heading: 'Jugá a mirar antes de memorizar',
        paragraphs: [
          'Elegí una carta cualquiera y preguntate: ¿qué está pasando en la imagen?, ¿qué emoción me despierta?, ¿qué detalles llaman mi atención? Después observá su palo. No hay que adivinar una respuesta: estamos practicando una lectura atenta.',
        ],
      },
    ],
    exercise: {
      title: 'Tu Conversación con los Palos',
      description: '¿Cuál de los cuatro reinos elementales te llama a conversar hoy?',
      fields: [
        { key: 'tarotCuriositySuit', label: 'El palo del Tarot que más curiosidad me despierta', placeholder: 'Seleccioná un palo', type: 'select', options: ['Copas (Agua · Afectos y emociones)', 'Bastos (Fuego · Creatividad e impulso)', 'Espadas (Aire · Ideas y discernimiento)', 'Oros (Tierra · Cuerpo, recursos y materia)'] },
        { key: 'tarotReflection', label: '¿Qué detalle o sensación despierta este palo en tu vida hoy?', placeholder: 'Noto que las copas me invitan a ablandarme / Siento que necesito el fuego de bastos para emprender...', type: 'textarea' },
      ],
    },
  },
  {
    id: 7,
    number: '07',
    title: 'Tu primera página del Pasaporte Celestial',
    readTime: '3 min de lectura',
    themeKicker: 'Bitácora Final · Integración Oracular',
    quote: {
      text: '“Lo importante no es lo que mirás, sino lo que ves.”',
      author: 'Henry David Thoreau',
    },
    contentSections: [
      {
        paragraphs: [
          'Si llegaste hasta acá, ya tenés seis puertas para entrar al universo de los símbolos. Y, sobre todo, seis preguntas nuevas. Eso nos gusta: una buena pregunta puede acompañarnos mucho más que una respuesta apurada.',
        ],
      },
      {
        heading: 'Un cierre pequeño, pero poderoso',
        paragraphs: [
          'Elegí una palabra que quieras llevar al encuentro: claridad, valentía, calma, curiosidad, confianza... Escribila en una hoja y dejala en un lugar visible. Durante los próximos días, buscá una manera concreta de expresarla. No hace falta una gran ceremonia: a veces lo transformador empieza con una decisión diminuta.',
        ],
      },
      {
        heading: '¿Seguimos explorando juntos?',
        paragraphs: [
          'Este e-book es apenas una primera aproximación. En Atlas de los Mundos Interiores vamos a conectar planetas, signos y casas; descubrir otros significados de las runas; leer imágenes del Tarot y crear nuestro propio Pasaporte Celestial. Con tiempo para preguntar, practicar, conversar y compartir un rico refrigerio.',
        ],
      },
    ],
    exercise: {
      title: 'Tu Bitácora para el Encuentro',
      description: 'Completá esta síntesis para sellar tu pasaporte energético y llevarlo impreso o descargado.',
      fields: [
        { key: 'coreTheme', label: 'El tema que más me gustaría explorar en el encuentro', placeholder: 'Ej: Mi vocación según el Medio Cielo, aprender a usar las runas, entender mi Luna...', type: 'text' },
        { key: 'chosenWord', label: 'Mi palabra para llevar al encuentro (claridad, calma, valentía, etc.)', placeholder: 'Escribí tu palabra guía...', type: 'text' },
        { key: 'chosenWordAction', label: 'Una acción concreta durante estos días para expresarla', placeholder: 'Ej: Una caminata en silencio, animarme a hablar con alguien, descansar...', type: 'textarea' },
        { key: 'personalNotes', label: 'Preguntas o inquietudes para las facilitadoras', placeholder: '¿Qué te gustaría preguntarles a las facilitadoras de Rincón Zen y Camino Wayra?', type: 'textarea' },
      ],
    },
  },
];
