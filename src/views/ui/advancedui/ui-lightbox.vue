<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <div class="page-header">
        <div class="content-page-header">
          <h5>Lightbox</h5>
        </div>
      </div>
      <div class="row">
        <!-- Lightbox -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Single Image Lightbox</h5>
            </div>
            <lightbox-one />
          </div>
        </div>
        <!-- /Lightbox -->

        <!-- Lightbox -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Image with Description</h5>
            </div>
            <lightbox-two />
          </div>
        </div>
        <!-- /Lightbox -->
      </div>
    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-dark">Version : 1.3.8</p>
    </div>
    <!-- End Footer -->
  </div>

  <!-- ========================
End Page Content
========================= -->
</template>
<script>
export default {
  data() {
    return {
      title: "Home",
      text: "Pricing",
    };
  },
};
</script>
