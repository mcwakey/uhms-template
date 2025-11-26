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
          <h4 class="fw-bold mb-0">
            Specializations<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total Specializations : 33</span
            >
          </h4>
        </div>
        <div class="text-end d-flex">
          <a
            href="javascript:void(0);"
            class="btn btn-primary text-white ms-2 fs-13 btn-md"
            data-bs-toggle="modal"
            data-bs-target="#add_specialization"
            ><i class="ti ti-plus me-1"></i>Add New Specialization</a
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
              class="btn btn-white fs-14 py-1 bg-white border d-inline-flex text-dark align-items-center"
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
                      <label class="form-label">Specialization</label>
                    </div>
                    <vue-multiselect
                      v-model="selected"
                      :options="Designation"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label mb-1 text-dark fs-14 fw-medium">Date</label>
                    <div class="input-icon-end position-relative">
                      <a-date-picker
                        v-model="valueOne"
                        class="form-control datetimepicker"
                        placeholder="20/09/2025"
                      />
                      <span class="input-icon-addon">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Status</label>
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
            <template v-if="column.key === 'Specialization'">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="avatar me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#view_staff"
                >
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="Doctor"
                    class="rounded-circle"
                  />
                </a>
                <div>
                  <h6 class="mb-0 fs-14 fw-semibold">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#view_staff"
                      >{{ record.Specialization }}</a
                    >
                  </h6>
                </div>
              </div>
            </template>
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
                      data-bs-target="#edit_specialization"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_specialization"
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
  <!-- Start Add Modal -->
  <div id="add_specialization" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Add New Specialization</h4>
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
                >Specialization<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label">Description</label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-light border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Add Specialization
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Add Modal -->
  <div id="edit_specialization" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Edit Specialization</h4>
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
                >Specialization<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" value="Cardiologist" />
            </div>
            <div class="mb-0">
              <label class="form-label">Description</label>
              <textarea class="form-control" rows="3">
Focuses on heart conditions in children.</textarea
              >
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
  <div class="modal fade" id="delete_specialization">
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
    title: "Specialization",
    dataIndex: "Specialization",
    key: "Specialization",
    sorter: {
      compare: (a, b) =>
        a.Specialization.toLowerCase() > b.Specialization.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Created Date",
    dataIndex: "CreatedDate",
    key: "CreatedDate",
    sorter: {
      compare: (a, b) =>
        a.CreatedDate.toLowerCase() > b.CreatedDate.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "No of Doctor",
    dataIndex: "NoofDoctor",
    key: "NoofDoctor",
    sorter: {
      compare: (a, b) =>
        a.NoofDoctor.toLowerCase() > b.NoofDoctor.toLowerCase() ? -1 : 1,
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
    Specialization: "General Medicine",
    CreatedDate: "22 Apr 2025",
    NoofDoctor: "20",
    Image: "specialization-01.jpg",
    Status: "Active",
  },
  {
    Specialization: "Dentistry",
    CreatedDate: "12 Apr 2025",
    NoofDoctor: "15",
    Image: "specialization-02.jpg",
    Status: "Inactive",
  },
  {
    Specialization: "Ophthalmology",
    CreatedDate: "01 Apr 2025",
    NoofDoctor: "10",
    Image: "specialization-03.jpg",
    Status: "Active",
  },
  {
    Specialization: "Radiology",
    CreatedDate: "05 Mar 2025",
    NoofDoctor: "13",
    Image: "specialization-04.jpg",
    Status: "Active",
  },
  {
    Specialization: "Physiotherapy",
    CreatedDate: "20 Mar 2025",
    NoofDoctor: "17",
    Image: "specialization-05.jpg",
    Status: "Active",
  },
  {
    Specialization: "Cardiology",
    CreatedDate: "01 Mar 2025",
    NoofDoctor: "20",
    Image: "specialization-06.jpg",
    Status: "Active",
  },
  {
    Specialization: "Dermatology",
    CreatedDate: "15 Feb 2025",
    NoofDoctor: "25",
    Image: "specialization-07.jpg",
    Status: "Inactive",
  },
  {
    Specialization: "Pathology",
    CreatedDate: "09 Feb 2025",
    NoofDoctor: "15",
    Image: "specialization-08.jpg",
    Status: "Active",
  },
  {
    Specialization: "ENT",
    CreatedDate: "01 Feb 2025",
    NoofDoctor: "19",
    Image: "specialization-09.jpg",
    Status: "Active",
  },
  {
    Specialization: "Nutrition",
    CreatedDate: "12 Jan 2025",
    NoofDoctor: "24",
    Image: "specialization-10.jpg",
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
      selected: [],
      selectedOne: [],
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
          record.Specialization.toLowerCase().includes(query) ||
          record.CreatedDate.toLowerCase().includes(query) ||
          record.NoofDoctor.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
