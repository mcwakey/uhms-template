<template>
  <div :id="modalId" class="modal fade" tabindex="-1" aria-hidden="true" ref="modalRef">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content border-0 shadow-lg rounded-3">
        <!-- Header -->
        <div class="modal-header bg-success text-white border-0 py-3 px-4">
          <div>
            <h5 class="modal-title fw-bold text-white mb-1">Dispense Medication</h5>
            <p class="mb-0 text-white text-opacity-75 fs-13">Prescription #{{ prescription?.id }} - {{ prescription?.patient_name }}</p>
          </div>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body p-4">
          <div class="mb-4">
            <h6 class="fw-bold mb-3 d-flex align-items-center">
              <i class="ti ti-pill me-2 text-success"></i>Medication Items
            </h6>
            <div class="table-responsive">
              <table class="table table-bordered align-middle">
                <thead class="bg-light">
                  <tr>
                    <th class="ps-3">Medication</th>
                    <th class="text-center" style="width: 120px;">Requested</th>
                    <th class="text-center" style="width: 150px;">Dispence Qty</th>
                    <th class="text-center" style="width: 120px;">Remaining</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in items" :key="index">
                    <td class="ps-3">
                      <div class="fw-bold text-dark">{{ item.name }}</div>
                      <div class="text-muted fs-11">{{ item.dosage }} - {{ item.frequency }}</div>
                    </td>
                    <td class="text-center fw-medium">{{ item.qty_requested }}</td>
                    <td>
                      <input 
                        type="number" 
                        class="form-control form-control-sm text-center" 
                        v-model.number="item.qty_to_dispense"
                        :max="item.qty_requested - item.qty_dispensed"
                        min="0"
                      />
                    </td>
                    <td class="text-center">
                       <span :class="{'text-danger': (item.qty_requested - item.qty_dispensed - item.qty_to_dispense) > 0}">
                         {{ item.qty_requested - item.qty_dispensed - item.qty_to_dispense }}
                       </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="row g-3">
             <div class="col-md-12">
                <label class="form-label fw-semibold text-dark fs-13">Pharmacist Notes</label>
                <textarea class="form-control" v-model="notes" rows="2" placeholder="e.g. Substituted with generic..."></textarea>
             </div>
             <div class="col-md-6">
                <label class="form-label fw-semibold text-dark fs-13">Update Prescription Status</label>
                <select class="form-select" v-model="status">
                   <option value="Unfilled">Unfilled</option>
                   <option value="Partial">Partial</option>
                   <option value="Dispensed">Dispensed</option>
                </select>
             </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="modal-footer border-0 pt-0 px-4 pb-4">
          <button type="button" class="btn btn-light fw-medium" data-bs-dismiss="modal">Cancel</button>
          <button
            type="button"
            class="btn btn-success fw-medium px-4 text-white"
            @click="submitDispense"
            :disabled="isSubmitting || !canDispense"
          >
            <LoadingIndicator :show="isSubmitting" variant="inline" size="sm" is-white />
            {{ isSubmitting ? 'Dispensing...' : 'Confirm Dispensing' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { message } from 'ant-design-vue'
import axiosInstance from '@/utils/axios'
import { hideModalById } from '@/utils/bootstrap'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'

const props = defineProps({
  modalId: {
    type: String,
    default: 'dispense_medication'
  },
  prescription: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['dispensed'])

const isSubmitting = ref(false)
const items = ref([])
const notes = ref('')
const status = ref('Dispensed')

watch(() => props.prescription, (newVal) => {
  if (newVal && newVal.items) {
    items.value = newVal.items.map(item => ({
      ...item,
      qty_to_dispense: item.qty_requested - (item.qty_dispensed || 0)
    }))
    notes.value = newVal.pharmacist_notes || ''
    status.value = newVal.status === 'Dispensed' ? 'Dispensed' : (newVal.status === 'Partial' ? 'Partial' : 'Dispensed')
  }
}, { immediate: true })

const canDispense = computed(() => {
  return items.value.some(item => item.qty_to_dispense > 0)
})

const submitDispense = async () => {
  try {
    isSubmitting.value = true
    
    const payload = {
      items: items.value.map(item => ({
        name: item.name,
        qty_dispensed: item.qty_dispensed + item.qty_to_dispense
      })),
      notes: notes.value,
      status: status.value
    }

    await axiosInstance.patch(`/pharmacy/dispense/${props.prescription.id}`, payload)
    
    message.success('Medication dispensed successfully')
    emit('dispensed', { id: props.prescription.id, ...payload })
    hideModalById(props.modalId)
  } catch (error) {
    console.error('Error dispensing medication:', error)
    message.error('Failed to dispense medication')
  } finally {
    isSubmitting.value = false
  }
}
</script>
