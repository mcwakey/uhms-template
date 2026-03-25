<template>
  <div v-if="showModal">
    <div class="modal fade show d-block" tabindex="-1" role="dialog" @click.self="emitClose">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Todo Details</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="emitClose"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <div class="fw-semibold">{{ todo?.title || 'Todo' }}</div>
              <div class="text-muted mt-1 white-space-pre-wrap">{{ todo?.description || '' }}</div>
            </div>

            <div class="row g-2">
              <div class="col-md-6">
                <div class="text-muted">Tag</div>
                <div>{{ todo?.tag || '-' }}</div>
              </div>
              <div class="col-md-6">
                <div class="text-muted">Priority</div>
                <div>{{ todo?.priority || '-' }}</div>
              </div>
              <div class="col-md-6">
                <div class="text-muted">Assignee</div>
                <div>{{ todo?.assignee || '-' }}</div>
              </div>
              <div class="col-md-6">
                <div class="text-muted">Status</div>
                <div>{{ todo?.status || '-' }}</div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" @click="emitClose">Close</button>
            <button type="button" class="btn btn-danger" @click="requestDelete">Delete</button>
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
  (e: 'delete-todo', todo: any): void
}>()

const emitClose = () => {
  emit('close')
}

const requestDelete = () => {
  emit('delete-todo', props.todo)
  emitClose()
}
</script>

<style scoped>
.white-space-pre-wrap {
  white-space: pre-wrap;
}
</style>
