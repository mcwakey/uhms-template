<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
	   Start Page Content
	========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content" id="profilePage">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Appointments<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ AppointmentsTable.totalCount }}</span
            >
          </h4>
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
              class="bg-light rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-list fs-14 text-dark"></i
            ></router-link>
            <router-link
              :to="{ name: 'StaffCalendar', params: { id: staffId } }"
              class="bg-white rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-calendar-event fs-14 text-body"></i>
            </router-link>
          </div>

          <!-- <RouterLink
            :to="{ name: 'CreateAppointment' }"
            class="btn btn-primary ms-2 fs-13 btn-md"
            >
            <i class="ti ti-plus me-1"></i>Add Appointment
            </RouterLink> -->
        </div>
      </div>
      <!-- End Page Header -->

      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set mb-3">
          <div class="d-flex align-items-center flex-wrap gap-2">
            <div class="table-search d-flex align-items-center mb-0">
              <div class="search-input">
                <a href="javascript:void(0);" class="btn-searchset"></a>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  v-model="searchQuery"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3"
        >
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
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
                <h4 class="mb-0">Filter</h4>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-danger text-decoration-underline"
                    >Clear All</a
                  >
                </div>
              </div>
              <FilterIndex></FilterIndex>
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
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Recent</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Oldest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable pagination-rounded"
          :columns="columns"
          :table-layout="fixed"
          :data-source="AppointmentsTable.data.value"
          :pagination="paginationConfig"
          @change="AppointmentsTable.handleTableChange"
          row-key="id"
          :pagination-class="pagination - rounded"
          :loading="loading"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'start_date'">
              <div class="d-flex align-items-center ms-2">
                <a
                  href="javascript:void(0);"
                  class="dropdown-item d-flex align-items-center text-primary fw-semibold"
                  @click="openSideBar(record)"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#view_details"
                >
                  {{
                    record.start_date
                      ? new Date(record.start_date).toLocaleString(undefined, {
                          // weekday: 'long',
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })
                      : ''
                  }}
                  <template v-if="record.end_time"> - {{ record.end_time }} </template>
                </a>
              </div>
            </template>
            <template v-if="column.key === 'patient_name'">
              <div class="d-flex align-items-center ms-2">
                <router-link
                  :to="{
                    name: 'ViewPatient',
                    params: { id: record.patient?.uuid || record.patient?.id },
                  }"
                  class="avatar me-2 fs-14"
                >
                  <img
                    width="16"
                    height="16"
                    src="@/assets/img/users/user-08.jpg"
                    alt="Patient"
                    class="rounded-circle m-r-5"
                  />
                </router-link>
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <router-link
                      :to="{
                        name: 'ViewPatient',
                        params: { id: record.patient?.uuid || record.patient?.id },
                      }"
                      class="text-primary fw-semibold"
                    >
                      {{ record.patient?.name || record.patient_name || 'Unknown Patient' }}
                    </router-link>
                  </h6>
                  <span class="text-body fs-13 fw-normal d-block">{{
                    record.patient?.phone || record.patient_phone || ''
                  }}</span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'service_name'">
              <div class="d-flex align-items-center ms-2">
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    {{ record.service?.name || 'No Service' }}
                  </h6>
                  <span class="mb-0 fs-13 text-muted" v-if="record.service?.code">
                    {{ record.service.code }}
                  </span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'mode'">
              <span>
                {{ record.mode || (record.type ? 'VIRTUAL' : 'IN-PERSON') }}
              </span>
            </template>
            <template v-if="column.key === 'triage'">
              <span
                :class="[
                  'badge border fw-medium fs-13 ',
                  record.status === 'SCHEDULED' || record.status === 'RESCHEDULED'
                    ? 'badge bg-primary'
                    : record.status === 'IN-PROGRESS'
                      ? 'badge bg-warning'
                      : record.status === 'COMPLETED'
                        ? 'badge bg-success'
                        : record.status === 'CANCELLED'
                          ? 'badge bg-danger'
                          : 'badge bg-secondary',
                ]"
              >
                {{ record.status }}
              </span>
            </template>
            <template v-if="column.key === 'status'">
              <span
                :class="[
                  'badge border fw-medium fs-13 ',
                  record.status === 'SCHEDULED' || record.status === 'RESCHEDULED'
                    ? 'badge-soft-primary text-primary'
                    : record.status === 'IN-PROGRESS'
                      ? 'badge-soft-warning text-warning'
                      : record.status === 'COMPLETED'
                        ? 'badge-soft-success text-success'
                        : record.status === 'CANCELLED'
                          ? 'badge-soft-danger text-danger'
                          : 'badge-soft-secondary text-secondary',
                ]"
              >
                {{ record.status }}
              </span>
            </template>
            <template v-else-if="column.key === 'actions'">
              <div class="d-flex align-items-end justify-content-end">
                <!-- <div class="action-item me-2">
                  <a
                    href="javascript:void(0);"
                    @click="openSetAppointmentModal(record)"
                    title="{{$t('set_appointment')}}"
                    data-bs-toggle="modal" data-bs-target="#set_appointment"
                    class="text-success fs-18 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-player-play"></i>
                  </a>
                </div> -->
                <div
                  v-if="record.status === 'IN-PROGRESS' || record.status === 'COMPLETED'"
                  class="action-item me-2"
                >
                  <RouterLink
                    :to="{ name: 'ViewAppointment', params: { id: record.id } }"
                    class="text-primary fs-18 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-eye"></i>
                  </RouterLink>
                  <!-- <a
                    href="javascript:void(0);"
                    @click="openSetAppointmentModal(record)"
                    title="{{$t('set_appointment')}}"
                    data-bs-toggle="modal" data-bs-target="#set_appointment"
                    class="text-primary fs-18 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-eye"></i>
                  </a> -->
                </div>
                <div class="action-item me-2">
                  <!-- <a
                    href="javascript:void(0);"
                    @click="openSetAppointmentModal(record)"
                    title="{{$t('set_appointment')}}"
                    data-bs-toggle="modal" data-bs-target="#set_appointment"
                    class="text-warning fs-18 rounded-circle d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-edit"></i>
                  </a> -->
                  <a
                    href="javascript:void(0);"
                    @click="openModal(record)"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_staff"
                    title="{{$t('set_appointment')}}"
                    class="text-danger fs-18 d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-trash"></i>
                  </a>
                </div>
                <!-- <div class="action-item">
                  <a href="javascript:void(0);" data-bs-toggle="dropdown" title="More Actions"><i class="ti ti-dots-vertical"></i></a>
                  <ul class="dropdown-menu p-2">
                    <li>
                    <router-link
                      class="dropdown-item"
                      :to="{ name: 'ViewPatient', params: { id: record.uuid } }"
                      title="View Patient"
                    >{{$t('view')}}</router-link>
                    </li>
                    <li>
                    <a class="dropdown-item" href="javascript:void(0);" @click="openModal(record)" title="Edit Patient">{{$t('edit')}}</a>
                    </li>
                    <li>
                    <a class="dropdown-item" href="javascript:void(0);" @click="openModal(record)" data-bs-toggle="modal" data-bs-target="#delete_staff" title="Delete Patient">{{$t('delete')}}</a>
                    </li>
                  </ul>
                </div> -->
              </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
    <!-- End Content -->
  </div>

  <!-- Footer Start -->
  <layouts-footer></layouts-footer>
  <!-- Footer End -->

  <!-- ========================
		End Page Content
	========================= -->

  <!-- Overlay for sidebar -->
  <!-- <div v-if="showSidebar" class="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50" style="z-index: 1040;" @click="closeSidebar"></div> -->

  <!-- Start View Details -->
  <AppointmentDetailsCanvas
    :appointment="selectedAppointment"
    canvas-id="view_details"
    :loading="!selectedAppointment?.id"
    :is-telehealth-enabled="isTelehealthEnabled"
    @update-status="updateAppointmentStatus"
    @reschedule="openRescheduleModal"
    @toggle-telehealth="toggleTelehealth"
  />

  <!-- <AppointmentDetailsCanvas
    v-if="showSidebar"
    :appointment="selectedAppointment"
    canvas-id="view_details"
    :loading="!selectedAppointment.id"
    :is-telehealth-enabled="isTelehealthEnabled"
    :use-sidebar="true"
    @update-status="updateAppointmentStatus"
    @reschedule="openRescheduleModal"
    @toggle-telehealth="toggleTelehealth"
    @close="closeSidebar"
  /> -->
  <!-- End View Details -->

  <!-- Reusable Reschedule Modal -->
  <RescheduleModal
    v-model:visible="showRescheduleModal"
    :appointment="selectedAppointment"
    :services="availableServices"
    :services-loading="servicesLoading"
    :loading="rescheduleLoading"
    :show-debug-info="isDevelopment"
    :show-debug-button="isDevelopment"
    @save="handleRescheduleSave"
    @debug="testAppointmentAPI"
  />

  <div class="modal fade" id="delete_staff">
    <DeleteModal></DeleteModal>
  </div>
</template>
<script>
import { useTableStore } from '@/stores/dataTableStore'
import { useAppointmentStore } from '@/stores/appointmentStore'
import { usePatientStore } from '@/stores/patientStore'
import { useStaffStore } from '@/stores/staffStore'
import { onMounted, computed, ref, watch } from 'vue'
import { message } from 'ant-design-vue'
import FilterIndex from '@/components/common-component/filter-index.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import AppointmentDetailsCanvas from '@/components/common-component/AppointmentDetailsCanvas.vue'
import RescheduleModal from '@/components/modal/RescheduleModal.vue'
import { useRoute } from 'vue-router'
// import { useRouter } from 'vue-router'; // TODO: Uncomment when needed for navigation
import axiosInstance from '@/utils/axios'

// Static imports for default avatars
import doctorDefaultAvatar from '@/assets/img/doctors/doctor-03.jpg'
import patientDefaultAvatar from '@/assets/img/users/avatar-2.jpg'

export default {
  components: { FilterIndex, DeleteModal, AppointmentDetailsCanvas, RescheduleModal },
  name: 'StaffAppointmentsList',

  setup() {
    const loading = ref(false)
    const appointmentsLoading = ref(false)
    const appointments = ref([])
    const searchQuery = ref('')
    // const router = useRouter(); // TODO: Uncomment when needed for navigation
    const route = useRoute()

    // Get staff ID from route params
    const staffId = computed(() => route.params.id)

    const AppointmentsTable = useTableStore('appointments')
    const AppointmentsStore = useAppointmentStore()
    const PatientStore = usePatientStore()
    const StaffStore = useStaffStore()

    // Ensure AppointmentsStore.selectedAppointment is always defined and reactive
    if (!AppointmentsStore.selectedAppointment) {
      AppointmentsStore.selectedAppointment = ref({})
    }
    const detailedItem = computed(() => AppointmentsTable.detailedItem.value || {})

    // Computed properties for better data formatting
    const selectedAppointment = computed(() => AppointmentsStore.selectedAppointment)

    // Reschedule modal state
    const showRescheduleModal = ref(false)
    const rescheduleLoading = ref(false)
    const servicesLoading = ref(false)
    const availableServices = ref([])

    // Development mode check
    const isDevelopment = computed(() => {
      return import.meta.env.DEV || false
    })

    const formattedAppointmentDate = computed(() => {
      const appointment = selectedAppointment.value
      if (!appointment?.start_date) return '-'

      try {
        return new Date(appointment.start_date).toLocaleDateString(undefined, {
          weekday: 'long',
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })
      } catch {
        return appointment.formatted_date || '-'
      }
    })

    const formattedAppointmentTime = computed(() => {
      const appointment = selectedAppointment.value
      if (!appointment) return '-'

      const startTime = appointment.start_time || appointment.formatted_time
      const endTime = appointment.end_time

      if (!startTime) return '-'
      return endTime ? `${startTime} - ${endTime}` : startTime
    })

    const appointmentTriageClass = computed(() => {
      const status = selectedAppointment.value?.status
      const baseClasses = 'badge border fw-medium fs-13'

      switch (status) {
        case 'SCHEDULED':
        case 'RESCHEDULED':
          return `${baseClasses} badge-soft-primary text-primary`
        case 'IN-PROGRESS':
          return `${baseClasses} badge-soft-warning text-warning`
        case 'COMPLETED':
          return `${baseClasses} badge-soft-success text-success`
        case 'CANCELLED':
          return `${baseClasses} badge-soft-danger text-danger`
        default:
          return `${baseClasses} badge-soft-secondary text-secondary`
      }
    })

    const appointmentStatusClass = computed(() => {
      const status = selectedAppointment.value?.status
      const baseClasses = 'badge border fw-medium fs-13'

      switch (status) {
        case 'SCHEDULED':
        case 'RESCHEDULED':
          return `${baseClasses} badge-soft-primary text-primary`
        case 'IN-PROGRESS':
          return `${baseClasses} badge-soft-warning text-warning`
        case 'COMPLETED':
          return `${baseClasses} badge-soft-success text-success`
        case 'CANCELLED':
          return `${baseClasses} badge-soft-danger text-danger`
        default:
          return `${baseClasses} badge-soft-secondary text-secondary`
      }
    })

    const patientInfo = computed(() => ({
      name: selectedAppointment.value?.patient_name || 'Unknown Patient',
      avatar: selectedAppointment.value?.patient_avatar || patientDefaultAvatar,
      phone: selectedAppointment.value?.patient_phone || '',
      email: selectedAppointment.value?.patient_email || '',
    }))

    const staffInfo = computed(() => ({
      name: selectedAppointment.value?.staff_name || 'Unknown Staff',
      avatar: selectedAppointment.value?.doctor_avatar || doctorDefaultAvatar,
      designation: selectedAppointment.value?.designation || 'Staff',
    }))

    const serviceInfo = computed(() => {
      const service = selectedAppointment.value?.service
      return {
        name: service?.name || 'No Service',
        code: service?.code || '',
        hasService: !!service,
      }
    })

    const appointmentMode = computed(() => {
      const appointment = selectedAppointment.value
      return appointment?.mode || (appointment?.type ? 'Online' : 'In-Person')
    })

    const isTelehealthEnabled = ref(false)

    // Watch for appointment changes to initialize telehealth status
    watch(
      selectedAppointment,
      (newAppointment) => {
        if (newAppointment && newAppointment.mode) {
          const mode = newAppointment.mode
          isTelehealthEnabled.value =
            mode === 'Telehealth' || mode === 'Online' || mode === 'VIRTUAL'
        }
      },
      { immediate: true }
    )

    // Method to handle telehealth toggle
    const toggleTelehealth = () => {
      // This method can be used for additional logic when telehealth is toggled
      // For example, you might want to update the appointment mode in the backend
      console.log('Telehealth toggled:', isTelehealthEnabled.value)

      // Optional: Update appointment mode in the store
      if (selectedAppointment.value) {
        selectedAppointment.value.mode = isTelehealthEnabled.value ? 'Online' : 'In-Person'
      }

      // You can add API call here to update the appointment mode if needed
      // await updateAppointmentMode(selectedAppointment.value?.id, isTelehealthEnabled.value ? 'Online' : 'In-Person');
    }

    const paginationConfig = computed(() => ({
      current: AppointmentsTable.currentPage.value,
      pageSize: AppointmentsTable.perPage.value,
      total: AppointmentsTable.totalCount.value,
      showSizeChanger: false,
      showQuickJumper: false,
    }))

    const openModalPatient = async (record) => {
      try {
        AppointmentsStore.selectedAppointment = record
        await PatientStore.fetchPatient(record.patient.uuid)
      } catch (error) {
        message.error(error)
      }
    }

    const openModalStaff = async (record) => {
      try {
        AppointmentsStore.selectedAppointment = record
        await StaffStore.fetchStaff(record.staff.uuid)
      } catch (error) {
        message.error(error)
      }
    }

    const openModal = async (record) => {
      try {
        AppointmentsStore.selectedAppointment = record
        await AppointmentsStore.fetchAppointment(record.id)
      } catch (error) {
        message.error(error)
      }
    }

    // async function fetchAppointments() {
    //   appointmentsLoading.value = true;
    //   try {
    //     const response = await axiosInstance.get(`/appointments/`, {
    //       params: {
    //         doctor: staffId.value
    //       }
    //     });
    //     // Ensure we always have an array
    //     if (Array.isArray(response.data)) {
    //       appointments.value = response.data;
    //     } else if (response.data && Array.isArray(response.data.data)) {
    //       // Handle paginated response
    //       appointments.value = response.data.data;
    //     } else if (response.data && Array.isArray(response.data.results)) {
    //       // Handle another common pagination format
    //       appointments.value = response.data.results;
    //     } else {
    //       appointments.value = [];
    //     }
    //   } catch (error) {
    //     console.error('Error fetching appointments:', error);
    //     appointments.value = [];
    //     message.error('Failed to load appointments');
    //   } finally {
    //     appointmentsLoading.value = false;
    //   }
    // }

    // Reactive state for sidebar visibility
    // const showSidebar = ref(false);

    const openSideBar = async (record) => {
      try {
        // Map the appointment data to ensure proper structure for sidebar
        const mappedAppointment = {
          ...record,
          // Enhanced staff data mapping
          staff_name: record.staff?.name || record.staff_name || 'Unknown Staff',
          doctor_avatar: record.staff?.avatar || record.doctor_avatar || doctorDefaultAvatar,
          designation:
            record.staff?.specialization ||
            record.staff?.designation ||
            record.designation ||
            'Staff',
          // Enhanced patient data mapping
          patient_name: record.patient?.name || record.patient_name || 'Unknown Patient',
          patient_avatar: record.patient?.avatar || record.patient_avatar || patientDefaultAvatar,
          patient_phone: record.patient?.phone || record.patient_phone || '',
          patient_email: record.patient?.email || record.patient_email || '',
          // Enhanced appointment data
          appointment_number: record.appointment_number || record.id || 'N/A',
          location: record.location || 'Main Clinic',
          mode: record.mode || (record.type ? 'Online' : 'In-Person'),
          // Enhanced service data
          service: record.service || null,
          // Enhanced date/time formatting
          formatted_date: record.start_date
            ? new Date(record.start_date).toLocaleDateString(undefined, {
                weekday: 'long',
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })
            : null,
          formatted_time: record.start_date
            ? new Date(record.start_date).toLocaleTimeString(undefined, {
                hour: '2-digit',
                minute: '2-digit',
              })
            : null,
          start_time:
            record.start_time ||
            (record.start_date
              ? new Date(record.start_date).toLocaleTimeString(undefined, {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : null),
          end_time:
            record.end_time || record.end_date
              ? new Date(record.end_date).toLocaleTimeString(undefined, {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : null,
        }

        AppointmentsStore.selectedAppointment = mappedAppointment

        console.log('Staff List - Setting appointment data:', mappedAppointment)
        console.log('Staff List - Appointment ID:', mappedAppointment.id)

        // If status is not SCHEDULED, route to appointment-details.vue
        // if (record.status !== 'SCHEDULED') {
        //   router.push({
        //     name: 'AppointmentDetails',
        //     params: { id: record.id }
        //   });
        //   return;
        // }

        // Show sidebar for SCHEDULED appointments
        // showSidebar.value = true;

        // Fetch appointment details for the sidebar
        await AppointmentsStore.fetchAppointment(record.id)

        // Merge fetched data with mapped data
        if (AppointmentsStore.selectedAppointment) {
          AppointmentsStore.selectedAppointment = {
            ...mappedAppointment,
            ...AppointmentsStore.selectedAppointment,
          }
        }

        console.log('Staff List - Final appointment data:', AppointmentsStore.selectedAppointment)
        console.log(
          'Staff List - Canvas loading state will be:',
          !AppointmentsStore.selectedAppointment?.id
        )
      } catch (error) {
        console.error('Error opening sidebar:', error)
        message.error('Failed to load appointment details')
      }
    }

    // Method to close sidebar
    // const closeSidebar = () => {
    //   // showSidebar.value = false;
    //   AppointmentsStore.clearSelectedAppointment();
    // };

    // Method to handle status updates
    const updateAppointmentStatus = async (newStatus) => {
      try {
        if (!selectedAppointment.value?.id) {
          throw new Error('No appointment selected')
        }

        // Here you would call your API to update the status
        // await AppointmentsStore.updateAppointmentStatus(selectedAppointment.value.id, newStatus);

        // For now, just update locally
        if (AppointmentsStore.selectedAppointment) {
          AppointmentsStore.selectedAppointment.status = newStatus
        }

        // Refresh the table data
        await AppointmentsTable.fetchData()

        message.success(`Appointment status updated to ${newStatus}`)
      } catch (error) {
        console.error('Error updating status:', error)
        message.error('Failed to update appointment status')
      }
    }

    // Method to handle data refresh
    const refreshAppointmentData = async () => {
      try {
        if (selectedAppointment.value?.id) {
          await AppointmentsStore.fetchAppointment(selectedAppointment.value.id)
        }
        await AppointmentsTable.fetchData()
      } catch (error) {
        console.error('Error refreshing data:', error)
        message.error('Failed to refresh appointment data')
      }
    }

    // Table columns for staff appointments (no doctor column since this is staff-specific)
    const columns = [
      {
        title: 'Date & Time',
        key: 'start_date',
      },
      {
        title: 'Patient',
        key: 'patient_name',
      },
      {
        title: 'Service',
        key: 'service_name',
      },
      {
        title: 'Mode',
        key: 'mode',
      },
      {
        title: 'Triage',
        key: 'triage',
      },
      {
        title: 'Status',
        key: 'status',
      },
      {
        title: '',
        key: 'actions',
        width: 30,
      },
    ]

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

        // Refresh the table data
        await AppointmentsTable.fetchData({ doctor: staffId.value })

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
      console.log('Selected appointment:', selectedAppointment.value)
      console.log('Available services:', availableServices.value)
    }

    onMounted(async () => {
      loading.value = true

      try {
        // Fetch staff appointments when the component is mounted
        await AppointmentsTable.fetchData({ doctor: staffId.value })
      } catch (error) {
        console.error('Failed to load staff appointments:', error)
        message.error('Failed to load staff appointments')
      } finally {
        loading.value = false
      }
    })

    return {
      AppointmentsTable,
      AppointmentsStore,
      searchQuery,
      detailedItem,
      selectedAppointment,
      formattedAppointmentDate,
      formattedAppointmentTime,
      appointmentStatusClass,
      appointmentTriageClass,
      patientInfo,
      staffInfo,
      serviceInfo,
      appointmentMode,
      isTelehealthEnabled,
      paginationConfig,
      columns,
      openModalPatient,
      openModalStaff,
      openModal,
      openSideBar,
      updateAppointmentStatus,
      refreshAppointmentData,
      toggleTelehealth,
      loading,
      appointmentsLoading,
      appointments,
      // showSidebar,
      // closeSidebar,
      staffId,
      doctorDefaultAvatar,
      patientDefaultAvatar,
      // Reschedule modal
      showRescheduleModal,
      rescheduleLoading,
      servicesLoading,
      availableServices,
      openRescheduleModal,
      handleRescheduleSave,
      testAppointmentAPI,
      isDevelopment,
      // fetchAppointments,
    }
  },
}
</script>
