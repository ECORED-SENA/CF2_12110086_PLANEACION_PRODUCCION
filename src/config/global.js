export default {
  global: {
    componenteFormativo: 'Costos y presupuestos',
    descripcionCurso:
      'Este componente tratará el diseño del presupuesto general en las empresas. Comprender qué es lo que se va a producir, en qué período de tiempo y sus costos determinan el nivel de trazabilidad y control de los servicios o productos de manera eficiente con los parámetros de calidad exigidos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Costos generales de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos generales de los costos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Definición del costo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Definición del gasto',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Elementos del costo',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Clasificación de los costos de producción',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: '1.6. Cálculo de valor minuto en procesos de manufactura',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Presupuestos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Conceptos generales de los presupuestos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clases de presupuestos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Construcción de presupuestos',
            hash: 't_2_3',
          },
        ],
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
      tema: 'Construcción de presupuestos',
      referencia:
        'Shapiro, J. (2001). Elaboración de un presupuesto. Alianza Mundial para la Participación Ciudadana, Civicus, Universidad de Michigan. ',
      tipo: 'PDF',
      descarga: '/downloads/anexo1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Costo de producción',
      significado: 'desembolso empleado para producir.',
    },
    {
      termino: 'Costos directos',
      significado:
        'representan el valor de aquellos recursos que se pueden identificar y cuantificar para cada unidad de producción.',
    },
    {
      termino: 'Elementos del costo',
      significado:
        'materias primas e insumos, mano de obra y costos indirectos de fabricación.',
    },
    {
      termino: 'Gasto de producción',
      significado: 'desembolso empleado para administrar el proceso.',
    },
    {
      termino: 'Insumos',
      significado: 'elemento que sirve para armar o adornar el producto.',
    },
    {
      termino: 'Inventario',
      significado:
        'conteo que permite identificar plenamente las cantidades y valores (al costo) de todos los elementos de que dispone la empresa.',
    },
    {
      termino: 'Mano de obra directa',
      significado:
        'recurso humano que transforma la materia prima y agrega valor.',
    },
    {
      termino: 'Materias primas',
      significado: 'corresponden al material más representativo del producto.',
    },
    {
      termino: 'Orden de producción',
      significado:
        'documento de instrucción que permite establecer la dirección de un proceso.',
    },
    {
      termino: 'Precio de venta',
      significado:
        'resultado final de la sumatoria de costos más gastos e incluida la utilidad.',
    },
    {
      termino: 'Proceso productivo',
      significado:
        'conjunto de actividades que lleva a cabo una organización para generar productos o servicios.',
    },
    {
      termino: 'Rentabilidad',
      significado:
        'interés que genera el patrimonio que los socios tienen invertido en la empresa.',
    },
    {
      termino: 'Salario',
      significado:
        'remuneración que se cancela cuando existe un contrato laboral.',
    },
    {
      termino: 'Servicio',
      significado: 'bien intangible que se le presta a un cliente.',
    },
    {
      termino: 'Utilidad',
      significado:
        'porcentaje de lo que se espera ganar sobre los costos fijos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chase, R. B., Jacobs, F. R., y Aquilano, N. J. (2011). Administración de la producción y operaciones para una ventaja competitiva. McGraw-Hill.',
    },
    {
      referencia:
        'Delgado, J. (2001). Planificación y control de la producción. Fundación General Universidad Politécnica de Madrid.',
    },
    {
      referencia:
        'Ingenio Empresa. (2016). Plan agregado de producción con fuerza de trabajo constante. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=m0rv-ehb91A',
    },
    {
      referencia:
        'Ingenio Empresa. (2016). Plan agregado de producción con fuerza de trabajo mínima y subcontratación. [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=kAlKUKpysco ',
    },
    {
      referencia:
        'Shapiro, J. (2001). Elaboración de un presupuesto. Alianza Mundial para la Participación Ciudadana, Civicus. Universidad de Michigan.',
      link:
        'https://www.academia.edu/38755199/Elaboraci%C3%B3n_de_un_presupuesto_DESCRIPCI%C3%93N_GENERAL_Resumen',
    },
    {
      referencia:
        'Westwood, J. (1991). Planeación de mercados. Análisis, evaluación y estrategias de serie empresarial. Legis.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo de desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Manuel Isaza Córdoba',
        cargo: 'Experto temático',
        centro: 'Centro del Diseño y la Metrología - Regional Distrito capital',
      },
      {
        nombre: 'Luz Aída Quintero Velásquez',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro del Diseño y la Metrología - Regional Distrito capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrección de estilo',
        centro: 'Centro del Diseño y la Metrología - Regional Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Anllelo Andrés Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios  - Regional Tolima',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Mary Jeans Palacio Camacho',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
