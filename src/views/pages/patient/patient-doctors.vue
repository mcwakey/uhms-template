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
          <h4 class="fw-bold mb-0">Doctors</h4>
        </div>
        <div class="text-end">
          <!-- dropdown-->
          <div class="dropdown me-1">
            <a
              href="javascript:void(0);"
              class="btn btn-md fw-normal border fs-14 bg-white rounded text-dark d-inline-flex align-items-center"
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
                <a href="" class="avatar avatar-md me-2">
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="product"
                    class="rounded-circle"
                  />
                </a>
                <a href="" class="text-dark fw-semibold"
                  >{{ record.DoctorName }}
                  <span class="text-body fs-13 fw-normal d-block">
                    {{ record.Position }}
                  </span>
                </a>
              </div>
            </template>
            <template v-if="column.key === 'action'">
              <div class="">
                <router-link
                  to="/patient/patient-appointment-details"
                  class="border p-1 rounded-3 fs-13 text-body d-inline-flex align-items-center justify-content-center me-1"
                >
                  <i class="ti ti-calendar-cog"></i>
                </router-link>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="border p-1 rounded-3 fs-13 text-body d-inline-flex align-items-center justify-content-center"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_doctors"
                      >Edit</a
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
    <!-- Start Edit Modal -->
    <div id="edit_doctors" class="modal fade">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="text-dark modal-title">Edit Date</h5>
            <button
              type="button"
              class="btn-close btn-close-modal custom-btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i class="ti ti-x"></i>
            </button>
          </div>
          <form>
            <div class="modal-body">
              <div class="mb-2">
                <label class="form-label"
                  >Date<span class="text-danger ms-1">*</span></label
                >
                <div class="input-group position-relative">
                  <input
                    type="text"
                    class="form-control datetimepicker rounded-end h-auto py-2 bg-white"
                  />
                  <span class="input-icon-addon fs-16 text-dark">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
              <div class="mb-0">
                <label class="form-label"
                  >Status<span class="text-danger ms-1">*</span></label
                >
                <vue3-select v-model="selected" :options="ActsSat" placeholder="Active" />
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
    <!-- End Edit Modal -->

    <!-- Start Delete Modal  -->
    <div class="modal fade" id="delete_modal">
      <div class="modal-dialog modal-dialog-centered modal-sm">
        <div class="modal-content">
          <div class="modal-body text-center position-relative">
            <img
              src="@/assets/img/bg/delete-modal-bg-01.png"
              alt=""
              class="img-fluid position-absolute top-0 start-0 z-0"
            />
            <img
              src="@/assets/img/bg/delete-modal-bg-02.png"
              alt=""
              class="img-fluid position-absolute bottom-0 end-0 z-0"
            />
            <div class="mb-3 position-relative z-1">
              <span class="avatar avatar-lg bg-danger text-white"
                ><i class="ti ti-trash fs-24"></i
              ></span>
            </div>
            <h5 class="fw-bold mb-1 position-relative z-1">Delete Confirmation</h5>
            <p class="mb-3 position-relative z-1">Are you sure want to delete?</p>
            <div class="d-flex justify-content-center">
              <a
                href="javascript:void(0);"
                class="btn btn-light position-relative z-1 me-3"
                data-bs-dismiss="modal"
                >Cancel</a
              >
              <a
                href=""
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
  </div>
</template>
<script>
const columns = [
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
    title: "Phone",
    dataIndex: "Phone",
    key: "Phone",
    sorter: {
      compare: (a, b) => (a.Phone.toLowerCase() > b.Phone.toLowerCase() ? -1 : 1),
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
    title: "",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    DoctorName: "Dr. Mick Thompson",
    Position: "Cardiologist",
    Image: "doctor-02.jpg",
    Phone: "+1 41245 54132",
    LastVisit: "30 Apr 2025",
  },
  {
    DoctorName: "Dr. Sarah Johnson",
    Position: "Orthopedic Surgeon",
    Image: "doctor-03.jpg",
    Phone: "+1 54554 54789",
    LastVisit: "15 Apr 2025",
  },
  {
    DoctorName: "Dr. Emily Carter",
    Position: "Pediatrician",
    Image: "doctor-04.jpg",
    Phone: "+1 43554 54985",
    LastVisit: "02 Apr 2025",
  },
  {
    DoctorName: "Dr. David Lee",
    Position: "Gynecologist",
    Image: "doctor-05.jpg",
    Phone: "+1 41245 54124",
    LastVisit: "27 Mar 2025",
  },
  {
    DoctorName: "Dr. Anna Kim",
    Position: "Psychiatrist",
    Image: "doctor-06.jpg",
    Phone: "+1 41245 23143",
    LastVisit: "12 Mar 2025",
  },
  {
    DoctorName: "Dr. John Smith",
    Position: "Neurosurgeon",
    Image: "doctor-07.jpg",
    Phone: "+1 51247 56574",
    LastVisit: "05 Mar 2025",
  },
  {
    DoctorName: "Dr. Lisa White",
    Position: "Oncologist",
    Image: "doctor-09.jpg",
    Phone: "+1 23423 54132",
    LastVisit: "30 Apr 2025",
  },
  {
    DoctorName: "Dr. Patricia Brown",
    Position: "Pulmonologist",
    Image: "doctor-12.jpg",
    Phone: "+1 51425 21498",
    LastVisit: "16 Feb 2025",
  },
  {
    DoctorName: "Dr. Rachel Green",
    Position: "Urologist",
    Image: "doctor-15.jpg",
    Phone: "+1 45214 98741",
    LastVisit: "01 Feb 2025",
  },
  {
    DoctorName: "Dr. Michael Smith",
    Position: "Cardiologist",
    Image: "doctor-14.jpg",
    Phone: "+1 41245 32540",
    LastVisit: "25 Jan 2025",
  },
];
import { ref } from "vue";
const valueOne = ref();
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
          record.DoctorName.toLowerCase().includes(query) ||
          record.Position.toLowerCase().includes(query) ||
          record.Phone.toLowerCase().includes(query) ||
          record.LastVisit.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
