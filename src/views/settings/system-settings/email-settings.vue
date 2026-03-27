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
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap gap-2"
                >
                  <h5 class="fw-bold">Email Settings</h5>
                  <a href="javascript:void(0);" class="btn btn-primary"
                    ><i class="ti ti-send me-1"></i>Send Test Mail</a
                  >
                </div>
              </div>
              <div class="card-body px-0 mx-3">
                <!-- start row -->
                <div class="row">
                  <div class="col-md-6">
                    <div class="card shadow-none">
                      <div class="card-body">
                        <div class="d-flex">
                          <span
                            class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"
                            ><img src="@/assets/img/icons/php-mailer.svg" alt="Img"
                          /></span>
                          <div>
                            <p class="fw-medium text-dark mb-1">PHP Mailer</p>
                            <p class="mb-0">
                              Used to send emails safely and easily via PHP code from a
                              web server.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- end card body -->
                      <div
                        class="card-footer d-flex align-items-center justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1 me-2"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                            ><i class="ti ti-trash"></i
                          ></a>
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#php_mailer"
                            ><i class="ti ti-settings"></i
                          ></a>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input m-0"
                            type="checkbox"
                            checked=""
                          />
                        </div>
                      </div>
                      <!-- end card footer -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->

                  <div class="col-md-6">
                    <div class="card shadow-none">
                      <div class="card-body">
                        <div class="d-flex">
                          <span
                            class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"
                            ><img src="@/assets/img/icons/smtp.svg" alt="Img"
                          /></span>
                          <div>
                            <p class="fw-medium text-dark mb-1">SMTP</p>
                            <p class="mb-0">
                              SMTP is used to send, relay or forward messages from a mail
                              client.
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- end card body -->
                      <div
                        class="card-footer d-flex align-items-center justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1 me-2"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                            ><i class="ti ti-trash"></i
                          ></a>
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#php_smtp"
                            ><i class="ti ti-settings"></i
                          ></a>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input m-0"
                            type="checkbox"
                            checked=""
                          />
                        </div>
                      </div>
                      <!-- end card footer -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->
                  <div class="col-md-6">
                    <div class="card shadow-none">
                      <div class="card-body">
                        <div class="d-flex">
                          <span
                            class="avatar avatar-lg p-2 bg-light rounded flex-shrink-0 me-2"
                            ><img src="@/assets/img/icons/send-grid.svg" alt="Img"
                          /></span>
                          <div>
                            <p class="fw-medium text-dark mb-1">Send Grid</p>
                            <p class="mb-0">
                              Cloud-based email marketing tool that assists marketers and
                              developers .
                            </p>
                          </div>
                        </div>
                      </div>
                      <!-- end card body -->
                      <div
                        class="card-footer d-flex align-items-center justify-content-between"
                      >
                        <div class="d-flex align-items-center">
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1 me-2"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_modal"
                            ><i class="ti ti-trash"></i
                          ></a>
                          <a
                            class="btn btn-sm btn-light border rounded-2 p-1"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#test_mail"
                            ><i class="ti ti-settings"></i
                          ></a>
                        </div>
                        <div class="form-check form-switch">
                          <input
                            class="form-check-input m-0"
                            type="checkbox"
                            checked=""
                          />
                        </div>
                      </div>
                      <!-- end card footer -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </div>
            </div>
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
  <!-- Start Add Mail -->
  <div id="php_mailer" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">PHP Mailer</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >From Email Address<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Email Password<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >From Email Name<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Mail -->

  <!-- Start Add Mail -->
  <div id="php_smtp" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">SMTP</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >From Email Address<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Email Password<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Email Host<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Port<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Mail -->

  <!-- Start Add Mail -->
  <div id="test_mail" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Test Mail</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-0">
              <label class="form-label"
                >Email Address<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Mail -->
</template>
