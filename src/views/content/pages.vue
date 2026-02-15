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
          <h4 class="fw-semibold mb-0">Pages</h4>
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

          <router-link to="/content/add-page" class="btn btn-primary ms-2 fs-13 btn-md"
            ><i class="ti ti-plus me-1"></i> Add New Page
          </router-link>
        </div>
      </div>
      <!-- End Page Header -->

      <!--  Start Table -->
      <div class="table-responsive">
        <table class="table table-nowrap border">
          <thead class="thead-light">
            <tr>
              <th>Page</th>
              <th>Page Slug</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="fw-medium text-dark">Home</td>
              <td>home</td>
              <td>
                <span
                  class="badge badge-soft-success fs-13 fw-medium p-1 px-2 border border-success"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <router-link
                      to="/content/edit-page"
                      class="dropdown-item d-flex align-items-center"
                      >Edit</router-link
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
              </td>
            </tr>
            <tr>
              <td class="fw-medium text-dark">Specializations</td>
              <td>specializations</td>
              <td>
                <span
                  class="badge badge-soft-success fs-13 fw-medium p-1 px-2 border border-success"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <router-link
                      to="/content/edit-page"
                      class="dropdown-item d-flex align-items-center"
                      >Edit</router-link
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
              </td>
            </tr>
            <tr>
              <td class="fw-medium text-dark">Doctors</td>
              <td>doctors</td>
              <td>
                <span
                  class="badge badge-soft-success fs-13 fw-medium p-1 px-2 border border-success"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <router-link
                      to="/content/edit-page"
                      class="dropdown-item d-flex align-items-center"
                      >Edit</router-link
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
              </td>
            </tr>
            <tr>
              <td class="fw-medium text-dark">Blog</td>
              <td>blog</td>
              <td>
                <span
                  class="badge badge-soft-success fs-13 fw-medium p-1 px-2 border border-success"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <router-link
                      to="/content/edit-page"
                      class="dropdown-item d-flex align-items-center"
                      >Edit</router-link
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
              </td>
            </tr>
            <tr>
              <td class="fw-medium text-dark">Contact Us</td>
              <td>contact us</td>
              <td>
                <span
                  class="badge badge-soft-success fs-13 fw-medium p-1 px-2 border border-success"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <router-link
                      to="/content/edit-page"
                      class="dropdown-item d-flex align-items-center"
                      >Edit</router-link
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
              </td>
            </tr>
          </tbody>
        </table>
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
