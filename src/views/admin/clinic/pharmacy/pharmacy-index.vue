<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content" id="pharmacyPage">
      <div class="d-flex align-items-sm-center justify-content-between flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
        <div>
          <h4 class="fw-bold mb-0">
            Pharmacy Dispensing Queue
            <span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ totalCount }}</span
            >
          </h4>
        </div>
      </div>
      
      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable pagination-rounded"
          :columns="columns"
          :data-source="data"
          :pagination="paginationConfig"
          :loading="loading"
          @change="pharmacyStore.handleTableChange"
          row-key="id"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'patient_name'">
              <div class="d-flex align-items-center">
                <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-soft-success text-success fw-bold">
                  {{ record.patient_name?.charAt(0) }}
                </div>
                <div>
                  <h6 class="mb-0 fs-14 fw-semibold">
                    <a href="javascript:void(0);" @click="handleHistory(record)">{{ record.patient_name }}</a>
                  </h6>
                  <span class="text-muted fs-11">Presc. #{{ record.id }}</span>
                </div>
              </div>
            </template>

            <template v-else-if="column.key === 'medication'">
               <div class="fw-medium text-dark">{{ record.medication }}</div>
               <div class="text-muted fs-11">{{ record.dosage }}</div>
            </template>

            <template v-else-if="column.key === 'created_at'">
              {{ formatDate(record.created_at) }}
            </template>

            <template v-else-if="column.key === 'status'">
              <span :class="['badge', getStatusClass(record.status)]">
                {{ record.status }}
              </span>
            </template>

            <template v-else-if="column.key === 'actions'">
               <div class="d-flex align-items-center justify-content-end gap-2">
                  <button 
                    class="btn btn-sm btn-outline-success d-flex align-items-center" 
                    @click="handleDispense(record)"
                    :disabled="record.status === 'Dispensed'"
                  >
                    <i class="ti ti-pill me-1"></i> Dispense
                  </button>
                  <button 
                    class="btn btn-sm btn-soft-info btn-icon" 
                    title="Medication History"
                    @click="handleHistory(record)"
                  >
                    <i class="ti ti-history"></i>
                  </button>
               </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>

  <!-- Modals -->
  <DispenseMedicationModal 
    modal-id="dispense_medication"
    :prescription="detailedItem"
    @dispensed="pharmacyStore.fetchData"
  />
  <MedicationHistoryModal 
    modal-id="medication_history"
    :patient-name="detailedItem?.patient_name"
  />
</template>

<script>
import { useTableStore } from '@/stores/dataTable'
import { onMounted, computed } from 'vue'
import { message } from 'ant-design-vue'
import { showModalById } from '@/utils/bootstrap'

// Import Modals
import DispenseMedicationModal from '@/components/modal/pharmacy-modals/DispenseMedicationModal.vue'
import MedicationHistoryModal from '@/components/modal/pharmacy-modals/MedicationHistoryModal.vue'

export default {
  components: { 
    DispenseMedicationModal, 
    MedicationHistoryModal 
  },
  name: 'PharmacyIndex',
  setup() {
    const pharmacyStore = useTableStore('pharmacy')
    const { 
      data, 
      loading, 
      totalCount, 
      currentPage, 
      perPage, 
      detailedItem 
    } = pharmacyStore

    const paginationConfig = computed(() => ({
      current: currentPage.value,
      pageSize: perPage.value,
      total: totalCount.value,
      showSizeChanger: false,
      showQuickJumper: false,
    }))

    const columns = [
      { title: 'Patient', key: 'patient_name', sorter: true },
      { title: 'Medication Details', key: 'medication' },
      { title: 'Requested', key: 'created_at' },
      { title: 'Status', key: 'status' },
      { title: 'Actions', key: 'actions', align: 'right', width: 220 },
    ]

    const formatDate = (dateString) => {
      if (!dateString) return 'N/A'
      return new Date(dateString).toLocaleDateString()
    }

    const getStatusClass = (status) => {
      switch (status?.toLowerCase()) {
        case 'dispensed': return 'badge-soft-success'
        case 'partial': return 'badge-soft-info'
        case 'unfilled': return 'badge-soft-warning'
        case 'cancelled': return 'badge-soft-danger'
        default: return 'badge-soft-secondary'
      }
    }

    const handleDispense = (record) => {
      pharmacyStore.selectItem(record)
      showModalById('dispense_medication')
    }

    const handleHistory = (record) => {
      pharmacyStore.selectItem(record)
      showModalById('medication_history')
    }

    onMounted(() => {
      pharmacyStore.fetchData().catch(() => {
        console.log('API failed or not ready, fallback to mock data enabled in store.')
      })
    })

    return {
      data,
      loading,
      totalCount,
      detailedItem,
      pharmacyStore,
      paginationConfig,
      columns,
      formatDate,
      getStatusClass,
      handleDispense,
      handleHistory
    }
  },
}
</script>

