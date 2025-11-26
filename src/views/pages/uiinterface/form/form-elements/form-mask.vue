<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <!-- Page wrapper -->
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Form Mask</h3>
          </div>
        </div>
      </div>
      <!-- /Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Form Mask</h5>
              <p class="sub-header">
                Input masks can be used to force the user to enter data conform a specific
                format. Unlike validation, the user can't enter any other key than the
                ones specified by the mask.
              </p>
            </div>
            <div class="card-body">
              <form action="#">
                <!-- start row -->
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label">Phone</label>
                    <input type="text" id="phone" class="form-control" />
                    <span class="form-text text-muted">(999) 999-9999</span>
                  </div>
                  <!-- end col -->
                  <div class="col-md-6">
                    <label class="form-label">Date</label>
                    <input type="text" id="date" class="form-control" />
                    <span class="form-text text-muted">dd/mm/yyyy</span>
                  </div>
                  <!-- end col -->
                  <div class="col-md-6">
                    <label class="form-label">SSN field 1</label>
                    <input type="text" id="ssn" class="form-control" />
                    <span class="form-text text-muted">e.g "999-99-9999"</span>
                  </div>
                  <!-- end col -->
                  <div class="col-md-6">
                    <label class="form-label">Phone field + ext.</label>
                    <input type="text" id="phoneExt" class="form-control" />
                    <span class="form-text text-muted">+40 999 999 999</span>
                  </div>
                  <!-- end col -->
                  <div class="col-md-6">
                    <label class="form-label">Product Key</label>
                    <input type="text" id="products" class="form-control" />
                    <span class="form-text text-muted">e.g a*-999-a999</span>
                  </div>
                  <!-- end col -->
                  <div class="col-md-6">
                    <label class="form-label">Currency</label>
                    <input type="text" id="currency" class="form-control" />
                    <span class="form-text text-muted">$ 999,999,999.99</span>
                  </div>
                  <!-- end col -->
                  <div class="col-md-6">
                    <label class="form-label">Eye Script</label>
                    <input type="text" id="eyescript" class="form-control" />
                    <span class="form-text text-muted">~9.99 ~9.99 999</span>
                  </div>
                  <!-- end col -->
                  <div class="col-md-6">
                    <label class="form-label">Percent</label>
                    <input type="text" id="pct" class="form-control" />
                    <span class="form-text text-muted">e.g "99%"</span>
                  </div>
                  <!-- end col -->
                  <div class="col-md-6">
                    <label class="form-label">Credit Card Number</label>
                    <input type="text" class="form-control" id="ccn" />
                    <span class="form-text text-muted">e.g "999.999.999.9999"</span>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </form>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!--  End container -->

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
  <!-- /Page wrapper -->

  <!-- ========================
End Page Content
========================= -->
</template>
<script>
export default {
  data() {
    return {
      title: "Home",
      text: "Mask",
    };
  },
};
</script>
