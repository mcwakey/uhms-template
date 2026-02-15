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
            Locations<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ locationsTable.totalCount }}</span
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
          :data-source="locationsTable.data.value"
          :pagination="paginationConfig"
          @change="locationsTable.handleTableChange"
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
                  data-bs-target="#view_locations"
                >
                  <img
                    width="16"
                    height="16"
                    src="@/assets/img/users/user-08.jpg"
                    alt="Locations"
                    class="rounded-circle m-r-5"
                  />
                </a>
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <a
                      href="javascript:void(0);"
                      @click="openModal(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#view_locations"
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
                  data-bs-target="#view_locations"
                >
                  <img width="16" height="16"
                    src="@/assets/img/users/user-08.jpg"
                    alt="Locations"
                    class="rounded-circle m-r-5"
                  />
                </a> -->
                <div>
                  <h6 class="mb-1 fs-14">
                    <!-- <a
                      href="javascript:void(0);"
                      @click="openModal(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#view_locations"
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
                    @click="openViewLocationModal(record)"
                    title="View Location"
                    data-bs-toggle="modal"
                    data-bs-target="#view_location"
                    class="text-primary fs-18 rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-eye"></i>
                  </a>
                </div>
                <div class="action-item me-2">
                  <a
                    href="javascript:void(0);"
                    @click="openEditLocationModal(record)"
                    title="Edit Location"
                    data-bs-toggle="modal"
                    data-bs-target="#edit_location"
                    class="text-warning fs-18 rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-edit"></i>
                  </a>
                </div>
                <div class="action-item">
                  <a
                    href="javascript:void(0);"
                    @click="openModal(record)"
                    title="Delete Location"
                    data-bs-toggle="modal"
                    data-bs-target="#delete_locations"
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

  <!-- Add Location Modal -->
  <div id="add_location" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">Add New Location</h5>
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
          <form @submit.prevent="handleAddLocation">
            <div class="mb-3">
              <label class="form-label fw-medium"
                >Location Name<span class="text-danger ms-1">*</span></label
              >
              <input v-model="addLocationForm.name" type="text" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label fw-medium">Description</label>
              <textarea
                v-model="addLocationForm.description"
                class="form-control"
                rows="3"
                placeholder="Enter location description..."
              ></textarea>
            </div>
            <div class="mb-3">
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
            <div class="mb-3">
              <label class="form-label fw-medium"
                >Status<span class="text-danger ms-1">*</span></label
              >
              <select v-model="addLocationForm.status" class="form-select" required>
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
                {{ isSubmitting ? 'Creating...' : 'Add Location' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Edit Location Modal -->
  <div id="edit_location" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">Edit Location</h5>
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
          <form @submit.prevent="handleEditLocation">
            <div class="mb-3">
              <label class="form-label fw-medium"
                >Location Name<span class="text-danger ms-1">*</span></label
              >
              <input v-model="editLocationForm.name" type="text" class="form-control" required />
            </div>
            <div class="mb-3">
              <label class="form-label fw-medium">Description</label>
              <textarea
                v-model="editLocationForm.description"
                class="form-control"
                rows="3"
                placeholder="Enter location description..."
              ></textarea>
            </div>
            <div class="mb-3">
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
            <div class="mb-3">
              <label class="form-label fw-medium"
                >Status<span class="text-danger ms-1">*</span></label
              >
              <select v-model="editLocationForm.status" class="form-select" required>
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
                {{ isEditSubmitting ? 'Updating...' : 'Update Location' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- View Location Modal -->
  <div id="view_location" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">Location Details</h5>
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
                  <h5 class="fw-bold mb-1">{{ viewLocationData.name }}</h5>
                  <span class="text-primary fs-14 fw-medium">ID: {{ viewLocationData.id }}</span>
                </div>
                <span
                  :class="[
                    'badge fw-medium fs-13',
                    viewLocationData.status === 'active'
                      ? 'badge-soft-success border border-success'
                      : 'badge-soft-danger border border-danger',
                  ]"
                >
                  {{ viewLocationData.status === 'active' ? 'Active' : 'Inactive' }}
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
                <p class="text-dark fs-13 fw-medium mb-1">Type</p>
                <span :class="['badge fs-13 fw-medium', 'badge-soft-primary']">
                  {{
                    viewLocationData.type
                      ? viewLocationData.type.charAt(0).toUpperCase() +
                        viewLocationData.type.slice(1)
                      : 'Not specified'
                  }}
                </span>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <p class="text-dark fs-13 fw-medium mb-1">Doctor Count</p>
                <p class="fs-13 text-muted">{{ viewLocationData.doctor_count || 0 }} doctors</p>
              </div>
            </div>
            <div class="col-12" v-if="viewLocationData.description">
              <div class="mb-3">
                <p class="text-dark fs-13 fw-medium mb-1">Description</p>
                <p class="fs-13 text-muted">{{ viewLocationData.description }}</p>
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
            <i class="ti ti-edit me-1"></i>Edit Location
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="delete_locations">
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
  name: 'LocationsTable',

  setup() {
    const locationsTable = useTableStore('specializations')
    const detailedItem = computed(() => locationsTable.detailedItem.value || {})

    // Add departments state
    const departments = ref([])

    const paginationConfig = computed(() => ({
      current: locationsTable.currentPage.value,
      pageSize: locationsTable.perPage.value,
      total: locationsTable.totalCount.value,
      showSizeChanger: false,
      showQuickJumper: false,
    }))

    // Form state - update to use department_id instead of type
    const addLocationForm = ref({
      name: '',
      description: '',
      department_id: '', // Changed from type to department_id
      status: 'active',
    })

    const editLocationForm = ref({
      id: null,
      name: '',
      description: '',
      department_id: '', // Changed from type to department_id
      status: 'active',
    })

    const viewLocationData = ref({
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

      if (!addLocationForm.value.name?.trim()) {
        errors.push('Location name is required')
      }

      if (!addLocationForm.value.department_id) {
        errors.push('Department is required')
      }

      return errors
    }

    const validateEditForm = () => {
      const errors = []

      if (!editLocationForm.value.name?.trim()) {
        errors.push('Location name is required')
      }

      if (!editLocationForm.value.department_id) {
        errors.push('Department is required')
      }

      return errors
    }

    // Modal handlers - updated
    const openAddLocationModal = () => {
      addLocationForm.value = {
        name: '',
        description: '',
        department_id: '',
        status: 'active',
      }
    }

    const openEditLocationModal = (location) => {
      editLocationForm.value = {
        id: location.id,
        name: location.name || '',
        description: location.description || '',
        department_id: location.department?.id || '',
        status: location.status ? 'active' : 'inactive',
      }
    }

    const openViewLocationModal = (location) => {
      viewLocationData.value = {
        id: location.id,
        name: location.name || '',
        description: location.description || '',
        department_id: location.department?.id || '',
        department_name: location.department?.name || '',
        status: location.status ? 'active' : 'inactive',
        doctor_count: location.doctor_count || 0,
      }
    }

    // API handlers - updated
    const handleAddLocation = async () => {
      const validationErrors = validateForm()
      if (validationErrors.length > 0) {
        message.error(validationErrors[0])
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

        if (addLocationForm.value.description?.trim()) {
          locationData.description = addLocationForm.value.description.trim()
        }

        console.log('Creating location with data:', locationData)

        const response = await axiosInstance.post('/locations/', locationData)

        console.log('Location created successfully:', response.data)
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
          modal.hide()
        }

        // Refresh the table
        await locationsTable.fetchData()
      } catch (error) {
        console.error('Failed to create location:', error)
        message.error('Failed to create location. Please try again.')
      } finally {
        isSubmitting.value = false
      }
    }

    const handleEditLocation = async () => {
      const validationErrors = validateEditForm()
      if (validationErrors.length > 0) {
        message.error(validationErrors[0])
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

        // if (editLocationForm.value.description?.trim()) {
        // }

        console.log('Updating location with data:', locationData)

        const response = await axiosInstance.patch(
          `/locations/${editLocationForm.value.id}/`,
          locationData
        )

        console.log('Location updated successfully:', response.data)
        message.success('Location updated successfully')

        // Reset form
        editLocationForm.value = {
          id: null,
          name: '',
          description: '',
          department_id: '',
          status: 'active',
        }

        // Close modal
        const modalEl = document.getElementById('edit_location')
        if (window.bootstrap && modalEl) {
          const modal = window.bootstrap.Modal.getInstance(modalEl)
          modal.hide()
        }

        // Refresh the table
        await locationsTable.fetchData()
      } catch (error) {
        console.error('Failed to update location:', error)
        message.error('Failed to update location. Please try again.')
      } finally {
        isEditSubmitting.value = false
      }
    }

    // Rest of your existing code...
    const openModal = async (record) => {
      try {
        locationsTable.selectItem(record)
        await locationsTable.fetchItemDetails(record.uuid)
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
        title: 'Locations',
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
      openEditLocationModal(viewLocationData.value)

      setTimeout(() => {
        const editModalEl = document.getElementById('edit_location')
        if (window.bootstrap && editModalEl) {
          const editModal = new window.bootstrap.Modal(editModalEl)
          editModal.show()
        }
      }, 100)
    }

    onMounted(async () => {
      // Fetch both locations and departments data when the component is mounted
      await fetchDepartments() // Fetch departments first
      locationsTable.fetchData().catch(() => {
        message.error('Failed to load locations data')
      })
    })

    return {
      locationsTable,
      detailedItem,
      paginationConfig,
      columns,
      openModal,
      departments, // Add departments to return
      addLocationForm,
      editLocationForm,
      viewLocationData,
      isSubmitting,
      isEditSubmitting,
      openAddLocationModal,
      openEditLocationModal,
      openViewLocationModal,
      openEditFromView,
      handleAddLocation,
      handleEditLocation,
      validateForm,
      validateEditForm,
    }
  },
}
</script>

<!-- <style>

/* Center alignment fixes */
td.actions,
td.locations_id,
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
