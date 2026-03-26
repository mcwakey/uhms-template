<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-3 overflow-hidden">
        <!-- Header -->
        <div class="modal-header bg-primary text-white border-0 py-3 px-4">
          <div class="d-flex align-items-center">
            <div class="bg-white bg-opacity-20 p-2 rounded-circle me-3">
              <i class="ti ti-receipt fs-20"></i>
            </div>
            <div>
              <h5 class="modal-title fw-bold text-white mb-0">Invoice Details</h5>
              <p class="mb-0 text-white text-opacity-75 fs-12">{{ invoice?.id }}</p>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-0">
          <!-- Patient & Status Banner -->
          <div class="bg-light p-4 border-bottom">
            <div class="row align-items-center">
              <div class="col-sm-6 mb-3 mb-sm-0">
                <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Patient</label>
                <h5 class="fw-bold text-dark mb-1">{{ invoice?.patient_name }}</h5>
                <p class="mb-0 text-muted fs-13">Date: {{ formatDate(invoice?.created_at) }}</p>
              </div>
              <div class="col-sm-6 text-sm-end">
                <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Status</label>
                <span :class="['badge px-3 py-2 fs-12', getStatusClass(invoice?.status)]">
                   {{ invoice?.status || 'Pending' }}
                </span>
                <p v-if="invoice?.due_date" class="mt-2 mb-0 text-danger fs-12 fw-medium">
                  Due by: {{ formatDate(invoice.due_date) }}
                </p>
              </div>
            </div>
          </div>

          <!-- Line Items Table -->
          <div class="p-4">
            <h6 class="fw-bold mb-3">Service & Medication Items</h6>
            <div class="table-responsive rounded border">
              <table class="table table-hover mb-0">
                <thead class="bg-light">
                  <tr>
                    <th class="ps-3 py-2 border-0 fs-12">Description</th>
                    <th class="text-center py-2 border-0 fs-12" style="width: 80px;">Qty</th>
                    <th class="text-end py-2 border-0 fs-12" style="width: 120px;">Unit Price</th>
                    <th class="text-end pe-3 py-2 border-0 fs-12" style="width: 120px;">Total</th>
                  </tr>
                </thead>
                <tbody class="border-top-0">
                  <tr v-for="(item, idx) in invoice?.items" :key="idx">
                    <td class="ps-3 py-3 align-middle fw-medium">{{ item.description }}</td>
                    <td class="text-center py-3 align-middle">{{ item.qty }}</td>
                    <td class="text-end py-3 align-middle">{{ formatCurrency(item.unit_price) }}</td>
                    <td class="text-end pe-3 py-3 align-middle fw-bold text-primary">{{ formatCurrency(item.total) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Summary -->
            <div class="row mt-4 justify-content-end">
              <div class="col-md-5">
                <div class="d-flex justify-content-between mb-2">
                  <span class="text-muted fs-14">Subtotal:</span>
                  <span class="fw-medium">{{ formatCurrency(calculateSubtotal()) }}</span>
                </div>
                <div class="d-flex justify-content-between mb-2">
                  <span class="text-muted fs-14">Tax (0%):</span>
                  <span class="fw-medium">{{ formatCurrency(0) }}</span>
                </div>
                <hr class="my-2 border-dashed" />
                <div class="d-flex justify-content-between">
                  <h5 class="fw-bold text-dark">Total:</h5>
                  <h5 class="fw-bold text-primary">{{ formatCurrency(invoice?.amount) }}</h5>
                </div>
                <div v-if="invoice?.amount_paid" class="d-flex justify-content-between mt-1 text-success fw-medium fs-13">
                   <span>Amount Paid:</span>
                   <span>- {{ formatCurrency(invoice.amount_paid) }}</span>
                </div>
                <div v-if="invoice?.amount_paid" class="d-flex justify-content-between mt-2 pt-2 border-top">
                   <span class="fw-bold text-danger fs-14">Balance Due:</span>
                   <span class="fw-bold text-danger">{{ formatCurrency(invoice.amount - invoice.amount_paid) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="modal-footer bg-light border-0 py-3 px-4">
          <button type="button" class="btn btn-outline-secondary fw-medium me-auto" @click="printInvoice">
            <i class="ti ti-printer me-1"></i> Print
          </button>
          <button type="button" class="btn btn-secondary fw-medium px-4" data-bs-dismiss="modal">Close</button>
          <button v-if="invoice?.status !== 'Paid'" type="button" class="btn btn-primary fw-medium px-4" @click="$emit('record-payment', invoice)">
             Record Payment
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
  if (val === undefined || val === null) return '$0.00'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)
}

const calculateSubtotal = () => {
    if (!props.invoice?.items) return 0
    return props.invoice.items.reduce((sum, item) => sum + (item.total || 0), 0)
}

const getStatusClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'paid': return 'bg-soft-success text-success'
    case 'unpaid': return 'bg-soft-danger text-danger'
    case 'partial': return 'bg-soft-warning text-warning'
    case 'overdue': return 'bg-soft-dark text-dark'
    default: return 'bg-soft-secondary text-secondary'
  }
}

const printInvoice = () => {
    window.print()
}
</script>
