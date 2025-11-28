<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0 pb-2 bg-gradient-primary text-white">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <div
                class="avatar avatar-sm bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center"
              >
                <i class="ti ti-calendar-plus fs-5 text-white"></i>
              </div>
            </div>
            <div>
              <h5 class="fw-bold modal-title mb-0 text-white fs-16">{{ modalTitle }}</h5>
              <p class="mb-0 fs-12 text-white opacity-75" v-if="selectedPatient">
                {{ selectedPatient.full_name }}
              </p>
            </div>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body p-3">
          <!-- Loading State -->
          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary mb-3" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="text-muted">Loading appointment form...</p>
          </div>

          <!-- Modal Content -->
          <div v-else>
            <!-- Patient Info Card -->
            <div class="card bg-light border-0 mb-3" v-if="selectedPatient">
              <div class="card-body p-2">
                <div class="d-flex align-items-center">
                  <div class="me-2">
                    <div
                      class="avatar avatar-xs bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-user text-primary fs-6"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-0 fw-bold text-dark fs-14">{{ selectedPatient.full_name }}</h6>
                    <div class="d-flex align-items-center gap-2 text-muted fs-11">
                      <span>OPD: {{ selectedPatient.opd_no }}</span>
                      <span v-if="selectedPatient.phone">{{ selectedPatient.phone }}</span>
                      <span v-if="selectedPatient.age"
                        >{{ selectedPatient.age?.value
                        }}{{ selectedPatient.age?.unit?.charAt(0) }} old</span
                      >
                    </div>
                  </div>
                  <div class="text-end">
                    <span class="badge bg-success bg-opacity-10 text-success fs-10 px-2 py-1">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <form class="row g-3">
              <!-- Basic Appointment Details -->
              <div class="col-12">
                <div class="card border-0">
                  <div class="card-body pt-1 pb-2">
                    <div class="row g-2">
                      <div class="col-md-6">
                        <label class="form-label mb-1 fw-medium fs-13">
                          Date of Appointment<span class="text-danger ms-1">*</span>
                        </label>
                        <a-date-picker
                          v-model:value="appointmentForm.date"
                          class="form-control"
                          placeholder="Select date"
                          :disabled-date="(current) => current && current < dayjs().startOf('day')"
                          size="default"
                        />
                      </div>

                      <div class="col-md-6">
                        <label class="form-label mb-1 fw-medium fs-13"> Appointment Type </label>
                        <div class="appointment-type-toggle mt-1">
                          <div class="btn-group w-100" role="group">
                            <input
                              type="radio"
                              class="btn-check"
                              name="appointmentType"
                              id="serviceType"
                              :checked="!appointmentForm.type"
                              @change="appointmentForm.type = false"
                            />
                            <label class="btn btn-outline-primary btn-sm" for="serviceType">
                              <i class="ti ti-stethoscope me-1"></i>Service
                            </label>

                            <input
                              type="radio"
                              class="btn-check"
                              name="appointmentType"
                              id="doctorType"
                              :checked="appointmentForm.type"
                              @change="appointmentForm.type = true"
                            />
                            <label class="btn btn-outline-primary btn-sm" for="doctorType">
                              <i class="ti ti-user-heart me-1"></i>Doctor
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Service/Doctor Selection -->
              <div class="col-12">
                <div class="card border-0">
                  <div class="card-body pt-1 pb-2">
                    <!-- Initial State - Show instruction -->
                    <div class="row g-2" v-if="appointmentForm.type === null">
                      <div class="col-12">
                        <div class="text-center py-4">
                          <div
                            class="avatar avatar-lg bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                          >
                            <i class="ti ti-arrow-up fs-3 text-primary"></i>
                          </div>
                          <h6 class="text-muted mb-2">Choose Appointment Type</h6>
                          <p class="text-muted fs-13 mb-0">
                            Select either "Service" or "Doctor" above to continue
                          </p>
                        </div>
                      </div>
                    </div>

                    <!-- Service First Selection (when appointment type is Service) -->
                    <div class="row g-2" v-if="appointmentForm.type === false">
                      <div class="col-md-6">
                        <label class="form-label mb-1 fw-medium fs-13">
                          Services<span class="text-danger ms-1">*</span>
                        </label>
                        <vue-multiselect
                          v-model="appointmentForm.service"
                          :options="servicesOptions"
                          :searchable="true"
                          :close-on-select="true"
                          :clear-on-select="true"
                          :preserve-search="true"
                          :placeholder="
                            loadingServices ? 'Loading services...' : 'Select service...'
                          "
                          label="label"
                          track-by="value"
                          :allow-empty="true"
                          :loading="loadingServices"
                          :disabled="loadingServices"
                          select-label=""
                          deselect-label=""
                          selected-label=""
                          @select="onServiceSelect"
                        >
                          <template #option="{ option }">
                            <div class="d-flex align-items-center">
                              <i class="ti ti-medical-cross me-2 text-primary"></i>
                              <span>{{ option.label }}</span>
                              <small class="text-muted ms-auto" v-if="option.code"
                                >({{ option.code }})</small
                              >
                            </div>
                          </template>
                        </vue-multiselect>
                      </div>

                      <div class="col-md-6" v-if="appointmentForm.service">
                        <label class="form-label mb-1 fw-medium fs-13">
                          Doctor<span class="text-danger ms-1">*</span>
                        </label>
                        <vue-multiselect
                          v-model="appointmentForm.doctor"
                          :options="doctorOptions"
                          :searchable="true"
                          :close-on-select="true"
                          :clear-on-select="true"
                          :preserve-search="true"
                          :placeholder="
                            loadingDoctors
                              ? 'Loading doctors...'
                              : 'Select doctor for this service...'
                          "
                          label="label"
                          track-by="value"
                          :allow-empty="true"
                          :loading="loadingDoctors"
                          :disabled="loadingDoctors"
                          select-label=""
                          deselect-label=""
                          selected-label=""
                          @select="onDoctorSelect"
                        >
                          <template #option="{ option }">
                            <div class="d-flex align-items-center">
                              <i class="ti ti-user-circle me-2 text-success"></i>
                              <span>Dr. {{ option.label }}</span>
                            </div>
                          </template>
                        </vue-multiselect>
                        <div class="mt-1">
                          <small class="text-muted">
                            <i class="ti ti-info-circle me-1"></i>
                            Doctors available for selected service
                          </small>
                        </div>
                      </div>
                    </div>

                    <!-- Doctor First Selection (when appointment type is Doctor) -->
                    <div class="row g-2" v-if="appointmentForm.type === true">
                      <div class="col-md-6">
                        <label class="form-label mb-1 fw-medium fs-13">
                          Doctor<span class="text-danger ms-1">*</span>
                        </label>
                        <vue-multiselect
                          v-model="appointmentForm.doctor"
                          :options="doctorOptions"
                          :searchable="true"
                          :close-on-select="true"
                          :clear-on-select="true"
                          :preserve-search="true"
                          :placeholder="loadingDoctors ? 'Loading doctors...' : 'Select doctor...'"
                          label="label"
                          track-by="value"
                          :allow-empty="true"
                          :loading="loadingDoctors"
                          :disabled="loadingDoctors"
                          select-label=""
                          deselect-label=""
                          selected-label=""
                          @select="onDoctorSelect"
                        >
                          <template #option="{ option }">
                            <div class="d-flex align-items-center">
                              <i class="ti ti-user-circle me-2 text-success"></i>
                              <span>Dr. {{ option.label }}</span>
                            </div>
                          </template>
                        </vue-multiselect>
                      </div>

                      <div class="col-md-6" v-if="appointmentForm.doctor">
                        <label class="form-label mb-1 fw-medium fs-13">
                          Services<span class="text-danger ms-1">*</span>
                        </label>
                        <vue-multiselect
                          v-model="appointmentForm.service"
                          :options="servicesOptions"
                          :searchable="true"
                          :close-on-select="true"
                          :clear-on-select="true"
                          :preserve-search="true"
                          :placeholder="
                            loadingServices
                              ? 'Loading services...'
                              : 'Select service for this doctor...'
                          "
                          label="label"
                          track-by="value"
                          :allow-empty="true"
                          :loading="loadingServices"
                          :disabled="loadingServices"
                          select-label=""
                          deselect-label=""
                          selected-label=""
                          @select="onServiceSelect"
                        >
                          <template #option="{ option }">
                            <div class="d-flex align-items-center">
                              <i class="ti ti-medical-cross me-2 text-primary"></i>
                              <span>{{ option.label }}</span>
                              <small class="text-muted ms-auto" v-if="option.code"
                                >({{ option.code }})</small
                              >
                            </div>
                          </template>
                        </vue-multiselect>
                        <div class="mt-1">
                          <small class="text-muted">
                            <i class="ti ti-info-circle me-1"></i>
                            Services available for selected doctor
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Insurance & Notes -->
              <div class="col-12">
                <div class="card border-0">
                  <div class="card-body pt-1 pb-2">
                    <div class="row g-2">
                      <div class="col-md-6">
                        <label class="form-label mb-1 fw-medium fs-13">
                          Primary Insurance
                          <span class="badge bg-info bg-opacity-10 text-info fs-10 ms-1"
                            >Optional</span
                          >
                        </label>
                        <vue-multiselect
                          v-model="appointmentForm.primaryInsurance"
                          :options="patientInsuranceOptions"
                          :searchable="true"
                          :close-on-select="true"
                          :clear-on-select="true"
                          :preserve-search="true"
                          placeholder="Select insurance..."
                          label="label"
                          track-by="value"
                          :allow-empty="true"
                          :loading="false"
                          select-label=""
                          deselect-label=""
                          selected-label=""
                        >
                          <template #option="{ option }">
                            <div class="d-flex align-items-center">
                              <i class="ti ti-shield-check me-2 text-primary"></i>
                              <span>{{ option.label }}</span>
                            </div>
                          </template>
                        </vue-multiselect>
                        <div class="mt-1" v-if="patientInsuranceOptions.length === 0">
                          <small class="text-muted">
                            <i class="ti ti-info-circle me-1"></i>
                            No insurance found for this patient
                          </small>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <label class="form-label mb-1 fw-medium fs-13">
                          Notes
                          <span class="badge bg-info bg-opacity-10 text-info fs-10 ms-1"
                            >Optional</span
                          >
                        </label>
                        <textarea
                          v-model="appointmentForm.notes"
                          class="form-control"
                          rows="3"
                          placeholder="Enter notes..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Appointment Summary -->
              <div
                class="col-12"
                v-if="appointmentForm.service || appointmentForm.doctor || appointmentForm.date"
              >
                <div class="card border-0 bg-light">
                  <div class="card-header bg-transparent border-0 pb-1">
                    <h6 class="card-title mb-0 fw-bold fs-14 text-primary">
                      <i class="ti ti-file-check me-1"></i>Summary
                    </h6>
                  </div>
                  <div class="card-body pt-1 pb-2">
                    <div class="row g-2">
                      <div class="col-md-3" v-if="appointmentForm.date">
                        <div class="summary-item">
                          <small class="text-muted fw-medium">Date</small>
                          <p class="mb-0 fw-bold text-dark">
                            {{ dayjs(appointmentForm.date).format('MMM DD, YYYY') }}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-3" v-if="appointmentForm.service">
                        <div class="summary-item">
                          <small class="text-muted fw-medium">Service</small>
                          <p class="mb-0 fw-bold text-dark">{{ appointmentForm.service.label }}</p>
                        </div>
                      </div>
                      <div class="col-md-3" v-if="appointmentForm.doctor">
                        <div class="summary-item">
                          <small class="text-muted fw-medium">Doctor</small>
                          <p class="mb-0 fw-bold text-dark">
                            Dr. {{ appointmentForm.doctor.label }}
                          </p>
                        </div>
                      </div>
                      <div class="col-md-3" v-if="appointmentForm.primaryInsurance">
                        <div class="summary-item">
                          <small class="text-muted fw-medium">Insurance</small>
                          <p class="mb-0 fw-bold text-dark">
                            {{ appointmentForm.primaryInsurance.label }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="modal-footer border-0 pt-0 px-3 pb-3">
          <div class="d-flex justify-content-between w-100">
            <button
              type="button"
              class="btn btn-light btn-sm px-3 fw-medium"
              data-bs-dismiss="modal"
            >
              <i class="ti ti-x me-1"></i>Cancel
            </button>
            <button
              type="button"
              class="btn btn-primary btn-sm px-3 fw-medium"
              @click="createAppointment"
              :disabled="!canCreateAppointment || isSubmitting"
            >
              <span
                v-if="isSubmitting"
                class="spinner-border spinner-border-sm me-1"
                role="status"
                aria-hidden="true"
              ></span>
              <i v-else class="ti ti-calendar-plus me-1"></i>
              {{ isSubmitting ? 'Creating...' : 'Create Appointment' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
// import { Modal } from 'bootstrap';
import dayjs from 'dayjs'
import VueMultiselect from 'vue-multiselect'
import axiosInstance from '@/utils/axios'
import { message } from 'ant-design-vue'

export default {
  name: 'SetAppointmentModal',
  components: {
    VueMultiselect,
  },
  props: {
    modalId: {
      type: String,
      default: 'set_appointment_modal',
    },
    modalTitle: {
      type: String,
      default: 'Set Appointment',
    },
    selectedPatient: {
      type: Object,
      default: () => null,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:visible', 'appointment-created', 'close'],
  setup(props, { emit }) {
    const loading = ref(false)
    const isSubmitting = ref(false)

    // Form data
    const appointmentForm = ref({
      date: dayjs(), // Default to today
      type: false, // Default to service first (false = service first, true = doctor first)
      service: null,
      doctor: null,
      primaryInsurance: null,
      notes: '',
    })

    // Options data
    const servicesOptions = ref([])
    const doctorOptions = ref([])
    const patientInsuranceOptions = ref([])

    // Loading states
    const loadingServices = ref(false)
    const loadingDoctors = ref(false)

    // Computed properties
    const canCreateAppointment = computed(() => {
      return (
        appointmentForm.value.date && appointmentForm.value.service && appointmentForm.value.doctor
      )
    })

    // Methods
    const resetForm = () => {
      appointmentForm.value = {
        date: dayjs(), // Default to today
        type: false, // Default to service first
        service: null,
        doctor: null,
        primaryInsurance: null,
        notes: '',
      }
    }

    const fetchServices = async () => {
      try {
        loadingServices.value = true
        const response = await axiosInstance.get('/services/')
        const services = response.data.results || response.data.data || response.data || []

        servicesOptions.value = services.map((service) => ({
          label: service.name,
          value: service.id,
          code: service.code,
          ...service,
        }))
      } catch (error) {
        console.error('Error fetching services:', error)
        message.error('Failed to load services')
        servicesOptions.value = []
      } finally {
        loadingServices.value = false
      }
    }

    const fetchDoctors = async (serviceId = null) => {
      try {
        loadingDoctors.value = true
        let response

        if (serviceId) {
          // Fetch doctors for a specific service
          response = await axiosInstance.get(`/services/${serviceId}/staff/`)
        } else {
          // Fetch all doctors (staff members)
          response = await axiosInstance.get('/staff/')
        }

        const doctors = response.data.results || response.data.data || response.data || []

        doctorOptions.value = doctors.map((doctor) => ({
          label: doctor.full_name || doctor.name,
          value: doctor.uuid || doctor.id,
          ...doctor,
        }))
      } catch (error) {
        console.error('Error fetching doctors:', error)
        message.error('Failed to load doctors')
        doctorOptions.value = []
      } finally {
        loadingDoctors.value = false
      }
    }

    const fetchPatientInsurance = async (patientId) => {
      try {
        if (!patientId) return

        const response = await axiosInstance.get(`/patients/${patientId}/insurances/`)
        const insurances = response.data.results || response.data.data || response.data || []

        patientInsuranceOptions.value = insurances
          .filter((insurance) => insurance.status === true) // Only active insurances
          .map((insurance) => ({
            label:
              insurance.type === 'SELF-SPONSORED'
                ? insurance.type
                : insurance.type === 'nhia'
                  ? `${insurance.scheme} (${insurance.plan?.company || ''}${insurance.plan?.company && insurance.plan?.name ? ' - ' : ''}${insurance.plan?.name || ''})`
                  : `${insurance.plan?.company || ''}${insurance.plan?.company && insurance.plan?.name ? ' - ' : ''}${insurance.plan?.name || ''}`,
            value: insurance.id,
            type: insurance.type,
            insurance: insurance,
          }))
      } catch (error) {
        console.error('Error fetching patient insurance:', error)
        patientInsuranceOptions.value = []
      }
    }

    const onServiceSelect = (service) => {
      appointmentForm.value.service = service
      if (appointmentForm.value.type === false) {
        // Service first - fetch doctors for this service
        fetchDoctors(service.value)
        appointmentForm.value.doctor = null
      }
    }

    const onDoctorSelect = (doctor) => {
      appointmentForm.value.doctor = doctor
      if (appointmentForm.value.type === true) {
        // Doctor first - might need to filter services for this doctor
        appointmentForm.value.service = null
      }
    }

    const createAppointment = async () => {
      try {
        if (!canCreateAppointment.value) {
          message.warning('Please fill in all required fields')
          return
        }

        isSubmitting.value = true

        const appointmentData = {
          patient: props.selectedPatient?.uuid || props.selectedPatient?.id,
          service: appointmentForm.value.service?.value,
          staff: appointmentForm.value.doctor?.value,
          start_date: dayjs(appointmentForm.value.date).format('YYYY-MM-DD'),
          notes: appointmentForm.value.notes,
          primary_insurance: appointmentForm.value.primaryInsurance?.value || null,
          status: 'SCHEDULED',
          type: appointmentForm.value.type === true ? 'DOCTOR' : 'SERVICE',
          mode: 'IN-PERSON',
        }

        // Remove undefined or null values
        Object.keys(appointmentData).forEach((key) => {
          if (appointmentData[key] === null || appointmentData[key] === undefined) {
            delete appointmentData[key]
          }
        })

        const response = await axiosInstance.post('/appointments/', appointmentData)

        message.success('Appointment created successfully')

        // Emit events
        emit('appointment-created', response.data)
        emit('update:visible', false)

        // Reset form
        resetForm()

        // Close modal
        const modalElement = document.getElementById(props.modalId)
        if (modalElement) {
          // try {
          //   const modal = Modal.getInstance(modalElement);
          //   if (modal) {
          //     modal.hide();
          //   }
          // } catch {
          // Fallback to window.bootstrap
          if (window.bootstrap) {
            const modal = window.bootstrap.Modal.getInstance(modalElement)
            if (modal) {
              modal.hide()
            }
            // }
          }
        }
      } catch (error) {
        console.error('Error creating appointment:', error)
        message.error('Failed to create appointment')
      } finally {
        isSubmitting.value = false
      }
    }

    // Watch for patient changes
    watch(
      () => props.selectedPatient,
      (newPatient) => {
        if (newPatient) {
          fetchPatientInsurance(newPatient.uuid || newPatient.id)
        }
      },
      { immediate: true }
    )

    // Watch for appointment type changes
    watch(
      () => appointmentForm.value.type,
      (newType) => {
        // Reset selections when type changes
        appointmentForm.value.service = null
        appointmentForm.value.doctor = null

        if (newType !== null) {
          // Fetch initial data based on type
          fetchServices()
          if (newType === true) {
            // Doctor first - fetch all doctors
            fetchDoctors()
          }
        }
      }
    ) // Watch for visible prop changes to show/hide modal
    watch(
      () => props.visible,
      (newVisible) => {
        nextTick(() => {
          const modalElement = document.getElementById(props.modalId)

          if (modalElement) {
            if (newVisible) {
              // Show the modal
              // try {
              //   const modal = new Modal(modalElement);
              //   modal.show();
              // } catch {
              // Fallback to window.bootstrap
              if (window.bootstrap) {
                const modal = new window.bootstrap.Modal(modalElement)
                modal.show()
              }
              // }
            } else {
              // Hide the modal
              // try {
              //   const modal = Modal.getInstance(modalElement);
              //   if (modal) {
              //     modal.hide();
              //   }
              // } catch {
              // Fallback to window.bootstrap
              if (window.bootstrap) {
                const modal = window.bootstrap.Modal.getInstance(modalElement)
                if (modal) {
                  modal.hide()
                }
              }
              // }
            }
          }
        })
      },
      { immediate: true }
    )

    // Initialize data when component mounts
    onMounted(() => {
      fetchServices()
      fetchDoctors()

      // Add event listener for when modal is hidden
      const modalElement = document.getElementById(props.modalId)
      if (modalElement) {
        modalElement.addEventListener('hidden.bs.modal', () => {
          emit('update:visible', false)
          emit('close')
        })
      }
    })

    return {
      loading,
      isSubmitting,
      appointmentForm,
      servicesOptions,
      doctorOptions,
      patientInsuranceOptions,
      loadingServices,
      loadingDoctors,
      canCreateAppointment,
      resetForm,
      onServiceSelect,
      onDoctorSelect,
      createAppointment,
      dayjs,
    }
  },
}
</script>

<style scoped>
/* Ensure modal centers properly */
.modal-dialog {
  margin: 1.75rem auto;
  max-width: 800px;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 1rem);
}

/* Fix for modal positioning */
.modal.fade .modal-dialog {
  transform: translateY(-50px);
  transition: transform 0.3s ease-out;
}

.modal.show .modal-dialog {
  transform: none;
}

/* Ensure modal is centered even on smaller screens */
@media (max-width: 768px) {
  .modal-dialog {
    margin: 0.5rem;
    max-width: calc(100vw - 1rem);
  }

  .modal-dialog-centered {
    min-height: calc(100vh - 1rem);
  }
}

/* Summary item styling */
.summary-item {
  padding: 8px;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.7);
}

/* Appointment type toggle styling */
.appointment-type-toggle .btn-group {
  border-radius: 8px;
  overflow: hidden;
}

.appointment-type-toggle .btn {
  border-radius: 0;
  font-size: 13px;
  padding: 8px 16px;
}

.appointment-type-toggle .btn:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.appointment-type-toggle .btn:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

/* Modal header gradient */
.bg-gradient-primary {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
}

/* Form improvements */
.form-label {
  font-weight: 500;
  color: #495057;
}

/* Card styling */
.card {
  border-radius: 10px;
}

.card-header {
  border-radius: 10px 10px 0 0;
}

/* Button styling */
.btn-sm {
  font-size: 13px;
  font-weight: 500;
}

/* Close button for white text */
.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}
</style>
