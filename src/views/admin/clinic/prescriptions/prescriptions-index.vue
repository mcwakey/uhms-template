<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content" id="prescriptionsPage">
      <div class="d-flex align-items-sm-center justify-content-between flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
        <div>
          <h4 class="fw-bold mb-0">
            Prescriptions
            <span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ PrescTable.totalCount }}</span
            >
          </h4>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button class="btn btn-primary d-flex align-items-center" @click="handleAdd">
            <i class="ti ti-plus me-1"></i> Add Prescription
          </button>
        </div>
      </div>
      
      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable pagination-rounded"
          :columns="columns"
          :data-source="PrescTable.data.value"
          :pagination="paginationConfig"
          :loading="PrescTable.loading.value"
          @change="PrescTable.handleTableChange"
          row-key="id"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'patient_name'">
              <div class="d-flex align-items-center">
                <div class="avatar avatar-sm avatar-rounded flex-shrink-0 me-2 bg-soft-primary text-primary fw-bold">
                  {{ record.patient_name?.charAt(0) }}
                </div>
                <div>
                  <h6 class="mb-0 fs-14 fw-semibold">
                    <a href="javascript:void(0);" @click="handleView(record)">{{ record.patient_name }}</a>
                  </h6>
                  <span v-if="record.consultation_id" class="text-muted fs-11">Cons. #{{ record.consultation_id }}</span>
                </div>
              </div>
            </template>

            <template v-else-if="column.key === 'items'">
              <span v-if="Array.isArray(record.items)">
                {{ record.items.length }} medication(s)
              </span>
              <span v-else>{{ record.items }} items</span>
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
              <ActionIcons
                viewTitle="View Prescription"
                editTitle="Edit Prescription"
                deleteTitle="Delete Prescription"
                @view="handleView(record)"
                @edit="handleEdit(record)"
                @delete="handleDelete(record)"
              />
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>

  <!-- Modals -->
  <AddPrescriptionModal 
    ref="addModalRef"
    @prescription-created="PrescTable.fetchData"
  />
  <EditPrescriptionModal 
    :prescription="PrescTable.detailedItem.value"
    @prescription-updated="PrescTable.fetchData"
  />
  <ViewPrescriptionModal 
    :prescription="PrescTable.detailedItem.value"
  />
  <DeleteModal 
    modal-id="delete_prescription"
    title="Delete Prescription"
    :message="`Are you sure you want to delete the prescription for ${PrescTable.detailedItem.value?.patient_name}?`"
    @confirm="handleDeleteConfirm"
  />
</template>

<script>
import { useTableStore } from '@/stores/dataTable'
import { onMounted, computed, ref } from 'vue'
import { message } from 'ant-design-vue'
import ActionIcons from '@/components/common/ActionIcons.vue'
import { showModalById } from '@/utils/bootstrap'

// Import Modals
import AddPrescriptionModal from '@/components/modal/prescription-modals/AddPrescriptionModal.vue'
import EditPrescriptionModal from '@/components/modal/prescription-modals/EditPrescriptionModal.vue'
import ViewPrescriptionModal from '@/components/modal/prescription-modals/ViewPrescriptionModal.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'

export default {
  components: { 
    ActionIcons, 
    AddPrescriptionModal, 
    EditPrescriptionModal, 
    ViewPrescriptionModal, 
    DeleteModal 
  },
  name: 'PrescriptionsIndex',
  setup() {
    const PrescTable = useTableStore('prescriptions')
    const addModalRef = ref(null)

    const paginationConfig = computed(() => ({
      current: PrescTable.currentPage.value,
      pageSize: PrescTable.perPage.value,
      total: PrescTable.totalCount.value,
      showSizeChanger: false,
      showQuickJumper: false,
    }))

    const columns = [
      { title: 'Patient', key: 'patient_name', sorter: true },
      { title: 'Medications', key: 'items' },
      { title: 'Date Prescribed', key: 'created_at' },
      { title: 'Status', key: 'status' },
      { title: 'Actions', key: 'actions', align: 'right', width: 100 },
    ]

    const formatDate = (dateString) => {
      if (!dateString) return 'N/A'
      return new Date(dateString).toLocaleDateString()
    }

    const getStatusClass = (status) => {
      switch (status?.toLowerCase()) {
        case 'issued': return 'badge-soft-primary'
        case 'dispensed': return 'badge-soft-success'
        case 'pending': return 'badge-soft-warning'
        case 'cancelled': return 'badge-soft-danger'
        default: return 'badge-soft-secondary'
      }
    }

    const handleAdd = () => {
      addModalRef.value?.resetForm()
      showModalById('add_prescription')
    }

    const handleView = async (record) => {
      PrescTable.selectItem(record)
      showModalById('view_prescription')
    }

    const handleEdit = async (record) => {
      PrescTable.selectItem(record)
      showModalById('edit_prescription')
    }

    const handleDelete = async (record) => {
      PrescTable.selectItem(record)
      showModalById('delete_prescription')
    }

    const handleDeleteConfirm = async () => {
      try {
        // Since API is not ready, we just mock success
        message.success('Prescription deleted successfully')
        PrescTable.fetchData()
      } catch (error) {
        message.error('Failed to delete prescription')
      }
    }

    onMounted(() => {
      PrescTable.fetchData().catch(() => {
        // If API fails, dataTableStore handles mock loading from prescriptions.json
        console.log('API failed or not ready, fallback to mock data enabled in store.')
      })
    })

    return {
      PrescTable,
      paginationConfig,
      columns,
      formatDate,
      getStatusClass,
      handleAdd,
      handleView,
      handleEdit,
      handleDelete,
      handleDeleteConfirm,
      addModalRef
    }
  },
}
</script>

