<template>
  <div class="filter-body pb-0">
    <div class="mb-3">
      <label class="form-label">{{ $t('patients.gender') }}</label>
      <select class="form-select" v-model="filters.gender">
        <option value="">{{ $t('patients.all') }}</option>
        <option value="Male">{{ $t('patients.male') }}</option>
        <option value="Female">{{ $t('patients.female') }}</option>
        <option value="Other">{{ $t('patients.other') }}</option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">{{ $t('patients.dob') }}</label>
      <input 
        type="text" 
        class="form-control" 
        v-model="filters.dobRange" 
        placeholder="Select date range"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">{{ $t('patients.address') }}</label>
      <input 
        type="text" 
        class="form-control" 
        v-model="filters.address" 
        placeholder="enter a locality or city"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">{{ $t('patients.last_visit') }}</label>
      <input 
        type="text" 
        class="form-control" 
        v-model="filters.lvdRange" 
        placeholder="Select date range"
      />
    </div>
  </div>
  <div class="filter-footer d-flex align-items-center justify-content-end border-top">
    <button type="button" class="btn btn-light btn-md me-2 fw-medium" @click="resetFilters">
      {{ $t('patients.reset') }}
    </button>
    <button type="button" class="btn btn-primary btn-md fw-medium" @click="applyFilters">
      {{ $t('patients.apply_filter') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emit = defineEmits(['filter'])

const filters = reactive({
  gender: '',
  status: '',
  dobRange: '',
  address: '',
  lvdRange: '',
})

const applyFilters = () => {
  emit('filter', { ...filters })
}

const resetFilters = () => {
  filters.gender = ''
  filters.status = ''
  filters.dobRange = ''
  filters.address = ''
  filters.lvdRange = ''
  emit('filter', { ...filters })
}

defineExpose({ resetFilters })
</script>
