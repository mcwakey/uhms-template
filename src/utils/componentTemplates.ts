/**
 * Template for updating existing views to use local component imports
 * 
 * BEFORE: Components were globally registered and available everywhere
 * AFTER: Components must be imported locally in each file
 * 
 * This file provides copy-paste templates for common scenarios
 */

// ============================================
// TEMPLATE 1: Basic Admin Page with Layouts
// ============================================
/*
<script setup lang="ts">
import { onMounted, ref } from 'vue'
// Import layouts locally
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'

// Your component logic here
</script>

<template>
  <LayoutsHeader />
  <LayoutsSidebar />
  
  <div class="page-wrapper">
    <div class="content">
      <!-- Your content -->
    </div>
  </div>
  
  <LayoutsFooter />
</template>
*/

// ============================================
// TEMPLATE 2: Patient Portal Page
// ============================================
/*
<script setup lang="ts">
import { onMounted, ref } from 'vue'
// Import patient layouts locally
import PatientsHeader from '@/views/layouts/patients-header.vue'
import PatientsSidebar from '@/views/layouts/patients-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'

// Your component logic here
</script>

<template>
  <PatientsHeader />
  <PatientsSidebar />
  
  <div class="page-wrapper">
    <div class="content">
      <!-- Your content -->
    </div>
  </div>
  
  <LayoutsFooter />
</template>
*/

// ============================================
// TEMPLATE 3: Doctor Portal Page
// ============================================
/*
<script setup lang="ts">
import { onMounted, ref } from 'vue'
// Import doctor layouts locally
import DoctorHeader from '@/views/layouts/doctor-header.vue'
import DoctorSidebar from '@/views/layouts/doctor-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'

// Your component logic here
</script>

<template>
  <DoctorHeader />
  <DoctorSidebar />
  
  <div class="page-wrapper">
    <div class="content">
      <!-- Your content -->
    </div>
  </div>
  
  <LayoutsFooter />
</template>
*/

// ============================================
// TEMPLATE 4: Page with Data Table
// ============================================
/*
<script setup lang="ts">
import { onMounted, ref } from 'vue'
// Import layouts
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'

// Import common components
import DataTablePagination from '@/components/common-component/DataTablePagination.vue'
import FilterIndex from '@/components/common-component/filter-index.vue'

// Your component logic here
const tableData = ref([])
</script>

<template>
  <LayoutsHeader />
  <LayoutsSidebar />
  
  <div class="page-wrapper">
    <div class="content">
      <FilterIndex />
      
      <!-- Your table -->
      <a-table :data-source="tableData">
        <!-- columns -->
      </a-table>
      
      <DataTablePagination />
    </div>
  </div>
  
  <LayoutsFooter />
</template>
*/

// ============================================
// TEMPLATE 5: Page with Modals
// ============================================
/*
<script setup lang="ts">
import { onMounted, ref } from 'vue'
// Import layouts
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'

// Import modals
import DeleteModal from '@/components/modal/DeleteModal.vue'
import RescheduleModal from '@/components/modal/RescheduleModal.vue'

// Modal state
const showDeleteModal = ref(false)
const showRescheduleModal = ref(false)
</script>

<template>
  <LayoutsHeader />
  <LayoutsSidebar />
  
  <div class="page-wrapper">
    <div class="content">
      <!-- Your content -->
      <button @click="showDeleteModal = true">Delete</button>
    </div>
  </div>
  
  <LayoutsFooter />
  
  <!-- Modals -->
  <DeleteModal v-model:visible="showDeleteModal" />
  <RescheduleModal v-model:visible="showRescheduleModal" />
</template>
*/

// ============================================
// TEMPLATE 6: Settings Page with Sidebar
// ============================================
/*
<script setup lang="ts">
import { onMounted, ref } from 'vue'
// Import layouts
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'

// Import settings sidebar
import SettingsSidebar from '@/views/pages/settings/settings-sidebar.vue'

// Your component logic here
</script>

<template>
  <LayoutsHeader />
  <LayoutsSidebar />
  
  <div class="page-wrapper">
    <div class="content">
      <div class="row">
        <div class="col-md-3">
          <SettingsSidebar />
        </div>
        <div class="col-md-9">
          <!-- Your settings content -->
        </div>
      </div>
    </div>
  </div>
  
  <LayoutsFooter />
</template>
*/

// ============================================
// TEMPLATE 7: Page with Icons (Load Conditionally)
// ============================================
/*
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'

// Import icon loader
import { loadMaterialIcons, loadWeatherIcons } from '@/utils/lazyLoadIcons'

onMounted(() => {
  // Only load icon libraries this page needs
  loadMaterialIcons()
  // loadWeatherIcons() // Uncomment if needed
})
</script>

<template>
  <LayoutsHeader />
  <LayoutsSidebar />
  
  <div class="page-wrapper">
    <div class="content">
      <!-- Material icons will work after loading -->
      <i class="material-icons">home</i>
    </div>
  </div>
  
  <LayoutsFooter />
</template>
*/

// ============================================
// TEMPLATE 8: Application Page (Chat, Calendar, etc.)
// ============================================
/*
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'

// Import application-specific components
import ContactsTable from '@/views/pages/applications/contacts/contacts-table.vue'
// or
import NotesCarousel from '@/views/pages/applications/notes-carousel.vue'
// or
import AllKanban from '@/views/pages/applications/kanban/all-kanban.vue'

// Your component logic here
</script>

<template>
  <LayoutsHeader />
  <LayoutsSidebar />
  
  <div class="page-wrapper">
    <div class="content">
      <ContactsTable />
      <!-- or -->
      <NotesCarousel />
      <!-- or -->
      <AllKanban />
    </div>
  </div>
  
  <LayoutsFooter />
</template>
*/

// ============================================
// TEMPLATE 9: Hidden Sidebar Layout
// ============================================
/*
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutHiddenSidebar from '@/views/layouts/layout-hidden-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'

// Your component logic here
</script>

<template>
  <LayoutsHeader />
  <LayoutHiddenSidebar />
  
  <div class="page-wrapper">
    <div class="content">
      <!-- Your content -->
    </div>
  </div>
  
  <LayoutsFooter />
</template>
*/

// ============================================
// TEMPLATE 10: Page with Theme Settings
// ============================================
/*
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'
import ThemeSettings from '@/views/layouts/theme-settings.vue'

// Your component logic here
</script>

<template>
  <LayoutsHeader />
  <LayoutsSidebar />
  
  <div class="page-wrapper">
    <div class="content">
      <!-- Your content -->
    </div>
  </div>
  
  <LayoutsFooter />
  <ThemeSettings />
</template>
*/

// ============================================
// Quick Reference: All Common Imports
// ============================================
/*
// LAYOUTS
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'
import PatientsHeader from '@/views/layouts/patients-header.vue'
import PatientsSidebar from '@/views/layouts/patients-sidebar.vue'
import DoctorHeader from '@/views/layouts/doctor-header.vue'
import DoctorSidebar from '@/views/layouts/doctor-sidebar.vue'
import SidebarMenu from '@/views/layouts/sidebar-menu.vue'
import LayoutHiddenSidebar from '@/views/layouts/layout-hidden-sidebar.vue'
import ThemeSettings from '@/views/layouts/theme-settings.vue'

// COMMON COMPONENTS
import FilterIndex from '@/components/common-component/filter-index.vue'
import DataTablePagination from '@/components/common-component/DataTablePagination.vue'
import AppointmentFilter from '@/components/common-component/AppointmentFilter.vue'
import PatientsFilter from '@/components/common-component/PatientsFilter.vue'
import DateRangePicker from '@/components/common-component/DateRangePicker.vue'
import AppointmentDetailsCanvas from '@/components/common-component/AppointmentDetailsCanvas.vue'

// MODALS
import DeleteModal from '@/components/modal/DeleteModal.vue'
import RescheduleModal from '@/components/modal/RescheduleModal.vue'
import ChangeDoctorModal from '@/components/modal/ChangeDoctorModal.vue'
import DoctorAppointmentModal from '@/components/modal/doctor-appointment-modal.vue'
import DoctorsLeavesModal from '@/components/modal/doctors-leaves-modal.vue'
import ContactsModal from '@/components/modal/contacts-modal.vue'
import CalendarModal from '@/components/modal/calendar-modal.vue'
import DoctorsListModal from '@/components/modal/doctors-list-modal.vue'
import AddInsuranceModal from '@/components/modal/AddInsuranceModal.vue'
import EditInsuranceModal from '@/components/modal/EditInsuranceModal.vue'
import PatientDetailsModal from '@/components/modal/PatientDetailsModal.vue'
import SetAppointmentModal from '@/components/modal/SetAppointmentModal.vue'

// DOCTOR COMPONENTS
import AppointmentDetailsTable from '@/views/pages/doctor/appointment-details-table.vue'
import TransactionsDetailsTable from '@/views/pages/doctor/transactions-details-table.vue'

// APPLICATION COMPONENTS
import NotesCarousel from '@/views/pages/applications/notes-carousel.vue'
import SocialCarousel from '@/views/pages/applications/social-carousel.vue'
import RecentFolders from '@/views/pages/applications/recent-folders.vue'
import RecentFiles from '@/views/pages/applications/recent-files.vue'
import AllKanban from '@/views/pages/applications/kanban/all-kanban.vue'
import HighKanban from '@/views/pages/applications/kanban/high-kanban.vue'
import MediumKanban from '@/views/pages/applications/kanban/medium-kanban.vue'
import LowKanban from '@/views/pages/applications/kanban/low-kanban.vue'
import ContactsTable from '@/views/pages/applications/contacts/contacts-table.vue'

// SETTINGS
import SettingsSidebar from '@/views/pages/settings/settings-sidebar.vue'

// ICON LIBRARIES (Load on demand)
import { 
  loadMaterialIcons, 
  loadPe7Icons, 
  loadTypicons,
  loadWeatherIcons,
  loadIonicons,
  loadRemixIcon,
  loadFeatherIcons,
  loadLeafletCSS
} from '@/utils/lazyLoadIcons'
*/

// ============================================
// Migration Checklist
// ============================================
/*
When updating a view file:

1. ✅ Add <script setup> if not present
2. ✅ Import all layouts used in template
3. ✅ Import all components used in template
4. ✅ Import modals if page has them
5. ✅ Import icon loaders if page uses special icons
6. ✅ Test the page works correctly
7. ✅ Check browser console for errors
8. ✅ Verify all icons display correctly
9. ✅ Test modals open/close properly
10. ✅ Verify data loads correctly

Common errors after migration:
- "Component XYZ not found" → Add import
- Icons not showing → Add loadXxxIcons() in onMounted
- Modal not working → Check modal import and v-model binding
*/

export {}
