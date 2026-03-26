<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-primary text-white border-0 py-3 px-4">
          <div class="d-flex align-items-center">
            <div>
              <h5 class="modal-title fw-bold text-white mb-1">{{ displayTitle }}</h5>
              <p class="mb-0 text-white text-opacity-75 fs-13" v-if="subtitle">{{ subtitle }}</p>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4 bg-light bg-opacity-10">
          <!-- Loading State -->
          <LoadingIndicator
            v-if="loading"
            :show="loading"
            variant="center"
            wrapperClass="py-5 w-100"
            :message="displayLoadingMessage"
            messageClass="text-muted fw-medium mt-3"
          />

          <!-- Form Content -->
          <div v-else>
            <!-- Patient Info Card -->
            <!-- <div class="card border-0 shadow-sm mb-4" v-if="showInfoCard && selectedPatient">
              <div class="card-body p-3">
                <div class="d-flex align-items-center">
                  <div class="avatar avatar-sm bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3">
                    <i class="ti ti-user text-primary fs-5"></i>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="mb-1 fw-bold text-dark">{{ selectedPatient.full_name || 'Patient' }}</h6>
                    <div class="d-flex align-items-center gap-3 text-muted fs-12">
                      <span v-if="selectedPatient.opd_no" class="d-flex align-items-center"><i class="ti ti-id me-1"></i>{{ selectedPatient.opd_no }}</span>
                      <span v-if="selectedPatient.phone" class="d-flex align-items-center"><i class="ti ti-phone me-1"></i>{{ selectedPatient.phone }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->

            <form class="row g-3">
              <!-- Insurance Type & Company -->
              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('insurance_modal.type') }} <span class="text-danger">*</span></label>
                <vue-multiselect
                  v-model="form.type"
                  :options="insuranceTypes"
                  :searchable="true"
                  :close-on-select="true"
                  :clear-on-select="false"
                  :preserve-search="true"
                  :placeholder="t('insurance_modal.select_type')"
                  label="name"
                  track-by="id"
                  :allow-empty="true"
                  :loading="loadingInsuranceTypes"
                  @select="onInsuranceTypeSelect"
                  class="custom-multiselect"
                />
              </div>

              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('insurance_modal.company') }} <span class="text-danger">*</span></label>
                <vue-multiselect
                  v-model="form.company"
                  :options="insuranceCompanies"
                  :searchable="true"
                  :close-on-select="true"
                  :clear-on-select="false"
                  :preserve-search="true"
                  :placeholder="t('insurance_modal.select_company')"
                  label="name"
                  track-by="id"
                  :allow-empty="true"
                  :loading="loadingInsuranceCompanies"
                  :disabled="!form.type"
                  @select="onInsuranceCompanySelect"
                  class="custom-multiselect"
                />
              </div>

              <!-- Plan & Scheme -->
              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('insurance_modal.plan') }} <span class="text-danger">*</span></label>
                <vue-multiselect
                  v-model="form.plan"
                  :options="insurancePlans"
                  :searchable="true"
                  :close-on-select="true"
                  :clear-on-select="false"
                  :preserve-search="true"
                  :placeholder="t('insurance_modal.select_plan')"
                  label="name"
                  track-by="id"
                  :allow-empty="true"
                  :loading="loadingInsurancePlans"
                  :disabled="!form.company"
                  class="custom-multiselect"
                />
              </div>

              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('insurance_modal.scheme') }} <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  v-model="form.scheme"
                  :placeholder="t('insurance_modal.enter_scheme')"
                />
              </div>

              <!-- Numbers -->
              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('insurance_modal.membership_number') }} <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  v-model="form.membershipNumber"
                  :placeholder="t('insurance_modal.enter_membership_number')"
                />
              </div>
              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('insurance_modal.serial_number') }} <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control shadow-none"
                  v-model="form.serialNumber"
                  :placeholder="t('insurance_modal.enter_serial_number')"
                />
              </div>

              <!-- Dates -->
              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('insurance_modal.issue_date') }} <span class="text-danger">*</span></label>
                <a-date-picker
                  v-model:value="form.issueDate"
                  class="form-control w-100 shadow-none"
                  placeholder="dd/mm/yyyy"
                  size="large"
                  :format="'DD/MM/YYYY'"
                />
              </div>

              <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('insurance_modal.expiry_date') }}</label>
                <a-date-picker
                  v-model:value="form.expiryDate"
                  class="form-control w-100 shadow-none"
                  placeholder="dd/mm/yyyy"
                  size="large"
                  :format="'DD/MM/YYYY'"
                />
              </div>

              <!-- Active Status -->
              <div class="col-12">
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                    :id="`${modalId}_activeStatus`"
                    v-model="form.isActive"
                  />
                  <label class="form-check-label fw-medium text-dark" :for="`${modalId}_activeStatus`">
                    {{ t('insurance_modal.active') }}
                  </label>
                </div>
              </div>

              <!-- Plan Details Summary -->
              <div class="col-12" v-if="form.plan">
                <div class="alert alert-primary bg-primary bg-opacity-10 border-0 mb-0">
                  <div class="d-flex align-items-center mb-2">
                    <i class="ti ti-info-circle text-primary me-2"></i>
                    <h6 class="mb-0 text-primary fw-bold fs-13">{{ t('insurance_modal.plan_details') }}</h6>
                  </div>
                  <div class="row g-3">
                    <div class="col-md-4">
                      <small class="text-muted d-block fs-11 text-uppercase fw-bold">{{ t('insurance_modal.plan_name') }}</small>
                      <span class="text-dark fw-medium fs-13">{{ form.plan.name || 'N/A' }}</span>
                    </div>
                    <div class="col-md-4">
                      <small class="text-muted d-block fs-11 text-uppercase fw-bold">{{ t('insurance_modal.cap_limit') }}</small>
                      <span class="text-success fw-bold fs-13">${{ form.plan.cap || 'N/A' }}</span>
                    </div>
                    <div class="col-md-4">
                      <small class="text-muted d-block fs-11 text-uppercase fw-bold">{{ t('insurance_modal.beneficiaries') }}</small>
                      <span class="text-dark fw-medium fs-13">{{ form.plan.beneficiaries || 'N/A' }}</span>
                    </div>
                    <div class="col-12" v-if="form.plan.description">
                      <small class="text-muted d-block fs-11 text-uppercase fw-bold">{{ t('insurance_modal.description') }}</small>
                      <span class="text-dark fs-13">{{ form.plan.description }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 px-4 pb-4">
          <button type="button" class="btn btn-light fw-medium" data-bs-dismiss="modal">{{ t('common.cancel') }}</button>
          <button
            type="button"
            class="btn btn-primary fw-medium px-4"
            @click="addInsurance"
            :disabled="isSubmitting || !canSubmit"
          >
            <LoadingIndicator
              :show="isSubmitting"
              variant="inline"
              size="sm"
              message=""
              ariaLabel="Saving..."
            />
            {{ isSubmitting ? displaySubmittingText : displayPrimaryActionText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import VueMultiselect from 'vue-multiselect'
import axiosInstance from '@/utils/axios'
import { message } from 'ant-design-vue'
import { hideModalById } from '@/utils/bootstrap'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'

const props = defineProps({
  modalId: { type: String, default: 'add_insurance_modal' },
  modalTitle: { type: String, default: undefined },
  subtitle: { type: String, default: '' },
  selectedPatient: { type: Object, default: () => null },
  visible: { type: Boolean, default: false },
  showInfoCard: { type: Boolean, default: true },
  loadingMessage: { type: String, default: undefined },
  primaryActionText: { type: String, default: undefined },
  submittingText: { type: String, default: undefined },
})

const displayTitle = computed(() => props.modalTitle || t('insurance_modal.add_title'))
const displayLoadingMessage = computed(() => props.loadingMessage || t('insurance_modal.loading'))
const displayPrimaryActionText = computed(() => props.primaryActionText || t('insurance_modal.add'))
const displaySubmittingText = computed(() => props.submittingText || t('insurance_modal.adding'))

const emit = defineEmits(['update:visible', 'insurance-added', 'close'])

const { t } = useI18n()
const loading = ref(false)
const isSubmitting = ref(false)
const modalRef = ref(null)

// Form data
const form = ref({
  type: null,
  company: null,
  plan: null,
  membershipNumber: '',
  scheme: '',
  serialNumber: '',
  issueDate: null,
  expiryDate: null,
  isActive: true,
})

// Options data
const insuranceTypes = ref([])
const insuranceCompanies = ref([])
const insurancePlans = ref([])

// Loading states
const loadingInsuranceTypes = ref(false)
const loadingInsuranceCompanies = ref(false)
const loadingInsurancePlans = ref(false)

// Computed properties
const canSubmit = computed(() => {
  return (
    form.value.type &&
    form.value.company &&
    form.value.plan &&
    form.value.membershipNumber &&
    form.value.scheme &&
    form.value.serialNumber &&
    form.value.issueDate
  )
})

// Methods
const resetForm = () => {
  form.value = {
    type: null,
    company: null,
    plan: null,
    membershipNumber: '',
    scheme: '',
    serialNumber: '',
    issueDate: null,
    expiryDate: null,
    isActive: true,
  }

  // Reset dependent options
  insuranceCompanies.value = []
  insurancePlans.value = []
}

const loadInsuranceTypes = async () => {
  try {
    loadingInsuranceTypes.value = true
    const response = await axiosInstance.get('/insurance/types')
    insuranceTypes.value = response.data.results || response.data || []
  } catch (error) {
    console.error('Error loading insurance types:', error)
    message.error(t('insurance_modal.load_fail'))
    insuranceTypes.value = []
  } finally {
    loadingInsuranceTypes.value = false
  }
}

const loadInsuranceCompanies = async (typeId) => {
  try {
    loadingInsuranceCompanies.value = true
    const response = await axiosInstance.get(`/insurance/companies?type=${typeId}`)
    insuranceCompanies.value = response.data.results || response.data || []
  } catch (error) {
    console.error('Error loading insurance companies:', error)
    message.error(t('insurance_modal.load_fail'))
    insuranceCompanies.value = []
  } finally {
    loadingInsuranceCompanies.value = false
  }
}

const loadInsurancePlans = async (companyLink) => {
  try {
    loadingInsurancePlans.value = true
    const response = await axiosInstance.get(companyLink)
    insurancePlans.value = response.data.results || response.data || []
  } catch (error) {
    console.error('Error loading insurance plans:', error)
    message.error(t('insurance_modal.load_fail'))
    insurancePlans.value = []
  } finally {
    loadingInsurancePlans.value = false
  }
}

const onInsuranceTypeSelect = (selectedType) => {
  // Reset dependent fields
  form.value.company = null
  form.value.plan = null
  insuranceCompanies.value = []
  insurancePlans.value = []

  if (selectedType && selectedType.id) {
    loadInsuranceCompanies(selectedType.id)
  }
}

const onInsuranceCompanySelect = (selectedCompany) => {
  // Reset dependent fields
  form.value.plan = null
  insurancePlans.value = []

  if (selectedCompany && selectedCompany._links?.plans) {
    loadInsurancePlans(selectedCompany._links.plans)
  }
}

const addInsurance = async () => {
  try {
    if (!canSubmit.value) {
      message.warning(t('insurance_modal.fill_required'))
      return
    }

    if (!props.selectedPatient) {
      message.error(t('insurance_modal.no_patient'))
      return
    }

    isSubmitting.value = true

    const payload = {
      patient: props.selectedPatient.uuid,
      insurance_type: form.value.type.id,
      insurance_company: form.value.company.id,
      plan: form.value.plan.id,
      membership_number: form.value.membershipNumber,
      scheme: form.value.scheme,
      serial_number: form.value.serialNumber,
      issue_date: form.value.issueDate ? form.value.issueDate.format('YYYY-MM-DD') : null,
      expiry_date: form.value.expiryDate ? form.value.expiryDate.format('YYYY-MM-DD') : null,
      is_active: form.value.isActive,
    }

    const response = await axiosInstance.post(
      `/patients/${props.selectedPatient.uuid}/insurances`,
      payload
    )

    message.success(t('insurance_modal.add_success'))

    // Emit events
    emit('insurance-added', response.data)
    emit('update:visible', false)

    // Reset form
    resetForm()

    // Close modal
    hideModalById(props.modalId)
  } catch (error) {
    console.error('Error adding insurance:', error)
    message.error(t('insurance_modal.add_fail'))
  } finally {
    isSubmitting.value = false
  }
}

// Watch for patient changes
watch(
  () => props.selectedPatient,
  (newPatient) => {
    if (newPatient) {
      resetForm()
      loadInsuranceTypes()
    }
  },
  { immediate: true }
)

// Initialize data when component mounts
onMounted(() => {
  loadInsuranceTypes()
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
