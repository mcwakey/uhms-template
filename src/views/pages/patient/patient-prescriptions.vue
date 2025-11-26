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
          <h4 class="fw-bold mb-0">Prescription</h4>
        </div>
        <div class="text-end">
          <!-- dropdown-->
          <div class="dropdown me-1">
            <a
              href="javascript:void(0);"
              class="btn btn-md border fs-14 fw-normal bg-white rounded text-dark d-inline-flex align-items-center"
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

      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set mb-3">
          <div class="d-flex align-items-center flex-wrap gap-2">
            <div class="table-search d-flex align-items-center mb-0">
              <div class="search-input">
                <a href="javascript:void(0);" class="btn-searchset"></a>
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
                  to="/patient/patient-prescription-details"
                  class="avatar avatar-md me-2"
                >
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="product"
                    class="rounded-circle"
                  />
                </router-link>
                <router-link
                  to="/patient/patient-prescription-details"
                  class="text-dark fw-semibold"
                  >{{ record.DoctorName }}
                  <span class="text-body fs-13 fw-normal d-block">
                    {{ record.Position }}
                  </span>
                </router-link>
              </div>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <router-link
                      to="/patient/patient-prescription-details"
                      class="dropdown-item d-flex align-items-center"
                      >View</router-link
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
import { ref } from "vue";
const valueOne = ref();
const columns = [
  {
    title: "Prescription ID",
    dataIndex: "PrescriptionID",
    key: "PrescriptionID",
    sorter: {
      compare: (a, b) =>
        a.PrescriptionID.toLowerCase() > b.PrescriptionID.toLowerCase() ? -1 : 1,
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
    title: "Prescribed On",
    dataIndex: "PrescribedOn",
    key: "PrescribedOn",
    sorter: {
      compare: (a, b) =>
        a.PrescribedOn.toLowerCase() > b.PrescribedOn.toLowerCase() ? -1 : 1,
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
    PrescriptionID: "#PRE0025",
    DoctorName: "Dr. Mick Thompson",
    Image: "doctor-02.jpg",
    Position: "Cardiologist",
    PrescribedOn: "30 Apr 2025",
  },
  {
    PrescriptionID: "#PRE0024",
    DoctorName: "Dr. Sarah Johnson",
    Image: "doctor-03.jpg",
    Position: "Orthopedic Surgeon",
    PrescribedOn: "15 Apr 2025",
  },
  {
    PrescriptionID: "#PRE0023",
    DoctorName: "Dr. Emily Carter",
    Image: "doctor-04.jpg",
    Position: "Pediatrician",
    PrescribedOn: "02 Apr 2025",
  },
  {
    PrescriptionID: "#PRE0022",
    DoctorName: "Dr. David Lee",
    Image: "doctor-05.jpg",
    Position: "Gynecologist",
    PrescribedOn: "27 Mar 2025",
  },
  {
    PrescriptionID: "#PRE0021",
    DoctorName: "Dr. Anna Kim",
    Image: "doctor-06.jpg",
    Position: "Psychiatrist",
    PrescribedOn: "12 Mar 2025",
  },
  {
    PrescriptionID: "#PRE0020",
    DoctorName: "Dr. John Smith",
    Image: "doctor-07.jpg",
    Position: "Neurosurgeon",
    PrescribedOn: "05 Mar 2025",
  },
  {
    PrescriptionID: "#PRE0019",
    DoctorName: "Dr. Lisa White",
    Image: "doctor-09.jpg",
    Position: "Oncologist",
    PrescribedOn: "24 Feb 2025",
  },
  {
    PrescriptionID: "#PRE0018",
    DoctorName: "Dr. Patricia Brown",
    Image: "doctor-12.jpg",
    Position: "Pulmonologist",
    PrescribedOn: "16 Feb 2025",
  },
  {
    PrescriptionID: "#PRE0017",
    DoctorName: "Dr. Rachel Green",
    Image: "doctor-15.jpg",
    Position: "Urologist",
    PrescribedOn: "01 Feb 2025",
  },
  {
    PrescriptionID: "#PRE0016",
    DoctorName: "Dr. Michael Smith",
    Image: "doctor-14.jpg",
    Position: "Cardiologist",
    PrescribedOn: "25 Jan 2025",
  },
];

export default {
  data() {
    return {
      selected: null,
      ActsSat: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
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
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.PrescriptionID.toLowerCase().includes(query) ||
          record.DoctorName.toLowerCase().includes(query) ||
          record.PrescribedOn.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
