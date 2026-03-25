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
            Staff<span class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ StaffTable.totalCount }}</span
            >
          </h4>
        </div>
        <div class="text-end d-flex">
          <!-- dropdown-->
          <div class="dropdown me-1">
            <router-link
              to="javascript:void(0);"
              class="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Export<i class="ti ti-chevron-down ms-2"></i>
            </router-link>
            <ul class="dropdown-menu p-2">
              <li>
                <router-link class="dropdown-item" to="#">Download as PDF</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="#">Download as Excel</router-link>
              </li>
            </ul>
          </div>
          <RouterLink :to="{ name: 'CreateStaff' }" class="btn btn-primary ms-2 fs-13 btn-md">
            <i class="ti ti-plus me-1"></i>New Staff
          </RouterLink>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set mb-3">
          <div class="d-flex align-items-center flex-wrap gap-2">
            <div class="table-search d-flex align-items-center mb-0">
              <div class="search-input">
                <router-link to="javascript:void(0);" class="btn-searchset"></router-link>
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
            <router-link
              to="javascript:void(0);"
              class="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <i class="ti ti-filter text-gray-5 me-1"></i>Filters
            </router-link>
            <div
              class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
              id="filter-dropdown"
            >
              <div
                class="d-flex align-items-center justify-content-between border-bottom filter-header"
              >
                <h4 class="mb-0">Filter</h4>
                <div class="d-flex align-items-center">
                  <router-link
                    to="javascript:void(0);"
                    class="link-danger text-decoration-underline"
                    >Clear All</router-link
                  >
                </div>
              </div>
              <FilterIndex></FilterIndex>
            </div>
          </div>
          <div class="dropdown">
            <router-link
              to="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
            >
              <span class="me-1"> Sort By : </span> Recent
            </router-link>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <router-link to="javascript:void(0);" class="dropdown-item rounded-1"
                  >Recent</router-link
                >
              </li>
              <li>
                <router-link to="javascript:void(0);" class="dropdown-item rounded-1"
                  >Oldest</router-link
                >
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
          :data-source="StaffTable.data.value"
          :pagination="paginationConfig"
          @change="StaffTable.handleTableChange"
          row-key="id"
          :pagination-class="pagination - rounded"
        >
          <template #bodyCell="{ column, record }">
            <!-- <template v-if="column.key === 'full_name'">
                <div class="d-flex align-items-center">
                    <router-link to="/staff/staff-details" class="avatar me-2">
                        <img :src="getImageUrl(record.Image)" alt="Staff" class="rounded-circle">
                    </router-link>
                    <div>
                        <h6 class="mb-1 fs-14 fw-semibold"><router-link to="/staff/staff-details">{{record.Name}}</router-link></h6>
                        <span class="fs-13 d-block"> {{record.Role}} </span>
                    </div>
                </div>
            </template> -->

            <template v-if="column.key === 'full_name'">
              <div class="d-flex align-items-center ms-2">
                <!-- <router-link class="dropdown-item"
                  :to="{ name: 'ViewStaff', params: { id: record.uuid } }"
                  title="View Staff">
                  {{$t('view')}}
                </router-link> -->

                <router-link
                  :to="{ name: 'ViewStaff', params: { id: record.uuid } }"
                  title="View Staff"
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
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <!-- <router-link
                      to="javascript:void(0);"
                      @click="openModal(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#view_staff"
                      > -->
                    <router-link
                      :to="{ name: 'ViewStaff', params: { id: record.uuid } }"
                      title="View Staff"
                    >
                      {{ record.full_name }}</router-link
                    >
                  </h6>
                  <span class="fs-13 d-block"> {{ record.designation }} </span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'specialization'">
              <span class="fs-15 d-block">{{ record.specialization.name }}</span>
              <span class="text-muted fs-12 d-block">{{ record.specialization.name }}</span>
            </template>
            <template v-if="column.key === 'status'">
              <span
                :class="[
                  'badge border',
                  {
                    'badge-soft-success border-success': record.status,
                    'badge-soft-danger border-danger': !record.status,
                  },
                ]"
                >{{ record.status ? 'Active' : 'Inactive' }}</span
              >
            </template>
            <template v-else-if="column.key === 'actions'">
              <div class="d-flex align-items-center justify-content-end gap-2">
                <router-link
                  class="action-icon text-primary"
                  :to="{ name: 'StaffAppointments', params: { id: record.uuid } }"
                  title="Appointments"
                >
                  <i class="ti ti-calendar-cog"></i>
                </router-link>
                <ActionIcons
                  viewTitle="View Staff"
                  editTitle="Edit Staff"
                  deleteTitle="Delete Staff"
                  @view="$router.push({ name: 'ViewStaff', params: { id: record.uuid } })"
                  @edit="$router.push({ name: 'EditStaff', params: { id: record.uuid } })"
                  @delete="handleDelete(record)"
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
import { showModalById } from '@/utils/bootstrap'

export default {
  components: { FilterIndex, DeleteModal, ActionIcons },
  name: 'StaffTable',

  setup() {
    const StaffTable = useTableStore('staff')
    const detailedItem = computed(() => StaffTable.detailedItem.value || {})

    const paginationConfig = computed(() => ({
      current: StaffTable.currentPage.value,
      pageSize: StaffTable.perPage.value,
      total: StaffTable.totalCount.value,
      // showSizeChanger: false,
      // showQuickJumper: false,
    }))

    // Custom image formatter

    // Table columns
    const columns = [
      {
        title: 'Staff Name',
        // dataIndex: 'full_name',
        key: 'full_name',
        sorter: {
          compare: (a, b) => (a.full_name.toLowerCase() > b.full_name.toLowerCase() ? -1 : 1),
        },
      },
      {
        title: 'STAFF ID',
        dataIndex: 'staff_id',
        key: 'staff_id',
        className: 'staff_id',
        sorter: {
          compare: (a, b) => (a.staff_id.toLowerCase() > b.staff_id.toLowerCase() ? -1 : 1),
        },
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        // className: "phone",
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        // className: 'email'
      },
      // {
      //   title: 'Department',
      //   dataIndex: 'department',
      //   key: 'department',
      //   // width: 150,

      // },
      {
        title: 'Specialization',
        // dataIndex: 'specialization.name',
        key: 'specialization',
        sorter: {
          compare: (a, b) =>
            a.specialization.toLowerCase() > b.specialization.toLowerCase() ? -1 : 1,
        },
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        sorter: {
          compare: (a, b) => (a.status.toLowerCase() > b.status.toLowerCase() ? -1 : 1),
        },
      },
      {
        // title: 'Actions',
        key: 'actions',
        width: 30,
        className: 'actions',
      },
    ]

    onMounted(() => {
      // Fetch staff data when the component is mounted
      StaffTable.fetchData().catch(() => {
        message.error('Failed to load staff data')
      })
    })

    const openModal = async (record) => {
      try {
        StaffTable.selectItem(record)
        await StaffTable.fetchItemDetails(record.uuid)
      } catch (error) {
        message.error(error)
      }
    }

    const handleDelete = async (record) => {
      await openModal(record)
      showModalById('delete_staff')
    }

    return {
      StaffTable,
      detailedItem,
      paginationConfig,
      columns,
      openModal,
      handleDelete,
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
