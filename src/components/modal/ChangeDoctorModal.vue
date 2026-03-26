<template>
  <Transition name="modal">
    <div v-if="visible" class="modal-overlay" @click="handleOverlayClick">
      <div class="modal-dialog modal-dialog-centered modal-lg" @click.stop>
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header border-0 px-4 py-3 bg-primary text-white">
            <div class="d-flex align-items-center">
              <div class="bg-white bg-opacity-25 rounded-circle p-2 me-3 d-flex align-items-center justify-content-center">
                <i class="ti ti-user-switch text-white fs-18"></i>
              </div>
              <div>
                <h5 class="modal-title fw-bold mb-0 text-white">{{ title }}</h5>
                <small class="text-white text-opacity-75" v-if="subtitle">{{ subtitle }}</small>
              </div>
            </div>
            <button type="button" class="btn-close btn-close-white" @click="closeModal" aria-label="Close"></button>
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

            <!-- Current Doctor Info -->
            <div class="bg-info bg-opacity-10 rounded-3 p-3 mb-4">
              <div class="d-flex align-items-center">
                <div class="bg-info rounded-circle p-2 me-3">
                  <i class="ti ti-user-check text-white fs-16"></i>
                </div>
                <div>
                  <h6 class="mb-1 fw-semibold text-info">Current Doctor</h6>
                  <p class="mb-0 text-muted">
                    {{ currentDoctor.name }} - {{ currentDoctor.designation }}
                  </p>
                </div>
              </div>
            </div>

            <div class="row g-3">
              <!-- New Doctor Selection -->
              <div class="col-12">
                <label class="form-label fw-semibold mb-2">
                  <i class="ti ti-user-plus me-2 text-primary"></i>
                  Select New Doctor
                </label>
                <select
                  v-model="selectedDoctorId"
                  class="form-select border-2"
                  :disabled="loading"
                  style="height: 42px"
                >
                  <option value="">Choose a doctor...</option>
                  <option v-for="doctor in availableDoctors" :key="doctor.id" :value="doctor.id">
                    {{ doctor.full_name || doctor.name }} -
                    {{ doctor.designation || doctor.specialization }}
                  </option>
                </select>
                <div v-if="validationError" class="text-danger mt-1 fs-13">
                  {{ validationError }}
                </div>
              </div>

              <!-- Selected Doctor Preview -->
              <div v-if="selectedDoctor" class="col-12">
                <div class="bg-success bg-opacity-10 rounded-3 p-3">
                  <h6 class="mb-2 fw-semibold text-success">
                    <i class="ti ti-arrow-right me-1"></i>Transferring to:
                  </h6>
                  <div class="d-flex align-items-center">
                    <img
                      :src="selectedDoctor.avatar || defaultDoctorAvatar"
                      :alt="selectedDoctor.full_name || selectedDoctor.name"
                      class="rounded-circle me-3"
                      width="40"
                      height="40"
                      @error="handleImageError"
                    />
                    <div>
                      <h6 class="mb-1 fw-semibold">
                        {{ selectedDoctor.full_name || selectedDoctor.name }}
                      </h6>
                      <p class="mb-0 text-muted fs-13">
                        {{ selectedDoctor.designation || selectedDoctor.specialization }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Transfer Reason -->
              <div class="col-12">
                <label class="form-label fw-semibold mb-2">
                  <i class="ti ti-message-circle me-2 text-primary"></i>
                  Transfer Reason (Optional)
                </label>
                <textarea
                  v-model="transferReason"
                  class="form-control border-2"
                  rows="3"
                  placeholder="Enter reason for transfer..."
                  :disabled="loading"
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
                @click="handleTransfer"
                :disabled="!selectedDoctorId || loading"
              >
                <LoadingIndicator
                  :show="loading"
                  variant="inline"
                  size="sm"
                  message=""
                  ariaLabel="Transferring..."
                />
                <i v-if="!loading" class="ti ti-check me-2"></i>
                {{ loading ? 'Transferring...' : 'Transfer Appointment' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, computed, watch, onUnmounted } from 'vue'
import { useStaffStore } from '@/stores/staffStore'
import { message } from 'ant-design-vue'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'

// Static imports for default avatars
import patientDefaultAvatar from '@/assets/img/users/avatar-2.jpg'

export default {
  name: 'ChangeDoctorModal',
  components: { LoadingIndicator },
  props: {
    title: {
      type: String,
      default: 'Transfer Appointment',
    },
    subtitle: {
      type: String,
      default: 'Change the assigned doctor for this appointment',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    appointment: {
      type: Object,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:visible', 'save'],
  setup(props, { emit }) {
    const staffStore = useStaffStore()

    // Reactive data
    const selectedDoctorId = ref('')
    const transferReason = ref('')
    const validationError = ref('')

    // Default avatar for doctors
    const defaultDoctorAvatar = '/src/assets/img/doctors/doctor-03.jpg'

    // Computed properties
    const currentDoctor = computed(() => {
      return {
        id: props.appointment.staff_id || props.appointment.doctor_id,
        name: props.appointment.staff_name || props.appointment.doctor_name || 'Unknown Doctor',
        designation:
          props.appointment.designation ||
          props.appointment.doctor_specialization ||
          'Healthcare Provider',
      }
    })

    const availableDoctors = computed(() => {
      return staffStore.staffList.filter(
        (doctor) => doctor.id !== currentDoctor.value.id && doctor.status !== 'inactive'
      )
    })

    const selectedDoctor = computed(() => {
      if (!selectedDoctorId.value) return null
      return availableDoctors.value.find((doctor) => doctor.id === selectedDoctorId.value)
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

    // Watch for modal state changes to handle body scroll
    watch(
      () => props.visible,
      (isOpen) => {
        if (isOpen) {
          document.body.style.overflow = 'hidden'
          document.body.classList.add('modal-open')
          document.addEventListener('keydown', handleEscapeKey)
          loadDoctors()
        } else {
          document.body.style.overflow = ''
          document.body.classList.remove('modal-open')
          document.removeEventListener('keydown', handleEscapeKey)
          resetForm()
        }
      }
    )

    // Watch for changes in selected doctor to clear validation
    watch(selectedDoctorId, () => {
      validationError.value = ''
    })

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

    // Methods
    const resetForm = () => {
      selectedDoctorId.value = ''
      transferReason.value = ''
      validationError.value = ''
    }

    const loadDoctors = async () => {
      try {
        await staffStore.fetchAllStaff()
      } catch (error) {
        console.error('Error loading doctors:', error)
        message.error('Failed to load doctors list')
      }
    }

    const validateForm = () => {
      if (!selectedDoctorId.value) {
        validationError.value = 'Please select a doctor to transfer to.'
        return false
      }
      return true
    }

    const handleTransfer = async () => {
      if (!validateForm()) return

      const transferData = {
        staff_id: selectedDoctorId.value,
        doctor_id: selectedDoctorId.value,
        staff_name: selectedDoctor.value.full_name || selectedDoctor.value.name,
        designation: selectedDoctor.value.designation || selectedDoctor.value.specialization,
        transfer_reason: transferReason.value || null,
        transferred_at: new Date().toISOString(),
        transferred_from: currentDoctor.value.id,
      }

      // Emit the save event with the transfer data
      emit('save', {
        appointmentId: props.appointment.id,
        newDoctor: selectedDoctor.value,
        transferData: transferData,
        reason: transferReason.value,
      })
    }

    const closeModal = () => {
      emit('update:visible', false)
    }

    const handleImageError = (event) => {
      event.target.src = defaultDoctorAvatar
    }

    // Cleanup on unmount
    onUnmounted(() => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    })

    return {
      selectedDoctorId,
      transferReason,
      validationError,
      defaultDoctorAvatar,
      currentDoctor,
      availableDoctors,
      selectedDoctor,
      patientInfo,
      handleOverlayClick,
      handleTransfer,
      closeModal,
      handleImageError,
      resetForm,
    }
  },
}
</script>

<style>
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

/* Utility classes */
.fs-13 {
  font-size: 0.8125rem !important;
}

.fs-16 {
  font-size: 1rem !important;
}

.fs-18 {
  font-size: 1.125rem !important;
}

.fw-semibold {
  font-weight: 600 !important;
}

.fw-bold {
  font-weight: 700 !important;
}

.text-success {
  color: #198754 !important;
}

.text-danger {
  color: #dc3545 !important;
}

.text-muted {
  color: #6c757d !important;
}

.text-info {
  color: #0dcaf0 !important;
}

.bg-opacity-10 {
  --bs-bg-opacity: 0.1;
}

.rounded-circle {
  border-radius: 50% !important;
}

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
}
</style>
