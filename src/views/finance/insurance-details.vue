<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content">

      <!-- Back button and loader -->
      <div v-if="loadingCompany" class="text-center py-5">
        <LoadingIndicator show variant="center" message="Loading company details..." />
      </div>

      <div v-else-if="companyDetails">
        <div class="d-flex align-items-center mb-4">
          <RouterLink to="/finance/insurance" class="btn btn-sm btn-light me-3 d-flex align-items-center">
            <i class="ti ti-arrow-left me-1"></i> Back to Companies
          </RouterLink>
          <div class="flex-grow-1">
            <h4 class="fw-bold mb-0 d-flex align-items-center">
              {{ companyDetails.name }}
              <span 
                :class="['badge ms-3 fs-12 fw-medium border', companyDetails.is_active ? 'badge-soft-success border-success' : 'badge-soft-danger border-danger']"
              >
                {{ companyDetails.is_active ? 'Active' : 'Inactive' }}
              </span>
            </h4>
            <p class="text-muted mb-0 mt-1 fs-13 d-flex align-items-center gap-3">
              <span><i class="ti ti-mail me-1"></i>{{ companyDetails.email || 'N/A' }}</span>
              <span><i class="ti ti-phone me-1"></i>{{ companyDetails.phone || 'N/A' }}</span>
              <span><i class="ti ti-tag me-1"></i>Type ID: {{ companyDetails.type || 'N/A' }}</span>
            </p>
          </div>
        </div>

        <!-- Plans Section -->
        <div class="card bg-white border-0 shadow-sm mt-4">
          <div class="card-header bg-transparent border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
            <h5 class="fw-bold mb-0">Insurance Plans</h5>
            <button class="btn btn-primary btn-sm d-flex align-items-center" @click="openAddPlanModal">
              <i class="ti ti-plus me-1"></i> Add Plan
            </button>
          </div>
          
          <div class="card-body p-0">
            <div class="table-responsive">
              <a-table
                class="table table-nowrap datatable"
                :columns="columns"
                table-layout="fixed"
                :data-source="plansList"
                row-key="id"
                :pagination="false"
                :loading="loadingPlans"
              >
                <template #bodyCell="{ column, record }">
                  <template v-if="column.key === 'name'">
                    <span class="fw-medium text-dark">{{ record.name }}</span>
                    <div class="fs-12 text-muted" v-if="record.description">{{ record.description }}</div>
                  </template>
                  <template v-else-if="column.key === 'cap'">
                    <span class="fw-semibold text-success">{{ typeof record.cap === 'number' ? `$${record.cap.toLocaleString()}` : record.cap }}</span>
                  </template>
                  <template v-else-if="column.key === 'beneficiaries'">
                    <span class="badge bg-light text-dark border">{{ record.beneficiaries }}</span>
                  </template>
                  <template v-else-if="column.key === 'features'">
                    <div class="d-flex gap-2">
                       <span :class="['badge fs-11', record.has_services ? 'bg-primary bg-opacity-10 text-primary' : 'bg-light text-muted']">
                         Services
                       </span>
                       <span :class="['badge fs-11', record.has_prices ? 'bg-primary bg-opacity-10 text-primary' : 'bg-light text-muted']">
                         Prices
                       </span>
                    </div>
                  </template>
                  <template v-else-if="column.key === 'is_active'">
                    <span :class="['badge border', record.is_active ? 'badge-soft-success border-success' : 'badge-soft-danger border-danger']">
                      {{ record.is_active ? 'Active' : 'Inactive' }}
                    </span>
                  </template>
                  <template v-else-if="column.key === 'actions'">
                    <ActionIcons
                      viewTitle="View Plan"
                      editTitle="Edit Plan"
                      :show-view="false"
                      :show-delete="false"
                      @edit="openEditPlanModal(record)"
                    />
                  </template>
                </template>
              </a-table>
              
              <!-- Empty State if no plans -->
              <div v-if="!loadingPlans && plansList.length === 0" class="text-center py-5">
                <div class="avatar avatar-xl bg-primary bg-opacity-10 text-primary mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center">
                  <i class="ti ti-clipboard-list fs-2"></i>
                </div>
                <h6 class="fw-bold mb-1">No Plans Found</h6>
                <p class="text-muted fs-13 mb-3">This insurance company doesn't have any configured plans yet.</p>
                <button class="btn btn-primary btn-sm" @click="openAddPlanModal">
                  <i class="ti ti-plus me-1"></i> Create First Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Error State -->
      <div v-else class="text-center py-5">
        <div class="text-danger mb-3"><i class="ti ti-alert-circle fs-1"></i></div>
        <h5>Failed to load company details</h5>
        <RouterLink to="/finance/insurance" class="btn btn-primary mt-2">Return to Companies</RouterLink>
      </div>

    </div>
  </div>

  <PlanModal
    modalId="insurance_plan_modal"
    :planData="selectedPlan"
    :companyId="companyId"
    @plan-saved="loadPlans"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axiosInstance from '@/utils/axios'
import { message } from 'ant-design-vue'
import { showModalById } from '@/utils/bootstrap'
import ActionIcons from '@/components/common/ActionIcons.vue'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'
import PlanModal from '@/components/modal/insurance/PlanModal.vue'

const route = useRoute()
const companyId = route.params.id

const companyDetails = ref(null)
const plansList = ref([])
const loadingCompany = ref(false)
const loadingPlans = ref(false)
const selectedPlan = ref(null)

const columns = [
  { title: 'Plan Name', dataIndex: 'name', key: 'name' },
  { title: 'Cap Limit', dataIndex: 'cap', key: 'cap' },
  { title: 'Beneficiaries', dataIndex: 'beneficiaries', key: 'beneficiaries', align: 'center' },
  { title: 'Features', key: 'features' },
  { title: 'Status', dataIndex: 'is_active', key: 'is_active', width: 120 },
  { title: 'Actions', key: 'actions', width: 100, align: 'right' },
]

const loadCompanyDetails = async () => {
  try {
    loadingCompany.value = true
    const response = await axiosInstance.get(`/insurance/companies/${companyId}`)
    companyDetails.value = response.data.data || response.data
    
    // Some API responses embed the plans. If not, we fetch them explicitly.
    if (companyDetails.value && Array.isArray(companyDetails.value.plans)) {
      // Flatten arrays if nested like [[{...}]] 
      plansList.value = companyDetails.value.plans.flat()
    } else {
      await loadPlans()
    }
  } catch (error) {
    console.error('Error loading company:', error)
    message.error('Failed to load company details')
  } finally {
    loadingCompany.value = false
  }
}

const loadPlans = async () => {
  try {
    loadingPlans.value = true
    const response = await axiosInstance.get(`/insurance/companies/${companyId}/plans`)
    plansList.value = response.data.data || response.data || []
  } catch (error) {
    console.error('Error loading plans:', error)
    // Don't show error if it's 404/Empty, just leave table empty
    if (error.response?.status !== 404) {
      message.error('Failed to load insurance plans')
    }
  } finally {
    loadingPlans.value = false
  }
}

const openAddPlanModal = () => {
  selectedPlan.value = null
  showModalById('insurance_plan_modal')
}

const openEditPlanModal = (record) => {
  selectedPlan.value = { ...record }
  showModalById('insurance_plan_modal')
}

onMounted(() => {
  if (companyId) {
    loadCompanyDetails()
  }
})
</script>
