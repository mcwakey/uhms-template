<template>
  <div class="d-flex align-items-center justify-content-end gap-2">
    <a
      v-if="showView"
      href="javascript:void(0);"
      :title="viewTitle"
      class="action-icon text-primary"
      @click.prevent="emit('view')"
    >
      <i class="ti ti-eye"></i>
    </a>
    <a
      v-if="showEdit"
      href="javascript:void(0);"
      :title="editTitle"
      class="action-icon text-warning"
      @click.prevent="emit('edit')"
    >
      <i class="ti ti-edit"></i>
    </a>
    <a
      v-if="showDelete"
      href="javascript:void(0);"
      :title="deleteTitle"
      class="action-icon text-danger"
      @click.prevent="emit('delete')"
    >
      <i class="ti ti-trash"></i>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  showView: { type: Boolean, default: true },
  showEdit: { type: Boolean, default: true },
  showDelete: { type: Boolean, default: true },
  viewTitle: { type: String, default: 'View' },
  editTitle: { type: String, default: 'Edit' },
  deleteTitle: { type: String, default: 'Delete' },
})

const emit = defineEmits(['view', 'edit', 'delete'])
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
