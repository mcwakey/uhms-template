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

/********** Common components **********/
import FilterIndex from '@/components/common/filter-index.vue';
import DataTablePagination from '@/components/common/DataTablePagination.vue';

/********** Layouts components **********/
import LayoutsHeader from '@/views/layouts/layouts-header.vue';
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue';
import LayoutsFooter from '@/views/layouts/layouts-footer.vue';
import PatientsHeader from '@/views/layouts/patients-header.vue';
import PatientsSidebar from '@/views/layouts/patients-sidebar.vue';
import SidebarMenu from '@/views/layouts/sidebar-menu.vue'
import DoctorHeader from '@/views/layouts/doctor-header.vue';
import DoctorSidebar from '@/views/layouts/doctor-sidebar.vue';
import LayoutHiddenSidebar from '@/views/layouts/layout-hidden-sidebar.vue';
import ThemeSettings from '@/views/layouts/theme-settings.vue';


import AppointmentDetailsTable from '@/views/doctor/appointment-details-table.vue';
import TransactionsDetailsTable from '@/views/doctor/transactions-details-table.vue';

import NotesCarousel from '@/views/applications/notes-carousel.vue';
import SocialCarousel from '@/views/applications/social-carousel.vue';
import RecentFolders from '@/views/applications/recent-folders.vue';
import RecentFiles from '@/views/applications/recent-files.vue';
import AllKanban from '@/views/applications/kanban/all-kanban.vue';
import HighKanban from '@/views/applications/kanban/high-kanban.vue';
import MediumKanban from '@/views/applications/kanban/medium-kanban.vue';
import LowKanban from '@/views/applications/kanban/low-kanban.vue';
import ContactsTable from '@/views/applications/contacts/contacts-table.vue';

import LightBoxOne from "@/views/uiinterface/advancedui/lightbox-one.vue";
import LightBoxTwo from "@/views/uiinterface/advancedui/lightbox-two.vue";
import FormValidationOne from  "@/views/uiinterface/form/form-validation-one.vue"


import SettingsSidebar from '@/views/settings/settings-sidebar.vue';
import DoctorAppointmentModal from '@/components/modal/doctor-appointment-modal.vue';
import DoctorsLeavesModal from '@/components/modal/doctors-leaves-modal.vue';
import ContactsModal from '@/components/modal/contacts-modal.vue';
import calendarModal from '@/components/modal/calendar-modal.vue';
import appointmentsModal from '@/components/modal/doctor-appointment-modal.vue';
import DoctorsListModal from '@/components/modal/doctors-list-modal.vue';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'material-icons/css/material-icons.min.css';
import 'material-icons/css/material-icons.css';
import 'pe7-icon/dist/dist/pe-icon-7-stroke.css';
import 'typicons.font/src/font/typicons.css';
import 'weathericons/css/weather-icons.css'
import 'ionicons-npm/css/ionicons.css';
import '@/assets/css/tabler-icons.css'
import 'remixicon/fonts/remixicon.css';
import 'leaflet/dist/leaflet.css';
import '@/assets/css/feather.css';
// import '@/assets/css/iconsax.css';
import '@/assets/scss/main.scss';



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
app.component('layouts-footer', LayoutsFooter)
app.component('patients-header', PatientsHeader )
app.component('patients-sidebar', PatientsSidebar)
app.component('sidebar-menu', SidebarMenu)
app.component('doctor-header', DoctorHeader)
app.component('doctor-sidebar', DoctorSidebar)
app.component('layout-hidden-sidebar', LayoutHiddenSidebar)
app.component('theme-settings', ThemeSettings)

app.component('appointment-details-table', AppointmentDetailsTable)
app.component('transactions-details-table', TransactionsDetailsTable)

app.component('notes-carousel', NotesCarousel)
app.component('social-carousel', SocialCarousel)
app.component('recent-folder', RecentFolders)
app.component('recent-files', RecentFiles)
app.component('all-kanban', AllKanban)
app.component('high-kanban', HighKanban)
app.component('medium-kanban', MediumKanban)
app.component('low-kanban', LowKanban)
app.component('contacts-table', ContactsTable)


app.component("lightbox-one", LightBoxOne);
app.component("lightbox-two", LightBoxTwo);
app.component("form-validation-one", FormValidationOne);
app.component('settings-sidebar',SettingsSidebar)

app.component('doctor-appointment-modal', DoctorAppointmentModal)
app.component('doctors-leave-modal', DoctorsLeavesModal)
app.component('contacts-modal', ContactsModal)
app.component('calendar-modal', calendarModal)
app.component('appointments-modal', appointmentsModal)
app.component('doctors-list-modal', DoctorsListModal)

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
