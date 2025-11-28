<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow">
        <!-- Header -->
        <div class="modal-header border-0 pb-2 bg-gradient-primary text-white">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <div
                class="avatar avatar-sm bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center"
              >
                <i class="ti ti-shield-plus fs-5 text-white"></i>
              </div>
            </div>
            <div>
              <h5 class="fw-bold modal-title mb-0 text-white fs-16">{{ modalTitle }}</h5>
              <p class="mb-0 fs-12 text-white opacity-75" v-if="subtitle">{{ subtitle }}</p>
            </div>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body pt-2">
          <!-- Selected Patient Info -->
          <div v-if="showInfoCard && selectedPatient" class="card bg-light border-0 mb-3">
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
                  <h6 class="mb-0 fw-bold text-dark fs-14">
                    {{ selectedPatient.full_name || 'Patient' }}
                  </h6>
                  <div class="d-flex align-items-center gap-2 text-muted fs-11 flex-wrap">
                    <span v-if="selectedPatient.opd_no">OPD: {{ selectedPatient.opd_no }}</span>
                    <span v-if="selectedPatient.phone">{{ selectedPatient.phone }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Loading State -->
          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary mb-3" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="text-muted">{{ loadingMessage }}</p>
          </div>

          <!-- Form Content -->
          <div v-else class="form">
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Insurance Type<span class="text-danger ms-1">*</span></label
                  >
                  <vue-multiselect
                    v-model="form.type"
                    :options="insuranceTypes"
                    :searchable="true"
                    :close-on-select="true"
                    :clear-on-select="false"
                    :preserve-search="true"
                    placeholder="Select insurance type"
                    label="name"
                    track-by="id"
                    :allow-empty="true"
                    :loading="loadingInsuranceTypes"
                    @select="onInsuranceTypeSelect"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Insurance Company<span class="text-danger ms-1">*</span></label
                  >
                  <vue-multiselect
                    v-model="form.company"
                    :options="insuranceCompanies"
                    :searchable="true"
                    :close-on-select="true"
                    :clear-on-select="false"
                    :preserve-search="true"
                    placeholder="Select insurance company"
                    label="name"
                    track-by="id"
                    :allow-empty="true"
                    :loading="loadingInsuranceCompanies"
                    :disabled="!form.type"
                    @select="onInsuranceCompanySelect"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Insurance Plan<span class="text-danger ms-1">*</span></label
                  >
                  <vue-multiselect
                    v-model="form.plan"
                    :options="insurancePlans"
                    :searchable="true"
                    :close-on-select="true"
                    :clear-on-select="false"
                    :preserve-search="true"
                    placeholder="Select insurance plan"
                    label="name"
                    track-by="id"
                    :allow-empty="true"
                    :loading="loadingInsurancePlans"
                    :disabled="!form.company"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Scheme<span class="text-danger ms-1">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.scheme"
                    placeholder="Enter scheme name"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Membership Number<span class="text-danger ms-1">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.membershipNumber"
                    placeholder="Enter membership number"
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Serial Number<span class="text-danger ms-1">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    v-model="form.serialNumber"
                    placeholder="Enter serial number"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Issue Date<span class="text-danger ms-1">*</span></label
                  >
                  <a-date-picker
                    v-model:value="form.issueDate"
                    class="form-control datetimepicker"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium">Expiry Date</label>
                  <a-date-picker
                    v-model:value="form.expiryDate"
                    class="form-control datetimepicker"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      :id="`${modalId}_activeStatus`"
                      v-model="form.isActive"
                    />
                    <label class="form-check-label" :for="`${modalId}_activeStatus`">
                      Active Insurance
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="row" v-if="form.plan">
              <div class="col-md-12">
                <div class="card bg-light border-0 shadow-sm">
                  <div class="card-body">
                    <h6 class="card-title mb-3 fw-bold">
                      <i class="ti ti-info-circle me-2 text-info"></i>Plan Details
                    </h6>
                    <div class="row g-3">
                      <div class="col-md-4">
                        <small class="text-muted fw-medium">Plan Name</small>
                        <p class="mb-0 fw-bold">{{ form.plan.name || 'N/A' }}</p>
                      </div>
                      <div class="col-md-4">
                        <small class="text-muted fw-medium">Cap Limit</small>
                        <p class="mb-0 fw-bold text-success">${{ form.plan.cap || 'N/A' }}</p>
                      </div>
                      <div class="col-md-4">
                        <small class="text-muted fw-medium">Beneficiaries</small>
                        <p class="mb-0 fw-bold">{{ form.plan.beneficiaries || 'N/A' }}</p>
                      </div>
                    </div>
                    <div class="row mt-2" v-if="form.plan.description">
                      <div class="col-md-12">
                        <small class="text-muted fw-medium">Description</small>
                        <p class="mb-0">{{ form.plan.description }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 pt-0 pb-3 px-3">
          <button type="button" class="btn btn-white border fw-medium px-3 py-2 fs-13" data-bs-dismiss="modal">
            <i class="ti ti-x me-1"></i>Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary fw-medium px-3 py-2 fs-13"
            @click="addInsurance"
            :disabled="isSubmitting || !canSubmit"
          >
            <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-1"></span>
            <i v-else class="ti ti-plus me-1"></i>
            {{ isSubmitting ? submittingText : primaryActionText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue'
import VueMultiselect from 'vue-multiselect'
import axiosInstance from '@/utils/axios'
import { message } from 'ant-design-vue'

export default {
  name: 'AddInsuranceModal',
  components: {
    VueMultiselect,
  },
  props: {
    modalId: {
      type: String,
      default: 'add_insurance_modal',
    },
    modalTitle: {
      type: String,
      default: 'Add Insurance',
    },
    subtitle: {
      type: String,
      default: '',
    },
    selectedPatient: {
      type: Object,
      default: () => null,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    showInfoCard: {
      type: Boolean,
      default: true,
    },
    loadingMessage: {
      type: String,
      default: 'Loading insurance form...',
    },
    primaryActionText: {
      type: String,
      default: 'Add Insurance',
    },
    submittingText: {
      type: String,
      default: 'Adding...',
    },
  },
  emits: ['update:visible', 'insurance-added', 'close'],
  setup(props, { emit }) {
    const loading = ref(false)
    const isSubmitting = ref(false)

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
        const response = await axiosInstance.get('/insurance/types/')
        insuranceTypes.value = response.data.results || response.data || []
      } catch (error) {
        console.error('Error loading insurance types:', error)
        message.error('Failed to load insurance types')
        insuranceTypes.value = []
      } finally {
        loadingInsuranceTypes.value = false
      }
    }

    const loadInsuranceCompanies = async (typeId) => {
      try {
        loadingInsuranceCompanies.value = true
        const response = await axiosInstance.get(`/insurance/companies/?type=${typeId}`)
        insuranceCompanies.value = response.data.results || response.data || []
      } catch (error) {
        console.error('Error loading insurance companies:', error)
        message.error('Failed to load insurance companies')
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
        message.error('Failed to load insurance plans')
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
          message.warning('Please fill in all required fields')
          return
        }

        if (!props.selectedPatient) {
          message.error('No patient selected')
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
          `/patients/${props.selectedPatient.uuid}/insurances/`,
          payload
        )

        message.success('Insurance added successfully')

        // Emit events
        emit('insurance-added', response.data)
        emit('update:visible', false)

        // Reset form
        resetForm()

        // Close modal
        const modalElement = document.getElementById(props.modalId)
        if (modalElement && window.bootstrap) {
          const modal = window.bootstrap.Modal.getInstance(modalElement)
          if (modal) {
            modal.hide()
          }
        }
      } catch (error) {
        console.error('Error adding insurance:', error)
        message.error('Failed to add insurance')
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

    return {
      loading,
      isSubmitting,
      form,
      insuranceTypes,
      insuranceCompanies,
      insurancePlans,
      loadingInsuranceTypes,
      loadingInsuranceCompanies,
      loadingInsurancePlans,
      canSubmit,
      resetForm,
      onInsuranceTypeSelect,
      onInsuranceCompanySelect,
      addInsurance,
    }
  },
}
</script>

<style scoped>
/* Modal header gradient */
.bg-gradient-primary {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
}

/* Close button for white text */
.btn-close-white {
  filter: brightness(0) invert(1);
  opacity: 0.8;
}
.btn-close-white:hover {
  opacity: 1;
}

/* Ensure modal centers properly */
.modal-dialog {
  margin: 1.75rem auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 1rem);
}

/* Form styling */
.form-label {
  font-weight: 500;
  color: #495057;
}

.form-control {
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.125rem rgba(0, 123, 255, 0.15);
}

/* Multiselect styling */
.multiselect {
  border-radius: 0.375rem !important;
  border: 1px solid #e2e8f0 !important;
}

.multiselect__tags {
  border-radius: 0.375rem !important;
  padding: 0.375rem 0.75rem !important;
  min-height: 38px !important;
  font-size: 0.875rem !important;
}

.multiselect__placeholder {
  color: #94a3b8 !important;
  margin-bottom: 0 !important;
  padding-top: 0 !important;
}

.multiselect__option--highlight {
  background: #007bff !important;
}

.multiselect__option--selected {
  background: #f1f5f9 !important;
  color: #334155 !important;
}

/* Card styling */
.card {
  border-radius: 10px;
}

/* Button styling */
.btn-sm {
  font-size: 13px;
  font-weight: 500;
}

/* Font sizes */
.fs-13 {
  font-size: 0.8125rem !important;
}

/* Responsive design */
@media (max-width: 768px) {
  .modal-dialog {
    margin: 0.5rem;
    max-width: calc(100vw - 1rem);
  }
}
</style>
