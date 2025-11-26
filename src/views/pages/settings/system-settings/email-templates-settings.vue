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
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="fw-bold">Email Templates</h5>
                  <a
                    href="javascript:void(0);"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#add_reason"
                    ><i class="ti ti-plus me-1"></i>New Template</a
                  >
                </div>
              </div>
              <div class="card-body px-0 mx-3">
                <!-- Table List -->
                <div class="table-responsive border">
                  <table class="table table-nowrap">
                    <thead class="tablehead-light">
                      <tr>
                        <th>Template Name</th>
                        <th>Created On</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Welcome Email</td>
                        <td>30 Apr 2025</td>
                        <td>
                          <span
                            class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                            >Active</span
                          >
                        </td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_reason"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_reason"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Appointment Confirmation</td>
                        <td>15 Apr 2025</td>
                        <td>
                          <span
                            class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                            >Active</span
                          >
                        </td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_reason"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_reason"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Appointment Reminder</td>
                        <td>02 Apr 2025</td>
                        <td>
                          <span
                            class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                            >Active</span
                          >
                        </td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_reason"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_reason"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Appointment Rescheduled</td>
                        <td>27 Mar 2025</td>
                        <td>
                          <span
                            class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                            >Active</span
                          >
                        </td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_reason"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_reason"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Appointment Cancelled</td>
                        <td>12 Mar 2025</td>
                        <td>
                          <span
                            class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                            >Active</span
                          >
                        </td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_reason"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_reason"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>Test Result Notification</td>
                        <td>05 Mar 2025</td>
                        <td>
                          <span
                            class="badge bg-soft-danger fs-13 fw-medium text-danger border border-danger py-1 px-2"
                            >Inactive</span
                          >
                        </td>
                        <td class="action-item">
                          <a
                            href="javascript:void(0);"
                            data-bs-toggle="dropdown"
                            class="btn p-1 btn-white border"
                          >
                            <i class="ti ti-dots-vertical"></i>
                          </a>
                          <ul class="dropdown-menu p-2">
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_reason"
                                >Edit</a
                              >
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                class="dropdown-item d-flex align-items-center"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_reason"
                                >Delete</a
                              >
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- /Table List -->
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
  <!-- Start Add Categories -->
  <div id="add_reason" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Add Template</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Template Name<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Content<span class="text-danger ms-1">*</span></label
              >
              <div class="editor three-line">
                <div class="editor-container" style="height: 95%">
                  <div ref="editorRef" class="quill-editor"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Add Reason
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Categories -->

  <!-- Start Edit Categories -->
  <div id="edit_reason" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Edit Template</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Template Name<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" value="Welcome Email" />
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Content<span class="text-danger ms-1">*</span></label
              >
              <div class="editor three-line">
                <div class="editor-container" style="height: 90%">
                  <div ref="editorRefone" class="quill-editor"></div>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">Tags</label>
              <vue3-tags-input
                class="input-tags form-control"
                type="text"
                id="inputBox2"
                data-role="tagsinput"
                name="specialist"
                value="Tag1"
                :tags="tagsTwo"
              />
            </div>
            <div class="mb-0">
              <div class="d-flex align-items-center justify-content-between">
                <label class="form-label"
                  >Status<span class="text-danger ms-1">*</span></label
                >
                <div class="form-check form-switch">
                  <input class="form-check-input m-0" type="checkbox" checked="" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Edit Categories -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_reason">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0"
          />
          <div class="mb-3">
            <span class="avatar avatar-lg bg-danger text-white"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="fw-bold mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure want to delete?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-danger position-relative z-1"
              data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Delete Modal  -->
</template>
<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      tagsTwo: [
        "{Company Name}",
        "{Customer Name}",
        "{Clinic Name}",
        "{User Email}",
        "{Invoice ID}",
        "{Date}",
        "{Support Email}",
        "{Phone Number}",
        "{Invoice Amount}",
        "{Shipping Address}",
        "{Billing Address}",
        "{Doctor Name}",
        "{Patient Name}",
      ],
      content: "",
      content:
        "Subject: Welcome to Company Name Let’s Get Started! Dear  Welcome to {Clinic Name}! Your account has been successfully created in our medical system. You now have secure access to schedule appointments, view your health records, check prescriptions, and see lab results all in one place.",
      selected: null,
    };
  },
  mounted() {
    this.initQuill();
  },

  methods: {
    initQuill() {
      const quill = new Quill(this.$refs.editorRef, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
      });
      const quillone = new Quill(this.$refs.editorRefone, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            ["image", "code-block"],
          ],
        },
      });

      quill.on("text-change", () => {
        this.content = quill.root.innerHTML;
      });
      quillone.on("text-change", () => {
        this.content = quillone.root.innerHTML;
      });
    },
  },
};
</script>
