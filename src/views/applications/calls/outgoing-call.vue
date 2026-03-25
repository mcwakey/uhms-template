<template>
  <layouts-header></layouts-header>
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
          <h4 class="fs-18 fw-semibold mb-0">OutgoingCall</h4>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item">
              <router-link to="/dashboard/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">Applications</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Outgoing Call</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row  -->
      <div class="row">
        <div class="col-xxl-12">
          <div class="card card-max-height mb-0 shadow-none">
            <div class="card-body text-center d-flex flex-column justify-content-center">
              <div
                class="animation-ripple avatar avatar-xxxl d-flex mx-auto mb-3 rounded-circle mb-3"
              >
                <img
                  src="@/assets/img/users/user-01.jpg"
                  class="img-fluid rounded-circle"
                  alt="img"
                />
              </div>
              <h5>Anthony Lewis</h5>
              <p>Calling...</p>
              <div class="d-flex align-items-center justify-content-center">
                <a
                  href="javascript:void(0);"
                  class="btn btn-light btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center me-3"
                  ><i class="ti ti-video fs-20"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-light btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center me-3"
                  ><i class="ti ti-microphone fs-20"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-danger btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center me-3"
                  ><i class="ti ti-phone-off fs-20"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-light btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center me-3"
                  ><i class="ti ti-user-plus fs-20"></i
                ></a>
                <a
                  href="javascript:void(0);"
                  class="btn btn-light btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center"
                  ><i class="ti ti-volume fs-20"></i
                ></a>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row  -->
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
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
