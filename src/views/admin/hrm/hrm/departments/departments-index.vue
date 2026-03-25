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
            Departments<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ DepartmentsTable.totalCount }}</span
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

          <button
            class="btn btn-primary ms-2 fs-13 btn-md"
            data-bs-toggle="modal"
            data-bs-target="#add_department"
          >
            <i class="ti ti-plus me-1"></i>Add New Department
          </button>

          <!-- <RouterLink
            to="/hrm/staff/add"
            class="btn btn-primary ms-2 fs-13 btn-md"
          >
            <i class="ti ti-plus me-1"></i>Add New Department
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
          :data-source="DepartmentsTable.data.value"
          :pagination="paginationConfig"
          @change="DepartmentsTable.handleTableChange"
          row-key="id"
          :pagination-class="pagination - rounded"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'full_name'">
              <div class="d-flex align-items-center ms-2">
                <a
                  href="javascript:void(0);"
                  class="avatar me-2 fs-14"
                  @click="openModal(record)"
                  data-bs-toggle="modal"
                  data-bs-target="#view_staff"
                >
                  <img
                    width="16"
                    height="16"
                    src="@/assets/img/users/user-08.jpg"
                    alt="Staff"
                    class="rounded-circle m-r-5"
                  />
                </a>
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <a
                      href="javascript:void(0);"
                      @click="openModal(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#add_department"
                      >{{ record.full_name }}</a
                    >
                  </h6>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'actions'">
              <div class="d-flex align-items-center justify-content-end gap-2">
                <ActionIcons
                  viewTitle="View Department"
                  editTitle="Edit Department"
                  deleteTitle="Delete Department"
                  @view="openViewModal(record)"
                  @edit="openEditModal(record)"
                  @delete="openModal(record)"
                />
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

  <!-- View Department Modal -->
  <!-- View Department Modal -->
  <div id="view_department" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">Department Details</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <!-- Department Header -->
          <div class="bg-light rounded p-3 mb-3 text-center">
            <div
              class="avatar avatar-lg bg-primary bg-opacity-10 text-primary mx-auto mb-2 rounded-circle d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-building fs-3"></i>
            </div>
            <h5 class="fw-bold mb-1">{{ viewDepartmentData.name || 'N/A' }}</h5>
            <p class="text-muted mb-2 fs-13">
              {{ viewDepartmentData.description || 'No description provided' }}
            </p>
            <div class="d-flex justify-content-center gap-2">
              <span
                :class="viewDepartmentData.is_active ? 'badge bg-success' : 'badge bg-danger'"
                class="fs-12"
              >
                {{ viewDepartmentData.is_active ? 'Active' : 'Inactive' }}
              </span>
              <span class="badge bg-primary bg-opacity-10 text-primary fs-12">
                {{ getTypeLabel(viewDepartmentData.type) || 'N/A' }}
              </span>
            </div>
          </div>

          <!-- Department Details -->
          <div class="row g-3">
            <div class="col-6">
              <label class="form-label text-muted fs-12 mb-1">Department ID</label>
              <div class="bg-light rounded p-2">
                <span class="fw-medium">#{{ viewDepartmentData.id || 'N/A' }}</span>
              </div>
            </div>
            <div class="col-6">
              <label class="form-label text-muted fs-12 mb-1">Location</label>
              <div class="bg-light rounded p-2">
                <span>{{ viewDepartmentData.location || 'Not specified' }}</span>
              </div>
            </div>
            <div class="col-6">
              <label class="form-label text-muted fs-12 mb-1">Billable Services</label>
              <div class="d-flex align-items-center">
                <div
                  :class="viewDepartmentData.billable ? 'bg-success' : 'bg-secondary'"
                  class="rounded-circle me-2"
                  style="width: 16px; height: 16px"
                >
                  <i
                    :class="viewDepartmentData.billable ? 'ti ti-check' : 'ti ti-x'"
                    class="text-white fs-10"
                  ></i>
                </div>
                <span class="fs-13">{{ viewDepartmentData.billable ? 'Yes' : 'No' }}</span>
              </div>
            </div>
            <div class="col-6">
              <label class="form-label text-muted fs-12 mb-1">Created Date</label>
              <div class="bg-light rounded p-2">
                <span class="fs-13">{{ formatDate(viewDepartmentData.created_at) || 'N/A' }}</span>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <!-- <div class="row g-2 mt-2">
          <div class="col-6">
            <div class="text-center p-2 bg-primary bg-opacity-10 rounded">
              <div class="fw-bold text-primary fs-5">0</div>
              <small class="text-muted">Staff</small>
            </div>
          </div>
          <div class="col-6">
            <div class="text-center p-2 bg-info bg-opacity-10 rounded">
              <div class="fw-bold text-info fs-5">0</div>
              <small class="text-muted">Services</small>
            </div>
          </div>
        </div> -->
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <!-- <button
          type="button"
          class="btn btn-primary"
          @click="openEditFromView"
        >
          <i class="ti ti-edit me-1"></i>Edit
        </button> -->
        </div>
      </div>
    </div>
  </div>

  <!-- Add Department Modal -->
  <div id="add_department" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">Add New Department</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveDepartment">
            <div class="row">
              <!-- Department Name -->
              <div class="col-md-12 mb-3">
                <label class="form-label">Department Name <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  v-model="departmentForm.name"
                  placeholder="Enter department name"
                  required
                />
              </div>

              <!-- Description -->
              <div class="col-md-12 mb-3">
                <label class="form-label">Description</label>
                <textarea
                  class="form-control"
                  v-model="departmentForm.description"
                  placeholder="Enter department description"
                  rows="3"
                ></textarea>
              </div>

              <!-- Department Type -->
              <div class="col-md-6 mb-3">
                <label class="form-label">Department Type <span class="text-danger">*</span></label>
                <select class="form-select" v-model="departmentForm.type" required>
                  <option value="">Select Type</option>
                  <option
                    v-for="option in serviceTypeOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <!-- Department Head -->
              <!-- <div class="col-md-12 mb-3">
                <label class="form-label">Department Head</label>
                <select class="form-select" v-model="departmentForm.head_id">
                  <option value="">Select Department Head</option>
                  <option v-for="staff in staffList" :key="staff.id" :value="staff.id">
                    {{ staff.full_name }} - {{ staff.specialization }}
                  </option>
                </select>
              </div> -->

              <!-- Location -->
              <div class="col-md-6 mb-3">
                <label class="form-label">Location/Floor</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="departmentForm.location"
                  placeholder="e.g., 2nd Floor, Wing A"
                />
              </div>

              <!-- Billable -->
              <div class="col-md-12 mb-3">
                <label class="form-label">Billable Services</label>
                <div class="form-check form-switch mt-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="departmentForm.billable"
                    id="billableSwitch"
                  />
                  <label class="form-check-label" for="billableSwitch">
                    Department offers billable services
                  </label>
                </div>
              </div>

              <!-- Phone Extension -->
              <!-- <div class="col-md-6 mb-3">
                <label class="form-label">Phone Extension</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="departmentForm.phone_extension"
                  placeholder="e.g., 2001"
                />
              </div> -->

              <!-- Status -->
              <div class="col-md-12 mb-3">
                <label class="form-label">Status</label>
                <div class="form-check form-switch mt-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="departmentForm.is_active"
                    id="statusSwitch"
                    checked
                  />
                  <label class="form-check-label" for="statusSwitch"> Department is active </label>
                </div>
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="d-flex gap-2 justify-content-end mt-4">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                {{ isSubmitting ? 'Saving...' : 'Save Department' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Department Modal -->
  <div id="edit_department" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">Edit Department</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateDepartment">
            <div class="row">
              <!-- Department Name -->
              <div class="col-md-12 mb-3">
                <label class="form-label">Department Name <span class="text-danger">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  v-model="editDepartmentForm.name"
                  placeholder="Enter department name"
                  required
                />
              </div>

              <!-- Description -->
              <div class="col-md-12 mb-3">
                <label class="form-label">Description</label>
                <textarea
                  class="form-control"
                  v-model="editDepartmentForm.description"
                  placeholder="Enter department description"
                  rows="3"
                ></textarea>
              </div>

              <!-- Department Type -->
              <div class="col-md-6 mb-3">
                <label class="form-label">Department Type <span class="text-danger">*</span></label>
                <select class="form-select" v-model="editDepartmentForm.type" required>
                  <option value="">Select Type</option>
                  <option
                    v-for="option in serviceTypeOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>

              <!-- Location -->
              <div class="col-md-6 mb-3">
                <label class="form-label">Location/Floor</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="editDepartmentForm.location"
                  placeholder="e.g., 2nd Floor, Wing A"
                />
              </div>

              <!-- Billable -->
              <div class="col-md-12 mb-3">
                <label class="form-label">Billable Services</label>
                <div class="form-check form-switch mt-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="editDepartmentForm.billable"
                    id="editBillableSwitch"
                  />
                  <label class="form-check-label" for="editBillableSwitch">
                    Department offers billable services
                  </label>
                </div>
              </div>

              <!-- Status -->
              <div class="col-md-12 mb-3">
                <label class="form-label">Status</label>
                <div class="form-check form-switch mt-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="editDepartmentForm.is_active"
                    id="editStatusSwitch"
                  />
                  <label class="form-check-label" for="editStatusSwitch">
                    Department is active
                  </label>
                </div>
              </div>
            </div>

            <!-- Modal Footer -->
            <div class="d-flex gap-2 justify-content-end mt-4">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Cancel
              </button>
              <button type="submit" class="btn btn-primary" :disabled="isEditSubmitting">
                <span v-if="isEditSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                {{ isEditSubmitting ? 'Updating...' : 'Update Department' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="delete_staff">
    <DeleteModal></DeleteModal>
  </div>
</template>
<script>
import { useTableStore } from '@/stores/dataTable'
import { onMounted, computed, ref } from 'vue'
import { message } from 'ant-design-vue'
import FilterIndex from '@/components/common/filter-index.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import axiosInstance from '@/utils/axios.js'
import constants from '@/assets/json/constants.json'
import { hideModalById, showModalById } from '@/utils/bootstrap'
import ActionIcons from '@/components/common/ActionIcons.vue'

export default {
  components: { FilterIndex, DeleteModal, ActionIcons },
  name: 'DepartmentsTable',

  setup() {
    const DepartmentsTable = useTableStore('departments')
    const detailedItem = computed(() => DepartmentsTable.detailedItem.value || {})
    const isSubmitting = ref(false)
    const isEditSubmitting = ref(false)

    // Load service type options from constants
    const serviceTypeOptions = computed(() => {
      const serviceTypes = constants.find((item) => item.serviceTypeOptions)
      return serviceTypes ? serviceTypes.serviceTypeOptions : []
    })

    // Department form data
    const departmentForm = ref({
      name: '',
      description: '',
      type: '',
      billable: false,
      head_id: '',
      location: '',
      phone_extension: '',
      is_active: true,
    })

    // Edit department form data
    const editDepartmentForm = ref({
      id: null,
      name: '',
      description: '',
      type: '',
      billable: false,
      location: '',
      is_active: true,
    })

    // View department data
    const viewDepartmentData = ref({
      id: null,
      name: '',
      description: '',
      type: '',
      billable: false,
      location: '',
      is_active: true,
      created_at: '',
    })

    // Helper function to get type label
    const getTypeLabel = (value) => {
      const option = serviceTypeOptions.value.find((opt) => opt.value === value)
      return option ? option.label : value
    }

    // Helper function to format date
    const formatDate = (dateString) => {
      if (!dateString) return 'N/A'
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    }

    // Reset forms
    const resetForm = () => {
      departmentForm.value = {
        name: '',
        description: '',
        type: '',
        billable: false,
        head_id: '',
        location: '',
        phone_extension: '',
        is_active: true,
      }
    }

    const resetEditForm = () => {
      editDepartmentForm.value = {
        id: null,
        name: '',
        description: '',
        type: '',
        billable: false,
        location: '',
        is_active: true,
      }
    }

    // Modal handlers
    const openViewModal = (department) => {
      viewDepartmentData.value = {
        id: department.id,
        name: department.name || '',
        description: department.description || '',
        type: department.type || '',
        billable: department.billable || false,
        location: department.location || '',
        is_active: department.is_active !== undefined ? department.is_active : true,
        created_at: department.created_at || '',
      }
    }

    const openEditModal = (department) => {
      editDepartmentForm.value = {
        id: department.id,
        name: department.name || '',
        description: department.description || '',
        type: department.type || '',
        billable: department.billable || false,
        location: department.location || '',
        is_active: department.is_active !== undefined ? department.is_active : true,
      }
    }

    const openEditFromView = () => {
      // Copy data from view to edit form
      editDepartmentForm.value = {
        id: viewDepartmentData.value.id,
        name: viewDepartmentData.value.name,
        description: viewDepartmentData.value.description,
        type: viewDepartmentData.value.type,
        billable: viewDepartmentData.value.billable,
        location: viewDepartmentData.value.location,
        is_active: viewDepartmentData.value.is_active,
      }

      // Close view modal and open edit modal
      hideModalById('view_department')

      setTimeout(() => {
        showModalById('edit_department')
      }, 300)
    }

    // Save department (Add)
    const saveDepartment = async () => {
      try {
        isSubmitting.value = true
        await axiosInstance.post('/departments', departmentForm.value)
        message.success('Department added successfully!')
        resetForm()

        // Refresh table data
        await DepartmentsTable.fetchData()

        // Close modal
        hideModalById('add_department')
      } catch (error) {
        console.error('Error saving department:', error)

        // Handle validation errors
        if (error.response?.data) {
          const errorMessages = Object.entries(error.response.data)
            .map(
              ([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(', ') : errors}`
            )
            .join(' | ')
          message.error(errorMessages)
        } else {
          message.error('Failed to save department. Please try again.')
        }
      } finally {
        isSubmitting.value = false
      }
    }

    // Update department (Edit)
    const updateDepartment = async () => {
      try {
        isEditSubmitting.value = true
        const { id, ...updateData } = editDepartmentForm.value

        await axiosInstance.patch(`/departments/${id}/`, updateData)
        message.success('Department updated successfully!')
        resetEditForm()

        // Close modal
        hideModalById('edit_department')

        // Refresh table data
        await DepartmentsTable.fetchData()
      } catch (error) {
        console.error('Error updating department:', error)

        // Handle validation errors
        if (error.response?.data) {
          const errorMessages = Object.entries(error.response.data)
            .map(
              ([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(', ') : errors}`
            )
            .join(' | ')
          message.error(errorMessages)
        } else {
          message.error('Failed to update department. Please try again.')
        }
      } finally {
        isEditSubmitting.value = false
      }
    }

    const paginationConfig = computed(() => ({
      current: DepartmentsTable.currentPage.value,
      pageSize: DepartmentsTable.perPage.value,
      total: DepartmentsTable.totalCount.value,
    }))

    const openModal = async (record) => {
      try {
        DepartmentsTable.selectItem(record)
        await DepartmentsTable.fetchItemDetails(record.uuid)
      } catch (error) {
        message.error(error)
      }
    }

    // Table columns
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        // className: "staff_id"
      },
      {
        title: 'Department Name',
        dataIndex: 'name',
        key: 'name',
        // className: "name"
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        // className: 'phone'
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        // className: "email",
      },
      {
        title: 'Billable',
        dataIndex: 'billable',
        key: 'billable',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: 'Actions',
        key: 'actions',
        width: 30,
        // className: "actions"
      },
    ]

    onMounted(() => {
      DepartmentsTable.fetchData().catch(() => {
        message.error('Failed to load department data')
      })
    })

    return {
      DepartmentsTable,
      detailedItem,
      paginationConfig,
      columns,
      openModal,
      departmentForm,
      editDepartmentForm,
      viewDepartmentData,
      saveDepartment,
      updateDepartment,
      resetForm,
      resetEditForm,
      openViewModal,
      openEditModal,
      openEditFromView,
      isSubmitting,
      isEditSubmitting,
      serviceTypeOptions,
      getTypeLabel,
      formatDate,
    }
  },
}
</script>

<style>
/* Center alignment fixes */
/* one  */
</style>
