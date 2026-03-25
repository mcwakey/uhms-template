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
            Specializations<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ specializationsTable.totalCount }}</span
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
            @click="openAddSpecializationModal"
            title="Add Specialization"
            data-bs-toggle="modal"
            data-bs-target="#add_specialization"
            class="btn btn-primary ms-2 fs-13 btn-md"
          >
            <i class="ti ti-plus me-1"></i>Add Specializations
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
                <h4 class="mb-0">Filter Specializations</h4>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-danger text-decoration-underline" @click="clearFilters"
                    >Clear All</a
                  >
                </div>
              </div>
              <div class="filter-body pb-0 p-3">
                <!-- Department Filter -->
                <div class="mb-3">
                  <label class="form-label fw-semibold">Department</label>
                  <select class="form-select" v-model="filters.department">
                    <option value="">All Departments</option>
                    <option v-for="dept in departments" :key="dept.id" :value="dept.id">
                      {{ dept.name }}
                    </option>
                  </select>
                </div>
                <!-- Status Filter -->
                <div class="mb-3">
                  <label class="form-label fw-semibold">Status</label>
                  <select class="form-select" v-model="filters.status">
                    <option value="">All Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>
              <div class="filter-footer d-flex align-items-center justify-content-end border-top p-3">
                <a href="javascript:void(0);" class="btn btn-light btn-md me-2 fw-medium" @click="clearFilters">Reset</a>
                <button type="button" class="btn btn-primary btn-md fw-medium" @click="applyFilters">Apply Filters</button>
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
          :data-source="specializationsTable.data.value"
          :pagination="paginationConfig"
          @change="specializationsTable.handleTableChange"
          row-key="id"
          :pagination-class="pagination - rounded"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a
                href="javascript:void(0);"
                @click="openViewSpecializationModal(record)"
                data-bs-toggle="modal"
                data-bs-target="#view_specialization"
                class="text-dark fw-semibold"
                title="View Details"
              >
                {{ record.name }}
              </a>
            </template>
            <template v-if="column.key === 'department'">
              <div class="d-flex align-items-center ms-2">
                <div>
                  <h6 class="mb-1 fs-14">
                    {{ record.department?.name || '-' }}
                  </h6>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'status'">
              <span
                :class="[
                  'badge border',
                  record.status
                    ? 'badge-soft-success border-success fw-medium fs-13'
                    : 'badge-soft-danger border-danger fw-medium fs-13',
                ]"
                >{{ record.status ? 'Active' : 'Inactive' }}</span
              >
            </template>
            <template v-else-if="column.key === 'actions'">
              <div class="d-flex align-items-center justify-content-end gap-2">
                <ActionIcons
                  viewTitle="View Specialization"
                  editTitle="Edit Specialization"
                  deleteTitle="Delete Specialization"
                  @view="openViewSpecializationModal(record)"
                  @edit="openEditSpecializationModal(record)"
                  @delete="openModal(record)"
                />
              </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <LayoutsFooter></LayoutsFooter>
    <!-- Footer End -->
  </div>

  <!-- ========================
		End Page Content
	========================= -->

  <!-- Add Specialization Modal -->
  <div id="add_specialization" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow">
        <!-- Header -->
        <div class="modal-header border-0 pb-2 bg-primary text-white">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <div class="avatar avatar-sm bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center">
                <i class="ti ti-stethoscope fs-5 text-white"></i>
              </div>
            </div>
            <div>
              <h5 class="fw-bold modal-title mb-0 text-white fs-16">Add New Specialization</h5>
              <p class="mb-0 fs-12 text-white opacity-75">Create a new medical specialization</p>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Body -->
        <div class="modal-body p-3">
          <form @submit.prevent="handleAddSpecialization" class="row g-3">
            <div class="col-md-6">
              <label class="form-label fw-medium"
                >Specialization Name<span class="text-danger ms-1">*</span></label
              >
              <input
                v-model="addSpecializationForm.name"
                type="text"
                class="form-control"
                placeholder="Enter specialization name"
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label fw-medium"
                >Department<span class="text-danger ms-1">*</span></label
              >
              <select v-model="addSpecializationForm.department_id" class="form-select" required>
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
              <select v-model="addSpecializationForm.status" class="form-select" required>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div class="col-12">
              <label class="form-label fw-medium">Description</label>
              <textarea
                v-model="addSpecializationForm.description"
                class="form-control"
                rows="3"
                placeholder="Enter specialization description..."
              ></textarea>
            </div>
          </form>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 pb-3 px-3">
          <button type="button" class="btn btn-white border fw-medium px-3 py-2 fs-13" data-bs-dismiss="modal" :disabled="isSubmitting">
            <i class="ti ti-x me-1"></i>Cancel
          </button>
          <button type="button" class="btn btn-primary fw-medium px-3 py-2 fs-13" @click="handleAddSpecialization" :disabled="isSubmitting">
            <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            <i v-else class="ti ti-check me-1"></i>
            {{ isSubmitting ? 'Creating...' : 'Add Specialization' }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Specialization Modal -->
  <div id="edit_specialization" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow">
        <!-- Header -->
        <div class="modal-header border-0 pb-2 bg-primary text-white">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <div class="avatar avatar-sm bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center">
                <i class="ti ti-edit fs-5 text-white"></i>
              </div>
            </div>
            <div>
              <h5 class="fw-bold modal-title mb-0 text-white fs-16">Edit Specialization</h5>
              <p class="mb-0 fs-12 text-white opacity-75">Update specialization details</p>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Body -->
        <div class="modal-body p-3">
          <form @submit.prevent="handleEditSpecialization" class="row g-3">
            <div class="col-md-6">
              <label class="form-label fw-medium"
                >Specialization Name<span class="text-danger ms-1">*</span></label
              >
              <input
                v-model="editSpecializationForm.name"
                type="text"
                class="form-control"
                placeholder="Enter specialization name"
                required
              />
            </div>
            <div class="col-md-6">
              <label class="form-label fw-medium"
                >Department<span class="text-danger ms-1">*</span></label
              >
              <select v-model="editSpecializationForm.department_id" class="form-select" required>
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
              <select v-model="editSpecializationForm.status" class="form-select" required>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div class="col-12">
              <label class="form-label fw-medium">Description</label>
              <textarea
                v-model="editSpecializationForm.description"
                class="form-control"
                rows="3"
                placeholder="Enter specialization description..."
              ></textarea>
            </div>
          </form>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 pb-3 px-3">
          <button type="button" class="btn btn-white border fw-medium px-3 py-2 fs-13" data-bs-dismiss="modal" :disabled="isEditSubmitting">
            <i class="ti ti-x me-1"></i>Cancel
          </button>
          <button type="button" class="btn btn-primary fw-medium px-3 py-2 fs-13" @click="handleEditSpecialization" :disabled="isEditSubmitting">
            <span v-if="isEditSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            <i v-else class="ti ti-check me-1"></i>
            {{ isEditSubmitting ? 'Updating...' : 'Update Specialization' }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- View Specialization Modal -->
  <div id="view_specialization" class="modal fade" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow">
        <!-- Header -->
        <div class="modal-header border-0 pb-2 bg-primary text-white">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <div class="avatar avatar-sm bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center">
                <i class="ti ti-eye fs-5 text-white"></i>
              </div>
            </div>
            <div>
              <h5 class="fw-bold modal-title mb-0 text-white fs-16">Specialization Details</h5>
              <p class="mb-0 fs-12 text-white opacity-75">View specialization information</p>
            </div>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Body -->
        <div class="modal-body p-3">
          <!-- Info Card -->
          <div class="card bg-light border-0 mb-3">
            <div class="card-body p-2">
              <div class="d-flex align-items-center">
                <div class="me-2">
                  <div class="avatar avatar-xs bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center">
                    <i class="ti ti-stethoscope text-primary fs-6"></i>
                  </div>
                </div>
                <div class="flex-grow-1">
                  <h6 class="mb-0 fw-bold text-dark fs-14">{{ viewSpecializationData.name }}</h6>
                  <div class="d-flex align-items-center gap-2 text-muted fs-11">
                    <span>ID: {{ viewSpecializationData.id }}</span>
                    <span v-if="viewSpecializationData.department">• {{ viewSpecializationData.department.name }}</span>
                  </div>
                </div>
                <div class="text-end">
                  <span :class="[
                    'badge fs-10 px-2 py-1',
                    viewSpecializationData.status
                      ? 'bg-success bg-opacity-10 text-success'
                      : 'bg-danger bg-opacity-10 text-danger'
                  ]">
                    {{ viewSpecializationData.status ? 'Active' : 'Inactive' }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Details -->
          <div class="row g-3">
            <div class="col-md-6" v-if="viewSpecializationData.department">
              <div class="p-2 bg-light rounded">
                <p class="text-muted fs-12 mb-1 fw-medium">Department</p>
                <p class="fs-13 text-dark mb-0 fw-semibold">{{ viewSpecializationData.department.name }}</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-2 bg-light rounded">
                <p class="text-muted fs-12 mb-1 fw-medium">Doctor Count</p>
                <p class="fs-13 text-dark mb-0 fw-semibold">{{ viewSpecializationData.doctor_count || 0 }} doctors</p>
              </div>
            </div>
            <div class="col-12" v-if="viewSpecializationData.description">
              <div class="p-2 bg-light rounded">
                <p class="text-muted fs-12 mb-1 fw-medium">Description</p>
                <p class="fs-13 text-dark mb-0">{{ viewSpecializationData.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 pb-3 px-3">
          <button type="button" class="btn btn-white border fw-medium px-3 py-2 fs-13" data-bs-dismiss="modal">
            <i class="ti ti-x me-1"></i>Close
          </button>
          <button type="button" class="btn btn-primary fw-medium px-3 py-2 fs-13" @click="openEditFromView" data-bs-dismiss="modal">
            <i class="ti ti-edit me-1"></i>Edit Specialization
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="delete_specializations">
    <DeleteModal></DeleteModal>
  </div>
</template>

<style scoped>
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

/* Info card styling */
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

.avatar-xs {
  width: 24px;
  height: 24px;
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
</style>
<script setup lang="ts">
import { onMounted, computed, ref, watch } from 'vue'
import { message } from 'ant-design-vue'
import { useTableStore } from '@/stores/dataTableStore'
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import ActionIcons from '@/components/common/ActionIcons.vue'
import axiosInstance from '@/utils/axios'
import { hideModalById, showModalById } from '@/utils/bootstrap'

interface Department {
  id: number
  name: string
}

interface Specialization {
  id: number
  name: string
  description?: string
  department?: Department
  status: boolean
  doctor_count?: number
  uuid?: string
}

interface SpecializationForm {
  id?: number | null
  name: string
  description: string
  department_id: string | number
  status: string
}

const specializationsTable = useTableStore('specializations')
const detailedItem = computed(() => specializationsTable.detailedItem.value || {})

// Search and filter state
const searchQuery = ref<string>('')
const filters = ref({
  department: '',
  status: ''
})

// Departments state
const departments = ref<Department[]>([])

const paginationConfig = computed(() => ({
  current: specializationsTable.currentPage.value,
  pageSize: specializationsTable.perPage.value,
  total: specializationsTable.totalCount.value,
  showSizeChanger: false,
  showQuickJumper: false,
}))

// Form state
const addSpecializationForm = ref<SpecializationForm>({
  name: '',
  description: '',
  department_id: '',
  status: 'active',
})

const editSpecializationForm = ref<SpecializationForm>({
  id: null,
  name: '',
  description: '',
  department_id: '',
  status: 'active',
})

const viewSpecializationData = ref<Specialization>({
  id: 0,
  name: '',
  description: '',
  department: undefined,
  status: false,
  doctor_count: 0,
})

const isSubmitting = ref<boolean>(false)
const isEditSubmitting = ref<boolean>(false)

// Fetch departments
const fetchDepartments = async () => {
  try {
    const response = await axiosInstance.get('/departments')
    departments.value = response.data.results || response.data
  } catch (error) {
    console.error('Failed to fetch departments:', error)
    message.error('Failed to load departments')
  }
}

// Search and filter methods
let searchTimeout: ReturnType<typeof setTimeout> | null = null
watch(searchQuery, (newValue) => {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(async () => {
    await specializationsTable.fetchData({ search: newValue })
  }, 300)
})

const applyFilters = async () => {
  const filterParams: Record<string, any> = {}
  if (filters.value.department) {
    filterParams.department = filters.value.department
  }
  if (filters.value.status) {
    filterParams.status = filters.value.status === 'active'
  }
  if (searchQuery.value) {
    filterParams.search = searchQuery.value
  }
  await specializationsTable.fetchData(filterParams)
}

const clearFilters = async () => {
  filters.value = {
    department: '',
    status: ''
  }
  searchQuery.value = ''
  await specializationsTable.fetchData()
}

// Form validation
const validateForm = (): string[] => {
  const errors: string[] = []
  if (!addSpecializationForm.value.name?.trim()) {
    errors.push('Specialization name is required')
  }
  if (!addSpecializationForm.value.department_id) {
    errors.push('Department is required')
  }
  return errors
}

const validateEditForm = (): string[] => {
  const errors: string[] = []
  if (!editSpecializationForm.value.name?.trim()) {
    errors.push('Specialization name is required')
  }
  if (!editSpecializationForm.value.department_id) {
    errors.push('Department is required')
  }
  return errors
}

// Modal handlers
const openAddSpecializationModal = () => {
  addSpecializationForm.value = {
    name: '',
    description: '',
    department_id: '',
    status: 'active',
  }
}

const openEditSpecializationModal = (specialization: Specialization) => {
  editSpecializationForm.value = {
    id: specialization.id,
    name: specialization.name || '',
    description: specialization.description || '',
    department_id: specialization.department?.id || '',
    status: specialization.status ? 'active' : 'inactive',
  }
}

const openViewSpecializationModal = (specialization: Specialization) => {
  viewSpecializationData.value = {
    id: specialization.id,
    name: specialization.name || '',
    description: specialization.description || '',
    department: specialization.department,
    status: specialization.status,
    doctor_count: specialization.doctor_count || 0,
  }
}

// API handlers
const handleAddSpecialization = async () => {
  const validationErrors = validateForm()
  if (validationErrors.length > 0) {
    message.error(validationErrors[0])
    return
  }

  isSubmitting.value = true

  try {
    const specializationData = {
      name: addSpecializationForm.value.name.trim(),
      department: addSpecializationForm.value.department_id,
      status: addSpecializationForm.value.status === 'active',
      description: addSpecializationForm.value.description.trim(),
    }

    await axiosInstance.post('/specializations', specializationData)
    message.success('Specialization created successfully')

    // Reset form
    addSpecializationForm.value = {
      name: '',
      description: '',
      department_id: '',
      status: 'active',
    }

    // Close modal
    hideModalById('add_specialization')

    // Refresh the table
    await specializationsTable.fetchData()
  } catch (error) {
    console.error('Failed to create specialization:', error)
    message.error('Failed to create specialization. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

const handleEditSpecialization = async () => {
  const validationErrors = validateEditForm()
  if (validationErrors.length > 0) {
    message.error(validationErrors[0])
    return
  }

  isEditSubmitting.value = true

  try {
    const specializationData = {
      name: editSpecializationForm.value.name.trim(),
      department: editSpecializationForm.value.department_id,
      status: editSpecializationForm.value.status === 'active',
      description: editSpecializationForm.value.description.trim(),
    }

    await axiosInstance.patch(
      `/specializations/${editSpecializationForm.value.id}/`,
      specializationData
    )

    message.success('Specialization updated successfully')

    // Reset form
    editSpecializationForm.value = {
      id: null,
      name: '',
      description: '',
      department_id: '',
      status: 'active',
    }

    // Close modal
    hideModalById('edit_specialization')

    // Refresh the table
    await specializationsTable.fetchData()
  } catch (error) {
    console.error('Failed to update specialization:', error)
    message.error('Failed to update specialization. Please try again.')
  } finally {
    isEditSubmitting.value = false
  }
}

// Other methods
const openModal = async (record: Specialization) => {
  try {
    specializationsTable.selectItem(record)
    if (record.uuid) {
      await specializationsTable.fetchItemDetails(record.uuid)
    }
  } catch (error: any) {
    message.error(error?.message || 'Failed to load details')
  }
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Specializations',
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
  },
  {
    title: '',
    key: 'actions',
    width: 30,
    className: 'actions',
  },
]

const openEditFromView = () => {
  openEditSpecializationModal(viewSpecializationData.value)

  setTimeout(() => {
    showModalById('edit_specialization')
  }, 100)
}

onMounted(async () => {
  await fetchDepartments()
  specializationsTable.fetchData().catch(() => {
    message.error('Failed to load specializations data')
  })
})
</script>

<!-- <style>

/* Center alignment fixes */
td.actions,
td.specializations_id,
th {
  text-align: center !important;
}

th {
  font-size: 1.2em;
  font-weight: 200;
}

td.email,
td.phone {
  text-align: center !important;
}
</style> -->
