<template>
  <patients-header></patients-header>
  <patients-sidebar></patients-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="mb-3 border-bottom pb-3">
        <h4 class="fw-bold mb-0">Settings</h4>
      </div>
      <!-- End Page Header -->

      <div class="card" id="profilePage">
        <div class="card-body">
          <!-- end card body -->
          <div class="row">
            <div class="col-lg-3">
              <div class="text-start">
                <router-link
                  to="/patient/settings/patient-profile-settings"
                  class="d-block w-100 btn btn-md border rounded fs-14 fw-medium text-primary text-start active mb-1 w-100 justify-content-start"
                >
                  <i class="ti ti-user-cog me-2 text-primary"> </i> Profile Settings
                </router-link>
                <router-link
                  to="/patient/settings/patient-password-settings"
                  class="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
                >
                  <i class="ti ti-lock-star me-2 text-dark"> </i> Change Password
                </router-link>
                <router-link
                  to="/patient/settings/patient-notifications-settings"
                  class="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
                >
                  <i class="ti ti-bell me-2 text-dark"> </i> Notifications
                </router-link>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-9">
              <div class="border-1 border-start ps-4">
                <h5 class="fw-bold pb-3 mb-4 border-1 border-bottom">
                  Basic Information
                </h5>

                <!-- start row -->
                <div class="row border-bottom mb-3">
                  <div class="col-lg-12">
                    <!-- start row -->
                    <div class="row align-items-center mb-3">
                      <div class="col-lg-2">
                        <label class="form-label mb-0"
                          >Profile Image<span class="text-danger ms-1">*</span></label
                        >
                      </div>
                      <!-- end col -->
                      <div class="col-lg-10">
                        <div class="profile-container">
                          <img src="@/assets/img/users/user-08.jpg" alt="Profile" />
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
                    </div>
                    <!-- end row -->
                  </div>
                  <!-- end col -->
                  <div class="col-lg-6">
                    <!-- start row -->
                    <div class="row align-items-center mb-3">
                      <div class="col-lg-4">
                        <label class="form-label mb-0"
                          >First Name<span class="text-danger ms-1">*</span></label
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
                          >Last Name<span class="text-danger ms-1">*</span></label
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
                          >Email<span class="text-danger ms-1">*</span></label
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
                </div>
                <!-- end row -->

                <!-- start row -->
                <div class="row border-bottom mb-3">
                  <div class="mb-3">
                    <h5 class="fw-bold mb-0">Address Information</h5>
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

                <div class="d-flex justify-content-end align-items-center gap-2">
                  <a href="" class="btn btn-light btn-md fs-13 fw-medium rounded">
                    Cancel
                  </a>
                  <a href="" class="btn btn-primary btn-md fs-13 fw-medium rounded">
                    Save Changes
                  </a>
                </div>
              </div>
            </div>
            <!-- end col -->
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
