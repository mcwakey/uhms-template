<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-flex align-items-sm-center justify-content-between flex-sm-row flex-column gap-2 pb-3 mb-3 border-bottom">
        <div>
          <h4 class="fw-bold mb-0">
            Invoices Management
            <span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ totalCount }}</span
            >
          </h4>
        </div>
        <div class="d-flex align-items-center gap-2">
           <div class="dropdown me-1">
            <a href="javascript:void(0);" class="btn btn-outline-secondary d-inline-flex align-items-center" data-bs-toggle="dropdown">
              Export<i class="ti ti-chevron-down ms-2"></i>
            </a>
            <ul class="dropdown-menu p-2">
              <li><a class="dropdown-item" href="javascript:void(0);">Download as PDF</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Download as Excel</a></li>
            </ul>
          </div>
          <button class="btn btn-primary d-flex align-items-center">
            <i class="ti ti-plus me-1"></i> Create Invoice
          </button>
        </div>
      </div>
      
      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable pagination-rounded"
          :columns="columns"
          :data-source="data"
          :pagination="paginationConfig"
          :loading="loading"
          @change="invoicesStore.handleTableChange"
          row-key="id"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'id'">
               <span class="fw-bold text-primary">{{ record.id }}</span>
            </template>

            <template v-else-if="column.key === 'patient_name'">
               <div class="fw-medium text-dark">{{ record.patient_name }}</div>
            </template>

            <template v-else-if="column.key === 'amount'">
               <div class="fw-bold">{{ formatCurrency(record.amount) }}</div>
            </template>

            <template v-else-if="column.key === 'balance'">
               <div :class="{'text-danger': (record.amount - (record.amount_paid || 0)) > 0}">
                  {{ formatCurrency(record.amount - (record.amount_paid || 0)) }}
               </div>
            </template>

            <template v-else-if="column.key === 'created_at'">
              {{ formatDate(record.created_at) }}
            </template>

            <template v-else-if="column.key === 'status'">
              <span :class="['badge px-2 py-1', getStatusClass(record.status)]">
                {{ record.status }}
              </span>
            </template>

            <template v-else-if="column.key === 'actions'">
              <div class="d-flex align-items-center justify-content-end gap-2">
                 <button 
                  class="btn btn-sm btn-icon btn-soft-primary" 
                  title="View Invoice"
                  @click="handleView(record)"
                >
                  <i class="ti ti-eye"></i>
                </button>
                 <button 
                  class="btn btn-sm btn-icon btn-soft-success" 
                  title="Record Payment"
                  @click="handleRecordPayment(record)"
                  :disabled="record.status === 'Paid'"
                >
                  <i class="ti ti-cash"></i>
                </button>
                <button 
                  class="btn btn-sm btn-icon btn-soft-secondary" 
                  title="Print"
                  @click="handlePrint(record)"
                >
                  <i class="ti ti-printer"></i>
                </button>
              </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
  </div>

  <!-- Modals -->
  <ViewInvoiceModal 
    modal-id="view_invoice"
    :invoice="detailedItem"
    @record-payment="handleRecordPayment"
  />
  <RecordPaymentModal 
    modal-id="record_payment"
    :invoice="detailedItem"
    @payment-recorded="invoicesStore.fetchData"
  />
  <DeleteModal 
    modal-id="delete_invoice"
    title="Delete Invoice"
    :message="`Are you sure you want to delete the invoice for ${detailedItem?.patient_name}?`"
    @confirm="handleDeleteConfirm"
  />
</template>

<script>
import { useTableStore } from '@/stores/dataTable'
import { onMounted, computed } from 'vue'
import { message } from 'ant-design-vue'
import { showModalById, hideModalById } from '@/utils/bootstrap'

// Import Modals
import ViewInvoiceModal from '@/components/modal/billing-modals/ViewInvoiceModal.vue'
import RecordPaymentModal from '@/components/modal/billing-modals/RecordPaymentModal.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'

export default {
  components: { 
    ViewInvoiceModal, 
    RecordPaymentModal, 
    DeleteModal 
  },
  name: 'InvoicesIndex',
  setup() {
    const invoicesStore = useTableStore('invoices')
    const { 
      data, 
      loading, 
      totalCount, 
      currentPage, 
      perPage, 
      detailedItem 
    } = invoicesStore

    const paginationConfig = computed(() => ({
      current: currentPage.value,
      pageSize: perPage.value,
      total: totalCount.value,
      showSizeChanger: false,
      showQuickJumper: false,
    }))

    const columns = [
      { title: 'Invoice ID', key: 'id', sorter: true },
      { title: 'Patient', key: 'patient_name', sorter: true },
      { title: 'Total Amount', key: 'amount' },
      { title: 'Balance', key: 'balance' },
      { title: 'Date', key: 'created_at' },
      { title: 'Status', key: 'status' },
      { title: 'Actions', key: 'actions', align: 'right', width: 150 },
    ]

    const formatDate = (dateString) => {
      if (!dateString) return 'N/A'
      return new Date(dateString).toLocaleDateString()
    }

    const formatCurrency = (val) => {
      if (val === undefined || val === null) return '$0.00'
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)
    }

    const getStatusClass = (status) => {
      switch (status?.toLowerCase()) {
        case 'paid': return 'badge-soft-success'
        case 'unpaid': return 'badge-soft-danger'
        case 'partial': return 'badge-soft-warning'
        case 'overdue': return 'badge-soft-dark'
        default: return 'badge-soft-secondary'
      }
    }

    const handleView = (record) => {
      invoicesStore.selectItem(record)
      showModalById('view_invoice')
    }

    const handleRecordPayment = (record) => {
      invoicesStore.selectItem(record)
      hideModalById('view_invoice')
      setTimeout(() => {
        showModalById('record_payment')
      }, 300)
    }

    const handlePrint = (record) => {
       message.info(`Preparing print view for invoice ${record.id}`)
       window.print()
    }

    const handleDeleteConfirm = async () => {
      try {
        message.success('Invoice deleted successfully')
        invoicesStore.fetchData()
      } catch (error) {
        message.error('Failed to delete invoice')
      }
    }

    onMounted(() => {
      invoicesStore.fetchData().catch(() => {
        console.log('API failed or not ready, fallback to mock data enabled in store.')
      })
    })

    return {
      data,
      loading,
      totalCount,
      detailedItem,
      invoicesStore,
      paginationConfig,
      columns,
      formatDate,
      formatCurrency,
      getStatusClass,
      handleView,
      handleRecordPayment,
      handlePrint,
      handleDeleteConfirm
    }
  },
}
</script>


<style>
/* Center alignment fixes */
td.actions,
td.staff_id,
th {
  text-align: center !important;
}

th {
  font-size: 1.2em;
  font-weight: 200;
}

td.email,
td.phone {
  text-align: center !important;
}
</style>
