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
          <h4 class="fw-bold mb-0">
            Doctor Schedule<span class="badge badge-soft-primary fs-13 fw-medium ms-2"
              >Total Doctors : 565</span
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
                  <a
                    href="javascript:void(0);"
                    class="link-danger text-decoration-underline"
                    >Clear All</a
                  >
                </div>
              </div>
              <filter-index></filter-index>
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
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Doctor'">
              <div class="d-flex align-items-center">
                <router-link to="/doctors/doctor-details" class="avatar me-2">
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="Doctor"
                    class="rounded-circle"
                  />
                </router-link>
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <router-link to="/doctors/doctor-details">{{
                      record.Doctor
                    }}</router-link>
                  </h6>
                  <span class="fs-13 d-block"> {{ record.Role }} </span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'Availability'">
              <div
                class="availabity-check d-flex align-items-center gap-2"
                role="group"
                aria-label="Basic radio toggle button group"
              >
                <div>
                  <input
                    type="checkbox"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    checked=""
                  />
                  <label
                    class="btn btn-icon btn-sm rounded-circle btn-light"
                    for="btnradio1"
                    >M</label
                  >
                </div>
                <div>
                  <input
                    type="checkbox"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    checked
                  />
                  <label
                    class="btn btn-icon btn-sm rounded-circle btn-light"
                    for="btnradio2"
                    >T</label
                  >
                </div>
                <div>
                  <input
                    type="checkbox"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio3"
                  />
                  <label
                    class="btn btn-icon btn-sm rounded-circle btn-light"
                    for="btnradio3"
                    >W</label
                  >
                </div>
                <div>
                  <input
                    type="checkbox"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio4"
                    checked
                  />
                  <label
                    class="btn btn-icon btn-sm rounded-circle btn-light"
                    for="btnradio4"
                    >T</label
                  >
                </div>
                <div>
                  <input
                    type="checkbox"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio5"
                    checked
                  />
                  <label
                    class="btn btn-icon btn-sm rounded-circle btn-light"
                    for="btnradio5"
                    >F</label
                  >
                </div>
                <div>
                  <input
                    type="checkbox"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio6"
                  />
                  <label
                    class="btn btn-icon btn-sm rounded-circle btn-light"
                    for="btnradio6"
                    >S</label
                  >
                </div>
                <div>
                  <input
                    type="checkbox"
                    class="btn-check"
                    name="btnradio"
                    id="btnradio7"
                  />
                  <label
                    class="btn btn-icon btn-sm rounded-circle btn-light"
                    for="btnradio7"
                    >S</label
                  >
                </div>
              </div>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item d-flex align-items-center gap-2">
                <router-link to="/appointments/appointment-calendar">
                  <i class="ti ti-calendar-cog"></i>
                </router-link>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#doctor_detil"
                >
                  <i class="ti ti-eye"></i>
                </a>
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
</template>

<script>
const columns = [
  {
    title: "Doctor",
    dataIndex: "Doctor",
    key: "Doctor",
    sorter: {
      compare: (a, b) => (a.Doctor.toLowerCase() > b.Doctor.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Department",
    dataIndex: "Department",
    sorter: {
      compare: (a, b) =>
        a.Department.toLowerCase() > b.Department.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: {
      compare: (a, b) => (a.Phone.toLowerCase() > b.Phone.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Availability",
    dataIndex: "Availability",
    key: "Availability",
    sorter: {
      compare: (a, b) =>
        a.Availability.toLowerCase() > b.Availability.toLowerCase() ? -1 : 1,
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
    Doctor: "Dr. Mick Thompson",
    Image: "doctor-01.jpg",
    Role: "Cardiologist",
    Department: "Cardiology",
    Phone: "+1 54554 54584",
    Availability: "",
  },
  {
    Doctor: "Dr. Sarah Johnson",
    Image: "doctor-02.jpg",
    Role: "Orthopedic Surgeon",
    Department: "Orthopedics",
    Phone: "+1 43554 54584",
    Availability: "",
  },
  {
    Doctor: "Dr. Emily Carter",
    Image: "doctor-03.jpg",
    Role: "Pediatrician",
    Department: "Pediatrics",
    Phone: "+1 471254 54585",
    Availability: "",
  },
  {
    Doctor: "Dr. David Lee",
    Image: "doctor-04.jpg",
    Role: "Gynecologist",
    Department: "Gynecology",
    Phone: "+1 54114 54586",
    Availability: "",
  },
  {
    Doctor: "Dr. Anna Kim",
    Image: "doctor-05.jpg",
    Role: "Psychiatrist",
    Department: "Psychiatry",
    Phone: "+1 51247 54587",
    Availability: "",
  },
  {
    Doctor: "Dr. John Smith",
    Image: "doctor-06.jpg",
    Role: "Neurosurgeon",
    Department: "Neurology",
    Phone: "+1 41452 54588",
    Availability: "",
  },
  {
    Doctor: "Dr. Lisa White",
    Image: "doctor-07.jpg",
    Role: "Oncologist",
    Department: "Oncologist",
    Phone: "+1 51425 54589",
    Availability: "",
  },
  {
    Doctor: "Dr. Patricia Brown",
    Image: "doctor-08.jpg",
    Role: "Pulmonologist",
    Department: "Pulmonologist",
    Phone: "+1 42565 54590",
    Availability: "",
  },
  {
    Doctor: "Dr. Rachel Green",
    Image: "doctor-09.jpg",
    Role: "Urologist",
    Department: "Urologist",
    Phone: "+1 45214 54591",
    Availability: "",
  },
  {
    Doctor: "Dr. Michael Smith",
    Image: "doctor-09.jpg",
    Role: "Cardiologist",
    Department: "Cardiologist",
    Phone: "+1 41245 54592",
    Availability: "",
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
      return new URL(`/src/assets/img/doctors/${imageName}`, import.meta.url).href;
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Doctor.toLowerCase().includes(query) ||
          record.Department.toLowerCase().includes(query) ||
          record.Phone.toLowerCase().includes(query) ||
          record.Availability.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
