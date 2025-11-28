<template>
  <layouts-header />
  <layouts-sidebar />
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
            {{ $t('patients')
            }}<span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >{{ $t('total') }}: {{ PatientsTable.totalCount }}</span
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
              {{ $t('export') }}<i class="ti ti-chevron-down ms-2"></i>
            </a>
            <ul class="dropdown-menu p-2">
              <li>
                <a class="dropdown-item" href="#">{{ $t('download_pdf') }}</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">{{ $t('download_excel') }}</a>
              </li>
            </ul>
          </div>
          <RouterLink :to="{ name: 'CreatePatient' }" class="btn btn-primary ms-2 fs-13 btn-md">
            <i class="ti ti-plus me-1"></i>{{ $t('add_new_patient') }}
          </RouterLink>
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
                  :placeholder="$t('search')"
                  v-model="searchQuery"
                  @input="handleSearch"
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
              <i class="ti ti-filter text-gray-5 me-1"></i>{{ $t('filters') }}
            </a>
            <div
              class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
              id="filter-dropdown"
            >
              <div
                class="d-flex align-items-center justify-content-between border-bottom filter-header"
              >
                <h4 class="mb-0">{{ $t('filter') }}</h4>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-danger text-decoration-underline">{{
                    $t('clear_all')
                  }}</a>
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
              <span class="me-1"> {{ $t('sort_by') }} : </span> {{ $t('recent') }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('recent') }}</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">{{ $t('oldest') }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable pagination-rounded"
          :columns="columns"
          :data-source="tableData"
          :pagination="paginationConfig"
          @change="PatientsTable.handleTableChange"
          :row-key="(record: any) => record.uuid || record.id"
          :loading="loading"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'full_name'">
              <div class="d-flex align-items-center ms-2">
                <!-- <router-link
                      class="dropdown-item"
                      :to="{ name: 'ViewPatient', params: { id: record.uuid } }"
                      title="View Patient"
                    >{{$t('view')}}</router-link> -->
                <router-link
                  :to="{ name: 'ViewPatient', params: { id: record.uuid } }"
                  class="avatar me-2 fs-14"
                  title="View Patient"
                >
                  <img
                    width="16"
                    height="16"
                    src="@/assets/img/users/user-08.jpg"
                    :alt="$t('staff')"
                    class="rounded-circle m-r-5"
                  />
                </router-link>
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <router-link
                      :to="{ name: 'ViewPatient', params: { id: record.uuid } }"
                      title="View Patient"
                      >{{ record.full_name }}</router-link
                    >
                  </h6>
                  <!-- <span class="fs-13 d-block"> {{record.opd_no}} </span> -->
                </div>
              </div>
            </template>
            <template v-if="column.key === 'phone'">
              <div class="d-flex align-items-center ms-2">
                <div>
                  {{ record.phone || '-' }}
                  <span v-if="record.other_phones" class="fs-10 d-block"> {{ record.other_phones }} </span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'date_of_birth'">
              {{ record.date_of_birth }}
              <span
                v-if="record.age && typeof record.age === 'object'"
                :class="[
                  'badge border',
                  record.age.value > 12
                    ? 'position-absolute top-10 start-5 ms-4 translate-middle badge rounded-pill bg-secondary fw-medium fs-13'
                    : 'position-absolute top-10 start-50 ms-4 translate-middle badge rounded-pill bg-primary fw-medium fs-13',
                ]"
                >{{ record.age.value
                }}{{ record.age.unit ? record.age.unit.charAt(0) : '' }} old</span
              >
            </template>
            <template v-if="column.key === 'address'">
              <template v-if="typeof record.address === 'object' && record.address">
                {{ record.address.address_line_1 }}, {{ record.address.city }}
              </template>
              <template v-else>
                {{ record.address || '-' }}
              </template>
            </template>
            <template v-else-if="column.key === 'status'">
              <span
                :class="[
                  'badge border',
                  record.status === 'active' || record.status === true
                    ? 'badge badge-soft-success border border-success fw-medium fs-13'
                    : 'badge badge-soft-danger border border-danger fw-medium  fs-13',
                ]"
                >{{ record.status ? $t('active') : $t('inactive') }}</span
              >
            </template>
            <template v-else-if="column.key === 'last_visit_date'">
              {{
                record.last_visit_date
                  ? new Date(record.last_visit_date).toLocaleString(undefined, {
                      // weekday: 'long',
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                      // hour: '2-digit',
                      // minute: '2-digit'
                    })
                  : '-'
              }}
              <!-- <template v-if="column.key === 'last_visit_date'"> -->
              <span class="fs-10 d-block text-primary">
                {{ record.last_visit_date ? dayjs(record.last_visit_date).fromNow() : '-' }}
              </span>
              <!-- {{record.date_of_birth}} -->
              <!-- <span :class="[
                      'badge border',
                      (record.age > 12 ? 'position-absolute top-10 start-50 translate-middle badge rounded-pill bg-danger fw-medium fs-13' : 'position-absolute top-10 start-50 ms-4 translate-middle badge rounded-pill bg-primary fw-medium fs-13')
                    ]"
                  >{{record.age}}</span> -->
              <!-- </template> -->
            </template>
            <template v-else-if="column.key === 'actions'">
              <div class="d-flex align-items-center">
                <div class="action-item me-2">
                  <a
                    href="javascript:void(0);"
                    @click="openSetAppointmentModal(record)"
                    title="{{$t('set_appointment')}}"
                    data-bs-toggle="modal"
                    data-bs-target="#set_appointment"
                    class="text-success fs-18 rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-brand-telegram"></i>
                  </a>
                </div>
                <div class="action-item me-2">
                  <a
                    href="javascript:void(0);"
                    @click="openModal(record)"
                    title="{{$t('view_patient')}}"
                    data-bs-toggle="modal"
                    data-bs-target="#view_staff"
                    class="text-primary fs-18 rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-eye"></i>
                  </a>
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
                    class="text-danger fs-18 rounded d-flex align-items-center justify-content-center"
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
  <layouts-footer />
  <!-- Footer End -->

  <!-- ========================
    End Page Content
  ========================= -->

  <!-- Reusable Patient Details Modal -->
  <PatientDetailsModal
    modal-id="view_staff"
    :modal-title="$t('patient_details')"
    :patient-details="detailedItem"
    :insurances="insurances"
    :loading="loading"
    @add-insurance="openAddInsuranceModal"
  />

  <!-- Reusable Add Insurance Modal -->
  <AddInsuranceModal
    modal-id="add_insurance"
    :modal-title="$t('add_insurance')"
    :selected-patient="detailedItem"
    @insurance-added="handleInsuranceAdded"
  />

  <div class="modal fade" id="delete_staff">
    <DeleteModal></DeleteModal>
  </div>

  <!-- Reusable Set Appointment Modal -->
  <SetAppointmentModal
    modal-id="set_appointment"
    :modal-title="$t('set_appointment')"
    :selected-patient="selectedPatient"
    @appointment-created="handleAppointmentCreated"
  />
</template>
<style scoped>
/* Set Appointment Modal Styles */
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.bg-gradient-light {
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
}

.appointment-type-toggle .btn-group .btn {
  border-radius: 0.375rem !important;
  padding: 0.5rem 0.75rem;
  font-weight: 500;
  font-size: 0.875rem;
}

.appointment-type-toggle .btn-group .btn:first-child {
  margin-right: 0.25rem;
}

.appointment-type-toggle .btn-group .btn-check:checked + .btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: #667eea;
  color: white;
}

.form-control {
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
}

.form-control:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.125rem rgba(102, 126, 234, 0.15);
}

.multiselect {
  border-radius: 0.375rem !important;
  border: 1px solid #e2e8f0 !important;
}

.multiselect__tags {
  border-radius: 0.375rem !important;
  padding: 0.375rem 0.75rem !important;
  min-height: 38px !important;
  font-size: 0.875rem !important;
}

.multiselect__placeholder {
  color: #94a3b8 !important;
  margin-bottom: 0 !important;
  padding-top: 0 !important;
}

.multiselect__option--highlight {
  background: #667eea !important;
}

.multiselect__option--selected {
  background: #f1f5f9 !important;
  color: #334155 !important;
}

.summary-item {
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.375rem;
  text-align: center;
}

.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}

.text-purple {
  color: #8b5cf6 !important;
}

.avatar {
  width: 2.5rem;
  height: 2.5rem;
}

.avatar-xs {
  width: 1.5rem;
  height: 1.5rem;
}

.avatar-sm {
  width: 2rem;
  height: 2rem;
}

.avatar-md {
  width: 3rem;
  height: 3rem;
}

/* Compact font sizes */
.fs-16 {
  font-size: 1rem !important;
}

.fs-14 {
  font-size: 0.875rem !important;
}

.fs-13 {
  font-size: 0.8125rem !important;
}

.fs-12 {
  font-size: 0.75rem !important;
}

.fs-11 {
  font-size: 0.6875rem !important;
}

.fs-10 {
  font-size: 0.625rem !important;
}

.fs-6 {
  font-size: 0.875rem !important;
}

.fs-5 {
  font-size: 1rem !important;
}

/* Remove all hover effects */
.card,
.btn,
.form-control,
.multiselect {
  transition: none !important;
}

.card:hover {
  transform: none !important;
  box-shadow: inherit !important;
}
</style>
<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useTableStore } from '@/stores/dataTable'
import { onMounted, computed, ref, nextTick, type Ref, type ComputedRef } from 'vue'
import { message } from 'ant-design-vue'
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'
import FilterIndex from '@/components/common-component/filter-index.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import SetAppointmentModal from '@/components/modal/SetAppointmentModal.vue'
import PatientDetailsModal from '@/components/modal/PatientDetailsModal.vue'
import AddInsuranceModal from '@/components/modal/AddInsuranceModal.vue'
import { useI18n } from 'vue-i18n'
import constants from '@/assets/json/constants.json'
import type { Patient } from '@/types/patient'
import type { TableColumn, PaginationConfig, SelectOption } from '@/types/common'

dayjs.extend(relativeTime)

const { t } = useI18n()

// Refs
const insurances: Ref<any[]> = ref([])
const loading: Ref<boolean> = ref(false)
const selectedPatient: Ref<Patient | null> = ref(null)
const searchQuery: Ref<string> = ref('')

// Store
const PatientsTable = useTableStore('patients')

// Computed
const detailedItem: ComputedRef<Patient> = computed(() => PatientsTable.detailedItem.value || {})

const paginationConfig: ComputedRef<PaginationConfig> = computed(() => ({
  current: PatientsTable.currentPage.value,
  pageSize: PatientsTable.perPage.value,
  total: PatientsTable.totalCount.value,
}))

// Extract options from constants.json
const appointmentTypeOptions: SelectOption[] =
  (constants.find((c: any) => c.appointmentTypeOptions) || {}).appointmentTypeOptions || []
const statusOptions: SelectOption[] =
  (constants.find((c: any) => c.statusOptions) || {}).statusOptions || []

// Methods
const handleSearch = async (): Promise<void> => {
  PatientsTable.searchQuery.value = searchQuery.value.trim()
  await PatientsTable.fetchData()
}

const openModal = async (record: Patient): Promise<void> => {
  try {
    if (!record.uuid) {
      message.error('Patient UUID not found')
      return
    }
    await PatientsTable.fetchItemDetails(record.uuid)
    insurances.value = await PatientsTable.fetchItem(`${record.uuid}/insurances`)
  } catch (error) {
    message.error(String(error))
  }
}

const openSetAppointmentModal = async (patient: Patient): Promise<void> => {
  selectedPatient.value = patient

  await nextTick()
  const modalEl = document.getElementById('set_appointment')
  const Bootstrap = window.bootstrap ?? window.Bootstrap
  if (Bootstrap && modalEl) {
    const modal = new Bootstrap.Modal(modalEl)
    modal.show()
  }
}

const handleAppointmentCreated = (): void => {
  message.success('Appointment created successfully')
  selectedPatient.value = null
}

const handleInsuranceAdded = async (): Promise<void> => {
  if (detailedItem.value.uuid) {
    try {
      insurances.value = await PatientsTable.fetchItem(`${detailedItem.value.uuid}/insurances`)
    } catch (error) {
      console.error('Error refreshing insurance list:', error)
    }
  }
}

const openAddInsuranceModal = async (): Promise<void> => {
  const patientDetailsModal = document.getElementById('view_staff')
  if (patientDetailsModal) {
    const Bootstrap = window.bootstrap ?? window.Bootstrap

    if (Bootstrap) {
      let patientModal = Bootstrap.Modal.getInstance?.(patientDetailsModal) || null
      if (!patientModal) {
        patientModal = new Bootstrap.Modal(patientDetailsModal)
      }

      patientModal.hide()
      patientDetailsModal.addEventListener('hidden.bs.modal', openInsuranceModalAfterClose, {
        once: true,
      })
    } else {
      patientDetailsModal.classList.remove('show')
      patientDetailsModal.style.display = 'none'
      patientDetailsModal.setAttribute('aria-hidden', 'true')

      const existingBackdrop = document.querySelector('.modal-backdrop')
      if (existingBackdrop) {
        existingBackdrop.remove()
      }

      setTimeout(openInsuranceModalAfterClose, 300)
    }
  } else {
    openInsuranceModalAfterClose()
  }
}

const openInsuranceModalAfterClose = async (): Promise<void> => {
  await nextTick()

  const modalEl = document.getElementById('add_insurance')
  const Bootstrap = window.bootstrap ?? window.Bootstrap

  if (Bootstrap && modalEl) {
    const modal = new Bootstrap.Modal(modalEl)
    modal.show()
  } else if (modalEl) {
    modalEl.classList.add('show')
    modalEl.style.display = 'block'
    modalEl.setAttribute('aria-hidden', 'false')
    document.body.classList.add('modal-open')

    const backdrop = document.createElement('div')
    backdrop.className = 'modal-backdrop fade show'
    backdrop.id = 'add-insurance-backdrop'
    document.body.appendChild(backdrop)

    const closeModal = (): void => {
      modalEl.classList.remove('show')
      modalEl.style.display = 'none'
      modalEl.setAttribute('aria-hidden', 'true')
      document.body.classList.remove('modal-open')
      const backdrop = document.getElementById('add-insurance-backdrop')
      if (backdrop) {
        backdrop.remove()
      }
    }

    const closeBtn = modalEl.querySelector('.btn-close')
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal)
    }

    backdrop.addEventListener('click', closeModal)
  }
}

const formatAddress = (address: any): string | null => {
  if (!address) return null

  if (typeof address === 'string') return address

  if (typeof address === 'object') {
    const parts: string[] = []
    if (address.address_line_1) parts.push(address.address_line_1)
    if (address.city) parts.push(address.city)
    if (address.state) parts.push(address.state)
    if (address.country) parts.push(address.country)

    return parts.length > 0 ? parts.join(', ') : null
  }

  return null
}

const tableData = computed(() => {
  const data = PatientsTable.data.value
  console.log('Table data computed:', data?.length || 0, 'items', data)
  return data || []
})

const columns: ComputedRef<TableColumn[]> = computed(() => [
  {
    title: t('patient_name'),
    key: 'full_name',
  },
  {
    title: t('opd_no'),
    dataIndex: 'opd_no',
    key: 'opd_no',
  },
  {
    title: t('gender'),
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: t('dob'),
    dataIndex: 'date_of_birth',
    key: 'date_of_birth',
  },
  {
    title: t('phone_no'),
    key: 'phone',
  },
  {
    title: t('address'),
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: t('last_visit_date'),
    key: 'last_visit_date',
  },
  {
    title: '',
    key: 'actions',
    width: 30,
  },
])

// Lifecycle
onMounted(async () => {
  console.log('Patients index mounted')
  loading.value = true
  try {
    await PatientsTable.fetchData()
    console.log('Patients data fetched:', PatientsTable.data.value?.length || 0, 'records')
    console.log('Total count:', PatientsTable.totalCount.value)
  } catch (error) {
    console.error('Error loading patients:', error)
    message.error('Failed to load patient data')
  } finally {
    loading.value = false
  }

  // Enable Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl: HTMLElement) {
    const Bootstrap = window.bootstrap ?? window.Bootstrap
    if (Bootstrap?.Tooltip) {
      new Bootstrap.Tooltip(tooltipTriggerEl)
    }
  })
})
</script>
