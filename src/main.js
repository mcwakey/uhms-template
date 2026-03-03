import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import { router } from './router';
import i18n from './i18n';
import VueApexCharts from "vue3-apexcharts"; 
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import DatePicker from 'vue3-datepicker'
import Multiselect from 'vue-multiselect'
import Vue3Select from 'vue3-select-component'
import 'vue-multiselect/dist/vue-multiselect.css'
import VueFeather from 'vue-feather';

import VCalendar from 'v-calendar';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

// Debug Mode Configuration
// Only suppress verbose logging — never suppress warn/error as they report real issues
if (import.meta.env.VITE_DEBUG_MODE !== 'true') {
  console.log = () => {}
  console.debug = () => {}
  console.info = () => {}
}

/********** Common components **********/
import FilterIndex from '@/components/common-component/filter-index.vue';
import DataTablePagination from '@/components/common-component/DataTablePagination.vue';

/********** Layouts components **********/
import LayoutsHeader from '@/views/layouts/layouts-header.vue';
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue';
import SidebarMenu from '@/views/layouts/sidebar-menu.vue'





import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/css/tabler-icons.css'
import '@/assets/css/feather.css'
import 'remixicon/fonts/remixicon.css'
import 'leaflet/dist/leaflet.css'
import '@/assets/scss/main.scss'

const app = createApp(App);

// Initialize Pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

// Initialize Toast notifications
app.use(Toast, {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 3,
  newestOnTop: true,
  position: 'top-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false,
})

/********** Common components **********/
app.component('filter-index', FilterIndex)
app.component('DataTablePagination', DataTablePagination)
app.component('data-table-pagination', DataTablePagination)

/********** Layouts components **********/
app.component('layouts-header', LayoutsHeader )
app.component('layouts-sidebar', LayoutsSidebar)
app.component('sidebar-menu', SidebarMenu)

app.use(VueApexCharts)
app.use(Antd)
app.use(VCalendar)
app.use(i18n)
app.use(VueTelInput);
app.component(VueFeather.name, VueFeather)
app.component('vue3-select', Vue3Select);
app.component('vue-multiselect', Multiselect);
app.component('date-picker', DatePicker);
app.use(router).mount('#app'); 

