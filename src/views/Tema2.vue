<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 2
      h1 Presupuestos

    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-7
        p Organizar los costos generales de producción o de la prestación de un servicio, mediante la construcción de un presupuesto resulta relevante para ordenar financieramente la empresa. El presupuesto permite planificar estrategias, desarrollar habilidades, utilizar eficientemente los recursos y presupuestar de manera efectiva la empresa, aumentando la posibilidad de lograr indicadores matemáticos trazados, proyectar sostenibilidad futura y hablar de competitividad en el sector productivo.
        p La aplicación y versatilidad de la construcción de un presupuesto está dada en:
        .bg5.p-3.mb-5.mb-lg-0
         
          ul.lista-ul
            li 
              i.fas.fa-cog(style="color:#F14141")
              | Diseñar toda la política de planificación estratégica y de acciones de mejora continua en una empresa. 
            li 
              i.fas.fa-cog(style="color:#F14141")
              | La elaboración del paso a paso en el montaje de proyectos.
            li 
              i.fas.fa-cog(style="color:#F14141")
              | Elaborar proyectos de información documentada para implementar estrategias de mejora continua en áreas o departamentos. 
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img1.png').m-auto(data-aos="fade-right")
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Esto quiere decir que un presupuesto es adelantarse o anticiparse en establecer el costo total de un proyecto; es el pre, el antes o suponer con anticipación.   
      .col-md-5.col-12.px-0
        figure
          img(src='@/assets/curso/tema2/img2.png')(data-aos="fade-left")
      .col-md-7.col-12.bg21.p-4(data-aos="fade-right")
        p Según <em>Westwood</em> (1991), un presupuesto es un documento que traduce los planes en dinero; dinero que necesita gastarse para conseguir las actividades planificadas (gasto) y dinero que necesita generarse para cubrir los costes de finalización del trabajo (ingresos). Consiste en una estimación o en conjeturas hechas con fundamento sobre las necesidades en términos monetarios para realizar un trabajo. 
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Conceptos generales de los presupuestos 
    .row.mb-4.align-items-center(data-aos="fade-left")
      .col-lg-6
        p De acuerdo con <em>Shapiro</em> (2001), cuando se está desarrollando un presupuesto no se debe improvisar a medida que se realiza. Al igual que en todo buen ejercicio de administración de una organización, un buen ejercicio presupuestario implica claridad de propósito, planificación detallada y pensamiento considerable. 
        p.bg5.p-3  Estas son algunas de las preguntas para responder a lo largo de las distintas fases de preparación presupuestaria y el desarrollo real del presupuesto:
        p ¿Se pudo haber gastado menos el año pasado y aún haber conseguido los mismos o mejores resultados?
        p ¿Se ha despilfarrado dinero en el pasado? Si fuera así, ¿se puede evitar en el futuro?
      .col-lg-4.mb-4.mb-lg-0.d-flex.justify-content-center.align-items-center
        figure
          img.img-t(src='@/assets/curso/tema2/img3.svg').mx-auto(data-aos="fade-right")
    .bg4
      .row.mb-4.align-items-center(data-aos="fade-left")
        .col-lg-4.mb-4.mb-lg-0.d-flex.justify-content-center.align-items-center
          figure
            img(src='@/assets/curso/tema2/img4.png').m-auto(data-aos="fade-right")
        .col-lg-7
          p.p-3  Antes de empezar a desarrollar un presupuesto, se debe prestar especial atención a los siguientes temas, pues constituyen una extensión del proceso de planificación en el que se basa toda la elaboración del presupuesto: 
          ul.lista-ul
            li 
              i.fas.fa-cog(style="color:#F14141")
              | ¿Qué es un presupuesto, quién debería participar en su elaboración y por qué se presupuesta?
            li 
              i.fas.fa-cog(style="color:#F14141")
              | Los planes operacionales.
            li 
              i.fas.fa-cog(style="color:#F14141")
              | Cálculo de costos.
            li 
              i.fas.fa-cog(style="color:#F14141")
              | Fuentes de financiación.
            
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Clases de presupuestos
    p Los presupuestos pueden clasificarse desde varios puntos de vista: 
    .row.align-items-center.mb-5
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Según su flexibilidad ")
            .col-12
              .row.align-items-center
                .col-md-12.align-items-center
                  ul.lista-ul.ps-5
                    li 
                      i.fas.fa-cog(style="color:#F14141")
                      p.mb-0 Rígidos.
                    li 
                      i.fas.fa-cog(style="color:#F14141")
                      p.mb-0 Estáticos.
                    li 
                      i.fas.fa-cog(style="color:#F14141")
                      p.mb-0 Fijos.
                    li 
                      i.fas.fa-cog(style="color:#F14141")
                      p.mb-0 Asignados. 
                  p.ps-5 Por lo general se elaboran para un solo nivel de actividad. Una vez alcanzado este, no se permiten los ajustes requeridos por las variaciones que sucedan. De este modo se efectúa un control anticipado sin considerar el comportamiento económico, cultural, político, demográfico o jurídico de la región donde actúa la empresa. Esta forma de control anticipado dio origen al presupuesto que tradicionalmente utilizaba el sector público.              
          .row(titulo="Flexibles o variables")
            .col-12
                .row.align-items-center
                  .col-md-12.align-items-center
                    p.ps-5 Los presupuestos flexibles o variables se elaboran para diferentes actividades y pueden adaptarse a las circunstancias que surjan en cualquier momento. Muestran los ingresos, costos y gastos ajustados al tamaño de operaciones manufactureras o comerciales. Tienen amplia aplicación en el campo de la presupuestación de los costos, gastos indirectos de fabricación, administrativos y ventas.                
          .row(titulo="Según el período que cubran")
            .col-12
              .row.align-items-center
                .col-md-12.align-items-center
                  p.ps-5 A corto plazo: los presupuestos se planifican para cumplir el ciclo de operaciones de un año.
                  p.ps-5 A largo plazo: en este campo se ubican los planes de desarrollo del Estado y de las grandes empresas. En el caso de los planes del Gobierno, el horizonte de planteamiento consulta el período presidencial establecido por normas constitucionales en cada país. Los lineamientos generales de cada plan suelen sustentarse en consideraciones económicas, como generación de empleo, creación de infraestructura, lucha contra la inflación, difusión de los servicios de seguridad social, fomento del ahorro, fortalecimiento del mercado de capitales, capitalización del sistema financiero o, como ha ocurrido recientemente, apertura mutua de los mercados internacionales.                          
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img5.png', alt='Texto que describa la imagen')
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Construcción de presupuestos
    .row.mb-4.justify-content-center.align-items-center(data-aos="fade-left")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img6.svg').m-auto(data-aos="fade-right")
      .col-lg-7
        p.mb-4 Siguiendo a <em>Shapiro</em> (2001), la elaboración de un presupuesto es una tarea difícil y responsable. La capacidad de una organización para conseguir lo que había planificado y para sobrevivir económicamente, depende del proceso presupuestario. Quienquiera que elabore el presupuesto debe:
        .bg21.p-3.mb-4
          ul.lista-ul
            li 
              i.fas.fa-cog(style="color:#F14141")
              | Comprender los valores, estrategia y planes de la organización o proyecto.
            li 
              i.fas.fa-cog(style="color:#F14141")
              | Comprender el significado de rentabilidad y coste-eficiente.
            li 
              i.fas.fa-cog(style="color:#F14141")
              | Comprender las implicaciones de generar y recaudar fondos.
        p A menudo es buena idea tener un equipo presupuestario en el que una sola persona haga un borrador del presupuesto y luego sea comentado y discutido por todo el equipo. Dentro de este equipo sería bueno que también participaran el director financiero y/o contable y el director del proyecto y/o director de la organización o departamento.
    p.mb-4 Determinar el #[span.txt-color2 presupuesto] dentro de la planificación de una empresa es importante, porque:
    .row.mb-2.justify-content-center
      .col-lg-5.bg1.p-3.mb-5
        h3.text-white.text-center.mb-0 LOS PRESUPUESTOS Y SU IMPORTANCIA
    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop')
        .tarjeta.color-primario5
          .p-4
            p.mb-0 El presupuesto indica cuánto dinero se necesita para llevar a cabo diferentes actividades.
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema2/img8.svg' alt='AvatarTop')
        .tarjeta.color-primario5
          .p-4
            p.mb-0 El presupuesto permite controlar los ingresos y gastos e identificar cualquier tipo de problemas.
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
        .tarjeta.color-primario5
          .p-4
            pmb-0 El presupuesto obliga a pensar rigurosamente sobre las consecuencias de la planificación de actividades. Hay momentos en los que la realidad del proceso presupuestario obliga a replantearse los planes de acción.
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
        .tarjeta.color-primario5
          .p-4
            p.mb-0 El presupuesto constituye una buena base para la contabilidad y transparencia financiera. Cuando todos pueden ver cuánto debería haberse gastado y recibido, se pueden plantear preguntas bien fundadas sobre discrepancias.
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
        .tarjeta.color-primario5
          .p-4
            p.mb-0 Si se utiliza de manera correcta, el presupuesto indica cuándo se necesitarán ciertas cantidades de dinero para llevar a cabo las actividades.
      .tarjeta-avatar.slyderF-media
        img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
        .tarjeta.color-primario5
          .p-4
            p.mb-0 No se puede recaudar dinero de donantes a menos que se tenga un presupuesto. Los donantes utilizan el presupuesto como base para decidir si lo que se requiere es razonable y está bien planificado.
    .row.mb-5.justify-content-center
      .col-10.bg5.p-4
        .row.align-items-center.justify-content-center
          .col-lg-11
            p.mb-5 Para profundizar en el tema de presupuestos, se sugiere ver el documento #[b Elaboración de un presupuesto por #[i Janet Shapiro] en el material complementario.]
          .col-lg-1.mb-3
            figure
              img.img-t(src='@/assets/curso/tema1/img80.svg').mx-auto(data-aos="fade-right")


    
      
  


</template>

<script>
export default {
  name: 'Tema2',
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
