import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';

import 'primeicons/primeicons.css';
import 'primevue/resources/themes/viva-dark/theme.css';

const i18n = createI18n({
    locale: 'es',
    messages: {
        en: {
            HOLAGrande: 'Hello Big',
            Subtitulo: 'Subtittle - Jaguaryou',
            Subtitulo2: 'Column and row',
            Description: 'Column in general and row for 3 images',
            Titulaso: 'Ensambleishon PC Gaming'

        },
        es: {
            HOLAGrande: 'Hola Grande',
            Subtitulo: 'soy un subtitulo holas',
            Subtitulo2: 'Columnas y filas',
            Description: 'Columnas para el contenedor y filas para las 3 imagenes',
            Titulaso: 'Ensamble su propia PC Gaming'
        }
    }
});

createApp(App).use(i18n).use(PrimeVue).mount('#app');