<template>
  <!-- TODO: Implement Add Todo Modal -->
</template>

<script>
export default {
  name: 'TodoAddModal',
  props: {
    showModal: { type: Boolean, default: false },
    todoTags: { type: Array, default: () => [] },
    priorities: { type: Array, default: () => [] },
    assignees: { type: Array, default: () => [] },
    statuses: { type: Array, default: () => [] },
  },
  emits: ['close', 'add-todo'],
}
</script>
