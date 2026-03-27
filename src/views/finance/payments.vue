<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <div class="page-wrapper">
    <div class="content">
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-bottom">
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-1">Payments</h4>
          <p class="text-muted mb-0 fs-13">Process invoice payments and issue receipts.</p>
        </div>
        <div class="d-flex gap-2">
          <button class="btn btn-white border d-inline-flex align-items-center" @click="refreshAll" :disabled="loadingAny">
            <i class="ti ti-refresh me-2"></i>Refresh
          </button>
        </div>
      </div>

      <ul class="nav nav-tabs nav-bordered mb-3">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);" :class="{ active: activeTab === 'invoices' }" @click="activeTab = 'invoices'">
            Outstanding Invoices
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);" :class="{ active: activeTab === 'receipts' }" @click="activeTab = 'receipts'">
            Receipts
          </a>
        </li>
      </ul>

      <div v-if="activeTab === 'invoices'">
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
          <div class="search-input-group" style="max-width: 420px;">
            <span class="search-icon"><i class="ti ti-search text-muted"></i></span>
            <input
              v-model="invoiceSearch"
              type="text"
              class="form-control ps-5 shadow-none border-1"
              placeholder="Search invoice ID or patient..."
            />
          </div>
          <div class="badge bg-soft-primary border border-primary px-3 py-2">
            <span class="text-primary fw-bold">Total: {{ invoices.length }}</span>
          </div>
        </div>

        <div class="table-responsive">
          <a-table
            class="table table-nowrap datatable pagination-rounded"
            :columns="invoiceColumns"
            :data-source="filteredInvoices"
            :loading="invoicesStore.loading.value"
            row-key="id"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'id'">
                <span class="fw-bold text-primary">{{ record.id }}</span>
              </template>
              <template v-else-if="column.key === 'amount'">
                <span class="fw-bold">{{ formatCurrency(record.amount) }}</span>
              </template>
              <template v-else-if="column.key === 'balance'">
                <span :class="{ 'text-danger': getBalance(record) > 0 }">{{ formatCurrency(getBalance(record)) }}</span>
              </template>
              <template v-else-if="column.key === 'status'">
                <span :class="['badge px-2 py-1', getStatusClass(record.status)]">{{ record.status }}</span>
              </template>
              <template v-else-if="column.key === 'actions'">
                <div class="d-flex justify-content-end">
                  <button
                    class="btn btn-sm btn-success"
                    :disabled="String(record.status || '').toLowerCase() === 'paid' || getBalance(record) <= 0"
                    @click="openRecordPayment(record)"
                  >
                    <i class="ti ti-cash me-1"></i>Record Payment
                  </button>
                </div>
              </template>
            </template>
          </a-table>
        </div>
      </div>

      <div v-else>
        <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
          <div class="search-input-group" style="max-width: 420px;">
            <span class="search-icon"><i class="ti ti-search text-muted"></i></span>
            <input
              v-model="paymentSearch"
              type="text"
              class="form-control ps-5 shadow-none border-1"
              placeholder="Search receipt no, invoice, patient..."
            />
          </div>
          <div class="badge bg-soft-success border border-success px-3 py-2">
            <span class="text-success fw-bold">Total: {{ combinedPayments.length }}</span>
          </div>
        </div>

        <div class="table-responsive">
          <a-table
            class="table table-nowrap datatable pagination-rounded"
            :columns="receiptColumns"
            :data-source="filteredPayments"
            :loading="paymentsStore.loading.value"
            row-key="__key"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'reference'">
                <span class="fw-bold text-dark">{{ record.reference || '-' }}</span>
              </template>
              <template v-else-if="column.key === 'amount'">
                <span class="fw-bold">{{ formatCurrency(record.amount || 0) }}</span>
              </template>
              <template v-else-if="column.key === 'date'">
                <span class="text-dark">{{ formatDateTime(record.date) }}</span>
              </template>
              <template v-else-if="column.key === 'actions'">
                <div class="d-flex justify-content-end gap-2">
                  <button class="btn btn-sm btn-secondary" @click="openReceipt(record)">
                    <i class="ti ti-printer me-1"></i>Receipt
                  </button>
                </div>
              </template>
            </template>
          </a-table>
        </div>
      </div>
    </div>

    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy; <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All Rights Reserved
      </p>
    </div>
  </div>

  <RecordPaymentModal modal-id="record_payment" :invoice="selectedInvoice" @payment-recorded="handlePaymentRecorded" />
  <ReceiptModal modal-id="receipt_modal" :payment="recentPayment" :patient-name="recentPayment?.patient_name" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { message } from 'ant-design-vue'
import { useTableStore } from '@/stores/dataTable'
import { showModalById } from '@/utils/bootstrap'
import RecordPaymentModal from '@/components/modal/billing-modals/RecordPaymentModal.vue'
import ReceiptModal from '@/components/modal/billing-modals/ReceiptModal.vue'

type InvoiceRow = {
  id: string | number
  patient_name?: string
  amount?: number
  amount_paid?: number
  status?: string
}

type PaymentRow = {
  invoice_id?: string | number
  patient_name?: string
  method?: string
  amount?: number
  reference?: string
  date?: string
}

const activeTab = ref<'invoices' | 'receipts'>('invoices')

const invoicesStore = useTableStore('invoices')
const paymentsStore = useTableStore('financePayments', 'finance/payments')

const invoiceSearch = ref('')
const paymentSearch = ref('')

const selectedInvoice = ref<InvoiceRow | null>(null)
const recentPayment = ref<PaymentRow | null>(null)
const localPayments = ref<PaymentRow[]>([])

const loadingAny = computed(() => invoicesStore.loading.value || paymentsStore.loading.value)

const invoices = computed<InvoiceRow[]>(() => (Array.isArray(invoicesStore.data.value) ? (invoicesStore.data.value as InvoiceRow[]) : []))

const makePaymentKey = (p: PaymentRow) => {
  const parts = [p.reference, p.invoice_id, p.date, p.amount, p.method, p.patient_name].map((x) => String(x ?? ''))
  return parts.join('|')
}

const combinedPayments = computed(() => {
  const api = Array.isArray(paymentsStore.data.value) ? (paymentsStore.data.value as PaymentRow[]) : []
  const merged = [...localPayments.value, ...api]
  const seen = new Set<string>()
  const out: (PaymentRow & { __key: string })[] = []
  for (const p of merged) {
    const key = makePaymentKey(p)
    if (seen.has(key)) continue
    seen.add(key)
    out.push({ ...p, __key: key })
  }
  return out
})

const formatCurrency = (val: number) => {
  const num = typeof val === 'number' && !Number.isNaN(val) ? val : 0
  return new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS', currencyDisplay: 'narrowSymbol' }).format(num)
}

const formatDateTime = (dateString?: string) => {
  if (!dateString) return '-'
  const d = new Date(dateString)
  if (Number.isNaN(d.getTime())) return dateString
  return d.toLocaleString()
}

const getBalance = (invoice: InvoiceRow) => {
  const total = Number(invoice.amount ?? 0)
  const paid = Number(invoice.amount_paid ?? 0)
  const bal = total - paid
  return bal > 0 ? bal : 0
}

const getStatusClass = (status?: string) => {
  switch (String(status ?? '').toLowerCase()) {
    case 'paid':
      return 'bg-soft-success text-success border border-success'
    case 'partial':
    case 'partially paid':
      return 'bg-soft-warning text-warning border border-warning'
    case 'unpaid':
      return 'bg-soft-danger text-danger border border-danger'
    default:
      return 'bg-soft-secondary text-dark border border-secondary'
  }
}

const invoiceColumns = [
  { title: 'Invoice ID', key: 'id', sorter: true },
  { title: 'Patient', dataIndex: 'patient_name', key: 'patient_name', sorter: true },
  { title: 'Total', key: 'amount' },
  { title: 'Balance', key: 'balance' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'actions', align: 'right', width: 170 },
]

const receiptColumns = [
  { title: 'Receipt No', key: 'reference', sorter: true },
  { title: 'Invoice ID', dataIndex: 'invoice_id', key: 'invoice_id', sorter: true },
  { title: 'Patient', dataIndex: 'patient_name', key: 'patient_name', sorter: true },
  { title: 'Method', dataIndex: 'method', key: 'method' },
  { title: 'Amount', key: 'amount' },
  { title: 'Date', key: 'date' },
  { title: 'Actions', key: 'actions', align: 'right', width: 120 },
]

const filteredInvoices = computed(() => {
  const q = invoiceSearch.value.trim().toLowerCase()
  if (!q) return invoices.value
  return invoices.value.filter((inv) => {
    const id = String(inv.id ?? '').toLowerCase()
    const patient = String(inv.patient_name ?? '').toLowerCase()
    return id.includes(q) || patient.includes(q)
  })
})

const filteredPayments = computed(() => {
  const q = paymentSearch.value.trim().toLowerCase()
  if (!q) return combinedPayments.value
  return combinedPayments.value.filter((p) => {
    const refNo = String(p.reference ?? '').toLowerCase()
    const inv = String(p.invoice_id ?? '').toLowerCase()
    const patient = String(p.patient_name ?? '').toLowerCase()
    return refNo.includes(q) || inv.includes(q) || patient.includes(q)
  })
})

const refreshAll = async () => {
  const tasks = [invoicesStore.fetchData().catch(() => {}), paymentsStore.fetchData().catch(() => {})]
  await Promise.all(tasks)
}

const openRecordPayment = (invoice: InvoiceRow) => {
  selectedInvoice.value = invoice
  showModalById('record_payment')
}

const openReceipt = (payment: PaymentRow) => {
  recentPayment.value = payment
  showModalById('receipt_modal')
}

const handlePaymentRecorded = (payload: PaymentRow) => {
  localPayments.value = [{ ...payload }, ...localPayments.value]

  const invoiceId = payload.invoice_id
  const invoice = (invoicesStore.data.value as any[])?.find?.((x: any) => String(x?.id) === String(invoiceId))
  if (invoice) {
    const currentPaid = Number(invoice.amount_paid ?? 0)
    const add = Number(payload.amount ?? 0)
    invoice.amount_paid = currentPaid + (Number.isNaN(add) ? 0 : add)
    const bal = Number(invoice.amount ?? 0) - Number(invoice.amount_paid ?? 0)
    invoice.status = bal <= 0 ? 'Paid' : 'Partial'
  }

  recentPayment.value = payload
  openReceipt(payload)
  message.success('Payment recorded and receipt ready to print')
}

onMounted(async () => {
  try {
    await invoicesStore.fetchData()
  } catch {
    message.warning('Could not load invoices from the API')
  }

  try {
    await paymentsStore.fetchData()
  } catch {
    message.warning('Could not load payment history from the API')
  }
})
</script>
