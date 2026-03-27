<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-primary text-white border-0 py-3 px-4">
          <div>
            <h5 class="modal-title fw-bold text-white mb-1">Laboratory Test Details</h5>
            <p class="mb-0 text-white text-opacity-75 fs-13">Test #{{ labTest?.id || 'N/A' }} - {{ labTest?.test_name }}</p>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4">
          <div class="row g-4">
            <!-- Patient & Request Info -->
            <div class="col-md-4">
              <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Patient</label>
              <h6 class="fw-bold text-dark mb-0">{{ labTest?.patient_name || 'N/A' }}</h6>
            </div>
            <div class="col-md-4">
              <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Requested By</label>
              <h6 class="text-dark mb-0">{{ labTest?.requested_by || 'N/A' }}</h6>
            </div>
            <div class="col-md-4">
              <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Date Requested</label>
              <h6 class="text-dark mb-0">{{ formatDate(labTest?.created_at) || 'N/A' }}</h6>
            </div>

            <div class="col-md-4 mt-3">
              <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Category</label>
              <span class="badge bg-soft-info text-info">{{ labTest?.category || 'General' }}</span>
            </div>
            <div class="col-md-4 mt-3">
              <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Status</label>
              <span :class="['badge', getStatusClass(labTest?.status)]">{{ labTest?.status || 'Pending' }}</span>
            </div>

            <hr class="my-4" />

            <!-- Results Section -->
            <div class="col-12">
              <h6 class="fw-bold mb-3 d-flex align-items-center">
                <i class="ti ti-flask me-2 text-primary"></i>Test Results
              </h6>
              
              <div v-if="labTest?.results && Object.keys(labTest.results).length > 0" class="table-responsive">
                <table class="table table-bordered table-sm">
                  <thead class="bg-light">
                    <tr>
                      <th class="ps-3">Parameter</th>
                      <th>Result (Reference Range)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(value, key) in labTest.results" :key="key">
                      <td class="ps-3 fw-medium">{{ key }}</td>
                      <td>{{ value }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div v-else class="text-center py-4 bg-light rounded">
                <p class="text-muted mb-0">No results recorded yet.</p>
              </div>
            </div>

            <!-- Notes Section -->
            <div class="col-12 mt-3" v-if="labTest?.notes">
              <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Technician Notes</label>
              <div class="p-3 bg-light rounded italic text-muted fs-13">
                {{ labTest.notes }}
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 px-4 pb-4">
          <button type="button" class="btn btn-primary fw-medium px-4" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modalId: {
    type: String,
    default: 'view_lab_test'
  },
  labTest: {
    type: Object,
    default: () => ({})
  }
})

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString()
}

const getStatusClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'completed': return 'bg-success'
    case 'in progress': return 'bg-info'
    case 'pending': return 'bg-warning'
    case 'cancelled': return 'bg-danger'
    default: return 'bg-secondary'
  }
}
</script>
