<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Verificación de conformidad RETIE

    p(data-aos="fade-left") La verificación de requisitos aplicables la realiza el inspector en dos etapas. Primero verifica los requisitos de los productos usados en la instalación mediante los certificados de producto expedidos por un organismo acreditado, seguidamente procede a verificar los requisitos de instalación mediante una lista de chequeo sugerida por RETIE, dependiendo del tipo de instalación. Para este caso se empleará la lista para instalaciones de uso final.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Certificados de producto

    p.mb-5(data-aos="fade-left") De acuerdo con el Artículo 33 del RETIE todos los productos listados en la tabla 2.1 de la página 10 que pretendan ser comercializados y usados en instalaciones eléctricas en Colombia deben demostrar el cumplimiento de los requisitos establecidos en el RETIE para cada uno de ellos, mediante un certificado de conformidad de producto expedido por un organismo de certificación de productos acreditado por el organismo de acreditación nacional de Colombia (ONAC) y según las normas ISO/IEC 17065 y 17067.

    .row.justify-content-end.align-items-end.back-img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.png')})`, 'background-repeat': 'no-repeat', 'background-size': 'cover'}")
      p.pt-3.text-small Para verificar la acreditación de un organismo como certificador de producto es necesario que consulte el Directorio oficial de acreditados del ONAC en el siguiente enlace: 
      .col-lg-6.p-2.mb-3.text-small(data-aos="fade-right")
        a.anexo.mb-3(href="https://onac.org.co/directorio-de-acreditados/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p ONAC - Búsqueda por esquema de acreditación.
        ul.lista-ul.mb-3
          li.px-5 
            i.fas.fa-check
            | Seleccionar el esquema de acreditación en la opción “Organismos de certificación de productos” (CPR).
          li.px-5
            i.fas.fa-check
            | Seleccionar en sector IAF (International Accreditation Forum) las opciones “19 Equipo eléctrico y óptico” o “25 Suministro de electricidad” según corresponda y luego buscar. Se presenta a continuación una imagen ilustrativa de la página:
        
        .titulo-sexto.color-acento-contenido.mb-1
          <b>Figura 2.</b> <i>Esquema de acreditación </i>
        figure
          img(src="@/assets/curso/temas/tema1/tema1-1.png")
          figcaption Nota: tomada de <a href="https://onac.org.co/directorio-de-acreditados/" target="_blank" style="color:blue">https://onac.org.co/directorio-de-acreditados/</a>
        p.mt-3 Una vez verificado el estado de acreditación del organismo que expide el certificado de producto se debe verificar en la página web de los organismos certificadores la validez del certificado de cada uno de los productos usados en la instalación.

    .row.justify-content-center.align-items-center
      .col-lg-6.mt-5.p-5(data-aos="fade-left")
          p.mb-5 Del listado de productos, los más comúnmente usados en instalaciones eléctricas de uso final, sin limitarse a ellos, son los siguientes ítems (la numeración se da de acuerdo con el RETIE): 
          a.anexo.mb-3(:href="obtenerLink('downloads/Certificado_de_Producto.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Certificado de Producto
      .col-lg-6.mt-5(data-aos="fade-right")
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/2.svg', alt='Texto que describa la imagen')

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Componentes dictamen de inspección

    p.mb-5(data-aos="fade-left") En el siguiente recurso verá los componentes del dictamen de inspección:

    .row.justify-content-center.align-items-center
      .col-lg-6
        LineaTiempoD.color-primario(data-aos="fade-right")
          .row(numero="1" titulo="RETIE. Formato 34.5")
            .col-md-12.mb-4.mb-md-0
              p.text-small.mb-3 RETIE. Formato 34.5 dictamen de inspección y verificación para instalaciones de uso final
              p.text-small.mb-5 Para la inspección de instalaciones de uso final RETIE anexa un formato específico, el 34.5 con el listado de condiciones mínimas que deben ser verificadas para este tipo de instalación. 
              a.anexo.mb-3(:href="obtenerLink('downloads/Anexo_General_Reglamento_Tecnico_de_Instalaciones_Electricas.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p RETIE. Formato 34.5
          .row(numero="2" titulo="RETIE. A.")
            .col-md-12.mb-4.mb-md-0
              p.text-small.mb-3 RETIE. A. Formato para instalaciones de uso final, áreas comunes de edificios mixtos, vivienda multifamiliar o comercios.
              p.text-small.mb-5 Sin embargo, los organismos de inspección han elaborado listas de verificación más detalladas, con el fin de identificar todos los requisitos aplicables al tipo de instalación y que su aplicación sea igual para todos los usuarios. A continuación lista detallada, parte A.
              a.anexo.mb-3(:href="obtenerLink('downloads/Lista_de_Comprobacion_AC.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p RETIE. A
          .row(numero="3" titulo="RETIE. B.")
            .col-md-12.mb-4.mb-md-0
              p.text-small.mb-3 RETIE. B. Formato para instalaciones de uso final, áreas comunes de edificios mixtos, vivienda multifamiliar o comercios.
              p.text-small.mb-5 Lista detallada para instalaciones de uso final, áreas comunes de edificios mixtos, vivienda multifamiliar o comercios, parte B.
              a.anexo.mb-3(:href="obtenerLink('downloads/Lista_de_Comprobacion_Pagina_2_de_4.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p RETIE. B
          .row(numero="4" titulo="RETIE.C.")
            .col-md-12.mb-4.mb-md-0
              p.text-small.mb-3 RETIE.C. Formato para instalaciones de uso final, áreas comunes de edificios mixtos, vivienda multifamiliar o comercios.
              p.text-small.mb-5 Lista detallada para instalaciones de uso final, áreas comunes de edificios mixtos, vivienda multifamiliar o comercios, parte C.
              a.anexo.mb-3(:href="obtenerLink('downloads/Lista_de_Comprobacion_Pagina_3_de_4.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p RETIE. C
          .row(numero="5" titulo="RETIE.D.")
            .col-md-12.mb-4.mb-md-0
              p.text-small.mb-3 RETIE. D. Formato para instalaciones de uso final, áreas comunes de edificios mixtos, vivienda multifamiliar o comercios.
              p.text-small.mb-5 Lista detallada para instalaciones de uso final, áreas comunes de edificios mixtos, vivienda multifamiliar o comercios, parte D.
              a.anexo.mb-3(:href="obtenerLink('downloads/Lista_de_Comprobacion_Pagina_4_de_4.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p RETIE. D
      .col-lg-6.p-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/3.png', alt='Texto que describa la imagen')
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
