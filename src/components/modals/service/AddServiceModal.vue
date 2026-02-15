<template>
  <div class="modal fade" id="add_service" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">New Service</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form @submit.prevent="handleSubmit">
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Service Name<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" v-model="form.name" required />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Department<span class="text-danger ms-1">*</span></label
              >
              <select class="form-select" v-model="form.specialization_id" required>
                  <option value="" disabled>Select Department</option>
                  <option v-for="spec in specializations" :key="spec.id" :value="spec.id">
                      {{ spec.name }}
                  </option>
              </select>
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Price<span class="text-danger ms-1">*</span></label
              >
              <input type="number" class="form-control" v-model="form.price" required />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" :disabled="isLoading">
              {{ isLoading ? 'Adding...' : 'Add New Service' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const props = defineProps({
  specializations: {
    type: Array,
    default: () => []
  },
  isLoadingSpecializations: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['service-created']);

const modalRef = ref(null);
const isLoading = ref(false);

const form = reactive({
  name: '',
  specialization_id: '',
  price: ''
});

const open = () => {
  // Reset form or perform other initialization
  form.name = '';
  form.specialization_id = '';
  form.price = '';
};

const handleSubmit = async () => {
  isLoading.value = true;
  try {
      emit('service-created', { ...form });
      // Reset form
      form.name = '';
      form.specialization_id = '';
      form.price = '';
  } catch (error) {
      console.error(error);
  } finally {
      isLoading.value = false;
  }
};

defineExpose({
  open
});
</script>
