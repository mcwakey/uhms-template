# UHMS Frontend Design System & Development Guidelines

**Project:** UHMS (Ultimate Hospital Management System)  
**Template Base:** Preclinic - Medical & Hospital - Bootstrap 5 Admin Dashboard  
**Framework:** Vue 3.5 + Vite 6 + SCSS + Partial TypeScript  
**Repository:** `mcwakey/uhms-template` (branch: `beta`)  
**Last Updated:** March 3, 2026

---

## 1. Project Structure & Architecture Rules

### Current Folder Structure

```
src/
├── assets/             # SCSS, fonts, images, JSON data files
│   ├── css/            # Pre-built icon CSS (feather, tabler-icons)
│   ├── fonts/          # Icon font files
│   ├── img/            # Static images (auth, bg, doctors, profiles, etc.)
│   ├── json/           # Static JSON data (sidebar menus, constants)
│   └── scss/           # Theme SCSS (variables, components, pages, plugins, utils)
├── components/
│   ├── common-component/  # Shared UI: filters, pagination, date pickers, canvases
│   └── modal/             # All modal components (appointments, patients, calendar, etc.)
├── composables/        # Reusable composition functions (usePagination, etc.)
├── locales/            # i18n translation files (en.json, fr.json)
├── router/             # Route definitions (index.js) + auth guard (authGuard.js)
├── stores/             # Pinia stores (authStore, patientStore, appointmentStore, etc.)
├── types/              # TypeScript type definitions (auth, patient, appointment, common, staff)
├── utils/              # Axios client (axios.ts), toast helpers (notifications/toast.ts)
├── views/
│   ├── layouts/        # Layout shells: headers, sidebars, footer, theme-settings
│   └── pages/          # Page views organized by domain (admin/, doctor/, patient/, etc.)
├── App.vue             # Root component (bare wrapper with <router-view />)
├── i18n.js             # vue-i18n setup with locale persistence
└── main.js             # App entry: plugins, global components, CSS imports
```

### Architecture Rules

* **Do not** introduce new npm packages without explicit approval.
* Follow separation of concerns: **no inline API calls inside components**.
* Use composables (`composables/`) for reusable logic and data operations.
* Use the Axios client (`utils/axios.ts`) for all HTTP requests — never import `axios` directly in components.
* Use Pinia stores (`stores/`) for shared state — never store shared data in local component state.
* All routes are defined in `router/index.js`, lazy-loaded via dynamic `import()`, and protected by `authGuard.js`.
* **Local imports preferred** — only register components globally when they are used in 3+ layout files (see §2).
* TypeScript is used for stores, types, utils, and composables. Vue SFCs remain `.vue` with `<script setup>` (JS or TS).
* Environment variables use `VITE_` prefix and are accessed via `import.meta.env`.

---

## 2. Component Guidelines

### File Organization

| Category           | Location                          | Import Strategy    |
|--------------------|-----------------------------------|--------------------|
| Page views         | `views/pages/{domain}/`           | Lazy-loaded by router |
| Layout shells      | `views/layouts/`                  | Global registration (used in every page) |
| Shared UI          | `components/common-component/`    | Global or local depending on usage |
| Modals             | `components/modal/`               | **Always local import** — never global |
| Composables        | `composables/`                    | Import in `<script setup>` |

### Global Components (registered in `main.js`)

Only these components are registered globally because they appear in layout shells across all pages:

* `layouts-header` / `layouts-sidebar` / `sidebar-menu` / `theme-settings` — Layout structure
* `filter-index` / `DataTablePagination` / `data-table-pagination` — Common data UI
* `vue-feather` / `vue3-select` / `vue-multiselect` / `date-picker` — Form primitives

**Everything else must be imported locally** in the component that uses it.

### Component Standards

* Use `<script setup>` and Composition API for all new components.
* Define **props** with types and defaults using `defineProps<{}>()` or `defineProps({})`.
* Define **emits** explicitly using `defineEmits<{}>()` or `defineEmits([])`.
* Extract repeated template patterns into reusable components.
* Keep components focused — one responsibility per component.

---

## 3. API & Data Handling

### Axios Client (`utils/axios.ts`)

* Singleton instance with `baseURL` from `VITE_API_BASE_URL` env variable.
* **Request interceptor:** Attaches JWT `Bearer` token from persisted auth store.
* **Response interceptor:** Handles 401 → automatic token refresh via `/auth/token/refresh/`, then retries original request. On failure, triggers logout and redirect.
* Timeout: 10 seconds.

### Data Flow Pattern

```
Component → Composable/Store → axios.ts → Backend API
                ↓
         Pinia Store (shared state)
                ↓
         Component (reactive binding)
```

### Rules

* **No** `axios.get/post` calls directly in components — always go through a store action or composable.
* Use `notifySuccess()` / `notifyError()` from `utils/notifications/toast.ts` for user feedback.
* Handle loading, error, and empty states in composables or stores.
* API URLs must come from `.env` — never hardcode.

### Existing Stores

| Store              | File                    | Purpose                                    |
|--------------------|-------------------------|--------------------------------------------|
| `useAuthStore`     | `stores/authStore.ts`   | JWT auth, login/logout, role management    |
| `usePatientStore`  | `stores/patientStore.ts`| Patient CRUD operations                    |
| `useAppointmentStore` | `stores/appointmentStore.ts` | Appointment management              |
| `useStaffStore`    | `stores/staffStore.ts`  | Staff/doctor management                    |
| `useDataTableStore`| `stores/dataTableStore.ts` | Shared table state and operations       |

### Existing Composables

| Composable         | File                       | Purpose                         |
|--------------------|----------------------------|---------------------------------|
| `usePagination`    | `composables/usePagination.ts` | Client-side pagination logic |

---

## 4. Styling & Theme System

### SCSS Architecture

All styles live in `assets/scss/` and are compiled through `main.scss`:

```
main.scss
├── _variables.scss        # CSS custom properties (colors, sizing, shadows)
├── utils/mixins           # SCSS mixins
├── structure/             # header, sidebar, layout, theme, rtl
├── components/            # accordions, avatar, badge, buttons, card, forms, tables, etc.
├── pages/                 # Page-specific styles (login, doctors, appointment, etc.)
└── plugins/               # 3rd-party plugin overrides (sweetalert2, quill, apexcharts, etc.)
```

### CSS Variables (from `_variables.scss`)

All theming uses CSS custom properties on `:root`, with a `[data-bs-theme=dark]` override block for dark mode.

**Primary Colors:**

| Token          | Light              | Dark               |
|----------------|--------------------|--------------------|
| `--primary`    | `#2E37A4`          | (same)             |
| `--secondary`  | `#00D3C7`          | (same)             |
| `--success`    | `#27AE60`          | (same)             |
| `--warning`    | `#E2B93B`          | (same)             |
| `--danger`     | `#EF1E1E`          | (same)             |
| `--info`       | `#2F80ED`          | (same)             |

**Neutral Scale:** `--gray-100` through `--gray-900` + `--light-100` through `--light-900`

**Semantic Tokens:** `--heading-color`, `--body-color`, `--border-color`, `--box-shadow`, `--box-shadow-sm`, `--box-shadow-lg`

**Transparent Variants:** Every color has a `-transparent` variant (e.g., `--primary-transparent: #ECEDF7`).

**Hover Variants:** Every color has a `-hover` variant (e.g., `--primary-hover: #3C449C`).

### Styling Rules

* Use CSS custom properties (`var(--primary)`, etc.) — never hardcode hex values.
* No inline styles unless absolutely necessary.
* All new page styles go in `assets/scss/pages/` and are `@forward`-ed in `main.scss`.
* All plugin style overrides go in `assets/scss/plugins/`.
* Dark mode is handled automatically via `[data-bs-theme=dark]` CSS variable overrides.
* RTL support is in `structure/rtl`.

### UI Libraries

| Library             | Usage                                          | Import         |
|---------------------|------------------------------------------------|----------------|
| **Bootstrap 5**     | Primary layout, grid, utilities, buttons, forms| Global CSS     |
| **Ant Design Vue**  | Data tables (`<a-table>`), select, form items  | Global plugin  |
| **Bootstrap Icons** | General icons                                  | Global CSS     |
| **Feather Icons**   | Via `vue-feather` component                    | Global component|
| **Tabler Icons**    | Supplementary icons                            | Global CSS     |
| **Remix Icons**     | Supplementary icons                            | Global CSS     |

### Icon Usage

* Use `<vue-feather type="icon-name" />` for Feather icons.
* Use `<i class="bi bi-icon-name"></i>` for Bootstrap Icons.
* Use `<i class="ti ti-icon-name"></i>` for Tabler Icons.
* Use `<i class="ri-icon-name"></i>` for Remix Icons.
* Prefer Feather and Bootstrap Icons for new components; use Tabler/Remix only where they already exist.

### Forms

* All forms use `vee-validate` + `yup` for validation.
* Field-level error messages displayed below inputs.
* Use `vue-tel-input` for phone number fields.
* Use `vue3-select-component` or `vue-multiselect` for dropdowns.
* Use `vue3-datepicker` for date fields.

### Tables

* Use Ant Design Vue `<a-table>` for data tables.
* Use `DataTablePagination` component for custom pagination controls.
* Use `usePagination` composable for client-side pagination logic.
* Column definitions follow the `TableColumn` type from `types/common.ts`.

---

## 5. Routing & Navigation

### Route Structure

Routes are defined in `router/index.js` using flat children arrays grouped by domain:

```
/                         → redirects to /login
/login                    → Login (guestOnly)
/forget                   → Forgot password (guestOnly)
/admin/dashboard          → Admin dashboard (requiresAuth, isAdmin, isSuperAdmin)
/admin/clinic/patients    → Patient list (requiresAuth, isAdmin)
/admin/clinic/appointments → Appointment list (requiresAuth, isAdmin)
...
/:pathMatch(.*)*          → Catch-all 404
```

### Route Meta Fields

| Meta Field        | Purpose                                        |
|-------------------|------------------------------------------------|
| `requiresAuth`   | Must be logged in                              |
| `guestOnly`      | Only accessible when NOT logged in             |
| `isSuperAdmin`   | Super admin exclusive                          |
| `isAdmin`        | Admin + super admin                            |
| `isConsultation`  | Consultation department users                 |
| `isInvestigation` | Investigation department users                |
| `isNursing`       | Nursing department users                      |

### Auth Guard (`router/authGuard.js`)

Permission hierarchy (checked top to bottom):
1. **Super Admin** — Full access to all routes
2. **Admin** — Access to admin routes + assigned department
3. **Department Users** — Access only to their department routes
4. **Guest** — Only guest routes (login, forgot password)

### Adding New Routes

* All route components must be lazy-loaded: `component: () => import('@/views/pages/...')`.
* Add appropriate `meta` fields for access control.
* Group related routes under a common path prefix with `children: []`.

---

## 6. Internationalization (i18n)

### Setup (`i18n.js`)

* Uses `vue-i18n` in Composition API mode (`legacy: false`).
* All locale messages loaded eagerly from `locales/en.json` and `locales/fr.json`.
* Default locale resolved from: `localStorage('user_locale')` → `VITE_DEFAULT_LOCALE` env → `'en'`.
* Fallback locale: `'en'`.

### Usage

```vue
<template>
  {{ $t('key.path') }}
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
```

### Switching Locale

```js
import { setLocale } from '@/i18n'
setLocale('fr')  // Persists to localStorage automatically
```

### Adding New Translation Keys

* Add to **both** `locales/en.json` and `locales/fr.json`.
* Use nested key paths: `{ "patients": { "title": "Patient List" } }`.

---

## 7. TypeScript Conventions

### Type Files (`types/`)

| File              | Contains                                       |
|-------------------|-------------------------------------------------|
| `index.ts`        | Re-exports all types from a central barrel file |
| `auth.ts`         | `User`, `LoginCredentials`, `AuthResponse`, `AuthState`, `DecodedToken` |
| `common.ts`       | `ApiResponse<T>`, `PaginationConfig`, `TableColumn`, `SelectOption`, `DateRange`, `TimeSlot` |
| `patient.ts`      | Patient-related interfaces                     |
| `appointment.ts`  | Appointment-related interfaces                 |
| `staff.ts`        | Staff/doctor-related interfaces                |

### Rules

* Import types from `@/types` (barrel file) — not individual files.
* New domain types go in a dedicated file under `types/` and are re-exported in `index.ts`.
* Use TypeScript for: stores, composables, utils, and type definitions.
* Vue SFCs can use `<script setup lang="ts">` when types are needed.

---

## 8. Build & Dev Configuration

### Vite Config (`vite.config.js`)

* **Dev server:** Port 3000
* **Aliases:** `@` → `src/`, `moment` → `moment/moment.js` (required for daterangepicker CJS compat)
* **Manual chunks:** `vendor-vue`, `vendor-antd`, `vendor-utils`, `vendor-calendar`
* **Plugins:** `@vitejs/plugin-vue`, `vite-plugin-vue-devtools`

### Environment Variables

| Variable               | Purpose                        | Example                          |
|------------------------|--------------------------------|----------------------------------|
| `VITE_API_BASE_URL`   | Backend API base URL            | `http://localhost:8000/api`      |
| `VITE_DEFAULT_LOCALE`  | Default language               | `en`                             |
| `VITE_DEBUG_MODE`      | Enable verbose console logging | `true` / `false`                 |

### Console Logging

* In production (when `VITE_DEBUG_MODE !== 'true'`), `console.log`, `console.debug`, and `console.info` are suppressed.
* `console.warn` and `console.error` are **never** suppressed — they report real issues.
* **Do not** add `console.log` statements to committed code.

### NPM Scripts

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build
npm run preview  # Preview production build locally
```

---

## 9. Security & Authentication

### Auth Flow

1. User submits credentials → `authStore.login()` → POST to `/auth/token/` → receives JWT `access` + `refresh` tokens.
2. `access` token decoded via `jwt-decode` → user info stored in Pinia (`authStore`).
3. Store persisted to `localStorage` via `pinia-plugin-persistedstate`.
4. On 401 response → Axios interceptor attempts token refresh via `/auth/token/refresh/`.
5. On refresh failure → `authStore.logout()` → redirect to login.

### Rules

* **Never** hardcode credentials, tokens, or API secrets.
* All auth logic lives in `stores/authStore.ts` — no auth code in components.
* Route protection is handled by `router/authGuard.js` — do not duplicate in components.
* Tokens are stored in Pinia (persisted to localStorage) — never in cookies or sessionStorage.
* Sensitive routes must have appropriate `meta` fields (`requiresAuth`, `isAdmin`, etc.).

---

## 10. Performance Rules

* All route components must be **lazy-loaded** via dynamic `import()`.
* Heavy components (modals, charts, rich editors) should be lazy-loaded or conditionally rendered.
* Prefer `v-if` over `v-show` for components with expensive mount costs.
* Optimize images: use WebP format where possible, add `loading="lazy"` attribute.
* Do not import entire libraries globally if only a few components are needed.
* **Critical:** The `moment: 'moment/moment.js'` Vite alias is required — do not remove it. `daterangepicker` depends on CJS `require('moment')`.

---

## 11. Code Quality Standards

* Use `<script setup>` and Composition API for all new code.
* Remove unused variables, imports, and dead code.
* Comment complex logic — do not comment obvious code.
* Use descriptive, consistent naming:
  * Components: `PascalCase` filenames (e.g., `PatientDetailsModal.vue`)
  * Composables: `camelCase` with `use` prefix (e.g., `usePagination`)
  * Stores: `camelCase` with `Store` suffix (e.g., `authStore.ts`)
  * Types: `PascalCase` interfaces (e.g., `ApiResponse`, `DecodedToken`)
* Keep template, script, and style blocks in that order within SFCs.

---

## 12. Key Dependencies Reference

### Production

| Package                  | Purpose                                      |
|--------------------------|----------------------------------------------|
| `vue` 3.5               | Core framework                               |
| `vue-router` 4.6        | Client-side routing                          |
| `pinia` 3.0             | State management                             |
| `pinia-plugin-persistedstate` | Persist Pinia stores to localStorage   |
| `axios` 1.13            | HTTP client                                  |
| `ant-design-vue` 4.2    | Data tables, form components                 |
| `bootstrap` 5.3         | Primary CSS framework                        |
| `vee-validate` 4.15     | Form validation                              |
| `yup` 1.7               | Schema validation                            |
| `vue-i18n` 9.14         | Internationalization                         |
| `jwt-decode` 4.0        | JWT token decoding                           |
| `vue-toastification`    | Toast notifications                          |
| `vue-sweetalert2`       | Confirmation / alert dialogs                 |
| `vue3-apexcharts`       | Charts and graphs                            |
| `@fullcalendar/vue3`    | Calendar views                               |
| `quill` 2.0             | Rich text editor                             |
| `moment` + `daterangepicker` + `jquery` | Date range picking (legacy, CJS) |
| `vue-feather`           | Feather icon components                      |
| `vue3-datepicker`       | Date picker component                        |
| `vue3-select-component` | Enhanced select dropdowns                    |
| `vue-multiselect`       | Multi-select dropdowns                       |
| `vue-tel-input`         | Phone number input with country codes        |
| `v-calendar`            | Calendar/date picking                        |
| `simplebar-vue`         | Custom scrollbars                            |
| `dragula` / `vuedraggable` / `vue-draggable-next` | Drag and drop           |

### Dev Only

| Package                      | Purpose                         |
|------------------------------|----------------------------------|
| `vite` 6.0                   | Build tool                      |
| `@vitejs/plugin-vue`         | Vue SFC support for Vite        |
| `vite-plugin-vue-devtools`   | Vue DevTools integration        |
| `sass` 1.94                  | SCSS compilation                |
| `leaflet` + `@vue-leaflet/vue-leaflet` | Maps (dev dependency) |

---

**Bottom Line:** All code must adhere to this design system. Match the existing patterns, use the established folder structure, and do not introduce new dependencies or architectural changes without approval. Focus on performance, modularity, and clean code.
