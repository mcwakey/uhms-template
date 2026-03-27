<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-2xl rounded-4 overflow-hidden receipt-modal">
        <div class="modal-body p-0">
          <!-- Receipt Content (Printable) -->
          <div class="receipt-content p-4" id="printable-receipt">
            <!-- Header -->
            <div class="text-center mb-4 pb-3 border-bottom border-dashed">
              <div class="bg-soft-primary d-inline-block p-3 rounded-circle mb-2">
                <i class="ti ti-building-hospital fs-30 text-primary"></i>
              </div>
              <h4 class="fw-black text-dark mb-0">UHMS MEDICAL CENTER</h4>
              <p class="text-muted fs-11 mb-0">123 Health Avenue, Medical District</p>
              <p class="text-muted fs-11 mb-0">Phone: +1 234 567 890 | Email: billing@uhms.com</p>
            </div>

            <!-- Receipt Info -->
            <div class="text-center mb-4">
              <h5 class="fw-bold text-uppercase tracking-widest fs-14 mb-1">Payment Receipt</h5>
              <div class="fs-12 text-muted">No: <span class="fw-bold text-dark">{{ payment?.reference || 'REC-' + Date.now() }}</span></div>
              <div class="fs-11 text-muted">{{ formatDate(payment?.date || new Date()) }}</div>
            </div>

            <!-- Details -->
            <div class="mb-4">
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted fs-12">Patient Name:</span>
                <span class="fw-bold text-dark fs-12">{{ patientName || 'N/A' }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted fs-12">Invoice ID:</span>
                <span class="fw-bold text-dark fs-12">{{ payment?.invoice_id || 'N/A' }}</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span class="text-muted fs-12">Payment Method:</span>
                <span class="fw-bold text-dark fs-12">{{ payment?.method || 'N/A' }}</span>
              </div>
            </div>

            <!-- Amount Section -->
            <div class="bg-light p-3 rounded-3 mb-4 text-center">
              <span class="text-muted fs-11 text-uppercase fw-bold d-block mb-1">Amount Paid</span>
              <h2 class="fw-black text-primary mb-0">{{ formatCurrency(payment?.amount || 0) }}</h2>
            </div>

            <!-- Footer Message -->
            <div class="text-center mt-5 pt-3 border-top border-dashed">
              <p class="fs-11 text-muted italic mb-1">"Your health, our priority."</p>
              <h6 class="fw-bold fs-12 text-dark">Thank you for choosing UHMS!</h6>
              <div class="barcode mt-3 opacity-50">
                <i class="ti ti-barcode fs-40"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons (Non-printable) -->
        <div class="modal-footer border-0 p-4 pt-0 gap-2 no-print">
          <button type="button" class="btn btn-secondary flex-grow-1 fw-bold fs-13" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary flex-grow-1 fw-bold fs-13 shadow-primary" @click="printReceipt">
            <i class="ti ti-printer me-1"></i> Print Receipt
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modalId: {
    type: String,
    default: 'receipt_modal'
  },
  payment: {
    type: Object,
    default: () => ({})
  },
  patientName: {
    type: String,
    default: ''
  }
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleString(undefined, {
    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
  })
}

const formatCurrency = (val) => {
  if (val === undefined || val === null) return '₵0.00'
  return new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS', currencyDisplay: 'narrowSymbol' }).format(val)
}

const printReceipt = () => {
    window.print()
}
</script>

<style scoped>
.receipt-modal {
  max-width: 400px;
  margin: auto;
}

.bg-soft-primary {
  background-color: rgba(0, 123, 255, 0.08);
}

.fw-black {
  font-weight: 900;
}

.tracking-widest {
  letter-spacing: 0.1em;
}

.italic {
  font-style: italic;
}

.border-dashed {
  border-style: dashed !important;
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.shadow-primary {
  box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
}

@media print {
  .no-print {
    display: none !important;
  }
  .modal-dialog {
    margin: 0;
    max-width: 100%;
  }
  .modal-content {
    border: none !important;
    box-shadow: none !important;
  }
}
</style>
