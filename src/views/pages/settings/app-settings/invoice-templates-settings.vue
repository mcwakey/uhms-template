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
                <h5 class="fw-bold">Invoice Templates</h5>
              </div>
              <div class="card-body px-0 mx-3">
                <!-- start row -->
                <div class="row gx-3">
                  <div class="col-md-3">
                    <div class="card invoice-template bg-white">
                      <div class="card-body p-2">
                        <div class="invoice-img">
                          <a href="#">
                            <img
                              class="w-100"
                              src="@/assets/img/invoice/invoice-template-01.jpg"
                              alt="invoice"
                            />
                          </a>
                          <a
                            href="#"
                            class="invoice-view-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#invoice_view_1"
                            ><i class="ti ti-eye"></i
                          ></a>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <a href="javascript:void(0);">General Invoice 1</a>
                          <a
                            href="javascript:void(0);"
                            class="invoice-star d-flex align-items-center justify-content-center"
                          >
                            <i class="ti ti-star"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end col -->
                  <div class="col-md-3">
                    <div class="card invoice-template bg-white">
                      <div class="card-body p-2">
                        <div class="invoice-img">
                          <a href="#">
                            <img
                              class="w-100"
                              src="@/assets/img/invoice/invoice-template-02.jpg"
                              alt="invoice"
                            />
                          </a>
                          <a
                            href="#"
                            class="invoice-view-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#invoice_view_2"
                            ><i class="ti ti-eye"></i
                          ></a>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <a href="javascript:void(0);">General Invoice 2</a>
                          <a
                            href="javascript:void(0);"
                            class="invoice-star d-flex align-items-center justify-content-center"
                          >
                            <i class="ti ti-star"></i>
                          </a>
                        </div>
                      </div>
                      <!-- end card body -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->
                  <div class="col-md-3">
                    <div class="card invoice-template bg-white">
                      <div class="card-body p-2">
                        <div class="invoice-img">
                          <a href="#">
                            <img
                              class="w-100"
                              src="@/assets/img/invoice/invoice-template-03.jpg"
                              alt="invoice"
                            />
                          </a>
                          <a
                            href="#"
                            class="invoice-view-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#invoice_view_3"
                            ><i class="ti ti-eye"></i
                          ></a>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <a href="javascript:void(0);">General Invoice 3</a>
                          <a
                            href="javascript:void(0);"
                            class="invoice-star d-flex align-items-center justify-content-center"
                          >
                            <i class="ti ti-star"></i>
                          </a>
                        </div>
                      </div>
                      <!-- end card body -->
                    </div>
                    <!-- end card -->
                  </div>
                  <!-- end col -->
                  <div class="col-md-3">
                    <div class="card invoice-template bg-white">
                      <div class="card-body p-2">
                        <div class="invoice-img">
                          <a href="#">
                            <img
                              class="w-100"
                              src="@/assets/img/invoice/invoice-template-04.jpg"
                              alt="invoice"
                            />
                          </a>
                          <a
                            href="#"
                            class="invoice-view-icon"
                            data-bs-toggle="modal"
                            data-bs-target="#invoice_view_4"
                            ><i class="ti ti-eye"></i
                          ></a>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                          <a href="javascript:void(0);">General Invoice 4</a>
                          <a
                            href="javascript:void(0);"
                            class="invoice-star d-flex align-items-center justify-content-center"
                          >
                            <i class="ti ti-star"></i>
                          </a>
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
  <!-- Start Invoivce View -->
  <div class="modal fade addmodal" id="invoice_view_1">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">General Invoice 1</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="d-flex align-items-center justify-content-center">
            <img
              class="w-100 invoice-template-img"
              src="@/assets/img/invoice/invoice-template-img-01.jpg"
              alt="User Img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Invoivce View -->
  <!-- Start Invoivce View -->
  <div class="modal fade addmodal" id="invoice_view_2">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">General Invoice 2</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="d-flex align-items-center justify-content-center">
            <img
              class="w-100 invoice-template-img"
              src="@/assets/img/invoice/invoice-template-img-02.jpg"
              alt="User Img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Invoivce View -->
  <!-- Start Invoivce View -->
  <div class="modal fade addmodal" id="invoice_view_3">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">General Invoice 3</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="d-flex align-items-center justify-content-center">
            <img
              class="w-100 invoice-template-img"
              src="@/assets/img/invoice/invoice-template-img-03.jpg"
              alt="User Img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Invoivce View -->
  <!-- Start Invoivce View -->
  <div class="modal fade addmodal" id="invoice_view_4">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="mb-0">General Invoice 4</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="d-flex align-items-center justify-content-center">
            <img
              class="w-100 invoice-template-img"
              src="@/assets/img/invoice/invoice-template-img-04.jpg"
              alt="User Img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Invoivce View -->
</template>
