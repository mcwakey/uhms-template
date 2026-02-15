<template>
  <!-- Start Add Doctor -->
  <div
    class="offcanvas offcanvas-offset offcanvas-end offcanvas-large"
    tabindex="-1"
    id="add_doctor"
  >
    <div class="offcanvas-header d-block pb-0 px-0">
      <div
        class="border-bottom d-flex align-items-center justify-content-between pb-3 px-3"
      >
        <h5 class="offcanvas-title fs-18 fw-bold">New Doctor</h5>
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
    <div class="offcanvas-body p-0">
      <form>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Contact Information</h6>
        </div>
        <div class="p-3 pb-0">
          <!-- start row-->
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3 d-flex align-items-center">
                <label class="form-label">Profile Image</label>
                <div
                  class="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0"
                >
                  <i class="ti ti-user-plus fs-16"></i>
                  <input type="file" class="form-control image-sign" multiple="" />
                  <div
                    class="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1"
                  >
                    <a
                      href="javascript:void(0);"
                      class="text-white d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-photo fs-14"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Name <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Username <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Phone Number <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Email Address <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >DOB <span class="text-danger">*</span></label
                    >
                    <div class="input-icon-end position-relative">
                      <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                      <span class="input-icon-addon">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Year Of Experience <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Department<span class="text-danger ms-1">*</span></label
                    >
                    <vue3-select
                      v-model="selected"
                      :options="Department"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Designation <span class="text-danger ms-1">*</span></label
                    >
                    <vue3-select
                      v-model="selectedOne"
                      :options="Designation"
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Medical License Number <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">Language Spoken</label>
                    <vue3-tags-input
                      class="input-tags form-control"
                      type="text"
                      id="inputBox2"
                      data-role="tagsinput"
                      name="specialist"
                      value="Tag1"
                      :tags="tagsTwo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Blood Group<span class="text-danger ms-1">*</span></label
                    >
                    <vue3-select
                      v-model="selectedTwo"
                      :options="Bloodgroup"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Gender <span class="text-danger ms-1">*</span></label
                    >
                    <vue3-select
                      v-model="selectedThree"
                      :options="Gender"
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Bio</label>
                <textarea class="form-control" rows="3">About Doctor</textarea>
              </div>
              <div class="form-check form-switch mb-3">
                <label class="form-check-label" for="switchCheckDefault"
                  >Feature On Website</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchCheckDefault"
                />
              </div>
            </div>
          </div>
          <!-- end row-->
        </div>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Address Information</h6>
        </div>
        <div class="p-3 pb-0">
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Address 1</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Address 2 </label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Country</label>
                <vue3-select
                  v-model="selectedFour"
                  :options="Country"
                  placeholder="Select"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">City</label>
                <vue3-select
                  v-model="selectedFive"
                  :options="City"
                  placeholder="Select"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">State</label>
                <vue3-select v-model="selectedSix" :options="City" placeholder="Select" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Pincode</label>
                <input type="text" class="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Address Information</h6>
        </div>
        <div class="p-3">
          <ul class="nav nav-pills schedule-tab mb-3" id="pills-tab" role="tablist">
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto active"
                data-bs-toggle="pill"
                data-bs-target="#schedule-1"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Monday
              </button>
            </li>
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                data-bs-toggle="pill"
                data-bs-target="#schedule-1"
                type="button"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                Tuesday
              </button>
            </li>
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                data-bs-toggle="pill"
                data-bs-target="#schedule-1"
                type="button"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                Wednesday
              </button>
            </li>
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                data-bs-toggle="pill"
                data-bs-target="#schedule-1"
                type="button"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                Thursday
              </button>
            </li>
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                data-bs-toggle="pill"
                data-bs-target="#schedule-1"
                type="button"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                Friday
              </button>
            </li>
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                data-bs-toggle="pill"
                data-bs-target="#schedule-1"
                type="button"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                Saturday
              </button>
            </li>
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                data-bs-toggle="pill"
                data-bs-target="#schedule-1"
                type="button"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                Sunday
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade active show" id="schedule-1" role="tabpanel">
              <div class="add-schedule-list">
                <div class="row gx-3">
                  <div class="col-lg-5">
                    <div class="mb-3">
                      <label class="form-label">Session</label>
                      <vue3-select
                        v-model="selectedSeven"
                        :options="Session"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="row align-items-end gx-3">
                      <div class="col-lg-9">
                        <div class="row gx-3">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label class="form-label">From</label>
                              <div class="input-icon-end position-relative">
                                <a-time-picker
                                  v-model="valueOne"
                                  class="form-control timepicker"
                                  placeholder="03 : 05  AM"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label class="form-label">To</label>
                              <div class="input-icon-end position-relative">
                                <a-time-picker
                                  v-model="valueTwo"
                                  class="form-control timepicker"
                                  placeholder="03 : 05  AM"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <a
                            href="#"
                            class="add-schedule-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
                          >
                            <i class="ti ti-plus fs-16"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" class="btn btn-dark">Apply All</a>
          </div>
        </div>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Appointment Information</h6>
        </div>
        <div class="p-3 pb-0">
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Appointment Type</label>
                <vue3-select
                  v-model="selectedEight"
                  :options="Appointment"
                  placeholder="Select"
                />
              </div>
            </div>
            <div class="col-lg-6"></div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Accept bookings (in Advance)</label>
                <div class="input-group">
                  <input type="text" class="form-control" />
                  <span class="input-group-text bg-transparent text-dark fs-14"
                    >Days</span
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Appointment Duration</label>
                <div class="input-group">
                  <input type="text" class="form-control" />
                  <span class="input-group-text bg-transparent text-dark fs-14"
                    >Mins</span
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Consultation Charge</label>
                <div class="input-group">
                  <input type="text" class="form-control" />
                  <span class="input-group-text bg-transparent text-dark fs-14">$</span>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Max Bookings Per Slot</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-check form-switch mb-3">
                <label class="form-check-label" for="switchCheckDefault2"
                  >Display on Booking Page</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchCheckDefault2"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Educational Information</h6>
        </div>
        <div class="p-3 pb-0">
          <div class="add-education-list">
            <div class="row align-items-end">
              <div class="col-lg-11">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="mb-3">
                      <label class="form-label">Educational Degree</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="mb-3">
                      <label class="form-label">University</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="mb-3">
                      <label class="form-label">From</label>
                      <div class="input-icon-end position-relative">
                        <a-date-picker v-model="valueTwo" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="mb-3">
                      <label class="form-label">To</label>
                      <div class="input-icon-end position-relative">
                        <a-date-picker v-model="valueThree" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-1">
                <div class="mb-3">
                  <a
                    href="#"
                    class="add-education-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-plus fs-16"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Awards & Recognition</h6>
        </div>
        <div class="p-3 pb-0">
          <div class="add-award-list">
            <div class="row align-items-end">
              <div class="col-lg-11">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">From</label>
                      <div class="input-icon-end position-relative">
                        <a-date-picker v-model="valueFour" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-1">
                <div class="mb-3">
                  <a
                    href="#"
                    class="add-award-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-plus fs-16"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Certifications</h6>
        </div>
        <div class="p-3 pb-0">
          <div class="add-certification-list">
            <div class="row align-items-end">
              <div class="col-lg-11">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">Name</label>
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">From</label>
                      <div class="input-icon-end position-relative">
                        <a-date-picker v-model="valueFive" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-1">
                <div class="mb-3">
                  <a
                    href="#"
                    class="add-certification-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-plus fs-16"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="offcanvas-footer mb-1 p-3 border-1 border-top">
      <div class="d-flex justify-content-end gap-2">
        <a
          href="javascript:void(0);"
          class="btn btn-light btm-md"
          data-bs-dismiss="offcanvas"
          >Cancel</a
        >
        <button
          class="btn btn-primary btm-md"
          data-bs-toggle="modal"
          data-bs-target="#success_modal"
        >
          Add Doctor
        </button>
      </div>
    </div>
    <!-- End Add New Appointment-->
  </div>
  <!-- End Add Doctor -->

  <!-- Start Edit Doctor -->
  <div
    class="offcanvas offcanvas-offset offcanvas-end offcanvas-large"
    tabindex="-1"
    id="edit_doctor"
  >
    <div class="offcanvas-header d-block pb-0 px-0">
      <div
        class="border-bottom d-flex align-items-center justify-content-between pb-3 px-3"
      >
        <h5 class="offcanvas-title fs-18 fw-bold">Edit Doctor</h5>
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
    <div class="offcanvas-body p-0">
      <form>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Contact Information</h6>
        </div>
        <div class="p-3 pb-0">
          <!-- start row-->
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3 d-flex align-items-center">
                <label class="form-label">Profile Image</label>
                <div
                  class="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0"
                >
                  <img
                    src="@/assets/img/doctors/doctor-01.jpg"
                    class="position-relative z-n1"
                    alt=""
                  />
                  <input type="file" class="form-control image-sign" multiple="" />
                  <div
                    class="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1"
                  >
                    <a
                      href="javascript:void(0);"
                      class="text-white d-flex align-items-center justify-content-center"
                    >
                      <i class="ti ti-photo fs-14"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Name <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" value="Dr.Mick Thompson" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Username <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" value="Andrew" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Phone Number <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" value="+1 47895 58974" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Email Address <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" value="mick@example.com" />
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >DOB <span class="text-danger">*</span></label
                    >
                    <div class="input-icon-end position-relative">
                      <a-date-picker v-model="valueSix" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                      <span class="input-icon-addon">
                        <i class="ti ti-calendar"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Year Of Experience <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" value="+5 Years" />
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Department<span class="text-danger ms-1">*</span></label
                    >
                    <vue3-select
                      v-model="selectedNine"
                      :options="Department"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Designation <span class="text-danger ms-1">*</span></label
                    >
                    <vue3-select
                      v-model="selectedTen"
                      :options="Designation"
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Medical License Number <span class="text-danger">*</span></label
                    >
                    <input type="text" class="form-control" value="MGF14578" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">Language Spoken</label>
                    <vue3-tags-input
                      class="input-tags form-control"
                      type="text"
                      id="inputBox2"
                      data-role="tagsinput"
                      name="specialist"
                      value="Tag1"
                      :tags="tagsTwo"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Blood Group<span class="text-danger ms-1">*</span></label
                    >
                    <vue3-select
                      v-model="selectedEleven"
                      :options="Bloodgroup"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >Gender <span class="text-danger ms-1">*</span></label
                    >
                    <vue3-select
                      v-model="selectedTwele"
                      :options="Gender"
                      placeholder="Select"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- end col-->

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Bio</label>
                <textarea class="form-control" rows="3">
Dr.Mick Thompson is a compassionate and experienced internal medicine physician with over 5 years of clinical practice.</textarea
                >
              </div>
              <div class="form-check form-switch mb-3">
                <label class="form-check-label" for="switchCheckDefault3"
                  >Feature On Website</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchCheckDefault3"
                />
              </div>
            </div>
          </div>
          <!-- end row-->
        </div>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Address Information</h6>
        </div>
        <div class="p-3 pb-0">
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Address 1</label>
                <input type="text" class="form-control" value="2900 Alpha Avenue" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Address 2 </label>
                <input type="text" class="form-control" value="2900 Alpha Avenue" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Country</label>
                <vue3-select
                  v-model="selectedThirteen"
                  :options="Country"
                  placeholder="Select"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">City</label>
                <vue3-select
                  v-model="selectedFourteen"
                  :options="City"
                  placeholder="Select"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">State</label>
                <vue3-select
                  v-model="selectedfifteen"
                  :options="City"
                  placeholder="Select"
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Pincode</label>
                <input type="text" class="form-control" value="PA 15650" />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Address Information</h6>
        </div>
        <div class="p-3">
          <ul class="nav nav-pills schedule-tab mb-3" id="pills-tab2" role="tablist">
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto active"
                data-bs-toggle="pill"
                data-bs-target="#schedules-1"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Monday
              </button>
            </li>
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                data-bs-toggle="pill"
                data-bs-target="#schedules-1"
                type="button"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                Tuesday
              </button>
            </li>
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                data-bs-toggle="pill"
                data-bs-target="#schedules-1"
                type="button"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                Wednesday
              </button>
            </li>
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                data-bs-toggle="pill"
                data-bs-target="#schedules-1"
                type="button"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                Thursday
              </button>
            </li>
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                data-bs-toggle="pill"
                data-bs-target="#schedules-1"
                type="button"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                Friday
              </button>
            </li>
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                data-bs-toggle="pill"
                data-bs-target="#schedules-1"
                type="button"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                Saturday
              </button>
            </li>
            <li class="nav-item me-1" role="presentation">
              <button
                class="nav-link btn btn-sm btn-icon p-2 d-flex align-items-center justify-content-center w-auto"
                data-bs-toggle="pill"
                data-bs-target="#schedules-1"
                type="button"
                role="tab"
                aria-selected="false"
                tabindex="-1"
              >
                Sunday
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent2">
            <div class="tab-pane fade active show" id="schedules-1" role="tabpanel">
              <div class="add-schedule-list">
                <div class="row gx-3">
                  <div class="col-lg-5">
                    <div class="mb-3">
                      <label class="form-label">Session</label>
                      <vue3-select
                        v-model="selectedSixteen"
                        :options="Session"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <div class="row align-items-end gx-3">
                      <div class="col-lg-9">
                        <div class="row gx-3">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label class="form-label">From</label>
                              <div class="input-icon-end position-relative">
                                <a-time-picker
                                  v-model="valueThree"
                                  class="form-control timepicker"
                                  placeholder="03 : 05  AM"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label class="form-label">To</label>
                              <div class="input-icon-end position-relative">
                                <a-time-picker
                                  v-model="valueFour"
                                  class="form-control timepicker"
                                  placeholder="03 : 05  AM"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3">
                        <div class="mb-3">
                          <a
                            href="#"
                            class="add-schedule-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
                          >
                            <i class="ti ti-plus fs-16"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" class="btn btn-dark">Apply All</a>
          </div>
        </div>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Appointment Information</h6>
        </div>
        <div class="p-3 pb-0">
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Appointment Type</label>
                <select class="select">
                  <option>Select</option>
                  <option selected>Online Consultation</option>
                </select>
              </div>
            </div>
            <div class="col-lg-6"></div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Accept bookings (in Advance)</label>
                <div class="input-group">
                  <input type="text" class="form-control" value="2" />
                  <span class="input-group-text bg-transparent text-dark fs-14"
                    >Days</span
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Appointment Duration</label>
                <div class="input-group">
                  <input type="text" class="form-control" value="30" />
                  <span class="input-group-text bg-transparent text-dark fs-14"
                    >Mins</span
                  >
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Consultation Charge</label>
                <div class="input-group">
                  <input type="text" class="form-control" value="$100" />
                  <span class="input-group-text bg-transparent text-dark fs-14">$</span>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Max Bookings Per Slot</label>
                <input type="text" class="form-control" value="200" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-check form-switch mb-3">
                <label class="form-check-label" for="switchCheckDefault5"
                  >Display on Booking Page</label
                >
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchCheckDefault5"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Educational Information</h6>
        </div>
        <div class="p-3 pb-0">
          <div class="add-education-list">
            <div class="row align-items-end">
              <div class="col-lg-11">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="mb-3">
                      <label class="form-label">Educational Degree</label>
                      <input type="text" class="form-control" value="M.B.B.S" />
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="mb-3">
                      <label class="form-label">University</label>
                      <input
                        type="text"
                        class="form-control"
                        value="Harvard Medical School"
                      />
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="mb-3">
                      <label class="form-label">From</label>
                      <div class="input-icon-end position-relative">
                        <a-date-picker v-model="valueSeven" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="mb-3">
                      <label class="form-label">To</label>
                      <div class="input-icon-end position-relative">
                        <a-date-picker v-model="valueEight" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-1">
                <div class="mb-3">
                  <a
                    href="#"
                    class="add-education-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-plus fs-16"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Awards & Recognition</h6>
        </div>
        <div class="p-3 pb-0">
          <div class="add-award-list">
            <div class="row align-items-end">
              <div class="col-lg-11">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value="Harvard Medical School"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">From</label>
                      <div class="input-icon-end position-relative">
                        <a-date-picker v-model="valueNine" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-1">
                <div class="mb-3">
                  <a
                    href="#"
                    class="add-award-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-plus fs-16"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-light px-3 py-2">
          <h6 class="fw-bold mb-0">Certifications</h6>
        </div>
        <div class="p-3 pb-0">
          <div class="add-certification-list">
            <div class="row align-items-end">
              <div class="col-lg-11">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        value="Harvard Medical School"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">From</label>
                      <div class="input-icon-end position-relative">
                        <a-date-picker v-model="valueTen" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-1">
                <div class="mb-3">
                  <a
                    href="#"
                    class="add-certification-btn p-2 bg-light btn-icon text-dark rounded d-flex align-items-center justify-content-center"
                  >
                    <i class="ti ti-plus fs-16"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="offcanvas-footer mb-1 p-3 border-1 border-top">
      <div class="d-flex justify-content-end gap-2">
        <a
          href="javascript:void(0);"
          class="btn btn-light btm-md"
          data-bs-dismiss="offcanvas"
          >Cancel</a
        >
        <button class="btn btn-primary btm-md">Save Changes</button>
      </div>
    </div>
    <!-- End Add New Appointment-->
  </div>
  <!-- End Edit Doctor -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative z-1">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0 z-n1"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0 z-n1"
          />
          <div class="mb-3">
            <span class="avatar avatar-lg bg-danger text-white"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="fw-bold mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure want to delete?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/doctors/doctors-list"
              class="btn btn-danger position-relative z-1"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Delete Modal  -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="success_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative z-1">
          <div class="mb-3">
            <span class="avatar avatar-lg bg-success text-white"
              ><i class="ti ti-check fs-24"></i
            ></span>
          </div>
          <h5 class="fw-bold mb-1">Added Successfully</h5>
          <p class="mb-3">Doctor has been added to your List</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link
              to="/doctors/doctor-details"
              class="btn btn-primary position-relative z-1"
              >View Details</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Delete Modal  -->
</template>

<script>
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();
const valueFour = ref();
const valueFive = ref();
const valueSix = ref();
const valueSeven = ref();
const valueEight = ref();
const valueNine = ref();
const valueTen = ref();

import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      tagsTwo: ["English", "French"],
      valueOne,
      valueTwo,
      valueThree,
      valueFour,
      valueFive,
      valueSix,
      valueSeven,
      valueEight,
      valueNine,
      valueTen,
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      selectedNine: "Cardiology",
      selectedTen: "Cardiology",
      selectedEleven: "O+",
      selectedTwele: "Male",
      selectedThirteen: "United State",
      selectedFourteen: "Los Angeles",
      selectedfifteen: "California",
      selectedSixteen: "Morning",
      Department: [
        { label: "Cardiology", value: "Cardiology" },
        { label: "Orthopedics", value: "Orthopedics" },
        { label: "Pediatrics", value: "Pediatrics" },
        { label: "Gynecology", value: "Gynecology" },
        { label: "Psychiatry", value: "Psychiatry" },
      ],
      Designation: [
        { label: "Cardiology", value: "Cardiology" },
        { label: "Orthopedic Surgeon", value: "Orthopedic Surgeon" },
        { label: "Pediatrics", value: "Pediatrics" },
        { label: "Gynecology", value: "Gynecology" },
        { label: "Psychiatry", value: "Psychiatry" },
      ],
      Bloodgroup: [
        { label: "O+", value: "O+" },
        { label: "O-", value: "O-" },
        { label: "A+", value: "A+" },
        { label: "A-", value: "A-" },
        { label: "B+", value: "B+" },
        { label: "B-", value: "B-" },
      ],
      Gender: [
        { label: "Male", value: "Male" },
        { label: "Female", value: "Female" },
        { label: "Others", value: "Others" },
      ],
      Country: [
        { label: "United States", value: "United States" },
        { label: "India", value: "India" },
        { label: "Canada", value: "Canada" },
        { label: "Germany", value: "Germany" },
        { label: "Brazil", value: "Brazil" },
      ],
      City: [
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "San Francisco", value: "San Francisco" },
        { label: "San Jose", value: "San Jose" },
        { label: "Fresno", value: "Fresno" },
      ],
      State: [
        { label: "California", value: "California" },
        { label: "Texas", value: "Texas" },
        { label: "New York", value: "New York" },
        { label: "Florida", value: "Florida" },
        { label: "Illinois", value: "Illinois" },
      ],
      Session: [
        { label: "Morning", value: "Morning" },
        { label: "Noon", value: "Noon" },
      ],
      Appointment: [
        { label: "Select", value: "Select" },
        { label: "Online Consultation", value: "Online Consultation" },
      ],
    };
  },
};
</script>
