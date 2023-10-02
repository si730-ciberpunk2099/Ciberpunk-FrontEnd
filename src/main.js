import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import i18n from "./locales/i18n";

import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import 'primevue/resources/themes/viva-dark/theme.css';
import 'primeflex/primeflex.css';

import Button from "primevue/button";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import DataView from "primevue/dataview";
import DataViewLayoutOptions from "primevue/dataviewlayoutoptions";
import Tag from 'primevue/tag';
import Tree from 'primevue/tree';
import Toast from 'primevue/toast';
import OrderList from 'primevue/orderlist';
import Dialog from 'primevue/dialog';

import ToastService from 'primevue/toastservice';
import router from "@/router";

createApp(App)

    .use(i18n)
    .use(PrimeVue)
    .use(router)
    .use(ToastService)

    .component('DataView', DataView)
    .component('DataViewLayoutOptions', DataViewLayoutOptions)
    .component('Button', Button)
    .component('DataTable', DataTable)
    .component('Column', Column)
    .component('ColumnGroup', ColumnGroup)
    .component('Row', Row)
    .component('Tag', Tag)
    .component('Tree', Tree)
    .component('Toast', Toast)
    .component('OrderList', OrderList)
    .component('Dialog', Dialog)

    .mount('#app');