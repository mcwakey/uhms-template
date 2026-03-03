<template>
  <!-- TODO: Implement Delete Todo Modal -->
</template>

<script>
export default {
  name: 'TodoDeleteModal',
  props: {
    showModal: { type: Boolean, default: false },
    todo: { type: Object, default: () => ({}) },
  },
  emits: ['close', 'confirm-delete'],
}
</script>
