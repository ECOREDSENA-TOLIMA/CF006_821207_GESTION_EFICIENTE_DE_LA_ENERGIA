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
        p <b>Certificado de producto de electrodos de puesta a tierra acorde al numeral 15.3.1.</b> El calibre mínimo debe ser seleccionado de acuerdo con el nivel de tensión de la instalación. Para baja tensión acorde a la tabla 250.94 de la NTC 2050, como se ilustra a continuación: 

    .row.justify-content-center
      .col-lg-10.p-4
        figure#introduccion_img(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/1.svg')

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
        figure#introduccion_img(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/4.svg')
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
        p(data-aos="fade-left") El valor de Kf se selecciona de la tabla 15.3 del RETIE, como se muestra a continuación:

    .row.justify-content-center 
      .col-lg-10.p-4
        figure#introduccion_img(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/6.svg')

    .row.justify-content-center
      .col-10.p-4.mb-4(style="background-color:#E1D2FE" data-aos="fade-right")
        p Certificado de producto de conductor a tierra y de protección acorde a numeral 20.2. El calibre mínimo debe ser seleccionado de acuerdo con el nivel de tensión de la instalación. Para baja tensión acorde a tabla 250.95 de la NTC 2050. 
    
    .row.justify-content-center
      .col-lg-8.p-4
        figure#introduccion_img(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/7.svg')

    .row.justify-content-center.align-items-center
      .col-lg-2.p-4
          figure#introduccion_img(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/8.svg')
      .col-lg-6.p-4
          .cajon.color-acento-botones.p-4.mb-4
            .h5 Cajón texto color
            p Para media, alta y extra alta tensión, el calibre mínimo debe ser seleccionado de forma tal que su temperatura no supere la del aislamiento de los conductores activos alojados en la misma canalización, acorde al capítulo 9 de la IEEE 242.
       
    .row.justify-content-center
      .col-lg-10.p-4
        p Los requisitos de instalación establecidos para SPT en el numeral 15.4 del RETIE que se deben verificar son:

    .row.justify-content-center.align-items-center
      .col-10.mt-5 
        .tarjeta.tarjeta--azul.p-3(data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-lg-10.p-2  
              p.text-center El valor de la resistencia de puesta a tierra no debe superar los siguientes valores máximos:
            .col-lg-8.p-2
              figure#introduccion_img(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema3/9.svg')

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
              p.text-small En donde según IEEE81 para obtener 95% de precisión se debe escoger como mínimo igual a 6.5 veces la mayor dimensión de la puesta a tierra a medir
                figure#introduccion_img(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema3/11.svg')


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
