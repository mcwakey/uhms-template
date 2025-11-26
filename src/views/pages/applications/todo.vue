<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Todo</h4>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item">
              <router-link to="/dashboard/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">Applications</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Todo</li>
          </ol>
        </div>
      </div>
      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <a
          href="#"
          class="btn btn-sm btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#add_todo"
          ><i class="ti ti-circle-plus me-1"></i>Create New</a
        >
        <ul class="d-flex align-items-center flex-shrink-0 list-unstyled mb-0">
          <li>
            <router-link
              to="/applications/todo"
              class="btn btn-icon btn-sm bg-primary text-white active me-2"
              ><i class="ti ti-layout-grid"></i
            ></router-link>
          </li>
          <li>
            <router-link
              to="/applications/todo-list"
              class="btn btn-icon btn-sm bg-white text-dark me-2"
              ><i class="ti ti-list-tree"></i
            ></router-link>
          </li>
        </ul>
      </div>
      <div class="card shadow-none mb-0">
        <div class="card-body">
          <!-- start row -->
          <div class="row gy-3 mb-3">
            <div class="col-sm-4">
              <div class="d-flex align-items-center">
                <h6 class="fs-16 mb-0">Total Todo</h6>
                <span class="badge badge-dark rounded-pill badge-xs ms-2">+1</span>
              </div>
            </div>
            <!-- end col -->

            <div class="col-sm-8">
              <div class="d-flex align-items-center justify-content-end">
                <p class="mb-0 me-2 pe-2 border-end fs-14">
                  Total Task : <span class="text-dark"> 55 </span>
                </p>
                <p class="mb-0 me-2 pe-2 border-end fs-14">
                  Pending : <span class="text-dark"> 15 </span>
                </p>
                <p class="mb-0 fs-14">Completed : <span class="text-dark"> 40 </span></p>
              </div>
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->
          <div class="border-bottom mb-3">
            <!-- start row -->
            <div class="row">
              <div class="col-lg-12">
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3"
                >
                  <div class="input-group input-group-flat w-auto">
                    <span class="input-group-text">
                      <i class="ti ti-calendar"></i>
                    </span>
                    <a-date-picker
                      v-model="valueOne"
                      class="form-control datetimepicker"
                      placeholder="20/09/2025"
                    />
                  </div>

                  <div class="d-flex align-items-center flex-wrap gap-2">
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle btn btn-sm fs-14 border bg-white rounded text-dark d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        All Tags
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            >All Tags</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            >Internal</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            >Projects</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            >Meetings</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            >Reminder</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            >Research</a
                          >
                        </li>
                      </ul>
                    </div>
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle btn btn-sm fs-14 border bg-white rounded text-dark d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        <span class="text-body me-1"> Sort By : </span> Recent
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            >Recently Added</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            >Ascending</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            >Desending</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            >Last Month</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            >Last 7 Days</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
          </div>
          <div class="accordion accordion-arrow-none" id="accordionExample">
            <!-- Accordion Start -->
            <div class="accordion-item mb-3 border-0 border-bottom pb-2">
              <!-- start row -->
              <div class="row align-items-center mb-2 row-gap-3">
                <div class="col-lg-4 col-sm-6">
                  <div class="accordion-header cursor-pointer" id="headingTwo">
                    <div
                      class="accordion-button bg-transparent shadow-none p-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-controls="collapseTwo"
                    >
                      <div class="d-flex align-items-center w-100">
                        <div class="me-2">
                          <a href="javascript:void(0);">
                            <span><i class="ti ti-chevron-down"></i></span>
                          </a>
                        </div>
                        <div class="d-flex align-items-center">
                          <span
                            ><i class="ti ti-square-rounded text-purple me-2"></i
                          ></span>
                          <h5 class="fw-semibold mb-0">High</h5>
                          <span class="badge bg-light text-dark rounded-pill ms-2"
                            >15</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end col -->

                <div class="col-lg-8 col-sm-6">
                  <div class="d-flex align-items-center justify-content-sm-end">
                    <a href="#" class="btn btn-light btn-sm"
                      >See All<i class="ti ti-arrow-right ms-2"></i
                    ></a>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->

              <div
                id="collapseTwo"
                class="accordion-collapse collapse show"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body p-0">
                  <div class="list-group list-group-flush">
                    <div class="list-group-item list-item-hover border rounded mb-2 p-3">
                      <!-- start row -->
                      <div class="row align-items-center row-gap-3">
                        <div class="col-lg-6 col-md-7">
                          <div
                            class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3"
                            :class="{ 'todo-strike-content': isClicked }"
                            @click="toggleClicked"
                          >
                            <span class="me-2 d-flex align-items-center"
                              ><i class="ti ti-grid-dots text-dark"></i
                            ></span>
                            <div class="form-check form-check-md me-2">
                              <input class="form-check-input" type="checkbox" />
                            </div>
                            <span class="me-2 d-flex align-items-center rating-select"
                              ><i class="ti ti-star-filled filled"></i
                            ></span>
                            <div class="strike-info">
                              <h4 class="fs-14 mb-0">Finalize project proposal</h4>
                            </div>
                            <span
                              class="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"
                              ><i class="ti ti-calendar me-1"></i>15 Jan 2025</span
                            >
                          </div>
                        </div>
                        <!-- end col -->

                        <div class="col-lg-6 col-md-5">
                          <div
                            class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3"
                          >
                            <span class="badge badge-success bg-success me-2"
                              >Projects</span
                            >
                            <span
                              class="badge badge-soft-danger d-inline-flex align-items-center me-2"
                              ><i class="fas fa-circle fs-6 me-1"></i>Onhold</span
                            >
                            <div class="d-flex align-items-center">
                              <div class="avatar-list-stacked avatar-group-sm">
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-01.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-02.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-03.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div class="dropdown ms-2">
                                <a
                                  href="javascript:void(0);"
                                  class="d-inline-flex align-items-center"
                                  data-bs-toggle="dropdown"
                                >
                                  <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_todo"
                                      ><i class="ti ti-edit me-2"></i>Edit</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                      ><i class="ti ti-trash me-2"></i>Delete</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_todo"
                                      ><i class="ti ti-eye me-2"></i>View</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <div class="list-group-item list-item-hover border rounded mb-2 p-3">
                      <!-- start row -->
                      <div class="row align-items-center row-gap-3">
                        <div class="col-lg-6 col-md-7">
                          <div
                            class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3"
                            :class="{ 'todo-strike-content': isClickedOne }"
                            @click="toggleClickedOne"
                          >
                            <span class="me-2 d-flex align-items-center"
                              ><i class="ti ti-grid-dots text-dark"></i
                            ></span>
                            <div class="form-check form-check-md me-2">
                              <input class="form-check-input" type="checkbox" />
                            </div>
                            <span class="me-2 rating-select d-flex align-items-center"
                              ><i class="ti ti-star"></i
                            ></span>
                            <div class="strike-info">
                              <h4 class="fs-14 mb-0">Submit to supervisor by EOD</h4>
                            </div>
                            <span
                              class="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"
                              ><i class="ti ti-calendar me-1"></i>25 May 2024</span
                            >
                          </div>
                        </div>
                        <!-- end col -->

                        <div class="col-lg-6 col-md-5">
                          <div
                            class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3"
                          >
                            <span class="badge bg-danger me-2">Internal</span>
                            <span
                              class="badge badge-soft-secondary d-flex align-items-center me-2"
                              ><i class="fas fa-circle fs-6 me-1"></i>Inprogress</span
                            >
                            <div class="d-flex align-items-center">
                              <div class="avatar-list-stacked avatar-group-sm">
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-01.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-02.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-03.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div class="dropdown ms-2">
                                <a
                                  href="javascript:void(0);"
                                  class="d-inline-flex align-items-center"
                                  data-bs-toggle="dropdown"
                                >
                                  <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_todo"
                                      ><i class="ti ti-edit me-2"></i>Edit</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                      ><i class="ti ti-trash me-2"></i>Delete</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_todo"
                                      ><i class="ti ti-eye me-2"></i>View</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <div class="list-group-item list-item-hover border rounded mb-2 p-3">
                      <!-- start row -->
                      <div class="row align-items-center row-gap-3">
                        <div class="col-lg-6 col-md-7">
                          <div
                            class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3"
                            :class="{ 'todo-strike-content': isClickedTwo }"
                            @click="toggleClickedTwo"
                          >
                            <span class="me-2 d-flex align-items-center"
                              ><i class="ti ti-grid-dots text-dark"></i
                            ></span>
                            <div class="form-check form-check-md me-2">
                              <input class="form-check-input" type="checkbox" checked />
                            </div>
                            <span class="me-2 rating-select d-flex align-items-center"
                              ><i class="ti ti-star"></i
                            ></span>
                            <div class="strike-info">
                              <h4 class="fs-14 mb-0">Prepare presentation slides</h4>
                            </div>
                            <span
                              class="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"
                              ><i class="ti ti-calendar me-1"></i>15 Jan 2025</span
                            >
                          </div>
                        </div>
                        <!-- end col -->

                        <div class="col-lg-6 col-md-5">
                          <div
                            class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3"
                          >
                            <span class="badge bg-info me-2">Reminder</span>
                            <span
                              class="badge badge-soft-info d-flex align-items-center me-2"
                              ><i class="fas fa-circle fs-6 me-1"></i>Pending</span
                            >
                            <div class="d-flex align-items-center">
                              <div class="avatar-list-stacked avatar-group-sm">
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-01.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-02.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-03.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div class="dropdown ms-2">
                                <a
                                  href="javascript:void(0);"
                                  class="d-inline-flex align-items-center"
                                  data-bs-toggle="dropdown"
                                >
                                  <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_todo"
                                      ><i class="ti ti-edit me-2"></i>Edit</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                      ><i class="ti ti-trash me-2"></i>Delete</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_todo"
                                      ><i class="ti ti-eye me-2"></i>View</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion End -->

            <!-- Accordion Start -->
            <div class="accordion-item mb-3 border-0 border-bottom pb-2">
              <!-- start row -->
              <div class="row align-items-center mb-2 row-gap-3">
                <div class="col-lg-4 col-sm-6">
                  <div class="accordion-header cursor-pointer" id="headingThree">
                    <div
                      class="accordion-button bg-transparent shadow-none p-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-controls="collapseThree"
                    >
                      <div class="d-flex align-items-center w-100">
                        <div class="me-2">
                          <a href="javascript:void(0);">
                            <span><i class="ti ti-chevron-down"></i></span>
                          </a>
                        </div>
                        <div class="d-flex align-items-center">
                          <span
                            ><i class="ti ti-square-rounded text-warning me-2"></i
                          ></span>
                          <h5 class="fw-semibold mb-0">Medium</h5>
                          <span class="badge bg-light text-dark rounded-pill ms-2"
                            >05</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end col -->

                <div class="col-lg-8 col-sm-6">
                  <div class="d-flex align-items-center justify-content-sm-end">
                    <a href="#" class="btn btn-light btn-sm"
                      >See All<i class="ti ti-arrow-right ms-2"></i
                    ></a>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->

              <div
                id="collapseThree"
                class="accordion-collapse collapse show"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body p-0">
                  <div class="list-group list-group-flush">
                    <div class="list-group-item list-item-hover border rounded mb-2 p-3">
                      <!-- start row -->
                      <div class="row align-items-center row-gap-3">
                        <div class="col-lg-6 col-md-7">
                          <div
                            class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3"
                            :class="{ 'todo-strike-content': isClickedThree }"
                            @click="toggleClickedThree"
                          >
                            <span class="me-2 d-flex align-items-center"
                              ><i class="ti ti-grid-dots text-dark"></i
                            ></span>
                            <div class="form-check form-check-md me-2">
                              <input class="form-check-input" type="checkbox" />
                            </div>
                            <span class="me-2 rating-select d-flex align-items-center"
                              ><i class="ti ti-star"></i
                            ></span>
                            <div class="strike-info">
                              <h4 class="fs-14 mb-0">Check and respond to emails</h4>
                            </div>
                            <span
                              class="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"
                              ><i class="ti ti-calendar me-1"></i>Tomorrow</span
                            >
                          </div>
                        </div>
                        <!-- end col -->

                        <div class="col-lg-6 col-md-5">
                          <div
                            class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3"
                          >
                            <span class="badge bg-info me-2">Reminder</span>
                            <span
                              class="badge badge-soft-success d-inline-flex align-items-center me-2"
                              ><i class="fas fa-circle fs-6 me-1"></i>Completed</span
                            >
                            <div class="d-flex align-items-center">
                              <div class="avatar-list-stacked avatar-group-sm">
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-01.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-02.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-03.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div class="dropdown ms-2">
                                <a
                                  href="javascript:void(0);"
                                  class="d-inline-flex align-items-center"
                                  data-bs-toggle="dropdown"
                                >
                                  <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_todo"
                                      ><i class="ti ti-edit me-2"></i>Edit</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                      ><i class="ti ti-trash me-2"></i>Delete</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_todo"
                                      ><i class="ti ti-eye me-2"></i>View</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>

                    <div class="list-group-item list-item-hover border rounded mb-2 p-3">
                      <!-- start row -->
                      <div class="row align-items-center row-gap-3">
                        <div class="col-lg-6 col-md-7">
                          <div
                            class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3"
                            :class="{ 'todo-strike-content': isClickedFour }"
                            @click="toggleClickedFour"
                          >
                            <span class="me-2 d-flex align-items-center"
                              ><i class="ti ti-grid-dots text-dark"></i
                            ></span>
                            <div class="form-check form-check-md me-2">
                              <input class="form-check-input" type="checkbox" />
                            </div>
                            <span class="me-2 rating-select d-flex align-items-center"
                              ><i class="ti ti-star"></i
                            ></span>
                            <div class="strike-info">
                              <h4 class="fs-14 mb-0">
                                Coordinate with department head on progress
                              </h4>
                            </div>
                            <span
                              class="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"
                              ><i class="ti ti-calendar me-1"></i>25 May 2024</span
                            >
                          </div>
                        </div>
                        <!-- end col -->

                        <div class="col-lg-6 col-md-5">
                          <div
                            class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3"
                          >
                            <span class="badge bg-danger me-2">Internal</span>
                            <span
                              class="badge badge-soft-secondary d-flex align-items-center me-2"
                              ><i class="fas fa-circle fs-6 me-1"></i>Inprogress</span
                            >
                            <div class="d-flex align-items-center">
                              <div class="avatar-list-stacked avatar-group-sm">
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-06.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-09.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-02.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div class="dropdown ms-2">
                                <a
                                  href="javascript:void(0);"
                                  class="d-inline-flex align-items-center"
                                  data-bs-toggle="dropdown"
                                >
                                  <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_todo"
                                      ><i class="ti ti-edit me-2"></i>Edit</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                      ><i class="ti ti-trash me-2"></i>Delete</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_todo"
                                      ><i class="ti ti-eye me-2"></i>View</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion End -->

            <!-- Accordion Start -->
            <div class="accordion-item border-0 pb-2">
              <!-- start row -->
              <div class="row align-items-center mb-2 row-gap-3">
                <div class="col-lg-4 col-sm-6">
                  <div class="accordion-header cursor-pointer" id="headingFour">
                    <div
                      class="accordion-button bg-transparent shadow-none p-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-controls="collapseFour"
                    >
                      <div class="d-flex align-items-center w-100">
                        <div class="me-2">
                          <a href="javascript:void(0);">
                            <span><i class="ti ti-chevron-down"></i></span>
                          </a>
                        </div>
                        <div class="d-flex align-items-center">
                          <span
                            ><i class="ti ti-square-rounded text-success me-2"></i
                          ></span>
                          <h5 class="fw-semibold mb-0">Low</h5>
                          <span class="badge bg-light text-dark rounded-pill ms-2"
                            >24</span
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end col -->

                <div class="col-lg-8 col-sm-6">
                  <div class="d-flex align-items-center justify-content-sm-end">
                    <a href="#" class="btn btn-light btn-sm"
                      >See All<i class="ti ti-arrow-right ms-2"></i
                    ></a>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->

              <div
                id="collapseFour"
                class="accordion-collapse collapse show"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body p-0">
                  <div class="list-group list-group-flush">
                    <div class="list-group-item list-item-hover border rounded mb-2 p-3">
                      <!-- start row -->
                      <div class="row align-items-center row-gap-3">
                        <div class="col-lg-6 col-md-7">
                          <div
                            class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-3"
                            :class="{ 'todo-strike-content': isClickedFive }"
                            @click="toggleClickedFive"
                          >
                            <span class="me-2 d-flex align-items-center"
                              ><i class="ti ti-grid-dots text-dark"></i
                            ></span>
                            <div class="form-check form-check-md me-2">
                              <input class="form-check-input" type="checkbox" />
                            </div>
                            <span class="me-2 rating-select d-flex align-items-center"
                              ><i class="ti ti-star"></i
                            ></span>
                            <div class="strike-info">
                              <h4 class="fs-14 mb-0">Plan tasks for the next day</h4>
                            </div>
                            <span
                              class="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"
                              ><i class="ti ti-calendar me-1"></i>Today</span
                            >
                          </div>
                        </div>
                        <!-- end col -->

                        <div class="col-lg-6 col-md-5">
                          <div
                            class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-3"
                          >
                            <span class="badge bg-info me-2">Social</span>
                            <span
                              class="badge badge-soft-info d-flex align-items-center me-2"
                              ><i class="fas fa-circle fs-6 me-1"></i>Pending</span
                            >
                            <div class="d-flex align-items-center">
                              <div class="avatar-list-stacked avatar-group-sm">
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-01.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-02.jpg"
                                    alt="img"
                                  />
                                </span>
                                <span class="avatar avatar-rounded">
                                  <img
                                    class="border border-white"
                                    src="@/assets/img/profiles/avatar-03.jpg"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div class="dropdown ms-2">
                                <a
                                  href="javascript:void(0);"
                                  class="d-inline-flex align-items-center"
                                  data-bs-toggle="dropdown"
                                >
                                  <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#edit_todo"
                                      ><i class="ti ti-edit me-2"></i>Edit</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#delete_modal"
                                      ><i class="ti ti-trash me-2"></i>Delete</a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:void(0);"
                                      class="dropdown-item rounded-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#view_todo"
                                      ><i class="ti ti-eye me-2"></i>View</a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Accordion End -->
          </div>
          <div class="text-center">
            <a href="#" class="btn btn-primary"
              ><i class="ti ti-loader me-2"></i>Load More</a
            >
          </div>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->
    </div>
    <!-- End Content -->

    <!-- Start Footer-->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy; <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All
        Rights Reserved
      </p>
    </div>
    <!-- End Footer-->
  </div>

  <!-- ========================
        End Page Content
    ========================= -->

  <!-- Add Todo -->
  <div class="modal fade" id="add_todo">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Todo</h4>
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
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Todo Title</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Tag</label>
                  <vue3-select
                    v-model="selected"
                    :options="TodoTag"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select
                    v-model="selectedOne"
                    :options="Priority"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Descriptions</label>
                  <div class="quill-editor">
                    <div class="editor three-line">
                      <div class="editor-container">
                        <div ref="editorRefone" class="quill-editor"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Add Assignee</label>
                  <vue3-select
                    v-model="selectedTwo"
                    :options="Assignee"
                    placeholder="Select"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-0">
                  <label class="form-label">Status</label>
                  <vue3-select
                    v-model="selectedThree"
                    :options="Status"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light me-2" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add New Todo</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add Todo end -->

  <!-- Edit Todo -->
  <div class="modal fade" id="edit_todo">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Edit Todo</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form action="/applications/todo">
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Todo Title</label>
                  <input
                    type="text"
                    class="form-control"
                    value="Update calendar and schedule"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Tag</label>
                  <vue3-select
                    v-model="selectedFour"
                    :options="TodoTag"
                    placeholder="Internal"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select
                    v-model="selectedFive"
                    :options="Priority"
                    placeholder="Medium"
                  />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mb-3">
                  <label class="form-label">Descriptions</label>
                  <div class="quill-editor">
                    <div class="editor three-line">
                      <div class="editor-container">
                        <div ref="editorRef" class="quill-editor" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Add Assignee</label>
                  <vue3-select
                    v-model="selectedSix"
                    :options="Assignee"
                    placeholder="Sophie"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-0">
                  <label class="form-label">Status</label>
                  <vue3-select
                    v-model="selectedSeven"
                    :options="Status"
                    placeholder="Completed"
                  />
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
  <!-- Edit Todo end -->

  <!-- Todo Details -->
  <div class="modal fade" id="view_todo">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h4 class="modal-title text-white me-1">Respond to any pending messages</h4>
          <span class="badge bg-danger d-inline-flex align-items-center me-1"
            ><i class="ti ti-square me-1"></i>Urgent</span
          >
          <span><i class="ti ti-star-filled text-warning me-1"></i></span>
          <a href="#"><i class="ti ti-trash text-white"></i></a>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close bg-transparent fs-16 text-white position-static"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <h5 class="mb-2">Task Details</h5>
          <div class="border rounded mb-3 p-2">
            <div class="row row-gap-3">
              <div class="col-md-4">
                <div class="text-center">
                  <span class="d-block mb-1">Created On</span>
                  <p class="text-dark">22 July 2025</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="text-center">
                  <span class="d-block mb-1">Due Date</span>
                  <p class="text-dark">22 July 2025</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="text-center">
                  <span class="d-block mb-1">Status</span>
                  <span class="badge badge-soft-success d-inline-flex align-items-center">
                    <i class="fas fa-circle fs-6 me-1"></i>Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <h5 class="mb-2">Description</h5>
            <p>
              Hiking is a long, vigorous walk, usually on trails or footpaths in the
              countryside. Walking for pleasure developed in Europe during the eighteenth
              century. Religious pilgrimages have existed much longer but they involve
              walking long distances for a spiritual purpose associated with specific
              religions and also we achieve inner peace while we hike at a local park.
            </p>
          </div>
          <div class="mb-3">
            <h5 class="mb-2">Tags</h5>
            <div class="d-flex align-items-center">
              <span class="badge bg-danger me-2">Internal</span>
              <span class="badge bg-success me-2">Projects</span>
              <span class="badge bg-secondary">Reminder</span>
            </div>
          </div>
          <div>
            <h5 class="mb-2">Assignee</h5>
            <div class="avatar-list-stacked avatar-group-sm">
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-01.jpg"
                  alt="img"
                />
              </span>
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-02.jpg"
                  alt="img"
                />
              </span>
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-03.jpg"
                  alt="img"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Todo Details end -->

  <!-- Start Modal  -->
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
  <!-- End Modal  -->
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { ref } from "vue";
const valueOne = ref();
export default {
  data() {
    return {
      valueOne,
      content: "",
      content: "",
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      TodoTag: [
        { label: "Select", value: "Select" },
        { label: "Internal", value: "Internal" },
        { label: "Projects", value: "Projects" },
        { label: "Meetings", value: "Meetings" },
        { label: "Reminder", value: "Reminder" },
      ],
      Priority: [
        { label: "Select", value: "Select" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
      ],
      Assignee: [
        { label: "Select", value: "Select" },
        { label: "Sophie", value: "Sophie" },
        { label: "Cameron", value: "Cameron" },
        { label: "Doris", value: "Doris" },
        { label: "Rufana", value: "Rufana" },
      ],
      Status: [
        { label: "Select", value: "Select" },
        { label: "Completed", value: "Completed" },
        { label: "Pending", value: "Pending" },
        { label: "Onhold", value: "Onhold" },
        { label: "Inprogress", value: "Inprogress" },
      ],
      isClicked: false,
      isClickedOne: false,
      isClickedTwo: true,
      isClickedThree: false,
      isClickedFour: false,
      isClickedFive: false,
    };
  },
  methods: {
    toggleClicked() {
      this.isClicked = !this.isClicked;
    },
    toggleClickedOne() {
      this.isClickedOne = !this.isClickedOne;
    },
    toggleClickedTwo() {
      this.isClickedTwo = !this.isClickedTwo;
    },
    toggleClickedThree() {
      this.isClickedThree = !this.isClickedThree;
    },
    toggleClickedFour() {
      this.isClickedFour = !this.isClickedFour;
    },
    toggleClickedFive() {
      this.isClickedFive = !this.isClickedFive;
    },
  },
  mounted() {
    this.initQuill();
  },

  methods: {
    initQuill() {
      const quill = new Quill(this.$refs.editorRef, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
      });
      const quillone = new Quill(this.$refs.editorRefone, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
      });

      quill.on("text-change", () => {
        this.content = quill.root.innerHTML;
      });
      quillone.on("text-change", () => {
        this.content = quillone.root.innerHTML;
      });
    },
  },
};
</script>
