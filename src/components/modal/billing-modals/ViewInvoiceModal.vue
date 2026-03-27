<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-2xl rounded-4 overflow-hidden invoice-modal">
        <!-- Header / Logo Area -->
        <div class="modal-header d-block border-0 p-0">
          <div class="px-4 py-3 bg-gradient-primary text-white d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
              <div class="bg-white p-2 rounded-3 me-3">
                <i class="ti ti-building-hospital fs-24 text-primary"></i>
              </div>
              <div>
                <h5 class="modal-title fw-bold text-white mb-0">UHMS Medical Center</h5>
                <p class="mb-0 text-white-50 fs-11">Official Patient Invoice</p>
              </div>
            </div>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <!-- Invoice Meta Stripe -->
          <div class="bg-light px-4 py-2 border-bottom d-flex justify-content-between align-items-center">
            <div class="fs-12 text-muted fw-medium">
              Invoice ID: <span class="text-dark fw-bold">{{ invoice?.id }}</span>
            </div>
            <div :class="['badge rounded-pill px-3 py-1 fs-11 fw-bold text-uppercase', getStatusBadgeClass(invoice?.status)]">
              {{ invoice?.status || 'Pending' }}
            </div>
          </div>
        </div>

        <div class="modal-body p-4">
          <!-- Patient & Provider Info -->
          <div class="row mb-4">
            <div class="col-sm-6">
              <div class="p-3 border rounded-3 h-100 bg-white shadow-sm">
                <label class="d-block fs-10 text-muted text-uppercase fw-bold mb-2 tracking-wider">Patient Details</label>
                <div class="d-flex align-items-center">
                  <div class="avatar avatar-md rounded-circle bg-soft-primary text-primary fw-bold me-3">
                    {{ invoice?.patient_name?.charAt(0) || 'P' }}
                  </div>
                  <div>
                    <h6 class="fw-bold text-dark mb-1 fs-15">{{ invoice?.patient_name }}</h6>
                    <p class="mb-0 text-muted fs-12">Patient ID: {{ invoice?.patient_id || 'N/A' }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 mt-3 mt-sm-0">
              <div class="p-3 border rounded-3 h-100 bg-white shadow-sm">
                <label class="d-block fs-10 text-muted text-uppercase fw-bold mb-2 tracking-wider">Invoice Info</label>
                <div class="d-flex flex-column gap-2 mt-1">
                  <div class="d-flex justify-content-between">
                    <span class="fs-12 text-muted">Issue Date:</span>
                    <span class="fs-12 fw-bold text-dark">{{ formatDate(invoice?.created_at) }}</span>
                  </div>
                  <div class="d-flex justify-content-between">
                    <span class="fs-12 text-muted">Due Date:</span>
                    <span class="fs-12 fw-bold text-danger">{{ formatDate(invoice?.due_date) || 'Upon Receipt' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Line Items -->
          <div class="invoice-items">
            <div class="table-responsive rounded-3 border">
              <table class="table table-hover mb-0">
                <thead class="bg-light bg-opacity-50">
                  <tr>
                    <th class="ps-3 py-3 border-0 fs-10 text-muted text-uppercase fw-bold">Description</th>
                    <th class="text-center py-3 border-0 fs-10 text-muted text-uppercase fw-bold" style="width: 80px;">Qty</th>
                    <th class="text-end py-3 border-0 fs-10 text-muted text-uppercase fw-bold" style="width: 120px;">Unit Price</th>
                    <th class="text-end pe-3 py-3 border-0 fs-10 text-muted text-uppercase fw-bold" style="width: 120px;">Total</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr v-for="(item, idx) in invoice?.items" :key="idx" class="align-middle">
                    <td class="ps-3 py-3">
                      <div class="fw-bold text-dark fs-14">{{ item.description }}</div>
                      <div class="fs-11 text-muted">{{ item.category || 'General Service' }}</div>
                    </td>
                    <td class="text-center py-3 fs-14">{{ item.qty }}</td>
                    <td class="text-end py-3 fs-14">{{ formatCurrency(item.unit_price) }}</td>
                    <td class="text-end pe-3 py-3 fw-bold text-primary fs-14">{{ formatCurrency(item.total) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Total Summary Section -->
          <div class="row mt-4 pt-2">
            <div class="col-md-7">
              <div class="p-3 bg-light rounded-3 h-100 border border-dashed">
                <h6 class="fs-12 fw-bold text-muted text-uppercase mb-2">Notes & Instructions</h6>
                <p class="fs-11 text-muted mb-0">Please ensure all payments are made before the due date. For insurance claims, provide the claim ID at the reception. All billing queries should be directed to the accounts department.</p>
              </div>
            </div>
            <div class="col-md-5 mt-3 mt-md-0">
              <div class="d-flex flex-column gap-2">
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-muted fs-13">Subtotal</span>
                  <span class="fw-medium text-dark">{{ formatCurrency(calculateSubtotal()) }}</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-muted fs-13">Insurance Benefit</span>
                  <span class="text-success fw-medium">- {{ formatCurrency(invoice?.insurance_coverage || 0) }}</span>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="text-muted fs-13">Tax (0%)</span>
                  <span class="fw-medium text-dark">₵0.00</span>
                </div>
                <hr class="my-1 border-dashed" />
                <div class="d-flex justify-content-between align-items-center py-1">
                  <span class="fw-bold text-dark fs-15">GRAND TOTAL</span>
                  <span class="fw-black text-primary fs-18 tracking-tighter">{{ formatCurrency(invoice?.amount) }}</span>
                </div>
                
                <div v-if="invoice?.amount_paid" class="mt-2 text-end">
                  <div class="d-flex justify-content-between align-items-center text-success mb-1">
                    <span class="fs-12">Total Paid</span>
                    <span class="fw-bold fs-14">{{ formatCurrency(invoice.amount_paid) }}</span>
                  </div>
                  <div class="d-flex justify-content-between align-items-center p-2 rounded-2 bg-soft-danger text-danger mt-2 border border-danger border-opacity-10">
                    <span class="fs-12 fw-bold text-uppercase">Balance Due</span>
                    <span class="fw-black fs-15">{{ formatCurrency(invoice.amount - invoice.amount_paid) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Actions -->
        <div class="modal-footer bg-light border-0 py-3 px-4 d-flex justify-content-between align-items-center">
          <div class="d-flex gap-2">
            <button type="button" class="btn btn-white border shadow-sm px-3 fw-bold fs-13 d-flex align-items-center" @click="printInvoice">
              <i class="ti ti-printer me-2 text-muted"></i> Export PDF
            </button>
            <button type="button" class="btn btn-white border shadow-sm px-3 fw-bold fs-13 d-flex align-items-center" @click="printInvoice">
              <i class="ti ti-share me-2 text-muted"></i> Share
            </button>
          </div>
          <div class="d-flex gap-2">
            <button type="button" class="btn btn-secondary px-4 fw-bold fs-13" data-bs-dismiss="modal">Close</button>
            <button v-if="invoice?.status !== 'Paid'" type="button" class="btn btn-primary px-4 fw-bold fs-13 shadow-primary" @click="$emit('record-payment', invoice)">
               Record Patient Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modalId: {
    type: String,
    default: 'view_invoice'
  },
  invoice: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['record-payment'])

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric'
  })
}

const formatCurrency = (val) => {
  if (val === undefined || val === null) return '₵0.00'
  return new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS', currencyDisplay: 'narrowSymbol' }).format(val)
}

const calculateSubtotal = () => {
    if (!props.invoice?.items) return 0
    return props.invoice.items.reduce((sum, item) => sum + (item.total || 0), 0)
}

const getStatusBadgeClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'paid': return 'bg-success text-white'
    case 'unpaid': return 'bg-danger text-white'
    case 'partial': return 'bg-warning text-dark'
    case 'overdue': return 'bg-dark text-white'
    default: return 'bg-secondary text-white'
  }
}

const printInvoice = () => {
    window.print()
}
</script>

<style scoped>
.invoice-modal {
  background-color: #fcfcfc;
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #0061ff 0%, #60efff 100%);
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.shadow-primary {
  box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
}

.tracking-wider {
  letter-spacing: 0.05em;
}

.tracking-tighter {
  letter-spacing: -0.05em;
}

.border-dashed {
  border-style: dashed !important;
}

.fw-black {
  font-weight: 900;
}

.bg-soft-primary { background-color: rgba(0, 123, 255, 0.1); }
.bg-soft-danger { background-color: rgba(220, 53, 69, 0.1); }

/* Print specific styles */
@media print {
  .modal-header .btn-close,
  .modal-footer {
    display: none !important;
  }
  .modal-content {
    border: none !important;
    box-shadow: none !important;
  }
}
</style>
