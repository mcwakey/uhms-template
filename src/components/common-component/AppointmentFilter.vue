<template>
  <form @submit.prevent="applyFilter">
    <div class="filter-body pb-0">
      <!-- Doctor Filter -->
      <div class="mb-3">
        <div class="d-flex align-items-center justify-content-between">
          <label class="form-label mb-1">Doctor</label>
          <a href="javascript:void(0);" class="link-primary mb-1" @click="selectedDoctor = null">Reset</a>
        </div>
        <vue-multiselect
          v-model="selectedDoctor"
          :options="doctors"
          :multiple="false"
          label="name"
          track-by="id"
          placeholder="Select Doctor"
        />
      </div>

      <!-- Service Filter -->
      <div class="mb-3">
        <div class="d-flex align-items-center justify-content-between">
          <label class="form-label mb-1">Service</label>
          <a href="javascript:void(0);" class="link-primary mb-1" @click="selectedService = null">Reset</a>
        </div>
        <vue-multiselect
          v-model="selectedService"
          :options="services"
          :multiple="false"
          label="name"
          track-by="id"
          placeholder="Select Service"
        />
      </div>

      <!-- Status Filter -->
      <div class="mb-3">
        <div class="d-flex align-items-center justify-content-between">
          <label class="form-label mb-1">Status</label>
          <a href="javascript:void(0);" class="link-primary mb-1" @click="selectedStatus = null">Reset</a>
        </div>
        <vue-multiselect
          v-model="selectedStatus"
          :options="statusOptions"
          :multiple="false"
          placeholder="Select Status"
        />
      </div>

      <!-- Mode Filter -->
      <div class="mb-3">
        <div class="d-flex align-items-center justify-content-between">
          <label class="form-label mb-1">Mode</label>
          <a href="javascript:void(0);" class="link-primary mb-1" @click="selectedMode = null">Reset</a>
        </div>
        <vue-multiselect
          v-model="selectedMode"
          :options="modeOptions"
          :multiple="false"
          placeholder="Select Mode"
        />
      </div>
    </div>

    <div class="filter-footer d-flex align-items-center justify-content-end border-top">
      <a href="javascript:void(0);" class="btn btn-light btn-md me-2 fw-medium" @click="$emit('close')">Close</a>
      <button type="submit" class="btn btn-primary btn-md fw-medium">Filter</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  doctors: {
    type: Array,
    default: () => []
  },
  services: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['filter', 'close']);

const selectedDoctor = ref(null);
const selectedService = ref(null);
const selectedStatus = ref(null);
const selectedMode = ref(null);

const statusOptions = ['SCHEDULED', 'IN-PROGRESS', 'COMPLETED', 'CANCELLED', 'RESCHEDULED'];
const modeOptions = ['VIRTUAL', 'IN-PERSON'];

const applyFilter = () => {
  const filters = {};
  
  filters.staff = selectedDoctor.value ? selectedDoctor.value.id : null;
  filters.service = selectedService.value ? selectedService.value.id : null;
  filters.status = selectedStatus.value ? selectedStatus.value : null;
  
  if (selectedMode.value) {
    if (selectedMode.value === 'VIRTUAL') filters.type = true;
    if (selectedMode.value === 'IN-PERSON') filters.type = false;
  } else {
    filters.type = null;
  }

  emit('filter', filters);
};
</script>
