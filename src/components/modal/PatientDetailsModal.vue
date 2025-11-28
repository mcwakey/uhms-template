<template>
  <div :id="modalId" class="modal fade modal-lg" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0 pb-2 bg-gradient-primary text-white">
          <div class="d-flex align-items-center">
            <div class="me-2">
              <div class="avatar avatar-sm bg-white bg-opacity-20 rounded-circle d-flex align-items-center justify-content-center">
                <i class="ti ti-user text-white"></i>
              </div>
            </div>
            <div>
              <h5 class="fw-bold modal-title mb-0 text-white fs-16">{{ modalTitle }}</h5>
              <p class="mb-0 fs-12 text-white opacity-75" v-if="subtitle">{{ subtitle }}</p>
            </div>
          </div>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body pt-2">
          <!-- Loading State -->
          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-primary mb-3" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <p class="text-muted">Loading patient details...</p>
          </div>

          <!-- Modal Content -->
          <div v-else-if="patientDetails">
            <!-- Patient Info Card -->
            <div class="card border-0 bg-gradient-primary text-white mb-4 shadow-lg">
              <div class="card-body p-4">
                <div class="d-flex align-items-center">
                  <div class="me-3">
                    <div
                      class="avatar avatar-xl bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center shadow"
                    >
                      <i class="ti ti-user-circle fs-1 text-white"></i>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <div class="d-flex align-items-center justify-content-between">
                      <div>
                        <h4 class="fw-bold mb-1 text-white">{{ patientDetails.full_name }}</h4>
                        <div class="d-flex align-items-center gap-2 mb-2 flex-wrap">
                          <span class="badge bg-white bg-opacity-25 text-white fs-12 px-2 py-1">
                            <i class="ti ti-id me-1"></i>OPD: {{ patientDetails.opd_no }}
                          </span>
                          <span
                            class="badge bg-white bg-opacity-25 text-white fs-12 px-2 py-1"
                            v-if="patientDetails.age"
                          >
                            <i class="ti ti-calendar me-1"></i>{{ patientDetails.age?.value
                            }}{{ patientDetails.age?.unit?.charAt(0) }} old
                          </span>
                          <span class="badge bg-white bg-opacity-25 text-white fs-12 px-2 py-1">
                            <i
                              class="ti ti-gender-{{ patientDetails.gender?.toLowerCase() }} me-1"
                            ></i
                            >{{ patientDetails.gender }}
                          </span>
                        </div>
                        <p class="mb-0 text-white fs-14">
                          <i class="ti ti-map-pin me-1"></i>
                          {{ formatAddress(patientDetails.address) || 'No address available' }}
                        </p>
                      </div>
                      <div class="text-end">
                        <p class="mb-0 fs-12 text-white" v-if="patientDetails.last_visit_date">
                          <i class="ti ti-clock me-1"></i>Last visit:
                          {{ dayjs(patientDetails.last_visit_date).fromNow() }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation Pills -->
            <ul class="nav nav-pills nav-justified mb-4 bg-light rounded-3 p-1" role="tablist">
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link active rounded-3 fw-semibold"
                  href="javascript:void(0);"
                  data-bs-toggle="pill"
                  :data-bs-target="`#${modalId}_tab1`"
                  role="tab"
                >
                  <i class="ti ti-user me-2"></i>Basic Info
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link rounded-3 fw-semibold"
                  href="javascript:void(0);"
                  data-bs-toggle="pill"
                  :data-bs-target="`#${modalId}_tab2`"
                  role="tab"
                >
                  <i class="ti ti-users me-2"></i>Next of Kin
                </a>
              </li>
              <li class="nav-item" role="presentation">
                <a
                  class="nav-link rounded-3 fw-semibold"
                  href="javascript:void(0);"
                  data-bs-toggle="pill"
                  :data-bs-target="`#${modalId}_tab3`"
                  role="tab"
                >
                  <i class="ti ti-shield-check me-2"></i>Insurance
                </a>
              </li>
            </ul>

            <div class="tab-content">
              <!-- Basic Information Tab -->
              <div
                class="tab-pane fade show active"
                :id="`${modalId}_tab1`"
                role="tabpanel"
                tabindex="0"
              >
                <div class="row g-2">
                  <!-- Contact Information Card -->
                  <div class="col-md-6">
                    <div class="card h-100 border-0 shadow-sm bg-light">
                      <div class="card-header bg-transparent border-0 pb-1">
                        <h6 class="card-title mb-0 fw-bold fs-14">
                          <i class="ti ti-phone me-2 text-primary"></i>Contact Information
                        </h6>
                      </div>
                      <div class="card-body pt-1 pb-2">
                        <div class="info-item mb-2">
                          <label class="fs-11 text-muted mb-1 fw-medium">Email</label>
                          <p class="mb-0 fw-medium fs-13">{{ patientDetails.email || 'N/A' }}</p>
                        </div>
                        <div class="info-item mb-0">
                          <label class="fs-11 text-muted mb-1 fw-medium">Phone No</label>
                          <p class="mb-0 fw-medium fs-13">{{ patientDetails.phone || 'N/A' }}</p>
                          <small class="text-muted fs-11" v-if="patientDetails.other_phones">{{
                            patientDetails.other_phones
                          }}</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Personal Information Card -->
                  <div class="col-md-6">
                    <div class="card h-100 border-0 shadow-sm bg-light">
                      <div class="card-header bg-transparent border-0 pb-1">
                        <h6 class="card-title mb-0 fw-bold fs-14">
                          <i class="ti ti-user-circle me-2 text-success"></i>Personal Information
                        </h6>
                      </div>
                      <div class="card-body pt-1 pb-2">
                        <div class="info-item mb-2">
                          <label class="fs-11 text-muted mb-1 fw-medium">Date of Birth</label>
                          <p class="mb-0 fw-medium fs-13">
                            {{ patientDetails.date_of_birth || 'N/A' }}
                          </p>
                        </div>
                        <div class="info-item mb-0">
                          <label class="fs-11 text-muted mb-1 fw-medium">Marital Status</label>
                          <p class="mb-0 fw-medium fs-13">
                            {{ patientDetails.marital_status || 'N/A' }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Professional Information Card -->
                  <div class="col-md-6">
                    <div class="card h-100 border-0 shadow-sm bg-light">
                      <div class="card-header bg-transparent border-0 pb-1">
                        <h6 class="card-title mb-0 fw-bold fs-14">
                          <i class="ti ti-briefcase me-2 text-warning"></i>Professional Information
                        </h6>
                      </div>
                      <div class="card-body pt-1 pb-2">
                        <div class="info-item mb-2">
                          <label class="fs-11 text-muted mb-1 fw-medium">Occupation</label>
                          <p class="mb-0 fw-medium fs-13">
                            {{ patientDetails.occupation || 'N/A' }}
                          </p>
                        </div>
                        <div class="info-item mb-0">
                          <label class="fs-11 text-muted mb-1 fw-medium">Employer</label>
                          <p class="mb-0 fw-medium fs-13">{{ patientDetails.employer || 'N/A' }}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Medical History Card -->
                  <div class="col-md-6">
                    <div class="card h-100 border-0 shadow-sm bg-light">
                      <div class="card-header bg-transparent border-0 pb-1">
                        <h6 class="card-title mb-0 fw-bold fs-14">
                          <i class="ti ti-heart-rate-monitor me-2 text-danger"></i>Medical History
                        </h6>
                      </div>
                      <div class="card-body pt-1 pb-2">
                        <div class="info-item mb-2">
                          <label class="fs-11 text-muted mb-1 fw-medium">Last Visit Date</label>
                          <p class="mb-0 fw-medium fs-13">
                            {{ patientDetails['meta']?.last_visit_date || 'N/A' }}
                          </p>
                        </div>
                        <div class="info-item mb-0">
                          <label class="fs-11 text-muted mb-1 fw-medium">Blood Group</label>
                          <p class="mb-0 fw-medium fs-13">
                            {{ patientDetails.blood_group || 'N/A' }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Next of Kin Tab -->
              <div class="tab-pane" :id="`${modalId}_tab2`" role="tabpanel" tabindex="1">
                <div class="row g-2">
                  <div class="col-md-12">
                    <div class="card border-0 shadow-sm bg-light">
                      <div class="card-header bg-transparent border-0 pb-1">
                        <h6 class="card-title mb-0 fw-bold fs-14">
                          <i class="ti ti-users me-2 text-info"></i>Next of Kin Information
                        </h6>
                      </div>
                      <div class="card-body pt-1 pb-2">
                        <div class="row g-2">
                          <div class="col-md-7">
                            <div class="info-item">
                              <label class="fs-11 text-muted mb-1 fw-medium">Name</label>
                              <p class="mb-0 fw-medium fs-13">
                                {{ patientDetails['emergency_contact']?.name || 'N/A' }}
                              </p>
                            </div>
                          </div>
                          <div class="col-md-5">
                            <div class="info-item">
                              <label class="fs-11 text-muted mb-1 fw-medium">Relation</label>
                              <p class="mb-0 fw-medium fs-13">
                                {{ patientDetails['emergency_contact']?.relation || 'N/A' }}
                              </p>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <div class="info-item">
                              <label class="fs-11 text-muted mb-1 fw-medium">Phone No</label>
                              <p class="mb-0 fw-medium fs-13">
                                {{ patientDetails['emergency_contact']?.phone || 'N/A' }}
                                <span
                                  v-if="patientDetails['emergency_contact']?.other_phones"
                                  class="text-muted ms-2 fs-11"
                                >
                                  ({{ patientDetails['emergency_contact']?.other_phones }})
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Insurance Tab -->
              <div class="tab-pane" :id="`${modalId}_tab3`" role="tabpanel" tabindex="2">
                <!-- Insurance Header with Add Button -->
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="mb-0 fw-bold">
                    <i class="ti ti-shield-check me-2 text-primary"></i>Insurance Details
                  </h6>
                  <button
                    type="button"
                    class="btn btn-primary btn-sm rounded-pill"
                    @click="openAddInsuranceModal"
                  >
                    <i class="ti ti-plus me-1"></i>Add Insurance
                  </button>
                </div>

                <!-- Insurance Cards or Table -->
                <template v-if="insurances && insurances.length">
                  <div class="row g-3">
                    <div
                      v-for="(insurance, idx) in insurances"
                      :key="insurance.id || idx"
                      class="col-md-6"
                    >
                      <div class="card border-0 shadow-lg bg-white">
                        <div class="card-body p-3">
                          <div class="d-flex justify-content-between align-items-start mb-3">
                            <div class="d-flex align-items-center">
                              <div class="me-3">
                                <div
                                  class="avatar avatar-sm bg-primary bg-opacity-15 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                                >
                                  <i class="ti ti-shield-check text-primary"></i>
                                </div>
                              </div>
                              <div>
                                <h6
                                  class="mb-1 fw-bold text-dark"
                                  v-if="insurance.type === 'SELF-SPONSORED'"
                                >
                                  {{ insurance.type }}
                                </h6>
                                <h6
                                  class="mb-1 fw-bold text-dark"
                                  v-else-if="insurance.type === 'nhia'"
                                >
                                  {{ insurance.scheme }}
                                </h6>
                                <h6 class="mb-1 fw-bold text-dark" v-else>
                                  {{ insurance.plan?.name }}
                                </h6>
                                <small
                                  class="text-muted"
                                  v-if="insurance.type !== 'SELF-SPONSORED'"
                                >
                                  <span v-if="insurance.type === 'nhia'">{{
                                    insurance.plan?.name || 'N/A'
                                  }}</span>
                                  <span v-else>{{ insurance.plan?.company || 'N/A' }}</span>
                                </small>
                              </div>
                            </div>
                            <span
                              :class="[
                                'badge fw-medium fs-12',
                                insurance.status === true
                                  ? 'badge-soft-success border border-success'
                                  : 'badge-soft-danger border border-danger',
                              ]"
                            >
                              {{ insurance.status ? 'Active' : 'Inactive' }}
                            </span>
                          </div>

                          <template v-if="insurance.type !== 'SELF-SPONSORED'">
                            <div class="row g-2 mb-3">
                              <div class="col-6">
                                <small class="text-muted fw-medium">Member No</small>
                                <p class="mb-0 fw-bold text-dark">
                                  {{ insurance.membership_number || 'N/A' }}
                                </p>
                              </div>
                              <div class="col-6">
                                <small class="text-muted fw-medium">Serial Number</small>
                                <p class="mb-0 fw-bold text-dark">
                                  {{ insurance.serial_number || 'N/A' }}
                                </p>
                              </div>
                              <div class="col-6">
                                <small class="text-muted fw-medium">Expiry Date</small>
                                <p class="mb-0 fw-bold text-dark">
                                  {{ insurance.expiry_date || 'N/A' }}
                                </p>
                                <small class="text-primary fw-medium" v-if="insurance.expiry_date">
                                  {{
                                    dayjs(insurance.expiry_date).diff(dayjs(), 'day') > 0
                                      ? dayjs(insurance.expiry_date).diff(dayjs(), 'day')
                                      : 0
                                  }}
                                  days left
                                </small>
                              </div>
                            </div>

                            <div class="d-flex justify-content-end gap-2">
                              <button
                                type="button"
                                class="btn btn-outline-primary btn-sm rounded-pill shadow-sm"
                                disabled
                              >
                                <i class="ti ti-edit"></i>
                              </button>
                              <button
                                type="button"
                                class="btn btn-outline-danger btn-sm rounded-pill shadow-sm"
                                disabled
                              >
                                <i class="ti ti-trash"></i>
                              </button>
                            </div>
                          </template>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>

                <!-- No Insurance Message -->
                <template v-else>
                  <div class="text-center py-5">
                    <div
                      class="avatar avatar-xl bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    >
                      <i class="ti ti-shield-x fs-1 text-muted"></i>
                    </div>
                    <h6 class="text-muted mb-0">No insurance details</h6>
                    <p class="text-muted fs-14">Add insurance details to get started</p>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default {
  name: 'PatientDetailsModal',
  props: {
    modalId: {
      type: String,
      default: 'patient_details_modal',
    },
    modalTitle: {
      type: String,
      default: 'Patient Details',
    },
    subtitle: {
      type: String,
      default: '',
    },
    patientDetails: {
      type: Object,
      default: () => null,
    },
    insurances: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:visible', 'add-insurance', 'close'],
  setup(props, { emit }) {
    // Format address from JSON object to readable string
    const formatAddress = (address) => {
      if (!address) return null

      // If address is already a string, return it
      if (typeof address === 'string') return address

      // If address is an object, format it properly
      if (typeof address === 'object') {
        const parts = []
        if (address.address_line_1) parts.push(address.address_line_1)
        if (address.city) parts.push(address.city)
        if (address.state) parts.push(address.state)
        if (address.country) parts.push(address.country)

        return parts.length > 0 ? parts.join(', ') : null
      }

      return null
    }

    const openAddInsuranceModal = () => {
      emit('add-insurance', props.patientDetails)
    }

    return {
      formatAddress,
      openAddInsuranceModal,
      dayjs,
    }
  },
}
</script>

<style scoped>
/* Ensure modal centers properly */
.modal-dialog {
  margin: 1.75rem auto;
}

.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100vh - 1rem);
}

/* Modal header gradient */
.bg-gradient-primary {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
}

/* Close button for white header */
.btn-close-white {
  filter: brightness(0) invert(1);
  opacity: 0.8;
}
.btn-close-white:hover {
  opacity: 1;
}

/* Card styling */
.card {
  border-radius: 10px;
}

.card-header {
  border-radius: 10px 10px 0 0;
}

/* Avatar styling */
.avatar {
  width: 2.5rem;
  height: 2.5rem;
}

.avatar-xs {
  width: 1.5rem;
  height: 1.5rem;
}

.avatar-sm {
  width: 2rem;
  height: 2rem;
}

.avatar-md {
  width: 3rem;
  height: 3rem;
}

.avatar-xl {
  width: 4rem;
  height: 4rem;
}

/* Font sizes */
.fs-16 {
  font-size: 1rem !important;
}

.fs-14 {
  font-size: 0.875rem !important;
}

.fs-13 {
  font-size: 0.8125rem !important;
}

.fs-12 {
  font-size: 0.75rem !important;
}

.fs-11 {
  font-size: 0.6875rem !important;
}

.fs-10 {
  font-size: 0.625rem !important;
}

.fs-1 {
  font-size: 2.5rem !important;
}

/* Badge styling */
.badge-soft-success {
  background-color: rgba(40, 167, 69, 0.1);
  color: #28a745;
}

.badge-soft-danger {
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545;
}

/* Button styling */
.btn-sm {
  font-size: 13px;
  font-weight: 500;
}

/* Responsive design */
@media (max-width: 768px) {
  .modal-dialog {
    margin: 0.5rem;
    max-width: calc(100vw - 1rem);
  }
}
</style>
