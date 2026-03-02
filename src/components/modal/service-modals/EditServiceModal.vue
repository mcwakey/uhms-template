<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-gradient-warning text-white border-0 py-3 px-4">
          <div class="d-flex align-items-center">
            <div>
              <h5 class="modal-title fw-bold text-white mb-1">Edit Service</h5>
              <p class="mb-0 text-white text-opacity-75 fs-13">Update service information</p>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4">
          <form class="row g-3" @submit.prevent="submitForm">
            <!-- Service Name -->
            <div class="col-md-6">
              <label class="form-label fw-semibold text-dark fs-13">Service Name <span class="text-danger">*</span></label>
              <input
                type="text"
                class="form-control shadow-none"
                v-model="form.name"
                placeholder="Enter service name"
                required
              />
            </div>

            <!-- Service Code -->
            <div class="col-md-6">
              <label class="form-label fw-semibold text-dark fs-13">Service Code</label>
              <input
                type="text"
                class="form-control shadow-none"
                v-model="form.code"
                placeholder="Enter service code"
              />
            </div>

            <!-- Description -->
            <div class="col-12">
              <label class="form-label fw-semibold text-dark fs-13">Description</label>
              <textarea
                class="form-control shadow-none"
                v-model="form.description"
                placeholder="Enter service description"
                rows="3"
              ></textarea>
            </div>

            <!-- Specialization -->
            <div class="col-md-6">
              <label class="form-label fw-semibold text-dark fs-13">Specialization</label>
              <select class="form-select shadow-none" v-model="form.specialization" :disabled="isLoadingSpecializations">
                <option value="">{{ isLoadingSpecializations ? 'Loading...' : 'Select Specialization' }}</option>
                <option v-for="spec in specializations" :key="spec.id || spec.value" :value="spec.id || spec.value">
                  {{ spec.name || spec.label }}
                </option>
              </select>
            </div>

            <!-- Status -->
            <div class="col-md-6">
              <label class="form-label fw-semibold text-dark fs-13">Status</label>
              <div class="form-check form-switch mt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="editServiceActiveStatus"
                  v-model="form.status"
                />
                <label class="form-check-label fw-medium text-dark" for="editServiceActiveStatus">
                  Active
                </label>
              </div>
            </div>

            <!-- Has Result -->
            <div class="col-md-6">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="editHasResult"
                  v-model="form.has_result"
                />
                <label class="form-check-label fw-medium text-dark" for="editHasResult">
                  Has Result
                </label>
              </div>
            </div>

            <!-- Has Stock -->
            <div class="col-md-6">
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="editHasStock"
                  v-model="form.has_stock"
                />
                <label class="form-check-label fw-medium text-dark" for="editHasStock">
                  Has Stock
                </label>
              </div>
            </div>
          </form>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 px-4 pb-4">
          <button type="button" class="btn btn-light fw-medium" data-bs-dismiss="modal">Cancel</button>
          <button
            type="button"
            class="btn btn-warning fw-medium px-4"
            @click="submitForm"
            :disabled="isSubmitting || !canSubmit"
          >
            <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
            {{ isSubmitting ? 'Updating...' : 'Update Service' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { message } from 'ant-design-vue'
import axiosInstance from '@/utils/axios'

const props = defineProps({
  modalId: {
    type: String,
    default: 'edit_service'
  },
  specializations: {
    type: Array,
    default: () => []
  },
  isLoadingSpecializations: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['service-updated'])

const isSubmitting = ref(false)
const modalRef = ref(null)
const currentServiceId = ref(null)
const currentServiceUuid = ref(null)

const form = ref({
  name: '',
  code: '',
  description: '',
  specialization: '',
  status: true,
  has_result: false,
  has_stock: false
})

const canSubmit = computed(() => {
  return form.value.name.trim() !== ''
})

const resetForm = () => {
  form.value = {
    name: '',
    code: '',
    description: '',
    specialization: '',
    status: true,
    has_result: false,
    has_stock: false
  }
  currentServiceId.value = null
  currentServiceUuid.value = null
}

const populateForm = (service) => {
  form.value = {
    name: service.name || '',
    code: service.code || '',
    description: service.description || '',
    specialization: service.specialization?.id || service.specialization || '',
    status: service.status ?? true,
    has_result: service.has_result ?? false,
    has_stock: service.has_stock ?? false
  }
  currentServiceId.value = service.id
  currentServiceUuid.value = service.uuid || service.id
}

const submitForm = async () => {
  try {
    if (!canSubmit.value) {
      message.warning('Please fill in the required fields')
      return
    }

    if (!currentServiceId.value) {
      message.error('No service selected for editing')
      return
    }

    isSubmitting.value = true

    const payload = {
      name: form.value.name,
      code: form.value.code || null,
      description: form.value.description || null,
      specialization: form.value.specialization || null,
      status: form.value.status,
      has_result: form.value.has_result,
      has_stock: form.value.has_stock
    }

    const response = await axiosInstance.patch(`/services/${currentServiceId.value}/`, payload)
    
    message.success('Service updated successfully')
    emit('service-updated', response.data)
    
    resetForm()
    
    // Close modal
    const modalElement = document.getElementById(props.modalId)
    const Bootstrap = window.bootstrap ?? window.Bootstrap
    if (modalElement && Bootstrap) {
      const modal = Bootstrap.Modal.getInstance(modalElement)
      if (modal) {
        modal.hide()
      }
    }
  } catch (error) {
    console.error('Error updating service:', error)
    message.error('Failed to update service')
  } finally {
    isSubmitting.value = false
  }
}

const open = (service) => {
  if (service) {
    populateForm(service)
  } else {
    resetForm()
  }
  
  const modalElement = document.getElementById(props.modalId)
  const Bootstrap = window.bootstrap ?? window.Bootstrap
  if (modalElement && Bootstrap) {
    const modal = new Bootstrap.Modal(modalElement)
    modal.show()
  }
}

onMounted(() => {
  // Component mounted
})

defineExpose({ open })
</script>

<style scoped>
.bg-gradient-warning {
  background: linear-gradient(135deg, #ffc107 0%, #ff8c00 100%);
}

.btn-close-white {
  filter: brightness(0) invert(1);
  opacity: 0.8;
}
.btn-close-white:hover {
  opacity: 1;
}
</style>