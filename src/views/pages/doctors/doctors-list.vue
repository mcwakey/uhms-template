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
            Doctor List
            <span class="badge badge-soft-primary fs-13 fw-medium ms-2"
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
          <div
            class="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center"
          >
            <router-link
              to="/doctors/doctors-list"
              class="bg-white rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-list fs-14 text-body"></i
            ></router-link>
            <router-link
              to="/doctors/doctors-grid"
              class="bg-light rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-layout-grid fs-14 text-body"></i>
            </router-link>
          </div>

          <router-link to="/doctors/add-doctor" class="btn btn-primary ms-2 fs-13 btn-md"
            ><i class="ti ti-plus me-1"></i>New Doctor</router-link
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
            <template v-if="column.key === 'Name'">
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
                      record.Name
                    }}</router-link>
                  </h6>
                  <span class="fs-13 d-block"> {{ record.Role }} </span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'Fees'">
              <h6 class="fs-14 fw-semibold mb-0">{{ record.Fees }}</h6>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                :class="[
                  'badge border',
                  {
                    'badge-soft-success border-success': record.Status === 'Available',
                    'badge-soft-danger border-danger': record.Status === 'Unavailable',
                  },
                ]"
                >{{ record.Status }}</span
              >
            </template>
            <template v-if="column.key === 'action'">
              <div class="d-flex align-items-center">
                <div class="action-item me-2">
                  <router-link to="/appointments/appointment-calendar">
                    <i class="ti ti-calendar-cog"></i>
                  </router-link>
                </div>
                <div class="action-item">
                  <a href="javascript:void(0);" data-bs-toggle="dropdown">
                    <i class="ti ti-dots-vertical"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link
                        to="/doctors/edit-doctor"
                        class="dropdown-item d-flex align-items-center"
                        >Edit</router-link
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

  <doctors-list-modal></doctors-list-modal>
</template>

<script>
const columns = [
  {
    title: "Name & Designation",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1),
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
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => (a.Email.toLowerCase() > b.Email.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Fees",
    dataIndex: "Fees",
    key: "Fees",
    sorter: {
      compare: (a, b) => (a.Fees.toLowerCase() > b.Fees.toLowerCase() ? -1 : 1),
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
    Name: "Dr. Mick Thompson",
    Image: "doctor-01.jpg",
    Role: "Cardiologist",
    Department: "Cardiology",
    Phone: "+1 54554 54584",
    Email: "mick@example.com",
    Fees: "$458",
    Status: "Available",
  },
  {
    Name: "Dr. Sarah Johnson",
    Image: "doctor-02.jpg",
    Role: "Orthopedic Surgeon",
    Department: "Orthopedics",
    Phone: "+1 43554 54584",
    Email: "sarah@example.com",
    Fees: "$512",
    Status: "Available",
  },
  {
    Name: "Dr. Emily Carter",
    Image: "doctor-03.jpg",
    Role: "Pediatrician",
    Department: "Pediatrics",
    Phone: "+1 47554 54585",
    Email: "emily@example.com",
    Fees: "$635",
    Status: "Available",
  },
  {
    Name: "Dr. David Lee",
    Image: "doctor-04.jpg",
    Role: "Gynecologist",
    Department: "Gynecology",
    Phone: "+1 54114 54586",
    Email: "david@example.com",
    Fees: "$478",
    Status: "Available",
  },
  {
    Name: "Dr. Anna Kim",
    Image: "doctor-05.jpg",
    Role: "Psychiatrist",
    Department: "Psychiatry",
    Phone: "+1 51247 54587",
    Email: "anna@example.com",
    Fees: "$550",
    Status: "Available",
  },
  {
    Name: "Dr. John Smith",
    Image: "doctor-06.jpg",
    Role: "Neurosurgeon",
    Department: "Neurology",
    Phone: "+1 41452 54588",
    Email: "john@example.com",
    Fees: "$703",
    Status: "Unavailable",
  },
  {
    Name: "Dr. Lisa White",
    Image: "doctor-07.jpg",
    Role: "Oncologist",
    Department: "Oncologist",
    Phone: "+1 51425 54589",
    Email: "lisa@example.com",
    Fees: "$420",
    Status: "Available",
  },
  {
    Name: "Dr. Patricia Brown",
    Image: "doctor-08.jpg",
    Role: "Pulmonologist",
    Department: "Pulmonologist",
    Phone: "+1 42565 54590",
    Email: "patricia@example.com",
    Fees: "$590",
    Status: "Available",
  },
  {
    Name: "Dr. Rachel Green",
    Image: "doctor-09.jpg",
    Role: "Urologist",
    Department: "Urologist",
    Phone: "+1 45214 54591",
    Email: "racheal@example.com",
    Fees: "$670",
    Status: "Available",
  },
  {
    Name: "Dr. Michael Smith",
    Image: "doctor-09.jpg",
    Role: "Cardiologist",
    Department: "Cardiologist",
    Phone: "+1 41245 54592",
    Email: "micheal@example.com",
    Fees: "$530",
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
      return new URL(`/src/assets/img/doctors/${imageName}`, import.meta.url).href;
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Name.toLowerCase().includes(query) ||
          record.Department.toLowerCase().includes(query) ||
          record.Phone.toLowerCase().includes(query) ||
          record.Email.toLowerCase().includes(query) ||
          record.Fees.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
