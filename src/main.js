import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    locale: 'es', // Establece el idioma predeterminado
    messages: {
        en: {
            HOLAGrande: 'HelloBig'
        },
        es: {
            HOLAGrande: 'Hola Grande'
        }
    }
});

createApp(App).use(i18n).mount('#app');