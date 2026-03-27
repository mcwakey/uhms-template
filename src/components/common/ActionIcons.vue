<template>
  <div class="d-flex align-items-center justify-content-end gap-2">
    <slot name="prepend"></slot>
    <button
      v-if="showAppointment"
      type="button"
      :title="appointmentTitle"
      class="action-icon"
      :class="appointmentClass"
      @click="emit('appointment')"
    >
      <i class="ti ti-calendar-event"></i>
    </button>
    <button
      v-if="showView"
      type="button"
      :title="viewTitle"
      class="action-icon text-primary"
      @click="emit('view')"
    >
      <i class="ti ti-eye"></i>
    </button>
    <button
      v-if="showEdit"
      type="button"
      :title="editTitle"
      class="action-icon text-warning"
      @click="emit('edit')"
    >
      <i class="ti ti-edit"></i>
    </button>
    <button
      v-if="showDelete"
      type="button"
      :title="deleteTitle"
      class="action-icon text-danger"
      @click="emit('delete')"
    >
      <i class="ti ti-trash"></i>
    </button>
    <slot name="append"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  showAppointment: { type: Boolean, default: false },
  showView: { type: Boolean, default: true },
  showEdit: { type: Boolean, default: true },
  showDelete: { type: Boolean, default: false },
  appointmentTitle: { type: String, default: 'Appointments' },
  viewTitle: { type: String, default: 'View' },
  editTitle: { type: String, default: 'Edit' },
  deleteTitle: { type: String, default: 'Delete' },
  appointmentClass: { type: String, default: 'text-primary' },
})

const emit = defineEmits(['appointment', 'view', 'edit', 'delete'])
</script>

<style>
.action-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  background-color: #ffffff;
}
.action-icon:hover {
  background-color: #f8fafc;
  border-color: #cbd5e1;
}
.action-icon i {
  font-size: 18px;
}
</style>
