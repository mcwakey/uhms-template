<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-info text-white border-0 py-3 px-4">
          <div>
            <h5 class="modal-title fw-bold text-white mb-1">Medication History</h5>
            <p class="mb-0 text-white text-opacity-75 fs-13">Past prescriptions for {{ patientName }}</p>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4">
          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div v-else-if="history.length > 0" class="timeline-container">
            <div v-for="(record, index) in history" :key="index" class="card mb-3 border-start border-4 border-info">
              <div class="card-body p-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                   <h6 class="fw-bold mb-0 text-dark">{{ record.medication }}</h6>
                   <span class="badge bg-soft-success text-success">{{ record.status }}</span>
                </div>
                <div class="row g-2">
                   <div class="col-6 fs-12 text-muted"> <i class="ti ti-calendar-event me-1"></i> {{ formatDate(record.date) }}</div>
                   <div class="col-6 fs-12 text-muted"> <i class="ti ti-user me-1"></i> {{ record.dispensed_by || 'Pharmacist' }}</div>
                   <div class="col-12 mt-1 fs-13">
                      <strong>Dosage:</strong> {{ record.dosage }}
                   </div>
                   <div v-if="record.notes" class="col-12 mt-1 fs-12 italic text-muted">
                      "{{ record.notes }}"
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center py-5 bg-light rounded">
            <i class="ti ti-pill-off fs-1 text-muted mb-2"></i>
            <p class="text-muted">No medication history found for this patient.</p>
          </div>
        </div>

        <div class="modal-footer border-0 pt-0 px-4 pb-4">
          <button type="button" class="btn btn-secondary fw-medium px-4" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  modalId: {
    type: String,
    default: 'medication_history'
  },
  patientName: {
    type: String,
    default: ''
  }
})

const loading = ref(false)
const history = ref([
    {
        date: "2024-02-15",
        medication: "Paracetamol 500mg",
        dosage: "1 tablet BD for 3 days",
        status: "Dispensed",
        dispensed_by: "Jane Doe (Pharm)"
    },
    {
        date: "2024-01-10",
        medication: "Amoxicillin 250mg",
        dosage: "1 tablet TDS for 5 days",
        status: "Dispensed",
        dispensed_by: "Jane Doe (Pharm)"
    }
])

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleDateString()
}

// In a real app, you would fetch the history based on the patient when the modal opens
</script>

<style scoped>
.timeline-container {
  max-height: 400px;
  overflow-y: auto;
  padding-right: 5px;
}
</style>
