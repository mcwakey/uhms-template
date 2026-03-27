<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content" id="pharmacyPage">
      <div class="d-flex align-items-sm-center justify-content-between flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
        <div>
          <h4 class="fw-bold mb-1">Pharmacy</h4>
          <div class="text-muted fs-13">Queue management and dispensing</div>
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
                <div class="text-muted fs-12 fw-medium">Queue</div>
                <div class="fs-22 fw-bold text-dark">{{ kpis.queue }}</div>
                <div class="text-muted fs-12">{{ countsScopeLabel }}</div>
              </div>
              <div class="avatar avatar-lg bg-soft-warning text-warning rounded-3">
                <i class="ti ti-shopping-cart fs-20"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-3">
          <div class="card border-0 shadow-sm rounded-3 h-100">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div>
                <div class="text-muted fs-12 fw-medium">Unfilled</div>
                <div class="fs-22 fw-bold text-dark">{{ kpis.unfilled }}</div>
                <div class="text-muted fs-12">{{ countsScopeLabel }}</div>
              </div>
              <div class="avatar avatar-lg bg-soft-danger text-danger rounded-3">
                <i class="ti ti-pill-off fs-20"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-3">
          <div class="card border-0 shadow-sm rounded-3 h-100">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div>
                <div class="text-muted fs-12 fw-medium">Partial</div>
                <div class="fs-22 fw-bold text-dark">{{ kpis.partial }}</div>
                <div class="text-muted fs-12">{{ countsScopeLabel }}</div>
              </div>
              <div class="avatar avatar-lg bg-soft-info text-info rounded-3">
                <i class="ti ti-adjustments fs-20"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-3">
          <div class="card border-0 shadow-sm rounded-3 h-100">
            <div class="card-body d-flex align-items-center justify-content-between">
              <div>
                <div class="text-muted fs-12 fw-medium">Dispensed</div>
                <div class="fs-22 fw-bold text-dark">{{ kpis.dispensed }}</div>
                <div class="text-muted fs-12">{{ countsScopeLabel }}</div>
              </div>
              <div class="avatar avatar-lg bg-soft-success text-success rounded-3">
                <i class="ti ti-check fs-20"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row g-3">
        <div class="col-12 col-lg-8">
          <div class="card bg-white border-0 shadow-sm rounded-3 h-100">
            <div class="card-body p-4 pt-3">
              <a-tabs v-model:activeKey="activeTab" class="custom-tabs fs-14 fw-medium" @change="handleTabChange">
                <a-tab-pane
                  key="queue"
                  :tab="isServerPaginated ? 'Queue' : `Queue (${tabCounts.queue})`"
                />
                <a-tab-pane
                  key="unfilled"
                  :tab="isServerPaginated ? 'Unfilled' : `Unfilled (${tabCounts.unfilled})`"
                />
                <a-tab-pane
                  key="partial"
                  :tab="isServerPaginated ? 'Partial' : `Partial (${tabCounts.partial})`"
                />
                <a-tab-pane
                  key="dispensed"
                  :tab="isServerPaginated ? 'Dispensed' : `Dispensed (${tabCounts.dispensed})`"
                />
                <a-tab-pane
                  key="cancelled"
                  :tab="isServerPaginated ? 'Cancelled' : `Cancelled (${tabCounts.cancelled})`"
                />
                <a-tab-pane
                  key="all"
                  :tab="isServerPaginated ? `All (${totalCount})` : `All (${tabCounts.all})`"
                />
              </a-tabs>

              <div class="pt-3">
                <div class="row g-2 align-items-center mb-3">
                  <div class="col-12 col-lg-6">
                    <a-input
                      v-model:value="searchText"
                      allow-clear
                      placeholder="Search by patient, medication, dosage or prescription ID"
                    />
                  </div>
                  <div class="col-12 col-md-6 col-lg-5">
                    <a-select
                      v-model:value="selectedMedication"
                      allow-clear
                      placeholder="Medication"
                      :options="medicationOptions"
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
                    :customRow="customRow"
                  >
                    <template #emptyText>
                      <div class="py-4 text-center">
                        <div class="avatar avatar-lg bg-soft-warning text-warning rounded-3 mx-auto mb-2">
                          <i class="ti ti-shopping-cart fs-20"></i>
                        </div>
                        <div class="fw-semibold text-dark">No prescriptions found</div>
                        <div class="text-muted fs-13">Try clearing filters or switching tabs</div>
                      </div>
                    </template>

                    <template #bodyCell="{ column, record }">
                      <template v-if="column.key === 'patient_name'">
                        <div class="d-flex align-items-center">
                          <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-soft-success text-success fw-bold">
                            {{ getInitials(record.patient_name) }}
                          </div>
                          <div>
                            <h6 class="mb-1 fs-14 fw-semibold">
                              <a href="javascript:void(0);" @click.stop="selectPrescription(record)">{{ record.patient_name }}</a>
                            </h6>
                            <span class="text-muted fs-11">Presc. #{{ record.id }}</span>
                          </div>
                        </div>
                      </template>

                      <template v-else-if="column.key === 'medication'">
                        <div class="fw-medium text-dark">{{ record.medication }}</div>
                        <div class="text-muted fs-11">{{ record.dosage }}</div>
                        <div class="text-muted fs-11" v-if="record.items?.length">
                          Items: {{ record.items.length }} • Remaining: {{ getRemainingQty(record) }}
                        </div>
                      </template>

                      <template v-else-if="column.key === 'created_at'">
                        <div class="text-dark">{{ formatDate(record.created_at) }}</div>
                      </template>

                      <template v-else-if="column.key === 'status'">
                        <span :class="['badge', getStatusClass(record.status)]">{{ record.status }}</span>
                      </template>

                      <template v-else-if="column.key === 'actions'">
                        <div class="d-flex align-items-center justify-content-end gap-2">
                          <button
                            class="btn btn-sm btn-outline-success d-flex align-items-center"
                            type="button"
                            @click.stop="handleDispense(record)"
                            :disabled="record.status === 'Dispensed' || record.status === 'Cancelled'"
                          >
                            <i class="ti ti-pill me-1"></i> Dispense
                          </button>

                          <button
                            class="btn btn-sm btn-soft-info btn-icon"
                            type="button"
                            title="Medication History"
                            @click.stop="handleHistory(record)"
                          >
                            <i class="ti ti-history"></i>
                          </button>

                          <a-dropdown placement="bottomRight" :trigger="['click']">
                            <button
                              type="button"
                              class="action-icon text-secondary"
                              title="Quick Status"
                            >
                              <i class="ti ti-dots-vertical"></i>
                            </button>
                            <template #overlay>
                              <a-menu class="p-2">
                                <a-menu-item @click="updatePrescriptionStatus(record, 'Unfilled')">
                                  <div class="d-flex align-items-center">
                                    <i class="ti ti-pill-off me-2 text-danger"></i> Mark Unfilled
                                  </div>
                                </a-menu-item>
                                <a-menu-item @click="updatePrescriptionStatus(record, 'Partial')">
                                  <div class="d-flex align-items-center">
                                    <i class="ti ti-adjustments me-2 text-info"></i> Mark Partial
                                  </div>
                                </a-menu-item>
                                <a-menu-item @click="updatePrescriptionStatus(record, 'Dispensed')">
                                  <div class="d-flex align-items-center">
                                    <i class="ti ti-check me-2 text-success"></i> Mark Dispensed
                                  </div>
                                </a-menu-item>
                                <a-menu-divider />
                                <a-menu-item @click="updatePrescriptionStatus(record, 'Cancelled')">
                                  <div class="d-flex align-items-center text-danger">
                                    <i class="ti ti-x me-2"></i> Cancel
                                  </div>
                                </a-menu-item>
                              </a-menu>
                            </template>
                          </a-dropdown>
                        </div>
                      </template>
                    </template>
                  </a-table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-4">
          <div class="card bg-white border-0 shadow-sm rounded-3 h-100">
            <div class="card-body p-4">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div>
                  <div class="text-muted fs-12 fw-medium">Dispensing</div>
                  <div class="fw-bold text-dark">Selected Prescription</div>
                </div>
                <button class="btn btn-white border btn-sm" type="button" @click="clearSelection" :disabled="!selectedPrescription">
                  Clear
                </button>
              </div>

              <div v-if="!selectedPrescription" class="text-center py-4 bg-light rounded-3">
                <div class="avatar avatar-lg bg-soft-primary text-primary rounded-3 mx-auto mb-2">
                  <i class="ti ti-receipt fs-20"></i>
                </div>
                <div class="fw-semibold text-dark">Select a prescription</div>
                <div class="text-muted fs-13">Click a row to load it into the checkout panel</div>
              </div>

              <div v-else>
                <div class="d-flex align-items-start justify-content-between">
                  <div>
                    <div class="fw-bold text-dark">{{ selectedPrescription.patient_name }}</div>
                    <div class="text-muted fs-12">Presc. #{{ selectedPrescription.id }}</div>
                  </div>
                  <span :class="['badge', getStatusClass(selectedPrescription.status)]">{{ selectedPrescription.status }}</span>
                </div>

                <div class="mt-3">
                  <div class="text-muted fs-12 fw-medium mb-1">Medication</div>
                  <div class="fw-medium text-dark">{{ selectedPrescription.medication }}</div>
                  <div class="text-muted fs-12">{{ selectedPrescription.dosage }}</div>
                </div>

                <div class="mt-3">
                  <div class="text-muted fs-12 fw-medium mb-2">Items</div>
                  <div v-if="selectedPrescription.items?.length" class="table-responsive">
                    <table class="table table-sm align-middle mb-0">
                      <thead>
                        <tr class="text-muted fs-12">
                          <th>Item</th>
                          <th class="text-center" style="width: 80px;">Req</th>
                          <th class="text-center" style="width: 80px;">Done</th>
                          <th class="text-center" style="width: 90px;">Left</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, idx) in selectedPrescription.items" :key="idx">
                          <td class="fw-medium text-dark">{{ item.name }}</td>
                          <td class="text-center">{{ item.qty_requested }}</td>
                          <td class="text-center">{{ item.qty_dispensed ?? 0 }}</td>
                          <td class="text-center">
                            {{ (item.qty_requested ?? 0) - (item.qty_dispensed ?? 0) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div v-else class="text-muted fs-13">No items recorded</div>
                </div>

                <div class="mt-3 d-grid gap-2">
                  <button
                    type="button"
                    class="btn btn-success text-white fw-medium"
                    @click="handleDispense(selectedPrescription)"
                    :disabled="selectedPrescription.status === 'Dispensed' || selectedPrescription.status === 'Cancelled'"
                  >
                    <i class="ti ti-pill me-1"></i> Dispense
                  </button>
                  <div class="d-flex gap-2">
                    <button type="button" class="btn btn-white border fw-medium flex-fill" @click="updatePrescriptionStatus(selectedPrescription, 'Partial')">
                      Partial
                    </button>
                    <button type="button" class="btn btn-white border fw-medium flex-fill" @click="updatePrescriptionStatus(selectedPrescription, 'Unfilled')">
                      Unfilled
                    </button>
                  </div>
                  <div class="d-flex gap-2">
                    <button type="button" class="btn btn-white border fw-medium flex-fill" @click="handleHistory(selectedPrescription)">
                      History
                    </button>
                    <button type="button" class="btn btn-danger fw-medium flex-fill" @click="updatePrescriptionStatus(selectedPrescription, 'Cancelled')">
                      Cancel
                    </button>
                  </div>
                </div>

                <div class="mt-3 text-muted fs-12">
                  Requested: {{ formatDate(selectedPrescription.created_at) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modals -->
  <DispenseMedicationModal 
    modal-id="dispense_medication"
    :prescription="detailedItem"
    @dispensed="handleDispensed"
  />
  <MedicationHistoryModal 
    modal-id="medication_history"
    :patient-name="detailedItem?.patient_name"
  />
</template>

<script setup>
import { useTableStore } from '@/stores/dataTable'
import { computed, onMounted, ref, watch } from 'vue'
import { message } from 'ant-design-vue'
import { showModalById } from '@/utils/bootstrap'
import axiosInstance from '@/utils/axios'

import DispenseMedicationModal from '@/components/modal/pharmacy-modals/DispenseMedicationModal.vue'
import MedicationHistoryModal from '@/components/modal/pharmacy-modals/MedicationHistoryModal.vue'

const pharmacyStore = useTableStore('pharmacy')
const { data, loading, totalCount, currentPage, perPage, detailedItem, searchQuery, filters } = pharmacyStore

const activeTab = ref('queue')
const searchText = ref('')
const selectedMedication = ref(undefined)
const sortState = ref({ columnKey: undefined, order: undefined })

const isServerPaginated = computed(() => (totalCount.value || 0) > (data.value?.length || 0))

const columns = [
  { title: 'Patient', key: 'patient_name', sorter: true },
  { title: 'Medication', key: 'medication', sorter: true },
  { title: 'Requested', key: 'created_at', sorter: true },
  { title: 'Status', key: 'status', sorter: true },
  { title: 'Actions', key: 'actions', align: 'right', width: 280 },
]

const normalized = (value) => String(value ?? '').toLowerCase()

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString()
}

const getStatusClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'dispensed':
      return 'badge-soft-success'
    case 'partial':
      return 'badge-soft-info'
    case 'unfilled':
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

const getRemainingQty = (record) => {
  const items = record?.items ?? []
  return items.reduce((acc, item) => acc + ((item?.qty_requested ?? 0) - (item?.qty_dispensed ?? 0)), 0)
}

const tabStatuses = computed(() => {
  switch (activeTab.value) {
    case 'queue':
      return ['Unfilled', 'Partial']
    case 'unfilled':
      return ['Unfilled']
    case 'partial':
      return ['Partial']
    case 'dispensed':
      return ['Dispensed']
    case 'cancelled':
      return ['Cancelled']
    case 'all':
    default:
      return []
  }
})

const filterRows = (rows) => {
  const q = normalized(searchText.value)
  const medication = selectedMedication.value
  const allowedStatuses = tabStatuses.value

  return (rows ?? []).filter((row) => {
    if (allowedStatuses.length && !allowedStatuses.some((s) => normalized(row.status) === normalized(s))) return false
    if (medication && row.medication !== medication) return false
    if (!q) return true

    const haystack = [row.patient_name, row.medication, row.dosage, row.status, row.id]
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

const medicationOptions = computed(() =>
  uniqueStrings(data.value, 'medication').map((v) => ({ value: v, label: v }))
)

const baseFilteredRows = computed(() => {
  const q = normalized(searchText.value)
  const medication = selectedMedication.value

  return (data.value ?? []).filter((row) => {
    if (medication && row.medication !== medication) return false
    if (!q) return true

    const haystack = [row.patient_name, row.medication, row.dosage, row.status, row.id]
      .map((x) => String(x ?? ''))
      .join(' ')
      .toLowerCase()

    return haystack.includes(q)
  })
})

const tabCounts = computed(() => {
  const rows = isServerPaginated.value ? data.value : baseFilteredRows.value
  const countBy = (status) => (rows ?? []).filter((r) => normalized(r.status) === normalized(status)).length

  const unfilled = countBy('Unfilled')
  const partial = countBy('Partial')
  const dispensed = countBy('Dispensed')
  const cancelled = countBy('Cancelled')

  return {
    queue: unfilled + partial,
    unfilled,
    partial,
    dispensed,
    cancelled,
    all: isServerPaginated.value ? totalCount.value : (rows ?? []).length,
  }
})

const kpis = computed(() => ({
  queue: tabCounts.value.queue,
  unfilled: tabCounts.value.unfilled,
  partial: tabCounts.value.partial,
  dispensed: tabCounts.value.dispensed,
}))

const countsScopeLabel = computed(() => (isServerPaginated.value ? 'In view' : 'Total'))

const selectedPrescription = computed(() => (detailedItem.value?.id ? detailedItem.value : null))

const applyServerFilters = () => {
  if (!isServerPaginated.value) return

  searchQuery.value = searchText.value

  const allowedStatuses = tabStatuses.value
  filters.value = {
    ...filters.value,
    status: allowedStatuses.length ? allowedStatuses.join(',') : undefined,
    medication: selectedMedication.value,
  }

  currentPage.value = 1
  pharmacyStore.fetchData()
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

watch(selectedMedication, () => {
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
    pharmacyStore.handleTableChange(pagination)
    return
  }

  currentPage.value = pagination?.current ?? 1
  perPage.value = pagination?.pageSize ?? perPage.value
  sortState.value = { columnKey: sorter?.columnKey ?? sorter?.field ?? sorter?.column?.key, order: sorter?.order }
}

const selectPrescription = (record) => {
  pharmacyStore.selectItem(record)
}

const clearSelection = () => {
  pharmacyStore.selectItem({})
}

const customRow = (record) => ({
  onClick: (event) => {
    const target = event?.target
    if (target && typeof target.closest === 'function') {
      if (target.closest('.ant-dropdown') || target.closest('.ant-dropdown-menu')) return
      if (target.closest('button') || target.closest('a') || target.closest('.action-icon')) return
    }
    selectPrescription(record)
  },
})

const handleDispense = (record) => {
  pharmacyStore.selectItem(record)
  showModalById('dispense_medication')
}

const handleHistory = (record) => {
  pharmacyStore.selectItem(record)
  showModalById('medication_history')
}

const updatePrescriptionStatus = async (record, status) => {
  const prev = record?.status
  record.status = status
  if (selectedPrescription.value?.id === record?.id) pharmacyStore.selectItem({ ...record })

  try {
    await axiosInstance.patch(`/pharmacy/${record.id}`, { status })
    message.success(`Status updated to ${status}`)
    if (isServerPaginated.value) pharmacyStore.fetchData()
  } catch {
    message.info('Updated locally (API unavailable)')
    record.status = status
    if (prev === undefined) record.status = status
  }
}

const handleDispensed = (payload) => {
  const id = payload?.id
  if (id === undefined || id === null) {
    pharmacyStore.fetchData()
    return
  }

  data.value = (data.value ?? []).map((row) => {
    if (row?.id !== id) return row
    const updated = { ...row, status: payload.status ?? row.status }
    if (Array.isArray(payload.items)) updated.items = payload.items
    if (payload.notes !== undefined) updated.pharmacist_notes = payload.notes
    return updated
  })

  const selected = selectedPrescription.value
  if (selected?.id === id) {
    const updatedSelected = (data.value ?? []).find((r) => r?.id === id) ?? selected
    pharmacyStore.selectItem(updatedSelected)
  }

  message.success('Medication dispensed successfully')
  if (isServerPaginated.value) pharmacyStore.fetchData()
}

const clearFilters = () => {
  searchText.value = ''
  selectedMedication.value = undefined
  sortState.value = { columnKey: undefined, order: undefined }
  currentPage.value = 1

  if (isServerPaginated.value) {
    searchQuery.value = ''
    filters.value = {}
    pharmacyStore.fetchData()
  }
}

const refresh = () => {
  pharmacyStore.fetchData()
}

onMounted(() => {
  pharmacyStore.fetchData().catch(() => {})
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
