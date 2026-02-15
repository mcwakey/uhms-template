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
                <h5 class="fw-bold">Invoice Settings</h5>
              </div>
              <div class="card-body px-0 mx-3">
                <form>
                  <!-- start row -->
                  <div class="row border-bottom mb-3">
                    <div class="col-lg-12">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-3">
                          <label class="form-label mb-0">Invoice Image</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-9">
                          <input type="file" class="form-control" />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-12">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-3">
                          <label class="form-label mb-0">Invoice Prefix</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-4">
                          <input type="text" class="form-control" />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-12">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-3">
                          <label class="form-label mb-0">Invoice Roundoff</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-4">
                          <vue3-select
                            v-model="selected"
                            :options="InvoSele"
                            placeholder="Select"
                          />
                        </div>
                        <!-- end col -->
                        <div class="col-lg-5">
                          <div class="form-check form-switch ps-0">
                            <input
                              class="form-check-input m-0"
                              type="checkbox"
                              checked=""
                            />
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-12">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-3">
                          <label class="form-label mb-0">Show Company Details</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <div class="form-check form-switch ps-0">
                            <input
                              class="form-check-input m-0"
                              type="checkbox"
                              checked=""
                            />
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-12">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-3">
                          <label class="form-label mb-0">Invoice Terms</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-9">
                          <div class="editor three-line">
                            <div class="editor-container">
                              <div ref="editorRef" class="quill-editor" />
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

                  <div class="d-flex align-items-center justify-content-end">
                    <a href="javascript:void(0);" class="btn btn-light me-3">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
                  </div>
                </form>
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
</template>
<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";
export default {
  data() {
    return {
      content: "",
      selected: null,
      InvoSele: [
        { label: "Select", value: "Select" },
        { label: "Mar 18 2025", value: "Mar 18 2025" },
        { label: "2025 Mar 18", value: "2025 Mar 18" },
      ],
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

      quill.on("text-change", () => {
        this.content = quill.root.innerHTML;
      });
    },
  },
};
</script>
