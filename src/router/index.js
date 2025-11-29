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
  {
    path: '/admin',
    // component: () => import('@/views/pages/admin/admin-layout.vue'),
    children: [
      { path: '', redirect: '/admin/dashboard' },

      // { path: 'staff', redirect: '/hrm/staff'},
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: () => import('@/views/pages/admin/dashboard-index.vue'),
        meta: { requiresAuth: true, isAdmin: true, isSuperAdmin: true },
      },
    ],
  },
  
  //# region Admin Clinic Specializations Routes
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

      // { path: "patient-appointments", component: () => import('@/views/pages/admin/clinic/appointments/patient-appointments.vue') },

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

      // { path: 'patients/:id/consultation', name: 'PatientConsultation', component: () => import('@/views/pages/admin/clinic/patients/consultation/inperson-consultation.vue'), meta: { requiresAuth: true, isAdmin: true } },
      // { path: 'patients/:id/telehealth', name: 'PatientTelehealth', component: () => import('@/views/pages/admin/clinic/patients/consultation/online-consultation.vue'), meta: { requiresAuth: true, isAdmin: true } },

      {
        path: 'appointments/:id/consultation',
        name: 'PatientConsultation',
        component: () =>
          import('@/views/pages/admin/clinic/patients/consultation/inperson-consultation.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'appointments/:id/telehealth',
        name: 'PatientTelehealth',
        component: () =>
          import('@/views/pages/admin/clinic/patients/consultation/online-consultation.vue'),
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

//   {
//     path: '/',
//     name: 'login',
//     component: () => import('@/views/pages/authentication/login/LoginIndex.vue'),
//   },
//   {
//     path: '/login-cover',
//     name: 'login-cover',
//     component: () => import('@/views/pages/authentication/login/login-cover.vue'),
//   },
//   {
//     path: '/login-basic',
//     name: 'login-basic',
//     component: () => import('@/views/pages/authentication/login/login-basic.vue'),
//   },
//   {
//     path: '/login-illustration',
//     name: 'login-illustration',
//     component: () => import('@/views/pages/authentication/login/login-illustration.vue'),
//   },
//   {
//     path: '/register',
//     name: 'register',
//     component: () => import('@/views/pages/authentication/register/register.vue'),
//   },
//   {
//     path: '/register-cover',
//     name: 'register-cover',
//     component: () => import('@/views/pages/authentication/register/register-cover.vue'),
//   },
//   {
//     path: '/register-basic',
//     name: 'register-basic',
//     component: () => import('@/views/pages/authentication/register/register-basic.vue'),
//   },
//   {
//     path: '/forgot-password-cover',
//     name: 'forgot-password-cover',
//     component: () => import('@/views/pages/authentication/forgot-password/forgot-password-cover.vue'),
//   },
//   {
//     path: '/forgot-password-basic',
//     name: 'forgot-password-basic',
//     component: () => import('@/views/pages/authentication/forgot-password/forgot-password-basic.vue'),
//   },
//   {
//     path: '/forgot-password',
//     name: 'forgot-password',
//     component: () => import('@/views/pages/authentication/forgot-password/forgot-password.vue'),
//   },
//   {
//     path: '/reset-password-cover',
//     name: 'reset-password-cover',
//     component: () => import('@/views/pages/authentication/reset-password/reset-password-cover.vue'),
//   },
//   {
//     path: '/reset-password-basic',
//     name: 'reset-password-basic',
//     component: () => import('@/views/pages/authentication/reset-password/reset-password-basic.vue'),
//   },
//   {
//     path: '/reset-password',
//     name: 'reset-password',
//     component: () => import('@/views/pages/authentication/reset-password/reset-password.vue'),
//   },
//   {
//     path: '/email-verification-cover',
//     name: 'email-verification-cover',
//     component: () => import('@/views/pages/authentication/email-verification/email-verification-cover.vue'),
//   },
//   {
//     path: '/email-verification-basic',
//     name: 'email-verification-basic',
//     component: () => import('@/views/pages/authentication/email-verification/email-verification-basic.vue'),
//   },
//   {
//     path: '/email-verification',
//     name: 'email-verification',
//     component: () => import('@/views/pages/authentication/email-verification/email-verification.vue'),
//   },
//   {
//     path: '/two-step-verification-cover',
//     name: 'two-step-verification-cover',
//     component: () => import('@/views/pages/authentication/two-step-verification/two-step-verification-cover.vue'),
//   },
//   {
//     path: '/two-step-verification-basic',
//     name: 'two-step-verification-basic',
//     component: () => import('@/views/pages/authentication/two-step-verification/two-step-verification-basic.vue'),
//   },
//   {
//     path: '/two-step-verification',
//     name: 'two-step-verification',
//     component: () => import('@/views/pages/authentication/two-step-verification/two-step-verification.vue'),
//   },
//   {
//     path: '/success-cover',
//     name: 'success-cover',
//     component: () => import('@/views/pages/authentication/success/success-cover.vue'),
//   },
//   {
//     path: '/success-basic',
//     name: 'success-basic',
//     component: () => import('@/views/pages/authentication/success/success-basic.vue'),
//   },
//   {
//     path: '/success',
//     name: 'success',
//     component: () => import('@/views/pages/authentication/success/success.vue'),
//   },
//   {
//     path: '/lock-screen',
//     name: 'lock-screen',
//     component: () => import('@/views/pages/authentication/lock-screen.vue'),
//   },
//   {
//     path: '/error-404',
//     name: 'error-404',
//     component: () => import('@/views/pages/authentication/error/error-404.vue'),
//   },
//   {
//     path: '/error-500',
//     name: 'error-500',
//     component: () => import('@/views/pages/authentication/error/error-500.vue'),
//   },
//   {
//     path: '/admin-dashboard',
//     name: 'admin-dashboard',
//     component: () => import('@/views/pages/dashboard/admin-dashboard.vue'),
//   },
//   {
//     path: '/notifications',
//     name: 'notifications',
//     component: () => import('@/views/pages/notifications.vue'),
//   },
//   {
//     path: "/dashboard",
//     component: () => import('@/views/pages/dashboard/dashboard-index.vue'),
//     children: [
//       { path: "", redirect: "/dashboard/admin-dashboard" },
//       { path: "admin-dashboard", component: () => import('@/views/pages/dashboard/admin-dashboard.vue') },
//     ],
//   },
//   {
//     path: "/layout",
//     component: () => import('@/views/pages/layout/layout-index.vue'),
//     children: [
//       { path: "", redirect: "/layout/layout-default" },
//       { path: "layout-default", component: () => import('@/views/pages/dashboard/admin-dashboard.vue') },
//       { path: "layout-mini", component: () => import('@/views/pages/layout/layout-mini.vue') },
//       { path: "layout-hover-view", component: () => import('@/views/pages/layout/layout-hover-view.vue') },
//       { path: "layout-hidden", component: () => import('@/views/pages/layout/layout-hidden.vue') },
//       { path: "layout-full-width", component: () => import('@/views/pages/layout/layout-full-width.vue') },
//       { path: "layout-dark", component: () => import('@/views/pages/layout/layout-dark.vue') },
//       { path: "layout-rtl", component: () => import('@/views/pages/layout/layout-rtl.vue') },
//     ],
//   },
//   {
//     path: "/patient",
//     component: () => import('@/views/pages/patient/patient-index.vue'),
//     children: [
//       { path: "", redirect: "/patient/patient-dashboard" },
//       { path: "patient-dashboard", component: () => import('@/views/pages/patient/patient-dashboard.vue') },
//       { path: "patient-appointments", component: () => import('@/views/pages/patient/patient-appointments.vue') },
//       { path: "patient-appointment-details", component: () => import('@/views/pages/patient/patient-appointment-details.vue') },
//       { path: "patient-doctors", component: () => import('@/views/pages/patient/patient-doctors.vue') },
//       { path: "patient-doctor-details", component: () => import('@/views/pages/patient/patients-doctor-details.vue') },
//       { path: "patient-prescriptions", component: () => import('@/views/pages/patient/patient-prescriptions.vue') },
//       { path: "patient-invoices", component: () => import('@/views/pages/patient/patient-invoices.vue') },
//       { path: "patient-invoice-details", component: () => import('@/views/pages/patient/patient-invoice-details.vue') },
//       { path: "patient-notifications", component: () => import('@/views/pages/patient/patient-notifications.vue') },
//       { path: "patient-prescription-details", component: () => import('@/views/pages/patient/patient-prescription-details.vue') },
//     ],
//   },
//   {
//     path: "/patient/settings",
//     component: () => import('@/views/pages/patient/settings/patients-settings.vue'),
//     children: [
//       { path: "", redirect: "/patient/settings/patient-profile-settings" },
//       { path: "patient-profile-settings", component: () => import('@/views/pages/patient/settings/patient-profile-settings.vue') },
//       { path: "patient-password-settings", component: () => import('@/views/pages/patient/settings/patients-password-settings.vue') },
//       { path: "patient-notifications-settings", component: () => import('@/views/pages/patient/settings/patients-notifications-settings.vue') },
//     ],
//   },
//   {
//     path: "/doctors",
//     component: () => import('@/views/pages/doctors/doctors-index.vue'),
//     children: [
//       { path: "", redirect: "/doctors/doctors-grid" },
//       { path: "doctors-grid", component: () => import('@/views/pages/doctors/doctors-grid.vue') },
//       { path: "doctors-list", component: () => import('@/views/pages/doctors/doctors-list.vue') },
//       { path: "add-doctor", component: () => import('@/views/pages/doctors/add-doctor.vue') },
//       { path: "edit-doctor", component: () => import('@/views/pages/doctors/edit-doctor.vue') },
//       { path: "doctor-details", component: () => import('@/views/pages/doctors/doctor-details.vue') },
//       { path: "doctor-schedule", component: () => import('@/views/pages/doctors/doctor-schedule.vue') },
//     ],
//   },
//   {
//     path: "/patients",
//     component: () => import('@/views/pages/patients/patients-index.vue'),
//     children: [
//       { path: "", redirect: "/patients/patients-list" },
//       { path: "patients-list", component: () => import('@/views/pages/patients/patients-list.vue') },
//       { path: "patient-details", component: () => import('@/views/pages/patients/patient-details.vue') },
//       { path: "patients-grid", component: () => import('@/views/pages/patients/patients-grid.vue') },
//       { path: "create-patient", component: () => import('@/views/pages/patients/create-patient.vue') },
//       { path: "edit-patient", component: () => import('@/views/pages/patients/edit-patient.vue') },
//     ],
//   },
//   {
//     path: "/account-settings",
//     component: () => import('@/views/pages/settings/account-settings/account-settings.vue'),
//     children: [
//       { path: "", redirect: "/account-settings/profile-settings" },
//       { path: "profile-settings", component: () => import('@/views/pages/settings/account-settings/profile-settings.vue') },
//       { path: "security-settings", component: () => import('@/views/pages/settings/account-settings/security-settings.vue') },
//       { path: "notifications-settings", component: () => import('@/views/pages/settings/account-settings/notifications-settings.vue') },
//       { path: "integrations-settings", component: () => import('@/views/pages/settings/account-settings/integrations-settings.vue') },
//     ],
//   },
//   {
//     path: "/website-settings",
//     component: () => import('@/views/pages/settings/website-settings/website-settings.vue'),
//     children: [
//       { path: "", redirect: "/website-settings/organization-settings" },
//       { path: "organization-settings", component: () => import('@/views/pages/settings/website-settings/organization-settings.vue') },
//       { path: "localization-settings", component: () => import('@/views/pages/settings/website-settings/localization-settings.vue') },
//       { path: "prefixes-settings", component: () => import('@/views/pages/settings/website-settings/prefixes-settings.vue') },
//       { path: "seo-setup-settings", component: () => import('@/views/pages/settings/website-settings/seo-setup-settings.vue') },
//       { path: "language-settings", component: () => import('@/views/pages/settings/website-settings/language-settings.vue') },
//       { path: "language-settings2", component: () => import('@/views/pages/settings/website-settings/language-settings2.vue') },
//       { path: "language-settings3", component: () => import('@/views/pages/settings/website-settings/language-settings3.vue') },
//       { path: "maintenance-mode-settings", component: () => import('@/views/pages/settings/website-settings/maintenance-mode-settings.vue') },
//       { path: "login-and-register-settings", component: () => import('@/views/pages/settings/website-settings/login-and-register-settings.vue') },
//       { path: "preferences-settings", component: () => import('@/views/pages/settings/website-settings/preferences-settings.vue') },
//     ],
//   },
//   {
//     path: "/clinic-settings",
//     component: () => import('@/views/pages/settings/clinic-settings/clinic-settings.vue'),
//     children: [
//       { path: "", redirect: "/clinic-settings/appointment-settings" },
//       { path: "appointment-settings", component: () => import('@/views/pages/settings/clinic-settings/appointment-settings.vue') },
//       { path: "working-hours-settings", component: () => import('@/views/pages/settings/clinic-settings/working-hours-settings.vue') },
//       { path: "cancellation-reason-settings", component: () => import('@/views/pages/settings/clinic-settings/cancellation-reason-settings.vue') },
//     ],
//   },
//   {
//     path: "/app-settings",
//     component: () => import('@/views/pages/settings/app-settings/app-settings.vue'),
//     children: [
//       { path: "", redirect: "/app-settings/invoice-settings" },
//       { path: "invoice-settings", component: () => import('@/views/pages/settings/app-settings/invoice-settings.vue') },
//       { path: "invoice-templates-settings", component: () => import('@/views/pages/settings/app-settings/invoice-templates-settings.vue') },
//       { path: "signatures-settings", component: () => import('@/views/pages/settings/app-settings/signatures-settings.vue') },
//       { path: "custom-fields-settings", component: () => import('@/views/pages/settings/app-settings/custom-fields-settings.vue') },
//     ],
//   },
//   {
//     path: "/system-settings",
//     component: () => import('@/views/pages/settings/system-settings/system-settings.vue'),
//     children: [
//       { path: "", redirect: "/system-settings/invoice-settings" },
//       { path: "email-settings", component: () => import('@/views/pages/settings/system-settings/email-settings.vue') },
//       { path: "email-templates-settings", component: () => import('@/views/pages/settings/system-settings/email-templates-settings.vue') },
//       { path: "sms-gateways-settings", component: () => import('@/views/pages/settings/system-settings/sms-gateways-settings.vue') },
//       { path: "sms-templates-settings", component: () => import('@/views/pages/settings/system-settings/sms-templates-settings.vue') },
//       { path: "gdpr-cookies-settings", component: () => import('@/views/pages/settings/system-settings/gdpr-cookies-settings.vue') },
//     ],
//   },
//   {
//     path: "/finance-settings",
//     component: () => import('@/views/pages/settings/finance-settings/finance-settings.vue'),
//     children: [
//       { path: "", redirect: "/finance-settings/invoice-settings" },
//       { path: "payment-methods-settings", component: () => import('@/views/pages/settings/finance-settings/payment-methods-settings.vue') },
//       { path: "bank-accounts-settings", component: () => import('@/views/pages/settings/finance-settings/bank-accounts-settings.vue') },
//       { path: "tax-rates-settings", component: () => import('@/views/pages/settings/finance-settings/tax-rates-settings.vue') },
//       { path: "currencies-settings", component: () => import('@/views/pages/settings/finance-settings/currencies-settings.vue') },
//     ],
//   },
//   {
//     path: "/others-settings",
//     component: () => import('@/views/pages/settings/others-settings/others-settings.vue'),
//     children: [
//       { path: "", redirect: "/others-settings/invoice-settings" },
//       { path: "sitemap-settings", component: () => import('@/views/pages/settings/others-settings/sitemap-settings.vue') },
//       { path: "clear-cache-settings", component: () => import('@/views/pages/settings/others-settings/clear-cache-settings.vue') },
//       { path: "storage-settings", component: () => import('@/views/pages/settings/others-settings/storage-settings.vue') },
//       { path: "cronjob-settings", component: () => import('@/views/pages/settings/others-settings/cronjob-settings.vue') },
//       { path: "ban-ip-address-settings", component: () => import('@/views/pages/settings/others-settings/ban-ip-address-settings.vue') },
//       { path: "system-backup-settings", component: () => import('@/views/pages/settings/others-settings/system-backup-settings.vue') },
//       { path: "database-backup-settings", component: () => import('@/views/pages/settings/others-settings/database-backup-settings.vue') },
//       { path: "system-update", component: () => import('@/views/pages/settings/others-settings/system-update.vue') },
//     ],
//   },
//   {
//     path: "/content",
//     component: () => import('@/views/pages/content/content-index.vue'),
//     children: [
//       { path: "", redirect: "/content/pages" },
//       { path: "pages", component: () => import('@/views/pages/content/pages.vue') },
//       { path: "add-page", component: () => import('@/views/pages/content/add-page.vue') },
//       { path: "edit-page", component: () => import('@/views/pages/content/edit-page.vue') },
//       { path: "testimonials", component: () => import('@/views/pages/content/testimonials.vue') },
//       { path: "faq", component: () => import('@/views/pages/content/faq.vue') },
//     ],
//   },
//   {
//     path: "/blogs",
//     component: () => import('@/views/pages/content/blogs/blogs-index.vue'),
//     children: [
//       { path: "", redirect: "/blogs/blogs" },
//       { path: "blogs", component: () => import('@/views/pages/content/blogs/blogs.vue') },
//       { path: "add-blog", component: () => import('@/views/pages/content/blogs/add-blog.vue') },
//       { path: "edit-blog", component: () => import('@/views/pages/content/blogs/edit-blog.vue') },
//       { path: "blog-categories", component: () => import('@/views/pages/content/blogs/blog-categories.vue') },
//       { path: "blog-comments", component: () => import('@/views/pages/content/blogs/blog-comments.vue') },
//       { path: "blog-details", component: () => import('@/views/pages/content/blogs/blog-details.vue') },
//     ],
//   },
//   {
//     path: "/location",
//     component: () => import('@/views/pages/content/locations/locations-index.vue'),
//     children: [
//       { path: "", redirect: "/location/countries" },
//       { path: "countries", component: () => import('@/views/pages/content/locations/countries.vue') },
//       { path: "states", component: () => import('@/views/pages/content/locations/states.vue') },
//       { path: "cities", component: () => import('@/views/pages/content/locations/cities.vue') },
//     ],
//   },
//   {
//     path: "/support",
//     component: () => import('@/views/pages/support/support-index.vue'),
//     children: [
//       { path: "", redirect: "/support/contact-messages" },
//       { path: "contact-messages", component: () => import('@/views/pages/support/contact-messages.vue') },
//       { path: "tickets", component: () => import('@/views/pages/support/tickets.vue') },
//       { path: "ticket-details", component: () => import('@/views/pages/support/ticket-details.vue') },
//       { path: "announcements", component: () => import('@/views/pages/support/announcements.vue') },
//       { path: "newsletters", component: () => import('@/views/pages/support/newsletters.vue') },
//     ],
//   },
//   {
//     path: "/users",
//     component: () => import('@/views/pages/users/users-index.vue'),
//     children: [
//       { path: "", redirect: "/users/roles-and-permissions" },
//       { path: "roles-and-permissions", component: () => import('@/views/pages/users/roles-and-permissions.vue') },
//       { path: "permissions", component: () => import('@/views/pages/users/permissions.vue') },
//       { path: "delete-account-request", component: () => import('@/views/pages/users/delete-account-request.vue') },
//     ],
//   },
//   {
//     path: "/reports",
//     component: () => import('@/views/pages/reports/reports-index.vue'),
//     children: [
//       { path: "", redirect: "/reports/income-report" },
//       { path: "income-report", component: () => import('@/views/pages/reports/income-report.vue') },
//       { path: "expense-report", component: () => import('@/views/pages/reports/expense-report.vue') },
//       { path: "profit-and-loss", component: () => import('@/views/pages/reports/profit-and-loss.vue') },
//       { path: "appointment-report", component: () => import('@/views/pages/reports/appointment-report.vue') },
//       { path: "patient-report", component: () => import('@/views/pages/reports/patient-report.vue') },
//     ],
//   },
//   {
//     path: "/finance",
//     component: () => import('@/views/pages/finance/finance-index.vue'),
//     children: [
//       { path: "", redirect: "/finance/income" },
//       { path: "income", component: () => import('@/views/pages/finance/income.vue') },
//       { path: "payments", component: () => import('@/views/pages/finance/payments.vue') },
//       { path: "transactions", component: () => import('@/views/pages/finance/transactions.vue') },
//     ],
//   },
//   {
//     path: "/expenses",
//     component: () => import('@/views/pages/finance/expenses/expenses-index.vue'),
//     children: [
//       { path: "", redirect: "/expenses/expenses-list" },
//       { path: "expenses-list", component: () => import('@/views/pages/finance/expenses/expenses.vue') },
//       { path: "expense-category", component: () => import('@/views/pages/finance/expenses/expense-category.vue') },
//     ],
//   },
//   {
//     path: "/invoices",
//     component: () => import('@/views/pages/finance/invoices/invoices-index.vue'),
//     children: [
//       { path: "", redirect: "/invoices/invoices-list" },
//       { path: "invoices-list", component: () => import('@/views/pages/finance/invoices/invoices.vue') },
//       { path: "add-invoices", component: () => import('@/views/pages/finance/invoices/add-invoices.vue') },
//       { path: "edit-invoices", component: () => import('@/views/pages/finance/invoices/edit-invoices.vue') },
//       { path: "invoices-details", component: () => import('@/views/pages/finance/invoices/invoices-details.vue') },
//     ],
//   },
//   {
//     path: "/hrm",
//     component: () => import('@/views/pages/hrm/hrm-index.vue'),
//     children: [
//       { path: "", redirect: "/hrm/payroll" },
//       { path: "payroll", component: () => import('@/views/pages/hrm/payroll.vue') },
//       { path: "payroll-2", component: () => import('@/views/pages/hrm/payroll-2.vue') },
//       { path: "holidays", component: () => import('@/views/pages/hrm/holidays.vue') },
//     ],
//   },
//   {
//     path: "/leaves",
//     component: () => import('@/views/pages/hrm/leaves/leaves-index.vue'),
//     children: [
//       { path: "", redirect: "/leaves/leaves-list" },
//       { path: "leaves-list", component: () => import('@/views/pages/hrm/leaves/leaves.vue') },
//       { path: "leave-type", component: () => import('@/views/pages/hrm/leaves/leave-type.vue') },
//     ],
//   },
//   {
//     path: "/clinic",
//     component: () => import('@/views/pages/clinic/clinic-index.vue'),
//     children: [
//       { path: "", redirect: "/clinic/messages" },
//       { path: "messages", component: () => import('@/views/pages/clinic/messages.vue') },
//       { path: "activities", component: () => import('@/views/pages/clinic/activities.vue') },
//       { path: "assets", component: () => import('@/views/pages/clinic/assets.vue') },
//       { path: "specializations", component: () => import('@/views/pages/clinic/specializations.vue') },
//       { path: "services", component: () => import('@/views/pages/clinic/services.vue') },
//       { path: "locations", component: () => import('@/views/pages/clinic/locations.vue') },
//     ],
//   },
//   {
//     path: "/appointments",
//     component: () => import('@/views/pages/appointments/appointments-index.vue'),
//     children: [
//       { path: "", redirect: "/appointments/appointments-list" },
//       { path: "appointments-list", component: () => import('@/views/pages/appointments/appointments-list.vue') },
//       { path: "appointment-calendar", component: () => import('@/views/pages/appointments/appointments-calendar.vue') },
//       { path: "new-appointment", component: () => import('@/views/pages/appointments/new-appointment.vue') },
//       { path: "appointment-consultations", component: () => import('@/views/pages/appointments/appointment-consultations.vue') },
//     ],
//   },
//   {
//     path: "/hrm",
//     component: () => import('@/views/pages/hrm/hrm-index.vue'),
//     children: [
//       { path: "", redirect: "/hrm/payroll" },
//       { path: "payroll", component: () => import('@/views/pages/hrm/payroll.vue') },
//       { path: "payroll-2", component: () => import('@/views/pages/hrm/payroll-2.vue') },
//       { path: "holidays", component: () => import('@/views/pages/hrm/holidays.vue') },
//       { path: "attendance", component: () => import('@/views/pages/hrm/attendance.vue') },
//       { path: "staffs", component: () => import('@/views/pages/hrm/staffs.vue') },
//       { path: "hrm-departments", component: () => import('@/views/pages/hrm/hrm-departments.vue') },
//       { path: "designation", component: () => import('@/views/pages/hrm/designation.vue') },
//     ],
//   },
//   {
//     path: "/pages",
//     component: () => import('@/views/pages/pages/pages-index.vue'),
//     children: [
//       { path: "", redirect: "/pages/starter" },
//       { path: "starter", component: () => import('@/views/pages/pages/starter.vue') },
//       { path: "profile", component: () => import('@/views/pages/pages/profile.vue') },
//       { path: "gallery", component: () => import('@/views/pages/pages/gallery.vue') },
//       { path: "timeline", component: () => import('@/views/pages/pages/timeline.vue') },
//       { path: "pricing", component: () => import('@/views/pages/pages/pricing.vue') },
//       { path: "coming-soon", component: () => import('@/views/pages/pages/coming-soon.vue') },
//       { path: "under-maintenance", component: () => import('@/views/pages/pages/under-maintenance.vue') },
//       { path: "privacy-policy", component: () => import('@/views/pages/pages/privacy-policy.vue') },
//       { path: "terms-and-conditions", component: () => import('@/views/pages/pages/terms-and-conditions.vue') },
//     ],
//   },
//   {
//     path: "/doctor",
//     component: () => import('@/views/pages/doctor/doctor-index.vue'),
//     children: [
//       { path: "", redirect: "/doctor/doctor-dashboard" },
//       { path: "doctor-dashboard", component: () => import('@/views/pages/doctor/doctor-dashboard.vue') },
//       { path: "doctors-appointments", component: () => import('@/views/pages/doctor/appointments/doctors-appointments.vue') },
//       { path: "doctors-appointment-details", component: () => import('@/views/pages/doctor/appointments/doctors-appointment-details.vue') },
//       { path: "online-consultations", component: () => import('@/views/pages/doctor/appointments/online-consultations.vue') },
//       { path: "doctors-schedules", component: () => import('@/views/pages/doctor/doctors-schedules.vue') },
//       { path: "doctors-prescriptions", component: () => import('@/views/pages/doctor/doctors-prescriptions.vue') },
//       { path: "doctors-prescription-details", component: () => import('@/views/pages/doctor/doctors-prescription-details.vue') },
//       { path: "doctors-patient-details", component: () => import('@/views/pages/doctor/doctors-patient-details.vue') },
//       { path: "doctors-leaves", component: () => import('@/views/pages/doctor/doctors-leaves.vue') },
//       { path: "doctors-reviews", component: () => import('@/views/pages/doctor/doctors-reviews.vue') },
//       { path: "doctors-notifications", component: () => import('@/views/pages/doctor/doctors-notifications.vue') },
//     ],
//   },
//   {
//     path: "/doctor/settings",
//     component: () => import('@/views/pages/doctor/doctor-settings/doctor-settings.vue'),
//     children: [
//       { path: "", redirect: "/doctor/settings/doctors-profile-settings" },
//       { path: "doctors-profile-settings", component: () => import('@/views/pages/doctor/doctor-settings/doctors-profile-settings.vue') },
//       { path: "doctors-password-settings", component: () => import('@/views/pages/doctor/doctor-settings/doctors-password-settings.vue') },
//       { path: "doctors-notification-settings", component: () => import('@/views/pages/doctor/doctor-settings/doctors-notification-settings.vue') },
//     ],
//   },
//   {
//     path: "/calls",
//     component: () => import('@/views/pages/applications/calls/call-index.vue'),
//     children: [
//       { path: "", redirect: "/calls/voice-call" },
//       { path: "voice-call", component: () => import('@/views/pages/applications/calls/voice-call.vue') },
//       { path: "video-call", component: () => import('@/views/pages/applications/calls/video-call.vue') },
//       { path: "outgoing-call", component: () => import('@/views/pages/applications/calls/outgoing-call.vue') },
//       { path: "incoming-call", component: () => import('@/views/pages/applications/calls/incoming-call.vue') },
//       { path: "call-history", component: () => import('@/views/pages/applications/calls/call-history.vue') },
//     ],
//   },
//   {
//     path: "/invoice",
//     component: () => import('@/views/pages/applications/invoice/invoice-index.vue'),
//     children: [
//       { path: "", redirect: "/invoice/invoice-list" },
//       { path: "invoice-list", component: () => import('@/views/pages/applications/invoice/invoice-list.vue') },
//       { path: "invoice-details", component: () => import('@/views/pages/applications/invoice/invoice-details.vue') },
//     ],
//   },
//   {
//     path: "/applications",
//     component: () => import('@/views/pages/applications/applications-index.vue'),
//     children: [
//       { path: "", redirect: "/applications/chat" },
//       { path: "chat", component: () => import('@/views/pages/applications/chat-index.vue') },
//       { path: "calendar", component: () => import('@/views/pages/applications/calendar.vue') },
//       { path: "email", component: () => import('@/views/pages/applications/email.vue') },
//       { path: "email-reply", component: () => import('@/views/pages/applications/email-reply.vue') },
//       { path: "todo", component: () => import('@/views/pages/applications/todo.vue') },
//       { path: "todo-list", component: () => import('@/views/pages/applications/todo-list.vue') },
//       { path: "notes", component: () => import('@/views/pages/applications/notes.vue') },
//       { path: "social-feed", component: () => import('@/views/pages/applications/social-feed.vue') },
//       { path: "file-manager", component: () => import('@/views/pages/applications/file-manager.vue') },
//       { path: "kanban-view", component: () => import('@/views/pages/applications/kanban/kanban-view.vue') },
//       { path: "contacts", component: () => import('@/views/pages/applications/contacts/contacts-list.vue') },
//       { path: "search-list", component: () => import('@/views/pages/applications/search-list/search-list.vue') },
//     ],
//   },
//   {
//     path: "/base-ui",
//     component: () => import('@/views/pages/uiinterface/baseui/baseui-index.vue'),
//     children: [
//       { path: "", redirect: "/base-ui/ui-accordion" },
//       { path: "ui-accordion", component: () => import('@/views/pages/uiinterface/baseui/ui-accordion.vue') },
//       { path: "ui-alerts", component: () => import('@/views/pages/uiinterface/baseui/ui-alerts.vue') },
//       { path: "ui-avatar", component: () => import('@/views/pages/uiinterface/baseui/ui-avatar.vue') },
//       { path: "ui-badges",component: () => import('@/views/pages/uiinterface/baseui/ui-badges.vue') },
//       { path: "ui-breadcrumb", component: () => import('@/views/pages/uiinterface/baseui/ui-breadcrumb.vue') },
//       { path: "ui-buttons", component: () => import('@/views/pages/uiinterface/baseui/ui-buttons.vue') },
//       { path: "ui-buttons-group", component: () => import('@/views/pages/uiinterface/baseui/ui-buttons-group.vue') },
//       { path: "ui-cards", component: () => import('@/views/pages/uiinterface/baseui/ui-cards.vue') },
//       { path: "ui-carousel", component: () => import('@/views/pages/uiinterface/baseui/ui-carousel.vue') },
//       { path: "ui-collapse", component: () => import('@/views/pages/uiinterface/baseui/ui-collapse.vue') },
//       { path: "ui-dropdowns", component: () => import('@/views/pages/uiinterface/baseui/ui-dropdowns.vue') },
//       { path: "ui-ratio", component: () => import('@/views/pages/uiinterface/baseui/ui-ratio.vue') },
//       { path: "ui-grid", component: () => import('@/views/pages/uiinterface/baseui/ui-grid.vue') },
//       { path: "ui-images", component: () => import('@/views/pages/uiinterface/baseui/ui-images.vue') },
//       { path: "ui-links" ,component: () => import('@/views/pages/uiinterface/baseui/ui-links.vue') },
//       { path: "ui-list-group", component: () => import('@/views/pages/uiinterface/baseui/ui-list-group.vue') },
//       { path: "ui-modals", component: () => import('@/views/pages/uiinterface/baseui/ui-modals.vue') },
//       { path: "ui-offcanvas", component: () => import('@/views/pages/uiinterface/baseui/ui-offcanvas.vue') },
//       { path: "ui-pagination", component: () => import('@/views/pages/uiinterface/baseui/ui-pagination.vue') },
//       { path: "ui-placeholders", component: () => import('@/views/pages/uiinterface/baseui/ui-placeholders.vue') },
//       { path: "ui-popovers", component: () => import('@/views/pages/uiinterface/baseui/ui-popovers.vue') },
//       { path: "ui-progress", component: () => import('@/views/pages/uiinterface/baseui/ui-progress.vue') },
//       { path: "ui-scrollspy", component: () => import('@/views/pages/uiinterface/baseui/ui-scrollspy.vue') },
//       { path: "ui-spinner", component: () => import('@/views/pages/uiinterface/baseui/ui-spinner.vue') },
//       { path: "ui-nav-tabs", component: () => import('@/views/pages/uiinterface/baseui/ui-nav-tabs.vue') },
//       { path: "ui-toasts", component: () => import('@/views/pages/uiinterface/baseui/ui-toasts.vue') },
//       { path: "ui-tooltips", component: () => import('@/views/pages/uiinterface/baseui/ui-tooltips.vue') },
//       { path: "ui-typography", component: () => import('@/views/pages/uiinterface/baseui/ui-typography.vue') },
//       { path: "ui-utilities", component: () => import('@/views/pages/uiinterface/baseui/ui-utilities.vue') },
//     ],
//   },
//   {
//     path: "/advance-ui",
//     component: () => import('@/views/pages/uiinterface/advancedui/advancedui-index.vue'),
//     children: [
//       { path: "", redirect: "/advancedui/extended-dragula" },
//       { path: "extended-dragula", component: () => import('@/views/pages/uiinterface/advancedui/extended-dragula.vue') },
//       { path: "ui-clipboard", component: () => import('@/views/pages/uiinterface/advancedui/ui-clipboard.vue') },
//       { path: "ui-rangeslider", component: () => import('@/views/pages/uiinterface/advancedui/ui-rangeslider.vue') },
//       { path: "ui-sweetalerts", component: () => import('@/views/pages/uiinterface/advancedui/ui-sweetalerts.vue') },
//       { path: "ui-lightbox", component: () => import('@/views/pages/uiinterface/advancedui/ui-lightbox.vue') },
//       { path: "ui-rating", component: () => import('@/views/pages/uiinterface/advancedui/ui-rating.vue') },
//       { path: "ui-counter", component: () => import('@/views/pages/uiinterface/advancedui/ui-counter.vue') },
//       { path: "ui-scrollbar", component: () => import('@/views/pages/uiinterface/advancedui/ui-scrollbar.vue') },
//     ],
//   },
//   {
//     path: "/form-elements",
//     component: () => import('@/views/pages/uiinterface/form/form-elements/form-elements.vue'),
//     children: [
//       { path: "", redirect: "/form-elements/form-basic-inputs" },
//       { path: "form-basic-inputs", component: () => import('@/views/pages/uiinterface/form/form-elements/form-basic-inputs.vue') },
//       { path: "form-checkbox-radios", component: () => import('@/views/pages/uiinterface/form/form-elements/form-checkbox-radios.vue') },
//       { path: "form-input-groups", component: () => import('@/views/pages/uiinterface/form/form-elements/form-input-groups.vue') },
//       { path: "form-grid-gutters", component: () => import('@/views/pages/uiinterface/form/form-elements/form-grid-gutters.vue') },
//       { path: "form-mask", component: () => import('@/views/pages/uiinterface/form/form-elements/form-mask.vue') },
//       { path: "form-fileupload", component: () => import('@/views/pages/uiinterface/form/form-elements/form-fileupload.vue') },
//     ],
//   },
//   {
//     path: "/form-layouts",
//     component: () => import('@/views/pages/uiinterface/form/form-layouts/form-layouts.vue'),
//     children: [
//       { path: "", redirect: "/form-layouts/form-horizontal" },
//       { path: "form-horizontal", component: () => import('@/views/pages/uiinterface/form/form-layouts/form-horizontal.vue') },
//       { path: "form-vertical", component: () => import('@/views/pages/uiinterface/form/form-layouts/form-vertical.vue') },
//       { path: "form-floating-labels", component: () => import('@/views/pages/uiinterface/form/form-layouts/form-floating-labels.vue') },
//     ],
//   },
//   {
//     path: "/forms",
//     component: () => import('@/views/pages/uiinterface/form/form-index.vue'),
//     children: [
//       { path: "", redirect: "/form/form-validation" },
//       { path: "form-validation", component: () => import('@/views/pages/uiinterface/form/form-validation.vue') },
//       { path: "form-select2", component: () => import('@/views/pages/uiinterface/form/form-select2.vue') },
//       { path: "form-wizard", component: () => import('@/views/pages/uiinterface/form/form-wizard.vue') },
//     ],
//   },
//   {
//     path: "/tables",
//     component: () => import('@/views/pages/uiinterface/tables/tables-index.vue'),
//     children: [
//       { path: "", redirect: "/tables/tables-basic" },
//       { path: "tables-basic", component: () => import('@/views/pages/uiinterface/tables/tables-basic.vue') },
//       { path: "data-tables", component: () => import('@/views/pages/uiinterface/tables/data-tables.vue') },
//     ],
//   },
//   {
//     path: "/charts",
//     component: () => import('@/views/pages/uiinterface/charts/charts-index.vue'),
//     children: [
//       { path: "", redirect: "/charts/chart-apex" },
//       { path: "chart-apex", component: () => import('@/views/pages/uiinterface/charts/apex/chart-apex.vue') },
//       { path: "chart-c3", component: () => import('@/views/pages/uiinterface/charts/c3/chart-c3.vue') },
//       { path: "chart-js", component: () => import('@/views/pages/uiinterface/charts/js/chart-js.vue') },
//       { path: "chart-flot", component: () => import('@/views/pages/uiinterface/charts/flot/chart-flot.vue') },
//       { path: "chart-morris", component: () => import('@/views/pages/uiinterface/charts/morris/chart-morris.vue') },
//     ],
//   },
//   {
//     path: "/icons",
//     component: () => import('@/views/pages/uiinterface/icons/icons-index.vue'),
//     children: [
//       { path: "", redirect: "/icons/icon-fontawesome" },
//       { path: "icon-fontawesome", component: () => import('@/views/pages/uiinterface/icons/icon-fontawesome.vue') },
//       { path: "icon-tabler", component: () => import('@/views/pages/uiinterface/icons/icon-tabler.vue') },
//       { path: "icon-bootstrap", component: () => import('@/views/pages/uiinterface/icons/icon-bootstrap.vue') },
//       { path: "icon-remix", component: () => import('@/views/pages/uiinterface/icons/icon-remix.vue') },
//       { path: "icon-ionic", component: () => import('@/views/pages/uiinterface/icons/icon-ionic.vue') },
//       { path: "icon-material", component: () => import('@/views/pages/uiinterface/icons/icon-material.vue') },
//       { path: "icon-feather", component: () => import('@/views/pages/uiinterface/icons/icon-feather.vue') },
//       { path: "icon-pe7", component: () => import('@/views/pages/uiinterface/icons/icon-pe7.vue') },
//       { path: "icon-simpleline", component: () => import('@/views/pages/uiinterface/icons/icon-simpleline.vue') },
//       { path: "icon-weather", component: () => import('@/views/pages/uiinterface/icons/icon-weather.vue') },
//       { path: "icon-typicon", component: () => import('@/views/pages/uiinterface/icons/icon-typicon.vue') },
//       { path: "icon-flag", component: () => import('@/views/pages/uiinterface/icons/icon-flag.vue') },
//     ],
//   },
//   {
//     path: "/maps",
//     component: () => import('@/views/pages/uiinterface/maps/map-index.vue'),
//     children: [
//       { path: "", redirect: "/maps/maps-vector" },
//       { path: "maps-leaflet", component: () => import('@/views/pages/uiinterface/maps/maps-leaflet.vue') },
//       { path: "maps-vector", component: () => import('@/views/pages/uiinterface/maps/maps-vector.vue') },
//     ],
//   },
];

export const router = createRouter({
  history: createWebHistory("/"),
  linkActiveClass: "active",
  routes,
});

router.beforeEach(authGuard)

// router.beforeEach((to, from, next) => {
//   // Scroll to the top of the page
//   window.scrollTo({ top: 0, behavior: "smooth" });
//   // Continue with the navigation
//   if (to.name === "chat") {
//     document.body.classList.add("chat-page");
//   } else {
//     document.body.classList.remove("chat-page");
//   }
//   next();
// });
