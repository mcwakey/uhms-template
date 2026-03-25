<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
	   Start Page Content
	========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content" id="profilePage">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Services<span
              class="badge badge-soft-primary border border-primary fs-13 fw-medium ms-2"
              >Total: {{ ServicesTable.totalCount }}</span
            >
          </h4>
        </div>
        <div class="text-end d-flex">
          <!-- dropdown-->
          <div class="dropdown me-1">
            <a
              href="javascript:void(0);"
              class="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Export<i class="ti ti-chevron-down ms-2"></i>
            </a>
            <ul class="dropdown-menu p-2">
              <li>
                <a class="dropdown-item" href="#">Download as PDF</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Download as Excel</a>
              </li>
            </ul>
          </div>
          <a
            href="javascript:void(0);"
            @click="openAddServiceModal"
            title="Add Service"
            class="btn btn-primary ms-2 fs-13 btn-md"
            data-bs-toggle="modal"
            data-bs-target="#add_service"
          >
            <i class="ti ti-plus me-1"></i>Add New Services
          </a>
          <!-- <RouterLink
            to="/hrm/staff/add"
            class="btn btn-primary ms-2 fs-13 btn-md"
          >
            <i class="ti ti-plus me-1"></i>Add New Services
          </RouterLink> -->
        </div>
      </div>
      <!-- End Page Header -->

      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set mb-3">
          <div class="d-flex align-items-center flex-wrap gap-2">
            <div class="table-search d-flex align-items-center mb-0">
              <div class="search-input">
                <a href="javascript:void(0);" class="btn-searchset"></a>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  v-model="searchQuery"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3"
        >
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <i class="ti ti-filter text-gray-5 me-1"></i>Filters
            </a>
            <div
              class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0"
              id="filter-dropdown"
            >
              <div
                class="d-flex align-items-center justify-content-between border-bottom filter-header"
              >
                <h4 class="mb-0">Filter</h4>
                <div class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="link-danger text-decoration-underline"
                    >Clear All</a
                  >
                </div>
              </div>
              <FilterIndex></FilterIndex>
            </div>
          </div>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
            >
              <span class="me-1"> Sort By : </span> Recent
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Recent</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Oldest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable pagination-rounded"
          :columns="columns"
          :table-layout="fixed"
          :data-source="ServicesTable.data.value"
          :pagination="paginationConfig"
          @change="ServicesTable.handleTableChange"
          row-key="id"
          :pagination-class="pagination - rounded"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'service_name'">
              <div class="d-flex align-items-center ms-2">
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <a
                      href="javascript:void(0);"
                      @click="openViewServiceModal(record)"
                      title="View Service"
                      data-bs-toggle="modal"
                      data-bs-target="#view_service"
                      class="text-primary rounded-circle d-flex align-items-center justify-content-center"
                    >
                      <!-- <i class="ti ti-eye"></i> -->
                      {{ record.name }}
                    </a>
                    <!-- <a
                      href="javascript:void(0);"
                      @click="openModal(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#view_staff"
                      title="View Service"
                    >
                    </a> -->
                  </h6>
                  <span class="text-body fs-13 fw-normal d-block"> SID-{{ record.id }}</span>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'specialization'">
              <div class="d-flex align-items-center ms-2">
                <div>
                  <h6 class="mb-1 fs-14 fw-semibold">
                    <!-- <a
                      href="javascript:void(0);"
                      @click="openModal(record)"
                      data-bs-toggle="modal"
                      data-bs-target="#view_staff"
                      title="View Service"
                      > -->
                    {{ record.specialization.name }}
                    <!-- </a> -->
                  </h6>
                  <span class="fs-10 d-block text-primary"
                    >{{ record.specialization.department }}
                  </span>
                </div>
              </div>
            </template>
            <template v-else-if="column.key === 'pricing'">
              <div class="d-flex align-items-center justify-content-center">
                <span class="badge badge-soft-info border border-info fs-12 fw-medium">
                  <i class="ti ti-currency-dollar me-1"></i>
                  <span v-if="record.pricing_count">{{ record.pricing_count }} plans</span>
                  <span v-else>Not set</span>
                </span>
              </div>
            </template>
            <template v-else-if="column.key === 'status'">
              <span
                :class="[
                  'badge border',
                  record.status
                    ? 'badge badge-soft-success border border-success fw-medium fs-13'
                    : 'badge badge-soft-danger border border-danger fw-medium  fs-13',
                ]"
                >{{ record.status ? 'Active' : 'Inactive' }}</span
              >
            </template>
            <template v-else-if="column.key === 'actions'">
              <div class="d-flex align-items-center justify-content-end gap-2">
                <ActionIcons
                  viewTitle="View Service"
                  editTitle="Edit Service"
                  deleteTitle="Delete Service"
                  @view="openViewServiceModal(record)"
                  @edit="openEditServiceModal(record)"
                  @delete="handleDelete(record)"
                />
              </div>
            </template>
            <template v-else>
              {{ record[column.dataIndex || column.key] }}
            </template>
          </template>
        </a-table>
      </div>
    </div>
    <!-- End Content -->
  </div>

  <!-- Footer Start -->
  <layouts-footer></layouts-footer>
  <!-- Footer End -->

  <!-- ========================
		End Page Content
	========================= -->

  <!-- Add Service Modal -->
  <AddServiceModal
    ref="addServiceModalRef"
    :specializations="specializations"
    :is-loading-specializations="isLoadingSpecializations"
    @service-created="handleServiceCreated"
  />

  <!-- Edit Service Modal -->
  <EditServiceModal
    ref="editServiceModalRef"
    :specializations="specializations"
    :is-loading-specializations="isLoadingSpecializations"
    @service-updated="handleServiceUpdated"
  />

  <!-- View Service Modal -->
  <ViewServiceModal
    ref="viewServiceModalRef"
    :service-data="viewServiceData"
    :service-pricing="servicePricing"
    :insurance-company-pricing="insuranceCompanyPricing"
    :insurance-types="insuranceTypes"
    :insurance-companies="insuranceCompanies"
    :is-loading-insurance-types="isLoadingInsuranceTypes"
    :is-loading-insurance-companies="isLoadingInsuranceCompanies"
    :has-editing-pricing="hasEditingPricing"
    :is-pricing-saving="isPricingSaving"
    :is-bulk-saving="isBulkSaving"
    :is-insurance-pricing-saving="isInsurancePricingSaving"
    @edit-service="handleEditFromView"
    @save-all-default-pricing="saveAllDefaultPricing"
    @cancel-all-default-pricing="cancelAllDefaultPricing"
    @edit-all-default-pricing="editAllDefaultPricing"
    @add-new-default-pricing="addNewDefaultPricing"
    @initialize-default-pricing="initializeDefaultPricing"
    @update-default-pricing="updateDefaultPricing"
    @delete-default-pricing="deleteDefaultPricing"
    @cancel-edit-default-pricing="cancelEditDefaultPricing"
    @save-default-pricing="saveDefaultPricing"
    @edit-default-pricing="editDefaultPricing"
    @add-new-insurance-pricing="addNewInsurancePricing"
    @edit-insurance-pricing="editInsurancePricing"
    @save-insurance-pricing="saveInsurancePricing"
    @cancel-edit-insurance-pricing="cancelEditInsurancePricing"
    @delete-insurance-pricing="deleteInsurancePricing"
    @update-insurance-pricing="updateInsurancePricing"
  />

  <div class="modal fade" id="delete_staff">
    <DeleteModal></DeleteModal>
  </div>
</template>
<script>
import { useTableStore } from '@/stores/dataTable'
import { onMounted, computed, ref } from 'vue'
import { message } from 'ant-design-vue'
import FilterIndex from '@/components/common/filter-index.vue'
import DeleteModal from '@/components/modal/DeleteModal.vue'
import ActionIcons from '@/components/common/ActionIcons.vue'
import AddServiceModal from '@/components/modal/service-modals/AddServiceModal.vue'
import EditServiceModal from '@/components/modal/service-modals/EditServiceModal.vue'
import ViewServiceModal from '@/components/modal/service-modals/ViewServiceModal.vue'
import axiosInstance from '@/utils/axios.js'
import { showModalById } from '@/utils/bootstrap'

export default {
  components: {
    FilterIndex,
    DeleteModal,
    ActionIcons,
    AddServiceModal,
    EditServiceModal,
    ViewServiceModal,
  },
  name: 'ServicesTable',

  setup() {
    const ServicesTable = useTableStore('services')
    const detailedItem = computed(() => ServicesTable.detailedItem.value || {})

    // Modal component refs
    const addServiceModalRef = ref(null)
    const editServiceModalRef = ref(null)
    const viewServiceModalRef = ref(null)

    // Search functionality
    const searchQuery = ref('')

    // View service data for ViewServiceModal
    const viewServiceData = ref({
      id: null,
      name: '',
      code: '',
      description: '',
      specialization: null,
      status: '',
      has_result: false,
      has_stock: false,
    })

    // Pricing-related reactive variables
    const servicePricing = ref([])
    const isPricingSaving = ref(false)
    const isBulkSaving = ref(false)
    const pricingBackup = ref({})
    const insuranceTypes = ref([])
    const isLoadingInsuranceTypes = ref(false)

    // Insurance company pricing variables
    const insuranceCompanyPricing = ref([])
    const isInsurancePricingSaving = ref(false)
    const insurancePricingBackup = ref({})
    const insuranceCompanies = ref([])
    const isLoadingInsuranceCompanies = ref(false)

    const paginationConfig = computed(() => ({
      current: ServicesTable.currentPage.value,
      pageSize: ServicesTable.perPage.value,
      total: ServicesTable.totalCount.value,
      showSizeChanger: false,
      showQuickJumper: false,
    }))

    const openModal = async (record) => {
      try {
        ServicesTable.selectItem(record)
        await ServicesTable.fetchItemDetails(record.uuid)
      } catch (error) {
        message.error(error)
      }
    }

    const handleDelete = async (record) => {
      await openModal(record)
      showModalById('delete_staff')
    }

    // Computed properties for bulk operations
    const hasEditingPricing = computed(() => {
      return servicePricing.value.some((pricing) => pricing.isEditing)
    })

    // Helper method to get insurance type display name by ID
    const getInsuranceTypeDisplayName = (typeId) => {
      const type = insuranceTypes.value.find((t) => t.id === typeId || t.value === typeId)
      return type ? type.description || type.display_name || type.label : `Type ID: ${typeId}`
    }

    // Helper function to check for duplicate insurance types
    const hasDuplicateInsuranceType = (insuranceTypeId, currentIndex) => {
      return servicePricing.value.some(
        (pricing, index) =>
          index !== currentIndex && pricing.price_type === insuranceTypeId && !pricing.isNew
      )
    }

    // Helper function to check for duplicate insurance companies
    const hasDuplicateInsuranceCompany = (companyId, currentIndex) => {
      return insuranceCompanyPricing.value.some(
        (pricing, index) =>
          index !== currentIndex && pricing.insurance_company_id === companyId && !pricing.isNew
      )
    }

    // Table columns
    const columns = [
      {
        title: 'Service Name',
        // dataIndex: 'name',
        key: 'service_name',
        // width: 150,
        // className: "name"
      },
      // {
      //   title: 'SID',
      //   dataIndex: 'id',
      //   key: 'id',
      //   // width: 50,
      //   // className: "staff_id"

      // },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        // width: 70,
        // className: 'phone'
      },
      // {
      //   title: 'Department',
      //   dataIndex: 'department',
      //   key: 'department',
      //   // width: 150,
      //   // className: "email",
      // },
      {
        title: 'Specialization',
        // dataIndex: 'specialization',
        key: 'specialization',
        // width: 150,
      },
      {
        title: 'Pricing',
        key: 'pricing',
        width: 100,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        width: 100,
        // className: "status"
      },
      {
        title: '',
        key: 'actions',
        width: 30,
        // className: "actions"
      },
    ]

    // Specializations list and loading
    const specializations = ref([])
    const isLoadingSpecializations = ref(false)

    const fetchSpecializations = async () => {
      isLoadingSpecializations.value = true
      try {
        const response = await axiosInstance.get('/specializations')
        // Assuming the API returns an array of specializations
        specializations.value = response.data.results || response.data || []
        // If the data is not in the expected format, transform it
        if (specializations.value.length > 0 && typeof specializations.value[0] === 'string') {
          specializations.value = specializations.value.map((spec) => ({
            label: spec,
            value: spec,
          }))
        } else if (specializations.value.length > 0 && !specializations.value[0].label) {
          // If objects but no label/value structure, assume name property
          specializations.value = specializations.value.map((spec) => ({
            label: spec.name || spec.title || spec,
            value: spec.id || spec.name || spec.title || spec,
          }))
        }
      } catch (error) {
        console.error('Failed to load specializations:', error)
      } finally {
        isLoadingSpecializations.value = false
      }
    }

    const fetchInsuranceTypes = async () => {
      isLoadingInsuranceTypes.value = true
      try {
        const response = await axiosInstance.get('/insurance/types')
        // Transform the API response to the format needed for dropdowns
        insuranceTypes.value = (response.data.results || response.data || []).map((type) => ({
          id: type.id,
          label: type.description || type.name || type.display_name || type.label || type,
          value: type.id, // Use ID as the value
          display_name: type.description || type.name || type.display_name || type.label || type,
          name: type.name,
          description: type.description,
        }))

        // If the API returns simple strings, convert them
        if (insuranceTypes.value.length === 0 && Array.isArray(response.data)) {
          insuranceTypes.value = response.data.map((type, index) => ({
            id: index + 1, // Generate ID for fallback
            label:
              typeof type === 'string'
                ? type.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase())
                : type.name,
            value: index + 1, // Use index-based ID as value
            display_name:
              typeof type === 'string'
                ? type.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase())
                : type.display_name || type.name,
            name: typeof type === 'string' ? type : type.name,
            description:
              typeof type === 'string'
                ? type.replace('_', ' ').replace(/\b\w/g, (l) => l.toUpperCase())
                : type.description || type.name,
          }))
        }

        // Ensure we have at least the basic types as fallback
        if (insuranceTypes.value.length === 0) {
          throw new Error('No insurance types returned from API')
        }
      } catch (error) {
        console.error('Failed to load insurance types:', error)
        // Fallback to default insurance types
        insuranceTypes.value = [
          {
            id: 1,
            label: 'Private Pay',
            value: 1,
            display_name: 'Private Pay',
            name: 'Private Pay',
            description: 'Private Pay - Direct payment without insurance',
          },
          {
            id: 2,
            label: 'Medicare',
            value: 2,
            display_name: 'Medicare',
            name: 'Medicare',
            description: 'Medicare - Federal health insurance for 65+ or disabled',
          },
          {
            id: 3,
            label: 'Medicaid',
            value: 3,
            display_name: 'Medicaid',
            name: 'Medicaid',
            description: 'Medicaid - State and federal program for low-income individuals',
          },
          {
            id: 4,
            label: 'Commercial Insurance',
            value: 4,
            display_name: 'Commercial Insurance',
            name: 'Commercial',
            description: 'Commercial Insurance - Private insurance plans',
          },
          {
            id: 5,
            label: 'HMO',
            value: 5,
            display_name: 'HMO',
            name: 'HMO',
            description: 'HMO - Health Maintenance Organization',
          },
          {
            id: 6,
            label: 'PPO',
            value: 6,
            display_name: 'PPO',
            name: 'PPO',
            description: 'PPO - Preferred Provider Organization',
          },
          {
            id: 7,
            label: 'Other',
            value: 7,
            display_name: 'Other',
            name: 'Other',
            description: 'Other - Other insurance types',
          },
        ]
        console.warn('Using fallback insurance types')
      } finally {
        isLoadingInsuranceTypes.value = false
      }
    }

    const fetchInsuranceCompanies = async () => {
      isLoadingInsuranceCompanies.value = true
      try {
        const response = await axiosInstance.get('/insurance/companies', {
          params: {
            has_prices: true,
            has_list: true,
          },
        })

        // Transform the API response to the format needed for dropdowns
        insuranceCompanies.value = (response.data.results || response.data || []).map(
          (company) => ({
            id: company.id,
            name: company.name || company.company_name || company.title,
            code: company.code || company.value,
            has_prices: company.has_prices,
            has_list: company.has_list,
          })
        )
      } catch (error) {
        console.error('Failed to load insurance companies:', error)
        // Empty array as fallback since this is optional
        insuranceCompanies.value = []
      } finally {
        isLoadingInsuranceCompanies.value = false
      }
    }

    const openAddServiceModal = async () => {
      // Ensure specializations are loaded when opening the modal
      if (specializations.value.length === 0 && !isLoadingSpecializations.value) {
        await fetchSpecializations()
      }

      // Open the Add Service Modal
      if (addServiceModalRef.value) {
        addServiceModalRef.value.open()
      }
    }

    const openEditServiceModal = async (service) => {
      // Ensure specializations are loaded
      if (specializations.value.length === 0 && !isLoadingSpecializations.value) {
        await fetchSpecializations()
      }

      // Open the edit modal with the service data
      if (editServiceModalRef.value) {
        editServiceModalRef.value.open(service, specializations.value)
      }
    }

    const openViewServiceModal = async (service) => {
      // Load insurance types and companies if needed
      await fetchInsuranceTypes()
      await fetchInsuranceCompanies()

      // Populate the view data
      viewServiceData.value = {
        id: service.id,
        name: service.name || '',
        code: service.code || '',
        description: service.description || '',
        specialization: service.specialization || null,
        status: service.status ? 'active' : 'inactive',
        has_result: service.has_result || false,
        has_stock: service.has_stock || false,
      }

      // Load pricing data for this service
      await fetchServicePricing(service.id)
      await fetchInsuranceCompanyPricing(service.id)

      // Open the view modal
      if (viewServiceModalRef.value) {
        viewServiceModalRef.value.open()
      }
    }

    // Event handlers for reusable modal components
    const handleServiceCreated = async () => {
      message.success('Service created successfully')
      // Refresh the services table
      await ServicesTable.fetchData()
    }

    const handleServiceUpdated = async () => {
      message.success('Service updated successfully')
      // Refresh the services table
      await ServicesTable.fetchData()
    }

    const handleEditFromView = (service) => {
      // Handle opening edit modal from view modal
      if (editServiceModalRef.value) {
        editServiceModalRef.value.open(service, specializations.value)
      }
    }

    const fetchServicePricing = async (serviceId) => {
      try {
        const response = { data: [] }
        servicePricing.value = (response.data.results || response.data || []).map((pricing) => ({
          ...pricing,
          isEditing: false,
        }))
      } catch (error) {
        console.error('Failed to load service pricing:', error)
        // Initialize with default pricing if none exists
        servicePricing.value = []
      }
    }

    const fetchInsuranceCompanyPricing = async (serviceId) => {
      try {
        const response = { data: [] }
        insuranceCompanyPricing.value = (response.data.results || response.data || []).map(
          (pricing) => ({
            ...pricing,
            isEditing: false,
          })
        )
      } catch (error) {
        console.error('Failed to load insurance company pricing:', error)
        insuranceCompanyPricing.value = []
      }
    }

    onMounted(async () => {
      // Fetch services data when the component is mounted
      try {
        await ServicesTable.fetchData()
      } catch (error) {
        console.error('Failed to load services data:', error)
        message.error('Failed to load services data')
      }

      // Load specializations and insurance types
      await fetchSpecializations()
      await fetchInsuranceTypes()
    })

    // Default pricing methods
    const initializeDefaultPricing = () => {
      // Use the first 4 insurance types from the fetched list, or fallback to basic types
      const typesToUse =
        insuranceTypes.value.length > 0
          ? insuranceTypes.value.slice(0, 4)
          : [
              {
                id: 1,
                value: 1,
                display_name: 'Private Pay',
                description: 'Private Pay - Direct payment without insurance',
              },
              {
                id: 2,
                value: 2,
                display_name: 'Medicare',
                description: 'Medicare - Federal health insurance for 65+ or disabled',
              },
              {
                id: 3,
                value: 3,
                display_name: 'Medicaid',
                description: 'Medicaid - State and federal program for low-income individuals',
              },
              {
                id: 4,
                value: 4,
                display_name: 'Commercial Insurance',
                description: 'Commercial Insurance - Private insurance plans',
              },
            ]

      servicePricing.value = typesToUse.map((type) => ({
        id: null,
        service: viewServiceData.value.id,
        price_type: type.id || type.value,
        price: 0.0,
        insurance_company: '',
        notes: '',
        is_active: true,
        isEditing: true,
        isNew: true,
      }))
    }

    const addNewDefaultPricing = () => {
      const defaultType = insuranceTypes.value.length > 0 ? insuranceTypes.value[0].id : 1

      servicePricing.value.push({
        id: null,
        service: viewServiceData.value.id,
        price_type: defaultType,
        price: 0.0,
        insurance_company: '',
        notes: '',
        is_active: true,
        isEditing: true,
        isNew: true,
      })
    }

    const editDefaultPricing = (index) => {
      // Backup original data
      pricingBackup.value[index] = { ...servicePricing.value[index] }
      servicePricing.value[index].isEditing = true
    }

    const cancelEditDefaultPricing = (index) => {
      if (servicePricing.value[index].isNew) {
        // Remove new unsaved pricing
        servicePricing.value.splice(index, 1)
      } else {
        // Restore from backup
        servicePricing.value[index] = { ...pricingBackup.value[index] }
        delete pricingBackup.value[index]
      }
    }

    const updateDefaultPricing = (index) => {
      // This method can be used for real-time validation or auto-save if needed
      console.log('Default pricing updated:', servicePricing.value[index])
    }

    const saveDefaultPricing = async (index) => {
      const pricing = servicePricing.value[index]

      if (!pricing.price || pricing.price < 0) {
        message.error('Please enter a valid price')
        return
      }

      if (!pricing.price_type) {
        message.error('Please select an insurance type')
        return
      }

      // Check for duplicate insurance types
      if (hasDuplicateInsuranceType(pricing.price_type, index)) {
        message.error('A pricing entry for this insurance type already exists')
        return
      }

      isPricingSaving.value = true

      try {
        const pricingData = {
          service: pricing.service || viewServiceData.value.id,
          price_type: pricing.price_type,
          price: parseFloat(pricing.price),
          insurance_company: pricing.insurance_company || '',
        }

        let response
        if (pricing.id) {
          // Update existing pricing
          response = { data: pricingData }
        } else {
          // Create new pricing
          response = await axiosInstance.post(
            `/services/${viewServiceData.value.id}/prices/`,
            pricingData
          )
        }

        // Update local data with response
        servicePricing.value[index] = {
          ...response.data,
          isEditing: false,
          isNew: false,
        }

        message.success('Default pricing saved successfully')
        delete pricingBackup.value[index]

        // Auto-refresh the pricing data to ensure consistency
        setTimeout(() => {
          fetchServicePricing(viewServiceData.value.id)
        }, 1000)
      } catch (error) {
        console.error('Failed to save pricing:', error)

        // Provide more specific error messages
        if (error.response && error.response.data) {
          const errorMessage =
            error.response.data.message || error.response.data.error || 'Failed to save pricing'
          message.error(errorMessage)
        } else {
          message.error('Failed to save pricing. Please check your connection and try again.')
        }
      } finally {
        isPricingSaving.value = false
      }
    }

    const deleteDefaultPricing = async (index) => {
      const pricing = servicePricing.value[index]

      if (pricing.isNew) {
        // Just remove from array if it's a new unsaved pricing
        servicePricing.value.splice(index, 1)
        return
      }

      if (!confirm('Are you sure you want to delete this pricing?')) {
        return
      }

      try {
        // pricing delete disabled
        servicePricing.value.splice(index, 1)
        message.success('Default pricing deleted successfully')
      } catch (error) {
        console.error('Failed to delete default pricing:', error)

        // Provide more specific error messages
        if (error.response && error.response.data) {
          const errorMessage =
            error.response.data.message ||
            error.response.data.error ||
            'Failed to delete default pricing'
          message.error(errorMessage)
        } else {
          message.error(
            'Failed to delete default pricing. Please check your connection and try again.'
          )
        }
      }
    }

    // Bulk Operations for Default Pricing
    const editAllDefaultPricing = () => {
      // Backup all pricing data
      servicePricing.value.forEach((pricing, index) => {
        if (!pricing.isEditing) {
          pricingBackup.value[index] = { ...pricing }
          pricing.isEditing = true
        }
      })
    }

    const saveAllDefaultPricing = async () => {
      // Validate all pricing entries first
      const invalidEntries = []
      servicePricing.value.forEach((pricing, index) => {
        if (pricing.isEditing) {
          if (!pricing.price_type) {
            invalidEntries.push(`Row ${index + 1}: Please select an insurance type`)
          }
          if (!pricing.price || isNaN(parseFloat(pricing.price)) || parseFloat(pricing.price) < 0) {
            invalidEntries.push(`Row ${index + 1}: Please enter a valid price`)
          }
          // Check for duplicate insurance types
          if (hasDuplicateInsuranceType(pricing.price_type, index)) {
            invalidEntries.push(`Row ${index + 1}: Duplicate insurance type detected`)
          }
        }
      })

      if (invalidEntries.length > 0) {
        message.error(`Validation failed:\n${invalidEntries.join('\n')}`)
        return
      }

      isBulkSaving.value = true

      try {
        const savingPromises = []
        const editingPricing = servicePricing.value.filter((pricing) => pricing.isEditing)

        for (const pricing of editingPricing) {
          const pricingData = {
            service: pricing.service || viewServiceData.value.id,
            price_type: pricing.price_type,
            price: parseFloat(pricing.price),
            insurance_company: pricing.insurance_company || '',
            notes: pricing.notes || '',
            is_active: pricing.is_active,
          }

          if (pricing.id) {
            // Update existing pricing
            savingPromises.push(
              axiosInstance
                .patch(`/services/prices/${pricing.id}/`, pricingData)
                .then((response) => ({
                  index: servicePricing.value.indexOf(pricing),
                  data: response.data,
                  type: 'update',
                }))
            )
          } else {
            // Create new pricing
            savingPromises.push(
              axiosInstance
                .post(`/services/${viewServiceData.value.id}/prices/`, pricingData)
                .then((response) => ({
                  index: servicePricing.value.indexOf(pricing),
                  data: response.data,
                  type: 'create',
                }))
            )
          }
        }

        // Execute all save operations
        const results = await Promise.all(savingPromises)

        // Update local data with responses
        results.forEach((result) => {
          servicePricing.value[result.index] = {
            ...result.data,
            isEditing: false,
            isNew: false,
          }
        })

        // Clear all backups
        pricingBackup.value = {}

        message.success(`Successfully saved ${results.length} pricing entries`)

        // Auto-refresh the pricing data to ensure consistency
        setTimeout(() => {
          fetchServicePricing(viewServiceData.value.id)
        }, 1000)
      } catch (error) {
        console.error('Failed to save pricing:', error)

        // Provide specific error messages
        if (error.response && error.response.data) {
          const errorMessage =
            error.response.data.message ||
            error.response.data.error ||
            'Failed to save some pricing entries'
          message.error(errorMessage)
        } else {
          message.error(
            'Failed to save pricing entries. Please check your connection and try again.'
          )
        }
      } finally {
        isBulkSaving.value = false
      }
    }

    const cancelAllDefaultPricing = () => {
      servicePricing.value.forEach((pricing, index) => {
        if (pricing.isEditing) {
          if (pricing.isNew) {
            // Remove new unsaved pricing entries
            servicePricing.value.splice(index, 1)
          } else {
            // Restore from backup
            if (pricingBackup.value[index]) {
              Object.assign(pricing, pricingBackup.value[index])
              delete pricingBackup.value[index]
            }
          }
        }
      })

      // Remove any new pricing entries
      servicePricing.value = servicePricing.value.filter((pricing) => !pricing.isNew)

      // Clear all backups
      pricingBackup.value = {}
    }

    // Insurance Company Pricing Methods
    const addNewInsurancePricing = () => {
      insuranceCompanyPricing.value.push({
        id: null,
        service: viewServiceData.value.id,
        insurance_company_id: '',
        price: 0.0,
        notes: '',
        is_active: true,
        isEditing: true,
        isNew: true,
      })
    }

    const editInsurancePricing = (index) => {
      // Backup original data
      insurancePricingBackup.value[index] = { ...insuranceCompanyPricing.value[index] }
      insuranceCompanyPricing.value[index].isEditing = true
    }

    const cancelEditInsurancePricing = (index) => {
      if (insuranceCompanyPricing.value[index].isNew) {
        // Remove new unsaved pricing
        insuranceCompanyPricing.value.splice(index, 1)
      } else {
        // Restore from backup
        insuranceCompanyPricing.value[index] = { ...insurancePricingBackup.value[index] }
        delete insurancePricingBackup.value[index]
      }
    }

    const updateInsurancePricing = (index) => {
      // This method can be used for real-time validation or auto-save if needed
      console.log('Insurance pricing updated:', insuranceCompanyPricing.value[index])
    }

    const saveInsurancePricing = async (index) => {
      const pricing = insuranceCompanyPricing.value[index]

      if (!pricing.price || pricing.price < 0) {
        message.error('Please enter a valid price')
        return
      }

      if (!pricing.insurance_company_id) {
        message.error('Please select an insurance company')
        return
      }

      // Check for duplicate insurance companies
      if (hasDuplicateInsuranceCompany(pricing.insurance_company_id, index)) {
        message.error('A pricing entry for this insurance company already exists')
        return
      }

      isInsurancePricingSaving.value = true

      try {
        const pricingData = {
          service: pricing.service,
          insurance_company_id: pricing.insurance_company_id,
          price: parseFloat(pricing.price),
          notes: pricing.notes || '',
          is_active: pricing.is_active,
        }

        let response
        if (pricing.id) {
          // Update existing pricing
          response = { data: pricingData }
        } else {
          // Create new pricing
          response = await axiosInstance.post(
            `/services/${viewServiceData.value.id}/custom/`,
            pricingData
          )
        }

        // Update local data with response
        insuranceCompanyPricing.value[index] = {
          ...response.data,
          isEditing: false,
          isNew: false,
        }

        message.success('Insurance company pricing saved successfully')
        delete insurancePricingBackup.value[index]

        // Auto-refresh the pricing data to ensure consistency
        setTimeout(() => {
          fetchInsuranceCompanyPricing(viewServiceData.value.id)
        }, 1000)
      } catch (error) {
        console.error('Failed to save insurance pricing:', error)

        // Provide more specific error messages
        if (error.response && error.response.data) {
          const errorMessage =
            error.response.data.message ||
            error.response.data.error ||
            'Failed to save insurance pricing'
          message.error(errorMessage)
        } else {
          message.error(
            'Failed to save insurance pricing. Please check your connection and try again.'
          )
        }
      } finally {
        isInsurancePricingSaving.value = false
      }
    }

    const deleteInsurancePricing = async (index) => {
      const pricing = insuranceCompanyPricing.value[index]

      if (pricing.isNew) {
        // Just remove from array if it's a new unsaved pricing
        insuranceCompanyPricing.value.splice(index, 1)
        return
      }

      if (!confirm('Are you sure you want to delete this insurance company pricing?')) {
        return
      }

      try {
        // insurance pricing delete disabled
        insuranceCompanyPricing.value.splice(index, 1)
        message.success('Insurance company pricing deleted successfully')
      } catch (error) {
        console.error('Failed to delete insurance pricing:', error)

        // Provide more specific error messages
        if (error.response && error.response.data) {
          const errorMessage =
            error.response.data.message ||
            error.response.data.error ||
            'Failed to delete insurance pricing'
          message.error(errorMessage)
        } else {
          message.error(
            'Failed to delete insurance pricing. Please check your connection and try again.'
          )
        }
      }
    }

    return {
      ServicesTable,
      detailedItem,
      paginationConfig,
      columns,
      searchQuery,
      openModal,
      handleDelete,
      addServiceModalRef,
      editServiceModalRef,
      viewServiceModalRef,
      viewServiceData,
      openAddServiceModal,
      openEditServiceModal,
      openViewServiceModal,
      handleServiceCreated,
      handleServiceUpdated,
      handleEditFromView,
      specializations,
      isLoadingSpecializations,
      fetchSpecializations,
      fetchInsuranceTypes,
      fetchInsuranceCompanies,
      getInsuranceTypeDisplayName,
      fetchServicePricing,
      fetchInsuranceCompanyPricing,
      // Pricing-related variables and methods
      servicePricing,
      isPricingSaving,
      isBulkSaving,
      pricingBackup,
      insuranceTypes,
      isLoadingInsuranceTypes,
      hasEditingPricing,
      insuranceCompanyPricing,
      isInsurancePricingSaving,
      insurancePricingBackup,
      insuranceCompanies,
      isLoadingInsuranceCompanies,
      hasDuplicateInsuranceType,
      hasDuplicateInsuranceCompany,
      // Default pricing methods
      initializeDefaultPricing,
      addNewDefaultPricing,
      editDefaultPricing,
      cancelEditDefaultPricing,
      updateDefaultPricing,
      saveDefaultPricing,
      deleteDefaultPricing,
      editAllDefaultPricing,
      saveAllDefaultPricing,
      cancelAllDefaultPricing,
      // Insurance company pricing methods
      addNewInsurancePricing,
      editInsurancePricing,
      cancelEditInsurancePricing,
      updateInsurancePricing,
      saveInsurancePricing,
      deleteInsurancePricing,
    }
  },
}
</script>

<style scoped>
/* Vue Multiselect styling */
.multiselect {
  min-height: 38px;
}

.multiselect__tags {
  min-height: 38px;
  padding: 6px 40px 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}

.multiselect__tags:focus-within {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.multiselect__single {
  padding: 0;
  margin: 0;
  line-height: 1.5;
}

.multiselect__placeholder {
  color: #6b7280;
  padding: 0;
  margin: 0;
}

.multiselect__content-wrapper {
  border: 1px solid #d1d5db;
  border-radius: 6px;
  margin-top: 2px;
}

.multiselect__option {
  padding: 8px 12px;
  min-height: auto;
}

.multiselect__option--highlight {
  background: #3b82f6;
}

.multiselect__option--selected {
  background: #f3f4f6;
  color: #374151;
}

.multiselect__option--selected.multiselect__option--highlight {
  background: #ef4444;
}

/* Service Details Card Styling */
.service-icon .avatar {
  width: 60px;
  height: 60px;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

.info-item {
  transition: all 0.3s ease;
  border-left-width: 4px !important;
  padding-left: 0.75rem !important; /* Reduced from default p-3 (1rem) */
  padding-right: 0.25rem !important; /* Reduced from default p-3 (1rem) */
  padding-top: 0.75rem !important; /* Reduced from default p-3 (1rem) */
  padding-bottom: 0.05rem !important; /* Reduced from default p-3 (1rem) */
}

.info-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.info-item .d-flex.align-items-center {
  margin-bottom: 0.5rem; /* Reduced spacing between icon/title and content */
}

.info-item i {
  font-size: 16px !important; /* Slightly smaller icons */
}

.info-item span {
  font-size: 13px !important; /* Smaller text */
}

.info-item p {
  font-size: 13px !important; /* Smaller content text */
  margin-bottom: 0 !important;
}

/* Custom color classes */
.bg-primary-subtle {
  background-color: rgba(59, 130, 246, 0.1) !important;
}

.text-primary {
  color: #3b82f6 !important;
}

.bg-success-subtle {
  background-color: rgba(34, 197, 94, 0.1) !important;
}

.text-success {
  color: #22c55e !important;
}

.bg-danger-subtle {
  background-color: rgba(239, 68, 68, 0.1) !important;
}

.text-danger {
  color: #ef4444 !important;
}

.bg-warning-subtle {
  background-color: rgba(245, 158, 11, 0.1) !important;
}

.text-warning {
  color: #f59e0b !important;
}

.bg-info-subtle {
  background-color: rgba(14, 165, 233, 0.1) !important;
}

.text-info {
  color: #0ea5e9 !important;
}

.bg-secondary-subtle {
  background-color: rgba(107, 114, 128, 0.1) !important;
}

.text-secondary {
  color: #6b7280 !important;
}

.bg-purple-subtle {
  background-color: rgba(147, 51, 234, 0.1) !important;
}

.text-purple {
  color: #9333ea !important;
}

.border-purple {
  border-color: #9333ea !important;
}

/* Enhanced card styling */
.card.border-0 {
  border-radius: 12px;
}

.card-body {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  border-radius: 12px;
}

/* Badge improvements */
.badge {
  border-radius: 8px;
  font-weight: 500;
  letter-spacing: 0.025em;
}

/* Typography enhancements */
.font-monospace {
  font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
  font-weight: 500;
}

.lh-base {
  line-height: 1.6;
}

/* Pricing section styling */
.pricing-list .card {
  transition: all 0.2s ease;
}

.pricing-list .card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.pricing-list .form-label {
  margin-bottom: 4px;
  color: #374151;
}

.pricing-list .input-group-text {
  background-color: #f3f4f6;
  border-color: #d1d5db;
  color: #6b7280;
}

.pricing-list .btn {
  transition: all 0.2s ease;
}

.tab-content {
  min-height: 300px;
}

.nav-tabs .nav-link {
  color: #6b7280;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 12px 20px;
}

.nav-tabs .nav-link:hover {
  color: #3b82f6;
  border-color: transparent;
  background-color: #f8fafc;
}

.nav-tabs .nav-link.active {
  color: #3b82f6;
  border-color: #3b82f6;
  background-color: transparent;
}

.nav-tabs {
  border-bottom: 1px solid #e5e7eb;
}

/* Animation for info items */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.info-item {
  animation: fadeInUp 0.6s ease-out;
}

.info-item:nth-child(1) {
  animation-delay: 0.1s;
}
.info-item:nth-child(2) {
  animation-delay: 0.2s;
}
.info-item:nth-child(3) {
  animation-delay: 0.3s;
}
.info-item:nth-child(4) {
  animation-delay: 0.4s;
}
</style>

<!-- Global modal centering styles -->
<style>
/* Ensure proper modal centering for all service modals */
.modal.fade .modal-dialog-centered {
  display: flex !important;
  align-items: center !important;
  min-height: calc(100vh - 60px) !important;
  margin: 30px auto !important;
}

.modal.fade.show .modal-dialog-centered {
  transform: none !important;
}

/* Fix modal backdrop and positioning */
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5) !important;
}

/* Ensure consistent modal width and centering */
.modal-dialog {
  max-width: 500px;
  margin: 1.75rem auto;
}

.modal-dialog.modal-lg {
  max-width: 800px;
}

/* Center modal content */
.modal-content {
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: none;
}

/* Enhanced modal header */
.modal-header {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-bottom: 1px solid #e2e8f0;
  border-radius: 12px 12px 0 0;
  padding: 1.25rem 1.5rem;
}

.modal-title {
  color: #1e293b;
  font-weight: 600;
  font-size: 1.125rem;
}

.custom-btn-close {
  background: none;
  border: none;
  font-size: 1.25rem;
  color: #64748b;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.custom-btn-close:hover {
  background-color: #f1f5f9;
  color: #334155;
  transform: rotate(90deg);
}

/* Modal body styling */
.modal-body {
  padding: 1.5rem;
}

/* Form improvements */
.form-label {
  color: #374151;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.form-control:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-select:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.form-check-input:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.form-check-input:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Button improvements */
.btn {
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border: none;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  transform: translateY(-2px);
}

.btn-light {
  background-color: #f8fafc;
  border-color: #e2e8f0;
  color: #64748b;
}

.btn-light:hover {
  background-color: #f1f5f9;
  border-color: #cbd5e1;
  color: #475569;
}

/* Center alignment fixes */
/* td.actions,
td.staff_id,
th {
  text-align: center !important;
}

th {
  font-size: 1.2em;
  font-weight: 200;
}

td.email,
td.phone {
  text-align: center !important;
} */
</style>
