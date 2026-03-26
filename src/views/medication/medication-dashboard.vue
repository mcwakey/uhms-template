<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content pb-0">
      <div class="d-flex align-items-sm-center justify-content-between flex-wrap gap-2 mb-4">
        <div>
          <h4 class="fw-bold mb-0">Medication Dashboard</h4>
        </div>
        <div class="d-flex align-items-center flex-wrap gap-2">
          <router-link to="/pharmacy/pharmacy-index" class="btn btn-primary d-inline-flex align-items-center"><i class="ti ti-plus me-1"></i>New Medication</router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <div class="position-relative border card rounded-2 shadow-sm">
            <img src="@/assets/img/bg/bg-01.svg" alt="img" class="position-absolute start-0 top-0" />
            <div class="card-body">
              <div class="d-flex align-items-center mb-2 justify-content-between">
                <span class="avatar bg-primary rounded-circle"><i class="ti ti-pills fs-24"></i></span>
                <div class="text-end">
                  <span class="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success">+14%</span>
                  <p class="fs-13 mb-0">in last 7 Days</p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <p class="mb-1">Dispensed</p>
                  <h3 class="fw-bold mb-0">1,514</h3>
                </div>
                <div>
                  <apexchart type="bar" height="54" width="80" :options="adminColChart.sChart" :series="adminColChart.series"></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="position-relative border card rounded-2 shadow-sm">
            <img src="@/assets/img/bg/bg-02.svg" alt="img" class="position-absolute start-0 top-0" />
            <div class="card-body">
              <div class="d-flex align-items-center mb-2 justify-content-between">
                <span class="avatar bg-danger rounded-circle"><i class="ti ti-users fs-24"></i></span>
                <div class="text-end">
                  <span class="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success">+7%</span>
                  <p class="fs-13 mb-0">in last 7 Days</p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <p class="mb-1">Patients</p>
                  <h3 class="fw-bold mb-0">3,102</h3>
                </div>
                <div>
                  <apexchart type="area" height="54" width="100" :options="adminColChart2.sChart2" :series="adminColChart2.series"></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="position-relative border card rounded-2 shadow-sm">
            <img src="@/assets/img/bg/bg-03.svg" alt="img" class="position-absolute start-0 top-0" />
            <div class="card-body">
              <div class="d-flex align-items-center mb-2 justify-content-between">
                <span class="avatar bg-info rounded-circle"><i class="ti ti-clipboard-list fs-24"></i></span>
                <div class="text-end">
                  <span class="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-danger">-4%</span>
                  <p class="fs-13 mb-0">in last 7 Days</p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between">
                <div>
                  <p class="mb-1">Prescriptions</p>
                  <h3 class="fw-bold mb-0">4,178</h3>
                </div>
                <div>
                  <apexchart type="bar" height="54" width="80" :options="adminColChart3.sChart3" :series="adminColChart3.series"></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6">
          <div class="position-relative border card rounded-2 shadow-sm">
            <img src="@/assets/img/bg/bg-04.svg" alt="img" class="position-absolute start-0 top-0" />
            <div class="card-body">
              <div class="d-flex align-items-center mb-2 justify-content-between">
                <span class="avatar bg-success rounded-circle"><i class="ti ti-cash fs-24"></i></span>
                <div class="text-end">
                  <span class="badge px-2 py-1 fs-12 fw-medium d-inline-flex mb-1 bg-success">+9%</span>
                  <p class="fs-13 mb-0">in last 7 Days</p>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-between overflow-hidden">
                <div>
                  <p class="mb-1">Revenue</p>
                  <h3 class="fw-bold mb-0 text-truncate">$18,740</h3>
                </div>
                <div>
                  <apexchart type="area" height="54" width="100" :options="adminColChart4.sChart4" :series="adminColChart4.series"></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">2025 &copy; Preclinic, All Rights Reserved</p>
    </div>
  </div>
</template>
<script>
import { adminColChart, adminColChart4, adminColChart2, adminColChart3 } from '@/views/admin/data'
import { ref } from 'vue'
const value = ref()
const onPanelChange = (value, mode) => {
  console.log(value, mode)
}
export default {
  data() {
    return {
      value,
      onPanelChange,
      adminColChart,
      adminColChart4,
      adminColChart2,
      adminColChart3,
    }
  },
}
</script>
