<template>
  <!-- TODO: Implement View Todo Modal -->
</template>

<script>
export default {
  name: 'TodoViewModal',
  props: {
    showModal: { type: Boolean, default: false },
    todo: { type: Object, default: () => ({}) },
  },
  emits: ['close', 'delete-todo'],
}
</script>
