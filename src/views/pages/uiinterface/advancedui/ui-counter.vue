<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper cardhead">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Counter</h3>
          </div>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5>Clients</h5>
              <vue3-autocounter
                class="counter"
                ref="counter"
                :startAmount="1000"
                :delay="3"
                :endAmount="3000"
                :duration="5"
                separator=","
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5>Total Sales</h5>
              <vue3-autocounter
                class="counter"
                ref="counter"
                :startAmount="3000"
                :delay="3"
                :endAmount="10000"
                :duration="5"
                separator=","
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <h5>Total Projects</h5>
              <vue3-autocounter
                class="counter"
                ref="counter"
                :startAmount="5000"
                :delay="3"
                :endAmount="15000"
                :duration="5"
                separator=","
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Count Down</h5>
            </div>
            <div class="card-body">
              <h6>Time Count from 3</h6>
              <vue3-autocounter
                ref="counter"
                :startAmount="1"
                :endAmount="3"
                :duration="50"
                prefix="00 Days 00 : "
                decimalSeparator=" : "
                :decimals="2"
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Count Up</h5>
            </div>
            <div class="card-body">
              <h6>Time Counting From 0</h6>
              <vue3-autocounter
                ref="counter"
                :startAmount="0"
                :endAmount="3"
                :duration="100"
                prefix="00 Days 00 : "
                decimalSeparator=" : "
                :decimals="2"
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Count Inbetween</h5>
            </div>
            <div class="card-body">
              <h6>Time counting from 30 to 20</h6>
              <vue3-autocounter
                ref="counter"
                :startAmount="30"
                :endAmount="20"
                :duration="1000"
                prefix="00 Days 00 : "
                decimalSeparator=" : "
                :decimals="2"
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Count Callback</h5>
            </div>
            <div class="card-body">
              <h6>Count from 10 to 0 and calls timer end callback</h6>
              <vue3-autocounter
                ref="counter"
                :startAmount="0"
                :endAmount="3"
                :duration="100"
                prefix="00 Days 00 : "
                decimalSeparator=" : "
                :decimals="2"
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->

        <!-- Counter -->
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Custom Output</h5>
            </div>
            <div class="card-body">
              <h6>Changed output pattern</h6>
              <vue3-autocounter
                ref="counter"
                :startAmount="10"
                :endAmount="60"
                :duration="2000"
                prefix="02 Days 23 Hour : "
                decimalSeparator=" : "
                :decimals="2"
                :autoinit="true"
              />
            </div>
          </div>
        </div>
        <!-- /Counter -->
      </div>
      <!-- end row -->
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
      text: "Counters",
    };
  },
};
</script>
