<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-primary text-white border-0 py-3 px-4">
          <div>
            <h5 class="modal-title fw-bold text-white mb-1">Add New Prescription</h5>
            <p class="mb-0 text-white text-opacity-75 fs-13">Create a new medication prescription</p>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4">
          <form @submit.prevent="submitForm">
            <div class="row g-3">
              <!-- Patient Select (Read-only if provided) -->
              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">Patient <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control bg-light"
                  v-model="form.patient_name"
                  readonly
                  placeholder="Patient Name"
                />
              </div>

              <!-- Consultation Linkage -->
              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">Related Consultation</label>
                <select class="form-select shadow-none" v-model="form.consultation_id">
                  <option value="">Select Consultation (Optional)</option>
                  <option v-for="cons in consultationOptions" :key="cons.id" :value="cons.id">
                    Consultation #{{ cons.id }} - {{ formatDate(cons.created_at) }}
                  </option>
                </select>
              </div>

              <hr class="my-4" />
              <h6 class="fw-bold mb-0">Medication Details</h6>

              <!-- Medication Name -->
              <div class="col-md-12">
                <label class="form-label fw-semibold text-dark fs-13">Medication Name <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  v-model="form.medication_name"
                  placeholder="e.g. Amoxicillin 500mg"
                  required
                />
              </div>

              <!-- Dosage -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-dark fs-13">Dosage <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  v-model="form.dosage"
                  placeholder="e.g. 1 tablet"
                  required
                />
              </div>

              <!-- Frequency -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-dark fs-13">Frequency <span class="text-danger">*</span></label>
                <select class="form-select shadow-none" v-model="form.frequency" required>
                  <option value="">Select Frequency</option>
                  <option value="Once daily (OD)">Once daily (OD)</option>
                  <option value="Twice daily (BD)">Twice daily (BD)</option>
                  <option value="Thrice daily (TDS)">Thrice daily (TDS)</option>
                  <option value="Four times daily (QDS)">Four times daily (QDS)</option>
                  <option value="Every 4 hours">Every 4 hours</option>
                  <option value="Every 6 hours">Every 6 hours</option>
                  <option value="As needed (PRN)">As needed (PRN)</option>
                </select>
              </div>

              <!-- Route -->
              <div class="col-md-4">
                <label class="form-label fw-semibold text-dark fs-13">Route <span class="text-danger">*</span></label>
                <select class="form-select shadow-none" v-model="form.route" required>
                  <option value="Oral">Oral</option>
                  <option value="Intravenous (IV)">Intravenous (IV)</option>
                  <option value="Intramuscular (IM)">Intramuscular (IM)</option>
                  <option value="Subcutaneous">Subcutaneous</option>
                  <option value="Topical">Topical</option>
                  <option value="Inhalation">Inhalation</option>
                  <option value="Rectal">Rectal</option>
                </select>
              </div>

              <!-- Duration -->
              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">Duration <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  v-model="form.duration"
                  placeholder="e.g. 7 days"
                  required
                />
              </div>

              <!-- Instructions -->
              <div class="col-12">
                <label class="form-label fw-semibold text-dark fs-13">Special Instructions</label>
                <textarea
                  class="form-control shadow-none"
                  v-model="form.instructions"
                  placeholder="e.g. Take after meals"
                  rows="2"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 px-4 pb-4">
          <button type="button" class="btn btn-light fw-medium" data-bs-dismiss="modal">Cancel</button>
          <button
            type="button"
            class="btn btn-primary fw-medium px-4"
            @click="submitForm"
            :disabled="isSubmitting || !canSubmit"
          >
            <LoadingIndicator :show="isSubmitting" variant="inline" size="sm" message="" />
            {{ isSubmitting ? 'Saving...' : 'Save Prescription' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { message } from 'ant-design-vue'
import axiosInstance from '@/utils/axios'
import { hideModalById } from '@/utils/bootstrap'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'

const props = defineProps({
  modalId: {
    type: String,
    default: 'add_prescription'
  },
  patient: {
    type: Object,
    default: () => ({})
  },
  consultationOptions: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['prescription-created'])

const isSubmitting = ref(false)
const form = ref({
  patient_id: props.patient?.id || '',
  patient_name: props.patient?.full_name || '',
  consultation_id: '',
  medication_name: '',
  dosage: '',
  frequency: '',
  route: 'Oral',
  duration: '',
  instructions: ''
})

const canSubmit = computed(() => {
  return form.value.medication_name.trim() !== '' && 
         form.value.dosage.trim() !== '' && 
         form.value.frequency !== '' && 
         form.value.duration.trim() !== ''
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString()
}

const resetForm = () => {
  form.value = {
    patient_id: props.patient?.id || '',
    patient_name: props.patient?.full_name || '',
    consultation_id: '',
    medication_name: '',
    dosage: '',
    frequency: '',
    route: 'Oral',
    duration: '',
    instructions: ''
  }
}

const submitForm = async () => {
  try {
    if (!canSubmit.value) {
      message.warning('Please fill in all required fields')
      return
    }

    isSubmitting.value = true

    const payload = {
      patient_id: form.value.patient_id,
      consultation_id: form.value.consultation_id || null,
      items: [
        {
          medication: form.value.medication_name,
          dosage: form.value.dosage,
          frequency: form.value.frequency,
          route: form.value.route,
          duration: form.value.duration,
          instructions: form.value.instructions
        }
      ]
    }

    const response = await axiosInstance.post('/prescriptions', payload)
    
    message.success('Prescription created successfully')
    emit('prescription-created', response.data)
    
    hideModalById(props.modalId)
    resetForm()
  } catch (error) {
    console.error('Error creating prescription:', error)
    message.error('Failed to create prescription')
  } finally {
    isSubmitting.value = false
  }
}

defineExpose({ resetForm })
</script>
