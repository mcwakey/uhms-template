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
                <h5 class="fw-bold">Organization</h5>
              </div>
              <div class="card-body px-0 mx-3">
                <form>
                  <!-- start row -->
                  <div class="row border-bottom mb-3">
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0"
                            >Company Name<span class="text-danger ms-1">*</span></label
                          >
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <input type="text" class="form-control" />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0"
                            >Email Address<span class="text-danger ms-1">*</span></label
                          >
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <input type="text" class="form-control" />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0"
                            >Phone Number<span class="text-danger ms-1">*</span></label
                          >
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <input type="text" class="form-control" />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Fax</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <input type="text" class="form-control" />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->

                  <!-- start row -->
                  <div class="row mb-3 border-bottom">
                    <div class="mb-3">
                      <h5 class="fw-bold mb-0">Company Images</h5>
                    </div>

                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="d-flex align-items-center mb-3">
                        <div class="me-3">
                          <div class="profile-container">
                            <img
                              src="@/assets/img/logo.svg"
                              alt="Profile"
                              class="img-fluid object-fit-contain p-1"
                            />
                            <div class="overlay-btn">
                              <a
                                href="javascript:void(0);"
                                class="text-white"
                                id="uploadTrigger"
                              >
                                <i class="ti ti-photo fs-10"></i>
                              </a>
                            </div>
                            <input type="file" id="profileUpload" style="display: none" />
                          </div>
                        </div>
                        <!-- end col -->
                        <div class="">
                          <p class="fw-medium text-dark mb-1">Logo</p>
                          <span>Recommended size is 250 px*100 px</span>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->

                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="d-flex align-items-center mb-3">
                        <div class="me-3">
                          <div class="profile-container">
                            <img
                              src="@/assets/img/logo-white.svg"
                              alt="Profile"
                              class="img-fluid object-fit-contain bg-dark p-1"
                            />
                            <div class="overlay-btn">
                              <a
                                href="javascript:void(0);"
                                class="text-white"
                                id="uploadTrigger1"
                              >
                                <i class="ti ti-photo fs-10"></i>
                              </a>
                            </div>
                            <input
                              type="file"
                              id="profileUpload1"
                              style="display: none"
                            />
                          </div>
                        </div>
                        <!-- end col -->
                        <div class="">
                          <p class="fw-medium text-dark mb-1">Dark Logo</p>
                          <span>Recommended size is 250 px*100 px</span>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->

                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="d-flex align-items-center mb-3">
                        <div class="me-3">
                          <div class="profile-container">
                            <img
                              src="@/assets/img/logo-small.svg"
                              alt="Profile"
                              class="img-fluid object-fit-none"
                            />
                            <div class="overlay-btn">
                              <a
                                href="javascript:void(0);"
                                class="text-white"
                                id="uploadTrigger2"
                              >
                                <i class="ti ti-photo fs-10"></i>
                              </a>
                            </div>
                            <input
                              type="file"
                              id="profileUpload2"
                              style="display: none"
                            />
                          </div>
                        </div>
                        <!-- end col -->
                        <div class="">
                          <p class="fw-medium text-dark mb-1">Mini Logo</p>
                          <span>Recommended size is 250 px*100 px</span>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->

                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="d-flex align-items-center mb-3">
                        <div class="me-3">
                          <div class="profile-container">
                            <img
                              src="@/assets/img/logo-small.svg"
                              alt="Profile"
                              class="img-fluid object-fit-none bg-dark"
                            />
                            <div class="overlay-btn">
                              <a
                                href="javascript:void(0);"
                                class="text-white"
                                id="uploadTrigger3"
                              >
                                <i class="ti ti-photo fs-10"></i>
                              </a>
                            </div>
                            <input
                              type="file"
                              id="profileUpload3"
                              style="display: none"
                            />
                          </div>
                        </div>
                        <!-- end col -->
                        <div class="">
                          <p class="fw-medium text-dark mb-1">Dark Mini Logo</p>
                          <span>Recommended size is 250 px*100 px</span>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->

                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="d-flex align-items-center mb-3">
                        <div class="me-3">
                          <div class="profile-container">
                            <img
                              src="@/assets/img/logo-small.svg"
                              alt="Profile"
                              class="img-fluid object-fit-none"
                            />
                            <div class="overlay-btn">
                              <a
                                href="javascript:void(0);"
                                class="text-white"
                                id="uploadTrigger4"
                              >
                                <i class="ti ti-photo fs-10"></i>
                              </a>
                            </div>
                            <input
                              type="file"
                              id="profileUpload4"
                              style="display: none"
                            />
                          </div>
                        </div>
                        <!-- end col -->
                        <div class="">
                          <p class="fw-medium text-dark mb-1">Favicon</p>
                          <span>Recommended size is 250 px*100 px</span>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->

                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="d-flex align-items-center mb-3">
                        <div class="me-3">
                          <div class="profile-container">
                            <img
                              src="@/assets/img/logo-small.svg"
                              alt="Profile"
                              class="img-fluid object-fit-none"
                            />
                            <div class="overlay-btn">
                              <a
                                href="javascript:void(0);"
                                class="text-white"
                                id="uploadTrigger5"
                              >
                                <i class="ti ti-photo fs-10"></i>
                              </a>
                            </div>
                            <input
                              type="file"
                              id="profileUpload5"
                              style="display: none"
                            />
                          </div>
                        </div>
                        <!-- end col -->
                        <div class="">
                          <p class="fw-medium text-dark mb-1">Apple Icon</p>
                          <span>Recommended size is 250 px*100 px</span>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->

                  <!-- start row -->
                  <div class="row border-bottom mb-3 pb-3">
                    <div class="mb-3">
                      <h5 class="fw-bold mb-0">Contact Information</h5>
                    </div>
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Address Line 1</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <input type="text" class="form-control" />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Address Line 2</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <input type="text" class="form-control" />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Country</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selected"
                            :options="CandSel"
                            placeholder="Select"
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">State</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selectedOne"
                            :options="CanEng"
                            placeholder="Select"
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">City</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selectedTwo"
                            :options="CanLon"
                            placeholder="Select"
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Pincode</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <input type="text" class="form-control" />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->

                  <div class="d-flex align-items-center justify-content-end">
                    <a href="javascript:void(0);" class="btn btn-light me-3">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
                  </div>
                </form>
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
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      CandSel: [
        { label: "Select", value: "Select" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
      ],
      CanEng: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "Ontario", value: "Ontario" },
        { label: "England", value: "England" },
        { label: "Bavaria", value: "Bavaria" },
      ],
      CanLon: [
        { label: "Select", value: "Select" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "Toronto", value: "Toronto" },
        { label: "London", value: "London" },
        { label: "Munich", value: "Munich" },
      ],
    };
  },
};
</script>
