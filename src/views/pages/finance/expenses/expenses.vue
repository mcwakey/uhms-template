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
            Expenses
            <span
              class="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1"
              >Total Expenses : 565</span
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
            data-bs-target="#add_new_expense"
            ><i class="ti ti-plus me-1"></i>New Expense
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
                      <label class="form-label mb-1">Purchased By</label>
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
            <template v-if="column.key === 'Expense'">
              <div>
                <a href="">{{ record.Expense }}</a>
              </div>
            </template>
            <template v-if="column.key === 'Category'">
              <div class="text-dark">{{ record.Category }}</div>
            </template>
            <template v-if="column.key === 'Amount'">
              <div class="fw-semibold text-dark">{{ record.Amount }}</div>
            </template>
            <template v-if="column.key === 'Date'">
              <div class="text-dark">{{ record.Date }}</div>
            </template>
            <template v-if="column.key === 'PurchasedBy'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="product"
                    class="rounded-circle"
                  />
                </a>
                <a href="javascript:void(0);" class="text-dark fw-semibold"
                  >{{ record.PurchasedBy }}
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
                    'badge-soft-danger rounded text-danger border border-danger':
                      record.Status === 'Rejected',
                    'badge-soft-success rounded text-success border border-success':
                      record.Status === 'Approved',
                    'badge-soft-warning rounded text-warning border border-warning':
                      record.Status === 'Pending',
                    'badge-soft-primary rounded text-primary border border-primary':
                      record.Status === 'New',
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
                      data-bs-target="#edit_new_expense"
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

  <!-- Start Add Expense -->
  <div class="modal fade" id="add_new_expense">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">New Expense</h5>
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
                  >Expense Name<span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Category<span class="text-danger">*</span></label
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
                        Medical Supplies
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
                        Cleaning Services
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Medical Equipment Maintenance
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
                        Staff Salaries & Wages
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Utilities
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Software & Licensing
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
                        Facility Rent
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Waste Disposal Services
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Insurance Premiums
                      </label>
                    </li>
                  </ul>
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
                  <a-date-picker
                    v-model:value="valueTwo"
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
                  >Purchased By<span class="text-danger">*</span></label
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
                          >James Allaire
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
                          >Esther Schmidt
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
                          >Judi Lenahan
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
                          >Robert Reid
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
                          >Dottie Sellers
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
                          >Cheryl Bilodeau
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
                          >Diane Nash
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
                          >Sally Cavazos
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
                          >Forest Heath
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
  <!-- End Add Expense  -->

  <!-- Start Edit Expense -->
  <div class="modal fade" id="edit_new_expense">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">Edit Expense</h5>
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
                  >Expense Name<span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" value="Gloves & Masks" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Category<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    Medical Supplies
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
                        Medical Supplies
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
                        Cleaning Services
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Medical Equipment Maintenance
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
                        Staff Salaries & Wages
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Utilities
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Software & Licensing
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
                        Facility Rent
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Waste Disposal Services
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Insurance Premiums
                      </label>
                    </li>
                  </ul>
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
                    $500
                  </a>
                  <div class="dropdown-menu shadow-lg w-100 dropdown-info p-2">
                    <div class="filter-range">
                      <input type="text" id="range_02" value="$220 - $500" />
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
                  <a-date-picker
                    v-model:value="valueThree"
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
                  >Purchased By<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    James Allaire
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
                          >James Allaire
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
                          >Esther Schmidt
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
                          >Judi Lenahan
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
                          >Robert Reid
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
                          >Dottie Sellers
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
                          >Cheryl Bilodeau
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
                          >Diane Nash
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
                          >Sally Cavazos
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
                          >Forest Heath
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
  <!-- End Edit Expense  -->

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
    title: "Expense",
    dataIndex: "Expense",
    key: "Expense",
    sorter: {
      compare: (a, b) => (a.Expense.toLowerCase() > b.Expense.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Category",
    dataIndex: "Category",
    key: "Category",
    sorter: {
      compare: (a, b) => (a.Category.toLowerCase() > b.Category.toLowerCase() ? -1 : 1),
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
    title: "Purchased By",
    dataIndex: "PurchasedBy",
    key: "PurchasedBy",
    sorter: {
      compare: (a, b) =>
        a.PurchasedBy.toLowerCase() > b.PurchasedBy.toLowerCase() ? -1 : 1,
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
    Expense: "Gloves & Masks",
    Category: "Medical Supplies",
    Amount: "$800",
    Date: "30 Apr 2025",
    Image: "user-01.jpg",
    PurchasedBy: "James Adair",
    PaymentMethod: "PayPal",
    Status: "Approved",
  },
  {
    Expense: "Microscope Parts",
    Category: "Laboratory",
    Amount: "$930",
    Date: "15 Apr 2025",
    Image: "user-02.jpg",
    PurchasedBy: "Esther Schmidt",
    PaymentMethod: "Debit Card",
    Status: "Pending",
  },
  {
    Expense: "Thermometers",
    Category: "Medical Supplies",
    Amount: "$850",
    Date: "02 Apr 2025",
    Image: "user-03.jpg",
    PurchasedBy: "Judi Lenahan",
    PaymentMethod: "Cheque",
    Status: "Approved",
  },
  {
    Expense: "Disinfectant Supplies",
    Category: "Cleaning Services",
    Amount: "$700",
    Date: "27 Mar 2025",
    Image: "user-04.jpg",
    PurchasedBy: "Robert Reid",
    PaymentMethod: "Debit Card",
    Status: "Rejected",
  },
  {
    Expense: "IV Sets",
    Category: "Medical Supplies",
    Amount: "$650",
    Date: "12 Mar 2025",
    Image: "user-12.jpg",
    PurchasedBy: "Dottie Sellers",
    PaymentMethod: "PayPal",
    Status: "New",
  },
  {
    Expense: "Reagent Refill",
    Category: "Laboratory",
    Amount: "$430",
    Date: "05 Mar 2025",
    Image: "user-02.jpg",
    PurchasedBy: "Cheryl Bilodeau",
    PaymentMethod: "Cheque",
    Status: "Rejected",
  },
  {
    Expense: "Syringes & Gauze",
    Category: "Medical Supplies",
    Amount: "$300",
    Date: "24 Feb 2025",
    Image: "user-07.jpg",
    PurchasedBy: "Valerie Padgett",
    PaymentMethod: "Debit Card",
    Status: "New",
  },
  {
    Expense: "Blood Collection Tubes",
    Category: "Laboratory",
    Amount: "$450",
    Date: "16 Feb 2025",
    Image: "user-05.jpg",
    PurchasedBy: "Diane Nash",
    PaymentMethod: "Cheque",
    Status: "Approved",
  },
  {
    Expense: "Bandages & Tapes",
    Category: "Medical Supplies",
    Amount: "$570",
    Date: "01 Feb 2025",
    Image: "user-07.jpg",
    PurchasedBy: "Sally Cavazos",
    PaymentMethod: "Debit Card",
    Status: "New",
  },
  {
    Expense: "Tissue Slides",
    Category: "Laboratory",
    Amount: "$800",
    Date: "25 Jan 2025",
    Image: "user-09.jpg",
    PurchasedBy: "Forest Heath",
    PaymentMethod: "PayPal",
    Status: "Approved",
  },
];
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();
export default {
  data() {
    return {
      searchQuery: "",
      data,
      columns,
      valueOne,
      valueTwo,
      valueThree,
      selected: [],
      selectedOne: [],
      selectedTwo: [],
      selectedThree: [],
      selectedFour: [],
      Doctor: [
        { id: 1, name: "James Allaire" },
        { id: 2, name: "Esther Schmidt" },
        { id: 3, name: "Judi Lenahan" },
        { id: 4, name: "Robert Reid" },
        { id: 5, name: "Dottie Sellers" },
        { id: 6, name: "Cheryl Bilodeau" },
        { id: 7, name: "Diane Nash" },
        { id: 8, name: "Sally Cavazos" },
        { id: 9, name: "Forest Heath" },
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
          record.Expense.toLowerCase().includes(query) ||
          record.Category.toLowerCase().includes(query) ||
          record.Amount.toLowerCase().includes(query) ||
          record.Date.toLowerCase().includes(query) ||
          record.PurchasedBy.toLowerCase().includes(query) ||
          record.PaymentMethod.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
