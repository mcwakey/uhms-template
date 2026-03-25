<template>
  <div v-if="showModal">
    <div class="modal fade show d-block" tabindex="-1" role="dialog" @click.self="emitClose">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Delete Todo</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="emitClose"></button>
          </div>
          <div class="modal-body">
            <div class="mb-2">Are you sure you want to delete this todo?</div>
            <div class="fw-semibold">{{ todo?.title || 'Todo' }}</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" @click="emitClose">Cancel</button>
            <button type="button" class="btn btn-danger" @click="confirmDelete">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  showModal: boolean
  todo: any
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'confirm-delete', todo: any): void
}>()

const emitClose = () => {
  emit('close')
}

const confirmDelete = () => {
  emit('confirm-delete', props.todo)
  emitClose()
}
</script>
