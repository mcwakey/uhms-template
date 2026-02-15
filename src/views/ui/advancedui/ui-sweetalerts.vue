<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content pb-0">
      <!-- Page Header -->
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">Sweetalert</h4>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

            <li class="breadcrumb-item">
              <a href="javascript: void(0);">Advanced UI</a>
            </li>

            <li class="breadcrumb-item active">Sweetalert</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">A Basic Message</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">Here's a basic example of SweetAlert.</p>
              <button
                type="button"
                @click="basicAlert"
                class="btn btn-primary"
                id="sweetalert-basic"
              >
                Click me
              </button>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">Title</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">A Title with a Text Under.</p>
              <button
                type="button"
                @click="titleAlert"
                class="btn btn-primary"
                id="sweetalert-title"
              >
                Click Me
              </button>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-lg-6">
          <div class="card card-h-100">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">HTML</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">Here's an example of SweetAlert with HTML content.</p>
              <button
                type="button"
                @click="htmlAlert"
                class="btn btn-primary"
                id="custom-html-alert"
              >
                Toggle HTML SweetAlert
              </button>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-lg-6">
          <div class="card card-h-100">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">All States</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">Here are examples for each of SweetAlert's states.</p>

              <div class="d-flex flex-wrap gap-2">
                <button type="button" id="sweetalert-info" class="btn btn-info">
                  Toggle Info
                </button>
                <button type="button" id="sweetalert-warning" class="btn btn-warning">
                  Toggle Warning
                </button>
                <button type="button" id="sweetalert-error" class="btn btn-danger">
                  Toggle Error
                </button>
                <button type="button" id="sweetalert-success" class="btn btn-success">
                  Toggle Success
                </button>
                <button type="button" id="sweetalert-question" class="btn btn-primary">
                  Toggle Question
                </button>
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">Long Content</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">A modal window with a long content inside.</p>

              <button type="button" id="sweetalert-longcontent" class="btn btn-secondary">
                Click Me
              </button>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">With Confirm Button</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">
                A warning message, with a function attached to the "Confirm"-button...
              </p>

              <button
                type="button"
                id="sweetalert-confirm-button"
                class="btn btn-secondary"
                @click="confirmAlert"
              >
                Click Me
              </button>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">With Cancel Button</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">
                By passing a parameter, you can execute something else for "Cancel".
              </p>

              <button type="button" id="sweetalert-params" class="btn btn-secondary">
                Click Me
              </button>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">With Image Header (Logo)</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">A message with custom Image Header.</p>

              <button type="button" id="sweetalert-image" class="btn btn-secondary">
                Click Me
              </button>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">Auto Close</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">A message with auto close timer.</p>

              <button
                type="button"
                @click="autoCloseAlert"
                id="sweetalert-close"
                class="btn btn-secondary"
              >
                Click Me
              </button>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">Position</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">A custom positioned dialog.</p>

              <div class="d-flex flex-wrap gap-2">
                <button
                  class="btn btn-primary"
                  @click="positionedAlert"
                  id="position-top-start"
                >
                  Top Start
                </button>
                <button class="btn btn-primary" id="position-top-end">Top End</button>
                <button class="btn btn-primary" id="position-bottom-start">
                  Bottom Starts
                </button>
                <button class="btn btn-primary" id="position-bottom-end">
                  Bottom End
                </button>
              </div>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">With Custom Padding, Background</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">
                A message with custom width, padding and background.
              </p>
              <button
                type="button"
                id="custom-padding-width-alert"
                class="btn btn-secondary"
              >
                Click Me
              </button>
            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->

        <div class="col-lg-6">
          <div class="card">
            <div class="card-header border-bottom d-flex align-items-center">
              <h4 class="header-title">Ajax Request</h4>
            </div>
            <div class="card-body">
              <p class="text-muted">Ajax request example.</p>
              <button type="button" id="ajax-alert" class="btn btn-secondary">
                Click Me
              </button>
            </div>
            <!-- end card-body -->
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

  <!-- ========================
End Page Content
========================= -->
</template>
<script>
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default {
  components: {
    VueSweetalert2,
  },
  name: "App",
  methods: {
    basicAlert() {
      this.$swal("Hello Vue world!");
    },
    titleAlert() {
      this.$swal({
        title: "Custom Title",
        text: "This is an alert with a title!",
        icon: "info",
      });
    },
    htmlAlert() {
      this.$swal({
        title: "<strong>HTML Content</strong>",
        html: "You can <b>format</b> your text!",
        icon: "warning",
      });
    },
    confirmAlert() {
      this.$swal({
        title: "Are you sure?",
        text: "You won’t be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    autoCloseAlert() {
      this.$swal({
        title: "Auto close alert!",
        text: "I will close in 3 seconds.",
        timer: 3000,
        showConfirmButton: false,
      });
    },
  },
};
</script>

<style>
.container {
  text-align: center;
  margin-top: 20px;
}
button {
  margin: 5px;
}
</style>
