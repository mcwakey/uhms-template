<template>
  <div class="modal fade" :id="modalId" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header border-bottom">
          <div class="d-flex align-items-center">
            <div class="service-icon me-3">
              <div class="avatar avatar-lg bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center">
                <i class="ti ti-briefcase text-primary fs-4"></i>
              </div>
            </div>
            <div>
              <h5 class="modal-title fw-bold mb-1">{{ serviceData.name }}</h5>
              <span class="badge" :class="serviceData.status === 'active' ? 'badge-soft-success' : 'badge-soft-danger'">
                {{ serviceData.status === 'active' ? 'Active' : 'Inactive' }}
              </span>
            </div>
          </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body p-0">
          <!-- Tabs Navigation -->
          <ul class="nav nav-tabs nav-tabs-solid bg-light px-3 pt-2" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-bs-toggle="tab" href="#details-tab" role="tab">
                <i class="ti ti-info-circle me-1"></i> Details
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#pricing-tab" role="tab">
                <i class="ti ti-currency-dollar me-1"></i> Default Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#insurance-tab" role="tab">
                <i class="ti ti-building me-1"></i> Insurance Pricing
              </a>
            </li>
          </ul>

          <!-- Tabs Content -->
          <div class="tab-content p-3">
            <!-- Details Tab -->
            <div class="tab-pane fade show active" id="details-tab" role="tabpanel">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label fw-semibold text-muted fs-12">SERVICE NAME</label>
                  <p class="mb-0 fw-medium">{{ serviceData.name || '-' }}</p>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold text-muted fs-12">SERVICE CODE</label>
                  <p class="mb-0"><code class="bg-light px-2 py-1 rounded">{{ serviceData.code || '-' }}</code></p>
                </div>
                <div class="col-12">
                  <label class="form-label fw-semibold text-muted fs-12">DESCRIPTION</label>
                  <p class="mb-0 text-muted">{{ serviceData.description || 'No description available' }}</p>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold text-muted fs-12">SPECIALIZATION</label>
                  <p class="mb-0">
                    <span v-if="serviceData.specialization" class="badge badge-soft-info">
                      {{ serviceData.specialization.name || serviceData.specialization }}
                    </span>
                    <span v-else class="text-muted">-</span>
                  </p>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold text-muted fs-12">STATUS</label>
                  <p class="mb-0">
                    <span :class="['badge', serviceData.status === 'active' ? 'badge-soft-success' : 'badge-soft-danger']">
                      {{ serviceData.status === 'active' ? 'Active' : 'Inactive' }}
                    </span>
                  </p>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold text-muted fs-12">HAS RESULT</label>
                  <p class="mb-0">
                    <span :class="['badge', serviceData.has_result ? 'badge-soft-success' : 'badge-soft-secondary']">
                      {{ serviceData.has_result ? 'Yes' : 'No' }}
                    </span>
                  </p>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold text-muted fs-12">HAS STOCK</label>
                  <p class="mb-0">
                    <span :class="['badge', serviceData.has_stock ? 'badge-soft-success' : 'badge-soft-secondary']">
                      {{ serviceData.has_stock ? 'Yes' : 'No' }}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Default Pricing Tab -->
            <div class="tab-pane fade" id="pricing-tab" role="tabpanel">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="mb-0 fw-semibold">
                  <i class="ti ti-currency-dollar text-primary me-1"></i>
                  Default Pricing Plans
                </h6>
                <div class="btn-group">
                  <button v-if="servicePricing.length === 0" type="button" class="btn btn-sm btn-outline-primary" @click="$emit('initialize-default-pricing')">
                    <i class="ti ti-settings me-1"></i> Initialize Default Pricing
                  </button>
                  <template v-else>
                    <button type="button" class="btn btn-sm btn-outline-primary" @click="$emit('add-new-default-pricing')">
                      <i class="ti ti-plus me-1"></i> Add
                    </button>
                    <button v-if="!hasEditingPricing && servicePricing.length > 0" type="button" class="btn btn-sm btn-outline-secondary" @click="$emit('edit-all-default-pricing')">
                      <i class="ti ti-edit me-1"></i> Edit All
                    </button>
                    <button v-if="hasEditingPricing" type="button" class="btn btn-sm btn-success" :disabled="isBulkSaving" @click="$emit('save-all-default-pricing')">
                      <span v-if="isBulkSaving" class="spinner-border spinner-border-sm me-1"></span>
                      <i v-else class="ti ti-check me-1"></i> Save All
                    </button>
                    <button v-if="hasEditingPricing" type="button" class="btn btn-sm btn-outline-danger" @click="$emit('cancel-all-default-pricing')">
                      <i class="ti ti-x me-1"></i> Cancel
                    </button>
                  </template>
                </div>
              </div>

              <div v-if="servicePricing.length === 0 && !isLoadingInsuranceTypes" class="text-center py-5">
                <i class="ti ti-currency-dollar-off text-muted fs-1 d-block mb-3"></i>
                <p class="text-muted mb-3">No pricing plans configured for this service</p>
                <button type="button" class="btn btn-primary btn-sm" @click="$emit('initialize-default-pricing')">
                  <i class="ti ti-settings me-1"></i> Initialize Default Pricing
                </button>
              </div>

              <div v-else-if="isLoadingInsuranceTypes" class="text-center py-5">
                <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
                <p class="text-muted mt-2">Loading pricing data...</p>
              </div>

              <div v-else class="pricing-list">
                <div v-for="(pricing, index) in servicePricing" :key="index" class="card border mb-2" :class="{ 'border-primary': pricing.isEditing }">
                  <div class="card-body p-3">
                    <div class="row align-items-center g-2">
                      <div class="col-md-4">
                        <label class="form-label fs-12 text-muted mb-1">Insurance Type</label>
                        <select v-if="pricing.isEditing" v-model="pricing.price_type" class="form-select form-select-sm" @change="$emit('update-default-pricing', index)">
                          <option value="">Select Type</option>
                          <option v-for="type in insuranceTypes" :key="type.id" :value="type.id">{{ type.label }}</option>
                        </select>
                        <span v-else class="badge badge-soft-info">{{ getInsuranceTypeName(pricing.price_type) }}</span>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label fs-12 text-muted mb-1">Price (GH₵)</label>
                        <div v-if="pricing.isEditing" class="input-group input-group-sm">
                          <span class="input-group-text">₵</span>
                          <input type="number" class="form-control" v-model="pricing.price" step="0.01" min="0" @input="$emit('update-default-pricing', index)">
                        </div>
                        <span v-else class="fw-bold text-success fs-5">GH₵ {{ formatPrice(pricing.price) }}</span>
                      </div>
                      <div class="col-md-5 text-end">
                        <template v-if="pricing.isEditing">
                          <button type="button" class="btn btn-sm btn-success me-1" :disabled="isPricingSaving" @click="$emit('save-default-pricing', index)">
                            <span v-if="isPricingSaving" class="spinner-border spinner-border-sm"></span>
                            <i v-else class="ti ti-check"></i>
                          </button>
                          <button type="button" class="btn btn-sm btn-outline-secondary me-1" @click="$emit('cancel-edit-default-pricing', index)"><i class="ti ti-x"></i></button>
                        </template>
                        <template v-else>
                          <button type="button" class="btn btn-sm btn-outline-primary me-1" @click="$emit('edit-default-pricing', index)"><i class="ti ti-edit"></i></button>
                        </template>
                        <button type="button" class="btn btn-sm btn-outline-danger" @click="$emit('delete-default-pricing', index)"><i class="ti ti-trash"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Insurance Company Pricing Tab -->
            <div class="tab-pane fade" id="insurance-tab" role="tabpanel">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="mb-0 fw-semibold">
                  <i class="ti ti-building text-primary me-1"></i>
                  Insurance Company Pricing
                </h6>
                <button type="button" class="btn btn-sm btn-outline-primary" @click="$emit('add-new-insurance-pricing')">
                  <i class="ti ti-plus me-1"></i> Add Company Pricing
                </button>
              </div>

              <div v-if="insuranceCompanyPricing.length === 0 && !isLoadingInsuranceCompanies" class="text-center py-5">
                <i class="ti ti-building-off text-muted fs-1 d-block mb-3"></i>
                <p class="text-muted mb-3">No insurance company-specific pricing configured</p>
                <button type="button" class="btn btn-primary btn-sm" @click="$emit('add-new-insurance-pricing')">
                  <i class="ti ti-plus me-1"></i> Add Company Pricing
                </button>
              </div>

              <div v-else-if="isLoadingInsuranceCompanies" class="text-center py-5">
                <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
                <p class="text-muted mt-2">Loading insurance companies...</p>
              </div>

              <div v-else class="pricing-list">
                <div v-for="(pricing, index) in insuranceCompanyPricing" :key="index" class="card border mb-2" :class="{ 'border-primary': pricing.isEditing }">
                  <div class="card-body p-3">
                    <div class="row align-items-center g-2">
                      <div class="col-md-4">
                        <label class="form-label fs-12 text-muted mb-1">Insurance Company</label>
                        <select v-if="pricing.isEditing" v-model="pricing.insurance_company_id" class="form-select form-select-sm" @change="$emit('update-insurance-pricing', index)">
                          <option value="">Select Company</option>
                          <option v-for="company in insuranceCompanies" :key="company.id" :value="company.id">{{ company.name }}</option>
                        </select>
                        <span v-else class="badge badge-soft-purple">{{ getInsuranceCompanyName(pricing.insurance_company_id) }}</span>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label fs-12 text-muted mb-1">Price (GH₵)</label>
                        <div v-if="pricing.isEditing" class="input-group input-group-sm">
                          <span class="input-group-text">₵</span>
                          <input type="number" class="form-control" v-model="pricing.price" step="0.01" min="0" @input="$emit('update-insurance-pricing', index)">
                        </div>
                        <span v-else class="fw-bold text-success fs-5">GH₵ {{ formatPrice(pricing.price) }}</span>
                      </div>
                      <div class="col-md-5 text-end">
                        <template v-if="pricing.isEditing">
                          <button type="button" class="btn btn-sm btn-success me-1" :disabled="isInsurancePricingSaving" @click="$emit('save-insurance-pricing', index)">
                            <span v-if="isInsurancePricingSaving" class="spinner-border spinner-border-sm"></span>
                            <i v-else class="ti ti-check"></i>
                          </button>
                          <button type="button" class="btn btn-sm btn-outline-secondary me-1" @click="$emit('cancel-edit-insurance-pricing', index)"><i class="ti ti-x"></i></button>
                        </template>
                        <template v-else>
                          <button type="button" class="btn btn-sm btn-outline-primary me-1" @click="$emit('edit-insurance-pricing', index)"><i class="ti ti-edit"></i></button>
                        </template>
                        <button type="button" class="btn btn-sm btn-outline-danger" @click="$emit('delete-insurance-pricing', index)"><i class="ti ti-trash"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer border-top">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">
            <i class="ti ti-x me-1"></i> Close
          </button>
          <button type="button" class="btn btn-warning" @click="editService">
            <i class="ti ti-edit me-1"></i> Edit Service
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { hideModalById, showModalById } from '@/utils/bootstrap'

const props = defineProps({
  modalId: {
    type: String,
    default: 'view_service'
  },
  serviceData: {
    type: Object,
    default: () => ({
      id: null,
      name: '',
      code: '',
      description: '',
      specialization: null,
      status: '',
      has_result: false,
      has_stock: false
    })
  },
  servicePricing: {
    type: Array,
    default: () => []
  },
  insuranceCompanyPricing: {
    type: Array,
    default: () => []
  },
  insuranceTypes: {
    type: Array,
    default: () => []
  },
  insuranceCompanies: {
    type: Array,
    default: () => []
  },
  isLoadingInsuranceTypes: {
    type: Boolean,
    default: false
  },
  isLoadingInsuranceCompanies: {
    type: Boolean,
    default: false
  },
  hasEditingPricing: {
    type: Boolean,
    default: false
  },
  isPricingSaving: {
    type: Boolean,
    default: false
  },
  isBulkSaving: {
    type: Boolean,
    default: false
  },
  isInsurancePricingSaving: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'edit-service',
  'save-all-default-pricing',
  'cancel-all-default-pricing',
  'edit-all-default-pricing',
  'add-new-default-pricing',
  'initialize-default-pricing',
  'update-default-pricing',
  'delete-default-pricing',
  'cancel-edit-default-pricing',
  'save-default-pricing',
  'edit-default-pricing',
  'add-new-insurance-pricing',
  'edit-insurance-pricing',
  'save-insurance-pricing',
  'cancel-edit-insurance-pricing',
  'delete-insurance-pricing',
  'update-insurance-pricing'
])

const formatPrice = (value) => {
  if (!value) return '0.00'
  return parseFloat(value).toFixed(2)
}

const getInsuranceTypeName = (typeId) => {
  const type = props.insuranceTypes.find(t => t.id === typeId || t.value === typeId)
  return type ? type.label || type.display_name : `Type ${typeId}`
}

const getInsuranceCompanyName = (companyId) => {
  const company = props.insuranceCompanies.find(c => c.id === companyId)
  return company ? company.name : `Company ${companyId}`
}

const editService = () => {
  hideModalById(props.modalId)
  emit('edit-service', props.serviceData)
}

const open = () => {
  showModalById(props.modalId)
}

defineExpose({ open })
</script>

<style scoped>
.nav-tabs-solid .nav-link {
  border: none;
  border-radius: 0;
  color: #6b7280;
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.nav-tabs-solid .nav-link:hover {
  color: #3b82f6;
  background-color: rgba(59, 130, 246, 0.05);
}

.nav-tabs-solid .nav-link.active {
  color: #3b82f6;
  background-color: #fff;
  border-bottom: 2px solid #3b82f6;
}

.badge-soft-success {
  background-color: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.badge-soft-danger {
  background-color: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.badge-soft-info {
  background-color: rgba(14, 165, 233, 0.1);
  color: #0ea5e9;
  border: 1px solid rgba(14, 165, 233, 0.2);
}

.badge-soft-secondary {
  background-color: rgba(107, 114, 128, 0.1);
  color: #6b7280;
  border: 1px solid rgba(107, 114, 128, 0.2);
}

.badge-soft-purple {
  background-color: rgba(147, 51, 234, 0.1);
  color: #9333ea;
  border: 1px solid rgba(147, 51, 234, 0.2);
}

.bg-primary-subtle {
  background-color: rgba(59, 130, 246, 0.1) !important;
}

.pricing-list .card {
  transition: all 0.2s ease;
}

.pricing-list .card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.pricing-list .card.border-primary {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.input-group-sm .input-group-text {
  font-size: 0.875rem;
}

.tab-content {
  min-height: 350px;
}

.modal-dialog-scrollable .modal-body {
  max-height: calc(100vh - 200px);
}
</style>
