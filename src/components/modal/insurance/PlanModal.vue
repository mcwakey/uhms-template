<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-primary text-white border-0 py-3 px-4">
          <div class="d-flex align-items-center">
            <div>
              <h5 class="modal-title fw-bold text-white mb-1">
                {{ isEditing ? 'Edit Insurance Plan' : 'Add Insurance Plan' }}
              </h5>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4 bg-light bg-opacity-10">
          <form class="row g-3" @submit.prevent="handleSubmit">
            <!-- Name -->
            <div class="col-12">
              <label class="form-label fw-semibold text-dark fs-13">Plan Name <span class="text-danger">*</span></label>
              <input
                type="text"
                class="form-control shadow-none"
                v-model="form.name"
                placeholder="e.g. Gold Plan"
                required
              />
            </div>

            <!-- Cap & Beneficiaries -->
            <div class="col-md-6">
              <label class="form-label fw-semibold text-dark fs-13">Cap Limit (₵) <span class="text-danger">*</span></label>
              <input
                type="number"
                class="form-control shadow-none"
                v-model="form.cap"
                min="0"
                step="0.01"
                placeholder="0.00"
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold text-dark fs-13">Beneficiaries Limit <span class="text-danger">*</span></label>
              <input
                type="number"
                class="form-control shadow-none"
                v-model="form.beneficiaries"
                min="1"
                placeholder="e.g. 5"
                required
              />
            </div>

            <!-- Description -->
            <div class="col-12">
              <label class="form-label fw-semibold text-dark fs-13">Description</label>
              <textarea
                class="form-control shadow-none"
                v-model="form.description"
                rows="2"
                placeholder="Optional description"
              ></textarea>
            </div>

            <!-- Switches (Card layout) -->
            <div class="col-12 mt-4">
              <div class="card border border-light-subtle shadow-none">
                <div class="card-body p-3">
                  <div class="row g-3">
                    <div class="col-md-4">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          :id="`${modalId}_services`"
                          v-model="form.has_services"
                        />
                        <label class="form-check-label fw-medium text-dark fs-13" :for="`${modalId}_services`">
                          Has Services
                        </label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          :id="`${modalId}_prices`"
                          v-model="form.has_prices"
                        />
                        <label class="form-check-label fw-medium text-dark fs-13" :for="`${modalId}_prices`">
                          Has Prices
                        </label>
                      </div>
                    </div>
                    <div class="col-md-4 border-start">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          :id="`${modalId}_active`"
                          v-model="form.is_active"
                        />
                        <label class="form-check-label fw-bold text-dark fs-13" :for="`${modalId}_active`">
                          Active Status
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 px-4 pb-4 mt-2">
          <button type="button" class="btn btn-light fw-medium" data-bs-dismiss="modal">Cancel</button>
          <button
            type="button"
            class="btn btn-primary fw-medium px-4"
            @click="handleSubmit"
            :disabled="isSubmitting || !form.name || form.cap === '' || form.beneficiaries === ''"
          >
            <LoadingIndicator
              :show="isSubmitting"
              variant="inline"
              size="sm"
              message=""
              ariaLabel="Saving..."
            />
            {{ isSubmitting ? 'Saving...' : 'Save Plan' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import axiosInstance from '@/utils/axios'
import { message } from 'ant-design-vue'
import { hideModalById } from '@/utils/bootstrap'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'

const props = defineProps({
  modalId: { type: String, default: 'insurance_plan_modal' },
  companyId: { type: [String, Number], required: true },
  planData: { type: Object, default: () => null },
})

const emit = defineEmits(['plan-saved'])

const isSubmitting = ref(false)
const isEditing = computed(() => !!props.planData?.id)

const form = ref({
  name: '',
  cap: '',
  beneficiaries: 1,
  description: '',
  has_services: true,
  has_prices: true,
  is_active: true,
})

const resetForm = () => {
  form.value = {
    name: '',
    cap: '',
    beneficiaries: 1,
    description: '',
    has_services: true,
    has_prices: true,
    is_active: true,
  }
}

const humanizeFieldLabel = (raw) => {
  const cleaned = String(raw ?? '').replace(/\[\d+\]/g, '')
  const parts = cleaned.split('.').filter(Boolean)
  let candidate = parts[parts.length - 1] ?? cleaned
  if (candidate === 'name' && parts.length > 1) candidate = parts[parts.length - 2]
  candidate = candidate.replace(/_id$/, '')

  const words = candidate
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)

  const dedupedWords = words.filter(
    (word, index) => index === 0 || word.toLowerCase() !== words[index - 1].toLowerCase()
  )

  return dedupedWords.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

watch(
  () => props.planData,
  (newData) => {
    if (newData) {
      form.value = { ...newData }
    } else {
      resetForm()
    }
  },
  { immediate: true }
)

const handleSubmit = async () => {
  if (!form.value.name || form.value.cap === '' || form.value.beneficiaries === '') return

  try {
    isSubmitting.value = true
    const payload = {
      name: form.value.name,
      cap: String(form.value.cap), // Backend expects string based on docs
      beneficiaries: Number(form.value.beneficiaries),
      description: form.value.description,
      has_services: form.value.has_services,
      has_prices: form.value.has_prices,
      is_active: form.value.is_active,
    }

    let response
    if (isEditing.value) {
      response = await axiosInstance.patch(`/insurance/companies/${props.companyId}/plans/${props.planData.id}`, payload)
      message.success('Plan updated successfully')
    } else {
      response = await axiosInstance.post(`/insurance/companies/${props.companyId}/plans`, payload)
      message.success('Plan created successfully')
    }

    emit('plan-saved', response.data)
    hideModalById(props.modalId)
    if (!isEditing.value) resetForm()
  } catch (error) {
    console.error('Error saving plan:', error)
    if (error.response?.data?.data) {
        const errorMessages = Object.entries(error.response.data.data)
        .map(([field, errors]) => `${humanizeFieldLabel(field)}: ${Array.isArray(errors) ? errors.join(', ') : errors}`)
        .join(' | ')
        message.error(errorMessages)
    } else {
        message.error(`Failed to ${isEditing.value ? 'update' : 'create'} plan.`)
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>
