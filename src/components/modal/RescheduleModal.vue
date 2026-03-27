<template>
  <Transition name="modal">
    <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
      <div class="modal-dialog modal-dialog-centered modal-lg" @click.stop>
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header bg-light border-0 px-4 py-3">
            <div class="d-flex align-items-center">
              <div class="bg-primary rounded-circle p-2 me-3">
                <i class="ti ti-calendar-clock text-white fs-18"></i>
              </div>
              <div>
                <h5 class="modal-title fw-bold mb-0">{{ title }}</h5>
                <small class="text-muted">{{ subtitle }}</small>
              </div>
            </div>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>

          <div class="modal-body px-4 py-3">
            <!-- Patient Info Card -->
            <div class="bg-light rounded-3 p-3 mb-3 patient-info">
              <div class="d-flex align-items-center">
                <div class="avatar avatar-sm me-3">
                  <img
                    :src="patientInfo.avatar"
                    :alt="patientInfo.name"
                    class="rounded-circle"
                    width="35"
                    height="35"
                  />
                </div>
                <div class="flex-grow-1">
                  <h6 class="mb-1 fw-semibold">{{ patientInfo.name }}</h6>
                  <div class="d-flex align-items-center gap-3 flex-wrap">
                    <small class="text-muted">
                      <i class="ti ti-phone me-1"></i>
                      {{ patientInfo.phone }}
                    </small>
                    <small v-if="patientInfo.opdNumber" class="text-primary fw-medium">
                      <i class="ti ti-hash"></i>
                      {{ patientInfo.opdNumber }}
                    </small>
                    <small v-else class="text-info fw-medium">
                      <i class="ti ti-calendar me-1"></i>
                      ID: {{ appointment?.id || 'N/A' }}
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-3">
              <!-- Date Selection -->
              <div class="col-md-12">
                <label class="form-label fw-semibold mb-2">
                  <i class="ti ti-calendar me-2 text-primary"></i>
                  Appointment Date
                </label>
                <input
                  type="date"
                  class="form-control border-2"
                  v-model="formData.date"
                  :min="minDate"
                  style="height: 42px"
                />
              </div>

              <!-- Service Selection with Vue Multiselect -->
              <div class="col-12">
                <label class="form-label fw-semibold mb-2">
                  <i class="ti ti-medical-cross me-2 text-primary"></i>
                  Service
                </label>
                <multiselect
                  v-model="formData.selectedService"
                  :options="services"
                  :searchable="true"
                  :close-on-select="true"
                  :show-labels="false"
                  placeholder="Search and select a service..."
                  label="name"
                  track-by="id"
                  :loading="servicesLoading"
                  :disabled="servicesLoading"
                  class="custom-multiselect"
                  :class="{ 'multiselect-loading': servicesLoading }"
                >
                  <template #singleLabel="{ option }">
                    <div class="d-flex align-items-center">
                      <div
                        class="bg-primary rounded-circle p-1 me-2"
                        style="width: 8px; height: 8px"
                      ></div>
                      <span class="fw-medium">{{ option.name }}</span>
                      <span v-if="option.code" class="badge bg-light text-dark ms-2 fs-12">{{
                        option.code
                      }}</span>
                    </div>
                  </template>

                  <template #option="{ option }">
                    <div class="d-flex align-items-center justify-content-between w-100">
                      <div>
                        <div class="fw-medium">{{ option.name }}</div>
                        <small v-if="option.description" class="text-muted">{{
                          option.description
                        }}</small>
                      </div>
                      <div class="text-end">
                        <span v-if="option.code" class="badge bg-primary fs-11">{{
                          option.code
                        }}</span>
                        <div v-if="option.price" class="text-success fw-bold fs-12">
                          ₵{{ option.price }}
                        </div>
                      </div>
                    </div>
                  </template>

                  <template #noResult>
                    <div class="text-center py-3 text-muted">
                      <i class="ti ti-search-off fs-24 mb-2"></i>
                      <div>No services found</div>
                    </div>
                  </template>

                  <template #noOptions>
                    <div class="text-center py-3 text-muted">
                      <i class="ti ti-loader fs-24 mb-2"></i>
                      <div>Loading services...</div>
                    </div>
                  </template>
                </multiselect>
              </div>

              <!-- Notes -->
              <div class="col-12">
                <label class="form-label fw-semibold mb-2">
                  <i class="ti ti-notes me-2 text-primary"></i>
                  Additional Notes
                </label>
                <textarea
                  class="form-control border-2"
                  rows="3"
                  v-model="formData.notes"
                  placeholder="Add any additional notes or special requirements..."
                  style="resize: none"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="modal-footer bg-light border-0 px-4 py-3">
            <div class="d-flex gap-2 w-100">
              <button
                type="button"
                class="btn btn-outline-secondary flex-fill"
                @click="closeModal"
                :disabled="loading"
              >
                <i class="ti ti-x me-2"></i>
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary flex-fill"
                @click="saveChanges"
                :disabled="loading || !isFormValid"
              >
                <LoadingIndicator
                  :show="loading"
                  variant="inline"
                  size="sm"
                  message=""
                  ariaLabel="Saving..."
                />
                <i v-if="!loading" class="ti ti-check me-2"></i>
                {{ loading ? 'Saving...' : 'Save Changes' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { computed, ref, watch, onUnmounted } from 'vue'
import Multiselect from 'vue-multiselect'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'

// Static imports for default avatars
import patientDefaultAvatar from '@/assets/img/users/avatar-2.jpg'

export default {
  name: 'RescheduleModal',
  components: { Multiselect, LoadingIndicator },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    appointment: {
      type: Object,
      default: () => ({}),
    },
    services: {
      type: Array,
      default: () => [],
    },
    servicesLoading: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'Reschedule Appointment',
    },
    subtitle: {
      type: String,
      default: 'Update appointment date, time and service',
    },
  },
  emits: ['update:visible', 'save'],
  setup(props, { emit }) {
    const formData = ref({
      date: '',
      selectedService: null,
      duration: 30,
      priority: 'NORMAL',
      notes: '',
    })

    // Minimum date (today)
    const minDate = computed(() => {
      const today = new Date()
      return today.toISOString().split('T')[0]
    })

    // Form validation
    const isFormValid = computed(() => {
      const hasRequiredFields = formData.value.date && formData.value.selectedService

      if (!hasRequiredFields) return false

      // Check if selected date is not in the past
      const selectedDate = new Date(formData.value.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      return selectedDate >= today
    })

    // Patient info computed property
    const patientInfo = computed(() => ({
      name: props.appointment?.patient?.name || props.appointment?.patient_name || 'Patient',
      avatar:
        props.appointment?.patient?.avatar ||
        props.appointment?.patient_avatar ||
        patientDefaultAvatar,
      phone: props.appointment?.patient?.phone || props.appointment?.patient_phone || 'N/A',
      opdNumber:
        props.appointment?.patient?.opd_no ||
        props.appointment?.patient_opd_no ||
        props.appointment?.patient_id ||
        props.appointment?.appointment_number ||
        '',
    }))

    // Watch for appointment changes to initialize form
    watch(
      () => props.appointment,
      (newAppointment) => {
        if (newAppointment && Object.keys(newAppointment).length > 0) {
          const appointmentDate = newAppointment.start_date
            ? new Date(newAppointment.start_date)
            : new Date()

          formData.value = {
            date: appointmentDate.toISOString().split('T')[0],
            selectedService: newAppointment.service || null,
            duration: newAppointment.duration || 30,
            priority: newAppointment.priority || 'NORMAL',
            notes: newAppointment.notes || '',
          }
        }
      },
      { immediate: true }
    )

    // Watch for modal state changes to handle body scroll
    watch(
      () => props.visible,
      (isOpen) => {
        if (isOpen) {
          document.body.style.overflow = 'hidden'
          document.body.classList.add('modal-open')
          document.addEventListener('keydown', handleEscapeKey)
        } else {
          document.body.style.overflow = ''
          document.body.classList.remove('modal-open')
          document.removeEventListener('keydown', handleEscapeKey)
          resetForm()
        }
      }
    )

    // Handle escape key press
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    // Handle overlay click (close modal only if not in loading state)
    const handleOverlayClick = (event) => {
      if (!props.loading && event.target === event.currentTarget) {
        closeModal()
      }
    }

    const closeModal = () => {
      emit('update:visible', false)
    }

    const resetForm = () => {
      formData.value = {
        date: '',
        selectedService: null,
        duration: 30,
        priority: 'NORMAL',
        notes: '',
      }
    }

    const saveChanges = () => {
      if (isFormValid.value) {
        emit('save', {
          ...formData.value,
          appointmentId: props.appointment?.id,
        })
      }
    }

    // Cleanup on unmount
    onUnmounted(() => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    })

    return {
      formData,
      minDate,
      isFormValid,
      patientInfo,
      handleOverlayClick,
      closeModal,
      saveChanges,
      resetForm,
    }
  },
}
</script>

<style>
@import 'vue-multiselect/dist/vue-multiselect.css';

/* Modal Overlay and Transition */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 20px;
}

/* Ensure modal content has proper z-index and positioning */
.modal-dialog {
  max-width: 600px;
  width: 100%;
  margin: 0;
  position: relative;
  z-index: 1051;
}

/* Body class for modal state */
body.modal-open {
  overflow: hidden !important;
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}

.modal-enter-active .modal-dialog,
.modal-leave-active .modal-dialog {
  transition: all 0.3s ease;
}

.modal-enter-from .modal-dialog,
.modal-leave-to .modal-dialog {
  transform: translateY(-50px);
}

/* Compact Modal Content */
.modal-content {
  background: #fff;
  border-radius: 12px;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  border-bottom: 1px solid #e9ecef;
  border-radius: 12px 12px 0 0;
}

.modal-footer {
  border-top: 1px solid #e9ecef;
  border-radius: 0 0 12px 12px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .modal-overlay {
    padding: 10px;
  }

  .modal-dialog {
    max-width: 95%;
  }

  .modal-body {
    padding: 1rem 1.5rem !important;
  }

  .modal-header,
  .modal-footer {
    padding: 1rem 1.5rem !important;
  }
}

/* Custom Multiselect Styling */
.custom-multiselect .multiselect {
  min-height: 42px;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: #fff;
}

.custom-multiselect .multiselect__tags {
  min-height: 40px;
  padding: 10px 12px;
  /* border: none; */
  border: 2px solid #e9ecef;
  background: transparent;
  border-radius: 4px;
}

.custom-multiselect .multiselect__single {
  padding: 0;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: #212529;
  line-height: 1.5;
}

.custom-multiselect .multiselect__placeholder {
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #6c757d;
  line-height: 1.5;
}

.custom-multiselect .multiselect__select {
  height: 40px;
  width: 40px;
  background: transparent;
}

.custom-multiselect .multiselect__select:before {
  border-color: #6c757d transparent transparent;
  border-style: solid;
  border-width: 5px 5px 0;
  content: '';
  display: block;
  height: 0;
  margin-top: -2px;
  pointer-events: none;
  position: absolute;
  right: 15px;
  top: 50%;
  width: 0;
}

.custom-multiselect .multiselect__content-wrapper {
  border: 2px solid #e9ecef;
  border-top: none;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  max-height: 180px;
}

.custom-multiselect .multiselect__content {
  max-height: 180px;
}

.custom-multiselect .multiselect__option {
  padding: 10px 16px;
  min-height: auto;
  line-height: 1.4;
  color: #212529;
  border-bottom: 1px solid #f8f9fa;
}

.custom-multiselect .multiselect__option:last-child {
  border-bottom: none;
}

.custom-multiselect .multiselect__option--highlight {
  background: #f8f9ff;
  color: #495057;
}

.custom-multiselect .multiselect__option--selected {
  background: #e7f3ff;
  color: #0d6efd;
  font-weight: 600;
}

.custom-multiselect .multiselect__option--selected.multiselect__option--highlight {
  background: #cce7ff;
  color: #0a58ca;
}

.custom-multiselect .multiselect--above .multiselect__content-wrapper {
  border-radius: 8px 8px 0 0;
  border-bottom: none;
  border-top: 2px solid #e9ecef;
}

/* Focus state */
.custom-multiselect .multiselect--active .multiselect__tags {
  border-color: #86b7fe;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

/* Loading state */
.custom-multiselect .multiselect__spinner {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}

.custom-multiselect .multiselect__spinner:before,
.custom-multiselect .multiselect__spinner:after {
  border-color: #0d6efd;
}

.custom-multiselect.multiselect-loading .multiselect__tags {
  opacity: 0.7;
  pointer-events: none;
}

/* Form improvements */
.form-control:focus,
.form-select:focus {
  border-color: #86b7fe;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.form-label {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #495057;
}

/* Patient info improvements */
.patient-info .text-primary {
  color: #0d6efd !important;
}

.patient-info .ti-id-badge {
  font-size: 0.875rem;
}

/* Responsive patient info */
@media (max-width: 576px) {
  .patient-info .d-flex.gap-3 {
    flex-direction: column;
    gap: 0.5rem !important;
    align-items: flex-start !important;
  }

  .patient-info small {
    display: block;
  }
}

/* Button improvements */
.btn-primary {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-primary:hover {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

.btn-outline-secondary {
  color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:hover {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
</style>
