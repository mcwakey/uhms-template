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
          :data-source="specializationsTable.data.value"
          :pagination="paginationConfig"
          @change="specializationsTable.handleTableChange"
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
                  data-bs-target="#view_specializations"
                >
                  <img
                    width="16"
                    height="16"
                    src="@/assets/img/users/user-08.jpg"
                    alt="Specializations"
                    class="rounded-circle m-r-5"
                  />
                </a>
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <a
                      href="javascript:void(0);"
                      @click="openModal(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#view_specializations"
                      >{{ record.full_name }}</a
                    >
                  </h6>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'department'">
              <div class="d-flex align-items-center ms-2">
                <!-- <a
                  href="javascript:void(0);"
                  class="avatar me-2 fs-14"
                  @click="openModal(record)"
                  data-bs-toggle="modal"
                  data-bs-target="#view_specializations"
                >
                  <img width="16" height="16"
                    src="@/assets/img/users/user-08.jpg"
                    alt="Specializations"
                    class="rounded-circle m-r-5"
                  />
                </a> -->
                <div>
                  <h6 class="mb-1 fs-14">
                    <!-- <a
                      href="javascript:void(0);"
                      @click="openModal(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#view_specializations"
                      > -->
                    {{ record.department?.name }}
                    <!-- </a> -->
                  </h6>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'actions'">
              <div class="d-flex align-items-center">
                <div class="action-item me-2">
                  <a
                    href="javascript:void(0);"
                    @click="openViewSpecializationModal(record)"
                    title="View Specialization"
                    data-bs-toggle="modal"
                    data-bs-target="#view_specialization"
                    class="text-primary fs-18 rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-eye"></i>
                  </a>
                </div>
                <div class="action-item me-2">
                  <a
                    href="javascript:void(0);"
                    @click="openEditSpecializationModal(record)"
                    title="Edit Specialization"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_specialization"
                    class="text-warning fs-18 rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-edit"></i>
                  </a>
                </div>
                <div class="action-item">
                  <a
                    href="javascript:void(0);"
                    @click="openModal(record)"
                    title="Delete Specialization"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_specializations"
                    class="text-danger fs-18 rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-trash"></i>
                  </a>
                </div>
              </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy; <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All Rights
        Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- ========================
		End Page Content
	========================= -->

  <!-- Add Specialization Modal -->
  <div id="add_specialization" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">Add New Specialization</h5>
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
          <form @submit.prevent="handleAddSpecialization">
            <div class="mb-3">
              <label class="form-label fw-medium"
                >Specialization Name<span class="text-danger ms-1">*</span></label
              >
              <input
                v-model="addSpecializationForm.name"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label fw-medium">Description</label>
              <textarea
                v-model="addSpecializationForm.description"
                class="form-control"
                rows="3"
                placeholder="Enter specialization description..."
              ></textarea>
            </div>
            <div class="mb-3">
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
            <div class="mb-3">
              <label class="form-label fw-medium"
                >Status<span class="text-danger ms-1">*</span></label
              >
              <select v-model="addSpecializationForm.status" class="form-select" required>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div class="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                :disabled="isSubmitting"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                <span
                  v-if="isSubmitting"
                  class="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                {{ isSubmitting ? 'Creating...' : 'Add Specialization' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Specialization Modal -->
  <div id="edit_specialization" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">Edit Specialization</h5>
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
          <form @submit.prevent="handleEditSpecialization">
            <div class="mb-3">
              <label class="form-label fw-medium"
                >Specialization Name<span class="text-danger ms-1">*</span></label
              >
              <input
                v-model="editSpecializationForm.name"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label class="form-label fw-medium">Description</label>
              <textarea
                v-model="editSpecializationForm.description"
                class="form-control"
                rows="3"
                placeholder="Enter specialization description..."
              ></textarea>
            </div>
            <div class="mb-3">
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
            <div class="mb-3">
              <label class="form-label fw-medium"
                >Status<span class="text-danger ms-1">*</span></label
              >
              <select v-model="editSpecializationForm.status" class="form-select" required>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div class="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-light me-2"
                data-bs-dismiss="modal"
                :disabled="isEditSubmitting"
              >
                Cancel
              </button>
              <button type="submit" class="btn btn-primary" :disabled="isEditSubmitting">
                <span
                  v-if="isEditSubmitting"
                  class="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                {{ isEditSubmitting ? 'Updating...' : 'Update Specialization' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- View Specialization Modal -->
  <div id="view_specialization" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">Specialization Details</h5>
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
          <div class="card bg-light">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between mb-3">
                <div>
                  <h5 class="fw-bold mb-1">{{ viewSpecializationData.name }}</h5>
                  <span class="text-primary fs-14 fw-medium"
                    >ID: {{ viewSpecializationData.id }}</span
                  >
                </div>
                <span
                  :class="[
                    'badge fw-medium fs-13',
                    viewSpecializationData.status === 'active'
                      ? 'badge-soft-success border border-success'
                      : 'badge-soft-danger border border-danger',
                  ]"
                >
                  {{ viewSpecializationData.status === 'active' ? 'Active' : 'Inactive' }}
                </span>
              </div>
              <p class="text-muted mb-0" v-if="viewSpecializationData.description">
                {{ viewSpecializationData.description }}
              </p>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-md-6">
              <div class="mb-3">
                <p class="text-dark fs-13 fw-medium mb-1">Type</p>
                <span :class="['badge fs-13 fw-medium', 'badge-soft-primary']">
                  {{
                    viewSpecializationData.type
                      ? viewSpecializationData.type.charAt(0).toUpperCase() +
                        viewSpecializationData.type.slice(1)
                      : 'Not specified'
                  }}
                </span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <p class="text-dark fs-13 fw-medium mb-1">Doctor Count</p>
                <p class="fs-13 text-muted">
                  {{ viewSpecializationData.doctor_count || 0 }} doctors
                </p>
              </div>
            </div>
            <div class="col-12" v-if="viewSpecializationData.description">
              <div class="mb-3">
                <p class="text-dark fs-13 fw-medium mb-1">Description</p>
                <p class="fs-13 text-muted">{{ viewSpecializationData.description }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="openEditFromView"
            data-bs-dismiss="modal"
          >
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
<script>
import { useTableStore } from '@/stores/dataTableStore'
import { onMounted, computed, ref } from 'vue'
import { message } from 'ant-design-vue'
import FilterIndex from '@/components/common/filter-index.vue'
import DeleteModal from '@/components/modals/general/DeleteModal.vue'
import axiosInstance from '@/utils/axios.js'

export default {
  components: { FilterIndex, DeleteModal },
  name: 'SpecializationsTable',

  setup() {
    const specializationsTable = useTableStore('specializations')
    const detailedItem = computed(() => specializationsTable.detailedItem.value || {})

    // Add departments state
    const departments = ref([])

    const paginationConfig = computed(() => ({
      current: specializationsTable.currentPage.value,
      pageSize: specializationsTable.perPage.value,
      total: specializationsTable.totalCount.value,
      showSizeChanger: false,
      showQuickJumper: false,
    }))

    // Form state - update to use department_id instead of type
    const addSpecializationForm = ref({
      name: '',
      description: '',
      department_id: '', // Changed from type to department_id
      status: 'active',
    })

    const editSpecializationForm = ref({
      id: null,
      name: '',
      description: '',
      department_id: '', // Changed from type to department_id
      status: 'active',
    })

    const viewSpecializationData = ref({
      id: null,
      name: '',
      description: '',
      department_id: '',
      department_name: '',
      status: '',
      doctor_count: 0,
    })

    // Fetch departments
    const fetchDepartments = async () => {
      try {
        const response = await axiosInstance.get('/departments/')
        departments.value = response.data.results || response.data
        console.log('Departments loaded:', departments.value)
      } catch (error) {
        console.error('Failed to fetch departments:', error)
        message.error('Failed to load departments')
      }
    }

    // Form validation - updated
    const validateForm = () => {
      const errors = []

      if (!addSpecializationForm.value.name?.trim()) {
        errors.push('Specialization name is required')
      }

      if (!addSpecializationForm.value.department_id) {
        errors.push('Department is required')
      }

      return errors
    }

    const validateEditForm = () => {
      const errors = []

      if (!editSpecializationForm.value.name?.trim()) {
        errors.push('Specialization name is required')
      }

      if (!editSpecializationForm.value.department_id) {
        errors.push('Department is required')
      }

      return errors
    }

    // Modal handlers - updated
    const openAddSpecializationModal = () => {
      addSpecializationForm.value = {
        name: '',
        description: '',
        department_id: '',
        status: 'active',
      }
    }

    const openEditSpecializationModal = (specialization) => {
      editSpecializationForm.value = {
        id: specialization.id,
        name: specialization.name || '',
        description: specialization.description || '',
        department_id: specialization.department?.id || '',
        status: specialization.status ? 'active' : 'inactive',
      }
    }

    const openViewSpecializationModal = (specialization) => {
      viewSpecializationData.value = {
        id: specialization.id,
        name: specialization.name || '',
        description: specialization.description || '',
        department_id: specialization.department?.id || '',
        department_name: specialization.department?.name || '',
        status: specialization.status ? 'active' : 'inactive',
        doctor_count: specialization.doctor_count || 0,
      }
    }

    // API handlers - updated
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

        if (addSpecializationForm.value.description?.trim()) {
          specializationData.description = addSpecializationForm.value.description.trim()
        }

        console.log('Creating specialization with data:', specializationData)

        const response = await axiosInstance.post(`/departments/${addSpecializationForm.value.department_id}/specializations/`, specializationData)

        console.log('Specialization created successfully:', response.data)
        message.success('Specialization created successfully')

        // Reset form
        addSpecializationForm.value = {
          name: '',
          description: '',
          department_id: '',
          status: 'active',
        }

        // Close modal
        const modalEl = document.getElementById('add_specialization')
        if (window.bootstrap && modalEl) {
          const modal = window.bootstrap.Modal.getInstance(modalEl)
          modal.hide()
        }

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

        // if (editSpecializationForm.value.description?.trim()) {
        // }

        console.log('Updating specialization with data:', specializationData)

        const response = await axiosInstance.patch(
          `/departments/${editSpecializationForm.value.department_id}/specializations/${editSpecializationForm.value.id}/`,
          specializationData
        )

        console.log('Specialization updated successfully:', response.data)
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
        const modalEl = document.getElementById('edit_specialization')
        const Bootstrap = window.bootstrap ?? window.Bootstrap
        if (Bootstrap && modalEl) {
          const modal = Bootstrap.Modal.getInstance?.(modalEl) || null
          if (modal) {
            modal.hide()
          }
        }

        // Refresh the table
        await specializationsTable.fetchData()
      } catch (error) {
        console.error('Failed to update specialization:', error)
        message.error('Failed to update specialization. Please try again.')
      } finally {
        isEditSubmitting.value = false
      }
    }

    // Rest of your existing code...
    const openModal = async (record) => {
      try {
        specializationsTable.selectItem(record)
        await specializationsTable.fetchItemDetails(record.uuid)
      } catch (error) {
        message.error(error)
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

    const isSubmitting = ref(false)
    const isEditSubmitting = ref(false)

    const openEditFromView = () => {
      openEditSpecializationModal(viewSpecializationData.value)

      setTimeout(() => {
        const editModalEl = document.getElementById('edit_specialization')
        const Bootstrap = window.bootstrap ?? window.Bootstrap
        if (Bootstrap && editModalEl) {
          const editModal = new Bootstrap.Modal(editModalEl)
          editModal.show()
        }
      }, 100)
    }

    onMounted(async () => {
      // Fetch both specializations and departments data when the component is mounted
      await fetchDepartments() // Fetch departments first
      specializationsTable.fetchData().catch(() => {
        message.error('Failed to load specializations data')
      })
    })

    return {
      specializationsTable,
      detailedItem,
      paginationConfig,
      columns,
      openModal,
      departments, // Add departments to return
      addSpecializationForm,
      editSpecializationForm,
      viewSpecializationData,
      isSubmitting,
      isEditSubmitting,
      openAddSpecializationModal,
      openEditSpecializationModal,
      openViewSpecializationModal,
      openEditFromView,
      handleAddSpecialization,
      handleEditSpecialization,
      validateForm,
      validateEditForm,
    }
  },
}
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
