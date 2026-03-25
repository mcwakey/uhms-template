<template>
  <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mt-3">
    <div class="d-flex align-items-center gap-2">
      <span class="text-muted fs-13">Show</span>
      <select
        class="form-select form-select-sm"
        style="width: auto;"
        :value="pageSize"
        @change="onPageSizeChange($event)"
      >
        <option v-for="size in pageSizeOptions" :key="size" :value="size">{{ size }}</option>
      </select>
      <span class="text-muted fs-13">entries</span>
    </div>

    <div class="d-flex align-items-center gap-3">
      <span class="text-muted fs-13">
        Showing {{ startItem }} to {{ endItem }} of {{ total }} entries
      </span>

      <nav v-if="totalPages > 1" aria-label="Table pagination">
        <ul class="pagination pagination-sm mb-0">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a
              class="page-link"
              href="javascript:void(0);"
              @click.prevent="goToPage(1)"
            >
              <i class="ti ti-chevrons-left"></i>
            </a>
          </li>

          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a
              class="page-link"
              href="javascript:void(0);"
              @click.prevent="goToPage(currentPage - 1)"
            >
              <i class="ti ti-chevron-left"></i>
            </a>
          </li>

          <li
            v-for="page in visiblePages"
            :key="page"
            class="page-item"
            :class="{ active: page === currentPage }"
          >
            <a
              class="page-link"
              href="javascript:void(0);"
              @click.prevent="goToPage(page)"
            >
              {{ page }}
            </a>
          </li>

          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a
              class="page-link"
              href="javascript:void(0);"
              @click.prevent="goToPage(currentPage + 1)"
            >
              <i class="ti ti-chevron-right"></i>
            </a>
          </li>

          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a
              class="page-link"
              href="javascript:void(0);"
              @click.prevent="goToPage(totalPages)"
            >
              <i class="ti ti-chevrons-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  pageSize: {
    type: Number,
    required: true,
  },
  pageSizeOptions: {
    type: Array,
    default: () => [5, 10, 20, 50],
  },
  maxVisiblePages: {
    type: Number,
    default: 5,
  },
})

const emit = defineEmits(['update:currentPage', 'update:pageSize'])

const totalPages = computed(() => Math.ceil(props.total / props.pageSize) || 1)

const startItem = computed(() => {
  if (props.total === 0) return 0
  return (props.currentPage - 1) * props.pageSize + 1
})

const endItem = computed(() => {
  const end = props.currentPage * props.pageSize
  return end > props.total ? props.total : end
})

const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  const current = props.currentPage
  const maxVisible = props.maxVisiblePages

  if (total <= maxVisible) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    const half = Math.floor(maxVisible / 2)
    let start = current - half
    let end = current + half

    if (start < 1) {
      start = 1
      end = maxVisible
    }

    if (end > total) {
      end = total
      start = total - maxVisible + 1
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }
  }

  return pages
})

function onPageSizeChange(event) {
  const newSize = Number(event.target.value)
  emit('update:pageSize', newSize)
  emit('update:currentPage', 1)
}

function goToPage(page) {
  if (page < 1 || page > totalPages.value || page === props.currentPage) return
  emit('update:currentPage', page)
}
</script>

<style scoped>
.pagination .page-link {
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
}

.pagination .page-item.active .page-link {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}
</style>
