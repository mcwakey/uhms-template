<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div
        class="d-flex align-items-center justify-content-between flex-wrap gap-2 pb-3 mb-3 border-bottom"
      >
        <div class="d-flex align-items-center">
          <h4 class="fw-bold mb-0 me-2">Tickets</h4>
          <span class="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium"
            >Total Announcements : 582</span
          >
        </div>
        <div class="text-end">
          <a
            href="javascript:void(0);"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add_tickets"
            ><i class="ti ti-plus me-1"></i>Add New Ticket</a
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
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <i class="ti ti-filter me-2 fs-14"></i>Filter
            </a>
            <div
              class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown"
              id="filter-dropdown"
            >
              <div
                class="d-flex align-items-center justify-content-between border-bottom filter-header"
              >
                <h4 class="fs-18 fw-bold">Filter</h4>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="link-danger text-decoration-underline me-3"
                    >Clear All</a
                  >
                </div>
              </div>
              <form action="#">
                <div class="filter-body pb-1">
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select
                      </a>
                      <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div class="mb-3">
                          <div class="input-icon-start position-relative">
                            <span class="input-icon-addon fs-12">
                              <i class="isax isax-search-normal"></i>
                            </span>
                            <input
                              type="text"
                              class="form-control form-control-sm"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul class="mb-3">
                          <li
                            class="d-flex align-items-center justify-content-between mb-3"
                          >
                            <label class="d-inline-flex align-items-center text-gray-9">
                              <input
                                class="form-check-input select-all m-0 me-2"
                                type="checkbox"
                              />
                              Select All
                            </label>
                            <a
                              href="javascript:void(0);"
                              class="link-danger fw-medium text-decoration-underline"
                              >Reset</a
                            >
                          </li>
                          <li>
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-sm rounded-circle me-2"
                                ><img
                                  src="@/assets/img/users/user-33.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Alberto Ripley
                            </label>
                          </li>
                          <li>
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-sm rounded-circle me-2"
                                ><img
                                  src="@/assets/img/users/user-12.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Bernard Griffith
                            </label>
                          </li>
                          <li>
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-sm rounded-circle me-2"
                                ><img
                                  src="@/assets/img/users/user-02.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Carol Lam
                            </label>
                          </li>
                          <li>
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-sm rounded-circle me-2"
                                ><img
                                  src="@/assets/img/users/user-08.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Ezra Belcher
                            </label>
                          </li>
                        </ul>
                        <div class="row g-2">
                          <div class="col-6">
                            <a
                              href="javascript:void(0);"
                              class="btn btn-outline-white w-100 close-filter"
                              >Cancel</a
                            >
                          </div>
                          <div class="col-6">
                            <a href="javascript:void(0);" class="btn btn-primary w-100"
                              >Select</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Date</label>
                    </div>
                    <div class="input-group position-relative">
                      <input
                        type="text"
                        class="form-control date-range bookingrange rounded-end h-auto py-2 bg-white"
                        ref="dateRangeInput"
                      />
                      <span class="input-icon-addon fs-16 text-gray-9">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
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
            <template v-if="column.key === 'TicketID'">
              <router-link to="/support/ticket-details">{{
                record.TicketID
              }}</router-link>
            </template>
            <template v-if="column.key === 'CreatedBy'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar avatar-sm me-2">
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="product"
                    class="rounded-circle"
                  />
                </a>
                <a href="javascript:void(0);" class="fw-medium">{{ record.CreatedBy }}</a>
              </div>
            </template>
            <template v-if="column.key === 'Priority'">
              <span class="badge border bg-white text-dark fw-medium">
                <i
                  class="ti ti-point-filled me-1"
                  :class="[
                    '',
                    {
                      'text-success': record.Priority === 'Low',
                      'text-danger': record.Priority === 'High',
                      'text-warning': record.Priority === 'Medium',
                    },
                  ]"
                >
                </i
                >{{ record.Priority }}</span
              >
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class="fw-medium"
                :class="[
                  'badge',
                  {
                    'bg-soft-danger text-danger border border-danger':
                      record.Status === 'Closed',
                    'bg-soft-success text-success border border-success':
                      record.Status === 'Resolved',
                    'bg-soft-warning text-warning border border-warning':
                      record.Status === 'Inprogress',
                    'bg-soft-info text-info border border-info': record.Status === 'Open',
                  },
                ]"
                >{{ record.Status }}
              </span>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item">
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
                      data-bs-target="#edit_tickets"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_tickets"
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
  <!-- End Wrapper -->

  <!-- Start Add Contact -->
  <div id="add_tickets" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Add New Ticket</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <!-- start row -->
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Ticket ID<span class="text-danger ms-1">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="#TKT0020"
                    disabled
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Created By<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Phone Number<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" id="phone" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Email Address<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Subject<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Category<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selected"
                    :options="TickCat"
                    placeholder="Technical Issues"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Priority<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedOne"
                    :options="TickPri"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Created Date<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-group position-relative">
                    <input
                      type="text"
                      class="form-control date-range bookingrange rounded-end h-auto py-2 bg-white"
                      ref="dateRangeInput"
                    />
                    <span class="input-icon-addon fs-16 text-gray-9">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-12">
                <div class="mb-2">
                  <label class="form-label"
                    >Content<span class="text-danger ms-1">*</span></label
                  >
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-12">
                <div class="mb-2">
                  <label class="form-label">File</label>
                  <div
                    class="file-upload drag-file bg-light w-100 d-flex align-items-center justify-content-center flex-column"
                  >
                    <span class="upload-img d-block mb-2"
                      ><i class="ti ti-folder-open text-primary"></i
                    ></span>
                    <p class="mb-0 text-dark">
                      Drop Your Files or
                      <a
                        href="javascript:void(0);"
                        class="text-primary text-decoration-underline"
                      >
                        browse</a
                      >
                    </p>
                    <input type="file" accept="video/image" />
                    <p class="fs-13">Maximum size : 50 MB</p>
                  </div>
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
            <button type="submit" class="btn btn-primary">Add Ticket</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Contact -->

  <!-- Start Edit Contact -->
  <div id="edit_tickets" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Edit Ticket</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <!-- start row -->
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Ticket ID<span class="text-danger ms-1">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    placeholder="#TKT0020"
                    disabled
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Created By<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="Andrew Simmons" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Phone Number<span class="text-danger ms-1">*</span></label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="phone2"
                    value="000-000-0000"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Email Address<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="andrew@example.com" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Subject<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="Auto Logout Complaint" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Category<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedTwo"
                    :options="TickCatEdit"
                    placeholder="Technical Issues"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Priority<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedThree"
                    :options="TickPriEdit"
                    placeholder="Medium"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Created Date<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-group position-relative">
                    <input
                      type="text"
                      class="form-control date-range bookingrange rounded-end h-auto py-2 bg-white"
                      ref="dateRangeInput"
                    />
                    <span class="input-icon-addon fs-16 text-gray-9">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-12">
                <div class="mb-2">
                  <label class="form-label"
                    >Content<span class="text-danger ms-1">*</span></label
                  >
                  <textarea class="form-control" rows="3">
Keep getting logged out while working, even without being idle. It’s frustrating and interrupts my documentation process.</textarea
                  >
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-12">
                <div class="mb-2">
                  <label class="form-label">File</label>
                  <div
                    class="file-upload drag-file bg-light w-100 d-flex align-items-center justify-content-center flex-column"
                  >
                    <span class="upload-img d-block mb-2"
                      ><i class="ti ti-folder-open text-primary"></i
                    ></span>
                    <p class="mb-0 text-dark">
                      Drop Your Files or
                      <a
                        href="javascript:void(0);"
                        class="text-primary text-decoration-underline"
                      >
                        browse</a
                      >
                    </p>
                    <input type="file" accept="video/image" />
                    <p class="fs-13">Maximum size : 50 MB</p>
                  </div>
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-12">
                <div class="mb-2">
                  <label class="form-label"
                    >Status<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedFour"
                    :options="TickStat"
                    placeholder="Resolved"
                  />
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
  <!-- End Edit Contact -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_tickets">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0"
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
    title: "Ticket ID",
    dataIndex: "TicketID",
    key: "TicketID",
    sorter: {
      compare: (a, b) => (a.TicketID.toLowerCase() > b.TicketID.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Created By",
    dataIndex: "CreatedBy",
    key: "CreatedBy",
    sorter: {
      compare: (a, b) => (a.CreatedBy.toLowerCase() > b.CreatedBy.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Subject",
    dataIndex: "Subject",
    key: "Subject",
    sorter: {
      compare: (a, b) => (a.Subject.toLowerCase() > b.Subject.toLowerCase() ? -1 : 1),
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
    title: "Priority",
    dataIndex: "Priority",
    key: "Priority",
    sorter: {
      compare: (a, b) => (a.Priority.toLowerCase() > b.Priority.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Assignee",
    dataIndex: "Assignee",
    key: "Assignee",
    sorter: {
      compare: (a, b) => (a.Assignee.toLowerCase() > b.Assignee.toLowerCase() ? -1 : 1),
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
    TicketID: "#TKT020",
    CreatedBy: "Alberto Ripley",
    Image: "user-33.jpg",
    Subject: "Scheduling Error",
    CreatedDate: "30 Apr 2025",
    Priority: "Low",
    Assignee: "IT Team",
    Status: "Resolved",
  },
  {
    TicketID: "#TKT019",
    CreatedBy: "Susan Babin",
    Image: "user-01.jpg",
    Subject: "Lab Upload Issue",
    CreatedDate: "15 Apr 2025",
    Priority: "High",
    Assignee: "Lab Technician",
    Status: "Inprogress",
  },
  {
    TicketID: "#TKT018",
    CreatedBy: "Carol Lam",
    Image: "user-02.jpg",
    Subject: "Auto Logout Complaint",
    CreatedDate: "02 Apr 2025",
    Priority: "Medium",
    Assignee: "System Admin",
    Status: "Open",
  },
  {
    TicketID: "#TKT017",
    CreatedBy: "Marsha Noland",
    Image: "user-04.jpg",
    Subject: "Mobile View Problem",
    CreatedDate: "27 Mar 2025",
    Priority: "Low",
    Assignee: "EHR Support Team",
    Status: "Closed",
  },
  {
    TicketID: "#TKT016",
    CreatedBy: "Irma Armstrong",
    Image: "user-05.jpg",
    Subject: "Performance Degradation",
    CreatedDate: "12 Mar 2025",
    Priority: "High",
    Assignee: "IT Team",
    Status: "Resolved",
  },
  {
    TicketID: "#TKT015",
    CreatedBy: "Jesus Adams",
    Image: "user-07.jpg",
    Subject: "Role Assignment Bug",
    CreatedDate: "05 Mar 2025",
    Priority: "Medium",
    Assignee: "Admin Panel Support",
    Status: "Inprogress",
  },
  {
    TicketID: "#TKT014",
    CreatedBy: "Ezra Belcher",
    Image: "user-08.jpg",
    Subject: "Reminder Failure",
    CreatedDate: "19 Feb 2025",
    Priority: "Low",
    Assignee: "Communications Specialist",
    Status: "Open",
  },
  {
    TicketID: "#TKT013",
    CreatedBy: "Glen Lentz",
    Image: "user-10.jpg",
    Subject: "Incorrect Date Format",
    CreatedDate: "16 Feb 2025",
    Priority: "High",
    Assignee: "QA Department",
    Status: "Closed",
  },
  {
    TicketID: "#TKT012",
    CreatedBy: "Bernard Griffith",
    Image: "user-12.jpg",
    Subject: "Invoice Calculation Error",
    CreatedDate: "01 Feb 2025",
    Priority: "Medium",
    Assignee: "Accountant",
    Status: "Resolved",
  },
  {
    TicketID: "#TKT011",
    CreatedBy: "John Elsass",
    Image: "user-14.jpg",
    Subject: "File Upload Blocked",
    CreatedDate: "20 Jas 2025",
    Priority: "Low",
    Assignee: "Patient Portal Support",
    Status: "Inprogress",
  },
];
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      searchQuery: "",
      data,
      columns,
      TickStat: [
        { label: "Select", value: "Select" },
        { label: "Inprogress", value: "Inprogress" },
        { label: "Resolved", value: "Resolved" },
        { label: "Closed", value: "Closed" },
        { label: "Open", value: "Open" },
      ],
      TickPri: [
        { label: "Select", value: "Select" },
        { label: "High", value: "High" },
        { label: "Medium", value: "Medium" },
        { label: "Low", value: "Low" },
      ],
      TickCat: [
        { label: "Select", value: "Select" },
        { label: "Technical Issues", value: "Technical Issues" },
        { label: "Missing Invoices", value: "Missing Invoices" },
        { label: "Payment Gateway Errors", value: "Payment Gateway Errors" },
        { label: "User Role Issues", value: "User Role Issues" },
        { label: "Client Queries", value: "Client Queries" },
      ],
      TickPriEdit: [
        { label: "Select", value: "Select" },
        { label: "High", value: "High" },
        { label: "Medium", value: "Medium" },
        { label: "Low", value: "Low" },
      ],
      TickCatEdit: [
        { label: "Select", value: "Select" },
        { label: "Technical Issues", value: "Technical Issues" },
        { label: "Missing Invoices", value: "Missing Invoices" },
        { label: "Payment Gateway Errors", value: "Payment Gateway Errors" },
        { label: "User Role Issues", value: "User Role Issues" },
        { label: "Client Queries", value: "Client Queries" },
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
          record.TicketID.toLowerCase().includes(query) ||
          record.CreatedBy.toLowerCase().includes(query) ||
          record.Subject.toLowerCase().includes(query) ||
          record.CreatedDate.toLowerCase().includes(query) ||
          record.Priority.toLowerCase().includes(query) ||
          record.Assignee.toLowerCase().includes(query) ||
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
