<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">Appointment Report</h4>
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
        </div>
      </div>
      <!-- End Page Header -->

      <!-- row start -->
      <div class="row">
        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100 z-0">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span
                  class="avatar avatar-sm bg-soft-primary border border-primary text-primary rounded-2 flex-shrink-0"
                  ><i class="ti ti-calendar-time fs-14"></i
                ></span>
                <span
                  class="badge fw-medium bg-soft-success text-success flex-shrink-0 ms-2"
                  >+10%<i class="ti ti-arrow-up-right ms-1"></i
                ></span>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <p class="mb-1 text-truncate">Total Appointments</p>
                  <h6 class="mb-0 fw-bold">850</h6>
                </div>
                <div id="s-col-11" class="chart-set"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100 z-0">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span
                  class="avatar avatar-sm bg-soft-success border border-success text-success rounded-2 flex-shrink-0"
                  ><i class="ti ti-calendar-up fs-14"></i
                ></span>
                <span
                  class="badge fw-medium bg-soft-success text-success flex-shrink-0 ms-2"
                  >+11.5%<i class="ti ti-arrow-up-right ms-1"></i
                ></span>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <p class="mb-1 text-truncate">Completed</p>
                  <h6 class="mb-0 fw-bold">720</h6>
                </div>
                <div id="s-col-12" class="chart-set"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100 z-0">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span
                  class="avatar avatar-sm bg-soft-warning border border-warning text-warning rounded-2 flex-shrink-0"
                  ><i class="ti ti-calendar-down fs-14"></i
                ></span>
                <span
                  class="badge fw-medium bg-soft-success text-success flex-shrink-0 ms-2"
                  >+8.43%<i class="ti ti-arrow-up-right ms-1"></i
                ></span>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <p class="mb-1 text-truncate">Cancelled</p>
                  <h6 class="mb-0 fw-bold">65</h6>
                </div>
                <div id="s-col-13" class="chart-set"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100 z-0">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span
                  class="avatar avatar-sm bg-soft-danger border border-danger text-danger rounded-2 flex-shrink-0"
                  ><i class="ti ti-calendar-repeat fs-14"></i
                ></span>
                <span
                  class="badge fw-medium bg-soft-success text-success flex-shrink-0 ms-2"
                  >+6.58%<i class="ti ti-arrow-up-right ms-1"></i
                ></span>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <p class="mb-1 text-truncate">Rescheduled</p>
                  <h6 class="mb-0 fw-bold">40</h6>
                </div>
                <div id="s-col-14" class="chart-set"></div>
              </div>
            </div>
          </div>
        </div>
        <!-- col end -->
      </div>
      <!-- row end -->

      <div class="card">
        <div class="card-body">
          <!-- start row -->
          <div class="row row-gap-2">
            <div class="col-lg-4">
              <div class="mb-0">
                <label class="form-label">Date</label>
                <div class="input-group position-relative">
                  <input
                    type="text"
                    class="form-control date-range bookingrange rounded-end bg-white"
                    ref="dateRangeInput"
                  />
                  <span class="input-icon-addon fs-14 text-dark">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
            <!-- end col -->
            <div class="col-lg-4">
              <div class="mb-0">
                <label class="form-label">Patient</label>
                <vue3-select v-model="selected" :options="PatiApp" placeholder="Select" />
              </div>
            </div>
            <!-- end col -->
            <div class="col-lg-4">
              <div class="mb-0">
                <label class="form-label">Location</label>
                <vue3-select
                  v-model="selectedOne"
                  :options="LocaApp"
                  placeholder="Select"
                />
              </div>
            </div>
            <!-- end col -->
            <div class="col-lg-4">
              <div class="mb-0">
                <label class="form-label">Practioner</label>
                <vue3-select
                  v-model="selectedTwo"
                  :options="PracApp"
                  placeholder="Select"
                />
              </div>
            </div>
            <!-- end col -->
            <div class="col-lg-4">
              <div class="mb-0">
                <label class="form-label">Designation</label>
                <vue3-select
                  v-model="selectedThree"
                  :options="DesiApp"
                  placeholder="Select"
                />
              </div>
            </div>
            <!-- end col -->
            <div class="col-lg-4">
              <div class="mb-0">
                <label class="form-label">Status</label>
                <vue3-tags-input
                  class="input-tags form-control"
                  type="text"
                  data-role="tagsinput"
                  name="specialist"
                  value="Tag1"
                  :tags="tagsOne"
                />
              </div>
            </div>
            <!-- end col -->
            <div class="col-md-12">
              <div class="d-flex align-items-center justify-content-end">
                <a href="javascript:void(0);" class="btn btn-dark"
                  ><i class="ti ti-player-play me-1"></i>Run Report</a
                >
              </div>
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Practioner'">
              <div>
                <p class="text-dark fw-medium">{{ record.Practioner }}</p>
              </div>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class="fw-medium fs-13"
                :class="[
                  'badge',
                  {
                    'badge-soft-success rounded text-success border border-success':
                      record.Status === 'Confirmed',
                    'badge-soft-primary rounded text-primary border border-primary':
                      record.Status === 'Checked Out',
                    'badge-soft-warning rounded text-warning border border-warning':
                      record.Status === 'Checked in',
                    'badge-soft-danger rounded text-danger border border-danger':
                      record.Status === 'Cancelled',
                    'badge-soft-info rounded text-info border border-info':
                      record.Status === 'Schedule',
                  },
                ]"
                >{{ record.Status }}
              </span>
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
</template>
<script>
const columns = [
  {
    title: "Patient",
    dataIndex: "Patient",
    key: "Patient",
    sorter: {
      compare: (a, b) => (a.Patient.toLowerCase() > b.Patient.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Date & Time",
    dataIndex: "DateTime",
    key: "DateTime",
    sorter: {
      compare: (a, b) => (a.DateTime.toLowerCase() > b.DateTime.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Invoice ID",
    dataIndex: "InvoiceID",
    key: "InvoiceID",
    sorter: {
      compare: (a, b) => (a.InvoiceID.toLowerCase() > b.InvoiceID.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Practioner",
    dataIndex: "Practioner",
    key: "Practioner",
    sorter: {
      compare: (a, b) =>
        a.Practioner.toLowerCase() > b.Practioner.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Location",
    dataIndex: "Location",
    key: "Location",
    sorter: {
      compare: (a, b) => (a.Location.toLowerCase() > b.Location.toLowerCase() ? -1 : 1),
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
];
const data = [
  {
    Patient: "Alberto Ripley",
    DateTime: "May 27 2025 - 09:30 AM",
    InvoiceID: "#INV0020",
    Practioner: "Dr. Mick Thompson",
    Location: "California",
    Status: "Checked Out",
  },
  {
    Patient: "Susan Babin",
    DateTime: "May 27 2025 - 10:00 AM",
    InvoiceID: "#INV0019",
    Practioner: "Dr. Sarah Johnson",
    Location: "Texas",
    Status: "Checked in",
  },
  {
    Patient: "Carol Lam",
    DateTime: "May 28 2025 - 10:00 AM",
    InvoiceID: "#INV0018",
    Practioner: "Dr. Emily Carter",
    Location: "New York",
    Status: "Cancelled",
  },
  {
    Patient: "Marsha Noland",
    DateTime: "May 28 2025 - 10:30 AM",
    InvoiceID: "#INV0017",
    Practioner: "Dr. David Lee",
    Location: "Florida",
    Status: "Schedule",
  },
  {
    Patient: "Irma Armstrong",
    DateTime: "May 28 2025 - 11: 15 AM",
    InvoiceID: "#INV0016",
    Practioner: "Dr. Anna Kim",
    Location: "Illinois",
    Status: "Confirmed",
  },
  {
    Patient: "Jesus Adams",
    DateTime: "May 29 2025 - 11:30 AM",
    InvoiceID: "#INV0015",
    Practioner: "Dr. John Smith",
    Location: "Pennsylvania",
    Status: "Confirmed",
  },
  {
    Patient: "Ezra Belcher",
    DateTime: "May 30 2025 - 09:30 AM",
    InvoiceID: "#INV0014",
    Practioner: "Dr. Lisa White",
    Location: "Ohio",
    Status: "Cancelled",
  },
  {
    Patient: "Glen Lentz",
    DateTime: "May 30 2025 - 10:00 AM",
    InvoiceID: "#INV0013",
    Practioner: "Dr. Patricia Brown",
    Location: "Georgia",
    Status: "Confirmed",
  },
  {
    Patient: "Bernard Griffith",
    DateTime: "May 30 2025 - 11:00 AM",
    InvoiceID: "#INV0012",
    Practioner: "Dr. Rachel Green",
    Location: "North Carolina",
    Status: "Checked Out",
  },
  {
    Patient: "John Elsass",
    DateTime: "May 30 2025 - 11:00 AM",
    InvoiceID: "#INV0011",
    Practioner: "Dr. Michael Smith",
    Location: "Michigan",
    Status: "Schedule",
  },
];
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      PatiApp: [
        { label: "Select", value: "Select" },
        { label: "Alberto Ripley", value: "Alberto Ripley" },
        { label: "Susan Babin", value: "Susan Babin" },
        { label: "Martin Lisa", value: "Martin Lisa" },
        { label: "Stella Mary", value: "Stella Mary" },
        { label: "Carol Lam", value: "Carol Lam" },
        { label: "Jesus Adams", value: "Jesus Adams" },
        { label: "Ezra Belcher", value: "Ezra Belcher" },
      ],
      LocaApp: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "Options Enhanced", value: "Options Enhanced" },
        { label: "New York", value: "New York" },
        { label: "Florida", value: "Florida" },
        { label: "Illinois", value: "Illinois" },
        { label: "Georgia", value: "Georgia" },
        { label: "Washington", value: "Washington" },
        { label: "Arizona", value: "Arizona" },
      ],
      PracApp: [
        { label: "Select", value: "Select" },
        { label: "Dr. Mick Thompson", value: "Dr. Mick Thompson" },
        { label: "Dr. Sarah Johnson", value: "Dr. Sarah Johnson" },
        { label: "Dr. Emily Carter", value: "Dr. Emily Carter" },
        { label: "Dr. David Lee", value: "Dr. David Lee" },
        { label: "Dr. Anna Kim", value: "Dr. Anna Kim" },
        { label: "Dr. John Smith", value: "Dr. John Smith" },
        { label: "Dr. Lisa White", value: "Dr. Lisa White" },
        { label: "Dr. Patrica Brown", value: "Dr. Patrica Brown" },
      ],
      DesiApp: [
        { label: "Select", value: "Select" },
        { label: "Cardiologist", value: "Cardiologist" },
        { label: "Orthopedic Surgeon", value: "Orthopedic Surgeon" },
        { label: "Pediatrician", value: "Pediatrician" },
        { label: "Gynecologist", value: "Gynecologist" },
        { label: "Psychiatrist", value: "Psychiatrist" },
        { label: "Neurosurgeon", value: "Neurosurgeon" },
        { label: "Oncologist", value: "Oncologist" },
        { label: "Dr. Patrica Brown", value: "Dr. Patrica Brown" },
      ],
      tagsOne: ["Pending"],
      searchQuery: "",
      data,
      columns,
    };
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Patient.toLowerCase().includes(query) ||
          record.DateTime.toLowerCase().includes(query) ||
          record.InvoiceID.toLowerCase().includes(query) ||
          record.Practioner.toLowerCase().includes(query) ||
          record.Location.toLowerCase().includes(query) ||
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
