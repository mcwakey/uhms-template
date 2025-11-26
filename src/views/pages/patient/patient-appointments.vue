<template>
  <patients-header></patients-header>
  <patients-sidebar></patients-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">Appointment</h4>
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
          <div
            class="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center"
          >
            <router-link
              to="/patient/patient-appointments"
              class="bg-light rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-list fs-14 text-body"></i
            ></router-link>
            <router-link
              to="/patient/patient-appointment-details"
              class="bg-white rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-calendar-event fs-14 text-body"></i>
            </router-link>
          </div>

          <a
            href="javascript:void(0);"
            class="btn btn-primary ms-2 fs-13 btn-md"
            data-bs-toggle="offcanvas"
            data-bs-target="#new_appointment"
            ><i class="ti ti-plus me-1"></i> New Appointment
          </a>
        </div>
      </div>
      <!-- End Page Header -->

      <!--  Start Filter -->
      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="d-flex align-items-center gap-2">
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

          <div class="d-flex right-content align-items-center flex-wrap mb-3">
            <div class="input-icon-start position-relative">
              <span class="input-icon-addon text-dark">
                <i class="ti ti-calendar-event"></i>
              </span>
              <input
                type="text"
                class="form-control form-control-sm bookingrange"
                ref="dateRangeInput"
              />
            </div>
          </div>
        </div>

        <div
          class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3"
        >
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
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
                <h4 class="mb-0 fw-bold">Filter</h4>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="link-danger text-decoration-underline"
                    >Clear All</a
                  >
                </div>
              </div>
              <form action="#">
                <div class="filter-body pb-0">
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label mb-1">Doctor</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selected"
                      :options="Doctor"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Designation</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selectedOne"
                      :options="Designation"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Department</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selectedTwo"
                      :options="Department"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label mb-1 text-dark fs-14 fw-medium"
                      >Date<span class="text-danger">*</span></label
                    >
                    <div class="input-icon-end position-relative">
                      <a-date-picker
                        v-model:value="valueOne"
                        class="form-control datetimepicker"
                        placeholder="dd/mm/yyyy"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Amount</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selectedThree"
                      :options="Amount"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Status</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selectedFour"
                      :options="Status"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                </div>
                <div
                  class="filter-footer d-flex align-items-center justify-content-end border-top"
                >
                  <a
                    href="javascript:void(0);"
                    class="btn btn-light btn-md me-2 fw-medium"
                    id="close-filter"
                    >Close</a
                  >
                  <button type="submit" class="btn btn-primary btn-md fw-medium">
                    Filter
                  </button>
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
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Recently Added</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Ascending</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Desending</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Last Month</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Last 7 Days</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--  End Filter -->

      <!--  Start Table -->
      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable thead-light"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'DoctorName'">
              <div class="d-flex align-items-center">
                <router-link
                  to="/patient/patient-doctor-details"
                  class="avatar avatar-md me-2"
                >
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="product"
                    class="rounded-circle"
                  />
                </router-link>
                <router-link
                  to="/patient/patient-doctor-details"
                  class="text-dark fw-semibold"
                  >{{ record.DoctorName }}
                  <span class="text-body fs-13 fw-normal d-block">{{
                    record.Email
                  }}</span>
                </router-link>
              </div>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class="fw-medium fs-13"
                :class="[
                  'badge',
                  {
                    'badge-soft-primary rounded text-primary':
                      record.Status === 'Checked Out',
                    'badge-soft-warning rounded text-warning':
                      record.Status === 'Checked In',
                    'badge-soft-danger rounded text-danger':
                      record.Status === 'Cancelled',
                    'badge-soft-info rounded text-info': record.Status === 'Schedule',
                    'badge-soft-success rounded text-success':
                      record.Status === 'Confirmed',
                  },
                ]"
                >{{ record.Status }}
              </span>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#edit_appointment"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#view_details"
                      >View</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      >Delete</a
                    >
                  </li>
                </ul>
              </div>
            </template>
          </template>
        </a-table>
      </div>
      <div class="dataTables_length" id="DataTables_Table_0_length">
        <label
          >Row Per Page
          <select
            name="DataTables_Table_0_length"
            aria-controls="DataTables_Table_0"
            class="form-select form-select-sm"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          Entries</label
        >
      </div>
      <div
        class="dataTables_paginate paging_simple_numbers"
        id="DataTables_Table_0_paginate"
      >
        <ul class="pagination">
          <li
            class="paginate_button page-item previous disabled"
            id="DataTables_Table_0_previous"
          >
            <a
              aria-controls="DataTables_Table_0"
              aria-disabled="true"
              role="link"
              data-dt-idx="previous"
              tabindex="-1"
              class="page-link"
              ><i class="ti ti-arrow-left"></i>
            </a>
          </li>
          <li class="paginate_button page-item active">
            <a
              href="#"
              aria-controls="DataTables_Table_0"
              role="link"
              aria-current="page"
              data-dt-idx="0"
              tabindex="0"
              class="page-link"
              >1</a
            >
          </li>
          <li
            class="paginate_button page-item next disabled"
            id="DataTables_Table_0_next"
          >
            <a
              aria-controls="DataTables_Table_0"
              aria-disabled="true"
              role="link"
              data-dt-idx="next"
              tabindex="-1"
              class="page-link"
              ><i class="ti ti-arrow-right"></i
            ></a>
          </li>
        </ul>
      </div>
      <!--  End Table -->
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
    <appointments-modal></appointments-modal>
  </div>
</template>
<script>
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
const valueOne = ref();
const columns = [
  {
    title: "Date & Time",
    dataIndex: "DateTime",
    key: "DateTime",
    sorter: {
      compare: (a, b) => (a.DateTime.toLowerCase() > b.DateTime.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Doctor Name",
    dataIndex: "DoctorName",
    key: "DoctorName",
    sorter: {
      compare: (a, b) =>
        a.DoctorName.toLowerCase() > b.DoctorName.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Mode",
    dataIndex: "Mode",
    key: "Mode",
    sorter: {
      compare: (a, b) => (a.Mode.toLowerCase() > b.Mode.toLowerCase() ? -1 : 1),
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
    DateTime: "30 Apr 2025 - 09:30 AM",
    DoctorName: "Dr.Alberto Ripley Cardiologist",
    Image: "doctor-01.jpg",
    Mode: "In-person",
    Status: "Checked Out",
  },
  {
    DateTime: "15 Apr 2025 - 11:20 AM",
    DoctorName: "Dr.Susan Babin Orthopedic Surgeon",
    Image: "doctor-02.jpg",
    Mode: "Online",
    Status: "Checked In",
  },
  {
    DateTime: "02 Apr 2025 - 08:15 AM",
    DoctorName: "Dr.Carol Lam  Pediatrician",
    Image: "doctor-03.jpg",
    Mode: "In-Person",
    Status: "Cancelled",
  },
  {
    DateTime: "27 Mar 2025 - 02:00 PM",
    DoctorName: "Dr.Marsha Noland  Gynecologist",
    Image: "doctor-04.jpg",
    Mode: "30 Apr 2025",
    Status: "Schedule",
  },
  {
    DateTime: "12 Mar 2025 - 05:40 PM",
    DoctorName: "Dr.Irma Armstrong  Psychiatrist",
    Image: "doctor-05.jpg",
    Mode: "Online",
    Status: "Confirmed",
  },
  {
    DateTime: "24 Feb 2025 - 09:20 AM",
    DoctorName: "Dr.Ezra Belcher  Neurosurgeon",
    Image: "doctor-06.jpg",
    Mode: "In-Person",
    Status: "Cancelled",
  },
  {
    DateTime: "16 Feb 2025 - 11:40 AM",
    DoctorName: "Dr.Glen Lentz Oncologist",
    Image: "doctor-07.jpg",
    Mode: "Online",
    Status: "Confirmed",
  },
  {
    DateTime: "01 Feb 2025 - 04:00 PM",
    DoctorName: "Dr.Bernard Griffith  Pulmonologist",
    Image: "doctor-08.jpg",
    Mode: "Online",
    Status: "Checked Out",
  },
  {
    DateTime: "25 Jan 2025 - 03:10 PM",
    DoctorName: "Dr.John Elsass Urologist",
    Image: "doctor-09.jpg",
    Mode: "Online",
    Status: "Schedule",
  },
  {
    DateTime: "12 Jan 2025 - 03:10 PM",
    DoctorName: "Dr.John Albert Cardiologist",
    Image: "doctor-10.jpg",
    Mode: "In-Person",
    Status: "cancelled",
  },
];
export default {
  data() {
    return {
      title: "Home",
      text: "Contact Messages",
      searchQuery: "",
      data,
      columns,
      valueOne,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      Doctor: [
        { id: 1, name: "Dr. Mick Thompson" },
        { id: 2, name: "Dr. Sarah Johnson" },
        { id: 3, name: "Dr. Emily Carter" },
        { id: 4, name: "Dr. David Lee" },
        { id: 5, name: "Dr. Anna Kim" },
      ],
      Designation: [
        { id: 1, name: "Cardiologist" },
        { id: 2, name: "Orthopedic Surgeon" },
        { id: 3, name: "Pediatrician" },
        { id: 4, name: "Gynecologist" },
      ],
      Department: [
        { id: 1, name: "Cardiology" },
        { id: 2, name: "Orthopedics" },
        { id: 3, name: "Pediatrics" },
      ],
      Amount: [
        { id: 1, name: "$501 - $1000" },
        { id: 2, name: "$501 - $1100" },
        { id: 3, name: "$701 - $1200" },
      ],
      Status: [
        { id: 1, name: "Available" },
        { id: 2, name: "Unavailable" },
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/doctors/${imageName}`, import.meta.url).href;
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.options.push(tag);
      this.value.push(tag);
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.DateTime.toLowerCase().includes(query) ||
          record.DoctorName.toLowerCase().includes(query) ||
          record.Mode.toLowerCase().includes(query) ||
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
