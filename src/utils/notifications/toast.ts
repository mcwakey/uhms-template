/**
 * Toast Notification Utilities
 * 
 * Provides a centralized interface for displaying toast notifications throughout the application.
 * Uses vue-toastification for modern, customizable toast notifications.
 * 
 * Available methods:
 * - notifySuccess: Display success messages
 * - notifyError: Display error messages
 * - notifyWarning: Display warning messages
 * - notifyInfo: Display informational messages
 */

import { useToast } from 'vue-toastification'

const toast = useToast()

/**
 * Displays an error toast notification
 * @param message - The error message to display
 */
export const notifyError = (message: string) => toast.error(message)

/**
 * Displays a success toast notification
 * @param message - The success message to display
 */
export const notifySuccess = (message: string) => toast.success(message)

/**
 * Displays a warning toast notification
 * @param message - The warning message to display
 */
export const notifyWarning = (message: string) => toast.warning(message)

/**
 * Displays an informational toast notification
 * @param message - The informational message to display
 */
export const notifyInfo = (message: string) => toast.info(message)
