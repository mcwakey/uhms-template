<template>
  <div class="mb-3">
    <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Insurance Companies
            <span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ totalCount }}</span
            >
          </h4>
        </div>
        <div class="text-end d-flex">
          <button class="btn btn-primary ms-2 fs-13 btn-md" @click="openAddModal">
            <i class="ti ti-plus me-1"></i>Add Insurance Company
          </button>
        </div>
      </div>
      
      <div class="table-responsive">
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
              <div class="d-flex align-items-center ms-2">
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <RouterLink :to="`/finance/insurance/${record.id}`" class="text-primary hover-primary">
                      {{ record.name }}
                    </RouterLink>
                  </h6>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'type'">
              <span class="text-muted fs-13">Type #{{ record.type }}</span>
            </template>
            <template v-else-if="column.key === 'phone'">
              <span class="text-muted fs-13">{{ record.phone || 'N/A' }}</span>
            </template>
            <template v-else-if="column.key === 'email'">
              <span class="text-muted fs-13">{{ record.email || 'N/A' }}</span>
            </template>
            <template v-else-if="column.key === 'is_active'">
              <span
                :class="[
                  'badge border',
                  record.is_active
                    ? 'badge badge-soft-success border border-success fw-medium fs-13'
                    : 'badge badge-soft-danger border border-danger fw-medium  fs-13',
                ]"
                >{{ record.is_active ? 'Active' : 'Inactive' }}</span
              >
            </template>
            <template v-else-if="column.key === 'actions'">
              <ActionIcons
                viewTitle="Manage Plans"
                editTitle="Edit Company"
                :show-delete="false"
                @view="handleView(record)"
                @edit="openEditModal(record)"
              />
            </template>
          </template>
        </a-table>
      </div>
  </div>

  <CompanyModal
    modalId="insurance_company_modal"
    :companyData="selectedCompany"
    @company-saved="handleCompanySaved"
  />

</template>

<script setup>
import { useTableStore } from '@/stores/dataTableStore'
import { ref, onMounted, computed } from 'vue'
import { message } from 'ant-design-vue'
import ActionIcons from '@/components/common/ActionIcons.vue'
import { showModalById } from '@/utils/bootstrap'
import { useRoute, useRouter } from 'vue-router'
import CompanyModal from '@/components/modal/insurance/CompanyModal.vue'

const route = useRoute()
const router = useRouter()
const store = useTableStore('insuranceCompanies', 'insurance/companies')
const { data, loading, currentPage, perPage, totalCount, fetchData, handleTableChange } = store

const tableData = computed(() => data.value ?? [])
const selectedCompany = ref(null)

const paginationConfig = computed(() => ({
  current: currentPage.value,
  pageSize: perPage.value,
  total: totalCount.value,
  showSizeChanger: false,
  showQuickJumper: false,
}))

const columns = [
  { title: 'Company Name', dataIndex: 'name', key: 'name', className: 'name' },
  { title: 'Type', dataIndex: 'type', key: 'type' },
  { title: 'Phone', dataIndex: 'phone', key: 'phone' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { title: 'Status', dataIndex: 'is_active', key: 'is_active', className: 'active' },
  { title: 'Actions', key: 'actions', width: 100, className: 'actions', align: 'right' },
]

const handleView = (record) => {
  router.push(`/finance/insurance/${record.id}`)
}

const openAddModal = () => {
    selectedCompany.value = null
    showModalById('insurance_company_modal')
}

const openEditModal = (record) => {
    selectedCompany.value = { ...record }
    showModalById('insurance_company_modal')
}

const handleCompanySaved = () => {
    fetchData()
}

onMounted(() => {
  fetchData().catch(() => {
    message.error('Failed to load insurance companies')
  })
})
</script>
