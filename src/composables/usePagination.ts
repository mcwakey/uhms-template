import { ref, computed, type Ref, type ComputedRef } from 'vue'

interface UsePaginationOptions {
  initialPage?: number
  initialPageSize?: number
  pageSizeOptions?: number[]
}

interface UsePaginationReturn<T> {
  currentPage: Ref<number>
  pageSize: Ref<number>
  pageSizeOptions: number[]
  paginatedData: ComputedRef<T[]>
  total: ComputedRef<number>
  totalPages: ComputedRef<number>
  goToPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
  resetPage: () => void
}

export function usePagination<T>(
  data: Ref<T[]>,
  options: UsePaginationOptions = {}
): UsePaginationReturn<T> {
  const {
    initialPage = 1,
    initialPageSize = 10,
    pageSizeOptions = [10, 20, 50, 100]
  } = options

  const currentPage = ref(initialPage)
  const pageSize = ref(initialPageSize)

  const total = computed(() => data.value.length)

  const totalPages = computed(() => Math.ceil(total.value / pageSize.value) || 1)

  const paginatedData = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value
    const end = start + pageSize.value
    return data.value.slice(start, end)
  })

  function goToPage(page: number) {
    if (page < 1) {
      currentPage.value = 1
    } else if (page > totalPages.value) {
      currentPage.value = totalPages.value
    } else {
      currentPage.value = page
    }
  }

  function nextPage() {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  function prevPage() {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  function resetPage() {
    currentPage.value = 1
  }

  // Reset to page 1 when page size changes to avoid being on a non-existent page
  // This is handled by watching pageSize in the component

  return {
    currentPage,
    pageSize,
    pageSizeOptions,
    paginatedData,
    total,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    resetPage
  }
}
