<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-primary text-white border-0 py-3 px-4">
          <div class="d-flex align-items-center">
            <div>
              <h5 class="modal-title fw-bold text-white mb-1">
                {{ isEditing ? 'Edit Insurance Type' : 'Add Insurance Type' }}
              </h5>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4 bg-light bg-opacity-10">
          <form class="row g-3" @submit.prevent="handleSubmit">
            <!-- Name -->
            <div class="col-12">
              <label class="form-label fw-semibold text-dark fs-13">Name <span class="text-danger">*</span></label>
              <input
                type="text"
                class="form-control shadow-none"
                v-model="form.name"
                placeholder="e.g. private"
                required
              />
            </div>

            <!-- Description -->
            <div class="col-12">
              <label class="form-label fw-semibold text-dark fs-13">Description</label>
              <textarea
                class="form-control shadow-none"
                v-model="form.description"
                rows="3"
                placeholder="Enter description"
              ></textarea>
            </div>

            <!-- Active Status -->
            <div class="col-12">
              <div class="form-check form-switch mt-2">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  :id="`${modalId}_activeStatus`"
                  v-model="form.is_active"
                />
                <label class="form-check-label fw-medium text-dark" :for="`${modalId}_activeStatus`">
                  Active
                </label>
              </div>
            </div>
          </form>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 px-4 pb-4">
          <button type="button" class="btn btn-light fw-medium" data-bs-dismiss="modal">Cancel</button>
          <button
            type="button"
            class="btn btn-primary fw-medium px-4"
            @click="handleSubmit"
            :disabled="isSubmitting || !form.name"
          >
            <LoadingIndicator
              :show="isSubmitting"
              variant="inline"
              size="sm"
              message=""
              ariaLabel="Saving..."
            />
            {{ isSubmitting ? 'Saving...' : 'Save Type' }}
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
  modalId: { type: String, default: 'insurance_type_modal' },
  typeData: { type: Object, default: () => null },
})

const emit = defineEmits(['type-saved'])

const isSubmitting = ref(false)
const isEditing = computed(() => !!props.typeData?.id)

const form = ref({
  name: '',
  description: '',
  is_active: true,
})

const resetForm = () => {
  form.value = {
    name: '',
    description: '',
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
  () => props.typeData,
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
  if (!form.value.name) return

  try {
    isSubmitting.value = true
    const payload = {
      name: form.value.name,
      description: form.value.description,
      is_active: form.value.is_active,
    }

    let response
    if (isEditing.value) {
      response = await axiosInstance.put(`/insurance/types/${props.typeData.id}`, payload)
      message.success('Insurance type updated successfully')
    } else {
      response = await axiosInstance.post('/insurance/types', payload)
      message.success('Insurance type created successfully')
    }

    emit('type-saved', response.data)
    hideModalById(props.modalId)
    if (!isEditing.value) resetForm()
  } catch (error) {
    console.error('Error saving insurance type:', error)
    if (error.response?.data?.data) {
        const errorMessages = Object.entries(error.response.data.data)
        .map(([field, errors]) => `${humanizeFieldLabel(field)}: ${Array.isArray(errors) ? errors.join(', ') : errors}`)
        .join(' | ')
        message.error(errorMessages)
    } else {
        message.error(`Failed to ${isEditing.value ? 'update' : 'create'} insurance type`)
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>
