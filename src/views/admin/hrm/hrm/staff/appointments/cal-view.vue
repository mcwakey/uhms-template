<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">Appointment</h4>
        </div>

        <div class="text-end d-flex">
          <!-- dropdown-->
          <div class="dropdown me-1">
            <a
              href="javascript:void(0);"
              class="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Export<i class="ti ti-chevron-down ms-2"></i>
            </a>
            <ul class="dropdown-menu p-2">
              <li>
                <a class="dropdown-item" href="#">Download as PDF</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Download as Excel</a>
              </li>
            </ul>
          </div>
          <div
            class="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center"
          >
            <router-link
              :to="{ name: 'StaffAppointments', params: { id: staffId } }"
              class="bg-white rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-list fs-14 text-dark"></i
            ></router-link>
            <router-link
              :to="{ name: 'StaffCalendar', params: { id: staffId } }"
              class="bg-light rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-calendar-event fs-14 text-body"></i>
            </router-link>
          </div>

          <!-- <a
            href="javascript:void(0);"
            class="btn btn-primary ms-2 fs-13 btn-md"
            data-bs-toggle="offcanvas"
            data-bs-target="#new_appointment"
            ><i class="ti ti-plus me-1"></i> Add Appointment
          </a> -->
        </div>
      </div>
      <!-- End Page Header -->

      <!--  Start Filter -->
      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="d-flex align-items-center gap-2">
          <div class="search-set mb-3">
            <div class="d-flex align-items-center flex-wrap gap-2">
              <div class="table-search d-flex align-items-center mb-0">
                <div class="search-input">
                  <a href="javascript:void(0);" class="btn-searchset"></a>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex right-content align-items-center flex-wrap mb-3">
            <div class="input-icon-start position-relative">
              <span class="input-icon-addon text-dark">
                <i class="ti ti-calendar-event"></i>
              </span>
              <input
                type="text"
                class="form-control form-control-sm bookingrange"
                ref="dateRangeInput"
              />
            </div>
          </div>
        </div>

        <div
          class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3"
        >
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <i class="ti ti-filter text-gray-5 me-1"></i>Filters
            </a>
            <div
              class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
              id="filter-dropdown"
            >
              <div
                class="d-flex align-items-center justify-content-between border-bottom filter-header"
              >
                <h4 class="mb-0 fw-bold">Filter</h4>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-danger text-decoration-underline"
                    >Clear All</a
                  >
                </div>
              </div>
              <filter-index></filter-index>
            </div>
          </div>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
            >
              <span class="me-1"> Sort By : </span> Recent
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Recently Added</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Ascending</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Desending</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Last Month</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Last 7 Days</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--  End Filter -->
      <!-- Start Card -->
      <div class="card mb-0">
        <div class="card-body">
          <!-- Error message -->
          <div
            v-if="errorMessage"
            class="alert alert-danger d-flex align-items-center"
            role="alert"
          >
            <i class="ti ti-alert-circle me-2"></i>
            <div>{{ errorMessage }}</div>
            <button
              type="button"
              class="btn-close ms-auto"
              @click="errorMessage = null"
              aria-label="Close"
            ></button>
          </div>

          <!-- Calendar -->
          <div id="calendar">
            <FullCalendar ref="calendarEl" :options="calendarOptions" style="min-height: 600px" />
          </div>
        </div>
      </div>
      <!-- end card -->
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy;
        <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All Rights Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>
  <!-- ========================
        End Page Content
    ========================= -->

  <!-- Start View Details -->
  <AppointmentDetailsCanvas
    :appointment="selectedAppointmentData"
    canvas-id="view_appointment_details"
    :loading="!selectedAppointmentData?.id"
    :is-telehealth-enabled="isTelehealthEnabled"
    @update-status="updateAppointmentStatus"
    @reschedule="openRescheduleModal"
    @toggle-telehealth="toggleTelehealth"
  />
  <!-- End View Details -->

  <!-- Reusable Reschedule Modal -->
  <RescheduleModal
    v-model:visible="showRescheduleModal"
    :appointment="selectedAppointmentData"
    :services="availableServices"
    :services-loading="servicesLoading"
    :loading="rescheduleLoading"
    :show-debug-info="isDevelopment"
    :show-debug-button="isDevelopment"
    @save="handleRescheduleSave"
    @debug="testAppointmentAPI"
  />

  <!-- New Appointment Offcanvas -->
  <!-- <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="new_appointment">
    <div class="offcanvas-header d-block pb-0 px-0">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="offcanvas-title fs-18 fw-bold">
          New Appointment
        </h5>
        <button
          type="button"
          class="btn-close text-reset custom-btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="ti ti-x"></i>
        </button>
      </div>
    </div>
    <div class="offcanvas-body pt-0 px-0">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-center">
          <div class="mb-4">
            <i class="ti ti-calendar-plus fs-1 text-primary"></i>
          </div>
          <h6 class="mb-3">Create New Appointment</h6>
          <p class="text-muted mb-4">Use the full appointment creation page for comprehensive appointment management.</p>
          <router-link
            to="/admin/clinic/appointments/create"
            class="btn btn-primary"
            data-bs-dismiss="offcanvas"
          >
            <i class="ti ti-plus me-2"></i>Create Appointment
          </router-link>
        </div>
      </div>
    </div>
  </div> -->

  <!-- <calendar-modal></calendar-modal> -->
</template>

<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { ref, onMounted, computed, watch } from 'vue'
import { message } from 'ant-design-vue'
// TODO: Re-implement daterangepicker and moment.js later
// import "daterangepicker/daterangepicker.css";
// import "daterangepicker/daterangepicker.js";
// import _moment from "moment";
// const moment = _moment;
// import DateRangePicker from "daterangepicker";
import { useAppointmentStore } from '@/stores/appointmentStore'
import { useRoute } from 'vue-router'
// import { useRouter } from 'vue-router'; // TODO: Uncomment when appointment details route is created
import CalendarModal from '@/components/modal/calendar-modal.vue'
import FilterIndex from '@/components/common-component/filter-index.vue'
import AppointmentDetailsCanvas from '@/components/common-component/AppointmentDetailsCanvas.vue'
import RescheduleModal from '@/components/modal/RescheduleModal.vue'
import axiosInstance from '@/utils/axios'

// Static imports for default avatars
import doctorDefaultAvatar from '@/assets/img/doctors/doctor-03.jpg'
import patientDefaultAvatar from '@/assets/img/users/avatar-2.jpg'

export default {
  components: {
    FullCalendar,
    CalendarModal,
    FilterIndex,
    AppointmentDetailsCanvas,
    RescheduleModal,
  },
  setup() {
    const dateRangeInput = ref(null)
    const calendarEl = ref(null)
    const appointments = ref([])
    const selectedAppointment = ref(null)
    const errorMessage = ref(null)
    // const router = useRouter(); // TODO: Uncomment when appointment details route is created
    const route = useRoute()
    const AppointmentsStore = useAppointmentStore()
    // Get staff ID from route params
    const staffId = computed(() => route.params.id)

    // Reactive Telehealth functionality
    const isTelehealthEnabled = ref(false)

    // Reschedule modal state
    const showRescheduleModal = ref(false)
    const rescheduleLoading = ref(false)
    const servicesLoading = ref(false)
    const availableServices = ref([])

    // Development mode check
    const isDevelopment = computed(() => {
      return import.meta.env.DEV || false
    })

    // Enhanced computed properties for better data formatting and presentation
    const selectedAppointmentData = computed(() => {
      const appointment = AppointmentsStore.selectedAppointment
      if (!appointment) return null

      return {
        // Raw data
        ...appointment,

        // Enhanced computed fields
        patientDisplayName:
          appointment.patient_name ||
          appointment.patient?.name ||
          appointment.patient?.full_name ||
          'Unknown Patient',
        doctorDisplayName:
          appointment.staff_name ||
          appointment.doctor?.name ||
          appointment.doctor?.full_name ||
          appointment.staff?.name ||
          'Unknown Doctor',
        serviceDisplayName: appointment.service?.name || appointment.service_name || 'No Service',
        serviceCode: appointment.service?.code || appointment.service_code || null,

        // Avatar handling with fallbacks
        patientAvatar:
          appointment.patient_avatar || appointment.patient?.avatar || patientDefaultAvatar,
        doctorAvatar:
          appointment.doctor_avatar ||
          appointment.doctor?.avatar ||
          appointment.staff?.avatar ||
          doctorDefaultAvatar,

        // Status handling
        statusDisplay: appointment.status || 'PENDING',

        // Mode/Type handling
        appointmentMode: appointment.mode || appointment.type || 'In-Person',

        // Date/Time formatting
        formattedDate: appointment.start_date ? formatDate(appointment.start_date) : 'Not set',
        formattedTime: formatTimeRange(appointment.start_time, appointment.end_time),

        // Location handling
        locationDisplay: appointment.location || appointment.clinic?.name || 'Not specified',

        // Additional info
        appointmentNumber: appointment.appointment_number || appointment.id || 'N/A',
        notes: appointment.notes || appointment.description || null,
      }
    })

    // Computed property for telehealth status based on appointment mode
    const isTelehealthAppointment = computed(() => {
      const appointment = selectedAppointmentData.value
      if (!appointment) return false

      const mode = appointment.appointmentMode?.toLowerCase()
      return mode === 'telehealth' || mode === 'online' || mode === 'virtual' || mode === 'remote'
    })

    // Watch for appointment changes to initialize telehealth status
    watch(
      () => AppointmentsStore.selectedAppointment,
      (newAppointment) => {
        if (newAppointment) {
          const mode =
            newAppointment.mode?.toLowerCase() || newAppointment.type?.toLowerCase() || ''
          isTelehealthEnabled.value =
            mode === 'telehealth' || mode === 'online' || mode === 'virtual' || mode === 'remote'
        } else {
          isTelehealthEnabled.value = false
        }
      },
      { immediate: true, deep: true }
    )

    // Enhanced telehealth toggle method
    const toggleTelehealth = async () => {
      if (!AppointmentsStore.selectedAppointment) return

      const appointmentId = AppointmentsStore.selectedAppointment.id
      const newMode = isTelehealthEnabled.value ? 'Online' : 'In-Person'

      try {
        // Use store method for updating appointment mode
        await AppointmentsStore.updateAppointmentMode(appointmentId, newMode)

        // Refresh calendar data
        await fetchAppointments()

        console.log('Telehealth mode updated:', newMode)
      } catch (error) {
        console.error('Failed to update telehealth mode:', error)
        // Revert the toggle on error
        isTelehealthEnabled.value = !isTelehealthEnabled.value
      }
    }

    // Method to handle status updates
    const updateAppointmentStatus = async (newStatus) => {
      try {
        if (!selectedAppointmentData.value?.id) {
          console.error('No appointment selected')
          return
        }

        // Call the API to update the status
        await AppointmentsStore.updateAppointmentStatus(selectedAppointmentData.value.id, newStatus)

        // Refresh the calendar data
        await fetchAppointments()

        message.success(`Appointment status updated to ${newStatus}`)
      } catch (error) {
        console.error('Error updating status:', error)
        message.error('Failed to update appointment status')
      }
    }

    // Reschedule modal functions
    const openRescheduleModal = async (appointment) => {
      try {
        // Fetch available services for the service dropdown
        servicesLoading.value = true
        await fetchServices()

        // Set the appointment data for the modal
        AppointmentsStore.selectedAppointment = appointment

        // Open the modal
        showRescheduleModal.value = true
      } catch (error) {
        console.error('Error opening reschedule modal:', error)
        message.error('Failed to open reschedule modal')
      } finally {
        servicesLoading.value = false
      }
    }

    // Handle reschedule save from the modal component
    const handleRescheduleSave = async (formData) => {
      try {
        rescheduleLoading.value = true

        // Call the API to reschedule the appointment
        await AppointmentsStore.rescheduleAppointment(formData.appointmentId, {
          date: formData.date,
          service_id: formData.selectedService?.id,
          duration: formData.duration,
          priority: formData.priority,
          notes: formData.notes,
        })

        // Close the modal
        showRescheduleModal.value = false

        // Refresh the calendar data
        await fetchAppointments()

        message.success('Appointment rescheduled successfully')
      } catch (error) {
        console.error('Error rescheduling appointment:', error)
        message.error('Failed to reschedule appointment')
      } finally {
        rescheduleLoading.value = false
      }
    }

    // Fetch available services for the reschedule modal
    const fetchServices = async () => {
      try {
        servicesLoading.value = true
        const response = await axiosInstance.get('/services')
        availableServices.value = response.data.data || response.data || []
      } catch (error) {
        console.error('Error fetching services:', error)
        availableServices.value = []
      } finally {
        servicesLoading.value = false
      }
    }

    // Test API function for debugging
    const testAppointmentAPI = () => {
      console.log('Testing appointment API...')
      console.log('Selected appointment:', selectedAppointmentData.value)
      console.log('Available services:', availableServices.value)
    }

    // Utility functions for data formatting
    const formatDate = (dateString) => {
      if (!dateString) return 'Not set'
      try {
        const date = new Date(dateString)
        return date.toLocaleDateString(undefined, {
          weekday: 'long',
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
      } catch (err) {
        console.error('Invalid date:', err)
        return 'Invalid date'
      }
    }

    const formatTimeRange = (startTime, endTime) => {
      if (!startTime) return 'Not set'

      let timeDisplay = startTime
      if (endTime) {
        timeDisplay += ` - ${endTime}`
      }

      return timeDisplay
    }

    // Status badge class helper
    const getStatusBadgeClass = (status) => {
      const statusMap = {
        SCHEDULED: 'badge-soft-success',
        IN_PROGRESS: 'badge-soft-warning',
        COMPLETED: 'badge-soft-info',
        CANCELLED: 'badge-soft-danger',
        RESCHEDULED: 'badge-soft-secondary',
        PENDING: 'badge-soft-light',
      }
      return statusMap[status] || 'badge-soft-light'
    }

    // Function to fetch appointments using store
    const fetchAppointments = async () => {
      try {
        errorMessage.value = null
        await AppointmentsStore.fetchAppointments({ doctor: staffId.value })
        appointments.value = AppointmentsStore.appointments
      } catch (error) {
        console.error('Failed to fetch appointments:', error)
        errorMessage.value = 'Failed to load appointments. Please try again.'
        appointments.value = []
      }
    }

    // Transform appointments data to FullCalendar events format
    const calendarEvents = computed(() => {
      return appointments.value.map((appointment) => {
        // Determine event color based on status
        let backgroundColor = '#007bff' // Default blue
        let borderColor = '#007bff'

        switch (appointment.status) {
          case 'SCHEDULED':
            backgroundColor = '#28a745' // Green
            borderColor = '#28a745'
            break
          case 'IN-PROGRESS':
            backgroundColor = '#ffc107' // Yellow
            borderColor = '#ffc107'
            break
          case 'COMPLETED':
            backgroundColor = '#17a2b8' // Teal
            borderColor = '#17a2b8'
            break
          case 'CANCELLED':
            backgroundColor = '#dc3545' // Red
            borderColor = '#dc3545'
            break
          case 'RESCHEDULED':
            backgroundColor = '#6f42c1' // Purple
            borderColor = '#6f42c1'
            break
        }

        return {
          id: appointment.id,
          title: `${appointment.patient?.name || 'Patient'} - ${appointment.staff?.name || 'Doctor'}`,
          start: appointment.start_date,
          end: appointment.end_date,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          textColor: '#ffffff',
          extendedProps: {
            appointment: appointment,
            patientName: appointment.patient?.name || 'Unknown Patient',
            doctorName: appointment.staff?.name || 'Unknown Doctor',
            serviceName: appointment.service?.name || 'No Service',
            status: appointment.status,
            type: appointment.type,
            notes: appointment.notes,
          },
        }
      })
    })

    // Handle event click with enhanced data mapping
    const handleEventClick = (info) => {
      const appointment = info.event.extendedProps.appointment

      // Map the appointment data to match the expected structure in the sidebar
      const mappedAppointment = {
        ...appointment,
        // Map staff data to match appointments-index structure
        staff_name: appointment.staff?.name || appointment.doctor?.name || '',
        doctor_avatar: appointment.staff?.avatar || appointment.doctor?.avatar || '',
        designation:
          appointment.staff?.specialization ||
          appointment.staff?.designation ||
          appointment.doctor?.specialization ||
          '',
        // Map patient data to match appointments-index structure
        patient_name: appointment.patient?.name || appointment.patient?.full_name || '',
        patient_avatar: appointment.patient?.avatar || '',
      }

      // Use store method to set selected appointment
      AppointmentsStore.setSelectedAppointment(mappedAppointment)

      // Initialize telehealth status based on appointment mode
      const mode = (mappedAppointment.mode || mappedAppointment.type || '').toLowerCase()
      isTelehealthEnabled.value = ['telehealth', 'online', 'virtual', 'remote'].includes(mode)

      console.log('Selected appointment:', mappedAppointment)
      console.log('Appointment ID for canvas:', mappedAppointment.id)
      console.log('Canvas loading state will be:', !mappedAppointment?.id)

      // Small delay to ensure data is set before opening offcanvas
      setTimeout(() => {
        const offcanvasElement = document.getElementById('view_appointment_details')
        const Bootstrap = window.bootstrap ?? window.Bootstrap
        if (offcanvasElement && Bootstrap) {
          const offcanvas = new Bootstrap.Offcanvas(offcanvasElement)
          offcanvas.show()
        }
      }, 50)
    }

    // Action methods using enhanced store
    const startAppointment = async () => {
      if (!AppointmentsStore.selectedAppointment) return

      try {
        await AppointmentsStore.updateAppointmentStatus(
          AppointmentsStore.selectedAppointment.id,
          'IN-PROGRESS'
        )
        await fetchAppointments() // Refresh calendar
      } catch (error) {
        console.error('Failed to start appointment:', error)
      }
    }

    const completeAppointment = async () => {
      if (!AppointmentsStore.selectedAppointment) return

      try {
        await AppointmentsStore.updateAppointmentStatus(
          AppointmentsStore.selectedAppointment.id,
          'COMPLETED'
        )
        await fetchAppointments() // Refresh calendar
      } catch (error) {
        console.error('Failed to complete appointment:', error)
      }
    }

    const cancelAppointment = async () => {
      if (!AppointmentsStore.selectedAppointment) return

      if (confirm('Are you sure you want to cancel this appointment?')) {
        try {
          await AppointmentsStore.updateAppointmentStatus(
            AppointmentsStore.selectedAppointment.id,
            'CANCELLED'
          )
          await fetchAppointments() // Refresh calendar
        } catch (error) {
          console.error('Failed to cancel appointment:', error)
        }
      }
    }

    const editAppointment = () => {
      if (!AppointmentsStore.selectedAppointment) return
      // TODO: Implement edit functionality - redirect to edit page or open edit modal
      console.log('Edit appointment:', AppointmentsStore.selectedAppointment)
    }

    // FullCalendar options
    const calendarOptions = computed(() => ({
      plugins: [dayGridPlugin, interactionPlugin],
      headerToolbar: {
        start: 'today prev,next',
        center: 'title',
        end: 'dayGridMonth,dayGridWeek,dayGridDay',
      },
      initialView: 'dayGridMonth',
      editable: false,
      droppable: false,
      events: calendarEvents.value,
      eventContent: function (arg) {
        const patientName = arg.event.extendedProps.patientName
        const status = arg.event.extendedProps.status

        return {
          html: `
            <div class="event-content status-${status.toLowerCase().replace(/\s+/g, '-')}">
              <div style="font-weight: bold; margin-bottom: 2px; cursor: pointer;">${patientName}</div>
            </div>
          `,
        }
      },
      eventClick: handleEventClick,
      drop: function () {
        console.log('Event dropped')
      },
      eventReceive: function (info) {
        console.log('Event added', info.event.title)
      },
    }))

    // TODO: Re-implement booking_range function later
    // function booking_range(start, end) {
    //   return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    // }

    // TODO: Re-implement date range picker later
    // const initializeDateRangePicker = () => {
    //   console.log('Date range picker initialization disabled - will implement later');
    //   // if (dateRangeInput.value) {
    //   //   const start = moment().subtract(6, "days");
    //   //   const end = moment();
    //   //   // ... rest of daterangepicker code
    //   // }
    // };

    onMounted(async () => {
      console.log('Component mounted, fetching appointments...')

      // Fetch appointments data
      await fetchAppointments()

      // TODO: Re-enable date range picker initialization later
      // initializeDateRangePicker();
    })

    return {
      dateRangeInput,
      calendarEl,
      appointments,
      selectedAppointment,
      errorMessage,
      AppointmentsStore,
      selectedAppointmentData,
      isTelehealthEnabled,
      isTelehealthAppointment,
      toggleTelehealth,
      fetchAppointments,
      calendarEvents,
      calendarOptions,
      formatDate,
      formatTimeRange,
      getStatusBadgeClass,
      startAppointment,
      completeAppointment,
      cancelAppointment,
      editAppointment,
      doctorDefaultAvatar,
      staffId,
      patientDefaultAvatar,
      // Reschedule modal
      showRescheduleModal,
      rescheduleLoading,
      servicesLoading,
      availableServices,
      updateAppointmentStatus,
      openRescheduleModal,
      handleRescheduleSave,
      testAppointmentAPI,
      isDevelopment,
    }
  },
}
</script>

<style scoped>
/* Custom calendar styling */
:deep(.fc-event) {
  border-radius: 4px;
  border: none !important;
  font-size: 11px;
  padding: 2px 4px;
  margin-bottom: 1px;
  background-color: transparent !important;
}

:deep(.fc-event-title) {
  font-weight: 600;
}

:deep(.fc-daygrid-event) {
  white-space: normal;
}

:deep(.fc-h-event) {
  border-left-width: 3px;
}

:deep(.fc-day-today) {
  background-color: rgba(13, 110, 253, 0.1);
}

:deep(.fc-button-primary) {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

:deep(.fc-button-primary:hover) {
  background-color: #0b5ed7;
  border-color: #0a58ca;
}

:deep(.fc-button-primary:focus) {
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

/* Status-based event styling */
:deep(.fc-event[data-status='SCHEDULED']) {
  background-color: #28a745;
}

:deep(.fc-event[data-status='IN-PROGRESS']) {
  background-color: #ffc107;
  color: #000;
}

:deep(.fc-event[data-status='COMPLETED']) {
  background-color: #17a2b8;
}

:deep(.fc-event[data-status='CANCELLED']) {
  background-color: #dc3545;
}

:deep(.fc-event[data-status='RESCHEDULED']) {
  background-color: #6f42c1;
}

:deep(.event-content.status-scheduled) {
  background-color: #004085;
  color: #fff;
  width: 100%;
  border-radius: 4px;
  /* border: 2px solid !important; */
  font-size: 11px;
  padding: 2px 4px;
  margin-bottom: 1px;
}

:deep(.event-content.status-in-progress) {
  background-color: #ffc107;
  color: #000;
  width: 100%;
  border-radius: 4px;
  /* border: 2px solid !important; */
  font-size: 11px;
  padding: 2px 4px;
  margin-bottom: 1px;
}

:deep(.event-content.status-completed) {
  background-color: #155724;
  color: #fff;
  width: 100%;
  border-radius: 4px;
  /* border: 2px solid !important; */
  font-size: 11px;
  padding: 2px 4px;
  margin-bottom: 1px;
}

:deep(.event-content.status-cancelled) {
  background-color: #721c24;
  color: #fff;
  width: 100%;
  border-radius: 4px;
  /* border: 2px solid !important; */
  font-size: 11px;
  padding: 2px 4px;
  margin-bottom: 1px;
}
</style>
