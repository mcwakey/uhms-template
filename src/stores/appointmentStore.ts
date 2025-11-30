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
    /**
     * Fetches a list of appointments
     * @param params - Query parameters (filters)
     */
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

    /**
     * Fetches a single appointment by ID
     * @param id - The appointment's ID
     */
    async fetchAppointment(id: string | number) {
      this.loading = true
      this.error = null
      
      try {
        const response = await axiosInstance.get(`/appointments/${id}/`)
        // Merge with existing if it exists to preserve mapped properties
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

    /**
     * Sets the selected appointment
     * @param appointment - The appointment object
     */
    setSelectedAppointment(appointment: Appointment | null) {
      this.selectedAppointment = appointment
    },

    /**
     * Updates an existing appointment
     * @param id - The appointment's ID
     * @param data - The data to update
     */
    async updateAppointment(id: string | number, data: any) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosInstance.patch(`/appointments/${id}/`, data)
        
        // Update in list if exists
        const index = this.appointments.findIndex(a => a.id === id)
        if (index !== -1) {
          this.appointments[index] = { ...this.appointments[index], ...response.data }
        }

        // Update selected if matches
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

    /**
     * Updates appointment status
     * @param id - The appointment's ID
     * @param status - The new status
     */
    async updateAppointmentStatus(id: string | number, status: string) {
      return this.updateAppointment(id, { status })
    },

    /**
     * Updates appointment mode (e.g. for Telehealth)
     * @param id - The appointment's ID
     * @param mode - The new mode
     */
    async updateAppointmentMode(id: string | number, mode: string) {
      return this.updateAppointment(id, { mode })
    },

    /**
     * Reschedules an appointment
     * @param id - The appointment's ID
     * @param data - Reschedule data
     */
    async rescheduleAppointment(id: string | number, data: any) {
      const updateData: any = {
        status: 'RESCHEDULED'
      }
      
      if (data.date) updateData.start_date = data.date
      if (data.service_id) updateData.service_id = data.service_id
      if (data.duration) updateData.duration = data.duration
      if (data.priority) updateData.priority = data.priority
      if (data.notes) updateData.notes = data.notes

      return this.updateAppointment(id, updateData)
    }
  },
})
