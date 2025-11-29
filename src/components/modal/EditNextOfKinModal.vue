<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-gradient-primary text-white border-0 py-3 px-4">
          <div class="d-flex align-items-center">
            <div>
              <h5 class="modal-title fw-bold text-white mb-1">{{ displayTitle }}</h5>
              <!-- <p class="mb-0 text-white text-opacity-75 fs-13" v-if="displaySubtitle">{{ displaySubtitle }}</p> -->
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
            <form class="row g-3">
              <!-- Name -->
              <div class="col-12">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('next_of_kin_modal.full_name') }} <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text bg-white border-end-0"><i class="ti ti-user text-muted"></i></span>
                  <input
                    type="text"
                    class="form-control border-start-0 shadow-none ps-0"
                    v-model="form.name"
                    :placeholder="t('next_of_kin_modal.enter_full_name')"
                  />
                </div>
              </div>

              <!-- Relationship -->
              <div class="col-12">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('next_of_kin_modal.relationship') }} <span class="text-danger">*</span></label>
                <vue-multiselect
                  v-model="form.relation"
                  :options="relationshipOptions"
                  :searchable="false"
                  :close-on-select="true"
                  :placeholder="t('next_of_kin_modal.select_relationship')"
                  class="custom-multiselect"
                />
              </div>

              <!-- Phone -->
              <div class="col-12">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('next_of_kin_modal.phone_number') }} <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text bg-white border-end-0"><i class="ti ti-phone text-muted"></i></span>
                  <input
                    type="text"
                    class="form-control border-start-0 shadow-none ps-0"
                    v-model="form.phone"
                    :placeholder="t('next_of_kin_modal.enter_phone')"
                  />
                </div>
              </div>

              <!-- Other Phones -->
              <div class="col-12">
                <label class="form-label fw-semibold text-dark fs-13">{{ t('next_of_kin_modal.other_phones') }}</label>
                <div class="input-group">
                  <span class="input-group-text bg-white border-end-0"><i class="ti ti-phone-plus text-muted"></i></span>
                  <input
                    type="text"
                    class="form-control border-start-0 shadow-none ps-0"
                    v-model="form.other_phones"
                    :placeholder="t('next_of_kin_modal.enter_other_phones')"
                  />
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
            @click="updateNextOfKin"
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
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import VueMultiselect from 'vue-multiselect'
import axiosInstance from '@/utils/axios'
import { message } from 'ant-design-vue'

const props = defineProps({
  modalId: { type: String, default: 'edit_next_of_kin_modal' },
  modalTitle: { type: String, default: undefined },
  subtitle: { type: String, default: undefined },
  patientId: { type: String, required: true },
  currentData: { type: Object, default: () => ({}) },
  loadingMessage: { type: String, default: undefined },
  primaryActionText: { type: String, default: undefined },
  submittingText: { type: String, default: undefined },
})

const displayTitle = computed(() => props.modalTitle || t('next_of_kin_modal.edit_title'))
const displaySubtitle = computed(() => props.subtitle || t('next_of_kin_modal.subtitle'))
const displayLoadingMessage = computed(() => props.loadingMessage || t('next_of_kin_modal.loading_details'))
const displayPrimaryActionText = computed(() => props.primaryActionText || t('common.save_changes'))
const displaySubmittingText = computed(() => props.submittingText || t('common.saving'))

const emit = defineEmits(['updated'])

const { t } = useI18n()
const loading = ref(false)
const isSubmitting = ref(false)

// Form data
const form = ref({
  name: '',
  relation: '',
  phone: '',
  other_phones: '',
})

const relationshipOptions = [
  'Spouse',
  'Parent',
  'Child',
  'Sibling',
  'Friend',
  'Other'
]

// Computed properties
const canSubmit = computed(() => {
  return form.value.name && form.value.relation && form.value.phone
})

// Methods
const populateForm = () => {
  if (props.currentData) {
    form.value.name = props.currentData.name || ''
    form.value.relation = props.currentData.relation || ''
    form.value.phone = props.currentData.phone || ''
    form.value.other_phones = props.currentData.other_phones || ''
  }
}

const updateNextOfKin = async () => {
  try {
    if (!canSubmit.value) {
      message.warning(t('next_of_kin_modal.fill_required'))
      return
    }

    isSubmitting.value = true

    const payload = {
      emergency_contact: {
        name: form.value.name,
        relation: form.value.relation,
        phone: form.value.phone,
        other_phones: form.value.other_phones,
      }
    }

    // Assuming the endpoint updates the patient object which contains emergency_contact
    const response = await axiosInstance.patch(
      `/patients/${props.patientId}/`,
      payload
    )

    message.success(t('next_of_kin_modal.update_success'))

    // Emit events
    emit('updated', response.data)

    // Close modal
    const modalElement = document.getElementById(props.modalId)
    if (modalElement && window.bootstrap) {
      const modal = window.bootstrap.Modal.getInstance(modalElement)
      if (modal) {
        modal.hide()
      }
    }
  } catch (error) {
    console.error('Error updating next of kin:', error)
    message.error(t('next_of_kin_modal.update_fail'))
  } finally {
    isSubmitting.value = false
  }
}

// Watch for data changes to populate form
watch(
  () => props.currentData,
  (newData) => {
    populateForm()
  },
  { immediate: true, deep: true }
)
</script>

<style scoped>
.bg-gradient-primary {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
}

.btn-close-white {
  filter: brightness(0) invert(1);
  opacity: 0.8;
}
.btn-close-white:hover {
  opacity: 1;
}

.custom-multiselect :deep(.multiselect__tags) {
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  padding-top: 6px;
}

.custom-multiselect :deep(.multiselect__placeholder) {
  margin-bottom: 0;
  padding-top: 2px;
}
</style>
