<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content" id="labPage">
      <div class="d-flex align-items-sm-center justify-content-between flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
        <div>
          <h4 class="fw-bold mb-0">
            Laboratory
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
          @change="labStore.handleTableChange"
          row-key="id"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'test_name'">
              <div class="d-flex align-items-center ms-2">
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <a href="javascript:void(0);" @click="handleView(record)">{{ record.test_name }}</a>
                  </h6>
                  <div class="text-muted fs-12">{{ record.category || 'General' }}</div>
                </div>
              </div>
            </template>

            <template v-else-if="column.key === 'patient_name'">
               <div class="fw-medium">{{ record.patient_name }}</div>
               <div class="text-muted fs-11">ID: #{{ record.id }}</div>
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
                viewTitle="View Results"
                editTitle="Enter Results"
                deleteTitle="Delete Request"
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
  <ViewLabTestModal 
    modal-id="view_lab_test"
    :lab-test="detailedItem"
  />
  <EnterLabResultsModal 
    modal-id="enter_lab_results"
    :lab-test="detailedItem"
    @results-updated="labStore.fetchData"
  />
  <DeleteModal 
    modal-id="delete_lab_request"
    title="Delete Lab Request"
    :message="`Are you sure you want to delete the lab request for ${detailedItem?.patient_name}?`"
    @confirm="handleDeleteConfirm"
  />
</template>

<script>
import { useTableStore } from '@/stores/dataTable'
import { onMounted, computed } from 'vue'
import { message } from 'ant-design-vue'
import ActionIcons from '@/components/common/ActionIcons.vue'
import { showModalById } from '@/utils/bootstrap'

// Import Modals
import ViewLabTestModal from '@/components/modal/laboratory-modals/ViewLabTestModal.vue'
import EnterLabResultsModal from '@/components/modal/laboratory-modals/EnterLabResultsModal.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'

export default {
  components: { 
    ActionIcons, 
    ViewLabTestModal, 
    EnterLabResultsModal, 
    DeleteModal 
  },
  name: 'LaboratoryIndex',
  setup() {
    const labStore = useTableStore('laboratory')
    const { 
      data, 
      loading, 
      totalCount, 
      currentPage, 
      perPage, 
      detailedItem 
    } = labStore

    const paginationConfig = computed(() => ({
      current: currentPage.value,
      pageSize: perPage.value,
      total: totalCount.value,
      showSizeChanger: false,
      showQuickJumper: false,
    }))

    const columns = [
      { title: 'Test Name', key: 'test_name', sorter: true },
      { title: 'Patient', key: 'patient_name' },
      { title: 'Requested By', dataIndex: 'requested_by', key: 'requested_by' },
      { title: 'Date', key: 'created_at' },
      { title: 'Status', key: 'status' },
      { title: 'Actions', key: 'actions', align: 'right', width: 100 },
    ]

    const formatDate = (dateString) => {
      if (!dateString) return 'N/A'
      return new Date(dateString).toLocaleDateString()
    }

    const getStatusClass = (status) => {
      switch (status?.toLowerCase()) {
        case 'completed': return 'badge-soft-success'
        case 'in progress': return 'badge-soft-info'
        case 'pending': return 'badge-soft-warning'
        case 'cancelled': return 'badge-soft-danger'
        default: return 'badge-soft-secondary'
      }
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
        message.success('Lab request deleted successfully')
        labStore.fetchData()
      } catch (error) {
        message.error('Failed to delete lab request')
      }
    }

    onMounted(() => {
      labStore.fetchData().catch(() => {
        console.log('API failed or not ready, fallback to mock data enabled in store.')
      })
    })

    return {
      data,
      loading,
      totalCount,
      detailedItem,
      labStore,
      paginationConfig,
      columns,
      formatDate,
      getStatusClass,
      handleView,
      handleEdit,
      handleDelete,
      handleDeleteConfirm
    }
  },
}
</script>

