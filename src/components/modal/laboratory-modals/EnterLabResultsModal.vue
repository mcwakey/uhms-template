<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-primary text-white border-0 py-3 px-4">
          <div>
            <h5 class="modal-title fw-bold text-white mb-1">Enter Results</h5>
            <p class="mb-0 text-white text-opacity-75 fs-13">Enter results for {{ labTest?.test_name }}</p>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4">
          <form @submit.prevent="submitForm">
            <div class="row g-3">
              <!-- Patient Info (Read-only) -->
              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">Patient</label>
                <input type="text" class="form-control bg-light" :value="labTest?.patient_name" readonly />
              </div>
              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">Test</label>
                <input type="text" class="form-control bg-light" :value="labTest?.test_name" readonly />
              </div>

              <hr class="my-4" />

              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="fw-bold mb-0">Result Parameters</h6>
                <button type="button" class="btn btn-sm btn-outline-primary" @click="addParam">
                  <i class="ti ti-plus me-1"></i> Add Parameter
                </button>
              </div>

              <!-- Dynamic Parameters -->
              <div class="col-12">
                <div v-for="(param, index) in resultFields" :key="index" class="row g-2 mb-2 align-items-end">
                  <div class="col-md-5">
                    <label v-if="index === 0" class="form-label fs-12 text-muted fw-semibold">Parameter Name</label>
                    <input type="text" class="form-control" v-model="param.key" placeholder="e.g. Hemoglobin" />
                  </div>
                  <div class="col-md-6">
                    <label v-if="index === 0" class="form-label fs-12 text-muted fw-semibold">Result (with range/unit)</label>
                    <input type="text" class="form-control" v-model="param.value" placeholder="e.g. 14.2 g/dL (13.5-17.5)" />
                  </div>
                  <div class="col-md-1">
                    <button type="button" class="btn btn-sm btn-icon text-danger" @click="removeParam(index)">
                      <i class="ti ti-trash"></i>
                    </button>
                  </div>
                </div>
              </div>

              <hr class="my-4" />

              <!-- Notes and Status -->
              <div class="col-12">
                <label class="form-label fw-semibold text-dark fs-13">Technician Notes</label>
                <textarea class="form-control shadow-none" v-model="form.notes" rows="3" placeholder="Enter any observations or notes..."></textarea>
              </div>

              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">Update Status</label>
                <select class="form-select shadow-none" v-model="form.status">
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </form>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 px-4 pb-4">
          <button type="button" class="btn btn-light fw-medium" data-bs-dismiss="modal" @click="resetForm">Cancel</button>
          <button
            type="button"
            class="btn btn-primary fw-medium px-4"
            @click="submitForm"
            :disabled="isSubmitting"
          >
            <LoadingIndicator :show="isSubmitting" variant="inline" size="sm" />
            {{ isSubmitting ? 'Saving...' : 'Save Results' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { message } from 'ant-design-vue'
import axiosInstance from '@/utils/axios'
import { hideModalById } from '@/utils/bootstrap'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'

const props = defineProps({
  modalId: {
    type: String,
    default: 'enter_lab_results'
  },
  labTest: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['results-updated'])

const isSubmitting = ref(false)
const resultFields = ref([])
const form = ref({
  notes: '',
  status: 'Pending'
})

watch(() => props.labTest, (newVal) => {
  if (newVal) {
    form.value.notes = newVal.notes || ''
    form.value.status = newVal.status || 'Pending'
    
    // Map existing results object to array
    if (newVal.results && Object.keys(newVal.results).length > 0) {
      resultFields.value = Object.keys(newVal.results).map(key => ({
        key,
        value: newVal.results[key]
      }))
    } else {
      resultFields.value = [{ key: '', value: '' }]
    }
  }
}, { immediate: true })

const addParam = () => {
  resultFields.value.push({ key: '', value: '' })
}

const removeParam = (index) => {
  resultFields.value.splice(index, 1)
}

const resetForm = () => {
  if (props.labTest) {
    form.value.notes = props.labTest.notes || ''
    form.value.status = props.labTest.status || 'Pending'
  }
}

const submitForm = async () => {
  try {
    isSubmitting.value = true

    // Convert array back to object
    const resultsObj = {}
    resultFields.value.forEach(field => {
      if (field.key.trim()) {
        resultsObj[field.key] = field.value
      }
    })

    const payload = {
      results: resultsObj,
      notes: form.value.notes,
      status: form.value.status
    }

    const response = await axiosInstance.patch(`/laboratory/${props.labTest.id}`, payload)
    
    message.success('Results saved successfully')
    emit('results-updated', response.data)
    
    hideModalById(props.modalId)
  } catch (error) {
    console.error('Error saving lab results:', error)
    message.error('Failed to save results')
  } finally {
    isSubmitting.value = false
  }
}
</script>
