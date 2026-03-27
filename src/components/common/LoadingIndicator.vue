<template>
  <div v-if="show" :class="outerClass" :style="outerStyle">
    <div :class="innerClass">
      <div :class="spinnerClass" role="status">
        <span class="visually-hidden">{{ ariaLabel }}</span>
      </div>
      <span v-if="variant === 'inline' && message" :class="messageClass">{{ message }}</span>
      <p v-else-if="message" :class="messageClass">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  show: { type: Boolean, default: false },
  message: { type: String, default: 'Loading...' },
  variant: { type: String, default: 'center' },
  spinner: { type: String, default: 'border' },
  size: { type: String, default: 'md' },
  colorClass: { type: String, default: 'text-primary' },
  ariaLabel: { type: String, default: 'Loading...' },
  wrapperClass: { type: String, default: '' },
  contentClass: { type: String, default: '' },
  messageClass: { type: String, default: 'mt-3 text-muted' },
  zIndex: { type: [Number, String], default: 1050 },
  overlayBackdropClass: { type: String, default: 'bg-white bg-opacity-75' },
})

const outerClass = computed(() => {
  if (props.variant === 'overlay') {
    return [
      'position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center',
      props.overlayBackdropClass,
      props.wrapperClass,
    ]
      .filter(Boolean)
      .join(' ')
  }

  if (props.variant === 'inline') {
    return ['d-inline-flex align-items-center', props.wrapperClass].filter(Boolean).join(' ')
  }

  return ['d-flex align-items-center justify-content-center', props.wrapperClass].filter(Boolean).join(' ')
})

const innerClass = computed(() => {
  if (props.variant === 'inline') {
    return ['d-inline-flex align-items-center', props.contentClass].filter(Boolean).join(' ')
  }

  return ['text-center', props.contentClass].filter(Boolean).join(' ')
})

const outerStyle = computed(() => {
  if (props.variant !== 'overlay') return undefined
  return { zIndex: String(props.zIndex) }
})

const spinnerClass = computed(() => {
  const spinnerBase = props.spinner === 'grow' ? 'spinner-grow' : 'spinner-border'
  const spinnerSizeClass = props.size === 'sm' ? `${spinnerBase}-sm` : ''

  return [spinnerBase, spinnerSizeClass, props.colorClass, props.variant === 'inline' ? 'me-2' : '']
    .filter(Boolean)
    .join(' ')
})
</script>
