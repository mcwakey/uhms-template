<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
	   Start Page Content
	========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content" id="profilePage">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Staff<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total Staffs : 565</span
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
            data-bs-target="#add_staff"
            ><i class="ti ti-plus me-1"></i>Add Staff</a
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
                <h4 class="mb-0">Filter</h4>
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
                      <label class="form-label">Staff</label>
                      <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                    </div>
                    <vue-multiselect
                      v-model="selectedOne"
                      :options="Staff"
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
                    <vue-multiselect
                      v-model="selectedTwo"
                      :options="Designation"
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
                      v-model="selectedThree"
                      :options="Role"
                      :multiple="true"
                      label="name"
                      track-by="id"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label mb-1 text-dark fs-14 fw-medium"
                      >Date<span class="text-danger">*</span></label
                    >
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
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle btn btn-lg d-flex align-items-center justify-content-start fs-13 fw-normal rounded p-2 border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select
                      </a>
                      <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                        <div class="filter-range">
                          <input type="text" id="range_03" />
                          <p>
                            Range : <span class="text-gray-9">Range : $200 - $5695</span>
                          </p>
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
                      v-model="selectedFour"
                      :options="Staff"
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
            <template v-if="column.key === 'Staff'">
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
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#view_staff"
                      >{{ record.Staff }}</a
                    >
                  </h6>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class=""
                :class="[
                  'badge',
                  {
                    'badge-soft-success border border-success':
                      record.Status === 'Available',
                    'badge-soft-danger border border-danger':
                      record.Status === 'Unavailable',
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
                      data-bs-target="#view_staff"
                      >View Details</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_staff"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_staff"
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
  <div id="view_staff" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">Staff Details</h5>
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
          <div class="card bg-light">
            <div class="card-body">
              <div class="d-flex align-items-center">
                <div class="me-2">
                  <img
                    src="@/assets/img/users/user-08.jpg"
                    alt="img"
                    class="img-fluid avatar avatar-xxl rounded"
                  />
                </div>
                <div>
                  <span class="text-primary mb-1">#STF020</span>
                  <div class="d-flex align-items-center mb-1">
                    <h5 class="fw-bold mb-0 me-2">James Allaire</h5>
                    <span
                      class="badge badge-soft-success border border-success fw-medium fs-13"
                      >Available</span
                    >
                  </div>
                  <p>Front Office Executive</p>
                </div>
              </div>
            </div>
          </div>
          <!-- end card -->

          <ul class="nav nav-tabs nav-bordered mb-3">
            <li class="nav-item">
              <a
                class="nav-link active"
                href="javascript:void(0);"
                data-bs-toggle="tab"
                data-bs-target="#tab1"
                >Basic Info</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="javascript:void(0);"
                data-bs-toggle="tab"
                data-bs-target="#tab2"
                >Salary Info</a
              >
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane active" id="tab1" role="tabpanel" tabindex="0">
              <!-- start row -->
              <div class="row row-gap-2">
                <div class="col-md-4">
                  <p class="text-dark fs-13 fw-medium mb-0">Gender</p>
                  <p class="fs-13">Male</p>
                </div>
                <!-- end col -->
                <div class="col-md-4">
                  <p class="text-dark fs-13 fw-medium mb-0">Phone Number</p>
                  <p class="fs-13">+1 54546 45648</p>
                </div>
                <!-- end col -->
                <div class="col-md-4">
                  <p class="text-dark fs-13 fw-medium mb-0">Email</p>
                  <p class="fs-13">james@example.com</p>
                </div>
                <!-- end col -->
                <div class="col-md-4">
                  <p class="text-dark fs-13 fw-medium mb-0">Date of Joining</p>
                  <p class="fs-13">12 Dec 2024</p>
                </div>
                <!-- end col -->
                <div class="col-md-4">
                  <p class="text-dark fs-13 fw-medium mb-0">Email</p>
                  <p class="fs-13">james@example.com</p>
                </div>
                <!-- end col -->
                <div class="col-md-4">
                  <p class="text-dark fs-13 fw-medium mb-0">Staff Type</p>
                  <p class="fs-13">Permanent</p>
                </div>
                <!-- end col -->
                <div class="col-md-12">
                  <p class="text-dark fs-13 fw-medium mb-0">Addresss</p>
                  <p class="fs-13">
                    10 Elizabethtown Plaza, Downers Grove, Elizabeth UK07202
                  </p>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <div class="tab-pane" id="tab2" role="tabpanel" tabindex="0">
              <!-- Table List -->
              <div class="table-responsive border bg-white">
                <table class="table table-nowrap">
                  <thead>
                    <tr>
                      <th>Credit Date</th>
                      <th>Amount</th>
                      <th>Salary for</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>13 Jul 2025</td>
                      <td>$4800</td>
                      <td>Jun 2025</td>
                      <td>
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
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>12 Jun 2025</td>
                      <td>$4800</td>
                      <td>May 2025</td>
                      <td>
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
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>15 May 2025</td>
                      <td>$4800</td>
                      <td>Apr 2025</td>
                      <td>
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
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>14 Apr 2025</td>
                      <td>$4800</td>
                      <td>Mar 2025</td>
                      <td>
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
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>13 Mar 2025</td>
                      <td>$4800</td>
                      <td>Feb 2025</td>
                      <td>
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
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>14 Feb 2025</td>
                      <td>$4800</td>
                      <td>Jan 2025</td>
                      <td>
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
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>12 Jan 2025</td>
                      <td>$4800</td>
                      <td>Dec 2024</td>
                      <td>
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
                                data-bs-target="#edit"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- /Table List -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Add Modal -->
  <div id="add_staff" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">New Staff</h5>
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
            <h6 class="fw-bold mb-3">Staff Information</h6>
            <div class="mb-3 d-flex align-items-center">
              <label class="form-label">Profile Image</label>
              <div
                class="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0"
              >
                <i class="ti ti-user-plus fs-16"></i>
                <input type="file" class="form-control image-sign" multiple="" />
                <div
                  class="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1"
                >
                  <a
                    href="javascript:void(0);"
                    class="text-white d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-photo fs-14"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>

            <!-- start row -->
            <div class="row mb-3 border-bottom">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Role<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selected"
                    :options="RoleSele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Designation<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedOne"
                    :options="DesignSele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->

            <h6 class="fw-bold mb-3">Contact Information</h6>

            <!-- start row -->
            <div class="row row-gap-2">
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >Phone Number<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >Email<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >DOB<span class="text-danger ms-1">*</span></label
                  >
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
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >Gender<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedTwo"
                    :options="GenSele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label"
                    >Blood Group<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedThree"
                    :options="BlodSele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">Address 1</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">Address 2</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">Country</label>
                  <vue3-select
                    v-model="selectedFour"
                    :options="CountSele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">State</label>
                  <vue3-select
                    v-model="selectedFive"
                    :options="StateSele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">City</label>
                  <vue3-select
                    v-model="selectedSix"
                    :options="CitySele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">Pincode</label>
                  <input type="text" class="form-control" />
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
              Add Staff
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Edit Modal -->
  <div id="edit_staff" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">Edit Staff</h5>
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
            <h6 class="fw-bold mb-3">Staff Information</h6>
            <div class="mb-3 d-flex align-items-center">
              <label class="form-label me-3">Profile Image</label>
              <div class="profile-container">
                <img src="@/assets/img/users/user-08.jpg" alt="Profile" />
                <div class="overlay-btn">
                  <a href="javascript:void(0);" class="text-white" id="uploadTrigger">
                    <i class="ti ti-photo fs-10"></i>
                  </a>
                </div>
                <input type="file" id="profileUpload" style="display: none" />
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Name <span class="text-danger">*</span></label>
              <input type="text" class="form-control" value="James Adair" />
            </div>

            <!-- start row -->
            <div class="row mb-3 border-bottom">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Role<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedSeven"
                    :options="RoleSeleOne"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label"
                    >Designation<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedEight"
                    :options="AdminOne"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->

            <h6 class="fw-bold mb-3">Contact Information</h6>

            <!-- start row -->
            <div class="row row-gap-2">
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >Phone Number<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="+1 5258 25874" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >Email<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="james@gmail.com" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >DOB<span class="text-danger ms-1">*</span></label
                  >
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
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label"
                    >Gender<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedNine"
                    :options="MaleOne"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-12">
                <div class="mb-0">
                  <label class="form-label"
                    >Blood Group<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedTen"
                    :options="BlodSeleEdit"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">Address 1</label>
                  <input type="text" class="form-control" value="3-174," />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">Address 2</label>
                  <input type="text" class="form-control" value="3-/174," />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">Country</label>
                  <vue3-select
                    v-model="selectedCount"
                    :options="CountSeleOne"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">State</label>
                  <vue3-select
                    v-model="selectedState"
                    :options="StateSeleEdit"
                    placeholder="California"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">City</label>
                  <vue3-select
                    v-model="selectedCity"
                    :options="CitySeleOne"
                    placeholder="Select"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-md-6">
                <div class="mb-0">
                  <label class="form-label">Pincode</label>
                  <input type="text" class="form-control" value="IN 46625" />
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
  <!-- End Edit Modal -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_staff">
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
    title: "Staff",
    dataIndex: "Staff",
    key: "Staff",
    sorter: {
      compare: (a, b) => (a.Staff.toLowerCase() > b.Staff.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Designation",
    dataIndex: "Designation",
    key: "Designation",
    sorter: {
      compare: (a, b) =>
        a.Designation.toLowerCase() > b.Designation.toLowerCase() ? -1 : 1,
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
    title: "Phone",
    dataIndex: "Phone",
    key: "Phone",
    sorter: {
      compare: (a, b) => (a.Phone.toLowerCase() > b.Phone.toLowerCase() ? -1 : 1),
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
    Staff: "James Adair",
    Image: "user-08.jpg",
    Designation: "Admin Officer",
    Role: "Admin",
    Phone: "+1 41245 54132",
    Email: "james@gmail.com",
    Status: "Available",
  },
  {
    Staff: "Adam Milne",
    Image: "user-03.jpg",
    Designation: "Front Officer",
    Role: "Reception",
    Phone: "+1 54554 54789",
    Email: "adam@gmail.com",
    Status: "Available",
  },
  {
    Staff: "Richard Clark",
    Image: "user-04.jpg",
    Designation: "Medical Recorder",
    Role: "Admin",
    Phone: "+1 43554 54985",
    Email: "richard@gmail.com",
    Status: "Unavailable",
  },
  {
    Staff: "Robert Reid",
    Image: "user-05.jpg",
    Designation: "Billing Executive",
    Role: "Admin",
    Phone: "+1 47554 54257",
    Email: "robert@gmail.com",
    Status: "Available",
  },
  {
    Staff: "Dottie Jeny",
    Image: "user-06.jpg",
    Designation: "Nurse",
    Role: "Nurse",
    Phone: "+1 54114 57526",
    Email: "dottie@gmail.com",
    Status: "Available",
  },
  {
    Staff: "Cheryl Bilodeau",
    Image: "user-07.jpg",
    Designation: "Staff Nurse",
    Role: "Nurse (RN)",
    Phone: "+1 51247 56574",
    Email: "cheryl@gmail.com",
    Status: "Available",
  },
  {
    Staff: "Valerie Padgett",
    Image: "user-02.jpg",
    Designation: "HR Executive",
    Role: "Nurse Practitioner",
    Phone: "+1 41452 25741",
    Email: "valerie@gmail.com",
    Status: "Available",
  },
  {
    Staff: "Diane Nash",
    Image: "user-25.jpg",
    Designation: "Nurse Specialist",
    Role: "Nurses",
    Phone: "+1 51425 21498",
    Email: "diane@gmail.com",
    Status: "Available",
  },
  {
    Staff: "Sally Cavazos",
    Image: "user-29.jpg",
    Designation: "Nurse Specialist",
    Role: "Nurses",
    Phone: "+1 45214 98741",
    Email: "sally@gmail.com",
    Status: "Available",
  },
  {
    Staff: "Forest Heath",
    Image: "user-12.jpg",
    Designation: "Call Center",
    Role: "Reception",
    Phone: "+1 41245 32540",
    Email: "forest@gmail.com",
    Status: "Available",
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
      selectedFive: [],
      selectedSix: [],
      selectedSeven: [],
      selectedEight: [],
      selectedNine: [],
      selectedTen: [],
      selectedCount: [],
      selectedState: [],
      selectedCity: [],
      RoleSele: [
        { label: "Select", value: "Select" },
        { label: "Admin", value: "Admin" },
        { label: "Reception", value: "Reception" },
        { label: "Nurse", value: "Nurse" },
        { label: "Nurse Practitioner", value: "Nurse Practitioner" },
      ],
      DesignSele: [
        { label: "Select", value: "Select" },
        { label: "Admin Officer", value: "Admin Officer" },
        { label: "Front Officer", value: "Front Officer" },
        { label: "Medical Recorder", value: "Medical Recorder" },
        { label: "Billing Executive", value: "Billing Executive" },
      ],
      GenSele: [
        { label: "Select", value: "Select" },
        { label: "Male", value: "Male" },
        { label: "Femaler", value: "Femaler" },
      ],
      CountSele: [
        { label: "Select", value: "Select" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
      ],
      CountSeleOne: [
        { label: "Select", value: "Select" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
      ],
      StateSele: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "Ontario", value: "Ontario" },
        { label: "England", value: "England" },
        { label: "Bavaria", value: "Bavaria" },
      ],
      StateSeleEdit: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "Ontario", value: "Ontario" },
        { label: "England", value: "England" },
        { label: "Bavaria", value: "Bavaria" },
      ],
      CitySele: [
        { label: "Select", value: "Select" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "Toronto", value: "Toronto" },
        { label: "London", value: "London" },
        { label: "Munich", value: "Munich" },
      ],
      CitySeleOne: [
        { label: "Select", value: "Select" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "Toronto", value: "Toronto" },
        { label: "London", value: "London" },
        { label: "Munich", value: "Munich" },
      ],
      RoleSeleOne: [
        { label: "Select", value: "Select" },
        { label: "Admin", value: "Admin" },
        { label: "Reception", value: "Reception" },
        { label: "Nurse", value: "Nurse" },
        { label: "Nurse Practitioner", value: "Nurse Practitioner" },
      ],
      AdminOne: [
        { label: "Admin", value: "Admin" },
        { label: "Admin Officer", value: "Admin Officer" },
        { label: "Front Officer", value: "Front Officer" },
        { label: "Medical Recorder", value: "Medical Recorder" },
        { label: "Billing Executive", value: "Billing Executive" },
      ],
      MaleOne: [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
      ],
      BlodSele: [
        { label: "Select", value: "Select" },
        { label: "O+", value: "O+" },
        { label: "O-", value: "O-" },
        { label: "A+", value: "A+" },
        { label: "A-", value: "A-" },
        { label: "B+", value: "B+" },
        { label: "B-", value: "B-" },
      ],
      BlodSeleEdit: [
        { label: "Select", value: "Select" },
        { label: "O+", value: "O+" },
        { label: "O-", value: "O-" },
        { label: "A+", value: "A+" },
        { label: "A-", value: "A-" },
        { label: "B+", value: "B+" },
        { label: "B-", value: "B-" },
      ],
      Staff: [
        { id: 1, name: "James Adair" },
        { id: 2, name: "Adam Milne" },
        { id: 3, name: "Richard Clark" },
        { id: 4, name: "Robert Reid" },
        { id: 5, name: "Dottie Jeny" },
      ],
      Designation: [
        { id: 1, name: "Admin Officer" },
        { id: 2, name: "Front Office Executive" },
        { id: 3, name: "Medical Records Executive" },
        { id: 4, name: "Billing Executive" },
      ],
      Role: [
        { id: 1, name: "Admin" },
        { id: 2, name: "Reception" },
        { id: 3, name: "Nurses" },
      ],
      Status: [
        { id: 1, name: "Available" },
        { id: 2, name: "Unavailable" },
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
          record.Staff.toLowerCase().includes(query) ||
          record.Designation.toLowerCase().includes(query) ||
          record.Role.toLowerCase().includes(query) ||
          record.Phone.toLowerCase().includes(query) ||
          record.Email.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
