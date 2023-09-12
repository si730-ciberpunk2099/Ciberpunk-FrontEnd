import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import i18n from "./locales/i18n";

import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/viva-dark/theme.css';

import router from "@/router";



createApp(App).use(i18n).use(PrimeVue).use(router).mount('#app');