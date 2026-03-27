<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-info text-white border-0 py-3 px-4">
          <div>
            <h5 class="modal-title fw-bold text-white mb-1">View Prescription</h5>
            <p class="mb-0 text-white text-opacity-75 fs-13">Prescription #{{ prescription?.id || 'N/A' }}</p>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4">
          <div class="row g-3">
            <!-- Patient Info -->
            <div class="col-md-6">
              <label class="form-label fw-semibold text-muted fs-12 mb-1">Patient</label>
              <p class="fw-bold text-dark mb-0">{{ prescription?.patient?.full_name || prescription?.patient_name || 'N/A' }}</p>
            </div>

            <!-- Consultation Link -->
            <div class="col-md-6">
              <label class="form-label fw-semibold text-muted fs-12 mb-1">Related Consultation</label>
              <p class="mb-0">
                <span v-if="prescription?.consultation_id" class="badge bg-soft-info text-info px-2 py-1">
                  Consultation #{{ prescription.consultation_id }}
                </span>
                <span v-else class="text-muted small">No linked consultation</span>
              </p>
            </div>

            <hr class="my-3" />
            <h6 class="fw-bold mb-2">Medication Items</h6>

            <div class="col-12">
              <div v-if="prescription?.items && prescription.items.length > 0">
                <div v-for="(item, idx) in prescription.items" :key="idx" class="card bg-light border-0 mb-2">
                  <div class="card-body p-3">
                    <div class="row">
                      <div class="col-md-6 mb-2">
                        <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Medication</label>
                        <span class="fw-bold text-primary">{{ item.medication || item.name }}</span>
                      </div>
                      <div class="col-md-6 mb-2">
                        <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Dosage & Frequency</label>
                        <span>{{ item.dosage }} - {{ item.frequency }}</span>
                      </div>
                      <div class="col-md-3 mb-2">
                        <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Route</label>
                        <span class="badge bg-outline-secondary">{{ item.route }}</span>
                      </div>
                      <div class="col-md-3 mb-2">
                        <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Duration</label>
                        <span class="text-dark">{{ item.duration }}</span>
                      </div>
                      <div v-if="item.instructions" class="col-md-12">
                        <label class="d-block fs-11 text-muted text-uppercase fw-bold mb-1">Instructions</label>
                        <p class="mb-0 fs-13 italic text-muted">{{ item.instructions }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="text-center py-4">
                <p class="text-muted mb-0">No medication items found in this prescription.</p>
              </div>
            </div>
            
            <div class="col-md-6 mt-4">
              <label class="form-label fw-semibold text-muted fs-12 mb-1">Date Prescribed</label>
              <p class="text-dark">{{ formatDate(prescription?.created_at) }}</p>
            </div>
             <div class="col-md-6 mt-4 text-end">
              <label class="form-label fw-semibold text-muted fs-12 mb-1">Status</label>
               <div>
                  <span :class="['badge', getStatusClass(prescription?.status)]">
                    {{ prescription?.status || 'Pending' }}
                  </span>
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
    default: 'view_prescription'
  },
  prescription: {
    type: Object,
    default: () => ({})
  }
})

const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getStatusClass = (status) => {
  switch (status?.toLowerCase()) {
    case 'completed': return 'bg-success'
    case 'cancelled': return 'bg-danger'
    case 'hold': return 'bg-warning'
    default: return 'bg-info'
  }
}
</script>
