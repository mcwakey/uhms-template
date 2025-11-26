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
      <div class="mb-3 pb-3 border-bottom">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <h4 class="fw-bold mb-0 me-2">Payroll</h4>
            <span class="badge badge-soft-primary border border-primary fw-medium"
              >Total Department : 33</span
            >
          </div>
          <a
            href="javascript:void(0);"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add_payroll"
            ><i class="ti ti-plus me-1"></i>Add Employee Salary</a
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
                      <label class="form-label">Employee</label>
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
                      <label class="form-label">Role</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selectedOne"
                      :options="Role"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label mb-1 text-dark fs-14 fw-medium">Date</label>
                    <div class="input-icon-end position-relative">
                      <a-date-picker
                        v-model:value="valueOne"
                        class="form-control datetimepicker"
                        placeholder="dd/mm/yyyy"
                      />
                      <span class="input-icon-addon">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Status</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selectedTwo"
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
            <template v-if="column.key === 'Employee'">
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
                      >{{ record.Employee }}</a
                    >
                  </h6>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'Status'">
              <router-link to="/hrm/payroll-2" class="btn btn-white border text-dark">{{
                record.Status
              }}</router-link>
            </template>
            <template v-if="column.key === 'action'">
              <td class="action-item">
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
                      data-bs-target="#edit_payroll"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_payroll"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
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
  <div id="add_payroll" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Add Employee Salary</h4>
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
            <!-- start row -->
            <div class="row row-gap-2 mb-3">
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">Select Staff</label>
                  <vue3-select
                    v-model="selected"
                    :options="StaffSel"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">Net Salary</label>
                  <input type="text" class="form-control" placeholder="0" />
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
            <!-- start row -->
            <div class="row row-gap-2">
              <div class="col-md-6">
                <h6 class="mb-3">Earnings ($)</h6>
                <div class="mb-3">
                  <label class="form-label"
                    >Basic Salary<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="0" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >DA (40%)<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="0" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >HRA (15%)<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="0" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Conveyance<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="0" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Medical Allowance<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="0" />
                </div>
                <div class="mb-0">
                  <label class="form-label"
                    >Others<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="0" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <h6 class="mb-3">Deductions ($)</h6>
                <div class="mb-3">
                  <label class="form-label"
                    >TDS<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" placeholder="0" />
                </div>
                <div class="mb-3">
                  <label class="form-label">ESI</label>
                  <input type="text" class="form-control" placeholder="0" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >PF<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" placeholder="0" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Prof Tax<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" placeholder="0" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Labour Welfare<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" placeholder="0" />
                </div>
                <div class="mb-0">
                  <label class="form-label"
                    >Others<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" placeholder="0" />
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Payslip</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Add Modal -->
  <div id="edit_payroll" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Edit Employee Salary</h4>
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
            <!-- start row -->
            <div class="row row-gap-2 mb-3">
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">Select Staff</label>
                  <vue3-select
                    v-model="selected"
                    :options="StaffSel"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">Net Salary</label>
                  <input type="text" class="form-control" value="1000" />
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
            <!-- start row -->
            <div class="row row-gap-2">
              <div class="col-md-6">
                <h6 class="mb-3">Earnings ($)</h6>
                <div class="mb-3">
                  <label class="form-label"
                    >Basic Salary<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="1000" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >DA (40%)<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="800" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >HRA (15%)<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="600" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Conveyance<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="50" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Medical Allowance<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="40" />
                </div>
                <div class="mb-0">
                  <label class="form-label"
                    >Others<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="20" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <h6 class="mb-3">Deductions ($)</h6>
                <div class="mb-3">
                  <label class="form-label"
                    >TDS<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="$600" />
                </div>
                <div class="mb-3">
                  <label class="form-label">ESI</label>
                  <input type="text" class="form-control" value="500" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >PF<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="60" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Prof Tax<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="40" />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Labour Welfare<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="30" />
                </div>
                <div class="mb-0">
                  <label class="form-label"
                    >Others<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="10" />
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_payroll">
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
    title: "Employee",
    dataIndex: "Employee",
    key: "Employee",
    sorter: {
      compare: (a, b) => (a.Employee.toLowerCase() > b.Employee.toLowerCase() ? -1 : 1),
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
    title: "Joining Date",
    dataIndex: "JoiningDate",
    key: "JoiningDate",
    sorter: {
      compare: (a, b) =>
        a.JoiningDate.toLowerCase() > b.JoiningDate.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Role",
    dataIndex: "Role",
    key: "Role",
    sorter: {
      compare: (a, b) => (a.Role.toLowerCase() > b.Role.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Salary",
    dataIndex: "Salary",
    key: "Salary",
    sorter: {
      compare: (a, b) => (a.Salary.toLowerCase() > b.Salary.toLowerCase() ? -1 : 1),
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
    Employee: "James Adair",
    Image: "user-08.jpg",
    Email: "james@gmail.com",
    JoiningDate: "01 Jan 2024",
    Role: "Admin",
    Salary: "$1200",
    Status: "Generate Slip",
  },
  {
    Employee: "Adam Milne",
    Image: "user-03.jpg",
    Email: "esther@gmail.com",
    JoiningDate: "04 Jan 2023",
    Role: "Reception",
    Salary: "$2000",
    Status: "Generate Slip",
  },
  {
    Employee: "Richard Clark",
    Image: "user-04.jpg",
    Email: "judi@gmail.com",
    JoiningDate: "26 Jan 2022",
    Role: "Admin",
    Salary: "$1500",
    Status: "Generate Slip",
  },
  {
    Employee: "Robert Reid",
    Image: "user-05.jpg",
    Email: "robert@gmail.com",
    JoiningDate: "04 Feb 2022",
    Role: "Admin",
    Salary: "$1200",
    Status: "Generate Slip",
  },
  {
    Employee: "Dottie Jeny",
    Image: "user-06.jpg",
    Email: "dottie@gmail.com",
    JoiningDate: "03 Mar 2021",
    Role: "Nurse",
    Salary: "$1500",
    Status: "Generate Slip",
  },
  {
    Employee: "Cheryl Bilodeau",
    Image: "user-07.jpg",
    Email: "cheryl@gmail.com",
    JoiningDate: "08 May 2021",
    Role: "Nurse (RN)",
    Salary: "$2500",
    Status: "Generate Slip",
  },
  {
    Employee: "Valerie Padgett",
    Image: "user-02.jpg",
    Email: "valerie@gmail.com",
    JoiningDate: "29 Mar 2021",
    Role: "Nurse Practitioner",
    Salary: "$1000",
    Status: "Generate Slip",
  },
  {
    Employee: "Diane Nash",
    Image: "user-25.jpg",
    Email: "diane@gmail.com",
    JoiningDate: "01 Apr 2020",
    Role: "Nurse",
    Salary: "$1250",
    Status: "Generate Slip",
  },
  {
    Employee: "Sally Cavazos",
    Image: "user-29.jpg",
    Email: "sally@gmail.com",
    JoiningDate: "01 May 2020",
    Role: "Nurse",
    Salary: "$1550",
    Status: "Generate Slip",
  },
  {
    Employee: "Forest Heath",
    Image: "user-12.jpg",
    Email: "forest@gmail.com",
    JoiningDate: "27 May 2020",
    Role: "Reception",
    Salary: "$1250",
    Status: "Generate Slip",
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
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      StaffSel: [{ label: "Select staff", value: "Select staff" }],
      StaffSelOne: [{ label: "Select staff", value: "Select staff" }],
      Doctor: [
        { id: 1, name: "James Allaire" },
        { id: 2, name: "Esther Schmidt" },
        { id: 3, name: "Judi Lenahan" },
        { id: 4, name: "Robert Reid" },
        { id: 5, name: "Dottie Sellers" },
      ],
      Role: [
        { id: 1, name: "Admin" },
        { id: 2, name: "Reception" },
        { id: 3, name: "Nurse (RN)" },
        { id: 4, name: "Nurse Practitioner" },
      ],
      Status: [
        { id: 1, name: "Active" },
        { id: 2, name: "Inactive" },
      ],
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
          record.Employee.toLowerCase().includes(query) ||
          record.Email.toLowerCase().includes(query) ||
          record.JoiningDate.toLowerCase().includes(query) ||
          record.Role.toLowerCase().includes(query) ||
          record.Salary.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
