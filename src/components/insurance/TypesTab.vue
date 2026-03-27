<template>
  <div class="mb-3">
    <!-- Start Page Header -->
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom">
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Insurance Types
            <span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2">
              Total: {{ totalCount }}
            </span>
          </h4>
        </div>
        <div class="text-end d-flex">
          <button class="btn btn-primary ms-2 fs-13 btn-md" @click="openAddModal">
            <i class="ti ti-plus me-1"></i>Add Insurance Type
          </button>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set mb-3">
          <div class="d-flex align-items-center flex-wrap gap-2">
            <div class="table-search d-flex align-items-center mb-0">
              <div class="search-input">
                <a href="javascript:void(0);" class="btn-searchset"></a>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  v-model="searchQuery"
                  @keyup.enter="handleSearch"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="table-responsive border border-opacity-10 rounded">
        <a-table
          class="table table-nowrap datatable pagination-rounded"
          :columns="columns"
          table-layout="fixed"
          :data-source="tableData"
          :pagination="paginationConfig"
          :loading="loading"
          @change="handleTableChange"
          row-key="id"
          pagination-class="pagination-rounded"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <span class="fw-medium text-dark">{{ record.name }}</span>
            </template>
            <template v-else-if="column.key === 'description'">
              <span class="text-muted fs-13">{{ record.description || '—' }}</span>
            </template>
            <template v-else-if="column.key === 'is_active'">
              <span
                :class="[
                  'badge border',
                  record.is_active
                    ? 'badge badge-soft-success border border-success fw-medium fs-12'
                    : 'badge badge-soft-danger border border-danger fw-medium fs-12',
                ]"
              >
                {{ record.is_active ? 'Active' : 'Inactive' }}
              </span>
            </template>
            <template v-else-if="column.key === 'actions'">
              <ActionIcons
                viewTitle="View Type"
                editTitle="Edit Type"
                :show-view="false"
                :show-delete="false"
                @edit="openEditModal(record)"
              />
            </template>
          </template>
        </a-table>
      </div>
  </div>

  <TypeModal
    modalId="insurance_type_modal"
    :typeData="selectedType"
    @type-saved="handleTypeSaved"
  />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { message } from 'ant-design-vue'
import { useTableStore } from '@/stores/dataTableStore'
import { showModalById } from '@/utils/bootstrap'
import ActionIcons from '@/components/common/ActionIcons.vue'
import TypeModal from '@/components/modal/insurance/TypeModal.vue'

const store = useTableStore('insuranceTypes', 'insurance/types')
const { data, loading, currentPage, perPage, totalCount, fetchData, searchQuery, selectItem, handleTableChange } = store

const tableData = computed(() => data.value ?? [])
const selectedType = ref(null)

const paginationConfig = computed(() => ({
  current: currentPage.value,
  pageSize: perPage.value,
  total: totalCount.value,
  showSizeChanger: false,
  showQuickJumper: false,
}))

const columns = [
  { title: 'Type Name', dataIndex: 'name', key: 'name' },
  { title: 'Description', dataIndex: 'description', key: 'description' },
  { title: 'Status', dataIndex: 'is_active', key: 'is_active', width: 120 },
  { title: 'Actions', key: 'actions', width: 100, align: 'right' },
]

const handleSearch = () => {
    currentPage.value = 1
    fetchData()
}

const openAddModal = () => {
  selectedType.value = null // reset for add
  showModalById('insurance_type_modal')
}

const openEditModal = (record) => {
  selectedType.value = { ...record }
  showModalById('insurance_type_modal')
}

const handleTypeSaved = () => {
  fetchData() // Refresh table
}

onMounted(() => {
  fetchData().catch(() => {
    message.error('Failed to load insurance types')
  })
})
</script>
