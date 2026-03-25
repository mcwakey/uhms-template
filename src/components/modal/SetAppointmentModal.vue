<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-primary text-white border-0 py-3 px-4">
          <div class="d-flex align-items-center">
            <!-- <div class="avatar avatar-md bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center me-3">
              <i class="ti ti-calendar-plus fs-4 text-white"></i>
            </div> -->
            <div>
              <h5 class="modal-title fw-bold text-white mb-1">{{ modalTitle || t('appointment_modal.title') }}</h5>
              <!-- <p class="mb-0 text-white text-opacity-75 fs-13" v-if="selectedPatient">
                {{ t('appointment_modal.new_appointment_for') }} <span class="fw-semibold">{{ selectedPatient.full_name }}</span>
              </p> -->
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4 bg-light bg-opacity-10">
          <!-- Loading State -->
          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary mb-3" role="status">
              <span class="visually-hidden">{{ t('appointment_modal.loading') }}</span>
            </div>
            <p class="text-muted fw-medium">{{ t('appointment_modal.loading') }}</p>
          </div>

          <!-- Modal Content -->
          <div v-else>
            <!-- Patient Info Card -->
            <div class="card border-0 shadow-sm mb-4" v-if="selectedPatient">
              <div class="card-body p-3">
                <div class="d-flex align-items-center">
                  <div class="avatar avatar-sm bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3">
                    <i class="ti ti-user text-primary fs-5"></i>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1 fw-bold text-dark">{{ selectedPatient.full_name }}</h6>
                    <div class="d-flex align-items-center gap-3 text-muted fs-12">
                      <span class="d-flex align-items-center"><i class="ti ti-id me-1"></i>{{ selectedPatient.opd_no }}</span>
                      <span v-if="selectedPatient.age" class="d-flex align-items-center"><i class="ti ti-calendar-time me-1"></i>{{ selectedPatient.age?.value }} {{ selectedPatient.age?.unit }}</span>
                      <span class="d-flex align-items-center"><i class="ti ti-gender-bigender me-1"></i>{{ selectedPatient.gender }}</span>
                      <span v-if="selectedPatient.phone" class="d-flex align-items-center"><i class="ti ti-phone me-1"></i>{{ selectedPatient.phone }}</span>
                    </div>
                  </div>
                  <div class="text-end">
                    <span class="badge bg-success bg-opacity-10 text-muted px-2 py-1 rounded-pill">{{ selectedPatient.last_visit }}</span>
                  </div>
                </div>
              </div>
            </div>

            <form class="row g-3">
              <!-- Date & Type Selection -->
              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('appointment_modal.date') }} <span class="text-danger">*</span></label>
                <a-date-picker
                  v-model:value="appointmentForm.date"
                  class="form-control w-100 shadow-none"
                  :placeholder="t('appointment_modal.select_date')"
                  :disabled-date="(current: any) => current && current < dayjs().startOf('day')"
                  size="large"
                  :allowClear="false"
                  :format="'DD MMMM, YYYY'"
                />
              </div>

              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('appointment_modal.book_by') }}</label>
                <div class="bg-white p-1 rounded border d-flex">
                  <button 
                    type="button" 
                    class="btn btn-sm flex-fill fw-medium" 
                    :class="!appointmentForm.type ? 'btn-primary shadow-sm' : 'btn-ghost text-muted'"
                    @click="appointmentForm.type = false"
                  >
                    <i class="ti ti-stethoscope me-1"></i>{{ t('appointment_modal.service') }}
                  </button>
                  <button 
                    type="button" 
                    class="btn btn-sm flex-fill fw-medium" 
                    :class="appointmentForm.type ? 'btn-primary shadow-sm' : 'btn-ghost text-muted'"
                    @click="appointmentForm.type = true"
                  >
                    <i class="ti ti-user-heart me-1"></i>{{ t('appointment_modal.doctor') }}
                  </button>
                </div>
              </div>

              <!-- Dynamic Selection Area -->
              <div class="col-12">
                <div class="card border border-dashed bg-white shadow-none">
                  <div class="card-body p-3">
                    
                    <!-- Service First Flow -->
                    <div class="row g-3" v-if="!appointmentForm.type">
                      <div class="col-md-6">
                        <label class="form-label fw-semibold text-dark fs-13">{{ t('appointment_modal.service') }} <span class="text-danger">*</span></label>
                        <vue-multiselect
                          v-model="appointmentForm.service"
                          :options="servicesOptions"
                          :searchable="true"
                          :placeholder="t('appointment_modal.select_service')"
                          label="label"
                          track-by="value"
                          :loading="loadingServices"
                          @select="onServiceSelect"
                          class="custom-multiselect"
                        >
                          <template #option="{ option }">
                            <div class="d-flex align-items-center">
                              <!-- <span class="d-flex align-items-center justify-content-center bg-light rounded-circle me-2" style="width: 24px; height: 24px;">
                                <i class="ti ti-medical-cross text-primary fs-12"></i>
                              </span> -->
                              <span class="fw-semibold fs-13">{{ option.label }}</span>
                            </div>
                          </template>
                        </vue-multiselect>
                      </div>
                      <div class="col-md-6" v-if="appointmentForm.service">
                        <label class="form-label fw-semibold text-dark fs-13">{{ t('appointment_modal.doctor') }} <span class="text-danger">*</span></label>
                        <vue-multiselect
                          v-model="appointmentForm.doctor"
                          :options="doctorOptions"
                          :searchable="true"
                          :placeholder="t('appointment_modal.select_doctor')"
                          label="label"
                          track-by="value"
                          :loading="loadingDoctors"
                          @select="onDoctorSelect"
                          class="custom-multiselect"
                        >
                           <template #option="{ option }">
                            <div class="d-flex align-items-center">
                              <span class="d-flex align-items-center justify-content-center bg-light rounded-circle me-2" style="width: 24px; height: 24px;">
                                <i class="ti ti-user text-success fs-12"></i>
                              </span>
                              
                              <span class="fw-semibold fs-13">Dr. {{ option.label }}</span>
                            </div>
                          </template>
                        </vue-multiselect>
                      </div>
                    </div>

                    <!-- Doctor First Flow -->
                    <div class="row g-3" v-else>
                      <div class="col-md-6">
                        <label class="form-label fw-semibold text-dark fs-13">{{ t('appointment_modal.doctor') }} <span class="text-danger">*</span></label>
                        <vue-multiselect
                          v-model="appointmentForm.doctor"
                          :options="doctorOptions"
                          :searchable="true"
                          :placeholder="t('appointment_modal.select_doctor')"
                          label="label"
                          track-by="value"
                          :loading="loadingDoctors"
                          @select="onDoctorSelect"
                          class="custom-multiselect"
                        >
                           <template #option="{ option }">
                            <div class="d-flex align-items-center">
                              <span class="d-flex align-items-center justify-content-center bg-light rounded-circle me-2" style="width: 24px; height: 24px;">
                                <i class="ti ti-user text-success fs-12"></i>
                              </span>
                              <span>Dr. {{ option.label }}</span>
                            </div>
                          </template>
                        </vue-multiselect>
                      </div>
                      <div class="col-md-6" v-if="appointmentForm.doctor">
                        <label class="form-label fw-semibold text-dark fs-13">{{ t('appointment_modal.service') }} <span class="text-danger">*</span></label>
                        <vue-multiselect
                          v-model="appointmentForm.service"
                          :options="servicesOptions"
                          :searchable="true"
                          :placeholder="t('appointment_modal.select_service')"
                          label="label"
                          track-by="value"
                          :loading="loadingServices"
                          @select="onServiceSelect"
                          class="custom-multiselect"
                        >
                          <template #option="{ option }">
                            <div class="d-flex align-items-center">
                              <span class="d-flex align-items-center justify-content-center bg-light rounded-circle me-2" style="width: 24px; height: 24px;">
                                <i class="ti ti-medical-cross text-primary fs-12"></i>
                              </span>
                              <span>{{ option.label }}</span>
                            </div>
                          </template>
                        </vue-multiselect>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <!-- Insurance & Notes -->
              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">
                  {{ t('appointment_modal.insurance') }} <span class="text-muted fw-normal">({{ t('appointment_modal.optional') }})</span>
                </label>
                <vue-multiselect
                  v-model="appointmentForm.primaryInsurance"
                  :options="patientInsuranceOptions"
                  :placeholder="t('appointment_modal.select_insurance')"
                  label="label"
                  track-by="value"
                  class="custom-multiselect"
                >
                   <template #option="{ option }">
                      <div class="d-flex align-items-center">
                        <i class="ti ti-shield-check me-2 text-info"></i>
                        <span>{{ option.label }}</span>
                      </div>
                    </template>
                </vue-multiselect>
              </div>

              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">
                  {{ t('appointment_modal.notes') }} <span class="text-muted fw-normal">({{ t('appointment_modal.optional') }})</span>
                </label>
                <textarea
                  v-model="appointmentForm.notes"
                  class="form-control shadow-none"
                  rows="1"
                  :placeholder="t('appointment_modal.notes_placeholder')"
                  style="min-height: 42px;"
                ></textarea>
              </div>

              <!-- Summary Card -->
              <div class="col-12" v-if="canCreateAppointment">
                <div class="alert alert-primary bg-primary bg-opacity-10 border-0 mb-0">
                  <div class="d-flex align-items-center mb-2">
                    <i class="ti ti-info-circle text-primary me-2"></i>
                    <h6 class="mb-0 text-primary fw-bold fs-13">{{ t('appointment_modal.summary_title') }}</h6>
                  </div>
                  <div class="row g-3">
                    <div class="col-md-4">
                      <small class="text-muted d-block fs-11 text-uppercase fw-bold">{{ t('appointment_modal.date_time') }}</small>
                      <span class="text-dark fw-medium fs-13">{{ dayjs(appointmentForm.date).format('DD MMMM, YYYY') }}</span>
                    </div>
                    <div class="col-md-4">
                      <small class="text-muted d-block fs-11 text-uppercase fw-bold">{{ t('appointment_modal.service') }}</small>
                      <span class="text-dark fw-medium fs-13">{{ appointmentForm.service?.label }}</span>
                    </div>
                    <div class="col-md-4">
                      <small class="text-muted d-block fs-11 text-uppercase fw-bold">{{ t('appointment_modal.doctor') }}</small>
                      <span class="text-dark fw-medium fs-13">Dr. {{ appointmentForm.doctor?.label }}</span>
                    </div>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 px-4 pb-4">
          <button type="button" class="btn btn-light fw-medium" data-bs-dismiss="modal">{{ t('appointment_modal.cancel') }}</button>
          <button 
            type="button" 
            class="btn btn-primary fw-medium px-4"
            @click="createAppointment"
            :disabled="!canCreateAppointment || isSubmitting"
          >
            <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
            {{ t('appointment_modal.confirm') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import dayjs from 'dayjs'
import VueMultiselect from 'vue-multiselect'
import axiosInstance from '@/utils/axios'
import { message } from 'ant-design-vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Props
const props = withDefaults(defineProps<{
  modalId?: string
  modalTitle?: string
  selectedPatient?: any
  visible?: boolean
}>(), {
  modalId: 'set_appointment_modal',
  modalTitle: '',
  selectedPatient: null,
  visible: false
})

// Emits
const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'appointment-created', data: any): void
  (e: 'close'): void
}>()

// State
const loading = ref(false)
const isSubmitting = ref(false)
const modalRef = ref<HTMLElement | null>(null)

// Form data
const appointmentForm = ref({
  date: dayjs(),
  type: false, // false = service first, true = doctor first
  service: null as any,
  doctor: null as any,
  primaryInsurance: null as any,
  notes: '',
})

// Options
const servicesOptions = ref<any[]>([])
const doctorOptions = ref<any[]>([])
const patientInsuranceOptions = ref<any[]>([])

// Loading states
const loadingServices = ref(false)
const loadingDoctors = ref(false)

// Computed
const canCreateAppointment = computed(() => {
  return (
    appointmentForm.value.date && 
    appointmentForm.value.service && 
    appointmentForm.value.doctor
  )
})

// Methods
const resetForm = () => {
  appointmentForm.value = {
    date: dayjs(),
    type: false,
    service: null,
    doctor: null,
    primaryInsurance: null,
    notes: '',
  }
}

const fetchServices = async (doctorId?: string | number) => {
  try {
    loadingServices.value = true
    let url = '/services/'
    if (doctorId) {
      url = `/staff/${doctorId}/services/`
    }
    const response = await axiosInstance.get(url)
    const services = response.data.results || response.data.data || response.data || []

    servicesOptions.value = services.map((service: any) => ({
      label: service.name,
      value: service.id,
      code: service.code, 
      ...service,
    }))
  } catch (error) {
    console.error('Error fetching services:', error)
    message.error(t('appointment_modal.error_services'))
    servicesOptions.value = []
  } finally {
    loadingServices.value = false
  }
}

const fetchDoctors = async (serviceId?: string | number) => {
  try {
    loadingDoctors.value = true
    let url = '/staff/'
    if (serviceId) {
      url = `/services/${serviceId}/staff/`
    }
    const response = await axiosInstance.get(url)

    const doctors = response.data.results || response.data.data || response.data || []

    doctorOptions.value = doctors.map((doctor: any) => ({
      label: doctor.full_name || doctor.name,
      value: doctor.uuid || doctor.id,
      ...doctor,
    }))
  } catch (error) {
    console.error('Error fetching doctors:', error)
    message.error(t('appointment_modal.error_doctors'))
    doctorOptions.value = []
  } finally {
    loadingDoctors.value = false
  }
}

const fetchPatientInsurance = async (patientId: string | number) => {
  try {
    if (!patientId) return

    const response = await axiosInstance.get(`/patients/${patientId}/insurances/`)
    const insurances = response.data.results || response.data.data || response.data || []

    patientInsuranceOptions.value = insurances
      .filter((insurance: any) => insurance.status === true)
      .map((insurance: any) => ({
        label: insurance.type === 'SELF-SPONSORED'
            ? insurance.type
            : insurance.type === 'NHIA'
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

const onServiceSelect = (service: any) => {
  appointmentForm.value.service = service
  if (appointmentForm.value.type === false) {
    fetchDoctors(service.value)
    appointmentForm.value.doctor = null
  }
}

const onDoctorSelect = (doctor: any) => {
  appointmentForm.value.doctor = doctor
  if (appointmentForm.value.type === true) {
    fetchServices(doctor.value)
    appointmentForm.value.service = null
  }
}

const createAppointment = async () => {
  try {
    if (!canCreateAppointment.value) {
      message.warning(t('appointment_modal.fill_required'))
      return
    }

    isSubmitting.value = true

    const appointmentData: any = {
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

    Object.keys(appointmentData).forEach((key) => {
      if (appointmentData[key] === null || appointmentData[key] === undefined) {
        delete appointmentData[key]
      }
    })

    const response = await axiosInstance.post('/appointments', appointmentData)

    message.success(t('appointment_modal.success'))
    emit('appointment-created', response.data)
    emit('update:visible', false)
    resetForm()

    const modalElement = document.getElementById(props.modalId)
    if (modalElement && (window as any).bootstrap) {
      const modal = (window as any).bootstrap.Modal.getInstance(modalElement)
      if (modal) modal.hide()
    }
  } catch (error) {
    console.error('Error creating appointment:', error)
    message.error(t('appointment_modal.error_create'))
  } finally {
    isSubmitting.value = false
  }
}

// Watchers
watch(() => props.selectedPatient, (newPatient) => {
  if (newPatient) {
    fetchPatientInsurance(newPatient.uuid || newPatient.id)
    fetchServices()
  }
}, { immediate: true })

watch(() => appointmentForm.value.type, (newType) => {
  appointmentForm.value.service = null
  appointmentForm.value.doctor = null
  
  if (newType === false) {
    fetchServices()
    doctorOptions.value = []
  } else {
    fetchDoctors()
    servicesOptions.value = []
  }
})

watch(() => props.visible, (newVisible) => {
  if (newVisible) {
    // if (appointmentForm.value.type === false) {
      fetchServices()
    // } else {
    //   fetchDoctors()
    // }
  }
})

onMounted(() => {
  console.log('SetAppointmentModal mounted')
  emit('update:visible', true)
  console.log('visible:', props.visible)
  // fetchServices()
  // fetchDoctors()
  
  // const modalElement = document.getElementById(props.modalId)
  // if (modalElement) {
  //   modalElement.addEventListener('hidden.bs.modal', () => {
  //     emit('update:visible', false)
  //     emit('close')
  //   })
  // }
})
</script>

<style scoped>
.custom-multiselect :deep(.multiselect__tags) {
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  padding-top: 6px;
}

.custom-multiselect :deep(.multiselect__placeholder) {
  margin-bottom: 0;
  padding-top: 2px;
}

.btn-ghost {
  background: transparent;
  border: none;
}
.btn-ghost:hover {
  background: #f8f9fa;
}
</style>
