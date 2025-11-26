<template>
  <div class="auth-bg position-relative overflow-hidden">
    <!-- Start Content -->
    <div class="container-fuild position-relative z-1">
      <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <!-- start row -->
        <div
          class="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap"
        >
          <div class="col-lg-4 mx-auto">
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
                      <h5 class="mb-1 fs-20 fw-bold">2 Step Verification</h5>
                      <p class="mb-0">
                        Please enter the OTP received to confirm your account ownership. A
                        code has been send to
                        <span class="text-dark b-block"> ******doe@example.com</span>
                      </p>
                    </div>
                    <div class="text-center otp-input">
                      <div class="d-flex align-items-center justify-content-center mb-3">
                        <input
                          v-for="(digit, index) in otpDigits"
                          :key="index"
                          :ref="'digit' + index"
                          type="text"
                          class="border rounded text-center fs-26 fw-bold me-3"
                          maxlength="1"
                          inputmode="numeric"
                          pattern="[0-9]*"
                          v-model="otp[index]"
                          @input="onInput(index, $event)"
                          @keydown.backspace="onBackspace(index, $event)"
                        />
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                      <div class="mb-3 d-flex align-items-center">
                        <p class="text-gray-9 me-4 mb-0">
                          Didn't receive code?
                          <a href="javascript:void(0);" class="text-primary"
                            >Resend Code</a
                          >
                        </p>
                        <span class="text-danger">00:45</span>
                      </div>
                    </div>

                    <div class="mt-0">
                      <button type="submit" class="btn bg-primary text-white w-100">
                        Submit
                      </button>
                    </div>
                  </div>
                  <!-- end card body -->
                </div>
                <!-- end card -->
              </div>
            </form>
            <p class="text-dark text-center">Copyright &copy; 2025 - Preclinic</p>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- End Content -->

    <!-- Start Bg Content -->

    <img src="@/assets/img/auth/auth-bg-top.png" alt="" class="img-fluid element-01" />
    <img src="@/assets/img/auth/auth-bg-bot.png" alt="" class="img-fluid element-02" />
    <!-- End Bg Content -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      otp: ["", "", "", ""],
      otpDigits: [0, 1, 2, 3],
    };
  },
  methods: {
    onInput(index, event) {
      const value = event.target.value;

      // Allow only digits
      if (!/^\d$/.test(value)) {
        this.otp[index] = "";
        return;
      }

      // Move to next input
      if (index < this.otp.length - 1) {
        const nextInput = this.$refs[`digit${index + 1}`][0];
        nextInput.focus();
      }
    },
    onBackspace(index, event) {
      if (!this.otp[index] && index > 0) {
        const prevInput = this.$refs[`digit${index - 1}`][0];
        prevInput.focus();
      }
    },
    submitForm() {
      this.$router.push("/reset-password-basic");
    },
  },
};
</script>
