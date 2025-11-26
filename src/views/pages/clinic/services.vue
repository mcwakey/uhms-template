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
            Services<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total Services : 565</span
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
          <a
            href="javascript:void(0);"
            class="btn btn-primary ms-2 fs-13 btn-md"
            data-bs-toggle="modal"
            data-bs-target="#add_service"
            ><i class="ti ti-plus me-1"></i>New Services</a
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
                <h5 class="mb-0 fw-bold">Filter</h5>
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
                      <label class="form-label">Service Name</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selected"
                      :options="Service"
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
                      :options="Designation"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Amount</label>
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle form-control"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select
                      </a>
                      <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                        <div class="filter-range">
                          <input type="text" id="range_03" />
                          <p>Range : <span class="text-gray-9">$200 - $5695</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Status</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selectedOne"
                      :options="DesginSat"
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

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Status'">
              <span
                class="fw-medium px-2 py-1 fs-13"
                :class="[
                  'badge',
                  {
                    'badge-soft-success rounded text-success border border-success':
                      record.Status === 'Active',
                    'badge-soft-danger rounded text-danger border border-danger':
                      record.Status === 'Inactive',
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
                      data-bs-toggle="modal"
                      data-bs-target="#edit_service"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_service"
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

  <!-- Start Add Modal -->
  <div id="add_service" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">New Service</h4>
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
            <div class="mb-3">
              <label class="form-label"
                >Service Name<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Department<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedThree"
                :options="DepartSele"
                placeholder="Select"
              />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Price<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Add New Service
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Add Modal -->
  <div id="edit_service" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Edit Service</h4>
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
            <div class="mb-3">
              <label class="form-label"
                >Service Name<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" value="General Consultation" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Department<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedOne"
                :options="DepartSeleEdit"
                placeholder="Select"
              />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Price<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" value="$200" />
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
  <!-- End Add Modal -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_service">
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
              data-bs-dismiss="modal"
              class="btn btn-danger position-relative z-1"
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
    title: "Service Name",
    dataIndex: "ServiceName",
    key: "ServiceName",
    sorter: {
      compare: (a, b) =>
        a.ServiceName.toLowerCase() > b.ServiceName.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Department",
    dataIndex: "Department",
    key: "Department",
    sorter: {
      compare: (a, b) =>
        a.Department.toLowerCase() > b.Department.toLowerCase() ? -1 : 1,
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
    ServiceName: "General Consultation",
    Department: "General Medicine",
    Price: "$200",
    Status: "Active",
  },
  {
    ServiceName: "Dental Cleaning",
    Department: "Dentistry",
    Price: "$180",
    Status: "Inactive",
  },
  {
    ServiceName: "Eye Checkup",
    Department: "Ophthalmology",
    Price: "$150",
    Status: "Active",
  },
  {
    ServiceName: "X-Ray",
    Department: "Radiology",
    Price: "$80",
    Status: "Active",
  },
  {
    ServiceName: "Physiotherapy Session",
    Department: "Physiotherapy",
    Price: "$130",
    Status: "Active",
  },
  {
    ServiceName: "Cardiac Screening",
    Department: "Cardiology",
    Price: "$300",
    Status: "Active",
  },
  {
    ServiceName: "Skin Allergy Test",
    Department: "Dermatology",
    Price: "$220",
    Status: "Inactive",
  },
  {
    ServiceName: "Blood Test",
    Department: "Pathology",
    Price: "$150",
    Status: "Active",
  },
  {
    ServiceName: "ENT Consultation",
    Department: "ENT",
    Price: "$230",
    Status: "Active",
  },
  {
    ServiceName: "Nutrition Counseling",
    Department: "Nutrition",
    Price: "$250",
    Status: "Active",
  },
];
import { ref } from "vue";
const valueOne = ref();
export default {
  data() {
    return {
      searchQuery: "",
      data,
      columns,
      valueOne,
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selected: [],
      selectedOne: [],
      DepartSele: [
        { label: "Select", value: "Select" },
        { label: "General Medicine", value: "General Medicine" },
        { label: "Dentisty", value: "Dentisty" },
        { label: "Ophthalmolgy", value: "Ophthalmolgy" },
        { label: "Radiology", value: "Radiology" },
      ],
      DepartSeleEdit: [
        { label: "Select", value: "Select" },
        { label: "General Medicine", value: "General Medicine" },
        { label: "Dentisty", value: "Dentisty" },
        { label: "Ophthalmolgy", value: "Ophthalmolgy" },
        { label: "Radiology", value: "Radiology" },
      ],
      Service: [
        { id: 1, name: "General Consultation" },
        { id: 2, name: "Dental Cleaning" },
        { id: 3, name: "Eye Checkup" },
        { id: 4, name: "X-Ray" },
        { id: 5, name: "Physiotherapy Session" },
        { id: 6, name: "Cardiac Screening" },
        { id: 7, name: "Skin Allergy Test" },
        { id: 8, name: "Blood Test" },
        { id: 9, name: "ENT Consultation" },
        { id: 10, name: "Nutrition Counseling" },
      ],
      Designation: [
        { id: 1, name: "General Medicine" },
        { id: 2, name: "Dentistry" },
        { id: 3, name: "Ophthalmology" },
        { id: 4, name: "Radiology" },
        { id: 5, name: "Physiotherapy" },
        { id: 6, name: "Cardiology" },
        { id: 7, name: "Dermatology" },
        { id: 8, name: "Pathology" },
        { id: 9, name: "ENT" },
        { id: 10, name: "Nutrition" },
      ],
      DesginSat: [
        { id: 1, name: "Active" },
        { id: 2, name: "Inactive" },
      ],
    };
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.ServiceName.toLowerCase().includes(query) ||
          record.Department.toLowerCase().includes(query) ||
          record.Price.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
