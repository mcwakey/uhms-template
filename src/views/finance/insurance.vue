<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content">
      <div class="d-flex align-items-sm-center flex-sm-row flex-column mb-3 pb-3 border-bottom">
        <h4 class="fw-bold mb-0">Insurance Management</h4>
      </div>

      <!-- Plans Info Banner -->
      <div class="alert alert-primary bg-primary bg-opacity-10 border-primary border-opacity-25 d-flex align-items-center mb-4 rounded-3 p-3">
        <i class="ti ti-info-circle fs-4 text-primary me-2"></i>
        <div class="fs-14 text-dark">
          <strong>How to find Insurance Plans:</strong> Specific plans are managed underneath their assigned Insurance Companies. Go to the <strong>Insurance Companies</strong> tab, then click the <i class="ti ti-eye mx-1 text-primary"></i> <strong>Manage Plans</strong> button next to a company to see its plans.
        </div>
      </div>

      <div class="card bg-white border-0 shadow-sm rounded-3">
        <div class="card-body p-4 pt-3">
          <a-tabs v-model:activeKey="activeKey" class="custom-tabs fs-14 fw-medium">
            <a-tab-pane key="companies" tab="Insurance Companies">
              <div class="pt-3">
                <CompaniesTab />
              </div>
            </a-tab-pane>
            <a-tab-pane key="types" tab="Insurance Types">
              <div class="pt-3">
                <TypesTab />
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CompaniesTab from '@/components/insurance/CompaniesTab.vue'
import TypesTab from '@/components/insurance/TypesTab.vue'

const activeKey = ref('companies')
</script>

<style scoped>
.custom-tabs :deep(.ant-tabs-nav) {
  margin-bottom: 8px;
}
.custom-tabs :deep(.ant-tabs-tab) {
  padding: 12px 16px;
  font-size: 15px;
}
.custom-tabs :deep(.ant-tabs-tab-active) {
  font-weight: 600;
}
</style>
