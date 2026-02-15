<template>
  <div class="modal fade" id="todo_add" tabindex="-1" aria-hidden="true" v-if="showModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Todo</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label class="form-label">Todo Title</label>
              <input type="text" class="form-control" v-model="form.title" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Tag</label>
              <select class="form-select" v-model="form.tag">
                <option v-for="tag in todoTags" :key="tag" :value="tag">{{ tag }}</option>
              </select>
            </div>
            <div class="text-end">
              <button type="button" class="btn btn-secondary me-2" @click="$emit('close')">Cancel</button>
              <button type="submit" class="btn btn-primary">Add Todo</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoAddModal',
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    todoTags: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      form: {
        title: '',
        tag: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('add-todo', { ...this.form });
      this.form.title = '';
      this.form.tag = '';
      this.$emit('close');
    }
  }
}
</script>
