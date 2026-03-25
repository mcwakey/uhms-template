import { defineStore, storeToRefs } from 'pinia'
import { ref } from 'vue'
import axiosInstance from '../utils/axios'

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
        const payload = response.data
        if (payload && Array.isArray(payload.data)) {
          data.value = payload.data
          totalCount.value =
            payload.meta?.count ??
            payload.meta?.pagination?.count ??
            payload.total ??
            payload.data.length
          // Sync page if provided
          if (typeof payload.meta?.page === 'number') {
            currentPage.value = payload.meta.page
          }
        } else if (payload && Array.isArray(payload.results)) {
          data.value = payload.results
          totalCount.value = payload.count ?? payload.total ?? payload.results.length
        } else if (Array.isArray(payload)) {
          data.value = payload
          totalCount.value = payload.length
        } else {
          data.value = []
          totalCount.value = 0
        }
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error)
        try {
          const mockModule = await import(`@/assets/mock/${endpoint}.json`)
          const mock = mockModule.default
          if (Array.isArray(mock)) {
            data.value = mock
            totalCount.value = mock.length
            return
          }
        } catch (mockErr) {
          console.warn(`No mock found for ${endpoint}`, mockErr)
          throw error
        }
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
        const response = await axiosInstance.get(`${endpoint}/${id}`)
        const itemData = response.data?.data ?? response.data
        detailedItem.value = itemData
        return itemData
      } catch (error) {
        console.error(`Error fetching ${endpoint} details:`, error)
        try {
          const mockModule = await import(`@/assets/mock/${endpoint}.json`)
          const mock = mockModule.default
          const found =
            Array.isArray(mock) &&
            mock.find((x: any) => x?.id === id || x?.uuid === id || String(x?.id) === String(id))
          detailedItem.value = found ?? {}
          return found
        } catch (mockErr) {
          console.warn(`No mock found for ${endpoint} details`, mockErr)
          throw error
        }
      } finally {
        loading.value = false
      }
    }

    function selectItem(item: any) {
      detailedItem.value = item ?? {}
    }

    /**
     * Fetches a sub-resource or specific item path
     * @param subPath - Path relative to the endpoint (e.g., 'uuid/insurances')
     */
    async function fetchItem(subPath: string) {
      try {
        // Ensure we don't double slash if subPath starts with /
        const path = subPath.startsWith('/') ? subPath.substring(1) : subPath
        const response = await axiosInstance.get(`${endpoint}/${path}`)
        return response.data?.data ?? response.data
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
      selectItem,
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
    selectItem: store.selectItem,
    fetchItemDetails: store.fetchItemDetails,
    fetchItem: store.fetchItem,
    handleTableChange: store.handleTableChange
  }
}
