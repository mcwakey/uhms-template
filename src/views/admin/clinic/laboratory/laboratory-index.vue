<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content" id="labPage">
      <div class="d-flex align-items-sm-center justify-content-between flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
        <div>
          <h4 class="fw-bold mb-1">Laboratory</h4>
          <div class="text-muted fs-13">Manage requests, processing and results</div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-white border fw-medium" type="button" :disabled="loading" @click="refresh">
            <i class="ti ti-refresh me-1"></i> Refresh
          </button>
        </div>
      </div>

      <div class="row g-3 mb-3">
        <div class="col-12 col-sm-6 col-lg-3">
          <div class="card border-0 shadow-sm rounded-3 h-100">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div>
                <div class="text-muted fs-12 fw-medium">Total Requests</div>
                <div class="fs-22 fw-bold text-dark">{{ totalCountLabel }}</div>
                <div class="text-muted fs-12">{{ countsScopeLabel }}</div>
              </div>
              <div class="avatar avatar-lg bg-soft-primary text-primary rounded-3">
                <i class="ti ti-flask fs-20"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-3">
          <div class="card border-0 shadow-sm rounded-3 h-100">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div>
                <div class="text-muted fs-12 fw-medium">Pending</div>
                <div class="fs-22 fw-bold text-dark">{{ statusCounts.pending }}</div>
                <div class="text-muted fs-12">{{ countsScopeLabel }}</div>
              </div>
              <div class="avatar avatar-lg bg-soft-warning text-warning rounded-3">
                <i class="ti ti-hourglass-empty fs-20"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-3">
          <div class="card border-0 shadow-sm rounded-3 h-100">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div>
                <div class="text-muted fs-12 fw-medium">Processing</div>
                <div class="fs-22 fw-bold text-dark">{{ statusCounts.processing }}</div>
                <div class="text-muted fs-12">{{ countsScopeLabel }}</div>
              </div>
              <div class="avatar avatar-lg bg-soft-info text-info rounded-3">
                <i class="ti ti-activity fs-20"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-3">
          <div class="card border-0 shadow-sm rounded-3 h-100">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div>
                <div class="text-muted fs-12 fw-medium">Results</div>
                <div class="fs-22 fw-bold text-dark">{{ statusCounts.results }}</div>
                <div class="text-muted fs-12">{{ countsScopeLabel }}</div>
              </div>
              <div class="avatar avatar-lg bg-soft-success text-success rounded-3">
                <i class="ti ti-report-analytics fs-20"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-white border-0 shadow-sm rounded-3">
        <div class="card-body p-4 pt-3">
          <a-tabs v-model:activeKey="activeTab" class="custom-tabs fs-14 fw-medium" @change="handleTabChange">
            <a-tab-pane
              key="requests"
              :tab="isServerPaginated ? `Requests (${totalCount})` : `Requests (${tabCounts.requests})`"
            />
            <a-tab-pane key="pending" :tab="isServerPaginated ? 'Pending' : `Pending (${tabCounts.pending})`" />
            <a-tab-pane
              key="processing"
              :tab="isServerPaginated ? 'Processing' : `Processing (${tabCounts.processing})`"
            />
            <a-tab-pane key="results" :tab="isServerPaginated ? 'Results' : `Results (${tabCounts.results})`" />
            <a-tab-pane
              key="cancelled"
              :tab="isServerPaginated ? 'Cancelled' : `Cancelled (${tabCounts.cancelled})`"
            />
          </a-tabs>

          <div class="pt-3">
            <div class="row g-2 align-items-center mb-3">
              <div class="col-12 col-lg-5">
                <a-input
                  v-model:value="searchText"
                  allow-clear
                  placeholder="Search by patient, test, requester or ID"
                />
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <a-select
                  v-model:value="selectedCategory"
                  allow-clear
                  placeholder="Category"
                  :options="categoryOptions"
                />
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <a-select
                  v-model:value="selectedRequester"
                  allow-clear
                  placeholder="Requested By"
                  :options="requesterOptions"
                />
              </div>
              <div class="col-12 col-lg-1 d-flex justify-content-lg-end">
                <button class="btn btn-white border w-100" type="button" @click="clearFilters">
                  <i class="ti ti-x"></i>
                </button>
              </div>
            </div>

            <div class="table-responsive">
              <a-table
                class="table table-nowrap datatable pagination-rounded"
                :columns="columns"
                :data-source="displayRows"
                :pagination="paginationConfig"
                :loading="loading"
                @change="handleTableChange"
                row-key="id"
              >
                <template #emptyText>
                  <div class="py-4 text-center">
                    <div class="avatar avatar-lg bg-soft-primary text-primary rounded-3 mx-auto mb-2">
                      <i class="ti ti-flask fs-20"></i>
                    </div>
                    <div class="fw-semibold text-dark">No lab requests found</div>
                    <div class="text-muted fs-13">Try clearing filters or adjusting your search</div>
                  </div>
                </template>

                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'test_name'">
                    <div class="d-flex align-items-center">
                      <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-soft-primary text-primary fw-bold">
                        {{ getInitials(record.test_name) }}
                      </div>
                      <div>
                        <h6 class="mb-1 fs-14 fw-semibold">
                          <a href="javascript:void(0);" @click="handleView(record)">{{ record.test_name }}</a>
                        </h6>
                        <div class="text-muted fs-12">{{ record.category || 'General' }}</div>
                      </div>
                    </div>
                  </template>

                  <template v-else-if="column.key === 'patient_name'">
                    <div class="d-flex align-items-center">
                      <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-soft-success text-success fw-bold">
                        {{ getInitials(record.patient_name) }}
                      </div>
                      <div>
                        <div class="fw-medium text-dark">{{ record.patient_name }}</div>
                        <div class="text-muted fs-11">Request #{{ record.id }}</div>
                      </div>
                    </div>
                  </template>

                  <template v-else-if="column.key === 'requested_by'">
                    <div class="fw-medium text-dark">{{ record.requested_by || '—' }}</div>
                  </template>

                  <template v-else-if="column.key === 'created_at'">
                    <div class="text-dark">{{ formatDate(record.created_at) }}</div>
                  </template>

                  <template v-else-if="column.key === 'status'">
                    <span :class="['badge', getStatusClass(record.status)]">{{ record.status }}</span>
                  </template>

                  <template v-else-if="column.key === 'actions'">
                    <ActionIcons
                      viewTitle="View Results"
                      editTitle="Enter Results"
                      deleteTitle="Delete Request"
                      @view="handleView(record)"
                      @edit="handleEdit(record)"
                      @delete="handleDelete(record)"
                    >
                      <template #append>
                        <a-dropdown placement="bottomRight" :trigger="['click']">
                          <button
                            type="button"
                            class="action-icon text-secondary"
                            title="Update Status"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </button>
                          <template #overlay>
                            <a-menu class="p-2">
                              <a-menu-item @click="updateLabStatus(record, 'Pending')">
                                <div class="d-flex align-items-center">
                                  <i class="ti ti-hourglass-empty me-2 text-warning"></i> Mark Pending
                                </div>
                              </a-menu-item>
                              <a-menu-item @click="updateLabStatus(record, 'In Progress')">
                                <div class="d-flex align-items-center">
                                  <i class="ti ti-activity me-2 text-info"></i> Start Processing
                                </div>
                              </a-menu-item>
                              <a-menu-item @click="updateLabStatus(record, 'Completed')">
                                <div class="d-flex align-items-center">
                                  <i class="ti ti-check me-2 text-success"></i> Mark Results Ready
                                </div>
                              </a-menu-item>
                              <a-menu-divider />
                              <a-menu-item @click="updateLabStatus(record, 'Cancelled')">
                                <div class="d-flex align-items-center text-danger">
                                  <i class="ti ti-x me-2"></i> Cancel Request
                                </div>
                              </a-menu-item>
                            </a-menu>
                          </template>
                        </a-dropdown>
                      </template>
                    </ActionIcons>
                  </template>
                </template>
              </a-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modals -->
  <ViewLabTestModal 
    modal-id="view_lab_test"
    :lab-test="detailedItem"
  />
  <EnterLabResultsModal 
    modal-id="enter_lab_results"
    :lab-test="detailedItem"
    @results-updated="labStore.fetchData"
  />
  <div class="modal fade" id="delete_lab_request" tabindex="-1" aria-hidden="true">
    <DeleteModal
      title="Delete Lab Request"
      :message="`Are you sure you want to delete the lab request for ${detailedItem?.patient_name}?`"
      @confirm="handleDeleteConfirm"
    />
  </div>
</template>

<script setup>
import { useTableStore } from '@/stores/dataTable'
import { computed, onMounted, ref, watch } from 'vue'
import { message } from 'ant-design-vue'
import ActionIcons from '@/components/common/ActionIcons.vue'
import { showModalById } from '@/utils/bootstrap'
import axiosInstance from '@/utils/axios'

import ViewLabTestModal from '@/components/modal/laboratory-modals/ViewLabTestModal.vue'
import EnterLabResultsModal from '@/components/modal/laboratory-modals/EnterLabResultsModal.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'

const labStore = useTableStore('laboratory')
const { data, loading, totalCount, currentPage, perPage, detailedItem, searchQuery, filters } =
  labStore

const activeTab = ref('requests')
const searchText = ref('')
const selectedCategory = ref(undefined)
const selectedRequester = ref(undefined)
const sortState = ref({ columnKey: undefined, order: undefined })

const isServerPaginated = computed(() => (totalCount.value || 0) > (data.value?.length || 0))

const columns = [
  { title: 'Test', key: 'test_name', sorter: true },
  { title: 'Patient', key: 'patient_name', sorter: true },
  { title: 'Requested By', dataIndex: 'requested_by', key: 'requested_by' },
  { title: 'Date', key: 'created_at', sorter: true },
  { title: 'Status', key: 'status', sorter: true },
  { title: 'Actions', key: 'actions', align: 'right', width: 100 },
]

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString()
}

const getStatusClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'completed':
      return 'badge-soft-success'
    case 'in progress':
      return 'badge-soft-info'
    case 'pending':
      return 'badge-soft-warning'
    case 'cancelled':
      return 'badge-soft-danger'
    default:
      return 'badge-soft-secondary'
  }
}

const getInitials = (text) => {
  const safe = String(text ?? '').trim()
  if (!safe) return '—'
  const parts = safe.split(/\s+/).filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase()
  return `${parts[0].slice(0, 1)}${parts[1].slice(0, 1)}`.toUpperCase()
}

const tabStatus = computed(() => {
  switch (activeTab.value) {
    case 'pending':
      return 'Pending'
    case 'processing':
      return 'In Progress'
    case 'results':
      return 'Completed'
    case 'cancelled':
      return 'Cancelled'
    default:
      return undefined
  }
})

const normalized = (value) => String(value ?? '').toLowerCase()

const filterRows = (rows) => {
  const status = tabStatus.value
  const q = normalized(searchText.value)
  const category = selectedCategory.value
  const requester = selectedRequester.value

  return (rows ?? []).filter((row) => {
    if (status && normalized(row.status) !== normalized(status)) return false
    if (category && row.category !== category) return false
    if (requester && row.requested_by !== requester) return false
    if (!q) return true

    const haystack = [
      row.patient_name,
      row.test_name,
      row.requested_by,
      row.category,
      row.status,
      row.id,
    ]
      .map((x) => String(x ?? ''))
      .join(' ')
      .toLowerCase()

    return haystack.includes(q)
  })
}

const sortRows = (rows) => {
  const { columnKey, order } = sortState.value ?? {}
  if (!columnKey || !order) return rows

  const dir = order === 'ascend' ? 1 : -1

  return [...rows].sort((a, b) => {
    const aVal = a?.[columnKey]
    const bVal = b?.[columnKey]

    if (columnKey === 'created_at') {
      const aTime = aVal ? new Date(aVal).getTime() : 0
      const bTime = bVal ? new Date(bVal).getTime() : 0
      return (aTime - bTime) * dir
    }

    const aStr = String(aVal ?? '').toLowerCase()
    const bStr = String(bVal ?? '').toLowerCase()
    return aStr.localeCompare(bStr) * dir
  })
}

const filteredRows = computed(() => {
  if (isServerPaginated.value) return data.value ?? []
  return sortRows(filterRows(data.value ?? []))
})

const displayRows = computed(() => {
  if (isServerPaginated.value) return data.value ?? []
  const page = currentPage.value || 1
  const size = perPage.value || 10
  const start = (page - 1) * size
  return filteredRows.value.slice(start, start + size)
})

const paginationConfig = computed(() => {
  const total = isServerPaginated.value ? totalCount.value : filteredRows.value.length
  return {
    current: currentPage.value,
    pageSize: perPage.value,
    total,
    showSizeChanger: false,
    showQuickJumper: false,
  }
})

const uniqueStrings = (rows, key) => {
  const set = new Set()
  ;(rows ?? []).forEach((row) => {
    const value = row?.[key]
    if (typeof value === 'string' && value.trim()) set.add(value)
  })
  return [...set].sort((a, b) => a.localeCompare(b))
}

const categoryOptions = computed(() => uniqueStrings(data.value, 'category').map((v) => ({ value: v, label: v })))
const requesterOptions = computed(() =>
  uniqueStrings(data.value, 'requested_by').map((v) => ({ value: v, label: v }))
)

const baseFilteredRows = computed(() => {
  const q = normalized(searchText.value)
  const category = selectedCategory.value
  const requester = selectedRequester.value

  return (data.value ?? []).filter((row) => {
    if (category && row.category !== category) return false
    if (requester && row.requested_by !== requester) return false
    if (!q) return true

    const haystack = [
      row.patient_name,
      row.test_name,
      row.requested_by,
      row.category,
      row.status,
      row.id,
    ]
      .map((x) => String(x ?? ''))
      .join(' ')
      .toLowerCase()

    return haystack.includes(q)
  })
})

const tabCounts = computed(() => {
  const rows = isServerPaginated.value ? data.value : baseFilteredRows.value
  const countBy = (status) => (rows ?? []).filter((r) => normalized(r.status) === normalized(status)).length

  return {
    requests: isServerPaginated.value ? totalCount.value : (rows ?? []).length,
    pending: countBy('Pending'),
    processing: countBy('In Progress'),
    results: countBy('Completed'),
    cancelled: countBy('Cancelled'),
  }
})

const statusCounts = computed(() => ({
  pending: tabCounts.value.pending,
  processing: tabCounts.value.processing,
  results: tabCounts.value.results,
}))

const countsScopeLabel = computed(() => (isServerPaginated.value ? 'In view' : 'Total'))
const totalCountLabel = computed(() => (isServerPaginated.value ? totalCount.value : tabCounts.value.requests))

const applyServerFilters = () => {
  if (!isServerPaginated.value) return

  searchQuery.value = searchText.value

  filters.value = {
    ...filters.value,
    status: tabStatus.value,
    category: selectedCategory.value,
    requested_by: selectedRequester.value,
  }

  currentPage.value = 1
  labStore.fetchData()
}

let searchTimer = undefined
watch(searchText, () => {
  if (!isServerPaginated.value) {
    currentPage.value = 1
    return
  }
  if (searchTimer) window.clearTimeout(searchTimer)
  searchTimer = window.setTimeout(() => {
    applyServerFilters()
  }, 300)
})

watch([selectedCategory, selectedRequester], () => {
  if (!isServerPaginated.value) {
    currentPage.value = 1
    return
  }
  applyServerFilters()
})

const handleTabChange = () => {
  sortState.value = { columnKey: undefined, order: undefined }
  if (!isServerPaginated.value) {
    currentPage.value = 1
    return
  }
  applyServerFilters()
}

const handleTableChange = (pagination, _filters, sorter) => {
  if (isServerPaginated.value) {
    labStore.handleTableChange(pagination)
    return
  }

  currentPage.value = pagination?.current ?? 1
  perPage.value = pagination?.pageSize ?? perPage.value
  sortState.value = { columnKey: sorter?.columnKey ?? sorter?.field ?? sorter?.column?.key, order: sorter?.order }
}

const handleView = (record) => {
  labStore.selectItem(record)
  showModalById('view_lab_test')
}

const handleEdit = (record) => {
  labStore.selectItem(record)
  showModalById('enter_lab_results')
}

const handleDelete = (record) => {
  labStore.selectItem(record)
  showModalById('delete_lab_request')
}

const handleDeleteConfirm = async () => {
  try {
    const id = detailedItem.value?.id
    if (id !== undefined && id !== null) {
      data.value = (data.value ?? []).filter((x) => x?.id !== id)
    }

    try {
      if (id !== undefined && id !== null) {
        await axiosInstance.delete(`/laboratory/${id}`)
      }
    } catch {
      if (id !== undefined && id !== null) {
        message.info('Deleted locally (API unavailable)')
        return
      }
    }

    message.success('Lab request deleted successfully')
    labStore.fetchData()
  } catch {
    message.error('Failed to delete lab request')
  }
}

const updateLabStatus = async (record, status) => {
  const previous = record?.status
  record.status = status

  try {
    await axiosInstance.patch(`/laboratory/${record.id}`, { status })
    message.success(`Status updated to ${status}`)
    if (isServerPaginated.value) labStore.fetchData()
  } catch {
    message.info('Updated locally (API unavailable)')
    record.status = status
    if (previous === undefined) record.status = status
  }
}

const clearFilters = () => {
  searchText.value = ''
  selectedCategory.value = undefined
  selectedRequester.value = undefined
  sortState.value = { columnKey: undefined, order: undefined }
  currentPage.value = 1

  if (isServerPaginated.value) {
    searchQuery.value = ''
    filters.value = {}
    labStore.fetchData()
  }
}

const refresh = () => {
  labStore.fetchData()
}

onMounted(() => {
  labStore.fetchData().catch(() => {})
})
</script>

<style scoped>
.custom-tabs :deep(.ant-tabs-nav) {
  margin-bottom: 8px;
}
.custom-tabs :deep(.ant-tabs-tab) {
  padding: 12px 16px;
  font-size: 15px;
}
.custom-tabs :deep(.ant-tabs-tab-active) {
  font-weight: 600;
}
</style>
