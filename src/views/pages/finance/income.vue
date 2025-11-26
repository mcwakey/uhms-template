<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Income
            <span
              class="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1"
              >Total Income : 565</span
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
            data-bs-target="#add_new_income"
            ><i class="ti ti-plus me-1"></i>New Income
          </a>
        </div>
      </div>
      <!-- End Page Header -->

      <!--  Start Filter -->
      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="d-flex align-items-center gap-2">
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
                      <label class="form-label mb-1">Received From</label>
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
                      <label class="form-label">Category</label>
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
                      <label class="form-label">Payment Method</label>
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
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Recent</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Oldest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--  End Filter -->

      <!--  Start Table -->
      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'IncomeName'">
              <div>
                <a href="">{{ record.IncomeName }}</a>
              </div>
            </template>
            <template v-if="column.key === 'Amount'">
              <div class="fw-semibold text-dark">{{ record.Amount }}</div>
            </template>
            <template v-if="column.key === 'Date'">
              <div class="text-dark">{{ record.Date }}</div>
            </template>
            <template v-if="column.key === 'ReceivedFrom'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="product"
                    class="rounded-circle"
                  />
                </a>
                <a href="javascript:void(0);" class="text-dark fw-semibold"
                  >{{ record.ReceivedFrom }}
                </a>
              </div>
            </template>
            <template v-if="column.key === 'PaymentMethod'">
              <div class="text-dark">{{ record.PaymentMethod }}</div>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class="fw-medium"
                :class="[
                  'badge',
                  {
                    'badge-soft-success rounded text-success border border-success':
                      record.Status === 'Received',
                    'badge-soft-warning rounded text-warning border border-warning':
                      record.Status === 'Pending',
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
                      data-bs-target="#edit_new_income"
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
      <!--  End Table -->
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

  <!-- Start Add Income -->
  <div class="modal fade" id="add_new_income">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">New Income</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <!-- start row -->
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Income Name<span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Amount<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    Select
                  </a>
                  <div class="dropdown-menu shadow-lg w-100 dropdown-info p-2">
                    <div class="filter-range">
                      <input type="text" id="range_01" />
                      <p class="mt-2 fs-13">
                        Range : <span class="text-dark">$200 - $5695</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Date<span class="text-danger">*</span></label
                >
                <div class="input-group position-relative">
                  <input
                    type="text"
                    class="form-control datetimepicker"
                    placeholder="dd/mm/yyyy"
                  />
                  <span class="input-icon-addon">
                    <i class="ti ti-calendar text-body"></i>
                  </span>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Received From<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    Select
                  </a>
                  <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                    <div class="mb-3">
                      <div class="input-icon-start position-relative">
                        <span class="input-icon-addon fs-12">
                          <i class="ti ti-search"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <ul class="mb-0 list-style-none">
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/users/user-01.jpg"
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
                              src="@/assets/img/users/user-02.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Susan Babin
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/users/user-03.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Martin Lisa
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/users/user-04.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Stella Mary
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-01.jpg"
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
                              src="@/assets/img/doctors/doctor-02.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Jesus Adams
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-03.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Ezra Belcher
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-04.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Glen Lentz
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/users/user-06.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Bernard Griffith
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Payment Method<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    Select
                  </a>
                  <ul class="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                    <li>
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control form-control"
                          placeholder="Search"
                        />
                      </div>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        PayPal
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Options Enhanced
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Cheque
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Status<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    Select
                  </a>
                  <ul class="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                    <li>
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control form-control"
                          placeholder="Search"
                        />
                      </div>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Approved
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Options Enhanced
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Pending
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        New
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-light btn-sm me-2 fs-13 fw-medium"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary btn-sm fs-13 fw-medium">
            Add New Expense
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add Income  -->

  <!-- Start Edit Income -->
  <div class="modal fade" id="edit_new_income">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">Edit Income</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <!-- start row -->
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Income Name<span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" value="General Consultation" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Amount<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    $220
                  </a>
                  <div class="dropdown-menu shadow-lg w-100 dropdown-info p-2">
                    <div class="filter-range">
                      <input type="text" id="range_02" />
                      <p class="mt-2 fs-13">
                        Range : <span class="text-dark">$200 - $5695</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Date<span class="text-danger">*</span></label
                >
                <div class="input-group position-relative">
                  <input
                    type="text"
                    class="form-control datetimepicker"
                    placeholder="30/April/2025"
                  />
                  <span class="input-icon-addon">
                    <i class="ti ti-calendar text-body"></i>
                  </span>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Received From<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    Alberto Ripley
                  </a>
                  <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                    <div class="mb-3">
                      <div class="input-icon-start position-relative">
                        <span class="input-icon-addon fs-12">
                          <i class="ti ti-search"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control form-control-sm"
                          placeholder="Search"
                        />
                      </div>
                    </div>
                    <ul class="mb-0 list-style-none">
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/users/user-01.jpg"
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
                              src="@/assets/img/users/user-02.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Susan Babin
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/users/user-03.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Martin Lisa
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/users/user-04.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Stella Mary
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-01.jpg"
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
                              src="@/assets/img/doctors/doctor-02.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Jesus Adams
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-03.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Ezra Belcher
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-04.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Glen Lentz
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/users/user-06.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Bernard Griffith
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Payment Method<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    PayPal
                  </a>
                  <ul class="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                    <li>
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control form-control"
                          placeholder="Search"
                        />
                      </div>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        PayPal
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Options Enhanced
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Cheque
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Status<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    Approved
                  </a>
                  <ul class="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                    <li>
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control form-control"
                          placeholder="Search"
                        />
                      </div>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Approved
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Options Enhanced
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Pending
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        New
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-light btn-sm me-2 fs-13 fw-medium"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary btn-sm fs-13 fw-medium">
            Add New Expense
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Edit Income  -->

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
</template>
<script>
const columns = [
  {
    title: "Income Name",
    dataIndex: "IncomeName",
    key: "IncomeName",
    sorter: {
      compare: (a, b) =>
        a.IncomeName.toLowerCase() > b.IncomeName.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
    sorter: {
      compare: (a, b) => (a.Amount.toLowerCase() > b.Amount.toLowerCase() ? -1 : 1),
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
    title: "Received From",
    dataIndex: "ReceivedFrom",
    key: "ReceivedFrom",
    sorter: {
      compare: (a, b) =>
        a.ReceivedFrom.toLowerCase() > b.ReceivedFrom.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Payment Method",
    dataIndex: "PaymentMethod",
    key: "PaymentMethod",
    sorter: {
      compare: (a, b) =>
        a.PaymentMethod.toLowerCase() > b.PaymentMethod.toLowerCase() ? -1 : 1,
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
    IncomeName: "General Consultation",
    Amount: "$800",
    Date: "30 Apr 2025",
    Image: "user-01.jpg",
    ReceivedFrom: "James Carter",
    PaymentMethod: "PayPal",
    Status: "Received",
  },
  {
    IncomeName: "Blood Test",
    Amount: "$930",
    Date: "15 Apr 2025",
    Image: "user-02.jpg",
    ReceivedFrom: "Emily Johnson",
    PaymentMethod: "Debit Card",
    Status: "Pending",
  },
  {
    IncomeName: "MRI Scan",
    Amount: "$850",
    Date: "02 Apr 2025",
    Image: "user-03.jpg",
    ReceivedFrom: "Robert Mitchell",
    PaymentMethod: "Cheque",
    Status: "Received",
  },
  {
    IncomeName: "CT Scan",
    Amount: "$700",
    Date: "27 Mar 2025",
    Image: "user-04.jpg",
    ReceivedFrom: "Sophia Miller",
    PaymentMethod: "Debit Card",
    Status: "Received",
  },
  {
    IncomeName: "Allergy Panel",
    Amount: "$650",
    Date: "12 Mar 2025",
    Image: "user-05.jpg",
    ReceivedFrom: "Daniel Anderson",
    PaymentMethod: "PayPal",
    Status: "Pending",
  },
  {
    IncomeName: "PET Scan",
    Amount: "$430",
    Date: "05 Mar 2025",
    Image: "user-06.jpg",
    ReceivedFrom: "Olivia Davis",
    PaymentMethod: "Cheque",
    Status: "Received",
  },
  {
    IncomeName: "Orthopedic Checkup",
    Amount: "$300",
    Date: "24 Feb 2025",
    Image: "user-07.jpg",
    ReceivedFrom: "Michael Thompson",
    PaymentMethod: "Debit Card",
    Status: "Recerived",
  },
  {
    IncomeName: "Thyroid Test",
    Amount: "$450",
    Date: "16 Feb 2025",
    Image: "user-08.jpg",
    ReceivedFrom: "Isabella Wilson",
    PaymentMethod: "Cheque",
    Status: "Pending",
  },
  {
    IncomeName: "ENT Consultation",
    Amount: "$570",
    Date: "01 Feb 2025",
    Image: "user-09.jpg",
    ReceivedFrom: "Michael Trade",
    PaymentMethod: "Debit Card",
    Status: "Received",
  },
  {
    IncomeName: "Cataract Surgery",
    Amount: "$800",
    Date: "25 Jan 2025",
    Image: "user-10.jpg",
    ReceivedFrom: "Ava Robinson",
    PaymentMethod: "PayPal",
    Status: "Received",
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
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      Doctor: [
        { id: 1, name: "Alberto Ripley" },
        { id: 2, name: "Martin Lisa" },
        { id: 3, name: "Stella Mary" },
        { id: 4, name: "Carol Lam" },
        { id: 5, name: "Jesus Adams" },
        { id: 6, name: "Ezra Belcher" },
        { id: 7, name: "Unit Manager" },
        { id: 8, name: "Bernard Griffith" },
        { id: 9, name: "John Elsass" },
      ],
      Designation: [
        { id: 1, name: "Medical Supplies" },
        { id: 2, name: "Laboratory" },
        { id: 3, name: "Cleaning Services" },
        { id: 4, name: "Medical Equipment Maintenance" },
        { id: 5, name: "Staff Salaries & Wages" },
        { id: 6, name: "Utilities" },
        { id: 7, name: "Software & Licensing" },
        { id: 8, name: "Facility Rent" },
        { id: 9, name: "Waste Disposal Services" },
        { id: 10, name: "Insurance Premiums" },
      ],
      Department: [
        { id: 1, name: "PayPal" },
        { id: 2, name: "Cheque" },
        { id: 3, name: "Debit Card" },
      ],
      Amount: [
        { id: 1, name: "$501 - $1000" },
        { id: 2, name: "$501 - $1100" },
        { id: 3, name: "$701 - $1200" },
      ],
      Status: [
        { id: 1, name: "Approved" },
        { id: 2, name: "Rejected" },
        { id: 3, name: "New" },
        { id: 4, name: "Pending" },
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
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
          record.IncomeName.toLowerCase().includes(query) ||
          record.Amount.toLowerCase().includes(query) ||
          record.Date.toLowerCase().includes(query) ||
          record.ReceivedFrom.toLowerCase().includes(query) ||
          record.PaymentMethod.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
