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
import FlagIcon from 'vue-flag-icon';
import StarRating from "vue3-star-ratings";
import Vue3Autocounter from 'vue3-autocounter';
import VCalendar from 'v-calendar';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';

// Debug Mode Configuration
if (import.meta.env.VITE_DEBUG_MODE !== 'true') {
  console.log = () => {}
  console.debug = () => {}
  console.info = () => {}
  console.warn = () => {}
  console.error = () => {}
}

// Components are now loaded locally in each view/component that needs them
// This enables proper code splitting and reduces initial bundle size


// Core CSS - always needed
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@/assets/scss/main.scss';

// Primary icon set - bootstrap icons (most commonly used)
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/assets/css/tabler-icons.css'

// Other icon libraries - load only when needed in specific pages
// Uncomment the ones you need:
// import 'material-icons/css/material-icons.min.css';
// import 'pe7-icon/dist/dist/pe-icon-7-stroke.css';
// import 'typicons.font/src/font/typicons.css';
// import 'weathericons/css/weather-icons.css'
// import 'ionicons-npm/css/ionicons.css';
// import 'remixicon/fonts/remixicon.css';
// import '@/assets/css/feather.css';

// Map library - load only when using maps
// import 'leaflet/dist/leaflet.css';



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

// Components are registered locally where needed for better code splitting

app.component('vue3-autocounter', Vue3Autocounter)
app.component('star-rating', StarRating)
app.use(VueApexCharts)
app.use(FlagIcon)
.use(Antd)
app.use(VCalendar)
app.use(i18n)
app.use(VueTelInput);
app.component(VueFeather.name, VueFeather)
app.component('vue3-select', Vue3Select);
app.component('vue-multiselect', Multiselect);
app.component('date-picker', DatePicker);
app.use(router).mount('#app'); 

