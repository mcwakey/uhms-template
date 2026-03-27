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

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = $
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

    const initializeDateRangePicker = async () => {
      if (!dateRangeInput.value || isInitialized.value) {
        return
      }

      try {
        await nextTick()

        const momentFn = window.moment || moment.default || moment
        if (typeof momentFn !== 'function') {
          console.error('❌ moment is not a function:', typeof momentFn, momentFn)
          emit('error', 'moment is not a function')
          return
        }

        const defaultStart = momentFn().subtract(6, 'days')
        const defaultEnd = momentFn()

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
        }

        if (props.showRanges) {
          config.ranges = getDefaultRanges()
        }

        if (!$ || !$.fn || !$.fn.daterangepicker) {
          console.error('❌ jQuery daterangepicker not available')
          emit('error', 'jQuery daterangepicker not available')
          return
        }

        const $input = $(dateRangeInput.value)

        if (!$input.length) {
          console.error('❌ jQuery could not find input element')
          emit('error', 'Input element not found')
          return
        }

        if (!$input.is(':visible')) {
          console.warn('⚠️ Input element is not visible')
        }

        await new Promise((resolve) => setTimeout(resolve, 100))

        try {
          $input.daterangepicker(config)

          dateRangeInstance.value = $input.data('daterangepicker')

          if (!dateRangeInstance.value) {
            console.error('❌ Failed to get daterangepicker instance')
            emit('error', 'Failed to initialize daterangepicker')
            return
          }

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

        updateDisplayValue(defaultStart, defaultEnd)

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

    const updateDisplayValue = (startDate, endDate) => {
      if (startDate && endDate) {
        displayValue.value = `${startDate.format(props.format)}${props.separator}${endDate.format(props.format)}`
      }
    }

    const onFocus = () => {
      if (dateRangeInstance.value && dateRangeInstance.value.show) {
        dateRangeInstance.value.show()
      }
    }

    const onBlur = () => {}

    watch(
      () => props.modelValue,
      (newValue) => {
        if (newValue && dateRangeInstance.value && newValue.startDate && newValue.endDate) {
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

    onMounted(async () => {
      await nextTick()
      setTimeout(() => {
        initializeDateRangePicker()
      }, 100)
    })

    onUnmounted(() => {
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
