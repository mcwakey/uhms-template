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
      <div
        class="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom"
      >
        <div class="d-flex align-items-center">
          <h4 class="fw-bold mb-0 me-2">Announcements</h4>
          <span class="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium"
            >Total City : 365</span
          >
        </div>
        <div class="text-end">
          <a
            href="javascript:void(0);"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add_announcement"
            ><i class="ti ti-plus me-1"></i>Add New Announcement</a
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
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <i class="ti ti-filter me-2 fs-14"></i>Filter
            </a>
            <div
              class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown"
              id="filter-dropdown"
            >
              <div
                class="d-flex align-items-center justify-content-between border-bottom filter-header"
              >
                <h4 class="fs-18 fw-bold">Filter</h4>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="link-danger text-decoration-underline me-3"
                    >Clear All</a
                  >
                </div>
              </div>
              <form action="#">
                <div class="filter-body pb-1">
                  <div class="mb-3">
                    <label class="form-label">Received From</label>
                    <vue3-select
                      v-model="selected"
                      :options="AnnRed"
                      placeholder="Select"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Category</label>
                    <vue3-select
                      v-model="selectedOne"
                      :options="AnnRedOne"
                      placeholder="Select"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Payment Method</label>
                    <vue3-select
                      v-model="selectedTwo"
                      :options="AnnRedTwo"
                      placeholder="Select"
                    />
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Date</label>
                    </div>
                    <div class="input-group position-relative">
                      <input
                        type="text"
                        class="form-control date-range bookingrange rounded-end h-auto py-2 bg-white"
                        ref="dateRangeInput"
                      />
                      <span class="input-icon-addon fs-16 text-gray-9">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Status</label>
                    <vue3-select
                      v-model="selectedThree"
                      :options="AnnRedThree"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div
                  class="filter-footer d-flex align-items-center justify-content-end border-top"
                >
                  <a
                    href="javascript:void(0);"
                    class="btn btn-light btn-md me-2"
                    id="close-filter"
                    >Close</a
                  >
                  <button type="submit" class="btn btn-primary btn-md">Filter</button>
                </div>
              </form>
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

      <!-- Table List -->
      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Announcement'">
              <h6 class="fs-14 fw-semibold">{{ record.Announcement }}</h6>
              <p>{{ record.Content }}</p>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class="fw-medium fs-13 py-1 px-2"
                :class="[
                  'badge',
                  {
                    'badge-soft-danger rounded text-danger border border-danger':
                      record.Status === 'Inactive',
                    'badge-soft-success rounded text-success border border-success':
                      record.Status === 'Active',
                  },
                ]"
                >{{ record.Status }}
              </span>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="btn p-1 btn-white border"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_announcement"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_announcement"
                      >Delete</a
                    >
                  </li>
                </ul>
              </div>
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

  <!-- Start Add Categories -->
  <div id="add_announcement" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Add New Category</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-2">
              <label class="form-label"
                >Announcement Title<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-2">
              <label class="form-label"
                >Announcement Type<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label">Content</label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Add Announcement
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Categories -->

  <!-- Start Edit Categories -->
  <div id="edit_announcement" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Edit Announcement</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-2">
              <label class="form-label"
                >Announcement Title<span class="text-danger ms-1">*</span></label
              >
              <input
                type="text"
                class="form-control"
                value="System Maintenance Scheduled"
              />
            </div>
            <div class="mb-2">
              <label class="form-label"
                >Announcement Type<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" value="System Update" />
            </div>
            <div class="mb-2">
              <label class="form-label">Content</label>
              <textarea class="form-control" rows="3">
Platform will be under maintenance on 07 Apr from 1 AM to 3 AM.</textarea
              >
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Status<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedFour"
                :options="AnnRedFour"
                placeholder="Active"
              />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Edit Categories -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_announcement">
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
    title: "Created On",
    dataIndex: "CreatedOn",
    key: "CreatedOn",
    sorter: {
      compare: (a, b) => (a.CreatedOn.toLowerCase() > b.CreatedOn.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Announcement",
    dataIndex: "Announcement",
    key: "Announcement",
    sorter: {
      compare: (a, b) =>
        a.Announcement.toLowerCase() > b.Announcement.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Type",
    dataIndex: "Type",
    key: "Type",
    sorter: {
      compare: (a, b) => (a.Type.toLowerCase() > b.Type.toLowerCase() ? -1 : 1),
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
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    CreatedOn: "30 Apr 2025",
    Announcement: "System Maintenance Scheduled",
    Content: "Platform will be under maintenance on 07 Apr from 1 AM to 3 AM.",
    Type: "System Update",
    Status: "Active",
  },
  {
    CreatedOn: "15 Apr 2025",
    Announcement: "New Lab Test Packages Added",
    Content: "New health checkup and diagnostic packages now available for booking.",
    Type: "Service Update",
    Status: "Active",
  },
  {
    CreatedOn: "02 Apr 2025",
    Announcement: "Staff Training Program",
    Content: "Mandatory EMR training for all staff on 02 Apr at 10 AM in Meeting Room 1.",
    Type: "Service Update",
    Status: "Active",
  },
  {
    CreatedOn: "27 Mar 2025",
    Announcement: "Patient Feedback System Launched",
    Content: "Mandatory EMR training for all staff on 02 Apr at 10 AM in Meeting Room 1.",
    Type: "Internal Notice",
    Status: "Inactive",
  },
  {
    CreatedOn: "12 Mar 2025",
    Announcement: "Pharmacy Stock Audit Notice",
    Content: "A new digital form is now available for feedback after appointments.",
    Type: "Staff Update",
    Status: "Active",
  },
  {
    CreatedOn: "05 Mar 2025",
    Announcement: "Lab Closed for Renovation",
    Content: "A new digital form is now available for feedback after appointments.",
    Type: "Service Update",
    Status: "Active",
  },
  {
    CreatedOn: "24 Feb 2025",
    Announcement: "Referral Program Live",
    Content: "Lab services will pause 20–22 Mar for upgrades. Alternate slots available.",
    Type: "Pharmacy Notice",
    Status: "Inactive",
  },
  {
    CreatedOn: "16 Feb 2025",
    Announcement: "Lab Closed for Renovation",
    Content: "Refer friends and earn discounts on health checkups.",
    Type: "Service Alert",
    Status: "Active",
  },
  {
    CreatedOn: "01 Feb 2025",
    Announcement: "Referral Program Live",
    Content: "Lab services will pause 20-22 Mar for upgrades. Alternate slots available.",
    Type: "Promotion",
    Status: "Inactive",
  },
  {
    CreatedOn: "25 Jan 2025",
    Announcement: "Monthly Review Meeting",
    Content: "Refer friends and earn discounts on health checkups.",
    Type: "Admin Meeting",
    Status: "Inactive",
  },
];
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      AnnRed: [{ label: "Select", value: "Select" }],
      AnnRedOne: [{ label: "Select", value: "Select" }],
      AnnRedTwo: [{ label: "Select", value: "Select" }],
      AnnRedThree: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      AnnRedFour: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
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
          record.Announcement.toLowerCase().includes(query) ||
          record.Type.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
    };
  },
};
</script>
