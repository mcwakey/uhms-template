<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content" id="prescriptionsPage">
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Prescriptions
            <span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ PrescTable.totalCount }}</span
            >
          </h4>
        </div>
      </div>
      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable pagination-rounded"
          :columns="columns"
          :table-layout="fixed"
          :data-source="PrescTable.data.value"
          :pagination="paginationConfig"
          @change="PrescTable.handleTableChange"
          row-key="id"
          :pagination-class="pagination - rounded"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'patient_name'">
              <div class="d-flex align-items-center ms-2">
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <a
                      href="javascript:void(0);"
                      @click="openModal(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#view_staff"
                      >{{ record.patient_name }}</a
                    >
                  </h6>
                  <div class="text-muted">Items: {{ record.items }}</div>
                </div>
              </div>
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
</template>

<script>
import { useTableStore } from '@/stores/dataTable'
import { onMounted, computed } from 'vue'
import { message } from 'ant-design-vue'
import ActionIcons from '@/components/common/ActionIcons.vue'
import { showModalById } from '@/utils/bootstrap'

export default {
  components: { ActionIcons },
  name: 'PrescriptionsIndex',
  setup() {
    const PrescTable = useTableStore('prescriptions')
    const detailedItem = computed(() => PrescTable.detailedItem.value || {})

    const paginationConfig = computed(() => ({
      current: PrescTable.currentPage.value,
      pageSize: PrescTable.perPage.value,
      total: PrescTable.totalCount.value,
      showSizeChanger: false,
      showQuickJumper: false,
    }))

    const openModal = async (record) => {
      try {
        PrescTable.selectItem(record)
        await PrescTable.fetchItemDetails(record.id)
      } catch (error) {
        message.error(error)
      }
    }

    const columns = [
      { title: 'Patient', dataIndex: 'patient_name', key: 'patient_name', className: 'name' },
      { title: 'Status', dataIndex: 'status', key: 'status', className: 'status' },
      { title: '', key: 'actions', width: 30, className: 'actions' },
    ]

    const handleView = async (record) => {
      await openModal(record)
      showModalById('view_staff')
    }
    const handleEdit = async (record) => {
      await openModal(record)
      showModalById('edit_staff')
    }
    const handleDelete = async (record) => {
      await openModal(record)
      showModalById('delete_staff')
    }

    onMounted(() => {
      PrescTable.fetchData().catch(() => {
        message.error('Failed to load prescriptions data')
      })
    })

    return {
      PrescTable,
      detailedItem,
      paginationConfig,
      columns,
      openModal,
      handleView,
      handleEdit,
      handleDelete,
    }
  },
}
</script>
