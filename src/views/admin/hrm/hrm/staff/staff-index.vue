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
              >Total: {{ totalCount }}</span
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
                <a class="dropdown-item" href="javascript:void(0);">Download as PDF</a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:void(0);">Download as Excel</a>
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
          table-layout="fixed"
          :data-source="tableData"
          :pagination="paginationConfig"
          :loading="loading"
          @change="handleTableChange"
          row-key="id"
          pagination-class="pagination-rounded"
        >
          <template #bodyCell="{ column, record, text }">
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
                  :to="{ name: 'ViewStaff', params: { id: record.id } }"
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
                      :to="{ name: 'ViewStaff', params: { id: record.id } }"
                      title="View Staff"
                    >
                      {{ record.full_name }}</router-link
                    >
                  </h6>
                  <span class="fs-13 d-block"> {{ record.specialization?.department }} </span>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'specialization'">
              <span class="fs-15 d-block">{{ record.specialization?.name || '—' }}</span>
              <span class="text-muted fs-12 d-block">{{
                record.specialization?.department || '—'
              }}</span>
            </template>
            <template v-else-if="column.key === 'status'">
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
              <ActionIcons
                :show-appointment="true"
                appointmentTitle="Appointments"
                appointmentClass="text-primary"
                viewTitle="View Staff"
                editTitle="Edit Staff"
                deleteTitle="Delete Staff"
                :show-delete="false"
                @appointment="goToAppointments(record)"
                @view="$router.push({ name: 'ViewStaff', params: { id: record.id } })"
                @edit="$router.push({ name: 'EditStaff', params: { id: record.id } })"
                @delete="handleDelete(record)"
              />
            </template>
            <template v-else>
              {{ text ?? '—' }}
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

  <!-- <div class="modal fade" id="delete_staff">
    <DeleteModal></DeleteModal>
  </div> -->
</template>
<script>
import { useTableStore } from '@/stores/dataTable'
import { onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import FilterIndex from '@/components/common/filter-index.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import ActionIcons from '@/components/common/ActionIcons.vue'
import { showModalById } from '@/utils/bootstrap'
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'

export default {
  components: {
    LayoutsHeader,
    LayoutsSidebar,
    LayoutsFooter,
    FilterIndex,
    DeleteModal,
    ActionIcons,
  },
  name: 'StaffTable',

  setup() {
    const router = useRouter()
    const staffTable = useTableStore('staffManagement', 'staff')
    const { data, totalCount, currentPage, perPage, searchQuery, loading } = storeToRefs(staffTable)
    const { fetchData, selectItem, fetchItemDetails, handleTableChange } = staffTable
    const tableData = computed(() => data.value ?? [])

    const paginationConfig = computed(() => ({
      current: currentPage.value,
      pageSize: perPage.value,
      total: totalCount.value,
      // showSizeChanger: false,
      // showQuickJumper: false,
    }))

    // Custom image formatter

    // Table columns
    const columns = [
      {
        title: 'Staff Name',
        dataIndex: 'full_name',
        key: 'full_name',
        sorter: {
          compare: (a, b) => {
            const nameA = (a?.full_name ?? '').toLowerCase()
            const nameB = (b?.full_name ?? '').toLowerCase()
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
            const idA = (a?.staff_id ?? '').toLowerCase()
            const idB = (b?.staff_id ?? '').toLowerCase()
            return idA.localeCompare(idB)
          },
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
        dataIndex: ['specialization', 'name'],
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
        // title: 'Actions',
        key: 'actions',
        width: 30,
        className: 'actions',
      },
    ]

    onMounted(() => {
      // Fetch staff data when the component is mounted
      fetchData().catch(() => {
        message.error('Failed to load staff data')
      })
    })

    const openModal = async (record) => {
      try {
        selectItem(record)
        await fetchItemDetails(record.id)
      } catch (error) {
        message.error(error)
      }
    }

    const handleDelete = async (record) => {
      await openModal(record)
      showModalById('delete_staff')
    }

    const goToAppointments = async (record) => {
      await router.push({
        name: 'AppointmentCalendar',
        query: { staff_id: record?.id },
      })
    }

    return {
      data,
      tableData,
      totalCount,
      searchQuery,
      loading,
      paginationConfig,
      columns,
      openModal,
      handleDelete,
      goToAppointments,
      handleTableChange,
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
