<template>
  <LayoutsHeader />
  <LayoutsSidebar />
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
            Locations<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ locationsTable.totalCount.value }}</span
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
          <a
            href="javascript:void(0);"
            @click="openAddLocationModal"
            title="Add Location"
            data-bs-toggle="modal"
            data-bs-target="#add_location"
            class="btn btn-primary ms-2 fs-13 btn-md"
          >
            <i class="ti ti-plus me-1"></i>Add Location
          </a>
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
                  placeholder="Search locations..."
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
                  <a href="javascript:void(0);" @click="clearFilters" class="link-danger text-decoration-underline"
                    >Clear All</a
                  >
                </div>
              </div>
              <div class="filter-content p-3">
                <div class="mb-3">
                  <label class="form-label fw-medium fs-13">Department</label>
                  <select v-model="selectedDepartment" class="form-select">
                    <option value="">All Departments</option>
                    <option
                      v-for="department in departments"
                      :key="department.id"
                      :value="department.id"
                    >
                      {{ department.name }}
                    </option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label fw-medium fs-13">Status</label>
                  <select v-model="selectedStatus" class="form-select">
                    <option value="">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <div class="d-flex justify-content-end gap-2">
                  <button @click="clearFilters" class="btn btn-light btn-sm">Clear</button>
                  <button @click="applyFilters" class="btn btn-primary btn-sm">Apply</button>
                </div>
              </div>
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
          :data-source="locationsTable.data.value"
          :pagination="paginationConfig"
          @change="locationsTable.handleTableChange"
          row-key="id"
          :pagination-class="pagination - rounded"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <div class="d-flex align-items-center ms-2">
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <a
                      href="javascript:void(0);"
                      @click="openViewLocationModal(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#view_location"
                      >{{ record.name }}</a
                    >
                  </h6>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'department'">
              <div class="d-flex align-items-center ms-2">
                <div>
                  <h6 class="mb-1 fs-14">
                    {{ record.department?.name || 'N/A' }}
                  </h6>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'status'">
              <span
                :class="[
                  'badge fw-medium fs-13',
                  record.status
                    ? 'badge-soft-success border border-success'
                    : 'badge-soft-danger border border-danger',
                ]"
              >
                {{ record.status ? 'Active' : 'Inactive' }}
              </span>
            </template>
            <template v-else-if="column.key === 'actions'">
              <div class="d-flex align-items-center justify-content-center">
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-white btn-icon btn-sm d-flex align-items-center justify-content-center rounded-circle p-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="ti ti-dots-vertical fs-18"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <a
                        href="javascript:void(0);"
                        @click="openEditLocationModal(record)"
                        class="dropdown-item rounded-1"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_location"
                      >
                        <i class="ti ti-edit me-2"></i>Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        @click="openDeleteModal(record)"
                        class="dropdown-item rounded-1 text-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_location"
                      >
                        <i class="ti ti-trash me-2"></i>Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
    <!-- End Content -->

    <LayoutsFooter />
  </div>

  <!-- ========================
		End Page Content
	========================= -->

  <!-- Add Location Modal -->
  <div id="add_location" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0 pb-2 bg-gradient-primary text-white">
          <div class="d-flex align-items-center">
            <div>
              <h5 class="fw-bold modal-title mb-0 text-white fs-16">Add New Location</h5>
              <p class="mb-0 fs-12 text-white opacity-75">Create a new location for your facility</p>
            </div>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-3">
          <form @submit.prevent="handleAddLocation" class="row g-3">
            <div class="col-12">
              <label class="form-label fw-medium"
                >Location Name<span class="text-danger ms-1">*</span></label
              >
              <input v-model="addLocationForm.name" type="text" class="form-control" required />
            </div>
            <div class="col-12">
              <label class="form-label fw-medium">Description</label>
              <textarea
                v-model="addLocationForm.description"
                class="form-control"
                rows="3"
                placeholder="Enter location description..."
              ></textarea>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-medium"
                >Department<span class="text-danger ms-1">*</span></label
              >
              <select v-model="addLocationForm.department_id" class="form-select" required>
                <option value="">Select Department</option>
                <option
                  v-for="department in departments"
                  :key="department.id"
                  :value="department.id"
                >
                  {{ department.name }}
                </option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-medium"
                >Status<span class="text-danger ms-1">*</span></label
              >
              <select v-model="addLocationForm.status" class="form-select" required>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer border-0 pt-0 pb-3 px-3">
          <button
            type="button"
            class="btn btn-white border fw-medium px-3 py-2 fs-13"
            data-bs-dismiss="modal"
            :disabled="isSubmitting"
          >
            <i class="ti ti-x me-1"></i>Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary fw-medium px-3 py-2 fs-13"
            @click="handleAddLocation"
            :disabled="isSubmitting"
          >
            <span
              v-if="isSubmitting"
              class="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
            <i v-else class="ti ti-check me-1"></i>
            {{ isSubmitting ? 'Creating...' : 'Add Location' }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Location Modal -->
  <div id="edit_location" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0 pb-2 bg-gradient-warning text-white">
          <div class="d-flex align-items-center">
            <div>
              <h5 class="fw-bold modal-title mb-0 text-white fs-16">Edit Location</h5>
              <p class="mb-0 fs-12 text-white opacity-75">Update location details</p>
            </div>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-3">
          <form @submit.prevent="handleEditLocation" class="row g-3">
            <div class="col-12">
              <label class="form-label fw-medium"
                >Location Name<span class="text-danger ms-1">*</span></label
              >
              <input v-model="editLocationForm.name" type="text" class="form-control" required />
            </div>
            <div class="col-12">
              <label class="form-label fw-medium">Description</label>
              <textarea
                v-model="editLocationForm.description"
                class="form-control"
                rows="3"
                placeholder="Enter location description..."
              ></textarea>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-medium"
                >Department<span class="text-danger ms-1">*</span></label
              >
              <select v-model="editLocationForm.department_id" class="form-select" required>
                <option value="">Select Department</option>
                <option
                  v-for="department in departments"
                  :key="department.id"
                  :value="department.id"
                >
                  {{ department.name }}
                </option>
              </select>
            </div>
            <div class="col-md-6">
              <label class="form-label fw-medium"
                >Status<span class="text-danger ms-1">*</span></label
              >
              <select v-model="editLocationForm.status" class="form-select" required>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer border-0 pt-0 pb-3 px-3">
          <button
            type="button"
            class="btn btn-white border fw-medium px-3 py-2 fs-13"
            data-bs-dismiss="modal"
            :disabled="isEditSubmitting"
          >
            <i class="ti ti-x me-1"></i>Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary fw-medium px-3 py-2 fs-13"
            @click="handleEditLocation"
            :disabled="isEditSubmitting"
          >
            <span
              v-if="isEditSubmitting"
              class="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
            <i v-else class="ti ti-check me-1"></i>
            {{ isEditSubmitting ? 'Updating...' : 'Update Location' }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- View Location Modal -->
  <div id="view_location" class="modal fade">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow">
        <div class="modal-header border-0 pb-2 bg-gradient-secondary text-white">
          <div class="d-flex align-items-center">
            <div>
              <h5 class="fw-bold modal-title mb-0 text-white fs-16">Location Details</h5>
              <p class="mb-0 fs-12 text-white opacity-75">View location information</p>
            </div>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-3">
          <div class="card bg-light border-0 mb-3">
            <div class="card-body p-2">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div>
                  <h5 class="fw-bold mb-1">{{ viewLocationData.name }}</h5>
                  <span class="text-primary fs-14 fw-medium">ID: {{ viewLocationData.id }}</span>
                </div>
                <span
                  :class="[
                    'badge fw-medium fs-13',
                    viewLocationData.status
                      ? 'badge-soft-success border border-success'
                      : 'badge-soft-danger border border-danger',
                  ]"
                >
                  {{ viewLocationData.status ? 'Active' : 'Inactive' }}
                </span>
              </div>
              <p class="text-muted mb-0" v-if="viewLocationData.description">
                {{ viewLocationData.description }}
              </p>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-md-6">
              <div class="mb-3">
                <p class="text-dark fs-13 fw-medium mb-1">Department</p>
                <p class="fs-13 text-muted">{{ viewLocationData.department?.name || 'Not specified' }}</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <p class="text-dark fs-13 fw-medium mb-1">Doctor Count</p>
                <p class="fs-13 text-muted">{{ viewLocationData.doctor_count || 0 }} doctors</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 pt-0 pb-3 px-3">
          <button type="button" class="btn btn-white border fw-medium px-3 py-2 fs-13" data-bs-dismiss="modal">
            <i class="ti ti-x me-1"></i>Close
          </button>
          <button
            type="button"
            class="btn btn-primary fw-medium px-3 py-2 fs-13"
            @click="openEditFromView"
            data-bs-dismiss="modal"
          >
            <i class="ti ti-edit me-1"></i>Edit Location
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="delete_location">
    <DeleteModal />
  </div>
</template>
<script setup lang="ts">
/**
 * LocationsIndex Component
 *
 * Manages hospital locations with CRUD operations.
 * Features: Search, filter by department/status, status management.
 */
import { ref, computed, onMounted, watch } from 'vue'
import { message } from 'ant-design-vue'
import { useTableStore } from '@/stores/dataTableStore'
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import axiosInstance from '@/utils/axios'

// Types
interface Department {
  id: number
  name: string
}

interface Location {
  id: number
  name: string
  description?: string
  department?: Department
  status: boolean
  doctor_count?: number
}

interface LocationForm {
  id?: number
  name: string
  description: string
  department_id: number | string
  status: string
}

// Store
const locationsTable = useTableStore('locations')

// State
const departments = ref<Department[]>([])
const searchQuery = ref<string>('')
const selectedDepartment = ref<number | string>('')
const selectedStatus = ref<string>('')
const isSubmitting = ref<boolean>(false)
const isEditSubmitting = ref<boolean>(false)

// Form state
const addLocationForm = ref<LocationForm>({
  name: '',
  description: '',
  department_id: '',
  status: 'active',
})

const editLocationForm = ref<LocationForm>({
  id: undefined,
  name: '',
  description: '',
  department_id: '',
  status: 'active',
})

const viewLocationData = ref<Location>({
  id: 0,
  name: '',
  description: '',
  department: undefined,
  status: false,
  doctor_count: 0,
})

const deleteLocationData = ref<Location | null>(null)

// Computed
const paginationConfig = computed(() => ({
  current: locationsTable.currentPage.value,
  pageSize: locationsTable.perPage.value,
  total: locationsTable.totalCount.value,
  showSizeChanger: false,
  showQuickJumper: false,
}))

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 80,
  },
  {
    title: 'Location Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Department',
    key: 'department',
  },
  {
    title: 'Status',
    key: 'status',
    width: 120,
  },
  {
    title: '',
    key: 'actions',
    width: 80,
    className: 'actions',
  },
]

// Methods
const fetchDepartments = async () => {
  try {
    const response = await axiosInstance.get('/departments/')
    departments.value = response.data.results || response.data
  } catch (error) {
    console.error('Failed to fetch departments:', error)
    message.error('Failed to load departments')
  }
}

const applyFilters = () => {
  const filters: any = {}
  if (selectedDepartment.value) filters.department = selectedDepartment.value
  if (selectedStatus.value) filters.status = selectedStatus.value === 'active'
  if (searchQuery.value) filters.search = searchQuery.value

  locationsTable.fetchData(filters)
}

const clearFilters = () => {
  selectedDepartment.value = ''
  selectedStatus.value = ''
  searchQuery.value = ''
  locationsTable.fetchData()
}

const openAddLocationModal = () => {
  addLocationForm.value = {
    name: '',
    description: '',
    department_id: '',
    status: 'active',
  }
}

const openEditLocationModal = (location: Location) => {
  editLocationForm.value = {
    id: location.id,
    name: location.name || '',
    description: location.description || '',
    department_id: location.department?.id || '',
    status: location.status ? 'active' : 'inactive',
  }
}

const openViewLocationModal = (location: Location) => {
  viewLocationData.value = {
    id: location.id,
    name: location.name || '',
    description: location.description || '',
    department: location.department,
    status: location.status,
    doctor_count: location.doctor_count || 0,
  }
}

const openDeleteModal = (location: Location) => {
  deleteLocationData.value = location
}

const handleAddLocation = async () => {
  if (!addLocationForm.value.name?.trim()) {
    message.error('Location name is required')
    return
  }

  if (!addLocationForm.value.department_id) {
    message.error('Department is required')
    return
  }

  isSubmitting.value = true

  try {
    const locationData = {
      name: addLocationForm.value.name.trim(),
      department: addLocationForm.value.department_id,
      status: addLocationForm.value.status === 'active',
      description: addLocationForm.value.description.trim(),
    }

    await axiosInstance.post('/locations/', locationData)
    message.success('Location created successfully')

    // Reset form
    addLocationForm.value = {
      name: '',
      description: '',
      department_id: '',
      status: 'active',
    }

    // Close modal
    const modalEl = document.getElementById('add_location')
    if (window.bootstrap && modalEl) {
      const modal = window.bootstrap.Modal.getInstance(modalEl)
      modal?.hide()
    }

    // Refresh the table
    await locationsTable.fetchData()
  } catch (error: any) {
    console.error('Failed to create location:', error)
    message.error('Failed to create location. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const handleEditLocation = async () => {
  if (!editLocationForm.value.name?.trim()) {
    message.error('Location name is required')
    return
  }

  if (!editLocationForm.value.department_id) {
    message.error('Department is required')
    return
  }

  isEditSubmitting.value = true

  try {
    const locationData = {
      name: editLocationForm.value.name.trim(),
      department: editLocationForm.value.department_id,
      status: editLocationForm.value.status === 'active',
      description: editLocationForm.value.description.trim(),
    }

    await axiosInstance.patch(`/locations/${editLocationForm.value.id}/`, locationData)
    message.success('Location updated successfully')

    // Reset form
    editLocationForm.value = {
      id: undefined,
      name: '',
      description: '',
      department_id: '',
      status: 'active',
    }

    // Close modal
    const modalEl = document.getElementById('edit_location')
    if (window.bootstrap && modalEl) {
      const modal = window.bootstrap.Modal.getInstance(modalEl)
      modal?.hide()
    }

    // Refresh the table
    await locationsTable.fetchData()
  } catch (error: any) {
    console.error('Failed to update location:', error)
    message.error('Failed to update location. Please try again.')
  } finally {
    isEditSubmitting.value = false
  }
}

const openEditFromView = () => {
  openEditLocationModal(viewLocationData.value)

  setTimeout(() => {
    const editModalEl = document.getElementById('edit_location')
    if (window.bootstrap && editModalEl) {
      const editModal = new window.bootstrap.Modal(editModalEl)
      editModal.show()
    }
  }, 100)
}

// Watchers
watch(searchQuery, () => {
  setTimeout(() => {
    applyFilters()
  }, 300)
})

// Lifecycle
onMounted(async () => {
  await fetchDepartments()
  locationsTable.fetchData().catch(() => {
    message.error('Failed to load locations data')
  })
})
</script>

<style scoped>
/* Modal header gradients - Consistent color scheme */
.bg-gradient-primary {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
}

.bg-gradient-warning {
  background: linear-gradient(135deg, #fd7e14 0%, #e8590c 100%);
}

.bg-gradient-secondary {
  background: linear-gradient(135deg, #28a745 0%, #218838 100%);
}

/* Close button for white text */
.btn-close-white {
  filter: brightness(0) invert(1);
  opacity: 0.8;
}

.btn-close-white:hover {
  opacity: 1;
}

/* Form label styling */
.form-label {
  font-weight: 500;
  color: #495057;
  font-size: 13px;
  margin-bottom: 4px;
}

/* Card styling */
.card {
  border-radius: 10px;
}

.card.bg-light {
  background-color: #f8f9fa !important;
}

/* Avatar styling */
.avatar {
  width: 32px;
  height: 32px;
}

.avatar-sm {
  width: 36px;
  height: 36px;
}

/* Button styling */
.btn {
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background: #0056b3;
  border-color: #0056b3;
}

.btn-white {
  background: #fff;
  color: #6c757d;
}

.btn-white:hover {
  background: #f8f9fa;
  color: #495057;
}

/* Modal shadow */
.modal-content {
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

/* Dropdown styling */
.dropdown-menu {
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.dropdown-item {
  border-radius: 6px;
  font-size: 14px;
  padding: 8px 12px;
}

.dropdown-item:hover {
  background-color: #f8f9fa;
}

/* Badge styling */
.badge {
  padding: 6px 12px;
  border-radius: 6px;
}
</style>
