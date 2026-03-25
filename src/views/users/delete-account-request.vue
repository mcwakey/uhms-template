<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">Delete Account Request</h4>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set mb-3">
          <div class="d-flex align-items-center flex-wrap gap-2">
            <div class="table-search d-flex align-items-center mb-0">
              <div class="search-input">
                <a href="javascript:void(0);" class="btn-searchset"></a>
                <div id="DataTables_Table_0_filter" class="dataTables_filter">
                  <label>
                    <input
                      type="search"
                      class="form-control form-control-sm"
                      placeholder="Search"
                      v-model="searchQuery"
                      aria-controls="DataTables_Table_0"
                  /></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3"
        >
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
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'User'">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="avatar me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#view_staff"
                >
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="Doctor"
                    class="rounded-circle"
                  />
                </a>
                <div>
                  <h6 class="mb-0 fs-14 fw-semibold">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#view_staff"
                      >{{ record.User }}</a
                    >
                  </h6>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class="fw-medium fs-13 py-1 px-2"
                :class="[
                  'badge',
                  {
                    'badge-soft-danger rounded text-danger border border-danger':
                      record.Status === 'Unavailable',
                    'badge-soft-success rounded text-success border border-success':
                      record.Status === 'Available',
                  },
                ]"
                >{{ record.Status }}
              </span>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item p-2">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#cancel_request"
                      >Cancel</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_request"
                      >Delete</a
                    >
                  </li>
                </ul>
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
        2025 &copy; <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All
        Rights Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- ========================
			End Page Content
		========================= -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="cancel_request">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative z-1">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0 z-n1"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0 z-n1"
          />
          <div class="mb-3">
            <span class="avatar avatar-lg bg-danger text-white"
              ><i class="ti ti-x fs-24"></i
            ></span>
          </div>
          <h5 class="fw-bold mb-1">Cancel Confirmation</h5>
          <p class="mb-3">Are you sure want to cancel?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-danger position-relative z-1"
              data-bs-dismiss="modal"
              >Yes, Cancel</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Delete Modal  -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_request">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative z-1">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0 z-n1"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0 z-n1"
          />
          <div class="mb-3">
            <span class="avatar avatar-lg bg-danger text-white"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="fw-bold mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure want to delete?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-danger position-relative z-1"
              data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Delete Modal  -->
</template>
<script>
const columns = [
  {
    title: "User",
    dataIndex: "User",
    key: "User",
    sorter: {
      compare: (a, b) => (a.User.toLowerCase() > b.User.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Requisition Date",
    dataIndex: "RequisitionDate",
    key: "RequisitionDate",
    sorter: {
      compare: (a, b) =>
        a.RequisitionDate.toLowerCase() > b.RequisitionDate.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Delete Request Date",
    dataIndex: "DeleteRequestDate",
    key: "DeleteRequestDate",
    sorter: {
      compare: (a, b) =>
        a.DeleteRequestDate.toLowerCase() > b.DeleteRequestDate.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => (a.Status.toLowerCase() > b.Status.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "",
    dataIndex: "Permissions",
    key: "Permissions",
    sorter: false,
  },
  {
    title: "",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    User: "James Adair",
    Image: "user-08.jpg",
    RequisitionDate: "22 Apr 2025",
    DeleteRequestDate: "30 Apr 2025",
    Status: "Available",
  },
  {
    User: "Adam Milne",
    Image: "user-03.jpg",
    RequisitionDate: "12 Apr 2025",
    DeleteRequestDate: "15 Apr 2025",
    Status: "Available",
  },
  {
    User: "Richard Clark",
    Image: "user-04.jpg",
    RequisitionDate: "01 Apr 2025",
    DeleteRequestDate: "02 Apr 2025",
    Status: "Unavailable",
  },
  {
    User: "Robert Reid",
    Image: "user-05.jpg",
    RequisitionDate: "05 Mar 2025",
    DeleteRequestDate: "12 Mar 2025",
    Status: "Available",
  },
  {
    User: "Dottie Jeny",
    Image: "user-06.jpg",
    RequisitionDate: "20 Mar 2025",
    DeleteRequestDate: "27 Mar 2025",
    Status: "Available",
  },
  {
    User: "Cheryl Bilodeau",
    Image: "user-07.jpg",
    RequisitionDate: "01 Mar 2025",
    DeleteRequestDate: "05 Mar 2025",
    Status: "Available",
  },
  {
    User: "Valerie Padgett",
    Image: "user-02.jpg",
    RequisitionDate: "15 Feb 2025",
    DeleteRequestDate: "24 Feb 2025",
    Status: "Available",
  },
  {
    User: "Diane Nash",
    Image: "user-25.jpg",
    RequisitionDate: "09 Feb 2025",
    DeleteRequestDate: "16 Feb 2025",
    Status: "Available",
  },
  {
    User: "Sally Cavazos",
    Image: "user-29.jpg",
    RequisitionDate: "01 Feb 2025",
    DeleteRequestDate: "01 Feb 2025",
    Status: "Available",
  },
  {
    User: "Forest Heath",
    Image: "user-12.jpg",
    RequisitionDate: "12 Jan 2025",
    DeleteRequestDate: "25 Jan 2025",
    Status: "Available",
  },
];
export default {
  data() {
    return {
      searchQuery: "",
      data,
      columns,
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.User.toLowerCase().includes(query) ||
          record.RequisitionDate.toLowerCase().includes(query) ||
          record.DeleteRequestDate.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
