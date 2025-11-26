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

      <div class="card">
        <div class="card-body">
          <!-- end card body -->
          <div class="row">
            <div class="col-lg-3">
              <div class="text-start">
                <router-link
                  to="/patient/settings/patient-profile-settings"
                  class="btn btn-md rounded fs-14 fw-medium text-dark mb-1 w-100 justify-content-start"
                >
                  <i class="ti ti-user-cog me-2 text-primary"> </i> Profile Settings
                </router-link>
                <router-link
                  to="/patient/settings/patient-password-settings"
                  class="d-block w-100 btn btn-md border rounded fs-14 fw-medium text-primary text-start mb-1 active w-100 justify-content-start"
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
                <h5 class="fw-bold pb-3 mb-4 border-1 border-bottom">Change Password</h5>

                <!-- start row -->
                <div class="row border-bottom mb-3">
                  <div class="col-lg-6">
                    <!-- start row -->
                    <div class="row align-items-center mb-3">
                      <div class="col-lg-5">
                        <label class="form-label mb-0"
                          >New Password <span class="text-danger">*</span>
                        </label>
                      </div>
                      <!-- end col -->
                      <div class="col-lg-7">
                        <div class="position-relative">
                          <div
                            class="pass-group input-group position-relative border rounded"
                          >
                            <span class="input-group-text bg-white border-0">
                              <i class="ti ti-lock text-dark fs-14"></i>
                            </span>
                            <input
                              :type="showPassword ? 'text' : 'password'"
                              class="pass-input form-control ps-0 border-0"
                              placeholder="****************"
                            />
                            <span
                              class="input-group-text bg-white border-0"
                              @click="togglePassword"
                            >
                              <i
                                :class="showPassword ? 'ti ti-eye' : 'ti ti-eye-off'"
                                class="text-dark fs-14"
                              ></i>
                            </span>
                          </div>
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
                      <div class="col-lg-5">
                        <label class="form-label mb-0"
                          >Confirm Password <span class="text-danger">*</span></label
                        >
                      </div>
                      <!-- end col -->
                      <div class="col-lg-7">
                        <div class="position-relative">
                          <div
                            class="pass-group input-group position-relative border rounded"
                          >
                            <span class="input-group-text bg-white border-0">
                              <i class="ti ti-lock text-dark fs-14"></i>
                            </span>
                            <input
                              :type="showPasswordOne ? 'text' : 'password'"
                              class="pass-input form-control ps-0 border-0"
                              placeholder="****************"
                            />
                            <span
                              class="input-group-text bg-white border-0"
                              @click="togglePasswordOne"
                            >
                              <i
                                :class="showPasswordOne ? 'ti ti-eye' : 'ti ti-eye-off'"
                                class="text-dark fs-14"
                              ></i>
                            </span>
                          </div>
                        </div>
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
import { ref } from "vue";

export default {
  setup() {
    const showPassword = ref(false);
    const showPasswordOne = ref(false);

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };
    const togglePasswordOne = () => {
      showPasswordOne.value = !showPasswordOne.value;
    };

    return { showPassword, showPasswordOne, togglePassword, togglePasswordOne };
  },
};
</script>
