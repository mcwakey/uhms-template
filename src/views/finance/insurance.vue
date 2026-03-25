<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content" id="insurancePage">
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Insurance Companies
            <span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ InsuranceTable.totalCount }}</span
            >
          </h4>
        </div>
      </div>
      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable pagination-rounded"
          :columns="columns"
          :table-layout="fixed"
          :data-source="InsuranceTable.data.value"
          :pagination="paginationConfig"
          @change="InsuranceTable.handleTableChange"
          row-key="id"
          :pagination-class="pagination - rounded"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <div class="d-flex align-items-center ms-2">
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <a
                      href="javascript:void(0);"
                      @click="openModal(record)"
                      >{{ record.name }}</a
                    >
                  </h6>
                </div>
              </div>
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
                viewTitle="View Policy"
                editTitle="Edit Policy"
                deleteTitle="Delete Policy"
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
import { useTableStore } from '@/stores/dataTableStore'
import { onMounted, computed } from 'vue'
import { message } from 'ant-design-vue'
import ActionIcons from '@/components/common/ActionIcons.vue'
import { showModalById } from '@/utils/bootstrap'

export default {
  components: { ActionIcons },
  name: 'InsurancePage',
  setup() {
    const InsuranceTable = useTableStore('insurance/companies')
    const detailedItem = computed(() => InsuranceTable.detailedItem.value || {})

    const paginationConfig = computed(() => ({
      current: InsuranceTable.currentPage.value,
      pageSize: InsuranceTable.perPage.value,
      total: InsuranceTable.totalCount.value,
      showSizeChanger: false,
      showQuickJumper: false,
    }))

    const openModal = async (record) => {
      try {
        InsuranceTable.selectItem(record)
        await InsuranceTable.fetchItemDetails(record.id)
      } catch (error) {
        message.error(error)
      }
    }

    const columns = [
      { title: 'Company Name', dataIndex: 'name', key: 'name', className: 'name' },
      { title: 'Status', dataIndex: 'is_active', key: 'is_active', className: 'active' },
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
      InsuranceTable.fetchData().catch(() => {
        message.error('Failed to load insurance companies')
      })
    })

    return {
      InsuranceTable,
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
