import { defineStore } from 'pinia'
import axiosInstance from '../utils/axios'
import type { Staff } from '../types/staff'

interface StaffState {
  staff: Staff | null
  staffList: Staff[]
  loading: boolean
  error: string | null
}

export const useStaffStore = defineStore('staff', {
  state: (): StaffState => ({
    staff: null,
    staffList: [],
    loading: false,
    error: null,
  }),

  getters: {
    currentStaff: (state) => state.staff,
    allStaff: (state) => state.staffList,
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
        const response = await axiosInstance.get(`/staff/${id}`)
        const staff = response.data?.data ?? response.data
        this.staff = staff
        return staff
      } catch (error: any) {
        console.error('Error fetching staff:', error)
        this.error = error.response?.data?.message || 'Failed to fetch staff details'
        this.staff = null
        throw error
      } finally {
        this.loading = false
      }
    },

    async fetchAllStaff(params: Record<string, any> = {}) {
      this.loading = true
      this.error = null

      try {
        const response = await axiosInstance.get('/staff', { params })
        const payload = response.data?.data ?? response.data
        const list = Array.isArray(payload?.results)
          ? payload.results
          : Array.isArray(payload)
            ? payload
            : []

        this.staffList = list
        return list
      } catch (error: any) {
        console.error('Error fetching staff list:', error)
        this.error = error.response?.data?.message || 'Failed to fetch staff list'
        this.staffList = []
        throw error
      } finally {
        this.loading = false
      }
    },

    clearStaff() {
      this.staff = null
      this.error = null
    },
  },
})
