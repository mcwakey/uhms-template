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
                src="@/assets/img/auth/reg-illustration-img.png"
                alt="log-illustration-img-01"
                class="img-fluid img1"
              />
            </div>
          </div>
          <!-- end row-->

          <div class="col-lg-6 col-md-12 col-sm-12 position-relative">
            <div
              class="row justify-content-center align-items-center overflow-auto flex-wrap vh-100 py-3"
            >
              <div class="col-md-8 mx-auto">
                <Form
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
                    <div class="card border-1 p-lg-3 shadow-md rounded-3 shadow-sm mb-4">
                      <div class="card-body">
                        <div class="text-center mb-3">
                          <h5 class="mb-1 fs-20 fw-bold">Register</h5>
                          <p class="mb-0">Please enter your details to create account</p>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Full Name</label>
                          <div class="input-group">
                            <span class="input-group-text border-end-0 bg-white">
                              <i class="ti ti-user fs-14 text-dark"></i>
                            </span>

                            <input
                              type="text"
                              value=""
                              class="form-control border-start-0 ps-0"
                              placeholder="Enter Name"
                            />
                          </div>
                        </div>
                        <div class="mb-3">
                          <label class="form-label">Email Address</label>
                          <div class="input-group">
                            <span class="input-group-text border-end-0 bg-white">
                              <i class="ti ti-mail fs-14 text-dark"></i>
                            </span>
                            <Field
                              name="email"
                              type="text"
                              value=""
                              class="form-control border-start-0 ps-0"
                              placeholder="Enter Email Address"
                              :class="{ 'is-invalid': errors.email }"
                            />
                            <div class="invalid-feedback">{{ errors.email }}</div>
                            <div class="emailshow text-danger" id="email"></div>
                          </div>
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
                              <Field
                                name="password"
                                :type="showPassword ? 'text' : 'password'"
                                class="pass-inputs form-control ps-0 border-0"
                                placeholder="****************"
                                :class="{ 'is-invalid': errors.password }"
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
                            <div class="invalid-feedback">{{ errors.password }}</div>
                            <div class="emailshow text-danger" id="password"></div>
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
                              <Field
                                name="confirmpassword"
                                :type="showPassword1 ? 'text' : 'password'"
                                class="pass-inputs form-control ps-0 border-0"
                                placeholder="****************"
                                :class="{ 'is-invalid': errors.confirmpassword }"
                              />
                              <span class="input-group-text bg-white border-0">
                                <i
                                  @click="toggleShow1"
                                  class="toggle-passwords text-dark fs-14"
                                  :class="{
                                    'ti ti-eye': showPassword1,
                                    'ti ti-eye-off': !showPassword1,
                                  }"
                                ></i>
                              </span>
                            </div>
                            <div class="invalid-feedback">
                              {{ errors.confirmpassword }}
                            </div>
                            <div class="emailshow text-danger" id="confirmpassword"></div>
                          </div>
                        </div>
                        <div
                          class="d-flex align-items-center justify-content-between mb-3"
                        >
                          <div class="d-flex align-items-center">
                            <div class="form-check form-check-md mb-0">
                              <input
                                class="form-check-input"
                                id="remember_me"
                                type="checkbox"
                              />
                              <label
                                for="remember_me"
                                class="form-check-label mt-0 text-dark"
                                >I agree to the
                                <router-link
                                  to="/pages/terms-and-conditions"
                                  class="text-decoration-underline text-primary"
                                >
                                  Terms of Service</router-link
                                >
                                &
                                <router-link
                                  to="/pages/privacy-policy"
                                  class="text-decoration-underline text-primary"
                                  >Privacy Policy
                                </router-link></label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="mb-2">
                          <button type="submit" class="btn bg-primary text-white w-100">
                            Register
                          </button>
                        </div>
                        <div class="login-or position-relative mb-3">
                          <span class="span-or">OR</span>
                        </div>
                        <div class="mb-3">
                          <div
                            class="d-flex align-items-center justify-content-center flex-wrap"
                          >
                            <div class="text-center me-2 flex-fill">
                              <a
                                href="javascript:void(0);"
                                class="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
                              >
                                <img
                                  class="img-fluid m-1"
                                  src="@/assets/img/icons/facebook-logo.svg"
                                  alt="Facebook"
                                />
                              </a>
                            </div>
                            <div class="text-center me-2 flex-fill">
                              <a
                                href="javascript:void(0);"
                                class="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
                              >
                                <img
                                  class="img-fluid m-1"
                                  src="@/assets/img/icons/google-logo.svg"
                                  alt="Google"
                                />
                              </a>
                            </div>
                            <div class="text-center me-2 flex-fill">
                              <a
                                href="javascript:void(0);"
                                class="br-10 p-1 btn btn-outline-light border d-flex align-items-center justify-content-center"
                              >
                                <img
                                  class="img-fluid m-1"
                                  src="@/assets/img/icons/apple-logo.svg"
                                  alt="apple"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="text-center">
                          <h6 class="fw-normal fs-14 text-dark mb-0">
                            Already have an account yet?
                            <router-link to="//" class="hover-a"> Login</router-link>
                          </h6>
                        </div>
                      </div>
                      <!-- end card body -->
                    </div>
                    <!-- end card -->
                  </div>
                </Form>
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
import { ref } from "vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { router } from "@/router";
export default {
  data() {
    return {
      showPassword: false,
      showPassword1: false,
      password: null,
    };
  },
  components: {
    /* eslint-disable vue/no-reserved-component-names */
    Form,
    Field,
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
    buttonLabel1() {
      return this.showPassword1 ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow1() {
      this.showPassword1 = !this.showPassword1;
    },
  },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const showPassword = ref(false);
    // eslint-disable-next-line no-unused-vars
    const emailError = ref("");
    // eslint-disable-next-line no-unused-vars
    const passwordError = ref("");

    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmpassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Confirm password is required"),
    });

    const onSubmit = (values) => {
      if (values.password === values.confirmpassword) {
        let Rawdata = localStorage.getItem("storedData");
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email == values.email);
        if (Eresult) {
          document.getElementById("email").innerHTML = "This email are already exist";
        } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          router.push("/login-illustration");
          localStorage.setItem("storedData", jsonData);
        }
      } else {
        document.getElementById("confirmpassword").innerHTML = "Password not matching";
      }
    };

    return {
      schema,
      onSubmit,
    };
  },
};
</script>
