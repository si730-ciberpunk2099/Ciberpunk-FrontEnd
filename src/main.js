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
            HOLAGrande: 'HelloBig'
        },
        es: {
            HOLAGrande: 'Hola Grande'
        }
    }
});

createApp(App).use(i18n).use(PrimeVue).mount('#app');