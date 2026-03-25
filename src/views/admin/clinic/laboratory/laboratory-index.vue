<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content" id="labPage">
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Laboratory
            <span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ LabTable.totalCount }}</span
            >
          </h4>
        </div>
      </div>
      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable pagination-rounded"
          :columns="columns"
          :table-layout="fixed"
          :data-source="LabTable.data.value"
          :pagination="paginationConfig"
          @change="LabTable.handleTableChange"
          row-key="id"
          :pagination-class="pagination - rounded"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'test_name'">
              <div class="d-flex align-items-center ms-2">
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <a
                      href="javascript:void(0);"
                      @click="openModal(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#view_staff"
                      >{{ record.test_name }}</a
                    >
                  </h6>
                  <div class="text-muted">Requested by: {{ record.requested_by }}</div>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'actions'">
              <ActionIcons
                viewTitle="View Test"
                editTitle="Edit Test"
                deleteTitle="Delete Test"
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
  name: 'LaboratoryIndex',
  setup() {
    const LabTable = useTableStore('laboratory')
    const detailedItem = computed(() => LabTable.detailedItem.value || {})

    const paginationConfig = computed(() => ({
      current: LabTable.currentPage.value,
      pageSize: LabTable.perPage.value,
      total: LabTable.totalCount.value,
      showSizeChanger: false,
      showQuickJumper: false,
    }))

    const openModal = async (record) => {
      try {
        LabTable.selectItem(record)
        await LabTable.fetchItemDetails(record.id)
      } catch (error) {
        message.error(error)
      }
    }

    const columns = [
      { title: 'Test', dataIndex: 'test_name', key: 'test_name', className: 'name' },
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
      LabTable.fetchData().catch(() => {
        message.error('Failed to load laboratory data')
      })
    })

    return {
      LabTable,
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
