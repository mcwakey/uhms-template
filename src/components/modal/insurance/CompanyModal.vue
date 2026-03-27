<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-primary text-white border-0 py-3 px-4">
          <div class="d-flex align-items-center">
            <div>
              <h5 class="modal-title fw-bold text-white mb-1">
                {{ isEditing ? 'Edit Insurance Company' : 'Add Insurance Company' }}
              </h5>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4 bg-light bg-opacity-10">
          <form class="row g-3" @submit.prevent="handleSubmit">
            
            <!-- Type -->
            <div class="col-12">
              <label class="form-label fw-semibold text-dark fs-13">Insurance Type <span class="text-danger">*</span></label>
              <vue-multiselect
                v-model="form.typeObj"
                :options="insuranceTypes"
                :searchable="true"
                :close-on-select="true"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="Select an insurance type"
                label="name"
                track-by="id"
                :allow-empty="false"
                :loading="loadingTypes"
                class="custom-multiselect"
              />
            </div>

            <!-- Name -->
            <div class="col-12">
              <label class="form-label fw-semibold text-dark fs-13">Company Name <span class="text-danger">*</span></label>
              <input
                type="text"
                class="form-control shadow-none"
                v-model="form.name"
                placeholder="e.g. Acacia Health Insurance"
                required
              />
            </div>

            <!-- Contact Defaults -->
            <div class="col-md-6">
              <label class="form-label fw-semibold text-dark fs-13">Phone</label>
              <input
                type="text"
                class="form-control shadow-none"
                v-model="form.phone"
                placeholder="e.g. 0200112233"
              />
            </div>
            <div class="col-md-6">
              <label class="form-label fw-semibold text-dark fs-13">Email</label>
              <input
                type="email"
                class="form-control shadow-none"
                v-model="form.email"
                placeholder="e.g. info@example.com"
              />
            </div>

            <!-- Active Status -->
            <div class="col-12 mt-3">
              <div class="form-check form-switch bg-white border p-3 rounded d-flex align-items-center justify-content-between">
                <div>
                  <label class="form-check-label fw-bold text-dark fs-13 mb-0" :for="`${modalId}_activeStatus`">
                    Active Status
                  </label>
                  <span class="d-block text-muted fs-12 mt-1">If disabled, this company cannot be assigned to patients.</span>
                </div>
                <input
                  class="form-check-input ms-0 mt-0"
                  type="checkbox"
                  role="switch"
                  :id="`${modalId}_activeStatus`"
                  v-model="form.is_active"
                />
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
            :disabled="isSubmitting || !form.name || !form.typeObj"
          >
            <LoadingIndicator
              :show="isSubmitting"
              variant="inline"
              size="sm"
              message=""
              ariaLabel="Saving..."
            />
            {{ isSubmitting ? 'Saving...' : 'Save Company' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import axiosInstance from '@/utils/axios'
import { message } from 'ant-design-vue'
import { hideModalById } from '@/utils/bootstrap'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'
import VueMultiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'

const props = defineProps({
  modalId: { type: String, default: 'insurance_company_modal' },
  companyData: { type: Object, default: () => null },
})

const emit = defineEmits(['company-saved'])

const isSubmitting = ref(false)
const isEditing = computed(() => !!props.companyData?.id)

const insuranceTypes = ref([])
const loadingTypes = ref(false)

const form = ref({
  name: '',
  typeObj: null,
  phone: '',
  email: '',
  is_active: true,
})

const resetForm = () => {
  form.value = {
    name: '',
    typeObj: null,
    phone: '',
    email: '',
    is_active: true,
  }
}

const loadTypes = async () => {
  try {
    loadingTypes.value = true
    const response = await axiosInstance.get('/insurance/types')
    insuranceTypes.value = response.data.results || response.data.data || []
  } catch (error) {
    message.error('Failed to load insurance types for selection.')
  } finally {
    loadingTypes.value = false
  }
}

watch(
  () => props.companyData,
  (newData) => {
    if (newData) {
      form.value = {
        name: newData.name,
        phone: newData.phone,
        email: newData.email,
        is_active: newData.is_active,
        typeObj: null,
      }
      
      // Match the type object based on the API type ID
      if (newData.type && insuranceTypes.value.length) {
        form.value.typeObj = insuranceTypes.value.find(t => t.id === newData.type) || null
      }
    } else {
      resetForm()
    }
  },
  { immediate: true }
)

// In case types load after companyData is set edit mode
watch(insuranceTypes, (newTypes) => {
  if (isEditing.value && props.companyData?.type && !form.value.typeObj) {
    form.value.typeObj = newTypes.find(t => t.id === props.companyData.type) || null
  }
})

const handleSubmit = async () => {
  if (!form.value.name || !form.value.typeObj) return

  try {
    isSubmitting.value = true
    const payload = {
      name: form.value.name,
      type: form.value.typeObj.id,
      phone: form.value.phone,
      email: form.value.email,
      is_active: form.value.is_active,
    }

    let response
    if (isEditing.value) {
      response = await axiosInstance.patch(`/insurance/companies/${props.companyData.id}`, payload)
      message.success('Company updated successfully')
    } else {
      response = await axiosInstance.post('/insurance/companies', payload)
      message.success('Company created successfully')
    }

    emit('company-saved', response.data)
    hideModalById(props.modalId)
    if (!isEditing.value) resetForm()
  } catch (error) {
    console.error('Error saving company:', error)
    if (error.response?.data?.data) {
        const errorMessages = Object.entries(error.response.data.data)
        .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(', ') : errors}`)
        .join(' | ')
        message.error(errorMessages)
    } else {
        message.error(`Failed to ${isEditing.value ? 'update' : 'create'} company`)
    }
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  loadTypes()
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
</style>
