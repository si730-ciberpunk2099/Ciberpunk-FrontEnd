import { createI18n } from "vue-i18n";

const i18n = createI18n({
    locale: 'es',
    messages: {
        en: {
            HOLAGrande: 'Hello Big',
            Subtitulo: 'Subtittle - Jaguaryou',
            Subtitulo2: 'Column and row',
            Description: 'Column in general and row for 3 images',
            Titulaso: 'Ensambleishon PC Gaming',

            Home: 'Home',
            ComparacionPrecios: 'Comparación de precios',
            Catalogo: 'Catálogo de componentes',
            Nosotros: 'Sobre nosotros',
            Tiendas: 'Tiendas afiliadas',
            Comentarios: 'Comentarios',
        },
        es: {
            HOLAGrande: 'Hola Grande',
            Subtitulo: 'soy un subtitulo holas',
            Subtitulo2: 'Columnas y filas',
            Description: 'Columnas para el contenedor y filas para las 3 imagenes',
            Titulaso: 'Ensamble su propia PC Gaming',

            Home: 'Inicio',
            ComparacionPrecios: 'Comparación de precios',
            Catalogo: 'Catálogo de componentes',
            Nosotros: 'Sobre nosotros',
            Tiendas: 'Tiendas afiliadas',
            Comentarios: 'Comentarios',
        }
    }
});
export default i18n;