<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Verificación de conformidad retilap

    p.mb-5(data-aos="fade-left") La verificación de requisitos aplicables para los sistemas de iluminación la realiza un organismo de inspección competente y acreditado, a través de dos actividades principales. Primero verifica los requisitos de los productos usados en la instalación mediante los certificados de producto expedidos por un organismo acreditado, posteriormente procede a verificar los requisitos de instalación, mediante una lista de chequeo sugerida por el retilap dependiendo del tipo de sistema de iluminación.
    
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Certificados de producto

    .row.justify-content-center.align-items-center
      .col-lg-6
        .cajon.color-acento-contenido.px-5.py-4.mb-4(data-aos="zoom-in")
          p.mb-0 De manera similar a los productos especificados por el retie y de acuerdo con el numeral 820.3 del retilap, los aparatos y equipos de iluminación mencionados en el reglamento deben contar con una certificación de conformidad de producto otorgada por una organización independiente y calificada para tal fin. A su vez, dicha organización debe estar acreditada por el Organismo Nacional de Acreditación de Colombia (ONAC). 
      .col-lg-6
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/1.png', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center 
      .col-10.mt-5
        .tarjeta.tarjeta--azul.p-3(data-aos="zoom-in")
          p <b>Para conocer si una organización que emite la certificación de producto se encuentra acreditada por la ONAC</b> se debe consultar el Directorio Oficial de Acreditados en el siguiente enlace:  https://onac.org.co/directorio-de-acreditados/

          ol.lista-ol--cuadro.px-3
            li 
              .lista-ol--cuadro__vineta
                span 1
              | <b>Seleccionar</b> en esquema de acreditación la opción <b>“Organismos de certificación de productos” (CPR).</b>
            li 
              .lista-ol--cuadro__vineta
                span 2
              | <b>Seleccionar</b> en sector <b>IAF (International Accreditation Forum)</b> <b>“19 Equipo eléctrico y óptico”</b>  las opciones <b>“25 Suministro de electricidad”</b> según corresponda y luego buscar.

            li 
              .lista-ol--cuadro__vineta
                span 3
              | <b>Seleccionar</b> en el apartado <b>categoría de producto / proceso o servicio</b> (codificación nace) la opción <b>“27.40 Lámparas y aparatos eléctricos de iluminación”.</b>
          .row.justify-content-center 
            .col-lg-10.mb-4.mt-4    
              figure#introduccion_img(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/2.svg')

          ol.lista-ol--cuadro.px-3
            li 
              .lista-ol--cuadro__vineta
                span 4
              | <b>Posteriormente, dé clic en el ícono buscar</b> en la parte inferior y se mostrará a la fecha, el listado de organizaciones acreditadas para la emisión de certificados de conformidad de producto. A continuación, se presenta una imagen  como ejemplo:

          .row.justify-content-center 
            .col-lg-10.mt-4    
              figure#introduccion_img(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/3.svg')

    p.mt-4(data-aos="fade-left") Por lo general, en un certificado de producto se encuentra la siguiente información:

    .row.justify-content-center 
      .col-12.mt-4
        .tarjeta.tarjeta--azul.p-4(data-aos="zoom-in")
          .row.justify.align-items-center
            .col-8
              ul.lista-ul--color.text-small.px-0
                li 
                  i.fas.fa-check
                  | Nombre de la empresa u organización que realiza la acreditación del producto.
                li 
                  i.fas.fa-check
                  | Nombre y código del certificado, por ejemplo, Certificado de conformidad de producto EL-CA-XXXX.
                li 
                  i.fas.fa-check
                  | Nombre, descripción y referencia del producto certificado.
                li 
                  i.fas.fa-check
                  | Nombre del esquema de certificación, por ejemplo, ISO/IEC 17067.
                li 
                  i.fas.fa-check
                  | Datos del titular del certificado: nombre del fabricante o comercializador en Colombia, NIT, dirección y ciudad.
                li 
                  i.fas.fa-check
                  | Nombre de la Resolución retilap a la que el producto presenta la conformidad.
                li 
                  i.fas.fa-check
                  | Nombre, cargo y firma de la persona autorizada por la empresa acreditadora.
                li 
                  i.fas.fa-check
                  | Fecha de toma de decisión de certificación, fecha de emisión y fecha de vencimiento.
                li 
                  i.fas.fa-check
                  | Sello visible de acreditación de la ONAC.
            .col-lg-4    
              figure#introduccion_img(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema2/4.svg')

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Componentes del dictamen de inspección

    p.mb-3(data-aos="fade-left") De acuerdo con el retilap los sistemas de iluminación que se encuentran referenciados en el reglamento tienen la obligación de obtener un dictamen de inspección certificada por un organismo de inspección acreditado por la ONAC.
    p.mb-3(data-aos="fade-left") De acuerdo con el numeral 820.4.2.a del retilap, los sistemas de iluminación que deben obtener dictamen de inspección son:

    .tarjeta.tarjeta--azul.p-4(data-aos="zoom-in")
      PasosB.color-acento-contenido
        .row.justify-content-center(titulo="")
          .col-md-6.mb-4.mb-md-0.px-5
            h5 Dictamen de inspección 1:
            p Instalaciones de alumbrado público categorizadas en los niveles B y C de conformidad con la tabla 610.2 del presente Anexo general. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/5.svg', alt='alt')

        .row.justify-content-center(titulo="")
          .col-md-6.mb-4.mb-md-0.px-5
            h5 Dictamen de inspección 2:
            p Instalaciones de iluminación donde en una misma área cerrada y cubierta se puedan concentrar simultáneamente más de 50 personas, tales como almacenes, centros comerciales, sitios de recreación, espectáculos públicos, centros de salud, hospitales, clínicas, hoteles, auditorios, bibliotecas, estaciones y terminales de transporte, centros de reclusión.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/6.svg', alt='alt')

        .row.justify-content-center(titulo="")
          .col-md-6.mb-4.mb-md-0.px-5
            h5 Dictamen de inspección 3:
            p Centros de enseñanza, salones de clase y laboratorios.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/7.svg', alt='alt')

        .row.justify-content-center(titulo="")
          .col-md-6.mb-4.mb-md-0.px-5
            h5 Dictamen de inspección 4:
            p Los sitios de esparcimiento tales como bares, discotecas, casinos, en donde se puedan concentrar más de 50 personas, deben certificar plenamente los sistemas de alumbrado de emergencia, así como las condiciones de seguridad de las instalaciones de iluminación. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/8.svg', alt='alt')

        .row.justify-content-center(titulo="")
          .col-md-6.mb-4.mb-md-0.px-5
            h5 Dictamen de inspección 5:
            p Edificaciones residenciales o similares objeto de una misma licencia o permiso de construcción donde se puedan concentrar más de 100 personas. En este caso, la escogencia de las áreas a inspeccionar se podrá hacer usando las técnicas de muestreo recomendadas en procesos de certificación. La certificación será del conjunto o edificación.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/9.svg', alt='alt')

        .row.justify-content-center(titulo="")
          .col-md-6.mb-4.mb-md-0.px-5
            h5 Dictamen de inspección 6:
            p Viviendas individuales y comercios de áreas construidas mayores a 500 m2.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/10.svg', alt='alt')

        .row.justify-content-center(titulo="")
          .col-md-6.mb-4.mb-md-0.px-5
            h5 Dictamen de inspección 7:
            p Sistemas de iluminación de fachadas y monumentos y demás sitios de interés público.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/11.svg', alt='alt')

        .row.justify-content-center(titulo="")
          .col-md-6.mb-4.mb-md-0.px-5
            h5 Dictamen de inspección 8:
            p Industria y oficinas con más de 30 puestos de trabajo o 500 m2 de área iluminada.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/12.svg', alt='alt')

    .row.justify-content-center
      .col-10.mt-5  
        .tarjeta.tarjeta--azul.p-3(data-aos="zoom-in")  
          p <b>Declaración del constructor del sistema de iluminación.</b> Consiste en un registro considerado como documento público, donde la persona competente responsable de la construcción del sistema de iluminación declara bajo la gravedad de juramento el cumplimiento del retilap para dicho sistema. El formato de la declaración se encuentra en la página 221 del retilap, en la sección Anexos Formato 1.
    
    .row.justify-content-center
      .col-10.mt-5  
        .tarjeta.tarjeta--azul.p-4(data-aos="zoom-in")  
          p <b>Dictamen de inspección. Consiste en un documento elaborado por un organismo de inspección acreditado para tal fin</b> y que contiene lo siguiente:
          ol.lista-ol.px-5
            li 
              span.text-bold a. 
              | Los datos completos de la instalación y la información de las personas que intervinieron.
            li 
              span.text-bold b. 
              |  El listado de los aspectos evaluados, incluyendo los resultados y las observaciones realizadas.
            li 
              span.text-bold c. 
              | Información del resultado final de la conformidad.
            li 
              span.text-bold d. 
              | Información detallada del organismo de inspección, del inspector o inspectores que participaron en la inspección y el dictamen.
            li 
              span.text-bold e. 
              | Todos los documentos que determinan el alcance de la inspección.

          p <b>Se utilizan dos formatos</b>, dependiendo del tipo de sistema de iluminación:

          ol.lista-ol.px-5
            li 
              span.text-bold a. 
              | Para los sistemas de iluminación interior, el formato se encuentra en la página 222 del retilap, se invita a revisarlo.
            li 
              span.text-bold b. 
              |  Para los sistemas de iluminación exterior o alumbrado público el formato se encuentra en la página 223 del retilap, en la sección Anexos Formato 3. se invita a revisarlo.
          .col-lg-5
            a.anexo.mb-3.mb-3(:href="obtenerLink('downloads/Dictamen Inspección RETILAP Formato 2.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Dictamen Inspección RETILAP Formato 2
          .col-lg-5
            a.anexo.mb-3(:href="obtenerLink('downloads/Dictamen Inspección RETILAP Formato 3.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p Dictamen Inspección RETILAP Formato 3
          

              
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
