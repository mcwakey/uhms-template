<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Clean Breadcrumb -->
      <div class="mb-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent p-0 mb-0">
            <li class="breadcrumb-item">
              <router-link
                :to="{ name: 'PatientList' }"
                class="text-decoration-none d-flex align-items-center text-primary"
              >
                <i class="ti ti-arrow-left me-2"></i>Back to Patients
              </router-link>
            </li>
          </ol>
        </nav>
      </div>

      <!-- Modern Patient Profile Header -->
      <div class="card border-0 shadow-sm mb-4 rounded-4">
        <div class="card-body p-4">
          <div class="row align-items-center">
            <!-- Patient Avatar & Info -->
            <div class="col-lg-8">
              <div class="d-flex align-items-center">
                <!-- Avatar -->
                <div class="me-4">
                  <div class="position-relative">
                    <img
                      src="@/assets/img/users/user-08.jpg"
                      alt="Patient Avatar"
                      class="rounded-circle shadow-sm"
                      style="width: 90px; height: 90px; object-fit: cover"
                    />
                    <div class="position-absolute bottom-0 end-0">
                      <span
                        class="badge bg-success rounded-circle p-2 border border-white shadow-sm"
                      >
                        <i class="ti ti-check fs-12"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Patient Details -->
                <div class="flex-grow-1">
                  <div class="d-flex align-items-center mb-2">
                    <h2 class="mb-0 me-3 fw-bold text-dark">
                      {{ patientStore.patient?.full_name || 'Unknown Patient' }}
                    </h2>
                    <span
                      class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill"
                    >
                      #{{ patientStore.patient?.opd_no || '-' }}
                    </span>
                  </div>

                  <div class="row g-3 text-muted mb-3">
                    <div class="col-auto">
                      <div class="d-flex align-items-center">
                        <i class="ti ti-user-circle me-2 text-primary"></i>
                        <span>{{ patientStore.patient?.gender || '-' }}</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="d-flex align-items-center">
                        <i class="ti ti-calendar me-2 text-primary"></i>
                        <span>{{ patientStore.patient?.age?.value || '-' }} years old</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="d-flex align-items-center">
                        <i class="ti ti-phone me-2 text-primary"></i>
                        <span>{{ patientStore.patient?.phone || '-' }}</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      <div class="d-flex align-items-center">
                        <i class="ti ti-mail me-2 text-primary"></i>
                        <span>{{ patientStore.patient?.email || '-' }}</span>
                      </div>
                    </div>
                  </div>

                  <!-- Address -->
                  <div
                    v-if="patientStore.patient?.address"
                    class="d-flex align-items-center text-muted"
                  >
                    <i class="ti ti-map-pin me-2 text-primary"></i>
                    <span class="me-2">
                      {{
                        [
                          patientStore.patient.address.address_line_1,
                          patientStore.patient.address.city,
                          patientStore.patient.address.state,
                          patientStore.patient.address.country,
                        ]
                          .filter(Boolean)
                          .join(', ')
                      }}
                    </span>
                    <a
                      v-if="
                        patientStore.patient.address.latitude &&
                        patientStore.patient.address.longitude
                      "
                      :href="`https://maps.google.com/?q=${patientStore.patient.address.latitude},${patientStore.patient.address.longitude}`"
                      target="_blank"
                      class="text-primary"
                      title="View on map"
                    >
                      <i class="ti ti-external-link fs-14"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="col-lg-4 text-end">
              <div class="d-flex justify-content-end gap-2 flex-wrap">
                <button class="btn btn-outline-primary rounded-pill px-3">
                  <i class="ti ti-phone me-1"></i>Call
                </button>
                <button class="btn btn-outline-primary rounded-pill px-3">
                  <i class="ti ti-message-circle me-1"></i>Message
                </button>
                <button @click="openSetAppointmentModal" class="btn btn-primary rounded-pill px-4">
                  <i class="ti ti-calendar-plus me-1"></i>Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern Dashboard Style Cards -->
      <div class="row g-4 mb-4">
        <!-- Personal Information Stats -->
        <div class="col-lg-5">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body p-4 mb-1">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <h5 class="fw-bold mb-0 text-dark">
                  <i class="ti ti-user-heart me-2 text-primary"></i>Personal Overview
                </h5>
                <div class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                  Profile Complete
                </div>
              </div>

              <!-- Key Information List -->
              <div class="space-y-4">
                <div class="d-flex align-items-center py-3 border-bottom">
                  <div class="flex-shrink-0 me-3">
                    <div
                      class="bg-gradient-primary rounded-circle p-2"
                      style="
                        width: 45px;
                        height: 45px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                      "
                    >
                      <i
                        class="ti ti-briefcase text-white d-flex align-items-center justify-content-center h-100"
                      ></i>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="fw-semibold mb-1 text-dark">Occupation</h6>
                    <p class="text-muted mb-0">
                      {{ patientStore.patient?.occupation || 'Not specified' }}
                    </p>
                  </div>
                </div>

                <div class="d-flex align-items-center py-3 border-bottom">
                  <div class="flex-shrink-0 me-3">
                    <div
                      class="bg-gradient-success rounded-circle p-2"
                      style="
                        width: 45px;
                        height: 45px;
                        background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
                      "
                    >
                      <i
                        class="ti ti-heart text-white d-flex align-items-center justify-content-center h-100"
                      ></i>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="fw-semibold mb-1 text-dark">Marital Status</h6>
                    <p class="text-muted mb-0">
                      {{ patientStore.patient?.marital_status || 'Not specified' }}
                    </p>
                  </div>
                </div>

                <div class="d-flex align-items-center py-3 border-bottom">
                  <div class="flex-shrink-0 me-3">
                    <div
                      class="bg-gradient-danger rounded-circle p-2"
                      style="
                        width: 45px;
                        height: 45px;
                        background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
                      "
                    >
                      <i
                        class="ti ti-droplet text-white d-flex align-items-center justify-content-center h-100"
                      ></i>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="fw-semibold mb-1 text-dark">Blood Group</h6>
                    <div class="d-flex align-items-center">
                      <span class="badge bg-danger text-white me-2 px-2 py-1 rounded">{{
                        patientStore.patient?.blood_group || 'Unknown'
                      }}</span>
                      <small class="text-muted">{{
                        patientStore.patient?.blood_group
                          ? 'Compatible for transfusion'
                          : 'Blood type not recorded'
                      }}</small>
                    </div>
                  </div>
                </div>

                <div class="d-flex align-items-center py-3">
                  <div class="flex-shrink-0 me-3">
                    <div
                      class="bg-gradient-info rounded-circle p-2"
                      style="
                        width: 45px;
                        height: 45px;
                        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                      "
                    >
                      <i
                        class="ti ti-shield-check text-white d-flex align-items-center justify-content-center h-100"
                      ></i>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h6 class="fw-semibold mb-1 text-dark">Insurance Coverage</h6>
                    <div class="d-flex align-items-center">
                      <span class="badge bg-success text-white me-2 px-2 py-1 rounded"
                        >{{ insurances.length }} Active Plan{{
                          insurances.length !== 1 ? 's' : ''
                        }}</span
                      >
                      <small class="text-muted">{{
                        insurances.length > 0 ? 'Fully covered' : 'No active plans'
                      }}</small>
                    </div>
                  </div>
                </div>

                <div class="flex-fill w-100">
                  <!-- <div class="card-header">
                    <h5 class="fw-bold mb-0">
                      <i class="ti ti-shield-check me-1"></i>{{ $t('insurance') }}
                      <span class="badge badge-soft-success border border-success fs-13 fw-medium ms-2">
                        {{ insurances.length }}
                      </span>
                    </h5>
                  </div> -->
                  <div class="">
                    <div v-if="insurances.length === 0" class="text-center text-muted py-4">
                      <!-- <div class="mb-3">
                        <i class="ti ti-shield-x fs-48 text-muted opacity-50"></i>
                      </div> -->
                      <p class="mb-3">{{ $t('no_insurance_details') }}</p>
                      <button class="btn btn-primary" @click="openCreateInsuranceModal">
                        <i class="ti ti-plus me-1"></i>{{ $t('add_first_insurance') }}
                      </button>
                    </div>
                    <div v-else class="insurance-slider-container position-relative">
                      <!-- Left Arrow Overlay -->
                      <button
                        v-if="insurances.length > 1"
                        @click="scrollToPreviousCard"
                        :disabled="currentInsuranceIndex === 0"
                        class="position-absolute start-0 top-50 translate-middle-y btn btn-light rounded-circle shadow d-flex align-items-center justify-content-center"
                        style="width: 50px; height: 50px; z-index: 10; left: 15px"
                        :class="{ 'opacity-25': currentInsuranceIndex === 0 }"
                      >
                        <i class="ti ti-chevron-left fs-18"></i>
                      </button>

                      <!-- Right Arrow Overlay -->
                      <button
                        v-if="insurances.length > 1"
                        @click="scrollToNextCard"
                        :disabled="currentInsuranceIndex === insurances.length"
                        class="position-absolute end-0 top-50 translate-middle-y btn btn-light rounded-circle shadow d-flex align-items-center justify-content-center"
                        style="width: 50px; height: 50px; z-index: 10; right: 15px"
                        :class="{ 'opacity-25': currentInsuranceIndex === insurances.length - 1 }"
                      >
                        <i class="ti ti-chevron-right fs-18"></i>
                      </button>

                      <div
                        class="d-flex overflow-auto insurance-cards-wrapper"
                        ref="insuranceSlider"
                      >
                        <div
                          v-for="(insurance, index) in insurances"
                          :key="insurance.id || index"
                          class="insurance-card flex-shrink-0"
                          :class="{ active: currentInsuranceIndex === index }"
                          @click="openInsuranceModal(insurance)"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_insurance"
                          style="cursor: pointer"
                        >
                          <div
                            class="card border-0 shadow-sm h-auto position-relative"
                            :style="getCardGradient(index)"
                          >
                            <!-- ...existing card content... -->
                            <div class="card-body text-white p-2">
                              <!-- Status badge positioned absolutely at top right -->
                              <span
                                :class="[
                                  'badge fs-10 fw-medium position-absolute',
                                  insurance.status === true ? 'bg-success' : 'bg-danger',
                                ]"
                                style="top: 12px; right: 8px"
                              >
                                {{ insurance.status ? t('active') : t('inactive') }}
                              </span>

                              <div class="mb-2">
                                <div>
                                  <h6 class="text-white mb-1 fw-bold">
                                    {{ insurance.plan?.company || t('na') }}
                                  </h6>
                                  <small class="text-white-50">{{
                                    insurance.plan?.name || t('na')
                                  }}</small>
                                </div>
                              </div>

                              <div class="row">
                                <div class="col-8">
                                  <div class="text-white-50 fs-12 mb-1">
                                    {{ t('membership_number') }}
                                  </div>
                                  <div class="fw-bold fs-14 letter-spacing">
                                    {{ formatCardNumber(insurance.membership_number) }}
                                  </div>
                                </div>
                                <div class="col-4">
                                  <div class="text-white-50 fs-12 mb-1">{{ t('expiry_date') }}</div>
                                  <div class="fw-semibold fs-13">
                                    {{ formatDate(insurance.expiry_date) }}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Add New Insurance Card -->
                        <div class="add-insurance-card flex-shrink-0">
                          <div
                            class="card bg-light h-auto d-flex align-items-center justify-content-center"
                            style="cursor: pointer; min-height: 115px"
                            @click="openCreateInsuranceModal"
                          >
                            <div class="text-center text-primary p-3">
                              <i class="ti ti-plus fs-48 mb-2"></i>
                              <!-- <div class="fw-semibold fs-13">{{ $t('add_insurance') }}</div> -->
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Card Position Indicator -->
                      <!-- <div v-if="insurances.length > 1" class="d-flex justify-content-center mt-3">
                        <span class="text-muted fs-14">
                          {{ currentInsuranceIndex + 1 }} of {{ insurances.length }}
                        </span>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Health Information Dashboard -->
        <div class="col-lg-7">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body p-4">
              <div class="d-flex align-items-center justify-content-between mb-4">
                <h5 class="fw-bold mb-0 text-dark">
                  <i class="ti ti-heart-rate-monitor me-2 text-primary"></i>Health Information
                </h5>
                <div class="d-flex align-items-center">
                  <!-- <div class="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill me-2">
                                        <i class="ti ti-circle-check me-1"></i>Normal Range
                                    </div> -->
                  <small class="text-muted">
                    Updated: {{ patientStore.patient?.last_visit_date || 'Never' }}
                  </small>
                </div>
              </div>

              <!-- Health Tabs -->
              <ul class="nav nav-pills nav-justified mb-4" id="healthTabs" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active fw-semibold"
                    id="health-metrics-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#health-metrics"
                    type="button"
                    role="tab"
                    aria-controls="health-metrics"
                    aria-selected="false"
                  >
                    <i class="ti ti-activity me-1"></i>Health Metrics
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link fw-semibold"
                    id="medical-history-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#medical-history"
                    type="button"
                    role="tab"
                    aria-controls="medical-history"
                    aria-selected="true"
                  >
                    <i class="ti ti-file-medical me-1"></i>Medical History
                  </button>
                </li>
              </ul>

              <!-- Tab Content -->
              <div class="tab-content" id="healthTabsContent">
                <!-- Medical History Tab -->
                <div
                  class="tab-pane fade"
                  id="medical-history"
                  role="tabpanel"
                  aria-labelledby="medical-history-tab"
                >
                  <div class="row g-4">
                    <!-- Column 1: Current Conditions, Known Allergies, Family History -->
                    <div class="col-md-6">
                      <!-- Current Conditions -->
                      <div class="mb-4">
                        <h6 class="fw-bold text-dark mb-2">
                          <i class="ti ti-alert-circle me-1 text-secondary fs-14"></i>Current
                          Conditions
                        </h6>
                        <div class="row g-2">
                          <div class="col-12">
                            <div class="p-2 bg-light rounded-2 border border-light">
                              <div class="d-flex align-items-center">
                                <div
                                  class="bg-primary bg-opacity-10 rounded-circle p-1 me-2"
                                  style="width: 30px; height: 30px"
                                >
                                  <i
                                    class="ti ti-heart text-primary fs-14 d-flex align-items-center justify-content-center h-100"
                                  ></i>
                                </div>
                                <div>
                                  <h6 class="fw-semibold mb-0 text-dark fs-13">Hypertension</h6>
                                  <small class="text-muted">Since 2020 • Controlled</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="p-2 bg-light rounded-2 border border-light">
                              <div class="d-flex align-items-center">
                                <div
                                  class="bg-info bg-opacity-10 rounded-circle p-1 me-2"
                                  style="width: 30px; height: 30px"
                                >
                                  <i
                                    class="ti ti-eye text-info fs-14 d-flex align-items-center justify-content-center h-100"
                                  ></i>
                                </div>
                                <div>
                                  <h6 class="fw-semibold mb-0 text-dark fs-13">Myopia</h6>
                                  <small class="text-muted">Since childhood • Corrected</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Known Allergies -->
                      <div class="mb-4">
                        <h6 class="fw-bold text-dark mb-2">
                          <i class="ti ti-shield-x me-1 text-muted fs-14"></i>Known Allergies
                        </h6>
                        <div class="row g-2">
                          <div class="col-12">
                            <div
                              class="p-2 rounded-2 border"
                              style="background-color: #fbfbfb; border-color: #e9ecef !important"
                            >
                              <div class="d-flex align-items-center">
                                <div
                                  class="rounded-circle p-1 me-2"
                                  style="width: 30px; height: 30px; background-color: #f1f3f4"
                                >
                                  <i
                                    class="ti ti-pill fs-14 d-flex align-items-center justify-content-center h-100"
                                    style="color: #6c757d"
                                  ></i>
                                </div>
                                <div>
                                  <h6 class="fw-semibold mb-0 text-dark fs-13">Penicillin</h6>
                                  <small class="text-muted">Severe reaction • Avoid</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div
                              class="p-2 rounded-2 border"
                              style="background-color: #fbfbfb; border-color: #e9ecef !important"
                            >
                              <div class="d-flex align-items-center">
                                <div
                                  class="rounded-circle p-1 me-2"
                                  style="width: 30px; height: 30px; background-color: #f1f3f4"
                                >
                                  <i
                                    class="ti ti-leaf fs-14 d-flex align-items-center justify-content-center h-100"
                                    style="color: #6c757d"
                                  ></i>
                                </div>
                                <div>
                                  <h6 class="fw-semibold mb-0 text-dark fs-13">Pollen</h6>
                                  <small class="text-muted">Seasonal • Managed</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Family History -->
                      <div>
                        <h6 class="fw-bold text-dark mb-2">
                          <i class="ti ti-users me-1 text-muted fs-14"></i>Family History
                        </h6>
                        <div
                          class="d-flex align-items-center p-2 rounded-2 border mb-2"
                          style="background-color: #fbfbfb; border-color: #e9ecef !important"
                        >
                          <div class="flex-shrink-0 me-2">
                            <div
                              class="rounded-circle p-1"
                              style="width: 30px; height: 30px; background-color: #f1f3f4"
                            >
                              <i
                                class="ti ti-heart fs-14 d-flex align-items-center justify-content-center h-100"
                                style="color: #6c757d"
                              ></i>
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="fw-semibold mb-0 text-dark fs-13">Cardiovascular Disease</h6>
                            <small class="text-muted">Father • Age 55</small>
                          </div>
                        </div>
                        <div
                          class="d-flex align-items-center p-2 rounded-2 border"
                          style="background-color: #fbfbfb; border-color: #e9ecef !important"
                        >
                          <div class="flex-shrink-0 me-2">
                            <div
                              class="rounded-circle p-1"
                              style="width: 30px; height: 30px; background-color: #f1f3f4"
                            >
                              <i
                                class="ti ti-droplet fs-14 d-flex align-items-center justify-content-center h-100"
                                style="color: #6c757d"
                              ></i>
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="fw-semibold mb-0 text-dark fs-13">Diabetes Type 2</h6>
                            <small class="text-muted">Mother • Age 48</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Column 2: Current Medications, Previous Surgeries -->
                    <div class="col-md-6">
                      <!-- Current Medications -->
                      <div class="mb-4">
                        <h6 class="fw-bold text-dark mb-2">
                          <i class="ti ti-pill me-1 text-muted fs-14"></i>Current Medications
                        </h6>
                        <div class="row g-2">
                          <div class="col-12">
                            <div
                              class="p-2 rounded-2 border"
                              style="background-color: #fbfbfb; border-color: #e9ecef !important"
                            >
                              <div class="d-flex align-items-center">
                                <div
                                  class="rounded-circle p-1 me-2"
                                  style="width: 30px; height: 30px; background-color: #f1f3f4"
                                >
                                  <i
                                    class="ti ti-heart fs-14 d-flex align-items-center justify-content-center h-100"
                                    style="color: #6c757d"
                                  ></i>
                                </div>
                                <div>
                                  <h6 class="fw-semibold mb-0 text-dark fs-13">Lisinopril 10mg</h6>
                                  <small class="text-muted">Once daily • For hypertension</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div
                              class="p-2 rounded-2 border"
                              style="background-color: #fbfbfb; border-color: #e9ecef !important"
                            >
                              <div class="d-flex align-items-center">
                                <div
                                  class="rounded-circle p-1 me-2"
                                  style="width: 30px; height: 30px; background-color: #f1f3f4"
                                >
                                  <i
                                    class="ti ti-eye fs-14 d-flex align-items-center justify-content-center h-100"
                                    style="color: #6c757d"
                                  ></i>
                                </div>
                                <div>
                                  <h6 class="fw-semibold mb-0 text-dark fs-13">Artificial Tears</h6>
                                  <small class="text-muted">As needed • For dry eyes</small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12">
                            <div
                              class="p-2 rounded-2 border"
                              style="background-color: #fbfbfb; border-color: #e9ecef !important"
                            >
                              <div class="d-flex align-items-center">
                                <div
                                  class="rounded-circle p-1 me-2"
                                  style="width: 30px; height: 30px; background-color: #f1f3f4"
                                >
                                  <i
                                    class="ti ti-shield fs-14 d-flex align-items-center justify-content-center h-100"
                                    style="color: #6c757d"
                                  ></i>
                                </div>
                                <div>
                                  <h6 class="fw-semibold mb-0 text-dark fs-13">Multivitamin</h6>
                                  <small class="text-muted">Once daily • Supplement</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Previous Surgeries -->
                      <div>
                        <h6 class="fw-bold text-dark mb-2">
                          <i class="ti ti-cut me-1 text-muted fs-14"></i>Previous Surgeries
                        </h6>
                        <div
                          class="d-flex align-items-center p-2 rounded-2 border"
                          style="background-color: #fbfbfb; border-color: #e9ecef !important"
                        >
                          <div class="flex-shrink-0 me-2">
                            <div
                              class="rounded-circle p-1"
                              style="width: 30px; height: 30px; background-color: #f1f3f4"
                            >
                              <i
                                class="ti ti-calendar fs-14 d-flex align-items-center justify-content-center h-100"
                                style="color: #6c757d"
                              ></i>
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <h6 class="fw-semibold mb-0 text-dark fs-13">Appendectomy</h6>
                            <small class="text-muted">March 2018 • Successful</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Health Metrics Tab -->
                <div
                  class="tab-pane fade show active"
                  id="health-metrics"
                  role="tabpanel"
                  aria-labelledby="health-metrics-tab"
                >
                  <!-- Primary Vital Signs Cards -->
                  <div class="row g-2 mb-3">
                    <!-- Blood Pressure -->
                    <div class="col-md-6 col-lg-3">
                      <div
                        class="card border-0"
                        style="
                          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                          border-radius: 12px;
                        "
                      >
                        <div class="card-body p-2 text-white">
                          <div class="d-flex align-items-center justify-content-between mb-1">
                            <div
                              class="bg-white bg-opacity-20 rounded-circle p-1"
                              style="width: 32px; height: 32px"
                            >
                              <i
                                class="ti ti-heart text-white fs-14 d-flex align-items-center justify-content-center h-100"
                              ></i>
                            </div>
                            <span
                              class="badge bg-white bg-opacity-20 text-white px-2 py-1 rounded-pill"
                              style="font-size: 10px"
                              >Normal</span
                            >
                          </div>
                          <h5 class="fw-bold mb-0 text-white">
                            {{ patientStore.patient?.vital_signs?.blood_pressure || '-' }}
                          </h5>
                          <p class="mb-0 text-white-50" style="font-size: 11px">Blood Pressure</p>
                          <small class="text-white-50" style="font-size: 10px">mmHg</small>
                        </div>
                      </div>
                    </div>

                    <!-- Heart Rate -->
                    <div class="col-md-6 col-lg-3">
                      <div
                        class="card border-0"
                        style="
                          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
                          border-radius: 12px;
                        "
                      >
                        <div class="card-body p-2 text-white">
                          <div class="d-flex align-items-center justify-content-between mb-1">
                            <div
                              class="bg-white bg-opacity-20 rounded-circle p-1"
                              style="width: 32px; height: 32px"
                            >
                              <i
                                class="ti ti-activity text-white fs-14 d-flex align-items-center justify-content-center h-100"
                              ></i>
                            </div>
                            <span
                              class="badge bg-white bg-opacity-20 text-white px-2 py-1 rounded-pill"
                              style="font-size: 10px"
                              >Normal</span
                            >
                          </div>
                          <h5 class="fw-bold mb-0 text-white">
                            {{ patientStore.patient?.vital_signs?.heart_rate || '-' }}
                          </h5>
                          <p class="mb-0 text-white-50" style="font-size: 11px">Heart Rate</p>
                          <small class="text-white-50" style="font-size: 10px">bpm</small>
                        </div>
                      </div>
                    </div>

                    <!-- Temperature -->
                    <div class="col-md-6 col-lg-3">
                      <div
                        class="card border-0"
                        style="
                          background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
                          border-radius: 12px;
                        "
                      >
                        <div class="card-body p-2 text-white">
                          <div class="d-flex align-items-center justify-content-between mb-1">
                            <div
                              class="bg-white bg-opacity-20 rounded-circle p-1"
                              style="width: 32px; height: 32px"
                            >
                              <i
                                class="ti ti-temperature text-white fs-14 d-flex align-items-center justify-content-center h-100"
                              ></i>
                            </div>
                            <span
                              class="badge bg-white bg-opacity-20 text-white px-2 py-1 rounded-pill"
                              style="font-size: 10px"
                              >Normal</span
                            >
                          </div>
                          <h5 class="fw-bold mb-0 text-white">
                            {{ patientStore.patient?.vital_signs?.temperature || '-' }}
                          </h5>
                          <p class="mb-0 text-white-50" style="font-size: 11px">Temperature</p>
                          <small class="text-white-50" style="font-size: 10px">°C</small>
                        </div>
                      </div>
                    </div>

                    <!-- SpO2 -->
                    <div class="col-md-6 col-lg-3">
                      <div
                        class="card border-0"
                        style="
                          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                          border-radius: 12px;
                        "
                      >
                        <div class="card-body p-2 text-white">
                          <div class="d-flex align-items-center justify-content-between mb-1">
                            <div
                              class="bg-white bg-opacity-20 rounded-circle p-1"
                              style="width: 32px; height: 32px"
                            >
                              <i
                                class="ti ti-lungs text-white fs-14 d-flex align-items-center justify-content-center h-100"
                              ></i>
                            </div>
                            <span
                              class="badge bg-white bg-opacity-20 text-white px-2 py-1 rounded-pill"
                              style="font-size: 10px"
                              >Normal</span
                            >
                          </div>
                          <h5 class="fw-bold mb-0 text-white">
                            {{ patientStore.patient?.vital_signs?.spo2 || '-' }}
                          </h5>
                          <p class="mb-0 text-white-50" style="font-size: 11px">
                            Oxygen Saturation
                          </p>
                          <small class="text-white-50" style="font-size: 10px">%</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Physical Measurements Section -->
                  <div class="row g-2">
                    <!-- BMI Chart -->
                    <div class="col-lg-8">
                      <div class="card border-0 shadow-sm h-100" style="border-radius: 16px">
                        <div class="card-body p-2">
                          <div class="d-flex align-items-center justify-content-between mb-4">
                            <h6 class="fw-bold text-dark mb-0">
                              <i class="ti ti-chart-line me-2 text-primary"></i>Physical Assessment
                            </h6>
                            <!-- <div class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill">
                                                            Updated Today
                                                        </div> -->
                          </div>

                          <!-- BMI Visual Indicator -->
                          <div class="mb-4">
                            <div class="d-flex align-items-center justify-content-between mb-2">
                              <span class="fw-semibold text-dark">BMI Status</span>
                              <span class="badge bg-success text-white px-3 py-1 rounded-pill"
                                >Normal Weight</span
                              >
                            </div>
                            <div class="progress" style="height: 8px; border-radius: 10px">
                              <div
                                class="progress-bar bg-gradient"
                                style="
                                  width: 65%;
                                  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
                                  border-radius: 10px;
                                "
                              ></div>
                            </div>
                            <div class="d-flex justify-content-between mt-1">
                              <small class="text-muted">Underweight</small>
                              <small class="text-muted">Normal</small>
                              <small class="text-muted">Overweight</small>
                              <small class="text-muted">Obese</small>
                            </div>
                          </div>

                          <!-- Physical Stats Grid -->
                          <div class="row g-3">
                            <div class="col-md-4">
                              <div
                                class="p-3 rounded-3 border"
                                style="background: linear-gradient(135deg, #667eea15, #764ba215)"
                              >
                                <div class="d-flex align-items-center mb-2">
                                  <div
                                    class="bg-primary bg-opacity-15 rounded-circle p-2 me-2"
                                    style="width: 35px; height: 35px"
                                  >
                                    <i
                                      class="ti ti-ruler-measure text-primary fs-14 d-flex align-items-center justify-content-center h-100"
                                    ></i>
                                  </div>
                                  <span class="text-muted fs-13">Height</span>
                                </div>
                                <h4 class="fw-bold text-dark mb-0">
                                  {{ patientStore.patient?.vital_signs?.height || '-' }}
                                  <small class="text-muted fs-14">cm</small>
                                </h4>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div
                                class="p-3 rounded-3 border"
                                style="background: linear-gradient(135deg, #43e97b15, #38f9d715)"
                              >
                                <div class="d-flex align-items-center mb-2">
                                  <div
                                    class="bg-success bg-opacity-15 rounded-circle p-2 me-2"
                                    style="width: 35px; height: 35px"
                                  >
                                    <i
                                      class="ti ti-scale text-success fs-14 d-flex align-items-center justify-content-center h-100"
                                    ></i>
                                  </div>
                                  <span class="text-muted fs-13">Weight</span>
                                </div>
                                <h4 class="fw-bold text-dark mb-0">
                                  {{ patientStore.patient?.vital_signs?.weight || '-' }}
                                  <small class="text-muted fs-14">kg</small>
                                </h4>
                              </div>
                            </div>
                            <div class="col-md-4">
                              <div
                                class="p-3 rounded-3 border"
                                style="background: linear-gradient(135deg, #4facfe15, #00f2fe15)"
                              >
                                <div class="d-flex align-items-center mb-2">
                                  <div
                                    class="bg-info bg-opacity-15 rounded-circle p-2 me-2"
                                    style="width: 35px; height: 35px"
                                  >
                                    <i
                                      class="ti ti-calculator text-info fs-14 d-flex align-items-center justify-content-center h-100"
                                    ></i>
                                  </div>
                                  <span class="text-muted fs-13">BMI</span>
                                </div>
                                <h4 class="fw-bold text-dark mb-0">
                                  {{ patientStore.patient?.vital_signs?.bmi || '-' }}
                                  <small class="text-muted fs-14">kg/m²</small>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Health Summary -->
                    <div class="col-lg-4">
                      <div class="card border-0 shadow-sm h-100" style="border-radius: 16px">
                        <div class="card-body p-2">
                          <h6 class="fw-bold text-dark mb-3">
                            <i class="ti ti-health-recognition me-2 text-success"></i>Health Summary
                          </h6>

                          <!-- Health Score -->
                          <div class="text-center mb-2">
                            <div class="position-relative d-inline-block">
                              <div
                                class="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center"
                                style="width: 80px; height: 80px"
                              >
                                <h3 class="fw-bold text-success mb-0">85</h3>
                              </div>
                              <div class="position-absolute top-0 start-0 w-100 h-100">
                                <svg width="80" height="80" style="transform: rotate(-90deg)">
                                  <circle
                                    cx="40"
                                    cy="40"
                                    r="35"
                                    fill="none"
                                    stroke="#e9ecef"
                                    stroke-width="6"
                                  ></circle>
                                  <circle
                                    cx="40"
                                    cy="40"
                                    r="35"
                                    fill="none"
                                    stroke="#28a745"
                                    stroke-width="6"
                                    stroke-dasharray="220"
                                    stroke-dashoffset="44"
                                    stroke-linecap="round"
                                  ></circle>
                                </svg>
                              </div>
                            </div>
                            <p class="mb-0 text-muted fs-13 mt-2">Health Score</p>
                            <small class="text-success fw-semibold">Excellent</small>
                          </div>

                          <!-- Health Indicators -->
                          <div class="space-y-3">
                            <div class="d-flex align-items-center">
                              <div
                                class="bg-success bg-opacity-15 rounded-circle p-1 me-2"
                                style="width: 24px; height: 24px"
                              >
                                <i
                                  class="ti ti-check text-success fs-12 d-flex align-items-center justify-content-center h-100"
                                ></i>
                              </div>
                              <span class="text-dark fs-13">Blood pressure normal</span>
                            </div>
                            <div class="d-flex align-items-center">
                              <div
                                class="bg-success bg-opacity-15 rounded-circle p-1 me-2"
                                style="width: 24px; height: 24px"
                              >
                                <i
                                  class="ti ti-check text-success fs-12 d-flex align-items-center justify-content-center h-100"
                                ></i>
                              </div>
                              <span class="text-dark fs-13">Heart rate stable</span>
                            </div>
                            <div class="d-flex align-items-center">
                              <div
                                class="bg-success bg-opacity-15 rounded-circle p-1 me-2"
                                style="width: 24px; height: 24px"
                              >
                                <i
                                  class="ti ti-check text-success fs-12 d-flex align-items-center justify-content-center h-100"
                                ></i>
                              </div>
                              <span class="text-dark fs-13">BMI in healthy range</span>
                            </div>
                            <div class="d-flex align-items-center">
                              <div
                                class="bg-warning bg-opacity-15 rounded-circle p-1 me-2"
                                style="width: 24px; height: 24px"
                              >
                                <i
                                  class="ti ti-alert-triangle text-warning fs-12 d-flex align-items-center justify-content-center h-100"
                                ></i>
                              </div>
                              <span class="text-dark fs-13">Monitor hypertension</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- tab start -->
      <ul class="nav nav-tabs nav-bordered mb-3">
        <li class="nav-item">
          <a
            href="#appointments"
            data-bs-toggle="tab"
            aria-expanded="false"
            class="nav-link active bg-transparent"
          >
            <span>{{ $t('appointments') }}</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="#transactions"
            data-bs-toggle="tab"
            aria-expanded="true"
            class="nav-link bg-transparent"
          >
            <span>{{ $t('transactions') }}</span>
          </a>
        </li>
      </ul>
      <!-- tab end -->

      <!-- tab content start -->
      <div class="tab-content">
        <div class="tab-pane show active" id="appointments">
          <!-- Filter/Search Bar Start -->
          <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-1">
            <div class="d-flex align-items-center gap-2">
              <div class="search-set mb-1">
                <div class="d-flex align-items-center flex-wrap gap-2">
                  <div class="table-search d-flex align-items-center mb-0">
                    <div class="search-input">
                      <a href="javascript:void(0);" class="btn-searchset"></a>
                      <div class="dataTables_filter">
                        <label>
                          <input
                            type="search"
                            class="form-control form-control-sm"
                            placeholder="Search"
                            v-model="searchQuery"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex right-content align-items-center flex-wrap mb-1">
                <DateRangePicker
                  v-model="dateRange"
                  input-class="form-control form-control-sm bookingrange"
                  placeholder="Select date range"
                  :show-ranges="true"
                  @apply="onDateRangeApply"
                  @error="onDateRangeError"
                />
              </div>
            </div>
            <div
              class="d-flex table-dropdown mb-1 pb-1 right-content align-items-center flex-wrap row-gap-3"
            >
              <div class="dropdown me-2">
                <a
                  href="javascript:void(0);"
                  class="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  <i class="ti ti-filter text-gray-5 me-1"></i>Filters
                </a>
                <div class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0">
                  <div
                    class="d-flex align-items-center justify-content-between border-bottom filter-header"
                  >
                    <h4 class="mb-0 fw-bold">Filter</h4>
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0);"
                        class="link-danger text-decoration-underline"
                        @click="clearAllFilters"
                        >Clear All</a
                      >
                    </div>
                  </div>
                  <form action="#">
                    <div class="filter-body pb-0">
                      <div class="mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                          <label class="form-label mb-1">Doctor</label>
                          <a
                            href="javascript:void(0);"
                            class="link-primary mb-1"
                            @click="selected = []"
                            >Reset</a
                          >
                        </div>
                        <vue-multiselect
                          v-model="selected"
                          :options="Doctor"
                          :multiple="true"
                          label="name"
                          track-by="id"
                        />
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                          <label class="form-label">Designation</label>
                          <a
                            href="javascript:void(0);"
                            class="link-primary mb-1"
                            @click="selectedOne = []"
                            >Reset</a
                          >
                        </div>
                        <vue-multiselect
                          v-model="selectedOne"
                          :options="Designation"
                          :multiple="true"
                          label="name"
                          track-by="id"
                        />
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                          <label class="form-label">Department</label>
                          <a
                            href="javascript:void(0);"
                            class="link-primary mb-1"
                            @click="selectedTwo = []"
                            >Reset</a
                          >
                        </div>
                        <vue-multiselect
                          v-model="selectedTwo"
                          :options="Department"
                          :multiple="true"
                          label="name"
                          track-by="id"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label mb-1 text-dark fs-14 fw-medium"
                          >Date<span class="text-danger">*</span></label
                        >
                        <div class="input-icon-end position-relative">
                          <a-date-picker
                            v-model:value="valueOne"
                            class="form-control datetimepicker"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                          <label class="form-label">Amount</label>
                          <a
                            href="javascript:void(0);"
                            class="link-primary mb-1"
                            @click="selectedThree = []"
                            >Reset</a
                          >
                        </div>
                        <vue-multiselect
                          v-model="selectedThree"
                          :options="Amount"
                          :multiple="true"
                          label="name"
                          track-by="id"
                        />
                      </div>
                      <div class="mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                          <label class="form-label">Status</label>
                          <a
                            href="javascript:void(0);"
                            class="link-primary mb-1"
                            @click="selectedFour = []"
                            >Reset</a
                          >
                        </div>
                        <vue-multiselect
                          v-model="selectedFour"
                          :options="Status"
                          :multiple="true"
                          label="name"
                          track-by="id"
                        />
                      </div>
                    </div>
                    <div
                      class="filter-footer d-flex align-items-center justify-content-end border-top"
                    >
                      <a href="javascript:void(0);" class="btn btn-light btn-md me-2 fw-medium"
                        >Close</a
                      >
                      <button type="submit" class="btn btn-primary btn-md fw-medium">Filter</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- Filter/Search Bar End -->
          <div class="table-responsive">
            <a-table
              class="table table-nowrap datatable pagination-rounded"
              :columns="appointmentColumns"
              table-layout="fixed"
              :data-source="filteredAppointments"
              :pagination="false"
              row-key="id"
              :loading="appointmentsLoading"
            >
              <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'start_date'">
                  <div class="d-flex align-items-center ms-2">
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center text-primary fw-semibold"
                      @click="openAppointmentDetails(record)"
                      :data-bs-toggle="record.status === 'SCHEDULED' ? 'offcanvas' : undefined"
                      :data-bs-target="
                        record.status === 'SCHEDULED' ? '#appointment_details' : undefined
                      "
                    >
                      {{
                        record.start_date
                          ? new Date(record.start_date).toLocaleString(undefined, {
                              day: '2-digit',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })
                          : ''
                      }}
                      <template v-if="record.end_time"> - {{ record.end_time }} </template>
                    </a>
                  </div>
                </template>
                <template v-if="column.key === 'staff_name'">
                  <div class="d-flex align-items-center ms-2">
                    <router-link
                      v-if="record.staff && record.staff.uuid"
                      :to="{ name: 'ViewStaff', params: { id: record.staff.uuid } }"
                      class="avatar me-2 fs-14"
                    >
                      <img
                        width="16"
                        height="16"
                        src="@/assets/img/users/user-08.jpg"
                        alt="Staff"
                        class="rounded-circle m-r-5"
                      />
                    </router-link>
                    <div v-else class="avatar me-2 fs-14">
                      <img
                        width="16"
                        height="16"
                        src="@/assets/img/users/user-08.jpg"
                        alt="Staff"
                        class="rounded-circle m-r-5"
                      />
                    </div>
                    <div>
                      <h6 class="mb-1 fs-14 fw-semibold">
                        <router-link
                          v-if="record.staff && record.staff.uuid"
                          :to="{ name: 'ViewStaff', params: { id: record.staff.uuid } }"
                          class="text-primary fw-semibold"
                        >
                          {{ record.staff.name }}
                        </router-link>
                        <span
                          v-else-if="record.staff && record.staff.name"
                          class="text-dark fw-semibold"
                        >
                          {{ record.staff.name }}
                        </span>
                        <span v-else>-</span>
                      </h6>
                      <span class="mb-0 fs-13 text-truncate">{{
                        record.staff?.specialization || ''
                      }}</span>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'service_name'">
                  <div class="d-flex align-items-center ms-2">
                    <div>
                      <h6 class="mb-1 fs-14 fw-semibold">
                        {{ record.service?.name || 'No Service' }}
                      </h6>
                      <span class="mb-0 fs-13 text-muted" v-if="record.service?.code">
                        {{ record.service.code }}
                      </span>
                    </div>
                  </div>
                </template>
                <template v-if="column.key === 'mode'">
                  <span>{{ record.type ? 'VIRTUAL' : 'IN-PERSON' }}</span>
                </template>
                <template v-if="column.key === 'status'">
                  <span
                    :class="[
                      'badge border fw-medium fs-13 badge-soft-info',
                      record.status === 'SCHEDULED' || record.status === 'RESCHEDULED'
                        ? 'badge-soft-primary text-primary'
                        : record.status === 'IN-PROGRESS'
                          ? 'badge-soft-warning text-warning'
                          : record.status === 'COMPLETED'
                            ? 'badge-soft-success text-success'
                            : record.status === 'CANCELLED'
                              ? 'badge-soft-danger text-danger'
                              : 'badge-soft-secondary text-secondary',
                    ]"
                  >
                    {{ record.status }}
                  </span>
                </template>
                <template v-else-if="column.key === 'actions'">
                  <div class="action-item d-flex justify-content-center">
                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                      <i class="ti ti-dots-vertical"></i>
                    </a>
                    <ul class="dropdown-menu p-2">
                      <li>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="viewAppointment(record)"
                          >View</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="editAppointment(record)"
                          >Edit</a
                        >
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="javascript:void(0);"
                          @click="deleteAppointment(record)"
                          >Delete</a
                        >
                      </li>
                    </ul>
                  </div>
                </template>
              </template>
            </a-table>
          </div>
        </div>
        <div class="tab-pane" id="transactions">
          <!-- Transactions content placeholder -->
          <div class="text-center py-5">
            <p class="text-muted">Transaction details will be available here.</p>
          </div>
        </div>
      </div>
      <!-- tab content end -->
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy; <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All Rights
        Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- ========================
        End Page Content
    ========================= -->

  <!-- Edit Insurance Modal -->
  <div id="edit_insurance" class="modal fade modal-lg">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="fw-bold modal-title">
            <i class="ti ti-shield-check me-2"></i>{{ $t('edit_insurance') }}
          </h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">{{ $t('insurance_company') }}</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="selectedInsurance.company"
                  :placeholder="$t('enter_company_name')"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">{{ $t('insurance_type') }}</label>
                <select class="form-control" v-model="selectedInsurance.type">
                  <option value="">{{ $t('select_type') }}</option>
                  <option value="PPO">PPO</option>
                  <option value="HMO">HMO</option>
                  <option value="EPO">EPO</option>
                  <option value="POS">POS</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">{{ $t('membership_number') }}</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="selectedInsurance.membership_number"
                  :placeholder="$t('enter_membership_number')"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">{{ $t('serial_number') }}</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="selectedInsurance.serial_number"
                  :placeholder="$t('enter_serial_number')"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">{{ $t('issue_date') }}</label>
                <input type="date" class="form-control" v-model="selectedInsurance.issue_date" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">{{ $t('expiry_date') }}</label>
                <input type="date" class="form-control" v-model="selectedInsurance.expiry_date" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">{{ $t('schema_plan') }}</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="selectedInsurance.schema"
                  :placeholder="$t('enter_schema_plan')"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">{{ $t('status') }}</label>
                <select class="form-control" v-model="selectedInsurance.status">
                  <option :value="true">{{ $t('active') }}</option>
                  <option :value="false">{{ $t('inactive') }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
            {{ $t('cancel') }}
          </button>
          <button type="button" class="btn btn-primary" @click="saveInsurance">
            {{ $t('save_changes') }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Add Insurance Modal -->
  <AddInsuranceModal
    modal-id="create_insurance"
    :modal-title="$t('add_new_insurance')"
    :selected-patient="patientStore.patient"
    @insurance-added="handleInsuranceAdded"
  />

  <!-- Set Appointment Modal -->
  <SetAppointmentModal
    modal-id="set_appointment"
    :modal-title="$t('book_appointment')"
    :selected-patient="patientStore.patient"
    @appointment-created="handleAppointmentCreated"
  />

  <!-- Start Appointment Details Sidebar -->
  <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="appointment_details">
    <div class="offcanvas-header d-block pb-0 px-0">
      <div class="border-bottom d-flex align-items-center justify-content-between pb-3 px-3">
        <h5 class="offcanvas-title fs-18 fw-bold">
          Appointment Details
          <span class="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2">
            {{ selectedAppointment?.appointment_number || '' }}
          </span>
        </h5>
        <button
          type="button"
          class="btn-close custom-btn-close opacity-100"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="ti ti-x bg-white fs-16 text-dark"></i>
        </button>
      </div>
    </div>
    <div class="offcanvas-body pt-0 px-0">
      <h6 class="bg-light py-2 px-3 fw-bold">When & Where</h6>
      <div class="px-3 my-4">
        <div
          class="bg-light p-3 mb-3 border rounded-3 d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <a href="javascript:void(0);" class="avatar avatar-md me-2">
              <img
                :src="selectedAppointment?.doctor_avatar || '@/assets/img/doctors/doctor-03.jpg'"
                alt="doctor"
                class="rounded-circle"
              />
            </a>
            <a href="javascript:void(0);" class="text-dark fw-semibold">
              {{ selectedAppointment?.staff?.name || '-' }}
              <span class="text-body fs-13 fw-normal d-block">
                {{ selectedAppointment?.staff?.specialization || '-' }}
              </span>
            </a>
          </div>
          <div class="flex-shrink-0">
            <a
              href="javascript:void(0);"
              class="btn btn-outline-white bg-white fs-14 d-inline-flex border rounded-2 p-1 me-1"
            >
              <i class="ti ti-brand-hipchat"></i>
            </a>
            <a
              href="javascript:void(0);"
              class="btn btn-outline-white bg-white shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1"
            >
              <i class="ti ti-video"></i>
            </a>
          </div>
        </div>
        <p class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
          Appointment On
          <span class="text-body fw-normal">
            {{
              selectedAppointment?.start_date
                ? new Date(selectedAppointment.start_date).toLocaleDateString(undefined, {
                    weekday: 'long',
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })
                : '-'
            }}
          </span>
        </p>
        <p class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
          Time
          <span class="text-body fw-normal">
            {{ selectedAppointment?.start_time || '-' }}
            <template v-if="selectedAppointment?.end_time">
              - {{ selectedAppointment.end_time }}
            </template>
          </span>
        </p>
        <p class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
          Location
          <span class="text-body fw-normal">{{ selectedAppointment?.location || '-' }}</span>
        </p>
        <p class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
          Appointment Type
          <span class="text-body fw-normal">{{ selectedAppointment?.type || '-' }}</span>
        </p>
        <div class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
          Service
          <div class="text-body fw-normal d-flex align-items-center">
            {{ selectedAppointment?.service?.name || 'No Service' }}
            <span v-if="selectedAppointment?.service?.code" class="text-muted ms-2 fs-13">
              ({{ selectedAppointment.service.code }})
            </span>
          </div>
        </div>
      </div>
      <h6 class="bg-light py-2 px-3 text-dark fw-bold">Appointment Details</h6>
      <div class="px-3 my-4">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center">
            Telehealth
            <label class="d-flex align-items-center form-switch ps-1">
              <input
                class="form-check-input m-0 me-2"
                type="checkbox"
                :checked="
                  selectedAppointment?.mode === 'Telehealth' ||
                  selectedAppointment?.mode === 'Online'
                "
              />
            </label>
          </div>
          <div>
            <a
              href="javascript:void(0);"
              class="btn-primary btn btn-sm rounded d-flex align-items-center"
            >
              <i class="ti ti-video me-1"></i> Start
            </a>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p class="text-dark">Status</p>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="mb-3">
              <span
                :class="[
                  'badge border fw-medium fs-13 badge-soft-info',
                  selectedAppointment?.status === 'SCHEDULED' ||
                  selectedAppointment?.status === 'RESCHEDULED'
                    ? 'badge-soft-primary text-primary'
                    : selectedAppointment?.status === 'IN-PROGRESS'
                      ? 'badge-soft-warning text-warning'
                      : selectedAppointment?.status === 'COMPLETED'
                        ? 'badge-soft-success text-success'
                        : selectedAppointment?.status === 'CANCELLED'
                          ? 'badge-soft-danger text-danger'
                          : 'badge-soft-secondary text-secondary',
                ]"
              >
                {{ selectedAppointment?.status || 'Pending' }}
              </span>
            </div>
          </div>
        </div>
        <div v-if="selectedAppointment?.notes" class="mb-3">
          <p class="text-dark fw-semibold mb-1">Notes</p>
          <p class="text-body fs-13">{{ selectedAppointment.notes }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- End Appointment Details Sidebar -->
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick, type Ref, type ComputedRef } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axiosInstance from '@/utils/axios.js'
import { usePatientStore } from '@/stores/patientStore'
import { useI18n } from 'vue-i18n'
import AddInsuranceModal from '@/components/modal/AddInsuranceModal.vue'
import SetAppointmentModal from '@/components/modal/SetAppointmentModal.vue'
import DateRangePicker from '@/components/common-component/DateRangePicker.vue'
import type { TableColumn } from '@/types/common'

// Types
interface Appointment {
  id: string
  uuid?: string
  appointment_number?: string
  start_date?: string
  end_date?: string
  start_time?: string
  end_time?: string
  status?: string
  mode?: string
  type?: string
  location?: string
  notes?: string
  staff?: {
    uuid?: string
    name?: string
    specialization?: string
  }
  service?: {
    name?: string
    code?: string
  }
  doctor_avatar?: string
}

interface Insurance {
  id: string | number
  company?: string
  type?: string
  schema?: string
  plan?: {
    name?: string
    company?: string
  }
  membership_number?: string
  serial_number?: string
  issue_date?: string
  expiry_date?: string
  status?: boolean
}

interface SelectOption {
  id: number
  name: string
}

interface DateRange {
  startDate: Date | null
  endDate: Date | null
}

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const uuid = route.params.id as string

// Refs
const appointments: Ref<Appointment[]> = ref([])
const appointmentsLoading: Ref<boolean> = ref(false)
const selectedAppointment: Ref<Appointment> = ref({} as Appointment)
const insurances: Ref<Insurance[]> = ref([])
const selectedInsurance: Ref<Insurance> = ref({} as Insurance)
const patientStore = usePatientStore()
const currentInsuranceIndex: Ref<number> = ref(0)
const insuranceSlider: Ref<HTMLElement | null> = ref(null)

// Filter variables for appointments
const searchQuery: Ref<string> = ref('')
const dateRange: Ref<DateRange> = ref({
  startDate: null,
  endDate: null,
})
const selected: Ref<SelectOption[]> = ref([])
const selectedOne: Ref<SelectOption[]> = ref([])
const selectedTwo: Ref<SelectOption[]> = ref([])
const selectedThree: Ref<SelectOption[]> = ref([])
const selectedFour: Ref<SelectOption[]> = ref([])
const valueOne = ref()

// Filter options
const Doctor: Ref<SelectOption[]> = ref([
  { id: 1, name: 'Dr. Johnson' },
  { id: 2, name: 'Dr. Smith' },
  { id: 3, name: 'Dr. Brown' },
])

const Designation: Ref<SelectOption[]> = ref([
  { id: 1, name: 'Cardiologist' },
  { id: 2, name: 'Neurologist' },
  { id: 3, name: 'General Physician' },
])

const Department: Ref<SelectOption[]> = ref([
  { id: 1, name: 'Cardiology' },
  { id: 2, name: 'Neurology' },
  { id: 3, name: 'General Medicine' },
])

const Amount: Ref<SelectOption[]> = ref([
  { id: 1, name: '$0-$100' },
  { id: 2, name: '$100-$500' },
  { id: 3, name: '$500+' },
])

const Status: Ref<SelectOption[]> = ref([
  { id: 1, name: 'Scheduled' },
  { id: 2, name: 'Completed' },
  { id: 3, name: 'Cancelled' },
])

const appointmentColumns: TableColumn[] = [
  { title: 'Date & Time', key: 'start_date' },
  { title: 'Doctor', key: 'staff_name' },
  { title: 'Service', key: 'service_name' },
  { title: 'Mode', key: 'mode' },
  { title: 'Status', key: 'status' },
  { title: '', key: 'actions', width: 30 },
]

// Card gradient colors for different insurance cards
const cardGradients: string[] = [
  'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'background: linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
]

// Computed
const filteredAppointments: ComputedRef<Appointment[]> = computed(() => {
  let filtered = appointments.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter((appointment) => {
      return (
        (appointment.staff?.name || '').toLowerCase().includes(query) ||
        (appointment.status || '').toLowerCase().includes(query) ||
        (appointment.mode || '').toLowerCase().includes(query) ||
        (appointment.start_date || '').toLowerCase().includes(query)
      )
    })
  }

  if (dateRange.value?.startDate && dateRange.value?.endDate) {
    const startDate = new Date(dateRange.value.startDate)
    const endDate = new Date(dateRange.value.endDate)

    filtered = filtered.filter((appointment) => {
      if (!appointment.start_date) return false
      const appointmentDate = new Date(appointment.start_date)
      return appointmentDate >= startDate && appointmentDate <= endDate
    })
  }

  return filtered
})

// Methods
function clearAllFilters(): void {
  searchQuery.value = ''
  selected.value = []
  selectedOne.value = []
  selectedTwo.value = []
  selectedThree.value = []
  selectedFour.value = []
  valueOne.value = null
  dateRange.value = {
    startDate: null,
    endDate: null,
  }
}

function onDateRangeApply(dateRangeData: DateRange): void {
  console.log('Date range applied:', dateRangeData)
  dateRange.value = dateRangeData
}

function onDateRangeError(error: any): void {
  console.error('Date range picker error:', error)
}

function getCardGradient(index: number): string {
  return cardGradients[index % cardGradients.length]
}

function formatCardNumber(number: string | number | undefined): string {
  if (!number) return t('na')
  return number
    .toString()
    .replace(/(.{4})/g, '$1-')
    .slice(0, -1)
}

function formatDate(date: string | undefined): string {
  if (!date) return t('na')
  return new Date(date).toLocaleDateString(undefined, {
    month: '2-digit',
    year: '2-digit',
  })
}

function scrollToCard(index: number): void {
  currentInsuranceIndex.value = index
  if (insuranceSlider.value) {
    const cardWidth = 396
    insuranceSlider.value.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    })
  }
}

function scrollToNextCard(): void {
  if (currentInsuranceIndex.value < insurances.value.length - 1) {
    scrollToCard(currentInsuranceIndex.value + 1)
  }
}

function scrollToPreviousCard(): void {
  if (currentInsuranceIndex.value > 0) {
    scrollToCard(currentInsuranceIndex.value - 1)
  }
}

function scrollToShowAddCard(): void {
  if (insuranceSlider.value) {
    const slider = insuranceSlider.value
    const addCard = slider.querySelector('.add-insurance-card')
    if (addCard) {
      addCard.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'end',
      })
    }
  }
}

async function fetchAppointments(): Promise<void> {
  appointmentsLoading.value = true
  try {
    const response = await axiosInstance.get(`/appointments/`, {
      params: {
        patient: uuid,
      },
    })
    if (Array.isArray(response.data)) {
      appointments.value = response.data
    } else if (response.data && Array.isArray(response.data.data)) {
      appointments.value = response.data.data
    } else if (response.data && Array.isArray(response.data.results)) {
      appointments.value = response.data.results
    } else {
      appointments.value = []
    }
  } catch {
    appointments.value = []
  } finally {
    appointmentsLoading.value = false
  }
}

async function fetchInsurances(): Promise<void> {
  try {
    const response = await axiosInstance.get(`/patients/${uuid}/insurances`)
    if (Array.isArray(response.data)) {
      insurances.value = response.data
    } else if (response.data && Array.isArray(response.data.data)) {
      insurances.value = response.data.data
    } else if (response.data && Array.isArray(response.data.results)) {
      insurances.value = response.data.results
    } else {
      insurances.value = []
    }
  } catch {
    insurances.value = []
  }
}

function openAppointmentDetails(appointment: Appointment): void {
  selectedAppointment.value = appointment
  console.log('Opening appointment details:', appointment)

  if (appointment.status !== 'SCHEDULED') {
    router.push({
      name: 'AppointmentDetails',
      params: { id: appointment.id },
    })
    return
  }
}

function openInsuranceModal(insurance: Insurance): void {
  selectedInsurance.value = { ...insurance }
  console.log('Opening insurance modal for:', insurance)
}

function openCreateInsuranceModal(): void {
  console.log('Opening create insurance modal - patient-view.vue')
  console.log('Bootstrap available:', !!window.bootstrap)
  console.log('Patient data:', patientStore.patient)

  nextTick(() => {
    const modalEl = document.getElementById('create_insurance')
    console.log('Modal element found:', !!modalEl)

    const Bootstrap = window.bootstrap || (window as any).Bootstrap || ((window as any).$ && (window as any).$.fn.modal)

    if (Bootstrap && modalEl) {
      try {
        let modal: any
        if (window.bootstrap) {
          modal = new window.bootstrap.Modal(modalEl)
        } else if ((window as any).Bootstrap) {
          modal = new (window as any).Bootstrap.Modal(modalEl)
        } else if ((window as any).$ && (window as any).$.fn.modal) {
          (window as any).$(modalEl).modal('show')
          console.log('Modal opened using jQuery Bootstrap')
          return
        }

        if (modal) {
          modal.show()
          console.log('Modal show() called using Bootstrap')
        }
      } catch (error) {
        console.error('Error opening modal with Bootstrap:', error)
        fallbackShowModal(modalEl)
      }
    } else {
      console.warn('Bootstrap not found, using fallback method')
      if (modalEl) fallbackShowModal(modalEl)
    }
  })
}

const fallbackShowModal = (modalEl: HTMLElement): void => {
  if (!modalEl) return

  console.log('Using fallback modal display method')

  modalEl.style.display = 'block'
  modalEl.classList.add('show')
  modalEl.setAttribute('aria-hidden', 'false')

  const backdrop = document.createElement('div')
  backdrop.className = 'modal-backdrop fade show'
  backdrop.id = 'fallback-modal-backdrop'
  document.body.appendChild(backdrop)
  document.body.classList.add('modal-open')

  const setupCloseHandlers = (): void => {
    const closeModal = (): void => {
      modalEl.style.display = 'none'
      modalEl.classList.remove('show')
      modalEl.setAttribute('aria-hidden', 'true')
      document.body.classList.remove('modal-open')

      const existingBackdrop = document.getElementById('fallback-modal-backdrop')
      if (existingBackdrop) {
        existingBackdrop.remove()
      }
    }

    backdrop.addEventListener('click', closeModal)

    const closeBtn = modalEl.querySelector('[data-bs-dismiss="modal"], .btn-close')
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal)
    }

    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        closeModal()
        document.removeEventListener('keydown', handleEscape)
      }
    }
    document.addEventListener('keydown', handleEscape)
  }

  setupCloseHandlers()
}

const handleInsuranceAdded = async (): Promise<void> => {
  await fetchInsurances()
  console.log('Insurance added, refreshing list')
}

const openSetAppointmentModal = (): void => {
  console.log('Opening set appointment modal - patient-view.vue')
  console.log('Patient data for appointment:', patientStore.patient)

  nextTick(() => {
    setTimeout(() => {
      const modalEl = document.getElementById('set_appointment')
      console.log('Appointment modal element found:', !!modalEl)

      if (!modalEl) {
        console.error('Set appointment modal element not found in DOM')
        return
      }

      if (window.bootstrap) {
        console.log('Using Bootstrap 5 modal')
        const modal = new window.bootstrap.Modal(modalEl)
        modal.show()
      } else if ((window as any).Bootstrap) {
        console.log('Using Bootstrap (capital B) modal')
        const modal = new (window as any).Bootstrap.Modal(modalEl)
        modal.show()
      } else if ((window as any).jQuery && (window as any).jQuery.fn && (window as any).jQuery.fn.modal) {
        console.log('Using jQuery/Bootstrap 4 modal')
        ;(window as any).jQuery(modalEl).modal('show')
      } else {
        console.warn('Bootstrap not found, using fallback method')
        fallbackShowModal(modalEl)
      }
    }, 50)
  })
}

const handleAppointmentCreated = async (): Promise<void> => {
  await fetchAppointments()
  console.log('Appointment created, refreshing list')
}

function saveInsurance(): void {
  console.log('Saving insurance:', selectedInsurance.value)

  const index = insurances.value.findIndex((ins) => ins.id === selectedInsurance.value.id)
  if (index !== -1) {
    insurances.value[index] = { ...selectedInsurance.value }
  }

  const modalEl = document.getElementById('edit_insurance')
  if (window.bootstrap && modalEl) {
    const modal = window.bootstrap.Modal.getInstance(modalEl)
    if (modal) {
      modal.hide()
    }
  }
}

function viewAppointment(appointment: Appointment): void {
  console.log('Viewing appointment:', appointment)
}

function editAppointment(appointment: Appointment): void {
  console.log('Editing appointment:', appointment)
}

function deleteAppointment(appointment: Appointment): void {
  console.log('Deleting appointment:', appointment)
}

// Lifecycle
onMounted(() => {
  patientStore.fetchPatient(uuid)
  fetchAppointments()
  fetchInsurances()

  setTimeout(() => {
    const insuranceModal = document.getElementById('create_insurance')
    const appointmentModal = document.getElementById('set_appointment')
    console.log('After mount - Insurance modal in DOM:', !!insuranceModal)
    console.log('After mount - Appointment modal in DOM:', !!appointmentModal)
    console.log('After mount - Bootstrap available:', !!window.bootstrap)
    console.log('Patient store state:', patientStore.patient)
  }, 1000)
})
</script>


<style scoped>
.insurance-card {
  width: 380px;
  min-width: 380px;
}

.insurance-cards-wrapper {
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0 15px;
  padding-right: 30px; /* Extra padding to ensure add-card is fully visible */
}

.insurance-cards-wrapper::-webkit-scrollbar {
  display: none;
}

.insurance-card:not(:last-child) {
  margin-right: 1rem;
}

.add-insurance-card {
  width: 180px;
  min-width: 180px;
  margin-left: 1rem;
}

.add-insurance-card .card {
  transition: all 0.3s ease;
  border-radius: 15px;
}

.add-insurance-card:hover .card {
  transform: translateY(2px);
  /* border-color: var(--bs-primary) !important; */
  /* background-color: var(--bs-primary-subtle) !important; */
}

.letter-spacing {
  letter-spacing: 2px;
}

.border-white-25 {
  border-color: rgba(255, 255, 255, 0.25) !important;
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.7) !important;
}

.insurance-card .card {
  transition: transform 0.3s ease;
  border-radius: 15px;
}

.insurance-card:hover .card {
  transform: translateY(1.2px);
}
</style>
