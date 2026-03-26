<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-success text-white border-0 py-3 px-4">
          <div>
            <h5 class="modal-title fw-bold text-white mb-1">Record Payment</h5>
            <p class="mb-0 text-white text-opacity-75 fs-13">Invoice #{{ invoice?.id }} - {{ invoice?.patient_name }}</p>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4">
          <form @submit.prevent="submitForm">
            <div class="row g-3">
              <div class="col-12">
                 <div class="card bg-soft-success border-success border-opacity-25 mb-3">
                    <div class="card-body p-3">
                       <div class="d-flex justify-content-between align-items-center">
                          <span class="fs-13 text-success fw-medium text-uppercase">Total Amount Due</span>
                          <h4 class="fw-bold mb-0 text-success">{{ formatCurrency(invoice?.amount - (invoice?.amount_paid || 0)) }}</h4>
                       </div>
                    </div>
                 </div>
              </div>

              <!-- Payment Method -->
              <div class="col-md-12">
                <label class="form-label fw-semibold text-dark fs-13">Payment Method <span class="text-danger">*</span></label>
                <select class="form-select shadow-none" v-model="form.method" required>
                  <option value="">Select Method</option>
                  <option value="Cash">Cash</option>
                  <option value="Credit/Debit Card">Credit/Debit Card</option>
                  <option value="Mobile Money (MoMo)">Mobile Money (MoMo)</option>
                  <option value="Insurance Claim">Insurance Claim</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>

              <!-- Amount to Pay -->
              <div class="col-md-12">
                <label class="form-label fw-semibold text-dark fs-13">Amount to Pay <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text bg-light border-end-0">$</span>
                  <input
                    type="number"
                    step="0.01"
                    class="form-control shadow-none border-start-0"
                    v-model.number="form.amount"
                    :max="invoice?.amount - (invoice?.amount_paid || 0)"
                    placeholder="Enter amount"
                    required
                  />
                </div>
              </div>

              <!-- Reference Number -->
              <div class="col-md-12">
                <label class="form-label fw-semibold text-dark fs-13">Reference / Transaction ID</label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  v-model="form.reference"
                  placeholder="e.g. TXN9823412"
                />
              </div>

              <!-- Date -->
              <div class="col-md-12">
                <label class="form-label fw-semibold text-dark fs-13">Payment Date</label>
                <input
                  type="date"
                  class="form-control shadow-none"
                  v-model="form.date"
                />
              </div>
            </div>
          </form>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 px-4 pb-4">
          <button type="button" class="btn btn-light fw-medium" data-bs-dismiss="modal">Cancel</button>
          <button
            type="button"
            class="btn btn-success fw-medium px-4 text-white"
            @click="submitForm"
            :disabled="isSubmitting || !canSubmit"
          >
            <LoadingIndicator :show="isSubmitting" variant="inline" size="sm" is-white />
            {{ isSubmitting ? 'Recording...' : 'Record Payment' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { message } from 'ant-design-vue'
import axiosInstance from '@/utils/axios'
import { hideModalById } from '@/utils/bootstrap'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'

const props = defineProps({
  modalId: {
    type: String,
    default: 'record_payment'
  },
  invoice: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['payment-recorded'])

const isSubmitting = ref(false)
const form = ref({
  method: '',
  amount: 0,
  reference: '',
  date: new Date().toISOString().split('T')[0]
})

watch(() => props.invoice, (newVal) => {
  if (newVal) {
    form.value.amount = newVal.amount - (newVal.amount_paid || 0)
    form.value.reference = ''
    form.value.date = new Date().toISOString().split('T')[0]
  }
}, { immediate: true })

const canSubmit = computed(() => {
  return form.value.method !== '' && form.value.amount > 0
})

const formatCurrency = (val) => {
  if (val === undefined || val === null) return '$0.00'
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)
}

const submitForm = async () => {
  try {
    isSubmitting.value = true

    const payload = {
      ...form.value,
      invoice_id: props.invoice.id
    }

    // Mock API call
    const response = await axiosInstance.post('/finance/payments', payload)
    
    message.success('Payment recorded successfully')
    emit('payment-recorded', response.data)
    
    hideModalById(props.modalId)
  } catch (error) {
    console.error('Error recording payment:', error)
    message.error('Failed to record payment')
  } finally {
    isSubmitting.value = false
  }
}
</script>
