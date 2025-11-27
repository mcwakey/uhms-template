<template>
  <div class="auth-bg position-relative overflow-hidden">
    <!-- Start Content -->
    <div class="container-fuild position-relative z-1">
      <div class="w-100 overflow-hidden position-relative flex-wrap d-block vh-100 bg-white">
        <!-- start row-->
        <div class="row">
          <div class="col-lg-8 p-0">
            <div
              class="login-backgrounds login-covers bg-primary d-lg-flex align-items-center justify-content-center d-none flex-wrap p-4 position-relative h-100 z-0"
            >
              <div class="authentication-card w-100">
                <div class="authen-overlay-item w-100">
                  <div class="authen-head text-center">
                    <h1 class="text-white fs-32 fw-bold mb-2">
                      Seamless healthcare access <br />
                      with smart, modern clinic
                    </h1>
                    <p class="text-light fw-normal text-light">
                      Experience efficient, secure, and user-friendly healthcare management designed
                      for modern clinics and growing practices.
                    </p>
                  </div>
                  <div class="mt-4 mx-auto authen-overlay-img">
                    <img src="@/assets/img/auth/cover-imgs-1.png" alt="Img" />
                  </div>
                </div>
              </div>
              <img
                src="@/assets/img/auth/cover-imgs-2.png"
                alt="cover-imgs-2"
                class="img-fluid cover-img"
              />
            </div>
          </div>
          <!-- end row-->

          <div class="col-lg-4 col-md-12 col-sm-12">
            <div
              class="row justify-content-center align-items-center overflow-auto flex-wrap vh-100"
            >
              <div class="col-md-8 mx-auto">
                <div class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill">
                  <div class="mx-auto mb-4 text-center">
                    <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
                  </div>
                  <div class="card border-1 p-lg-3 shadow-md rounded-3 m-0">
                    <div class="card-body">
                      <div class="text-center mb-3">
                        <h5 class="mb-1 fs-20 fw-bold">Forgot Password</h5>
                        <p class="text-muted">Enter your email to receive a password reset link.</p>
                      </div>

                      <VeeForm
                        @submit="onSubmit"
                        :validation-schema="currentSchema"
                        v-slot="{ errors }"
                      >
                        <div v-if="!emailSubmitted">
                          <div class="mb-3">
                            <label class="form-label">Email</label>
                            <div class="input-group">
                              <span class="input-group-text border-end-0 bg-white">
                                <i class="ti ti-user fs-14 text-dark"></i>
                              </span>
                              <Field
                                name="email"
                                v-model="email"
                                type="email"
                                placeholder="Enter your email"
                                class="form-control border-start-0 ps-0"
                                :class="{ 'is-invalid': errors.email }"
                              />
                            </div>
                            <div class="mt-2">
                              <div class="invalid-feedback">{{ errors.email }}</div>
                            </div>
                          </div>
                          <div class="mb-2">
                            <button type="submit" class="btn bg-primary text-white w-100">
                              Send Reset Link
                            </button>
                          </div>
                        </div>
                        <div v-else>
                          <div class="mb-3">
                            <label class="form-label">New Password</label>
                            <div class="input-group">
                              <span class="input-group-text border-end-0 bg-white">
                                <i class="ti ti-lock fs-14 text-dark"></i>
                              </span>
                              <Field
                                name="password"
                                v-model="password"
                                type="password"
                                placeholder="Enter new password"
                                class="form-control border-start-0 ps-0"
                                :class="{ 'is-invalid': errors.password }"
                              />
                            </div>
                            <div class="mt-2">
                              <div class="invalid-feedback">{{ errors.password }}</div>
                            </div>
                          </div>
                          <div class="mb-3">
                            <label class="form-label">Confirm Password</label>
                            <div class="input-group">
                              <span class="input-group-text border-end-0 bg-white">
                                <i class="ti ti-lock fs-14 text-dark"></i>
                              </span>
                              <Field
                                name="confirmPassword"
                                v-model="confirmPassword"
                                type="password"
                                placeholder="Confirm new password"
                                class="form-control border-start-0 ps-0"
                                :class="{ 'is-invalid': errors.confirmPassword }"
                              />
                            </div>
                            <div class="mt-2">
                              <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
                            </div>
                          </div>
                          <div class="mb-2">
                            <button type="submit" class="btn bg-primary text-white w-100">
                              Reset Password
                            </button>
                          </div>
                        </div>
                      </VeeForm>
                      <div class="text-center mt-3">
                        <router-link to="/login" class="text-primary">Back to Login</router-link>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <p class="fs-14 text-dark text-center mt-4">
                  Copyright &copy; {{ new Date().getFullYear() }} - ClickSoftwareGh.
                </p>
              </div>
              <!-- end row-->
            </div>
          </div>
        </div>
        <!-- end row-->
      </div>
    </div>
    <!-- End Content -->
  </div>
</template>

<script>
import { ref } from 'vue'
import { Form as VeeForm, Field } from 'vee-validate'
import * as Yup from 'yup'
import { useAuthStore as authStore } from '@/stores/auth'

export default {
  components: {
    VeeForm,
    Field,
  },
  setup() {
    const email = ref('')
    const password = ref('')
    const confirmPassword = ref('')
    const emailSubmitted = ref(false)
    const uuid = ref(null)

    const emailSchema = Yup.object().shape({
      email: Yup.string().email('Enter a valid email').required('Email is required'),
    })
    const passwordSchema = Yup.object().shape({
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm your password'),
    })

    const currentSchema = ref(emailSchema)

    const onSubmit = async (values) => {
      if (!emailSubmitted.value) {
        var response = await authStore().forgotPassword(values.email)
        if (response.status === 200) {
          response = await authStore().tokenVerify(response.data.token)
          if (response.status === 200) {
            uuid.value = response.data.uuid
            emailSubmitted.value = true
            currentSchema.value = passwordSchema
          } else {
            // Handle error response, e.g., show a notification or alert
            console.error('Error verifying token:', response.data.detail)
            emailSubmitted.value = false
            currentSchema.value = emailSchema
          }
        } else {
          // Handle error response, e.g., show a notification or alert
          console.error('Error sending reset link:', response.data.detail)
          emailSubmitted.value = false
          currentSchema.value = emailSchema
        }
      } else {
        // Handle password reset logic here
        if (values.password !== values.confirmPassword) {
          // Show an error message if passwords do not match
          // console.error('Passwords do not match')
          return
        }
        await authStore().newPassword(uuid.value, values.password)
        // Optionally redirect or show a success message
      }

      //   emailSubmitted.value = true
      //   currentSchema.value = passwordSchema
      // } else {
      //   // Handle password reset logic here
      //   await authStore().resetPassword(password.value)
      //   // Optionally redirect or show a success message
      // }
    }

    return {
      email,
      password,
      confirmPassword,
      emailSubmitted,
      currentSchema,
      onSubmit,
    }
  },
}
</script>
