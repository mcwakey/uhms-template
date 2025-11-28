import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import axiosInstance from '@/utils/axios'

/**
 * Reusable Data Table Store Factory
 * 
 * Creates a Pinia store instance for a specific API endpoint.
 * Manages pagination, searching, and data fetching for tables.
 * 
 * @param endpoint - The API endpoint to fetch data from (e.g., 'patients', 'doctors')
 * @returns Object containing store refs and actions
 */
export const useTableStore = (endpoint: string) => {
  const storeDefinition = defineStore(endpoint, () => {
    // State
    const data = ref<any[]>([])
    const detailedItem = ref<any>({})
    const loading = ref(false)
    const currentPage = ref(1)
    const perPage = ref(10)
    const totalCount = ref(0)
    const searchQuery = ref('')
    const filters = ref<any>({})

    // Actions
    /**
     * Fetches paginated data from the API
     * @param newFilters - Additional query parameters or filters to update
     */
    async function fetchData(newFilters: any = null) {
      loading.value = true
      
      // Update filters if provided
      if (newFilters) {
        filters.value = { ...filters.value, ...newFilters }
      }

      // Clean up filters (remove null/undefined/empty strings)
      const activeFilters = Object.fromEntries(
        Object.entries(filters.value).filter(([_, v]) => v !== null && v !== undefined && v !== '')
      )

      try {
        const response = await axiosInstance.get(endpoint, {
          params: {
            page: currentPage.value,
            page_size: perPage.value,
            search: searchQuery.value,
            ...activeFilters
          }
        })
        
        // Handle different response structures
        if (response.data && Array.isArray(response.data.results)) {
          data.value = response.data.results
          totalCount.value = response.data.count || 0
        } else if (Array.isArray(response.data)) {
          data.value = response.data
          totalCount.value = response.data.length
        } else {
          data.value = []
          totalCount.value = 0
        }
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error)
        throw error
      } finally {
        loading.value = false
      }
    }

    /**
     * Fetches details for a specific item
     * @param id - Item ID or UUID
     */
    async function fetchItemDetails(id: string | number) {
      loading.value = true
      try {
        const response = await axiosInstance.get(`${endpoint}/${id}/`)
        detailedItem.value = response.data
        return response.data
      } catch (error) {
        console.error(`Error fetching ${endpoint} details:`, error)
        throw error
      } finally {
        loading.value = false
      }
    }

    /**
     * Fetches a sub-resource or specific item path
     * @param subPath - Path relative to the endpoint (e.g., 'uuid/insurances')
     */
    async function fetchItem(subPath: string) {
      try {
        // Ensure we don't double slash if subPath starts with /
        const path = subPath.startsWith('/') ? subPath.substring(1) : subPath
        const response = await axiosInstance.get(`${endpoint}/${path}/`)
        return response.data
      } catch (error) {
        console.error(`Error fetching item ${subPath}:`, error)
        throw error
      }
    }

    /**
     * Handles table pagination changes
     * @param pagination - Pagination object from Ant Design Table
     */
    function handleTableChange(pagination: any) {
      currentPage.value = pagination.current
      perPage.value = pagination.pageSize
      fetchData()
    }

    return {
      data,
      detailedItem,
      loading,
      currentPage,
      perPage,
      totalCount,
      searchQuery,
      filters,
      fetchData,
      fetchItemDetails,
      fetchItem,
      handleTableChange
    }
  })

  const store = storeDefinition()
  const stateRefs = storeToRefs(store)

  return {
    ...stateRefs,
    fetchData: store.fetchData,
    fetchItemDetails: store.fetchItemDetails,
    fetchItem: store.fetchItem,
    handleTableChange: store.handleTableChange
  }
}
