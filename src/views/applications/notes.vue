<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content pb-0">
      <!-- Page Header -->
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Notes</h4>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item">
              <router-link to="/dashboard/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">Applications</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Notes</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-xl-3 col-md-12 theiaStickySidebar">
          <div class="card">
            <div class="card-body">
              <div class="mb-3 pb-3 border-bottom">
                <h6 class="fs-16 d-flex align-items-center mb-0">
                  <i class="ti ti-file-text me-2"></i>Notes List
                </h6>
              </div>

              <div class="border-bottom pb-3">
                <div
                  class="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    class="d-flex text-start align-items-center fw-medium fs-15 nav-link active mb-1"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="true"
                  >
                    <i class="ti ti-inbox me-2"></i>All Notes
                  </button>
                  <button
                    class="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-1"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <i class="ti ti-star me-2"></i>Important
                  </button>
                  <button
                    class="d-flex text-start align-items-center fw-medium fs-15 nav-link mb-0"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    <i class="ti ti-trash me-2"></i>Trash
                  </button>
                </div>
              </div>

              <div class="mt-3">
                <div class="border-bottom px-2 pb-3 mb-3">
                  <h6 class="fs-16 mb-2">Tags</h6>
                  <div class="d-flex flex-column mt-2">
                    <a
                      href="javascript:void(0);"
                      class="text-info d-flex align-items-center mb-2"
                      ><i class="ti ti-square-filled square-rotate fs-10 me-2"></i
                      >Pending</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="text-danger d-flex align-items-center mb-2"
                      ><i class="ti ti-square-filled square-rotate fs-10 me-2"></i
                      >Onhold</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="text-warning d-flex align-items-center mb-2"
                      ><i class="ti ti-square-filled square-rotate fs-10 me-2"></i
                      >Inprogress</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="text-success d-flex align-items-center"
                      ><i class="ti ti-square-filled square-rotate fs-10 me-2"></i>Done</a
                    >
                  </div>
                </div>
                <div class="px-2">
                  <h6 class="fs-16 mb-2">Priority</h6>
                  <div class="d-flex flex-column mt-2">
                    <a
                      href="javascript:void(0);"
                      class="text-warning d-flex align-items-center mb-2"
                      ><i class="ti ti-square-filled square-rotate fs-10 me-2"></i
                      >Medium</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="text-success d-flex align-items-center mb-2"
                      ><i class="ti ti-square-filled square-rotate fs-10 me-2"></i>High</a
                    >
                    <a
                      href="javascript:void(0);"
                      class="text-danger d-flex align-items-center"
                      ><i class="ti ti-square-filled square-rotate fs-10 me-2"></i>Low</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-xl-9">
          <div class="card">
            <div class="card-body">
              <div
                class="d-flex align-items-center justify-content-between flex-wrap gap-2"
              >
                <div>
                  <select class="form-select">
                    <option>Bulk Actions</option>
                    <option>Delete Marked</option>
                    <option>Unmark All</option>
                    <option>Mark All</option>
                  </select>
                </div>
                <div class="d-flex align-items-center flex-wrap gap-2">
                  <div class="dropdown">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-toggle btn border bg-white rounded text-dark d-inline-flex align-items-center drop-arrow-none"
                      data-bs-toggle="dropdown"
                    >
                      <i class="ti ti-file-export me-1"></i>Export<i
                        class="ti ti-chevron-down align-middle ms-1"
                      ></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          ><i class="ti ti-file-type-pdf me-1"></i>Export as PDF</a
                        >
                      </li>
                      <li>
                        <a href="javascript:void(0);" class="dropdown-item rounded-1"
                          ><i class="ti ti-file-type-xls me-1"></i>Export as Excel
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#"
                    class="btn btn-primary btn-md d-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#add_note"
                    ><i class="ti ti-circle-plus me-1"></i>Add Notes</a
                  >
                </div>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->

          <div class="tab-content" id="v-pills-tabContent2">
            <!-- Items -->
            <div
              class="tab-pane fade active show"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <div>
                <!-- start row -->
                <div class="row">
                  <div class="col-md-12">
                    <div
                      class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3"
                    >
                      <div class="d-flex align-items-center">
                        <h4 class="mb-0">Important Notes</h4>
                      </div>
                      <div>
                        <a href="javascript:void(0);" class="text-danger fs-15"
                          ><i class="ti ti-times me-1"></i> Close
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->

                <!-- start row -->
                <div class="row">
                  <div class="col-md-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline-warning d-inline-flex align-items-center"
                            ><i class="ti ti-circle-filled fs-7 me-1"></i>Medium</span
                          >
                          <div>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              ><i class="ti ti-dots-vertical"></i
                            ></a>
                            <div class="dropdown-menu notes-menu dropdown-menu-end">
                              <a
                                href="#"
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-note-units"
                                ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                              >
                              <a
                                href="#"
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                                ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                              >
                              <a href="javascript:void(0);" class="dropdown-item"
                                ><span><i class="ti ti-star me-1"></i></span>Not
                                Important</a
                              >
                              <a
                                href="#"
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#view-note-units"
                                ><span><i class="ti ti-eye me-1"></i></span>View</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="my-3">
                          <h6 class="fs-16 text-truncate mb-1">
                            <a href="javascript:void(0);"
                              >Plan a trip to another country</a
                            >
                          </h6>
                          <p class="mb-3 d-flex align-items-center text-dark">
                            <i class="ti ti-calendar me-1"></i>20 Jan 2024
                          </p>
                          <p class="text-truncate line-clamb-2 text-wrap">
                            Space, the final frontier. These are the voyages of the
                            Starship Enterprise.
                          </p>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between border-top pt-3"
                        >
                          <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-md me-2">
                              <img
                                src="@/assets/img/profiles/avatar-01.jpg"
                                alt="Profile"
                                class="img-fluid rounded-circle"
                              />
                            </a>
                            <span class="text-info d-flex align-items-center"
                              ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                              >Personal</span
                            >
                          </div>
                          <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="me-2">
                              <span><i class="ti ti-star text-warning"></i></span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <span><i class="ti ti-trash text-danger"></i></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <!-- end card body -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->

                  <div class="col-md-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline-danger d-inline-flex align-items-center"
                            ><i class="ti ti-circle-filled fs-7 me-1"></i>Low</span
                          >
                          <div>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="ti ti-dots-vertical"></i>
                            </a>
                            <div class="dropdown-menu notes-menu dropdown-menu-end">
                              <a
                                href="#"
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-note-units"
                                ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                              >
                              <a
                                href="#"
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                                ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                              >
                              <a href="javascript:void(0);" class="dropdown-item"
                                ><span><i class="ti ti-star me-1"></i></span>Not
                                Important</a
                              >
                              <a
                                href="#"
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#view-note-units"
                                ><span><i class="ti ti-eye me-1"></i></span>View</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="my-3">
                          <h6 class="fs-16 text-truncate mb-1">
                            <a href="javascript:void(0);">Improve touch typing</a>
                          </h6>
                          <p class="mb-3 d-flex align-items-center text-dark">
                            <i class="ti ti-calendar me-1"></i>22 Jan 2024
                          </p>
                          <p class="text-truncate line-clamb-2 text-wrap">
                            Well, the way they make shows is, they make one show.
                          </p>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between border-top pt-3"
                        >
                          <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-md me-2">
                              <img
                                src="@/assets/img/profiles/avatar-02.jpg"
                                alt="Profile"
                                class="img-fluid rounded-circle"
                              />
                            </a>
                            <span class="text-success d-flex align-items-center"
                              ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                              >Work</span
                            >
                          </div>
                          <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="me-2">
                              <span><i class="ti ti-star text-warning"></i></span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <span><i class="ti ti-trash text-danger"></i></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <!-- end card body -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->

                  <div class="col-md-4 d-flex">
                    <div class="card flex-fill">
                      <div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
                          <span
                            class="badge badge-outline-danger d-inline-flex align-items-center"
                            ><i class="ti ti-circle-filled fs-7 me-1"></i>Low</span
                          >
                          <div>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="ti ti-dots-vertical"></i>
                            </a>
                            <div class="dropdown-menu notes-menu dropdown-menu-end">
                              <a
                                href="#"
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#edit-note-units"
                                ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                              >
                              <a
                                href="#"
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_modal"
                                ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                              >
                              <a href="javascript:void(0);" class="dropdown-item"
                                ><span><i class="ti ti-star me-1"></i></span>Not
                                Important</a
                              >
                              <a
                                href="#"
                                class="dropdown-item"
                                data-bs-toggle="modal"
                                data-bs-target="#view-note-units"
                                ><span><i class="ti ti-eye me-1"></i></span>View</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="my-3">
                          <h6 class="fs-16 text-truncate mb-1">
                            <a href="javascript:void(0);">Learn calligraphy</a>
                          </h6>
                          <p class="mb-3 d-flex align-items-center text-dark">
                            <i class="ti ti-calendar me-1"></i>24 Jan 2024
                          </p>
                          <p class="text-truncate line-clamb-2 text-wrap">
                            Calligraphy, the art of beautiful handwriting. It derive from
                            Greek.
                          </p>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between border-top pt-3"
                        >
                          <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="avatar avatar-md me-2">
                              <img
                                src="@/assets/img/profiles/avatar-03.jpg"
                                alt="Profile"
                                class="img-fluid rounded-circle"
                              />
                            </a>
                            <span class="text-info d-flex align-items-center"
                              ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                              >Social</span
                            >
                          </div>
                          <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="me-2">
                              <span><i class="ti ti-star text-warning"></i></span>
                            </a>
                            <a
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <span><i class="ti ti-trash text-danger"></i></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <!-- end card body -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->
                </div>
              </div>
              <!-- end row -->

              <!-- start row -->
              <div class="row">
                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-success d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>High</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Backup Files EOD</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>20 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Project files should be took backup before end of the day.
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-05.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-info d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Personal</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->

                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-danger d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>Low</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Download Server Logs</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>25 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Server log is a text document that contains a record of all
                          activity.
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-06.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-success d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Work</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->

                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-warning d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>Medium</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Team meet at Starbucks</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>26 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Meeting all teamets at Starbucks for identifying them all.
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-07.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-warning d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Social</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->

                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-success d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>High</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Create a compost pile</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>27 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Compost pile refers to fruit and vegetable scraps, used tea
                          etc..
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-08.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-warning d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Social</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->

                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-danger d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>Low</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Take a hike at a local park</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>28 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Hiking involves a long energetic walk in a natural environment.
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-09.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-info d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Personal</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->

                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-info d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>medium</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Research a topic interested</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>28 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Research a topic interested by listen actively and attentively.
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-10.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-success d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Work</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>

            <!-- Items -->
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <!-- start row -->
              <div class="row">
                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-success d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>High</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Backup Files EOD</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>20 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Project files should be took backup before end of the day.
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-05.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-info d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Personal</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->

                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-danger d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>Low</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Download Server Logs</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>25 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Server log is a text document that contains a record of all
                          activity.
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-06.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-success d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Work</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->

                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-warning d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>Medium</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Team meet at Starbucks</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>26 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Meeting all teamets at Starbucks for identifying them all.
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-07.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-warning d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Social</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->

                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-success d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>High</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Create a compost pile</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>27 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Compost pile refers to fruit and vegetable scraps, used tea
                          etc..
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-08.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-warning d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Social</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->

                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-danger d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>Low</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Take a hike at a local park</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>28 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Hiking involves a long energetic walk in a natural environment.
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-09.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-info d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Personal</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->

                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-info d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>medium</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Research a topic interested</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>28 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Research a topic interested by listen actively and attentively.
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-10.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-success d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Work</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>

            <!-- Items -->
            <div
              class="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <div class="row">
                <div class="col-12 d-flex align-items-center justify-content-end">
                  <a href="#" class="btn btn-danger mb-3">
                    <span> <i class="ti ti-trash f-20 me-2"></i> </span> Restore all
                  </a>
                </div>
              </div>

              <!-- start row -->
              <div class="row">
                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-success d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>High</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Create a compost pile</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>27 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Compost pile refers to fruit and vegetable scraps, used tea
                          etc..
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-08.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-warning d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Social</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->

                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-danger d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>Low</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Take a hike at a local park</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>28 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Hiking involves a long energetic walk in a natural environment.
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-09.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-info d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Personal</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->

                <div class="col-md-4 d-flex">
                  <div class="card flex-fill">
                    <div class="card-body">
                      <div class="d-flex align-items-center justify-content-between">
                        <span
                          class="badge badge-outline-info d-inline-flex align-items-center"
                          ><i class="ti ti-circle-filled fs-7 me-1"></i>medium</span
                        >
                        <div>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <div class="dropdown-menu notes-menu dropdown-menu-end">
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#edit-note-units"
                              ><span><i class="ti ti-edit me-1"></i></span>Edit</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                              ><span><i class="ti ti-trash me-1"></i></span>Delete</a
                            >
                            <a href="javascript:void(0);" class="dropdown-item"
                              ><span><i class="ti ti-star me-1"></i></span>Not
                              Important</a
                            >
                            <a
                              href="#"
                              class="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#view-note-units"
                              ><span><i class="ti ti-eye me-1"></i></span>View</a
                            >
                          </div>
                        </div>
                      </div>
                      <div class="my-3">
                        <h6 class="fs-16 text-truncate mb-1">
                          <a href="javascript:void(0);">Research a topic interested</a>
                        </h6>
                        <p class="mb-3 d-flex align-items-center text-dark">
                          <i class="ti ti-calendar me-1"></i>28 Jan 2024
                        </p>
                        <p class="text-truncate line-clamb-2 text-wrap">
                          Research a topic interested by listen actively and attentively.
                        </p>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between border-top pt-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="avatar avatar-md me-2">
                            <img
                              src="@/assets/img/profiles/avatar-10.jpg"
                              alt="Profile"
                              class="img-fluid rounded-circle"
                            />
                          </a>
                          <span class="text-success d-flex align-items-center"
                            ><i class="ti ti-square-filled square-rotate fs-10 me-1"></i
                            >Work</span
                          >
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="me-2">
                            <span><i class="ti ti-star text-warning"></i></span>
                          </a>
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                          >
                            <span><i class="ti ti-trash text-danger"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
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

  <!-- Start Add Note -->
  <div class="modal fade" id="add_note">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add Notes</h4>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Note Title</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Assignee</label>
                  <vue3-select
                    v-model="selected"
                    :options="AssigSele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Tag</label>
                  <input
                    class="form-control"
                    placeholder="Add new"
                    type="text"
                    data-choices
                    data-choices-limit="3"
                    data-choices-removeItem
                    name="Label"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select
                    v-model="selectedOne"
                    :options="PrioritySele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-blocks todo-calendar">
                  <label class="form-label">Due Date</label>
                  <div class="input-group input-group-flat">
                    <a-date-picker
                      v-model="valueOne"
                      class="form-control datetimepicker"
                      placeholder="20/09/2025"
                    />
                    <span class="input-group-text">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue3-select
                    v-model="selectedTwo"
                    :options="StatuSele"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-0 summer-description-box">
                  <label class="form-label">Descriptions</label>
                  <div class="snow-editor mb-2"></div>
                  <small>Maximum 60 Characters</small>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Note -->

  <!-- Start Edit Note -->
  <div class="modal fade" id="edit-note-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Notes</h4>
          <button
            type="button"
            class="btn-close btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Note Title</label>
                  <input
                    type="text"
                    class="form-control"
                    value="Team meet at Starbucks"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Assignee</label>
                  <vue3-select
                    v-model="selectedThree"
                    :options="AssigSeleEdit"
                    placeholder="Kathleen"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Tag</label>
                  <input
                    class="input-tags form-control"
                    placeholder="Add new"
                    type="text"
                    data-choices
                    data-choices-limit="3"
                    data-choices-removeItem
                    name="Label"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select
                    v-model="selectedFour"
                    :options="PrioritySeleEdit"
                    placeholder="Medium"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="input-blocks todo-calendar">
                  <label class="form-label">Due Date</label>
                  <div class="input-group input-group-flat">
                    <a-date-picker
                      v-model="valueOne"
                      class="form-control datetimepicker"
                      placeholder="20/09/2025"
                    />
                    <span class="input-group-text">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue3-select
                    v-model="selectedFive"
                    :options="StatuSeleEdit"
                    placeholder="Active"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-0 summer-description-box">
                  <label class="form-label">Descriptions</label>
                  <div class="snow-editor mb-2"></div>
                  <small>Maximum 60 Characters</small>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Edit Note -->

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

  <!-- Start View Note -->
  <div class="modal fade" id="view-note-units">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="page-wrapper-new p-0">
          <div class="content">
            <div class="modal-header">
              <div class="d-flex align-items-center">
                <h4 class="modal-title mb-0">Notes</h4>
              </div>
              <button
                type="button"
                class="btn-close btn-close-modal"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-12">
                  <div>
                    <h4 class="mb-2">Meet Lisa to discuss project details</h4>
                    <p>
                      Hiking is a long, vigorous walk, usually on trails or footpaths in
                      the countryside. Walking for pleasure developed in Europe during the
                      eighteenth century. Religious pilgrimages have existed much longer
                      but they involve walking long distances for a spiritual purpose
                      associated with specific religions and also we achieve inner peace
                      while we hike at a local park.
                    </p>
                    <p
                      class="badge badge-outline-danger d-inline-flex align-items-center mb-0"
                    >
                      <i class="ti ti-circle-filled fs-7 me-1"></i> High
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <a href="#" class="btn btn-primary" data-bs-dismiss="modal">Close</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End View Note -->

  <!-- ========================
        End Page Content
    ========================= -->
</template>

<script>
import { ref } from "vue";
const valueOne = ref();
export default {
  data() {
    return {
      valueOne,
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      StatuSele: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      PrioritySele: [
        { label: "Select", value: "Select" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
      ],
      AssigSele: [
        { label: "Choose", value: "Choose" },
        { label: "Kathleen", value: "Kathleen" },
        { label: "Gifford", value: "Gifford" },
      ],
      StatuSeleEdit: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      PrioritySeleEdit: [
        { label: "Select", value: "Select" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
      ],
      AssigSeleEdit: [
        { label: "Choose", value: "Choose" },
        { label: "Kathleen", value: "Kathleen" },
        { label: "Gifford", value: "Gifford" },
      ],
    };
  },
};
</script>
