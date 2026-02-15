<template>
  <div class="modal fade" id="todo_delete" tabindex="-1" aria-hidden="true" v-if="showModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Delete Todo</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to delete this todo?</p>
          <div class="alert alert-warning" v-if="todo">
            {{ todo.title }}
          </div>
          <div class="text-end">
            <button type="button" class="btn btn-secondary me-2" @click="$emit('close')">Cancel</button>
            <button type="button" class="btn btn-danger" @click="handleDelete">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoDeleteModal',
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    todo: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    handleDelete() {
      this.$emit('confirm-delete', this.todo);
      this.$emit('close');
    }
  }
}
</script>
