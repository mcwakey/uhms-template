import { defineStore } from 'pinia'
import axiosInstance from '@/utils/axios'
import type { Staff } from '@/types/staff'

interface StaffState {
  staff: Staff | null
  loading: boolean
  error: string | null
}

export const useStaffStore = defineStore('staff', {
  state: (): StaffState => ({
    staff: null,
    loading: false,
    error: null,
  }),

  getters: {
    currentStaff: (state) => state.staff,
  },

  actions: {
    /**
     * Fetches a single staff member by ID or UUID
     * @param id - The staff's ID or UUID
     */
    async fetchStaff(id: string | number) {
      this.loading = true
      this.error = null
      
      try {
        const response = await axiosInstance.get(`/staff/${id}/`)
        this.staff = response.data
        return response.data
      } catch (error: any) {
        console.error('Error fetching staff:', error)
        this.error = error.response?.data?.message || 'Failed to fetch staff details'
        this.staff = null
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
