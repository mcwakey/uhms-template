# UHMS Template — Full Project Analysis & Optimization Report

**Date:** March 2, 2026  
**Branch:** `beta`  
**Framework:** Vue 3.5 + Vite 6 + TypeScript (partial)  
**Based on:** Preclinic — Bootstrap 5 Admin Dashboard Template (Dreams Technologies)

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Architecture Overview](#2-architecture-overview)
3. [Dependency Audit](#3-dependency-audit)
4. [Bundle Size & Performance Analysis](#4-bundle-size--performance-analysis)
5. [Code Quality & Patterns](#5-code-quality--patterns)
6. [Security Analysis](#6-security-analysis)
7. [Router & Navigation](#7-router--navigation)
8. [State Management](#8-state-management)
9. [Styling & Assets](#9-styling--assets)
10. [Internationalization](#10-internationalization)
11. [Build & Tooling](#11-build--tooling)
12. [Optimization Instructions](#12-optimization-instructions)

---

## 1. Executive Summary

The UHMS (Universal Hospital Management System) frontend is a Vue 3 SPA built on top of a purchased Bootstrap 5 admin template ("Preclinic"). The project is actively being customized from a generic template into a production hospital management system. It uses Pinia for state management, vue-i18n for localization, Axios for API calls with JWT authentication, and Ant Design Vue for data tables.

### Key Findings

| Category | Status | Severity |
|----------|--------|----------|
| Excessive dependencies | **57 production deps** | 🔴 High |
| Massive commented-out router code | ~800+ lines of dead code | 🟡 Medium |
| Global component registration bloat | 30+ components registered globally | 🔴 High |
| Multiple redundant icon libraries | 10+ icon sets loaded | 🔴 High |
| No tree-shaking for Ant Design Vue | Full library imported | 🔴 High |
| moment.js usage (legacy + heavy) | 300KB+ library | 🟡 Medium |
| Debug mode enabled in production env | `VITE_DEBUG_MODE=true` | 🟡 Medium |
| Mixed JS/TS codebase | Inconsistent typing | 🟡 Medium |
| No testing infrastructure | Zero tests | 🟡 Medium |
| No ESLint/Prettier configuration | No linting | 🟡 Medium |
| console.log suppression fragile | Overwrites console methods | 🟡 Medium |
| Auth token stored in localStorage | Standard JWT pattern but XSS-vulnerable | 🟡 Medium |
| Duplicate sidebar menu JSON | Two menu configs maintained | 🟠 Low |
| `sass` in dependencies (not devDeps) | Incorrect placement | 🟠 Low |

---

## 2. Architecture Overview

```
src/
├── main.js              — App entry (global registrations, plugin setup)
├── App.vue              — Root component (minimal — just router-view)
├── i18n.js              — vue-i18n config (en/fr)
├── router/
│   ├── index.js         — Route definitions (~900 lines, ~80% commented out)
│   └── authGuard.js     — Role-based navigation guard
├── stores/              — Pinia stores (5 files, all TypeScript)
├── types/               — TypeScript interfaces (5 files + barrel index)
├── composables/         — Reusable composition functions (1 file)
├── utils/
│   ├── axios.ts         — Axios instance + interceptors (token refresh)
│   └── notifications/   — Toast wrapper utilities
├── components/
│   ├── common-component/ — Shared UI (pagination, filters, date pickers)
│   └── modal/            — Modal components (CRUD pattern)
├── views/
│   ├── layouts/          — Header, sidebar, footer layout shells
│   └── pages/            — All page views (20+ top-level directories)
├── assets/
│   ├── scss/             — SCSS architecture (variables, components, pages, plugins)
│   ├── css/              — Pre-built CSS (feather, iconsax, tabler)
│   ├── fonts/            — Custom icon fonts
│   ├── img/              — Static images
│   └── json/             — Sidebar menu data, constants
└── locales/              — i18n JSON files (en.json, fr.json)
```

### Component Hierarchy

```
App.vue
└── router-view
    ├── Auth Pages (login, forgot password, etc.)
    │   └── Self-contained (no layout wrapper)
    ├── Admin Pages
    │   ├── layouts-header
    │   ├── layouts-sidebar → sidebar-menu
    │   └── Page Content
    ├── Doctor Pages  
    │   ├── doctor-header
    │   └── doctor-sidebar
    └── Patient Pages
        ├── patients-header
        └── patients-sidebar
```

**Issue:** Layout components (`layouts-header`, `layouts-sidebar`) are included inside each page view rather than as route-level layout wrappers. This means every admin page re-renders/re-mounts layout components on navigation.

---

## 3. Dependency Audit

### Production Dependencies (57 total)

#### Core (Keep) ✅
| Package | Purpose |
|---------|---------|
| `vue` | Framework |
| `vue-router` | Routing |
| `pinia` | State management |
| `pinia-plugin-persistedstate` | Persist auth state |
| `axios` | HTTP client |
| `vue-i18n` | Internationalization |
| `vee-validate` + `yup` | Form validation |
| `jwt-decode` | Token decoding |
| `vue-toastification` | Toast notifications |
| `bootstrap` | CSS framework (used throughout) |

#### Heavy / Replaceable 🟡
| Package | Size | Issue | Recommendation |
|---------|------|-------|----------------|
| `ant-design-vue` | ~1.5MB | Full import, only uses Table/Pagination | Switch to on-demand import or use a lighter table |
| `daterangepicker` | ~200KB | jQuery dependency, loads moment.js | Replace with `vue3-datepicker` (already installed) or VCalendar ranges |
| `@fullcalendar/*` (3 pkgs) | ~400KB | Calendar feature | Keep but lazy-load on calendar routes only |
| `quill` | ~200KB | Rich text editor | Keep but lazy-load on pages that use it |
| `vue-sweetalert2` | ~100KB | Alert dialogs | Replace with native Bootstrap modals (already used) or vue-toastification confirms |

#### Redundant Icon Libraries 🔴
| Package | Estimated CSS Size |
|---------|-------------------|
| `@fortawesome/fontawesome-free` | ~60KB CSS + ~200KB fonts |
| `bootstrap-icons` | ~80KB |
| `boxicons` | ~150KB |
| `ionicons-npm` | ~100KB |
| `material-icons` | ~150KB |
| `pe7-icon` | ~40KB |
| `remixicon` | ~200KB |
| `themify-icons` | ~30KB |
| `typicons.font` | ~60KB |
| `weathericons` | ~30KB |
| `vue-feather` + `vue-feather-icons` | ~20KB |
| `vue-simple-line` | ~20KB |
| Custom CSS: `tabler-icons`, `feather`, `iconsax` | ~100KB |

**Total icon overhead: ~1.2MB+ of CSS and font files loaded on every page.** Most icons in the actual UHMS app use only Tabler Icons (`ti ti-*`) and a few Feather icons.

#### Likely Unused / Template Leftovers 🔴
| Package | Evidence |
|---------|----------|
| `@j-t-mcc/vue3-chartjs` | Template had Chart.js pages, likely replaced by ApexCharts |
| `@primeuix/themes` | No PrimeVue usage found |
| `@simonwep/pickr` | Color picker — likely template demo only |
| `dragula` + `vue-draggable-next` + `vuedraggable` | Three drag libraries — at most one needed |
| `mdb-vue-ui-kit` | Material Design Bootstrap — conflicts with Ant Design Vue |
| `simplebar-vue` | Custom scrollbar — only used in sidebar |
| `vue-flag-icon` | Flag icons — only 2 flags used (en/fr) |
| `vue3-autocounter` | Counter animation — dashboard demo only |
| `vue3-carousel` | Carousel — minimal usage |
| `vue3-star-ratings` | Star rating — possible template demo |
| `vue3-tags-input` | Tag input — minimal usage |
| `vue-easy-lightbox` | Lightbox — template demo page |
| `vue-tel-input` | Phone input — useful but heavy |

#### Dev Dependencies Misplaced
| Package | Current | Should Be |
|---------|---------|-----------|
| `sass` | dependencies | devDependencies |
| `sass-loader` | dependencies | devDependencies (and likely unnecessary with Vite) |

---

## 4. Bundle Size & Performance Analysis

### Estimated Initial Bundle Size

| Category | Estimated Size (gzipped) |
|----------|-------------------------|
| Vue 3 + Router + Pinia | ~40KB |
| Bootstrap CSS + JS | ~45KB |
| Ant Design Vue (full) | ~200KB |
| Icon Libraries (all CSS) | ~150KB |
| Font files (all icons) | ~500KB+ |
| Moment.js | ~70KB |
| Other deps | ~100KB |
| App code (loaded on first route) | ~30KB |
| **Total estimated first load** | **~1.1MB+** |

### Performance Issues

1. **No code splitting for heavy components** — FullCalendar, Quill, Charts load eagerly via global registration
2. **All icon CSS loaded upfront** — Even if only 2-3 icon families are actually used
3. **Global component registration** — 30+ components registered in `main.js` means they all end up in the initial bundle
4. **No image optimization pipeline** — Static images in `src/assets/img/` served as-is
5. **No lazy loading for below-fold content** — Dashboard charts, tables, modals all load synchronously
6. **Vite devtools plugin included** — `vite-plugin-vue-devtools` is fine for dev but verify it's excluded from production

---

## 5. Code Quality & Patterns

### Strengths ✅
- Well-structured TypeScript types in `src/types/`
- Centralized barrel export pattern (`types/index.ts`)
- Pinia stores follow consistent patterns with loading/error states
- Auth guard covers role-based access well (super admin > admin > department)
- Axios interceptor handles token refresh properly
- Toast notifications centralized in utility module
- i18n implemented with proper Composition API (`legacy: false`)
- Validation schemas using Yup with i18n messages
- `useTableStore` is a clever composable factory for data tables
- Style guide document exists and is actively followed

### Issues 🔴

#### 5.1 Mixed JavaScript / TypeScript
- `main.js`, `router/index.js`, `i18n.js` are plain JavaScript
- Stores, types, utils, composables are TypeScript
- No `tsconfig.json` visible — TypeScript may not be fully configured
- `<script setup lang="ts">` used in some components but not all

#### 5.2 Massive Global Component Registration (`main.js`)
```
30+ components registered globally via app.component()
```
This means **every single one** is bundled in the initial load, including:
- Kanban boards (4 components)
- Lightbox viewers (2 components)
- Application-specific tables (contacts, appointments, transactions)
- All modals (6+ components)
- Settings sidebar
- Carousel components

Most of these are used on only 1-2 pages.

#### 5.3 Router File — 80% Dead Code
The router file is ~900 lines, of which **~700+ lines are commented out**. This is the entire original template routing that hasn't been cleaned up. Only ~20 active routes exist.

#### 5.4 Debug Console Override is Fragile
```js
if (import.meta.env.VITE_DEBUG_MODE !== 'true') {
  console.log = () => {}
  console.debug = () => {}
  console.info = () => {}
  console.warn = () => {}
  console.error = () => {}
}
```
This globally suppresses **all** console output including `console.error`, which:
- Hides genuine errors in production
- Breaks third-party library error reporting
- Makes debugging production issues impossible
- `console.warn` from Vue itself will be silently swallowed

#### 5.5 Duplicate Modal/Component Imports
In `main.js`:
```js
import DoctorAppointmentModal from '@/components/modal/doctor-appointment-modal.vue';
// ...
import appointmentsModal from '@/components/modal/doctor-appointment-modal.vue';
```
Same file imported twice under different names and registered as two separate global components.

#### 5.6 Auth Guard Console Logging
```js
if (authStore.isSuperAdmin) console.log('isSuperAdmin: true')
if (authStore.isAdmin) console.log('isAdmin: true')
// ... more console.logs on every route change
```
Debug logging on **every single navigation** — should be removed or conditional.

#### 5.7 `DecodedToken` Missing `name` Field
The `DecodedToken` interface doesn't include `name`, but `authStore.login()` accesses `decoded.name`. TypeScript won't catch this if it's not strict.

---

## 6. Security Analysis

### Current State

| Area | Status | Notes |
|------|--------|-------|
| JWT Storage | 🟡 localStorage | Vulnerable to XSS, standard SPA pattern. HttpOnly cookies preferred but complex with SPAs |
| Token Refresh | ✅ Implemented | Response interceptor retries with refresh token |
| Token Blacklisting | ✅ On logout | Server-side token invalidation |
| RBAC | ✅ Implemented | Multi-level: SuperAdmin > Admin > Department-based |
| API Base URL | ✅ Environment variable | Not hardcoded |
| Input Validation | ✅ vee-validate + Yup | Client-side validation present |
| CORS | N/A | Backend concern |
| XSS Prevention | 🟡 Vue default | Vue auto-escapes, but `v-html` usage should be audited |
| CSRF | 🔴 Not implemented | No CSRF tokens in Axios config |

### Specific Concerns

1. **Token in localStorage parsed with `JSON.parse`** — The Axios interceptor does `JSON.parse(localStorage.getItem('authStore'))` inside a try/catch, which is fine, but if an attacker can inject via XSS, they get full token access.

2. **No Content Security Policy** — `index.html` has no CSP meta tags.

3. **`.env` committed to repo** — Contains production API URL. Ensure `.env` is in `.gitignore` for production secrets.

4. **Debug mode enabled** — `VITE_DEBUG_MODE=true` in `.env` — all console methods suppressed only when debug mode is off, meaning currently nothing is suppressed.

---

## 7. Router & Navigation

### Active Routes (Non-Commented)

| Path | Route Name | Auth Required |
|------|-----------|---------------|
| `/login` | Login | Guest only |
| `/forget` | ForgetPassword | Guest only |
| `/internal-server-error` | InternalServerError | No |
| `/unauthorized` | Unauthorized | Guest only |
| `/not-found` | NotFound | No |
| `/admin/dashboard` | AdminDashboard | Admin + SuperAdmin |
| `/admin/clinic/appointments` | AppointmentList | Admin |
| `/admin/clinic/appointments/calendar` | AppointmentCalendar | Admin |
| `/admin/clinic/appointments/:id` | ViewAppointment | Admin |
| `/admin/clinic/appointments/:id/consultation` | PatientConsultation | Admin |
| `/admin/clinic/appointments/:id/telehealth` | PatientTelehealth | Admin |
| `/admin/clinic/appointments/:id/vitals` | PatientVitals | Admin |
| `/admin/clinic/patients` | PatientList | Admin |
| `/admin/clinic/patients/create` | CreatePatient | Admin |
| `/admin/clinic/patients/:id` | ViewPatient | Admin |
| `/admin/clinic/patients/:id/edit` | EditPatient | Admin |
| `/admin/clinic/doctors` | Doctors | Admin |
| `/admin/clinic/specializations` | Specializations | Admin |
| `/admin/clinic/locations` | Locations | Admin |
| `/admin/clinic/services` | Services | Admin |
| `/admin/clinic/assets` | Assets | Admin |

### Issues
- **~700 lines of commented-out routes** from the original template — dead weight
- No `404` catch-all route (`:pathMatch(.*)*`) — unmatched URLs show blank page
- Sidebar menu JSON references routes that don't exist yet (consultation, investigation, treatment, etc.)
- The admin routes don't use a shared layout wrapper — each page individually includes layout components

---

## 8. State Management

### Stores Overview

| Store | File | Pattern | State Fields |
|-------|------|---------|-------------|
| `authStore` | `authStore.ts` | Options API | user, token, refreshToken, isAuthenticated, loading, error, returnUrl |
| `appointment` | `appointmentStore.ts` | Options API | appointments[], selectedAppointment, loading, error |
| `patient` | `patientStore.ts` | Options API | patient, loading, error |
| `staff` | `staffStore.ts` | Options API | staff, loading, error |
| `useTableStore` | `dataTableStore.ts` | Composition (factory) | data[], detailedItem, loading, pagination, search, filters |

### Issues
- **Inconsistent naming**: `useAuthStore` / `useAppointmentStore` (Options API) vs `useTableStore` (factory function)
- **Auth store persisted to localStorage** — Entire user object + tokens stored in plain text
- **No cache invalidation** — table store fetches fresh data every time without caching
- **`any` types used heavily** in action parameters — defeats TypeScript purpose
- **`useTableStore` creates a new store per endpoint** — calling `useTableStore('/patients/')` and `useTableStore('/patients/')` in different components creates/shares the same store instance (by design), but endpoint string must match exactly

---

## 9. Styling & Assets

### SCSS Architecture
```
main.scss
├── _variables.scss    — CSS custom properties (:root)
├── utils/mixins       — SCSS mixins
├── structure/         — header, sidebar, layout, theme, rtl
├── components/        — 22 SCSS partials (accordion, forms, tables, etc.)
├── pages/             — Page-specific styles
└── plugins/           — Third-party plugin overrides
```

### Issues
1. **CSS custom properties defined but SCSS variables not used** — The `_variables.scss` file uses CSS custom properties (`--primary: #2E37A4`) instead of SCSS variables (`$primary: #2E37A4`). This means no SCSS color functions (`darken()`, `lighten()`, `mix()`) can be used with them.

2. **Bootstrap loaded twice** — Both the full Bootstrap 5 CSS (`bootstrap.min.css`) and custom SCSS that forwards Bootstrap components are loaded in `main.js`.

3. **10+ icon font CSS files loaded eagerly** — All imported in `main.js`, even if only Tabler Icons are used in the custom UHMS pages.

4. **No PurgeCSS / CSS tree-shaking** — Unused template CSS shipped to production.

5. **Image assets not optimized** — No `vite-plugin-imagemin` or similar; images in `src/assets/img/` served at original size.

---

## 10. Internationalization

### Current State
- **vue-i18n** with Composition API mode (`legacy: false`)
- **2 locales**: English (`en.json`), French (`fr.json`)
- Locale persisted in `localStorage` as `user_locale`
- Fallback locale: English
- Used properly in components via `const { t } = useI18n()`

### Issues
- Both locale files loaded synchronously at startup — should be lazy-loaded for non-default locales
- Validation messages in Yup schemas use `t()` at schema definition time, not at validation time — if locale changes, cached schemas won't update
- Flag icons for language switcher pull in the entire `vue-flag-icon` library for 2 flags

---

## 11. Build & Tooling

### Current Configuration (`vite.config.js`)
```js
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': './src',
      moment: 'moment/moment.js'
    },
  },
  server: { port: 3000 },
  base: '/',
})
```

### Missing Configurations
- **No `build.rollupOptions.output.manualChunks`** — No vendor chunking strategy
- **No `build.chunkSizeWarningLimit`** — Default 500KB warning
- **No compression plugin** — No gzip/brotli pre-compression
- **No `optimizeDeps.include/exclude`** — No dependency optimization hints
- **No `css.preprocessorOptions`** — No global SCSS variables injection
- **No ESLint integration** — No `eslint-plugin-vue`
- **No Prettier** — No code formatting enforcement
- **No TypeScript checker** — No `vue-tsc` for type checking
- **No husky / lint-staged** — No pre-commit hooks

---

## 12. Optimization Instructions

### Priority 1: Critical — Immediate Impact (Do First)

#### 1.1 Remove Unused Icon Libraries

In `main.js`, remove icon CSS imports you're not using. Audit your actual UHMS pages (not template demo pages) and keep only what's needed. Typically only **Tabler Icons** + **Feather** are used:

```diff
// KEEP
import '@/assets/css/tabler-icons.css'
import '@/assets/css/feather.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// REMOVE all of these if not used in your custom pages:
- import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
- import '@fortawesome/fontawesome-free/css/all.min.css'
- import 'material-icons/css/material-icons.min.css'
- import 'material-icons/css/material-icons.css'
- import 'pe7-icon/dist/dist/pe-icon-7-stroke.css'
- import 'typicons.font/src/font/typicons.css'
- import 'weathericons/css/weather-icons.css'
- import 'ionicons-npm/css/ionicons.css'
- import 'remixicon/fonts/remixicon.css'
```

Then uninstall unused packages:
```bash
npm uninstall @fortawesome/fontawesome-free material-icons pe7-icon typicons.font weathericons ionicons-npm remixicon boxicons vue-simple-line
```

**Expected savings: ~800KB-1MB of CSS & fonts off initial load.**

---

#### 1.2 Switch Ant Design Vue to On-Demand Import

Instead of importing the entire library:
```js
// BEFORE (main.js)
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
app.use(Antd)
```

Import only what you use:
```js
// AFTER (main.js)
import 'ant-design-vue/dist/reset.css'
// No full Antd registration
```

Then in each component that needs Ant Design:
```vue
<script setup>
import { Table, Pagination, Tag } from 'ant-design-vue'
</script>
```

Or configure `unplugin-vue-components` for auto-import:
```bash
npm install -D unplugin-vue-components
```

```js
// vite.config.js
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: false })],
    }),
  ],
})
```

**Expected savings: ~1MB off bundle.**

---

#### 1.3 Convert Global Components to Local Imports

Move all 30+ `app.component()` calls from `main.js` to local imports in each component that uses them.

**Keep global only:**
- Layout components that are genuinely used everywhere (but even these should use layout routes instead)

**Move to local imports (delete from main.js):**
```js
// DELETE these from main.js and import locally where used:
app.component('all-kanban', AllKanban)
app.component('high-kanban', HighKanban)
app.component('medium-kanban', MediumKanban)
app.component('low-kanban', LowKanban)
app.component('contacts-table', ContactsTable)
app.component('notes-carousel', NotesCarousel)
app.component('social-carousel', SocialCarousel)
app.component('recent-folder', RecentFolders)
app.component('recent-files', RecentFiles)
app.component('lightbox-one', LightBoxOne)
app.component('lightbox-two', LightBoxTwo)
app.component('form-validation-one', FormValidationOne)
app.component('appointment-details-table', AppointmentDetailsTable)
app.component('transactions-details-table', TransactionsDetailsTable)
app.component('settings-sidebar', SettingsSidebar)
// ... and all modals
```

Then in each page that uses them:
```vue
<script setup>
import AllKanban from '@/views/pages/applications/kanban/all-kanban.vue'
</script>
```

**Expected savings: Moves ~200KB+ of component code from initial bundle to on-demand.**

---

#### 1.4 Fix Duplicate Import

In `main.js`:
```diff
  import DoctorAppointmentModal from '@/components/modal/doctor-appointment-modal.vue'
- import appointmentsModal from '@/components/modal/doctor-appointment-modal.vue'

  app.component('doctor-appointment-modal', DoctorAppointmentModal)
- app.component('appointments-modal', appointmentsModal)
```

---

### Priority 2: Important — Significant Impact

#### 2.1 Clean Up Router — Remove Commented Code

Delete all ~700 lines of commented-out routes from `src/router/index.js`. They're template demo routes that are not used. You can always reference the original template if needed.

Add a catch-all 404 route:
```js
{
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/views/pages/error/error-404.vue'),
}
```

---

#### 2.2 Use Router Layout Wrappers

Instead of each page including `<layouts-header>` and `<layouts-sidebar>`:

```js
// router/index.js
{
  path: '/admin',
  component: () => import('@/views/layouts/AdminLayout.vue'),
  children: [
    { path: 'dashboard', component: () => import('@/views/pages/admin/dashboard-index.vue') },
    // ... all admin routes
  ],
}
```

Create `AdminLayout.vue`:
```vue
<template>
  <layouts-header />
  <layouts-sidebar />
  <div class="page-wrapper">
    <router-view />
  </div>
</template>
```

**Benefits:** Layout components mount once and persist across navigation. Faster page transitions.

---

#### 2.3 Replace moment.js with date-fns or dayjs

The only `moment` usage is in `DateRangePicker.vue` for the jQuery daterangepicker plugin.

Option A: Replace `daterangepicker` with `VCalendar` date ranges (already installed).
Option B: Replace `moment` with `dayjs` (~2KB vs ~70KB gzipped):
```bash
npm install dayjs
npm uninstall daterangepicker
```

Update `vite.config.js` alias:
```diff
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
-     moment: 'moment/moment.js'
    },
  },
```

---

#### 2.4 Move Build Tools to devDependencies

```bash
npm install --save-dev sass sass-loader
npm uninstall sass sass-loader
npm install --save-dev sass
```

Note: `sass-loader` is not needed with Vite — Vite has built-in SCSS support. Remove it entirely:
```bash
npm uninstall sass-loader
```

---

#### 2.5 Remove Likely Unused Dependencies

After auditing which pages actually exist (not template demos), remove unused packages:
```bash
npm uninstall @j-t-mcc/vue3-chartjs @primeuix/themes @simonwep/pickr mdb-vue-ui-kit vue-easy-lightbox vue3-tags-input vue3-star-ratings vue-flag-icon vue3-autocounter
```

For drag & drop, keep only one:
```bash
npm uninstall dragula vue-draggable-next
# Keep vuedraggable if used, or remove all if not needed
```

---

#### 2.6 Fix Console Debug Override

Replace the aggressive console suppression with a safer approach:

```js
// main.js — Replace the current debug mode block with:
if (import.meta.env.VITE_DEBUG_MODE !== 'true') {
  console.log = () => {}
  console.debug = () => {}
  console.info = () => {}
  // DO NOT suppress console.warn and console.error — they report real issues
}
```

Also set `VITE_DEBUG_MODE=false` in production `.env`:
```env
VITE_DEBUG_MODE=false
```

---

### Priority 3: Recommended — Improves Quality

#### 3.1 Add Vite Build Optimization

```js
// vite.config.js
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: { port: 3000 },
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-vue': ['vue', 'vue-router', 'pinia'],
          'vendor-ui': ['ant-design-vue', 'bootstrap'],
          'vendor-charts': ['vue3-apexcharts'],
          'vendor-calendar': ['@fullcalendar/daygrid', '@fullcalendar/timegrid', '@fullcalendar/interaction', '@fullcalendar/vue3'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
    target: 'es2020',
    cssCodeSplit: true,
  },
})
```

---

#### 3.2 Add ESLint + Prettier

```bash
npm install -D eslint @eslint/js eslint-plugin-vue prettier eslint-config-prettier
```

Create `eslint.config.js`:
```js
import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
]
```

---

#### 3.3 Add TypeScript Config

Create `tsconfig.json` if not present:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "jsx": "preserve",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "noEmit": true,
    "paths": {
      "@/*": ["./src/*"]
    },
    "types": ["vite/client"]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

#### 3.4 Fix `DecodedToken` Type

```ts
// src/types/auth.ts
export interface DecodedToken {
  uuid: string
  name: string  // ADD THIS — used in authStore.login()
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

Also, `User` interface is missing the `name` field that `authStore` sets — add it:
```ts
export interface User {
  uuid: string
  name?: string  // ADD THIS
  email: string
  // ...
}
```

---

#### 3.5 Remove Debug Logging from Auth Guard

```diff
// src/router/authGuard.js
export const authGuard = (to, from, next) => {
  const authStore = useAuthStore()

- // Debug logging (remove in production)
- if (authStore.isSuperAdmin) console.log('isSuperAdmin: true')
- if (authStore.isAdmin) console.log('isAdmin: true')
- if (authStore.isLoggedIn) console.log('isLoggedIn: true')
- if (authStore.userDepartment) console.log('userDepartment:', authStore.userDepartment)
- if (authStore.isInvestigation) console.log('isInvestigation: true')
- if (authStore.isConsultation) console.log('isConsultation: true')
- if (authStore.isNursing) console.log('isNursing: true')
```

---

#### 3.6 Lazy-Load i18n Locales

```js
// src/i18n.js
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'

const savedLocale = localStorage.getItem('user_locale')

const i18n = createI18n({
  legacy: false,
  locale: savedLocale || import.meta.env.VITE_DEFAULT_LOCALE || 'en',
  fallbackLocale: 'en',
  messages: { en },
})

// Lazy-load non-default locales
if (savedLocale && savedLocale !== 'en') {
  import(`./locales/${savedLocale}.json`).then((messages) => {
    i18n.global.setLocaleMessage(savedLocale, messages.default)
  })
}

export default i18n
```

---

#### 3.7 Delete Duplicate Sidebar Menu

Remove `src/assets/json/sidebar-menu-one.json` (original template version). Only keep `sidebar-menu.json` (your customized UHMS version).

---

### Priority 4: Future Improvements

#### 4.1 Add Image Optimization
```bash
npm install -D vite-plugin-imagemin
```

#### 4.2 Add Compression Plugin
```bash
npm install -D vite-plugin-compression
```

```js
// vite.config.js
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    vue(),
    compression({ algorithm: 'gzip' }),
    compression({ algorithm: 'brotliCompress', ext: '.br' }),
  ],
})
```

#### 4.3 Add Pre-Commit Hooks
```bash
npm install -D husky lint-staged
npx husky init
```

#### 4.4 Add Unit Tests
```bash
npm install -D vitest @vue/test-utils jsdom
```

#### 4.5 Consider Migrating Router & Entry to TypeScript
Rename `main.js` → `main.ts`, `router/index.js` → `router/index.ts`, `i18n.js` → `i18n.ts` for full type coverage.

---

## Summary: Expected Impact

| Optimization | Estimated Size Reduction | Effort |
|-------------|-------------------------|--------|
| Remove unused icon libraries | ~800KB-1MB | Low |
| Ant Design Vue tree-shaking | ~1MB | Medium |
| Global → local component imports | ~200KB from initial load | Medium |
| Remove unused dependencies | ~300KB | Low |
| Replace moment.js | ~70KB (gzipped) | Medium |
| Router cleanup | Code clarity (no size change) | Low |
| Layout route wrappers | Faster navigation, no re-mounts | Medium |
| Vite build chunking | Better caching, smaller initial load | Low |
| **Total estimated initial load reduction** | **~2-3MB total, ~60-70% smaller** | |

---

## Order of Implementation

Apply these changes in this exact order to avoid breaking anything:

1. ✅ Fix duplicate import in `main.js` (1.4)
2. ✅ Remove dead code from router (2.1)
3. ✅ Fix console debug override (2.6)
4. ✅ Fix TypeScript types (3.4)
5. ✅ Remove debug logging from auth guard (3.5)
6. ✅ Remove unused icon CSS imports from `main.js` (1.1)
7. ✅ Uninstall unused npm packages (2.5)
8. ✅ Move `sass` to devDependencies, remove `sass-loader` (2.4)
9. ✅ Convert global components to local imports (1.3)
10. 🔧 Set up Ant Design Vue on-demand imports (1.2)
11. 🔧 Create layout route wrappers (2.2)
12. ✅ Add Vite build optimization config (3.1)
13. 🔧 Replace moment.js (2.3)
14. 🔧 Add ESLint + Prettier (3.2)
15. 🔧 Add TypeScript config (3.3)
16. ✅ Lazy-load i18n (3.6)
17. 🏗️ Future: image optimization, compression, tests, pre-commit hooks (4.x)

**Test after every change. Run `npm run dev` to verify no breakage, and `npm run build` to verify production builds.**

---

## 14. Changes Applied — Implementation Log

The following optimizations were implemented and verified with a successful `npm run build`:

### Files Modified

| File | Changes |
|------|---------|
| `src/main.js` | Removed duplicate `appointmentsModal` import; fixed console debug override (preserves `warn`/`error`); removed 7 unused icon CSS imports; removed 25+ unused global component registrations & imports; removed unused plugins (`FlagIcon`, `StarRating`, `Vue3Autocounter`); removed duplicate `bootstrap-icons` import |
| `src/router/index.js` | Deleted ~700 lines of commented-out template demo routes; kept only 20 active admin/clinic routes; added catch-all 404 redirect (`/:pathMatch(.*)*`) |
| `src/router/authGuard.js` | Removed all 15+ `console.log` debug statements |
| `src/types/auth.ts` | Added missing `name: string` to `DecodedToken`; added `name?: string` to `User` interface |
| `src/i18n.js` | English loaded eagerly; French lazy-loaded on demand via `loadLocale()` export |
| `vite.config.js` | Added `manualChunks` for vendor splitting (vue, antd, utils, calendar); removed stale `moment` alias |
| `package.json` | Moved `sass` to devDependencies; removed `sass-loader` |
| 14 admin page files | Fixed broken `@/stores/dataTable` imports → `@/stores/dataTableStore` |

### Files Created

| File | Purpose |
|------|---------|
| `src/components/modal/TodoAddModal.vue` | Stub — missing component referenced by consultation views |
| `src/components/modal/TodoViewModal.vue` | Stub — missing component referenced by consultation views |
| `src/components/modal/TodoDeleteModal.vue` | Stub — missing component referenced by consultation views |

### Packages Removed (18)

`@fortawesome/fontawesome-free`, `@j-t-mcc/vue3-chartjs`, `@primeuix/themes`, `@simonwep/pickr`, `boxicons`, `ionicons-npm`, `material-icons`, `mdb-vue-ui-kit`, `pe7-icon`, `sass-loader`, `themify-icons`, `typicons.font`, `vue-flag-icon`, `vue-simple-line`, `vue3-autocounter`, `vue3-star-ratings`, `weathericons`, `daterangepicker` (restored — see below)

### Packages Restored

`daterangepicker`, `jquery`, `moment` — required by the actively-used `DateRangePicker.vue` component

### Build Output Summary

| Chunk | Size | Gzip |
|-------|------|------|
| `vendor-vue` | 113 KB | 44 KB |
| `vendor-utils` | 173 KB | 59 KB |
| `vendor-calendar` | 228 KB | 68 KB |
| `vendor-antd` | 1,420 KB | 433 KB |
| `index` (app) | 1,300 KB | 361 KB |
| CSS total | ~1,138 KB | ~231 KB |

### Remaining Opportunities

- **Ant Design Vue tree-shaking** — The `vendor-antd` chunk (1.4 MB) imports the entire library. Setting up `unplugin-vue-components` with `AntDesignVueResolver` would reduce this to only the components used (~Table, Pagination).
- **Layout route wrappers** — Admin pages still inline `<layouts-header>` and `<layouts-sidebar>`. Creating an `AdminLayout.vue` wrapper + nested routes would centralize layout rendering.
- **ESLint + Prettier** — No linting configured yet.
- **tsconfig.json** — Missing TypeScript configuration.
- **Replace moment.js** — DateRangePicker pulls in moment (~300KB). Consider migrating to a Vue-native date range picker using dayjs.
