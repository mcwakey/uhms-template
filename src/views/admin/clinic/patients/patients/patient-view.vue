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
                    <button class="btn btn-sm btn-primary-subtle rounded-3 fs-6" @click="openNextOfKinModal"><i class="ti ti-pencil"></i></button>
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
            </div>
          </div>
        </div>

        <!-- Right Column: Vital Signs & Medical History -->
        <div class="col-lg-8">
            <!-- Medical History -->
            <div class="card border shadow-none rounded-3 w-100 mb-4">
              <div class="card-header bg-transparent border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
                 <h5 class="fw-bold text-dark mb-0"><i class="ti ti-history me-2 text-primary"></i>{{ $t('patient_view.medical_history') }}</h5>
                 <button class="btn btn-sm btn-primary-subtle rounded-3 fs-6">
                    <i class="ti ti-plus"></i>
                 </button>
              </div>
              <div class="card-body p-4">
                 <div class="row g-4">
                    <div class="col-md-6">
                        <h6 class="fs-13 fw-bold text-muted mb-2">{{ $t('patient_view.conditions') }}</h6>
                        <div class="d-flex flex-wrap gap-2">
                           <span class="badge badge-soft-danger border border-danger fw-medium fs-12 px-2 py-1">Hypertension</span>
                           <span class="badge badge-soft-warning border border-warning fw-medium fs-12 px-2 py-1">Type 2 Diabetes</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h6 class="fs-13 fw-bold text-muted mb-2">{{ $t('patient_view.allergies') }}</h6>
                        <div class="d-flex flex-wrap gap-2">
                           <span class="badge badge-soft-info border border-info fw-medium fs-12 px-2 py-1">Penicillin</span>
                           <span class="badge badge-soft-info border border-info fw-medium fs-12 px-2 py-1">Peanuts</span>
                        </div>
                    </div>
                 </div>
              </div>
            </div>

            <!-- Current Medications -->
            <div class="card border shadow-none rounded-3 w-100 mb-4">
              <div class="card-header bg-transparent border-bottom px-4 py-3 d-flex justify-content-between align-items-center">
                 <h5 class="fw-bold text-dark mb-0"><i class="ti ti-pill me-2 text-primary"></i>{{ $t('patient_view.current_medications') }}</h5>
                 <button class="btn btn-sm btn-primary-subtle rounded-3 fs-6">
                    <i class="ti ti-plus"></i>
                 </button>
              </div>
              <div class="card-body p-0">
                 <div class="table-responsive">
                    <table class="table table-hover align-middle mb-0">
                       <thead class="table-light">
                          <tr>
                             <th class="ps-4 fs-12 text-muted fw-bold">{{ $t('patient_view.medication') }}</th>
                             <th class="fs-12 text-muted fw-bold">{{ $t('patient_view.dosage') }}</th>
                             <th class="fs-12 text-muted fw-bold">{{ $t('patient_view.frequency') }}</th>
                             <th class="text-end pe-4 fs-12 text-muted fw-bold">{{ $t('patient_view.status') }}</th>
                          </tr>
                       </thead>
                       <tbody>
                          <tr v-for="med in medications.slice(0, 3)" :key="med.id">
                             <td class="ps-4">
                                <span class="fw-semibold text-dark fs-13">{{ med.name }}</span>
                             </td>
                             <td class="fs-13">{{ med.dosage }}</td>
                             <td class="fs-13">{{ med.frequency }}</td>
                             <td class="text-end pe-4">
                                <span class="badge badge-soft-success border border-success fw-medium fs-11">Active</span>
                             </td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </div>
            </div>

           <div class="card border shadow-none rounded-3 w-100">
             <div class="card-header bg-transparent border-bottom-0 pt-4 px-4 pb-0">
               <div class="d-flex justify-content-between align-items-center mb-1">
                 <h5 class="fw-bold text-dark mb-0">
                   <i class="ti ti-shield me-2 text-primary"></i>{{ $t('patient_view.insurance') }}
                 </h5>
                 <div class="d-flex gap-2">
                   <button
                     class="btn btn-sm btn-primary-subtle rounded-3 fs-6"
                     @click="editCurrentInsurance"
                     :disabled="insurances.length === 0"
                   >
                     <i class="ti ti-pencil"></i>
                   </button>
                   <button
                     class="btn btn-sm btn-primary-subtle rounded-3 fs-6"
                     @click="openCreateInsuranceModal"
                   >
                     <i class="ti ti-plus"></i>
                   </button>
                 </div>
               </div>
             </div>
             <div class="card-body p-4">
               <div v-if="insurances.length === 0" class="text-center text-muted py-3">
                 <p class="mb-2 fs-13">{{ $t('patient_view.no_insurance_details') }}</p>
                 <button class="btn btn-sm btn-primary rounded-3" @click="openCreateInsuranceModal">
                   <i class="ti ti-plus me-1"></i>{{ $t('patient_view.add_first_insurance') }}
                 </button>
               </div>
               <div v-else class="insurance-slider-container position-relative">
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

                 <div class="d-flex overflow-hidden insurance-cards-wrapper" ref="insuranceSlider">
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

      <!-- tab start -->
      <ul class="nav nav-tabs nav-bordered mb-3">
        <li class="nav-item">
          <a
            href="javascript:void(0);"
            data-bs-toggle="tab"
            data-bs-target="#appointments"
            aria-expanded="false"
            class="nav-link active bg-transparent"
          >
            <span>{{ $t('patient_view.appointments') }}</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            href="javascript:void(0);"
            data-bs-toggle="tab"
            data-bs-target="#transactions"
            aria-expanded="true"
            class="nav-link bg-transparent"
          >
            <span>{{ $t('patient_view.transactions') }}</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#lab_results" aria-expanded="false" class="nav-link bg-transparent">
            <span>{{ $t('patient_view.lab_results') }}</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#prescriptions" aria-expanded="false" class="nav-link bg-transparent">
            <span>{{ $t('patient_view.prescriptions') }}</span>
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
                    :show-delete="false"
                    @view="openAppointmentDetails(record)"
                    @edit="editAppointment(record)"
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

        <div class="tab-pane" id="lab_results">
          <div class="table-responsive border rounded-3">
            <table class="table table-nowrap mb-0">
              <thead class="bg-light">
                <tr>
                  <th class="ps-4 py-3">{{ $t('patient_view.test') }}</th>
                  <th class="py-3">{{ $t('patient_view.date') }}</th>
                  <th class="py-3">{{ $t('patient_view.result') }}</th>
                  <th class="py-3">{{ $t('patient_view.reference_range') }}</th>
                  <th class="pe-4 py-3">{{ $t('patient_view.status') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="lab in labResults" :key="lab.id">
                  <td class="ps-4">
                    <div class="fw-semibold text-dark fs-13">{{ lab.test }}</div>
                    <div class="text-muted fs-12">{{ lab.sample }}</div>
                  </td>
                  <td class="text-muted fs-13">{{ lab.date }}</td>
                  <td class="fs-13">
                    <span :class="lab.flag === 'High' ? 'text-danger fw-semibold' : lab.flag === 'Low' ? 'text-warning fw-semibold' : 'text-dark fw-semibold'">
                      {{ lab.value }}
                    </span>
                    <span v-if="lab.unit" class="text-muted ms-1">{{ lab.unit }}</span>
                    <span v-if="lab.flag" class="text-muted ms-2">({{ lab.flag }})</span>
                  </td>
                  <td class="text-muted fs-13">{{ lab.range }}</td>
                  <td class="pe-4">
                    <span class="badge border fw-medium fs-12 badge-soft-success text-success">{{ lab.status }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="tab-pane" id="prescriptions">
          <div class="table-responsive border rounded-3">
            <table class="table table-nowrap mb-0">
              <thead class="bg-light">
                <tr>
                  <th class="ps-4 py-3">{{ $t('patient_view.prescription') }}</th>
                  <th class="py-3">{{ $t('patient_view.date') }}</th>
                  <th class="py-3">{{ $t('patient_view.doctor') }}</th>
                  <th class="py-3">{{ $t('patient_view.items') }}</th>
                  <th class="pe-4 py-3">{{ $t('patient_view.status') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="rx in prescriptions" :key="rx.id">
                  <td class="ps-4 fw-semibold text-dark fs-13">{{ rx.number }}</td>
                  <td class="text-muted fs-13">{{ rx.date }}</td>
                  <td class="text-dark fs-13">{{ rx.doctor }}</td>
                  <td class="text-muted fs-13">{{ rx.items }}</td>
                  <td class="pe-4">
                    <span
                      :class="[
                        'badge border fw-medium fs-12',
                        rx.status === 'Dispensed'
                          ? 'badge-soft-success text-success'
                          : rx.status === 'Pending'
                            ? 'badge-soft-warning text-warning'
                            : 'badge-soft-secondary text-secondary',
                      ]"
                    >
                      {{ rx.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
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
    v-if="isEditInsuranceModalVisible"
    modal-id="edit_insurance_modal"
    :modal-title="$t('edit_insurance')"
    :selected-patient="patientStore.patient"
    :insurance-data="selectedInsurance"
    @insurance-updated="handleInsuranceUpdated"
  />

  <!-- Edit Next of Kin Modal -->
  <EditNextOfKinModal
    v-if="isNextOfKinModalVisible"
    modal-id="edit_next_of_kin_modal"
    :patient-id="uuid"
    :current-data="patientStore.patient?.emergency_contact"
    @updated="handleNextOfKinUpdated"
  />

  <!-- Add Insurance Modal -->
  <AddInsuranceModal
    v-if="isInsuranceModalVisible"
    modal-id="create_insurance"
    :modal-title="$t('add_new_insurance')"
    :selected-patient="patientStore.patient"
    @insurance-added="handleInsuranceAdded"
  />

  <!-- Set Appointment Modal -->
  <SetAppointmentModal
    v-if="isSetAppointmentModalVisible"
    modal-id="set_appointment"
    :modal-title="$t('book_appointment')"
    :selected-patient="patientStore.patient"
    @appointment-created="handleAppointmentCreated"
  />

  <!-- Start Appointment Details Sidebar -->
  <div v-if="isAppointmentDetailsVisible" class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="appointment_details">
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
import { ref, onMounted, onUnmounted, computed, nextTick, watch, type Ref, type ComputedRef } from 'vue'
import { useRoute, useRouter, isNavigationFailure, onBeforeRouteLeave } from 'vue-router'
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
import { showModalById, hideModalById, showOffcanvasById, hideOffcanvasById } from '@/utils/bootstrap'

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

interface MedicalNote {
  id: string
  date: string
  doctor: string
  title: string
  summary: string
  status: 'Draft' | 'Signed'
}

interface LabResult {
  id: string
  test: string
  sample: string
  date: string
  value: string
  unit?: string
  range: string
  flag?: 'High' | 'Low'
  status: string
}

interface MedicationItem {
  id: string
  name: string
  indication: string
  dosage: string
  frequency: string
  startDate: string
  prescribedBy: string
  status: 'Active' | 'Stopped'
}

interface PrescriptionItem {
  id: string
  number: string
  date: string
  doctor: string
  items: number
  status: 'Pending' | 'Dispensed' | 'Cancelled'
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

// Modal/Offcanvas visibility refs for robust v-if management
const isInsuranceModalVisible = ref(false)
const isEditInsuranceModalVisible = ref(false)
const isNextOfKinModalVisible = ref(false)
const isSetAppointmentModalVisible = ref(false)
const isAppointmentDetailsVisible = ref(false)

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
  { id: 1, name: '₵0-₵100' },
  { id: 2, name: '₵100-₵500' },
  { id: 3, name: '₵500+' },
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

const medicalNotes: Ref<MedicalNote[]> = ref([
  {
    id: 'note-1',
    date: '2026-01-16',
    doctor: 'Dr. Ama Owusu',
    title: 'Follow-up visit',
    summary: 'Patient reports improved symptoms. Continue current plan and review in 2 weeks.',
    status: 'Signed',
  },
  {
    id: 'note-2',
    date: '2026-01-04',
    doctor: 'Dr. John Mensah',
    title: 'Initial assessment',
    summary: 'Baseline exam completed. Labs ordered. Start lifestyle modifications.',
    status: 'Signed',
  },
  {
    id: 'note-3',
    date: '2025-12-20',
    doctor: 'Dr. Daniel Lee',
    title: 'Draft note',
    summary: 'Draft clinical note saved for completion.',
    status: 'Draft',
  },
])

const labResults: Ref<LabResult[]> = ref([
  {
    id: 'lab-1',
    test: 'Complete Blood Count (CBC)',
    sample: 'Whole blood',
    date: '2026-01-05',
    value: 'Normal',
    range: '—',
    status: 'Reported',
  },
  {
    id: 'lab-2',
    test: 'Fasting Blood Glucose',
    sample: 'Plasma',
    date: '2026-01-05',
    value: '6.4',
    unit: 'mmol/L',
    range: '3.9–5.5',
    flag: 'High',
    status: 'Reported',
  },
  {
    id: 'lab-3',
    test: 'Creatinine',
    sample: 'Serum',
    date: '2026-01-05',
    value: '86',
    unit: 'µmol/L',
    range: '60–110',
    status: 'Reported',
  },
])

const medications: Ref<MedicationItem[]> = ref([
  {
    id: 'med-1',
    name: 'Metformin',
    indication: 'Glycemic control',
    dosage: '500 mg',
    frequency: 'Twice daily',
    startDate: '2026-01-06',
    prescribedBy: 'Dr. John Mensah',
    status: 'Active',
  },
  {
    id: 'med-2',
    name: 'Amlodipine',
    indication: 'Blood pressure control',
    dosage: '5 mg',
    frequency: 'Once daily',
    startDate: '2025-11-12',
    prescribedBy: 'Dr. Sarah Smith',
    status: 'Active',
  },
  {
    id: 'med-3',
    name: 'Ibuprofen',
    indication: 'Pain relief',
    dosage: '400 mg',
    frequency: 'As needed',
    startDate: '2025-10-01',
    prescribedBy: 'Dr. Daniel Lee',
    status: 'Stopped',
  },
])

const prescriptions: Ref<PrescriptionItem[]> = ref([
  { id: 'rx-1', number: 'RX-2026-00021', date: '2026-01-06', doctor: 'Dr. John Mensah', items: 2, status: 'Dispensed' },
  { id: 'rx-2', number: 'RX-2026-00018', date: '2026-01-04', doctor: 'Dr. Ama Owusu', items: 1, status: 'Pending' },
  { id: 'rx-3', number: 'RX-2025-00992', date: '2025-12-20', doctor: 'Dr. Daniel Lee', items: 3, status: 'Cancelled' },
])

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
    // If it's already visited, go to clinical view
    cleanupBootstrapUI()
    router.push({
      name: 'ViewAppointment',
      params: { id: appointment.id },
    })
    return
  }
  
  // For SCHEDULED appointments, show the details offcanvas
  isAppointmentDetailsVisible.value = true
  nextTick(() => {
    showOffcanvasById('appointment_details')
  })
}

function openInsuranceModal(insurance: Insurance): void {
  selectedInsurance.value = { ...insurance }
  isEditInsuranceModalVisible.value = true
  console.log('Opening insurance modal for:', insurance)
  nextTick(() => {
    showModalById('edit_insurance_modal')
  })
}

function editCurrentInsurance(): void {
  if (insurances.value.length > 0 && insurances.value[currentInsuranceIndex.value]) {
    openInsuranceModal(insurances.value[currentInsuranceIndex.value])
  }
}

function openCreateInsuranceModal(): void {
  isInsuranceModalVisible.value = true
  nextTick(() => {
    showModalById('create_insurance')
  })
}

const handleInsuranceAdded = async (): Promise<void> => {
  await fetchInsurances()
  isInsuranceModalVisible.value = false
  console.log('Insurance added, refreshing list')
}

const openSetAppointmentModal = (): void => {
  isSetAppointmentModalVisible.value = true
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

function openNextOfKinModal(): void {
  isNextOfKinModalVisible.value = true
  nextTick(() => {
    showModalById('edit_next_of_kin_modal')
  })
}

function editPatient(): void {
  router.push({ name: 'EditPatient', params: { id: uuid } })
}

function editAppointment(appointment: Appointment): void {
  // Ensure we transition smoothly by cleaning up any active UI state
  cleanupBootstrapUI()
  
  router.push({
    name: 'ViewAppointment',
    params: { id: appointment.id || appointment.uuid },
  })
}

// Lifecycle
onMounted(() => {
  patientStore.fetchPatient(uuid)
  fetchInsurances()
  fetchAppointments()
})

const cleanupBootstrapUI = () => {
  console.log('Performing Bootstrap UI cleanup...')
  
  // 1. Hide all known instances via Bootstrap API
  const modalIds = ['edit_insurance_modal', 'edit_next_of_kin_modal', 'create_insurance', 'set_appointment']
  modalIds.forEach(id => hideModalById(id))
  hideOffcanvasById('appointment_details')

  // 2. Clear body styles and classes that block interaction
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
  document.body.classList.remove('modal-open', 'offcanvas-open')

  // 3. Force remove all lingering backdrops
  const backdrops = document.querySelectorAll('.offcanvas-backdrop, .modal-backdrop')
  backdrops.forEach((backdrop) => {
    backdrop.remove()
  })

  // 4. Ensure any "fixed" elements are unlocked
  const fixedElements = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')
  fixedElements.forEach((el: any) => {
    el.style.paddingRight = ''
  })
}

// Ensure cleanup on route leave to prevent "stuck" navigation
onBeforeRouteLeave((to, from, next) => {
  cleanupBootstrapUI()
  next()
})

onUnmounted(() => {
  cleanupBootstrapUI()
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
