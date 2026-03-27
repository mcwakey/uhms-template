<template>
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content">
      <div class="modal-body text-center position-relative z-1">
        <img
          src="@/assets/img/bg/delete-modal-bg-01.png"
          alt=""
          class="img-fluid position-absolute top-0 start-0 z-n1"
        />
        <img
          src="@/assets/img/bg/delete-modal-bg-02.png"
          alt=""
          class="img-fluid position-absolute bottom-0 end-0 z-n1"
        />
        <div class="mb-3">
          <span class="avatar avatar-lg bg-danger text-white"
            ><i class="ti ti-trash fs-24"></i
          ></span>
        </div>
        <h5 class="fw-bold mb-1">{{ title }}</h5>
        <p class="mb-3">{{ message }}</p>
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-light position-relative z-1 me-3"
            data-bs-dismiss="modal"
          >
            {{ cancelText }}
          </button>
          <button
            type="button"
            class="btn btn-danger position-relative z-1"
            data-bs-dismiss="modal"
            @click="emit('confirm')"
          >
            {{ confirmText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: 'Delete Confirmation' },
  message: { type: String, default: 'Are you sure want to delete?' },
  confirmText: { type: String, default: 'Yes, Delete' },
  cancelText: { type: String, default: 'Cancel' },
})

const emit = defineEmits(['confirm'])
</script>
