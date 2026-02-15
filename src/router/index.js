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
    component: () => import('@/views/auth/login/login-index.vue'),
    meta: { guestOnly: true },
  },
  {
    path: '/forget',
    name: 'ForgetPassword',
    component: () => import('@/views/auth/forget/forget-index.vue'),
    meta: { guestOnly: true },
  },
  {
    path: '/internal-server-error',
    name: 'InternalServerError',
    component: () => import('@/views/error/error-500.vue'),
  },
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: () => import('@/views/auth/login/login-index.vue'),
    meta: { guestOnly: true },
  },
  {
    path: '/not-found',
    name: 'NotFound',
    component: () => import('@/views/error/error-404.vue'),
  },
  {
    path: '/admin',
    // component: () => import('@/views/admin/admin-layout.vue'),
    children: [
      { path: '', redirect: '/admin/dashboard' },

      // { path: 'staff', redirect: '/hrm/staff'},
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: () => import('@/views/admin/dashboard-index.vue'),
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
        component: () => import('@/views/admin/clinic/appointments/appointments-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'appointments/calendar',
        name: 'AppointmentCalendar',
        component: () =>
          import('@/views/admin/clinic/appointments/appointments-calendar.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'appointments/:id',
        name: 'ViewAppointment',
        component: () => import('@/views/admin/clinic/appointments/appointment-view.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },

      // { path: "patient-appointments", component: () => import('@/views/admin/clinic/appointments/patient-appointments.vue') },

      {
        path: 'patients',
        name: 'PatientList',
        component: () => import('@/views/admin/clinic/patients/patients-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'patients/create',
        name: 'CreatePatient',
        component: () => import('@/views/admin/clinic/patients/patients-create.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'patients/:id',
        name: 'ViewPatient',
        component: () => import('@/views/admin/clinic/patients/patient-view.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'patients/:id/edit',
        name: 'EditPatient',
        component: () => import('@/views/admin/clinic/patients/patients-edit.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },

      // { path: 'patients/:id/consultation', name: 'PatientConsultation', component: () => import('@/views/admin/clinic/patients/consultation/inperson-consultation.vue'), meta: { requiresAuth: true, isAdmin: true } },
      // { path: 'patients/:id/telehealth', name: 'PatientTelehealth', component: () => import('@/views/admin/clinic/patients/consultation/online-consultation.vue'), meta: { requiresAuth: true, isAdmin: true } },

      {
        path: 'appointments/:id/consultation',
        name: 'PatientConsultation',
        component: () =>
          import('@/views/admin/clinic/appointments/consultation/inperson-consultation.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'appointments/:id/telehealth',
        name: 'PatientTelehealth',
        component: () =>
          import('@/views/admin/clinic/appointments/consultation/online-consultation.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'appointments/:id/vitals',
        name: 'PatientVitals',
        component: () => import('@/views/admin/clinic/appointments/vitals/vitals-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },

      {
        path: 'doctors',
        name: 'Doctors',
        component: () => import('@/views/admin/clinic/doctors/doctors-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'specializations',
        name: 'Specializations',
        component: () =>
          import('@/views/admin/clinic/specializations/specializations-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'locations',
        name: 'Locations',
        component: () => import('@/views/admin/clinic/locations/locations-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'services',
        name: 'Services',
        component: () => import('@/views/admin/clinic/services/services-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'assets',
        name: 'Assets',
        component: () => import('@/views/admin/clinic/assets/assets-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
    ],
  },

  //# region Admin HRM Routes
  {
    path: '/admin/hrm',
    children: [
      {
        path: 'staffs',
        name: 'Staffs',
        component: () => import('@/views/admin/hrm/staff/staff-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'staffs/create',
        name: 'CreateStaff',
        component: () => import('@/views/admin/hrm/staff/staff-create.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
      {
        path: 'departments',
        name: 'Departments',
        component: () => import('@/views/admin/hrm/departments/departments-index.vue'),
        meta: { requiresAuth: true, isAdmin: true },
      },
    ],
  },

//   {
//     path: '/',
//     name: 'login',
//     component: () => import('@/views/auth/login/LoginIndex.vue'),
//   },
//   {
//     path: '/login-cover',
//     name: 'login-cover',
//     component: () => import('@/views/auth/login/login-cover.vue'),
//   },
//   {
//     path: '/login-basic',
//     name: 'login-basic',
//     component: () => import('@/views/auth/login/login-basic.vue'),
//   },
//   {
//     path: '/login-illustration',
//     name: 'login-illustration',
//     component: () => import('@/views/auth/login/login-illustration.vue'),
//   },
//   {
//     path: '/register',
//     name: 'register',
//     component: () => import('@/views/auth/register/register.vue'),
//   },
//   {
//     path: '/register-cover',
//     name: 'register-cover',
//     component: () => import('@/views/auth/register/register-cover.vue'),
//   },
//   {
//     path: '/register-basic',
//     name: 'register-basic',
//     component: () => import('@/views/auth/register/register-basic.vue'),
//   },
//   {
//     path: '/forgot-password-cover',
//     name: 'forgot-password-cover',
//     component: () => import('@/views/auth/forgot-password/forgot-password-cover.vue'),
//   },
//   {
//     path: '/forgot-password-basic',
//     name: 'forgot-password-basic',
//     component: () => import('@/views/auth/forgot-password/forgot-password-basic.vue'),
//   },
//   {
//     path: '/forgot-password',
//     name: 'forgot-password',
//     component: () => import('@/views/auth/forgot-password/forgot-password.vue'),
//   },
//   {
//     path: '/reset-password-cover',
//     name: 'reset-password-cover',
//     component: () => import('@/views/auth/reset-password/reset-password-cover.vue'),
//   },
//   {
//     path: '/reset-password-basic',
//     name: 'reset-password-basic',
//     component: () => import('@/views/auth/reset-password/reset-password-basic.vue'),
//   },
//   {
//     path: '/reset-password',
//     name: 'reset-password',
//     component: () => import('@/views/auth/reset-password/reset-password.vue'),
//   },
//   {
//     path: '/email-verification-cover',
//     name: 'email-verification-cover',
//     component: () => import('@/views/auth/email-verification/email-verification-cover.vue'),
//   },
//   {
//     path: '/email-verification-basic',
//     name: 'email-verification-basic',
//     component: () => import('@/views/auth/email-verification/email-verification-basic.vue'),
//   },
//   {
//     path: '/email-verification',
//     name: 'email-verification',
//     component: () => import('@/views/auth/email-verification/email-verification.vue'),
//   },
//   {
//     path: '/two-step-verification-cover',
//     name: 'two-step-verification-cover',
//     component: () => import('@/views/auth/two-step-verification/two-step-verification-cover.vue'),
//   },
//   {
//     path: '/two-step-verification-basic',
//     name: 'two-step-verification-basic',
//     component: () => import('@/views/auth/two-step-verification/two-step-verification-basic.vue'),
//   },
//   {
//     path: '/two-step-verification',
//     name: 'two-step-verification',
//     component: () => import('@/views/auth/two-step-verification/two-step-verification.vue'),
//   },
//   {
//     path: '/success-cover',
//     name: 'success-cover',
//     component: () => import('@/views/auth/success/success-cover.vue'),
//   },
//   {
//     path: '/success-basic',
//     name: 'success-basic',
//     component: () => import('@/views/auth/success/success-basic.vue'),
//   },
//   {
//     path: '/success',
//     name: 'success',
//     component: () => import('@/views/auth/success/success.vue'),
//   },
//   {
//     path: '/lock-screen',
//     name: 'lock-screen',
//     component: () => import('@/views/auth/lock-screen.vue'),
//   },
//   {
//     path: '/error-404',
//     name: 'error-404',
//     component: () => import('@/views/auth/error/error-404.vue'),
//   },
//   {
//     path: '/error-500',
//     name: 'error-500',
//     component: () => import('@/views/auth/error/error-500.vue'),
//   },
//   {
//     path: '/admin-dashboard',
//     name: 'admin-dashboard',
//     component: () => import('@/views/dashboard/admin-dashboard.vue'),
//   },
//   {
//     path: '/notifications',
//     name: 'notifications',
//     component: () => import('@/views/notifications.vue'),
//   },
//   {
//     path: "/dashboard",
//     component: () => import('@/views/dashboard/dashboard-index.vue'),
//     children: [
//       { path: "", redirect: "/dashboard/admin-dashboard" },
//       { path: "admin-dashboard", component: () => import('@/views/dashboard/admin-dashboard.vue') },
//     ],
//   },
//   {
//     path: "/layout",
//     component: () => import('@/views/layout-demo/layout-index.vue'),
//     children: [
//       { path: "", redirect: "/layout/layout-default" },
//       { path: "layout-default", component: () => import('@/views/dashboard/admin-dashboard.vue') },
//       { path: "layout-mini", component: () => import('@/views/layout-demo/layout-mini.vue') },
//       { path: "layout-hover-view", component: () => import('@/views/layout-demo/layout-hover-view.vue') },
//       { path: "layout-hidden", component: () => import('@/views/layout-demo/layout-hidden.vue') },
//       { path: "layout-full-width", component: () => import('@/views/layout-demo/layout-full-width.vue') },
//       { path: "layout-dark", component: () => import('@/views/layout-demo/layout-dark.vue') },
//       { path: "layout-rtl", component: () => import('@/views/layout-demo/layout-rtl.vue') },
//     ],
//   },
//   {
//     path: "/patient",
//     component: () => import('@/views/patient-portal/patient-index.vue'),
//     children: [
//       { path: "", redirect: "/patient/patient-dashboard" },
//       { path: "patient-dashboard", component: () => import('@/views/patient-portal/patient-dashboard.vue') },
//       { path: "patient-appointments", component: () => import('@/views/patient-portal/patient-appointments.vue') },
//       { path: "patient-appointment-details", component: () => import('@/views/patient-portal/patient-appointment-details.vue') },
//       { path: "patient-doctors", component: () => import('@/views/patient-portal/patient-doctors.vue') },
//       { path: "patient-doctor-details", component: () => import('@/views/patient-portal/patients-doctor-details.vue') },
//       { path: "patient-prescriptions", component: () => import('@/views/patient-portal/patient-prescriptions.vue') },
//       { path: "patient-invoices", component: () => import('@/views/patient-portal/patient-invoices.vue') },
//       { path: "patient-invoice-details", component: () => import('@/views/patient-portal/patient-invoice-details.vue') },
//       { path: "patient-notifications", component: () => import('@/views/patient-portal/patient-notifications.vue') },
//       { path: "patient-prescription-details", component: () => import('@/views/patient-portal/patient-prescription-details.vue') },
//     ],
//   },
//   {
//     path: "/patient/settings",
//     component: () => import('@/views/patient-portal/settings/patients-settings.vue'),
//     children: [
//       { path: "", redirect: "/patient/settings/patient-profile-settings" },
//       { path: "patient-profile-settings", component: () => import('@/views/patient-portal/settings/patient-profile-settings.vue') },
//       { path: "patient-password-settings", component: () => import('@/views/patient-portal/settings/patients-password-settings.vue') },
//       { path: "patient-notifications-settings", component: () => import('@/views/patient-portal/settings/patients-notifications-settings.vue') },
//     ],
//   },
//   {
//     path: "/doctors",
//     component: () => import('@/views/doctors/doctors-index.vue'),
//     children: [
//       { path: "", redirect: "/doctors/doctors-grid" },
//       { path: "doctors-grid", component: () => import('@/views/doctors/doctors-grid.vue') },
//       { path: "doctors-list", component: () => import('@/views/doctors/doctors-list.vue') },
//       { path: "add-doctor", component: () => import('@/views/doctors/add-doctor.vue') },
//       { path: "edit-doctor", component: () => import('@/views/doctors/edit-doctor.vue') },
//       { path: "doctor-details", component: () => import('@/views/doctors/doctor-details.vue') },
//       { path: "doctor-schedule", component: () => import('@/views/doctors/doctor-schedule.vue') },
//     ],
//   },
//   {
//     path: "/patients",
//     component: () => import('@/views/patient/patients-index.vue'),
//     children: [
//       { path: "", redirect: "/patients/patients-list" },
//       { path: "patients-list", component: () => import('@/views/patient/patients-list.vue') },
//       { path: "patient-details", component: () => import('@/views/patient/patient-details.vue') },
//       { path: "patients-grid", component: () => import('@/views/patient/patients-grid.vue') },
//       { path: "create-patient", component: () => import('@/views/patient/create-patient.vue') },
//       { path: "edit-patient", component: () => import('@/views/patient/edit-patient.vue') },
//     ],
//   },
//   {
//     path: "/account-settings",
//     component: () => import('@/views/settings/account-settings/account-settings.vue'),
//     children: [
//       { path: "", redirect: "/account-settings/profile-settings" },
//       { path: "profile-settings", component: () => import('@/views/settings/account-settings/profile-settings.vue') },
//       { path: "security-settings", component: () => import('@/views/settings/account-settings/security-settings.vue') },
//       { path: "notifications-settings", component: () => import('@/views/settings/account-settings/notifications-settings.vue') },
//       { path: "integrations-settings", component: () => import('@/views/settings/account-settings/integrations-settings.vue') },
//     ],
//   },
//   {
//     path: "/website-settings",
//     component: () => import('@/views/settings/website-settings/website-settings.vue'),
//     children: [
//       { path: "", redirect: "/website-settings/organization-settings" },
//       { path: "organization-settings", component: () => import('@/views/settings/website-settings/organization-settings.vue') },
//       { path: "localization-settings", component: () => import('@/views/settings/website-settings/localization-settings.vue') },
//       { path: "prefixes-settings", component: () => import('@/views/settings/website-settings/prefixes-settings.vue') },
//       { path: "seo-setup-settings", component: () => import('@/views/settings/website-settings/seo-setup-settings.vue') },
//       { path: "language-settings", component: () => import('@/views/settings/website-settings/language-settings.vue') },
//       { path: "language-settings2", component: () => import('@/views/settings/website-settings/language-settings2.vue') },
//       { path: "language-settings3", component: () => import('@/views/settings/website-settings/language-settings3.vue') },
//       { path: "maintenance-mode-settings", component: () => import('@/views/settings/website-settings/maintenance-mode-settings.vue') },
//       { path: "login-and-register-settings", component: () => import('@/views/settings/website-settings/login-and-register-settings.vue') },
//       { path: "preferences-settings", component: () => import('@/views/settings/website-settings/preferences-settings.vue') },
//     ],
//   },
//   {
//     path: "/clinic-settings",
//     component: () => import('@/views/settings/clinic-settings/clinic-settings.vue'),
//     children: [
//       { path: "", redirect: "/clinic-settings/appointment-settings" },
//       { path: "appointment-settings", component: () => import('@/views/settings/clinic-settings/appointment-settings.vue') },
//       { path: "working-hours-settings", component: () => import('@/views/settings/clinic-settings/working-hours-settings.vue') },
//       { path: "cancellation-reason-settings", component: () => import('@/views/settings/clinic-settings/cancellation-reason-settings.vue') },
//     ],
//   },
//   {
//     path: "/app-settings",
//     component: () => import('@/views/settings/app-settings/app-settings.vue'),
//     children: [
//       { path: "", redirect: "/app-settings/invoice-settings" },
//       { path: "invoice-settings", component: () => import('@/views/settings/app-settings/invoice-settings.vue') },
//       { path: "invoice-templates-settings", component: () => import('@/views/settings/app-settings/invoice-templates-settings.vue') },
//       { path: "signatures-settings", component: () => import('@/views/settings/app-settings/signatures-settings.vue') },
//       { path: "custom-fields-settings", component: () => import('@/views/settings/app-settings/custom-fields-settings.vue') },
//     ],
//   },
//   {
//     path: "/system-settings",
//     component: () => import('@/views/settings/system-settings/system-settings.vue'),
//     children: [
//       { path: "", redirect: "/system-settings/invoice-settings" },
//       { path: "email-settings", component: () => import('@/views/settings/system-settings/email-settings.vue') },
//       { path: "email-templates-settings", component: () => import('@/views/settings/system-settings/email-templates-settings.vue') },
//       { path: "sms-gateways-settings", component: () => import('@/views/settings/system-settings/sms-gateways-settings.vue') },
//       { path: "sms-templates-settings", component: () => import('@/views/settings/system-settings/sms-templates-settings.vue') },
//       { path: "gdpr-cookies-settings", component: () => import('@/views/settings/system-settings/gdpr-cookies-settings.vue') },
//     ],
//   },
//   {
//     path: "/finance-settings",
//     component: () => import('@/views/settings/finance-settings/finance-settings.vue'),
//     children: [
//       { path: "", redirect: "/finance-settings/invoice-settings" },
//       { path: "payment-methods-settings", component: () => import('@/views/settings/finance-settings/payment-methods-settings.vue') },
//       { path: "bank-accounts-settings", component: () => import('@/views/settings/finance-settings/bank-accounts-settings.vue') },
//       { path: "tax-rates-settings", component: () => import('@/views/settings/finance-settings/tax-rates-settings.vue') },
//       { path: "currencies-settings", component: () => import('@/views/settings/finance-settings/currencies-settings.vue') },
//     ],
//   },
//   {
//     path: "/others-settings",
//     component: () => import('@/views/settings/others-settings/others-settings.vue'),
//     children: [
//       { path: "", redirect: "/others-settings/invoice-settings" },
//       { path: "sitemap-settings", component: () => import('@/views/settings/others-settings/sitemap-settings.vue') },
//       { path: "clear-cache-settings", component: () => import('@/views/settings/others-settings/clear-cache-settings.vue') },
//       { path: "storage-settings", component: () => import('@/views/settings/others-settings/storage-settings.vue') },
//       { path: "cronjob-settings", component: () => import('@/views/settings/others-settings/cronjob-settings.vue') },
//       { path: "ban-ip-address-settings", component: () => import('@/views/settings/others-settings/ban-ip-address-settings.vue') },
//       { path: "system-backup-settings", component: () => import('@/views/settings/others-settings/system-backup-settings.vue') },
//       { path: "database-backup-settings", component: () => import('@/views/settings/others-settings/database-backup-settings.vue') },
//       { path: "system-update", component: () => import('@/views/settings/others-settings/system-update.vue') },
//     ],
//   },
//   {
//     path: "/content",
//     component: () => import('@/views/content/content-index.vue'),
//     children: [
//       { path: "", redirect: "/content/pages" },
//       { path: "pages", component: () => import('@/views/content/pages.vue') },
//       { path: "add-page", component: () => import('@/views/content/add-page.vue') },
//       { path: "edit-page", component: () => import('@/views/content/edit-page.vue') },
//       { path: "testimonials", component: () => import('@/views/content/testimonials.vue') },
//       { path: "faq", component: () => import('@/views/content/faq.vue') },
//     ],
//   },
//   {
//     path: "/blogs",
//     component: () => import('@/views/content/blogs/blogs-index.vue'),
//     children: [
//       { path: "", redirect: "/blogs/blogs" },
//       { path: "blogs", component: () => import('@/views/content/blogs/blogs.vue') },
//       { path: "add-blog", component: () => import('@/views/content/blogs/add-blog.vue') },
//       { path: "edit-blog", component: () => import('@/views/content/blogs/edit-blog.vue') },
//       { path: "blog-categories", component: () => import('@/views/content/blogs/blog-categories.vue') },
//       { path: "blog-comments", component: () => import('@/views/content/blogs/blog-comments.vue') },
//       { path: "blog-details", component: () => import('@/views/content/blogs/blog-details.vue') },
//     ],
//   },
//   {
//     path: "/location",
//     component: () => import('@/views/content/locations/locations-index.vue'),
//     children: [
//       { path: "", redirect: "/location/countries" },
//       { path: "countries", component: () => import('@/views/content/locations/countries.vue') },
//       { path: "states", component: () => import('@/views/content/locations/states.vue') },
//       { path: "cities", component: () => import('@/views/content/locations/cities.vue') },
//     ],
//   },
//   {
//     path: "/support",
//     component: () => import('@/views/support/support-index.vue'),
//     children: [
//       { path: "", redirect: "/support/contact-messages" },
//       { path: "contact-messages", component: () => import('@/views/support/contact-messages.vue') },
//       { path: "tickets", component: () => import('@/views/support/tickets.vue') },
//       { path: "ticket-details", component: () => import('@/views/support/ticket-details.vue') },
//       { path: "announcements", component: () => import('@/views/support/announcements.vue') },
//       { path: "newsletters", component: () => import('@/views/support/newsletters.vue') },
//     ],
//   },
//   {
//     path: "/users",
//     component: () => import('@/views/users/users-index.vue'),
//     children: [
//       { path: "", redirect: "/users/roles-and-permissions" },
//       { path: "roles-and-permissions", component: () => import('@/views/users/roles-and-permissions.vue') },
//       { path: "permissions", component: () => import('@/views/users/permissions.vue') },
//       { path: "delete-account-request", component: () => import('@/views/users/delete-account-request.vue') },
//     ],
//   },
//   {
//     path: "/reports",
//     component: () => import('@/views/reports/reports-index.vue'),
//     children: [
//       { path: "", redirect: "/reports/income-report" },
//       { path: "income-report", component: () => import('@/views/reports/income-report.vue') },
//       { path: "expense-report", component: () => import('@/views/reports/expense-report.vue') },
//       { path: "profit-and-loss", component: () => import('@/views/reports/profit-and-loss.vue') },
//       { path: "appointment-report", component: () => import('@/views/reports/appointment-report.vue') },
//       { path: "patient-report", component: () => import('@/views/reports/patient-report.vue') },
//     ],
//   },
//   {
//     path: "/finance",
//     component: () => import('@/views/finance/finance-index.vue'),
//     children: [
//       { path: "", redirect: "/finance/income" },
//       { path: "income", component: () => import('@/views/finance/income.vue') },
//       { path: "payments", component: () => import('@/views/finance/payments.vue') },
//       { path: "transactions", component: () => import('@/views/finance/transactions.vue') },
//     ],
//   },
//   {
//     path: "/expenses",
//     component: () => import('@/views/finance/expenses/expenses-index.vue'),
//     children: [
//       { path: "", redirect: "/expenses/expenses-list" },
//       { path: "expenses-list", component: () => import('@/views/finance/expenses/expenses.vue') },
//       { path: "expense-category", component: () => import('@/views/finance/expenses/expense-category.vue') },
//     ],
//   },
//   {
//     path: "/invoices",
//     component: () => import('@/views/finance/invoices/invoices-index.vue'),
//     children: [
//       { path: "", redirect: "/invoices/invoices-list" },
//       { path: "invoices-list", component: () => import('@/views/finance/invoices/invoices.vue') },
//       { path: "add-invoices", component: () => import('@/views/finance/invoices/add-invoices.vue') },
//       { path: "edit-invoices", component: () => import('@/views/finance/invoices/edit-invoices.vue') },
//       { path: "invoices-details", component: () => import('@/views/finance/invoices/invoices-details.vue') },
//     ],
//   },
//   {
//     path: "/hrm",
//     component: () => import('@/views/hrm/hrm-index.vue'),
//     children: [
//       { path: "", redirect: "/hrm/payroll" },
//       { path: "payroll", component: () => import('@/views/hrm/payroll.vue') },
//       { path: "payroll-2", component: () => import('@/views/hrm/payroll-2.vue') },
//       { path: "holidays", component: () => import('@/views/hrm/holidays.vue') },
//     ],
//   },
//   {
//     path: "/leaves",
//     component: () => import('@/views/hrm/leaves/leaves-index.vue'),
//     children: [
//       { path: "", redirect: "/leaves/leaves-list" },
//       { path: "leaves-list", component: () => import('@/views/hrm/leaves/leaves.vue') },
//       { path: "leave-type", component: () => import('@/views/hrm/leaves/leave-type.vue') },
//     ],
//   },
//   {
//     path: "/clinic",
//     component: () => import('@/views/clinic/clinic-index.vue'),
//     children: [
//       { path: "", redirect: "/clinic/messages" },
//       { path: "messages", component: () => import('@/views/clinic/messages.vue') },
//       { path: "activities", component: () => import('@/views/clinic/activities.vue') },
//       { path: "assets", component: () => import('@/views/clinic/assets.vue') },
//       { path: "specializations", component: () => import('@/views/clinic/specializations.vue') },
//       { path: "services", component: () => import('@/views/clinic/services.vue') },
//       { path: "locations", component: () => import('@/views/clinic/locations.vue') },
//     ],
//   },
//   {
//     path: "/appointments",
//     component: () => import('@/views/appointments/appointments-index.vue'),
//     children: [
//       { path: "", redirect: "/appointments/appointments-list" },
//       { path: "appointments-list", component: () => import('@/views/appointments/appointments-list.vue') },
//       { path: "appointment-calendar", component: () => import('@/views/appointments/appointments-calendar.vue') },
//       { path: "new-appointment", component: () => import('@/views/appointments/new-appointment.vue') },
//       { path: "appointment-consultations", component: () => import('@/views/appointments/appointment-consultations.vue') },
//     ],
//   },
//   {
//     path: "/hrm",
//     component: () => import('@/views/hrm/hrm-index.vue'),
//     children: [
//       { path: "", redirect: "/hrm/payroll" },
//       { path: "payroll", component: () => import('@/views/hrm/payroll.vue') },
//       { path: "payroll-2", component: () => import('@/views/hrm/payroll-2.vue') },
//       { path: "holidays", component: () => import('@/views/hrm/holidays.vue') },
//       { path: "attendance", component: () => import('@/views/hrm/attendance.vue') },
//       { path: "staffs", component: () => import('@/views/hrm/staffs.vue') },
//       { path: "hrm-departments", component: () => import('@/views/hrm/hrm-departments.vue') },
//       { path: "designation", component: () => import('@/views/hrm/designation.vue') },
//     ],
//   },
//   {
//     path: "/pages",
//     component: () => import('@/views/generic/pages-index.vue'),
//     children: [
//       { path: "", redirect: "/pages/starter" },
//       { path: "starter", component: () => import('@/views/generic/starter.vue') },
//       { path: "profile", component: () => import('@/views/generic/profile.vue') },
//       { path: "gallery", component: () => import('@/views/generic/gallery.vue') },
//       { path: "timeline", component: () => import('@/views/generic/timeline.vue') },
//       { path: "pricing", component: () => import('@/views/generic/pricing.vue') },
//       { path: "coming-soon", component: () => import('@/views/generic/coming-soon.vue') },
//       { path: "under-maintenance", component: () => import('@/views/generic/under-maintenance.vue') },
//       { path: "privacy-policy", component: () => import('@/views/generic/privacy-policy.vue') },
//       { path: "terms-and-conditions", component: () => import('@/views/generic/terms-and-conditions.vue') },
//     ],
//   },
//   {
//     path: "/doctor",
//     component: () => import('@/views/doctor/doctor-index.vue'),
//     children: [
//       { path: "", redirect: "/doctor/doctor-dashboard" },
//       { path: "doctor-dashboard", component: () => import('@/views/doctor/doctor-dashboard.vue') },
//       { path: "doctors-appointments", component: () => import('@/views/doctor/appointments/doctors-appointments.vue') },
//       { path: "doctors-appointment-details", component: () => import('@/views/doctor/appointments/doctors-appointment-details.vue') },
//       { path: "online-consultations", component: () => import('@/views/doctor/appointments/online-consultations.vue') },
//       { path: "doctors-schedules", component: () => import('@/views/doctor/doctors-schedules.vue') },
//       { path: "doctors-prescriptions", component: () => import('@/views/doctor/doctors-prescriptions.vue') },
//       { path: "doctors-prescription-details", component: () => import('@/views/doctor/doctors-prescription-details.vue') },
//       { path: "doctors-patient-details", component: () => import('@/views/doctor/doctors-patient-details.vue') },
//       { path: "doctors-leaves", component: () => import('@/views/doctor/doctors-leaves.vue') },
//       { path: "doctors-reviews", component: () => import('@/views/doctor/doctors-reviews.vue') },
//       { path: "doctors-notifications", component: () => import('@/views/doctor/doctors-notifications.vue') },
//     ],
//   },
//   {
//     path: "/doctor/settings",
//     component: () => import('@/views/doctor/doctor-settings/doctor-settings.vue'),
//     children: [
//       { path: "", redirect: "/doctor/settings/doctors-profile-settings" },
//       { path: "doctors-profile-settings", component: () => import('@/views/doctor/doctor-settings/doctors-profile-settings.vue') },
//       { path: "doctors-password-settings", component: () => import('@/views/doctor/doctor-settings/doctors-password-settings.vue') },
//       { path: "doctors-notification-settings", component: () => import('@/views/doctor/doctor-settings/doctors-notification-settings.vue') },
//     ],
//   },
//   {
//     path: "/calls",
//     component: () => import('@/views/apps/calls/call-index.vue'),
//     children: [
//       { path: "", redirect: "/calls/voice-call" },
//       { path: "voice-call", component: () => import('@/views/apps/calls/voice-call.vue') },
//       { path: "video-call", component: () => import('@/views/apps/calls/video-call.vue') },
//       { path: "outgoing-call", component: () => import('@/views/apps/calls/outgoing-call.vue') },
//       { path: "incoming-call", component: () => import('@/views/apps/calls/incoming-call.vue') },
//       { path: "call-history", component: () => import('@/views/apps/calls/call-history.vue') },
//     ],
//   },
//   {
//     path: "/invoice",
//     component: () => import('@/views/apps/invoice/invoice-index.vue'),
//     children: [
//       { path: "", redirect: "/invoice/invoice-list" },
//       { path: "invoice-list", component: () => import('@/views/apps/invoice/invoice-list.vue') },
//       { path: "invoice-details", component: () => import('@/views/apps/invoice/invoice-details.vue') },
//     ],
//   },
//   {
//     path: "/applications",
//     component: () => import('@/views/apps/applications-index.vue'),
//     children: [
//       { path: "", redirect: "/applications/chat" },
//       { path: "chat", component: () => import('@/views/apps/chat-index.vue') },
//       { path: "calendar", component: () => import('@/views/apps/calendar.vue') },
//       { path: "email", component: () => import('@/views/apps/email.vue') },
//       { path: "email-reply", component: () => import('@/views/apps/email-reply.vue') },
//       { path: "todo", component: () => import('@/views/apps/todo.vue') },
//       { path: "todo-list", component: () => import('@/views/apps/todo-list.vue') },
//       { path: "notes", component: () => import('@/views/apps/notes.vue') },
//       { path: "social-feed", component: () => import('@/views/apps/social-feed.vue') },
//       { path: "file-manager", component: () => import('@/views/apps/file-manager.vue') },
//       { path: "kanban-view", component: () => import('@/views/apps/kanban/kanban-view.vue') },
//       { path: "contacts", component: () => import('@/views/apps/contacts/contacts-list.vue') },
//       { path: "search-list", component: () => import('@/views/apps/search-list/search-list.vue') },
//     ],
//   },
//   {
//     path: "/base-ui",
//     component: () => import('@/views/ui/baseui/baseui-index.vue'),
//     children: [
//       { path: "", redirect: "/base-ui/ui-accordion" },
//       { path: "ui-accordion", component: () => import('@/views/ui/baseui/ui-accordion.vue') },
//       { path: "ui-alerts", component: () => import('@/views/ui/baseui/ui-alerts.vue') },
//       { path: "ui-avatar", component: () => import('@/views/ui/baseui/ui-avatar.vue') },
//       { path: "ui-badges",component: () => import('@/views/ui/baseui/ui-badges.vue') },
//       { path: "ui-breadcrumb", component: () => import('@/views/ui/baseui/ui-breadcrumb.vue') },
//       { path: "ui-buttons", component: () => import('@/views/ui/baseui/ui-buttons.vue') },
//       { path: "ui-buttons-group", component: () => import('@/views/ui/baseui/ui-buttons-group.vue') },
//       { path: "ui-cards", component: () => import('@/views/ui/baseui/ui-cards.vue') },
//       { path: "ui-carousel", component: () => import('@/views/ui/baseui/ui-carousel.vue') },
//       { path: "ui-collapse", component: () => import('@/views/ui/baseui/ui-collapse.vue') },
//       { path: "ui-dropdowns", component: () => import('@/views/ui/baseui/ui-dropdowns.vue') },
//       { path: "ui-ratio", component: () => import('@/views/ui/baseui/ui-ratio.vue') },
//       { path: "ui-grid", component: () => import('@/views/ui/baseui/ui-grid.vue') },
//       { path: "ui-images", component: () => import('@/views/ui/baseui/ui-images.vue') },
//       { path: "ui-links" ,component: () => import('@/views/ui/baseui/ui-links.vue') },
//       { path: "ui-list-group", component: () => import('@/views/ui/baseui/ui-list-group.vue') },
//       { path: "ui-modals", component: () => import('@/views/ui/baseui/ui-modals.vue') },
//       { path: "ui-offcanvas", component: () => import('@/views/ui/baseui/ui-offcanvas.vue') },
//       { path: "ui-pagination", component: () => import('@/views/ui/baseui/ui-pagination.vue') },
//       { path: "ui-placeholders", component: () => import('@/views/ui/baseui/ui-placeholders.vue') },
//       { path: "ui-popovers", component: () => import('@/views/ui/baseui/ui-popovers.vue') },
//       { path: "ui-progress", component: () => import('@/views/ui/baseui/ui-progress.vue') },
//       { path: "ui-scrollspy", component: () => import('@/views/ui/baseui/ui-scrollspy.vue') },
//       { path: "ui-spinner", component: () => import('@/views/ui/baseui/ui-spinner.vue') },
//       { path: "ui-nav-tabs", component: () => import('@/views/ui/baseui/ui-nav-tabs.vue') },
//       { path: "ui-toasts", component: () => import('@/views/ui/baseui/ui-toasts.vue') },
//       { path: "ui-tooltips", component: () => import('@/views/ui/baseui/ui-tooltips.vue') },
//       { path: "ui-typography", component: () => import('@/views/ui/baseui/ui-typography.vue') },
//       { path: "ui-utilities", component: () => import('@/views/ui/baseui/ui-utilities.vue') },
//     ],
//   },
//   {
//     path: "/advance-ui",
//     component: () => import('@/views/ui/advancedui/advancedui-index.vue'),
//     children: [
//       { path: "", redirect: "/advancedui/extended-dragula" },
//       { path: "extended-dragula", component: () => import('@/views/ui/advancedui/extended-dragula.vue') },
//       { path: "ui-clipboard", component: () => import('@/views/ui/advancedui/ui-clipboard.vue') },
//       { path: "ui-rangeslider", component: () => import('@/views/ui/advancedui/ui-rangeslider.vue') },
//       { path: "ui-sweetalerts", component: () => import('@/views/ui/advancedui/ui-sweetalerts.vue') },
//       { path: "ui-lightbox", component: () => import('@/views/ui/advancedui/ui-lightbox.vue') },
//       { path: "ui-rating", component: () => import('@/views/ui/advancedui/ui-rating.vue') },
//       { path: "ui-counter", component: () => import('@/views/ui/advancedui/ui-counter.vue') },
//       { path: "ui-scrollbar", component: () => import('@/views/ui/advancedui/ui-scrollbar.vue') },
//     ],
//   },
//   {
//     path: "/form-elements",
//     component: () => import('@/views/ui/form/form-elements/form-elements.vue'),
//     children: [
//       { path: "", redirect: "/form-elements/form-basic-inputs" },
//       { path: "form-basic-inputs", component: () => import('@/views/ui/form/form-elements/form-basic-inputs.vue') },
//       { path: "form-checkbox-radios", component: () => import('@/views/ui/form/form-elements/form-checkbox-radios.vue') },
//       { path: "form-input-groups", component: () => import('@/views/ui/form/form-elements/form-input-groups.vue') },
//       { path: "form-grid-gutters", component: () => import('@/views/ui/form/form-elements/form-grid-gutters.vue') },
//       { path: "form-mask", component: () => import('@/views/ui/form/form-elements/form-mask.vue') },
//       { path: "form-fileupload", component: () => import('@/views/ui/form/form-elements/form-fileupload.vue') },
//     ],
//   },
//   {
//     path: "/form-layouts",
//     component: () => import('@/views/ui/form/form-layouts/form-layouts.vue'),
//     children: [
//       { path: "", redirect: "/form-layouts/form-horizontal" },
//       { path: "form-horizontal", component: () => import('@/views/ui/form/form-layouts/form-horizontal.vue') },
//       { path: "form-vertical", component: () => import('@/views/ui/form/form-layouts/form-vertical.vue') },
//       { path: "form-floating-labels", component: () => import('@/views/ui/form/form-layouts/form-floating-labels.vue') },
//     ],
//   },
//   {
//     path: "/forms",
//     component: () => import('@/views/ui/form/form-index.vue'),
//     children: [
//       { path: "", redirect: "/form/form-validation" },
//       { path: "form-validation", component: () => import('@/views/ui/form/form-validation.vue') },
//       { path: "form-select2", component: () => import('@/views/ui/form/form-select2.vue') },
//       { path: "form-wizard", component: () => import('@/views/ui/form/form-wizard.vue') },
//     ],
//   },
//   {
//     path: "/tables",
//     component: () => import('@/views/ui/tables/tables-index.vue'),
//     children: [
//       { path: "", redirect: "/tables/tables-basic" },
//       { path: "tables-basic", component: () => import('@/views/ui/tables/tables-basic.vue') },
//       { path: "data-tables", component: () => import('@/views/ui/tables/data-tables.vue') },
//     ],
//   },
//   {
//     path: "/charts",
//     component: () => import('@/views/ui/charts/charts-index.vue'),
//     children: [
//       { path: "", redirect: "/charts/chart-apex" },
//       { path: "chart-apex", component: () => import('@/views/ui/charts/apex/chart-apex.vue') },
//       { path: "chart-c3", component: () => import('@/views/ui/charts/c3/chart-c3.vue') },
//       { path: "chart-js", component: () => import('@/views/ui/charts/js/chart-js.vue') },
//       { path: "chart-flot", component: () => import('@/views/ui/charts/flot/chart-flot.vue') },
//       { path: "chart-morris", component: () => import('@/views/ui/charts/morris/chart-morris.vue') },
//     ],
//   },
//   {
//     path: "/icons",
//     component: () => import('@/views/ui/icons/icons-index.vue'),
//     children: [
//       { path: "", redirect: "/icons/icon-fontawesome" },
//       { path: "icon-fontawesome", component: () => import('@/views/ui/icons/icon-fontawesome.vue') },
//       { path: "icon-tabler", component: () => import('@/views/ui/icons/icon-tabler.vue') },
//       { path: "icon-bootstrap", component: () => import('@/views/ui/icons/icon-bootstrap.vue') },
//       { path: "icon-remix", component: () => import('@/views/ui/icons/icon-remix.vue') },
//       { path: "icon-ionic", component: () => import('@/views/ui/icons/icon-ionic.vue') },
//       { path: "icon-material", component: () => import('@/views/ui/icons/icon-material.vue') },
//       { path: "icon-feather", component: () => import('@/views/ui/icons/icon-feather.vue') },
//       { path: "icon-pe7", component: () => import('@/views/ui/icons/icon-pe7.vue') },
//       { path: "icon-simpleline", component: () => import('@/views/ui/icons/icon-simpleline.vue') },
//       { path: "icon-weather", component: () => import('@/views/ui/icons/icon-weather.vue') },
//       { path: "icon-typicon", component: () => import('@/views/ui/icons/icon-typicon.vue') },
//       { path: "icon-flag", component: () => import('@/views/ui/icons/icon-flag.vue') },
//     ],
//   },
//   {
//     path: "/maps",
//     component: () => import('@/views/ui/maps/map-index.vue'),
//     children: [
//       { path: "", redirect: "/maps/maps-vector" },
//       { path: "maps-leaflet", component: () => import('@/views/ui/maps/maps-leaflet.vue') },
//       { path: "maps-vector", component: () => import('@/views/ui/maps/maps-vector.vue') },
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
