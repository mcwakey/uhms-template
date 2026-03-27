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
          <h4 class="fw-bold mb-0">Admin Leaves</h4>
        </div>
        <div class="text-end d-flex">
          <a
            href="javascript:void(0);"
            class="btn btn-primary ms-2 fs-13 btn-md"
            data-bs-toggle="modal"
            data-bs-target="#add_leave"
            ><i class="ti ti-plus me-1"></i>New Leave</a
          >
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-lg-3">
          <div class="card">
            <div class="card-body position-relative">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <p>Total Present</p>
                  <div class="d-flex align-items-center">
                    <p class="mb-0 me-2"><span class="text-dark fw-bold">180</span></p>
                    <span class="badge badge-soft-success fs-12 fw-normal"
                      >+10.6%<i class="ti ti-arrow-up-right ms-1"></i
                    ></span>
                  </div>
                </div>
                <span
                  class="p-2 bg-soft-primary border border-primary rounded-circle d-inline-flex align-items-center justify-content-center text-primary position-relative z-1"
                  ><i class="ti ti-user-check"></i
                ></span>
              </div>
              <img
                src="@/assets/img/bg/attendance-bg-01.png"
                alt=""
                class="img-fluid position-absolute bottom-0 end-0"
              />
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
        <div class="col-lg-3">
          <div class="card">
            <div class="card-body position-relative">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <p>Planned Leaves</p>
                  <div class="d-flex align-items-center">
                    <p class="mb-0 me-2"><span class="text-dark fw-bold">10</span></p>
                    <span class="badge badge-soft-success fs-12 fw-normal"
                      >+8.95%<i class="ti ti-arrow-up-right ms-1"></i
                    ></span>
                  </div>
                </div>
                <span
                  class="p-2 bg-soft-success border border-success rounded-circle d-inline-flex align-items-center justify-content-center text-success position-relative z-1"
                  ><i class="ti ti-user-x"></i
                ></span>
              </div>
              <img
                src="@/assets/img/bg/attendance-bg-02.png"
                alt=""
                class="img-fluid position-absolute bottom-0 end-0"
              />
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
        <div class="col-lg-3">
          <div class="card">
            <div class="card-body position-relative">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <p>Unplanned Leaves</p>
                  <div class="d-flex align-items-center">
                    <p class="mb-0 me-2"><span class="text-dark fw-bold">50</span></p>
                    <span class="badge badge-soft-success fs-12 fw-normal"
                      >+3.78%<i class="ti ti-arrow-up-right ms-1"></i
                    ></span>
                  </div>
                </div>
                <span
                  class="p-2 bg-soft-warning border border-warning rounded-circle d-inline-flex align-items-center justify-content-center text-warning position-relative z-1"
                  ><i class="ti ti-user-exclamation"></i
                ></span>
              </div>
              <img
                src="@/assets/img/bg/attendance-bg-03.png"
                alt=""
                class="img-fluid position-absolute bottom-0 end-0"
              />
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
        <div class="col-lg-3">
          <div class="card">
            <div class="card-body position-relative">
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <p>Pending Requests</p>
                  <div class="d-flex align-items-center">
                    <p class="mb-0 me-2"><span class="text-dark fw-bold">15</span></p>
                    <span class="badge badge-soft-success fs-12 fw-normal"
                      >+7.65%<i class="ti ti-arrow-up-right ms-1"></i
                    ></span>
                  </div>
                </div>
                <span
                  class="p-2 bg-soft-danger border border-danger rounded-circle d-inline-flex align-items-center justify-content-center text-danger position-relative z-1"
                  ><i class="ti ti-user-question"></i
                ></span>
              </div>
              <img
                src="@/assets/img/bg/attendance-bg-04.png"
                alt=""
                class="img-fluid position-absolute bottom-0 end-0"
              />
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set mb-3">
          <div class="d-flex align-items-center">
            <div class="table-search d-flex align-items-center mb-0 me-2">
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
            <div class="d-flex right-content align-items-center flex-wrap">
              <div
                id="reportrange"
                class="reportrange-picker d-flex align-items-center"
                ref="dateRangeInput"
              >
                <i class="ti ti-calendar text-gray-5 fs-14 me-1"></i
                ><span class="reportrange-picker-field">16 Apr 25 - 16 Apr 25</span>
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
                      v-model="selectedEmp"
                      :options="Doctor"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Leave Type</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selectedType"
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
                      v-model="selectedSta"
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
              <span
                class="fw-medium"
                :class="[
                  'badge',
                  {
                    'badge-soft-success rounded text-success border border-success':
                      record.Status === 'Approved',
                    'badge-soft-danger rounded text-danger border border-danger':
                      record.Status === 'Rejected',
                  },
                ]"
                >{{ record.Status }}
              </span>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item p-2">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_leave"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_leave"
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
  <div id="add_leave" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Add New Leave</h4>
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
            <div class="row row-gap-2">
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >Employee<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selected"
                    :options="EmpJam"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >Leave Type<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedOne"
                    :options="TypeJam"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >From Date<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-icon-end position-relative">
                    <date-picker
                      v-model="startdate"
                      value="29-02-2020"
                      class="datetimepicker form-control"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >To Date<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-icon-end position-relative">
                    <date-picker
                      v-model="startdateOne"
                      value="29-02-2020"
                      class="datetimepicker form-control"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label"
                    >No of Days<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-12">
                <div class="p-2 bg-light rounded">
                  <div class="row align-items-center">
                    <div class="col-md-6">
                      <span>dd/mm/yyyy</span>
                    </div>
                    <div class="col-md-6">
                      <vue3-select
                        v-model="selectedTwo"
                        :options="DateSele"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label"
                    >No of Days<span class="text-danger ms-1">*</span></label
                  >
                  <textarea class="form-control" rows="3"></textarea>
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
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Add New Leave
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Add Modal -->
  <div id="edit_leave" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Edit Leave</h4>
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
            <div class="row row-gap-2">
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >Employee<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedThree"
                    :options="EmpJamEdit"
                    placeholder="James Adair"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >Leave Type<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedFour"
                    :options="TypeJamEdit"
                    placeholder="Sick Leave"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >From Date<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-icon-end position-relative">
                    <date-picker
                      v-model="startdateTwo"
                      value="29-02-2020"
                      class="datetimepicker form-control"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >To Date<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-icon-end position-relative">
                    <date-picker
                      v-model="startdateThree"
                      value="29-02-2020"
                      class="datetimepicker form-control"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label"
                    >No of Days<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="2" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-12">
                <div class="p-2 bg-light rounded">
                  <div class="row align-items-center mb-2">
                    <div class="col-md-6">
                      <span>18 Jan 2025</span>
                    </div>
                    <div class="col-md-6">
                      <vue3-select
                        v-model="selectedFive"
                        :options="DateSeleEdit"
                        placeholder="Full Day"
                      />
                    </div>
                  </div>
                  <div class="row align-items-center">
                    <div class="col-md-6">
                      <span>18 Jan 2025</span>
                    </div>
                    <div class="col-md-6">
                      <vue3-select
                        v-model="selectedSix"
                        :options="DateSeleEditOne"
                        placeholder="Full Day"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label"
                    >No of Days<span class="text-danger ms-1">*</span></label
                  >
                  <textarea class="form-control" rows="3">
Not feeling well due to cold and fatigue, taking rest as advised by family doctor.</textarea
                  >
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
  <div class="modal fade" id="delete_leave">
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
    title: "ID",
    dataIndex: "ID",
    key: "ID",
    sorter: {
      compare: (a, b) => (a.ID.toLowerCase() > b.ID.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Employee",
    dataIndex: "Employee",
    key: "Employee",
    sorter: {
      compare: (a, b) => (a.Employee.toLowerCase() > b.Employee.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Leave Type",
    dataIndex: "LeaveType",
    key: "LeaveType",
    sorter: {
      compare: (a, b) => (a.LeaveType.toLowerCase() > b.LeaveType.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
    sorter: {
      compare: (a, b) => (a.Date.toLowerCase() > b.Date.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Day",
    dataIndex: "Day",
    key: "Day",
    sorter: {
      compare: (a, b) => (a.Day.toLowerCase() > b.Day.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Applied On",
    dataIndex: "AppliedOn",
    key: "AppliedOn",
    sorter: {
      compare: (a, b) => (a.AppliedOn.toLowerCase() > b.AppliedOn.toLowerCase() ? -1 : 1),
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
    ID: "#EMP020",
    Employee: "James Adair",
    Image: "user-08.jpg",
    LeaveType: "Sick Leave",
    Date: "30 Apr 2025 - 30 Apr 2025",
    Day: "01 Day",
    AppliedOn: "22 Apr 2025",
    Status: "Approved",
  },
  {
    ID: "#EMP019",
    Employee: "Adam Milne",
    Image: "user-03.jpg",
    LeaveType: "Casual Leave",
    Date: "15 Apr 2025 - 15 Apr 2025",
    Day: "02 Days",
    AppliedOn: "12 Apr 2025",
    Status: "Rejected",
  },
  {
    ID: "#EMP018",
    Employee: "Richard Clark",
    Image: "user-04.jpg",
    LeaveType: "Emergency",
    Date: "02 Apr 2025 - 03 Apr 2025",
    Day: "03 Days",
    AppliedOn: "01 Apr 2025",
    Status: "Approved",
  },
  {
    ID: "#EMP017",
    Employee: "Robert Reid",
    Image: "user-05.jpg",
    LeaveType: "Vacation",
    Date: "12 Mar 2025 - 13 Mar 2025",
    Day: "01 Day",
    AppliedOn: "05 Mar 2025",
    Status: "Rejected",
  },
  {
    ID: "#EMP016",
    Employee: "Dottie Jeny",
    Image: "user-06.jpg",
    LeaveType: "Maternity",
    Date: "27 Mar 2025 - 29 Mar 2025",
    Day: "02 Days",
    AppliedOn: "20 Mar 2025",
    Status: "Approved",
  },
  {
    ID: "#EMP015",
    Employee: "Cheryl Bilodeau",
    Image: "user-07.jpg",
    LeaveType: "Paternity",
    Date: "05 Mar 2025 - 05 Mar 2025",
    Day: "01 Day",
    AppliedOn: "01 Mar 2025",
    Status: "Rejected",
  },
  {
    ID: "#EMP014",
    Employee: "Valerie Padgett",
    Image: "user-02.jpg",
    LeaveType: "Sick Leave",
    Date: "24 Feb 2025 - 25 Feb 2025",
    Day: "02 Days",
    AppliedOn: "15 Feb 2025",
    Status: "Rejected",
  },
  {
    ID: "#EMP013",
    Employee: "Diane Nash",
    Image: "user-25.jpg",
    LeaveType: "Casual Leave",
    Date: "16 Feb 2025 - 17 Feb 2025",
    Day: "01 Day",
    AppliedOn: "09 Feb 2025",
    Status: "Approved",
  },
  {
    ID: "#EMP012",
    Employee: "Sally Cavazos",
    Image: "user-29.jpg",
    LeaveType: "Emergency",
    Date: "01 Feb 2025 - 01 Feb 2025",
    Day: "02 Days",
    AppliedOn: "01 Feb 2025",
    Status: "Approved",
  },
  {
    ID: "#EMP011",
    Employee: "Forest Heath",
    Image: "user-12.jpg",
    LeaveType: "Vacation",
    Date: "25 Jan 2025 - 29 Jan 2025",
    Day: "05 Days",
    AppliedOn: "12 Jan 2025",
    Status: "Rejected",
  },
];
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
const currentDateTwo = ref(new Date());
const currentDateThree = ref(new Date());
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
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedEmp: [],
      selectedType: [],
      selectedSta: [],
      startdate: currentDate,
      startdateOne: currentDateOne,
      startdateTwo: currentDateTwo,
      startdateThree: currentDateThree,
      dateFormat: "dd-MM-yyyy",
      EmpJam: [
        { label: "Select", value: "Select" },
        { label: "James Adair", value: "James Adair" },
        { label: "Adam Milne", value: "Adam Milne" },
        { label: "Richard Clark", value: "Richard Clark" },
        { label: "Robert Reid", value: "Robert Reid" },
      ],
      TypeJam: [
        { label: "Select", value: "Select" },
        { label: "Sick Leave", value: "Sick Leave" },
        { label: "Causal Leave", value: "Causal Leave" },
        { label: "Emergency", value: "Emergency" },
        { label: "Vacation", value: "Vacation" },
      ],
      DateSele: [
        { label: "Select", value: "Select" },
        { label: "Full Day", value: "Full Day" },
        { label: "Half Day", value: "Half Day" },
      ],
      EmpJam: [
        { label: "Select", value: "Select" },
        { label: "James Adair", value: "James Adair" },
        { label: "Adam Milne", value: "Adam Milne" },
        { label: "Richard Clark", value: "Richard Clark" },
        { label: "Robert Reid", value: "Robert Reid" },
      ],
      TypeJam: [
        { label: "Select", value: "Select" },
        { label: "Sick Leave", value: "Sick Leave" },
        { label: "Causal Leave", value: "Causal Leave" },
        { label: "Emergency", value: "Emergency" },
        { label: "Vacation", value: "Vacation" },
      ],
      DateSele: [
        { label: "Select", value: "Select" },
        { label: "Full Day", value: "Full Day" },
        { label: "Half Day", value: "Half Day" },
      ],
      EmpJamEdit: [
        { label: "Select", value: "Select" },
        { label: "James Adair", value: "James Adair" },
        { label: "Adam Milne", value: "Adam Milne" },
        { label: "Richard Clark", value: "Richard Clark" },
        { label: "Robert Reid", value: "Robert Reid" },
      ],
      TypeJamEdit: [
        { label: "Select", value: "Select" },
        { label: "Sick Leave", value: "Sick Leave" },
        { label: "Causal Leave", value: "Causal Leave" },
        { label: "Emergency", value: "Emergency" },
        { label: "Vacation", value: "Vacation" },
      ],
      DateSeleEdit: [
        { label: "Select", value: "Select" },
        { label: "Full Day", value: "Full Day" },
        { label: "Half Day", value: "Half Day" },
      ],
      DateSeleEditOne: [
        { label: "Select", value: "Select" },
        { label: "Full Day", value: "Full Day" },
        { label: "Half Day", value: "Half Day" },
      ],
      Doctor: [
        { id: 1, name: "James Adair" },
        { id: 2, name: "Adam Milne" },
        { id: 3, name: "Richard Clark" },
        { id: 4, name: "Robert Reid" },
      ],
      Role: [
        { id: 1, name: "Sick Leave" },
        { id: 2, name: "Casual Leave" },
        { id: 3, name: "Emergency" },
        { id: 4, name: "Vacation" },
      ],
      Status: [
        { id: 1, name: "Approved" },
        { id: 2, name: "Rejected" },
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
