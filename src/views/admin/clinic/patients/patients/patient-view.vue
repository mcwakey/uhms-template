<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <LoadingIndicator
    :show="patientStore.loading"
    variant="overlay"
    message="Loading patient profile..."
  />

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Breadcrumb -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent p-0 mb-0"></ol>
        </nav>
        <div class="d-flex align-items-center gap-2">
           <span class="badge bg-success-subtle text-success rounded-3 px-3 py-2">
             <i class="ti ti-circle-check-filled me-1"></i> {{ $t('patient_view.active_patient') }}
           </span>
        </div>
      </div>

      <!-- Profile Header (Horizontal) -->
      <div class="card border shadow-none rounded-3 mb-4">
        <div class="card-body p-4">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="d-flex align-items-center">
                        <div class="position-relative me-4 flex-shrink-0">
                            <img src="@/assets/img/users/user-08.jpg" class="rounded shadow-sm" style="width: 80px; height: 80px; object-fit: cover;" alt="Patient">
                        </div>
                        <div>
                            <div class="d-flex align-items-center mb-1">
                                <h4 class="fw-bold text-dark mb-0 me-2">{{ patientStore.patient?.full_name || $t('patient_view.unknown_patient') }}</h4>
                                <span class="badge bg-light text-dark border rounded px-2">#{{ patientStore.patient?.opd_no || '-' }}</span>
                            </div>
                            <div class="d-flex align-items-center mb-1 gap-4 text-muted fs-13">
                                <div class="d-flex align-items-center">
                                    <i class="ti ti-phone me-1 text-dark"></i>
                                    {{ patientStore.patient?.phone || '-' }}
                                    {{ patientStore.patient?.other_phones ? ' / ' + patientStore.patient?.other_phones : '' }}
                                </div>
                                <div class="vr opacity-25"></div>
                                <div class="d-flex align-items-center">
                                    <i class="ti ti-mail me-1 text-dark"></i> {{ patientStore.patient?.email || '-' }}
                                </div>
                            </div>
                          <p class="text-muted"><i class="ti ti-map-pin me-1"></i>{{ patientStore.patient?.address?.city || $t('patient_view.unknown_location') }}</p>
                          </div>
                    </div>
                </div>
                <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
                    <div class="d-flex justify-content-lg-end gap-2">
                        <button class="btn btn-outline-light text-dark border shadow-sm rounded-circle p-2 d-inline-flex align-items-center justify-content-center" style="width: 40px; height: 40px;"><i class="ti ti-phone"></i></button>
                        <button class="btn btn-outline-light text-dark border shadow-sm rounded-circle p-2 d-inline-flex align-items-center justify-content-center" style="width: 40px; height: 40px;"><i class="ti ti-message-circle"></i></button>
                        <button @click="openSetAppointmentModal" class="btn btn-primary rounded-3 px-4 d-inline-flex align-items-center">
                            <i class="ti ti-calendar-plus me-2"></i>{{ $t('patient_view.book_appointment') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div class="row g-4 mb-4">
        <!-- Left Column: Personal Details & Insurance -->
        <div class="col-lg-4 d-flex">
          <div class="card border shadow-none rounded-3 w-100">
            <div class="card-header bg-transparent border-bottom-0 pt-4 px-4 pb-0">
              <div class="d-flex justify-content-between align-items-center mb-1">
                    <h5 class="fw-bold text-dark mb-0"><i class="ti ti-user-circle me-2 text-primary"></i>{{ $t('patient_view.about_patient') }}</h5>
                    <button class="btn btn-sm btn-primary-subtle rounded-3 fs-6" @click="editPatient"><i class="ti ti-pencil"></i></button>
                </div>
            </div>
            <div class="card-body p-4">
                <div class="row g-2">
                    <div class="col-6">
                        <div class="d-flex align-items-center mb-2">
                            <span class="avatar avatar-sm rounded-circle bg-light text-dark flex-shrink-0 me-2"><i class="ti ti-calendar-event fs-16"></i></span>
                            <div>
                                <h6 class="fs-12 fw-bold mb-0 text-muted text-uppercase">{{ $t('patient_view.age') }}</h6>
                                <p class="mb-0 fw-semibold text-dark">{{ patientStore.patient?.age?.value || '-' }} Years</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex align-items-center mb-2">
                            <span class="avatar avatar-sm rounded-circle bg-light text-dark flex-shrink-0 me-2"><i class="ti ti-gender-male fs-16"></i></span>
                            <div>
                                <h6 class="fs-12 fw-bold mb-0 text-muted text-uppercase">{{ $t('patient_view.gender') }}</h6>
                                <p class="mb-0 fw-semibold text-dark">{{ patientStore.patient?.gender || '-' }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex align-items-center mb-2">
                            <span class="avatar avatar-sm rounded-circle bg-light text-dark flex-shrink-0 me-2"><i class="ti ti-droplet fs-16"></i></span>
                            <div>
                                <h6 class="fs-12 fw-bold mb-0 text-muted text-uppercase">{{ $t('patient_view.blood_group') }}</h6>
                                <p class="mb-0 fw-semibold text-dark">{{ patientStore.patient?.blood_group || '-' }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex align-items-center mb-2">
                            <span class="avatar avatar-sm rounded-circle bg-light text-dark flex-shrink-0 me-2"><i class="ti ti-briefcase fs-16"></i></span>
                            <div>
                                <h6 class="fs-12 fw-bold mb-0 text-muted text-uppercase">{{ $t('patient_view.occupation') }}</h6>
                                <p class="mb-0 fw-semibold text-dark">{{ patientStore.patient?.occupation || '-' }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex align-items-center mb-2">
                            <span class="avatar avatar-sm rounded-circle bg-light text-dark flex-shrink-0 me-2"><i class="ti ti-heart fs-16"></i></span>
                            <div>
                                <h6 class="fs-12 fw-bold mb-0 text-muted text-uppercase">{{ $t('patient_view.marital_status') }}</h6>
                                <p class="mb-0 fw-semibold text-dark">{{ patientStore.patient?.marital_status || '-' }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="d-flex align-items-center mb-2">
                            <span class="avatar avatar-sm rounded-circle bg-light text-dark flex-shrink-0 me-2"><i class="ti ti-book-2 fs-16"></i></span>
                            <div>
                                <h6 class="fs-12 fw-bold mb-0 text-muted text-uppercase">{{ $t('patient_view.religion') }}</h6>
                                <p class="mb-0 fw-semibold text-dark">{{ patientStore.patient?.religion || '-' }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="col-12">
                        <div class="d-flex align-items-center mb-2">
                            <span class="avatar avatar-sm rounded-circle bg-light text-dark flex-shrink-0 me-2"><i class="ti ti-mail fs-16"></i></span>
                            <div class="overflow-hidden">
                                <h6 class="fs-12 fw-bold mb-0 text-muted text-uppercase">Email</h6>
                                <p class="mb-0 fw-semibold text-dark text-truncate">{{ patientStore.patient?.email || '-' }}</p>
                            </div>
                        </div>
                    </div> -->
                </div>

                <div class="border-top my-4"></div>

                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="fw-bold text-dark mb-0"><i class="ti ti-users me-2 text-primary"></i>{{ $t('patient_view.next_of_kin') }}</h5>
                    <button class="btn btn-sm btn-primary-subtle rounded-3 fs-6" data-bs-toggle="modal" data-bs-target="#edit_next_of_kin_modal"><i class="ti ti-pencil"></i></button>
                </div>
                <div class="bg-light p-3 rounded-3 border-start border-primary border-3">
                    <div class="d-flex justify-content-between align-items-start">
                        <div>
                            <h6 class="fw-bold text-dark mb-1">{{ patientStore.patient?.emergency_contact?.name || '-' }}</h6>
                            <p class="text-muted mb-2 fs-13">{{ patientStore.patient?.emergency_contact?.relation || '-' }}</p>
                        </div>
                        <span class="avatar avatar-sm rounded-circle bg-white text-primary shadow-sm"><i class="ti ti-user"></i></span>
                    </div>
                    <div class="d-flex align-items-center mt-2">
                        <span class="avatar avatar-xs rounded-circle bg-white text-dark me-2 d-flex align-items-center justify-content-center" style="width: 24px; height: 24px;"><i class="ti ti-phone fs-12"></i></span>
                        <span class="text-dark fw-medium fs-13">
                            {{ patientStore.patient?.emergency_contact?.phone || '-' }}
                            {{ patientStore.patient?.emergency_contact?.other_phones ? ' / ' + patientStore.patient?.emergency_contact?.other_phones : '' }}
                        </span>
                    </div>
                </div>

                <div class="border-top my-4"></div>

                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="fw-bold text-dark mb-0"><i class="ti ti-shield me-2 text-primary"></i>{{ $t('patient_view.insurance') }}</h5>
                    <div class="d-flex gap-2">
                        <button 
                          class="btn btn-sm btn-primary-subtle rounded-3 fs-6" 
                          @click="editCurrentInsurance"
                          :disabled="insurances.length === 0"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_insurance_modal"
                        >
                          <i class="ti ti-pencil"></i>
                        </button>
                        <button class="btn btn-sm btn-primary-subtle rounded-3 fs-6" @click="openCreateInsuranceModal"><i class="ti ti-plus"></i></button>
                    </div>
                </div>

                <div class="">
                    <div v-if="insurances.length === 0" class="text-center text-muted py-3">
                      <p class="mb-2 fs-13">{{ $t('patient_view.no_insurance_details') }}</p>
                      <button class="btn btn-sm btn-primary rounded-3" @click="openCreateInsuranceModal">
                        <i class="ti ti-plus me-1"></i>{{ $t('patient_view.add_first_insurance') }}
                      </button>
                    </div>
                    <div v-else class="insurance-slider-container position-relative">
                      <!-- Left Arrow Overlay -->
                      <button
                        v-if="insurances.length > 1"
                        @click="scrollToPreviousCard"
                        :disabled="currentInsuranceIndex === 0"
                        class="position-absolute start-0 top-50 translate-middle-y btn btn-light rounded-circle shadow d-flex align-items-center justify-content-center"
                        style="width: 32px; height: 32px; z-index: 10; left: 5px"
                        :class="{ 'opacity-25': currentInsuranceIndex === 0 }"
                      >
                        <i class="ti ti-chevron-left fs-16"></i>
                      </button>

                      <!-- Right Arrow Overlay -->
                      <button
                        v-if="insurances.length > 1"
                        @click="scrollToNextCard"
                        :disabled="currentInsuranceIndex === insurances.length"
                        class="position-absolute end-0 top-50 translate-middle-y btn btn-light rounded-circle shadow d-flex align-items-center justify-content-center"
                        style="width: 32px; height: 32px; z-index: 10; right: 5px"
                        :class="{ 'opacity-25': currentInsuranceIndex === insurances.length - 1 }"
                      >
                        <i class="ti ti-chevron-right fs-16"></i>
                      </button>

                      <div
                        class="d-flex overflow-hidden insurance-cards-wrapper"
                        ref="insuranceSlider"
                      >
                        <div
                          v-for="(insurance, index) in insurances"
                          :key="insurance.id || index"
                          class="insurance-card flex-shrink-0"
                          :class="{ active: currentInsuranceIndex === index }"
                          style="width: 85%; min-width: 85%; margin-right: 10px;"
                        >
                          <div
                            class="card border-0 shadow-sm h-auto position-relative rounded-3 mb-0"
                            :style="getCardGradient(insurance)"
                          >
                            <div class="card-body text-white p-3">
                              <span
                                :class="[
                                  'badge fs-10 fw-medium position-absolute rounded-3',
                                  insurance.status === true ? 'bg-success' : 'bg-danger',
                                ]"
                                style="top: 12px; right: 8px"
                              >
                                {{ insurance.status ? t('patient_view.active') : t('patient_view.inactive') }}
                              </span>

                              <div class="mb-3">
                                <div>
                                  <h6 class="text-white mb-1 fw-bold">
                                    {{ insurance.plan?.company || t('patient_view.na') }}
                                  </h6>
                                  <small class="text-white-50">{{
                                    insurance.plan?.name || t('patient_view.na')
                                  }}</small>
                                </div>
                              </div>

                              <div class="row">
                                <div class="col-8">
                                  <div class="text-white-50 fs-12 mb-1">
                                    {{ t('patient_view.membership_number') }}
                                  </div>
                                  <div class="fw-bold fs-14 letter-spacing">
                                    {{ formatCardNumber(insurance.membership_number) }}
                                  </div>
                                </div>
                                <div class="col-4">
                                  <div class="text-white-50 fs-12 mb-1">{{ t('patient_view.expiry_date') }}</div>
                                  <div class="fw-semibold fs-13">
                                    {{ formatDate(insurance.expiry_date) }}
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

        <!-- Right Column: Vital Signs & Medical History -->
        <div class="col-lg-8">
           <!-- Vital Signs -->
           <div class="card border shadow-none rounded-3 w-100 mb-4">
             <div class="card-header bg-transparent border-bottom-0 pt-4 px-4 pb-0 d-flex justify-content-between align-items-center">
                <h5 class="fw-bold text-dark mb-0"><i class="ti ti-activity-heartbeat me-2 text-primary"></i>{{ $t('patient_view.vital_signs') }}</h5>
                <small class="text-muted">{{ $t('patient_view.last_visit') }}: {{ patientStore.patient?.last_visit_date || '-' }}</small>
             </div>
             <div class="card-body p-4">
                <div class="row g-3">
                    <!-- Blood Pressure -->
                    <div class="col-sm-6 col-md-3">
                        <div class="d-flex align-items-center">
                            <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-3 border"><i class="ti ti-droplet fs-20"></i></span>
                            <div>
                                <h6 class="fs-13 fw-bold mb-1 text-muted">{{ $t('patient_view.blood_pressure') }}</h6>
                                <p class="mb-0 d-flex align-items-center fw-bold text-dark fs-16">
                                    <i class="ti ti-point-filled me-1 text-success fs-14"></i>{{ patientStore.patient?.vital_signs?.blood_pressure || '-' }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Heart Rate -->
                    <div class="col-sm-6 col-md-3">
                        <div class="d-flex align-items-center">
                            <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-3 border"><i class="ti ti-heart-rate-monitor fs-20"></i></span>
                            <div>
                                <h6 class="fs-13 fw-bold mb-1 text-muted">{{ $t('patient_view.heart_rate') }}</h6>
                                <p class="mb-0 d-flex align-items-center fw-bold text-dark fs-16">
                                    <i class="ti ti-point-filled me-1 text-success fs-14"></i>{{ patientStore.patient?.vital_signs?.heart_rate || '-' }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- SpO2 -->
                    <div class="col-sm-6 col-md-3">
                        <div class="d-flex align-items-center">
                            <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-3 border"><i class="ti ti-lungs fs-20"></i></span>
                            <div>
                                <h6 class="fs-13 fw-bold mb-1 text-muted">{{ $t('patient_view.spo2') }}</h6>
                                <p class="mb-0 d-flex align-items-center fw-bold text-dark fs-16">
                                    <i class="ti ti-point-filled me-1 text-success fs-14"></i>{{ patientStore.patient?.vital_signs?.spo2 || '-' }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Temperature -->
                    <div class="col-sm-6 col-md-3">
                        <div class="d-flex align-items-center">
                            <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-3 border"><i class="ti ti-temperature fs-20"></i></span>
                            <div>
                                <h6 class="fs-13 fw-bold mb-1 text-muted">{{ $t('patient_view.temperature') }}</h6>
                                <p class="mb-0 d-flex align-items-center fw-bold text-dark fs-16">
                                    <i class="ti ti-point-filled me-1 text-success fs-14"></i>{{ patientStore.patient?.vital_signs?.temperature || '-' }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Height -->
                    <div class="col-sm-6 col-md-3">
                        <div class="d-flex align-items-center">
                            <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-3 border"><i class="ti ti-ruler fs-20"></i></span>
                            <div>
                                <h6 class="fs-13 fw-bold mb-1 text-muted">{{ $t('patient_view.height') }}</h6>
                                <p class="mb-0 d-flex align-items-center fw-bold text-dark fs-16">
                                    <i class="ti ti-point-filled me-1 text-success fs-14"></i>{{ patientStore.patient?.vital_signs?.height || '-' }} <small class="fs-12 fw-normal ms-1">cm</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Weight -->
                    <div class="col-sm-6 col-md-3">
                        <div class="d-flex align-items-center">
                            <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-3 border"><i class="ti ti-weight fs-20"></i></span>
                            <div>
                                <h6 class="fs-13 fw-bold mb-1 text-muted">{{ $t('patient_view.weight') }}</h6>
                                <p class="mb-0 d-flex align-items-center fw-bold text-dark fs-16">
                                    <i class="ti ti-point-filled me-1 text-success fs-14"></i>{{ patientStore.patient?.vital_signs?.weight || '-' }} <small class="fs-12 fw-normal ms-1">kg</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- BMI -->
                    <div class="col-sm-6 col-md-3">
                        <div class="d-flex align-items-center">
                            <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-3 border"><i class="ti ti-calculator fs-20"></i></span>
                            <div>
                                <h6 class="fs-13 fw-bold mb-1 text-muted">{{ $t('patient_view.bmi') }}</h6>
                                <p class="mb-0 d-flex align-items-center fw-bold text-dark fs-16">
                                    <i class="ti ti-point-filled me-1 text-success fs-14"></i>{{ patientStore.patient?.vital_signs?.bmi || '-' }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- Health Score -->
                    <div class="col-sm-6 col-md-3">
                        <div class="d-flex align-items-center">
                            <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-3 border"><i class="ti ti-activity fs-20"></i></span>
                            <div>
                                <h6 class="fs-13 fw-bold mb-1 text-muted">{{ $t('patient_view.health_score') }}</h6>
                                <p class="mb-0 d-flex align-items-center fw-bold text-dark fs-16">
                                    <i class="ti ti-point-filled me-1 text-success fs-14"></i>{{ patientStore.patient?.vital_signs?.health_score || '-' }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           </div>

           <!-- Medical History & Medications -->
           <div class="card border shadow-none rounded-3 w-100 mb-4">
             <div class="card-header bg-transparent border-bottom-0 pt-4 px-4 pb-0">
                <h5 class="fw-bold text-dark mb-0"><i class="ti ti-file-medical me-2 text-primary"></i>{{ $t('patient_view.medical_history') }}</h5>
             </div>
             <div class="card-body p-4">
                <div class="row g-4 mb-4">
                    <!-- Conditions -->
                    <div class="col-md-9">
                        <h6 class="fw-bold text-dark mb-3 fs-14 d-flex align-items-center">
                            {{ $t('patient_view.conditions') }}
                        </h6>
                        <div class="row g-2">
                            <div class="col-md-4">
                                <div class="d-flex align-items-center p-3 border rounded-3 bg-light-subtle hover-bg-light transition-all h-100">
                                    <div class="avatar avatar-sm bg-white shadow-sm rounded-circle me-3 text-danger flex-shrink-0">
                                        <i class="ti ti-heartbeat fs-16"></i>
                                    </div>
                                    <div>
                                        <h6 class="fs-13 fw-bold mb-1 text-dark">Hypertension</h6>
                                        <span class="badge bg-success-subtle text-success border border-success-subtle fs-10 rounded-pill">Controlled</span>
                                        <span class="text-muted fs-11 ms-2">Since 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="d-flex align-items-center p-3 border rounded-3 bg-light-subtle hover-bg-light transition-all h-100">
                                    <div class="avatar avatar-sm bg-white shadow-sm rounded-circle me-3 text-info flex-shrink-0">
                                        <i class="ti ti-eye fs-16"></i>
                                    </div>
                                    <div>
                                        <h6 class="fs-13 fw-bold mb-1 text-dark">Myopia</h6>
                                        <span class="badge bg-info-subtle text-info border border-info-subtle fs-10 rounded-pill">Corrected</span>
                                        <span class="text-muted fs-11 ms-2">Since childhood</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Allergies -->
                    <div class="col-md-3">
                        <h6 class="fw-bold text-dark mb-3 fs-14 d-flex align-items-center">
                            {{ $t('patient_view.allergies') }}
                        </h6>
                        <div class="d-flex flex-wrap gap-2">
                            <div class="d-flex align-items-center px-3 py-2 border border-danger-subtle bg-danger-subtle text-danger rounded-pill">
                                <i class="ti ti-alert-triangle me-2 fs-14"></i>
                                <span class="fw-semibold fs-13">Penicillin</span>
                            </div>
                            <div class="d-flex align-items-center px-3 py-2 border border-warning-subtle bg-warning-subtle text-warning rounded-pill">
                                <i class="ti ti-flower me-2 fs-14"></i>
                                <span class="fw-semibold fs-13">Pollen</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="border-top mb-4"></div>

                <!-- Medications Table -->
                <h5 class="fw-bold text-dark mb-3 fs-14"><i class="ti ti-pill me-2 text-primary"></i>{{ $t('patient_view.medications') }}</h5>
                <div class="table-responsive border rounded-3">
                    <table class="table table-nowrap mb-0">
                        <thead class="bg-light">
                            <tr>
                                <th class="ps-4 py-3">{{ $t('patient_view.medication') }}</th>
                                <th class="py-3">{{ $t('patient_view.dosage') }}</th>
                                <th class="py-3">{{ $t('patient_view.prescribed_by') }}</th>
                                <th class="pe-4 py-3">{{ $t('patient_view.date') }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="ps-4">
                                    <div class="d-flex align-items-center">
                                        <span class="avatar avatar-xs bg-primary-subtle text-primary rounded-circle me-2"><i class="ti ti-pill"></i></span>
                                        <div>
                                            <h6 class="fw-semibold mb-0 text-dark fs-14">Lisinopril</h6>
                                            <small class="text-muted">ACE Inhibitor</small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge bg-light text-dark border">10mg</span>
                                    <span class="text-muted ms-2 fs-13">Once daily</span>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="@/assets/img/doctors/doctor-03.jpg" class="avatar avatar-xs rounded-circle me-2" alt="Doctor">
                                        <span class="text-dark fs-13">Dr. Sarah Smith</span>
                                    </div>
                                </td>
                                <td class="pe-4 text-muted fs-13">12 Oct 2024</td>
                            </tr>
                            <tr>
                                <td class="ps-4">
                                    <div class="d-flex align-items-center">
                                        <span class="avatar avatar-xs bg-info-subtle text-info rounded-circle me-2"><i class="ti ti-droplet"></i></span>
                                        <div>
                                            <h6 class="fw-semibold mb-0 text-dark fs-14">Artificial Tears</h6>
                                            <small class="text-muted">Eye Drops</small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span class="badge bg-light text-dark border">2 drops</span>
                                    <span class="text-muted ms-2 fs-13">As needed</span>
                                </td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <img src="@/assets/img/doctors/doctor-03.jpg" class="avatar avatar-xs rounded-circle me-2" alt="Doctor">
                                        <span class="text-dark fs-13">Dr. Sarah Smith</span>
                                    </div>
                                </td>
                                <td class="pe-4 text-muted fs-13">10 Oct 2024</td>
                            </tr>
                        </tbody>
                    </table>
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
            <span>{{ $t('patient_view.appointments') }}</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="#transactions"
            data-bs-toggle="tab"
            aria-expanded="true"
            class="nav-link bg-transparent"
          >
            <span>{{ $t('patient_view.transactions') }}</span>
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
                            :placeholder="$t('patient_view.search')"
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
                  <i class="ti ti-filter text-gray-5 me-1"></i>{{ $t('patient_view.filters') }}
                </a>
                <div class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0">
                  <div
                    class="d-flex align-items-center justify-content-between border-bottom filter-header"
                  >
                    <h4 class="mb-0 fw-bold">{{ $t('patient_view.filter') }}</h4>
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0);"
                        class="link-danger text-decoration-underline"
                        @click="clearAllFilters"
                        >{{ $t('patient_view.clear_all') }}</a
                      >
                    </div>
                  </div>
                  <form action="#">
                    <div class="filter-body pb-0">
                      <div class="mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                          <label class="form-label mb-1">{{ $t('patient_view.doctor') }}</label>
                          <a
                            href="javascript:void(0);"
                            class="link-primary mb-1"
                            @click="selected = []"
                            >{{ $t('patient_view.reset') }}</a
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
                          <label class="form-label">{{ $t('patient_view.designation') }}</label>
                          <a
                            href="javascript:void(0);"
                            class="link-primary mb-1"
                            @click="selectedOne = []"
                            >{{ $t('patient_view.reset') }}</a
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
                          <label class="form-label">{{ $t('patient_view.department') }}</label>
                          <a
                            href="javascript:void(0);"
                            class="link-primary mb-1"
                            @click="selectedTwo = []"
                            >{{ $t('patient_view.reset') }}</a
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
                          >{{ $t('patient_view.date') }}<span class="text-danger">*</span></label
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
                          <label class="form-label">{{ $t('patient_view.amount') }}</label>
                          <a
                            href="javascript:void(0);"
                            class="link-primary mb-1"
                            @click="selectedThree = []"
                            >{{ $t('patient_view.reset') }}</a
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
                          <label class="form-label">{{ $t('patient_view.status') }}</label>
                          <a
                            href="javascript:void(0);"
                            class="link-primary mb-1"
                            @click="selectedFour = []"
                            >{{ $t('patient_view.reset') }}</a
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
                        >{{ $t('patient_view.close') }}</a
                      >
                      <button type="submit" class="btn btn-primary btn-md fw-medium">{{ $t('patient_view.filter') }}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- Filter/Search Bar End -->
          <div class="table-responsive">
            <a-table
              class="table table-nowrap datatable"
              :columns="appointmentColumns"
              table-layout="fixed"
              :data-source="paginatedAppointments"
              :pagination="false"
              :row-key="(record: any) => record.id || record.uuid || record.appointment_number"
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
                    <a
                      href="javascript:void(0);"
                      v-if="record.staff && record.staff.uuid"
                      class="avatar me-2 fs-14"
                    >
                      <img
                        width="16"
                        height="16"
                        src="@/assets/img/users/user-08.jpg"
                        alt="Staff"
                        class="rounded-circle m-r-5"
                      />
                    </a>
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
                        <a
                          href="javascript:void(0);"
                          v-if="record.staff && record.staff.uuid"
                          class="text-primary fw-semibold"
                        >
                          {{ record.staff.name }}
                        </a>
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
                  <ActionIcons
                    :viewTitle="$t('patient_view.view')"
                    :editTitle="$t('patient_view.edit')"
                    :deleteTitle="$t('patient_view.delete')"
                    @view="viewAppointment(record)"
                    @edit="editAppointment(record)"
                    @delete="deleteAppointment(record)"
                  />
                </template>
              </template>
            </a-table>
          </div>
          
          <!-- Custom Pagination -->
          <DataTablePagination
            :total="filteredAppointments.length"
            v-model:currentPage="currentPage"
            v-model:pageSize="pageSize"
            :pageSizeOptions="pageSizeOptions"
          />
        </div>
        <div class="tab-pane" id="transactions">
          <!-- Transactions content placeholder -->
          <div class="text-center py-5">
            <p class="text-muted">{{ $t('patient_view.transaction_details_placeholder') }}</p>
          </div>
        </div>
      </div>
      <!-- tab content end -->
    </div>
    <!-- End Content -->

    <!-- </div> -->
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
  <EditInsuranceModal
    modal-id="edit_insurance_modal"
    :modal-title="$t('edit_insurance')"
    :selected-patient="patientStore.patient"
    :insurance-data="selectedInsurance"
    @insurance-updated="handleInsuranceUpdated"
  />

  <!-- Edit Next of Kin Modal -->
  <EditNextOfKinModal
    modal-id="edit_next_of_kin_modal"
    :patient-id="uuid"
    :current-data="patientStore.patient?.emergency_contact"
    @updated="handleNextOfKinUpdated"
  />

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
          {{ $t('patient_view.appointment_details') }}
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
      <h6 class="bg-light py-2 px-3 fw-bold">{{ $t('patient_view.when_where') }}</h6>
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
          {{ $t('patient_view.appointment_on') }}
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
          {{ $t('patient_view.time') }}
          <span class="text-body fw-normal">
            {{ selectedAppointment?.start_time || '-' }}
            <template v-if="selectedAppointment?.end_time">
              - {{ selectedAppointment.end_time }}
            </template>
          </span>
        </p>
        <p class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
          {{ $t('patient_view.location') }}
          <span class="text-body fw-normal">{{ selectedAppointment?.location || '-' }}</span>
        </p>
        <p class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
          {{ $t('patient_view.appointment_type') }}
          <span class="text-body fw-normal">{{ selectedAppointment?.type || '-' }}</span>
        </p>
        <div class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between">
          {{ $t('patient_view.service') }}
          <div class="text-body fw-normal d-flex align-items-center">
            {{ selectedAppointment?.service?.name || 'No Service' }}
            <span v-if="selectedAppointment?.service?.code" class="text-muted ms-2 fs-13">
              ({{ selectedAppointment.service.code }})
            </span>
          </div>
        </div>
      </div>
      <h6 class="bg-light py-2 px-3 text-dark fw-bold">{{ $t('patient_view.appointment_details') }}</h6>
      <div class="px-3 my-4">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center">
            {{ $t('patient_view.telehealth') }}
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
              <i class="ti ti-video me-1"></i> {{ $t('patient_view.start') }}
            </a>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p class="text-dark">{{ $t('patient_view.status') }}</p>
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
                {{ selectedAppointment?.status || $t('patient_view.pending') }}
              </span>
            </div>
          </div>
        </div>
        <div v-if="selectedAppointment?.notes" class="mb-3">
          <p class="text-dark fw-semibold mb-1">{{ $t('patient_view.notes') }}</p>
          <p class="text-body fs-13">{{ selectedAppointment.notes }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- End Appointment Details Sidebar -->
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick, watch, type Ref, type ComputedRef } from 'vue'
import { useRoute, useRouter, isNavigationFailure } from 'vue-router'
import axiosInstance from '@/utils/axios'
import { usePatientStore } from '@/stores/patientStore'
import { useI18n } from 'vue-i18n'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'
import AddInsuranceModal from '@/components/modal/AddInsuranceModal.vue'
import EditInsuranceModal from '@/components/modal/EditInsuranceModal.vue'
import EditNextOfKinModal from '@/components/modal/EditNextOfKinModal.vue'
import SetAppointmentModal from '@/components/modal/SetAppointmentModal.vue'
import DateRangePicker from '@/components/common/DateRangePicker.vue'
import DataTablePagination from '@/components/common/DataTablePagination.vue'
import ActionIcons from '@/components/common/ActionIcons.vue'
import type { TableColumn } from '@/types/common'
import { showModalById } from '@/utils/bootstrap'

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

const goBackToPatients = async () => {
  try {
    const result = await router.push({ name: 'PatientList' })
    if (result && isNavigationFailure(result)) {
      const fallbackResult = await router.replace('/admin/clinic/patients')
      if (fallbackResult && isNavigationFailure(fallbackResult)) {
        window.location.assign('/admin/clinic/patients')
      }
    }
  } catch {
    window.location.assign('/admin/clinic/patients')
  }
}

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

// Pagination state
const currentPage: Ref<number> = ref(1)
const pageSize: Ref<number> = ref(5)
const pageSizeOptions: number[] = [5, 10, 20, 50]

// Reset to page 1 when page size changes
watch(pageSize, () => {
  currentPage.value = 1
})

// Card gradient colors for different insurance cards
const cardGradients: Record<string, string> = {
  'NHIA': 'background: #273c75',
  'PRIVATE': 'background: #40407a',
  'SELF-SPONSORED': 'background: #7f8c8d',
  'DEFAULT': 'background: #2c3e50'
}

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

// Paginated appointments (for table display)
const paginatedAppointments: ComputedRef<Appointment[]> = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return filteredAppointments.value.slice(start, end)
})

// Reset page when filters change
watch([searchQuery, dateRange], () => {
  currentPage.value = 1
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
  currentPage.value = 1
}

function onDateRangeApply(dateRangeData: DateRange): void {
  console.log('Date range applied:', dateRangeData)
  dateRange.value = dateRangeData
}

function onDateRangeError(error: any): void {
  console.error('Date range picker error:', error)
}

function getCardGradient(insurance: Insurance): string {
  const type = (insurance.type || '').toUpperCase()
  if (type.includes('NHIA') || type.includes('NATIONAL')) {
    return cardGradients['NHIA']
  } else if (type.includes('PRIVATE') || type.includes('CORPORATE')) {
    return cardGradients['PRIVATE']
  } else if (type.includes('SELF') || type.includes('CASH')) {
    return cardGradients['SELF-SPONSORED']
  }
  return cardGradients['DEFAULT']
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
    const cards = insuranceSlider.value.querySelectorAll('.insurance-card')
    const card = cards[index] as HTMLElement

    if (card) {
      const container = insuranceSlider.value
      const cardLeft = card.offsetLeft
      const cardWidth = card.offsetWidth
      const containerWidth = container.offsetWidth

      // Target scroll position to center the card
      let targetScrollLeft = cardLeft - containerWidth / 2 + cardWidth / 2

      // Clamp
      const maxScroll = container.scrollWidth - containerWidth
      targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, maxScroll))

      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth',
      })
    }
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

async function fetchAppointments(): Promise<void> {
  appointmentsLoading.value = true
  try {
    
    // const response = await axiosInstance.get(`/patients/${uuid}/appointments/`)
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
      console.warn('Unexpected appointments response format:', response.data)
      appointments.value = []
    }
  } catch (error) {
    console.error('Error fetching appointments:', error)
    appointments.value = []
  } finally {
    appointmentsLoading.value = false
  }
}

async function fetchInsurances(): Promise<void> {
  try {
    const response = await axiosInstance.get(`/patients/${uuid}/insurances`)
    // if (Array.isArray(response.data)) {
      insurances.value = response.data
    // } else if (response.data && Array.isArray(response.data.data)) {
    //   insurances.value = response.data.data
    // } else if (response.data && Array.isArray(response.data.results)) {
    //   insurances.value = response.data.results
    // } else {
    //   insurances.value = []
    // }
  } catch {
    insurances.value = []
  }
}

function openAppointmentDetails(appointment: Appointment): void {
  selectedAppointment.value = appointment
  console.log('Opening appointment details:', appointment)

  if (appointment.status !== 'SCHEDULED') {
    router.push({
      name: 'ViewAppointment',
      params: { id: appointment.id },
    })
    return
  }
}

function openInsuranceModal(insurance: Insurance): void {
  selectedInsurance.value = { ...insurance }
  console.log('Opening insurance modal for:', insurance)
}

function editCurrentInsurance(): void {
  if (insurances.value.length > 0 && insurances.value[currentInsuranceIndex.value]) {
    openInsuranceModal(insurances.value[currentInsuranceIndex.value])
  }
}

function openCreateInsuranceModal(): void {
  nextTick(() => {
    showModalById('create_insurance')
  })
}

const handleInsuranceAdded = async (): Promise<void> => {
  await fetchInsurances()
  console.log('Insurance added, refreshing list')
}

const openSetAppointmentModal = (): void => {
  nextTick(() => {
    setTimeout(() => showModalById('set_appointment'), 50)
  })
}

const handleAppointmentCreated = async (): Promise<void> => {
  await fetchAppointments()
  console.log('Appointment created, refreshing list')
}

const handleInsuranceUpdated = async (): Promise<void> => {
  await fetchInsurances()
  console.log('Insurance updated, refreshing list')
}

const handleNextOfKinUpdated = async (): Promise<void> => {
  await patientStore.fetchPatient(uuid)
  console.log('Next of Kin updated, refreshing patient data')
}

function editPatient(): void {
  router.push({ name: 'EditPatient', params: { id: uuid } })
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
  fetchInsurances()
  fetchAppointments()
})
</script>


<style scoped>
.insurance-card {
  width: 100%;
  min-width: 100%;
}

.insurance-cards-wrapper {
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0;
}

.insurance-cards-wrapper::-webkit-scrollbar {
  display: none;
}

.insurance-card:not(:last-child) {
  margin-right: 0;
}

.add-insurance-card {
  width: 100%;
  min-width: 100%;
  margin-left: 0;
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

/* .insurance-card:hover .card {
  transform: translateY(1.2px);
} */
</style>
