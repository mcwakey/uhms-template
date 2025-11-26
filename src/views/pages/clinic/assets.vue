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
            Assets
            <span
              class="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1"
              >Asset List : 565</span
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
            data-bs-target="#add_asset"
            ><i class="ti ti-plus me-1"></i>Add Asset
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

          <div class="d-flex right-content align-items-center flex-wrap mb-3">
            <div class="input-icon-start position-relative">
              <span class="input-icon-addon text-dark">
                <i class="ti ti-calendar-event"></i>
              </span>
              <input
                type="text"
                class="form-control form-control-sm bookingrange"
                ref="dateRangeInput"
              />
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
                      <label class="form-label">Asset User</label>
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
                      <label class="form-label">Assets</label>
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
                              VitalScan Monitor
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              MediScope
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              ThermoTrack
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              InjecSure
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              LabMate
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              First Aid Hub
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              MediCart
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              SterilBox
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              MediLogix
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
                      <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div class="filter-range">
                          <input type="text" id="range_03" />
                          <p>Range : <span class="text-gray-9">$200 - $5695</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <label class="form-label mb-1 text-dark fs-14 fw-medium"
                      >Date<span class="text-danger">*</span></label
                    >
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
                              Approved
                            </label>
                          </li>
                          <li class="mb-0">
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              Pending
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
            <template v-if="column.key === 'AssetID'">
              <div>
                <a href="">{{ record.AssetID }}</a>
              </div>
            </template>
            <template v-if="column.key === 'AssetUser'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="product"
                    class="rounded-circle"
                  />
                </a>
                <a href="javascript:void(0);" class="text-dark fw-semibold"
                  >{{ record.AssetUser }}
                </a>
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
                    'badge-soft-warning rounded text-warning border border-warning':
                      record.Status === 'Returned',
                    'badge-soft-danger rounded text-danger border border-danger':
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
                      data-bs-target="#edit_asset"
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

  <!-- Start Add Asset -->
  <div class="modal fade" id="add_asset">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">Add Asset</h5>
          <button
            type="button"
            class="btn-close custom-btn-close opacity-100"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x bg-white fs-16 text-dark"></i>
          </button>
        </div>
        <div class="modal-body">
          <!-- start row -->
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Asset Name <span class="text-danger">*</span></label
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
                  >Asset User <span class="text-danger">*</span></label
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
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <ul class="mb-3 list-style-none">
                      <li class="list-none">
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/users/user-02.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Emily Clark
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/profiles/avatar-01.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >John Carter
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/profiles/avatar-16.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Sophia White
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/profiles/avatar-15.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Michael Johnson
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/profiles/avatar-14.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Olivia Harris
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/profiles/avatar-01.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >David Anderson
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
                  >Purchase Date <span class="text-danger">*</span></label
                >
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
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Purchase From <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  Manufacturer <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  Model <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  Serial Number <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  Supplier<span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <vue3-select
                    v-model="select"
                    :options="SupRecent"
                    placeholder="New one"
                  />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  Condition  <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <vue3-select
                    v-model="selectTwo"
                    :options="SupRetOne"
                    placeholder="Good one"
                  />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  warranty <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <label class="form-label mb-1 text-dark fs-14 fw-medium"
                >Value <span class="text-danger">* </span>
              </label>
              <div class="input-group">
                <span class="input-group-text bg-transparent text-dark fs-14">$</span>
                <input type="text" class="form-control" placeholder="0" />
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  Status <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <vue3-select
                    v-model="selectThree"
                    :options="StatValu"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <div>
                  <label class="form-label mb-1 text-dark fs-14 fw-medium"
                    >Description <span class="text-danger">*</span>
                  </label>
                  <textarea
                    rows="4"
                    class="form-control rounded"
                    placeholder="Description "
                  >
                  </textarea>
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
            Add Asset
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add Asset  -->

  <!-- Start Edit Asset -->
  <div class="modal fade" id="edit_asset">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">Edit Asset</h5>
          <button
            type="button"
            class="btn-close custom-btn-close opacity-100"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x bg-white fs-16 text-dark"></i>
          </button>
        </div>
        <div class="modal-body">
          <!-- start row -->
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Asset Name <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" value="VitalScan Monitor" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Asset User <span class="text-danger">*</span></label
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
                          placeholder="Emily clerk"
                        />
                      </div>
                    </div>
                    <ul class="mb-3 list-style-none">
                      <li class="list-none">
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/users/user-02.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Emily Clark
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/profiles/avatar-01.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >John Carter
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/profiles/avatar-16.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Sophia White
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/profiles/avatar-15.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Michael Johnson
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/profiles/avatar-14.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >Olivia Harris
                        </label>
                      </li>
                      <li>
                        <label
                          class="dropdown-item px-2 d-flex align-items-center text-dark"
                        >
                          <input class="form-check-input m-0 me-2" type="checkbox" />
                          <span class="avatar avatar-sm rounded-circle me-2"
                            ><img
                              src="@/assets/img/profiles/avatar-01.jpg"
                              class="flex-shrink-0 rounded-circle"
                              alt="img" /></span
                          >David Anderson
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
                  >Purchase Date <span class="text-danger">*</span></label
                >
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
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Purchase From <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" value="2547" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  Manufacturer <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Endosys" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  Model <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="CareKIT Pro" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  Serial Number <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="ENW12547E789" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  Supplier<span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <vue3-select
                    v-model="selectFour"
                    :options="SuppSel"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  Condition  <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <vue3-select
                    v-model="selectFive"
                    :options="CondiSel"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  warranty <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" value="2 years" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <label class="form-label mb-1 text-dark fs-14 fw-medium"
                >Value <span class="text-danger">* </span>
              </label>
              <div class="input-group">
                <span class="input-group-text bg-transparent text-dark fs-14">$</span>
                <input type="text" class="form-control" placeholder="0" value="100" />
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium">
                  Status <span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <vue3-select
                    v-model="selectSix"
                    :options="StatSele"
                    placeholder="Approved"
                  />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <div>
                  <label class="form-label mb-1 text-dark fs-14 fw-medium"
                    >Description <span class="text-danger">*</span>
                  </label>
                  <textarea rows="4" class="form-control rounded" placeholder="">
 Evaluates the Autonomic Nervous System (ANS) to help identify disorders such as sudden death risk, silent heart attacks, hypertension, and syncope.​</textarea
                  >
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
            Add Asset
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Edit Asset  -->

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
    title: "Asset ID",
    dataIndex: "AssetID",
    key: "AssetID",
    sorter: {
      compare: (a, b) => (a.AssetID.toLowerCase() > b.AssetID.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Asset User",
    dataIndex: "AssetUser",
    key: "AssetUser",
    sorter: {
      compare: (a, b) => (a.AssetUser.toLowerCase() > b.AssetUser.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Assets",
    dataIndex: "Assets",
    key: "Assets",
    sorter: {
      compare: (a, b) => (a.Assets.toLowerCase() > b.Assets.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Purchase Date",
    dataIndex: "PurchaseDate",
    key: "PurchaseDate",
    sorter: {
      compare: (a, b) =>
        a.PurchaseDate.toLowerCase() > b.PurchaseDate.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Warrenty",
    dataIndex: "Warrenty",
    key: "Warrenty",
    sorter: {
      compare: (a, b) => (a.Warrenty.toLowerCase() > b.Warrenty.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Warranty End",
    dataIndex: "WarrantyEnd",
    key: "WarrantyEnd",
    sorter: {
      compare: (a, b) =>
        a.WarrantyEnd.toLowerCase() > b.WarrantyEnd.toLowerCase() ? -1 : 1,
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
    AssetID: "#AST001",
    AssetUser: "James Adair",
    Image: "user-01.jpg",
    Assets: "VitalScan Monitor",
    PurchaseDate: "30 Mar 2025",
    Warrenty: "3 Years",
    WarrantyEnd: "30 Mar 2028",
    Amount: "$2587",
    Status: "Approved",
  },
  {
    AssetID: "#AST002",
    AssetUser: "Adam Milne",
    Image: "user-02.jpg",
    Assets: "MediScope",
    PurchaseDate: "28 Mar 2025",
    Warrenty: "10 Years",
    WarrantyEnd: "28 Mar 2028",
    Amount: "$47810",
    Status: "Approved",
  },
  {
    AssetID: "#AST003",
    AssetUser: "Richard Clark",
    Image: "user-03.jpg",
    Assets: "ThermoTrack",
    PurchaseDate: "20 Mar 2025",
    Warrenty: "1 Years",
    WarrantyEnd: "20 Mar 2028",
    Amount: "$54789",
    Status: "Pending",
  },
  {
    AssetID: "#AST004",
    AssetUser: "Robert Reid",
    Image: "user-04.jpg",
    Assets: "InjecSure",
    PurchaseDate: "15 Mar 2025",
    Warrenty: "3 Years",
    WarrantyEnd: "15 Mar 2029",
    Amount: "$21770",
    Status: "Pending",
  },
  {
    AssetID: "#AST005",
    AssetUser: "Dottie Jeny",
    Image: "user-05.jpg",
    Assets: "LabMate",
    PurchaseDate: "07 Mar 2025",
    Warrenty: "5 Years",
    WarrantyEnd: "07 Mar 2028",
    Amount: "$32580",
    Status: "Approved",
  },
  {
    AssetID: "#AST006",
    AssetUser: "Cheryl Bilodeau",
    Image: "user-06.jpg",
    Assets: "MicroView",
    PurchaseDate: "27 Feb 2025",
    Warrenty: "Up to 5Years",
    WarrantyEnd: "27 Feb 2028",
    Amount: "$32547",
    Status: "Approved",
  },
  {
    AssetID: "#AST007",
    AssetUser: "Valerie Padgett",
    Image: "user-07.jpg",
    Assets: "First Aid Hub",
    PurchaseDate: "20 Feb 2025",
    Warrenty: "2 Years",
    WarrantyEnd: "20 Feb 2027",
    Amount: "$54100",
    Status: "Returned",
  },
  {
    AssetID: "#AST008",
    AssetUser: "Diane Nash",
    Image: "user-08.jpg",
    Assets: "MediCart",
    PurchaseDate: "12 Feb 2025",
    Warrenty: "10 Years",
    WarrantyEnd: "12 Feb 2035",
    Amount: "$246798",
    Status: "Approved",
  },
  {
    AssetID: "#AST009",
    AssetUser: "Sally Cavazos",
    Image: "user-09.jpg",
    Assets: "SterilBox",
    PurchaseDate: "21 Jan 2025",
    Warrenty: "5 Years",
    WarrantyEnd: "21 Jan 2028",
    Amount: "$12011",
    Status: "Approved",
  },
  {
    AssetID: "#AST0010",
    AssetUser: "Forest Heath",
    Image: "user-10.jpg",
    Assets: "MediLogix",
    PurchaseDate: "15 Jan 2025",
    Warrenty: "2 Years",
    WarrantyEnd: "15 Jan 2028",
    Amount: "$35421",
    Status: "Pending",
  },
];
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
const valueOne = ref();
export default {
  data() {
    return {
      searchQuery: "",
      data,
      columns,
      valueOne,
      select: null,
      selectOne: null,
      selectTwo: null,
      selectThree: null,
      selectFour: null,
      selectFive: null,
      selectSix: null,
      SupRetOne: [
        { label: "Good one", value: "Good one" },
        { label: "Old one", value: "Old one" },
        { label: "Recent one", value: "Recent one" },
      ],
      StatValu: [
        { label: "Good one", value: "Good one" },
        { label: "Old one", value: "Old one" },
        { label: "Recent one", value: "Recent one" },
      ],
      StatSele: [
        { label: "Approved", value: "Approved" },
        { label: "Pending", value: "Pending" },
      ],
      SupRecent: [
        { label: "Endosys Customization", value: "Endosys Customization" },
        { label: "New one", value: "New one" },
        { label: "Old one", value: "Old one" },
        { label: "Recent one", value: "Recent one" },
      ],
      SuppSel: [
        { label: "Endosys Customization", value: "Endosys Customization" },
        { label: "New one", value: "New one" },
        { label: "Old one", value: "Old one" },
        { label: "Recent one", value: "Recent one" },
      ],
      CondiSel: [
        { label: "Good one", value: "Good one" },
        { label: "Old one", value: "Old one" },
        { label: "Recent one", value: "Recent one" },
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
          record.AssetID.toLowerCase().includes(query) ||
          record.AssetUser.toLowerCase().includes(query) ||
          record.Assets.toLowerCase().includes(query) ||
          record.PurchaseDate.toLowerCase().includes(query) ||
          record.Warrenty.toLowerCase().includes(query) ||
          record.WarrantyEnd.toLowerCase().includes(query) ||
          record.Amount.toLowerCase().includes(query) ||
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
