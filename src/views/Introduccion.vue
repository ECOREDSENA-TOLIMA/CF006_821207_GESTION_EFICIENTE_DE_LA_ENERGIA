<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.back-img(:style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}")     
      .col-lg-6.p-1
        p.text-white.text-small(data-aos="fade-right") En este componente se abordan aquellos requisitos de verificación que se establecen desde retie y retilap, especialmente desde la “declaración del cumplimiento” y el “dictamen de inspección”, en tanto cualquier procedimiento de instalación eléctrica debe cumplir con unas características específicas que se reflejan en el desempeño de un sistema de gestión de energía. Este proceso de verificación se desarrolla en tres etapas que requieren la aplicación de contenidos desarrollados con anterioridad así: verificación de valores de variables con el uso de instrumentos de medida, verificación del cumplimiento de los requisitos funcionales identificados como relevantes según el tipo de instalación y/o sistemas de alumbrado y verificación de las características requeridas por los productos usados en las instalaciones y/o sistemas de alumbrado.
      .col-lg-3.p-4.offset-lg-1
        figure#introduccion_img(data-aos="fade-right")
          img(src='@/assets/curso/intro/2.svg')

    .col-12
      figure.mt-5(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
                  p.text-small Este documento muestra la Declaración de cumplimiento del reglamento técnico de instalaciones eléctricas” (numeral 34.9 retie) y “Declaración de cumplimiento del reglamento técnico de instalaciones de iluminación y alumbrado público” (numeral 8.20.4.1).
                .col-sm-2
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/pag200 RETIE.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    p.mb-5(data-aos="fade-left") Adicional a la declaración de cumplimiento, las instalaciones que cumplen con las condiciones establecidas en los numerales 34.4 para retie y 820.4.2.a para retilap requieren un dictamen expedido por un organismo de inspección acreditado por el ONAC, como mecanismo de certificación de tercera parte que valide la declaración del proveedor. Estos dos documentos, la declaración de cumplimiento y el dictamen de inspección se conocen como “certificación plena”. Va a revisar con más detalle el procedimiento de inspección de instalaciones para la verificación de conformidad con retie y retilap de las instalaciones eléctricas y de iluminación.                    
    
    .row.justify-content-center
      .col-10
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/intro/4.svg', alt='Texto que describa la imagen')
    
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
