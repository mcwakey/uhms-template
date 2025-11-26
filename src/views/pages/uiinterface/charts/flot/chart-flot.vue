<template>
  <layouts-header :title="title" :text="text" :text1="text1" />
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper cardhead">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="page-header">
        <!-- start row -->
        <div class="row">
          <div class="col-sm-12">
            <h3 class="page-title">Flot Chart</h3>
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
              <li class="breadcrumb-item active">Flot Charts</li>
            </ul>
          </div>
        </div>
        <!-- end row -->
      </div>

      <!-- ENd Page Header -->

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
                height="300"
                :options="barflotChart.flotbar1"
                :series="barflotChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Bar Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="300"
                :options="bar2flotChart.flotbar2"
                :series="bar2flotChart.series"
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
                height="300"
                :options="lineflotChat.flotline1"
                :series="lineflotChat.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Line ChartPOints</div>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="300"
                :options="linepointflotChart.flotline2"
                :series="linepointflotChart.series"
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
                height="300"
                :options="areaflotChart.flotarea1"
                :series="areaflotChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Area Chart Points</div>
            </div>
            <div class="card-body">
              <apexchart
                type="area"
                height="300"
                :options="areapointflotChart.flotarea2"
                :series="areapointflotChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <!-- /Chart -->

        <!-- Chart -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <div class="card-title">Pie Chart</div>
            </div>
            <div class="card-body">
              <apexchart
                type="pie"
                height="300"
                :options="pieflotChart.flotpie1"
                :series="pieflotChart.series"
              ></apexchart>
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
                height="300"
                :options="donutflotChart.flotpie2"
                :series="donutflotChart.series"
              ></apexchart>
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
  barflotChart,
  bar2flotChart,
  lineflotChat,
  linepointflotChart,
  areaflotChart,
  areapointflotChart,
  pieflotChart,
  donutflotChart,
} from "./data";
export default {
  data() {
    return {
      barflotChart: barflotChart,
      bar2flotChart: bar2flotChart,
      lineflotChat: lineflotChat,
      linepointflotChart: linepointflotChart,
      areaflotChart: areaflotChart,
      areapointflotChart: areapointflotChart,
      pieflotChart: pieflotChart,
      donutflotChart: donutflotChart,
      title: "Home",
      text1: "Charts",
      text: "Flot Charts",
    };
  },
};
</script>
