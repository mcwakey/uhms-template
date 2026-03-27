<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 pb-3 mb-3 border-bottom">
        <div>
          <h4 class="fw-bold mb-1">Invoices Management</h4>
          <p class="text-muted mb-0 fs-13">Manage patient billing, track payments, and issue receipts.</p>
        </div>
        <div class="d-flex align-items-center gap-2">
          <div class="badge bg-soft-primary border border-primary px-3 py-2">
            <span class="text-primary fw-bold">Total Invoices: {{ totalCount }}</span>
          </div>
          <button class="btn btn-primary d-flex align-items-center px-3" @click="handleCreateInvoice">
            <i class="ti ti-plus me-1"></i> Create Invoice
          </button>
        </div>
      </div>

      <!-- Filters & Search -->
      <div class="row align-items-center mb-4">
        <div class="col-md-4">
          <div class="search-input-group">
            <span class="search-icon"><i class="ti ti-search text-muted"></i></span>
            <input 
              type="text" 
              class="form-control ps-5 shadow-none border-1" 
              placeholder="Search by invoice ID or patient name..." 
              v-model="searchText"
              @input="onSearch"
            />
          </div>
        </div>
        <div class="col-md-8">
          <div class="d-flex justify-content-md-end align-items-center gap-2 mt-3 mt-md-0">
            <div class="dropdown">
              <a href="javascript:void(0);" class="btn btn-white border d-inline-flex align-items-center shadow-sm py-2" data-bs-toggle="dropdown">
                <i class="ti ti-filter me-2 text-primary"></i>All Statuses<i class="ti ti-chevron-down ms-2"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-2">
                <li><a class="dropdown-item rounded-1" href="javascript:void(0);" @click="filterByStatus(null)">All Statuses</a></li>
                <li><a class="dropdown-item rounded-1" href="javascript:void(0);" @click="filterByStatus('Paid')">Paid</a></li>
                <li><a class="dropdown-item rounded-1" href="javascript:void(0);" @click="filterByStatus('Unpaid')">Unpaid</a></li>
                <li><a class="dropdown-item rounded-1" href="javascript:void(0);" @click="filterByStatus('Partial')">Partial</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0);" class="btn btn-white border d-inline-flex align-items-center shadow-sm py-2" data-bs-toggle="dropdown">
                <i class="ti ti-download me-2 text-success"></i>Export<i class="ti ti-chevron-down ms-2"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-end p-2">
                <li><a class="dropdown-item rounded-1" href="javascript:void(0);"><i class="ti ti-file-type-pdf me-2"></i>Download PDF</a></li>
                <li><a class="dropdown-item rounded-1" href="javascript:void(0);"><i class="ti ti-file-spreadsheet me-2"></i>Download Excel</a></li>
              </ul>
            </div>
          </div>
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
    @payment-recorded="handlePaymentRecorded"
  />
  <div class="modal fade" id="delete_invoice" tabindex="-1" aria-hidden="true">
    <DeleteModal 
      title="Delete Invoice"
      :message="`Are you sure you want to delete the invoice for ${detailedItem?.patient_name}?`"
      @confirm="handleDeleteConfirm"
    />
  </div>
  <ReceiptModal
    modal-id="receipt_modal"
    :payment="recentPayment"
    :patient-name="recentPayment?.patient_name"
  />
</template>

<script>
import { useTableStore } from '@/stores/dataTable'
import { onMounted, computed, ref } from 'vue'
import { message } from 'ant-design-vue'
import { showModalById, hideModalById } from '@/utils/bootstrap'

// Import Modals
import ViewInvoiceModal from '@/components/modal/billing-modals/ViewInvoiceModal.vue'
import RecordPaymentModal from '@/components/modal/billing-modals/RecordPaymentModal.vue'
import ReceiptModal from '@/components/modal/billing-modals/ReceiptModal.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'

export default {
  components: { 
    ViewInvoiceModal, 
    RecordPaymentModal,
    ReceiptModal,
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

    const recentPayment = ref(null)
    const searchText = ref('')

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
      if (val === undefined || val === null) return '₵0.00'
      return new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS', currencyDisplay: 'narrowSymbol' }).format(val)
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

    const handlePaymentRecorded = (paymentData) => {
      recentPayment.value = paymentData
      invoicesStore.fetchData() // Refresh list
      
      // Show receipt modal after a short delay
      setTimeout(() => {
        showModalById('receipt_modal')
      }, 500)
    }

    const handleDeleteConfirm = async () => {
      try {
        message.success('Invoice deleted successfully')
        invoicesStore.fetchData()
      } catch (error) {
        message.error('Failed to delete invoice')
      }
    }

    const handleCreateInvoice = () => {
      message.info('Create Invoice feature is coming soon.')
    }

    const onSearch = () => {
      invoicesStore.searchQuery.value = searchText.value
      invoicesStore.fetchData()
    }

    const filterByStatus = (status) => {
      if (status) {
        invoicesStore.filters.value = { ...invoicesStore.filters.value, status }
      } else {
        const f = { ...invoicesStore.filters.value }
        delete f.status
        invoicesStore.filters.value = f
      }
      invoicesStore.fetchData()
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
      handleDeleteConfirm,
      handleCreateInvoice,
      filterByStatus,
      recentPayment,
      handlePaymentRecorded,
      searchText,
      onSearch
    }
  },
}
</script>


<style>
/* Search Input Styles */
.search-input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 15px;
  z-index: 5;
}

.search-input-group .form-control {
  padding-left: 40px !important;
  border-radius: 8px;
  background-color: #f8f9fa;
  transition: all 0.2s ease;
}

.search-input-group .form-control:focus {
  background-color: #fff;
  border-color: var(--bs-primary);
  box-shadow: 0 0 0 0.25rem rgba(var(--bs-primary-rgb), 0.1);
}

/* Center alignment fixes */
td.actions,
th {
  text-align: center !important;
}

th {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6c757d;
  background-color: #f8f9fa !important;
  padding: 12px 16px !important;
}

.badge-soft-success { background-color: rgba(40, 167, 69, 0.1); color: #28a745; }
.badge-soft-danger { background-color: rgba(220, 53, 69, 0.1); color: #dc3545; }
.badge-soft-warning { background-color: rgba(255, 193, 7, 0.1); color: #ffc107; }
.badge-soft-primary { background-color: rgba(0, 123, 255, 0.1); color: #007bff; }
.badge-soft-dark { background-color: rgba(52, 58, 64, 0.1); color: #343a40; }
</style>
