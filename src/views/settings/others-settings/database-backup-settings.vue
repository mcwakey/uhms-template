<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content" id="profilePage">
      <!-- Page Header -->
      <div class="mb-3 border-bottom pb-3">
        <h4 class="fw-bold mb-0">Settings</h4>
      </div>
      <!-- End Page Header -->

      <div class="card">
        <div class="card-body p-0">
          <div class="settings-wrapper d-flex">
            <!-- Start Settings Sidebar -->
            <settings-sidebar></settings-sidebar>
            <!-- End Settings Sidebar -->

            <div class="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
              <div class="card-header border-bottom px-0 mx-3">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="fw-bold">Database Backup</h5>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#generate"
                    ><i class="ti ti-plus me-1"></i>Generate Backup</a
                  >
                </div>
              </div>
              <div class="card-body px-0 mx-3">
                <!-- Table List -->
                <div class="table-responsive border">
                  <table class="table table-nowrap">
                    <thead class="tablehead-light">
                      <tr>
                        <th>Name</th>
                        <th>Created On</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>patients_data_backup_2025.txt</td>
                        <td>30 Apr 2025</td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_ip_address"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_ip_address"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>invoice_records_backup_2024.txt</td>
                        <td>15 Apr 2025</td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_ip_address"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_ip_address"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>lab_transactions_2024.txt</td>
                        <td>02 Apr 2025</td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_ip_address"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_ip_address"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>payment_transactions_2024.txt</td>
                        <td>27 Mar 2025</td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_ip_address"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_ip_address"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /Table List -->
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->
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
  <div class="modal fade" id="generate">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative">
          <img
            src="@/assets/img/bg/generate-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0"
          />
          <img
            src="@/assets/img/bg/generate-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0"
          />
          <div class="mb-3">
            <span class="avatar avatar-lg bg-info text-white"
              ><i class="ti ti-folder fs-24"></i
            ></span>
          </div>
          <h5 class="fw-bold mb-1">Generate Backup</h5>
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
              class="btn btn-primary position-relative z-1"
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
