<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Verificación de conformidad SPT
    p.mb-3(data-aos="fade-left") Se invita a ver el siguiente recurso, allí encontrará la verificación de conformidad SPT.

    ul.lista-ul--color(data-aos="fade-left")
      li 
        i.fas.fa-caret-right
        | <b>Los requisitos de producto establecidos para SPT en el numeral 15.1 del RETIE que se deben verificar son:</b>

    .row.justify-content-center
      .col-lg-10.p-4.mb-4(style="background-color:#E1D2FE" data-aos="fade-right")
        p <b>Certificado de producto de electrodos de puesta a tierra acorde al numeral 15.3.1.</b> El calibre mínimo debe ser seleccionado de acuerdo con el nivel de tensión de la instalación. Para baja tensión acorde a la <strong>tabla 250.94 de la NTC 2050</strong>, como se ilustra a continuación: 

    .row.justify-content-center
      .col-lg-10.p-4
        .titulo-sexto.color-acento-contenido.mb-1
          <b>Tabla 1.</b> <i>Conductor del electrodo de puesta a tierra para sistemas de c.a.</i>
        figure#introduccion_img(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/1.png')

    .row.justify-content-center
      .col-10.p-4
        p.mb-3.mt-3(data-aos="fade-left") También puede ser seleccionado acorde a la ecuación establecida en la norma IEC 60364-5-54:  
    
    .row.justify-content-center.align-items-center
      .col-lg-3.col-md-4.p-4
        figure#introduccion_img(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/2.svg')
      .col-8.p-4
        p(data-aos="fade-left") Donde A es el área mínima de la sección transversal del conductor en [mm²], I el valor eficaz de la corriente de falla en [A] y t el tiempo de despeje de la falla que no debe ser superior a 5 segundos. Se debe seleccionar el calibre de conductor con valor de área más cercano superior al valor del área calculado. 
    
    .row.justify-content-center
      .col-10.p-4
        p El valor de K se calcula con:
    
    .row.justify-content-center.align-items-center
      .col-md-4.p-4
        figure#introduccion_img(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/3.svg')
      .col-1.p-4
        p Dónde:
      .col-lg-6.col-md-7.p-4
        .titulo-sexto.color-acento-contenido.mb-1
          <b>Tabla 2.</b> <i>Temperaturas inicial y final del conductor.</i>
        figure#introduccion_img(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/4.png')
          figcaption.text-center ϴi , ϴf temperaturas inicial y final del conductor.

    .row.justify-content-center
      .col-10.p-4
        p.mb-3.mt-3(data-aos="fade-left") Para media, alta y extra alta tensión el calibre mínimo debe ser seleccionado acorde a la ecuación establecida en la norma ANSI/IEEE80:
    
    .row.justify-content-center.align-items-center
      .col-lg-3.col-md-4.p-4
        figure#introduccion_img(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/5.svg')
      .col-8.p-4
        p(data-aos="fade-left") Donde A es el área mínima de la sección transversal del conductor en [mm²], I el valor eficaz de la corriente de falla en [A] y t el tiempo de despeje de la falla que no debe ser superior a 5 segundos. Se debe seleccionar el calibre de conductor con valor de área más cercano superior al valor del área calculado. 

    .row.justify-content-center
      .col-10.p-4
        p(data-aos="fade-left") El valor de Kf se selecciona de la #[strong tabla 15.3 del RETIE], como se muestra a continuación:

    .row.justify-content-center 
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-1
          <b>Tabla 3.</b> <i>Constantes de materiales de la norma IEEE 80.</i>
        figure#introduccion_img(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/6.png')

    .row.justify-content-center
      .col-10.p-4.mb-4(style="background-color:#E1D2FE" data-aos="fade-right")
        p.mb-0 Certificado de producto de conductor a tierra y de protección acorde a numeral 20.2. El calibre mínimo debe ser seleccionado de acuerdo con el nivel de tensión de la instalación. Para baja tensión acorde a #[strong tabla 250.95 de la NTC 2050]. 
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-1
          <b>Tabla 4.</b> <i>Calibre mínimo de los conductores de puesta a tierra de equipos para puesta a tierra de canalizaciones y equipos.</i>
        figure#introduccion_img(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/7.png')

    .row.justify-content-center.align-items-center
      .col-md-3
          figure#introduccion_img(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/8.png')
      .col-lg-7.p-4
          .cajon.color-acento-botones.p-4.mb-4
            p Para media, alta y extra alta tensión, el calibre mínimo debe ser seleccionado de forma tal que su temperatura no supere la del aislamiento de los conductores activos alojados en la misma canalización, acorde al capítulo 9 de la IEEE 242.
       
    .row.justify-content-center
      .col-lg-10.p-4
        p Los requisitos de instalación establecidos para SPT en el #[b numeral 15.4 del RETIE] que se deben verificar son:

    .row.justify-content-center.align-items-center
      .col-10.mt-3
        .tarjeta.tarjeta--azul.p-3(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-md-10.p-2  
              p.text-center El valor de la resistencia de puesta a tierra no debe superar los siguientes valores máximos:
            .col-md-10.p-2
              .titulo-sexto.color-acento-contenido.mb-1
                <b>Tabla 5.</b> <i>Valores de referencia para resistencia de puesta a tierra.</i>
              figure#introduccion_img(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/9.png')

    .row.justify-content-center.align-items-center
      .col-10.mt-5
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-5
            .tarjeta.tarjeta--azul.p-5(data-aos="zoom-in")
              p.text-small Para medir la resistencia de puesta a tierra, RETIE sugiere el método de la caída de potencial usando un telurómetro así:
                figure#introduccion_img(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema3/10.svg')
          .col-lg-5.mb-5
            .tarjeta.tarjeta--azul.p-5(data-aos="zoom-in")
              p.text-small En donde según IEEE81 para obtener 95 % de precisión se debe escoger como mínimo igual a 6.5 veces la mayor dimensión de la puesta a tierra a medir.
                figure#introduccion_img(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema3/11.png')


</template>

<script>
export default {
  name: 'Tema3',
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
