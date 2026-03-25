<template>
  <layouts-header :title="title" :text1="text1" :text="text" />
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Kanban View</h4>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item">
              <router-link to="/dashboard/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">Applications</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Kanban View</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->
      <div class="card shadow-none">
        <div
          class="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3"
        >
          <h6 class="fs-16 mb-0">Kanban View</h6>
          <div class="d-flex align-items-center flex-wrap row-gap-3">
            <div class="avatar-list-stacked avatar-group-sm me-2">
              <span class="avatar avatar-rounded">
                <img
                  class="border border-white"
                  src="@/assets/img/profiles/avatar-19.jpg"
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
                  src="@/assets/img/profiles/avatar-16.jpg"
                  alt="img"
                />
              </span>
              <span class="avatar avatar-rounded bg-primary fs-12"> 1+ </span>
            </div>
            <div class="d-flex align-items-center flex-wrap gap-2 me-3">
              <p class="mb-0 pe-2 border-end fs-14">
                Total Task : <span class="text-dark"> 55 </span>
              </p>
              <p class="mb-0 pe-2 border-end fs-14">
                Pending : <span class="text-dark"> 15 </span>
              </p>
              <p class="mb-0 fs-14">Completed : <span class="text-dark"> 40 </span></p>
            </div>
            <div class="input-group input-group-flat w-auto">
              <span class="input-group-text">
                <i class="ti ti-search"></i>
              </span>
              <input
                type="text"
                class="form-control form-control-sm"
                placeholder="Search Project"
              />
            </div>
          </div>
        </div>
        <!-- end header end -->
        <!-- end header body -->
        <div class="card-body overflow-hidden">
          <div
            class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3"
          >
            <div class="dropdown">
              <a
                href="javascript:void(0);"
                class="dropdown-toggle btn btn-outline-light bg-white text-dark d-inline-flex align-items-center drop-arrow-none"
                data-bs-toggle="dropdown"
              >
                Select Priority<i class="ti ti-chevron-down align-middle ms-1"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-start">
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">All</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">High</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1">Medium</a>
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item rounded-1"
                    >Completed</a
                  >
                </li>
              </ul>
            </div>
            <!-- end col -->

            <div class="d-flex align-items-center flex-wrap gap-2">
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle btn bg-white btn-outline-light text-dark d-inline-flex align-items-center drop-arrow-none"
                  data-bs-toggle="dropdown"
                >
                  Clients<i class="ti ti-chevron-down align-middle ms-1"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Clients</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Sophie</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Cameron</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Doris</a
                    >
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle btn bg-white btn-outline-light text-dark d-inline-flex align-items-center drop-arrow-none"
                  data-bs-toggle="dropdown"
                >
                  Select Status<i class="ti ti-chevron-down align-middle ms-1"></i>
                </a>
                <ul class="dropdown-menu dropdown-menu-end">
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Inprogress</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >On-hold</a
                    >
                  </li>
                  <li>
                    <a href="javascript:void(0);" class="dropdown-item rounded-1"
                      >Completed</a
                    >
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle btn bg-white btn-outline-light text-dark d-inline-flex align-items-center drop-arrow-none"
                  data-bs-toggle="dropdown"
                >
                  <span class="text-body me-1"> Sort By : </span> Recent<i
                    class="ti ti-chevron-down align-middle ms-1"
                  ></i>
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
            <!-- end col -->
          </div>

          <all-kanban></all-kanban>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->
    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-dark">Version : 1.3.8</p>
    </div>
    <!-- End Footer -->
  </div>

  <!-- ========================
        End Page Content
    ========================= -->
</template>

<script>
export default {
  data() {
    return {
      title: "Home",
      text1: "Applications",
      text: "Kanban View",
    };
  },
};
</script>
