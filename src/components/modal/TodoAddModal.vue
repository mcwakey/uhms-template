<template>
  <div v-if="showModal">
    <div class="modal fade show d-block" tabindex="-1" role="dialog" @click.self="emitClose">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Todo</h5>
            <button type="button" class="btn-close" aria-label="Close" @click="emitClose"></button>
          </div>
          <div class="modal-body">
            <div class="row g-3">
              <div class="col-12">
                <label class="form-label">Title</label>
                <input v-model="form.title" type="text" class="form-control" />
              </div>
              <div class="col-12">
                <label class="form-label">Description</label>
                <textarea v-model="form.description" class="form-control" rows="4"></textarea>
              </div>
              <div class="col-md-6">
                <label class="form-label">Tag</label>
                <select v-model="form.tag" class="form-select">
                  <option value="">Select</option>
                  <option v-for="t in todoTags" :key="t.value ?? t" :value="t.value ?? t">
                    {{ t.name ?? t.label ?? t }}
                  </option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label">Priority</label>
                <select v-model="form.priority" class="form-select">
                  <option value="">Select</option>
                  <option v-for="p in priorities" :key="p.value ?? p" :value="p.value ?? p">
                    {{ p.name ?? p.label ?? p }}
                  </option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label">Assignee</label>
                <select v-model="form.assignee" class="form-select">
                  <option value="">Select</option>
                  <option v-for="a in assignees" :key="a.value ?? a" :value="a.value ?? a">
                    {{ a.name ?? a.label ?? a }}
                  </option>
                </select>
              </div>
              <div class="col-md-6">
                <label class="form-label">Status</label>
                <select v-model="form.status" class="form-select">
                  <option value="">Select</option>
                  <option v-for="s in statuses" :key="s.value ?? s" :value="s.value ?? s">
                    {{ s.name ?? s.label ?? s }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light" @click="emitClose">Cancel</button>
            <button type="button" class="btn btn-primary" @click="submit">Add</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show"></div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'

const props = defineProps<{
  showModal: boolean
  todoTags: any[]
  priorities: any[]
  assignees: any[]
  statuses: any[]
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'add-todo', todo: any): void
}>()

const form = reactive({
  title: '',
  description: '',
  tag: '',
  priority: '',
  assignee: '',
  status: '',
})

const reset = () => {
  form.title = ''
  form.description = ''
  form.tag = ''
  form.priority = ''
  form.assignee = ''
  form.status = ''
}

const emitClose = () => {
  emit('close')
}

const submit = () => {
  emit('add-todo', { ...form })
  reset()
  emitClose()
}

watch(
  () => props.showModal,
  (open) => {
    if (open) reset()
  }
)
</script>
