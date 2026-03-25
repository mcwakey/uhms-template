<template>
  <div
    :id="canvasId"
    class="offcanvas offcanvas-end appointment-details-canvas"
    tabindex="-1"
    aria-labelledby="appointmentDetailsLabel"
  >
    <div class="offcanvas-header border-bottom bg-light py-2">
      <h6
        id="appointmentDetailsLabel"
        class="offcanvas-title fw-bold d-flex align-items-center mb-0"
      >
        <i class="ti ti-calendar-event me-2 text-primary fs-16"></i>
        Appointment Details
      </h6>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>

    <div class="offcanvas-body p-0">
      <div v-if="loading" class="d-flex justify-content-center align-items-center h-100">
        <div class="text-center">
          <div class="spinner-border text-primary mb-3" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p class="text-muted">Loading appointment details...</p>
        </div>
      </div>

      <div v-else-if="appointment?.id" class="h-100 d-flex flex-column">
        <div
          :class="[
            'status-header text-white p-3 position-relative overflow-hidden',
            getStatusColorClass(appointment.status),
          ]"
        >
          <div class="position-absolute top-0 start-0 w-100 h-100 opacity-10">
            <div class="animated-pattern"></div>
          </div>

          <div class="position-absolute top-0 end-0 opacity-25 me-2 mt-1">
            <i :class="getStatusIcon(appointment.status)" style="font-size: 2.5rem"></i>
          </div>
          <div class="position-relative">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <span class="badge bg-white bg-opacity-25 text-white fs-13 px-2 py-1 rounded-pill">
                #{{ appointment.appointment_number || 'N/A' }}
              </span>
              <span
                :class="[
                  'badge fs-13 px-2 py-1 rounded-pill fw-medium',
                  getStatusBadgeClass(appointment.status),
                ]"
              >
                {{ formatStatus(appointment.status) }}
              </span>
            </div>
            <h5 class="fw-bold fs-22 text-white shadow-sm mb-4">
              {{ appointment.service?.name || 'No Service' }}
            </h5>
            <div class="d-flex align-items-center gap-2 text-white-50 fs-14">
              <i class="ti ti-calendar-event"></i>
              <span>{{ formatDate(appointment.start_date) }}</span>
              <i class="ti ti-clock ms-2"></i>
              <span>{{ formatTime(appointment.start_time) }} - {{ formatTime(appointment.end_time) }}</span>
            </div>
          </div>
        </div>

        <div class="flex-grow-1 overflow-auto">
          <div class="p-3 border-bottom">
            <h6 class="fw-bold mb-2 text-primary fs-15">
              <i class="ti ti-user me-1"></i>Patient Information
            </h6>
            <div class="d-flex align-items-center">
              <div class="me-2">
                <img
                  :src="appointment.patient_avatar || '/src/assets/img/users/avatar-2.jpg'"
                  :alt="appointment.patient_name"
                  class="rounded-circle object-fit-cover"
                  width="45"
                  height="45"
                  @error="handleImageError"
                />
              </div>
              <div class="flex-grow-1">
                <h6 class="mb-1 fw-semibold fs-15">
                  {{ appointment.patient_name || 'Unknown Patient' }}
                </h6>
                <p class="text-muted mb-1 fs-13">
                  <i class="ti ti-hash me-1"></i>{{ appointment.patient.opd_no || 'N/A' }}
                </p>
                <div class="d-flex gap-3 fs-13">
                  <span v-if="appointment.patient_phone" class="text-muted">
                    <i class="ti ti-phone me-1"></i>{{ appointment.patient_phone }}
                  </span>
                  <span v-if="appointment.patient_email" class="text-muted">
                    <i class="ti ti-mail me-1"></i>{{ appointment.patient_email }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-3 border-bottom">
            <h6 class="fw-bold mb-2 text-success fs-15">
              <i class="ti ti-user-check me-1"></i>Doctor / Staff Information
            </h6>
            <div class="d-flex align-items-center">
              <div class="me-2">
                <img
                  :src="appointment.doctor_avatar || '/src/assets/img/doctors/doctor-03.jpg'"
                  :alt="appointment.staff_name"
                  class="rounded-circle object-fit-cover"
                  width="45"
                  height="45"
                  @error="handleImageError"
                />
              </div>
              <div class="flex-grow-1">
                <h6 class="mb-1 fw-semibold fs-15">
                  {{ appointment.staff_name || 'Unknown Staff' }}
                </h6>
                <p class="text-muted mb-0 fs-13">
                  {{ appointment.designation || 'Healthcare Provider' }}
                </p>
              </div>
            </div>
            <div class="mt-2 d-flex gap-1 justify-content-center">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
                title="Send Message"
                @click="handleSendMessage"
              >
                <i class="ti ti-message"></i>
              </button>
              <button
                v-if="isActiveAppointment(appointment.status)"
                type="button"
                class="btn btn-sm btn-outline-secondary"
                @click="handleTransferDoctor"
                title="Transfer Appointment"
              >
                <i class="ti ti-transfer"></i>
              </button>
            </div>
          </div>

          <div class="p-3 border-bottom">
            <h6 class="fw-bold mb-2 text-info fs-15">
              <i class="ti ti-info-circle me-1"></i>Appointment Details
            </h6>
            <div class="row g-2">
              <div class="col-12">
                <div class="detail-item py-2 px-3">
                  <label class="text-muted fs-12 mb-1">Mode</label>
                  <div class="d-flex align-items-center">
                    <i
                      :class="[
                        'me-2',
                        appointment.type
                          ? 'ti ti-video text-primary'
                          : 'ti ti-building-hospital text-success',
                      ]"
                    ></i>
                    <span class="fw-medium fs-14">{{ appointment.mode || (appointment.type ? 'Online' : 'In-Person') }}</span>
                  </div>
                </div>
              </div>
              <div class="col-12" v-if="isActiveAppointment(appointment.status)">
                <div class="detail-item py-2 px-3">
                  <label class="text-muted fs-12 mb-1">Telehealth Options</label>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      :id="`telehealth-${canvasId}`"
                      :checked="isTelehealthEnabled"
                      @change="handleTelehealthToggle"
                    />
                    <label class="form-check-label fw-medium fs-14" :for="`telehealth-${canvasId}`">
                      Enable Telehealth
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-3" v-if="!isActiveAppointment(appointment.status)">
            <div
              :class="[
                'alert border-0 mb-0 d-flex align-items-center py-2',
                getStatusAlertClass(appointment.status),
              ]"
            >
              <i :class="[getStatusIcon(appointment.status), 'me-2']"></i>
              <span class="fw-medium fs-14">{{ getStatusMessage(appointment.status) }}</span>
            </div>
          </div>
        </div>

        <div v-if="isConsultation">
          <div v-if="isActiveAppointment(appointment.status)" class="border-top p-3 bg-light">
            <div class="d-flex flex-column gap-2">
              <div class="text-center">
                <RouterLink
                  :to="{
                    name: isTelehealthEnabled ? 'PatientTelehealth' : 'PatientConsultation',
                    params: { id: appointment.id },
                  }"
                  :class="[
                    'btn fw-medium fs-16 w-100 position-relative overflow-hidden',
                    appointment.status === 'IN-PROGRESS' ? 'btn-warning' : 'btn-primary',
                  ]"
                  @click="handleRouterNavigation"
                >
                  <span class="position-relative z-1">
                    <i
                      :class="[
                        'me-2',
                        appointment.status === 'IN-PROGRESS'
                          ? 'ti ti-clock'
                          : isTelehealthEnabled
                            ? 'ti ti-video'
                            : 'ti ti-player-play',
                      ]"
                    ></i>
                    {{ appointment.status === 'IN-PROGRESS' ? 'In Progress' : 'Start Appointment' }}
                  </span>
                  <div
                    v-if="appointment.status === 'IN-PROGRESS'"
                    class="position-absolute top-0 start-0 w-100 h-100 bg-warning opacity-25 pulse-animation"
                  ></div>
                </RouterLink>
              </div>

              <div class="row g-2">
                <div class="col-6">
                  <button
                    type="button"
                    class="btn btn-outline-warning w-100 d-flex align-items-center justify-content-center btn-sm"
                    @click="handleReschedule"
                    :disabled="appointment.status === 'IN-PROGRESS'"
                  >
                    <i class="ti ti-calendar-time me-1"></i>
                    <span class="d-none d-sm-inline">Reschedule</span>
                    <span class="d-sm-none">Resched.</span>
                  </button>
                </div>
                <div class="col-6">
                  <button
                    type="button"
                    class="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center btn-sm"
                    @click="handleCancel"
                    :disabled="appointment.status === 'IN-PROGRESS'"
                  >
                    <i class="ti ti-x me-1"></i>
                    <span class="d-none d-sm-inline">Cancel</span>
                    <span class="d-sm-none">Cancel</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="d-flex justify-content-center align-items-center h-100">
        <div class="text-center">
          <div class="mb-4">
            <i class="ti ti-calendar-off" style="font-size: 4rem; color: #dee2e6"></i>
          </div>
          <h6 class="text-muted mb-2">No Appointment Selected</h6>
          <p class="text-muted fs-14">Select an appointment to view details</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { useAuthStore } from '@/stores/authStore.js'
import { hideOffcanvasById } from '@/utils/bootstrap'

export default {
  name: 'AppointmentDetailsCanvas',
  props: {
    appointment: {
      type: Object,
      default: () => ({}),
    },
    canvasId: {
      type: String,
      default: 'appointment_details_canvas',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    isTelehealthEnabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'update-status',
    'reschedule',
    'toggle-telehealth',
    'view-history',
    'send-message',
    'doctor-changed',
    'transfer-doctor',
  ],
  setup(props, { emit }) {
    const isActiveAppointment = (status) => {
      return ['SCHEDULED', 'RESCHEDULED', 'CHECKED-IN', 'IN-PROGRESS'].includes(status)
    }

    const isConsultation = useAuthStore().isConsultation

    const getStatusColorClass = (status) => {
      const statusClasses = {
        SCHEDULED: 'bg-primary',
        RESCHEDULED: 'bg-primary',
        'CHECKED-IN': 'bg-secondary',
        'IN-PROGRESS': 'bg-warning',
        COMPLETED: 'bg-success',
        DONE: 'bg-success',
        CANCELLED: 'bg-danger',
      }
      return statusClasses[status] || 'bg-primary'
    }

    const getStatusBadgeClass = (status) => {
      const badgeClasses = {
        SCHEDULED: 'bg-white bg-opacity-25 text-white',
        RESCHEDULED: 'bg-white bg-opacity-25 text-white',
        'IN-PROGRESS': 'bg-white bg-opacity-25 text-white',
        COMPLETED: 'bg-white bg-opacity-25 text-white',
        CANCELLED: 'bg-white bg-opacity-25 text-white',
      }
      return badgeClasses[status] || 'bg-white bg-opacity-25 text-white'
    }

    const getStatusAlertClass = (status) => {
      const alertClasses = {
        COMPLETED: 'alert-success',
        DONE: 'alert-success',
        CANCELLED: 'alert-danger',
        'IN-PROGRESS': 'alert-warning',
      }
      return alertClasses[status] || 'alert-info'
    }

    const getStatusIcon = (status) => {
      const iconClasses = {
        SCHEDULED: 'ti ti-calendar-check',
        RESCHEDULED: 'ti ti-calendar-time',
        'IN-PROGRESS': 'ti ti-clock',
        COMPLETED: 'ti ti-check-circle',
        DONE: 'ti ti-check-circle',
        CANCELLED: 'ti ti-x-circle',
      }
      return iconClasses[status] || 'ti ti-calendar-event'
    }

    const getStatusMessage = (status) => {
      const messages = {
        COMPLETED: 'This appointment has been completed successfully.',
        DONE: 'This appointment has been completed successfully.',
        CANCELLED: 'This appointment has been cancelled.',
        'IN-PROGRESS': 'This appointment is currently in progress.',
      }
      return messages[status] || 'Appointment status updated.'
    }

    const formatStatus = (status) => {
      if (!status) return 'Unknown'
      return status
        .replace('_', ' ')
        .toLowerCase()
        .replace(/\b\w/g, (l) => l.toUpperCase())
    }

    const formatDate = (date) => {
      if (!date) return '-'
      return dayjs(date).format('MMM DD, YYYY')
    }

    const formatTime = (time) => {
      if (!time) return '-'
      return dayjs(time, 'HH:mm:ss').format('h:mm A')
    }

    const handleRouterNavigation = () => {
      hideOffcanvasById(props.canvasId)
    }

    const handleImageError = (event) => {
      event.target.style.display = 'none'
      event.target.src =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMzAiIGZpbGw9IiNFNUU3RUIiLz4KPHN2ZyB4PSIyMCIgeT0iMjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2QjcyODAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KPHBhdGggZD0iTTIwIDIxdi0yYTQgNCAwIDAgMC00LTRIOGE0IDQgMCAwIDAtNCA0djIiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+Cjwvc3ZnPgo8L3N2Zz4K'
    }

    const handleStartAppointment = () => {
      emit('update-status', 'SCHEDULED')
    }

    const handleReschedule = () => {
      emit('reschedule', props.appointment)
    }

    const handleCancel = () => {
      if (confirm('Are you sure you want to cancel this appointment?')) {
        emit('update-status', 'CANCELLED')
      }
    }

    const handleTelehealthToggle = (event) => {
      emit('toggle-telehealth', event.target.checked)
    }

    const handleViewHistory = () => {
      emit('view-history', props.appointment)
    }

    const handleSendMessage = () => {
      emit('send-message', props.appointment)
    }

    const handlePrintDetails = () => {
      window.print()
    }

    const handleTransferDoctor = () => {
      emit('transfer-doctor', props.appointment)
    }

    return {
      isActiveAppointment,
      getStatusColorClass,
      getStatusBadgeClass,
      getStatusAlertClass,
      getStatusIcon,
      getStatusMessage,
      formatStatus,
      formatDate,
      formatTime,
      handleImageError,
      handleStartAppointment,
      handleReschedule,
      handleCancel,
      handleTelehealthToggle,
      handleViewHistory,
      handleSendMessage,
      handlePrintDetails,
      isConsultation,
      handleTransferDoctor,
      handleRouterNavigation,
    }
  },
}
</script>

<style scoped>
.appointment-details-canvas {
  width: 350px;
}

.appointment-details-canvas .offcanvas-body {
  padding: 0;
}

.status-header {
  background: linear-gradient(135deg, var(--bs-primary) 0%, var(--bs-primary-dark, #0056b3) 100%);
  position: relative;
}

.status-header.bg-secondary {
  background: linear-gradient(135deg, var(--bs-secondary) 0%, var(--bs-secondary-dark, #545862) 100%);
}

.status-header.bg-warning {
  background: linear-gradient(135deg, var(--bs-warning) 0%, var(--bs-warning-dark, #e0a800) 100%);
}

.status-header.bg-success {
  background: linear-gradient(135deg, var(--bs-success) 0%, var(--bs-success-dark, #146c43) 100%);
}

.status-header.bg-danger {
  background: linear-gradient(135deg, var(--bs-danger) 0%, var(--bs-danger-dark, #b02a37) 100%);
}

.detail-item {
  padding: 0.5rem;
  background: #f8f9fa;
  border-radius: 0.25rem;
  border-left: 3px solid var(--bs-primary);
}

.detail-item label {
  display: block;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
}

.btn-xs {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.alert {
  border-radius: 0.375rem;
  font-size: 0.875rem;
}

.object-fit-cover {
  object-fit: cover;
}

.fs-12 {
  font-size: 0.75rem;
}

.fs-13 {
  font-size: 0.8125rem;
}

.fs-14 {
  font-size: 0.875rem;
}

.fs-15 {
  font-size: 0.9375rem;
}

.fs-16 {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .appointment-details-canvas {
    width: 100%;
  }
}

.form-check-input:checked {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
}

.spinner-border {
  width: 3rem;
  height: 3rem;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.btn:active {
  transform: translateY(0);
}

.btn {
  transition: all 0.2s ease-in-out;
}

.detail-item {
  transition: background-color 0.2s ease-in-out;
}

.detail-item:hover {
  background-color: #e9ecef;
}

.animated-pattern {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%),
    linear-gradient(-45deg, transparent 40%, rgba(255, 255, 255, 0.05) 50%, transparent 60%);
  background-size: 20px 20px;
  animation: slidePattern 10s linear infinite;
}

@keyframes slidePattern {
  0% {
    background-position:
      0 0,
      0 0;
  }
  100% {
    background-position:
      20px 20px,
      -20px 20px;
  }
}

.detail-item {
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.detail-item:hover {
  background-color: #fff;
  border-color: var(--bs-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.rounded-circle {
  transition: transform 0.2s ease;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.rounded-circle:hover {
  transform: scale(1.05);
}

.badge {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}

.overflow-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-auto::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 10px;
}

.overflow-auto::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.alert {
  border-left: 4px solid;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9);
}

.alert-success {
  border-left-color: var(--bs-success);
}

.alert-warning {
  border-left-color: var(--bs-warning);
}

.alert-danger {
  border-left-color: var(--bs-danger);
}

.form-check-input {
  cursor: pointer;
  transition: all 0.2s ease;
}

.form-check-label {
  cursor: pointer;
  transition: color 0.2s ease;
}

.form-check-input:checked + .form-check-label {
  color: var(--bs-primary);
}

.spinner-border {
  background: linear-gradient(45deg, var(--bs-primary), var(--bs-primary-dark, #0056b3));
  border-radius: 50%;
  animation:
    spin 1s linear infinite,
    pulse 2s ease-in-out infinite;
}

@media (max-width: 576px) {
  .fs-12 {
    font-size: 0.7rem;
  }

  .fs-13 {
    font-size: 0.75rem;
  }

  .fs-14 {
    font-size: 0.8rem;
  }

  .fs-15 {
    font-size: 0.85rem;
  }

  .btn {
    padding: 0.375rem 0.75rem;
    font-size: 0.8rem;
  }

  .btn-xs {
    padding: 0.2rem 0.4rem;
    font-size: 0.7rem;
  }
}
</style>
