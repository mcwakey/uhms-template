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
            Doctors<span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ DoctorsTable.totalCount }}</span
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
          <RouterLink to="/hrm/staff/add" class="btn btn-primary ms-2 fs-13 btn-md">
            <i class="ti ti-plus me-1"></i>New Doctors
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
          :data-source="DoctorsTable.data.value"
          :pagination="paginationConfig"
          @change="DoctorsTable.handleTableChange"
          row-key="id"
          :pagination-class="pagination - rounded"
        >
          <template #bodyCell="{ column, record }">
            <!-- <template v-if="column.key === 'full_name'">
                <div class="d-flex align-items-center">
                    <router-link to="/doctors/doctor-details" class="avatar me-2">
                        <img :src="getImageUrl(record.Image)" alt="Doctor" class="rounded-circle">
                    </router-link>
                    <div>
                        <h6 class="mb-1 fs-14 fw-semibold"><router-link to="/doctors/doctor-details">{{record.Name}}</router-link></h6>
                        <span class="fs-13 d-block"> {{record.Role}} </span>
                    </div>
                </div>
            </template> -->

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
                      data-bs-target="#view_staff"
                      >{{ record.full_name }}</a
                    >
                  </h6>
                  <span class="fs-13 d-block"> {{ record.specialization?.department }} </span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                :class="[
                  'badge border',
                  {
                    'badge-soft-success border-success': record.status !== false,
                    'badge-soft-danger border-danger': record.status === false,
                  },
                ]"
                >{{ record.status !== false ? 'Active' : 'Inactive' }}</span
              >
            </template>
            <template v-else-if="column.key === 'actions'">
              <div class="d-flex align-items-center justify-content-end gap-2">
                <a
                  href="javascript:void(0);"
                  class="action-icon text-success"
                  title="Calendar"
                  @click.prevent="$router.push('/appointments/appointment-calendar')"
                >
                  <i class="ti ti-calendar-cog"></i>
                </a>
                <ActionIcons
                  viewTitle="View Doctor"
                  editTitle="Edit Doctor"
                  deleteTitle="Delete Doctor"
                  @view="() => { openModal(record); }"
                  @edit="() => { openModal(record); }"
                  @delete="() => { openModal(record); }"
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

  <div id="view_staff" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">Staff Details</h5>
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
              <div class="d-flex align-items-center">
                <div class="me-2">
                  <img
                    src="@/assets/img/users/user-08.jpg"
                    alt="img"
                    class="img-fluid avatar avatar-xxl rounded"
                  />
                </div>
                <div>
                  <span class="text-primary mb-1">{{ detailedItem.staff_id }}</span>
                  <div class="d-flex align-items-center mb-1">
                    <h5 class="fw-bold mb-0 me-2">{{ detailedItem.full_name }}</h5>
                    <span class="badge badge-soft-success border border-success fw-medium fs-13"
                      >Available</span
                    >
                  </div>
                  <p>{{ detailedItem.specialization?.name }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->

          <ul class="nav nav-tabs nav-bordered mb-3">
            <li class="nav-item">
              <a
                class="nav-link active"
                href="javascript:void(0);"
                data-bs-toggle="tab"
                data-bs-target="#tab1"
                >Basic Info</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="javascript:void(0);"
                data-bs-toggle="tab"
                data-bs-target="#tab2"
                >Salary Info</a
              >
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane active" id="tab1" role="tabpanel" tabindex="0">
              <div class="row row-gap-2">
                <div class="col-md-4">
                  <p class="text-dark fs-13 fw-medium mb-0">Gender</p>
                  <p class="fs-13">{{ detailedItem.gender }}</p>
                </div>
                <div class="col-md-4">
                  <p class="text-dark fs-13 fw-medium mb-0">Phone Number</p>
                  <p class="fs-13">{{ detailedItem.phone }}</p>
                </div>
                <div class="col-md-4">
                  <p class="text-dark fs-13 fw-medium mb-0">Email</p>
                  <p class="fs-13">{{ detailedItem.email }}</p>
                </div>
                <div class="col-md-4">
                  <p class="text-dark fs-13 fw-medium mb-0">Date of Joining</p>
                  <p class="fs-13">{{ detailedItem.date_of_birth }}</p>
                </div>
                <div class="col-md-4">
                  <p class="text-dark fs-13 fw-medium mb-0">Role</p>
                  <p class="fs-13">{{ detailedItem.role }}</p>
                </div>
                <div class="col-md-12">
                  <p class="text-dark fs-13 fw-medium mb-0">Address</p>
                  <p class="fs-13">{{ detailedItem.address || 'No address available' }}</p>
                </div>
              </div>
            </div>

            <div class="tab-pane" id="tab2" role="tabpanel" tabindex="0">
              <!-- Table List -->
              <div class="table-responsive border bg-white">
                <table class="table table-nowrap">
                  <thead>
                    <tr>
                      <th>Credit Date</th>
                      <th>Amount</th>
                      <th>Salary for</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>13 Jul 2025</td>
                      <td>$4800</td>
                      <td>Jun 2025</td>
                      <td>
                        <div class="action-item">
                          <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>12 Jun 2025</td>
                      <td>$4800</td>
                      <td>May 2025</td>
                      <td>
                        <div class="action-item">
                          <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>15 May 2025</td>
                      <td>$4800</td>
                      <td>Apr 2025</td>
                      <td>
                        <div class="action-item">
                          <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>14 Apr 2025</td>
                      <td>$4800</td>
                      <td>Mar 2025</td>
                      <td>
                        <div class="action-item">
                          <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>13 Mar 2025</td>
                      <td>$4800</td>
                      <td>Feb 2025</td>
                      <td>
                        <div class="action-item">
                          <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>14 Feb 2025</td>
                      <td>$4800</td>
                      <td>Jan 2025</td>
                      <td>
                        <div class="action-item">
                          <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>12 Jan 2025</td>
                      <td>$4800</td>
                      <td>Dec 2024</td>
                      <td>
                        <div class="action-item">
                          <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /Table List -->
            </div>
          </div>
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
import { onMounted, computed } from 'vue'
import { message } from 'ant-design-vue'
import FilterIndex from '@/components/common/filter-index.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import ActionIcons from '@/components/common/ActionIcons.vue'

export default {
  components: { FilterIndex, DeleteModal, ActionIcons },
  name: 'DoctorsTable',

  setup() {
    const DoctorsTable = useTableStore('doctorsManagement', 'staff')
    const detailedItem = computed(() => DoctorsTable.detailedItem.value || {})

    const paginationConfig = computed(() => ({
      current: DoctorsTable.currentPage.value,
      pageSize: DoctorsTable.perPage.value,
      total: DoctorsTable.totalCount.value,
      showSizeChanger: false,
      showQuickJumper: false,
    }))

    const openModal = async (record) => {
      try {
        DoctorsTable.selectItem(record)
        await DoctorsTable.fetchItemDetails(record.id)
      } catch (error) {
        message.error(error)
      }
    }

    // Custom image formatter

    // Table columns
    const columns = [
      {
        title: 'Doctor Name',
        dataIndex: 'full_name',
        key: 'full_name',
        sorter: {
          compare: (a, b) => {
            const nameA = a.full_name?.toLowerCase() || ''
            const nameB = b.full_name?.toLowerCase() || ''
            return nameA.localeCompare(nameB)
          },
        },
      },
      {
        title: 'STAFF ID',
        dataIndex: 'staff_id',
        key: 'staff_id',
        className: 'staff_id',
        sorter: {
          compare: (a, b) => {
            const idA = a.staff_id?.toLowerCase() || ''
            const idB = b.staff_id?.toLowerCase() || ''
            return idA.localeCompare(idB)
          },
        },
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        className: 'email',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        className: 'phone',
      },
      // {
      //   title: 'Department',
      //   dataIndex: 'department',
      //   key: 'department',
      //   // width: 150,

      // },
      {
        title: 'Specialization',
        // dataIndex: 'specialization',
        key: 'specialization',
        sorter: {
          compare: (a, b) => {
            const nameA = a.specialization?.name || ''
            const nameB = b.specialization?.name || ''
            return nameA.localeCompare(nameB)
          },
        },
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        sorter: {
          compare: (a, b) => {
            const statusA = (a.status !== false ? 'Active' : 'Inactive').toLowerCase()
            const statusB = (b.status !== false ? 'Active' : 'Inactive').toLowerCase()
            return statusA.localeCompare(statusB)
          },
        },
      },
      {
        title: 'Actions',
        key: 'actions',
        width: 30,
        className: 'actions',
      },
    ]

    onMounted(() => {
      // Fetch staff data when the component is mounted
      DoctorsTable.fetchData().catch(() => {
        message.error('Failed to load staff data')
      })
    })

    return {
      DoctorsTable,
      detailedItem,
      paginationConfig,
      columns,
      openModal,
    }
  },
}
</script>

<style>
/* Center alignment fixes */
/* td.actions,
td.staff_id,
th {
  text-align: center !important;
} */

th {
  /* font-size: 1.1em; */
  font-weight: 200;
}

/* td.email,
td.phone {
  text-align: center !important;
} */
</style>
