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
                <!-- Tab Navigation -->
                <ul class="nav nav-tabs mb-3" id="consultationTabs" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="channels-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#channels-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="channels-tab-pane"
                      aria-selected="true"
                    >
                      <i class="ti ti-apps me-1"></i>Presenting Of Complains
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="tools-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tools-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="tools-tab-pane"
                      aria-selected="false"
                    >
                      <i class="ti ti-tool me-1"></i>On Direct Questioning
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="examination-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#examination-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="examination-tab-pane"
                      aria-selected="false"
                    >
                      <i class="ti ti-tool me-1"></i>On Examination
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="resources-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#resources-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="resources-tab-pane"
                      aria-selected="false"
                    >
                      <i class="ti ti-book me-1"></i>Treatment Plans
                    </button>
                  </li>
                </ul>

                <!-- Tab Content -->
                <div class="tab-content" id="consultationTabContent">
                  <!-- Channels Tab -->
                  <div
                    class="tab-pane fade show active"
                    id="channels-tab-pane"
                    role="tabpanel"
                    aria-labelledby="channels-tab"
                  >
                    <form>
                      <div class="d-flex flex-wrap gap-2 mb-2">
                        <span class="custom-arrow-badge bg-light d-flex align-items-center">
                          #Headache
                          <button
                            type="button"
                            class="btn btn-sm btn-link p-0 ms-2 text-danger"
                            style="line-height: 1"
                            aria-label="Remove tag"
                          >
                            <i class="ti ti-x"></i>
                          </button>
                        </span>
                      </div>

                      <div class="row mb-3 align-items-end">
                        <div class="col-md-6">
                          <label class="d-block form-label">Select complaint</label>
                          <div class="position-relative">
                            <VueMultiselect
                              v-model="selectedComplaint"
                              :options="complaintOptions"
                              :multiple="false"
                              :close-on-select="true"
                              :clear-on-select="false"
                              :preserve-search="true"
                              placeholder="Select a complaint"
                              label="name"
                              track-by="id"
                              :allow-empty="true"
                              :taggable="true"
                              @tag="addComplaint"
                            >
                              <template #option="{ option }">
                                <div class="d-flex align-items-center">
                                  <i :class="option.icon" class="me-2"></i>
                                  <span>{{ option.name }}</span>
                                </div>
                              </template>
                              <template #singleLabel="{ option }">
                                <div class="d-flex align-items-center">
                                  <i :class="option.icon" class="me-2"></i>
                                  <span>{{ option.name }}</span>
                                </div>
                              </template>
                            </VueMultiselect>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <label class="d-block form-label"></label>

                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control pt-2"
                              placeholder="comment here ..."
                              v-model="newInvestigation"
                              @keyup.enter="addInvestigation"
                            />
                            <button class="btn btn-primary" type="button" @click="addInvestigation">
                              <i class="ti ti-plus me-1"></i> Add
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    <!-- Loading State -->
                    <div v-if="loading" class="text-center py-4">
                      <div class="spinner-border text-primary mb-2" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                      <p class="text-muted">Loading complaints...</p>
                    </div>

                    <!-- Fetched Complaints Display -->
                    <div v-if="fetchedComplaints.length > 0" class="mb-1">
                      <h6 class="fs-15 fw-semibold mb-1">
                        <i class="ti ti-file-text me-2 text-primary"></i>Previous Complaints
                      </h6>
                      <div class="row g-2">
                        <div
                          v-for="complaint in fetchedComplaints"
                          :key="complaint.id"
                          class="col-12"
                        >
                          <!-- <div class="card">
                            <div class="card-body"> -->
                          <div class="d-flex justify-content-between align-items-start mt-2">
                            <div v-if="complaint.complaint && complaint.complaint.length > 0">
                              <div class="d-flex flex-wrap gap-2">
                                <span
                                  v-for="(item, index) in complaint.complaint"
                                  :key="index"
                                  class="custom-arrow-badge bg-light d-flex align-items-center text-primary"
                                >
                                  #{{ item }}

                                  <button
                                    type="button"
                                    class="btn btn-sm btn-link p-0 ms-2 text-danger"
                                    style="line-height: 1"
                                    aria-label="Remove tag"
                                  >
                                    <i class="ti ti-x"></i>
                                  </button>
                                </span>
                              </div>
                            </div>
                            <div v-else>
                              <span class="text-muted fst-italic"
                                >No specific complaints recorded</span
                              >
                            </div>
                            <small class="text-muted">
                              <i class="ti ti-calendar me-1"></i
                              >{{ formatDateTime(complaint.created_at) }}
                            </small>
                            <!-- <span class="badge bg-primary bg-opacity-10 text-primary">
                                  <small class="text-muted">
                                  <i class="ti ti-calendar me-1"></i>{{ formatDateTime(complaint.created_at) }}
                                </small>
                                </span> -->
                            <!-- </div>
                                <div class="complaints-list"> -->
                          </div>
                          <!-- </div>
                          </div> -->
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Tools Tab -->
                  <div
                    class="tab-pane fade"
                    id="tools-tab-pane"
                    role="tabpanel"
                    aria-labelledby="tools-tab"
                  >
                    <form>
                      <div class="mb-2">
                        <label class="form-label">On Direct Questioning</label>
                        <div class="position-relative">
                          <textarea
                            class="form-control"
                            rows="5"
                            placeholder="What's on your mind?"
                          ></textarea>
                        </div>
                      </div>
                      <div class="d-flex align-items-center justify-content-between flex-wrap mb-3">
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-photo fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-link fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-paperclip fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-video fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-hash fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-map-pin-heart fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-mood-smile fs-16"></i
                          ></a>
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-refresh fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-trash fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-world fs-16"></i
                          ></a>
                          <button
                            type="submit"
                            class="btn btn-primary d-inline-flex align-items-center ms-2"
                          >
                            <i class="ti ti-circle-plus fs-16 me-2"></i>Save
                          </button>
                        </div>
                      </div>
                    </form>

                    <!-- Previous Direct Questioning Records -->
                    <div v-if="directQuestioningHistories.length > 0" class="mb-1">
                      <h6 class="fs-15 fw-semibold mb-2">
                        <i class="ti ti-history me-2 text-success"></i>Previous Records
                      </h6>
                      <div class="row">
                        <div
                          v-for="history in directQuestioningHistories"
                          :key="history.id"
                          class="col-12"
                        >
                          <div class="card bg-light">
                            <div class="card-body">
                              <div class="d-flex justify-content-between align-items-start">
                                <div class="history-content">
                                  <p class="mb-0 text-dark">{{ history.history }}</p>
                                </div>
                                <small class="text-muted">
                                  <i class="ti ti-calendar me-1"></i
                                  >{{ formatDateTime(history.created_at) }}
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="examination-tab-pane"
                    role="tabpanel"
                    aria-labelledby="examination-tab"
                  >
                    <!-- Previous Examination Records -->
                    <div v-if="examinationHistories.length > 0" class="mb-4">
                      <h6 class="fs-15 fw-semibold mb-3">
                        <i class="ti ti-stethoscope me-2 text-warning"></i>Previous Examination
                        Records
                      </h6>
                      <div class="row g-2">
                        <div
                          v-for="history in examinationHistories"
                          :key="history.id"
                          class="col-12"
                        >
                          <div class="card border-start border-warning border-3 bg-light">
                            <div class="card-body p-3">
                              <div class="d-flex justify-content-between align-items-start mb-2">
                                <small class="text-muted">
                                  <i class="ti ti-calendar me-1"></i
                                  >{{ formatDateTime(history.created_at) }}
                                </small>
                                <div class="d-flex gap-2">
                                  <span class="badge bg-warning bg-opacity-10 text-warning">{{
                                    history.type
                                  }}</span>
                                  <span class="badge bg-secondary bg-opacity-10 text-secondary"
                                    >ID: {{ history.id }}</span
                                  >
                                </div>
                              </div>
                              <div class="history-content">
                                <p class="mb-0 text-dark">{{ history.history }}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form>
                      <div class="mb-3">
                        <label class="form-label">On Examination</label>
                        <div class="position-relative">
                          <textarea
                            class="form-control"
                            rows="5"
                            placeholder="What's on your mind?"
                          ></textarea>
                        </div>
                      </div>
                      <div
                        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3"
                      >
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-photo fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-link fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-paperclip fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-video fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-hash fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-map-pin-heart fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-mood-smile fs-16"></i
                          ></a>
                        </div>
                        <div class="d-flex align-items-center">
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-refresh fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-trash fs-16"></i
                          ></a>
                          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                            ><i class="ti ti-world fs-16"></i
                          ></a>
                          <button
                            type="submit"
                            class="btn btn-primary d-inline-flex align-items-center ms-2"
                          >
                            <i class="ti ti-circle-plus fs-16 me-2"></i>Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <!-- Resources Tab -->
                  <div
                    class="tab-pane fade"
                    id="resources-tab-pane"
                    role="tabpanel"
                    aria-labelledby="resources-tab"
                  >
                    <!-- Todo Section -->
                    <div class="card shadow-none mb-0">
                      <div class="card-body">
                        <div
                          class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-2"
                        >
                          <div class="d-flex align-items-center">
                            <h6 class="fs-16 mb-0">Treatment Plan</h6>
                            <span class="badge badge-dark rounded-pill badge-xs ms-2">+1</span>
                          </div>
                          <div class="d-flex align-items-center">
                            <p class="mb-0 me-2 pe-2 border-end fs-14">
                              Total Task : <span class="text-dark"> {{ getTotalTodos }} </span>
                            </p>
                            <p class="mb-0 me-2 pe-2 border-end fs-14">
                              Pending : <span class="text-dark"> {{ getPendingTodos }} </span>
                            </p>
                            <p class="mb-0 fs-14">
                              Completed : <span class="text-dark"> {{ getCompletedTodos }} </span>
                            </p>
                          </div>
                        </div>

                        <div class="accordion accordion-arrow-none" id="accordionExample">
                          <div class="accordion-item border-0">
                            <div class="row align-items-center mb-2 row-gap-2">
                              <div class="col-lg-4 col-sm-6">
                                <div class="accordion-header cursor-pointer" id="headingTwo">
                                  <div
                                    class="accordion-button bg-transparent shadow-none p-0"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-controls="collapseTwo"
                                  >
                                    <div class="d-flex align-items-center w-100">
                                      <div class="me-2">
                                        <a href="javascript:void(0);">
                                          <span><i class="ti ti-chevron-down"></i></span>
                                        </a>
                                      </div>
                                      <div class="d-flex align-items-center">
                                        <!-- <span
                                          ><i class="ti ti-square-rounded text-purple me-2"></i
                                        ></span> -->
                                        <h5 class="fw-semibold mb-0">Current Tasks</h5>
                                        <!-- <span class="badge bg-light text-dark rounded-pill ms-2"
                                          >15</span
                                        > -->
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-8 col-sm-6">
                                <div class="d-flex align-items-center justify-content-sm-end">
                                  <a
                                    href="#"
                                    class="btn btn-sm btn-primary"
                                    @click="openAddTodoModal"
                                    ><i class="ti ti-circle-plus me-1"></i>Create New</a
                                  >
                                </div>
                              </div>
                            </div>

                            <div
                              id="collapseTwo"
                              class="accordion-collapse collapse show"
                              aria-labelledby="headingFour"
                              data-bs-parent="#accordionExample"
                            >
                              <div class="accordion-body p-0">
                                <div class="list-group list-group-flush">
                                  <div
                                    v-for="todo in getLowPriorityTodos"
                                    :key="todo.id"
                                    class="list-group-item list-item-hover border rounded mb-1 p-2"
                                  >
                                    <div class="row align-items-center row-gap-2">
                                      <div class="col-lg-8 col-md-7">
                                        <div
                                          class="todo-inbox-check d-flex align-items-center flex-wrap row-gap-2"
                                          :class="{ 'todo-strike-content': todo.completed }"
                                          @click="toggleTodoStatus(todo)"
                                        >
                                          <!-- <span class="me-2 d-flex align-items-center">
                                            <i class="ti ti-grid-dots text-dark"></i>
                                          </span> -->
                                          <div class="form-check form-check-md me-2">
                                            <input
                                              class="form-check-input"
                                              type="checkbox"
                                              :checked="todo.completed"
                                              @change.stop="toggleTodoStatus(todo)"
                                            />
                                            <!-- :checked="staticTodoCompleted"
                                            @change="toggleStaticTodo" -->
                                          </div>
                                          <!-- <span class="me-2 rating-select d-flex align-items-center">
                                            <i class="ti ti-star-filled filled" v-if="todo.starred"></i>
                                            <i class="ti ti-star" v-else></i>
                                          </span> -->
                                          <div class="strike-info">
                                            <h4 class="fs-14 mb-0">{{ todo.title }}</h4>
                                          </div>
                                          <span
                                            class="badge badge-soft-info ms-2 d-inline-flex align-items-center p-1"
                                          >
                                            <i class="ti ti-calendar me-1"></i>{{ todo.dueDate }}
                                          </span>
                                        </div>
                                      </div>
                                      <div class="col-lg-4 col-md-5">
                                        <div
                                          class="d-flex align-items-center justify-content-md-end flex-wrap row-gap-2"
                                        >
                                          <!-- <span :class="getTagBadgeClass(todo.tag)" class="me-2">{{ todo.tag }}</span> -->
                                          <span
                                            :class="getTodoBadgeClass(todo.status)"
                                            class="badge badge-soft-primary d-inline-flex align-items-center me-2"
                                          >
                                            <i class="fas fa-circle fs-6 me-1"></i>{{ todo.status }}
                                          </span>
                                          <div class="d-flex align-items-center">
                                            <div class="avatar-list-stacked avatar-group-sm">
                                              <span class="avatar avatar-rounded">
                                                <img
                                                  class="border border-white"
                                                  src="@/assets/img/profiles/avatar-01.jpg"
                                                  alt="img"
                                                />
                                              </span>
                                              <span class="avatar avatar-rounded">
                                                <img
                                                  class="border border-white"
                                                  src="@/assets/img/profiles/avatar-02.jpg"
                                                  alt="img"
                                                />
                                              </span>
                                              <span class="avatar avatar-rounded">
                                                <img
                                                  class="border border-white"
                                                  src="@/assets/img/profiles/avatar-03.jpg"
                                                  alt="img"
                                                />
                                              </span>
                                            </div>
                                            <div class="dropdown ms-2">
                                              <a
                                                href="javascript:void(0);"
                                                class="d-inline-flex align-items-center"
                                                data-bs-toggle="dropdown"
                                              >
                                                <i class="ti ti-dots-vertical"></i>
                                              </a>
                                              <ul class="dropdown-menu dropdown-menu-end">
                                                <li>
                                                  <a
                                                    href="javascript:void(0);"
                                                    class="dropdown-item rounded-1"
                                                    @click.prevent="openEditTodoModal(todo)"
                                                    ><i class="ti ti-edit me-2"></i>Edit</a
                                                  >
                                                </li>
                                                <li>
                                                  <a
                                                    href="javascript:void(0);"
                                                    class="dropdown-item rounded-1"
                                                    @click.prevent="openDeleteTodoModal(todo)"
                                                    ><i class="ti ti-trash me-2"></i>Delete</a
                                                  >
                                                </li>
                                                <li>
                                                  <a
                                                    href="javascript:void(0);"
                                                    class="dropdown-item rounded-1"
                                                    @click.prevent="openViewTodoModal(todo)"
                                                    ><i class="ti ti-eye me-2"></i>View</a
                                                  >
                                                </li>
                                              </ul>
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

                        <!-- <div class="text-center">
                          <a href="#" class="btn btn-primary"
                            ><i class="ti ti-loader me-2"></i>Load More</a
                          >
                        </div> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
            <!-- end card -->
            <!-- <social-carousel></social-carousel> -->
            <div class="card">
              <!-- <div class="card-header border-0 pb-0">
                <div
                  class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3"
                >
                  <div class="d-flex align-items-center">
                    <a
                      href="javascript:void(0);"
                      class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"
                      ><img src="@/assets/img/profiles/avatar-05.jpg" alt="Img"
                    /></a>
                    <div>
                      <h6 class="fs-16 mb-1">
                        <a href="javascript:void(0);"
                          >Jason Heier
                          <i class="ti ti-circle-check-filled text-success"></i
                        ></a>
                      </h6>
                      <p class="d-flex align-items-center mb-0">
                        <span class="text-info">@jason118</span>
                        <i class="ti ti-circle-filled fs-7 mx-2"></i> United Kingdom
                      </p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="mb-0 text-dark">About 1 hr ago</p>
                    <div class="dropdown ms-3 me-1">
                      <button
                        class="btn btn-icon bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="ti ti-world pe-1"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">Private</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">Public</a>
                        </li>
                      </ul>
                    </div>
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex align-items-center show"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-edit me-2"></i>Edit</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-eye me-2"></i>Hide Post</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-report me-2"></i>Report</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-trash-x me-2"></i>Delete</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> -->
              <div class="card-body">
                <!-- <p class="text-muted">
                what did other doctors say about this patient?
              </p> -->
                <div
                  class="accordion accordion-bordered accordion-custom-icon accordion-arrow-none"
                  id="CustomIconaccordionExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="CustomIconheadingOne">
                      <button
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#CustomIconcollapseOne"
                        aria-expanded="true"
                        aria-controls="CustomIconcollapseOne"
                      >
                        <div class="d-flex align-items-center">
                          <span class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"
                            ><img src="@/assets/img/profiles/avatar-04.jpg" alt="Img"
                          /></span>
                          <div>
                            <h6 class="fs-16 mb-1">
                              <a href="javascript:void(0);"
                                >Doctor One
                                <!-- <i class="ti ti-message-circle text-success"></i> -->
                              </a>
                            </h6>
                            <p class="d-flex align-items-center mb-0">
                              <span class="text-info">@UHMS002</span>
                              <i class="ti ti-circle-filled fs-7 mx-2"></i> Test Specialization
                            </p>
                          </div>
                        </div>
                        <i class="ti ti-plus accordion-icon accordion-icon-on"></i>
                        <i class="ti ti-minus accordion-icon accordion-icon-off"></i>
                      </button>
                    </h2>
                    <div
                      id="CustomIconcollapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="CustomIconheadingOne"
                      data-bs-parent="#CustomIconaccordionExample"
                    >
                      <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by
                        default, until the collapse plugin adds the appropriate classes that we use
                        to style each element. These classes control the overall appearance, as well
                        as the showing and hiding via CSS transitions. You can modify any of this
                        with custom CSS or overriding our default variables. It's also worth noting
                        that just about any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="CustomIconheadingTwo">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#CustomIconcollapseTwo"
                        aria-expanded="false"
                        aria-controls="CustomIconcollapseTwo"
                      >
                        <div class="d-flex align-items-center">
                          <span class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"
                            ><img src="@/assets/img/profiles/avatar-04.jpg" alt="Img"
                          /></span>
                          <div>
                            <h6 class="fs-16 mb-1">
                              <a href="javascript:void(0);"
                                >Doctor Two
                                <!-- <i class="ti ti-message-circle text-success"></i> -->
                              </a>
                            </h6>
                            <p class="d-flex align-items-center mb-0">
                              <span class="text-info">@UHMS002</span>
                              <i class="ti ti-circle-filled fs-7 mx-2"></i> Test Specialization
                            </p>
                          </div>
                        </div>
                        <i class="ti ti-plus accordion-icon accordion-icon-on"></i>
                        <i class="ti ti-minus accordion-icon accordion-icon-off"></i>
                      </button>
                    </h2>
                    <div
                      id="CustomIconcollapseTwo"
                      class="accordion-collapse collapse"
                      aria-labelledby="CustomIconheadingTwo"
                      data-bs-parent="#CustomIconaccordionExample"
                    >
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by
                        default, until the collapse plugin adds the appropriate classes that we use
                        to style each element. These classes control the overall appearance, as well
                        as the showing and hiding via CSS transitions. You can modify any of this
                        with custom CSS or overriding our default variables. It's also worth noting
                        that just about any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="CustomIconheadingThree">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#CustomIconcollapseThree"
                        aria-expanded="false"
                        aria-controls="CustomIconcollapseThree"
                      >
                        <div class="d-flex align-items-center">
                          <span class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"
                            ><img src="@/assets/img/profiles/avatar-04.jpg" alt="Img"
                          /></span>
                          <div>
                            <h6 class="fs-16 mb-1">
                              <a href="javascript:void(0);"
                                >Doctor Three
                                <!-- <i class="ti ti-message-circle text-success"></i> -->
                              </a>
                            </h6>
                            <p class="d-flex align-items-center mb-0">
                              <span class="text-info">@UHMS002</span>
                              <i class="ti ti-circle-filled fs-7 mx-2"></i> Test Specialization
                            </p>
                          </div>
                        </div>
                        <i class="ti ti-plus accordion-icon accordion-icon-on"></i>
                        <i class="ti ti-minus accordion-icon accordion-icon-off"></i>
                      </button>
                    </h2>
                    <div
                      id="CustomIconcollapseThree"
                      class="accordion-collapse collapse"
                      aria-labelledby="CustomIconheadingThree"
                      data-bs-parent="#CustomIconaccordionExample"
                    >
                      <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by
                        default, until the collapse plugin adds the appropriate classes that we use
                        to style each element. These classes control the overall appearance, as well
                        as the showing and hiding via CSS transitions. You can modify any of this
                        with custom CSS or overriding our default variables. It's also worth noting
                        that just about any HTML can go within the <code>.accordion-body</code>,
                        though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end card body -->
              </div>
              <!-- end card body -->
            </div>
            <!-- end car@/d -->

            <div class="card">
              <div class="card-header border-0 pb-0">
                <div
                  class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3"
                >
                  <div class="d-flex align-items-center">
                    <!-- <span class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"
                      ><img src="@/assets/img/profiles/avatar-04.jpg" alt="Img"
                    /></span> -->
                    <div>
                      <h6 class="fs-16 mb-1">
                        <a href="javascript:void(0);"
                          >Patient Medical History
                          <!-- <i class="ti ti-message-circle text-success"></i> -->
                        </a>
                      </h6>
                      <!-- <p class="d-flex align-items-center mb-0">
                        <span class="text-info">@sophie241</span>
                        <i class="ti ti-circle-filled fs-7 mx-2"></i> United Kingdom
                      </p> -->
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="mb-0 text-dark">Last comment about 1 hr ago</p>
                    <!-- <div class="dropdown ms-3 me-1">
                      <button
                        class="btn btn-icon bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="ti ti-world pe-1"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">Private</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">Public</a>
                        </li>
                      </ul>
                    </div> -->
                    <!-- <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex align-items-center show"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-edit me-2"></i>Edit</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-eye me-2"></i>Hide Post</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-report me-2"></i>Report</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-trash-x me-2"></i>Delete</a
                          >
                        </li>
                      </ul>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="card-body">
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

                    <!-- Previous Surgeries -->
                    <div class="mb-4">
                      <h6 class="fw-bold text-dark mb-2">
                        <i class="ti ti-cut me-1 text-secondary fs-14"></i>Previous Surgeries
                      </h6>
                      <div class="row g-2">
                        <div class="col-12">
                          <div class="p-2 bg-light rounded-2 border border-light">
                            <div class="d-flex align-items-center">
                              <div
                                class="bg-warning bg-opacity-10 rounded-circle p-1 me-2"
                                style="width: 30px; height: 30px"
                              >
                                <i
                                  class="ti ti-calendar text-warning fs-14 d-flex align-items-center justify-content-center h-100"
                                ></i>
                              </div>
                              <div>
                                <h6 class="fw-semibold mb-0 text-dark fs-13">Appendectomy</h6>
                                <small class="text-muted">March 2018 • Successful</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Family History -->
                    <div>
                      <h6 class="fw-bold text-dark mb-2">
                        <i class="ti ti-users me-1 text-secondary fs-14"></i>Family History
                      </h6>
                      <div class="row g-2">
                        <div class="col-12">
                          <div class="p-2 bg-light rounded-2 border border-light">
                            <div class="d-flex align-items-center">
                              <div
                                class="bg-danger bg-opacity-10 rounded-circle p-1 me-2"
                                style="width: 30px; height: 30px"
                              >
                                <i
                                  class="ti ti-heart text-danger fs-14 d-flex align-items-center justify-content-center h-100"
                                ></i>
                              </div>
                              <div>
                                <h6 class="fw-semibold mb-0 text-dark fs-13">
                                  Cardiovascular Disease
                                </h6>
                                <small class="text-muted">Father • Age 55</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="p-2 bg-light rounded-2 border border-light">
                            <div class="d-flex align-items-center">
                              <div
                                class="bg-warning bg-opacity-10 rounded-circle p-1 me-2"
                                style="width: 30px; height: 30px"
                              >
                                <i
                                  class="ti ti-droplet text-warning fs-14 d-flex align-items-center justify-content-center h-100"
                                ></i>
                              </div>
                              <div>
                                <h6 class="fw-semibold mb-0 text-dark fs-13">Diabetes Type 2</h6>
                                <small class="text-muted">Mother • Age 48</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Column 2: Current Medications, Previous Surgeries -->
                  <div class="col-md-6">
                    <!-- Current Medications -->
                    <div class="mb-4">
                      <h6 class="fw-bold text-dark mb-2">
                        <i class="ti ti-pill me-1 text-secondary fs-14"></i>Current Medications
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
                                <h6 class="fw-semibold mb-0 text-dark fs-13">Lisinopril 10mg</h6>
                                <small class="text-muted">Once daily • For hypertension</small>
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
                                <h6 class="fw-semibold mb-0 text-dark fs-13">Artificial Tears</h6>
                                <small class="text-muted">As needed • For dry eyes</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="p-2 bg-light rounded-2 border border-light">
                            <div class="d-flex align-items-center">
                              <div
                                class="bg-success bg-opacity-10 rounded-circle p-1 me-2"
                                style="width: 30px; height: 30px"
                              >
                                <i
                                  class="ti ti-shield text-success fs-14 d-flex align-items-center justify-content-center h-100"
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

                    <!-- Known Allergies -->
                    <div>
                      <h6 class="fw-bold text-dark mb-2">
                        <i class="ti ti-shield-x me-1 text-secondary fs-14"></i>Known Allergies
                      </h6>
                      <div class="row g-2">
                        <div class="col-12">
                          <div class="p-2 bg-light rounded-2 border border-light">
                            <div class="d-flex align-items-center">
                              <div
                                class="bg-warning bg-opacity-10 rounded-circle p-1 me-2"
                                style="width: 30px; height: 30px"
                              >
                                <i
                                  class="ti ti-pill text-warning fs-14 d-flex align-items-center justify-content-center h-100"
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
                          <div class="p-2 bg-light rounded-2 border border-light">
                            <div class="d-flex align-items-center">
                              <div
                                class="bg-success bg-opacity-10 rounded-circle p-1 me-2"
                                style="width: 30px; height: 30px"
                              >
                                <i
                                  class="ti ti-leaf text-success fs-14 d-flex align-items-center justify-content-center h-100"
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
                  </div>
                </div>
              </div>
              <!-- end card body -->
            </div>

            <div class="card">
              <div class="card-header border-0 pb-0">
                <div
                  class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3"
                >
                  <div class="d-flex align-items-center">
                    <!-- <span class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"
                      ><img src="@/assets/img/profiles/avatar-04.jpg" alt="Img"
                    /></span> -->
                    <div>
                      <h6 class="fs-16 mb-1">
                        <a href="javascript:void(0);"
                          >What did other doctors say about this Patient?
                          <i class="ti ti-message-circle text-success"></i>
                        </a>
                      </h6>
                      <!-- <p class="d-flex align-items-center mb-0">
                        <span class="text-info">@sophie241</span>
                        <i class="ti ti-circle-filled fs-7 mx-2"></i> United Kingdom
                      </p> -->
                    </div>
                  </div>
                  <div class="d-flex align-items-center">
                    <p class="mb-0 text-dark">Last comment about 1 hr ago</p>
                    <!-- <div class="dropdown ms-3 me-1">
                      <button
                        class="btn btn-icon bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="ti ti-world pe-1"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">Private</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript:void(0);">Public</a>
                        </li>
                      </ul>
                    </div> -->
                    <!-- <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="d-inline-flex align-items-center show"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end p-3">
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-edit me-2"></i>Edit</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-eye me-2"></i>Hide Post</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-report me-2"></i>Report</a
                          >
                        </li>
                        <li>
                          <a href="javascript:void(0);" class="dropdown-item rounded-1"
                            ><i class="ti ti-trash-x me-2"></i>Delete</a
                          >
                        </li>
                      </ul>
                    </div> -->
                  </div>
                </div>
              </div>
              <div class="card-body">
                <!-- <div class="mb-2"> -->
                <!-- <p class="text-dark fw-medium">
                    Excited to announce the launch of our new product! Get yours now and
                    enjoy a special discount.
                    <a href="javascript:void(0);" class="text-info link-hover"
                      >#NewRelease
                    </a>
                    <a href="javascript:void(0);" class="text-info link-hover">
                      #Innovation</a
                    >
                    🎉
                  </p> -->
                <!-- </div> -->
                <!-- <div class="mb-2">
                  <img
                    src="@/assets/img/social/social-feed-03.jpg"
                    class="rounded img-fluid"
                    alt="Img"
                  />
                </div> -->
                <div
                  class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3"
                >
                  <div class="d-flex align-items-center flex-wrap row-gap-3">
                    <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
                      <i class="ti ti-heart me-2"></i>340K Likes
                    </a>
                    <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
                      <i class="ti ti-message-dots me-2"></i>45 Comments
                    </a>
                    <!-- <a
                      href="javascript:void(0);"
                      class="d-inline-flex align-items-center"
                    >
                      <i class="ti ti-share-3 me-2"></i>28 Share
                    </a> -->
                  </div>
                  <div class="d-flex align-items-center">
                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                      ><i class="ti ti-heart-filled text-danger"></i
                    ></a>
                    <!-- <a
                      href="javascript:void(0);"
                      class="btn btn-icon btn-sm rounded-circle"
                      ><i class="ti ti-share"></i
                    ></a> -->
                    <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
                      ><i class="ti ti-message-star"></i
                    ></a>
                    <!-- <a
                      href="javascript:void(0);"
                      class="btn btn-icon btn-sm rounded-circle"
                      ><i class="ti ti-bookmark-filled text-warning"></i
                    ></a> -->
                  </div>
                </div>
                <div class="d-flex align-items-start mb-3">
                  <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                    <img src="@/assets/img/profiles/avatar-02.jpg" alt="Img" />
                  </a>
                  <div class="bg-light rounded flex-fill p-2">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="fs-16 mb-0">
                        <a href="javascript:void(0);">Frank Hoffman</a>
                      </h6>
                      <span class="ms-2">12:45 PM</span>
                    </div>
                    <p class="mb-1">
                      Congratulations on the launch! I've been eagerly waiting for this product, and
                      the special discount makes it even more exciting.
                    </p>
                    <a href="javascript:void(0);" class="d-inline-flex align-items-center"
                      ><i class="ti ti-share-3 me-2"></i>Reply</a
                    >
                  </div>
                </div>
                <div class="d-flex align-items-start mb-3 ms-4 ps-2">
                  <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                    <img src="@/assets/img/profiles/avatar-01.jpg" alt="Img" />
                  </a>
                  <div class="bg-light rounded flex-fill p-2">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="fs-16 mb-0">
                        <a href="javascript:void(0);">Sophie Headrick</a>
                      </h6>
                      <span class="ms-2">12:45 PM</span>
                    </div>
                    <p class="mb-1">Thank you so much for your enthusiasm and support!</p>
                    <a href="javascript:void(0);" class="d-inline-flex align-items-center"
                      ><i class="ti ti-share-3 me-2"></i>Reply</a
                    >
                  </div>
                </div>
                <div class="d-flex align-items-start mb-3">
                  <a href="javascript:void(0);" class="avatar avatar-rounded flex-shrink-0 me-2">
                    <img src="@/assets/img/profiles/avatar-04.jpg" alt="Img" />
                  </a>
                  <div class="bg-light rounded flex-fill p-2">
                    <div class="d-flex align-items-center mb-1">
                      <h6 class="fs-16 mb-0">
                        <a href="javascript:void(0);">Samuel Butler</a>
                      </h6>
                      <span class="ms-2">12:40 PM</span>
                    </div>
                    <p class="mb-1">
                      So thrilled to see this product finally launched! I've heard amazing things
                      about it and am excited to see how it lives up to the hype.
                    </p>
                    <a href="javascript:void(0);" class="d-inline-flex align-items-center"
                      ><i class="ti ti-share-3 me-2"></i>Reply</a
                    >
                  </div>
                </div>
                <div>
                  <div class="more-menu">
                    <div class="d-flex align-items-start mb-3">
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/profiles/avatar-05.jpg" alt="Img" />
                      </a>
                      <div class="bg-light rounded flex-fill p-2">
                        <div class="d-flex align-items-center mb-1">
                          <h6 class="fs-16 mb-0">
                            <a href="javascript:void(0);">Samuel Butler</a>
                          </h6>
                          <span class="ms-2">12:40 PM</span>
                        </div>
                        <p class="mb-1">
                          So thrilled to see this product finally launched! I've heard amazing
                          things about it and am excited to see how it lives up to the hype.
                        </p>
                        <a href="javascript:void(0);" class="d-inline-flex align-items-center"
                          ><i class="ti ti-share-3 me-2"></i>Reply</a
                        >
                      </div>
                    </div>
                    <div class="d-flex align-items-start mb-3">
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-rounded flex-shrink-0 me-2"
                      >
                        <img src="@/assets/img/profiles/avatar-06.jpg" alt="Img" />
                      </a>
                      <div class="bg-light rounded flex-fill p-2">
                        <div class="d-flex align-items-center mb-1">
                          <h6 class="fs-16 mb-0">
                            <a href="javascript:void(0);">Samuel Butler</a>
                          </h6>
                          <span class="ms-2">12:40 PM</span>
                        </div>
                        <p class="mb-1">
                          So thrilled to see this product finally launched! I've heard amazing
                          things about it and am excited to see how it lives up to the hype.
                        </p>
                        <a href="javascript:void(0);" class="d-inline-flex align-items-center"
                          ><i class="ti ti-share-3 me-2"></i>Reply</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="view-all text-center mb-3">
                    <a href="javascript:void(0);" class="link-primary fw-medium"
                      >View All 200 Comments</a
                    >
                  </div>
                </div>
                <div class="d-flex align-items-start">
                  <span class="avatar avatar-rounded me-2 flex-shrink-0"
                    ><img src="@/assets/img/profiles/avatar-05.jpg" alt="Img"
                  /></span>
                  <input type="text" class="form-control" placeholder="Enter Comments" />
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->
          </div>
        </div>
        <!-- end col -->
        <div class="col-xl-3 theiaStickySidebar">
          <div class="stickysidebar">
            <div class="card">
              <div class="card-body">
                <h6 class="fs-16 mb-3">Diagnosis</h6>
                <!-- <ul class="nav nav-pills d-flex mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item flex-fill" role="presentation">
                    <button
                      class="nav-link btn active w-100"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Investigation
                    </button>
                  </li>
                  <li class="nav-item flex-fill" role="presentation">
                    <button
                      class="nav-link btn w-100"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Procedure
                    </button>
                  </li>
                  <li class="nav-item flex-fill" role="presentation">
                    <button
                      class="nav-link btn w-100"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Medication
                    </button>
                  </li>
                </ul> -->
                <!-- <div class="tab-content">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel"> -->
                <div class="row">
                  <div class="col-md-12">
                    <div class="d-block form-label mb-2">
                      <!-- <div class="mb-2">List of investigations</div> -->
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Add investigation name"
                          v-model="newInvestigation"
                          @keyup.enter="addInvestigation"
                        />
                        <!-- <input type="text" class="form-control" placeholder="Department" v-model="newInvestigationDept" @keyup.enter="addInvestigation" /> -->
                        <button class="btn btn-primary" type="button" @click="addInvestigation">
                          <i class="ti ti-plus me-1"></i> Add
                        </button>
                      </div>

                      <div class="mt-3"></div>
                      <div
                        v-for="(item, idx) in investigations"
                        :key="idx"
                        class="bg-light rounded p-1 mb-1"
                      >
                        <div class="d-flex align-items-center justify-content-between mb-1">
                          <a href="javascript:void(0);" class="d-flex align-items-center">
                            <span><i class="ti ti-hash me-2 text-primary"></i></span>
                            <p class="fs-13 fw-medium mb-0">{{ item.name }}</p>
                          </a>
                          <div class="d-flex align-items-center">
                            <!-- Primary Diagnosis Toggle - Only visible if this item is primary or no item is primary -->
                            <div
                              class="form-check form-switch me-2"
                              v-if="item.isPrimary || !investigations.some((inv) => inv.isPrimary)"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                :id="`primary-${idx}`"
                                v-model="item.isPrimary"
                                @change="setPrimaryDiagnosis(idx)"
                                style="font-size: 12px"
                              />
                              <label
                                class="form-check-label fs-11 text-muted"
                                :for="`primary-${idx}`"
                              >
                                Primary
                              </label>
                            </div>
                            <!-- <a href="javascript:void(0);"
                                  ><i class="ti ti-receipt text-primary"></i
                                ></a> -->
                            <a href="javascript:void(0);" @click="removeInvestigation(idx)"
                              ><i class="ti ti-x text-danger"></i
                            ></a>
                          </div>
                        </div>
                        <!-- <p class="d-flex align-items-center justify-content-between text-dark fw-medium mb-0">
                              <small class="text-muted"
                                >{{ item.department }}</small
                              ><i class="ti ti-receipt text-primary"></i
                              >
                            </p> -->
                      </div>

                      <!-- <ul class="list-group mt-2">
                            <liclass="list-group-item d-flex justify-content-between align-items-center">
                              <div>
                                <div class="fw-medium">{{ item.name }}</div>
                                <small class="text-muted">{{ item.department }}</small>
                              </div>

                            </li>
                          </ul> -->
                    </div>
                    <!-- <div class="position-relative">
                          <VueMultiselect
                            v-model="selectedComplaint"
                            :options="complaintOptions"
                            :multiple="false"
                            :close-on-select="true"
                            :clear-on-select="false"
                            :preserve-search="true"
                            placeholder="Select a complaint"
                            label="name"
                            track-by="id"
                            :allow-empty="true"
                            :taggable="true"
                            @tag="addComplaint"
                          >
                            <template #option="{ option }">
                              <div class="d-flex align-items-center">
                                <i :class="option.icon" class="me-2"></i>
                                <span>{{ option.name }}</span>
                              </div>
                            </template>
                            <template #singleLabel="{ option }">
                              <div class="d-flex align-items-center">
                                <i :class="option.icon" class="me-2"></i>
                                <span>{{ option.name }}</span>
                              </div>
                            </template>
                          </VueMultiselect>
                        </div> -->
                  </div>
                </div>
                <!-- <div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-01.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6
                              class="d-inline-flex align-items-center fs-14 fw-medium mb-1"
                            >
                              <a href="javascript:void(0);">Anthony Lewis</a>
                              <i class="ti ti-circle-check-filled text-success ms-1"></i>
                            </h6>
                            <span class="fs-12 d-block">United States</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6
                              class="d-inline-flex align-items-center fs-14 fw-medium mb-1"
                            >
                              <a href="javascript:void(0);">Harvey Smith</a>
                            </h6>
                            <span class="fs-12 d-block">Ukrain</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-03.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6
                              class="d-inline-flex align-items-center fw-medium fs-14 mb-1"
                            >
                              <a href="javascript:void(0);">Stephan Peralt</a>
                            </h6>
                            <span class="fs-12 d-block">Isreal</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6
                              class="d-inline-flex align-items-center fs-14 fw-medium mb-1"
                            >
                              <a href="javascript:void(0);">Doglas Martini</a>
                            </h6>
                            <span class="fs-12 d-block">Belgium</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-09.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6
                              class="d-inline-flex align-items-center fs-14 fw-medium mb-1"
                            >
                              <a href="javascript:void(0);">Brian Villalobos</a>
                              <i class="ti ti-circle-check-filled text-success ms-1"></i>
                            </h6>
                            <span class="fs-12 d-block">United Kingdom</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6
                              class="d-inline-flex align-items-center fs-14 fw-medium mb-1"
                            >
                              <a href="javascript:void(0);">Linda Ray</a>
                            </h6>
                            <span class="fs-12 d-block">Argentina</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                    </div> -->
                <!-- <div>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-outline-light text-dark w-100"
                        >View All <i class="ti ti-arrow-right ms-2"></i
                      ></a>
                    </div> -->
                <!-- </div>

                </div> -->
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->

            <div class="card">
              <div class="card-body">
                <h6 class="fs-16 mb-3">Service Requests</h6>
                <ul class="nav nav-pills d-flex mb-3" id="pills-tab" role="tablist">
                  <li class="nav-item flex-fill" role="presentation">
                    <button
                      class="nav-link btn active w-100"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Investigation
                    </button>
                  </li>
                  <li class="nav-item flex-fill" role="presentation">
                    <button
                      class="nav-link btn w-100"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Procedure
                    </button>
                  </li>
                  <li class="nav-item flex-fill" role="presentation">
                    <button
                      class="nav-link btn w-100"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Medication
                    </button>
                  </li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="pills-home" role="tabpanel">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="d-block form-label mb-2">
                          <div class="mb-2">List of investigations</div>
                          <div class="input-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Add investigation name"
                              v-model="newInvestigation"
                              @keyup.enter="addInvestigation"
                            />
                            <!-- <input type="text" class="form-control" placeholder="Department" v-model="newInvestigationDept" @keyup.enter="addInvestigation" /> -->
                            <button class="btn btn-primary" type="button" @click="addInvestigation">
                              <i class="ti ti-plus me-1"></i> Add
                            </button>
                          </div>

                          <div class="mt-3"></div>
                          <div
                            v-for="(item, idx) in investigations"
                            :key="idx"
                            class="bg-light rounded p-2 mb-2"
                          >
                            <div class="d-flex align-items-center justify-content-between mb-1">
                              <a href="javascript:void(0);" class="d-flex align-items-center">
                                <span
                                  ><img
                                    src="@/assets/img/icons/feeds-01.svg"
                                    class="me-2"
                                    alt="Img"
                                /></span>
                                <p class="fs-13 fw-medium mb-0">{{ item.name }}</p>
                              </a>
                              <a href="javascript:void(0);"><i class="ti ti-x text-danger"></i></a>
                            </div>
                            <p
                              class="d-flex align-items-center justify-content-between text-dark fw-medium mb-0"
                            >
                              <small class="text-muted">{{ item.department }}</small
                              ><i class="ti ti-receipt text-primary"></i>
                            </p>
                          </div>

                          <!-- <ul class="list-group mt-2">
                            <liclass="list-group-item d-flex justify-content-between align-items-center">
                              <div>
                                <div class="fw-medium">{{ item.name }}</div>
                                <small class="text-muted">{{ item.department }}</small>
                              </div>

                            </li>
                          </ul> -->
                        </div>
                        <!-- <div class="position-relative">
                          <VueMultiselect
                            v-model="selectedComplaint"
                            :options="complaintOptions"
                            :multiple="false"
                            :close-on-select="true"
                            :clear-on-select="false"
                            :preserve-search="true"
                            placeholder="Select a complaint"
                            label="name"
                            track-by="id"
                            :allow-empty="true"
                            :taggable="true"
                            @tag="addComplaint"
                          >
                            <template #option="{ option }">
                              <div class="d-flex align-items-center">
                                <i :class="option.icon" class="me-2"></i>
                                <span>{{ option.name }}</span>
                              </div>
                            </template>
                            <template #singleLabel="{ option }">
                              <div class="d-flex align-items-center">
                                <i :class="option.icon" class="me-2"></i>
                                <span>{{ option.name }}</span>
                              </div>
                            </template>
                          </VueMultiselect>
                        </div> -->
                      </div>
                    </div>
                    <!-- <div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-01.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6
                              class="d-inline-flex align-items-center fs-14 fw-medium mb-1"
                            >
                              <a href="javascript:void(0);">Anthony Lewis</a>
                              <i class="ti ti-circle-check-filled text-success ms-1"></i>
                            </h6>
                            <span class="fs-12 d-block">United States</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6
                              class="d-inline-flex align-items-center fs-14 fw-medium mb-1"
                            >
                              <a href="javascript:void(0);">Harvey Smith</a>
                            </h6>
                            <span class="fs-12 d-block">Ukrain</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-03.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6
                              class="d-inline-flex align-items-center fw-medium fs-14 mb-1"
                            >
                              <a href="javascript:void(0);">Stephan Peralt</a>
                            </h6>
                            <span class="fs-12 d-block">Isreal</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6
                              class="d-inline-flex align-items-center fs-14 fw-medium mb-1"
                            >
                              <a href="javascript:void(0);">Doglas Martini</a>
                            </h6>
                            <span class="fs-12 d-block">Belgium</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-09.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6
                              class="d-inline-flex align-items-center fs-14 fw-medium mb-1"
                            >
                              <a href="javascript:void(0);">Brian Villalobos</a>
                              <i class="ti ti-circle-check-filled text-success ms-1"></i>
                            </h6>
                            <span class="fs-12 d-block">United Kingdom</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-02.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6
                              class="d-inline-flex align-items-center fs-14 fw-medium mb-1"
                            >
                              <a href="javascript:void(0);">Linda Ray</a>
                            </h6>
                            <span class="fs-12 d-block">Argentina</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                    </div> -->
                    <!-- <div>
                      <a
                        href="javascript:void(0);"
                        class="btn btn-outline-light text-dark w-100"
                        >View All <i class="ti ti-arrow-right ms-2"></i
                      ></a>
                    </div> -->
                  </div>
                  <div class="tab-pane fade" id="pills-profile" role="tabpanel">
                    <div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-11.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6 class="d-inline-flex fs-14 align-items-center fw-medium mb-1">
                              <a href="javascript:void(0);">Anthony Lewis</a>
                              <i class="ti ti-circle-check-filled text-success ms-1"></i>
                            </h6>
                            <span class="fs-12 d-block">United States</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-10.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6 class="d-inline-flex align-items-center fs-14 fw-medium mb-1">
                              <a href="javascript:void(0);">Harvey Smith</a>
                            </h6>
                            <span class="fs-12 d-block">Ukrain</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-09.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6 class="d-inline-flex align-items-center fs-14 fw-medium mb-1">
                              <a href="javascript:void(0);">Stephan Peralt</a>
                            </h6>
                            <span class="fs-12 d-block">Isreal</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-08.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6 class="d-inline-flex fs-14 align-items-center fw-medium mb-1">
                              <a href="javascript:void(0);">Doglas Martini</a>
                            </h6>
                            <span class="fs-12 d-block">Belgium</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-07.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6 class="d-inline-flex fs-14 align-items-center fw-medium mb-1">
                              <a href="javascript:void(0);">Brian Villalobos</a>
                              <i class="ti ti-circle-check-filled text-success ms-1"></i>
                            </h6>
                            <span class="fs-12 d-block">United Kingdom</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                      <div class="d-flex align-items-center justify-content-between mb-3">
                        <div class="d-flex align-items-center">
                          <a
                            href="javascript:void(0);"
                            class="avatar avatar-rounded flex-shrink-0 me-2"
                          >
                            <img src="@/assets/img/profiles/avatar-06.jpg" alt="Img" />
                          </a>
                          <div>
                            <h6 class="d-inline-flex align-items-center fs-14 fw-medium mb-1">
                              <a href="javascript:void(0);">Linda Ray</a>
                            </h6>
                            <span class="fs-12 d-block">Argentina</span>
                          </div>
                        </div>
                        <a href="javascript:void(0);" class="btn btn-sm btn-icon"
                          ><i class="ti ti-user-x"></i
                        ></a>
                      </div>
                    </div>
                    <div>
                      <a href="javascript:void(0);" class="btn btn-outline-light text-dark w-100"
                        >View All <i class="ti ti-arrow-right ms-2"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end card body -->
            </div>

            <!-- <div class="card">
              <div class="card-body">
                <h6 class="fs-16 mb-3">Saved Feeds</h6>

                <div class="bg-light rounded p-2 mb-2">
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <a href="javascript:void(0);" class="d-flex align-items-center">
                      <span
                        ><img
                          src="@/assets/img/icons/feeds-01.svg"
                          class="me-2"
                          alt="Img"
                      /></span>
                      <p class="fs-13 fw-medium mb-0">World Health</p>
                    </a>
                    <a href="javascript:void(0);"
                      ><i class="ti ti-bookmark-filled text-warning"></i
                    ></a>
                  </div>
                  <p class="text-dark fw-medium mb-0">
                    <a href="javascript:void(0);"
                      >Retail investor party continues even as</a
                    >
                  </p>
                </div>

                <div class="bg-light rounded p-2 mb-2">
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <a href="javascript:void(0);" class="d-flex align-items-center">
                      <span
                        ><img
                          src="@/assets/img/icons/feeds-02.svg"
                          class="me-2"
                          alt="Img"
                      /></span>
                      <p class="fs-13 fw-medium mb-0">T3 Tech</p>
                    </a>
                    <a href="javascript:void(0);"
                      ><i class="ti ti-bookmark-filled text-warning"></i
                    ></a>
                  </div>
                  <p class="text-dark fw-medium mb-0">
                    <a href="javascript:void(0);"
                      >Ipad Air (2020) vs Samsung Galaxy Tab</a
                    >
                  </p>
                </div>

                <div class="bg-light rounded p-2 mb-2">
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <a href="javascript:void(0);" class="d-flex align-items-center">
                      <span
                        ><img
                          src="@/assets/img/icons/feeds-03.svg"
                          class="me-2"
                          alt="Img"
                      /></span>
                      <p class="fs-13 fw-medium mb-0">Fstoppers</p>
                    </a>
                    <a href="javascript:void(0);"
                      ><i class="ti ti-bookmark-filled text-warning"></i
                    ></a>
                  </div>
                  <p class="text-dark fw-medium mb-0">
                    <a href="javascript:void(0);"
                      >Beyond capital gains tax! Top 50 stock</a
                    >
                  </p>
                </div>

                <div class="bg-light rounded p-2">
                  <div class="d-flex align-items-center justify-content-between mb-1">
                    <a href="javascript:void(0);" class="d-flex align-items-center">
                      <span
                        ><img
                          src="@/assets/img/icons/feeds-04.svg"
                          class="me-2"
                          alt="Img"
                      /></span>
                      <p class="fs-13 fw-medium mb-0">Evernote</p>
                    </a>
                    <a href="javascript:void(0);"
                      ><i class="ti ti-bookmark-filled text-warning"></i
                    ></a>
                  </div>
                  <p class="text-dark fw-medium mb-0">
                    <a href="javascript:void(0);">Sony Just Destroyed the Competition</a>
                  </p>
                </div>

                <div class="mt-3">
                  <a
                    href="javascript:void(0);"
                    class="btn btn-outline-light text-dark w-100"
                    >View All <i class="ti ti-arrow-right ms-2"></i
                  ></a>
                </div>
              </div>
            </div> -->
            <!-- end card -->

            <div class="card">
              <div class="card-body">
                <h6 class="fs-16 mb-3">Trending Hastags</h6>
                <div class="d-flex align-items-center flex-wrap gap-1">
                  <a href="javascript:void(0);" class="text-info d-inline-flex link-hover"
                    >#HealthTips</a
                  >
                  <a href="javascript:void(0);" class="text-info d-inline-flex link-hover"
                    >#Wellness</a
                  >
                  <a href="javascript:void(0);" class="text-info d-inline-flex link-hover"
                    >#Motivation</a
                  >
                  <a href="javascript:void(0);" class="text-info d-inline-flex link-hover"
                    >#Inspiration
                  </a>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->

            <div class="card">
              <div class="card-body">
                <div class="card-img card-img-hover mb-3">
                  <a href="javascript:void(0);" class="rounded"
                    ><img
                      src="@/assets/img/social/social-feed-04.jpg"
                      class="rounded img-fluid w-100"
                      alt="Img"
                  /></a>
                </div>
                <h6 class="text-center fs-14">
                  <a href="javascript:void(0);">Enjoy Unlimited Access on a small price monthly.</a>
                </h6>
                <div class="mt-3">
                  <a href="javascript:void(0);" class="btn btn-outline-light text-dark w-100"
                    >Upgrade Now <i class="ti ti-arrow-right ms-2"></i
                  ></a>
                </div>
              </div>
              <!-- end card body -->
            </div>
            <!-- end card -->

            <div class="d-flex align-items-center flex-wrap justify-content-center gap-2 mb-3">
              <a href="javascript:void(0);" class="d-inline-flex">About</a>
              <a href="javascript:void(0);" class="d-inline-flex">Privacy</a>
              <a href="javascript:void(0);" class="d-inline-flex">Terms</a>
              <a href="javascript:void(0);" class="d-inline-flex">Help</a>
            </div>
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

<script>
import VueMultiselect from 'vue-multiselect'
import TodoAddModal from '@/components/modal/TodoAddModal.vue'
import TodoViewModal from '@/components/modal/TodoViewModal.vue'
import TodoDeleteModal from '@/components/modal/TodoDeleteModal.vue'
import SetAppointmentModal from '@/components/modal/SetAppointmentModal.vue'
import axiosInstance from '@/utils/axios.js'

export default {
  name: 'SocialLinks',
  components: {
    VueMultiselect,
    TodoAddModal,
    TodoViewModal,
    TodoDeleteModal,
    SetAppointmentModal,
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
      loading: false,

      // Fetched complaints and session histories
      fetchedComplaints: [],
      directQuestioningHistories: [],
      examinationHistories: [],

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
    calculateBMI() {
      const weight = this.patientInfo?.weight || this.vitalSigns.weight
      const height = this.patientInfo?.height || this.vitalSigns.height

      if (weight && height) {
        const heightInMeters = height / 100
        const bmi = weight / (heightInMeters * heightInMeters)
        return bmi.toFixed(1)
      }
      return 'N/A'
    },
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
    this.patientId = this.$route.query.patient
    this.appointmentId = this.$route.params.id

    console.log('URL Route info:', {
      patientId: this.patientId,
      appointmentId: this.appointmentId,
      fullRoute: this.$route,
      query: this.$route.query,
      params: this.$route.params,
    })

    if (this.patientId && this.appointmentId) {
      console.log('Both patient and appointment IDs found, fetching data...')
      await this.fetchPatientInfo()
      await this.fetchAppointmentRecords()
    } else {
      console.warn('Missing required parameters:', {
        patientId: this.patientId,
        appointmentId: this.appointmentId,
      })
    }
  },
  methods: {
    // API Methods
    async fetchPatientInfo() {
      try {
        this.loading = true
        console.log(`Fetching patient info for patient ID: ${this.patientId}`)
        const response = await axiosInstance.get(`/patients/${this.patientId}`)
        this.patientInfo = response.data

        console.log('Patient info response:', this.patientInfo)

        // Update current patient for modal
        this.currentPatient = {
          full_name: this.patientInfo.full_name || this.patientInfo.name,
          opd_no: this.patientInfo.opd_no || '#N/A',
          phone: this.patientInfo.phone || '',
          age: this.patientInfo.age || { value: 'N/A', unit: 'years' },
        }
      } catch (error) {
        console.error('Error fetching patient info:', error)
        console.error('Error details:', error.response?.data || error.message)
      } finally {
        this.loading = false
      }
    },

    async fetchAppointmentRecords() {
      try {
        this.loading = true
        const response = await axiosInstance.get(`/appointments/${this.appointmentId}/records/`)
        this.appointmentRecords = response.data

        console.log('Appointment records response:', this.appointmentRecords)

        if (this.appointmentRecords && this.appointmentRecords.length > 0) {
          const record = this.appointmentRecords[0]
          console.log('First record:', record)

          // Check if record has the expected structure
          if (record && record.id) {
            const recId = record.id

            await this.fetchConsultationData(recId, 1)

            // Check if consultations exists and has id
            // if (record.consultations && record.consultations.id) {
            //   const consId = record.consultations.id;
            //   console.log('Record ID:', recId, 'Consultation ID:', consId);
            //   await this.fetchConsultationData(recId, consId);
            // } else {
            //   console.warn('Consultations data not found or missing id:', record.consultations);
            //   // Try alternative structure if consultations is directly an id
            //   if (record.consultation) {
            //     // const consId = record.consultation;
            //     const consId = 2;
            //     console.log('Using alternative consultation structure. Record ID:', recId, 'Consultation ID:', consId);
            //     await this.fetchConsultationData(recId, consId);
            //   } else {
            //     console.error('No valid consultation data found in record');
            //   }
            // }
          } else {
            console.error('Record missing or has no id:', record)
          }
        } else {
          console.warn('No appointment records found')
        }
      } catch (error) {
        console.error('Error fetching appointment records:', error)
      } finally {
        this.loading = false
      }
    },

    async fetchConsultationData(recId, consId) {
      try {
        console.log(`Fetching consultation data for record ${recId} and consultation ${consId}`)
        const response = await axiosInstance.get(`/records/${recId}/consultations/${consId}/`)
        this.consultationData = response.data

        console.log('Consultation data response:', this.consultationData)

        // Process complaints
        this.fetchedComplaints = this.consultationData.complaints || []
        console.log('Processed complaints:', this.fetchedComplaints)

        // Process session histories by type
        this.directQuestioningHistories =
          this.consultationData.session_histories?.filter((history) => history.type === 'direct') ||
          []

        this.examinationHistories =
          this.consultationData.session_histories?.filter(
            (history) => history.type === 'examination'
          ) || []

        console.log('Direct questioning histories:', this.directQuestioningHistories)
        console.log('Examination histories:', this.examinationHistories)
      } catch (error) {
        console.error('Error fetching consultation data:', error)
        console.error('Error details:', error.response?.data || error.message)
      }
    },

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
    addComplaint(newComplaint) {
      const complaint = {
        id: this.complaintOptions.length + 1,
        name: newComplaint,
        icon: 'ti ti-plus',
        category: 'custom',
      }
      this.complaintOptions.push(complaint)
      this.selectedComplaint = complaint
    },
    addComment() {
      if (this.newComment.trim()) {
        // Handle adding comment logic here
        console.log('Adding comment:', this.newComment)
        this.newComment = ''
      }
    },
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
    },
    closeSetAppointmentModal() {
      this.showSetAppointmentModal = false
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
  },
}
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
</style>

<style>
/* Vue Multiselect Styles */
.multiselect {
  min-height: 38px;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  background: #fff;
}

.multiselect__tags {
  min-height: 38px;
  padding: 8px 40px 0 8px;
  border-radius: 0.375rem;
  border: none;
  background: #fff;
}

.multiselect__placeholder {
  color: #6c757d;
  display: inline-block;
  margin-bottom: 10px;
  padding-top: 0;
}

.multiselect__select {
  height: 38px;
  right: 1px;
  top: 1px;
  padding: 4px 8px;
  margin: 0;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.multiselect__select:before {
  position: relative;
  right: 0;
  top: 65%;
  color: #999;
  margin-top: 4px;
  border-style: solid;
  border-width: 5px 5px 0;
  border-color: #999 transparent transparent;
  content: '';
}

.multiselect__content-wrapper {
  position: absolute;
  display: block;
  background: #fff;
  width: 100%;
  max-height: 240px;
  overflow: auto;
  border: 1px solid #dee2e6;
  border-top: none;
  border-radius: 0 0 0.375rem 0.375rem;
  z-index: 1000;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.multiselect__content {
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 0;
  min-width: 100%;
  vertical-align: top;
}

.multiselect__element {
  display: block;
}

.multiselect__option {
  display: block;
  padding: 8px 12px;
  min-height: 40px;
  line-height: 16px;
  text-decoration: none;
  text-transform: none;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  color: #495057;
}

.multiselect__option:after {
  top: 0;
  right: 0;
  position: absolute;
  line-height: 40px;
  padding-right: 12px;
  padding-left: 20px;
  font-size: 13px;
}

.multiselect__option--highlight {
  background: #007bff;
  outline: none;
  color: #fff;
}

.multiselect__option--highlight:after {
  content: attr(data-select);
  background: #007bff;
  color: #fff;
}

.multiselect__option--selected {
  background: #f8f9fa;
  color: #495057;
  font-weight: 500;
}

.multiselect__option--selected:after {
  content: attr(data-selected);
  color: #28a745;
}

.multiselect__option--selected.multiselect__option--highlight {
  background: #dc3545;
  color: #fff;
}

.multiselect__option--selected.multiselect__option--highlight:after {
  background: #dc3545;
  content: attr(data-deselect);
  color: #fff;
}

.multiselect__single {
  position: relative;
  display: inline-block;
  min-height: 20px;
  line-height: 20px;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  padding: 0;
  width: calc(100%);
  transition: border 0.1s ease;
  box-sizing: border-box;
  margin-bottom: 8px;
  vertical-align: top;
}

.multiselect__input {
  position: relative;
  display: inline-block;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  padding: 0;
  width: calc(100%);
  transition: border 0.1s ease;
  box-sizing: border-box;
  margin-bottom: 8px;
  vertical-align: top;
}

.multiselect__input:focus {
  outline: none;
}

.multiselect--active .multiselect__placeholder {
  display: none;
}

.multiselect--active .multiselect__select {
  transform: rotateZ(180deg);
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

.multiselect--above .multiselect__content-wrapper {
  bottom: 100%;
  border: 1px solid #dee2e6;
  border-bottom: none;
  border-radius: 0.375rem 0.375rem 0 0;
}
</style>
