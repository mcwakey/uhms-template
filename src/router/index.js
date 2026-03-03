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
        component: () =>
          import('@/views/pages/admin/clinic/appointments/appointments-calendar.vue'),
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
        component: () =>
          import('@/views/pages/admin/clinic/appointments/consultation/inperson-consultation.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'appointments/:id/telehealth',
        name: 'PatientTelehealth',
        component: () =>
          import('@/views/pages/admin/clinic/appointments/consultation/online-consultation.vue'),
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
        component: () =>
          import('@/views/pages/admin/clinic/specializations/specializations-index.vue'),
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
