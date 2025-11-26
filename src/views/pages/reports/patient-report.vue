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
          <h4 class="fw-bold mb-0">Patients Report</h4>
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

      <!-- row start-->
      <div class="row">
        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100 z-0">
            <img
              src="@/assets/img/bg/widget-bg-09.svg"
              alt="img"
              class="position-absolute end-0 bottom-0 z-n1"
            />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <p class="mb-1 text-truncate">Total Patients</p>
                  <h6 class="mb-0 fw-bold">1,240</h6>
                </div>
                <span class="avatar avatar-lg bg-primary rounded-circle flex-shrink-0"
                  ><i class="ti ti-users fs-24"></i
                ></span>
              </div>
              <span class="mb-0 fs-13 d-block border-top rounded-2 pt-2"
                ><span class="text-success"
                  ><i class="ti ti-arrow-up-right me-1"></i>5.62%</span
                >
                from last month</span
              >
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100 z-0">
            <img
              src="@/assets/img/bg/widget-bg-10.svg"
              alt="img"
              class="position-absolute end-0 bottom-0 z-n1"
            />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <p class="mb-1 text-truncate">New Patients</p>
                  <h6 class="mb-0 fw-bold">210</h6>
                </div>
                <span class="avatar avatar-lg bg-success rounded-circle flex-shrink-0"
                  ><i class="ti ti-users-plus fs-24"></i
                ></span>
              </div>
              <span class="mb-0 fs-13 d-block border-top rounded-2 pt-2"
                ><span class="text-success"
                  ><i class="ti ti-arrow-up-right me-1"></i>11.4%</span
                >
                from last month</span
              >
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100 z-0">
            <img
              src="@/assets/img/bg/widget-bg-11.svg"
              alt="img"
              class="position-absolute end-0 bottom-0 z-n1"
            />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <p class="mb-1 text-truncate">Appointment Booked</p>
                  <h6 class="mb-0 fw-bold">500</h6>
                </div>
                <span class="avatar avatar-lg bg-warning rounded-circle flex-shrink-0"
                  ><i class="ti ti-bookmarks fs-24"></i
                ></span>
              </div>
              <span class="mb-0 fs-13 d-block border-top rounded-2 pt-2"
                ><span class="text-success"
                  ><i class="ti ti-arrow-up-right me-1"></i>8.52%</span
                >
                from last month</span
              >
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100 z-0">
            <img
              src="@/assets/img/bg/widget-bg-12.svg"
              alt="img"
              class="position-absolute end-0 bottom-0 z-n1"
            />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <p class="mb-1 text-truncate">Returning Patients</p>
                  <h6 class="mb-0 fw-bold">380</h6>
                </div>
                <span class="avatar avatar-lg bg-danger rounded-circle flex-shrink-0"
                  ><i class="ti ti-users-minus fs-24"></i
                ></span>
              </div>
              <span class="mb-0 fs-13 d-block border-top rounded-2 pt-2"
                ><span class="text-danger"
                  ><i class="ti ti-arrow-down-right me-1"></i>7.45%</span
                >
                from last month</span
              >
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
            <template v-if="column.key === 'ContactInfo'">
              <p class="text-dark mb-0">{{ record.ContactInfo }}</p>
              <span>{{ record.Email }}</span>
            </template>
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
                      record.Status === 'Available',
                    'badge-soft-danger rounded text-danger border border-danger':
                      record.Status === 'Unavailable',
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
    title: "Age/Gender",
    dataIndex: "AgeGender",
    key: "AgeGender",
    sorter: {
      compare: (a, b) => (a.AgeGender.toLowerCase() > b.AgeGender.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Contact Info",
    dataIndex: "ContactInfo",
    key: "ContactInfo",
    sorter: {
      compare: (a, b) =>
        a.ContactInfo.toLowerCase() > b.ContactInfo.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
    sorter: {
      compare: (a, b) => (a.Email.toLowerCase() > b.Email.toLowerCase() ? -1 : 1),
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
    title: "Last Visit",
    dataIndex: "LastVisit",
    key: "LastVisit",
    sorter: {
      compare: (a, b) => (a.LastVisit.toLowerCase() > b.LastVisit.toLowerCase() ? -1 : 1),
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
    AgeGender: "26/Male",
    ContactInfo: "+1 43554 54584",
    Email: "james@example.com",
    Practioner: "Dr. Mick Thompson",
    Location: "California",
    LastVisit: "30 Apr 2025",
    Status: "Available",
  },
  {
    Patient: "Susan Babin",
    AgeGender: "21/Female",
    ContactInfo: "+1 47554 54585",
    Email: "emily@example.com",
    Practioner: "Dr. Sarah Johnson",
    Location: "Texas",
    LastVisit: "15 Apr 2025",
    Status: "Unavailable",
  },
  {
    Patient: "Carol Lam",
    AgeGender: "28/Male",
    ContactInfo: "+1 54114 54586",
    Email: "robert@example.com",
    Practioner: "Dr. Emily Carter",
    Location: "New York",
    LastVisit: "02 Apr 2025",
    Status: "Available",
  },
  {
    Patient: "Marsha Noland",
    AgeGender: "25/Female",
    ContactInfo: "+1 51247 54587",
    Email: "sophia@example.com",
    Practioner: "Dr. David Lee",
    Location: "Florida",
    LastVisit: "27 Mar 2025",
    Status: "Unavailable",
  },
  {
    Patient: "Irma Armstrong",
    AgeGender: "32/Male",
    ContactInfo: "+1 41452 54588",
    Email: "daniel@example.com",
    Practioner: "Dr. Anna Kim",
    Location: "Illinois",
    LastVisit: "12 Mar 2025",
    Status: "Available",
  },
  {
    Patient: "Jesus Adams",
    AgeGender: "27/Female",
    ContactInfo: "+1 51425 54589",
    Email: "olivia@example.com",
    Practioner: "Dr. John Smith",
    Location: "Pennsylvania",
    LastVisit: "05 Mar 2025",
    Status: "Unavailable",
  },
  {
    Patient: "Ezra Belcher",
    AgeGender: "28/Male",
    ContactInfo: "+1 42565 54590",
    Email: "michael@example.com",
    Practioner: "Dr. Lisa White",
    Location: "Ohio",
    LastVisit: "24 Feb 2025",
    Status: "Available",
  },
  {
    Patient: "Glen Lentz",
    AgeGender: "22/Female",
    ContactInfo: "+1 51425 54589",
    Email: "isabella@example.com",
    Practioner: "Dr. Patricia Brown",
    Location: "Georgia",
    LastVisit: "16 Feb 2025",
    Status: "Unavailable",
  },
  {
    Patient: "Bernard Griffith",
    AgeGender: "34/Male",
    ContactInfo: "+1 45214 54591",
    Email: "trade@example.com",
    Practioner: "Dr. Rachel Green",
    Location: "North Carolina",
    LastVisit: "01 Feb 2025",
    Status: "Available",
  },
  {
    Patient: "John Elsass",
    AgeGender: "23/Female",
    ContactInfo: "+1 41245 54592",
    Email: "ava@example.com",
    Practioner: "Dr. Michael Smith",
    Location: "Michigan",
    LastVisit: "25 Jan 2025",
    Status: "Unavailable",
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
          record.AgeGender.toLowerCase().includes(query) ||
          record.ContactInfo.toLowerCase().includes(query) ||
          record.Email.toLowerCase().includes(query) ||
          record.Practioner.toLowerCase().includes(query) ||
          record.Location.toLowerCase().includes(query) ||
          record.LastVisit.toLowerCase().includes(query) ||
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
