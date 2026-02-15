<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- row start -->
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- page header start -->
          <div class="mb-4">
            <h6 class="fs-14 fw-semibold mb-0 d-flex align-items-center">
              <router-link to="/content/pages" class="text-dark">
                <i class="ti ti-chevron-left me-1"></i>Pages</router-link
              >
            </h6>
          </div>
          <!-- page header end -->

          <!-- card start -->
          <div class="card">
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label mb-1 fw-medium"
                        >Title<span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label mb-1 fw-medium text-truncate"
                        >Slug<span class="fs-12 fw-normal text-body ms-1"
                          >(If you leave it empty, it will be generated
                          automatically)</span
                        ><span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label mb-1 fw-medium text-truncate"
                        >Description<span class="fs-12 fw-normal text-body ms-1"
                          >(Meta Tag)</span
                        ><span class="text-danger ms-1">*</span></label
                      >
                      <input type="text" class="form-control" />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label mb-1 fw-medium text-truncate"
                        >Keywords<span class="fs-12 fw-normal text-body ms-1"
                          >(Meta Tag)</span
                        ><span class="text-danger ms-1">*</span></label
                      >
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
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label mb-1 fw-medium text-truncate"
                        >Location<span class="text-danger ms-1">*</span></label
                      >
                      <div class="d-flex align-items-center gap-3">
                        <div class="form-check mb-1">
                          <input
                            type="radio"
                            id="customRadio1"
                            name="customRadio"
                            class="form-check-input"
                          />
                          <label class="form-check-label fw-normal" for="customRadio1"
                            >Top Menu</label
                          >
                        </div>
                        <div class="form-check">
                          <input
                            type="radio"
                            id="customRadio2"
                            name="customRadio"
                            class="form-check-input"
                          />
                          <label class="form-check-label fw-normal" for="customRadio2"
                            >Quick Links</label
                          >
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label mb-1 fw-medium"
                        >Language<span class="text-danger ms-1">*</span></label
                      >
                      <vue3-select
                        v-model="selected"
                        :options="Pagesel"
                        placeholder="Select"
                      />
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="mb-0">
                      <label class="form-label">Description</label>
                      <div class="editor pages-editor">
                        <div class="editor-container">
                          <div ref="editorRef" class="quill-editor" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- card end -->

          <div class="d-flex align-items-center justify-content-end">
            <a href="javascript:void(0);" class="btn btn-light me-2">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary">Add Page</a>
          </div>
        </div>
      </div>
      <!-- row end -->
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
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      tagsTwo: ["departments", "doctors"],
      content: "",
      selected: null,
      Pagesel: [
        { label: "Select", value: "Select" },
        { label: "English", value: "English" },
        { label: "German", value: "German" },
        { label: "Arabic", value: "Arabic" },
        { label: "French", value: "French" },
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
