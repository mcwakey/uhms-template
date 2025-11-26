# Vue 3 + TypeScript Style Guide

**Version:** 1.0.0  
**Last Updated:** November 3, 2025  
**Status:** Active

This document defines the coding standards and best practices for the UHMS Vue.js application. All code must follow these guidelines to ensure consistency, maintainability, and quality.

---

## Table of Contents

1. [File Naming Conventions](#file-naming-conventions)
2. [Component Structure](#component-structure)
3. [TypeScript Usage](#typescript-usage)
4. [Code Style](#code-style)
5. [State Management (Pinia Stores)](#state-management-pinia-stores)
6. [Component Communication](#component-communication)
7. [Import/Export Patterns](#importexport-patterns)
8. [Modal Design Standards](#modal-design-standards)
9. [Before/After Migration Examples](#beforeafter-migration-examples)

---

## 1. File Naming Conventions

### Components
- **Standard:** PascalCase for all Vue components
- **Format:** `ComponentName.vue`

✅ **Correct:**
```
AppointmentDetailsCanvas.vue
RescheduleModal.vue
FilterIndex.vue
LayoutsHeader.vue
```

❌ **Incorrect:**
```
appointment-details-canvas.vue
reschedule-modal.vue
filter-index.vue
layouts-header.vue
```

### Stores
- **Standard:** camelCase with "Store" suffix for store files
- **Format:** `entityNameStore.ts`

✅ **Correct:**
```
appointmentStore.ts
authStore.ts
patientStore.ts
dataTableStore.ts
```

❌ **Incorrect:**
```
appointment.js
auth.js
patient-store.ts
dataTable.js (composable pattern)
```

### Type Definition Files
- **Standard:** camelCase for type files
- **Format:** `entityName.ts`

✅ **Correct:**
```
src/types/appointment.ts
src/types/patient.ts
src/types/common.ts
```

---

## 2. Component Structure

### Use `<script setup lang="ts">` for All Components

**Standard:** All Vue 3 components must use Composition API with `<script setup lang="ts">`

#### Component Template Order:
```vue
<template>
  <!-- Component markup -->
</template>

<script setup lang="ts">
// 1. Imports
// 2. Type definitions (if inline)
// 3. Props & Emits
// 4. Composables & Stores
// 5. Reactive state
// 6. Computed properties
// 7. Watchers
// 8. Methods
// 9. Lifecycle hooks
</script>

<style scoped>
/* Component styles (optional) */
</style>
```

### Props Definition

✅ **Correct:**
```typescript
interface Props {
  visible: boolean
  appointment?: Appointment
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  loading: false,
})
```

❌ **Incorrect (Options API):**
```javascript
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
}
```

### Emits Definition

✅ **Correct:**
```typescript
interface Emits {
  (e: 'update:visible', value: boolean): void
  (e: 'save', data: AppointmentFormData): void
}

const emit = defineEmits<Emits>()
```

❌ **Incorrect:**
```javascript
// Implicit emits (no definition)
this.$emit('update:visible', false)
```

---

## 3. TypeScript Usage

### Gradual Migration Approach
- **TypeScript Config:** Gradual settings with `strict: false`, `noImplicitAny: false`, `skipLibCheck: true`
- **Goal:** Enable TypeScript benefits while allowing JavaScript to coexist during migration

### Type Definitions

**Use shared type definitions from `src/types/`**

✅ **Correct:**
```typescript
import type { Appointment, AppointmentStatus } from '@/types'

const appointment = ref<Appointment | null>(null)
const status = ref<AppointmentStatus>('SCHEDULED')
```

❌ **Incorrect:**
```typescript
// Inline types duplicated across files
const appointment = ref<any>(null)
```

### Interface vs Type

**Preference:** Use `interface` for object shapes, `type` for unions/intersections

✅ **Correct:**
```typescript
// Interface for object shapes
export interface Appointment {
  id: number
  patient_name: string
  status: AppointmentStatus
}

// Type for unions
export type AppointmentStatus = 
  | 'SCHEDULED' 
  | 'IN-PROGRESS' 
  | 'COMPLETED' 
  | 'CANCELLED'
```

### Ref and Reactive Typing

✅ **Correct:**
```typescript
const loading = ref<boolean>(false)
const appointments = ref<Appointment[]>([])
const searchQuery = ref<string>('')
```

❌ **Incorrect:**
```typescript
const loading = ref(false) // Type inferred but not explicit
const appointments = ref([]) // Type is any[]
```

---

## 4. Code Style

### Prettier Configuration

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

### Key Style Rules

1. **No semicolons** - Omit semicolons at end of statements
2. **Single quotes** - Use single quotes for strings
3. **2-space indentation** - All files use 2 spaces
4. **Trailing commas** - ES5 style (objects, arrays)
5. **Line length** - Max 100 characters

✅ **Correct:**
```typescript
import { ref, computed } from 'vue'
import type { Appointment } from '@/types'

const appointments = ref<Appointment[]>([])
const totalCount = computed(() => appointments.value.length)
```

❌ **Incorrect:**
```typescript
import { ref, computed } from "vue";
import type { Appointment } from "@/types";

const appointments = ref<Appointment[]>([]);
const totalCount = computed(() => appointments.value.length);
```

### Variable and Function Naming

- **Variables/Properties:** camelCase
- **Constants:** UPPER_SNAKE_CASE (for true constants)
- **Functions/Methods:** camelCase with verb prefix
- **Boolean variables:** Prefix with `is`, `has`, `should`

✅ **Correct:**
```typescript
const appointmentData = ref<Appointment | null>(null)
const isLoading = ref<boolean>(false)
const hasError = ref<boolean>(false)

function fetchAppointments() { }
async function handleSubmit() { }
```

---

## 5. State Management (Pinia Stores)

### Store Structure

✅ **Correct:**
```typescript
// src/stores/appointmentStore.ts
import { defineStore } from 'pinia'
import type { Appointment } from '@/types'

interface AppointmentState {
  appointments: Appointment[]
  selectedAppointment: Appointment | null
  loading: boolean
}

export const useAppointmentStore = defineStore('appointment', {
  state: (): AppointmentState => ({
    appointments: [],
    selectedAppointment: null,
    loading: false,
  }),

  getters: {
    appointmentCount: (state) => state.appointments.length,
    hasSelectedAppointment: (state) => state.selectedAppointment !== null,
  },

  actions: {
    async fetchAppointments() {
      this.loading = true
      try {
        // Fetch logic
      } finally {
        this.loading = false
      }
    },

    setSelectedAppointment(appointment: Appointment) {
      this.selectedAppointment = appointment
    },

    clearSelectedAppointment() {
      this.selectedAppointment = null
    },
  },
})
```

### Store Naming Conventions

- **Action Names:** Verb-first (fetch, update, create, delete, set, clear)
- **Getter Names:** Descriptive or with `get` prefix
- **Store ID:** Lowercase single word matching entity

✅ **Correct:**
```typescript
// Actions
async fetchAppointment(id: number)
async updateAppointment(id: number, data: Partial<Appointment>)
setSelectedAppointment(appointment: Appointment)
clearStore()

// Getters
getFormattedAppointment: (state) => { }
isAdmin: (state) => !!state.user?.is_superuser
```

---

## 6. Component Communication

### Event Naming

**Standard:** kebab-case for custom events, `update:modelValue` pattern for v-model

✅ **Correct:**
```typescript
// In child component
emit('update:visible', false)
emit('appointment-created', appointmentData)
emit('save', formData)

// In parent component
<RescheduleModal
  v-model:visible="showModal"
  @appointment-created="handleCreated"
  @save="handleSave"
/>
```

❌ **Incorrect:**
```typescript
// camelCase events
emit('updateVisible', false)
emit('appointmentCreated', data)
```

### Props Passing

✅ **Correct:**
```vue
<AppointmentDetailsCanvas
  :appointment="selectedAppointment"
  :loading="isLoading"
  :is-telehealth-enabled="isTelehealthEnabled"
  @update-status="handleStatusUpdate"
/>
```

---

## 7. Import/Export Patterns

### Path Aliases

**Standard:** Use `@/` alias for all imports from `src/`

✅ **Correct:**
```typescript
import { useAppointmentStore } from '@/stores/appointmentStore'
import AppointmentDetailsCanvas from '@/components/common-component/AppointmentDetailsCanvas.vue'
import type { Appointment } from '@/types'
import axiosInstance from '@/utils/axios'
```

❌ **Incorrect:**
```typescript
import { useAppointmentStore } from '../../stores/appointmentStore'
import AppointmentDetailsCanvas from '../../../components/common-component/AppointmentDetailsCanvas.vue'
```

### Import Order

1. Vue core imports
2. Third-party library imports
3. Type imports
4. Local component imports
5. Store imports
6. Utility imports
7. Asset imports

✅ **Correct:**
```typescript
import { ref, computed, onMounted } from 'vue'
import { message } from 'ant-design-vue'
import type { Appointment, AppointmentStatus } from '@/types'
import AppointmentDetailsCanvas from '@/components/common-component/AppointmentDetailsCanvas.vue'
import { useAppointmentStore } from '@/stores/appointmentStore'
import axiosInstance from '@/utils/axios'
import doctorAvatar from '@/assets/img/doctors/doctor-03.jpg'
```

### Export Patterns

- **Components:** Default export (Vue components automatically use default export with `<script setup>`)
- **Stores:** Named export with `use` prefix
- **Types:** Named export
- **Utilities:** Named export

✅ **Correct:**
```typescript
// Stores
export const useAppointmentStore = defineStore('appointment', { })

// Types
export interface Appointment { }
export type AppointmentStatus = 'SCHEDULED' | 'COMPLETED'

// Utilities
export function formatDate(date: string) { }
export const API_BASE_URL = '/api'
```

---

## 8. Modal Design Standards

### Standard Modal Structure

All modals must follow the **SetAppointmentModal** design pattern for consistency across the application.

#### Required Components:

1. **Header with Gradient Background**
   - Gradient primary background (`bg-gradient-primary`)
   - White text with close button
   - Icon in avatar circle
   - Modal title and optional subtitle

2. **Loading State**
   - Centered spinner with message
   - Shown while data is being fetched

3. **Content Area**
   - Clean, organized form layout
   - Proper spacing (gap utilities)
   - Grouped related fields

4. **Footer with Actions**
   - Cancel button (left)
   - Primary action button (right)
   - Proper button styling and spacing

### Modal Template Structure

```vue
<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow">
        <!-- Header -->
        <div class="modal-header border-0 pb-2 bg-gradient-primary text-white">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <div class="avatar avatar-sm bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center">
                <i class="ti ti-[icon-name] fs-5 text-white"></i>
              </div>
            </div>
            <div>
              <h5 class="fw-bold modal-title mb-0 text-white fs-16">{{ modalTitle }}</h5>
              <p class="mb-0 fs-12 text-white opacity-75" v-if="subtitle">{{ subtitle }}</p>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Body -->
        <div class="modal-body p-3">
          <!-- Loading State -->
          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary mb-3" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="text-muted">{{ loadingMessage }}</p>
          </div>

          <!-- Content -->
          <div v-else>
            <!-- Info Card (optional) -->
            <div class="card bg-light border-0 mb-3" v-if="showInfoCard">
              <div class="card-body p-2">
                <!-- Info content -->
              </div>
            </div>

            <!-- Form/Content -->
            <form class="row g-3">
              <!-- Form fields -->
            </form>
          </div>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 pb-3 px-3">
          <button type="button" class="btn btn-white border fw-medium px-3 py-2 fs-13" data-bs-dismiss="modal">
            <i class="ti ti-x me-1"></i>Cancel
          </button>
          <button type="button" class="btn btn-primary fw-medium px-3 py-2 fs-13" @click="handleSubmit" :disabled="loading">
            <i class="ti ti-check me-1"></i>{{ primaryActionText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
```

### Modal Styling Standards

```vue
<style scoped>
/* Modal header gradient */
.bg-gradient-primary {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
}

/* Close button for white text */
.btn-close-white {
  filter: brightness(0) invert(1);
  opacity: 0.8;
}

.btn-close-white:hover {
  opacity: 1;
}

/* Form label styling */
.form-label {
  font-weight: 500;
  color: #495057;
  font-size: 13px;
  margin-bottom: 4px;
}

/* Card styling */
.card {
  border-radius: 10px;
}

/* Info card styling */
.card.bg-light {
  background-color: #f8f9fa !important;
}

/* Avatar styling */
.avatar {
  width: 32px;
  height: 32px;
}

.avatar-sm {
  width: 36px;
  height: 36px;
}

.avatar-xs {
  width: 24px;
  height: 24px;
}

/* Button styling */
.btn {
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background: #0056b3;
  border-color: #0056b3;
}

.btn-white {
  background: #fff;
  color: #6c757d;
}

.btn-white:hover {
  background: #f8f9fa;
  color: #495057;
}

/* Modal shadow */
.modal-content {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}
</style>
```

### Modal Size Guidelines

- **Small Modal:** `.modal-dialog` (default) - For simple forms
- **Medium Modal:** `.modal-dialog.modal-lg` - For standard forms (most common)
- **Large Modal:** `.modal-dialog.modal-xl` - For complex forms with multiple sections
- **Full Screen:** `.modal-dialog.modal-fullscreen` - For detailed views

### Header Icon Conventions

Use Tabler Icons with appropriate context:

- **Create/Add:** `ti-plus`, `ti-file-plus`, `ti-calendar-plus`
- **Edit:** `ti-edit`, `ti-pencil`
- **Delete:** `ti-trash`, `ti-x`
- **View:** `ti-eye`, `ti-file-text`
- **Settings:** `ti-settings`, `ti-adjustments`
- **User:** `ti-user`, `ti-users`
- **Calendar:** `ti-calendar`, `ti-calendar-event`
- **Medical:** `ti-stethoscope`, `ti-pill`, `ti-heart`

### Info Card Pattern

For modals that reference an entity (patient, appointment, etc.), include an info card:

```vue
<div class="card bg-light border-0 mb-3">
  <div class="card-body p-2">
    <div class="d-flex align-items-center">
      <div class="me-2">
        <div class="avatar avatar-xs bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center">
          <i class="ti ti-user text-primary fs-6"></i>
        </div>
      </div>
      <div class="flex-grow-1">
        <h6 class="mb-0 fw-bold text-dark fs-14">{{ entityName }}</h6>
        <div class="d-flex align-items-center gap-2 text-muted fs-11">
          <span>ID: {{ entityId }}</span>
          <span>{{ additionalInfo }}</span>
        </div>
      </div>
      <div class="text-end">
        <span class="badge bg-success bg-opacity-10 text-success fs-10 px-2 py-1">
          {{ status }}
        </span>
      </div>
    </div>
  </div>
</div>
```

### Loading State Best Practices

```vue
<div v-if="loading" class="text-center py-5">
  <div class="spinner-border text-primary mb-3" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <p class="text-muted">{{ loadingMessage || 'Loading...' }}</p>
</div>
```

### Form Field Spacing

- Use `row g-3` for form row with 1rem gap
- Use `col-md-6` for two-column layouts
- Use `col-md-4` for three-column layouts
- Use `col-12` for full-width fields
- Add `mb-3` for bottom margin when needed

### Error Handling in Modals

```typescript
async function handleSubmit() {
  loading.value = true
  try {
    // Validation
    if (!formData.value.requiredField) {
      message.error('Required field is missing')
      return
    }

    // API call
    await someApiCall(formData.value)
    
    message.success('Operation completed successfully')
    emit('success', result)
    closeModal()
  } catch (error: any) {
    console.error('Error:', error)
    message.error(error.response?.data?.message || 'Operation failed')
  } finally {
    loading.value = false
  }
}
```

---

## 9. Before/After Migration Examples

### Example 1: Modal Component Migration

#### Before (Options API, kebab-case, JavaScript):
```vue
<!-- src/components/modal/appointments-modal.vue -->
<template>
  <div class="modal">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'AppointmentsModal',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    appointment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    title() {
      return this.appointment?.patient_name || 'Appointment'
    },
  },
  methods: {
    handleClose() {
      this.$emit('close')
    },
    async handleSave() {
      this.loading = true
      try {
        // Save logic
        this.$emit('save', this.appointment)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
```

#### After (Composition API, PascalCase, TypeScript):
```vue
<!-- src/components/modal/AppointmentsModal.vue -->
<template>
  <div class="modal">
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Appointment } from '@/types'

interface Props {
  visible: boolean
  appointment: Appointment
}

interface Emits {
  (e: 'close'): void
  (e: 'save', appointment: Appointment): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const loading = ref<boolean>(false)

const title = computed(() => props.appointment?.patient_name || 'Appointment')

function handleClose() {
  emit('close')
}

async function handleSave() {
  loading.value = true
  try {
    // Save logic
    emit('save', props.appointment)
  } finally {
    loading.value = false
  }
}
</script>
```

### Example 2: Store Migration

#### Before (JavaScript, composable pattern):
```javascript
// src/stores/dataTable.js
import { ref } from 'vue'
import axiosInstance from '@/utils/axios'

export function useTableStore(endpoint) {
  const data = ref([])
  const loading = ref(false)

  async function fetchData() {
    loading.value = true
    try {
      const response = await axiosInstance.get(endpoint)
      data.value = response.data
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    loading,
    fetchData,
  }
}
```

#### After (TypeScript, Pinia store):
```typescript
// src/stores/dataTableStore.ts
import { defineStore } from 'pinia'
import axiosInstance from '@/utils/axios'
import type { ApiResponse } from '@/types'

interface TableState<T = any> {
  data: T[]
  loading: boolean
  currentPage: number
  perPage: number
  totalCount: number
}

export const useDataTableStore = defineStore('dataTable', {
  state: (): TableState => ({
    data: [],
    loading: false,
    currentPage: 1,
    perPage: 10,
    totalCount: 0,
  }),

  getters: {
    hasData: (state) => state.data.length > 0,
    totalPages: (state) => Math.ceil(state.totalCount / state.perPage),
  },

  actions: {
    async fetchData<T>(endpoint: string): Promise<void> {
      this.loading = true
      try {
        const response = await axiosInstance.get<ApiResponse<T[]>>(endpoint)
        this.data = response.data.data || response.data
        this.totalCount = response.data.total || this.data.length
      } finally {
        this.loading = false
      }
    },

    setPage(page: number) {
      this.currentPage = page
    },

    clearData() {
      this.data = []
      this.currentPage = 1
      this.totalCount = 0
    },
  },
})
```

### Example 3: Type Definitions

#### Before (Inline types, duplicated):
```typescript
// In component A
const appointment = ref<any>(null)

// In component B  
const appointment = ref<any>(null)

// In component C
interface Appointment {
  id: number
  patient_name: string
}
const appointment = ref<Appointment | null>(null)
```

#### After (Shared types):
```typescript
// src/types/appointment.ts
export interface Appointment {
  id: number
  patient_name: string
  patient_phone: string
  patient_email: string
  staff_name: string
  service?: Service
  status: AppointmentStatus
  start_date: string
  end_date?: string
  mode: AppointmentMode
}

export type AppointmentStatus = 
  | 'SCHEDULED' 
  | 'RESCHEDULED' 
  | 'IN-PROGRESS' 
  | 'COMPLETED' 
  | 'CANCELLED'

export type AppointmentMode = 'IN-PERSON' | 'VIRTUAL' | 'TELEHEALTH'

// In all components
import type { Appointment } from '@/types'

const appointment = ref<Appointment | null>(null)
```

---

## Migration Checklist

When migrating existing code, follow this checklist:

- [ ] Rename file to PascalCase (if component) or appropriate convention
- [ ] Convert to `<script setup lang="ts">`
- [ ] Add TypeScript type annotations
- [ ] Import shared types from `@/types`
- [ ] Define Props and Emits with TypeScript interfaces
- [ ] Convert Options API (`data`, `computed`, `methods`) to Composition API
- [ ] Replace `this.$emit` with `emit()`
- [ ] Replace `this.$store` with store composables
- [ ] Update all imports to use `@/` alias
- [ ] Run Prettier to format code
- [ ] Verify no TypeScript errors with `npm run type-check`
- [ ] Test component functionality

---

## Enforcement

- **Prettier:** Automatically enforces formatting on save and via `npm run format`
- **ESLint:** Enforces code quality rules via `npm run lint`
- **TypeScript:** Type checking via `npm run type-check`
- **Pre-commit Hooks:** (After full migration) Run linting and type checking before commits

---

## Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue 3 Style Guide](https://vuejs.org/style-guide/)
- [TypeScript with Vue 3](https://vuejs.org/guide/typescript/overview.html)

---

**Last Updated:** November 3, 2025  
**Maintained By:** Development Team
