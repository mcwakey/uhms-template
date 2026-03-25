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
          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary mb-3" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="text-muted fw-medium">{{ displayLoadingMessage }}</p>
          </div>

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
            @click="updateInsurance"
            :disabled="isSubmitting || !canSubmit"
          >
            <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
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
import dayjs from 'dayjs'
import { hideModalById } from '@/utils/bootstrap'

const props = defineProps({
  modalId: { type: String, default: 'edit_insurance_modal' },
  modalTitle: { type: String, default: undefined },
  subtitle: { type: String, default: '' },
  selectedPatient: { type: Object, default: () => null },
  insuranceData: { type: Object, default: () => null },
  visible: { type: Boolean, default: false },
  showInfoCard: { type: Boolean, default: true },
  loadingMessage: { type: String, default: undefined },
  primaryActionText: { type: String, default: undefined },
  submittingText: { type: String, default: undefined },
})

const displayTitle = computed(() => props.modalTitle || t('insurance_modal.edit_title'))
const displayLoadingMessage = computed(() => props.loadingMessage || t('insurance_modal.loading_details'))
const displayPrimaryActionText = computed(() => props.primaryActionText || t('common.save_changes'))
const displaySubmittingText = computed(() => props.submittingText || t('common.saving'))

const emit = defineEmits(['update:visible', 'insurance-updated', 'close'])

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

const populateForm = async () => {
  if (!props.insuranceData) return

  loading.value = true
  try {
    // Ensure types are loaded
    if (insuranceTypes.value.length === 0) {
      await loadInsuranceTypes()
    }

    const data = props.insuranceData

    // Set basic fields
    form.value.membershipNumber = data.membership_number
    form.value.scheme = data.scheme
    form.value.serialNumber = data.serial_number
    form.value.issueDate = data.issue_date ? dayjs(data.issue_date) : null
    form.value.expiryDate = data.expiry_date ? dayjs(data.expiry_date) : null
    form.value.isActive = data.is_active ?? data.status

    // Set Type
    // Assuming data.insurance_type is an ID or object. If it's an ID, we find it in insuranceTypes.
    // If the API returns nested objects, we use them directly.
    // Let's assume the API returns IDs or we need to match them.
    // Based on AddInsuranceModal, we send IDs.
    // If the insuranceData comes from the list in patient-view, it might have nested objects or just IDs.
    // Looking at patient-view.vue, insurance object has `plan` which has `company`.
    // It seems the structure in patient-view might be different from what we expect for editing.
    // We might need to fetch the full insurance details if the list item is partial.
    // For now, let's try to map what we have.

    // If we have the type ID or object
    if (data.insurance_type) {
        const typeId = typeof data.insurance_type === 'object' ? data.insurance_type.id : data.insurance_type
        const foundType = insuranceTypes.value.find(t => t.id === typeId)
        if (foundType) {
            form.value.type = foundType
            await loadInsuranceCompanies(foundType.id)
        }
    }

    // If we have company
    if (data.insurance_company) {
        const companyId = typeof data.insurance_company === 'object' ? data.insurance_company.id : data.insurance_company
        const foundCompany = insuranceCompanies.value.find(c => c.id === companyId)
        if (foundCompany) {
            form.value.company = foundCompany
            if (foundCompany._links?.plans) {
                await loadInsurancePlans(foundCompany._links.plans)
            }
        }
    }

    // If we have plan
    if (data.plan) {
        const planId = typeof data.plan === 'object' ? data.plan.id : data.plan
        const foundPlan = insurancePlans.value.find(p => p.id === planId)
        if (foundPlan) {
            form.value.plan = foundPlan
        }
    }

  } catch (error) {
    console.error('Error populating form:', error)
    message.error(t('insurance_modal.load_fail'))
  } finally {
    loading.value = false
  }
}

const updateInsurance = async () => {
  try {
    if (!canSubmit.value) {
      message.warning(t('insurance_modal.fill_required'))
      return
    }

    if (!props.selectedPatient) {
      message.error(t('insurance_modal.no_patient'))
      return
    }

    if (!props.insuranceData || !props.insuranceData.id) {
        message.error(t('insurance_modal.invalid_data'))
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

    const response = await axiosInstance.put(
      `/patients/${props.selectedPatient.uuid}/insurances/${props.insuranceData.id}`,
      payload
    )

    message.success(t('insurance_modal.update_success'))

    // Emit events
    emit('insurance-updated', response.data)
    emit('update:visible', false)

    // Close modal
    hideModalById(props.modalId)
  } catch (error) {
    console.error('Error updating insurance:', error)
    message.error(t('insurance_modal.update_fail'))
  } finally {
    isSubmitting.value = false
  }
}

// Watch for insurance data changes to populate form
watch(
  () => props.insuranceData,
  (newData) => {
    if (newData) {
      populateForm()
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
