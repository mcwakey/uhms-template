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
          <h4 class="fs-18 fw-semibold mb-0">Video Call</h4>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item">
              <router-link to="/dashboard/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">Applications</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Video Call</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-xxl-12">
          <div class="single-video d-flex">
            <div class="join-video flex-fill position-relative">
              <img
                src="@/assets/img/media/video.jpg"
                class="img-fluid w-100"
                alt="Logo"
              />
              <div class="chat-active-users">
                <div class="video-avatar position-absolute p-2 top-0 end-0">
                  <img
                    src="@/assets/img/users/user-01.jpg"
                    class="img-fluid rounded border border-primary"
                    alt="Logo"
                  />
                  <div class="position-absolute start-0 bottom-0 w-100 text-center py-2">
                    <span
                      class="bg-white text-dark d-inline-block fw-medium rounded p-1 my-2"
                      >Joe Lewis</span
                    >
                  </div>
                </div>
              </div>

              <div
                class="position-absolute start-0 top-0 p-2 z-1 d-flex align-items-center"
              >
                <div class="me-2">
                  <span
                    class="bg-light-subtle rounded badge text-dark p-2 d-inline-flex align-items-center"
                    ><i class="ti ti-circle-filled me-1"></i>40:12</span
                  >
                </div>
                <a
                  href="javascript:void(0);"
                  class="btn p-0 avatar-sm btn-light btnFullscreen"
                >
                  <i class="ti ti-maximize"></i>
                </a>
              </div>
              <div
                class="d-flex justify-content-center align-items-center flex-wrap w-100 position-absolute bottom-0 z-2 p-2"
              >
                <div
                  class="bg-light bg-opacity-50 px-3 py-2 rounded-pill d-flex justify-content-center align-items-center"
                >
                  <a
                    href="javascript:void(0);"
                    class="bg-light btn-icon btn-sm bg-light d-flex justify-content-center align-items-center rounded me-2"
                    ><i class="ti ti-microphone"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="bg-light btn-icon btn-sm bg-light d-flex justify-content-center align-items-center rounded me-2"
                    ><i class="ti ti-video"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-icon btn-lg text-white bg-danger d-flex justify-content-center align-items-center rounded"
                    ><i class="ti ti-phone"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="bg-light btn-icon btn-sm bg-light d-flex justify-content-center align-items-center rounded mx-2"
                    ><i class="ti ti-volume"></i
                  ></a>
                  <a
                    href="javascript:void(0);"
                    class="bg-light text-dark btn-icon btn-sm d-flex align-items-center justify-content-center rounded"
                    ><i class="ti ti-user-off"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
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
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
