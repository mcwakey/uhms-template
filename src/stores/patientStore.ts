import { defineStore } from 'pinia'
import axiosInstance from '@/utils/axios'
import type { Patient } from '@/types/patient'

interface PatientState {
  patient: Patient | null
  loading: boolean
  error: string | null
}

export const usePatientStore = defineStore('patient', {
  state: (): PatientState => ({
    patient: null,
    loading: false,
    error: null,
  }),

  getters: {
    currentPatient: (state) => state.patient,
  },

  actions: {
    /**
     * Fetches a single patient by ID or UUID
     * @param id - The patient's ID or UUID
     */
    async fetchPatient(id: string | number) {
      this.loading = true
      this.error = null
      
      try {
        const response = await axiosInstance.get(`/patients/${id}/`)
        this.patient = response.data.data || response.data
      } catch (error: any) {
        console.error('Error fetching patient:', error)
        this.error = error.response?.data?.message || 'Failed to fetch patient details'
        this.patient = null
      } finally {
        this.loading = false
      }
    },

    /**
     * Clears the current patient from state
     */
    clearPatient() {
      this.patient = null
      this.error = null
    },

    /**
     * Creates a new patient
     * @param patientData - The patient data (JSON object)
     */
    async createPatient(patientData: any) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosInstance.post('/patients/', patientData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        return response.data
      } catch (error: any) {
        console.error('Error creating patient:', error)
        this.error = error.response?.data?.message || 'Failed to create patient'
        throw error
      } finally {
        this.loading = false
      }
    },

    /**
     * Updates an existing patient
     * @param id - The patient's ID
     * @param patientData - The patient data (JSON object)
     */
    async updatePatient(id: string | number, patientData: any) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosInstance.put(`/patients/${id}/`, patientData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        return response.data
      } catch (error: any) {
        console.error('Error updating patient:', error)
        this.error = error.response?.data?.message || 'Failed to update patient'
        throw error
      } finally {
        this.loading = false
      }
    }
  },
})
