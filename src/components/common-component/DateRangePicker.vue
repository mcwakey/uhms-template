<!--
  Reusable DateRangePicker Component

  A Vue 3 component that wraps the bootstrap-daterangepicker library with
  modern Vue 3 composition API and provides a clean interface for date range selection.

  Features:
  - Dynamic loading of dependencies (moment.js, jQuery, daterangepicker)
  - Fully customizable appearance and behavior
  - Built-in range presets (Today, Yesterday, Last 7 Days, etc.)
  - Event-driven architecture with v-model support
  - Error handling and fallback support
  - Responsive design with Bootstrap integration

  Usage Example:
  ```vue
  <template>
    <DateRangePicker
      v-model="dateRange"
      placeholder="Select date range"
      :show-ranges="true"
      @apply="handleDateRangeApply"
      @error="handleError"
    />
  </template>

  <script>
  import DateRangePicker from '@/components/common-component/DateRangePicker.vue';

  export default {
    components: { DateRangePicker },
    setup() {
      const dateRange = ref({
        startDate: null,
        endDate: null
      });

      const handleDateRangeApply = (data) => {
        console.log('Date range selected:', data);
        // data.startDate, data.endDate (YYYY-MM-DD format)
        // data.startMoment, data.endMoment (moment objects)
      };

      const handleError = (error) => {
        console.error('DateRangePicker error:', error);
      };

      return { dateRange, handleDateRangeApply, handleError };
    }
  };
  ```
-->
<template>
  <div class="date-range-picker-wrapper">
    <div class="input-icon-start position-relative">
      <span v-if="showIcon" class="input-icon-addon text-dark me-1">
        <i class="ti ti-calendar-event me-1"></i>
      </span>
      <input
        ref="dateRangeInput"
        type="text"
        :class="inputClass"
        :placeholder="placeholder"
        :readonly="readonly"
        :disabled="disabled"
        :value="displayValue"
        @focus="onFocus"
        @blur="onBlur"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import $ from 'jquery'
import moment from 'moment'
import 'daterangepicker'
import 'daterangepicker/daterangepicker.css'

// Set up globals for daterangepicker
// Ensure moment is properly exposed as a function
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = $
  // moment might be a module with a default export, so we need to handle both cases
  window.moment = moment.default || moment
}

export default {
  name: 'DateRangePicker',
  props: {
    modelValue: {
      type: Object,
      default: () => ({
        startDate: null,
        endDate: null,
      }),
    },
    inputClass: {
      type: String,
      default: 'form-control form-control-sm bookingrange',
    },
    placeholder: {
      type: String,
      default: 'Select date range',
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    readonly: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autoApply: {
      type: Boolean,
      default: true,
    },
    opens: {
      type: String,
      default: 'left',
      validator: (value) => ['left', 'right', 'center'].includes(value),
    },
    drops: {
      type: String,
      default: 'down',
      validator: (value) => ['down', 'up'].includes(value),
    },
    format: {
      type: String,
      default: 'M/D/YYYY',
    },
    separator: {
      type: String,
      default: ' - ',
    },
    showRanges: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue', 'apply', 'cancel', 'show', 'hide', 'error'],
  setup(props, { emit }) {
    const dateRangeInput = ref(null)
    const dateRangeInstance = ref(null)
    const displayValue = ref('')
    const isInitialized = ref(false)

    // Default ranges function
    const getDefaultRanges = () => {
      const momentFn = window.moment || moment.default || moment
      return {
        Today: [momentFn(), momentFn()],
        Yesterday: [momentFn().subtract(1, 'days'), momentFn().subtract(1, 'days')],
        'Last 7 Days': [momentFn().subtract(6, 'days'), momentFn()],
        'Last 30 Days': [momentFn().subtract(29, 'days'), momentFn()],
        'This Month': [momentFn().startOf('month'), momentFn().endOf('month')],
        'Last Month': [
          momentFn().subtract(1, 'month').startOf('month'),
          momentFn().subtract(1, 'month').endOf('month'),
        ],
      }
    }

    // Initialize the daterangepicker
    const initializeDateRangePicker = async () => {
      if (!dateRangeInput.value || isInitialized.value) {
        return
      }

      try {
        // Wait for next tick to ensure DOM is ready
        await nextTick()

        // Verify moment is available and is a function
        const momentFn = window.moment || moment.default || moment
        if (typeof momentFn !== 'function') {
          console.error('❌ moment is not a function:', typeof momentFn, momentFn)
          emit('error', 'moment is not a function')
          return
        }

        // Set default start and end dates using the verified moment function
        const defaultStart = momentFn().subtract(6, 'days')
        const defaultEnd = momentFn()

        // Create locale configuration
        const locale = {
          format: props.format,
          separator: props.separator,
          applyLabel: 'Apply',
          cancelLabel: 'Cancel',
          fromLabel: 'From',
          toLabel: 'To',
          customRangeLabel: 'Custom',
          weekLabel: 'W',
          daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          firstDay: 1,
        }

        // Create daterangepicker configuration
        const config = {
          startDate: defaultStart,
          endDate: defaultEnd,
          autoApply: props.autoApply,
          locale: locale,
          opens: props.opens,
          drops: props.drops,
          showDropdowns: true,
          showWeekNumbers: false,
          showISOWeekNumbers: false,
          timePicker: false,
          autoUpdateInput: true,
          linkedCalendars: false,
          buttonClasses: 'btn btn-sm',
          applyClass: 'btn-success',
          cancelClass: 'btn-secondary',
          // Don't specify parentEl, let daterangepicker handle it automatically
        }

        // Add ranges if enabled
        if (props.showRanges) {
          config.ranges = getDefaultRanges()
        }

        // Validate jQuery and daterangepicker availability
        if (!$ || !$.fn || !$.fn.daterangepicker) {
          console.error('❌ jQuery daterangepicker not available')
          emit('error', 'jQuery daterangepicker not available')
          return
        }

        // Initialize with jQuery
        const $input = $(dateRangeInput.value)

        if (!$input.length) {
          console.error('❌ jQuery could not find input element')
          emit('error', 'Input element not found')
          return
        }

        // Ensure the input is visible and properly attached to DOM
        if (!$input.is(':visible')) {
          console.warn('⚠️ Input element is not visible')
        }

        // Add a small delay to ensure everything is ready
        await new Promise((resolve) => setTimeout(resolve, 100))

        try {
          // Initialize the daterangepicker first
          $input.daterangepicker(config)

          // Get the instance
          dateRangeInstance.value = $input.data('daterangepicker')

          if (!dateRangeInstance.value) {
            console.error('❌ Failed to get daterangepicker instance')
            emit('error', 'Failed to initialize daterangepicker')
            return
          }

          // Event handlers - attach after successful initialization
          $input.on('apply.daterangepicker', (ev, picker) => {
            handleApply(picker.startDate, picker.endDate, picker.chosenLabel)
          })

          $input.on('cancel.daterangepicker', (ev, picker) => {
            handleCancel(picker)
          })

          $input.on('show.daterangepicker', (ev, picker) => {
            handleShow(picker)
          })

          $input.on('hide.daterangepicker', (ev, picker) => {
            handleHide(picker)
          })

          console.log('✅ DateRangePicker initialized with jQuery')
        } catch (error) {
          console.error('❌ Error initializing daterangepicker:', error)
          emit('error', `Failed to initialize daterangepicker: ${error.message}`)
          return
        }

        // Set initial display value
        updateDisplayValue(defaultStart, defaultEnd)

        // Emit initial value
        emit('update:modelValue', {
          startDate: defaultStart.format('YYYY-MM-DD'),
          endDate: defaultEnd.format('YYYY-MM-DD'),
          startMoment: defaultStart,
          endMoment: defaultEnd,
        })

        isInitialized.value = true
        console.log('✅ DateRangePicker initialized successfully')
      } catch (error) {
        console.error('❌ Error initializing DateRangePicker:', error)
        emit('error', error.message)
      }
    }

    // Event handlers
    const handleApply = (startDate, endDate, label) => {
      updateDisplayValue(startDate, endDate)

      const result = {
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate.format('YYYY-MM-DD'),
        startMoment: startDate,
        endMoment: endDate,
        label: label,
      }

      emit('update:modelValue', result)
      emit('apply', result)
    }

    const handleCancel = (picker) => {
      emit('cancel', picker)
    }

    const handleShow = (picker) => {
      emit('show', picker)
    }

    const handleHide = (picker) => {
      emit('hide', picker)
    }

    // Update display value
    const updateDisplayValue = (startDate, endDate) => {
      if (startDate && endDate) {
        displayValue.value = `${startDate.format(props.format)}${props.separator}${endDate.format(props.format)}`
      }
    }

    // Focus and blur handlers
    const onFocus = () => {
      if (dateRangeInstance.value && dateRangeInstance.value.show) {
        dateRangeInstance.value.show()
      }
    }

    const onBlur = () => {
      // Optional: Handle blur event if needed
    }

    // Watch for prop changes
    watch(
      () => props.modelValue,
      (newValue) => {
        if (
          newValue &&
          dateRangeInstance.value &&
          newValue.startDate &&
          newValue.endDate
        ) {
          const momentFn = window.moment || moment.default || moment
          const startDate = momentFn(newValue.startDate)
          const endDate = momentFn(newValue.endDate)

          if (dateRangeInstance.value.setStartDate && dateRangeInstance.value.setEndDate) {
            dateRangeInstance.value.setStartDate(startDate)
            dateRangeInstance.value.setEndDate(endDate)
          }

          updateDisplayValue(startDate, endDate)
        }
      },
      { deep: true }
    )

    // Public methods
    const setDateRange = (startDate, endDate) => {
      if (dateRangeInstance.value) {
        const momentFn = window.moment || moment.default || moment
        const start = momentFn(startDate)
        const end = momentFn(endDate)

        if (dateRangeInstance.value.setStartDate && dateRangeInstance.value.setEndDate) {
          dateRangeInstance.value.setStartDate(start)
          dateRangeInstance.value.setEndDate(end)
        }

        updateDisplayValue(start, end)

        emit('update:modelValue', {
          startDate: start.format('YYYY-MM-DD'),
          endDate: end.format('YYYY-MM-DD'),
          startMoment: start,
          endMoment: end,
        })
      }
    }

    const show = () => {
      if (dateRangeInstance.value && dateRangeInstance.value.show) {
        dateRangeInstance.value.show()
      }
    }

    const hide = () => {
      if (dateRangeInstance.value && dateRangeInstance.value.hide) {
        dateRangeInstance.value.hide()
      }
    }

    const clear = () => {
      displayValue.value = ''
      emit('update:modelValue', {
        startDate: null,
        endDate: null,
        startMoment: null,
        endMoment: null,
      })
    }

    // Lifecycle hooks
    onMounted(async () => {
      await nextTick()
      // Add a small delay to ensure DOM is ready
      setTimeout(() => {
        initializeDateRangePicker()
      }, 100)
    })

    onUnmounted(() => {
      // Cleanup
      if (dateRangeInstance.value && $) {
        try {
          const $input = $(dateRangeInput.value)
          if ($input.length) {
            $input.off('apply.daterangepicker')
            $input.off('cancel.daterangepicker')
            $input.off('show.daterangepicker')
            $input.off('hide.daterangepicker')

            if ($input.data('daterangepicker')) {
              $input.data('daterangepicker').remove()
            }
          }
        } catch (error) {
          console.warn('⚠️ Error cleaning up DateRangePicker:', error)
        }
      }
    })

    return {
      dateRangeInput,
      displayValue,
      onFocus,
      onBlur,
      // Public methods
      setDateRange,
      show,
      hide,
      clear,
    }
  },
}
</script>

<style scoped>
.date-range-picker-wrapper {
  position: relative;
}

.input-icon-start {
  position: relative;
}

.input-icon-addon {
  position: absolute;
  /* left: 4px; */
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  pointer-events: none;
}

.input-icon-start input {
  padding-left: 35px;
}

.input-icon-start input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.input-icon-start input[readonly] {
  background-color: #fff;
  cursor: pointer;
}

.input-icon-start input[disabled] {
  background-color: #f8f9fa;
  cursor: not-allowed;
}
</style>
