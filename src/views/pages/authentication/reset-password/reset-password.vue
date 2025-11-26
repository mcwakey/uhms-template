<template>
  <div class="auth-bg position-relative overflow-hidden">
    <div class="container-fuild position-relative z-1">
      <div
        class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 bg-white"
      >
        <!-- start row-->
        <div class="row">
          <div class="col-lg-6 p-0">
            <div
              class="login-backgrounds d-lg-flex align-items-center justify-content-center d-none flex-wrap p-4 position-relative h-100 z-0"
            >
              <img
                src="@/assets/img/auth/reset-illustration-img.png"
                alt="log-illustration-img-01"
                class="img-fluid img1"
              />
            </div>
          </div>
          <!-- end row-->

          <div class="col-lg-6 col-md-12 col-sm-12">
            <div
              class="row justify-content-center align-items-center overflow-auto flex-wrap vh-100 py-3"
            >
              <div class="col-md-8 mx-auto">
                <form
                  @submit.prevent="submitForm"
                  class="d-flex justify-content-center align-items-center"
                >
                  <div
                    class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill"
                  >
                    <div class="mx-auto mb-4 text-center">
                      <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
                    </div>
                    <div class="card border-1 p-lg-3 shadow-md rounded-3 mb-4">
                      <div class="card-body">
                        <div class="text-center mb-3">
                          <h5 class="mb-1 fs-20 fw-bold">Reset Password</h5>
                          <p class="mb-0">
                            Your new password must be different from previous used
                            passwords.
                          </p>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Password</label>
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
                                v-model="password"
                              />
                              <span
                                class="input-group-text bg-white border-0"
                                @click="togglePassword"
                              >
                                <i
                                  :class="[
                                    'ti',
                                    showPassword ? 'ti-eye' : 'ti-eye-off',
                                    'text-dark',
                                    'fs-14',
                                  ]"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Confirm Password</label>
                          <div class="position-relative">
                            <div
                              class="pass-group input-group position-relative border rounded"
                            >
                              <span class="input-group-text bg-white border-0">
                                <i class="ti ti-lock text-dark fs-14"></i>
                              </span>
                              <input
                                :type="showConfirmPassword ? 'text' : 'password'"
                                class="pass-inputs form-control ps-0 border-0"
                                placeholder="****************"
                                v-model="confirmPassword"
                              />
                              <span
                                class="input-group-text bg-white border-0"
                                @click="toggleConfirmPassword"
                              >
                                <i
                                  :class="[
                                    'ti',
                                    showConfirmPassword ? 'ti-eye' : 'ti-eye-off',
                                    'text-dark',
                                    'fs-14',
                                  ]"
                                ></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <button type="submit" class="btn bg-primary text-white w-100">
                            Submit
                          </button>
                        </div>
                        <div class="text-center">
                          <h6 class="fw-normal fs-14 text-dark mb-0">
                            Return to
                            <router-link to="/login-illustration" class="hover-a">
                              Login</router-link
                            >
                          </h6>
                        </div>
                      </div>
                      <!-- end card body -->
                    </div>
                    <!-- end card -->
                  </div>
                </form>
                <p class="text-dark text-center">Copyright &copy; 2025 - Preclinic.</p>
              </div>
              <!-- end row-->
            </div>
          </div>
        </div>
        <!-- end row-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    submitForm() {
      this.$router.push("/success");
    },
  },
};
</script>
