# UHMS Implementation Playbook

**Purpose:** Reproduce the full UHMS template setup from a fresh Preclinic template.  
**Source Template:** Preclinic - Medical & Hospital - Bootstrap 5 Admin Dashboard (Vue 3)  
**Target Stack:** Vue 3.5 + Vite 6 + Bootstrap 5 + Ant Design Vue + SCSS + Partial TypeScript  
**Date:** March 3, 2026

---

## Table of Contents

1. [Initial Template Cleanup](#1-initial-template-cleanup)
2. [Package.json — Final Dependencies](#2-packagejson--final-dependencies)
3. [Vite Configuration](#3-vite-configuration)
4. [Folder Structure](#4-folder-structure)
5. [Entry Point — main.js](#5-entry-point--mainjs)
6. [App.vue](#6-appvue)
7. [Internationalization — i18n.js](#7-internationalization--i18njs)
8. [TypeScript Types](#8-typescript-types)
9. [Axios Client — utils/axios.ts](#9-axios-client--utilsaxists)
10. [Toast Notifications — utils/notifications/toast.ts](#10-toast-notifications--utilsnotificationstoastts)
11. [Composables — usePagination.ts](#11-composables--usepaginationts)
12. [Pinia Stores](#12-pinia-stores)
13. [Router — index.js](#13-router--indexjs)
14. [Auth Guard — authGuard.js](#14-auth-guard--authguardjs)
15. [Cleanup Checklist](#15-cleanup-checklist)
16. [Known Gotchas & Lessons Learned](#16-known-gotchas--lessons-learned)

---

## 1. Initial Template Cleanup

The Preclinic template ships with 700+ lines of commented-out route code, 57+ npm dependencies (many unused), 30+ globally registered components, and 10+ icon library CSS imports. Before building features, strip it down.

### What to Remove from the Template

**Unused npm packages to uninstall:**
```bash
npm uninstall @nicedayfor/vue3-odometer apexcharts bootstrap-vue-next chart.js chartjs-plugin-datalabels c3 d3 flot-charts jquery-sparkline jquery-asColorPicker list.js masonry-layout morris.js node-waves raphaeljs-core swiper vite-plugin-html vue-feather-icons vue3-circle-progress vue3-count-to vue3-pdf-app
```

> **Note:** Some of these may or may not exist in your fresh template. Only uninstall what's actually listed in your `package.json`.

**Move `sass` to devDependencies:**
```bash
npm uninstall sass
npm install -D sass
```

**Remove `sass-loader`** (not needed with Vite):
```bash
npm uninstall sass-loader
```

**Remove unused icon CSS imports from main.js:**
These were in the original template but never used:
- `@/assets/css/iconsax.css`
- `@/assets/css/animate.css`
- Any other icon CSS not listed in the final `main.js` below

**Remove unused global component registrations from main.js:**
The template globally registers 25+ components. Only keep the ones listed in §5 below. Everything else should be imported locally where used.

**Clean router/index.js:**
The template has ~700 lines of commented-out demo routes. Delete all of them and start with only the routes you need (see §13).

---

## 2. Package.json — Final Dependencies

This is the exact `package.json` to target:

```json
{
  "name": "my-vue-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fullcalendar/daygrid": "^6.1.19",
    "@fullcalendar/interaction": "^6.1.19",
    "@fullcalendar/timegrid": "^6.1.19",
    "@fullcalendar/vue3": "^6.1.19",
    "@vueform/slider": "^2.1.10",
    "ant-design-vue": "^4.2.6",
    "axios": "^1.13.2",
    "bootstrap": "^5.3.8",
    "bootstrap-icons": "^1.13.1",
    "daterangepicker": "^3.1.0",
    "dragula": "^3.7.3",
    "jquery": "^4.0.0",
    "jwt-decode": "^4.0.0",
    "moment": "^2.30.1",
    "pinia": "^3.0.4",
    "pinia-plugin-persistedstate": "^4.7.1",
    "quill": "^2.0.3",
    "remixicon": "^4.7.0",
    "simplebar-vue": "^2.4.2",
    "v-calendar": "^3.0.0-alpha.8",
    "vee-validate": "^4.15.1",
    "vue": "^3.5.24",
    "vue-draggable-next": "^2.3.0",
    "vue-easy-lightbox": "^1.19.0",
    "vue-feather": "^2.0.0",
    "vue-feather-icons": "^5.1.0",
    "vue-i18n": "^9.14.5",
    "vue-multiselect": "^3.4.0",
    "vue-router": "^4.6.3",
    "vue-sweetalert2": "^5.0.11",
    "vue-tel-input": "^9.5.0",
    "vue-toastification": "^2.0.0-rc.5",
    "vue3-apexcharts": "^1.10.0",
    "vue3-carousel": "^0.17.0",
    "vue3-datepicker": "^0.4.0",
    "vue3-select-component": "^0.12.1",
    "vue3-tags-input": "^1.0.12",
    "vuedraggable": "^4.1.0",
    "yup": "^1.7.1"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^6.0.1",
    "@vue-leaflet/vue-leaflet": "^0.10.1",
    "leaflet": "^1.9.4",
    "sass": "^1.94.0",
    "vite": "^6.0.5",
    "vite-plugin-vue-devtools": "^7.7.6"
  }
}
```

### Key Dependency Notes

| Package | Why It's Here |
|---------|--------------|
| `moment` + `daterangepicker` + `jquery` | Legacy date range picker. These three are inseparable — daterangepicker CJS-requires both moment and jQuery. |
| `ant-design-vue` | Used for `<a-table>`, form items, and some UI components. Currently imported in full (tree-shaking is a future optimization). |
| `pinia-plugin-persistedstate` | Persists auth store to localStorage so login survives page refresh. |
| `vue-toastification` | Toast notification system. |
| `vue-sweetalert2` | Confirmation dialogs (delete, dangerous actions). |
| `leaflet` + `@vue-leaflet/vue-leaflet` | Map views — in devDeps because only used in specific pages. |
| `sass` | **Must be in devDependencies**, not dependencies. |

---

## 3. Vite Configuration

Create/replace `vite.config.js`:

```js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      moment: 'moment/moment.js',
    },
  },
  server: {
    port: 3000,
  },
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-vue': ['vue', 'vue-router', 'pinia', 'pinia-plugin-persistedstate'],
          'vendor-antd': ['ant-design-vue'],
          'vendor-utils': ['axios', 'jwt-decode', 'yup', 'vee-validate', 'vue-i18n'],
          'vendor-calendar': ['@fullcalendar/daygrid', '@fullcalendar/interaction', '@fullcalendar/timegrid', '@fullcalendar/vue3'],
        },
      },
    },
  },
})
```

### Critical: The `moment` Alias

```js
moment: 'moment/moment.js'
```

**DO NOT REMOVE THIS.** The `daterangepicker` library does `require('moment')` internally (CommonJS). Without this alias, Vite serves the ES module wrapper where `moment` lives on `.default` instead of being a callable function, causing `moment is not a function` runtime errors.

### Manual Chunks

Splits the vendor bundle into logical groups so the browser can cache them independently:
- `vendor-vue` — Core Vue ecosystem (~150KB gzipped)
- `vendor-antd` — Ant Design Vue (~400KB gzipped, largest chunk)
- `vendor-utils` — HTTP, auth, validation, i18n
- `vendor-calendar` — FullCalendar (only loaded on calendar pages)

---

## 4. Folder Structure

Create these directories and files in `src/`:

```
src/
├── assets/                          # (keep from template)
│   ├── css/                         # feather.css, tabler-icons.css
│   ├── fonts/                       # icon font files
│   ├── img/                         # static images
│   ├── json/                        # sidebar menus, constants
│   └── scss/                        # theme SCSS (keep from template)
├── components/
│   ├── common-component/            # shared UI components
│   │   ├── filter-index.vue         # (keep from template)
│   │   ├── DataTablePagination.vue  # (keep from template)
│   │   ├── DateRangePicker.vue      # (keep from template)
│   │   ├── AppointmentFilter.vue    # (custom)
│   │   ├── PatientsFilter.vue       # (custom)
│   │   └── AppointmentDetailsCanvas.vue  # (custom)
│   └── modal/                       # all modal components
│       ├── DeleteModal.vue          # (keep from template)
│       ├── SetAppointmentModal.vue  # (custom)
│       ├── RescheduleModal.vue      # (custom)
│       ├── ChangeDoctorModal.vue    # (custom)
│       ├── PatientDetailsModal.vue  # (custom)
│       ├── AddInsuranceModal.vue    # (custom)
│       ├── EditInsuranceModal.vue   # (custom)
│       ├── EditNextOfKinModal.vue   # (custom)
│       └── ...                      # other modals as needed
├── composables/
│   └── usePagination.ts             # (create — see §11)
├── locales/
│   ├── en.json                      # (create — English translations)
│   └── fr.json                      # (create — French translations)
├── router/
│   ├── index.js                     # (replace — see §13)
│   └── authGuard.js                 # (create — see §14)
├── stores/
│   ├── authStore.ts                 # (create — see §12)
│   ├── patientStore.ts              # (create — see §12)
│   ├── appointmentStore.ts          # (create — see §12)
│   ├── staffStore.ts                # (create — see §12)
│   └── dataTableStore.ts            # (create — see §12)
├── types/
│   ├── index.ts                     # barrel re-export
│   ├── auth.ts                      # auth types
│   ├── common.ts                    # shared types
│   ├── patient.ts                   # patient types
│   ├── appointment.ts               # appointment types
│   └── staff.ts                     # staff types
├── utils/
│   ├── axios.ts                     # (create — see §9)
│   └── notifications/
│       └── toast.ts                 # (create — see §10)
├── views/
│   ├── layouts/                     # (keep from template)
│   └── pages/                       # (keep structure from template, clean unused demo pages)
├── App.vue                          # (simplify — see §6)
├── i18n.js                          # (create — see §7)
└── main.js                          # (replace — see §5)
```

---

## 5. Entry Point — main.js

Replace the template's `main.js` entirely with this:

```js
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
import ThemeSettings from '@/views/layouts/theme-settings.vue'

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
app.component('layouts-header', LayoutsHeader)
app.component('layouts-sidebar', LayoutsSidebar)
app.component('sidebar-menu', SidebarMenu)
app.component('theme-settings', ThemeSettings)

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
```

### What Was Removed vs. Template

| Removed | Why |
|---------|-----|
| `@/assets/css/iconsax.css` | Unused icon set |
| `@/assets/css/animate.css` | Unused animation library |
| 5+ other icon CSS imports | Not referenced anywhere |
| 25+ global component registrations | Components should be imported locally |
| `FlagIcon`, `StarRating`, `Vue3Autocounter` plugins | Unused |
| Duplicate modal imports | Template had duplicates |

### What Stays Global

Only these components are registered globally because they're used in layout shells across every page:

- **Layout shells:** `layouts-header`, `layouts-sidebar`, `sidebar-menu`, `theme-settings`
- **Shared data UI:** `filter-index`, `DataTablePagination`, `data-table-pagination`
- **Form primitives:** `vue-feather`, `vue3-select`, `vue-multiselect`, `date-picker`

**Everything else** must be imported locally in the component that uses it.

---

## 6. App.vue

Simplify to a bare wrapper:

```vue
<template>
  <div id="app">
    <div class="main-wrapper">
      <router-view />
    </div>
  </div>
</template>
```

No script, no styles. The template's original `App.vue` may have had extra logic — strip it.

---

## 7. Internationalization — i18n.js

Create `src/i18n.js`:

```js
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import fr from './locales/fr.json';

const savedLocale = localStorage.getItem('user_locale');
const defaultLocale = savedLocale || import.meta.env.VITE_DEFAULT_LOCALE || 'en';

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: { en, fr },
});

/**
 * Switch locale at runtime and persist the preference.
 */
export function setLocale(locale) {
  i18n.global.locale.value = locale;
  localStorage.setItem('user_locale', locale);
}

export default i18n;
```

### Critical: Load Both Locales Eagerly

**Do NOT lazy-load locale files.** We tried this and it caused a race condition: vue-i18n was set to `'fr'` before the French messages had actually loaded, resulting in all translation keys showing as raw key paths. Both `en.json` and `fr.json` are small files — eager loading is correct.

### Locale Files

Create `src/locales/en.json` and `src/locales/fr.json` with your translation keys. Structure them as nested objects:

```json
{
  "common": {
    "save": "Save",
    "cancel": "Cancel",
    "delete": "Delete",
    "search": "Search",
    "loading": "Loading..."
  },
  "patients": {
    "title": "Patient List",
    "create": "Add New Patient"
  }
}
```

### Using in Components

```vue
<template>
  {{ $t('common.save') }}
</template>
```

### Switching Language

```js
import { setLocale } from '@/i18n'
setLocale('fr')  // Switches immediately and persists to localStorage
```

---

## 8. TypeScript Types

### types/index.ts — Barrel Export

```ts
export * from './auth'
export * from './common'
export * from './patient'
export * from './appointment'
export * from './staff'
```

### types/auth.ts

```ts
export interface User {
  uuid: string
  name?: string
  email: string
  first_name?: string
  last_name?: string
  is_superuser: boolean
  is_staff?: boolean
  role?: string
  phone?: string
  avatar?: string
  department?: {
    type: string
    name?: string
  }
}

export interface LoginCredentials {
  username: string
  password: string
  remember_me?: boolean
}

export interface AuthResponse {
  access: string
  refresh: string
}

export interface AuthState {
  user: User | null
  token: string | null
  userToken: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  returnUrl: string | null
}

export interface DecodedToken {
  uuid: string
  name: string
  email: string
  role: string
  is_superuser: boolean
  department?: {
    type: string
    name?: string
  }
  exp?: number
  iat?: number
}
```

### types/common.ts

```ts
export interface ApiResponse<T = any> {
  data: T
  message?: string
  status?: number
  total?: number
  page?: number
  per_page?: number
}

export interface PaginationConfig {
  current: number
  pageSize: number
  total: number
  showSizeChanger?: boolean
  showQuickJumper?: boolean
}

export interface TableColumn {
  title: string
  key: string
  dataIndex?: string
  width?: number | string
  align?: 'left' | 'center' | 'right'
  fixed?: 'left' | 'right'
  sorter?: boolean
}

export interface SelectOption<T = any> {
  label: string
  value: T
  disabled?: boolean
}

export interface FormValidationRule {
  required?: boolean
  message?: string
  pattern?: RegExp
  validator?: (value: any) => boolean | Promise<boolean>
}

export interface UploadFile {
  uid: string
  name: string
  status: 'uploading' | 'done' | 'error' | 'removed'
  url?: string
  response?: any
}

export type LoadingState = boolean
export type ErrorState = string | null

export interface DateRange {
  start: string | Date
  end: string | Date
}

export interface TimeSlot {
  start: string
  end: string
  available: boolean
}

export interface Address {
  street?: string
  city?: string
  state?: string
  zip_code?: string
  country?: string
}

export interface ContactInfo {
  phone?: string
  email?: string
  emergency_contact?: string
  emergency_phone?: string
}
```

### types/patient.ts

```ts
import type { Address, ContactInfo } from './common'

export type PatientGender = 'MALE' | 'FEMALE' | 'OTHER'

export type PatientBloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'

export interface Patient {
  id: number | string
  uuid?: string

  // Personal information
  name: string
  full_name?: string
  first_name?: string
  last_name?: string
  middle_name?: string
  other_names?: string
  date_of_birth?: string
  age?: number | { value: number; unit: string }
  gender?: PatientGender
  blood_group?: PatientBloodGroup
  marital_status?: string
  religion?: string
  occupation?: string

  // Contact information
  phone?: string
  other_phones?: string
  email?: string
  emergency_contact?: string | {
    name?: string
    phone?: string
    other_phone?: string
    relation?: string
  }
  emergency_phone?: string
  emergency_relation?: string

  // Address
  address?: string | Address | {
    address_line_1?: string
    address_line_2?: string
    city?: string
    state?: string
    country?: string
    zip_code?: string
    latitude?: number
    longitude?: number
  }
  city?: string
  state?: string
  zip_code?: string
  country?: string

  // Medical information
  medical_history?: string
  allergies?: string[]
  current_medications?: string[]
  chronic_conditions?: string[]
  vital_signs?: {
    temperature?: string | number
    blood_pressure?: string
    heart_rate?: string | number
    respiratory_rate?: string | number
    spo2?: string | number
    weight?: string | number
    height?: string | number
    bmi?: string | number
  }

  // Insurance
  insurance_provider?: string
  insurance_number?: string
  insurance_expiry?: string

  // Profile
  avatar?: string
  patient_number?: string
  opd_no?: string
  registration_date?: string
  last_visit_date?: string

  // Status
  is_active?: boolean
  status?: boolean | string

  // Metadata
  created_at?: string
  updated_at?: string
  notes?: string
}

export interface PatientFormData {
  id?: number | string
  name?: string
  first_name?: string
  last_name?: string
  date_of_birth?: string
  gender?: PatientGender
  blood_group?: PatientBloodGroup
  phone?: string
  email?: string
  address?: string
  city?: string
  state?: string
  zip_code?: string
  country?: string
  emergency_contact?: string
  emergency_phone?: string
  insurance_provider?: string
  insurance_number?: string
  medical_history?: string
  allergies?: string[]
  notes?: string
}

export interface PatientFilters {
  search?: string
  gender?: PatientGender
  blood_group?: PatientBloodGroup
  age_from?: number
  age_to?: number
  registration_from?: string
  registration_to?: string
  is_active?: boolean
}

export interface PatientStats {
  total: number
  active: number
  new_today: number
  new_this_week: number
  new_this_month: number
}

export interface PatientVitals {
  patient_id: number | string
  appointment_id?: number | string
  recorded_at: string
  recorded_by?: string
  temperature?: number
  temperature_unit?: 'C' | 'F'
  blood_pressure_systolic?: number
  blood_pressure_diastolic?: number
  heart_rate?: number
  respiratory_rate?: number
  oxygen_saturation?: number
  weight?: number
  weight_unit?: 'kg' | 'lbs'
  height?: number
  height_unit?: 'cm' | 'in'
  bmi?: number
  glucose_level?: number
  pain_level?: number
}
```

### types/appointment.ts

```ts
export type AppointmentStatus = 
  | 'SCHEDULED' 
  | 'IN-PROGRESS' 
  | 'COMPLETED' 
  | 'CANCELLED' 
  | 'RESCHEDULED'
  | 'MISSED'

export type AppointmentMode = 'IN-PERSON' | 'VIRTUAL' | 'TELEHEALTH'

export interface Appointment {
  id: number | string
  appointment_number?: string
  patient: {
    id: number | string
    uuid: string
    name: string
    avatar?: string
    phone?: string
    email?: string
    opd_no?: string
  }
  staff: {
    id: number | string
    uuid: string
    name: string
    avatar?: string
    specialization?: string
    designation?: string
  }
  service?: {
    id: number | string
    name: string
  }
  start_date: string
  start_time?: string
  end_date?: string
  end_time?: string
  status: AppointmentStatus
  mode?: AppointmentMode
  type?: string
  location?: string
  notes?: string
  
  // Mapped properties used in UI
  patient_name?: string
  patient_avatar?: string
  staff_name?: string
  doctor_avatar?: string
  service_name?: string
  formatted_date?: string
  formatted_time?: string
}

export interface Service {
  id: number | string
  name: string
  description?: string
  duration?: number
  price?: number
}
```

### types/staff.ts

```ts
export interface Staff {
  id: number | string
  uuid: string
  name: string
  email: string
  phone?: string
  avatar?: string
  role?: string
  designation?: string
  specialization?: string
  department?: string
  is_active?: boolean
}
```

---

## 9. Axios Client — utils/axios.ts

Create `src/utils/axios.ts`:

```ts
import axios from 'axios'

// Create axios instance with base configuration
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor - Add auth token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const authData = localStorage.getItem('authStore')
    if (authData) {
      try {
        const { token } = JSON.parse(authData)
        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }
      } catch (e) {
        console.error('Failed to parse auth data:', e)
      }
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor - Handle token refresh
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // If 401 and we haven't retried yet, try to refresh token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const authData = localStorage.getItem('authStore')
        if (authData) {
          const { refreshToken } = JSON.parse(authData)
          if (refreshToken) {
            const response = await axios.post(
              `${axiosInstance.defaults.baseURL}/auth/token/refresh/`,
              { refresh: refreshToken }
            )

            const { access } = response.data
            
            // Update stored token
            const parsedAuth = JSON.parse(authData)
            parsedAuth.token = access
            localStorage.setItem('authStore', JSON.stringify(parsedAuth))

            // Retry original request with new token
            originalRequest.headers.Authorization = `Bearer ${access}`
            return axiosInstance(originalRequest)
          }
        }
      } catch (refreshError) {
        // Refresh failed - clear auth and redirect to login
        localStorage.removeItem('authStore')
        window.location.href = '/login'
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance
```

### How It Works

1. **Request interceptor:** Reads the persisted auth store from localStorage, attaches `Bearer` token to every request.
2. **Response interceptor:** On 401, attempts token refresh via `/auth/token/refresh/`. If refresh succeeds, updates localStorage and retries the original request. If refresh fails, clears auth and hard-redirects to `/login`.

---

## 10. Toast Notifications — utils/notifications/toast.ts

Create `src/utils/notifications/toast.ts`:

```ts
import { useToast } from 'vue-toastification'

const toast = useToast()

export const notifyError = (message: string) => toast.error(message)
export const notifySuccess = (message: string) => toast.success(message)
export const notifyWarning = (message: string) => toast.warning(message)
export const notifyInfo = (message: string) => toast.info(message)
```

### Usage in Components

```ts
import { notifySuccess, notifyError } from '@/utils/notifications/toast'

// In an action:
notifySuccess('Patient created successfully')
notifyError('Failed to save changes')
```

---

## 11. Composables — usePagination.ts

Create `src/composables/usePagination.ts`:

```ts
import { ref, computed, type Ref, type ComputedRef } from 'vue'

interface UsePaginationOptions {
  initialPage?: number
  initialPageSize?: number
  pageSizeOptions?: number[]
}

interface UsePaginationReturn<T> {
  currentPage: Ref<number>
  pageSize: Ref<number>
  pageSizeOptions: number[]
  paginatedData: ComputedRef<T[]>
  total: ComputedRef<number>
  totalPages: ComputedRef<number>
  goToPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
  resetPage: () => void
}

export function usePagination<T>(
  data: Ref<T[]>,
  options: UsePaginationOptions = {}
): UsePaginationReturn<T> {
  const {
    initialPage = 1,
    initialPageSize = 10,
    pageSizeOptions = [10, 20, 50, 100]
  } = options

  const currentPage = ref(initialPage)
  const pageSize = ref(initialPageSize)

  const total = computed(() => data.value.length)
  const totalPages = computed(() => Math.ceil(total.value / pageSize.value) || 1)

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return data.value.slice(start, end)
  })

  function goToPage(page: number) {
    if (page < 1) currentPage.value = 1
    else if (page > totalPages.value) currentPage.value = totalPages.value
    else currentPage.value = page
  }

  function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++
  }

  function prevPage() {
    if (currentPage.value > 1) currentPage.value--
  }

  function resetPage() {
    currentPage.value = 1
  }

  return {
    currentPage,
    pageSize,
    pageSizeOptions,
    paginatedData,
    total,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    resetPage
  }
}
```

---

## 12. Pinia Stores

### stores/authStore.ts

```ts
import { defineStore } from 'pinia'
import { jwtDecode } from 'jwt-decode'
import axiosInstance from '@/utils/axios'
import { router } from '@/router'
import type { AuthState, LoginCredentials, AuthResponse, DecodedToken } from '@/types'

const ROUTES = {
  admin: 'AdminDashboard',
  consultation: 'ConsultationDashboard',
  investigation: 'InvestigationDashboard',
  nursing: 'NursingDashboard',
}

export const useAuthStore = defineStore('authStore', {
  state: (): AuthState => ({
    user: null,
    token: null,
    userToken: null,
    refreshToken: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
    returnUrl: null,
  }),

  getters: {
    currentUser: (state) => state.user,
    isSuperAdmin: (state) => !!state.user?.is_superuser,
    isAdmin: (state) => state.user?.role === 'admin',
    isInvestigation: (state) => !!state.user?.is_superuser || state.user?.department?.type === 'investigation',
    isConsultation: (state) => !!state.user?.is_superuser || state.user?.department?.type === 'consultation',
    isNursing: (state) => !!state.user?.is_superuser || state.user?.department?.type === 'nursing',
    userRole: (state) => state.user?.role || null,
    userDepartment: (state) => state.user?.department?.type || null,
    isLoggedIn: (state) => state.isAuthenticated,
    routes: () => ROUTES,
  },

  actions: {
    async login(credentials: LoginCredentials) {
      this.isLoading = true
      this.error = null

      try {
        const { data } = await axiosInstance.post<AuthResponse>('auth/token/', credentials)
        if (data.access) {
          const decoded = jwtDecode<DecodedToken>(data.access)
          this.token = data.access
          this.refreshToken = data.refresh
          this.isAuthenticated = true
          this.user = {
            uuid: decoded.uuid,
            name: decoded.name,
            email: decoded.email,
            role: decoded.role,
            is_superuser: decoded.is_superuser,
            department: decoded.department,
          }
          return true
        }
      } catch (error: any) {
        this.handleLoginError(error)
        throw error
      } finally {
        this.isLoading = false
      }
    },

    async logout() {
      try {
        await axiosInstance.delete('auth/token/blacklist/', {
          data: { refresh: this.refreshToken },
        })
      } catch (error) {
        console.error('Logout failed:', error)
      } finally {
        this.$reset()
        router.push({ name: 'Login' })
      }
    },

    async forgotPassword(email: string) {
      return await axiosInstance.post('auth/password-reset-token/', { email })
    },

    async tokenVerify(token: string) {
      this.userToken = token
      try {
        return await axiosInstance.patch('auth/token/verification/', { token })
      } catch (error: any) {
        console.error('Token verification failed:', error)
        throw error
      }
    },

    async newPassword(uuid: string, password: string) {
      try {
        const response = await axiosInstance.patch(`auth/${uuid}/password/`, {
          password,
          password2: password,
          token: this.userToken,
        })
        this.$reset()
        return response
      } catch (error: any) {
        console.error('Password reset failed:', error)
        throw error
      }
    },

    async refreshAccessToken() {
      try {
        const { data } = await axiosInstance.post<AuthResponse>('auth/token/refresh/', {
          refresh: this.refreshToken,
        })
        if (data.access) {
          this.token = data.access
          this.refreshToken = data.refresh
          return true
        }
      } catch (error) {
        console.error('Token refresh failed:', error)
        await this.logout()
        return false
      }
    },

    handleLoginError(error: any) {
      let errorMessage = 'Login failed. Please try again.'
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = error.response.data?.detail || 'Invalid credentials. Please check your email and password.'
        } else if (error.response.data?.detail) {
          errorMessage = error.response.data.detail
        }
      } else if (error.request) {
        errorMessage = 'Network error. Please check your internet connection.'
      }
      this.error = errorMessage
    },

    handleRouteChange() {
      try {
        if (this.returnUrl) {
          router.push(this.returnUrl)
          this.returnUrl = null
          return
        }
        if (this.user?.is_superuser) {
          router.push({ name: 'AdminDashboard' }).catch(() => router.push('/dashboard'))
          return
        }
        const userDepartment = this.user?.department?.type
        if (userDepartment && ROUTES[userDepartment as keyof typeof ROUTES]) {
          router.push({ name: ROUTES[userDepartment as keyof typeof ROUTES] }).catch(() => router.push('/dashboard'))
        } else {
          router.push({ name: 'AdminDashboard' }).catch(() => router.push('/dashboard'))
        }
      } catch (error) {
        console.error('Route navigation error:', error)
        router.push('/dashboard').catch(() => {})
      }
    },

    setReturnUrl(url: string) {
      this.returnUrl = url
    },
  },

  persist: true,
})
```

### stores/dataTableStore.ts — Reusable Table Store Factory

```ts
import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import axiosInstance from '@/utils/axios'

export const useTableStore = (endpoint: string) => {
  const storeDefinition = defineStore(endpoint, () => {
    const data = ref<any[]>([])
    const detailedItem = ref<any>({})
    const loading = ref(false)
    const currentPage = ref(1)
    const perPage = ref(10)
    const totalCount = ref(0)
    const searchQuery = ref('')
    const filters = ref<any>({})

    async function fetchData(newFilters: any = null) {
      loading.value = true
      
      if (newFilters) {
        filters.value = { ...filters.value, ...newFilters }
      }

      const activeFilters = Object.fromEntries(
        Object.entries(filters.value).filter(([_, v]) => v !== null && v !== undefined && v !== '')
      )

      try {
        const response = await axiosInstance.get(endpoint, {
          params: {
            page: currentPage.value,
            page_size: perPage.value,
            search: searchQuery.value,
            ...activeFilters
          }
        })
        
        if (response.data && Array.isArray(response.data.results)) {
          data.value = response.data.results
          totalCount.value = response.data.count || 0
        } else if (Array.isArray(response.data)) {
          data.value = response.data
          totalCount.value = response.data.length
        } else {
          data.value = []
          totalCount.value = 0
        }
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error)
        throw error
      } finally {
        loading.value = false
      }
    }

    async function fetchItemDetails(id: string | number) {
      loading.value = true
      try {
        const response = await axiosInstance.get(`${endpoint}/${id}/`)
        detailedItem.value = response.data
        return response.data
      } catch (error) {
        console.error(`Error fetching ${endpoint} details:`, error)
        throw error
      } finally {
        loading.value = false
      }
    }

    async function fetchItem(subPath: string) {
      try {
        const path = subPath.startsWith('/') ? subPath.substring(1) : subPath
        const response = await axiosInstance.get(`${endpoint}/${path}/`)
        return response.data
      } catch (error) {
        console.error(`Error fetching item ${subPath}:`, error)
        throw error
      }
    }

    function handleTableChange(pagination: any) {
      currentPage.value = pagination.current
      perPage.value = pagination.pageSize
      fetchData()
    }

    return {
      data, detailedItem, loading, currentPage, perPage,
      totalCount, searchQuery, filters,
      fetchData, fetchItemDetails, fetchItem, handleTableChange
    }
  })

  const store = storeDefinition()
  const stateRefs = storeToRefs(store)

  return {
    ...stateRefs,
    fetchData: store.fetchData,
    fetchItemDetails: store.fetchItemDetails,
    fetchItem: store.fetchItem,
    handleTableChange: store.handleTableChange
  }
}
```

**Usage in a page component:**

```vue
<script setup>
import { useTableStore } from '@/stores/dataTableStore'

const PatientsTable = useTableStore('/patients')

// Fetch first page
PatientsTable.fetchData()

// In template: PatientsTable.data.value, PatientsTable.loading.value, etc.
</script>
```

### stores/patientStore.ts

```ts
import { defineStore } from 'pinia'
import axiosInstance from '@/utils/axios'
import type { Patient } from '@/types/patient'

interface PatientState {
  patient: Patient | null
  loading: boolean
  error: string | null
}

export const usePatientStore = defineStore('patient', {
  state: (): PatientState => ({
    patient: null,
    loading: false,
    error: null,
  }),

  getters: {
    currentPatient: (state) => state.patient,
  },

  actions: {
    async fetchPatient(id: string | number) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosInstance.get(`/patients/${id}/`)
        this.patient = response.data.data || response.data
      } catch (error: any) {
        console.error('Error fetching patient:', error)
        this.error = error.response?.data?.message || 'Failed to fetch patient details'
        this.patient = null
      } finally {
        this.loading = false
      }
    },

    clearPatient() {
      this.patient = null
      this.error = null
    },

    async createPatient(patientData: any) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosInstance.post('/patients/', patientData, {
          headers: { 'Content-Type': 'application/json' },
        })
        return response.data
      } catch (error: any) {
        console.error('Error creating patient:', error)
        this.error = error.response?.data?.message || 'Failed to create patient'
        throw error
      } finally {
        this.loading = false
      }
    },

    async updatePatient(id: string | number, patientData: any) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosInstance.put(`/patients/${id}/`, patientData, {
          headers: { 'Content-Type': 'application/json' },
        })
        return response.data
      } catch (error: any) {
        console.error('Error updating patient:', error)
        this.error = error.response?.data?.message || 'Failed to update patient'
        throw error
      } finally {
        this.loading = false
      }
    }
  },
})
```

### stores/appointmentStore.ts

```ts
import { defineStore } from 'pinia'
import axiosInstance from '@/utils/axios'
import type { Appointment } from '@/types/appointment'

interface AppointmentState {
  appointments: Appointment[]
  selectedAppointment: Appointment | null
  loading: boolean
  error: string | null
}

export const useAppointmentStore = defineStore('appointment', {
  state: (): AppointmentState => ({
    appointments: [],
    selectedAppointment: null,
    loading: false,
    error: null,
  }),

  getters: {
    currentAppointment: (state) => state.selectedAppointment,
  },

  actions: {
    async fetchAppointments(params: any = {}) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosInstance.get('/appointments/', { params })
        this.appointments = response.data.results || response.data
        return this.appointments
      } catch (error: any) {
        console.error('Error fetching appointments:', error)
        this.error = error.response?.data?.message || 'Failed to fetch appointments'
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchAppointment(id: string | number) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosInstance.get(`/appointments/${id}/`)
        if (this.selectedAppointment && this.selectedAppointment.id === id) {
          this.selectedAppointment = { ...this.selectedAppointment, ...response.data }
        } else {
          this.selectedAppointment = response.data
        }
      } catch (error: any) {
        console.error('Error fetching appointment:', error)
        this.error = error.response?.data?.message || 'Failed to fetch appointment details'
      } finally {
        this.loading = false
      }
    },

    setSelectedAppointment(appointment: Appointment | null) {
      this.selectedAppointment = appointment
    },

    async updateAppointment(id: string | number, data: any) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosInstance.patch(`/appointments/${id}/`, data)
        const index = this.appointments.findIndex(a => a.id === id)
        if (index !== -1) {
          this.appointments[index] = { ...this.appointments[index], ...response.data }
        }
        if (this.selectedAppointment && this.selectedAppointment.id === id) {
          this.selectedAppointment = { ...this.selectedAppointment, ...response.data }
        }
        return response.data
      } catch (error: any) {
        console.error('Error updating appointment:', error)
        this.error = error.response?.data?.message || 'Failed to update appointment'
        throw error
      } finally {
        this.loading = false
      }
    },

    async updateAppointmentStatus(id: string | number, status: string) {
      return this.updateAppointment(id, { status })
    },

    async updateAppointmentMode(id: string | number, mode: string) {
      return this.updateAppointment(id, { mode })
    },

    async rescheduleAppointment(id: string | number, data: any) {
      const updateData: any = { status: 'RESCHEDULED' }
      if (data.date) updateData.start_date = data.date
      if (data.service_id) updateData.service_id = data.service_id
      if (data.duration) updateData.duration = data.duration
      if (data.priority) updateData.priority = data.priority
      if (data.notes) updateData.notes = data.notes
      return this.updateAppointment(id, updateData)
    }
  },
})
```

### stores/staffStore.ts

```ts
import { defineStore } from 'pinia'
import axiosInstance from '@/utils/axios'
import type { Staff } from '@/types/staff'

interface StaffState {
  staff: Staff | null
  loading: boolean
  error: string | null
}

export const useStaffStore = defineStore('staff', {
  state: (): StaffState => ({
    staff: null,
    loading: false,
    error: null,
  }),

  getters: {
    currentStaff: (state) => state.staff,
  },

  actions: {
    async fetchStaff(id: string | number) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosInstance.get(`/staff/${id}/`)
        this.staff = response.data
        return response.data
      } catch (error: any) {
        console.error('Error fetching staff:', error)
        this.error = error.response?.data?.message || 'Failed to fetch staff details'
        this.staff = null
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
```

---

## 13. Router — index.js

Replace `src/router/index.js`:

```js
import { createRouter, createWebHistory } from "vue-router";
import { authGuard } from './authGuard'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/pages/authentication/login/login-index.vue'),
    meta: { guestOnly: true },
  },
  {
    path: '/forget',
    name: 'ForgetPassword',
    component: () => import('@/views/pages/authentication/forget/forget-index.vue'),
    meta: { guestOnly: true },
  },
  {
    path: '/internal-server-error',
    name: 'InternalServerError',
    component: () => import('@/views/pages/error/error-500.vue'),
  },
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: () => import('@/views/pages/authentication/login/login-index.vue'),
    meta: { guestOnly: true },
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: () => import('@/views/pages/error/error-404.vue'),
  },

  // Admin routes
  {
    path: '/admin',
    children: [
      { path: '', redirect: '/admin/dashboard' },
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: () => import('@/views/pages/admin/dashboard-index.vue'),
        meta: { requiresAuth: true, isAdmin: true, isSuperAdmin: true },
      },
    ],
  },

  // Admin Clinic routes
  {
    path: '/admin/clinic/',
    children: [
      {
        path: 'appointments',
        name: 'AppointmentList',
        component: () => import('@/views/pages/admin/clinic/appointments/appointments-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'appointments/calendar',
        name: 'AppointmentCalendar',
        component: () => import('@/views/pages/admin/clinic/appointments/appointments-calendar.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'appointments/:id',
        name: 'ViewAppointment',
        component: () => import('@/views/pages/admin/clinic/appointments/appointment-view.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'patients',
        name: 'PatientList',
        component: () => import('@/views/pages/admin/clinic/patients/patients-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'patients/create',
        name: 'CreatePatient',
        component: () => import('@/views/pages/admin/clinic/patients/patients-create.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'patients/:id',
        name: 'ViewPatient',
        component: () => import('@/views/pages/admin/clinic/patients/patient-view.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'patients/:id/edit',
        name: 'EditPatient',
        component: () => import('@/views/pages/admin/clinic/patients/patients-edit.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'appointments/:id/consultation',
        name: 'PatientConsultation',
        component: () => import('@/views/pages/admin/clinic/appointments/consultation/inperson-consultation.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'appointments/:id/telehealth',
        name: 'PatientTelehealth',
        component: () => import('@/views/pages/admin/clinic/appointments/consultation/online-consultation.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'appointments/:id/vitals',
        name: 'PatientVitals',
        component: () => import('@/views/pages/admin/clinic/appointments/vitals/vitals-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'doctors',
        name: 'Doctors',
        component: () => import('@/views/pages/admin/clinic/doctors/doctors-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'specializations',
        name: 'Specializations',
        component: () => import('@/views/pages/admin/clinic/specializations/specializations-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'locations',
        name: 'Locations',
        component: () => import('@/views/pages/admin/clinic/locations/locations-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'services',
        name: 'Services',
        component: () => import('@/views/pages/admin/clinic/services/services-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'assets',
        name: 'Assets',
        component: () => import('@/views/pages/admin/clinic/assets/assets-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
    ],
  },

  // Catch-all 404
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found',
  },
];

export const router = createRouter({
  history: createWebHistory("/"),
  linkActiveClass: "active",
  routes,
});

router.beforeEach(authGuard)
```

### Key Patterns

- **Every component is lazy-loaded** via `() => import(...)`.
- Routes grouped by domain under path prefix with `children: []`.
- The **catch-all** `/:pathMatch(.*)*` at the end redirects unmatched URLs to the 404 page.
- `linkActiveClass: "active"` matches Bootstrap's `.active` class for nav links.

---

## 14. Auth Guard — authGuard.js

Create `src/router/authGuard.js`:

```js
/**
 * Authentication Guard
 * 
 * Permission Hierarchy:
 * 1. Super Admin - Full access to all routes
 * 2. Admin - Access to admin routes + assigned department
 * 3. Department Users - Access only to their department routes
 * 
 * Meta Fields:
 * - requiresAuth: Route requires authentication
 * - guestOnly: Route only accessible to non-authenticated users
 * - isSuperAdmin: Route only accessible to super administrators
 * - isAdmin: Route accessible to admin and super admin
 * - isConsultation: Route accessible to consultation department
 * - isInvestigation: Route accessible to investigation department
 * - isNursing: Route accessible to nursing department
 */

import { useAuthStore } from '@/stores/authStore'

export const authGuard = (to, from, next) => {
  const authStore = useAuthStore()

  // 1. Super Admin exclusive route check (highest priority)
  if (to.meta.isSuperAdmin && !authStore.isSuperAdmin) {
    next({ name: 'Unauthorized' })
  }
  // 2. Admin route check (super admin automatically has access)
  else if (to.meta.isAdmin && !authStore.isAdmin && !authStore.isSuperAdmin) {
    next({ name: 'Unauthorized' })
  }
  // 3. Auth required check
  else if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    authStore.setReturnUrl(to.fullPath)
    next({ name: 'Login' })
  }
  // 4. Department-based permission checks (super admin bypasses)
  else if (to.meta.isConsultation && !authStore.isConsultation && !authStore.isSuperAdmin) {
    const targetRoute = authStore.userDepartment
      ? authStore.routes[authStore.userDepartment]
      : 'AdminDashboard'
    next({ name: targetRoute })
  } else if (to.meta.isInvestigation && !authStore.isInvestigation && !authStore.isSuperAdmin) {
    const targetRoute = authStore.userDepartment
      ? authStore.routes[authStore.userDepartment]
      : 'AdminDashboard'
    next({ name: targetRoute })
  } else if (to.meta.isNursing && !authStore.isNursing && !authStore.isSuperAdmin) {
    const targetRoute = authStore.userDepartment
      ? authStore.routes[authStore.userDepartment]
      : 'AdminDashboard'
    next({ name: targetRoute })
  }
  // 5. Guest only route check
  else if (to.meta.guestOnly && authStore.isLoggedIn) {
    const targetRoute = authStore.userDepartment
      ? authStore.routes[authStore.userDepartment]
      : 'AdminDashboard'
    if (to.name !== targetRoute) {
      next({ name: targetRoute })
    } else {
      next()
    }
  }
  // 6. Redirect from login if already logged in
  else if (from.name === 'Login' && authStore.isLoggedIn) {
    const targetRoute = authStore.userDepartment
      ? authStore.routes[authStore.userDepartment]
      : 'AdminDashboard'
    if (to.name !== targetRoute) {
      next({ name: targetRoute })
    } else {
      next()
    }
  }
  // 7. Default - allow access
  else {
    next()
  }
}
```

---

## 15. Cleanup Checklist

After applying all the above, verify:

- [ ] `npm run build` succeeds with no errors
- [ ] `npm run dev` starts on port 3000
- [ ] Login page loads at `/login`
- [ ] Auth guard redirects unauthenticated users to `/login`
- [ ] Auth guard redirects logged-in users away from `/login`
- [ ] Locale switching works (both directions: en ↔ fr)
- [ ] Toast notifications appear (success, error, warning, info)
- [ ] No `console.log` output in production mode (only `warn` and `error`)
- [ ] `<theme-settings>` component renders in layout headers
- [ ] `<a-table>` tables render without Vue prop warnings
- [ ] All `@/stores/dataTableStore` imports resolve correctly (not `@/stores/dataTable`)
- [ ] No "Failed to resolve component" warnings in console
- [ ] 404 catch-all redirects unknown paths to `/not-found`

### Common Import Path Mistakes

If you see `Module not found` errors, check for these patterns in page components:

```diff
- import { useTableStore } from '@/stores/dataTable'
+ import { useTableStore } from '@/stores/dataTableStore'
```

The store file is `dataTableStore.ts` — many template page files may reference the shorter path.

---

## 16. Known Gotchas & Lessons Learned

### 1. The `moment` Alias Is Non-Negotiable

```js
// vite.config.js → resolve.alias
moment: 'moment/moment.js'
```

Without this, `daterangepicker` (which does `require('moment')`) gets the ES module wrapper where moment is on `.default` instead of being callable. You'll see `moment is not a function` at runtime.

### 2. Never Lazy-Load Small Locale Files

Lazy-loading vue-i18n messages creates a race condition: the locale is set to 'fr' but the messages haven't loaded yet, so every `$t()` call shows raw key paths instead of translations. Both `en.json` and `fr.json` are small — load them eagerly.

### 3. Don't Remove Global Components Used in Layouts

The layout shell files (`layouts-header.vue`, `patients-header.vue`, `doctor-header.vue`) reference `<theme-settings>` by tag name. If you remove its global registration, you get `Failed to resolve component: theme-settings` on every page. Only remove a global registration after confirming zero usage across all layout files.

### 4. Static Props vs. Dynamic Bindings in Ant Design Tables

```diff
- :table-layout="fixed"                    ← evaluates JS variable "fixed" (undefined)
+ table-layout="fixed"                     ← passes static string "fixed"

- :pagination-class="pagination - rounded" ← evaluates JS expression (NaN)
+ pagination-class="pagination-rounded"    ← passes static string
```

The `:` prefix (shorthand for `v-bind:`) makes Vue evaluate the attribute value as a JavaScript expression. If the value is a string literal, omit the `:`.

### 5. sass Goes in devDependencies

Sass is a build-time tool, not a runtime dependency. Having it in `dependencies` adds unnecessary weight to production installs. Move it:

```bash
npm uninstall sass
npm install -D sass
```

### 6. sass-loader Is Not Needed with Vite

Vite handles SCSS natively via its built-in `sass` integration. The `sass-loader` package (which is a webpack plugin) is completely unnecessary and can be removed.

### 7. Console Override Must Preserve warn/error

```js
// WRONG — hides real issues
console.log = console.warn = console.error = () => {}

// CORRECT — only suppress verbose logging
if (import.meta.env.VITE_DEBUG_MODE !== 'true') {
  console.log = () => {}
  console.debug = () => {}
  console.info = () => {}
}
```

`console.warn` and `console.error` report real issues (Vue warnings, uncaught errors, network failures). Never suppress them.

### 8. Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_DEFAULT_LOCALE=en
VITE_DEBUG_MODE=true
```

And a `.env.production`:

```env
VITE_API_BASE_URL=https://your-production-api.com/api
VITE_DEFAULT_LOCALE=en
VITE_DEBUG_MODE=false
```

All variables must be prefixed with `VITE_` to be exposed to client-side code.

---

## Summary

This playbook takes you from a fresh Preclinic Vue 3 template to a clean, optimized UHMS foundation:

1. **Stripped** 700+ lines of dead router code, 25+ unused global components, 15+ unused npm packages, and 7+ unused CSS imports.
2. **Added** TypeScript types, Pinia stores, Axios client with JWT interceptors, auth guard, i18n, toast notifications, pagination composable.
3. **Configured** Vite with manual chunks, moment alias, and environment variable support.
4. **Established** patterns for data flow (component → store → axios), table management (`useTableStore` factory), and permission-based routing.

The result is a lean, build-passing template ready for feature development.
