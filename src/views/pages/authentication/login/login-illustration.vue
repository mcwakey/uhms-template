<template>
  <div class="auth-bg position-relative overflow-hidden">
    <!-- Start Content -->
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
                src="@/assets/img/icons/log-illustration-img-01.png"
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
                    <div class="card border-1 p-lg-3 shadow-md rounded-3 mb-4">
                      <div class="card-body">
                        <div class="text-center mb-3">
                          <h5 class="mb-1 fs-20 fw-bold">Sign In</h5>
                          <p class="mb-0">
                            Please enter below details to access the dashboard
                          </p>
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
                              placeholder="Enter Email Address"
                              value="example@dreamstechnologies.com"
                              class="form-control border-start-0 ps-0"
                              :class="{ 'is-invalid': errors.email }"
                            />
                          </div>
                          <div class="mt-2">
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
                                class="pass-input form-control ps-0 border-0"
                                value="123456"
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
                            <div class="mt-2">
                              <div class="invalid-feedback">{{ errors.password }}</div>
                              <div class="emailshow text-danger" id="password"></div>
                            </div>
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
                                >Remember Me</label
                              >
                            </div>
                          </div>
                          <div class="text-end">
                            <router-link to="/forgot-password" class="text-danger"
                              >Forgot Password?</router-link
                            >
                          </div>
                        </div>
                        <div class="mb-2">
                          <button type="submit" class="btn bg-primary text-white w-100">
                            Login
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
                            Don’t have an account yet?
                            <router-link to="/register" class="hover-a">
                              Register</router-link
                            >
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
    <!-- End Content -->
  </div>
</template>
<script>
import { ref } from "vue";
import { router } from "@/router";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
export default {
  components: {
    /* eslint-disable vue/no-reserved-component-names */
    Form,
    Field,
  },
  data() {
    return {
      showPassword: false,
      password: null,
      emailError: "",
      passwordError: "",
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
  setup() {
    let users = localStorage.getItem("storedData");
    if (users === null) {
      let password = [
        {
          email: "example@dreamstechnologies.com",
          password: "123456",
        },
      ];
      const jsonData = JSON.stringify(password);
      localStorage.setItem("storedData", jsonData);
    }
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    });
    const onSubmit = (values) => {
      document.getElementById("email").innerHTML = "";
      document.getElementById("password").innerHTML = "";
      let data = localStorage.getItem("storedData");
      var Pdata = JSON.parse(data);
      const Eresult = Pdata.find(({ email }) => email === values.email);
      if (Eresult) {
        if (Eresult.password === values.password) {
          router.push("/dashboard");
        } else {
          document.getElementById("password").innerHTML = "Incorrect password";
        }
      } else {
        document.getElementById("email").innerHTML = "Email is not valid";
      }
    };
    return {
      schema,
      onSubmit,
      checked: ref(false),
    };
  },
};
</script>
