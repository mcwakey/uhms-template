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
          <h4 class="fw-semibold mb-0">Appointment</h4>
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
              to="/appointments/appointments-list"
              class="bg-light rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-list fs-14 text-body"></i
            ></router-link>
            <router-link
              to="/appointments/appointment-calendar"
              class="bg-white rounded p-1 d-flex align-items-center justify-content-center"
            >
              <i class="ti ti-calendar-event fs-14 text-body"></i>
            </router-link>
          </div>

          <router-link
            to="/appointments/new-appointment"
            class="btn btn-primary ms-2 fs-13 btn-md"
            ><i class="ti ti-plus me-1"></i> New Appointment
          </router-link>
        </div>
      </div>
      <!-- End Page Header -->

      <!--  Start Filter -->
      <div class="d-flex align-items-center justify-content-between flex-wrap">
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

          <div class="d-flex right-content align-items-center flex-wrap mb-3">
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

        <div
          class="d-flex table-dropdown mb-3 right-content align-items-center flex-wrap row-gap-3"
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
                      <label class="form-label">Patient</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select <i class="ti ti-chevron-down ms-auto"></i>
                      </a>
                      <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div class="mb-3">
                          <div class="input-icon-start input-icon position-relative">
                            <span class="input-icon-addon fs-12">
                              <i class="ti ti-search"></i>
                            </span>
                            <input
                              type="text"
                              class="form-control form-control-md"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul class="mb-3">
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-xs rounded-circle me-2"
                                ><img
                                  src="@/assets/img/users/user-33.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Alberto Ripley
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-xs rounded-circle me-2"
                                ><img
                                  src="@/assets/img/users/user-12.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Bernard Griffith
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-xs rounded-circle me-2"
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
                              <span class="avatar avatar-xs rounded-circle me-2"
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
                      <label class="form-label">Doctor</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select <i class="ti ti-chevron-down ms-auto"></i>
                      </a>
                      <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div class="mb-3">
                          <div class="input-icon-start input-icon position-relative">
                            <span class="input-icon-addon fs-12">
                              <i class="ti ti-search"></i>
                            </span>
                            <input
                              type="text"
                              class="form-control form-control-md"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul class="mb-3">
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-xs rounded-circle me-2"
                                ><img
                                  src="@/assets/img/doctors/doctor-01.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Dr. Mick Thompson
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-xs rounded-circle me-2"
                                ><img
                                  src="@/assets/img/doctors/doctor-02.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Dr. Sarah Johnson
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-xs rounded-circle me-2"
                                ><img
                                  src="@/assets/img/doctors/doctor-03.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Dr. Emily Carter
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-xs rounded-circle me-2"
                                ><img
                                  src="@/assets/img/doctors/doctor-04.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Dr. David Lee
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-xs rounded-circle me-2"
                                ><img
                                  src="@/assets/img/doctors/doctor-05.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Dr. Anna Kim
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
                      <label class="form-label">Designation</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select <i class="ti ti-chevron-down ms-auto"></i>
                      </a>
                      <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div class="mb-3">
                          <div class="input-icon-start input-icon position-relative">
                            <span class="input-icon-addon fs-12">
                              <i class="ti ti-search"></i>
                            </span>
                            <input
                              type="text"
                              class="form-control form-control-md"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul class="mb-3">
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Cardiologist
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Orthopedic Surgeon
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Pediatrician
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Gynecologist
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Psychiatrist
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Neurosurgeon
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Oncologist
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Pulmonologist
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Urologist
                            </label>
                          </li>
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Dermatologist
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
                      <label class="form-label">Mode</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select <i class="ti ti-chevron-down ms-auto"></i>
                      </a>
                      <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div class="mb-3">
                          <div class="input-icon-start input-icon position-relative">
                            <span class="input-icon-addon fs-12">
                              <i class="ti ti-search"></i>
                            </span>
                            <input
                              type="text"
                              class="form-control form-control-md"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul class="mb-3">
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              In Person
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Online
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
                    <label class="form-label mb-1 text-dark fs-14 fw-medium"
                      >Date<span class="text-danger">*</span></label
                    >
                    <div class="input-icon-end position-relative">
                      <input
                        type="text"
                        class="form-control bookingrange"
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
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select <i class="ti ti-chevron-down ms-auto"></i>
                      </a>
                      <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div class="mb-3">
                          <div class="input-icon-start input-icon position-relative">
                            <span class="input-icon-addon fs-12">
                              <i class="ti ti-search"></i>
                            </span>
                            <input
                              type="text"
                              class="form-control form-control-md"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul class="mb-3">
                          <li class="mb-1">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Checked Out
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Checked In
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Cancelled
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Schedule
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Confirmed
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
            <template v-if="column.key === 'Patient'">
              <div class="d-flex align-items-center">
                <router-link to="/patients/patient-details" class="avatar avatar-md me-2">
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="product"
                    class="rounded-circle"
                  />
                </router-link>
                <router-link to="/patients/patient-details" class="text-dark fw-semibold"
                  >{{ record.Patient }}
                  <span class="text-body fs-13 fw-normal d-block">
                    {{ record.Number }}
                  </span>
                </router-link>
              </div>
            </template>
            <template v-if="column.key === 'Doctor'">
              <div class="d-flex align-items-center">
                <router-link
                  to="/doctors/doctor-details"
                  class="avatar me-2 flex-shrink-0"
                >
                  <img
                    :src="getImageUrlOne(record.DoctorImage)"
                    alt="img"
                    class="rounded-circle"
                  />
                </router-link>
                <div>
                  <h6 class="fs-14 mb-1 text-truncate">
                    <router-link to="/doctors/doctor-details" class="fw-semibold">{{
                      record.Doctor
                    }}</router-link>
                  </h6>
                  <p class="mb-0 fs-13 text-truncate">{{ record.Job }}</p>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class="fw-medium fs-13"
                :class="[
                  'badge',
                  {
                    'badge badge-soft-info rounded text-info':
                      record.Status === 'Checked Out',
                    'badge badge-soft-warning rounded text-warning':
                      record.Status === 'Checked In',
                    'badge badge-soft-danger rounded text-danger':
                      record.Status === 'Cancelled',
                    'badge badge-soft-success rounded text-success':
                      record.Status === 'Confirmed',
                    'badge badge-soft-primary rounded text-primary':
                      record.Status === 'Schedule',
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
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#view_details"
                      >View</a
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

  <!-- Start View Details -->
  <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="view_details">
    <div class="offcanvas-header d-block pb-0 px-0">
      <div
        class="border-bottom d-flex align-items-center justify-content-between pb-3 px-3"
      >
        <h5 class="offcanvas-title fs-18 fw-bold">
          Appointment Details
          <span
            class="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2"
            >#AP544658</span
          >
        </h5>
        <button
          type="button"
          class="btn-close custom-btn-close opacity-100"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="ti ti-x bg-white fs-16 text-dark"></i>
        </button>
      </div>
    </div>
    <div class="offcanvas-body pt-0 px-0">
      <h6 class="bg-light py-2 px-3 fw-bold">When & Where</h6>
      <div class="px-3 my-4">
        <div
          class="bg-light p-3 mb-3 border rounded-3 d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <a href="javascript:void(0);" class="avatar avatar-md me-2">
              <img
                src="@/assets/img/doctors/doctor-03.jpg"
                alt="product"
                class="rounded-circle"
              />
            </a>
            <a href="javascript:void(0);" class="text-dark fw-semibold"
              >Dr. Emily Carter
              <span class="text-body fs-13 fw-normal d-block">Pediatrician </span>
            </a>
          </div>
          <div class="flex-shrink-0">
            <a
              href="javascript:void(0);"
              class="btn btn-outline-white bg-white fs-14 d-inline-flex border rounded-2 p-1 me-1"
            >
              <i class="ti ti-brand-hipchat"></i>
            </a>
            <a
              href="javascript:void(0);"
              class="btn btn-outline-white bg-white shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
            >
              <i class="ti ti-video"></i>
            </a>
          </div>
        </div>
        <p
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Appointment On <span class="text-body fw-normal"> Saturday, 25 Apr 2025 </span>
        </p>
        <p
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Time <span class="text-body fw-normal"> 09:00 AM - 11:00 AM </span>
        </p>
        <p
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Location <span class="text-body fw-normal">Newyork , USA </span>
        </p>
        <p
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Appointment Type <span class="text-body fw-normal"> Online Consultation </span>
        </p>
        <div
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Patient Details
          <div class="text-body fw-normal d-flex align-items-center">
            <div class="avatar avatar-xs flex-shrink-0">
              <img
                src="@/assets/img/users/avatar-2.jpg"
                alt=""
                class="rounded-circle me-1 flex-shrink-0"
              />
            </div>
            James Adrian
          </div>
        </div>
      </div>
      <h6 class="bg-light py-2 px-3 text-dark fw-bold">Appointment Details</h6>
      <div class="px-3 my-4">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center">
            Telehealth
            <label class="d-flex align-items-center form-switch ps-1">
              <input class="form-check-input m-0 me-2" type="checkbox" checked />
            </label>
          </div>
          <div>
            <router-link
              to="/appointments/appointment-consultations"
              class="btn-primary btn btn-sm rounded d-flex align-items-center"
            >
              <i class="ti ti-video me-1"></i> Start
            </router-link>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p class="text-dark">Status</p>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="mb-3">
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="true"
                >
                  Pending
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
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <ul class="mb-0 list-style-none">
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Checked Out
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Checked In
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Cancelled
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Scheduled
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add New Appointment-->

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
    title: "Date & Time",
    dataIndex: "DateTime",
    key: "DateTime",
    sorter: {
      compare: (a, b) => (a.DateTime.toLowerCase() > b.DateTime.toLowerCase() ? -1 : 1),
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
    title: "Mode",
    dataIndex: "Mode",
    key: "Mode",
    sorter: {
      compare: (a, b) => (a.Mode.toLowerCase() > b.Mode.toLowerCase() ? -1 : 1),
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
    DateTime: "30 Apr 2025 - 09:30 AM",
    Patient: "Alberto Ripley",
    Image: "user-01.jpg",
    Number: "+1 56556 54565",
    Doctor: "Dr. Mick Thompson",
    DoctorImage: "doctor-01.jpg",
    Job: "Cardiologist",
    Mode: "In-person",
    Status: "Checked Out",
  },
  {
    DateTime: "15 Apr 2025 - 11:20 AM",
    Patient: "Susan Babin",
    Image: "user-02.jpg",
    Number: "+1 65658 95654",
    Doctor: "Dr. Sarah Johnson",
    DoctorImage: "doctor-02.jpg",
    Job: "Orthopedic Surgeon",
    Mode: "Online",
    Status: "Checked In",
  },
  {
    DateTime: "02 Apr 2025 - 08:15 AM",
    Patient: "Carol Lam",
    Image: "user-03.jpg",
    Number: "+1 55654 56647",
    Doctor: "Dr. Emily Carter",
    DoctorImage: "doctor-03.jpg",
    Job: "Pediatrician",
    Mode: "In-Person",
    Status: "Cancelled",
  },
  {
    DateTime: "27 Mar 2025 - 02:00 PM",
    Patient: "Marsha Noland",
    Image: "user-04.jpg",
    Number: "+1 65668 54558",
    Doctor: "Dr. David Lee",
    DoctorImage: "doctor-04.jpg",
    Number: "Gynecologist",
    Mode: "30 Apr 2025",
    Status: "Schedule",
  },
  {
    DateTime: "12 Mar 2025 - 05:40 PM",
    Patient: "Irma Armstrong",
    Image: "user-05.jpg",
    Number: "+1 45214 66568",
    Doctor: "Dr. Anna Kim",
    DoctorImage: "doctor-05.jpg",
    Job: "Psychiatrist",
    Mode: "Online",
    Status: "Confirmed",
  },
  {
    DateTime: "24 Feb 2025 - 09:20 AM",
    Patient: "Ezra Belcher",
    Image: "user-06.jpg",
    Number: "+1 65895 41247",
    Doctor: "Dr. John Smith",
    DoctorImage: "doctor-06.jpg",
    Job: "Neurosurgeon",
    Mode: "In-Person",
    Status: "Cancelled",
  },
  {
    DateTime: "16 Feb 2025 - 11:40 AM",
    Patient: "Glen Lentz",
    Image: "user-07.jpg",
    Number: "+1 62458 45845",
    Doctor: "Dr. Lisa White",
    DoctorImage: "doctor-07.jpg",
    Job: "Oncologist",
    Mode: "Online",
    Status: "Confirmed",
  },
  {
    DateTime: "01 Feb 2025 - 04:00 PM",
    Patient: "Bernard Griffith",
    Image: "user-08.jpg",
    Number: "+1 61422 45214",
    Doctor: "Dr. Patricia Brown",
    DoctorImage: "doctor-08.jpg",
    Job: "Pulmonologist",
    Mode: "Online",
    Status: "Checked Out",
  },
  {
    DateTime: "25 Jan 2025 - 03:10 PM",
    Patient: "John Elsass",
    Image: "user-09.jpg",
    Number: "+1 47851 26371",
    Doctor: "Dr. Rachel Green",
    DoctorImage: "doctor-09.jpg",
    Job: "Urologist",
    Mode: "Online",
    Status: "Schedule",
  },
  {
    DateTime: "12 Jan 2025 - 03:10 PM",
    Patient: "John Albert",
    Image: "user-10.jpg",
    Number: "+1 47851 35267",
    Doctor: "Dr. Michael Smith",
    DoctorImage: "doctor-10.jpg",
    Job: "Cardiologist",
    Mode: "In-Person",
    Status: "Cancelled",
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
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
    },
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/img/doctors/${imageName}`, import.meta.url).href;
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.DateTime.toLowerCase().includes(query) ||
          record.Patient.toLowerCase().includes(query) ||
          record.Doctor.toLowerCase().includes(query) ||
          record.Job.toLowerCase().includes(query) ||
          record.Mode.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
