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
                      {{ t('auth.seamless_access_title') }}
                    </h1>
                    <p class="text-light fw-normal text-light">
                      {{ t('auth.seamless_access_desc') }}
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
                        <h5 class="mb-1 fs-20 fw-bold">{{ t('auth.forgot_password_title') }}</h5>
                        <p class="text-muted">{{ t('auth.forgot_password_desc') }}</p>
                      </div>

                      <VeeForm
                        @submit="onSubmit"
                        :validation-schema="currentSchema"
                        v-slot="{ errors }"
                      >
                        <div v-if="!emailSubmitted">
                          <div class="mb-3">
                            <label class="form-label">{{ t('auth.email_label') }}</label>
                            <div class="input-group">
                              <span class="input-group-text border-end-0 bg-white">
                                <i class="ti ti-user fs-14 text-dark"></i>
                              </span>
                              <Field
                                name="email"
                                v-model="email"
                                type="email"
                                :placeholder="t('auth.email_placeholder')"
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
                              {{ t('auth.send_reset_link') }}
                            </button>
                          </div>
                        </div>
                        <div v-else>
                          <div class="mb-3">
                            <label class="form-label">{{ t('auth.new_password_label') }}</label>
                            <div class="input-group">
                              <span class="input-group-text border-end-0 bg-white">
                                <i class="ti ti-lock fs-14 text-dark"></i>
                              </span>
                              <Field
                                name="password"
                                v-model="password"
                                type="password"
                                :placeholder="t('auth.new_password_placeholder')"
                                class="form-control border-start-0 ps-0"
                                :class="{ 'is-invalid': errors.password }"
                              />
                            </div>
                            <div class="mt-2">
                              <div class="invalid-feedback">{{ errors.password }}</div>
                            </div>
                          </div>
                          <div class="mb-3">
                            <label class="form-label">{{ t('auth.confirm_password_label') }}</label>
                            <div class="input-group">
                              <span class="input-group-text border-end-0 bg-white">
                                <i class="ti ti-lock fs-14 text-dark"></i>
                              </span>
                              <Field
                                name="confirmPassword"
                                v-model="confirmPassword"
                                type="password"
                                :placeholder="t('auth.confirm_password_placeholder')"
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
                              {{ t('auth.reset_password_button') }}
                            </button>
                          </div>
                        </div>
                      </VeeForm>
                      <div class="text-center mt-3">
                        <router-link to="/login" class="text-primary">{{ t('auth.back_to_login') }}</router-link>
                      </div>
                    </div>
                    <!-- end card body -->
                  </div>
                  <!-- end card -->
                </div>
                <p class="fs-14 text-dark text-center mt-4 pt-4">
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

<script setup lang="ts">
/**
 * ForgetIndex Component
 * 
 * Handles password reset flow:
 * 1. User enters email -> Request reset token
 * 2. Verify token -> Show password reset form
 * 3. User enters new password -> Reset password
 */
import { ref, computed } from 'vue'
import { Form as VeeForm, Field } from 'vee-validate'
import * as Yup from 'yup'
import { useAuthStore } from '@/stores/authStore'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { notifySuccess, notifyError } from '@/utils/notifications/toast'

const { t } = useI18n()
const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const emailSubmitted = ref(false)
const uuid = ref<string | null>(null)

const emailSchema = Yup.object().shape({
  email: Yup.string().email(t('validation.email_invalid')).required(t('validation.email_required')),
})

const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, t('validation.password_min_length'))
    .required(t('validation.password_required')),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], t('validation.passwords_must_match'))
    .required(t('validation.confirm_password_required')),
})

const currentSchema = computed(() => emailSubmitted.value ? passwordSchema : emailSchema)

const onSubmit = async (values: any) => {
  try {
    if (!emailSubmitted.value) {
      // Step 1: Send reset link
      const response = await authStore.forgotPassword(values.email)
      
      if (response.status === 200) {
        // Step 2: Verify token immediately (as per original logic)
        if (response.data.token) {
           const verifyResponse = await authStore.tokenVerify(response.data.token)
           if (verifyResponse.status === 200) {
             uuid.value = verifyResponse.data.uuid
             emailSubmitted.value = true
             notifySuccess(t('auth.reset_link_sent'))
           } else {
             notifyError(t('auth.token_verification_failed'))
           }
        } else {
           notifySuccess(t('auth.reset_link_sent_email'))
        }
      } else {
        notifyError(t('auth.reset_link_failed'))
      }
    } else {
      // Step 3: Reset password
      if (uuid.value) {
        await authStore.newPassword(uuid.value, values.password)
        notifySuccess(t('auth.password_reset_success'))
        router.push('/login')
      }
    }
  } catch (error: any) {
    console.error('Error in password reset flow:', error)
    const message = error.response?.data?.detail || error.message || t('errors.general_error')
    notifyError(message)
  }
}
</script>
