<template>
  <LayoutsHeader></LayoutsHeader>
  <LayoutsSidebar></LayoutsSidebar>
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
            {{ pageTitle }}<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ displayTotal }}</span
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
                <a class="dropdown-item" href="javascript:void(0);" @click="handleExport('PDF')">Download as PDF</a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:void(0);" @click="handleExport('Excel')">Download as Excel</a>
              </li>
            </ul>
          </div>

          <div
            v-if="!isConsultationsView"
            class="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center"
          >
            <router-link
              :to="{ name: 'AppointmentList' }"
              class="bg-light rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-list fs-14 text-dark"></i
            ></router-link>
            <router-link
              :to="{ name: 'AppointmentCalendar' }"
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
            <!-- Date Range Filter -->
            <div class="date-filter d-flex align-items-center">
              <DateRangePicker
                v-model="dateRange"
                placeholder="Filter by date range"
                :show-ranges="true"
                @apply="handleDateRangeFilter"
                @error="handleDateRangeError"
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
                  <a href="javascript:void(0);" class="link-danger text-decoration-underline" @click="handleFilter({})"
                    >Clear All</a
                  >
                </div>
              </div>
              <AppointmentFilter
                :doctors="doctorsList"
                :services="availableServices"
                @filter="handleFilter"
                @close="closeFilterDropdown"
              />
            </div>
          </div>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
            >
              <span class="me-1"> Sort By : </span> {{ currentSortLabel }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1" @click="handleSort('-start_date', 'Recent')">Recent</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1" @click="handleSort('start_date', 'Oldest')">Oldest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable pagination-rounded"
          :columns="columns"
          :data-source="displayData"
          :pagination="paginationConfig"
          @change="AppointmentsTable.handleTableChange"
          row-key="id"
          :loading="loading"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'start_date'">
              <div class="d-flex align-items-center ms-2">
                <!-- :data-bs-toggle="record.status === 'SCHEDULED' ? 'offcanvas' : undefined"
                  :data-bs-target="record.status === 'SCHEDULED' ? '#view_details' : undefined" -->
                <a
                  href="javascript:void(0);"
                  class="dropdown-item d-flex align-items-center text-primary"
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
                  :to="{ name: 'ViewPatient', params: { id: record.patient.uuid } }"
                  class="avatar me-2 fs-14"
                >
                  <img
                    width="16"
                    height="16"
                    src="@/assets/img/users/user-08.jpg"
                    alt="Staff"
                    class="rounded-circle m-r-5"
                  />
                </router-link>
                <div>
                  <h6 class="mb-1 fs-14 fw-bold">
                    <router-link
                      :to="{ name: 'ViewPatient', params: { id: record.patient.uuid } }"
                      class="text-dark"
                    >
                      {{ record.patient.name }}
                    </router-link>
                  </h6>
                  <span class="text-muted fs-13 fw-normal d-block"> {{ record.patient.opd_no }}</span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'staff_name'">
              <div class="d-flex align-items-center ms-2">
                <router-link
                  to="#"
                  class="avatar me-2 fs-14"
                >
                  <img
                    width="16"
                    height="16"
                    src="@/assets/img/users/user-08.jpg"
                    alt="Staff"
                    class="rounded-circle m-r-5"
                  />
                </router-link>
                <div>
                  <h6 class="mb-1 fs-14 fw-medium">
                    <router-link
                      to="#"
                      class="text-dark"
                    >
                      {{ record.staff.name }}
                    </router-link>
                  </h6>
                  <span class="mb-0 fs-13 text-truncate text-muted"> {{ record.staff.specialization }}</span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'service_name'">
              <div class="d-flex align-items-center ms-2">
                <div>
                  <h6 class="mb-1 fs-14 fw-normal">
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
                {{ record.type ? 'VIRTUAL' : 'IN-PERSON' }}
              </span>
            </template>
            <template v-if="column.key === 'status'">
              <span
                :class="[
                  'badge border fw-medium fs-13 ',
                  record.status === 'SCHEDULED' || record.status === 'RESCHEDULED'
                    ? 'badge-soft-primary text-primary'
                    : record.status === 'CHECKED-IN'
                      ? 'badge-soft-secondary text-secondary'
                      : record.status === 'IN-PROGRESS'
                        ? 'badge-soft-warning text-warning'
                        : record.status === 'COMPLETED' || record.status === 'DONE'
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
                <ActionIcons
                  viewTitle="View Appointment"
                  editTitle="Edit Appointment"
                  deleteTitle="Delete Appointment"
                  @view="$router.push({ name: 'ViewAppointment', params: { id: record.id } })"
                  @edit="openModal(record)"
                  @delete="() => { openModal(record); }"
                >
                  <template #prepend>
                    <template v-if="['SCHEDULED', 'CONFIRMED'].includes(record.status)">
                      <a
                        href="javascript:void(0);"
                        class="action-icon text-primary"
                        title="Enter Vitals"
                        @click.prevent="$router.push({ name: 'PatientVitals', params: { id: record.id } })"
                      >
                        <i class="ti ti-activity"></i>
                      </a>
                    </template>
                    <template v-else-if="record.status === 'CHECKED-IN'">
                      <a
                        href="javascript:void(0);"
                        class="action-icon text-secondary"
                        title="Start Appointment"
                        @click.prevent="startAppointment(record)"
                      >
                        <i class="ti ti-stethoscope"></i>
                      </a>
                    </template>
                    <template v-else-if="record.status === 'IN-PROGRESS'">
                      <a
                        href="javascript:void(0);"
                        class="action-icon text-warning"
                        title="Continue Consultation"
                        @click.prevent="$router.push({ name: 'PatientConsultation', params: { id: record.id } })"
                      >
                        <i class="ti ti-player-play"></i>
                      </a>
                    </template>
                  </template>
                </ActionIcons>
            </template>
          </template>
        </a-table>
      </div>
    </div>
    <!-- End Content -->
  </div>

  <!-- Footer Start -->
  <LayoutsFooter></LayoutsFooter>
  <!-- Footer End -->

  <!-- ========================
		End Page Content
	========================= -->

  <!-- Start View Details -->
  <AppointmentDetailsCanvas
    :appointment="selectedAppointment"
    canvas-id="view_details"
    :loading="!selectedAppointment.id"
    :is-telehealth-enabled="isTelehealthEnabled"
    @update-status="updateAppointmentStatus"
    @reschedule="openRescheduleModal"
    @toggle-telehealth="toggleTelehealth"
    @transfer-doctor="openChangeDoctorModal"
    @doctor-changed="handleDoctorChanged"
  />
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

  <!-- Change Doctor Modal -->
  <ChangeDoctorModal
    v-model:visible="showChangeDoctorModal"
    :appointment="selectedAppointment"
    :loading="changeDoctorLoading"
    @save="handleDoctorChangeSave"
  />

  <div class="modal fade" id="delete_staff">
    <DeleteModal></DeleteModal>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, computed, ref, watch, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import { useTableStore } from '@/stores/dataTableStore'
import { useAppointmentStore } from '@/stores/appointmentStore'
import { usePatientStore } from '@/stores/patientStore'
import { useStaffStore } from '@/stores/staffStore'
import type { Appointment, AppointmentStatus, Service, TableColumn } from '@/types'
import FilterIndex from '@/components/common/filter-index.vue'
import AppointmentFilter from '@/components/common/AppointmentFilter.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import AppointmentDetailsCanvas from '@/components/common/AppointmentDetailsCanvas.vue'
import RescheduleModal from '@/components/modal/RescheduleModal.vue'
import ChangeDoctorModal from '@/components/modal/ChangeDoctorModal.vue'
import DateRangePicker from '@/components/common/DateRangePicker.vue'
import ActionIcons from '@/components/common/ActionIcons.vue'
import axiosInstance from '@/utils/axios'
import { getOffcanvasInstance } from '@/utils/bootstrap'
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'

// Static imports for default avatars
import doctorDefaultAvatar from '@/assets/img/doctors/doctor-03.jpg'
import patientDefaultAvatar from '@/assets/img/users/avatar-2.jpg'

// Reactive state
const loading = ref<boolean>(false)
const searchQuery = ref<string>('')
const route = useRoute()
const router = useRouter()

// Stores
const AppointmentsTable = reactive(useTableStore('appointments'))
const AppointmentsStore = useAppointmentStore()
const PatientStore = usePatientStore()
const StaffStore = useStaffStore()

// Date range filter state
const dateRange = ref<{ startDate: string | null; endDate: string | null }>({
  startDate: null,
  endDate: null,
})

// Reschedule modal state
const showRescheduleModal = ref<boolean>(false)
const rescheduleLoading = ref<boolean>(false)
const servicesLoading = ref<boolean>(false)
const availableServices = ref<Service[]>([])
const doctorsList = ref<any[]>([])
const currentSortLabel = ref<string>('Recent')

// Change doctor modal state
const showChangeDoctorModal = ref<boolean>(false)
const changeDoctorLoading = ref<boolean>(false)

// Ensure AppointmentsStore.selectedAppointment is always defined
if (!AppointmentsStore.selectedAppointment) {
  AppointmentsStore.selectedAppointment = {} as Appointment
}

const detailedItem = computed(() => AppointmentsTable.detailedItem || {})
const isConsultationsView = computed(() => route.meta?.view === 'consultations' || route.name === 'ClinicConsultations')
const pageTitle = computed(() => (isConsultationsView.value ? 'Consultations' : 'Appointments'))
const displayData = computed(() => {
  const data = Array.isArray(AppointmentsTable.data) ? AppointmentsTable.data : []
  if (!isConsultationsView.value) return data
  
  const filtered = data.filter((row: any) =>
    ['CHECKED-IN', 'IN-PROGRESS', 'COMPLETED', 'DONE', 'SCHEDULED'].includes(row?.status)
  )

  // Fallback mock data for testing if no clinical data exists
  if (filtered.length === 0) {
    return [
      {
        id: 'mock-1',
        start_date: new Date().toISOString(),
        patient: { name: 'Demo Patient', opd_no: '#OPD-0001', uuid: 'mock-pt-uuid' },
        staff: { name: 'Dr. Specialist', specialization: 'General Practice' },
        status: 'IN-PROGRESS',
        type: false, // In-person
        service: { name: 'General Consultation', code: 'CONS-01' }
      }
    ]
  }
  return filtered
})
const displayTotal = computed(() => (isConsultationsView.value ? displayData.value.length : AppointmentsTable.totalCount))

const humanizeFieldLabel = (raw: string) => {
  const cleaned = raw.replace(/\[\d+\]/g, '')
  const parts = cleaned.split('.').filter(Boolean)
  let candidate = parts[parts.length - 1] ?? cleaned
  if (candidate === 'name' && parts.length > 1) candidate = parts[parts.length - 2]
  candidate = candidate.replace(/_id$/, '')

  const words = candidate
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)

  const dedupedWords = words.filter(
    (word, index) => index === 0 || word.toLowerCase() !== words[index - 1].toLowerCase()
  )

  return dedupedWords.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

// Computed properties for better data formatting
const selectedAppointment = computed(() => AppointmentsStore.selectedAppointment)

const isTelehealthEnabled = ref<boolean>(false)

// Development mode check
const isDevelopment = computed(() => {
  return (import.meta as any).env.DEV || false
})

// Watch for modal state changes to handle body scroll
watch(showRescheduleModal, (isOpen) => {
  if (isOpen) {
    // When modal opens, lock body scroll
    document.body.style.overflow = 'hidden'
    document.body.classList.add('modal-open')
  } else {
    // When modal closes, restore body scroll
    document.body.style.overflow = ''
    document.body.classList.remove('modal-open')
    // Only clean up modal backdrops, leave offcanvas alone
    setTimeout(() => {
      const modalBackdrops = document.querySelectorAll('.modal-backdrop')
      modalBackdrops.forEach((backdrop) => backdrop.remove())
    }, 100)
  }
})

watch(showChangeDoctorModal, (isOpen) => {
  if (isOpen) {
    // When modal opens, lock body scroll
    document.body.style.overflow = 'hidden'
    document.body.classList.add('modal-open')
  } else {
    // When modal closes, restore body scroll
    document.body.style.overflow = ''
    document.body.classList.remove('modal-open')
    // Only clean up modal backdrops, leave offcanvas alone
    setTimeout(() => {
      const modalBackdrops = document.querySelectorAll('.modal-backdrop')
      modalBackdrops.forEach((backdrop) => backdrop.remove())
    }, 100)
  }
})

// Watch for appointment changes to initialize telehealth status
watch(
  selectedAppointment,
  (newAppointment) => {
    if (newAppointment && newAppointment.mode) {
      const mode = newAppointment.mode
      isTelehealthEnabled.value = mode === 'VIRTUAL'
    }
  },
  { immediate: true }
)

// Method to handle telehealth toggle
const toggleTelehealth = (isEnabled: boolean) => {
  // Update the state based on the emitted value
  isTelehealthEnabled.value = isEnabled

  // This method can be used for additional logic when telehealth is toggled
  // For example, you might want to update the appointment mode in the backend
  console.log('Telehealth toggled:', isTelehealthEnabled.value)

  // Optional: Update appointment mode in the store
  if (AppointmentsStore.selectedAppointment) {
    AppointmentsStore.selectedAppointment.mode = isTelehealthEnabled.value
      ? 'VIRTUAL'
      : 'IN-PERSON'
  }

  // You can add API call here to update the appointment mode if needed
  // await updateAppointmentMode(selectedAppointment.value.id, isTelehealthEnabled.value ? 'Online' : 'In-Person');
}

    // Method to handle doctor transfer
const handleDoctorChanged = async (transferData: any) => {
  try {
    console.log('📝 Doctor transfer data:', transferData)

    // Update the appointment with the new doctor information
    await AppointmentsStore.updateAppointment(
      transferData.appointmentId,
      transferData.transferData
    )

    // Refresh the table data to show the updated appointment
    await AppointmentsTable.fetchData()

    // Update the selected appointment with the new doctor data
    if (selectedAppointment.value?.id === transferData.appointmentId) {
      AppointmentsStore.selectedAppointment = {
        ...AppointmentsStore.selectedAppointment,
        ...transferData.transferData,
      }
    }

    message.success(
      `Appointment transferred to ${transferData.newDoctor.full_name || transferData.newDoctor.name} successfully!`
    )
  } catch (error: any) {
    console.error('Error updating appointment doctor:', error)
    message.error('Failed to transfer appointment. Please try again.')
  }
}

const paginationConfig = computed(() => ({
  current: AppointmentsTable.currentPage,
  pageSize: AppointmentsTable.perPage,
  total: AppointmentsTable.totalCount,
  showSizeChanger: false,
  showQuickJumper: false,
}))

const openModalPatient = async (record: any) => {
  try {
    AppointmentsStore.selectedAppointment = record
    await PatientStore.fetchPatient(record.patient.uuid)
  } catch (error: any) {
    message.error(error)
  }
}

const openModalStaff = async (record: any) => {
  try {
    AppointmentsStore.selectedAppointment = record
    await StaffStore.fetchStaff(record.staff.uuid)
  } catch (error: any) {
    message.error(error)
  }
}

const openModal = async (record: any) => {
  try {
    AppointmentsStore.selectedAppointment = record
    await AppointmentsStore.fetchAppointment(record.id)
  } catch (error: any) {
    message.error(error)
  }
}

const openSideBar = async (record: any) => {
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
      patient_id: record.patient?.id || record.patient_id || '',
      patient_opd_number: record.patient?.opd_no || record.opd_no || '',
      // Enhanced appointment data`
      appointment_number: record.appointment_number || record.id || 'N/A',
      location: record.location || 'Main Clinic',
      mode: record.type ? 'Online' : 'In-Person',
      // Enhanced service data
      service: record.service?.name || null,
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

    // If status is not SCHEDULED, route to appointment-details.vue
    // if (record.status !== 'SCHEDULED') {
    //   router.push({
    //     name: 'AppointmentDetails',
    //     params: { id: record.id }
    //   });
    //   return;
    // }

    // Otherwise, fetch appointment details for the sidebar
    await AppointmentsStore.fetchAppointment(record.id)

    // Merge fetched data with mapped data
    if (AppointmentsStore.selectedAppointment) {
      AppointmentsStore.selectedAppointment = {
        ...mappedAppointment,
        ...AppointmentsStore.selectedAppointment,
      }
    }
  } catch (error: any) {
    console.error('Error opening sidebar:', error)
    message.error('Failed to load appointment details')
  }
}

    // Method to handle status updates
const updateAppointmentStatus = async (newStatus: any) => {
  try {
    if (!selectedAppointment.value.id) {
      throw new Error('No appointment selected')
    }

    // Call the API to update the status
    await AppointmentsStore.updateAppointmentStatus(selectedAppointment.value.id, newStatus)

    // Refresh the table data
    await AppointmentsTable.fetchData()

    message.success(`Appointment status updated to ${newStatus}`)
  } catch (error: any) {
    console.error('Error updating status:', error)
    message.error('Failed to update appointment status')
  }
}

    // Reschedule modal functions
const openRescheduleModal = async (appointment: any) => {
  try {
    console.log('🔄 Opening reschedule modal...')
    AppointmentsStore.selectedAppointment = appointment

    // Close offcanvas properly and wait for it to complete
    await closeOffcanvas()

    // Fetch available services if not already loaded
    if (availableServices.value.length === 0) {
      await fetchServices()
    }

    // Small delay to ensure everything is cleaned up
    setTimeout(() => {
      console.log('🔄 Opening reschedule modal now...')
      showRescheduleModal.value = true
    }, 150)
  } catch (error: any) {
    console.error('Error opening reschedule modal:', error)
    message.error('Failed to open reschedule modal')
  }
}

    // Utility function to properly close offcanvas
const closeOffcanvas = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    const offcanvasElement = document.getElementById('view_details')
    if (!offcanvasElement) {
      console.log('🔍 No offcanvas element found')
      resolve()
      return
    }

    // Check if offcanvas is currently open
    const isOpen =
      offcanvasElement.classList.contains('show') ||
      offcanvasElement.classList.contains('showing')

    console.log('🔍 Offcanvas state:', {
      isOpen,
      classes: Array.from(offcanvasElement.classList),
      style: offcanvasElement.style.cssText,
    })

    if (!isOpen) {
      console.log('🔍 Offcanvas is not open, resolving immediately')
      resolve()
      return
    }

    // Function to clean up offcanvas (less aggressive)
    const cleanup = () => {
      console.log('🧹 Cleaning up offcanvas...')

      // Only remove the 'show' class, keep other classes intact
      offcanvasElement.classList.remove('show')

      // Remove offcanvas backdrops only
      const backdrops = document.querySelectorAll('.offcanvas-backdrop')
      console.log('🧹 Found', backdrops.length, 'offcanvas backdrops to remove')
      backdrops.forEach((backdrop) => {
        backdrop.remove()
        console.log('🧹 Removed offcanvas backdrop')
      })

      // Remove offcanvas-open class from body but preserve modal-open if modal is opening
      document.body.classList.remove('offcanvas-open')

      // Only reset body overflow if no modal is about to open
      if (!document.body.classList.contains('modal-open')) {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
      }

      console.log('✅ Offcanvas cleanup complete (less aggressive)')
      resolve()
    }

    try {
      const offcanvasInstance = getOffcanvasInstance(offcanvasElement)
      console.log('🔍 Bootstrap offcanvas instance:', offcanvasInstance)

      if (offcanvasInstance) {
        console.log('🔄 Using existing Bootstrap instance')
        offcanvasElement.addEventListener('hidden.bs.offcanvas', cleanup, { once: true })
        offcanvasInstance.hide()
      } else {
        console.log('🔄 No Bootstrap instance found, using manual cleanup')
        cleanup()
      }

      setTimeout(() => {
        console.log('⏰ Fallback timeout triggered')
        cleanup()
      }, 500)
    } catch (error) {
      console.warn('❌ Bootstrap offcanvas API failed, using manual cleanup:', error)
      cleanup()
    }
  })
}

    // Force close all overlays (less aggressive approach)
const forceCloseAllOverlays = () => {
  console.log('🔄 Force closing all overlays (gentle mode)...')

  // Close all offcanvas elements gently
  const offcanvasElements = document.querySelectorAll('.offcanvas')
  offcanvasElements.forEach((element) => {
    // Only remove 'show' class, keep element functional
    element.classList.remove('show')

    // Try Bootstrap API to properly close
    try {
      const instance = getOffcanvasInstance(element)
      if (instance) {
        instance.hide()
      }
    } catch (error) {
      console.warn('Failed to close offcanvas via Bootstrap:', error)
    }
  })

  // Remove only offcanvas backdrops (not modal backdrops)
  const offcanvasBackdrops = document.querySelectorAll('.offcanvas-backdrop')
  offcanvasBackdrops.forEach((backdrop) => {
    backdrop.remove()
  })

  // Clean up body classes related to offcanvas only
  document.body.classList.remove('offcanvas-open')

  // Only reset body styles if no modal is about to open
  if (!document.body.classList.contains('modal-open')) {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
  }

  console.log('✅ All overlays gently closed')
}

    // Change doctor modal functions
const openChangeDoctorModal = async (appointment: any) => {
  try {
    console.log('🔄 Opening change doctor modal...')
    AppointmentsStore.selectedAppointment = appointment

    // Close offcanvas properly and wait for it to complete
    await closeOffcanvas()

    // Small delay to ensure everything is cleaned up
    setTimeout(() => {
      console.log('🔄 Opening change doctor modal now...')
      showChangeDoctorModal.value = true
    }, 150)
  } catch (error: any) {
    console.error('Error opening change doctor modal:', error)
    message.error('Failed to open change doctor modal')
  }
}

    // Handle reschedule save from the modal component
const handleRescheduleSave = async (formData: any) => {
  try {
    rescheduleLoading.value = true

    if (!formData.appointmentId) {
      throw new Error('No appointment selected')
    }

    // Validate required fields
    if (!formData.date) {
      message.error('Please select a date')
      return
    }

    if (!formData.selectedService) {
      message.error('Please select a service')
      return
    }

    // Check if date is not in the past
    const selectedDate = new Date(formData.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    if (selectedDate < today) {
      message.error('Please select a future date')
      return
    }

    // Log the current appointment data for debugging
    console.log('🔄 Current appointment data:', selectedAppointment.value)
    console.log('📝 Form data:', formData)

    // Prepare the update data for the PATCH request
    const updateData: Record<string, any> = {}

    // Date handling using utility function
    if (formData.date) {
      const currentTime = selectedAppointment.value.start_time || '09:00'
      updateData.start_date = formatDateForAPI(formData.date)
      updateData.start_time = currentTime
      updateData.start_datetime = formatDateForAPI(formData.date, currentTime)
    }

    // Service handling using utility function
    if (formData.selectedService) {
      const serviceData = extractServiceData(formData.selectedService)
      Object.assign(updateData, serviceData)
    }

    // Notes - only include if provided
    if (formData.notes && formData.notes.trim()) {
      updateData.notes = formData.notes.trim()
    }

    // Optional fields - only include if they have meaningful values
    if (formData.duration && formData.duration !== 30) {
      updateData.duration = parseInt(formData.duration)
    }

    if (formData.priority && formData.priority !== 'NORMAL') {
      updateData.priority = formData.priority
    }

    // Set status to RESCHEDULED when rescheduling
    updateData.status = 'RESCHEDULED'

    console.log('📤 Sending PATCH request with data:', updateData)
    console.log('🎯 Endpoint:', `/appointments/${formData.appointmentId}/`)

    // Send PATCH request to update the appointment
    const response = await axiosInstance.patch(
      `/appointments/${formData.appointmentId}/`,
      updateData,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        timeout: 15000,
      }
    )

    console.log('✅ PATCH response received:', response.data)
    console.log('📊 Response status:', response.status)

    // Update the appointment in the store
    AppointmentsStore.selectedAppointment = response.data

    // Refresh the table data
    await AppointmentsTable.fetchData()

    message.success('Appointment rescheduled successfully')
    showRescheduleModal.value = false
  } catch (error: any) {
    console.error('❌ Error rescheduling appointment:', error)

    // Enhanced error handling with more specific messages
    if (error.response) {
      const { status, data } = error.response
      console.error('📊 Response status:', status)
      console.error('📄 Response data:', data)

      let errorMessage = 'Failed to reschedule appointment'

      if (status === 400) {
        // Bad request - validation errors
        if (data.detail) {
          errorMessage = data.detail
        } else if (data.message) {
          errorMessage = data.message
        } else if (typeof data === 'object') {
          // Handle field-specific errors
          const fieldErrors: string[] = []
          Object.keys(data).forEach((field) => {
            const fieldError = Array.isArray(data[field]) ? data[field].join(', ') : data[field]
            fieldErrors.push(`${humanizeFieldLabel(field)}: ${fieldError}`)
          })

          if (fieldErrors.length > 0) {
            errorMessage = `Validation errors: ${fieldErrors.join('; ')}`
          }
        }
      } else if (status === 401) {
        errorMessage = 'Unauthorized. Please login again.'
      } else if (status === 403) {
        errorMessage = 'You do not have permission to reschedule this appointment.'
      } else if (status === 404) {
        errorMessage = 'Appointment not found. It may have been deleted.'
      } else if (status === 409) {
        errorMessage = 'Appointment conflict. The selected time may already be booked.'
      } else if (status >= 500) {
        errorMessage = 'Server error. Please try again later.'
      } else if (data.detail) {
        errorMessage = data.detail
      } else if (data.message) {
        errorMessage = data.message
      }

      message.error(errorMessage)
    } else if (error.request) {
      // Network error
      console.error('🌐 Network error:', error.request)
      message.error('Network error. Please check your connection and try again.')
    } else {
      // Other error
      console.error('⚠️ Other error:', error.message)
      message.error(error.message || 'Failed to reschedule appointment')
    }
  } finally {
    rescheduleLoading.value = false
  }
}

    // Handle doctor change save from the modal component
const handleDoctorChangeSave = async (transferData: any) => {
  try {
    changeDoctorLoading.value = true

    console.log('📝 Doctor transfer data:', transferData)

    // Update the appointment with the new doctor information
    await AppointmentsStore.updateAppointment(
      transferData.appointmentId,
      transferData.transferData
    )

    // Refresh the table data to show the updated appointment
    await AppointmentsTable.fetchData()

    // Update the selected appointment with the new doctor data
    if (selectedAppointment.value?.id === transferData.appointmentId) {
      AppointmentsStore.selectedAppointment = {
        ...AppointmentsStore.selectedAppointment,
        ...transferData.transferData,
      }
    }

    message.success(
      `Appointment transferred to ${transferData.newDoctor.full_name || transferData.newDoctor.name} successfully!`
    )
    showChangeDoctorModal.value = false
  } catch (error: any) {
    console.error('Error updating appointment doctor:', error)
    message.error('Failed to transfer appointment. Please try again.')
  } finally {
    changeDoctorLoading.value = false
  }
}

const fetchServices = async () => {
  try {
    servicesLoading.value = true
    const response = await axiosInstance.get('/services')
    const payload = response.data
    // Handle paginated {data: []} or {results: []} or direct array
    const arr = Array.isArray(payload)
      ? payload
      : Array.isArray(payload?.data)
        ? payload.data
        : Array.isArray(payload?.results)
          ? payload.results
          : []
    availableServices.value = arr
  } catch {
    availableServices.value = []
  } finally {
    servicesLoading.value = false
  }
}

    /**
     * PATCH REQUEST IMPROVEMENTS FOR APPOINTMENTS API
     * =============================================
     *
     * This implementation includes the following improvements:
     *
     * 1. **Robust Data Validation**:
     *    - Validates required fields (date, service)
     *    - Prevents past date selection
     *    - Provides clear error messages
     *
     * 2. **Flexible Field Mapping**:
     *    - Handles different service ID field names (service, service_id)
     *    - Supports date/time in multiple formats (start_date, start_time, start_datetime)
     *    - Only sends fields that have values to avoid API errors
     *
     * 3. **Enhanced Error Handling**:
     *    - Specific error messages for different HTTP status codes
     *    - Field-specific validation error parsing
     *    - Network error detection and handling
     *
     * 4. **Comprehensive API Testing**:
     *    - Tests GET, minimal PATCH, date update, service update, and comprehensive PATCH
     *    - Provides detailed console logging for debugging
     *    - Tests different API field combinations
     *
     * 5. **Improved User Experience**:
     *    - Loading states during API calls
     *    - Success/error notifications
     *    - Automatic table refresh after updates
     *
     * API Endpoint: PATCH /appointments/{id}/
     * Expected Fields: start_date, service, service_id, notes, status, duration, priority
     */
    // Test function to check API endpoint
const testAppointmentAPI = async (appointmentId: any) => {
  try {
    console.log('🧪 Testing appointment API for ID:', appointmentId)

    if (!appointmentId) {
      throw new Error('No appointment ID provided')
    }

    // Test GET request first
    console.log('1️⃣ Testing GET request...')
    const getResponse = await axiosInstance.get(`/appointments/${appointmentId}`)
    console.log('✅ GET /appointments/:id response:', getResponse.data)
    console.log('📋 Available appointment fields:', Object.keys(getResponse.data))

    // Test what the current appointment data looks like
    console.log('📊 Current appointment structure:')
    console.log('- ID:', getResponse.data.id)
    console.log('- Start Date:', getResponse.data.start_date)
    console.log('- Start Time:', getResponse.data.start_time)
    console.log('- Start DateTime:', getResponse.data.start_datetime)
    console.log('- Service:', getResponse.data.service)
    console.log('- Service ID:', getResponse.data.service_id)
    console.log('- Status:', getResponse.data.status)
    console.log('- Notes:', getResponse.data.notes)
    console.log('- Patient:', getResponse.data.patient)
    console.log('- Staff:', getResponse.data.staff)

    // Test what the current appointment data looks like
    console.log('📋 Current appointment data:', getResponse.data)

    // Test different PATCH request variations
    console.log('2️⃣ Testing minimal PATCH request (notes only)...')
    const minimalPatchData = {
      notes: `API Test - ${new Date().toISOString()}`,
    }

    const minimalResponse = await axiosInstance.patch(
      `/appointments/${appointmentId}/`,
      minimalPatchData,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )

    console.log('✅ Minimal PATCH response:', minimalResponse.data)

    // Test date update
    console.log('3️⃣ Testing date update PATCH...')
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowStr = tomorrow.toISOString().split('T')[0]

    const datePatchData = {
      start_date: tomorrowStr,
      notes: `Date Test - ${new Date().toISOString()}`,
    }

    const dateResponse = await axiosInstance.patch(
      `/appointments/${appointmentId}/`,
      datePatchData,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )

    console.log('✅ Date PATCH response:', dateResponse.data)

    // Test service update if we have services
    if (availableServices.value.length > 0) {
      console.log('4️⃣ Testing service update PATCH...')
      const firstService = availableServices.value[0]

      const servicePatchData = {
        service: firstService.id,
        service_id: firstService.id,
        notes: `Service Test - ${new Date().toISOString()}`,
      }

      const serviceResponse = await axiosInstance.patch(
        `/appointments/${appointmentId}/`,
        servicePatchData,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      )

      console.log('✅ Service PATCH response:', serviceResponse.data)
    }

    // Test comprehensive update
    console.log('5️⃣ Testing comprehensive PATCH...')
    let comprehensiveData: Record<string, any> = {
      start_date: tomorrowStr,
      notes: `Comprehensive Test - ${new Date().toISOString()}`,
      status: 'RESCHEDULED',
    }

    // Add service if available
    if (availableServices.value.length > 0) {
      const service = availableServices.value[0]
      comprehensiveData.service = service.id
      comprehensiveData.service_id = service.id
    }

    const comprehensiveResponse = await axiosInstance.patch(
      `/appointments/${appointmentId}/`,
      comprehensiveData,
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    )

    console.log('✅ Comprehensive PATCH response:', comprehensiveResponse.data)

    message.success('🎉 API test completed successfully! Check console for detailed results.')

    return comprehensiveResponse.data
  } catch (error: any) {
    console.error('❌ Error testing appointment API:', error)

    if (error.response) {
      console.error('📊 Response status:', error.response.status)
      console.error('📄 Response data:', error.response.data)
      console.error('📝 Response headers:', error.response.headers)

      let errorMsg = `API test failed (${error.response.status})`
      if (error.response.data?.detail) {
        errorMsg += `: ${error.response.data.detail}`
      } else if (error.response.data?.message) {
        errorMsg += `: ${error.response.data.message}`
      } else if (typeof error.response.data === 'string') {
        errorMsg += `: ${error.response.data}`
      }

      message.error(errorMsg)
    } else if (error.request) {
      console.error('🌐 Network error:', error.request)
      message.error('Network error during API test')
    } else {
      console.error('⚠️ Other error:', error.message)
      message.error(`API test error: ${error.message}`)
    }

    throw error
  }
}

const fetchDoctors = async () => {
  try {
    const response = await axiosInstance.get('/staff', { params: { page_size: 100 } })
    const payload = response.data
    // Handle paginated {data: []} or {results: []} or direct array
    const arr = Array.isArray(payload)
      ? payload
      : Array.isArray(payload?.data)
        ? payload.data
        : Array.isArray(payload?.results)
          ? payload.results
          : []
    doctorsList.value = arr
  } catch {
    doctorsList.value = []
  }
}

const openVitalsModal = (record: any) => {
  message.info('Vitals entry feature coming soon')
  console.log('Open vitals for:', record)
}

const startAppointment = async (record: any) => {
  AppointmentsStore.selectedAppointment = record
  // Optimistically update local status
  record.status = 'IN-PROGRESS'
  // Try to persist status change via API (non-blocking)
  try {
    await AppointmentsStore.updateAppointmentStatus(record.id, 'IN-PROGRESS')
  } catch {
    // API not ready — proceed with local state
  }
  router.push({ name: 'PatientConsultation', params: { id: record.id } })
}

const cancelAppointment = async (record: any) => {
  if (confirm('Are you sure you want to cancel this appointment?')) {
    try {
      AppointmentsStore.selectedAppointment = record
      await updateAppointmentStatus('CANCELLED')
    } catch (error) {
      console.error('Error cancelling appointment:', error)
    }
  }
}

const handleFilter = (filters: any) => {
  console.log('Applying filters:', filters)
  AppointmentsTable.fetchData(filters)
  closeFilterDropdown()
}

const handleSort = (sortValue: string, label: string) => {
  currentSortLabel.value = label
  AppointmentsTable.fetchData({ ordering: sortValue })
}

const handleExport = (type: string) => {
  message.success(`Exporting as ${type}...`)
  // Implement actual export logic here
  // e.g., window.open(`${import.meta.env.VITE_API_URL}/appointments/export?format=${type.toLowerCase()}`, '_blank')
}

const closeFilterDropdown = () => {
  // Attempt to close the dropdown by clicking the body or finding the toggle
  // Since we can't easily access the bootstrap instance, we'll simulate a click outside
  document.body.click()
}

    // Utility function for date formatting
const formatDateForAPI = (dateString: string, timeString: string | null = null) => {
  if (!dateString) return null

  const date = new Date(dateString)
  const formattedDate = date.toISOString().split('T')[0] // YYYY-MM-DD format

  if (timeString) {
    return `${formattedDate}T${timeString}:00`
  }

  return formattedDate
}

    // Utility function for service data extraction
const extractServiceData = (serviceSelection: any) => {
  if (!serviceSelection) return null

  const serviceId =
    typeof serviceSelection === 'object' ? serviceSelection.id : serviceSelection

  return {
    service: serviceId,
    service_id: serviceId,
  }
}

    // Method to handle data refresh
const refreshAppointmentData = async () => {
  try {
    if (selectedAppointment.value.id) {
      await AppointmentsStore.fetchAppointment(selectedAppointment.value.id)
    }
    await AppointmentsTable.fetchData()
  } catch (error: any) {
    console.error('Error refreshing data:', error)
    message.error('Failed to refresh appointment data')
  }
}

    // Table columns
const columns = [
  {
    title: 'Date & Time',
    // dataIndex: 'start_date',
    key: 'start_date',
  },
  {
    title: 'Patient',
    // dataIndex: 'patient[name]',
    key: 'patient_name',
  },
  {
    title: 'Doctor',
    // dataIndex: 'staff.name',
    key: 'staff_name',
  },
  {
    title: 'Service',
    // dataIndex: 'service.name',
    key: 'service_name',
  },
  // {
  //   title: 'Type',
  //   dataIndex: 'type',
  //   key: 'type',
  // },
  {
    title: 'Mode',
    // dataIndex: 'mode',
    key: 'mode',
  },
  {
    title: 'Status',
    // dataIndex: 'status',
    key: 'status',
  },
  {
    title: '',
    key: 'actions',
    width: 30,
    // className: "actions"
  },
    ]

    // Date range filter handlers
const handleDateRangeFilter = async (data: any) => {
  try {
    console.log('📅 Date range filter applied:', data)

    // Update the date range state
    dateRange.value = {
      startDate: data.startDate,
      endDate: data.endDate,
    }

    // Apply the date filter to the table
    const filters = {
      start_date__gte: data.startDate,
      start_date__lte: data.endDate,
    }

    // Fetch filtered data
    await AppointmentsTable.fetchData(filters)

    message.success(`Filtered appointments from ${data.startDate} to ${data.endDate}`)
  } catch (error: any) {
    console.error('Error applying date range filter:', error)
    message.error('Failed to apply date range filter')
  }
}

const handleDateRangeError = (error: any) => {
  console.error('DateRangePicker error:', error)
  message.error('Date range picker error: ' + error)
}

    onMounted(async () => {
  loading.value = true
  try {
    // Fetch appointments data
    await AppointmentsTable.fetchData()
    console.log('Appointments loaded:', AppointmentsTable.data.length, 'records')
    console.log('Total count:', AppointmentsTable.totalCount)
    console.log('First appointment:', AppointmentsTable.data[0])

    // Fetch available services for reschedule modal
    await fetchServices()
    // Fetch doctors for filter
    await fetchDoctors()
  } catch (error: any) {
    console.error('Failed to load data:', error)
    message.error('Failed to load data')
  } finally {
    loading.value = false
  }
})

// Cleanup event listeners on unmount
onUnmounted(() => {
  // Gentle cleanup on unmount
  document.body.style.overflow = ''
  document.body.classList.remove('modal-open', 'offcanvas-open')

  // Remove any leftover backdrops
  const backdrops = document.querySelectorAll('.offcanvas-backdrop, .modal-backdrop')
  backdrops.forEach((backdrop) => backdrop.remove())
})
</script>

<style>
/* Only keep styles specific to the appointments index page */
</style>
