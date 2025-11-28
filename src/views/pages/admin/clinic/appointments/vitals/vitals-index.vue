<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
          Start Page Content
      ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Doctor Notes</h4>
        </div>
        <!-- <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item">
              <router-link to="/dashboard/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">Applications</a>
            </li>
            <li class="breadcrumb-item active">Social Feed</li>
          </ol>
        </div> -->
      </div>
      <!-- start row -->
      <div class="row">
        <div class="col-xl-3 theiaStickySidebar">
          <div class="stickysidebar">
            <div class="card">
              <div class="card-body">
                <div class="bg-light rounded p-2 mb-2 position-relative">
                  <!-- Status Badge at Top Right -->
                  <div class="position-absolute top-0 end-0 mt-2 me-2">
                    <span class="badge bg-success text-white px-3 py-1 fs-12">Outpatient</span>
                  </div>

                  <!-- Loading State -->
                  <div v-if="loading && !patientInfo" class="text-center py-3">
                    <div class="spinner-border spinner-border-sm text-primary mb-2" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <p class="text-muted mb-0 fs-12">Loading patient info...</p>
                  </div>

                  <!-- Patient Info Display -->
                  <div v-else>
                    <div class="d-flex flex-column align-items-center mb-2">
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-lg online avatar-rounded mb-1"
                      >
                        <img src="@/assets/img/profiles/avatar-02.jpg" alt="Img" />
                      </a>
                      <h6 class="mb-0 fs-15">
                        <a href="javascript:void(0);">
                          {{ patientInfo ? patientInfo.full_name || 'N/A' : '' }}
                        </a>
                      </h6>
                      <small class="text-muted">
                        {{ patientInfo ? patientInfo.opd_no || '#N/A' : '' }}
                      </small>
                    </div>
                    <div class="d-flex justify-content-center gap-2">
                      <div class="rounded bg-white text-center px-2 py-1 flex-fill">
                        <span class="fw-semibold fs-14">
                          {{
                            patientInfo
                              ? patientInfo.age
                                ? `${patientInfo.age.value}${patientInfo.age.unit.charAt(0)}`
                                : 'N/A'
                              : ''
                          }}
                        </span>
                        <small class="d-block fs-12 text-muted">Age</small>
                      </div>
                      <div class="rounded bg-white text-center px-2 py-1 flex-fill">
                        <span class="fw-semibold fs-14">
                          {{ patientInfo ? patientInfo.gender || 'N/A' : '' }}
                        </span>
                        <small class="d-block fs-12 text-muted">Gender</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-1">
                  <!-- <a
                    href="javascript:void(0);"
                    class="btn btn-lg fs-12 btn-primary d-inline-flex align-items-center justify-content-center w-100" disabled
                    ><i class="ti ti-shield me-2"></i>AUMS Insurance - Gold</a
                  > -->
                  <div
                    class="fw-medium d-flex align-items-center bg-danger text-white rounded py-2 px-2 mb-1"
                  >
                    <div class="d-flex align-items-center w-100 justify-content-center">
                      <div class="d-flex align-items-center">
                        <i class="ti ti-shield fs-24 me-2"></i>
                        <span class="me-2">
                          {{ patientInfo ? patientInfo.insurance || 'Self Sponsored' : '' }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="files-list border-bottom pb-2 mb-3">
                  <span
                    class="d-flex align-items-center justify-content-between active fw-medium p-2"
                  >
                    <span><i class="ti ti-briefcase me-2"></i>Occupation</span>
                    <span class="badge badge-soft-light text-black">
                      {{ patientInfo ? patientInfo.occupation : '' }} @{{
                        patientInfo ? patientInfo.employer : ''
                      }}
                    </span>
                  </span>
                  <span class="d-flex align-items-center justify-content-between fw-medium p-2">
                    <span><i class="ti ti-building-church me-2"></i>Religion</span>
                    <span class="badge badge-soft-light text-black">
                      {{ patientInfo ? patientInfo.religion || 'N/A' : '' }}
                    </span>
                  </span>
                  <span class="d-flex align-items-center justify-content-between fw-medium p-2">
                    <span><i class="ti ti-heart me-2"></i>Marital Status</span>
                    <span class="badge badge-soft-light text-black">
                      {{ patientInfo ? patientInfo.marital_status || 'N/A' : '' }}
                    </span>
                  </span>
                  <span class="d-flex align-items-center justify-content-between fw-medium p-2">
                    <span><i class="ti ti-phone me-2"></i>Phone</span>
                    <span class="badge badge-soft-light text-black">
                      {{ patientInfo ? patientInfo.phone || 'N/A' : '' }}
                    </span>
                  </span>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->

            <!-- Doctor/Staff Information Card -->
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h6 class="fs-16 mb-0 d-flex align-items-center">
                    <i class="ti ti-user-check me-2 text-primary fs-18"></i>
                    Doctor / Staff Info
                  </h6>
                  <span class="badge bg-success bg-opacity-10 text-success fs-11">
                    <i class="ti ti-circle-check me-1"></i>Assigned
                  </span>
                </div>

                <!-- Doctor Information -->
                <div class="mb-3">
                  <div class="d-flex align-items-center p-2 bg-light rounded">
                    <div class="avatar avatar-sm avatar-rounded me-2">
                      <img
                        src="@/assets/img/profiles/avatar-01.jpg"
                        alt="Doctor"
                        class="rounded-circle"
                      />
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="fs-14 fw-semibold mb-0">
                        {{ staffInfo ? staffInfo.full_name || 'N/A' : '' }}
                      </h6>
                      <small class="text-muted">{{
                        staffInfo ? staffInfo.specialization?.name || '' : ''
                      }}</small>
                    </div>
                    <div class="text-end">
                      <span class="badge bg-primary bg-opacity-10 text-primary fs-11"
                        >#{{ staffInfo ? staffInfo.staff_id || '' : '' }}</span
                      >
                    </div>
                  </div>
                </div>

                <!-- Contact Information -->
                <!-- <div class="mb-3">
                  <h6 class="fs-14 fw-semibold mb-2">Contact Details</h6>
                  <div class="d-flex flex-column gap-1">
                    <div class="d-flex align-items-center">
                      <i class="ti ti-phone me-2 text-muted fs-12"></i>
                      <span class="fs-12">{{ doctorInfo.phone || '+1 (555) 123-4567' }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="ti ti-mail me-2 text-muted fs-12"></i>
                      <span class="fs-12">{{ doctorInfo.email || 'dr.sarah@hospital.com' }}</span>
                    </div>
                    <div class="d-flex align-items-center">
                      <i class="ti ti-map-pin me-2 text-muted fs-12"></i>
                      <span class="fs-12">{{ doctorInfo.department || 'Emergency Department' }}</span>
                    </div>
                  </div>
                </div> -->

                <!-- Service Information -->
                <div class="mb-3">
                  <h6 class="fs-14 fw-semibold mb-2">Service Details</h6>
                  <div class="row g-2">
                    <div class="col-12">
                      <div
                        class="d-flex align-items-center justify-content-between p-2 border rounded"
                      >
                        <div class="d-flex align-items-center">
                          <i class="ti ti-stethoscope me-2 text-info"></i>
                          <span class="fs-13">{{
                            serviceInfo.name || 'Emergency Consultation'
                          }}</span>
                        </div>
                        <span class="badge bg-info bg-opacity-10 text-info fs-11">{{
                          serviceInfo.type || 'Outpatient'
                        }}</span>
                      </div>
                    </div>
                    <div class="col-6">
                      <div
                        class="d-flex align-items-center justify-content-between p-2 border rounded bg-light"
                      >
                        <small class="text-muted">Duration</small>
                        <span class="fs-12 fw-medium">{{ serviceInfo.duration || '30 mins' }}</span>
                      </div>
                    </div>
                    <div class="col-6">
                      <div
                        class="d-flex align-items-center justify-content-between p-2 border rounded bg-light"
                      >
                        <small class="text-muted">Priority</small>
                        <span :class="getServicePriorityClass()" class="badge fs-11">{{
                          serviceInfo.priority || 'Normal'
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- <div class="mb-3">
                  <div class="d-flex align-items-center p-2 border rounded bg-light">
                    <div class="avatar avatar-rounded me-3">
                      <img src="@/assets/img/profiles/avatar-01.jpg" alt="Doctor" class="rounded-circle">
                    </div>
                    <div class="flex-grow-1">
                      <h6 class="mb-1 fs-14 fw-semibold">{{ doctorInfo.name || 'Dr. Sarah Johnson' }}</h6>
                      <p class="mb-1 fs-12 text-muted">{{ doctorInfo.specialization || 'Internal Medicine' }}</p>
                      <div class="d-flex align-items-center">
                        <span class="badge bg-primary bg-opacity-10 text-primary fs-11 me-2">
                          <i class="ti ti-phone fs-10 me-1"></i>{{ doctorInfo.phone || '+1-555-0123' }}
                        </span>
                        <span class="badge bg-info bg-opacity-10 text-info fs-11">
                          <i class="ti ti-building fs-10 me-1"></i>{{ doctorInfo.department || 'Emergency' }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div> -->

                <!-- Service Information -->
                <!-- <div class="mb-3">
                  <h6 class="fs-14 fw-semibold mb-2">Service Details</h6>
                  <div class="row g-2">
                    <div class="col-12">
                      <div class="p-2 border rounded">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <span class="fw-medium fs-13">{{ serviceInfo.name || 'Emergency Consultation' }}</span>
                          <span class="badge bg-warning bg-opacity-10 text-warning fs-11">{{ serviceInfo.status || 'In Progress' }}</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted">Duration: {{ serviceInfo.duration || '30 mins' }}</small>
                          <small class="text-muted">Fee: {{ serviceInfo.fee || '$150' }}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> -->

                <!-- Appointment Timeline -->
                <div class="mb-3">
                  <h6 class="fs-14 fw-semibold mb-2">Timeline</h6>
                  <div class="timeline-container">
                    <div class="d-flex align-items-center mb-2">
                      <div class="timeline-indicator bg-success me-2"></div>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-between">
                          <span class="fs-12 fw-medium">Check-in</span>
                          <small class="text-muted">{{
                            appointmentInfo.checkinTime || '09:30 AM'
                          }}</small>
                        </div>
                      </div>
                    </div>
                    <!-- <div class="d-flex align-items-center mb-2">
                      <div class="timeline-indicator bg-primary me-2"></div>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-between">
                          <span class="fs-12 fw-medium">Triage Complete</span>
                          <small class="text-muted">{{ appointmentInfo.triageTime || '09:45 AM' }}</small>
                        </div>
                      </div>
                    </div> -->
                    <div class="d-flex align-items-center mb-2">
                      <div class="timeline-indicator bg-warning me-2"></div>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-between">
                          <span class="fs-12 fw-medium">Vitals Recording</span>
                          <small class="text-muted">{{
                            appointmentInfo.vitalsTime || 'In Progress'
                          }}</small>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <div class="timeline-indicator bg-light border me-2"></div>
                      <div class="flex-grow-1">
                        <div class="d-flex align-items-center justify-content-between">
                          <span class="fs-12 text-muted">Doctor Consultation</span>
                          <small class="text-muted">Pending</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <!-- <div class="d-flex gap-2">
                  <button class="btn btn-sm btn-outline-info flex-fill" @click="contactDoctor">
                    <i class="ti ti-phone fs-12"></i> Contact
                  </button>
                  <button class="btn btn-sm btn-primary flex-fill" @click="requestConsultation">
                    <i class="ti ti-user-check fs-12"></i> Ready
                  </button>
                </div> -->
                <!-- end card -->

                <!-- Action Buttons -->
                <div class="d-flex gap-2">
                  <button class="btn btn-sm btn-outline-primary flex-fill" @click="contactDoctor">
                    <i class="ti ti-phone fs-12 me-1"></i> Contact
                  </button>
                  <button class="btn btn-sm btn-outline-secondary flex-fill" @click="viewSchedule">
                    <i class="ti ti-calendar fs-12 me-1"></i> Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
        <div class="col-xl-6">
          <div>
            <div class="card">
              <!-- <div class="card-header py-1">
                <h6 class="card-title mb-0 d-flex align-items-center fs-14">
                  <i class="ti ti-heart-rate-monitor me-2 text-danger fs-16"></i>
                  Vital Signs
                  <span class="badge bg-soft-success text-success ms-2 fs-11">Live</span>
                </h6>
              </div> -->
              <div class="card-body">
                <div class="mb-1">
                  <h6 class="fs-16 mb-3">Vital Signs</h6>
                  <!-- <div class="position-relative">
                      <textarea
                        class="form-control"
                        rows="3"
                        placeholder="What's on your mind?"
                      ></textarea>
                    </div> -->
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-between gap-1">
                  <!-- Temperature -->
                  <div style="width: 19%; flex-shrink: 0">
                    <div class="card border">
                      <div class="card-body p-1">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <i class="ti ti-temperature text-secondary fs-16"></i>
                          <span class="badge bg-soft-secondary text-secondary fs-11">TEMP</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div
                            class="mb-0 fw-bold fs-14"
                            :class="{
                              'text-danger': getCurrentTemperature > 100.4,
                              'text-warning': getCurrentTemperature < 97.0,
                              'text-dark':
                                getCurrentTemperature >= 97.0 && getCurrentTemperature <= 100.4,
                            }"
                          >
                            {{ getCurrentTemperature || '--' }}
                          </div>
                          <div class="vital-flag">
                            <i
                              v-if="getCurrentTemperature > 100.4"
                              class="ti ti-arrow-up text-danger fs-12"
                              title="High Temperature"
                            ></i>
                            <i
                              v-else-if="getCurrentTemperature < 97.0"
                              class="ti ti-arrow-down text-warning fs-12"
                              title="Low Temperature"
                            ></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted fs-11">°C</small>
                          <small class="text-secondary fw-medium fs-11">Temperature</small>
                        </div>
                      </div>
                    </div>

                    <!-- <div class="vital-card bg-gradient-warning text-black-50 rounded-1 p-1 h-100">
                      <div class="d-flex align-items-center justify-content-between mb-1">
                        <i class="ti ti-temperature fs-16"></i>
                        <span class="badge bg-white text-black-50 bg-opacity-25 fs-11">TEMP</span>
                      </div>
                      <div class="vital-reading">
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div class="mb-0 fw-bold fs-14">{{ vitalSigns.temperature }}</div>
                          <div class="vital-flag">
                            <i v-if="vitalSigns.temperature > 100.4" class="ti ti-arrow-up text-danger fs-12" title="High Temperature"></i>
                            <i v-else-if="vitalSigns.temperature < 97.0" class="ti ti-arrow-down text-warning fs-12" title="Low Temperature"></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-black-50 fs-11">°F</small>
                          <small class="text-black-75 fs-11">Temperature</small>
                        </div>
                      </div>
                    </div> -->
                  </div>

                  <!-- Blood Pressure -->
                  <div style="width: 19%; flex-shrink: 0">
                    <div class="card border">
                      <div class="card-body p-1">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <i class="ti ti-activity text-info fs-16"></i>
                          <span class="badge bg-soft-info text-info fs-11">BP</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div
                            class="mb-0 fw-bold fs-14"
                            :class="{
                              'text-danger':
                                getCurrentBloodPressure.systolic > 140 ||
                                getCurrentBloodPressure.diastolic > 90,
                              'text-warning':
                                getCurrentBloodPressure.systolic < 90 ||
                                getCurrentBloodPressure.diastolic < 60,
                              'text-dark':
                                getCurrentBloodPressure.systolic >= 90 &&
                                getCurrentBloodPressure.systolic <= 140 &&
                                getCurrentBloodPressure.diastolic >= 60 &&
                                getCurrentBloodPressure.diastolic <= 90,
                            }"
                          >
                            {{ getCurrentBloodPressure.systolic || '--' }}/{{
                              getCurrentBloodPressure.diastolic || '--'
                            }}
                          </div>
                          <div class="vital-flag">
                            <i
                              v-if="
                                getCurrentBloodPressure.systolic > 140 ||
                                getCurrentBloodPressure.diastolic > 90
                              "
                              class="ti ti-arrow-up text-danger fs-12"
                              title="High Blood Pressure"
                            ></i>
                            <i
                              v-else-if="
                                getCurrentBloodPressure.systolic < 90 ||
                                getCurrentBloodPressure.diastolic < 60
                              "
                              class="ti ti-arrow-down text-warning fs-12"
                              title="Low Blood Pressure"
                            ></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted fs-11">mmHg</small>
                          <small class="text-info fw-medium fs-11">Blood Pressure</small>
                        </div>
                      </div>
                    </div>

                    <!-- <div class="vital-card bg-gradient-danger text-white rounded-1 p-1">
                      <div class="d-flex align-items-center justify-content-between mb-1">
                        <i class="ti ti-activity fs-16"></i>
                        <span class="badge bg-white bg-opacity-25 fs-11">BP</span>
                      </div>
                      <div class="vital-reading">
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div class="mb-0 fw-bold fs-14">{{ vitalSigns.bloodPressure.systolic }}/{{ vitalSigns.bloodPressure.diastolic }}</div>
                          <div class="vital-flag">
                            <i v-if="vitalSigns.bloodPressure.systolic > 140 || vitalSigns.bloodPressure.diastolic > 90" class="ti ti-arrow-up text-danger fs-12" title="High Blood Pressure"></i>
                            <i v-else-if="vitalSigns.bloodPressure.systolic < 90 || vitalSigns.bloodPressure.diastolic < 60" class="ti ti-arrow-down text-warning fs-12" title="Low Blood Pressure"></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-white-50 fs-11">mmHg</small>
                          <small class="text-white-75 fs-11">Blood Pressure</small>
                        </div>
                      </div>
                    </div> -->
                  </div>

                  <!-- Heart Rate -->
                  <div style="width: 19%; flex-shrink: 0">
                    <div class="card border">
                      <div class="card-body p-1">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <i class="ti ti-scale text-purple fs-16"></i>
                          <span class="badge bg-soft-purple text-purple fs-11">HR</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div
                            class="mb-0 fw-bold fs-14"
                            :class="{
                              'text-danger': getCurrentHeartRate > 100,
                              'text-warning': getCurrentHeartRate < 60,
                              'text-dark': getCurrentHeartRate >= 60 && getCurrentHeartRate <= 100,
                            }"
                          >
                            {{ getCurrentHeartRate || '--' }}
                          </div>
                          <div class="vital-flag">
                            <i
                              v-if="getCurrentHeartRate > 100"
                              class="ti ti-arrow-up text-danger fs-12"
                              title="High Heart Rate"
                            ></i>
                            <i
                              v-else-if="getCurrentHeartRate < 60"
                              class="ti ti-arrow-down text-warning fs-12"
                              title="Low Heart Rate"
                            ></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted fs-11">bpm</small>
                          <small class="text-purple fw-medium fs-11">Heart Rate</small>
                        </div>
                      </div>
                    </div>

                    <!-- <div class="vital-card bg-gradient-primary text-white rounded-1 p-1 h-100">
                      <div class="d-flex align-items-center justify-content-between mb-1">
                        <i class="ti ti-heart fs-16"></i>
                        <span class="badge bg-white bg-opacity-25 fs-11">HR</span>
                      </div>
                      <div class="vital-reading">
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div class="mb-0 fw-bold fs-14">{{ vitalSigns.heartRate }}</div>
                          <div class="vital-flag">
                            <i v-if="vitalSigns.heartRate > 100" class="ti ti-arrow-up text-danger fs-12" title="High Heart Rate"></i>
                            <i v-else-if="vitalSigns.heartRate < 60" class="ti ti-arrow-down text-warning fs-12" title="Low Heart Rate"></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-white-50 fs-11">bpm</small>
                          <small class="text-white-75 fs-11">Heart Rate</small>
                        </div>
                      </div>
                    </div> -->
                  </div>

                  <!-- Respiratory Rate -->
                  <div style="width: 19%; flex-shrink: 0">
                    <div class="card border">
                      <div class="card-body p-1">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <i class="ti ti-wind text-info fs-16"></i>
                          <span class="badge bg-soft-info text-info fs-11">RR</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div
                            class="mb-0 fw-bold fs-14"
                            :class="{
                              'text-danger': getCurrentRespiratoryRate > 20,
                              'text-warning': getCurrentRespiratoryRate < 12,
                              'text-dark':
                                getCurrentRespiratoryRate >= 12 && getCurrentRespiratoryRate <= 20,
                            }"
                          >
                            {{ getCurrentRespiratoryRate || '--' }}
                          </div>
                          <div class="vital-flag">
                            <i
                              v-if="getCurrentRespiratoryRate > 20"
                              class="ti ti-arrow-up text-danger fs-12"
                              title="High Respiratory Rate"
                            ></i>
                            <i
                              v-else-if="getCurrentRespiratoryRate < 12"
                              class="ti ti-arrow-down text-warning fs-12"
                              title="Low Respiratory Rate"
                            ></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted fs-11">bmp</small>
                          <small class="text-info fw-medium fs-11">Respiratory Rate</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Oxygen Saturation -->
                  <div style="width: 19%; flex-shrink: 0">
                    <div class="card border">
                      <div class="card-body p-1">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <i class="ti ti-calculator text-secondary fs-16"></i>
                          <span class="badge bg-soft-secondary text-secondary fs-11">SpO2</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div
                            class="mb-0 fw-bold fs-14"
                            :class="{
                              'text-danger': getCurrentOxygenSaturation < 95,
                              'text-warning': getCurrentOxygenSaturation > 100,
                              'text-dark':
                                getCurrentOxygenSaturation >= 95 &&
                                getCurrentOxygenSaturation <= 100,
                            }"
                          >
                            {{ getCurrentOxygenSaturation || '--'
                            }}{{ getCurrentOxygenSaturation ? '%' : '' }}
                          </div>
                          <div class="vital-flag">
                            <i
                              v-if="getCurrentOxygenSaturation < 95"
                              class="ti ti-arrow-down text-danger fs-12"
                              title="Low Oxygen Saturation"
                            ></i>
                            <i
                              v-else-if="getCurrentOxygenSaturation > 100"
                              class="ti ti-arrow-up text-warning fs-12"
                              title="High Oxygen Saturation"
                            ></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted fs-11">Oxygen</small>
                          <small class="text-secondary fw-medium fs-11">Saturation</small>
                        </div>
                      </div>
                    </div>

                    <!-- <div class="vital-card bg-gradient-secondary text-white rounded-1 p-1 h-100">
                      <div class="d-flex align-items-center justify-content-between mb-1">
                        <i class="ti ti-lungs fs-16"></i>
                        <span class="badge bg-white bg-opacity-25 fs-11">SpO2</span>
                      </div>
                      <div class="vital-reading">
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div class="mb-0 fw-bold fs-14">{{ vitalSigns.oxygenSaturation }}%</div>
                          <div class="vital-flag">
                            <i v-if="vitalSigns.oxygenSaturation < 95" class="ti ti-arrow-down text-danger fs-12" title="Low Oxygen Saturation"></i>
                            <i v-else-if="vitalSigns.oxygenSaturation > 100" class="ti ti-arrow-up text-warning fs-12" title="High Oxygen Saturation"></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-white-50 fs-11">Oxygen</small>
                          <small class="text-white-75 fs-11">Saturation</small>
                        </div>
                      </div>
                    </div> -->
                  </div>
                </div>

                <!-- Additional Vital Signs Row -->
                <!-- <div class="row g-1 mt-1"> -->

                <!-- Respiratory Rate -->
                <!-- <div class="col-6 col-md-3">
                    <div class="card border">
                      <div class="card-body p-1">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <i class="ti ti-wind text-info fs-16"></i>
                          <span class="badge bg-soft-info text-info fs-11">RR</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div class="mb-0 fw-bold text-dark fs-14">{{ vitalSigns.respiratoryRate }}</div>
                          <div class="vital-flag">
                            <i v-if="vitalSigns.respiratoryRate > 20" class="ti ti-arrow-up text-danger fs-12" title="High Respiratory Rate"></i>
                            <i v-else-if="vitalSigns.respiratoryRate < 12" class="ti ti-arrow-down text-warning fs-12" title="Low Respiratory Rate"></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted fs-11">breaths/min</small>
                          <small class="text-info fw-medium fs-11">Respiratory Rate</small>
                        </div>
                      </div>
                    </div>
                  </div> -->

                <!-- Weight -->
                <!-- <div class="col-6 col-md-3">
                    <div class="card border">
                      <div class="card-body p-1">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <i class="ti ti-scale text-purple fs-16"></i>
                          <span class="badge bg-soft-purple text-purple fs-11">WT</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div class="mb-0 fw-bold text-dark fs-14">{{ vitalSigns.weight }}</div>
                          <div class="vital-flag">
                            <i v-if="calculateBMI > 30" class="ti ti-arrow-up text-danger fs-12" title="High Weight (BMI > 30)"></i>
                            <i v-else-if="calculateBMI < 18.5" class="ti ti-arrow-down text-warning fs-12" title="Low Weight (BMI < 18.5)"></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted fs-11">kg</small>
                          <small class="text-purple fw-medium fs-11">Weight</small>
                        </div>
                      </div>
                    </div>
                  </div> -->

                <!-- Height -->
                <!-- <div class="col-6 col-md-3">
                    <div class="card border">
                      <div class="card-body p-1">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <i class="ti ti-ruler-2 text-secondary fs-16"></i>
                          <span class="badge bg-soft-secondary text-secondary fs-11">HT</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div class="mb-0 fw-bold text-dark fs-14">{{ vitalSigns.height }}</div>
                          <div class="vital-flag">
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted fs-11">cm</small>
                          <small class="text-secondary fw-medium fs-11">Height</small>
                        </div>
                      </div>
                    </div>
                  </div> -->

                <!-- BMI -->
                <!-- <div class="col-6 col-md-3">

                    <div class="card border">
                      <div class="card-body p-1">
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <i class="ti ti-calculator text-warning fs-16"></i>
                          <span class="badge bg-soft-warning text-warning fs-11">BMI</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div class="mb-0 fw-bold text-dark fs-14">{{ calculateBMI }}</div>
                          <div class="vital-flag">
                            <i v-if="calculateBMI >= 30" class="ti ti-arrow-up text-danger fs-12" title="Obese (BMI ≥ 30)"></i>
                            <i v-else-if="calculateBMI >= 25" class="ti ti-arrow-up text-warning fs-12" title="Overweight (BMI ≥ 25)"></i>
                            <i v-else-if="calculateBMI < 18.5" class="ti ti-arrow-down text-warning fs-12" title="Underweight (BMI < 18.5)"></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted fs-11">kg/m²</small>
                          <small class="text-warning fw-medium fs-11">Body Mass Index</small>
                        </div>
                      </div>
                    </div>
                  </div> -->

                <!-- </div> -->

                <!-- Last Updated -->
                <div class="d-flex align-items-center justify-content-between mt-1 pt-1 border-top">
                  <div class="d-flex align-items-center text-muted">
                    <i class="ti ti-clock me-1 fs-11"></i>
                    <!-- <small class="fs-11">Last updated: {{ vitalSigns.lastUpdated }}</small> -->
                  </div>
                  <div class="d-flex gap-1">
                    <!-- <button class="btn btn-xs btn-outline-primary py-0 px-1">
                      <i class="ti ti-refresh fs-11"></i><span class="fs-11 ms-1">Update</span>
                    </button> -->
                    <button class="btn btn-xs btn-outline-primary py-0 px-1">
                      <i class="ti ti-history fs-11"></i
                      ><span class="fs-11 ms-1">Vitals Chart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h6 class="card-title mb-0 d-flex align-items-center fs-16">
                    <i class="ti ti-forms me-2 text-primary fs-18"></i>
                    Patient Vitals Entry
                  </h6>
                  <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-outline-secondary" @click="clearVitalsForm">
                      <i class="ti ti-refresh fs-12"></i> Clear
                    </button>
                    <button class="btn btn-sm btn-primary" @click="saveVitals" :disabled="isSaving">
                      <i class="ti ti-device-floppy fs-12"></i>
                      {{ isSaving ? 'Saving...' : 'Save Vitals' }}
                    </button>
                  </div>
                </div>

                <!-- Vitals Entry Form -->
                <form @submit.prevent="saveVitals">
                  <div class="row mb-4 g-3">
                    <!-- Weight -->
                    <div class="col-md-3">
                      <label class="form-label fw-medium">Weight</label>
                      <div class="input-group input-group-sm">
                        <input
                          type="number"
                          step="0.1"
                          class="form-control"
                          placeholder="Weight"
                          v-model.number="vitalsForm.weight"
                          min="1"
                          max="500"
                          @input="updateVitalSigns"
                        />
                        <span class="input-group-text">kg</span>
                      </div>
                    </div>

                    <!-- Height -->
                    <div class="col-md-3">
                      <label class="form-label fw-medium">Height</label>
                      <div class="input-group input-group-sm">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Height"
                          v-model.number="vitalsForm.height"
                          min="50"
                          max="250"
                          @input="updateVitalSigns"
                        />
                        <span class="input-group-text">cm</span>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <label class="form-label fw-medium">BMI</label>
                      <div
                        class="d-flex align-items-center w-100 justify-content-between"
                        :class="{
                          'badge bg-danger text-white ms-1': calculateBMI >= 30,
                          'badge bg-warning text-dark ms-1':
                            calculateBMI >= 25 && calculateBMI < 30,
                          'badge bg-success text-white ms-1':
                            calculateBMI < 25 && calculateBMI >= 18.5,
                          'badge bg-secondary text-white ms-1': calculateBMI < 18.5,
                        }"
                      >
                        <!-- <div class="d-flex align-items-center"> -->
                        <i class="ti ti-calculator me-2 fs-21"></i>
                        <!-- <span class="me-2">BMI:</span> -->
                        <!-- <div> -->
                        <strong class="fs-16">{{ calculateBMI }} </strong>

                        <span class="me-2" v-if="calculateBMI >= 30">(Obese)</span>
                        <span v-else-if="calculateBMI >= 25">(Overweight)</span>
                        <span v-else-if="calculateBMI < 18.5">(Underweight)</span>
                        <span v-else> Normal</span>

                        <!-- <strong class="fs-16">{{ calculateBMI }} </strong> -->
                        <!-- </div> -->
                        <!-- </div> -->
                        <!-- <div class="ms-3"> -->
                        <!-- <span class="text-dark">
                          H: {{ patientInfo ? (patientInfo.height || vitalSigns.height) : vitalSigns.height }}cm,
                          W: {{ patientInfo ? (patientInfo.weight || vitalSigns.weight) : vitalSigns.weight }}kg
                        </span> -->
                        <!-- </div> -->
                      </div>
                    </div>

                    <!-- Visible Items -->
                    <!-- <div
                    class="col-md-3 fw-medium d-flex bg-warning text-white"
                  >

                  </div> -->
                  </div>

                  <div class="row g-3">
                    <!-- Blood Pressure -->
                    <div class="col-md-6">
                      <label class="form-label fw-medium">Blood Pressure</label>
                      <div class="input-group input-group-sm">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Systolic"
                          v-model.number="vitalsForm.bloodPressure.systolic"
                          min="50"
                          max="300"
                          @input="updateVitalSigns"
                        />
                        <span class="input-group-text">/</span>
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Diastolic"
                          v-model.number="vitalsForm.bloodPressure.diastolic"
                          min="30"
                          max="200"
                          @input="updateVitalSigns"
                        />
                        <span class="input-group-text">mmHg</span>
                      </div>
                    </div>

                    <!-- Heart Rate -->
                    <div class="col-md-3">
                      <label class="form-label fw-medium">Heart Rate</label>
                      <div class="input-group input-group-sm">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="BPM"
                          v-model.number="vitalsForm.heartRate"
                          min="30"
                          max="200"
                          @input="updateVitalSigns"
                        />
                        <span class="input-group-text">bpm</span>
                      </div>
                    </div>

                    <!-- Temperature -->
                    <div class="col-md-3">
                      <label class="form-label fw-medium">Temperature</label>
                      <div class="input-group input-group-sm">
                        <input
                          type="number"
                          step="0.1"
                          class="form-control"
                          placeholder="Temp"
                          v-model.number="vitalsForm.temperature"
                          min="30"
                          max="45"
                          @input="updateVitalSigns"
                        />
                        <span class="input-group-text">°F</span>
                      </div>
                    </div>

                    <!-- Oxygen Saturation -->
                    <div class="col-md-3">
                      <label class="form-label fw-medium">Oxygen Saturation</label>
                      <div class="input-group input-group-sm">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="SpO2"
                          v-model.number="vitalsForm.oxygenSaturation"
                          min="70"
                          max="100"
                          @input="updateVitalSigns"
                        />
                        <span class="input-group-text">%</span>
                      </div>
                    </div>

                    <!-- Respiratory Rate -->
                    <div class="col-md-3">
                      <label class="form-label fw-medium">Respiratory Rate</label>
                      <div class="input-group input-group-sm">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Breaths"
                          v-model.number="vitalsForm.respiratoryRate"
                          min="5"
                          max="60"
                          @input="updateVitalSigns"
                        />
                        <span class="input-group-text">/min</span>
                      </div>
                    </div>

                    <!-- Pain Scale -->
                    <div class="col-md-3">
                      <label class="form-label fw-medium">Pain Scale (0-10)</label>
                      <div class="input-group input-group-sm">
                        <input
                          type="number"
                          class="form-control"
                          placeholder="Pain level"
                          v-model.number="vitalsForm.painScale"
                          min="0"
                          max="10"
                          @input="updateVitalSigns"
                        />
                        <span class="input-group-text">/10</span>
                      </div>
                    </div>

                    <!-- Consciousness -->
                    <div class="col-md-3">
                      <label class="form-label fw-medium">Consciousness</label>
                      <div class="input-group input-group-sm">
                        <select
                          class="form-select"
                          v-model="vitalsForm.consciousness"
                          @change="updateVitalSigns"
                        >
                          <option disabled value="">Select</option>
                          <option value="Alert">Alert</option>
                          <option value="Verbal">Verbal</option>
                          <option value="Pain">Pain</option>
                          <option value="Unresponsive">Unresponsive</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <!-- Notes Section -->
                  <div class="row mt-3">
                    <div class="col-12">
                      <label class="form-label fw-medium">Clinical Notes</label>
                      <textarea
                        class="form-control"
                        rows="3"
                        placeholder="Additional observations, patient complaints, or clinical notes..."
                        v-model="vitalsForm.notes"
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->

            <div class="card">
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label class="form-label">Vitals records</label>
                    <div class="position-relative"></div>
                  </div>
                  <!-- <div
                    class="d-flex align-items-center justify-content-between flex-wrap row-gap-3"
                  >
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon btn-sm rounded-circle"
                        ><i class="ti ti-photo fs-16"></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon btn-sm rounded-circle"
                        ><i class="ti ti-link fs-16"></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon btn-sm rounded-circle"
                        ><i class="ti ti-paperclip fs-16"></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon btn-sm rounded-circle"
                        ><i class="ti ti-video fs-16"></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon btn-sm rounded-circle"
                        ><i class="ti ti-hash fs-16"></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon btn-sm rounded-circle"
                        ><i class="ti ti-map-pin-heart fs-16"></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon btn-sm rounded-circle"
                        ><i class="ti ti-mood-smile fs-16"></i
                      ></a>
                    </div>
                    <div class="d-flex align-items-center">
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon btn-sm rounded-circle"
                        ><i class="ti ti-refresh fs-16"></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon btn-sm rounded-circle"
                        ><i class="ti ti-trash fs-16"></i
                      ></a>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-icon btn-sm rounded-circle"
                        ><i class="ti ti-world fs-16"></i
                      ></a>
                      <button
                        type="submit"
                        class="btn btn-primary d-inline-flex align-items-center ms-2"
                      >
                        <i class="ti ti-circle-plus fs-16 me-2"></i>Share Post
                      </button>
                    </div>
                  </div> -->
                </form>
              </div>
            </div>
            <!-- end card -->
          </div>
        </div>
        <!-- end col -->
        <div class="col-xl-3 theiaStickySidebar">
          <div class="stickysidebar">
            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h6 class="fs-16 mb-0 d-flex align-items-center">
                    <i class="ti ti-emergency-bed me-2 text-danger fs-18"></i>
                    Triage Assessment
                  </h6>
                  <!-- triageStatus and triageLevel"-->
                  <div class="d-flex align-items-center">
                    <span :class="triageStatusClass()" class="badge fs-11 fw-bold">
                      {{ triageStatus }}
                    </span>
                  </div>
                </div>

                <!-- Triage Score Display -->
                <div class="text-center mb-3">
                  <div
                    class="d-inline-flex align-items-center justify-content-center rounded-circle border"
                    :class="triageScoreCircleClass()"
                    style="width: 80px; height: 80px"
                  >
                    <div class="text-center">
                      <div class="fw-bold fs-24">{{ getTriageScore }}</div>
                      <small class="fs-10 text-uppercase">Score</small>
                    </div>
                  </div>
                </div>

                <!-- Triage Calculations -->
                <div class="mb-3">
                  <h6 class="fs-14 fw-semibold mb-2">Assessment Criteria</h6>
                  <div class="row g-2">
                    <!-- Vital Signs Score -->
                    <div class="col-6">
                      <div class="p-2 border rounded bg-light">
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted">Vital Signs Score</small>
                          <span :class="getVitalSignsScoreClass()" class="badge fs-11">{{
                            getVitalSignsScore
                          }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Pain Score -->
                    <div class="col-6">
                      <div class="p-2 border rounded bg-light">
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted">Pain Score</small>
                          <span :class="getPainScoreClass()" class="badge fs-11">{{
                            getPainScore
                          }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Age Factor -->
                    <div class="col-6">
                      <div class="p-2 border rounded bg-light">
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted">Age Factor</small>
                          <span :class="getAgeScoreClass()" class="badge fs-11">{{
                            getAgeScore
                          }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Consciousness -->
                    <div class="col-6">
                      <div class="p-2 border rounded bg-light">
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted">Consciousness</small>
                          <span :class="getConsciousnessScoreClass()" class="badge fs-11">{{
                            vitalSignsData ? vitalSignsData.consciousness : 0
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Triage Categories -->
                <div class="mb-3">
                  <h6 class="fs-14 fw-semibold mb-2">Priority Level</h6>
                  <div class="triaging-levels">
                    <div
                      v-for="level in triageLevels"
                      :key="level.id"
                      class="d-flex align-items-center justify-content-between p-2 mb-1 rounded border"
                      :class="{ [priorityClass(level.name)]: level.name === triageStatus }"
                    >
                      <!-- :class="priorityClass(level.name)"> -->
                      <div class="d-flex align-items-center">
                        <div
                          :class="level.colorClass"
                          class="rounded-circle me-2"
                          style="width: 12px; height: 12px"
                        ></div>
                        <span class="fs-13 fw-medium">{{ level.name }}</span>
                      </div>
                      <div class="d-flex align-items-center">
                        <span class="badge bg-light text-dark fs-11 me-2">{{ level.time }}</span>
                        <small class="text-muted"
                          >Score: {{ level.min.toString() }} - {{ level.max.toString() }}</small
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="d-flex gap-2">
                  <button class="btn btn-sm btn-outline-primary flex-fill" @click="reassessTriage">
                    <i class="ti ti-refresh fs-12"></i> Reassess
                  </button>
                  <button class="btn btn-sm btn-primary flex-fill" @click="confirmTriage">
                    <i class="ti ti-check fs-12"></i> Confirm
                  </button>
                </div>
              </div>
              <!-- end card body -->
            </div>

            <div class="card">
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h6 class="fs-16 mb-0 d-flex align-items-center">
                    <i class="ti ti-emergency-bed me-2 text-danger fs-18"></i>
                    Triage instructions
                  </h6>
                  <div class="d-flex align-items-center">
                    <span :class="triageStatusClass()" class="badge fs-11 fw-bold">
                      {{ triageStatus }}
                    </span>
                  </div>
                </div>

                <!-- Triage Score Display -->
                <!-- <div class="text-center mb-3">
                  <div class="d-inline-flex align-items-center justify-content-center rounded-circle border"
                       :class="triageScoreCircleClass"
                       style="width: 80px; height: 80px;">
                    <div class="text-center">
                      <div class="fw-bold fs-24">{{ triageScore }}</div>
                      <small class="fs-10 text-uppercase">Score</small>
                    </div>
                  </div>
                </div> -->

                <!-- Triage Calculations -->
                <!--  -->

                <!-- Triage Categories -->
                <div class="mb-3">
                  <div v-if="triageStatus === 'Critical'" class="alert alert-danger">
                    <strong>Critical:</strong> Immediate intervention required. Notify emergency
                    team and prepare for rapid assessment and treatment.
                  </div>
                  <div v-else-if="triageStatus === 'Urgent'" class="alert alert-warning">
                    <strong>Urgent:</strong> Needs care soon. Prioritize patient for prompt
                    evaluation and monitor closely for deterioration.
                  </div>
                  <div v-else-if="triageStatus === 'Stable'" class="alert alert-success">
                    <strong>Stable:</strong> Routine monitoring. Continue standard care and reassess
                    periodically.
                  </div>
                  <div v-else class="alert alert-secondary">
                    <strong>Unknown:</strong> Triage status not determined. Please reassess patient.
                  </div>
                </div>

                <!-- Action Buttons -->
                <!-- <div class="d-flex gap-2">
                  <button class="btn btn-sm btn-outline-primary flex-fill" @click="reassessTriage">
                    <i class="ti ti-refresh fs-12"></i> Reassess
                  </button>
                  <button class="btn btn-sm btn-primary flex-fill" @click="confirmTriage">
                    <i class="ti ti-check fs-12"></i> Confirm
                  </button>
                </div> -->
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
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
  <!-- End Page Wrapper -->

  <!-- ========================
        End Page Content
    ========================= -->

  <!-- Todo Modals -->
  <TodoAddModal
    :show-modal="showAddTodoModal"
    :todo-tags="TodoTag"
    :priorities="Priority"
    :assignees="Assignee"
    :statuses="Status"
    @close="closeAddTodoModal"
    @add-todo="handleAddTodo"
  />
  <TodoViewModal
    :show-modal="showViewTodoModal"
    :todo="selectedTodo"
    @close="closeViewTodoModal"
    @delete-todo="handleDeleteTodo"
  />
  <TodoDeleteModal
    :show-modal="showDeleteTodoModal"
    :todo="selectedTodo"
    @close="closeDeleteTodoModal"
    @confirm-delete="handleConfirmDelete"
  />

  <SetAppointmentModal
    :modal-id="'setAppointmentModal'"
    :modal-title="'Set Next Appointment'"
    :selected-patient="currentPatient"
    :visible="showSetAppointmentModal"
    @update:visible="showSetAppointmentModal = $event"
    @appointment-created="handleAppointmentScheduled"
    @close="closeSetAppointmentModal"
  />
</template>

<script>
// import TodoAddModal from '@/components/modal/TodoAddModal.vue';
// import TodoViewModal from '@/components/modal/TodoViewModal.vue';
// import TodoDeleteModal from '@/components/modal/TodoDeleteModal.vue';
// import SetAppointmentModal from '@/components/modal/SetAppointmentModal.vue';
import axiosInstance from '@/utils/axios.js'
// import { get } from 'jquery';

export default {
  name: 'SocialLinks',
  components: {
    // TodoAddModal,
    // TodoViewModal,
    // TodoDeleteModal,
    // SetAppointmentModal,
  },
  data() {
    return {
      showMore: false,
      selectedComplaint: null,

      // Patient and Appointment data
      patientId: null,
      appointmentId: null,
      patientInfo: null,
      // appointmentInfo: null,
      appointmentInfo: {
        checkinTime: '09:30 AM',
        triageTime: '09:45 AM',
        vitalsTime: 'In Progress',
      },
      appointmentRecords: [],
      consultationData: null,
      loading: false,
      vitalSigns: null,
      vitalSignsData: [],

      // Fetched complaints and session histories
      // fetchedComplaints: [],
      // directQuestioningHistories: [],
      // examinationHistories: [],

      // vitalSigns: {
      //   bloodPressure: {
      //     systolic: 120,
      //     diastolic: 80
      //   },
      //   heartRate: 72,
      //   temperature: 98.6,
      //   oxygenSaturation: 98,
      //   respiratoryRate: 16,
      //   weight: 70.5,
      //   height: 175,
      //   lastUpdated: "2 minutes ago"
      // },

      // Vitals Form Data
      vitalsForm: {
        bloodPressure: {
          systolic: null,
          diastolic: null,
        },
        heartRate: null,
        temperature: null,
        oxygenSaturation: null,
        respiratoryRate: null,
        weight: null,
        height: null,
        painScale: null,
        consciousness: null,
        notes: '',
      },

      // Triage Assessment Data
      triageScore: null,
      // triageStatus: 'Low Priority',
      triageLevels: [
        {
          id: 1,
          name: 'Critical',
          min: 7,
          max: 10,
          time: 'Immediate',
          colorClass: 'bg-danger',
          description: 'Critical — Immediate intervention needed',
        },
        {
          id: 2,
          name: 'Urgent',
          min: 4,
          max: 6,
          time: 'Needs care soon',
          colorClass: 'bg-warning',
          description: 'Urgent — Needs care soon',
        },
        {
          id: 3,
          name: 'Stable',
          min: 0,
          max: 3,
          time: 'Routine monitoring',
          colorClass: 'bg-success',
          description: 'Stable — Routine monitoring',
        },
      ],

      // Doctor and Service Information
      // doctorInfo: {
      //   name: 'Dr. Sarah Johnson',
      //   specialization: 'Emergency Medicine',
      //   phone: '+1 (555) 123-4567',
      //   email: 'dr.sarah@hospital.com',
      //   department: 'Emergency Department'
      // },

      serviceInfo: {
        name: 'Emergency Consultation',
        type: 'Outpatient',
        duration: '30 mins',
        priority: 'Normal',
      },

      // State Management
      isSaving: false,
      newInvestigation: '',
      investigations: [],

      // Modal states
      // showAddTodoModal: false,
      // showViewTodoModal: false,
      // showDeleteTodoModal: false,
      // showSetAppointmentModal: false,
      // selectedTodo: null,
      currentPatient: null,

      // Todo data
      // TodoTag: [],
      // Priority: [],
      // Assignee: [],
      // Status: [],

      // complaintOptions: [
      //   {
      //     id: 1,
      //     name: "Headache",
      //     icon: "ti ti-brain",
      //     category: "neurological"
      //   },
      //   {
      //     id: 2,
      //     name: "Fever",
      //     icon: "ti ti-temperature",
      //     category: "general"
      //   },
      //   {
      //     id: 3,
      //     name: "Chest Pain",
      //     icon: "ti ti-heart",
      //     category: "cardiovascular"
      //   },
      //   {
      //     id: 4,
      //     name: "Shortness of Breath",
      //     icon: "ti ti-lungs",
      //     category: "respiratory"
      //   },
      //   {
      //     id: 5,
      //     name: "Abdominal Pain",
      //     icon: "ti ti-stomach",
      //     category: "gastrointestinal"
      //   }
      // ]
    }
  },

  computed: {
    triageLevel() {
      const score = this.getTriageScore
      return (
        this.triageLevels.find((level) => score >= level.min && score <= level.max) ||
        this.triageLevels[2]
      )
    },

    getCurrentTemperature() {
      return (
        this.vitalsForm.temperature || (this.vitalSignsData && this.vitalSignsData.temperature) || 0
      )
    },

    getCurrentBloodPressure() {
      return {
        systolic:
          this.vitalsForm.bloodPressure.systolic ||
          (this.vitalSignsData && this.vitalSignsData.bloodPressure?.systolic) ||
          0,
        diastolic:
          this.vitalsForm.bloodPressure.diastolic ||
          (this.vitalSignsData && this.vitalSignsData.bloodPressure?.diastolic) ||
          0,
      }
    },

    getCurrentHeartRate() {
      return (
        this.vitalsForm.heartRate || (this.vitalSignsData && this.vitalSignsData.heartRate) || 0
      )
    },

    getCurrentRespiratoryRate() {
      return (
        this.vitalsForm.respiratoryRate ||
        (this.vitalSignsData && this.vitalSignsData.respiratoryRate) ||
        0
      )
    },

    getCurrentOxygenSaturation() {
      return (
        this.vitalsForm.oxygenSaturation ||
        (this.vitalSignsData && this.vitalSignsData.oxygenSaturation) ||
        0
      )
    },

    getCurrentPainScale() {
      return (
        this.vitalsForm.painScale || (this.vitalSignsData && this.vitalSignsData.painScale) || 0
      )
    },

    getCurrentConsciousness() {
      return (
        this.vitalsForm.consciousness ||
        (this.vitalSignsData && this.vitalSignsData.consciousness) ||
        0
      )
    },

    // Triage computed properties
    getVitalSignsScore() {
      return (this.vitalSignsData && this.vitalSignsData.vitalSignsScore) || 0
    },

    getAgeScore() {
      return (this.vitalSignsData && this.vitalSignsData.ageScore) || 0
    },

    getPainScore() {
      return (this.vitalSignsData && this.vitalSignsData.painScore) || 0
    },

    getConsciousnessScore() {
      return (this.vitalSignsData && this.vitalSignsData.consciousnessScore) || 0
    },

    getTriageScore() {
      return (this.vitalSignsData && this.vitalSignsData.triageScore) || 0
    },

    calculateBMI() {
      const weight = this.vitalsForm.weight
      const height = this.vitalsForm.height
      // console.log('Calculating BMI with weight:', weight, 'and height (cm):', heightCm);
      if (weight > 0 && height > 0) {
        // const heightM = heightCm / 100;
        // const bmi =
        // console.log('Calculated BMI:', bmi);
        return (weight / ((height / 100) * (height / 100))).toFixed(1)
      }
      // console.log('BMI calculation not possible, returning 0');
      return 0
    },
  },

  async mounted() {
    // Get patient ID and appointment ID from URL query params
    // this.patientId = this.$route.query.patient;
    this.appointmentId = this.$route.params.id

    // console.log('URL Route info:', {
    //   patientId: this.patientId,
    //   appointmentId: this.appointmentId,
    //   fullRoute: this.$route,
    //   query: this.$route.query,
    //   params: this.$route.params
    // });

    if (this.appointmentId) {
      console.log('Both patient and appointment IDs found, fetching data...')
      await this.fetchAppointmentInfo()
      await this.fetchPatientInfo()
      await this.fetchStaffInfo()
      await this.fetchVitalSignsInfo()
      // await this.fetchAppointmentRecords();
    } else {
      console.warn('Missing required parameters:', {
        patientId: this.patientId,
        appointmentId: this.appointmentId,
      })
    }
  },

  methods: {
    async fetchAppointmentInfo() {
      try {
        this.loading = true
        console.log(`Fetching appointment info for appointment ID: ${this.appointmentId}`)
        const response = await axiosInstance.get(`/appointments/${this.appointmentId}`)
        this.appointmentInfo = response.data

        this.patientUrl = this.appointmentInfo._links.patient // Set patientUrl from appointment info
        this.staffUrl = this.appointmentInfo._links.staff // Set staffUrl from appointment info
        this.recordUrl = this.appointmentInfo._links.record // Set recordUrl from appointment info

        // await this.fetchPatientInfo();

        console.log('Appointment info response:', this.appointmentInfo)
      } catch (error) {
        console.error('Error fetching appointment info:', error)
        console.error('Error details:', error.response?.data || error.message)
      } finally {
        this.loading = false
      }
      // },

      //     console.log('Patient info response:', this.patientInfo);

      //     // Update current patient for modal
      //     this.currentPatient = {
      //       full_name: this.patientInfo.full_name || this.patientInfo.name,
      //       opd_no: this.patientInfo.opd_no || '#N/A',
      //       phone: this.patientInfo.phone || '',
      //       age: this.patientInfo.age || { value: 'N/A', unit: 'years' }
      //     };
      //   } catch (error) {
      //     console.error('Error fetching patient info:', error);
      //     console.error('Error details:', error.response?.data || error.message);
      //   } finally {
      //     this.loading = false;
      //   }
    },

    async fetchPatientInfo() {
      try {
        this.loading = true
        console.log(`Fetching patient info for patient ID: ${this.patientUrl}`)
        const response = await axiosInstance.get(this.patientUrl)
        this.patientInfo = response.data

        console.log('Patient info response:', this.patientInfo)

        // Update current patient for modal
        // this.currentPatient = {
        //   full_name: this.patientInfo.full_name || this.patientInfo.name,
        //   opd_no: this.patientInfo.opd_no || '#N/A',
        //   phone: this.patientInfo.phone || '',
        //   age: this.patientInfo.age || { value: 'N/A', unit: 'years' }
        // };
      } catch (error) {
        console.error('Error fetching patient info:', error)
        console.error('Error details:', error.response?.data || error.message)
      } finally {
        this.loading = false
      }
    },

    async fetchStaffInfo() {
      try {
        this.loading = true
        console.log(`Fetching staff info for staff ID: ${this.staffUrl}`)
        const response = await axiosInstance.get(this.staffUrl)
        this.staffInfo = response.data

        console.log('Staff info response:', this.staffInfo)

        // Update current staff for modal
        // this.currentStaff = {
        //   full_name: this.staffInfo.full_name || this.staffInfo.name,
        //   phone: this.staffInfo.phone || '',
        //   position: this.staffInfo.position || '#N/A'
        // };
      } catch (error) {
        console.error('Error fetching staff info:', error)
        console.error('Error details:', error.response?.data || error.message)
      } finally {
        this.loading = false
      }

      //   console.log('Patient info response:', this.patientInfo);

      //   // Update current patient for modal
      //   this.currentPatient = {
      //     full_name: this.patientInfo.full_name || this.patientInfo.name,
      //     opd_no: this.patientInfo.opd_no || '#N/A',
      //     phone: this.patientInfo.phone || '',
      //     age: this.patientInfo.age || { value: 'N/A', unit: 'years' }
      //   };
      // } catch (error) {
      //   console.error('Error fetching patient info:', error);
      //   console.error('Error details:', error.response?.data || error.message);
      // } finally {
      //   this.loading = false;
      // }
    },

    async fetchVitalSignsInfo() {
      try {
        console.log(`Fetching vital signs data for record with url: ${this.recordUrl}`)

        const response = await axiosInstance.get(`${this.recordUrl}vitals/`)
        const vitalSigns = response.data

        if (!Array.isArray(vitalSigns) || vitalSigns.length === 0) {
          console.warn('No vital signs data found.')
          this.vitalSignsData = null
          return
        }

        // Transform all vital signs for display
        // Map API response to vitalSigns object structure
        const latest = vitalSigns[vitalSigns.length - 1]
        this.vitalSignsData = {
          bloodPressure: {
            systolic: latest.systolic_bp ?? null,
            diastolic: latest.diastolic_bp ?? null,
          },
          heartRate: latest.heart_rate ?? null,
          temperature: latest.temperature ?? null,
          oxygenSaturation: latest.oxygen_saturation ?? null,
          respiratoryRate: latest.respiratory_rate ?? null,
          weight: latest.weight ?? null,
          height: latest.height ?? null,
          painScale: latest.pain_level ?? null,
          consciousness: latest.consciousness ?? null,

          vitalSignsScore: latest.scores.vital_signs ?? 0,
          ageScore: latest.scores.age ?? 0,
          painScore: latest.scores.pain ?? 0,
          consciousnessScore: latest.scores.consciousness ?? 0,
          triageScore: latest.scores.triage ?? 0,
          // triageStatus: latest.triageStatus ?? 'Unknown',

          notes: latest.notes ?? '',
          lastUpdated: latest.created_at ? new Date(latest.created_at).toLocaleString() : null,
        }

        console.log('Fetched vital signs data:', this.vitalSignsData)
      } catch (error) {
        console.error('Error fetching vital signs data:', error)
        console.error('Error details:', error.response?.data || error.message)

        // Set default values on error
        this.vitalSignsData = null
      }
      this.updateTriageStatus()
    },

    // Vitals form methods
    // updateVitalSigns() {
    // this.vitalSignsScore();
    // Update triage score based on new vitals
    // this.calculateTriageScore();
    // Update last updated timestamp
    // this.vitalSignsData.lastUpdated = "Just now";
    // },

    clearVitalsForm() {
      this.vitalsForm = {
        bloodPressure: { systolic: null, diastolic: null },
        heartRate: null,
        temperature: null,
        oxygenSaturation: null,
        respiratoryRate: null,
        weight: null,
        height: null,
        painScale: null,
        consciousness: null,
        notes: '',
      }
      this.updateVitalSigns()
    },

    async saveVitals() {
      this.isSaving = true
      try {
        // Prepare payload from vitalsForm
        const payload = {
          // bloodPressure: {
          // systolic: this.vitalsForm.bloodPressure.systolic,
          // diastolic: this.vitalsForm.bloodPressure.diastolic
          // },

          systolic_bp: this.vitalsForm.bloodPressure.systolic,
          diastolic_bp: this.vitalsForm.bloodPressure.diastolic,

          heart_rate: this.vitalsForm.heartRate,
          temperature: this.vitalsForm.temperature,
          oxygen_saturation: this.vitalsForm.oxygenSaturation,
          respiratory_rate: this.vitalsForm.respiratoryRate,
          weight: this.vitalsForm.weight,
          height: this.vitalsForm.height,
          pain_level: this.vitalsForm.painScale,
          consciousness: this.vitalsForm.consciousness,

          // vitalSignsScore: 0,
          // ageScore: 0,
          // painScore: 0,
          // consciousnessScore: 0,
          // triageScore: 0,

          notes: this.vitalsForm.notes,
        }

        // Make API request to save vitals
        await axiosInstance.post(`${this.recordUrl}vitals/`, payload)

        // Ensure vitalSigns is initialized before updating
        if (!this.vitalSigns) {
          this.vitalSigns = {
            bloodPressure: { systolic: null, diastolic: null },
            heartRate: null,
            temperature: null,
            oxygenSaturation: null,
            respiratoryRate: null,
            weight: null,
            height: null,
            painScale: null,
            consciousness: null,
            notes: '',
          }
        }
        // Update the main vital signs with form data
        Object.keys(this.vitalsForm).forEach((key) => {
          if (this.vitalsForm[key] !== null && this.vitalsForm[key] !== '') {
            if (key === 'bloodPressure') {
              if (this.vitalsForm[key].systolic)
                this.vitalSigns[key].systolic = this.vitalsForm[key].systolic
              if (this.vitalsForm[key].diastolic)
                this.vitalSigns[key].diastolic = this.vitalsForm[key].diastolic
            } else if (key !== 'notes') {
              this.vitalSigns[key] = this.vitalsForm[key]
            }
          }
        })

        // Show success message
        // this.$toast.success('Vitals saved successfully!');
        console.log('Vitals saved successfully!', payload)
        this.clearVitalsForm()
      } catch (err) {
        console.error('Error saving vitals:', err)
        // this.$toast.error('Failed to save vitals. Please try again.');
      } finally {
        this.isSaving = false
      }
    },

    // Triage methods
    // calculateTriageScore() {
    //   let score = this.vitalSignsScore + this.ageScore;
    //   score += this.getCurrentPainScale >= 8 ? 2 : this.getCurrentPainScale >= 5 ? 1 : 0;

    //   this.triageScore = Math.min(Math.max(score, 1), 5);
    //   this.updateTriageStatus();
    // },

    updateTriageStatus() {
      const score = this.getTriageScore
      const level = this.triageLevels.find((l) => score >= l.min && score <= l.max)
      this.triageStatus = level ? level.name : 'Unknown'
    },

    getVitalSignsScoreClass() {
      const score = this.getVitalSignsScore
      if (score >= 5) return 'bg-danger text-white'
      if (score >= 3) return 'bg-warning text-dark'
      if (score >= 1) return 'bg-primary text-white'
      return 'bg-success text-white'
    },

    getPainScoreClass() {
      const pain = this.getCurrentPainScale
      if (pain >= 7) return 'bg-danger text-white'
      if (pain >= 4) return 'bg-warning text-dark'
      // if (pain >= 3) return 'bg-primary text-white';
      return 'bg-success text-white'
    },

    getConsciousnessScoreClass() {
      const consciousness = this.getConsciousnessScore
      if (consciousness >= 3) return 'bg-danger text-white'
      if (consciousness >= 2) return 'bg-warning text-dark'
      if (consciousness >= 1) return 'bg-primary text-white'
      return 'bg-success text-white'
    },

    getAgeScoreClass() {
      const age = this.getAgeScore
      // if (age >= 2) return 'bg-danger text-white';
      if (age >= 2) return 'bg-warning text-dark'
      if (age >= 1) return 'bg-primary text-white'
      return 'bg-success text-white'
    },

    priorityClass(levelName) {
      if (levelName === 'Critical') return 'border-danger'
      if (levelName === 'Urgent') return 'border-warning'
      if (levelName === 'Stable') return 'border-success'
      return 'border-light'
    },

    triageStatusClass() {
      if (this.triageStatus == 'Urgent') return ' bg-warning text-white'
      if (this.triageStatus == 'Critical') return 'bg-danger text-white'
      // if (this.triageStatus == "Stable") return 'bg-primary text-white';
      return 'bg-success text-white'
      // switch (this.vitalSignsData.getTriageScore()) {
      //   case 1: return 'bg-danger text-white';
      //   case 2: return 'bg-warning text-dark';
      //   case 3: return 'bg-primary text-white';
      //   case 4: return 'bg-success text-white';
      //   case 5: return 'bg-secondary text-white';
      //   default: return 'bg-light text-dark';
      // }
    },

    triageScoreCircleClass() {
      if (this.getTriageScore >= 7) return 'border-danger text-danger'
      if (this.getTriageScore >= 4) return ' border-warning text-warning'
      // if (this.getTriageScore >= 1) return 'bg-primary text-white';
      return 'border-success text-success'
    },

    reassessTriage() {
      this.updateTriageStatus()
      this.$toast?.info('Triage assessment updated')
    },
    confirmTriage() {
      this.updateTriageStatus()
      this.$toast?.success(`Triage confirmed: ${this.triageStatus}`)
    },

    // Doctor/Staff methods
    getServicePriorityClass() {
      switch (this.serviceInfo.priority?.toLowerCase()) {
        case 'urgent':
          return 'bg-danger text-white'
        case 'high':
          return 'bg-warning text-dark'
        case 'normal':
          return 'bg-primary text-white'
        default:
          return 'bg-secondary text-white'
      }
    },

    contactDoctor() {
      this.$toast.info(`Contacting ${this.doctorInfo.name}...`)
    },

    viewSchedule() {
      this.$toast.info('Opening doctor schedule...')
    },

    requestConsultation() {
      this.$toast.success('Patient marked as ready for consultation')
    },

    // addInvestigation() {
    //   if (this.newInvestigation.trim()) {
    //     this.investigations.push({
    //       name: this.newInvestigation.trim(),
    //       timestamp: new Date().toLocaleTimeString()
    //     });
    //     this.newInvestigation = '';
    //   }
    // },

    // Modal methods
    closeAddTodoModal() {
      this.showAddTodoModal = false
    },

    closeViewTodoModal() {
      this.showViewTodoModal = false
    },

    closeDeleteTodoModal() {
      this.showDeleteTodoModal = false
    },

    closeSetAppointmentModal() {
      this.showSetAppointmentModal = false
    },

    handleAddTodo(todo) {
      console.log('Todo added:', todo)
      this.closeAddTodoModal()
    },

    handleDeleteTodo(todo) {
      console.log('Todo deleted:', todo)
      this.closeViewTodoModal()
    },

    handleConfirmDelete() {
      console.log('Delete confirmed')
      this.closeDeleteTodoModal()
    },

    handleAppointmentScheduled(appointment) {
      console.log('Appointment scheduled:', appointment)
      this.closeSetAppointmentModal()
    },
  },

  // mounted() {
  //   // Simulate loading patient info
  //   this.loading = true;
  //   setTimeout(() => {
  //     this.loading = false;
  //     this.patientInfo = {
  //       full_name: 'John Doe',
  //       opd_no: '123456',
  //       age: { value: 45, unit: 'years' },
  //       gender: 'Male',
  //       insurance: 'AUMS Insurance - Gold',
  //       occupation: 'Software Engineer',
  //       employer: 'Tech Solutions',
  //       religion: 'Christianity',
  //       marital_status: 'Married',
  //       phone: '+1 (555) 987-6543',
  //       height: 180,
  //       weight: 75,
  //     };
  //     this.vitalSigns = {
  //       bloodPressure: {
  //         systolic: 130,
  //         diastolic: 85
  //       },
  //       heartRate: 78,
  //       temperature: 98.7,
  //       oxygenSaturation: 97,
  //       respiratoryRate: 18,
  //       weight: 75,
  //       height: 180,
  //       lastUpdated: "Just now"
  //     };
  //   }, 1000);

  //   // Simulate loading appointment info
  //   setTimeout(() => {
  //     this.appointmentInfo = {
  //       checkinTime: '09:30 AM',
  //       triageTime: '09:45 AM',
  //       vitalsTime: 'In Progress',
  //     };
  //   }, 1500);
  // }
}
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
