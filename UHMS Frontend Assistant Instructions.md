# UHMS Frontend Assistant Instructions

You are the UHMS frontend assistant. These instructions describe the **actual** project architecture, conventions, and constraints. Follow them strictly when generating code, components, or suggestions.

**Project:** UHMS (Ultimate Hospital Management System)  
**Stack:** Vue 3.5 + Vite 6 + Bootstrap 5 + Ant Design Vue + SCSS + Partial TypeScript  
**Repository:** `mcwakey/uhms-template` (branch: `beta`)

---

## 1. Project Structure & Architecture

### Actual Folder Layout

```
src/
├── assets/             # SCSS theme, icon CSS, fonts, images, static JSON
│   ├── css/            # feather.css, tabler-icons.css
│   ├── fonts/          # Icon font files
│   ├── img/            # Static images by domain (auth/, doctors/, profiles/, etc.)
│   ├── json/           # Static data (sidebar menus, constants)
│   └── scss/           # Theme system (_variables.scss, main.scss, components/, pages/, plugins/)
├── components/
│   ├── common-component/  # Shared: FilterIndex, DataTablePagination, DateRangePicker, etc.
│   └── modal/             # All modals: appointments, patients, calendar, services, etc.
├── composables/        # usePagination.ts (add new composables here)
├── locales/            # en.json, fr.json — i18n translation files
├── router/             # index.js (route definitions) + authGuard.js (permission guard)
├── stores/             # Pinia: authStore.ts, patientStore.ts, appointmentStore.ts, staffStore.ts, dataTableStore.ts
├── types/              # TypeScript types: auth.ts, common.ts, patient.ts, appointment.ts, staff.ts, index.ts (barrel)
├── utils/              # axios.ts (HTTP client), notifications/toast.ts (toast helpers)
├── views/
│   ├── layouts/        # Layout shells: headers, sidebars, footer, theme-settings
│   └── pages/          # Page views by domain (admin/, doctor/, patient/, authentication/, error/, etc.)
├── App.vue             # Root: <div class="main-wrapper"><router-view /></div>
├── i18n.js             # vue-i18n config + setLocale() helper
└── main.js             # Entry point: plugins, global components, CSS imports
```

### Rules

* **Do not** add new npm packages without approval.
* **No** inline API calls in components — use stores or composables.
* HTTP requests go through `utils/axios.ts` — never import `axios` directly in components.
* Shared state lives in Pinia stores (`stores/`) — never as local component data.
* All routes are in `router/index.js`, lazy-loaded, and protected by `authGuard.js`.
* **Local imports by default** — only register globally what appears in layout shells (see §2).
* TypeScript is used for stores, types, composables, and utils. Vue SFCs use `<script setup>` (JS or TS).
* Env variables use `VITE_` prefix, accessed via `import.meta.env`.

---

## 2. Components & Reusability

### Import Strategy

| Category           | Location                          | Import Method          |
|--------------------|-----------------------------------|------------------------|
| Page views         | `views/pages/{domain}/`           | Lazy-loaded by router  |
| Layout shells      | `views/layouts/`                  | Global (in `main.js`)  |
| Shared UI          | `components/common-component/`    | Global or local         |
| Modals             | `components/modal/`               | **Always local**        |
| Composables        | `composables/`                    | `import` in `<script setup>` |

### Currently Registered Global Components

These are the **only** globally registered components (in `main.js`):

* Layout: `layouts-header`, `layouts-sidebar`, `sidebar-menu`, `theme-settings`
* Data: `filter-index`, `DataTablePagination`, `data-table-pagination`
* Forms: `vue-feather`, `vue3-select`, `vue-multiselect`, `date-picker`

**Do not add more global registrations** unless the component is used in 3+ layout files.

### Component Standards

* Always use `<script setup>` with Composition API.
* Define props: `defineProps<{ ... }>()` or `defineProps({ ... })`.
* Define emits: `defineEmits<{ ... }>()` or `defineEmits([...])`.
* Keep components focused — one responsibility each.
* Extract repeated patterns into reusable components in `components/common-component/`.

---

## 3. Data & API Layer

### Axios Client (`utils/axios.ts`)

* Base URL from `VITE_API_BASE_URL` (defaults to `http://localhost:8000/api`).
* Request interceptor: attaches `Bearer` token from persisted auth store.
* Response interceptor: 401 → tries token refresh (`/auth/token/refresh/`) → retries original request → on failure, logs out.
* 10-second timeout.

### Existing Stores

| Store                 | File                          | Responsibilities                    |
|-----------------------|-------------------------------|-------------------------------------|
| `useAuthStore`        | `stores/authStore.ts`         | JWT auth, login/logout, roles       |
| `usePatientStore`     | `stores/patientStore.ts`      | Patient CRUD                        |
| `useAppointmentStore` | `stores/appointmentStore.ts`  | Appointment management              |
| `useStaffStore`       | `stores/staffStore.ts`        | Staff/doctor management             |
| `useDataTableStore`   | `stores/dataTableStore.ts`    | Shared table state                  |

### Existing Composables

| Composable       | File                           | Purpose                    |
|------------------|--------------------------------|----------------------------|
| `usePagination`  | `composables/usePagination.ts` | Client-side pagination     |

### Data Flow

```
Component → Store action / Composable → utils/axios.ts → Backend API
                    ↓
              Pinia (reactive state)
                    ↓
              Component (auto-updates via reactivity)
```

### Notifications

Use helpers from `utils/notifications/toast.ts`:
```ts
import { notifySuccess, notifyError, notifyWarning, notifyInfo } from '@/utils/notifications/toast'
```

### Rules

* No `axios.get/post` directly in component code.
* Always handle loading, error, and empty states.
* Never hardcode API URLs.

---

## 4. Styling & Theme

### SCSS System (`assets/scss/`)

* All styles compiled through `main.scss` using `@forward`.
* Theme colors defined as CSS custom properties in `_variables.scss` on `:root`.
* Dark mode: `[data-bs-theme=dark]` override block in `_variables.scss`.
* RTL support: `structure/rtl`.

### Key Colors (from `_variables.scss`)

| Token          | Value      | Usage                        |
|----------------|------------|------------------------------|
| `--primary`    | `#2E37A4`  | Primary actions, headings    |
| `--secondary`  | `#00D3C7`  | Secondary elements           |
| `--success`    | `#27AE60`  | Success states               |
| `--warning`    | `#E2B93B`  | Warnings                     |
| `--danger`     | `#EF1E1E`  | Errors, destructive actions  |
| `--info`       | `#2F80ED`  | Information                  |

Every color has `-hover`, `-transparent`, and `-rgb` variants.

### Rules

* Use `var(--color-name)` — never hardcode hex values.
* No inline styles unless absolutely necessary.
* New page styles → `assets/scss/pages/` + add `@forward` in `main.scss`.
* Plugin overrides → `assets/scss/plugins/`.

### UI Libraries & Icons

* **Bootstrap 5** — Primary grid, layout, utilities, buttons, forms.
* **Ant Design Vue** — Data tables (`<a-table>`), complex form items.
* **Icons:** Feather (`<vue-feather>`), Bootstrap Icons (`bi bi-*`), Tabler (`ti ti-*`), Remix (`ri-*`).
* Prefer Feather and Bootstrap Icons for new code.

### Form Components

* Validation: `vee-validate` + `yup`.
* Phone: `vue-tel-input`.
* Dropdowns: `vue3-select-component` or `vue-multiselect`.
* Dates: `vue3-datepicker`, `daterangepicker` (with jQuery/moment — legacy).

### Tables

* Use `<a-table>` from Ant Design Vue.
* Pagination: `DataTablePagination` component or `usePagination` composable.
* Column types: `TableColumn` from `types/common.ts`.

---

## 5. Routing & Auth

### Route Definitions (`router/index.js`)

* All components lazy-loaded: `component: () => import('@/views/pages/...')`.
* Routes grouped by domain path prefix with `children: []`.
* Catch-all `/:pathMatch(.*)*` redirects to `/not-found`.

### Route Meta Fields

| Field              | Meaning                                    |
|--------------------|--------------------------------------------|
| `requiresAuth`    | Requires authentication                    |
| `guestOnly`       | Only accessible when NOT logged in         |
| `isSuperAdmin`    | Super admin exclusive                      |
| `isAdmin`         | Admin + super admin access                 |
| `isConsultation`  | Consultation department                    |
| `isInvestigation` | Investigation department                   |
| `isNursing`       | Nursing department                         |

### Auth Guard (`router/authGuard.js`)

Checks in order: super admin → admin → requiresAuth → department permissions → guestOnly.
Super admin bypasses all department checks.

### Adding New Routes

1. Add lazy-loaded route in `router/index.js` under the appropriate domain group.
2. Set correct `meta` fields.
3. Create page component in `views/pages/{domain}/`.

---

## 6. Internationalization

### Setup (`i18n.js`)

* `vue-i18n` in Composition API mode (`legacy: false`).
* Both `en.json` and `fr.json` loaded eagerly.
* Default: `localStorage('user_locale')` → `VITE_DEFAULT_LOCALE` → `'en'`.
* Fallback: `'en'`.

### In Templates

```vue
{{ $t('key.path') }}
```

### In Script

```js
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
t('key.path')
```

### Switching Locale

```js
import { setLocale } from '@/i18n'
setLocale('fr')  // Persists to localStorage
```

### Adding Keys

* Add to **both** `locales/en.json` and `locales/fr.json`.
* Use nested paths: `{ "patients": { "title": "Patient List" } }`.

---

## 7. TypeScript Conventions

### Type Files (`types/`)

* `index.ts` — barrel re-export of all type files.
* `auth.ts` — `User`, `LoginCredentials`, `AuthResponse`, `AuthState`, `DecodedToken`.
* `common.ts` — `ApiResponse<T>`, `PaginationConfig`, `TableColumn`, `SelectOption`, `DateRange`, `TimeSlot`.
* `patient.ts`, `appointment.ts`, `staff.ts` — domain-specific types.

### Rules

* Import from `@/types` (barrel) — not from individual files.
* New domain types → new file in `types/` + add re-export in `index.ts`.
* Use TypeScript for: stores, composables, utils, types.
* `<script setup lang="ts">` when types are needed in SFCs.

---

## 8. Build & Environment

### Vite Config

* Dev server: port 3000.
* Aliases: `@` → `src/`, `moment` → `moment/moment.js` (**do not remove** — required for daterangepicker CJS compat).
* Manual chunks: `vendor-vue`, `vendor-antd`, `vendor-utils`, `vendor-calendar`.

### Env Variables

| Variable              | Purpose                   |
|-----------------------|---------------------------|
| `VITE_API_BASE_URL`  | Backend API URL           |
| `VITE_DEFAULT_LOCALE` | Default language          |
| `VITE_DEBUG_MODE`    | Enable verbose logging    |

### Console Logging

* `console.log/debug/info` suppressed when `VITE_DEBUG_MODE !== 'true'`.
* `console.warn/error` are **never** suppressed.
* Do not add `console.log` to committed code.

---

## 9. Security Rules

* All auth through `authStore` + Axios interceptors — never in components.
* Route protection via `authGuard.js` meta fields — never duplicated in components.
* Tokens in Pinia (persisted to localStorage) — never in cookies or sessionStorage.
* Never hardcode credentials, tokens, or API keys.

---

## 10. Performance Rules

* All routes lazy-loaded via `() => import(...)`.
* Heavy components (modals, charts, editors) conditionally rendered or lazy-loaded.
* Prefer `v-if` over `v-show` for expensive components.
* Images: WebP where possible, `loading="lazy"`.
* Never remove the `moment: 'moment/moment.js'` Vite alias.

---

## 11. Code Quality

* `<script setup>` + Composition API for all new code.
* Remove unused variables, imports, dead code.
* Comment complex logic only — do not over-comment obvious code.
* Naming conventions:
  * Components: `PascalCase.vue` (e.g., `PatientDetailsModal.vue`)
  * Composables: `useCamelCase.ts` (e.g., `usePagination.ts`)
  * Stores: `camelCaseStore.ts` (e.g., `authStore.ts`)
  * Types: `PascalCase` interfaces (e.g., `ApiResponse`, `DecodedToken`)
* SFC block order: `<template>` → `<script setup>` → `<style>`.

---

## 12. Output Requirements

When creating new pages or features, provide:

1. **Component hierarchy** — what components exist and how they nest.
2. **Props / emits definitions** — typed interfaces.
3. **Store usage** — which stores are needed and what actions/getters.
4. **Composable usage** — which composables (existing or new).
5. **API integration** — endpoint, request/response shape, error handling.
6. **Translation keys** — entries for both `en.json` and `fr.json`.
7. **SCSS** — which existing variables/classes to use.

Only produce frontend-ready Vue 3 code. Do not modify backend or database logic.

---

**Bottom Line:** Match the existing patterns exactly. Use the established folder structure, naming conventions, and dependency set. Do not introduce new libraries, architectural changes, or shortcuts without explicit approval.