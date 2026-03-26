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
          :loading="InsuranceTable.loading.value"
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
                viewTitle="View Insurance"
                editTitle="Edit Insurance"
                :show-delete="false"
                @view="handleView(record)"
                @edit="handleEdit(record)"
              />
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>

  <!-- View Insurance Modal -->
  <div id="view_insurance" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title fw-bold">Insurance Company Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">
          <div class="mb-3">
            <label class="text-muted fs-12 mb-1">Company Name</label>
            <h6 class="fw-bold fs-15">{{ detailedItem.name || '-' }}</h6>
          </div>
          <div class="mb-0">
            <label class="text-muted fs-12 mb-1">Status</label>
            <div>
              <span :class="detailedItem.is_active ? 'badge bg-success' : 'badge bg-danger'">
                {{ detailedItem.is_active ? 'Active' : 'Inactive' }}
              </span>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 pt-0">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Insurance Modal (Placeholder) -->
  <div id="edit_insurance" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title fw-bold">Edit Insurance Company</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-4">
          <div class="mb-3">
            <label class="form-label fw-medium">Company Name</label>
            <input type="text" class="form-control" :value="detailedItem.name" readonly />
            <small class="text-muted mt-1 d-block">Editing is restricted in this view.</small>
          </div>
        </div>
        <div class="modal-footer border-0 pt-0">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
        </div>
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
      showModalById('view_insurance')
    }
    const handleEdit = async (record) => {
      await openModal(record)
      showModalById('edit_insurance')
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
    }
  },
}
</script>

<style scoped>
.modal-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}
.modal-title {
  font-weight: 600;
}
</style>
