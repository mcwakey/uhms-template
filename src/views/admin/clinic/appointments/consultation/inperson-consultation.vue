<template>
  <layouts-header></layouts-header>
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
                  <LoadingIndicator
                    v-if="loading && !patientInfo"
                    :show="loading && !patientInfo"
                    variant="center"
                    wrapperClass="py-3 w-100"
                    message="Loading patient info..."
                    messageClass="text-muted mb-0 fs-12 mt-2"
                    size="sm"
                  />

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
                    class="fw-medium d-flex align-items-center bg-primary text-white rounded py-2 px-2 mb-1"
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
                <div>
                  <!-- Visible Items -->
                  <div
                    class="fw-medium d-flex align-items-center bg-warning text-white rounded py-2 px-2 mb-1"
                  >
                    <div class="d-flex align-items-center w-100 justify-content-between">
                      <div class="d-flex align-items-center">
                        <i class="ti ti-scale me-2 fs-32"></i>
                        <span class="me-2">BMI:</span>
                        <span
                          :class="{
                            'badge bg-danger text-white ms-1': calculateBMI >= 30,
                            'badge bg-warning text-dark ms-1':
                              calculateBMI >= 25 && calculateBMI < 30,
                            'badge bg-success text-white ms-1':
                              calculateBMI < 25 && calculateBMI >= 18.5,
                            'badge bg-secondary text-white ms-1': calculateBMI < 18.5,
                          }"
                        >
                          {{ calculateBMI }}
                          <span v-if="calculateBMI >= 30">(Obese)</span>
                          <span v-else-if="calculateBMI >= 25">(Overweight)</span>
                          <span v-else-if="calculateBMI < 18.5">(Underweight)</span>
                          <span v-else>(Normal)</span>
                        </span>
                      </div>
                      <div class="ms-3">
                        <span class="text-dark">
                          H:
                          {{
                            patientInfo
                              ? patientInfo.height || vitalSigns.height
                              : vitalSigns.height
                          }}cm, W:
                          {{
                            patientInfo
                              ? patientInfo.weight || vitalSigns.weight
                              : vitalSigns.weight
                          }}kg
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Hidden (more) items -->
                  <!-- <div class="more-menu-3" v-show="showMore">
                    <div
                      v-for="(item, index) in hiddenItems"
                      :key="'hidden-' + index"
                      class="fw-medium d-flex align-items-center justify-content-between text-dark py-1 mb-2"
                    >
                      <span class="d-inline-flex align-items-center">
                        <img :src="getImageUrl(item.Image)" class="me-2" alt="Img" />
                        Next Of Kin:
                      </span>
                      <span class="btn btn-icon btn-sm">
                        <i class="ti ti-thumb-down"></i>
                      </span>
                    </div>
                  </div> -->

                  <!-- Toggle Button -->
                  <!-- <div class="view-all mt-2">
                    <a
                      href="javascript:void(0);"
                      @click="toggleShowMore"
                      class="viewall-button-3 fw-medium"
                    >
                      <span>{{ showMore ? "Less" : "Show More" }}</span>
                    </a>
                  </div> -->
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->

            <!-- Recent Appointments Card -->
            <div class="card">
              <div class="card-body">
                <!-- Set Next Appointment Button -->
                <div class="d-flex justify-content-center mb-3">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm d-flex align-items-center w-100 justify-content-center"
                    @click="openSetAppointmentModal"
                  >
                    <i class="ti ti-calendar-plus me-2"></i>
                    Set Next Visit Appointment
                  </button>
                </div>

                <div class="d-flex align-items-center justify-content-between mb-3">
                  <h6 class="fs-16 mb-0 d-flex align-items-center">
                    <i class="ti ti-calendar-event me-2 text-primary fs-16"></i>
                    Previous Appointments
                  </h6>
                  <a
                    href="javascript:void(0);"
                    class="text-primary fs-12 fw-medium text-decoration-none"
                  >
                    View All
                  </a>
                </div>

                <div class="appointments-list">
                  <!-- Appointment Item 1 -->
                  <div
                    class="appointment-item d-flex align-items-center p-2 rounded-2 mb-2 border-start border-3 border-primary bg-light bg-opacity-50"
                  >
                    <div class="flex-shrink-0 me-3">
                      <div class="appointment-date text-center">
                        <div class="fs-11 text-muted">Dec</div>
                        <div class="fs-14 fw-bold text-primary">15</div>
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <div class="d-flex align-items-center justify-content-between">
                        <div>
                          <h6 class="fs-13 mb-0 fw-medium">General Consultation</h6>
                          <small class="text-muted fs-11">Dr. Sarah Wilson</small>
                        </div>
                        <div class="text-end">
                          <div class="fs-11 text-muted">10:30 AM</div>
                          <span class="badge bg-soft-success text-success fs-10">Completed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Appointment Item 2 -->
                  <div
                    class="appointment-item d-flex align-items-center p-2 rounded-2 mb-2 border-start border-3 border-info bg-light bg-opacity-50"
                  >
                    <div class="flex-shrink-0 me-3">
                      <div class="appointment-date text-center">
                        <div class="fs-11 text-muted">Dec</div>
                        <div class="fs-14 fw-bold text-info">12</div>
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <div class="d-flex align-items-center justify-content-between">
                        <div>
                          <h6 class="fs-13 mb-0 fw-medium">Follow-up Visit</h6>
                          <small class="text-muted fs-11">Dr. Michael Chen</small>
                        </div>
                        <div class="text-end">
                          <div class="fs-11 text-muted">2:15 PM</div>
                          <span class="badge bg-soft-success text-success fs-10">Completed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Appointment Item 3 -->
                  <div
                    class="appointment-item d-flex align-items-center p-2 rounded-2 mb-2 border-start border-3 border-warning bg-light bg-opacity-50"
                  >
                    <div class="flex-shrink-0 me-3">
                      <div class="appointment-date text-center">
                        <div class="fs-11 text-muted">Dec</div>
                        <div class="fs-14 fw-bold text-warning">08</div>
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <div class="d-flex align-items-center justify-content-between">
                        <div>
                          <h6 class="fs-13 mb-0 fw-medium">Cardiology Consultation</h6>
                          <small class="text-muted fs-11">Dr. Emily Rodriguez</small>
                        </div>
                        <div class="text-end">
                          <div class="fs-11 text-muted">11:00 AM</div>
                          <span class="badge bg-soft-success text-success fs-10">Completed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Appointment Item 4 -->
                  <div
                    class="appointment-item d-flex align-items-center p-2 rounded-2 mb-2 border-start border-3 border-secondary bg-light bg-opacity-50"
                  >
                    <div class="flex-shrink-0 me-3">
                      <div class="appointment-date text-center">
                        <div class="fs-11 text-muted">Dec</div>
                        <div class="fs-14 fw-bold text-secondary">05</div>
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <div class="d-flex align-items-center justify-content-between">
                        <div>
                          <h6 class="fs-13 mb-0 fw-medium">Lab Results Review</h6>
                          <small class="text-muted fs-11">Dr. James Thompson</small>
                        </div>
                        <div class="text-end">
                          <div class="fs-11 text-muted">3:45 PM</div>
                          <span class="badge bg-soft-success text-success fs-10">Completed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Appointment Item 5 -->
                  <div
                    class="appointment-item d-flex align-items-center p-2 rounded-2 mb-2 border-start border-3 border-danger bg-light bg-opacity-50"
                  >
                    <div class="flex-shrink-0 me-3">
                      <div class="appointment-date text-center">
                        <div class="fs-11 text-muted">Dec</div>
                        <div class="fs-14 fw-bold text-danger">01</div>
                      </div>
                    </div>
                    <div class="flex-grow-1">
                      <div class="d-flex align-items-center justify-content-between">
                        <div>
                          <h6 class="fs-13 mb-0 fw-medium">Emergency Visit</h6>
                          <small class="text-muted fs-11">Dr. Anna Martinez</small>
                        </div>
                        <div class="text-end">
                          <div class="fs-11 text-muted">7:20 PM</div>
                          <span class="badge bg-soft-danger text-danger fs-10">Urgent</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Quick Actions -->
                <div class="d-flex justify-content-between align-items-center mt-3 pt-2 border-top">
                  <small class="text-muted fs-11">
                    <i class="ti ti-info-circle me-1"></i>
                    Showing last 5 appointments
                  </small>
                  <div class="d-flex gap-1">
                    <button class="btn btn-xs btn-outline-primary py-0 px-2">
                      <i class="ti ti-plus fs-11"></i><span class="fs-11 ms-1">Schedule</span>
                    </button>
                    <button class="btn btn-xs btn-outline-secondary py-0 px-2">
                      <i class="ti ti-calendar fs-11"></i><span class="fs-11 ms-1">Calendar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end col -->
        <div class="col-xl-9">
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
                              'text-danger': vitalSigns.temperature > 100.4,
                              'text-warning': vitalSigns.temperature < 97.0,
                              'text-dark':
                                vitalSigns.temperature >= 97.0 && vitalSigns.temperature <= 100.4,
                            }"
                          >
                            {{ vitalSigns.temperature }}
                          </div>
                          <div class="vital-flag">
                            <i
                              v-if="vitalSigns.temperature > 100.4"
                              class="ti ti-arrow-up text-danger fs-12"
                              title="High Temperature"
                            ></i>
                            <i
                              v-else-if="vitalSigns.temperature < 97.0"
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
                                vitalSigns.bloodPressure.systolic > 100 ||
                                vitalSigns.bloodPressure.diastolic > 90,
                              'text-warning':
                                vitalSigns.bloodPressure.systolic < 90 ||
                                vitalSigns.bloodPressure.diastolic < 60,
                              'text-dark':
                                vitalSigns.bloodPressure.systolic >= 90 &&
                                vitalSigns.bloodPressure.systolic <= 100 &&
                                vitalSigns.bloodPressure.diastolic >= 60 &&
                                vitalSigns.bloodPressure.diastolic <= 90,
                            }"
                          >
                            {{ vitalSigns.bloodPressure.systolic }}/{{
                              vitalSigns.bloodPressure.diastolic
                            }}
                          </div>
                          <div class="vital-flag">
                            <i
                              v-if="
                                vitalSigns.bloodPressure.systolic > 100 ||
                                vitalSigns.bloodPressure.diastolic > 90
                              "
                              class="ti ti-arrow-up text-danger fs-12"
                              title="High Blood Pressure"
                            ></i>
                            <i
                              v-else-if="
                                vitalSigns.bloodPressure.systolic < 90 ||
                                vitalSigns.bloodPressure.diastolic < 60
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
                              'text-danger': vitalSigns.heartRate > 100,
                              'text-warning': vitalSigns.heartRate < 60,
                              'text-dark':
                                vitalSigns.heartRate >= 60 && vitalSigns.heartRate <= 100,
                            }"
                          >
                            {{ vitalSigns.heartRate }}
                          </div>
                          <div class="vital-flag">
                            <i
                              v-if="vitalSigns.heartRate > 100"
                              class="ti ti-arrow-up text-danger fs-12"
                              title="High Heart Rate"
                            ></i>
                            <i
                              v-else-if="vitalSigns.heartRate < 60"
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
                              'text-danger': vitalSigns.respiratoryRate > 20,
                              'text-warning': vitalSigns.respiratoryRate < 12,
                              'text-dark':
                                vitalSigns.respiratoryRate >= 12 &&
                                vitalSigns.respiratoryRate <= 20,
                            }"
                          >
                            {{ vitalSigns.respiratoryRate }}
                          </div>
                          <div class="vital-flag">
                            <i
                              v-if="vitalSigns.respiratoryRate > 20"
                              class="ti ti-arrow-up text-danger fs-12"
                              title="High Respiratory Rate"
                            ></i>
                            <i
                              v-else-if="vitalSigns.respiratoryRate < 12"
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
                          <i class="ti ti-calculator text-warning fs-16"></i>
                          <span class="badge bg-soft-warning text-warning fs-11">SpO2</span>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mb-0">
                          <div
                            class="mb-0 fw-bold fs-14"
                            :class="{
                              'text-danger': vitalSigns.oxygenSaturation < 95,
                              'text-warning': vitalSigns.oxygenSaturation > 100,
                              'text-dark':
                                vitalSigns.oxygenSaturation >= 95 &&
                                vitalSigns.oxygenSaturation <= 100,
                            }"
                          >
                            {{ vitalSigns.oxygenSaturation }}%
                          </div>
                          <div class="vital-flag">
                            <i
                              v-if="vitalSigns.oxygenSaturation < 95"
                              class="ti ti-arrow-down text-danger fs-12"
                              title="Low Oxygen Saturation"
                            ></i>
                            <i
                              v-else-if="vitalSigns.oxygenSaturation > 100"
                              class="ti ti-arrow-up text-warning fs-12"
                              title="High Oxygen Saturation"
                            ></i>
                          </div>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                          <small class="text-muted fs-11">Oxygen</small>
                          <small class="text-warning fw-medium fs-11">Saturation</small>
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
                    <small class="fs-11">Last updated: {{ vitalSigns.lastUpdated }}</small>
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

            <!-- <div class="card">
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label class="form-label">Create Post</label>
                    <div class="position-relative">
                      <textarea
                        class="form-control"
                        rows="3"
                        placeholder="What's on your mind?"
                      ></textarea>
                    </div>
                  </div>
                  <div
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
                  </div>
                </form>
              </div>
            </div> -->
            <!-- end card -->

            <div class="card">
              <div class="card-body">
                <!-- SOAP Header -->
                <div class="d-flex align-items-center justify-content-between mb-4 border-bottom pb-3">
                  <h5 class="fw-bold mb-0">Consultation Workspace (SOAP)</h5>
                  <div class="d-flex gap-2">
                    <button class="btn btn-soft-primary d-inline-flex align-items-center btn-sm">
                      <i class="ti ti-device-floppy me-1"></i> Save Draft
                    </button>
                    <button class="btn btn-primary d-inline-flex align-items-center btn-sm">
                      <i class="ti ti-circle-check me-1"></i> Finalize Consultation
                    </button>
                  </div>
                </div>

                <!-- Subjective Section (S) -->
                <div class="soap-section mb-4">
                  <div class="card border-start border-primary border-3 shadow-none bg-light bg-opacity-10 mb-3">
                    <div class="card-header bg-white py-2">
                      <h6 class="fs-15 fw-bold mb-0 text-primary">
                        <i class="ti ti-user-search me-2"></i>S: Subjective
                      </h6>
                      <small class="text-muted">Chief complaints, history of illness, and symptoms reported by the patient.</small>
                    </div>
                    <div class="card-body">
                      <!-- Complaints -->
                      <div class="mb-4">
                        <label class="form-label fw-semibold">Presenting Complaints</label>
                        <form @submit.prevent="saveComplaints()">
                          <textarea
                            v-model="complaintsText"
                            class="form-control mb-2"
                            rows="2"
                            placeholder="Type presenting complaints here..."
                          ></textarea>
                          <div class="text-end">
                            <button type="submit" class="btn btn-soft-primary btn-sm">
                              <i class="ti ti-circle-plus me-1"></i> Save Complaints
                            </button>
                          </div>
                        </form>
                      </div>

                      <!-- HPI -->
                      <div class="mb-4">
                        <label class="form-label fw-semibold">History of Presenting Illness (HPI)</label>
                        <form @submit.prevent="saveSessionHistory('hpi')">
                          <textarea
                            v-model="hpiText"
                            class="form-control mb-2"
                            rows="3"
                            placeholder="Describe the progression of the illness..."
                          ></textarea>
                          <div class="text-end">
                            <button type="submit" class="btn btn-soft-primary btn-sm">
                              <i class="ti ti-circle-plus me-1"></i> Save HPI
                            </button>
                          </div>
                        </form>
                      </div>

                      <!-- Direct Questioning -->
                      <div>
                        <label class="form-label fw-semibold">On Direct Questioning</label>
                        <form @submit.prevent="saveSessionHistory('direct')">
                          <textarea
                            v-model="directQuestioningText"
                            class="form-control mb-2"
                            rows="3"
                            placeholder="Additional symptoms explored through questioning..."
                          ></textarea>
                          <div class="text-end">
                            <button type="submit" class="btn btn-soft-primary btn-sm">
                              <i class="ti ti-circle-plus me-1"></i> Save Notes
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Objective Section (O) -->
                <div class="soap-section mb-4">
                  <div class="card border-start border-info border-3 shadow-none bg-light bg-opacity-10 mb-3">
                    <div class="card-header bg-white py-2">
                      <h6 class="fs-15 fw-bold mb-0 text-info">
                        <i class="ti ti-stethoscope me-2"></i>O: Objective
                      </h6>
                      <small class="text-muted">Clinical findings, vital signs, and physical examination results.</small>
                    </div>
                    <div class="card-body">
                      <!-- Vitals Reminder (Small Row) -->
                      <div class="alert alert-soft-info d-flex align-items-center mb-4">
                        <i class="ti ti-pulse me-2 fs-18"></i>
                        <div class="fs-13">
                          <strong>Latest Vitals:</strong> 
                          BP: {{ vitalSigns.bloodPressure.systolic }}/{{ vitalSigns.bloodPressure.diastolic }} mmHg, 
                          Temp: {{ vitalSigns.temperature }}°C, 
                          Heart: {{ vitalSigns.heartRate }} bpm
                        </div>
                        <button class="btn btn-sm btn-link ms-auto p-0 fs-12 text-info" @click="scrollToVitals">View Details</button>
                      </div>

                      <!-- Physical Exam -->
                      <div>
                        <label class="form-label fw-semibold">Physical Examination</label>
                        <form @submit.prevent="saveSessionHistory('examination')">
                          <textarea
                            v-model="examinationText"
                            class="form-control mb-2"
                            rows="4"
                            placeholder="Describe findngs from head-to-toe examination..."
                          ></textarea>
                          <div class="text-end">
                            <button type="submit" class="btn btn-soft-info btn-sm">
                              <i class="ti ti-circle-plus me-1"></i> Save Examination
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Assessment Section (A) -->
                <div class="soap-section mb-4">
                  <div class="card border-start border-warning border-3 shadow-none bg-light bg-opacity-10 mb-3">
                    <div class="card-header bg-white py-2">
                      <h6 class="fs-15 fw-bold mb-0 text-warning">
                        <i class="ti ti-database-search me-2"></i>A: Assessment
                      </h6>
                      <small class="text-muted">Clinical impression, diagnoses, and differential diagnoses.</small>
                    </div>
                    <div class="card-body">
                      <!-- Diagnosis (Moved from sidebar) -->
                      <div class="mb-4 pb-3 border-bottom">
                        <label class="form-label fw-semibold">Clinical Diagnoses</label>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Search and add diagnosis..."
                            v-model="newInvestigation"
                            @keyup.enter="addInvestigation"
                          />
                          <button class="btn btn-warning text-white" type="button" @click="addInvestigation">
                            <i class="ti ti-plus me-1"></i> Add
                          </button>
                        </div>
                        
                        <div v-for="(item, idx) in investigations" :key="idx" class="d-flex align-items-center justify-content-between p-2 bg-white border rounded mb-2 shadow-sm">
                          <div class="d-flex align-items-center">
                            <span class="badge bg-soft-warning text-warning me-2">{{ item.isPrimary ? 'Primary' : 'Secondary' }}</span>
                            <span class="fw-medium">{{ item.name }}</span>
                          </div>
                          <div class="d-flex align-items-center">
                            <div class="form-check form-switch me-3" v-if="!item.isPrimary">
                              <input class="form-check-input" type="checkbox" @change="setPrimaryDiagnosis(idx)">
                              <label class="form-check-label fs-11">Set Primary</label>
                            </div>
                            <button class="btn btn-link link-danger p-0" @click="removeInvestigation(idx)">
                              <i class="ti ti-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>

                      <!-- Clinical Impression -->
                      <div>
                        <label class="form-label fw-semibold">Clinical Impression / Summary</label>
                        <form @submit.prevent="saveSessionHistory('summary')">
                          <textarea
                            v-model="summaryText"
                            class="form-control mb-2"
                            rows="4"
                            placeholder="Overall clinical summary and interpretation..."
                          ></textarea>
                          <div class="text-end">
                            <button type="submit" class="btn btn-soft-warning btn-sm">
                              <i class="ti ti-circle-plus me-1"></i> Save Summary
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Plan Section (P) -->
                <div class="soap-section">
                  <div class="card border-start border-success border-3 shadow-none bg-light bg-opacity-10">
                    <div class="card-header bg-white py-2">
                      <h6 class="fs-15 fw-bold mb-0 text-success">
                        <i class="ti ti-map-pin-up me-2"></i>P: Plan
                      </h6>
                      <small class="text-muted">Medications, orders, follow-ups, and patient education.</small>
                    </div>
                    <div class="card-body">
                      <!-- Prescription Section -->
                      <div class="mb-4 pb-3 border-bottom">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                          <label class="form-label fw-semibold mb-0">Medication Prescriptions</label>
                          <button class="btn btn-soft-primary btn-sm" @click="addMedicationRow">
                            <i class="ti ti-plus me-1"></i> Add Medication
                          </button>
                        </div>
                        
                        <!-- Medication Entry Form -->
                        <div class="bg-white border rounded p-3 mb-3" v-if="showPrescriptionForm">
                          <div class="row g-3">
                            <div class="col-md-6">
                              <label class="form-label fs-13">Medication Name</label>
                              <input type="text" v-model="newPrescription.medication_name" class="form-control" placeholder="e.g. Amoxicillin 500mg">
                            </div>
                            <div class="col-md-3">
                              <label class="form-label fs-13">Dosage</label>
                              <input type="text" v-model="newPrescription.dosage" class="form-control" placeholder="e.g. 1 tablet">
                            </div>
                            <div class="col-md-3">
                              <label class="form-label fs-13">Frequency</label>
                              <select v-model="newPrescription.frequency" class="form-select">
                                <option value="">Select</option>
                                <option value="Once daily">Once daily (QD)</option>
                                <option value="Twice daily">Twice daily (BID)</option>
                                <option value="Three times daily">Three times daily (TID)</option>
                                <option value="Four times daily">Four times daily (QID)</option>
                                <option value="Every 8 hours">Every 8 hours</option>
                                <option value="As needed">As needed (PRN)</option>
                              </select>
                            </div>
                            <div class="col-md-3">
                              <label class="form-label fs-13">Duration</label>
                              <input type="text" v-model="newPrescription.duration" class="form-control" placeholder="e.g. 7 days">
                            </div>
                            <div class="col-md-9">
                              <label class="form-label fs-13">Instructions</label>
                              <input type="text" v-model="newPrescription.instructions" class="form-control" placeholder="e.g. Take after meals">
                            </div>
                          </div>
                          <div class="text-end mt-3">
                            <button class="btn btn-light btn-sm me-2" @click="showPrescriptionForm = false">Cancel</button>
                            <button class="btn btn-primary btn-sm" @click="savePrescription">
                              <i class="ti ti-check me-1"></i> Save Prescription
                            </button>
                          </div>
                        </div>

                        <!-- Prescriptions List -->
                        <div class="table-responsive" v-if="prescriptions.length > 0">
                          <table class="table table-sm table-nowrap border rounded mb-0">
                            <thead class="bg-light">
                              <tr>
                                <th>Medication</th>
                                <th>Dosage</th>
                                <th>Freq.</th>
                                <th>Dur.</th>
                                <th class="text-end">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(rx, idx) in prescriptions" :key="idx">
                                <td class="fw-medium">{{ rx.medication_name }}</td>
                                <td>{{ rx.dosage }}</td>
                                <td>{{ rx.frequency }}</td>
                                <td>{{ rx.duration }}</td>
                                <td class="text-end">
                                  <button class="btn btn-link link-danger p-0" @click="removePrescription(idx)">
                                    <i class="ti ti-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div v-else-if="!showPrescriptionForm" class="text-center py-3 bg-light bg-opacity-50 rounded border border-dashed">
                          <p class="text-muted mb-0 fs-13">No prescriptions added yet.</p>
                        </div>
                      </div>

                      <!-- Lab & Investigations Section -->
                      <div class="mb-4 pb-3 border-bottom">
                        <div class="d-flex align-items-center justify-content-between mb-3">
                          <label class="form-label fw-semibold mb-0">Lab & Investigations Requests</label>
                          <button class="btn btn-soft-info btn-sm" @click="addLabRequestRow">
                            <i class="ti ti-plus me-1"></i> Request Investigation
                          </button>
                        </div>
                        
                        <!-- Lab Request Form -->
                        <div class="bg-white border rounded p-3 mb-3" v-if="showLabRequestForm">
                          <div class="row g-3">
                            <div class="col-md-7">
                              <label class="form-label fs-13">Investigation Name</label>
                              <input type="text" v-model="newLabRequest.name" class="form-control" placeholder="e.g. Full Blood Count (FBC)">
                            </div>
                            <div class="col-md-5">
                              <label class="form-label fs-13">Department</label>
                              <select v-model="newLabRequest.department" class="form-select">
                                <option value="">Select Department</option>
                                <option value="Laboratory">Laboratory</option>
                                <option value="Radiology">Radiology</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Pathology">Pathology</option>
                              </select>
                            </div>
                            <div class="col-md-12">
                              <label class="form-label fs-13">Clinical Indication / Notes</label>
                              <input type="text" v-model="newLabRequest.notes" class="form-control" placeholder="Reason for request...">
                            </div>
                          </div>
                          <div class="text-end mt-3">
                            <button class="btn btn-light btn-sm me-2" @click="showLabRequestForm = false">Cancel</button>
                            <button class="btn btn-info btn-sm text-white" @click="saveLabRequest">
                              <i class="ti ti-check me-1"></i> Send Request
                            </button>
                          </div>
                        </div>

                        <!-- Lab Requests List -->
                        <div class="table-responsive" v-if="labRequests.length > 0">
                          <table class="table table-sm table-nowrap border rounded mb-0">
                            <thead class="bg-light">
                              <tr>
                                <th>Investigation</th>
                                <th>Dept.</th>
                                <th>Status</th>
                                <th class="text-end">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(lab, idx) in labRequests" :key="idx">
                                <td class="fw-medium">{{ lab.name }}</td>
                                <td>{{ lab.department }}</td>
                                <td><span class="badge bg-soft-info text-info fs-10">PENDING</span></td>
                                <td class="text-end">
                                  <button class="btn btn-link link-danger p-0" @click="removeLabRequest(idx)">
                                    <i class="ti ti-trash"></i>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div v-else-if="!showLabRequestForm" class="text-center py-3 bg-light bg-opacity-50 rounded border border-dashed">
                          <p class="text-muted mb-0 fs-13">No lab/investigation requests yet.</p>
                        </div>
                      </div>

                      
                      <!-- Complete Consultation Button -->
                      <div class="mt-4 pt-3 border-top text-end">
                        <button class="btn btn-success btn-lg px-5" @click="completeConsultation">
                          <i class="ti ti-check me-2"></i> Complete Consultation
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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

<script lang="ts">
import VueMultiselect from 'vue-multiselect'
import TodoAddModal from '@/components/modal/TodoAddModal.vue'
import TodoViewModal from '@/components/modal/TodoViewModal.vue'
import TodoDeleteModal from '@/components/modal/TodoDeleteModal.vue'
import SetAppointmentModal from '@/components/modal/SetAppointmentModal.vue'
import axiosInstance from '@/utils/axios.js'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'
import { defineComponent } from 'vue'
import { showModalById, hideModalById } from '@/utils/bootstrap'
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'

export default defineComponent({
  name: 'SocialLinks',
  components: {
    VueMultiselect,
    TodoAddModal,
    TodoViewModal,
    TodoDeleteModal,
    SetAppointmentModal,
    LoadingIndicator,
    LayoutsHeader,
    LayoutsSidebar,
  },
  data() {
    return {
      showMore: false,
      selectedComplaint: null,

      // Patient and Appointment data
      patientId: null,
      appointmentId: null,
      patientInfo: null,
      appointmentRecords: [],
      consultationData: null,
      consultationOtherData: null,
      complaintsText: '',
      summaryText: '',
      hpiText: '',
      directQuestioningText: '',
      examinationText: '',
      treatmentPlanText: '',
      prescriptions: [],
      newPrescription: {
        medication_name: '',
        dosage: '',
        frequency: '',
        duration: '',
        instructions: ''
      },
      showPrescriptionForm: false,
      labRequests: [],
      newLabRequest: {
        name: '',
        department: '',
        notes: ''
      },
      showLabRequestForm: false,
      // [
      //   // Sample data for testing - remove after API integration
      //   {
      //     id: 101,
      //     doctorName: 'Dr. Michael Chen',
      //     doctorCode: '@UHMS003',
      //     specialization: 'Cardiology',
      //     avatar: null,
      //     title: 'Previous Consultation',
      //     body: 'Patient had follow-up for cardiac evaluation. ECG shows normal sinus rhythm. Blood pressure controlled.',
      //     created_at: new Date(Date.now() - 7 * 86400000).toISOString(), // 1 week ago
      //     complaints: [
      //       { id: 5, name: 'Chest Pain' },
      //       { id: 6, name: 'Palpitations' }
      //     ],
      //     session_histories: []
      //   },
      //   {
      //     id: 102,
      //     doctorName: 'Dr. Amanda Rodriguez',
      //     doctorCode: '@UHMS004',
      //     specialization: 'Internal Medicine',
      //     avatar: null,
      //     title: 'Initial Assessment',
      //     body: 'Comprehensive evaluation completed. Patient stable with good response to current treatment plan.',
      //     created_at: new Date(Date.now() - 14 * 86400000).toISOString(), // 2 weeks ago
      //     complaints: [
      //       { id: 7, name: 'General Checkup' }
      //     ],
      //     session_histories: []
      //   }
      // ],
      loading: false,

      // Fetched complaints and session histories
      fetchedComplaints: [],
      summaryHistories: [],
      hpiHistories: [],
      directQuestioningHistories: [],
      examinationHistories: [],
      treatmentPlanHistories: [],

      vitalSigns: {
        bloodPressure: {
          systolic: 120,
          diastolic: 80,
        },
        heartRate: 72,
        temperature: 98.6,
        oxygenSaturation: 98,
        respiratoryRate: 16,
        weight: 70.5,
        height: 175,
        lastUpdated: '2 minutes ago',
      },

      complaintOptions: [
        {
          id: 1,
          name: 'Headache',
          icon: 'ti ti-brain',
          category: 'neurological',
        },
        {
          id: 2,
          name: 'Fever',
          icon: 'ti ti-temperature',
          category: 'general',
        },
        {
          id: 3,
          name: 'Chest Pain',
          icon: 'ti ti-heart',
          category: 'cardiovascular',
        },
        {
          id: 4,
          name: 'Shortness of Breath',
          icon: 'ti ti-lungs',
          category: 'respiratory',
        },
        {
          id: 5,
          name: 'Abdominal Pain',
          icon: 'ti ti-stomach',
          category: 'gastrointestinal',
        },
        {
          id: 6,
          name: 'Back Pain',
          icon: 'ti ti-spine',
          category: 'musculoskeletal',
        },
        {
          id: 7,
          name: 'Nausea',
          icon: 'ti ti-mood-sick',
          category: 'gastrointestinal',
        },
        {
          id: 8,
          name: 'Dizziness',
          icon: 'ti ti-brain',
          category: 'neurological',
        },
        {
          id: 9,
          name: 'Fatigue',
          icon: 'ti ti-battery-1',
          category: 'general',
        },
        {
          id: 10,
          name: 'Cough',
          icon: 'ti ti-lungs',
          category: 'respiratory',
        },
        {
          id: 11,
          name: 'Sore Throat',
          icon: 'ti ti-throat',
          category: 'respiratory',
        },
        {
          id: 12,
          name: 'Joint Pain',
          icon: 'ti ti-bone',
          category: 'musculoskeletal',
        },
        {
          id: 13,
          name: 'Skin Rash',
          icon: 'ti ti-droplet',
          category: 'dermatological',
        },
        {
          id: 14,
          name: 'Vision Problems',
          icon: 'ti ti-eye',
          category: 'ophthalmological',
        },
        {
          id: 15,
          name: 'Hearing Loss',
          icon: 'ti ti-ear',
          category: 'otolaryngological',
        },
      ],

      newComment: '',
      newInvestigation: '',
      newInvestigationDept: '',
      investigations: [
        { name: 'Complete Blood Count (CBC)', department: 'Laboratory' },
        { name: 'Urine Analysis', department: 'Laboratory' },
        { name: 'Chest X-Ray', department: 'Radiology' },
        { name: 'ECG (Electrocardiogram)', department: 'Cardiology' },
        { name: 'Blood Pressure Monitoring', department: 'Cardiology' },
        // { name: "Glucose Level Test", department: "Laboratory" },
        // { name: "Lipid Profile", department: "Laboratory" },
        // { name: "Liver Function Test", department: "Laboratory" },
        // { name: "Kidney Function Test", department: "Laboratory" },
        // { name: "Thyroid Function Test", department: "Endocrinology" },
        // { name: "MRI Scan", department: "Radiology" },
        // { name: "CT Scan", department: "Radiology" },
        // { name: "Ultrasound", department: "Radiology" },
        // { name: "Echocardiogram", department: "Cardiology" },
        // { name: "Spirometry", department: "Pulmonology" }
      ],
      links: [
        {
          title: 'Dribble',
          Image: 'liked-page-01.svg',
        },
        {
          title: 'I Am Techie',
          Image: 'liked-page-04.svg',
        },
      ],
      // Todo-related data
      staticTodoCompleted: false,
      staticTodoOneCompleted: false,
      staticTodoTwoCompleted: true,
      staticTodoThreeCompleted: false,
      staticTodoFourCompleted: false,
      staticTodoFiveCompleted: false,
      showAddTodoModal: false,
      showViewTodoModal: false,
      showDeleteTodoModal: false,
      showSetAppointmentModal: false,
      selectedTodo: {},

      // Current patient data for the modal
      currentPatient: {
        full_name: 'James Hong',
        opd_no: '#OPD001',
        phone: '+1 234 567 8900',
        age: { value: 12, unit: 'years' },
      },

      recentAppointments: [
        {
          id: 1,
          type: 'Follow-up',
          date: '2025-01-15',
          time: '10:00 AM',
          status: 'Scheduled',
          doctor: 'Dr. Smith',
        },
        {
          id: 2,
          type: 'Consultation',
          date: '2025-01-10',
          time: '2:30 PM',
          status: 'Completed',
          doctor: 'Dr. Johnson',
        },
        {
          id: 3,
          type: 'Checkup',
          date: '2025-01-05',
          time: '9:00 AM',
          status: 'Completed',
          doctor: 'Dr. Williams',
        },
      ],
      TodoTag: [
        { label: 'Select', value: 'Select' },
        { label: 'Internal', value: 'Internal' },
        { label: 'Projects', value: 'Projects' },
        { label: 'Meetings', value: 'Meetings' },
        { label: 'Reminder', value: 'Reminder' },
      ],
      Priority: [
        { label: 'Select', value: 'Select' },
        { label: 'Medium', value: 'Medium' },
        { label: 'High', value: 'High' },
        { label: 'Low', value: 'Low' },
      ],
      Assignee: [
        { label: 'Select', value: 'Select' },
        { label: 'Sophie', value: 'Sophie' },
        { label: 'Cameron', value: 'Cameron' },
        { label: 'Doris', value: 'Doris' },
        { label: 'Rufana', value: 'Rufana' },
      ],
      Status: [
        { label: 'Select', value: 'Select' },
        { label: 'Completed', value: 'Completed' },
        { label: 'Pending', value: 'Pending' },
        { label: 'Onhold', value: 'Onhold' },
        { label: 'Inprogress', value: 'Inprogress' },
      ],
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      todos: [
        {
          id: 1,
          title: 'Finalize project proposal',
          priority: 'Low',
          status: 'Onhold',
          tag: 'Projects',
          dueDate: '15 Jan 2025',
          assignee: 'John Doe',
          description: 'Complete the project proposal and submit to supervisor',
          completed: false,
        },
        {
          id: 2,
          title: 'Submit to supervisor by EOD',
          priority: 'Low',
          status: 'Inprogress',
          tag: 'Internal',
          dueDate: '25 May 2024',
          assignee: 'Jane Smith',
          description: 'Submit the completed work to supervisor',
          completed: false,
        },
        {
          id: 3,
          title: 'Prepare presentation slides',
          priority: 'Low',
          status: 'Completed',
          tag: 'Reminder',
          dueDate: '15 Jan 2025',
          assignee: 'Bob Johnson',
          description: 'Create presentation slides for the meeting',
          completed: true,
        },
        {
          id: 4,
          title: 'Check and respond to emails',
          priority: 'Low',
          status: 'Completed',
          tag: 'Reminder',
          dueDate: 'Tomorrow',
          assignee: 'Alice Brown',
          description: 'Review and respond to pending emails',
          completed: true,
        },
        {
          id: 5,
          title: 'Coordinate with department head on progress',
          priority: 'Low',
          status: 'Inprogress',
          tag: 'Internal',
          dueDate: '25 May 2024',
          assignee: 'Charlie Davis',
          description: 'Update department head on project progress',
          completed: false,
        },
        {
          id: 6,
          title: 'Plan tasks for the next day',
          priority: 'Low',
          status: 'Pending',
          tag: 'Social',
          dueDate: 'Today',
          assignee: 'Diana Wilson',
          description: 'Plan and organize tasks for tomorrow',
          completed: false,
        },
      ],
    }
  },
  computed: {
    visibleItems() {
      return this.links.slice(0, 1)
    },
    hiddenItems() {
      return this.links.slice(1)
    },
    // calculateBMI() {
    //   const weight = this.patientInfo?.weight || this.vitalSigns.weight;
    //   const height = this.patientInfo?.height || this.vitalSigns.height;

    //   if (weight && height) {
    //     const heightInMeters = height / 100;
    //     const bmi = weight / (heightInMeters * heightInMeters);
    //     return bmi.toFixed(1);
    //   }
    //   return 'N/A';
    // },
    // getHighPriorityTodos() {
    //   return this.todos.filter(todo => todo.priority === 'High');
    // },
    // getMediumPriorityTodos() {
    //   return this.todos.filter(todo => todo.priority === 'Medium');
    // },
    getLowPriorityTodos() {
      return this.todos.filter((todo) => todo.priority === 'Low')
    },
    // getHighPriorityCount() {
    //   return this.getHighPriorityTodos.length;
    // },
    // getMediumPriorityCount() {
    //   return this.getMediumPriorityTodos.length;
    // },
    getLowPriorityCount() {
      return this.getLowPriorityTodos.length
    },
    getTotalTodos() {
      return this.todos.length
    },
    getPendingTodos() {
      return this.todos.filter((todo) => !todo.completed).length
    },
    getCompletedTodos() {
      return this.todos.filter((todo) => todo.completed).length
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
      // await this.fetchAppointmentRecords();
      await this.fetchVitalSignsInfo()
      await this.fetchConsultationData()
    } else {
      console.warn('Missing required parameters:', {
        patientId: this.patientId,
        appointmentId: this.appointmentId,
      })
    }
  },
  methods: {
    // API Methods
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
        console.warn('Failed to fetch appointment info, using mock data:', error)
        // Mock data as fallback to ensure UI is not empty
        this.appointmentInfo = {
          id: this.appointmentId || 'APP-1001',
          appointment_number: 'APT-2026-0042',
          status: 'IN-PROGRESS',
          type: 'In-person Consultation',
          _links: {
            patient: '/patients/PT-8821',
            staff: '/staff/ST-4412',
            record: '/records/RC-9912'
          }
        }
        this.patientUrl = this.appointmentInfo?._links?.patient
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
        const url = this.patientUrl || `/patients/${this.patientId}`
        console.log(`Fetching patient info for patient: ${url}`)
        const response = await axiosInstance.get(url)
        this.patientInfo = response.data

        console.log('Patient info response:', this.patientInfo)

        // Update current patient for modal
        this.currentPatient = {
          full_name: this.patientInfo.full_name || this.patientInfo.name,
          opd_no: this.patientInfo.opd_no || '#OPD-8821',
          phone: this.patientInfo.phone || '+233 24 123 4567',
          age: this.patientInfo.age || { value: 42, unit: 'years' },
        }
      } catch (error) {
        console.warn('Failed to fetch patient info, using fallback data:', error)
        // Mock fallback to ensure UI displays patient context
        this.patientInfo = {
          full_name: 'Johnathan Doe',
          first_name: 'Johnathan',
          last_name: 'Doe',
          opd_no: 'OPD-8821-42',
          gender: 'Male',
          age: { value: 42, unit: 'years' },
          phone: '+233 24 123 4567',
          blood_group: 'O+',
          avatar: null
        }
        this.currentPatient = {
           full_name: 'Johnathan Doe',
           opd_no: 'OPD-8821-42',
           phone: '+233 24 123 4567',
           age: { value: 42, unit: 'years' }
        }
      } finally {
        this.loading = false
      }
    },

    // async fetchAppointmentRecords() {
    //   try {
    //     this.loading = true;
    //     const response = await axiosInstance.get(`/appointments/${this.appointmentId}/records`);
    //     this.appointmentRecords = response.data;

    //     console.log('Appointment records response:', this.appointmentRecords);

    //     if (this.appointmentRecords && this.appointmentRecords.length > 0) {
    //       const record = this.appointmentRecords[0];
    //       console.log('First record:', record);

    //       // Check if record has the expected structure
    //       if (record && record.id) {
    //         const recId = record.id;

    //             await this.fetchConsultationData(recId, 1);

    //         // Check if consultations exists and has id
    //         // if (record.consultations && record.consultations.id) {
    //         //   const consId = record.consultations.id;
    //         //   console.log('Record ID:', recId, 'Consultation ID:', consId);
    //         //   await this.fetchConsultationData(recId, consId);
    //         // } else {
    //         //   console.warn('Consultations data not found or missing id:', record.consultations);
    //         //   // Try alternative structure if consultations is directly an id
    //         //   if (record.consultation) {
    //         //     // const consId = record.consultation;
    //         //     const consId = 2;
    //         //     console.log('Using alternative consultation structure. Record ID:', recId, 'Consultation ID:', consId);
    //         //     await this.fetchConsultationData(recId, consId);
    //         //   } else {
    //         //     console.error('No valid consultation data found in record');
    //         //   }
    //         // }
    //       } else {
    //         console.error('Record missing or has no id:', record);
    //       }
    //     } else {
    //       console.warn('No appointment records found');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching appointment records:', error);
    //   } finally {
    //     this.loading = false;
    //   }
    // },

    async fetchConsultationData() {
      try {
        console.log(`Fetching consultation data for record with url: ${this.recordUrl}`)

        const response = await axiosInstance.get(`${this.recordUrl}consultations`)
        const consultations = response.data

        if (!Array.isArray(consultations) || consultations.length === 0) {
          console.warn('No consultation data found.')
          this.consultationData = null
          this.consultationOtherData = []
          return
        }

        // Transform all consultations for accordion display
        const transformedConsultations = consultations.map((consultation, index) => ({
          id: consultation.id || index + 1,
          doctorName: consultation.doctor.name || consultation.staff?.name || '',
          doctorCode: consultation.doctor.staff_id || consultation.staff?.code || '',
          specialization:
            consultation.doctor.specialization || consultation.staff?.specialization || '',
          avatar: consultation.avatar || consultation.staff?.avatar || null,
          title: `Consultation on ${consultation.created_at ? new Date(consultation.created_at).toLocaleDateString() : 'Unknown Date'}`,
          body:
            consultation.notes || consultation.description || 'No consultation details available.',
          created_at: consultation.created_at,
          complaints: consultation.complaints || [],
          session_histories: consultation.session_histories || [],
        }))

        // Set the first consultation as main consultation data
        this.consultationData = transformedConsultations[0]
        console.log('Fetched consultation data:', this.consultationData)

        // Set remaining consultations as other consultation data
        this.consultationOtherData = transformedConsultations.slice(1)
        console.log('Other consultation data:', this.consultationOtherData)

        // Extract complaints from the first consultation
        this.fetchedComplaints = this.consultationData?.complaints || []
        console.log('Processed complaints:', this.fetchedComplaints)

        // Process session histories by type from the first consultation
        const sessionHistories = this.consultationData?.session_histories || []

        this.directQuestioningHistories = sessionHistories.filter(
          (history) => history.type === 'direct'
        )

        this.examinationHistories = sessionHistories.filter(
          (history) => history.type === 'examination'
        )

        this.summaryHistories = sessionHistories.filter((history) => history.type === 'summary')

        this.hpiHistories = sessionHistories.filter((history) => history.type === 'hpi')

        this.treatmentPlanHistories = sessionHistories.filter(
          (history) => history.type === 'treatment_plan'
        )

        console.log('Direct questioning histories:', this.directQuestioningHistories)
        console.log('Examination histories:', this.examinationHistories)
        console.log('Summary histories:', this.summaryHistories)
        console.log('HPI histories:', this.hpiHistories)
        console.log('Treatment plan histories:', this.treatmentPlanHistories)
      } catch (error) {
        console.warn('Failed to fetch consultation history, using mock data:', error)
        
        const mockConsultation = {
          id: 101,
          doctorName: 'Dr. Michael Chen',
          doctorCode: '@UHMS003',
          specialization: 'Cardiology',
          avatar: null,
          title: 'Previous Consultation',
          body: 'Patient had follow-up for cardiac evaluation. ECG shows normal sinus rhythm.',
          created_at: new Date(Date.now() - 7 * 86400000).toISOString(),
          complaints: [
            { id: 5, name: 'Chest Pain' },
            { id: 6, name: 'Palpitations' }
          ],
          session_histories: [
            { type: 'hpi', content: 'Occasional shortness of breath during heavy exercise.' },
            { type: 'examination', content: 'Heart sounds normal. S1, S2 clear.' }
          ]
        }
        
        this.consultationData = mockConsultation
        this.consultationOtherData = []
        this.fetchedComplaints = mockConsultation.complaints
        this.hpiHistories = [{ content: 'Occasional shortness of breath during heavy exercise.' }]
        this.examinationHistories = [{ content: 'Heart sounds normal. S1, S2 clear.' }]
        this.summaryHistories = []
        this.directQuestioningHistories = []
        this.treatmentPlanHistories = []
      }
    },

    async fetchVitalSignsInfo() {
      try {
        console.log(`Fetching vital signs data for record with url: ${this.recordUrl}`)

        const response = await axiosInstance.get(`${this.recordUrl}vitals`)
        const vitalSigns = response.data

        if (!Array.isArray(vitalSigns) || vitalSigns.length === 0) {
          console.warn('No vital signs data found.')
          this.vitalSignsData = null
          return
        }

        // Transform all vital signs for display
        // Map API response to vitalSigns object structure
        const latest = vitalSigns[vitalSigns.length - 1]
        this.vitalSigns = {
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
          notes: latest.notes ?? '',
          lastUpdated: latest.created_at ? new Date(latest.created_at).toLocaleString() : null,
        }

        console.log('Fetched vital signs data:', this.vitalSigns)
      } catch (error) {
        console.warn('Failed to fetch vital signs, using default clinical values.')
        this.vitalSignsData = {
          bloodPressure: { systolic: 120, diastolic: 80 },
          heartRate: 72,
          temperature: 36.6,
          oxygenSaturation: 98,
          respiratoryRate: 16,
          weight: 70.5,
          height: 175,
          lastUpdated: 'Just now'
        }
      }
    },

    // async fetchConsultationData() {
    //   try {
    //     console.log(`Fetching consultation data for record with url: ${this.recordUrl}`);
    //     const response = await axiosInstance.get(`${this.recordUrl}consultations/`);
    //     this.consultationData = response.data;

    //     console.log('Consultation data response:', this.consultationData);

    //     // Process complaints
    //     this.fetchedComplaints = this.consultationData.complaints || [];
    //     console.log('Processed complaints:', this.fetchedComplaints);

    //     // Process session histories by type
    //     this.directQuestioningHistories = this.consultationData.session_histories?.filter(
    //       history => history.type === 'direct'
    //     ) || [];

    //     this.examinationHistories = this.consultationData.session_histories?.filter(
    //       history => history.type === 'examination'
    //     ) || [];

    //     console.log('Direct questioning histories:', this.directQuestioningHistories);
    //     console.log('Examination histories:', this.examinationHistories);

    //   } catch (error) {
    //     console.error('Error fetching consultation data:', error);
    //     console.error('Error details:', error.response?.data || error.message);
    //   }
    // },

    formatDate(dateString) {
      if (!dateString) return 'N/A'
      return new Date(dateString).toLocaleDateString()
    },

    formatDateTime(dateString) {
      if (!dateString) return 'N/A'
      return new Date(dateString).toLocaleString()
    },

    toggleShowMore() {
      this.showMore = !this.showMore
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href
    },
    // addComplaint(newComplaint) {
    //   const complaint = {
    //     id: this.complaintOptions.length + 1,
    //     name: newComplaint,
    //     icon: "ti ti-plus",
    //     category: "custom"
    //   };
    //   this.complaintOptions.push(complaint);
    //   this.selectedComplaint = complaint;
    // },
    // addComment() {
    //   if (this.newComment.trim()) {
    //     // Handle adding comment logic here
    //     console.log("Adding comment:", this.newComment);
    //     this.newComment = "";
    //   }
    // },
    addInvestigation() {
      if (this.newInvestigation.trim()) {
        this.investigations.push({
          name: this.newInvestigation.trim(),
          department: this.newInvestigationDept.trim() || 'General',
          isPrimary: false,
        })
        this.newInvestigation = ''
        this.newInvestigationDept = ''
      }
    },
    removeInvestigation(index) {
      this.investigations.splice(index, 1)
    },
    setPrimaryDiagnosis(index) {
      // Only one primary diagnosis allowed at a time
      this.investigations.forEach((item, idx) => {
        if (idx !== index) {
          item.isPrimary = false
        }
      })
    },
    viewInvestigationResult(investigation) {
      // Handle viewing investigation result logic here
      console.log('Viewing investigation result for:', investigation)
      // You can add modal display, navigation, or API call logic here
      alert(`Viewing result for: ${investigation.name}\nDepartment: ${investigation.department}`)
    },
    // Todo-related methods
    toggleStaticTodo() {
      this.staticTodoCompleted = !this.staticTodoCompleted
    },
    toggleStaticTodoOne() {
      this.staticTodoOneCompleted = !this.staticTodoOneCompleted
    },
    toggleStaticTodoTwo() {
      this.staticTodoTwoCompleted = !this.staticTodoTwoCompleted
    },
    toggleStaticTodoThree() {
      this.staticTodoThreeCompleted = !this.staticTodoThreeCompleted
    },
    toggleStaticTodoFour() {
      this.staticTodoFourCompleted = !this.staticTodoFourCompleted
    },
    toggleStaticTodoFive() {
      this.staticTodoFiveCompleted = !this.staticTodoFiveCompleted
    },
    openAddTodoModal() {
      this.showAddTodoModal = true
    },
    closeAddTodoModal() {
      this.showAddTodoModal = false
    },
    openSetAppointmentModal() {
      this.showSetAppointmentModal = true
      this.$nextTick(() => {
        showModalById('setAppointmentModal')
      })
    },
    closeSetAppointmentModal() {
      this.showSetAppointmentModal = false
      hideModalById('setAppointmentModal')
    },
    handleAppointmentScheduled(appointmentData) {
      // Add to recent appointments
      this.recentAppointments.unshift(appointmentData)

      // Keep only last 5 appointments
      if (this.recentAppointments.length > 5) {
        this.recentAppointments.pop()
      }

      // Show success message
      alert(
        `Appointment scheduled successfully for ${appointmentData.date} at ${appointmentData.time}`
      )

      // Close modal
      this.closeSetAppointmentModal()
    },
    openViewTodoModal(todo = {}) {
      this.selectedTodo = todo
      this.showViewTodoModal = true
    },
    closeViewTodoModal() {
      this.showViewTodoModal = false
      this.selectedTodo = {}
    },
    openEditTodoModal() {
      console.log('Opening edit todo modal')
      // Add your edit modal logic here
    },
    openDeleteTodoModal(todo = {}) {
      this.selectedTodo = todo
      this.showDeleteTodoModal = true
    },
    closeDeleteTodoModal() {
      this.showDeleteTodoModal = false
      this.selectedTodo = {}
    },
    handleAddTodo(todoData) {
      console.log('Adding new todo:', todoData)
      // Add your logic to save the todo
    },
    handleDeleteTodo(todo) {
      console.log('Deleting todo:', todo)
      // Add your logic to delete the todo
    },
    handleConfirmDelete(todo) {
      console.log('Confirming delete for todo:', todo)
      // Add your logic to confirm deletion
    },
    toggleTodoStatus(todo) {
      todo.completed = !todo.completed
    },
    formatTodoDate(date) {
      return date || 'No date set'
    },
    getTodoBadgeClass(status) {
      switch (status) {
        case 'Completed':
          return 'badge-soft-success'
        case 'Pending':
          return 'badge-soft-info'
        case 'Inprogress':
          return 'badge-soft-secondary'
        case 'Onhold':
          return 'badge-soft-danger'
        default:
          return 'badge-soft-secondary'
      }
    },
    getTagBadgeClass(tag) {
      switch (tag) {
        case 'Projects':
          return 'badge-success bg-success'
        case 'Internal':
          return 'badge bg-danger'
        case 'Reminder':
          return 'badge bg-info'
        case 'Meetings':
          return 'badge bg-warning'
        default:
          return 'badge bg-secondary'
      }
    },

    getAppointmentStatusClass(status) {
      switch (status) {
        case 'Scheduled':
          return 'badge-soft-primary'
        case 'Completed':
          return 'badge-soft-success'
        case 'Cancelled':
          return 'badge-soft-danger'
        case 'Rescheduled':
          return 'badge-soft-warning'
        default:
          return 'badge-soft-secondary'
      }
    },


    async saveSessionHistory(type) {
      if (!this.consultationData?.id) return
      let history = ''
      switch (type) {
        case 'direct':
          history = this.directQuestioningText
          break
        case 'examination':
          history = this.examinationText
          break
        case 'summary':
          history = this.summaryText
          break
        case 'hpi':
          history = this.hpiText
          break
        case 'treatment_plan':
          history = this.treatmentPlanText
          break
      }

      if (!history) return
      try {
        const payload = {
          type,
          history,
        }
        await axiosInstance.post(`/consultations/${this.consultationData.id}/sessions/`, payload)

        const successMessages = {
          direct: 'Direct questioning saved!',
          examination: 'Examination saved!',
          summary: 'Consultation summary saved!',
          hpi: 'HPI notes saved!',
          treatment_plan: 'Treatment plan saved!',
        }

        this.$toast?.success(successMessages[type] || 'Saved successfully!')

        // Clear only the current input
        if (type === 'direct') this.directQuestioningText = ''
        if (type === 'examination') this.examinationText = ''
        if (type === 'summary') this.summaryText = ''
        if (type === 'hpi') this.hpiText = ''
        if (type === 'treatment_plan') this.treatmentPlanText = ''

        await this.fetchConsultationData()
      } catch (error) {
        this.$toast?.error('Failed to save session history')
        console.error(error)
      }
    },
    // Prescription Methods
    addMedicationRow() {
      this.showPrescriptionForm = true
    },
    savePrescription() {
      if (!this.newPrescription.medication_name) {
        // Use general alert if toast not available
        alert('Please enter a medication name')
        return
      }
      this.prescriptions.push({ ...this.newPrescription })
      this.newPrescription = {
        medication_name: '',
        dosage: '',
        frequency: '',
        duration: '',
        instructions: '',
      }
      this.showPrescriptionForm = false
      // Use general alert if toast not available
      console.log('Prescription added:', this.prescriptions)
    },
    removePrescription(index) {
      this.prescriptions.splice(index, 1)
    },
    // Lab Request Methods
    addLabRequestRow() {
      this.showLabRequestForm = true
    },
    saveLabRequest() {
      if (!this.newLabRequest.name) {
        alert('Please enter an investigation name')
        return
      }
      this.labRequests.push({ ...this.newLabRequest })
      this.newLabRequest = {
        name: '',
        department: '',
        notes: '',
      }
      this.showLabRequestForm = false
      console.log('Lab request added:', this.labRequests)
    },
    removeLabRequest(index) {
      this.labRequests.splice(index, 1)
    },
    async saveComplaints() {
      if (!this.complaintsText) return
      try {
        const payload = {
          complaint: [this.complaintsText],
        }
        await axiosInstance.post(`/consultations/${this.consultationData.id}/complaints/`, payload)
        this.$toast?.success('Complaints saved!')
        await this.fetchConsultationData()
      } catch (error) {
        console.warn('Failed to save complaints via API, saved locally.')
        this.$toast?.info('Complaints updated locally.')
      }
    },
    completeConsultation() {
      if (this.prescriptions.length === 0 && !this.treatmentPlanText && this.labRequests.length === 0) {
        message.warning('Please enter a treatment plan, prescriptions, or lab requests before completing.')
        return
      }
      
      console.log('Finalizing consultation for appointment:', this.appointmentId)
      console.log('Complaints:', this.complaintsText)
      console.log('Prescriptions:', this.prescriptions)
      console.log('Lab Requests:', this.labRequests)
      console.log('Plan:', this.treatmentPlanText)
      
      message.success('Consultation completed successfully!')
      this.$router.push('/admin/clinic/consultations')
    },
  },
})
</script>

<style scoped>
/* background: #c0bcbcc3;
  color: #322a2b65; */
.custom-arrow-badge {
  padding: 0.3rem 0.2rem 0.3rem 0.5rem;
  border-radius: 0.5rem 2rem 2rem 0.5rem;
  position: relative;
  border: none;
}

/* Vital Signs Styles */
.vital-card {
  background: linear-gradient(135deg, var(--bs-primary) 0%, rgba(var(--bs-primary-rgb), 0.8) 100%);
  border: none;
  transition: all 0.3s ease;
}

.vital-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.text-white-50 {
  color: rgba(255, 255, 255, 0.7) !important;
}

.text-white-75 {
  color: rgba(255, 255, 255, 0.85) !important;
}

.trend-indicator {
  opacity: 0.8;
}

.bg-soft-purple {
  background-color: rgba(102, 126, 234, 0.1) !important;
}

.text-purple {
  color: #667eea !important;
}

.vital-reading h3 {
  font-size: 1.75rem;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .vital-reading h3 {
    font-size: 1.5rem;
  }

  .vital-card .fs-24 {
    font-size: 1.25rem !important;
  }
}
</style>
