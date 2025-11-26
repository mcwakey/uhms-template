<template>
  <layouts-header :title="title" :text="text" :text1="text1" />
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper cardhead">
    <!-- Start Content -->
    <div class="content">
      <!-- start row -->
      <div class="row">
        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Bar Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="350"
                :options="barchartjs.morrisbar"
                :series="barchartjs.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Stacked Bar Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="350"
                :options="barstacked.morrisbar2"
                :series="barstacked.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Line Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="350"
                :options="linechart.morrisbar3"
                :series="linechart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Area Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="area"
                height="350"
                :options="areachart.morrisbar4"
                :series="areachart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Line Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="350"
                :options="linechart3.morrisbar6"
                :series="linechart3.series"
              >
              </apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Donut Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="donut"
                height="350"
                :options="linechart2.morrisbar5"
                :series="linechart2.series"
              >
              </apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->
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
import {
  barchartjs,
  barstacked,
  linechart,
  areachart,
  linechart2,
  linechart3,
} from "./data";

export default {
  data() {
    return {
      barchartjs: barchartjs,
      barstacked: barstacked,
      linechart: linechart,
      areachart: areachart,
      linechart2: linechart2,
      linechart3: linechart3,
      title: "Home",
      text1: "Chart",
      text: "Morris Chart",
    };
  },
  components: {},
  mounted() {},
  name: "chart-morris",
};
</script>
