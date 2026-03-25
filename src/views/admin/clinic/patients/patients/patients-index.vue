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
            {{ $t('patients.title')
            }}<span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >{{ $t('patients.total') }}: {{ PatientsTable.totalCount }}</span
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
              {{ $t('patients.export') }}<i class="ti ti-chevron-down ms-2"></i>
            </a>
            <ul class="dropdown-menu p-2">
              <li>
                <a class="dropdown-item" href="javascript:void(0);" @click="exportData('pdf')">{{ $t('patients.download_pdf') }}</a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:void(0);" @click="exportData('csv')">{{ $t('patients.download_excel') }}</a>
              </li>
            </ul>
          </div>
          <RouterLink :to="{ name: 'CreatePatient' }" class="btn btn-primary ms-2 fs-13 btn-md">
            <i class="ti ti-plus me-1"></i>{{ $t('patients.add_new') }}
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
                  :placeholder="$t('patients.search_placeholder')"
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
              <i class="ti ti-filter text-gray-5 me-1"></i>{{ $t('patients.filters') }}
            </a>
            <div
              class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
              id="filter-dropdown"
            >
              <div
                class="d-flex align-items-center justify-content-between border-bottom filter-header"
              >
                <h4 class="mb-0 fw-bold">{{ $t('patients.filter') }}</h4>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-danger text-decoration-underline" @click="clearAllFilters">{{
                    $t('patients.clear_all')
                  }}</a>
                </div>
              </div>
              <PatientsFilter @filter="handleFilter" ref="patientsFilterRef" />
            </div>
          </div>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
            >
              <span class="me-1"> {{ $t('patients.sort_by') }} : </span> {{ currentSortLabel }}
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1" @click="handleSort('-created_at', t('patients.recent'))">{{ $t('patients.recent') }}</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1" @click="handleSort('created_at', t('patients.oldest'))">{{ $t('patients.oldest') }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="tableData"
          :pagination="false"
          :row-key="(record: any) => record.uuid || record.id"
          :loading="loading"
        >
          <template #bodyCell="{ column, record }">
          <!-- <template v-if="column.key === 'Patient'">
              <div class="d-flex align-items-center">
                  <router-link to="/patients/patient-details" class="avatar avatar-md me-2">
                      <img :src="getImageUrl(record.Patient_Img)" alt="product" class="rounded-circle">
                  </router-link>
                  <router-link to="/patients/patient-details" class="text-dark fw-semibold">{{record.Patient}} <span class="text-body fs-13 fw-normal d-block"> {{record.Gender}} </span>  </router-link>
              </div>
          </template> -->
            <template v-if="column.key === 'full_name'">
              <div class="d-flex align-items-center ms-2">
                <router-link :to="{ name: 'ViewPatient', params: { id: record.uuid } }" class="avatar me-2 fs-14" :title="t('patients.view_details')" >
                  <img width="16" height="16" src="@/assets/img/users/user-08.jpg" :alt="t('patients.staff')" class="rounded-circle m-r-5" />
                </router-link>
                <!-- <router-link to="/patients/patient-details" class="avatar avatar-md me-2">
                      <img :src="getImageUrl(record.Patient_Img)" alt="product" class="rounded-circle">
                </router-link> -->
                <!-- <div> -->
                  <!-- <h6 class="mb-1 fs-14 fw-semibold"> -->
                    <router-link
                      :to="{ name: 'ViewPatient', params: { id: record.uuid } }"
                      :title="t('patients.view_details')"  class="text-dark fw-semibold"
                      >{{ record.full_name }}
                      <span class="text-body fs-13 fw-normal d-block">{{record.age.value}}{{ record.age.unit ? record.age.unit.charAt(0) : '' }} {{ t('patients.age_unit') }}, {{record.gender}} </span>
                      </router-link
                    >
                  <!-- </h6> -->
                <!-- </div> -->
                <!-- <router-link to="/patients/patient-details" class="text-dark fw-semibold"><span class="text-body fs-13 fw-normal d-block">{{record.age.value}}, {{record.gender}} </span>  </router-link> -->
              
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
              {{ dayjs(record.date_of_birth).format('DD MMM, YYYY') }}
              <!-- <span
                v-if="record.age && typeof record.age === 'object'"
                :class="[
                  'badge border',
                  record.age.value > 12
                    ? 'position-absolute top-10 start-5 ms-4 translate-middle badge rounded-pill bg-secondary fw-medium fs-13'
                    : 'position-absolute top-10 start-50 ms-4 translate-middle badge rounded-pill bg-primary fw-medium fs-13',
                ]"
                >{{ record.age.value
                }}{{ record.age.unit ? record.age.unit.charAt(0) : '' }} {{ t('patients.age_unit') }}</span
              > -->
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
                >{{ record.status ? t('patients.active') : t('patients.inactive') }}</span
              >
            </template>
            <template v-else-if="column.key === 'last_visit_date'">
              {{
                record.last_visit_date
                  ? new Date(record.last_visit_date).toLocaleString(undefined, {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })
                  : '-'
              }}
              <span class="fs-10 d-block text-primary">
                {{ record.last_visit_date ? dayjs(record.last_visit_date).fromNow() : '-' }}
              </span>
            </template>
            <template v-else-if="column.key === 'actions'">
              <div class="d-flex align-items-center justify-content-end gap-2">
                <a
                  href="javascript:void(0);"
                  class="action-icon text-success"
                  :title="t('patients.set_appointment')"
                  data-bs-toggle="modal"
                  data-bs-target="#set_appointment"
                  @click.prevent="openSetAppointmentModal(record)"
                >
                  <i class="ti ti-calendar-cog"></i>
                </a>
                <ActionIcons
                  :viewTitle="t('patients.view_details')"
                  :editTitle="t('patients.edit')"
                  :deleteTitle="t('patients.delete')"
                  @view="$router.push({ name: 'ViewPatient', params: { id: record.uuid } })"
                  @edit="$router.push({ name: 'EditPatient', params: { id: record.uuid } })"
                  @delete="() => { selectedPatient = record; showModalById('delete_staff') }"
                />
              </div>
            </template>
            <template v-else-if="column.key === 'action'">
                <div class="d-flex align-items-center gap-1">
                    <router-link to="/appointments/appointments-list" class="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1">
                        <i class="ti ti-calendar-cog"></i>
                    </router-link>
                    <a href="javascript:void(0);" class="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1" data-bs-toggle="dropdown">
                        <i class="ti ti-dots-vertical"></i>
                    </a>
                    <ul class="dropdown-menu p-2">
                        <li>
                            <router-link :to="{ name: 'EditPatient', params: { id: record.uuid } }" class="dropdown-item d-flex align-items-center">Edit</router-link>
                        </li>
                        <li>
                            <router-link to="/patients/patient-details" class="dropdown-item d-flex align-items-center">View</router-link>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                        </li>
                    </ul>
                </div>
            </template>
          </template>
        </a-table>
      </div>

      <!-- Custom Pagination -->
      <data-table-pagination
        :total="PatientsTable.totalCount.value"
        :currentPage="PatientsTable.currentPage.value"
        :pageSize="PatientsTable.perPage.value"
        :pageSizeOptions="[5, 10, 20, 50]"
        @update:currentPage="handlePageChange"
        @update:pageSize="handlePageSizeChange"
      />
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
  <!-- <PatientDetailsModal
    modal-id="view_staff"
    :modal-title="$t('patients.details_title')"
    :patient-details="detailedItem"
    :insurances="insurances"
    :loading="loading"
    @add-insurance="openAddInsuranceModal"
  /> -->

  <!-- Reusable Add Insurance Modal -->
  <!-- <AddInsuranceModal
    modal-id="add_insurance"
    :modal-title="$t('patients.add_insurance')"
    :selected-patient="detailedItem"
    @insurance-added="handleInsuranceAdded"
  /> -->

  <div class="modal fade" id="delete_staff">
    <DeleteModal></DeleteModal>
  </div>

  <!-- Reusable Set Appointment Modal -->
  <SetAppointmentModal
    modal-id="set_appointment"
    :modal-title="$t('patients.set_appointment')"
    :selected-patient="selectedPatient"
    @appointment-created="handleAppointmentCreated"
  />
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useTableStore } from '@/stores/dataTableStore'
import { onMounted, computed, ref, nextTick, type Ref, type ComputedRef } from 'vue'
import { message } from 'ant-design-vue'
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'
import PatientsFilter from '@/components/common/PatientsFilter.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import SetAppointmentModal from '@/components/modal/SetAppointmentModal.vue'
// import PatientDetailsModal from '@/components/modal/PatientDetailsModal.vue'
// import AddInsuranceModal from '@/components/modal/AddInsuranceModal.vue'
import { useI18n } from 'vue-i18n'
// import constants from '@/assets/json/constants.json'
import type { Patient } from '@/types/patient'
import type { TableColumn, PaginationConfig, SelectOption } from '@/types/common'
import { showModalById } from '@/utils/bootstrap'
import ActionIcons from '@/components/common/ActionIcons.vue'

dayjs.extend(relativeTime)

const { t } = useI18n()

// Refs
// const insurances: Ref<any[]> = ref([])
const loading: Ref<boolean> = ref(false)
const selectedPatient: Ref<Patient | null> = ref(null)
const searchQuery: Ref<string> = ref('')
const currentSortLabel = ref(t('patients.recent'))

// Store
const PatientsTable = useTableStore('patients')

// Computed
// const detailedItem: ComputedRef<Patient> = computed(() => PatientsTable.detailedItem.value || {})

const paginationConfig: ComputedRef<PaginationConfig> = computed(() => ({
  current: PatientsTable.currentPage.value,
  pageSize: PatientsTable.perPage.value,
  total: PatientsTable.totalCount.value,
  showSizeChanger: true,
  hideOnSinglePage: false,
  showTotal: (total: number, range: [number, number]) => `${range[0]}-${range[1]} of ${total} items`,
}))

// Extract options from constants.json
// const appointmentTypeOptions: SelectOption[] =
//   (constants.find((c: any) => c.appointmentTypeOptions) || {}).appointmentTypeOptions || []
// const statusOptions: SelectOption[] =
//   (constants.find((c: any) => c.statusOptions) || {}).statusOptions || []

// Methods
const patientsFilterRef = ref<any>(null)

const clearAllFilters = async () => {
  if (patientsFilterRef.value) {
    patientsFilterRef.value.resetFilters()
  } else {
    await PatientsTable.fetchData()
  }
}

const handleFilter = async (filters: any) => {
  await PatientsTable.fetchData(filters)
}

const handleSearch = async (): Promise<void> => {
  PatientsTable.searchQuery.value = searchQuery.value.trim()
  await PatientsTable.fetchData()
}

const handleSort = async (sort: string, label: string) => {
  currentSortLabel.value = label
  await PatientsTable.fetchData({ ordering: sort })
}

const handlePageChange = async (page: number) => {
  PatientsTable.currentPage.value = page
  await PatientsTable.fetchData()
}

const handlePageSizeChange = async (size: number) => {
  PatientsTable.perPage.value = size
  PatientsTable.currentPage.value = 1
  await PatientsTable.fetchData()
}

const exportData = (type: string) => {
  if (type === 'csv') {
    // Simple CSV export
    const headers = columns.value.filter(c => c.key !== 'actions').map(c => c.title).join(',')
    const rows = tableData.value.map((row: any) => {
      return columns.value.filter(c => c.key !== 'actions').map(c => {
        let val = ''
        if (c.key === 'full_name') val = row.full_name
        else if (c.key === 'opd_no') val = row.opd_no
        else if (c.key === 'gender') val = row.gender
        else if (c.key === 'date_of_birth') val = row.date_of_birth
        else if (c.key === 'phone') val = row.phone
        else if (c.key === 'address') val = formatAddress(row.address) || ''
        else if (c.key === 'last_visit_date') val = row.last_visit_date
        
        return `"${String(val || '').replace(/"/g, '""')}"`
      }).join(',')
    }).join('\n')
    
    const csvContent = `data:text/csv;charset=utf-8,${headers}\n${rows}`
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'patients_export.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } else {
    message.info('PDF export not implemented yet')
  }
}

// const openModal = async (record: Patient): Promise<void> => {
//   try {
//     if (!record.uuid) {
//       message.error(t('patients.uuid_not_found'))
//       return
//     }
//     await PatientsTable.fetchItemDetails(record.uuid)
//     // insurances.value = await PatientsTable.fetchItem(`${record.uuid}/insurances`)
//   } catch (error) {
//     message.error(String(error))
//   }
// }

const openSetAppointmentModal = async (patient: Patient): Promise<void> => {
  selectedPatient.value = patient

  await nextTick()
  showModalById('set_appointment')
}

const handleAppointmentCreated = (): void => {
  message.success(t('patients.appointment_created'))
  selectedPatient.value = null
}

// const handleInsuranceAdded = async (): Promise<void> => {
//   if (detailedItem.value.uuid) {
//     try {
//       insurances.value = await PatientsTable.fetchItem(`${detailedItem.value.uuid}/insurances`)
//     } catch (error) {
//       console.error('Error refreshing insurance list:', error)
//     }
//   }
// }

// const openAddInsuranceModal = async (): Promise<void> => {
//   const patientDetailsModal = document.getElementById('view_staff')
//   if (patientDetailsModal) {
//     const Bootstrap = (window as any).bootstrap ?? (window as any).Bootstrap

//     if (Bootstrap) {
//       let patientModal = Bootstrap.Modal.getInstance?.(patientDetailsModal) || null
//       if (!patientModal) {
//         patientModal = new Bootstrap.Modal(patientDetailsModal)
//       }

//       patientModal.hide()
//       patientDetailsModal.addEventListener('hidden.bs.modal', openInsuranceModalAfterClose, {
//         once: true,
//       })
//     } else {
//       patientDetailsModal.classList.remove('show')
//       patientDetailsModal.style.display = 'none'
//       patientDetailsModal.setAttribute('aria-hidden', 'true')

//       const existingBackdrop = document.querySelector('.modal-backdrop')
//       if (existingBackdrop) {
//         existingBackdrop.remove()
//       }

//       setTimeout(openInsuranceModalAfterClose, 300)
//     }
//   } else {
//     openInsuranceModalAfterClose()
//   }
// }

// const openInsuranceModalAfterClose = async (): Promise<void> => {
//   await nextTick()

//   const modalEl = document.getElementById('add_insurance')
//   const Bootstrap = (window as any).bootstrap ?? (window as any).Bootstrap

//   if (Bootstrap && modalEl) {
//     const modal = new Bootstrap.Modal(modalEl)
//     modal.show()
//   } else if (modalEl) {
//     modalEl.classList.add('show')
//     modalEl.style.display = 'block'
//     modalEl.setAttribute('aria-hidden', 'false')
//     document.body.classList.add('modal-open')

//     const backdrop = document.createElement('div')
//     backdrop.className = 'modal-backdrop fade show'
//     backdrop.id = 'add-insurance-backdrop'
//     document.body.appendChild(backdrop)

//     const closeModal = (): void => {
//       modalEl.classList.remove('show')
//       modalEl.style.display = 'none'
//       modalEl.setAttribute('aria-hidden', 'true')
//       document.body.classList.remove('modal-open')
//       const backdrop = document.getElementById('add-insurance-backdrop')
//       if (backdrop) {
//         backdrop.remove()
//       }
//     }

//     const closeBtn = modalEl.querySelector('.btn-close')
//     if (closeBtn) {
//       closeBtn.addEventListener('click', closeModal)
//     }

//     backdrop.addEventListener('click', closeModal)
//   }
// }

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
    title: t('patients.name'),
    key: 'full_name',
  },
  {
    title: t('patients.opd_no'),
    dataIndex: 'opd_no',
    key: 'opd_no',
  },
  // {
  //   title: t('patients.gender'),
  //   dataIndex: 'gender',
  //   key: 'gender',
  // },
  {
    title: t('patients.dob'),
    dataIndex: 'date_of_birth',
    key: 'date_of_birth',
  },
  {
    title: t('patients.phone'),
    key: 'phone',
  },
  {
    title: t('patients.address'),
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: t('patients.last_visit'),
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
    message.error(t('patients.load_failed'))
  } finally {
    loading.value = false
  }

  // Enable Bootstrap tooltips
  // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'))
  // tooltipTriggerList.forEach(function (tooltipTriggerEl: HTMLElement) {
  //   const Bootstrap = (window as any).bootstrap ?? (window as any).Bootstrap
  //   if (Bootstrap?.Tooltip) {
  //     new Bootstrap.Tooltip(tooltipTriggerEl)
  //   }
  // })
})
</script>
<style scoped>
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
  background: var(--bs-primary);
  border-color: var(--bs-primary);
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
