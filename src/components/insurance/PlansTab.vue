<template>
  <div class="mb-3">
    <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
      <div class="flex-grow-1">
        <h4 class="fw-bold mb-0">
          Insurance Plans
          <span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
            >Total: {{ totalCount }}</span
          >
        </h4>
      </div>
      <div class="text-end d-flex">
        <!-- Plans are usually added within a company context, but we could provide a shortcut here -->
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
                <h6 class="mb-1 fs-14 fw-semibold text-dark">
                  {{ record.name }}
                </h6>
                <small class="text-muted" v-if="record.company_name">
                  Company: {{ record.company_name }}
                </small>
              </div>
            </div>
          </template>
          <template v-else-if="column.key === 'cap'">
            <span class="text-success fw-semibold fs-13">
              {{ typeof record.cap === 'number' ? `$${record.cap.toLocaleString()}` : record.cap }}
            </span>
          </template>
          <template v-else-if="column.key === 'beneficiaries'">
            <span class="badge bg-light text-dark border fs-12">{{ record.beneficiaries }}</span>
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
             <div class="text-end">
                <RouterLink :to="`/finance/insurance/${record.company_id}`" class="btn btn-sm btn-primary-subtle rounded-3">
                  <i class="ti ti-eye me-1"></i>View Company
                </RouterLink>
             </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup>
import { useTableStore } from '@/stores/dataTableStore'
import { ref, onMounted, computed } from 'vue'
import { message } from 'ant-design-vue'

const store = useTableStore('insurancePlans', 'insurance/plans')
const { data, loading, currentPage, perPage, totalCount, fetchData, handleTableChange } = store

const tableData = computed(() => data.value ?? [])

const paginationConfig = computed(() => ({
  current: currentPage.value,
  pageSize: perPage.value,
  total: totalCount.value,
  showSizeChanger: false,
  showQuickJumper: false,
}))

const columns = [
  { title: 'Plan Name', dataIndex: 'name', key: 'name' },
  { title: 'Cap Limit', dataIndex: 'cap', key: 'cap' },
  { title: 'Beneficiaries', dataIndex: 'beneficiaries', key: 'beneficiaries', align: 'center' },
  { title: 'Status', dataIndex: 'is_active', key: 'is_active', width: 120 },
  { title: 'Actions', key: 'actions', width: 150, align: 'right' },
]

onMounted(() => {
  fetchData().catch(() => {
    // If global plans endpoint fails, we might need a different approach
    // but we'll assume it works for now as per user request
    message.warning('Could not load all plans. Please check specific companies.')
  })
})
</script>
