<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-4 En este componente se abordan aquellos requisitos de verificación que se establecen desde RETIE y RETILAP, especialmente desde la “declaración del cumplimiento” y el “dictamen de inspección”, en tanto cualquier procedimiento de instalación eléctrica debe cumplir con unas características específicas que se reflejan en el desempeño de un sistema de gestión de energía. Este proceso de verificación se desarrolla en tres etapas que requieren la aplicación de contenidos desarrollados con anterioridad así: verificación de valores de variables con el uso de instrumentos de medida, verificación del cumplimiento de los requisitos funcionales identificados como relevantes según el tipo de instalación y/o sistemas de alumbrado y verificación de las características requeridas por los productos usados en las instalaciones y/o sistemas de alumbrado.
    //- .row.justify-content-center.align-items-center.back-img(:style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}")     
    //-   .col-md-8.p-1
    //-     p.text-white.text-small(data-aos="fade-right") En este componente se abordan aquellos requisitos de verificación que se establecen desde RETIE y RETILAP, especialmente desde la “declaración del cumplimiento” y el “dictamen de inspección”, en tanto cualquier procedimiento de instalación eléctrica debe cumplir con unas características específicas que se reflejan en el desempeño de un sistema de gestión de energía. Este proceso de verificación se desarrolla en tres etapas que requieren la aplicación de contenidos desarrollados con anterioridad así: verificación de valores de variables con el uso de instrumentos de medida, verificación del cumplimiento de los requisitos funcionales identificados como relevantes según el tipo de instalación y/o sistemas de alumbrado y verificación de las características requeridas por los productos usados en las instalaciones y/o sistemas de alumbrado.
    //-   .col-md-3.p-4
    //-     figure#introduccion_img(data-aos="fade-right")
    //-       img(src='@/assets/curso/intro/2.svg')

    figure.mt-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/fhYuMFa2bFo" title="Verificación de requisitos de instalaciones eléctricas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-5.mt-5(data-aos="fade-left") Antes de iniciar el recorrido por el componente se invita a que descargue el documento de cumplimiento.

    .row.justify-content-center.mb-5
      .col-12.col-lg-12
        .tarjeta.color-primario.p-4(data-aos="flip-up")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/intro/3.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.text-small Declaración de cumplimiento del reglamento técnico de instalaciones eléctricas. 
                  p.text-small Este documento muestra la Declaración de cumplimiento del reglamento técnico de instalaciones eléctricas” (numeral 34.9 RETIE) y “Declaración de cumplimiento del reglamento técnico de instalaciones de iluminación y alumbrado público” (numeral 8.20.4.1).
                .col-sm-2
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/pag200_RETIE.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5(data-aos="fade-left") Adicional a la declaración de cumplimiento, las instalaciones que cumplen con las condiciones establecidas en los numerales 34.4 para RETIE y 820.4.2.a para RETILAP requieren un dictamen expedido por un organismo de inspección acreditado por el ONAC, como mecanismo de certificación de tercera parte que valide la declaración del proveedor. Estos dos documentos, la declaración de cumplimiento y el dictamen de inspección se conocen como “certificación plena”. Va a revisar con más detalle el procedimiento de inspección de instalaciones para la verificación de conformidad con RETIE y RETILAP de las instalaciones eléctricas y de iluminación.                    
    
    .row.justify-content-center
      .col-12.col-md-10e(data-aos="zoom-down")
        .titulo-sexto.color-acento-contenido
          <b>Figura 1.</b> <i>Declaración de cumplimiento</i>
      .col-12.col-md-10
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/intro/4.svg', alt='')
    
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
