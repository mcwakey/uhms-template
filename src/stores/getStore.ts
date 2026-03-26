import { defineStore } from 'pinia'
import axiosInstance from '../utils/axios'

export const useGetStore = defineStore('get', {
  actions: {
    async getObjects(endpoint: string, params: Record<string, any> = {}) {
      const response = await axiosInstance.get(endpoint, { params })
      const payload = response.data?.data ?? response.data

      if (Array.isArray(payload?.results)) return payload.results
      if (Array.isArray(payload)) return payload
      return payload ?? []
    },
  },
})
