/**
 * Authentication Guard
 * 
 * Protects routes based on authentication status, user roles, and department permissions.
 * 
 * Permission Hierarchy:
 * 1. Super Admin - Full access to all routes and features
 * 2. Admin - Access to admin routes and their assigned department
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
  const targetDashboardRoute = authStore.userRole === 'doctor'
    ? 'DoctorDashboard'
    : authStore.userDepartment
      ? authStore.routes[authStore.userDepartment]
      : 'AdminDashboard'

  // Debug logging (remove in production)
  if (authStore.isSuperAdmin) console.log('isSuperAdmin: true')
  if (authStore.isAdmin) console.log('isAdmin: true')
  if (authStore.isLoggedIn) console.log('isLoggedIn: true')
  if (authStore.userDepartment) console.log('userDepartment:', authStore.userDepartment)
  if (authStore.isInvestigation) console.log('isInvestigation: true')
  if (authStore.isConsultation) console.log('isConsultation: true')
  if (authStore.isNursing) console.log('isNursing: true')

  // 1. Super Admin exclusive route check (highest priority)
  if (to.meta.isSuperAdmin && !authStore.isSuperAdmin) {
    console.log('Access denied: Super Admin privileges required')
    next({ name: 'Unauthorized' })
  }
  // 2. Admin route check (super admin automatically has access)
  else if (to.meta.isAdmin && !authStore.isAdmin && !authStore.isSuperAdmin) {
    console.log('Access denied: Admin privileges required')
    next({ name: 'Unauthorized' })
  }
  // 3. Auth required check
  else if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    authStore.setReturnUrl(to.fullPath)
    console.log('Redirecting to login page due to authentication requirement')
    next({ name: 'Login' })
  }
  // 4. Doctor route check
  else if (
    to.meta.isDoctor &&
    authStore.userRole !== 'doctor' &&
    !authStore.isAdmin &&
    !authStore.isSuperAdmin
  ) {
    console.log('Access denied: Doctor privileges required')
    next({ name: 'Unauthorized' })
  }
  // 4. Department-based permission checks (super admin bypasses these)
  else if (
    to.meta.isConsultation &&
    !authStore.isConsultation &&
    !authStore.isAdmin &&
    !authStore.isSuperAdmin
  ) {
    console.log('User does not have consultation department access')
    next({ name: targetDashboardRoute })
  } else if (
    to.meta.isInvestigation &&
    !authStore.isInvestigation &&
    !authStore.isAdmin &&
    !authStore.isSuperAdmin
  ) {
    console.log('User does not have investigation department access')
    next({ name: targetDashboardRoute })
  } else if (to.meta.isNursing && !authStore.isNursing && !authStore.isAdmin && !authStore.isSuperAdmin) {
    console.log('User does not have nursing department access')
    next({ name: targetDashboardRoute })
  }
  // 5. Guest only route check
  else if (to.meta.guestOnly && authStore.isLoggedIn) {
    if (to.name !== targetDashboardRoute) {
      console.log('Redirecting to user dashboard due to guest-only route')
      next({ name: targetDashboardRoute })
    } else {
      next()
    }
  }
  // 6. Redirect from login if already logged in
  else if (from.name === 'Login' && authStore.isLoggedIn) {
    if (to.name !== targetDashboardRoute) {
      console.log('Redirecting to user dashboard from login page')
      next({ name: targetDashboardRoute })
    } else {
      next()
    }
  }
  // 7. Default - allow access
  else {
    next()
  }
}
