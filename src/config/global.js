export default {
  global: {
    componenteFormativo:
      'Verificación de requisitos de instalaciones eléctricas',
    descripcionCurso:
      'El cumplimiento de los requisitos de RETIE y RETILAP se garantiza mediante la “Declaración de cumplimiento” para todas las instalaciones y el “Dictamen de inspección” para algunas instalaciones que reúnan las características previstas en cada reglamento. Estos procedimientos de acreditación permiten identificar las condiciones de desempeño de un sistema eléctrico de uso final, necesario al implementar un sistema de gestión de energía.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Verificación de conformidad RETIE',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Certificados de producto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Componentes del dictamen de inspección',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Verificación de conformidad RETILAP',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Certificados de producto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Componentes del dictamen de inspección',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Verificación de conformidad SPT',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_06_821207.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1 Certificación de productos',
      referencia:
        'Organismo Nacional de Acreditación de Colombia - ONAC (2021). Directorio Oficial de Acreditados. ',
      tipo: 'Directorio Oficial de Acreditados',
      link: 'https://onac.org.co/directorio-de-acreditados/',
    },
    {
      tema: '1.2 Componentes del dictamen de inspección',
      referencia:
        'Resolución 90708 de 2013 y anexos. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento técnico de instalaciones eléctricas - RETIE, que fija las condiciones técnicas que garanticen la seguridad en los procesos de generación, transmisión, transformación, distribución y utilización de la energía eléctrica en la República de Colombia y se dictan otras disposiciones. Agosto 30 de 2013. ',
      tipo: 'Resolución reglamento técnico de instalaciones eléctricas RETIE.',
      link:
        'https://www.minenergia.gov.co/documents/3822/22726-Resolucion_9_0708_de_agosto_30_de_2013_expedicion_RETIE_2013.pdf',
    },
    {
      tema: '2. Verificación de conformidad RETILAP',
      referencia:
        'Resolución 181331 de 2009 y anexo. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el reglamento técnico de iluminación y alumbrado público RETILAP y se dictan otras disposiciones. Agosto 6 de 2009. ',
      tipo:
        'Resolución Reglamento técnico de iluminación y alumbrado público RETILAP ',
      link:
        'https://www.mincit.gov.co/temas-interes/reglamentos-tecnicos/ministerio-de-minas-y-energia/resolucion-n-18-1331-del-6-de-agosto-de-2009.aspx',
    },
    {
      tema: '3. Verificación de conformidad SPT',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (1998). Norma Técnica Colombiana NTC 2050 Código Eléctrico Colombiano. ICONTEC.',
      tipo: 'Norma Técnica Colombiana Código Eléctrico Colombiano',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '<em>NACE</em>',
      significado:
        '<i>Statistical classification of economic activities in the European Community </i>(Nomenclatura estadística de actividades económicas de la Comunidad Europea).',
    },
    {
      termino: '<em>ONAC</em>',
      significado:
        '<span>Organismo Nacional de Acreditación de Colombia.</span>',
    },
    {
      termino: '<em>RETIE</em>',
      significado:
        '<span>Reglamento Técnico de Instalaciones Eléctricas.</span>',
    },
    {
      termino: '<em>RETILAP</em>',
      significado:
        '<span>Reglamento Técnico de Iluminación y Alumbrado Público.</span>',
    },
    {
      termino: '<em>SPT</em>',
      significado: '<span>Sistema de Puesta a Tierra.</span>',
    },
    {
      termino: 'TELURÓMETRO',
      significado:
        'Equipo de medida usado para medir resistencias de puesta a tierra y resistividad de los terrenos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación. (1998). Norma Técnica Colombiana NTC 2050 Código Eléctrico Colombiano. ICONTEC.',
      link: '',
    },
    {
      referencia:
        'Resolución Número 90708 de 2013 y anexos. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento técnico de instalaciones eléctricas - RETIE, que fija las condiciones técnicas que garanticen la seguridad en los procesos de generación, transmisión, transformación, distribución y utilización de la energía eléctrica en la República de Colombia y se dictan otras disposiciones. Agosto 30 de 2013.',
      link: '',
    },
    {
      referencia:
        'Resolución Número 181331 de 2009 y anexo. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento técnico de iluminación y alumbrado público RETILAP y se dictan otras disposiciones. agosto 6 de 2009.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Marlon Augusto Villamizar Morales ',
          cargo: 'Experto Técnico ',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Linda Díaz Rivera ',
          cargo: 'Consultora ',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Carolina Arias ',
          cargo: 'Diseñador Instruccional ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Carolina Coca Salazar ',
          cargo: 'Revisora Metodológica y Pedagógica ',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes ',
          cargo: 'Responsable Equipo Desarrollo Curricular ',
          centro:
            'Regional Distrito Capital - Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto ',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López ',
          cargo: 'Revisora Metodológica y Pedagógica ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
