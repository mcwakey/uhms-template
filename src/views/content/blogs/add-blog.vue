<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- start row -->
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="mb-3">
            <h6 class="fw-semibold">
              <router-link to="/blogs/blogs"
                ><i class="ti ti-chevron-left me-1"></i>Blogs</router-link
              >
            </h6>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">Title</label>
                <input type="text" class="form-control" />
              </div>

              <div class="mb-3">
                <label class="form-label">Category</label>
                <vue3-select v-model="selected" :options="BlogGen" placeholder="Select" />
              </div>

              <div class="mb-3">
                <label class="form-label">Content</label>
                <div class="editor">
                  <div class="editor-container" style="height: 80%">
                    <div ref="editorRef" class="quill-editor" />
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">Tag</label>
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

              <div class="mb-3">
                <label class="form-label">Feature Image</label>
                <input class="form-control" type="file" />
              </div>

              <div class="d-flex align-items-center justify-content-end">
                <a href="javascript:void(0);" class="btn btn-light me-2">Cancel</a>
                <a href="javascript:void(0);" class="btn btn-primary">Add Blog</a>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
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
      tagsTwo: ["Preventive Care"],
      content: "",
      selected: null,
      BlogGen: [
        { label: "Select", value: "Select" },
        { label: "General Medicine", value: "General Medicine" },
        { label: "Disease & Conditions", value: "Disease & Conditions" },
        { label: "Mental Health", value: "Mental Health" },
        { label: "Patient Education", value: "Patient Education" },
        {
          label: "Nutrition & Lifestyle Medicine",
          value: "Nutrition & Lifestyle Medicine",
        },
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
