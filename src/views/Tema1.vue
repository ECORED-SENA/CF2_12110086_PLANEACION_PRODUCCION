<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 1
      h1 Costos generales de producción
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img1.png').m-auto
      .col-lg-7
        p Para los sectores productivos hablar de costos de la producción hacen referencia a la columna vertebral de la infraestructura operacional; es decir, al valor monetario de sus recursos esenciales: el factor humano, materiales y recursos auxiliares, mantenimiento de la maquinaria, infraestructuras tecnológicas y digitales que proveen de servicios o productos de óptima calidad a la demanda del mercado.
         p.p-3.bg3 De la infraestructura operacional depende que los administrativos proyecten el futuro económico que tanto les preocupa, lo que implica obtener máxima eficiencia del equipo operativo y utilizar sus conocimientos; puesto que proveer al mercado de altos parámetros de calidad inmersos en sus productos evidencia un componente de competitividad que la empresa sostiene en el tiempo. 
         p Igualmente, proveer al mercado de productos de bajo costo que colmen las expectativas de un consumidor final aumenta la demanda, la sostenibilidad y el crecimiento económico, así como el incremento del empleo para una región golpeada por la actual situación de salud y bajas económicas.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Conceptos generales de los costos
    p.mb-5 Antes de plantear los distintos escenarios que se presentan en toda la logística de la planificación y trazabilidad porcentual del proceso de manufactura y servicio y trabajar el contexto que lleva a instaurar un completo sistema de costos, se debe tener en cuenta el establecimiento de indicadores potenciales de los costos que muestran caminos de trazabilidad en los procesos logísticos de producción o servicios. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-up-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img2.png')})`}"
          )        
          .bloque-texto-g__texto.py-5.px-4
            p.mb-0  Es relevante conocer la importancia en la logística de toma de decisiones, que se refiere a los sistemas evolutivos de la infraestructura de costos y de la cadena de valor que generan. La importancia de exponer números matemáticos que utilizan los directivos empresariales para administrar los históricos financieros y de factibilidad económica, se vuelven más relevantes que el desempeño durante un periodo de trabajo. Planear los costos puede marcar la diferencia para la sostenibilidad económica. 
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-7
        p Para el personal responsable de esta área, aplicar su conocimiento a situaciones reales que se presenten en la empresa e ingeniar estrategias para solucionar necesidades prioritarias mediante la construcción de informes documentados con datos de primera mano, lo convierte en ficha clave para la resolución de eventos que puedan darle bastante variabilidad al proceso; todo esto, con base en lograr como resultado final adecuadas estructuras de bajos costos que se requieren para cumplir con las expectativas del cliente.
         p.p-3.bg5 La capacidad de diseñar sistemas de costeo está en manos del personal que utiliza la información documentada para cumplir con metas propuestas por la gerencia operacional de la compañía, al realizar estudios prácticos sobre el valor económico de los recursos. El aprovechamiento de esta información quedará disponible para comprender el uso mismo de la contabilidad de costos y proporcionar datos relevantes para eliminar variaciones en el costo económico de proceso. 
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img1.png').m-auto(data-aos="fade-right")
    p.mb-5 Para recopilar información clave sobre los sistemas de costeo es necesario: 
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img4.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Utilizar eficazmente software especializado para la elaboración de plan de costeo de la producción.
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img5.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Implementar estrategias relacionadas con el análisis sistémico del control efectivo de los costos de manufactura y servicio. 
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img6.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            pmb-0 Conceptualizar sobre el valor agregado y la confianza que genera a las estructuras fabriles y de servicio, el construir sistemas estratégicos de precio de venta del producto.
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img7.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Analizar las diferencias que existen entre la contabilidad de costos, la contabilidad administrativa y la contabilidad financiera.
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img8.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Distinguir la diferencia entre planeación de costos y control de costos.
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Diferenciar los conceptos de costos y gastos. 
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img9.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Establecer la utilidad de la clasificación de costos generales de producción. 
      .tarjeta-avatar
        img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Conceptualizar los diferentes sistemas de costeo, histórico, estándar y costeo normal.
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Definición del costo 
    p.mb-5 Según Arredondo (2010), el costo directo se cataloga como la inversión con la que se obtienen productos o prestación de servicios y el resultado final es dejarle al inversionista utilidades o márgenes de contribución. 
    p.mb-5 El costo, entonces, se puede definir de la siguiente manera:
    .row.mb-5
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img11.png').m-auto
      .col-lg-7
        p Los costos desarrollan un rol bastante relevante en el compromiso de los líderes gerenciales para tomar decisiones; las infraestructuras gerenciales se miden y lo trabajan bajo reserva, para el caso, crean indicadores de gestión para realizar la trazabilidad, y siempre están conscientes de las decisiones más convenientes desde una perspectiva financiera, para cuidar el buen nombre de la compañía y conservar un cliente potencial.
         p.p-3.bg6 En conclusión, el COSTO, es gastar financieramente un dinero en aprovisionar unos recursos sostenibles, con el propósito de invertir eventualmente en acciones encadenadas fuertemente a la manufactura o en brindarle al cliente un servicio de calidad.
    p Es sumamente importante determinar que el resultado final del precio de venta de un servicio está configurado por:
    .row.justify-content-center.align-items-center.mb-4
      .col-md-7.col-12.bg5.p-4(data-aos="fade-right")
        ul.lista-ul
          li 
            i.fas.fa-cog(style="color:#F14141")
            | La cantidad de dinero que se cobra por el servicio base.
          li 
            i.fas.fa-cog(style="color:#F14141")
            | Todos los componentes necesarios requeridos para completar el requerimiento.
          li 
            i.fas.fa-cog(style="color:#F14141")
            | La mano de obra o en su defecto, el conocimiento técnico que este aporta.
          li 
            i.fas.fa-cog(style="color:#F14141")
            | Elementos administrativos y operativos suplementarios empleados en completar los requerimientos del cliente.   
      .col-md-5.col-12.px-0
        figure
          img(src='@/assets/curso/tema1/img12.png')(data-aos="fade-left")
    p.mb-5 Dentro de los costos de producción también se incluyen los costos de productos no conformes, que tienen relación directa con la calidad del bien o servicio y se determinan según la siguiente fórmula:
    .row.mb-2.align-items-center
      .col-lg-4.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Coste de productos no conformes 
    .row.mb-5
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-5.justify-content-center
      .col-12.bg6.p-4
        .row.align-items-center.justify-content-center
          .col-lg-1.mb-3
            figure
              img.img-t(src='@/assets/curso/tema1/img12.svg').mx-auto(data-aos="fade-right").mx-auto
          .col-lg-11
            p.mb-0 En tiempos presentes, las empresas que brindan servicios tienen representatividad y estabilizan sus negocios en sectores productivos que dominan; relevancia dirigida a reinventar y flexibilizar sus negocios empleando energías renovables, productos de manufactura y servicios sostenibles de mejor calidad con tiempos mínimos de respuesta. 
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Definición del gasto
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-7
        p El gasto se relaciona como un costo que nos representa invertir en lo administrativo del proceso, lo requerimos, pero no aporta ningún valor relacionado con el producto o la prestación del servicio: tanto costos como gastos se recuperan cuando el producto o el servicio se vendan. 
        p Los conglomerados empresariales establecen infraestructuras de gastos aun cuando saben que ocasionalmente les genera un valor agregado; se diseñan controles especiales siempre con el pensamiento puesto en el control estricto, relacionarlos al margen del proceso logístico de manufactura arroja que no son generadores de valor, no son participes de forma directa en los productos. 
        p.p-3.bg5 En conclusión, el GASTO es la inversión en administrar una logística de producción o de brindar un servicio aplicando conceptos futuristas y de bajo costo. 
        p.mb-5 Es relevante para las compañías determinar y controlar los pagos realizados para establecer con precisión qué es un costo y de ellos qué es un gasto, de manera que se conozca su valor y se tracen históricos para determinar su trazabilidad en la distribución del precio de venta del servicio o la manufactura.
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img13.svg').m-auto(data-aos="fade-right")
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img14.svg').m-auto
      .col-lg-7
        p La prestación del servicio o la manufactura del producto, tienen la posibilidad de salir a un mercado con desventajas con respecto a la competencia en punto de equilibrio y al empresario le conviene establecer los extremos, o por debajo o alejado de los techos, eventos importantes para que un cliente los acepte.
        p.p-3.bg6 Las mercancías distribuidas y los servicios prestados no incluyen dentro de su infraestructura de precios la diferenciación, simplemente al ser entregados al cliente, estos se ajustan o no a los presupuestos que fueron negociados. 
    p.mb-5 Se debe diferenciar un costo de un gasto así:
    .row.mb-2.align-items-center
      .col-lg-4.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Diferencia entre costo y gasto
    .row.bg13.justify-content-center.align-items-center.p-5
      .col-md-9.col-12
        p.p-3.bg12 El costo se muestra siempre en relación con el desembolso de un capital para afrontar un proceso logístico de manufactura o brindar un intangible, en su defecto el ítem del gasto se muestra por el desembolso de capital para administrar tareas de acompañamiento administrativo y de poner en venta lo que sea el resultado. 
      .col-md-3.col-12.p-3
        figure
          img(src='@/assets/curso/tema1/img16.svg')
      .col-md-12
        hr(style="border-color: #F14141 !important;")
      .col-md-3.col-12.p-3
        figure
          img(src='@/assets/curso/tema1/img18.svg')
      .col-md-9.col-12
        p.p-3.bg12 Un gasto administra un proceso de prestación de servicio o manufactura de un producto, por esta causa su control debe ser estricto. El costo, aunque su control es fijo, depende del mercado de proveedores. 
      .row.justify-content-center.align-items-center
        .col-md-12
          hr(style="border-color: #F14141 !important;")
        .row.bg2.justify-content-center.align-items-center
          .col-md-9
            p El costo forma parte integral del resultado obtenido, terminado o intangible,y es factible observarlo; en su defecto, el gasto es imperceptible, por lo tanto, supuestamente no es relevante para integrar el precio de venta de ambos.
          .col-md-2.col-12.p-3
            figure
              img(src='@/assets/curso/tema1/img17.svg')
        .col-md-12
          hr(style="border-color: #F14141 !important;")
    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Elementos del costo
    p Los costos generales de la producción, como se mencionó antes, se definen como una transformación directa de un capital que un emprendedor natural o una corporación, efectúa con el objetivo de realizar montajes de infraestructuras operacionales digitales y laborales, para la ofrecer un bien intangible o desarrollar un proceso de manufactura fabril, mercadear bienes y/o brindar servicios digitales y/o logísticos.
    p.mb-5 Con relación a los costos tener presente que:
    .bg10             
      .row.align-items-center.mb-5
        .col-lg-8(data-aos="fade-right")
          ul.lista-ul
            li 
              i.fas.fa-cog(style="color:#F14141")
              
              p.mb-0 Los costos más cómodos de obtener y monetizar en una planta de manufactura son los costos directos, que tocan los valores de Materiales Directos (MD) y al Recurso Humano Directo (RHD).
            li 
              i.fas.fa-cog(style="color:#F14141")
              
              p.mb-0 Con facilidad el precio de venta se obtiene del valor de las materias primas directas, en una corporación industrial, se puede calcular empleando la ecuación del producto, la cual hace referencia a las cantidades exactas que se necesitan para obtenerlo en un concluyente número de unidades, con base en los atributos y parámetros de calidad expuestos por el cliente.
            li 
              i.fas.fa-cog(style="color:#F14141")
              |
              p.mb-0 Muchas entidades de producción deben tener en cuenta siempre como regla de oro, que las materias primas sean sometidas a sistemas de medidas con exactitud y se dispongan para aprovisionar los procesos logísticos y nunca detengan el engranaje de construcción. El equipo de líderes de proceso podrá afirmar que son materiales e insumos directos de alta relevancia, mientras que aquellas materias primas cuya medida no pueda realizarse exactamente, se podrán considerar como otros costos de fabricación indirectos que no detienen el proceso productivo y se pueden reemplazar fácilmente.
        .col-lg-4
          figure
            img.mb-5(src='@/assets/curso/tema1/img20.png')(data-aos="fade-left")
    p.mb-5 En los procesos logísticos de manufactura, cuando empleamos materias primas e insumos para transformarlos en un bien tangible o aun cuando prestamos un servicio, determinamos que en estas logísticas de transformación se consume un número significativo de dinero y concentramos la atención en tres elementos, definidos como #[span.txt-color2 elementos del costo]; estos son:
    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/tema1/img21.png', alt='Texto que describa la imagen')
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Materiales directos e insumos")      
            .col-md-12.mb-4.mb-md-0.ps-5 
              p Se definen como todos aquellos componentes inmersos en el producto. En los sistemas estructurales de costos, el término valor "directo" se refiere al componente que interviene con la transformación en el proceso logístico de productos, o es parte activa del servicio; estos insumos y materiales directos por lo que su clasificación es de costos, son de estricto control en las empresas porque afectan las utilidades de los empresarios. 
              p Por componentes jerárquicos de índole productiva y estrategias administrativas, ciertos costos de materiales directos y de mano de obra directa que tienen importancia secundaria, se tratan como Gastos Indirectos de Fabricación o GIF; en tales situaciones, técnicamente esta porción de los GIF es directa con relación al producto o al servicio.
          .row(titulo="Recurso humano directo o mano de obra")
            .col-md-12.mb-4.mb-md-0.ps-5 
                p Se denomina como todo aquel proceso logístico de manufactura que prepara la prenda de vestir para otras áreas, adorna una prenda o le da presentación.
          .row(titulo="Gastos indirectos o elementos de desembolso administrativo")
            .col-md-12.mb-4.mb-md-0.ps-5 
              p Empleados en la logística administrativa de la producción, en la literatura contable del costo, GIF o CIF (gastos o costos indirectos de producción), los definimos como aquellos elementos que son invertidos en administrar los procesos productivos logísticos de bienes y servicios. 
    p.mb-5 Algunos ejemplos de elementos del costo son: 
    .row.mb-2.justify-content-center
      .col-lg-4.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Elementos del costo de producción
    .bg7
      .row.justify-content-center(data-aos="fade-right")
        .col-lg-12
          ImagenInfografica.color-acento-contenido.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img23.svg', alt='Texto que describa la imagen')(data-aos="fade-right")
            .tarjeta.color-cuarto.p-3(x="20.5%" y="25.6%" numero="+")
              h4 Recurso humano directo
              p.mb-0 O mano de obra directa; según en el ejemplo de prendas de vestir, se puede decir que hay un proceso de trozar la tela que se denomina corte, este prepara piezas para ser ensambladas en otro proceso de mano de obra que se llama confección o ensamble y continúan otros procesos alternos como calidad, terminación y empaque que determinan otro elemento del costo.
            .tarjeta.color-cuarto.p-3(x="91.9%" y="53.6%" numero="+")
              h4 Gastos indirectos
              p.mb-0 O elementos de desembolso administrativo, como, por ejemplo, la nómina gerencial y sus obligaciones laborales, pólizas de seguro, obligaciones bancarias, pago de impuestos, seguridad y vigilancia, honorarios contables, transportes logísticos, pago de energía, gas, internet, acueducto y alcantarillado, entre otros.
            .tarjeta.color-cuarto.p-3(x="82.5%" y="85.8%" numero="+")
              h4 Materiales directos
              p.mb-0 O materia prima, como por ejemplo la tela como componente principal de una prenda de vestir; los botones, hilos y cierres entre otros, se catalogan como insumos y se incluyen de igual forma como materiales en el bien, que se detallan como elementos que adornan o ensamblan la prenda. 
    p.mb-5 Al registrarse los Gastos Indirectos de Fabricación (GIF) en un sistema estructurado de costos de producción y servicios, se dan dos eventos:
    .row.align-items-center.mb-5
        .col-lg-7(data-aos="fade-right")
          ul.lista-ul
            li 
              i.fas.fa-cog(style="color:#F14141")
              p.mb-0 Buena parte del conglomerado de los GIF se consideran de carácter fijo, como por ejemplo las nóminas administrativas, las obligaciones laborales administrativas, los impuestos, el pago de servicios públicos, los salarios de los supervisores y sus obligaciones laborales, depreciación de activos fijos, entre otros. 
            li 
              i.fas.fa-cog(style="color:#F14141")
              p.mb-0 Cuando otra parte de los GIF de carácter administrativo se camuflan dentro de las diferentes áreas, son llamados gastos fantasmas, estos se vuelven difíciles de detectar y encarecen productos y servicios; algunos ejemplos de ellos son los gastos de representación, gastos de publicidad, eventos, viajes injustificados, entre otros.
            p.p-3.bg6 El paralelo que se establece entre lo indirecto y lo directo en productos y servicios es lo que determina el precio de venta, aspecto más relevante para propósitos de oferta y demanda en el mercado competitivo de mercados de productos y bienes de servicio. 
        .col-lg-5
          figure
            img.mb-5(src='@/assets/curso/tema1/img24.png')(data-aos="fade-left")
    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img.mb-5(src='@/assets/curso/tema1/img25.png')(data-aos="fade-left")
      .col-lg-7(data-aos="fade-right")
        p El gasto indirecto de fabricación es, en esencia, el más complicado ítem de la fórmula del costo, pese a que contiene todos los elementos necesarios para administrar la logística interna; sin embargo, se desmarca porque:
        ul.lista-ul
          li 
            i.fas.fa-cog(style="color:#F14141")
            p.mb-0 Posee el conocimiento para responder administrativamente por el proceso, por esto es justificable. 
          li 
            i.fas.fa-cog(style="color:#F14141")
            p.mb-0 Crea la trazabilidad y el control del proceso logístico interno, mano derecha de la gerencia.
          li 
            i.fas.fa-cog(style="color:#F14141")
            p.mb-0 Integra todos los elementos relevantes para entregar en óptimas condiciones de calidad y bajo costo, el producto o servicio.
          p.p-3.bg5 En conclusión, es de alta relevancia establecer que el objetivo de clasificar de forma detallada los costos, es la forma de elaborar una estructura estandarizada y establecer los límites que faciliten a las áreas de producción y logística de servicios, asignar sin equivocación, valores precisos para calcular el precio de venta de bienes y servicios.
    p.mb-5 Estandarizar el precio de venta de un servicio constituye toda una logística intangible que puede atribuirse al comportamiento que el recurso humano tiene al realizar la actividad. Los desembolsos para el desempeño del área de ingeniería industrial, áreas de mantenimiento y sección de compras, suelen ser difíciles de determinar, puesto que el oficio de estas secciones de servicios es la de proveer asistencia a las demás áreas logísticas; los costos de estas secciones de servicios deben ponderarse y cargarse a la estructura jerárquica de la empresa, empleando bases y soportes técnicos, utilizando software especializados. Los siguientes son los aspectos que hacen parte de los elementos del costo.
    .row.mb-2.align-items-center
      .col-lg-7.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Costos generales de manufactura, costos fijos y costos variables
    p.mb-5 En infraestructuras de manufactura y servicio se estructura un catálogo de costos en concordancia a los procedimientos directamente relacionados con acciones logísticas de manufactura y al tiempo de respuesta para estimar las fechas de entrega del producto o servicio. Estos costos se estructuran según sean:
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-4.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton1.bg8.text-black.p-4.mb-5.mb-lg-0
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema1/img26.png', alt='Texto que describa la imagen')
            .col-12.bg9.p-4
              h4.text-center Costos variables
              p.pb-3 Todos los valores monetarios y desembolsos donde la cantidad varía para ejecutar la acción.
      .col-sm-4.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton1.bg8.text-black.p-4
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema1/img27.png', alt='Texto que describa la imagen')
            .col-12.bg11.p-4
              h4.text-center Costos fijos
              p Desembolsos o valores económicos que en su valor monetario no cambia en concordancia a la acción de logística de manufactura. Estos permanecen un buen periodo de tiempo y su comportamiento histórico es muy constante.
    p.mb-5 En estructuras de contabilidad de costos se conocen tres esquemas:
    .row.mb-2.align-items-center
      .col-lg-5.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Estructuras de contabilidad de costos
    .row.bg13.justify-content-center.align-items-center.p-5.mb-5
      .col-md-4.col-12.pe-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img28.svg')
      .col-md-8.col-12.px-0
        h3 Estructura de los costos fijos comprometidos
        p.p-3.bg12 Se registra como todo aquel desembolso que se perfila para soportar y maniobrar con los activos fijos, entre otros, aire acondicionado, iluminación, energía, agua, servicios de comunicación e internet. 
      .col-md-12
        hr(style="border-color: #F14141 !important;")
      .col-md-8.col-12.pe-1.mb-3.mb-lg-0
        h4 Estructura de los costos fijos de operación
        p.p-3.bg12 Se registra como todo aquel ítem donde los valores y desembolsos de los proyectos específicos aprobados por la gerencia en el plan de maestro de la producción son de extrema prioridad,  algunos son los sistemas estructurales de gestión de la calidad, cambio a energías renovables, plan de inversión en recuperación de desperdicios de materias primas e insumos, entre otros.
      .col-md-4.col-12.px-0
        figure
          img(src='@/assets/curso/tema1/img29.svg')
      .row.justify-content-center.align-items-center
        .col-md-12
          hr(style="border-color: #F14141 !important;")
        .row
          .col-md-6.col-lg.tarjeta--tabla.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/img30.svg' alt='AvatarTop')
            p.py-3.text-center Diferenciar los costos fijos versus los variables, serán políticas y estrategias que coordina la gerencia con relación al entorno de las operaciones de la compañía. 
          .col-md-6.col-lg.tarjeta--tabla.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/img31.svg' alt='AvatarTop')
            p.text-center Universalmente, los costos fijos son indirectos con relación al producto; en un contexto gerencial logran ser directos con respecto al área o a la sección. 
          .col-md-6.col-lg.tarjeta--tabla.p-4
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/img32.svg' alt='AvatarTop')
            p.text-center En su defecto, los costos variables logran convertirse en directos con relación al producto, al área y a la sección productiva.
        .col-md-12.mb-0
          hr(style="border-color: #F14141 !important;")
    .row.mb-2.align-items-center
      .col-lg-7.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Relevancia de clasificar Gastos Indirectos de Fabricación (GIF)
    p.mb-5 Establecer una base de datos de costos según la dependencia que posee el hilo de conducción y control principal sobre su ejecución, es útil para las estrategias administrativas en las operaciones. Además, estructurar de acuerdo con el objeto del gasto puede ser versátil para analizar el costo de producción de un producto en sus distintos elementos.
    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-up-left")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img33.png')})`}"
          )        
          .bloque-texto-g__texto.py-5.px-4
            p.mb-4  La categorización en costos fijos y variables es ventajosa en la elaboración del plan maestro de la producción y de hipótesis estructuradas para acciones futuras. <br><br>
            p Los costos clasificados como directos o indirectos con relación al bien o al área, son lucrativas para determinar las ganancias de las líneas de producto o la contribución de un departamento a la rentabilidad de la empresa.
    p.mb-5 Para intenciones de costeo de los servicios y construir productos, se deben tener en cuenta:
    .row.justify-content-center(data-aos="fade-left").mb-5
      .col-lg-6.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img34.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p.mt-4 Todos los costos generados en la empresa se determinan casualmente a las dependencias que corresponda el bien o servicio. 
      .col-lg-6.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img35.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p.mt-4 Los costos que pueden atribuirse directamente al departamento, se asignan directamente. 
      .col-lg-6.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img36.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p.mt-4 La provisión y categorización de los costos por dependencias recibe el nombre comúnmente de colocación o concesión de costos.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img37.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Los costos indirectos de manufactura y los costos de las áreas de servicios se determinan sobre estructuras a las dependencias de ensamble y se fijan en iguales circunstancias a manufactura, a medida que esta pasa por los centros de costos.
      

    

           
      
    p En resumen, elaborar una secuencia operacional permite visualizar e identificar los eventos relevantes o actividades que van a intervenir en un proceso, calculando tiempos, máquinas e información, para de esa manera poder mejorar una situación actual.
    p A continuación, veremos un ejemplo de una secuencia operacional, donde está el listado de las operaciones en un orden lógico, con las máquinas donde se ejecuta la operación, y el tiempo estándar que se demora cada una. Adicional se anotan observaciones pertinentes y que apunten a mejorar la productividad, y los nombres de las personas que hacen o harán la operación.

    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Ejemplo]. Listado de Operaciones
    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
      table
        thead(style="background-color: #F14141")
          tr 
            th(colspan="4").text-center.text-white LISTADO OPERACIONES
        tbody     
          tr(style="background-color: #FABCBC")
            th(colspan="4")
             td(colspan="3").text-center #[b Referencia: 561007]
             td(colspan="3").text-center #[b Orden de producción: 561007]
             td(colspan="3").text-center #[b Fecha: 7/72021]
          tr(style="background-color: #FDE2E2")
            td.text-center #[b SEC]
            td.mb-4.text-center.mb-0 DESCRIPCIÓN DE LA OPERACIÓN
            td.mb-4.text-center.mb-0 MÁQUINA
            td.mb-4.text-center.mb-0 SAM
          tr
            td.text-center 1
            td.text-center.mb-0 Fijar marquilla
            td.mb-4.text-center.mb-0 Plana1
            td.mb-4.text-center.mb-0 0,308  
          tr(style="background-color: #F6F6F6")
            td.text-center 2
            td.mb-4.text-center.mb-0 Unir hombro derecho
            td.mb-4.text-center.mb-0 Filesc
            td.mb-4.text-center.mb-0 0,394
          tr
            td.text-center 3
            td.mb-4.text-center.mb-0 Sesgar cuello redondo
            td.mb-4.text-center.mb-0 Recub1
            td.mb-4.text-center.mb-0 0,972
          tr(style="background-color: #F6F6F6")
            td.text-center 4
            td.mb-4.text-center.mb-0 Unir hombro izquierdo casando sesgo
            td.mb-4.text-center.mb-0 Filesc
            td.mb-4.text-center.mb-0 0,422
          tr
            td.text-center 5
            td.mb-4.text-center.mb-0 Sesgar sisas x2
            td.mb-4.text-center.mb-0 Recub1
            td.mb-4.text-center.mb-0 1,448
          tr(style="background-color: #F6F6F6")
            td.text-center 7
            td.mb-4.text-center.mb-0 Presilla x1 cuello
            td.mb-4.text-center.mb-0 Presil
            td.mb-4.text-center.mb-0 0,216
          tr
            td.text-center 8
            td.mb-4.text-center.mb-0 Presilla sisas x2
            td.mb-4.text-center.mb-0 Presil
            td.mb-4.text-center.mb-0 0,610
          tr(style="background-color: #F6F6F6")
            td.text-center 9
            td.mb-4.text-center.mb-0 Doblar ruedo bajo
            td.mb-4.text-center.mb-0 Recub2
            td.mb-4.text-center.mb-0 1,240
          tr
            td.text-center 10
            td.mb-4.text-center.mb-0 Pulir y revisar esqueleto
            td.mb-4.text-center.mb-0 Manual
            td.mb-4.text-center.mb-0 1,276
          tr(style="background-color: #F6F6F6")
            td.text-center 11
            td.mb-4.text-center.mb-0 Pegar <em>sticker</em> en etiqueta y bolsa
            td.mb-4.text-center.mb-0 Manual
            td.mb-4.text-center.mb-0 0,138
          tr
            td.text-center 12
            td.mb-4.text-center.mb-0 Etiquetar x2
            td.mb-4.text-center.mb-0 Manual
            td.mb-4.text-center.mb-0 0,144
          tr(style="background-color: #F6F6F6")
            td.text-center 13
            td.mb-4.text-center.mb-0 Doblar, empacar y encintar bolsa duo camisetas
            td.mb-4.text-center.mb-0 Manual
            td.mb-4.text-center.mb-0 0,412
          tr
            td(colspan="3").text-center #[b TOTAL]
            td.mb-4.text-center.mb-0 8,972
    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4	Capacidad productiva y cargas de trabajo
    p La estrategia en la planeación de la capacidad productiva y las cargas de trabajo, es determinar qué tan preciso puede ser el equilibrio de los tres principales recursos de un proceso productivo, las personas, las máquinas y las materias primas. 
    .row.justify-content-center(data-aos="fade-left").mb-5
      .col-lg-6.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img44.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p.mt-5 La organización de los tiempos en cuanto a las distintas actividades del proceso de producción es crucial para cumplir los objetivos propuestos.
      .col-lg-6.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema1/img45.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              p Por lo tanto, hacer un adecuado balanceo de líneas de producción, es la mejor técnica empleada en la asignación de cargas de trabajo y diseñar y aplicar la matriz de polifuncionalidad, lo que direcciona a los administrativos al descubrimiento de fortalezas y debilidades de los equipos de colaboradores. 
    p.mb-5 En la situación actual de pequeños medianos y grandes empresarios, es necesarios desarrollar habilidades básicas dirigidas primordialmente a aportar al recurso humano poco calificado, en cómo mejorar los procesos logísticos de producción y servicios, siempre proyectando unos resultados finales óptimos en cuanto a costos y que satisfagan las necesidades de un cliente en términos de calidad. 
    .row.mb-2.align-items-center
      .col-lg-3.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Capacidad productiva
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img46.png').m-auto
      .col-lg-6.mb-5
        p.mb-5 #[b Se deben crear necesidades como]:
        ul.lista-ul
            li 
              i.fas.fa-cog(style="color:#F14141")
              | El cálculo de la capacidad productiva. 
            li 
              i.fas.fa-cog(style="color:#F14141")
              | Estimar las cargas de trabajo y lo que son capaces de producir. 
            li 
              i.fas.fa-cog(style="color:#F14141")
              | Realizar trazabilidad en tiempo presente a sus procesos.
            li 
              i.fas.fa-cog(style="color:#F14141").mb-4
              | Concentrarse en elaborar unos completos listados operacionales.
        p.mb-4.p-3.bg15.shadow  Que permitan una ilustración directa a los entes gerenciales, del manejo de los costos y un máximo aprovechamiento de los recursos.
        p Planificar ordenada y permanentemente la capacidad productiva y las cargas de trabajo sin importar el tamaño de los lotes o el servicio a prestar, ayuda al empresario a desarrollar habilidades para establecer la realidad de su negocio, y se convierte en un instrumento técnico empleado para responder con puntualidad a los clientes sobre las fechas de entrega de sus productos o servicios.
    .row.mb-2.align-items-center
      .col-lg-5.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Capacidad instalada operativa. Horas hombre
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-7
        p Se refiere al número de minutos que utiliza el personal de mano de obra directa durante una jornada o periodo de trabajo, al realizar una actividad, utilizar cien por ciento la maquinaria disponible durante el ciclo laboral y calcular matemáticamente los minutos empleados para un servicio o una orden de producción específica; todo esto, con base en la aplicación estricta de los parámetros de calidad que se requieren para ensamblar una unidad de producción o precisamente la prestación del servicio.
        p #[b Horas hombre]
        p Para las corporaciones de manufactura y servicios hablar de capacidad instalada se refiere a volver tiempo, el componente vital del proceso productivo que es el factor humano. 
        p.p-3.bg11 #[b Factor humano] <br> Técnicamente llamado minutos u horas hombre, que en operatividad de la infraestructura en maquinaria, tecnología digital y materias primas agrega valor y provee servicios o productos de óptima calidad. 
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img47.png').m-auto
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img48.png').m-auto
      .col-lg-7
        p Los resultados obtenidos en cálculo de tiempo de las “horas hombre” se convierten en los elementos para determinar la trazabilidad porcentual de la carga instalada en unidad de tiempo y la asignación precisa de tareas a la infraestructura productiva.
        p De estos factores dependen que los administrativos, proyecten el futuro económico que tanto les preocupa, con estrategias gerenciales y el importante conocimiento que poseen los colaboradores del proceso logístico. 
        p.p-3.bg11 #[b Altos parámetros de calidad] <br> El resultado final es abastecer al mercado con productos y servicios que tengan altos parámetros de calidad, lo que significa una ventaja competitiva que las empresas sostienen en el tiempo. 
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-7
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          p.mb-3 Proveer al mercado de productos que colmen las expectativas de un consumidor final aumenta la demanda, la sostenibilidad y el crecimiento económico, así como el incremento del empleo para una región golpeada por la actual situación de salud y bajas económicas.
          span  #[b (Valverde Chifla, 2014)].
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img49.png').m-auto
    .row.mb-2.align-items-center
      .col-lg-8.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Cálculo matemático para la Carga instalada o minutos de producción.
    p.mb-4 Para realizar su cálculo se emplean las siguientes #[span.txt-color2 variables]:
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-4.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton1.bg8.text-white.p-4.alt
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema1/img50.png', alt='Texto que describa la imagen')
          h4.text-center Número de personas de Mano de Obra Directa.
          p.pb-3 Se define como el recurso humano directo que interviene en el proceso productivo, es decir, los personas que transforman la materia prima.
      .col-sm-4.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton1.bg8.text-white.p-4
          .row.justify-content-center.mb-3
            .col-12
              figure
                img(src='@/assets/curso/tema1/img51.png', alt='Texto que describa la imagen')
          h4.text-center Jornada de trabajo.
          p.pb-3 Periodo de tiempo estimado en la normatividad del Código Sustantivo del Trabajo colombiano, en el que se determinan un número de minutos horarios o diarios.
      .col-sm-4.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton1.bg8.text-white.p-4
          .row.justify-content-center.mb-3
            .col-12
              figure
                img.img(src='@/assets/curso/tema1/img52.png', alt='Texto que describa la imagen')
          h4.text-center Constante de días productivos por mes.
          p Para obtener este dato se debe calcular un promedio estadístico de la sumatoria de los días hábiles de producción por cada mes, lo cual numéricamente se estima que se trabaja con 24 días.    
    p.mb-5 Así, para determinar la  #[span.txt-color2 Capacidad Instalada Operativa] se debe realizar la siguiente  #[span.txt-color2 fórmula]:
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img.img(src='@/assets/curso/tema1/img53.svg', alt='Texto que describa la imagen')
    p Para comprender un poco más acerca de la capacidad instalada operativa aplicada al contexto laboral, se presenta un ejemplo ilustrativo:
    .row.mb-2.align-items-center
      .col-lg-3.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Hilos y Dedales S.A.S.
    .row.bg11.justify-content-center.align-items-center.p-5
      .col-md-9.col-12
        p La empresa tiene una planta de manufactura y cuenta con dos módulos de ensamble que poseen personal de mano de obra directa de  9 y 8 personas respectivamente;  y un módulo en el área de empaque con 14 personas. 
        p.p-3.bg12 La empresa labora de lunes a sábado, 8 horas diarias. Por ello, se pide calcular la capacidad instalada operativa, por equipos de trabajo, durante una hora, un día y un mes. 
      .col-md-3.col-12.p-3
        img(src='@/assets/curso/tema1/img54.svg')
    .row.bg13.justify-content-center.align-items-center.p-5.mb-5
      .tabla-a.color-acento-contenido.mb-5 
        table
          thead
            tr 
              th(colspan="5").text-center CAPACIDAD INSTALADA OPERATIVA MÓDULO 1 
          tbody
            tr
              td.text-center Variable
              td.text-center Nro. de Personas de M.O.D
              td.text-center Jornada de trabajo
              td.text-center Constante días producción
              td.text-center Total, minutos operativos instalados 
            tr
              td.text-center Hora
              td.text-center 9
              td.text-center 60
              td.text-center 1
              td.text-center 540
            tr
              td.text-center Día
              td.text-center 9
              td.text-center 480
              td.text-center 1
              td.text-center 4.320
            tr
              td.text-center Mes
              td.text-center 9
              td.text-center 480
              td.text-center 24
              td.text-center 103.680
      .tabla-a.color-secundario.mb-5 
        table
          thead
            tr 
              th(colspan="5").text-center CAPACIDAD INSTALADA OPERATIVA MÓDULO 2
          tbody
            tr
              td.text-center Variable
              td.text-center Nro. de Personas de M.O.D
              td.text-center Jornada de trabajo
              td.text-center Constante días producción
              td.text-center Total, minutos operativos instalados 
            tr
              td.text-center Hora
              td.text-center 8
              td.text-center 60
              td.text-center 1
              td.text-center 480
            tr
              td.text-center Día
              td.text-center 8
              td.text-center 480
              td.text-center 1
              td.text-center 3.840
            tr
              td.text-center Mes
              td.text-center 8
              td.text-center 480
              td.text-center 24
              td.text-center 92.160
      .tabla-a.color-acento-botones.mb-5 
        table
          thead
            tr 
              th(colspan="5").text-center CAPACIDAD INSTALADA OPERATIVA ÁREA DE EMPAQUE 
          tbody
            tr
              td.text-center Variable
              td.text-center Nro. de Personas de M.O.D
              td.text-center Jornada de trabajo
              td.text-center Constante días producción
              td.text-center Total, minutos operativos instalados 
            tr
              td.text-center Hora
              td.text-center 14
              td.text-center 60
              td.text-center 1
              td.text-center 840
            tr
              td.text-center Día
              td.text-center 14
              td.text-center 480
              td.text-center 1
              td.text-center 6.7200
            tr
              td.text-center Mes
              td.text-center 14
              td.text-center 480
              td.text-center 24
              td.text-center 161.280
    .row.bg14.justify-content-center.align-items-center.p-5.mb-5
      .col-md-3.col-12.p-3
        img(src='@/assets/curso/tema1/img57.png')
      .col-md-9.col-12
        p En la interpretación técnica es posible evidenciar que el Módulo 1 con 9 personas, aporta 540 minutos en una hora, 4.320 minutos en un día y 103.680 minutos en un mes. Igualmente se muestran los resultados en el Módulo 2 y el Área de Empaque. De esta forma, se presentan múltiples usos que poseen estos datos numéricos para la planeación de la producción en la empresa. 
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-7
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          p.mb-3 En síntesis, la capacidad instalada operativa se asocia a las personas, lo cual se define como el número de minutos que se obtiene del personal de mano de obra directa, utilizando como variables la jornada de trabajo y el número de días productivos por mes que en promedio suman 24 días. 
          span  #[b (OIT, 1996)].
      .col-lg-5.mb-4.mb-lg-0
        img(src='@/assets/curso/tema1/img58.png').m-auto
    .row.mb-2.align-items-center
      .col-lg-5.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Carga instalada o minutos de producción
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-12.mb-5.mb-lg-0
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-b__texto.mb-2
            i.fas.fa-quote-left
            h3.text-regular Se asocia al tiempo que aporta una orden de producción específica, con base en el tiempo estándar y el número de unidades programadas en ella. Los minutos de producción aportan inventario de carga de tiempo para realizar la planeación y la programación de la planta de producción, ya sea horaria, diaria, semanal, entre otros.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 (Valverde Chifla, 2014).
    .bg16
      p.mb-5 Para realizar su cálculo se emplean las siguientes #[span.txt-color2 variables]:
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton1.bg8.text-white.p-5.alt
            .row.justify-content-center.mb-0
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img60.png', alt='Texto que describa la imagen')
            h3.text-center Número de Unidades de la orden de producción
            p Se define como el total de unidades asociadas a una orden de producción específica.
        .col-lg-1
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton1.bg8.text-white.p-5.alt
            .row.justify-content-center.mb-0
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img61.png', alt='Texto que describa la imagen')
            h3.text-center Tiempo estándar de la prenda
            p Es la unidad de medida de tiempo en minutos de una prenda de vestir, se obtiene mediante un estudio de métodos y tiempos que da como resultado precisamente el tiempo estándar de la prenda.
      p.mb-5 Así, para determinar la #[span.txt-color2 Carga Instalada o minutos de Producción] se debe realizar la siguiente #[span.txt-color2 fórmula]:
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img.img(src='@/assets/curso/tema1/img62.svg', alt='Texto que describa la imagen')
    p.mb-5 Con el siguiente ejemplo ilustrativo, se puede comprender un poco más acerca de la carga instalada o minutos de producción aplicada al contexto laboral:
    .row.mb-2.align-items-center
      .col-lg-4.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Manufacturamos Prendas S.A.S.
    .row.bg17.justify-content-center.align-items-center.p-5
      .col-md-3.col-12.p-3
        img(src='@/assets/curso/tema1/img64.svg')
      .col-md-6.col-12
        p La empresa tiene una planta de manufactura y cuenta con dos módulos de ensamble que poseen personal de mano de obra directa de  9 y 8 personas respectivamente;  y un módulo en el área de empaque con 14 personas. 
    .row.bg13.justify-content-center.align-items-center.p-5.mb-5
      .col-md-10.col-12
        p.p-3.bg12 La empresa labora de lunes a sábado, 8 horas diarias. Por ello, se pide calcular la capacidad instalada operativa, por equipos de trabajo, durante una hora, un día y un mes. 
      .col-md-3.col-12.p-3
        img(src='@/assets/curso/tema1/img54.svg')
  
      .tabla-a.color-acento-contenido.mb-5 
        table
          thead
            tr 
              th(colspan="8").text-center CAPACIDAD INSTALADA OPERATIVA MÓDULO 1 
          tbody
            tr
              td.text-center Fecha de ingreso
              td.text-center Referencia
              td.text-center Descripción
              td.text-center Orden de producción
              td.text-center Número de unidades   orden producción
              td.text-center Tiempo estándar
              td.text-center Total minutos de producción 
              td.text-center Fecha de despacho
            tr
              td.text-center 7/07/2021
              td.text-center 434343
              td.text-center Blusa Irina
              td.text-center 102323
              td.text-center 457
              td.text-center 12,3
              td.text-center 5621,1
              td.text-center 18/07/2021
            tr
              td.text-center 8/07/2021
              td.text-center 434344
              td.text-center Blusa lunar
              td.text-center 102324
              td.text-center 535
              td.text-center 15,4
              td.text-center 8239
              td.text-center 19/07/2021
            tr
              td.text-center 9/07/2021
              td.text-center 434345
              td.text-center Blusa angelical
              td.text-center 102325
              td.text-center 840
              td.text-center 9,81
              td.text-center 8.240,4
              td.text-center 21/07/2021
            tr
              td.text-center 10/07/2021
              td.text-center 434346
              td.text-center Blusa triangular
              td.text-center 102326
              td.text-center 1.241
              td.text-center 10,5
              td.text-center 13,030,5
              td.text-center 22/07/2021
    .row.bg18.justify-content-center.align-items-center.p-5.mb-5
      .col-md-2.col-12.p-3
        img(src='@/assets/curso/tema1/img67.svg').mx-auto
      .col-md-9.col-12
        p En la tabla, es posible conocer la fecha de ingreso de las órdenes de producción con sus respectivas referencias, descripción, número de unidades, tiempo estándar, total de minutos de producción y la fecha de despacho.

    .row.bg19.justify-content-center.align-items-center.p-5.mb-5
      .col-md-2.col-12.p-3
        img(src='@/assets/curso/tema1/img68.svg').mx-auto
      .col-md-9.col-12
        p A partir de la información suministrada se puede interpretar técnicamente que la referencia 434343 con orden de producción número 102223, aporta al proceso un total de 5.621,1 minutos o que la referencia 434346 con orden de producción número 102226, aporta al proceso un total de 13.030,5 minutos. 
        p.mb-4 De esta manera, los datos presentados en este formato se convierten en el insumo vital para planear y programar en la planta de producción.
    .row.mb-2.align-items-center
      .col-lg-6.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Carga instalada en minutos técnicos. Horas máquina
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-7
        .bloque-texto-d.color-secundario.p-0
          .bloque-texto-b__texto.mb-0
            i.fas.fa-quote-left
            h3.text-regular Se asocia a la diversidad de máquinas con que cuentan las plantas de manufactura, aunque esta carga es poco empleada para protocolos de programación, los minutos técnicos muestran las restricciones que tienen las empresas con respecto a la maquinaria. Igual que los anteriores tipos de cargas, son los minutos asociados al parque de inventario disponible durante una jornada de trabajo, igualmente al tiempo que aportan los recursos de guías y accesorios que acompañan al departamento de producción, además de la calidad y áreas de montaje del producto.
            i.fas.fa-quote-right
          .bloque-texto-d__autor.mb-5 
            .h6.mb-0 (Valverde Chifla, 2014).
        p.p-3.bg5 Si bien una persona puede ser remplazada en el proceso, no pasa lo mismo con la no disponibilidad de una máquina, puesto que esta situación puede acarrear caos al proceso y baja en el índice de productividad de la compañía. 
      .col-lg-5.mb-4.mb-lg-0
        img(src='@/assets/curso/tema1/img69.png').m-auto
    .bg16
      p.mb-5 Para realizar su cálculo se emplean las siguientes #[span.txt-color2 variables]:
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton1.bg8.text-white.p-5.alt
            .row.justify-content-center.mb-0
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img70.png', alt='Texto que describa la imagen')
            h3.text-center Número de Unidades de la orden de producción
            p Se define como el total de unidades asociadas a una orden de producción específica.
        .col-lg-1
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton1.bg8.text-white.p-5.alt
            .row.justify-content-center.mb-0
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img71.png', alt='Texto que describa la imagen')
            h3.text-center Jornada de trabajo
            p Periodo de tiempo estimado en la normatividad del Código Sustantivo del Trabajo colombiano, en el que se determinan un número de minutos horarios o diarios.
      p.mb-5 Así, para determinar la #[span.txt-color2 Carga Instalada en minutos Técnicos] se debe realizar la siguiente #[span.txt-color2 fórmula]:
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          .col-md-3.col-6.mb-md-0.mb-4.bg20
    Separador
    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Producción por lotes u órdenes de producción
    p Se define una orden de producción como una estructura de costos asociada a un número determinado de unidades o la instrucción para la ejecución de un servicio. 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg.align-items-center
        .row
          .col.bg3(data-aos="fade-left").mb-4
            p.mt-3 Se elabora un listado de todos los requerimientos para poder elaborar el producto o prestar el servicio.
          .col-lg-1.px-0
            figure
              img.img26.d-none.d-lg-block(src='@/assets/curso/tema1/img73.svg')
      .col-lg-3.mb-4
        .tarjeta--boton.bg22.text-white.px-5.ps-5.pb-3
          .row.justify-content-center.mb-0
            .col-lg-8
              figure
                img(src='@/assets/curso/tema1/img76.svg', alt='Texto que describa la imagen')
            h3.text-center Costos por órdenes de producción
            p Es una estrategia para separar una matriz  de compra de otra, así sea similar.
      .col-lg.align-items-center
        .row
          .col-lg-1.px-1
            figure
              img.img26.d-none.d-lg-block(src='@/assets/curso/tema1/img74.svg')
          .col.bg5(data-aos="fade-left")
            p.mt-3 Una  infraestructura digital o manual, asigna los valores monetarios para que los líderes de procesos den como resultado final y preciso el precio de venta.
    p.mb-5 Empleamos este sistema cuando se fabrican pedidos especiales cerrados, cumpliendo con unas especificaciones precisas y personalizadas de un cliente. La materia prima, los insumos y ciertos conocimientos aplicados son especiales, por tanto los costos son separados de otras órdenes así sean similares, entre otros ejemplos, joyería, muebles, fiestas, eventos, vestuario a medida, una vivienda. Este sistema es uno de los más empleados por su eficacia y precisión.        
    .row.mb-5.align-items-center
      .col-lg-4.bg1.p-3
        h3.text-white.text-center.mb-0 Sistemas de inventarios 
    p Un inventario representa la existencia de bienes muebles e inmuebles que tiene la empresa para comerciar con ellos, comparándolos y vendiéndolos tal cual o procesándolos primero antes de venderlos, en un período económico determinado. El sistema de inventarios permite registrar la cantidad de mercancía existente en una empresa y así mismo determinar el costo de los productos vendidos. Existen varios tipos de sistemas de inventarios, entre ellos se encuentran:
    .tarjeta.tarjeta--azul1.p-4.mb-5
      SlyderA(tipo="b")(data-aos="fade-right")
        .row.align-items-center.justify-content-center
          .col-lg-5.mb-4.mb-lg-0.ps-5
            p #[b El sistema de inventario perpetuo o permanente:]
            p En el sistema de inventario perpetuo, el negocio mantiene un registro continuo para cada artículo del inventario. Estos registros muestran el inventario disponible todo el tiempo y son útiles para preparar los estados financieros mensuales, trimestral o provisionalmente. Este sistema le permite al negocio determinar el costo del inventario final y el costo de las mercancías vendidas directamente de las cuentas contables, sin tener que hacer conteo físico del inventario.
          .col-lg-7.ps-4
            figure
              img(src='@/assets/curso/tema1/img77.png')
        .row.align-items-center
          .col-lg-5.mb-4.mb-lg-0.ps-5
            p #[b El sistema de inventario periódico:]
            p En el sistema de inventario periódico o conocido también como sistema físico, la empresa no mantiene un registro continuo del inventario disponible; más bien al final del periodo, la empresa hace un conteo físico del inventario disponible y aplica los costos unitarios para determinar el costo del inventario final. Esta cifra del conteo físico del inventario es la que aparece en el Balance General. Se utiliza también para calcular el costo de las mercancías vendidas. 
          .col-lg-7.ps-4
            figure
              img(src='@/assets/curso/tema1/img78.png')
        .row.align-items-center
          .col-lg-5.mb-4.mb-lg-0.ps-5
            p-3 El sistema periódico es generalmente utilizado para contabilizar los artículos del inventario que tienen un costo unitario bajo. Los artículos de bajo costo pueden no ser lo suficientemente valiosos para garantizar el costo de llevar un registro al día del inventario disponible. 
            p Para usar este sistema con efectividad, el propietario debe tener la capacidad de controlar el inventario mediante la inspección visual. Por ejemplo, cuando un cliente le solicita ciertas cantidades disponibles, el dueño o administrador debe ser capaz de visualizar las mercancías existentes.
          .col-lg-7.ps-4
            figure
              img(src='@/assets/curso/tema1/img79.png')
    .row.mb-5.justify-content-center
      .col-10.bg3.p-4
        .row.align-items-center.justify-content-center
          .col-lg-11
            p.mb-0 Para ampliar estos conceptos sobre los inventarios en una empresa, consultar en el material complementario el sitio web de Gestiopolis la publicación de #[span.txt-color2 Rebeca Martinez (2001) sobre “El inventario”].
          .col-lg-1.mb-3
            figure
              img(src='@/assets/curso/tema1/img80.svg').mx-auto(data-aos="fade-right")
    .row.mb-2.align-items-center
      .col-lg-3.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Control de inventario en proceso
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-7
        p Los inventarios entonces necesitan ser clasificados debido a su importancia ya que para el administrador la información que suministran tiene que ver con su manejo y esto requiere uso de recursos, personal y dinero. La limitante entonces está en que los recursos son limitados y muchas veces se tiene gran número de inventarios.
        p.p-3.bg5 Si bien una persona puede ser remplazada en el proceso, no pasa lo mismo con la no disponibilidad de una máquina, puesto que esta situación puede acarrear caos al proceso y baja en el índice de productividad de la compañía. 
        p Los inventarios son importantes para los fabricantes en general, y varían ampliamente entre los distintos grupos de industrias. La composición de esta parte del activo es una gran variedad de artículos, y es por eso que se han clasificado de acuerdo a su utilización en los siguientes tipos: 
      .col-lg-5.mb-4.mb-lg-0
        img(src='@/assets/curso/tema1/img81.svg').m-auto
    .row.align-items-center.mb-5
      .col-lg-12
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Inventario de materias primas")
            .col-12
              .row.align-items-center
                .col-md-10.align-items-center
                  p.ps-5 Lo conforman todos los materiales con los que se elaboran los productos, pero que todavía no han recibido procesamiento. La materia prima, es aquel o aquellos artículos sometidos a un proceso de fabricación que al final se convertirá en un producto terminado.
                  p.ps-5 En toda actividad industrial concurren una variedad de artículos (materias primas) y materiales, los que serán sometidos a un proceso para obtener al final un artículo terminado o acabado. A los materiales que intervienen en mayor grado en la producción se les considera "materia prima", ya que son utilizadas en cantidades lo suficientemente importantes para lograr el producto acabado.
                .col-lg-2.col-md-6.col-12.p-0
                  figure
                    img(src='@/assets/curso/tema1/img82.svg', alt='Texto que describa la imagen').mx-auto
          .row(titulo="Inventario de productos en proceso")
            .col-12
                .row.align-items-center
                  .col-md-10.align-items-center
                    p.ps-5 Lo integran todos aquellos bienes adquiridos por las empresas manufactureras o industriales, los cuales se encuentran en proceso de manufactura. Su cuantificación se hace por la cantidad de materiales, mano de obra y gastos de fabricación, aplicables a la fecha de cierre.
                    p.ps-5 El inventario de productos en proceso consiste en todos los artículos o elementos que se utilizan en el actual proceso de producción. Es decir, son productos parcialmente terminados que se encuentran en un grado intermedio de producción y a los cuales se le aplicó la labor directa y gastos indirectos inherentes al proceso de producción en un momento determinado. Una de las características del Inventario de producción en proceso es que va aumentando el valor a medida que es transformado de materia prima en el producto terminado como consecuencia del proceso de producción. 
                  .col-lg-2.col-md-6.col-12.p-0
                    figure
                      img(src='@/assets/curso/tema1/img83.svg').mx-auto
          .row(titulo="Inventario de productos terminados")
            .col-12
              .row.align-items-center
                .col-md-10.align-items-center
                  p.ps-5 Son todos aquellos bienes adquiridos por las empresas manufactureras o industriales, los cuales son transformados para ser vendidos como productos elaborados, comprenden estos, los artículos transferidos por el departamento de producción al almacén de productos terminados por haber alcanzado su grado de terminación total y que a la hora de la toma física de inventario se encuentren aún en los almacenes, es decir, los que todavía no han sido vendidos. El nivel de inventario de productos terminados va a depender directamente de las ventas, su nivel está dado por la demanda. 
                  p.ps-5 
                .col-lg-2.col-md-6.col-12.p-0
                  figure
                    img(src='@/assets/curso/tema1/img84.svg').mx-auto
          .row(titulo="Inventario de materiales y suministros")
            .col-12
              .row.align-items-center
                .col-md-10.align-items-center
                  p.ps-5 Son los materiales con los que se elaboran los productos, pero que no pueden ser cuantificados de una manera exacta en el inventario de materiales y suministros se incluye: 
                  p.ps-5 -	Materias primas secundarias, (Pintura, lija, clavos, lubricantes, etc.). Sus especificaciones varían según el tipo de industria, un ejemplo para la industria cervecera es sales para tratamiento de agua. 
                  p.ps-5 -	Artículos de consumo destinados para ser usados en la operación de la industria; dentro de estos artículos de consumo los más importantes son los destinados a las operaciones y están formados por los combustibles y lubricantes, estos en la industria tienen gran significación. 
                  p.ps-5 -	Los artículos y materiales de reparación y mantenimiento de las maquinarias y aparatos operativos. Estos   artículos de reparación por su gran volumen, necesitan ser controlados adecuadamente y la existencia de estos varía en relación a sus necesidades. 
                .col-lg-2.col-md-6.col-12.p-0
                  figure
                    img(src='@/assets/curso/tema1/img85.svg').mx-auto
          .row(titulo="Inventario de mercancías")
            .col-12
              .row.align-items-center
                .col-md-10.align-items-center
                  p.ps-5 Constituye la existencia, a precio de costo, de los artículos comprados o producidos por la empresa, para su comercialización. Se incluyen en el inventario todas las mercancías de propiedad de la empresa que se encuentran en el almacén, bodegas, en tránsito (cuando la compañía ha comprado fuera del país) o entregadas en consignación, se excluyen las que no son propiedad de la empresa pero que se han recibido en consignación o están vendidas y aún no se han llevado al cliente.
                  p.ps-5 En las empresas comerciales, cuyo objeto es la compra – venta, esta cuenta (inventarios) es lo que genera utilidades, por lo que los inventarios deben ser valorados y controlados técnicamente. 
                .col-lg-2.col-md-6.col-12.p-0
                  figure
                    img(src='@/assets/curso/tema1/img85.svg').mx-auto
          
        

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
