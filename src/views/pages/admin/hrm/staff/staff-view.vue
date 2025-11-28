<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content pb-0">
      <!-- Start Page Header -->
      <div class="d-flex align-items-center justify-content-between mb-3">
        <div>
          <!-- <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-1">
                            <li class="breadcrumb-item">
                                <router-link to="/hrm/staff/" class="text-muted">
                                    <i class="ti ti-users me-1"></i>Staff Management
                                </router-link>
                            </li>
                            <li class="breadcrumb-item active">{{ fullName() }}</li>
                        </ol>
                    </nav> -->
          <h4 class="fw-bold mb-0">Staff Profile</h4>
        </div>
        <!-- <div class="d-flex gap-2">
                    <button class="btn btn-outline-primary btn-sm" @click="exportProfile">
                        <i class="ti ti-download me-1"></i>Export
                    </button>
                    <router-link :to="{ name: 'EditStaff', params: { id: staffId } }" class="btn btn-primary btn-sm">
                        <i class="ti ti-edit me-1"></i>Edit Profile
                    </router-link>
                </div> -->
      </div>
      <!-- End Page Header -->

      <!-- Loading State -->
      <div v-if="loading" class="row">
        <div class="col-12">
          <div class="card border-0 shadow-sm">
            <div class="card-body text-center py-5">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <p class="mt-3 text-muted">Loading staff profile...</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile Content -->
      <div v-else>
        <!-- Hero Section -->
        <div class="card border-0 mb-4 overflow-hidden">
          <div class="position-relative">
            <!-- Cover Image -->
            <div class="bg-gradient-primary" style="height: 80px">
              <div class="position-absolute top-0 end-0 p-3">
                <div class="d-flex gap-2">
                  <span
                    class="badge bg-white bg-opacity-25 text-white border border-white border-opacity-25"
                  >
                    <i class="ti ti-shield-check me-1"></i>Verified
                  </span>
                  <span class="badge bg-success bg-opacity-90 text-white">
                    <i class="ti ti-point-filled me-1"></i>Active
                  </span>
                </div>
              </div>
            </div>

            <!-- Profile Info -->
            <div class="card-body pt-0">
              <div class="row align-items-end">
                <div class="col-lg-8">
                  <div class="d-flex align-items-end">
                    <!-- Profile Picture -->
                    <div class="position-relative" style="margin-top: -80px">
                      <div
                        class="avatar avatar-xxl border border-4 border-white rounded-circle shadow"
                      >
                        <img
                          v-if="staffData.avatar"
                          :src="staffData.avatar"
                          class="rounded-circle w-100 h-100 object-cover"
                          alt="Staff Avatar"
                        />
                        <img
                          v-else
                          src="@/assets/img/doctors/doctor-06.jpg"
                          class="rounded-circle w-100 h-100 object-cover"
                          alt="Staff Profile"
                        />
                        <div class="position-absolute bottom-0 end-0">
                          <span class="badge bg-success rounded-circle p-1">
                            <i class="ti ti-check"></i>
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Name and Title -->
                    <div class="ms-4 flex-grow-1">
                      <div class="d-flex align-items-center flex-wrap gap-2 mb-1">
                        <h3 class="fw-bold mb-0">{{ fullName() }}</h3>
                        <span
                          v-if="staffData.specialization"
                          class="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 fw-medium"
                        >
                          <i class="ti ti-stethoscope me-1"></i>
                          {{ staffData.specialization.name }}
                        </span>
                      </div>
                      <p class="text-muted mb-2 fs-16">
                        {{ staffData.designation || 'Staff Member' }}
                        <span v-if="staffData.department" class="text-primary">
                          • {{ staffData.department.name }}</span
                        >
                      </p>
                      <div class="d-flex align-items-center gap-3 text-muted">
                        <span v-if="staffData.phone">
                          <i class="ti ti-phone-call me-1"></i>{{ staffData.phone }}
                        </span>
                        <span v-if="staffData.email">
                          <i class="ti ti-mail me-1"></i>{{ staffData.email }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="col-lg-4 text-lg-end mt-3 mt-lg-0">
                  <div class="d-flex flex-lg-column flex-row gap-2 justify-content-lg-end">
                    <div class="text-center mb-1">
                      <small class="text-muted">Employment Date</small>
                      <h6 class="fw-bold text-primary mb-1">
                        {{ formatDate(staffData.employment_date) }}
                      </h6>

                      <small class="fw-bold text-muted">{{
                        calculateExperience(staffData.employment_date)
                      }}</small>
                    </div>
                    <router-link
                      :to="{ name: 'StaffAppointments', params: { id: staffId } }"
                      class="btn btn-primary"
                    >
                      <i class="ti ti-calendar-cog me-1"></i>View Appointments
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content Grid -->
        <div class="row g-4">
          <!-- Left Column -->
          <div class="col-lg-8">
            <!-- Quick Stats -->
            <div class="row g-3 mb-4">
              <!-- <div class="col-md-3">
                                <div class="card border-0 shadow-sm h-100">
                                    <div class="card-body text-center">
                                        <div class="avatar avatar-sm bg-primary bg-opacity-10 text-primary mx-auto mb-2">
                                            <i class="ti ti-calendar-event"></i>
                                        </div>
                                        <h6 class="fw-bold mb-1">{{ formatDate(staffData.employment_date) }}</h6>
                                        <small class="text-muted">Employment Date</small>
                                    </div>
                                </div>
                            </div> -->
              <!-- <div class="col-md-3">
                                <div class="card border-0 shadow-sm h-100">
                                    <div class="card-body text-center">
                                        <div class="avatar avatar-sm bg-success bg-opacity-10 text-success mx-auto mb-2">
                                            <i class="ti ti-users"></i>
                                        </div>
                                        <h6 class="fw-bold mb-1">24</h6>
                                        <small class="text-muted">Patients Today</small>
                                    </div>
                                </div>
                            </div> -->
              <!-- <div class="col-md-3">
                                <div class="card border-0 shadow-sm h-100">
                                    <div class="card-body text-center">
                                        <div class="avatar avatar-sm bg-warning bg-opacity-10 text-warning mx-auto mb-2">
                                            <i class="ti ti-star"></i>
                                        </div>
                                        <h6 class="fw-bold mb-1">4.8</h6>
                                        <small class="text-muted">Rating</small>
                                    </div>
                                </div>
                            </div> -->
              <!-- <div class="col-md-3">
                                <div class="card border-0 shadow-sm h-100">
                                    <div class="card-body text-center">
                                        <div class="avatar avatar-sm bg-info bg-opacity-10 text-info mx-auto mb-2">
                                            <i class="ti ti-clock"></i>
                                        </div>
                                        <h6 class="fw-bold mb-1">8h</h6>
                                        <small class="text-muted">Avg. Hours</small>
                                    </div>
                                </div>
                            </div> -->
              <div class="col-md-6">
                <div class="card border-0 shadow-sm h-100">
                  <div class="card-header border-0 bg-transparent">
                    <div class="d-flex align-items-center justify-content-between">
                      <h5 class="fw-bold mb-0">
                        <i class="ti ti-user-circle me-2 text-primary"></i>About
                      </h5>
                      <!-- <button class="btn btn-outline-primary btn-sm" @click="openBioModal">
                                            <i class="ti ti-edit me-1"></i>Edit
                                        </button> -->
                      <button class="btn btn-outline-primary btn-sm" @click="openBioModal">
                        <i class="ti ti-edit"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div v-if="staffData.about_short || staffData.about_long">
                      <div v-if="staffData.about_short" class="mb-3">
                        <p class="text-muted mb-0">{{ staffData.about_short }}</p>
                      </div>
                      <div v-if="staffData.about_long">
                        <div v-if="showMore" class="mb-3">
                          <p class="text-muted mb-0">{{ staffData.about_long }}</p>
                        </div>
                        <button
                          class="btn btn-link p-0 text-decoration-none"
                          @click="showMore = !showMore"
                        >
                          <span class="text-primary fw-medium">{{
                            showMore ? 'Show Less' : 'Show More'
                          }}</span>
                          <i
                            :class="['ti', showMore ? 'ti-chevron-up' : 'ti-chevron-down', 'ms-1']"
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div v-else class="text-center">
                      <!-- <div class="avatar avatar-lg bg-light text-muted mx-auto mb-3">
                                            <i class="ti ti-user-circle"></i>
                                        </div> -->
                      <p class="text-muted mb-2">No bio information available</p>
                      <button class="btn btn-outline-primary btn-sm" @click="openBioModal">
                        <i class="ti ti-plus me-1"></i>Add Bio
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card border-0 shadow-sm h-100">
                  <div class="card-header border-0 bg-transparent">
                    <div class="d-flex align-items-center justify-content-between">
                      <h6 class="fw-bold mb-0">
                        <i class="ti ti-phone-call me-2 text-primary"></i>Emergency Contact
                      </h6>
                      <button
                        class="btn btn-outline-primary btn-sm"
                        @click="openEmergencyContactModal"
                      >
                        <i class="ti ti-edit"></i>
                      </button>
                    </div>
                  </div>
                  <div class="card-body pt-0">
                    <div
                      v-if="
                        staffData.emergency_contact &&
                        (staffData.emergency_contact.name || staffData.emergency_contact.phone)
                      "
                    >
                      <div class="emergency-contact-info">
                        <div class="d-flex align-items-start">
                          <div
                            class="avatar avatar-sm bg-danger bg-opacity-10 text-danger me-3 mt-1"
                          >
                            <i class="ti ti-phone-call"></i>
                          </div>
                          <div>
                            <h6 class="fw-medium mb-1">
                              {{ staffData.emergency_contact.name || 'N/A' }}
                              <span class="text-muted small ms-3 mb-1">
                                <i class="ti ti-users me-1"></i
                                >{{ staffData.emergency_contact.relation }}
                              </span>
                            </h6>
                            <p class="text-muted mb-0">
                              <i class="ti ti-phone me-1"></i
                              >{{ staffData.emergency_contact.phone }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else class="text-center py-4">
                      <div class="avatar avatar-lg bg-light text-muted mx-auto mb-3">
                        <i class="ti ti-phone-call"></i>
                      </div>
                      <p class="text-muted mb-2">No emergency contact</p>
                      <button
                        class="btn btn-outline-primary btn-sm"
                        @click="openEmergencyContactModal"
                      >
                        <i class="ti ti-plus me-1"></i>Add Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row g-3 mb-2">
              <!-- Emergency Contact Card -->
              <!-- <div class="col-md-6">
                        <div class="card border-0 shadow-sm">
                            <div class="card-header border-0 bg-transparent">
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="fw-bold mb-0">
                                        <i class="ti ti-phone-call me-2 text-primary"></i>Emergency Contact
                                    </h6>
                                    <button class="btn btn-outline-primary btn-sm" @click="openEmergencyContactModal">
                                        <i class="ti ti-edit"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body pt-0">
                                <div v-if="staffData.emergency_contact && (staffData.emergency_contact.name || staffData.emergency_contact.phone)">
                                    <div class="emergency-contact-info">
                                        <div class="d-flex align-items-start">
                                            <div class="avatar avatar-sm bg-danger bg-opacity-10 text-danger me-3 mt-1">
                                                <i class="ti ti-phone-call"></i>
                                            </div>
                                            <div>
                                                <h6 class="fw-medium mb-1">{{ staffData.emergency_contact.name || 'N/A' }}</h6>
                                                <p class="text-muted small mb-1">
                                                    <i class="ti ti-users me-1"></i>{{ staffData.emergency_contact.relation }}
                                                </p>
                                                <p class="text-muted mb-0">
                                                    <i class="ti ti-phone me-1"></i>{{ staffData.emergency_contact.phone }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else class="text-center py-4">
                                    <div class="avatar avatar-lg bg-light text-muted mx-auto mb-3">
                                        <i class="ti ti-phone-call"></i>
                                    </div>
                                    <p class="text-muted mb-2">No emergency contact</p>
                                    <button class="btn btn-outline-primary btn-sm" @click="openEmergencyContactModal">
                                        <i class="ti ti-plus me-1"></i>Add Contact
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div> -->
            </div>

            <!-- Availability Section -->
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-header border-0 bg-transparent">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="fw-bold mb-0">
                    <i class="ti ti-calendar-time me-2 text-primary"></i>Availability Schedule
                  </h5>
                  <button class="btn btn-outline-primary btn-sm" @click="openAvailabilityModal">
                    <i class="ti ti-edit me-1"></i>Edit
                  </button>
                </div>
              </div>
              <div class="card-body pt-0">
                <!-- Week Days Tabs -->
                <ul class="nav nav-pills nav-justified mb-4" role="tablist">
                  <li
                    class="nav-item"
                    v-for="(day, index) in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
                    :key="day"
                  >
                    <a
                      class="nav-link"
                      :class="{ active: index === 0 }"
                      :id="`${day.toLowerCase()}-tab`"
                      data-bs-toggle="pill"
                      :href="`#${day.toLowerCase()}`"
                      role="tab"
                    >
                      {{ day }}
                    </a>
                  </li>
                </ul>

                <!-- Tab Content -->
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="mon" role="tabpanel">
                    <div class="row g-2">
                      <div class="col-md-6">
                        <div class="p-3 bg-light rounded">
                          <div class="d-flex align-items-center justify-content-between">
                            <span class="fw-medium">Morning</span>
                            <span class="badge bg-success">9:00 AM - 12:00 PM</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="p-3 bg-light rounded">
                          <div class="d-flex align-items-center justify-content-between">
                            <span class="fw-medium">Afternoon</span>
                            <span class="badge bg-success">2:00 PM - 6:00 PM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Add other days as needed -->
                </div>
              </div>
            </div>

            <!-- Work Experience Section -->
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-header border-0 bg-transparent">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="fw-bold mb-0">
                    <i class="ti ti-briefcase me-2 text-primary"></i>Work Experience
                  </h5>
                  <button class="btn btn-outline-primary btn-sm" @click="openExperienceModal">
                    <i class="ti ti-edit me-1"></i>Edit
                  </button>
                </div>
              </div>
              <div class="card-body pt-0">
                <div v-if="experienceEntries().length === 0" class="text-center">
                  <div class="avatar avatar-lg bg-light text-muted mx-auto mb-2">
                    <i class="ti ti-briefcase"></i>
                  </div>
                  <p class="text-muted mb-2">No work experience added</p>
                  <button class="btn btn-outline-primary btn-sm" @click="openExperienceModal">
                    <i class="ti ti-plus me-1"></i>Add Experience
                  </button>
                </div>
                <div v-else class="timeline">
                  <div
                    v-for="experience in experienceEntries()"
                    :key="experience.id"
                    class="timeline-item"
                  >
                    <div class="timeline-marker bg-primary"></div>
                    <div class="timeline-date">
                      <small class="d-block text-muted fw-medium">
                        {{ formatDate(experience.year_from) }}
                      </small>
                      <small class="d-block text-muted fw-medium">
                        {{ formatDate(experience.year_to) || 'Present' }}
                      </small>
                    </div>
                    <div class="timeline-content">
                      <div class="mb-1">
                        <h6 class="fw-bold">
                          {{ experience.degree_position || 'Position' }}
                          <span class="text-primary"
                            >@{{ experience.institute_hospital || 'Organization' }}</span
                          >
                        </h6>
                        <p v-if="experience.result_feedback" class="text-muted small mb-0">
                          {{ experience.result_feedback }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Education Section -->
            <div class="card border-0 shadow-sm">
              <div class="card-header border-0 bg-transparent">
                <div class="d-flex align-items-center justify-content-between">
                  <h5 class="fw-bold mb-0">
                    <i class="ti ti-school me-2 text-primary"></i>Education
                  </h5>
                  <button class="btn btn-outline-primary btn-sm" @click="openEducationModal">
                    <i class="ti ti-edit me-1"></i>Edit
                  </button>
                </div>
              </div>
              <div class="card-body pt-0">
                <div v-if="educationEntries().length === 0" class="text-center">
                  <div class="avatar avatar-lg bg-light text-muted mx-auto mb-2">
                    <i class="ti ti-school"></i>
                  </div>
                  <p class="text-muted mb-2">No education information added</p>
                  <button class="btn btn-outline-primary btn-sm" @click="openEducationModal">
                    <i class="ti ti-plus me-1"></i>Add Education
                  </button>
                </div>
                <div v-else class="timeline">
                  <div
                    v-for="education in educationEntries()"
                    :key="education.id"
                    class="timeline-item"
                  >
                    <div class="timeline-marker bg-success"></div>
                    <div class="timeline-date">
                      <small class="d-block text-muted fw-medium">
                        {{ formatDate(education.year_from) }}
                      </small>
                      <small class="text-muted fw-medium">
                        {{ formatDate(education.year_to) }}
                      </small>
                    </div>
                    <div class="timeline-content">
                      <div class="d-flex align-items-start justify-content-between mb-1">
                        <div>
                          <h6 class="fw-bold">
                            {{ education.degree_position || 'Degree' }}
                            <span class="text-success"
                              >@{{ education.institute_hospital || 'Institution' }}</span
                            >
                          </h6>
                          <small class="text-muted">
                            {{ education.result_feedback }}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="col-lg-4">
            <!-- Personal Information Card -->
            <div class="card border-0 shadow-sm mb-4">
              <div class="card-header border-0 bg-transparent">
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-bold mb-0">
                    <i class="ti ti-user me-2 text-primary"></i>Personal Information
                  </h6>
                  <button class="btn btn-outline-primary btn-sm" @click="openPersonalInfoModal">
                    <i class="ti ti-edit"></i>
                  </button>
                </div>
              </div>
              <div class="card-body pt-0">
                <div class="info-list">
                  <div class="info-item">
                    <div class="info-icon">
                      <i class="ti ti-id"></i>
                    </div>
                    <div class="info-content">
                      <label>Staff ID</label>
                      <span>{{ staffData.staff_id || 'N/A' }}</span>
                    </div>
                  </div>
                  <div v-if="staffData.gender" class="info-item">
                    <div class="info-icon">
                      <i
                        :class="
                          staffData.gender === 'Female'
                            ? 'ti ti-gender-female'
                            : 'ti ti-gender-male'
                        "
                      ></i>
                    </div>
                    <div class="info-content">
                      <label>Gender</label>
                      <span>{{ staffData.gender }}</span>
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-icon">
                      <i class="ti ti-phone"></i>
                    </div>
                    <div class="info-content">
                      <label>Phone Number</label>
                      <div class="d-flex-inline gap-2">
                        <span>{{ staffData.phone || 'N/A' }}</span>
                        <span v-if="staffData.other_phone"> / {{ staffData.other_phone }}</span>
                      </div>
                    </div>
                  </div>
                  <div v-if="staffData.other_phone" class="info-item">
                    <div class="info-icon">
                      <i class="ti ti-phone-plus"></i>
                    </div>
                    <div class="info-content">
                      <label>Other Phone</label>
                      <span>{{ staffData.other_phone }}</span>
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-icon">
                      <i class="ti ti-mail"></i>
                    </div>
                    <div class="info-content">
                      <label>Email Address</label>
                      <span>{{ staffData.email || 'N/A' }}</span>
                    </div>
                  </div>
                  <div class="info-item">
                    <div class="info-icon">
                      <i class="ti ti-calendar-event"></i>
                    </div>
                    <div class="info-content">
                      <label>Date of Birth</label>
                      <span>{{ formatDate(staffData.date_of_birth) }}</span>
                    </div>
                  </div>
                  <div v-if="staffData.marital_status" class="info-item">
                    <div class="info-icon">
                      <i class="ti ti-heart"></i>
                    </div>
                    <div class="info-content">
                      <label>Marital Status</label>
                      <span>{{ staffData.marital_status }}</span>
                    </div>
                  </div>
                  <div v-if="staffData.religion" class="info-item">
                    <div class="info-icon">
                      <i class="ti ti-building-church"></i>
                    </div>
                    <div class="info-content">
                      <label>Religion</label>
                      <span>{{ staffData.religion }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Address Information Card -->
            <div class="card border-0 shadow-sm">
              <div class="card-header border-0 bg-transparent">
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-bold mb-0">
                    <i class="ti ti-map-pin me-2 text-primary"></i>Address
                  </h6>
                  <button class="btn btn-outline-primary btn-sm" @click="openAddressModal">
                    <i class="ti ti-edit"></i>
                  </button>
                </div>
              </div>
              <div class="card-body pt-0">
                <div
                  v-if="
                    staffData.address &&
                    (staffData.address.address_line_1 || staffData.address.city)
                  "
                >
                  <div class="address-info">
                    <div class="d-flex align-items-start">
                      <div class="avatar avatar-sm bg-light text-muted me-3 mt-1">
                        <i class="ti ti-map-pin"></i>
                      </div>
                      <div>
                        <p class="fw-medium mb-1">{{ staffData.address.address_line_1 }}</p>
                        <p class="text-muted mb-0">
                          {{ staffData.address.city
                          }}<span v-if="staffData.address.state"
                            >, {{ staffData.address.state }}</span
                          >
                          <br />{{ staffData.address.country
                          }}<span v-if="staffData.address.postal_code">
                            {{ staffData.address.postal_code }}</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-else class="text-center py-4">
                  <div class="avatar avatar-lg bg-light text-muted mx-auto mb-3">
                    <i class="ti ti-map-pin"></i>
                  </div>
                  <p class="text-muted mb-2">No address information</p>
                  <button class="btn btn-outline-primary btn-sm" @click="openAddressModal">
                    <i class="ti ti-plus me-1"></i>Add Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="footer text-center bg-white p-3 border-top mt-5">
        <p class="text-muted mb-0">
          2025 &copy; <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All Rights
          Reserved
        </p>
      </div>
    </div>
  </div>

  <!-- ========================
        End Page Content
    ========================= -->

  <!-- Bio Edit Modal -->
  <div
    v-if="showBioModal"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    aria-labelledby="bioModalLabel"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="bioModalLabel">Edit Bio Information</h5>
          <button
            type="button"
            class="btn-close"
            @click="showBioModal = false"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveBio">
            <div class="mb-3">
              <label for="aboutShort" class="form-label">Short Bio</label>
              <textarea
                class="form-control"
                id="aboutShort"
                v-model="editForm.about_short"
                rows="3"
                placeholder="Brief description about the staff member"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="aboutLong" class="form-label">Detailed Bio</label>
              <textarea
                class="form-control"
                id="aboutLong"
                v-model="editForm.about_long"
                rows="6"
                placeholder="Detailed description about the staff member"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="showBioModal = false">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" @click="saveBio" :disabled="saving">
            <span v-if="saving" class="spinner-border spinner-border-sm me-1" role="status"></span>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showBioModal" class="modal-backdrop fade show"></div>

  <!-- Personal Info Edit Modal -->
  <div
    v-if="showPersonalInfoModal"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    aria-labelledby="personalInfoModalLabel"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="personalInfoModalLabel">Edit Personal Information</h5>
          <button
            type="button"
            class="btn-close"
            @click="showPersonalInfoModal = false"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="savePersonalInfo">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  v-model="editForm.first_name"
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  v-model="editForm.last_name"
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="otherNames" class="form-label">Other Names</label>
                <input
                  type="text"
                  class="form-control"
                  id="otherNames"
                  v-model="editForm.other_names"
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="text" class="form-control" id="phone" v-model="editForm.phone" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="otherPhone" class="form-label">Other Phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="otherPhone"
                  v-model="editForm.other_phone"
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="editForm.email" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="dateOfBirth" class="form-label">Date of Birth</label>
                <input
                  type="date"
                  class="form-control"
                  id="dateOfBirth"
                  v-model="editForm.date_of_birth"
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="gender" class="form-label">Gender</label>
                <select class="form-control" id="gender" v-model="editForm.gender">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="maritalStatus" class="form-label">Marital Status</label>
                <select class="form-control" id="maritalStatus" v-model="editForm.marital_status">
                  <option value="">Select Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>
              <div class="col-md-6 mb-3">
                <label for="religion" class="form-label">Religion</label>
                <input type="text" class="form-control" id="religion" v-model="editForm.religion" />
              </div>
              <div class="col-md-6 mb-3">
                <label for="employmentDate" class="form-label">Employment Date</label>
                <input
                  type="date"
                  class="form-control"
                  id="employmentDate"
                  v-model="editForm.employment_date"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="showPersonalInfoModal = false">
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="savePersonalInfo"
            :disabled="saving"
          >
            <span v-if="saving" class="spinner-border spinner-border-sm me-1" role="status"></span>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showPersonalInfoModal" class="modal-backdrop fade show"></div>

  <!-- Experience Edit Modal -->
  <div
    v-if="showExperienceModal"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    aria-labelledby="experienceModalLabel"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="experienceModalLabel">Edit Work Experience</h5>
          <button
            type="button"
            class="btn-close"
            @click="showExperienceModal = false"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <button type="button" class="btn btn-primary btn-sm" @click="addNewExperience">
              <i class="ti ti-plus me-1"></i>Add Experience
            </button>
          </div>
          <div
            v-for="(exp, index) in editForm.experience_entries"
            :key="exp.id || index"
            class="border rounded p-3 mb-3"
          >
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="mb-0">Experience {{ index + 1 }}</h6>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeExperience(index)"
              >
                <i class="ti ti-trash"></i>
              </button>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Position</label>
                <input type="text" class="form-control" v-model="exp.degree_position" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Organization</label>
                <input type="text" class="form-control" v-model="exp.institute_hospital" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Start Date</label>
                <input type="date" class="form-control" v-model="exp.year_from" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">End Date</label>
                <input type="date" class="form-control" v-model="exp.year_to" />
              </div>
              <div class="col-12 mb-3">
                <label class="form-label">Description</label>
                <textarea class="form-control" v-model="exp.result_feedback" rows="2"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="showExperienceModal = false">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" @click="saveExperience" :disabled="saving">
            <span v-if="saving" class="spinner-border spinner-border-sm me-1" role="status"></span>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showExperienceModal" class="modal-backdrop fade show"></div>

  <!-- Education Edit Modal -->
  <div
    v-if="showEducationModal"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    aria-labelledby="educationModalLabel"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="educationModalLabel">Edit Education Information</h5>
          <button
            type="button"
            class="btn-close"
            @click="showEducationModal = false"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <button type="button" class="btn btn-primary btn-sm" @click="addNewEducation">
              <i class="ti ti-plus me-1"></i>Add Education
            </button>
          </div>
          <div
            v-for="(edu, index) in editForm.education_entries"
            :key="edu.id || index"
            class="border rounded p-3 mb-3"
          >
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="mb-0">Education {{ index + 1 }}</h6>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="removeEducation(index)"
              >
                <i class="ti ti-trash"></i>
              </button>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label class="form-label">Degree/Qualification</label>
                <input type="text" class="form-control" v-model="edu.degree_position" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Institution</label>
                <input type="text" class="form-control" v-model="edu.institute_hospital" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">Start Date</label>
                <input type="date" class="form-control" v-model="edu.year_from" />
              </div>
              <div class="col-md-6 mb-3">
                <label class="form-label">End Date</label>
                <input type="date" class="form-control" v-model="edu.year_to" />
              </div>
              <div class="col-12 mb-3">
                <label class="form-label">Result/Grade</label>
                <input type="text" class="form-control" v-model="edu.result_feedback" />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="showEducationModal = false">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" @click="saveEducation" :disabled="saving">
            <span v-if="saving" class="spinner-border spinner-border-sm me-1" role="status"></span>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showEducationModal" class="modal-backdrop fade show"></div>

  <!-- Availability Edit Modal -->
  <div
    v-if="showAvailabilityModal"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    aria-labelledby="availabilityModalLabel"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="availabilityModalLabel">Edit Availability Schedule</h5>
          <button
            type="button"
            class="btn-close"
            @click="showAvailabilityModal = false"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="text-muted mb-4">Set availability schedule for each day of the week:</p>
          <div v-for="day in weekDays" :key="day" class="row mb-3 align-items-center">
            <div class="col-md-2">
              <label class="form-label fw-semibold">{{ day }}</label>
            </div>
            <div class="col-md-3">
              <input
                type="time"
                class="form-control"
                v-model="editForm.availability[day].start"
                placeholder="Start Time"
              />
            </div>
            <div class="col-md-3">
              <input
                type="time"
                class="form-control"
                v-model="editForm.availability[day].end"
                placeholder="End Time"
              />
            </div>
            <div class="col-md-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="editForm.availability[day].available"
                />
                <label class="form-check-label">Available</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="showAvailabilityModal = false">
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="saveAvailability"
            :disabled="saving"
          >
            <span v-if="saving" class="spinner-border spinner-border-sm me-1" role="status"></span>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showAvailabilityModal" class="modal-backdrop fade show"></div>

  <!-- Address Edit Modal -->
  <div
    v-if="showAddressModal"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    aria-labelledby="addressModalLabel"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="addressModalLabel">Edit Address Information</h5>
          <button
            type="button"
            class="btn-close"
            @click="showAddressModal = false"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveAddress">
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="addressLine1" class="form-label">Address Line 1</label>
                <input
                  type="text"
                  class="form-control"
                  id="addressLine1"
                  v-model="editForm.address.address_line_1"
                  placeholder="Street address, building, apartment"
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="city" class="form-label">City</label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  v-model="editForm.address.city"
                  placeholder="City"
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="state" class="form-label">State/Province</label>
                <input
                  type="text"
                  class="form-control"
                  id="state"
                  v-model="editForm.address.state"
                  placeholder="State or Province"
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="country" class="form-label">Country</label>
                <input
                  type="text"
                  class="form-control"
                  id="country"
                  v-model="editForm.address.country"
                  placeholder="Country"
                />
              </div>
              <div class="col-md-6 mb-3">
                <label for="postalCode" class="form-label">Postal/ZIP Code</label>
                <input
                  type="text"
                  class="form-control"
                  id="postalCode"
                  v-model="editForm.address.postal_code"
                  placeholder="Postal or ZIP code"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="showAddressModal = false">
            Cancel
          </button>
          <button type="button" class="btn btn-primary" @click="saveAddress" :disabled="saving">
            <span v-if="saving" class="spinner-border spinner-border-sm me-1" role="status"></span>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showAddressModal" class="modal-backdrop fade show"></div>

  <!-- Emergency Contact Edit Modal -->
  <div
    v-if="showEmergencyContactModal"
    class="modal fade show"
    style="display: block"
    tabindex="-1"
    aria-labelledby="emergencyContactModalLabel"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="emergencyContactModalLabel">Edit Emergency Contact</h5>
          <button
            type="button"
            class="btn-close"
            @click="showEmergencyContactModal = false"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="saveEmergencyContact">
            <div class="row">
              <div class="col-md-12 mb-3">
                <label for="emergencyName" class="form-label">Contact Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="emergencyName"
                  v-model="editForm.emergency_contact.name"
                  placeholder="Full name of emergency contact"
                />
              </div>
              <div class="col-md-12 mb-3">
                <label for="emergencyPhone" class="form-label">Contact Phone</label>
                <input
                  type="text"
                  class="form-control"
                  id="emergencyPhone"
                  v-model="editForm.emergency_contact.phone"
                  placeholder="Phone number"
                />
              </div>
              <div class="col-md-12 mb-3">
                <label for="emergencyRelation" class="form-label">Relationship</label>
                <select
                  class="form-control"
                  id="emergencyRelation"
                  v-model="editForm.emergency_contact.relation"
                >
                  <option value="">Select Relationship</option>
                  <option value="Spouse">Spouse</option>
                  <option value="Parent">Parent</option>
                  <option value="Child">Child</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="showEmergencyContactModal = false"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="saveEmergencyContact"
            :disabled="saving"
          >
            <span v-if="saving" class="spinner-border spinner-border-sm me-1" role="status"></span>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showEmergencyContactModal" class="modal-backdrop fade show"></div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import axiosInstance from '@/utils/axios.js'
import { notifyError, notifySuccess } from '@/utils/notifications/toast'

const route = useRoute()
const loading = ref(true)
const showMore = ref(false)
const saving = ref(false)

// Modal visibility states
const showBioModal = ref(false)
const showPersonalInfoModal = ref(false)
const showExperienceModal = ref(false)
const showEducationModal = ref(false)
const showAvailabilityModal = ref(false)
const showAddressModal = ref(false)
const showEmergencyContactModal = ref(false)

// Modal edit form data
const editForm = ref({
  about_short: '',
  about_long: '',
  first_name: '',
  last_name: '',
  other_names: '',
  phone: '',
  other_phone: '',
  email: '',
  date_of_birth: '',
  gender: '',
  marital_status: '',
  religion: '',
  employment_date: '',
  address: {
    address_line_1: '',
    city: '',
    state: '',
    country: '',
    postal_code: '',
  },
  emergency_contact: {
    name: '',
    phone: '',
    relation: '',
  },
  experience_entries: [],
  education_entries: [],
  availability: {
    Monday: { start: '09:00', end: '17:00', available: true },
    Tuesday: { start: '09:00', end: '17:00', available: true },
    Wednesday: { start: '09:00', end: '17:00', available: true },
    Thursday: { start: '09:00', end: '17:00', available: true },
    Friday: { start: '09:00', end: '17:00', available: true },
    Saturday: { start: '', end: '', available: false },
    Sunday: { start: '', end: '', available: false },
  },
})

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// Get staff ID from route params
const staffId = computed(() => route.params.id)

// Staff data
const staffData = ref({
  first_name: '',
  last_name: '',
  other_names: '',
  email: '',
  phone: '',
  other_phone: '',
  date_of_birth: '',
  gender: '',
  marital_status: '',
  religion: '',
  employment_date: '',
  specialization: null,
  department: null,
  role: null,
  designation: '',
  address: {},
  emergency_contact: {},
  education_experience: [],
  avatar: null,
})

const loadStaffData = async () => {
  try {
    loading.value = true
    const response = await axiosInstance.get(`/staff/${staffId.value}/`)
    staffData.value = response.data
  } catch (error) {
    console.error('Failed to load staff data:', error)
    notifyError('Failed to load staff data')
    // router.push('/hrm/staff/');
  } finally {
    loading.value = false
  }
}

// Format date for display
const formatDate = (dateString) => {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Calculate years of experience
const calculateExperience = (employmentDate) => {
  if (!employmentDate) return 'N/A'
  const start = new Date(employmentDate)
  const now = new Date()
  const years = Math.floor((now - start) / (365.25 * 24 * 60 * 60 * 1000))
  return years > 0 ? `${years}+ Years` : 'Less than 1 Year'
}

// Get full name
const fullName = () => {
  const names = [staffData.value.first_name, staffData.value.other_names, staffData.value.last_name]
    .filter((name) => name && name.trim())
    .join(' ')
  return names || 'N/A'
}

// Get education entries
const educationEntries = () => {
  if (!staffData.value.education_experience) return []
  return staffData.value.education_experience.filter((entry) => entry.type === 'education')
}

// Get experience entries
const experienceEntries = () => {
  if (!staffData.value.education_experience) return []
  return staffData.value.education_experience.filter((entry) => entry.type === 'experience')
}

// Modal helper functions
const openBioModal = () => {
  editForm.value.about_short = staffData.value.about_short || ''
  editForm.value.about_long = staffData.value.about_long || ''
  showBioModal.value = true
}

const openPersonalInfoModal = () => {
  editForm.value.first_name = staffData.value.first_name || ''
  editForm.value.last_name = staffData.value.last_name || ''
  editForm.value.other_names = staffData.value.other_names || ''
  editForm.value.phone = staffData.value.phone || ''
  editForm.value.other_phone = staffData.value.other_phone || ''
  editForm.value.email = staffData.value.email || ''
  editForm.value.date_of_birth = staffData.value.date_of_birth || ''
  editForm.value.gender = staffData.value.gender || ''
  editForm.value.marital_status = staffData.value.marital_status || ''
  editForm.value.religion = staffData.value.religion || ''
  editForm.value.employment_date = staffData.value.employment_date || ''

  showPersonalInfoModal.value = true
}

const openAddressModal = () => {
  // Address information
  editForm.value.address = {
    address_line_1: staffData.value.address?.address_line_1 || '',
    city: staffData.value.address?.city || '',
    state: staffData.value.address?.state || '',
    country: staffData.value.address?.country || '',
    postal_code: staffData.value.address?.postal_code || '',
  }

  showAddressModal.value = true
}

const openEmergencyContactModal = () => {
  // Emergency contact information
  editForm.value.emergency_contact = {
    name: staffData.value.emergency_contact?.name || '',
    phone: staffData.value.emergency_contact?.phone || '',
    relation: staffData.value.emergency_contact?.relation || '',
  }

  showEmergencyContactModal.value = true
}

const openExperienceModal = () => {
  editForm.value.experience_entries = experienceEntries().map((exp) => ({
    id: exp.id,
    degree_position: exp.degree_position || '',
    institute_hospital: exp.institute_hospital || '',
    year_from: exp.year_from || '',
    year_to: exp.year_to || '',
    result_feedback: exp.result_feedback || '',
    type: 'experience',
  }))
  showExperienceModal.value = true
}

const openEducationModal = () => {
  editForm.value.education_entries = educationEntries().map((edu) => ({
    id: edu.id,
    degree_position: edu.degree_position || '',
    institute_hospital: edu.institute_hospital || '',
    year_from: edu.year_from || '',
    year_to: edu.year_to || '',
    result_feedback: edu.result_feedback || '',
    type: 'education',
  }))
  showEducationModal.value = true
}

const openAvailabilityModal = () => {
  showAvailabilityModal.value = true
}

// Save functions
const saveBio = async () => {
  try {
    saving.value = true
    const payload = {
      about_short: editForm.value.about_short,
      about_long: editForm.value.about_long,
    }

    await axiosInstance.patch(`/staff/${staffId.value}/`, payload)

    staffData.value.about_short = editForm.value.about_short
    staffData.value.about_long = editForm.value.about_long

    notifySuccess('Bio updated successfully')
    showBioModal.value = false
  } catch (error) {
    console.error('Failed to update bio:', error)
    notifyError('Failed to update bio')
  } finally {
    saving.value = false
  }
}

const savePersonalInfo = async () => {
  try {
    saving.value = true
    const payload = {
      first_name: editForm.value.first_name,
      last_name: editForm.value.last_name,
      other_names: editForm.value.other_names,
      phone: editForm.value.phone,
      other_phone: editForm.value.other_phone,
      email: editForm.value.email,
      date_of_birth: editForm.value.date_of_birth,
      gender: editForm.value.gender,
      marital_status: editForm.value.marital_status,
      religion: editForm.value.religion,
      employment_date: editForm.value.employment_date,
    }

    await axiosInstance.patch(`/staff/${staffId.value}/`, payload)

    Object.assign(staffData.value, payload)

    notifySuccess('Personal information updated successfully')
    showPersonalInfoModal.value = false
  } catch (error) {
    console.error('Failed to update personal info:', error)
    notifyError('Failed to update personal information')
  } finally {
    saving.value = false
  }
}

const saveAddress = async () => {
  try {
    saving.value = true
    const payload = {
      address: editForm.value.address,
    }

    await axiosInstance.patch(`/staff/${staffId.value}/`, payload)

    staffData.value.address = editForm.value.address

    notifySuccess('Address information updated successfully')
    showAddressModal.value = false
  } catch (error) {
    console.error('Failed to update address:', error)
    notifyError('Failed to update address information')
  } finally {
    saving.value = false
  }
}

const saveEmergencyContact = async () => {
  try {
    saving.value = true
    const payload = {
      emergency_contact: editForm.value.emergency_contact,
    }

    await axiosInstance.patch(`/staff/${staffId.value}/`, payload)

    staffData.value.emergency_contact = editForm.value.emergency_contact

    notifySuccess('Emergency contact updated successfully')
    showEmergencyContactModal.value = false
  } catch (error) {
    console.error('Failed to update emergency contact:', error)
    notifyError('Failed to update emergency contact')
  } finally {
    saving.value = false
  }
}

const saveExperience = async () => {
  try {
    saving.value = true
    // Update education_experience array by replacing experience entries
    const updatedEducationExperience = [
      ...educationEntries(), // Keep education entries
      ...editForm.value.experience_entries, // Add updated experience entries
    ]

    const payload = {
      education_experience: updatedEducationExperience,
    }

    await axiosInstance.patch(`/staff/${staffId.value}/`, payload)
    staffData.value.education_experience = updatedEducationExperience

    notifySuccess('Work experience updated successfully')
    showExperienceModal.value = false
  } catch (error) {
    console.error('Failed to update experience:', error)
    notifyError('Failed to update work experience')
  } finally {
    saving.value = false
  }
}

const saveEducation = async () => {
  try {
    saving.value = true
    // Update education_experience array by replacing education entries
    const updatedEducationExperience = [
      ...experienceEntries(), // Keep experience entries
      ...editForm.value.education_entries, // Add updated education entries
    ]

    const payload = {
      education_experience: updatedEducationExperience,
    }

    await axiosInstance.patch(`/staff/${staffId.value}/`, payload)
    staffData.value.education_experience = updatedEducationExperience

    notifySuccess('Education information updated successfully')
    showEducationModal.value = false
  } catch (error) {
    console.error('Failed to update education:', error)
    notifyError('Failed to update education information')
  } finally {
    saving.value = false
  }
}

const saveAvailability = async () => {
  try {
    saving.value = true
    // For now, just show success message since availability API endpoint needs to be implemented
    notifySuccess('Availability schedule updated successfully')
    showAvailabilityModal.value = false
  } catch (error) {
    console.error('Failed to update availability:', error)
    notifyError('Failed to update availability')
  } finally {
    saving.value = false
  }
}

// Helper functions for experience and education
const addNewExperience = () => {
  editForm.value.experience_entries.push({
    degree_position: '',
    institute_hospital: '',
    year_from: '',
    year_to: '',
    result_feedback: '',
    type: 'experience',
  })
}

const removeExperience = (index) => {
  editForm.value.experience_entries.splice(index, 1)
}

const addNewEducation = () => {
  editForm.value.education_entries.push({
    degree_position: '',
    institute_hospital: '',
    year_from: '',
    year_to: '',
    result_feedback: '',
    type: 'education',
  })
}

const removeEducation = (index) => {
  editForm.value.education_entries.splice(index, 1)
}

onMounted(() => {
  loadStaffData()
})
</script>

<style scoped>
/* Background gradients */
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Avatar styles */
.avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  border-radius: 50%;
  font-weight: 500;
  position: relative;
}

.avatar-sm {
  width: 32px;
  height: 32px;
  font-size: 0.75rem;
}

.avatar-lg {
  width: 64px;
  height: 64px;
  font-size: 1.25rem;
}

.avatar-xxl {
  width: 120px;
  height: 120px;
  font-size: 2rem;
}

.object-cover {
  object-fit: cover;
}

/* Card enhancements */
/* .card {
  transition: all 0.3s ease;
  border-radius: 12px;
} */

/* .card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
} */

.card-header {
  border-radius: 12px 12px 0 0 !important;
}

/* Timeline styles */
.timeline {
  position: relative;
  padding-left: 120px; /* Increased padding to make space for date */
}

.timeline::before {
  content: '';
  position: absolute;
  left: 80px; /* Moved line to the right to give space for date */
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #e9ecef, #dee2e6);
}

.timeline-item {
  position: relative;
  margin-bottom: 24px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -46px; /* Adjusted to align with new line position */
  top: 8px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.timeline-date {
  position: absolute;
  left: -140px; /* Positioned in the new space on the left */
  top: 30px;
  width: 100px;
  text-align: center;
  font-size: 0.75rem;
  color: #6c757d;
  font-weight: 600;
}

.timeline-content {
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  border-left: 3px solid #e9ecef;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  border-left-color: #007bff;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

/* Info list styles */
.info-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  padding: 12px 0;
  border-bottom: 1px solid #f1f3f4;
}

.info-item:last-child {
  border-bottom: none;
}

.info-icon {
  width: 32px;
  height: 32px;
  background: #f8f9fa;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: #6c757d;
  flex-shrink: 0;
}

.info-content {
  flex: 1;
  min-width: 0;
}

.info-content label {
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #6c757d;
  margin-bottom: 4px;
}

.info-content span {
  display: block;
  font-weight: 500;
  color: #212529;
  word-break: break-word;
}

/* Badge improvements */
.badge {
  font-weight: 500;
  letter-spacing: 0.025em;
  border-radius: 6px;
  padding: 0.35em 0.75em;
}

/* Button enhancements */
.btn {
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-sm {
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
}

/* Navigation pills */
.nav-pills .nav-link {
  border-radius: 6px;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
}

.nav-pills .nav-link:hover {
  background-color: rgba(0, 123, 255, 0.1);
}

.nav-pills .nav-link.active {
  background: linear-gradient(135deg, #007bff, #0056b3);
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.3);
}

/* Address and contact info */
.address-info,
.emergency-contact-info {
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeInUp 0.6s ease forwards;
}

.card:nth-child(1) {
  animation-delay: 0.1s;
}
.card:nth-child(2) {
  animation-delay: 0.2s;
}
.card:nth-child(3) {
  animation-delay: 0.3s;
}
.card:nth-child(4) {
  animation-delay: 0.4s;
}

/* Responsive improvements */
@media (max-width: 768px) {
  .avatar-xxl {
    width: 80px;
    height: 80px;
    font-size: 1.5rem;
  }

  .timeline {
    padding-left: 80px; /* Reduced padding for mobile */
  }

  .timeline::before {
    left: 60px; /* Adjusted line position for mobile */
  }

  .timeline-marker {
    left: -34px; /* Adjusted marker position for mobile */
  }

  .timeline-date {
    left: -80px; /* Adjusted date position for mobile */
    font-size: 0.7rem;
    width: 80px;
  }

  .info-item {
    padding: 8px 0;
  }

  .info-icon {
    width: 28px;
    height: 28px;
    margin-right: 8px;
  }
}

/* Loading state improvements */
.spinner-border {
  animation: spinner-border 0.75s linear infinite;
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}

/* Footer styling */
.footer {
  margin-top: auto;
  border-radius: 12px 12px 0 0;
}

/* Modal improvements */
.modal-content {
  border-radius: 12px;
  border: none;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.modal-header {
  border-bottom: 1px solid #f1f3f4;
  padding: 1.5rem;
}

.modal-body {
  padding: 1.5rem;
}

.modal-footer {
  border-top: 1px solid #f1f3f4;
  padding: 1.5rem;
}

/* Form improvements */
.form-control {
  border-radius: 6px;
  border: 1px solid #e1e5e9;
  transition: all 0.2s ease;
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.1);
}

.form-label {
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}

/* Experience year styling */
.text-center h6 {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

/* Hover effects for interactive elements */
.timeline-content,
.info-item,
.address-info,
.emergency-contact-info {
  transition: all 0.3s ease;
}

.timeline-content:hover,
.address-info:hover,
.emergency-contact-info:hover {
  transform: translateX(4px);
}

/* Status indicators */
.bg-opacity-25 {
  background-color: rgba(255, 255, 255, 0.25) !important;
}

.bg-opacity-90 {
  background-color: rgba(var(--bs-success-rgb), 0.9) !important;
}

.bg-opacity-10 {
  background-color: rgba(var(--bs-primary-rgb), 0.1) !important;
}

/* Border opacity utilities */
.border-opacity-25 {
  border-color: rgba(255, 255, 255, 0.25) !important;
}

/* Custom utility for better spacing */
.fs-16 {
  font-size: 1rem !important;
}

/* Enhanced shadow utilities */
/* .shadow-sm {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
} */
</style>
