<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white i 
          
      h1 Introducción
    .dual-txt-deco
      p.mb-5(data-aos="fade-right")(style="position: relative; z-index: 1;") En la actualidad un reducido número de industrias implementa infraestructuras tecnológicas nuevas, emergentes y sostenibles que les ayuda a reducir costos en general. No perfeccionar sistemas de control del factor humano y, más aún, la disminución en los indicadores matemáticos de eficiencia relacionados con el número de unidades o prestación de servicios, conlleva un reordenamiento de estrategias aplicadas en los procesos logísticos, lo que supone cambios obligatorios al interior de los sistemas de producción que, sin lugar a dudas, eleva los costos, los procesos y los procedimientos se vuelven poco versátiles, inflexibles y muy deficientes.
      p.mb-5 En el siguiente video se resalta la importancia del tema de costos y presupuestos para la planificación de la producción, el cual se tratará a lo largo de este componente formativo: 
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/MMXvQODLbLU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
       
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
