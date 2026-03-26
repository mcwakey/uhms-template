<template>
  <layouts-header />
  <layouts-sidebar />

  <!-- ========================
          Start Page Content
      ========================= -->

  <div class="page-wrapper">
    <LoadingIndicator
      v-if="loading && !appointmentInfo"
      :show="loading && !appointmentInfo"
      variant="center"
      wrapperClass="py-3 w-100"
      message="Loading vitals..."
      messageClass="text-muted mb-0 mt-2"
    />

    <div v-else>
      <!-- Start Content -->
      <div class="content">
        <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
          <div class="flex-grow-1">
            <h4 class="fs-18 fw-semibold mb-0">Patient Vitals</h4>
          </div>
          <div class="text-end">
            <!-- <ol class="breadcrumb m-0 py-0">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'NursingDashboard' }">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'NursingAppointmentList' }">Appointments</router-link>
              </li>
              <li class="breadcrumb-item active">Patient Vitals</li>
            </ol> -->
          </div>
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
                      <span class="badge bg-success text-white px-3 py-1 fs-12">{{
                        appointmentInfo ? appointmentInfo.patient_status : ''
                      }}</span>
                    </div>

                    <!-- Patient Info Display -->
                    <div class="d-flex flex-column align-items-center mb-2">
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-lg online avatar-rounded mb-1"
                      >
                        <img src="@/assets/img/profiles/avatar-02.jpg" alt="Img" />
                      </a>
                      <h6 class="mb-0 fs-15">
                        <a href="javascript:void(0);">
                          {{ appointmentInfo ? appointmentInfo.patient?.name : '' }}
                        </a>
                      </h6>
                      <small class="text-muted">
                        #{{ appointmentInfo ? appointmentInfo.patient?.opd_no : '' }}
                      </small>
                    </div>
                    <div class="d-flex justify-content-center gap-2">
                      <div class="rounded bg-white text-center px-2 py-1 flex-fill">
                        <span class="fw-semibold fs-14">
                          {{
                            appointmentInfo
                              ? appointmentInfo.patient?.age
                                ? `${appointmentInfo.patient.age.value}${appointmentInfo.patient.age.unit.charAt(0)}`
                                : 'N/A'
                              : ''
                          }}
                        </span>
                        <small class="d-block fs-12 text-muted">Age</small>
                      </div>
                      <div class="rounded bg-white text-center px-2 py-1 flex-fill">
                        <span class="fw-semibold fs-14">
                          {{ appointmentInfo ? appointmentInfo.patient?.gender : '' }}
                        </span>
                        <small class="d-block fs-12 text-muted">Gender</small>
                      </div>
                    </div>
                  </div>

                  <div class="mb-1">
                    <div
                      class="fw-medium d-flex align-items-center bg-black text-white rounded py-2 px-2 mb-1"
                    >
                      <div class="d-flex align-items-center w-100 justify-content-center">
                        <div class="d-flex align-items-center">
                          <i class="ti ti-shield fs-24 me-2"></i>
                          <span class="me-2">
                            {{
                              insuranceInfo
                                ? insuranceInfo.plan?.company + ' - ' + insuranceInfo.plan?.name
                                : 'Self Sponsored'
                            }}
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
                        {{
                          appointmentInfo
                            ? appointmentInfo.patient?.occupation +
                              ' @ ' +
                              appointmentInfo.patient?.employer
                            : ''
                        }}
                      </span>
                    </span>
                    <span class="d-flex align-items-center justify-content-between fw-medium p-2">
                      <span><i class="ti ti-building-church me-2"></i>Religion</span>
                      <span class="badge badge-soft-light text-black">
                        {{ appointmentInfo ? appointmentInfo.patient?.religion : '' }}
                      </span>
                    </span>
                    <span class="d-flex align-items-center justify-content-between fw-medium p-2">
                      <span><i class="ti ti-heart me-2"></i>Marital Status</span>
                      <span class="badge badge-soft-light text-black">
                        {{ appointmentInfo ? appointmentInfo.patient?.marital_status : '' }}
                      </span>
                    </span>
                    <span class="d-flex align-items-center justify-content-between fw-medium p-2">
                      <span><i class="ti ti-phone me-2"></i>Phone</span>
                      <span class="badge badge-soft-light text-black">
                        {{ appointmentInfo ? appointmentInfo.patient?.phone : '' }}
                      </span>
                    </span>
                  </div>
                </div>
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
                          {{ appointmentInfo ? appointmentInfo.staff?.name : '' }}
                        </h6>
                        <small class="text-muted">{{
                          appointmentInfo ? appointmentInfo.staff?.specialization : ''
                        }}</small>
                      </div>
                      <div class="text-end">
                        <span class="badge bg-primary bg-opacity-10 text-primary fs-11"
                          >#{{ appointmentInfo ? appointmentInfo.staff?.staff_id : '' }}</span
                        >
                      </div>
                    </div>
                  </div>

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
                            <span class="fs-13">{{ serviceInfo?.name }}</span>
                          </div>
                          <span class="badge bg-info bg-opacity-10 text-info fs-11">{{
                            serviceInfo?.specialization?.department
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>

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
                              appointmentInfo && appointmentInfo.start_date
                                ? new Date(appointmentInfo.start_date).toLocaleTimeString()
                                : new Date().toLocaleTimeString()
                            }}</small>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center mb-2">
                        <div class="timeline-indicator bg-warning me-2"></div>
                        <div class="flex-grow-1">
                          <div class="d-flex align-items-center justify-content-between">
                            <span
                              class="fs-12"
                              :class="{
                                '': appointmentInfo && appointmentInfo.is_confirmed,
                                'fw-medium': appointmentInfo && !appointmentInfo.is_confirmed,
                              }"
                              >Vitals Recording</span
                            >
                            <small class="text-muted">{{
                              appointmentInfo
                                ? appointmentInfo.is_confirmed
                                  ? 'Done'
                                  : 'In Progress'
                                : ''
                            }}</small>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex align-items-center">
                        <div class="timeline-indicator bg-light border me-2"></div>
                        <div class="flex-grow-1">
                          <div class="d-flex align-items-center justify-content-between">
                            <span
                              class="fs-12 text-muted"
                              :class="{
                                'fw-medium': appointmentInfo && appointmentInfo.is_confirmed,
                                '': appointmentInfo && !appointmentInfo.is_confirmed,
                              }"
                              >Doctor Consultation</span
                            >
                            <small class="text-muted">{{
                              appointmentInfo && appointmentInfo.is_confirmed ? 'Ready' : 'Pending'
                            }}</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="d-flex gap-2">
                    <!-- <router-link
                      class="btn btn-sm btn-outline-primary flex-fill"
                      :to="{ name: 'StaffChat' }"
                    >
                      <i class="ti ti-message fs-12 me-1"></i>
                    </router-link> -->
                    <!-- <router-link
                      class="btn btn-sm btn-outline-secondary flex-fill d-flex align-items-center justify-content-center"
                      :to="{
                        name: 'NursingStaffAppointments',
                        params: { id: appointmentInfo?.staff?.uuid },
                      }"
                    >
                      <i class="ti ti-calendar fs-12 me-1"></i> Schedule
                    </router-link> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end col -->
          <div class="col-xl-6">
            <div>
              <div class="card">
                <div class="card-body">
                  <div class="mb-1">
                    <h6 class="fs-16 mb-3">Vital Signs</h6>
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
                                'text-danger': getCurrentTemperature > 38.0,
                                'text-warning': getCurrentTemperature < 35.0,
                                'text-dark':
                                  getCurrentTemperature >= 35.0 && getCurrentTemperature <= 38.0,
                              }"
                            >
                              {{ getCurrentTemperature || '--' }}
                            </div>
                            <div class="vital-flag">
                              <i
                                v-if="getCurrentTemperature > 38.0"
                                class="ti ti-arrow-up text-danger fs-12"
                                title="High Temperature"
                              ></i>
                              <i
                                v-else-if="getCurrentTemperature < 35.0"
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
                                'text-dark':
                                  getCurrentHeartRate >= 60 && getCurrentHeartRate <= 100,
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
                                  getCurrentRespiratoryRate >= 12 &&
                                  getCurrentRespiratoryRate <= 20,
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
                    </div>

                    <div class="w-100">
                      <div>
                        <div v-if="vitalSignsData && vitalSignsData.notes" class="fs-13 text-dark">
                          {{ vitalSignsData.notes }}
                        </div>
                        <div v-else class="text-muted fs-12">No clinical note available.</div>
                      </div>
                    </div>
                  </div>

                  <!-- Last Updated -->
                  <div
                    class="d-flex align-items-center justify-content-between mt-1 pt-1 border-top"
                  >
                    <div class="d-flex align-items-center text-muted">
                      <i class="ti ti-clock me-1 fs-11"></i>
                      <small class="fs-11">Last updated: {{ getLatestUpdate }}</small>
                    </div>
                    <div class="d-flex gap-1">
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
                      <button
                        class="btn btn-sm btn-primary"
                        @click="saveVitals"
                        :disabled="isSaving"
                      >
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
                          <i class="ti ti-calculator me-2 fs-21"></i>
                          <strong class="fs-16">{{ calculateBMI }} </strong>

                          <span class="me-2" v-if="calculateBMI >= 30">(Obese)</span>
                          <span v-else-if="calculateBMI >= 25">(Overweight)</span>
                          <span v-else-if="calculateBMI < 18.5">(Underweight)</span>
                          <span v-else> Normal</span>
                        </div>
                      </div>
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
                          <span class="input-group-text">°C</span>
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
                            placeholder="Select"
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
              </div>

              <div class="card">
                <div class="card-body">
                  <form>
                    <div class="mb-3">
                      <label class="form-label">Vitals records</label>
                      <div class="position-relative">
                        <div class="table-responsive">
                          <table class="table table-hover align-middle">
                            <thead class="table-light">
                              <tr>
                                <th>Date/Time</th>
                                <th>
                                  <i class="ti ti-temperature text-secondary"></i>
                                  <span class="ms-1">Temp</span>
                                </th>
                                <th>
                                  <i class="ti ti-activity text-info"></i>
                                  <span class="ms-1">BP</span>
                                </th>
                                <th>
                                  <i class="ti ti-scale text-purple"></i>
                                  <span class="ms-1">HR</span>
                                </th>
                                <th>
                                  <i class="ti ti-wind text-info"></i>
                                  <span class="ms-1">RR</span>
                                </th>
                                <th>
                                  <i class="ti ti-calculator text-secondary"></i>
                                  <span class="ms-1">SpO2</span>
                                </th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="(vital, idx) in vitalSignsHistory"
                                :key="vital.id || idx"
                                :class="{
                                  'table-danger': (vital.systolic_bp || 0) > 140 || (vital.temperature || 0) > 38,
                                  'table-warning': (vital.systolic_bp || 0) < 90 || (vital.temperature || 0) < 35,
                                  'table-success':
                                    (vital.systolic_bp || 0) >= 90 &&
                                    (vital.systolic_bp || 0) <= 140 &&
                                    (vital.temperature || 0) >= 35 &&
                                    (vital.temperature || 0) <= 38,
                                }"
                              >
                                <td>
                                  <span class="badge bg-light text-dark">
                                    {{
                                      vital.created_at
                                        ? new Date(vital.created_at).toLocaleString()
                                        : '--'
                                    }}
                                  </span>
                                </td>
                                <td>
                                  <span
                                    :class="{
                                      'text-danger fw-bold': (vital.temperature || 0) > 38,
                                      'text-warning fw-bold': (vital.temperature || 0) < 35,
                                      'text-dark':
                                        (vital.temperature || 0) >= 35 && (vital.temperature || 0) <= 38,
                                    }"
                                  >
                                    {{ vital.temperature ?? '--' }}
                                  </span>
                                </td>
                                <td>
                                  <span
                                    :class="{
                                      'text-danger fw-bold':
                                        (vital.systolic_bp || 0) > 140 || (vital.diastolic_bp || 0) > 90,
                                      'text-warning fw-bold':
                                        (vital.systolic_bp || 0) < 90 || (vital.diastolic_bp || 0) < 60,
                                      'text-dark':
                                        (vital.systolic_bp || 0) >= 90 &&
                                        (vital.systolic_bp || 0) <= 140 &&
                                        (vital.diastolic_bp || 0) >= 60 &&
                                        (vital.diastolic_bp || 0) <= 90,
                                    }"
                                  >
                                    {{ vital.systolic_bp ?? '--' }}/{{ vital.diastolic_bp ?? '--' }}
                                  </span>
                                </td>
                                <td>
                                  <span
                                    :class="{
                                      'text-danger fw-bold': (vital.heart_rate || 0) > 100,
                                      'text-warning fw-bold': (vital.heart_rate || 0) < 60,
                                      'text-dark':
                                        (vital.heart_rate || 0) >= 60 && (vital.heart_rate || 0) <= 100,
                                    }"
                                  >
                                    {{ vital.heart_rate ?? '--' }}
                                  </span>
                                </td>
                                <td>
                                  <span
                                    :class="{
                                      'text-danger fw-bold': (vital.respiratory_rate || 0) > 20,
                                      'text-warning fw-bold': (vital.respiratory_rate || 0) < 12,
                                      'text-dark':
                                        (vital.respiratory_rate || 0) >= 12 &&
                                        (vital.respiratory_rate || 0) <= 20,
                                    }"
                                  >
                                    {{ vital.respiratory_rate ?? '--' }}
                                  </span>
                                </td>
                                <td>
                                  <span
                                    :class="{
                                      'text-danger fw-bold': (vital.oxygen_saturation || 0) < 95,
                                      'text-warning fw-bold': (vital.oxygen_saturation || 0) > 100,
                                      'text-dark':
                                        (vital.oxygen_saturation || 0) >= 95 &&
                                        (vital.oxygen_saturation || 0) <= 100,
                                    }"
                                  >
                                    {{ vital.oxygen_saturation ?? '--'
                                    }}<span v-if="vital.oxygen_saturation">%</span>
                                  </span>
                                </td>
                                <td>
                                  <button
                                    class="btn btn-sm btn-outline-primary me-1"
                                    @click.prevent="editVital(vital)"
                                    title="Edit"
                                  >
                                    <i class="ti ti-edit"></i>
                                  </button>
                                  <button
                                    class="btn btn-sm btn-outline-danger"
                                    @click.prevent="deleteVital(vital)"
                                    title="Delete"
                                  >
                                    <i class="ti ti-trash"></i>
                                  </button>
                                </td>
                              </tr>
                              <tr
                                v-if="
                                  !vitalSignsHistory ||
                                  vitalSignsHistory.length === 0
                                "
                              >
                                <td colspan="9" class="text-center text-muted">
                                  No vitals records found.
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
                  <div class="mb-1">
                    <h6 class="fs-14 fw-semibold mb-2">Priority Level</h6>
                    <div class="triaging-levels">
                      <div
                        v-for="level in triageLevels"
                        :key="level.id"
                        class="d-flex align-items-center justify-content-between p-2 mb-1 rounded border"
                        :class="{ [priorityClass(level.name)]: level.name === triageStatus }"
                      >
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
                      <!-- Triage instructions message row -->
                      <div class="row mt-2">
                        <div class="col-12">
                          <div v-if="triageStatus === 'Critical'" class="alert alert-danger">
                            <strong>Critical:</strong> Immediate intervention required. Notify
                            emergency team and prepare for rapid assessment and treatment.
                          </div>
                          <div v-else-if="triageStatus === 'Urgent'" class="alert alert-warning">
                            <strong>Urgent:</strong> Needs care soon. Prioritize patient for prompt
                            evaluation and monitor closely for deterioration.
                          </div>
                          <div v-else-if="triageStatus === 'Stable'" class="alert alert-success">
                            <strong>Stable:</strong> Routine monitoring. Continue standard care and
                            reassess periodically.
                          </div>
                          <div v-else class="alert alert-secondary">
                            <strong>Unknown:</strong> Triage status not determined. Please reassess
                            patient.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Action Buttons -->
                  <div v-if="appointmentInfo && !appointmentInfo.is_confirmed" class="d-flex gap-2">
                    <button
                      class="btn btn-sm btn-outline-primary flex-fill"
                      @click="reassessTriage"
                    >
                      <i class="ti ti-refresh fs-12"></i> Reassess
                    </button>
                    <button class="btn btn-sm btn-primary flex-fill" @click="confirmTriage">
                      <i class="ti ti-check fs-12"></i> Confirm
                    </button>
                  </div>
                </div>
              </div>

              <div class="card mt-3">
                <div class="card-body position-relative">
                  <div class="d-flex align-items-center justify-content-between mb-3">
                    <h6 class="fs-16 mb-0 d-flex align-items-center">
                      <i class="ti ti-user-plus me-2 text-primary fs-18"></i>
                      Next Patient
                    </h6>
                  </div>

                  <div class="position-absolute top-1 end-0 mt-0 me-2">
                    <span class="badge bg-success text-white px-3 py-1 fs-12">{{
                      nextAppointmentInfo ? nextAppointmentInfo.patient_status : ''
                    }}</span>
                  </div>

                  <div v-if="nextAppointmentInfo">
                    <div class="d-flex flex-column align-items-center mb-2">
                      <a href="javascript:void(0);" class="avatar avatar-lg avatar-rounded mb-1">
                        <img src="@/assets/img/profiles/avatar-03.jpg" alt="Next Patient" />
                      </a>
                      <h6 class="mb-0 fs-15">
                        <a href="javascript:void(0);">{{ nextAppointmentInfo.patient?.name }}</a>
                      </h6>
                      <small class="text-muted">{{ nextAppointmentInfo.patient?.opd_no }}</small>
                    </div>
                    <div class="d-flex justify-content-center gap-2 mb-2">
                      <div class="rounded bg-light text-center px-2 py-1 flex-fill">
                        <span class="fw-semibold fs-14">{{
                          nextAppointmentInfo.patient?.age?.value
                        }}</span>
                        <small class="d-block fs-12 text-muted">Age</small>
                      </div>
                      <div class="rounded bg-light text-center px-2 py-1 flex-fill">
                        <span class="fw-semibold fs-14">{{
                          nextAppointmentInfo.patient?.gender
                        }}</span>
                        <small class="d-block fs-12 text-muted">Gender</small>
                      </div>
                    </div>
                    <div class="d-flex gap-2">
                      <button
                        class="btn btn-sm btn-primary flex-fill"
                        @click="loadNextPatient"
                      >
                        <i class="ti ti-arrow-right fs-12 me-1"></i> Start Vitals
                      </button>
                    </div>
                  </div>
                  <div v-else class="text-muted text-center py-2">No next patient in queue.</div>
                </div>
              </div>
            </div>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
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
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axiosInstance from '@/utils/axios'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'

const route = useRoute()
const router = useRouter()

// Interfaces
interface PatientInfo {
  full_name?: string
  name?: string
  opd_no?: string
  age?: { value: number; unit: string }
  gender?: string
  insurance?: string
  occupation?: string
  employer?: string
  religion?: string
  marital_status?: string
  phone?: string
  height?: number
  weight?: number
}

interface StaffInfo {
  full_name?: string
  name?: string
  specialization?: string
  staff_id?: string
  phone?: string
  email?: string
  department?: string
  uuid?: string
}

interface InsuranceInfo {
  plan?: {
    company: string
    name: string
  }
}

interface ServiceInfo {
  name?: string
  specialization?: {
    department: string
  }
  priority?: string
  duration?: string
  status?: string
  fee?: string
}

interface AppointmentInfo {
  id?: string
  uuid?: string
  patient_status?: string
  start_date?: string
  is_confirmed?: boolean
  patient?: PatientInfo
  staff?: StaffInfo
  _links: {
    self: string
    patient: string
    staff: string
    record: string
    primary_insurance: string
    service: string
  }
}

interface VitalSignsData {
  id?: number
  bloodPressure?: { systolic: number | null; diastolic: number | null }
  heartRate?: number | null
  temperature?: number | null
  oxygenSaturation?: number | null
  respiratoryRate?: number | null
  weight?: number | null
  height?: number | null
  painScale?: number | null
  consciousness?: string | null
  vitalSignsScore?: number
  ageScore?: number
  painScore?: number
  consciousnessScore?: number
  triageScore?: number
  notes?: string
  lastUpdated?: string | null
  created_at?: string
  systolic_bp?: number
  diastolic_bp?: number
  heart_rate?: number
  respiratory_rate?: number
  oxygen_saturation?: number
  pain_level?: number
}

interface VitalsForm {
  bloodPressure: { systolic: number | null; diastolic: number | null }
  heartRate: number | null
  temperature: number | null
  oxygenSaturation: number | null
  respiratoryRate: number | null
  weight: number | null
  height: number | null
  painScale: number | null
  consciousness: string | null
  notes: string
}

interface TriageLevel {
  id: number
  name: string
  min: number
  max: number
  time: string
  colorClass: string
  description: string
}

// State
const loading = ref(false)
const isSaving = ref(false)
const appointmentInfo = ref<AppointmentInfo | null>(null)
const nextAppointmentInfo = ref<AppointmentInfo | null>(null)
const insuranceInfo = ref<InsuranceInfo | null>(null)
const serviceInfo = ref<ServiceInfo | null>(null)
const vitalSignsData = ref<VitalSignsData | null>(null)
const vitalSignsHistory = ref<VitalSignsData[]>([])

const patientUrl = ref('')
const staffUrl = ref('')
const recordUrl = ref('')
const selfUrl = ref('')
const insuranceUrl = ref('')
const serviceUrl = ref('')

const vitalsForm = reactive<VitalsForm>({
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
})

const triageStatus = ref('Unknown')

const triageLevels: TriageLevel[] = [
  {
    id: 1,
    name: 'Critical',
    min: 7,
    max: 10,
    time: 'Immediate',
    colorClass: 'bg-danger text-white',
    description: 'Critical — Immediate intervention needed',
  },
  {
    id: 2,
    name: 'Urgent',
    min: 4,
    max: 6,
    time: '30 mins',
    colorClass: 'bg-warning text-dark',
    description: 'Urgent — Needs care soon',
  },
  {
    id: 3,
    name: 'Stable',
    min: 0,
    max: 3,
    time: '1 hour',
    colorClass: 'bg-success text-white',
    description: 'Stable — Routine monitoring',
  },
]

// Computed
const getTriageScore = computed(() => {
  return vitalSignsData.value?.triageScore || 0
})

const getCurrentTemperature = computed(() => {
  return (
    vitalsForm.temperature || vitalSignsData.value?.temperature || 0
  )
})

const getCurrentBloodPressure = computed(() => {
  return {
    systolic:
      vitalsForm.bloodPressure.systolic ||
      vitalSignsData.value?.bloodPressure?.systolic ||
      0,
    diastolic:
      vitalsForm.bloodPressure.diastolic ||
      vitalSignsData.value?.bloodPressure?.diastolic ||
      0,
  }
})

const getCurrentHeartRate = computed(() => {
  return (
    vitalsForm.heartRate || vitalSignsData.value?.heartRate || 0
  )
})

const getCurrentRespiratoryRate = computed(() => {
  return (
    vitalsForm.respiratoryRate ||
    vitalSignsData.value?.respiratoryRate ||
    0
  )
})

const getCurrentOxygenSaturation = computed(() => {
  return (
    vitalsForm.oxygenSaturation ||
    vitalSignsData.value?.oxygenSaturation ||
    0
  )
})

const getCurrentPainScale = computed(() => {
  return (
    vitalsForm.painScale || vitalSignsData.value?.painScale || 0
  )
})

const getCurrentConsciousness = computed(() => {
  return (
    vitalsForm.consciousness ||
    vitalSignsData.value?.consciousness ||
    0
  )
})

const getVitalSignsScore = computed(() => {
  return vitalSignsData.value?.vitalSignsScore || 0
})

const getAgeScore = computed(() => {
  return vitalSignsData.value?.ageScore || 0
})

const getPainScore = computed(() => {
  return vitalSignsData.value?.painScore || 0
})

const getConsciousnessScore = computed(() => {
  return vitalSignsData.value?.consciousnessScore || 0
})

const calculateBMI = computed(() => {
  const weight = vitalsForm.weight
  const height = vitalsForm.height
  if (weight && height && weight > 0 && height > 0) {
    return Number((weight / ((height / 100) * (height / 100))).toFixed(1))
  }
  return 0
})

const getLatestUpdate = computed(() => {
  return vitalSignsData.value?.lastUpdated || '--'
})

// Methods
async function fetchAppointmentInfo(id: string) {
  try {
    loading.value = true
    console.log(`Fetching appointment info for appointment ID: ${id}`)
    const response = await axiosInstance.get(`/appointments/${id}`)
    appointmentInfo.value = response.data

    if (appointmentInfo.value?._links) {
      patientUrl.value = appointmentInfo.value._links.patient
      staffUrl.value = appointmentInfo.value._links.staff
      recordUrl.value = appointmentInfo.value._links.record
      selfUrl.value = appointmentInfo.value._links.self
      insuranceUrl.value = appointmentInfo.value._links.primary_insurance
      serviceUrl.value = appointmentInfo.value._links.service
    }

    console.log('Appointment info response:', appointmentInfo.value)
  } catch (error: any) {
    console.error('Error fetching appointment info:', error)
    console.error('Error details:', error.response?.data || error.message)
  } finally {
    loading.value = false
  }
}

async function fetchNextAppointmentInfo() {
  if (!appointmentInfo.value?.id) return
  try {
    const nextId = Number(appointmentInfo.value.id) + 1
    console.log(`Fetching next appointment info for appointment ID: ${nextId}`)
    const response = await axiosInstance.get(`/appointments/${nextId}/`)
    nextAppointmentInfo.value = response.data
  } catch (error: any) {
    console.error('Error fetching next appointment info:', error)
  }
}

async function fetchInsuranceInfo() {
  if (!insuranceUrl.value) return
  try {
    const response = await axiosInstance.get(insuranceUrl.value)
    insuranceInfo.value = response.data
  } catch (error: any) {
    console.error('Error fetching insurance info:', error)
  }
}

async function fetchServiceInfo() {
  if (!serviceUrl.value) return
  try {
    const response = await axiosInstance.get(serviceUrl.value)
    serviceInfo.value = response.data
  } catch (error: any) {
    console.error('Error fetching service info:', error)
  }
}

async function fetchVitalSignsInfo() {
  if (!recordUrl.value) return
  try {
    console.log(`Fetching vital signs data for record with url: ${recordUrl.value}`)
    const response = await axiosInstance.get(`${recordUrl.value}vitals/`)
    const vitalSigns = response.data

    if (!Array.isArray(vitalSigns) || vitalSigns.length === 0) {
      console.warn('No vital signs data found.')
      vitalSignsData.value = null
      vitalSignsHistory.value = []
      return
    }

    vitalSignsHistory.value = vitalSigns

    const latest = vitalSigns[vitalSigns.length - 1]
    vitalSignsData.value = {
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
      vitalSignsScore: latest.scores?.vital_signs ?? 0,
      ageScore: latest.scores?.age ?? 0,
      painScore: latest.scores?.pain ?? 0,
      consciousnessScore: latest.scores?.consciousness ?? 0,
      triageScore: latest.scores?.triage ?? 0,
      notes: latest.notes ?? '',
      lastUpdated: latest.created_at ? new Date(latest.created_at).toLocaleString() : null,
    }

    // Pre-fill form with latest data if needed, or keep it clean for new entry
    // vitalsForm.weight = latest.weight
    // vitalsForm.height = latest.height

    console.log('Fetched vital signs data:', vitalSignsData.value)
  } catch (error: any) {
    console.error('Error fetching vital signs data:', error)
    vitalSignsData.value = null
  }
  updateTriageStatus()
}

function updateTriageStatus() {
  const score = getTriageScore.value
  const level = triageLevels.find((l) => score >= l.min && score <= l.max)
  triageStatus.value = level ? level.name : 'Unknown'
}

function updateVitalSigns() {
  // Placeholder for any immediate logic on input
}

function clearVitalsForm() {
  vitalsForm.bloodPressure = { systolic: null, diastolic: null }
  vitalsForm.heartRate = null
  vitalsForm.temperature = null
  vitalsForm.oxygenSaturation = null
  vitalsForm.respiratoryRate = null
  vitalsForm.weight = null
  vitalsForm.height = null
  vitalsForm.painScale = null
  vitalsForm.consciousness = null
  vitalsForm.notes = ''
  updateVitalSigns()
}

async function saveVitals() {
  if (!recordUrl.value) return
  isSaving.value = true
  try {
    const payload = {
      systolic_bp: vitalsForm.bloodPressure.systolic,
      diastolic_bp: vitalsForm.bloodPressure.diastolic,
      heart_rate: vitalsForm.heartRate,
      temperature: vitalsForm.temperature,
      oxygen_saturation: vitalsForm.oxygenSaturation,
      respiratory_rate: vitalsForm.respiratoryRate,
      weight: vitalsForm.weight,
      height: vitalsForm.height,
      pain_level: vitalsForm.painScale,
      consciousness: vitalsForm.consciousness,
      notes: vitalsForm.notes,
    }

    await axiosInstance.post(`${recordUrl.value}vitals/`, payload)
    
    // Refresh data
    await fetchVitalSignsInfo()
    
    console.log('Vitals saved successfully!', payload)
    clearVitalsForm()
  } catch (err) {
    console.error('Error saving vitals:', err)
  } finally {
    isSaving.value = false
  }
}

async function confirmTriage() {
  if (!selfUrl.value) return
  try {
    await axiosInstance.patch(selfUrl.value, { is_confirmed: true, status: 'CHECKED-IN' })
    // Refresh appointment info to update status
    if (appointmentInfo.value?.id) {
      await fetchAppointmentInfo(appointmentInfo.value.id)
    }
  } catch (error) {
    console.error('Error confirming triage:', error)
  }
}

async function loadNextPatient() {
  try {
    loading.value = true
    await fetchNextAppointmentInfo()
    if (nextAppointmentInfo.value && nextAppointmentInfo.value.id) {
      await router.replace({
        name: 'NursingPatientVitals',
        params: { id: nextAppointmentInfo.value.id },
      })
      // Re-fetch everything for the new ID
      const newId = nextAppointmentInfo.value.id
      await fetchAppointmentInfo(newId)
      await fetchInsuranceInfo()
      await fetchVitalSignsInfo()
      await fetchServiceInfo()
      await fetchNextAppointmentInfo()
    } else {
      // toast.info('No next patient in queue.')
    }
  } catch (error) {
    console.error('Error loading next patient:', error)
  } finally {
    loading.value = false
  }
}

function editVital(vital: VitalSignsData) {
  // Populate form with vital data
  vitalsForm.bloodPressure.systolic = vital.systolic_bp ?? null
  vitalsForm.bloodPressure.diastolic = vital.diastolic_bp ?? null
  vitalsForm.heartRate = vital.heart_rate ?? null
  vitalsForm.temperature = vital.temperature ?? null
  vitalsForm.oxygenSaturation = vital.oxygen_saturation ?? null
  vitalsForm.respiratoryRate = vital.respiratory_rate ?? null
  vitalsForm.weight = vital.weight ?? null
  vitalsForm.height = vital.height ?? null
  vitalsForm.painScale = vital.pain_level ?? null
  vitalsForm.consciousness = vital.consciousness ?? null
  vitalsForm.notes = vital.notes ?? ''
}

async function deleteVital(vital: VitalSignsData) {
  if (!confirm('Are you sure you want to delete this vital record?')) return
  // Implement delete logic if API supports it
  console.log('Delete vital:', vital)
}

function reassessTriage() {
  updateTriageStatus()
}

// Class Helpers
function getVitalSignsScoreClass() {
  const score = getVitalSignsScore.value
  if (score >= 5) return 'bg-danger text-white'
  if (score >= 3) return 'bg-warning text-dark'
  if (score >= 1) return 'bg-primary text-white'
  return 'bg-success text-white'
}

function getPainScoreClass() {
  const pain = getCurrentPainScale.value
  if (pain >= 7) return 'bg-danger text-white'
  if (pain >= 4) return 'bg-warning text-dark'
  return 'bg-success text-white'
}

function getConsciousnessScoreClass() {
  const consciousness = getConsciousnessScore.value
  if (consciousness >= 3) return 'bg-danger text-white'
  if (consciousness >= 2) return 'bg-warning text-dark'
  if (consciousness >= 1) return 'bg-primary text-white'
  return 'bg-success text-white'
}

function getAgeScoreClass() {
  const age = getAgeScore.value
  if (age >= 2) return 'bg-warning text-dark'
  if (age >= 1) return 'bg-primary text-white'
  return 'bg-success text-white'
}

function priorityClass(levelName: string) {
  if (levelName === 'Critical') return 'border-danger'
  if (levelName === 'Urgent') return 'border-warning'
  if (levelName === 'Stable') return 'border-success'
  return 'border-light'
}

function triageStatusClass() {
  if (triageStatus.value == 'Urgent') return ' bg-warning text-white'
  if (triageStatus.value == 'Critical') return 'bg-danger text-white'
  return 'bg-success text-white'
}

function triageScoreCircleClass() {
  if (getTriageScore.value >= 7) return 'border-danger text-danger'
  if (getTriageScore.value >= 4) return ' border-warning text-warning'
  return 'border-success text-success'
}

// Lifecycle
onMounted(async () => {
  const id = route.params.id as string
  if (id) {
    await fetchAppointmentInfo(id)
    await fetchInsuranceInfo()
    await fetchVitalSignsInfo()
    await fetchServiceInfo()
    await fetchNextAppointmentInfo()
  } else {
    console.warn('Missing appointment ID')
  }
})

</script>

<style scoped>
/* Add any component-specific styles here */
</style>
