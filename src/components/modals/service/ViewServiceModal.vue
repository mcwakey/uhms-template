<template>
  <div class="modal fade" id="view_service" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Service Details</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
            <h5>{{ serviceData.name }}</h5>
            <p>{{ serviceData.description }}</p>
            <div v-if="serviceData.specialization">
                <strong>Department:</strong> {{ serviceData.specialization.name }}
            </div>
            <div>
                <strong>Status:</strong> {{ serviceData.status }}
            </div>
            <!-- Pricing section placeholder -->
            <div class="mt-3">
                <h6>Pricing</h6>
                <div v-if="servicePricing && servicePricing.length">
                    <div v-for="price in servicePricing" :key="price.id">
                        {{ price.name }}: {{ price.amount }}
                    </div>
                </div>
                <div v-else>
                    No pricing available.
                </div>
            </div>
        </div>
        <div class="modal-footer">
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
             <button type="button" class="btn btn-primary" @click="$emit('edit-service', serviceData)">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  serviceData: {
      type: Object,
      default: () => ({})
  },
  servicePricing: Array,
  insuranceCompanyPricing: Array,
  insuranceTypes: Array,
  insuranceCompanies: Array,
  isLoadingInsuranceTypes: Boolean,
  isLoadingInsuranceCompanies: Boolean,
  hasEditingPricing: Boolean,
  isPricingSaving: Boolean,
  isBulkSaving: Boolean,
  isInsurancePricingSaving: Boolean
});

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
]);

const modalRef = ref(null);

const open = () => {
    // Logic to open modal if needed
};

defineExpose({
    open
});
</script>
