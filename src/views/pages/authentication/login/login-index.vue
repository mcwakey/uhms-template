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
                      {{ t('login.title') }}
                    </h1>
                    <p class="text-light fw-normal text-light">
                      {{ t('login.subtitle') }}
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
                <VeeForm
                  @submit="onSubmit"
                  :validation-schema="schema"
                  v-slot="{ errors }"
                  class="d-flex justify-content-center align-items-center"
                >
                  <div
                    class="d-flex flex-column justify-content-lg-center p-4 p-lg-0 pb-0 flex-fill"
                  >
                    <div class="mx-auto mb-4 text-center">
                      <img src="@/assets/img/logo.svg" class="img-fluid" alt="Logo" />
                    </div>
                    <div class="card border-1 p-lg-3 shadow-md rounded-3 m-0">
                      <div class="card-body">
                        <div class="text-center mb-3">
                          <h5 class="mb-1 fs-20 fw-bold">{{ t('login.sign_in') }}</h5>
                          <br />
                        </div>
                        <div class="mb-3">
                          <label class="form-label">{{ t('login.staff_id_label') }}</label>
                          <div class="input-group">
                            <span class="input-group-text border-end-0 bg-white">
                              <i class="ti ti-user fs-14 text-dark"></i>
                            </span>
                            <Field
                              name="username"
                              v-model="username"
                              type="text"
                              :placeholder="t('login.staff_id_placeholder')"
                              class="form-control border-start-0 ps-0"
                              :class="{ 'is-invalid': errors.username }"
                            />
                          </div>
                          <div class="mt-2">
                            <div class="invalid-feedback">{{ errors.username }}</div>
                            <div class="emailshow text-danger" id="email"></div>
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">{{ t('login.password_label') }}</label>
                          <div class="position-relative">
                            <div class="pass-group input-group position-relative border rounded">
                              <span class="input-group-text bg-white border-0">
                                <i class="ti ti-lock text-dark fs-14"></i>
                              </span>
                              <Field
                                :class="{ 'is-invalid': errors.password }"
                                name="password"
                                :type="showPassword ? 'text' : 'password'"
                                :placeholder="t('login.password_placeholder')"
                                class="pass-input form-control ps-0 border-0"
                                value=""
                              />
                              <span class="input-group-text bg-white border-0">
                                <i
                                  @click="toggleShow"
                                  class="toggle-password text-dark fs-14"
                                  :class="{
                                    'ti ti-eye': showPassword,
                                    'ti ti-eye-off': !showPassword,
                                  }"
                                ></i>
                              </span>
                            </div>
                            <div class="mt-2">
                              <div class="invalid-feedback">{{ errors.password }}</div>
                              <div class="passwordshow text-danger" id="password"></div>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-3">
                          <div class="d-flex align-items-center">
                            <div class="form-check form-check-md mb-0">
                              <input
                                class="form-check-input"
                                id="remember_me"
                                type="checkbox"
                                v-model="rememberMe"
                              />
                              <label for="remember_me" class="form-check-label mt-0 text-dark"
                                >{{ t('login.remember_me') }}</label
                              >
                            </div>
                          </div>
                          <div class="text-end">
                            <router-link to="/forget" class="text-danger"
                              >{{ t('login.forgot_password') }}</router-link
                            >
                          </div>
                        </div>
                        <div class="mb-2">
                          <button type="submit" class="btn bg-primary text-white w-100">
                            {{ t('login.login_btn') }}
                          </button>
                        </div>
                        <div class="login-or position-relative mb-3">
                          <span class="span-or">{{ t('login.or') }}</span>
                        </div>
                        <div class="text-center">
                          <h6 class="fw-normal fs-14 text-dark mb-0">
                            {{ t('login.no_account') }}
                            <router-link to="#" class="hover-a">
                              {{ t('login.contact_admin') }}</router-link
                            >
                          </h6>
                        </div>
                      </div>
                      <!-- end card body -->
                    </div>
                    <!-- end card -->
                  </div>
                </VeeForm>
                <p class="fs-14 text-dark text-center mt-4">
                  {{ t('login.copyright', { year: new Date().getFullYear() }) }}
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
import { ref, computed } from 'vue'
import { Form as VeeForm, Field } from 'vee-validate'
import * as Yup from 'yup'
import { useAuthStore } from '@/stores/authStore'
import { useI18n } from 'vue-i18n'
import { notifySuccess, notifyError } from '@/utils/notifications/toast'

// Interfaces
interface LoginFormValues {
  username: string
  password: string
}

// Store
const authStore = useAuthStore()
const { t } = useI18n()

// Reactive state
const showPassword = ref<boolean>(false)
const rememberMe = ref<boolean>(false)
const username = ref<string>(localStorage.getItem('remembered_username') || '')

if (username.value) rememberMe.value = true

// Validation schema
const schema = Yup.object().shape({
  username: Yup.string().required(t('login.staff_id_required')),
  password: Yup.string().required(t('login.password_required')),
})

// Computed properties
const isLoading = computed(() => authStore.isLoading)
const loginError = computed(() => authStore.error)

// Methods
function toggleShow() {
  showPassword.value = !showPassword.value
}

async function onSubmit(values: any) {
  const formValues = values as LoginFormValues
  if (rememberMe.value) {
    localStorage.setItem('remembered_username', formValues.username)
  } else {
    localStorage.removeItem('remembered_username')
  }
  
  try {
    // Call the login method from the auth store
    await authStore.login({
      username: formValues.username,
      password: formValues.password,
      remember_me: rememberMe.value,
    })
    
    notifySuccess(t('login.success_message'))
    
    // Delay navigation to ensure toast displays
    setTimeout(() => {
      authStore.handleRouteChange()
    }, 200)
  } catch (error) {
    notifyError(authStore.error || t('login.error_message'))
  }
}
</script>
