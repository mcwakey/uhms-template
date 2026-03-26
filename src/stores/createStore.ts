import { defineStore } from 'pinia'
import axiosInstance from '../utils/axios'

interface CreateState {
  loading: boolean
  error: string | null
}

export const useCreateStore = defineStore('create', {
  state: (): CreateState => ({
    loading: false,
    error: null,
  }),
  actions: {
    async createStaff(payload: any) {
      this.loading = true
      this.error = null
      try {
        const response = await axiosInstance.post('/staff/', payload, {
          headers: { 'Content-Type': 'application/json' },
        })
        return response.data
      } catch (error: any) {
        this.error = error?.response?.data?.message || 'Failed to create staff'
        throw error
      } finally {
        this.loading = false
      }
    },
  },
})
