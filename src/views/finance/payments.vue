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
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Payments
            <span
              class="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1"
              >Total Payments : 565</span
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
            data-bs-target="#add_new_payment"
            ><i class="ti ti-plus me-1"></i>New Payment
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
                      <label class="form-label mb-1">Patient</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
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
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Practioner</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selectedOne"
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
                    <vue3-select
                      v-model="selectedTwo"
                      :options="DesiApp"
                      placeholder="Select"
                    />
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Payment Method</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selectedThree"
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
                      v-model="selectedFour"
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
                      v-model="selectedFive"
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
            <template v-if="column.key === 'InvoiceID'">
              <div>
                <a href="">{{ record.InvoiceID }}</a>
              </div>
            </template>
            <template v-if="column.key === 'Patient'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="product"
                    class="rounded-circle"
                  />
                </a>
                <a href="javascript:void(0);" class="text-dark fw-semibold"
                  >{{ record.Patient }}
                </a>
              </div>
            </template>
            <template v-if="column.key === 'Doctor'">
              <div class="d-flex align-items-center">
                <router-link to="/doctors/doctor-details" class="avatar me-2">
                  <img
                    :src="getImageUrlOne(record.DoctorImage)"
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
                  <span class="fs-13 d-block">{{ record.Position }}</span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'PaidDate'">
              <div class="text-dark">{{ record.PaidDate }}</div>
            </template>
            <template v-if="column.key === 'Amount'">
              <div class="fw-semibold text-dark">{{ record.Amount }}</div>
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
                      record.Status === 'Paid',
                    'badge-soft-warning rounded text-warning border border-warning':
                      record.Status === 'Partially Paid',
                    'badge-soft-danger rounded text-danger border border-danger':
                      record.Status === 'Unpaid',
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
                      data-bs-target="#edit_new_payment"
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
  <div class="modal fade" id="add_new_payment">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">New Payment</h5>
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
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Invoice ID <span class="text-danger">*</span></label
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
                  >Paid Date<span class="text-danger">*</span></label
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

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Patient Name<span class="text-danger">*</span></label
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
                              src="@/assets/img/users/user-05.jpg"
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
                              src="@/assets/img/users/user-06.jpg"
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
                              src="@/assets/img/users/user-07.jpg"
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
                              src="@/assets/img/users/user-08.jpg"
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
                              src="@/assets/img/users/user-09.jpg"
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
                              src="@/assets/img/users/user-10.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >John Elsass
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Doctor Name<span class="text-danger">*</span></label
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
                              src="@/assets/img/doctors/doctor-01.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.Mick Thompson
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
                          >Dr.Sarah Johnson
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
                          >Dr.Emily Carter
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
                          >Dr.David Lee
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-05.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.Anna Kim
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-06.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.John Smith
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-07.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.Lisa White
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-08.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.Patrica Brown
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-09.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.Rachel Green
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-10.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.Michael Smith
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Total Amount<span class="text-danger">*</span></label
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

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Payment Status<span class="text-danger">*</span></label
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

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Other Information <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <textarea class="form-control" rows="4"></textarea>
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
            Add New Payment
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add Expense  -->

  <!-- Start Edit Expense -->
  <div class="modal fade" id="edit_new_payment">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">Edit Payment</h5>
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
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Invoice ID <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" value="#INV0025" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Paid Date<span class="text-danger">*</span></label
                >
                <div class="input-group position-relative">
                  <a-date-picker
                    v-model="valueThree"
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

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Patient Name<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    James carter
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

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Doctor Name<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    Dr.Mick Thompson
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
                              src="@/assets/img/doctors/doctor-01.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.Mick Thompson
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
                          >Dr.Sarah Johnson
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
                          >Dr.Emily Carter
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
                          >Dr.David Lee
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-05.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.Anna Kim
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-06.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.John Smith
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-07.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.Lisa White
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-08.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.Patrica Brown
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-09.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.Rachel Green
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/doctors/doctor-10.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Dr.Michael Smith
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Total Amount<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    $800
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

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Payment Status<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    Paid
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

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Other Information <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <textarea class="form-control" rows="4"> </textarea>
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
    title: "Invoice ID",
    dataIndex: "InvoiceID",
    key: "InvoiceID",
    sorter: {
      compare: (a, b) => (a.InvoiceID.toLowerCase() > b.InvoiceID.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Patient",
    dataIndex: "Patient",
    key: "Patient",
    sorter: {
      compare: (a, b) => (a.Patient.toLowerCase() > b.Patient.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Doctor",
    dataIndex: "Doctor",
    key: "Doctor",
    sorter: {
      compare: (a, b) => (a.Doctor.toLowerCase() > b.Doctor.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Paid Date",
    dataIndex: "PaidDate",
    key: "PaidDate",
    sorter: {
      compare: (a, b) => (a.PaidDate.toLowerCase() > b.PaidDate.toLowerCase() ? -1 : 1),
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
    InvoiceID: "#INV0025",
    Patient: "James Adair",
    Image: "user-01.jpg",
    DoctorImage: "doctor-01.jpg",
    Doctor: "Dr. Anna Kim",
    Position: "Psychiatrist",
    PaidDate: "30 Apr 2025",
    Amount: "$800",
    PaymentMethod: "PayPal",
    Status: "Paid",
  },
  {
    InvoiceID: "#INV0024",
    Patient: "Emily Johnson",
    Image: "user-02.jpg",
    DoctorImage: "doctor-02.jpg",
    Doctor: "Dr.Sarah Johnson",
    Position: "Orthopedic Surgeon",
    PaidDate: "15 Apr 2025",
    Amount: "$930",
    PaymentMethod: "Debit Card",
    Status: "Partially Paid",
  },
  {
    InvoiceID: "#INV0023",
    Patient: "Robert Mitchell",
    Image: "user-03.jpg",
    DoctorImage: "doctor-03.jpg",
    Doctor: "Dr.Emily Carter",
    Position: "Pediatrician",
    PaidDate: "02 Apr 2025",
    Amount: "$850",
    PaymentMethod: "Cheque",
    Status: "Unpaid",
  },
  {
    InvoiceID: "#INV0022",
    Patient: "Sophia Miller",
    Image: "user-04.jpg",
    DoctorImage: "doctor-04.jpg",
    Doctor: "Dr.David Lee",
    Position: "Gynecologist",
    PaidDate: "27 Mar 2025",
    Amount: "$700",
    PaymentMethod: "Debit Card",
    Status: "Paid",
  },
  {
    InvoiceID: "#INV0021",
    Patient: "Daniel Anderson",
    Image: "user-05.jpg",
    DoctorImage: "doctor-05.jpg",
    Doctor: "Dr.Anna Kim",
    Position: "Psychiatrist",
    PaidDate: "12 Mar 2025",
    Amount: "$650",
    PaymentMethod: "PayPal",
    Status: "Partially Paid",
  },
  {
    InvoiceID: "#INV0020",
    Patient: "Olivia Davis",
    Image: "user-06.jpg",
    DoctorImage: "doctor-06.jpg",
    Doctor: "Dr. John Smith",
    Position: "Neurosurgeon",
    PaidDate: "05 Mar 2025",
    Amount: "$430",
    PaymentMethod: "Cheque",
    Status: "Unpaid",
  },
  {
    InvoiceID: "#INV0019",
    Patient: "Michael Thompson",
    Image: "user-07.jpg",
    DoctorImage: "doctor-07.jpg",
    Doctor: "Dr.Lisa White",
    Position: "Oncologist",
    PaidDate: "24 Feb 2025",
    Amount: "$300",
    PaymentMethod: "Debit Card",
    Status: "Paid",
  },
  {
    InvoiceID: "#INV0018",
    Patient: "Isabella Wilson",
    Image: "user-08.jpg",
    DoctorImage: "doctor-08.jpg",
    Doctor: "Dr. Patricia Brown",
    Position: "Pulmonologist",
    PaidDate: "16 Feb 2025",
    Amount: "$450",
    PaymentMethod: "Cheque",
    Status: "Unpaid",
  },
  {
    InvoiceID: "#INV0017",
    Patient: "Michael Trade",
    Image: "user-09.jpg",
    DoctorImage: "doctor-09.jpg",
    Doctor: "Dr. Rachel Green",
    Position: "Urologist",
    PaidDate: "01 Feb 2025",
    Amount: "$570",
    PaymentMethod: "Debit Card",
    Status: "Paid",
  },
  {
    InvoiceID: "#INV0016",
    Patient: "Ava Robinson",
    Image: "user-10.jpg",
    DoctorImage: "doctor-10.jpg",
    Doctor: "Dr.Michael Smith",
    Position: "Cardiologist",
    PaidDate: "25 Jan 2025",
    Amount: "$800",
    PaymentMethod: "PayPal",
    Status: "Unpaid",
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
      selectedFive: [],
      Designation: [
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
      Doctor: [
        { id: 1, name: "Dr.Mick Thompson" },
        { id: 2, name: "Dr.Sarah Johnson" },
        { id: 3, name: "Dr.Emily Carter" },
        { id: 4, name: "Dr.David Lee" },
        { id: 5, name: "Dr.Anna Kim" },
        { id: 6, name: "Dr.John Smith" },
        { id: 7, name: "Dr.Lisa White" },
        { id: 8, name: "Dr.Patrica Brown" },
        { id: 9, name: "Dr.Rachel Green" },
        { id: 10, name: "Dr.Michael Smith" },
      ],
      DesiApp: [
        { label: "Select", value: "Select" },
        { label: "Cardiologist", value: "Cardiologist" },
        { label: "Orthopedic Surgeon", value: "Orthopedic Surgeon" },
        { label: "Pediatrician", value: "Pediatrician" },
        { label: "Gynecologist", value: "Gynecologist" },
        { label: "Psychiatrist", value: "Psychiatrist" },
        { label: "Neurosurgeon", value: "Neurosurgeon" },
        { label: "Oncologist", value: "Oncologist" },
        { label: "Dr. Patrica Brown", value: "Dr. Patrica Brown" },
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
        { id: 1, name: "Paid" },
        { id: 2, name: "Options Enhanced" },
        { id: 3, name: "New" },
        { id: 4, name: "Pending" },
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
    },
    getImageUrlOne(imageName) {
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
          record.InvoiceID.toLowerCase().includes(query) ||
          record.Patient.toLowerCase().includes(query) ||
          record.Doctor.toLowerCase().includes(query) ||
          record.PaidDate.toLowerCase().includes(query) ||
          record.Position.toLowerCase().includes(query) ||
          record.Amount.toLowerCase().includes(query) ||
          record.PaymentMethod.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
