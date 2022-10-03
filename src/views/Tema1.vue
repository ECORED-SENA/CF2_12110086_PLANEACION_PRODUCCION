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
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-left")
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
          img(src='@/assets/curso/tema1/img3.png').m-auto(data-aos="fade-right")
    p.mb-5 Para recopilar información clave sobre los sistemas de costeo es necesario: 
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema1/img4.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Utilizar eficazmente <em>software</em> especializado para la elaboración de plan de costeo de la producción.
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema1/img5.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Implementar estrategias relacionadas con el análisis sistémico del control efectivo de los costos de manufactura y servicio. 
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema1/img6.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            pmb-0 Conceptualizar sobre el valor agregado y la confianza que genera a las estructuras fabriles y de servicio, el construir sistemas estratégicos de precio de venta del producto.
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema1/img7.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Analizar las diferencias que existen entre la contabilidad de costos, la contabilidad administrativa y la contabilidad financiera.
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema1/img8.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Distinguir la diferencia entre planeación de costos y control de costos.
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema1/img11.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Diferenciar los conceptos de costos y gastos. 
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema1/img9.svg' alt='AvatarTop')
        .tarjeta.color-primario4
          .p-4
            p.mb-0 Establecer la utilidad de la clasificación de costos generales de producción. 
      .tarjeta-avatar.slyderF-media
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
            iframe(width="560" height="315" src="https://www.youtube.com/embed/RO-qh0MWiv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
            iframe(width="560" height="315" src="https://www.youtube.com/embed/axdOjkz8_54" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


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
        p.p18.p-3.bg6 Las mercancías distribuidas y los servicios prestados no incluyen dentro de su infraestructura de precios la diferenciación, simplemente al ser entregados al cliente, estos se ajustan o no a los presupuestos que fueron negociados. 
    p.mb-5 Se debe diferenciar un costo de un gasto así:
    .row.mb-2.align-items-center
      .col-lg-4.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Diferencia entre costo y gasto
    .row.bg13.justify-content-center.align-items-center.p-5.mb-5
      .col-md-9.col-12
        p.p18.p-3.bg12.shadow El costo se muestra siempre en relación con el desembolso de un capital para afrontar un proceso logístico de manufactura o brindar un intangible, en su defecto el ítem del gasto se muestra por el desembolso de capital para administrar tareas de acompañamiento administrativo y de poner en venta lo que sea el resultado. 
      .col-md-3.col-12.p-3
        figure
          img(src='@/assets/curso/tema1/img16.svg')
      .col-md-12.mt-5.mb-5.borde_2
      .col-md-3.col-12.p-3
        figure
          img(src='@/assets/curso/tema1/img18.svg')
      .col-md-9.col-12
        p.p18.p-3.bg12.shadow Un gasto administra un proceso de prestación de servicio o manufactura de un producto, por esta causa su control debe ser estricto. El costo, aunque su control es fijo, depende del mercado de proveedores. 
      .row.justify-content-center.align-items-center
        .row.bg2.justify-content-center.align-items-center.borde
          .col-md-9
            p.p18 El costo forma parte integral del resultado obtenido, terminado o intangible, y es factible observarlo; en su defecto, el gasto es imperceptible, por lo tanto, supuestamente no es relevante para integrar el precio de venta de ambos.
          .col-md-2.col-12.p-3
            figure
              img(src='@/assets/curso/tema1/img17.svg')
    Separador
    #t_1_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Elementos del costo
    p Los costos generales de la producción, como se mencionó antes, se definen como una transformación directa de un capital que un emprendedor natural o una corporación, efectúa con el objetivo de realizar montajes de infraestructuras operacionales digitales y laborales, para ofrecer un bien intangible o desarrollar un proceso de manufactura fabril, mercadear bienes y/o brindar servicios digitales y/o logísticos.
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
            p.mb-0 Agrega alto valor administrativo a la logística interna. 
          li 
            i.fas.fa-cog(style="color:#F14141")
            p.mb-0 Crea la trazabilidad y el control del proceso logístico interno, mano derecha de la gerencia.
          li 
            i.fas.fa-cog(style="color:#F14141")
            p.mb-0 Integra todos los elementos relevantes para entregar en óptimas condiciones de calidad y bajo costo, el producto o servicio.
          p.p-3.bg5 En conclusión, es de alta relevancia establecer que el objetivo de clasificar de forma detallada los costos, es la forma de elaborar una estructura estandarizada y establecer los límites que faciliten a las áreas de producción y logística de servicios, asignar sin equivocación, valores precisos para calcular el precio de venta de bienes y servicios.
    p.mb-5 Estandarizar el precio de venta de un servicio constituye toda una logística intangible que puede atribuirse al comportamiento que el recurso humano tiene al realizar la actividad. Los desembolsos para el desempeño del área de ingeniería industrial, áreas de mantenimiento y sección de compras, suelen ser difíciles de determinar, puesto que el oficio de estas secciones de servicios es la de proveer asistencia a las demás áreas logísticas; los costos de estas secciones de servicios deben ponderarse y cargarse a la estructura jerárquica de la empresa, empleando bases y soportes técnicos, utilizando <em>software</em> especializados. Los siguientes son los aspectos que hacen parte de los elementos del costo.
    .row.mb-2.align-items-center
      .col-lg-7.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Costos generales de manufactura, costos fijos y costos variables
    p.mb-5 En infraestructuras de manufactura y servicio se estructura un catálogo de costos en concordancia a los procedimientos directamente relacionados con acciones logísticas de manufactura y al tiempo de respuesta para estimar las fechas de entrega del producto o servicio. Estos costos se estructuran según sean:
    .row.justify-content-center.mb-5
      .col-sm-5.col-md-10.col-lg-5.mb-4.mb-lg-0
        .bg8.p-4
          figure
            img(src='@/assets/curso/tema1/img26.png', alt='Texto que describa la imagen')
        div.bg16.p-4
          h4.text-center Costos variables
          p.mb-0 Todos los valores monetarios y desembolsos donde la cantidad varía para ejecutar la acción.
      .col-sm-5.col-md-10.col-lg-5.mb-4.mb-lg-0
        .bg8.p-4
          figure
            img(src='@/assets/curso/tema1/img27.png', alt='Texto que describa la imagen')
        div.bg16.p-4
          h4.text-center Costos fijos
          p.mb-0 Desembolsos o valores económicos que en su valor monetario no cambia en concordancia a la acción de logística de manufactura. Estos permanecen un buen periodo de tiempo y su comportamiento histórico es muy constante.
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
        p.p18.p-3.bg12.shadow Se registra como todo aquel desembolso que se perfila para soportar y maniobrar con los activos fijos, entre otros, aire acondicionado, iluminación, energía, agua, servicios de comunicación e internet. 
      .col-md-12.mt-5.mb-5.borde_2
        
      .col-md-8.col-12.pe-1.mb-3.mb-lg-0
        h4 Estructura de los costos fijos de operación
        p.p18.p-3.bg12.shadow Se registra como todo aquel ítem donde los valores y desembolsos de los proyectos específicos aprobados por la gerencia en el plan de maestro de la producción son de extrema prioridad,  algunos son los sistemas estructurales de gestión de la calidad, cambio a energías renovables, plan de inversión en recuperación de desperdicios de materias primas e insumos, entre otros.
      .col-md-4.col-12.px-0
        figure
          img(src='@/assets/curso/tema1/img29.svg')
      .col-md-12.mt-5.mb-5.borde_2
      .col-md-4.col-12.pe-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img47.svg')
      .col-md-8.col-12.px-0.mb-5
        h3 Estructura de los costos fijos programados
        p.p18.p-3.bg12.shadow Son una lista no menos importante de costos indirectos que no se modifica directamente y en simetría con los cambios y las acciones de manufactura logística, son llamados semivariables o semifijos. Se los nombra repetidamente ya sean como fijos o como variables, acción que estriba de sus particularidades predominantes, el más común es el salario de los líderes o supervisores de proceso. 
      
      .row.justify-content-center.align-items-center
        .row
          .col-md-6.col-lg.tarjeta--tabla.p-4.borde
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/img30.svg' alt='AvatarTop')
            p.py-3.text-center Diferenciar los costos fijos versus los variables, serán políticas y estrategias que coordina la gerencia con relación al entorno de las operaciones de la compañía. 
          .col-md-6.col-lg.tarjeta--tabla.p-4.borde
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/img31.svg' alt='AvatarTop')
            p.text-center Universalmente, los costos fijos son indirectos con relación al producto; en un contexto gerencial logran ser directos con respecto al área o a la sección. 
          .col-md-6.col-lg.tarjeta--tabla.p-4.borde
            .row.justify-content-center.mb-3
              .col-4
                img(src='@/assets/curso/tema1/img32.svg' alt='AvatarTop')
            p.text-center En su defecto, los costos variables logran convertirse en directos con relación al producto, al área y a la sección productiva.
     
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
    .row.mb-2.align-items-center
      .col-lg-6.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Clasificación de los costos generales de producción
    p.mb-5 En producción, la contabilidad de costos posee una alta gama de categorizaciones, entre ellas figuran:
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th(colspan="3") Estructura
            th(colspan="9") Clasificación 
        tbody
          tr
            td(colspan="3") Estructura acorde a su variabilidad.
            td(colspan="9") ●	Se catalogan como fijos. <br> ●	Se catalogan como variables.

          tr
            td(colspan="3") Estructura según los departamentos.
            td(colspan="9") ● Se catalogan como productivos: maniobran sobre el bien en todas las etapas de producción; entre otros: sección de corte, producción y terminación.  <br> ● Se catalogan como servicios: se usan como soporte administrativo para bienes y logística de ensamble; entre otros: secciones de soporte técnico, sistemas de acompañamiento en seguridad privada.
          tr
            td(colspan="3") Estructura de acuerdo a su aplicación.
            td(colspan="9") ●	Se catalogan sobre aplicados. <br> ●	Se catalogan sub aplicados.
          tr
            td(colspan="3") Estructura con base en el tiempo.
            td(colspan="9") ●	Se catalogan como reales (históricos): se determinan construyendo una histórica base de datos. <br> ●	Se catalogan como predeterminados: se calculan con antelación y soportados en el plan maestro de la producción. 
          tr
            td(colspan="3") Estructura según el prorrateo.
            td(colspan="9") ●	Se catalogan como primarios. <br> ●	Se catalogan como secundarios.<br> ● Se catalogan como terciarios. <br> ●	Se catalogan como los gastos indirectos de fabricación: son largas listas individuales por orden de fabricación, que pueden acoplarse dependiendo de la esencia del gasto (materias primas e insumos de carácter indirecto). Se establece un número porcentual único y suficiente que las reemplaza, simplificando internamente esta larga lista de gastos; este porcentaje respalda con mayor seguridad el margen de contribución establecido por decisiones corporativas y para facilitar la vigilancia de estas estructuras de costos para toda la planta. Con su uso se garantiza que no se quede por fuera ningún ítem que perjudique el precio de venta del bien o servicio. 
    p.mb-5 No obstante, colectivamente la organización administrativa de las industrias, integra sistemas de costos por números que individualizan en secciones, o centros de costos, como una base estructural de control del dinero invertido y soporte funcional para que los procesos no se paren y no causen desequilibrio económico. 
    .row.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p.p-3.bg5 Es relevante conservar un balance estadístico económico de control de los Costos Indirectos de Fabricación (CIF), según la infraestructura tecnológica y digital de la compañía, cuidando la naturaleza de la logística de ensamble y estrategias de responsabilidad gerencial, determinantes en la conservación de la buena credibilidad de los clientes, con base en las estructuras de costos.
        p.mb-4 De esta manera, se establece un panorama estructural basado en la complejidad de los costos de los bienes manufacturados que involucra una lista de asignación de todos los CIF y crea paralelos de análisis de toda la información documentada para establecer finalmente el precio de venta del bien o servicio. Asimismo, con el propósito de simplificar los procedimientos en cuanto a costos, los departamentos proporcionan servicios solidariamente consiguiendo logros conjuntos con alto valor y adecuada exactitud, para la asignación precisa de gastos de manufactura, disminuyendo el valor de producir y por lo tanto obteniendo precios competitivos de venta.
      .col-lg-5
        figure
          img.mb-5(src='@/assets/curso/tema1/img34.png')(data-aos="fade-left")
    .row.mb-5.justify-content-center
      .col-10.bg6.p-4
        .row
          .col-lg-11
            p.mb-5 Para profundizar en este tema se sugiere que consulte en la web el eBook Contabilidad y análisis de costos de Magdalena Arredondo, específicamente el capítulo 2, pp.11-30.
          .col-lg-1.mb-3
            figure
              img.img-t(src='@/assets/curso/tema1/img80.svg').mx-auto(data-aos="fade-right")
          .col-sm-auto
              a.boton.color-acento-botones.me-3.mg4(href="https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/40440" target="_blank").mb-0
                span Ver más
                i.fas.fa-link 
    Separador
    #t_1_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Clasificación de los costos de producción
    p.mb-5 En la actual industria de manufactura relacionar de forma coherente y estructurada los costos sostenibles de producción y servicio, se convierte en un dilema para los gerentes de las compañías, cuya estrategia es basarse en la división por estructuras que los expertos contables aportaron en sus textos en épocas pasadas, la importancia que representa esta división para el futuro económico es de alta relevancia; por eso se da la siguiente clasificación:
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Clasificación de costos
            th Estructuras de costos
            th Para tener en cuenta…
        tbody
          tr
            td(rowspan="3")  Estructura general de costos de producción.
            td Costos periódicos con base en órdenes de producción. 
            td(rowspan="3")
          tr
            td Costos de materias primas e insumos en inventario.
          tr
            td Costos administrativos.
          tr(style="background-color: #F6F6F6")
            td(rowspan="3") Estructuras de costos acordes al procedimiento.
            td Estructura de costos de manufactura y/o producción: intervienen cuando modificamos materiales e insumos, creamos bienes de consumo, incurrimos en desembolsos de capital, se presta un servicio o se relaciona la materia prima en productos terminados: costo de los materiales integrados al producto, mano de obra y gastos de fabricación indirectos que intervienen en la transformación del producto (con excepción de la materia prima y la mano de obra directa).
            td(rowspan="3")
          tr(style="background-color: #F6F6F6")
            td Estructura de costos logísticos de distribución: incurren en esta etapa costos de transporte desde el lugar de producción hasta puntos de venta
          tr(style="background-color: #F6F6F6")
            td Estructura de costos logísticos de administración: Se crean en las secciones administrativas de las corporaciones.
          tr
            td(rowspan="5") Estructuras de costos acordes a la actividad, con respecto a su variabilidad.
            td Estructura de costos variables: directamente relacionados con unidades específicas, o por encargo, o pedido. En el lenguaje común de una planta de manufactura se conocen como fijos.
            td(rowspan="5") 
          tr
            td Estructura de costos semivariables: se conocen como fijos; en otros momentos de producción poseen una variabilidad bastante marcada. Comúnmente se refiere al personal indirecto o el gasto de servicios públicos, entre otros.
          tr
            td Estructura de costos fijos: sistemas históricos y estructurales, se emplean en tiempo presente a corto y mediano periodo de tiempo.
          tr
            td Estructura de costos fijos discrecionales: nómina de empleados y administrativos comúnmente.
          tr
            td Estructura de costos fijos comprometidos: la depreciación de activos de la compañía siempre está presente.
          tr(style="background-color: #F6F6F6")
            td(rowspan="5") Estructuras de costos acorde a la identificación específica del costo.
            td Estructuras de costos directos: muy conocidas en el cálculo estructural del costo, materias primas insumos y mano de obra.
            td(rowspan="2") Una estructura de costos definido como directos para un departamento, resulta que puede convertirse en una estructura de costos indirectos en otra área.
          tr(style="background-color: #F6F6F6")
            td Estructuras de costos indirectos: de carácter administrativo y logístico realmente participan activamente en el precio de venta del bien o servicio.
          tr(style="background-color: #F6F6F6")
            td Estructuras de costos según los antecedentes y doctrinas: se correlacionan con valores que las compañías emplean para preservar elementos particulares de proceso, componentes que requieren de cierta confidencialidad y esto encarece su valor económico.
            td(rowspan="3") Los sistemas estructurales de costos siempre estarán presentes como columna vertebral de los departamentos logísticos de producción de bienes y servicios, puesto que deben permanecer disponibles, emplearse en otras secciones del negocio, procedimientos, procesos, actividades y productos. El empleo de sistemas de costos indirectos involucra el empleo de una base histórica que señale de forma clara en que se usan, el costo indirecto si no se controla puede llegar a encarecer el bien o el servicio.
          tr(style="background-color: #F6F6F6")
            td Estructuras de costos según históricos: ciclos de tiempo preestablecidos.
          tr(style="background-color: #F6F6F6")
            td Estructuras de costos según elementos de tiempo, materiales e insumos predeterminados: se establecen por bases porcentuales estadísticas y se relacionan en presupuestos con antelación.
          tr
            td(rowspan="2") En concordancia con periodos de oferta y demanda según el tiempo.
            td Estructuras de costos según el período: los costos de materiales e insumos se correlacionan con periodos de tiempo en el transcurso del año dependiendo de oferta demanda del mercado, cosechas normalmente.
            td(rowspan="2") 
          tr
            td Estructuras de costos según el producto: correlacionan estos costos por el tipo de venta del producto final, crédito o contado lo más común. 
          tr(style="background-color: #F6F6F6")
            td(rowspan="2") En concordancia con el grado de control
            td Estructuras de costos controlables: materiales, materias primas e insumos bajo normativa de venta restringida por el gobierno. 
            td(rowspan="4") La infraestructura de costos, realmente es un valor monetario que se desprende del precio de venta de un producto o servicio prestado, es el resultado de los eventos que acompañan abastecer la oferta y demanda del mercado, satisfacer requerimientos y suplir necesidades de la humanidad, crear abundancia de altos parámetros de calidad y reabastecer la corporación de ingresos económicos para extender en el tiempo los procesos.
          tr(style="background-color: #F6F6F6")
            td Estructuras de costos no controlables: dependen de la oferta y demanda del mercado con la exigencia por parte de proveedores de establecer con tiempo prudente los pedidos.
          tr(style="background-color: #F6F6F6")
            td(rowspan="2") En concordancia con periodos contables, según su registro y cómputo
            td Estructuras de costos con asignación contable: desembolsos restringidos al número de unidades a producir, por el monto oneroso. 
          tr(style="background-color: #F6F6F6")
            td Estructuras de costos con carácter económico y técnico: calcula erogaciones para la compra de infraestructura tecnológica y digital con base en la posición económica de la compañía.
          tr
            td(rowspan="9") Estructuras de costos en concordancia con la aplicación de estrategias que acompañan la toma de decisiones.
            td Estructuras de costos relevantes: la colocación en los procesos productivos de pedidos especiales abren esta clase de costos que con la expresión emergencia se dispone de inmediato de recursos para la consecución de los mismos. 
            td(rowspan="9") 
          tr
            td Estructuras de costos irrelevantes: son adquiridos para dejarlos en inventario considerados como partícipes del ensamble de productos de línea en la empresa.
          tr
            td Estructuras de costos desembolsables: aquellos cuyo costo se debe pagar sin ningún tipo de ventajas ni de tiempo ni arancelaria.
          tr
            td Estructuras de costos de oportunidad: desembolsos realizados para adquirir inventarios que por subasta aparecen en el mercado a bajo costo.
          tr
            td Estructuras de costos de acuerdo con los cambios originados por un aumento o disminución en la actividad, eventos de orden público, pandemias, entre otros.
          tr
            td Estructuras de costos con diferenciales: se originan por cambios monetarios en el precio de adquisición, originados por inflación en los países.
          tr
            td Estructuras de costos decrementales: disminución de la demanda del producto.
          tr
            td Estructuras de costos con parámetros incrementales: aumento en la demanda de bienes y servicios.
          tr
            td Estructuras de costos sumergidos: costos ocultos en el proceso no se contaba con ellos.
          tr(style="background-color: #F6F6F6")
            td(rowspan="2") Estructuras de costos en concordancia a una disminución de actividades:
            td Sistemas estructurales de costos evitables: costos reales presentes en la manufactura de un bien o prestación de servicios, pero son eventuales y no se contaba con ellos. 
            td(rowspan="2") 
          tr(style="background-color: #F6F6F6")
            td Sistemas estructurales de costos inevitables: sí o sí están presentes en la hoja de relación de costos del producto o servicio.     
    p.mb-5 Algunos aspectos de relevancia presentes en los sistemas de costos son:  
    .row.justify-content-center
      .col-sm-4.col-md-12.col-lg-6.mb-4.mb-lg-0
        .bg8.p-4
          figure
            img(src='@/assets/curso/tema1/img27.png', alt='Texto que describa la imagen')
        div.bg9.p-4
          h4.text-center Costos fijos
          ul.lista-ul
            li 
              i.fas.fa-cog(style="color:#2C78DC")
              p.mb-0 La normativa de que toda estructura de costos fijos sea de fácil vigilancia en cuanto a su valor monetario.
            li 
              i.fas.fa-cog(style="color:#2C78DC")
              p.mb-0 Debe responder a la capacidad de carga de unidades que la planeación monta en el proceso productivo.
            li 
              i.fas.fa-cog(style="color:#2C78DC")
              p.mb-0 Su consecución debe estar a cargo de niveles administrativos y de planificación.
            li 
              i.fas.fa-cog(style="color:#2C78DC")
              p.mb-0 Su inventario relacionado forma parte del plan maestro de la producción.
            li   
              i.fas.fa-cog(style="color:#2C78DC")
              p.mb-0 Deben tener ruta crítica de adquisición identificada.
            li
              i.fas.fa-cog(style="color:#2C78DC")
              p.mb-0 Siempre realizar planes de trazabilidad permanente.
      .col-sm-4.col-md-12.col-lg-6.mb-5
        .bg8.p-4
          figure
            img(src='@/assets/curso/tema1/img26.png', alt='Texto que describa la imagen')
        div.bg9.p-4
          h4.text-center Costos variables
          ul.lista-ul
            li 
              i.fas.fa-cog(style="color:#2C78DC")
              p.mb-0 La normativa de que toda estructura de costos variable sea de fácil vigilancia en cuanto a su valor monetario.
            li 
              i.fas.fa-cog(style="color:#2C78DC")
              p.mb-0 La variabilidad del costo monetario debe ser mínima.
            li 
              i.fas.fa-cog(style="color:#2C78DC")
              p.mb-0 Su inventario relacionado forma parte del plan maestro de la producción.
            li 
              i.fas.fa-cog(style="color:#2C78DC")
              p.mb-0 Deben tener una ruta crítica de adquisición identificada.
            li 
              i.fas.fa-cog(style="color:#2C78DC")
              p.mb-0 Siempre realizar planes de trazabilidad permanente.
    .row.mb-5.align-items-center
      .col-lg-4.bg1.p-3
        h3.text-white.text-center.mb-0 Costos por órdenes de producción.
    p.mb-5 Una orden de producción registra los indicadores de los datos promedio de las cargas de los materiales e insumos acumulativos para el ensamble de una orden de fabricación, lo que facilita conocer el valor monetario de cada encargo u orden especial.
    .row.align-items-center.mb-5
      .col-lg-5
        figure
          img.mb-5(src='@/assets/curso/tema1/img38.png')(data-aos="fade-left")
      .col-lg-7(data-aos="fade-right")
        p.p-3.bg2 Planear producción por órdenes de fabricación es apropiado aun cuando la manufactura consiste en compromisos o procesos logísticos específicos y si los bienes son uniformes y el patrón de producción es estándar, en iguales circunstancias se utiliza cuando el tiempo de fabricación es relativamente largo y cuando el costo de venta final depende del costo de la producción. 
        p.mb-5 La mayor parte de los gastos indirectos de fabricación están dentro de la última categoría, aunque algunos, como los son colocar a punto las máquinas, no se estiman en ocasiones para efectos de costos de ingeniería, se sobrealimentan en forma irregular a las actividades relevantes del proceso por lo que se convierten en costos ocultos; por ello hay que tener en cuenta lo siguiente:
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Registrar datos en las órdenes de trabajo y/o hojas de costos")
        .row.align-items-center.justify-content-center
          .col-lg-8.mb-4.mb-lg-0
            p La gran mayoría de líderes de proceso deben tener claro que cada actividad no tiene un ritmo constante y se aplican estrategias de planificación cuidadosas para obtener el máximo provecho de los recursos: humanos, maquinaria y materias primas e insumos. El uso relevante del plan maestro de producción direcciona la ruta de trabajo; las órdenes de trabajo y/o hojas de costos se convierten en la base para establecer comunicación directa con los responsables de los procesos logísticos. 
            p.p-3.bg5 La orden de producción personaliza e interpreta instrucciones para la industria fabril y de manufactura, con respecto a las especificaciones del producto, el período de tiempo para la fabricación, recorrido de la producción, máquinas a utilizar, entre otros.
            p La orden de producción abrevia de tal manera y en forma ordenada y detallada los ítems de los componentes demandados por cada producto o servicio. La información para su elaboración se obtiene de:
            ul.lista-ul
              li 
                i.fas.fa-cog(style="color:#F14141")
                p.mb-0 Listado de materiales y sus consumos. 
              li 
                i.fas.fa-cog(style="color:#F14141")
                p.mb-0 Fichas de estándares de tiempo.
              li 
                i.fas.fa-cog(style="color:#F14141")
                p.mb-0 Valor de gastos indirectos de fabricación.
            p Los materiales insumos y recurso humano directo se cargan a cada orden fabricación conforme a la identificación de las requisiciones del cliente y de las cartulinas de tiempos; en tanto que los costos indirectos se aplican en función a las bases de distribución. La hoja de costos de ensamble se vuelve una ayuda permanente para personalizar los datos que atañen al proceso. 
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img39.png', style="width:350px").m-auto
      .py-3.py-md-4(titulo="Incluir el proceso de la contabilidad de los costos de fabricación.")
        .row.align-items-center.justify-content-center
          p Para este proceso se deben tener en cuenta algunos términos y acciones:
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img40.png', style="width:350px").m-auto
          .col-lg-8.mb-4.mb-lg-0
            ul.lista-ul
              li 
                i.fas.fa-cog(style="color:#F14141")
                p.mb-0 #[b Describir el producto]: bien o servicio que se manufactura o que se presta en la factoría. 
              li 
                i.fas.fa-cog(style="color:#F14141")
                p.mb-0 #[b Proceso de manufactura y/o ensamble]: se combinan varios subensambles.
              li 
                i.fas.fa-cog(style="color:#F14141")
                p.mb-0 #[b Protocolo de subensamble]: parte activa de un ensamble
              li 
                i.fas.fa-cog(style="color:#F14141")
                p.mb-0 #[b Componentes, insumos, partes]: se adelanta su producción para integrarlos a otros procesos.
              li 
                i.fas.fa-cog(style="color:#F14141")
                p.mb-0 #[b Piezas]: componentes semielaborados o sin procesar 
              li 
                i.fas.fa-cog(style="color:#F14141")
                p.mb-0 #[b Órdenes de mejoras]: infraestructura digital y procedimental para reordenar procesos y procedimientos.
    .row.mb-2.align-items-center
      .col-lg-3.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Costos por procesos
    .bg10             
      .row.align-items-center.mb-5
        .col-lg-8(data-aos="fade-right")
          p Un proceso es una organización o sección de la empresa en la cual se realiza un trabajo específico, técnico y repetitivo. Se emplean términos como: secciones, centros de liderazgo, manual de funciones y operaciones, centros de costos, entre otros. Los sistemas de producción pueden ser flexibles versátiles y emplearse para el ensamble de muchas referencias. De igual manera, cualquier bien puede pasar por secciones distintas o varias áreas. 
          p El plan maestro de producción depende de las condiciones y técnicas del diseño especializadas como son:
          ul.lista-ul
            li 
              i.fas.fa-cog(style="color:#F14141")
              p.mb-0 Emplear en factorías procesos continuos y de línea en las que se transforman materias primas en productos de alto valor agregado. 
            li 
              i.fas.fa-cog(style="color:#F14141")
              p.mb-0 En un excelente plan maestro de producción, los sistemas arrojan productos de línea en altas cantidades, donde se consume un número significativo de materiales e insumos, elevando el empleo de recurso humano calificado, generando reactivación económica en el sector y productividad para la empresa.
            li 
              i.fas.fa-cog(style="color:#F14141")
              p.mb-0 Obtener el valor del costo unitario se hace mediante un ponderado entre la sumatoria de los costos gastados por las dependencias o secciones y/o procesos en período específicos de tiempo, y las unidades producidas. 
            li 
              i.fas.fa-cog(style="color:#F14141")
              p.mb-0 Sistema de fácil comprensión, simple, seguro y económico, porque todas las actividades son grupales. 
        .col-lg-4
          figure
            img.mb-5(src='@/assets/curso/tema1/img41.png')(data-aos="fade-left")
    .row.mb-2.align-items-center
      .col-lg-7.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Inventario de producto en proceso y los costos de producción
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-4.mb-4.mb-lg-0
        img(src='@/assets/curso/tema1/img42.svg').m-auto
      .col-lg-8
        p Establecer el costo del inventario de productos de manufactura en proceso, se familiariza con el valor administrativo y económico del proceso, que este no acaba cuando se ubica en un estante y no finaliza cuando pasa a otra área u otro proceso de producción. 
        p.p-3.bg5 Norma de oro, monetizar y calcular valores de los distintos inventarios en las diferentes áreas y sumarse juntos para constituir el inventario total de la empresa, determina que los altos costos administrativos de trabajos en proceso, en ocasiones suelen llevarse toda la utilidad de la compañía relevante en la lectura del balance general.
    .row.mb-2.align-items-center
      .col-lg-4.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 Costos predeterminados
    .row.justify-content-center(data-aos="fade-left").mb-5
      p El valorizar los tributos de los componentes que se registran e individualizan en cada planilla u orden de pedido, viabiliza estar al tanto del costo de cada pedido u orden de fabricación. Es sustancialmente conveniente cuando la elaboración logística de bienes y servicios radica en actividades o acciones especiales, la realidad que se busca es procesar materias primas para que los resultados obtenidos sean con parámetros de calidad semejantes y el modelo de producción empleado sea estandarizado o perenne. 
      p Conservar los estimados en tiempos y reutilizar este histórico encamina a elaborar una unidad de producto en congruencia con lo planificado, conserva los costos establecidos y el costo de valor de venta depende marcadamente de lo que invertimos económicamente en los costos de la producción. 
      .col-lg-10.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img.img-t(src='@/assets/curso/tema1/img43.svg' alt='AvatarTop').mx-auto
          .tarjeta.tarjeta--azul
            .p-4
              p.mt-4 Los costos predeterminados se utilizan en corporaciones que ejecutan actividades personalizadas en especial, por encargo de compradores; guardar inventario para rotarlo en ocasiones especiales y operar en esta circunstancia da ventajas competitivas en las que, las empresas salvaguardan las inversiones que realizan. 
      .col-lg-10.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img.img-t(src='@/assets/curso/tema1/img44.svg' alt='AvatarTop').mx-auto
          .tarjeta.tarjeta--azul
            .p-4
              p.mt-4 En su totalidad los costos predeterminados de manufactura, se establecen como estrategia corporativa, se posicionan integrando una serie de salvaguardas para que los procesos productivos no se estacionen y no causan bajas en el inventario, no se emplee más del tiempo estimado y la entrega al cliente se conserve con los parámetros pactados. 
      .col-lg-10.mb-4
        .tarjeta-avatar-b.mb-0.h-100
          .tarjeta-avatar-b__img
            img.img-t(src='@/assets/curso/tema1/img45.svg' alt='AvatarTop').mx-auto
          .tarjeta.tarjeta--azul
            .p-4
              p.mt-4 Integrando la lista de los costos predeterminados se encuentran los costos de mantenimiento; precisamente predeterminar estos comportamientos, son esencialmente ventajosos para la corporación, puesto que anticiparse a problemas logísticos garantiza el buen funcionamiento de las diferentes secciones de la empresa.
    Separador
    #t_1_6
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Cálculo de valor minuto en procesos de manufactura
    .row.justify-content-center.align-items-center(data-aos="fade-left").mb-5
      .col-lg-2.mb-4
        img.img-t(src='@/assets/curso/tema1/img46.svg' alt='AvatarTop').mx-auto
      .col-lg-10
        p Entender la composición de los costos del valor minuto y su importancia en las actividades económicas de la empresa, es conocer el significado de los costos logísticos y su comportamiento en la cadena de suministro. Para entender el concepto de valor minuto es necesario tener presente la idea de costos generales de producción, estos integran costos y gastos de la compañía.
        p Definimos el valor minuto como la variable que obtenemos del resultado del aporte del recurso de mano de obra directa y se calcula de la siguiente manera: 
    .row.mb-2.align-items-center
      .col-lg-4.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 ¿Cómo se calcula el valor minuto?
    .row.mb-5
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/aWe16wi-uk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            
        

      
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
