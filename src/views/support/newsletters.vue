<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="mb-3 pb-3 border-bottom">
        <div class="d-flex align-items-center">
          <h4 class="fw-bold mb-0 me-2">Newsletter</h4>
          <span class="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium"
            >Total Newsletter : 565</span
          >
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

      <!-- Table List -->
      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Email'">
              <div>{{ record.Email }}</div>
            </template>
          </template>
        </a-table>
      </div>
      <!-- /Table List -->
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
  <div class="modal fade" id="delete_categories">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0"
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
    title: "Email",
    dataIndex: "Email",
    key: "Email",
    sorter: {
      compare: (a, b) => (a.Email.toLowerCase() > b.Email.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Created On",
    dataIndex: "CreatedOn",
    key: "CreatedOn",
    sorter: {
      compare: (a, b) => (a.CreatedOn.toLowerCase() > b.CreatedOn.toLowerCase() ? -1 : 1),
    },
  },
];
const data = [
  {
    Email: "ruth@gmail.com",
    CreatedOn: "30 Apr 2025",
  },
  {
    Email: "john@gmail.com",
    CreatedOn: "15 Apr 2025",
  },
  {
    Email: "mary@gmail.com",
    CreatedOn: "02 Apr 2025",
  },
  {
    Email: "emma@gmail.com",
    CreatedOn: "27 Mar 2025",
  },
  {
    Email: "kelly@gmail.com",
    CreatedOn: "30 Apr 2025",
  },
  {
    Email: "oscar@gmail.com",
    CreatedOn: "12 Mar 2025",
  },
  {
    Email: "daniel@gmail.com",
    CreatedOn: "05 Mar 2025",
  },
  {
    Email: "chris@gmail.com",
    CreatedOn: "24 Feb 2025",
  },
  {
    Email: "steve@gmail.com",
    CreatedOn: "16 Feb 2025",
  },
  {
    Email: "charles@gmail.com",
    CreatedOn: "01 Feb 2025",
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
          record.CreatedOn.toLowerCase().includes(query) ||
          record.Email.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
