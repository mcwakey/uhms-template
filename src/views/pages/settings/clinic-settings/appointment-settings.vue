<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content" id="profilePage">
      <!-- Page Header -->
      <div class="mb-3 border-bottom pb-3">
        <h4 class="fw-bold mb-0">Settings</h4>
      </div>
      <!-- End Page Header -->

      <div class="card mb-0">
        <div class="card-body p-0">
          <div class="settings-wrapper d-flex">
            <!-- Start Settings Sidebar -->
            <settings-sidebar></settings-sidebar>
            <!-- End Settings Sidebar -->

            <div class="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
              <div class="card-header border-bottom px-0 mx-3">
                <div class="d-flex align-items-center">
                  <h5 class="fw-bold">Appointment Reminders</h5>
                </div>
              </div>
              <div
                class="card-body px-0 mx-3 break-hours-section"
                id="break-hours-section"
              >
                <!-- start row -->
                <div
                  class="row row-gap-2 align-items-center justify-content-between pb-3 mb-3 border-bottom"
                >
                  <div class="col-lg-11">
                    <h6 class="fs-14 fw-medium">
                      Automatically notify clients about upcoming appointments.
                    </h6>
                  </div>
                  <!-- end col -->
                  <div class="col-lg-1">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input text-end me-1"
                        type="checkbox"
                        checked=""
                      />
                    </div>
                  </div>
                  <!-- end col -->
                  <div class="col-lg-11">
                    <h6 class="fs-14 fw-medium">
                      Reminders for weekend appointments go out on Friday.
                    </h6>
                  </div>
                  <!-- end col -->
                  <div class="col-lg-1">
                    <div class="form-check form-switch">
                      <input class="form-check-input text-end me-1" type="checkbox" />
                    </div>
                  </div>
                  <!-- end col -->
                  <div class="col-lg-11">
                    <h6 class="fs-14 fw-medium">
                      Appointments auto-cancel if clients reply 'No' or 'Cancel' to
                      reminders.
                    </h6>
                  </div>
                  <!-- end col -->
                  <div class="col-lg-1">
                    <div class="form-check form-switch">
                      <input
                        class="form-check-input text-end me-1"
                        type="checkbox"
                        checked=""
                      />
                    </div>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->

                <div>
                  <h5 class="fw-bold mb-3">Automatic Reminders</h5>

                  <div class="reminder-list mb-3 border-bottom">
                    <div class="row d-flex align-items-center mb-3 reminder-list-item">
                      <div class="col-md-2">
                        <h6 class="fs-14 fw-medium mb-0">Reminder</h6>
                      </div>
                      <div class="col-md-10 flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end">
                          <div class="me-2">
                            <vue3-select
                              v-model="selected"
                              :options="AppointEmail"
                              placeholder="Email"
                            />
                          </div>
                          <div class="me-2">
                            <vue3-select
                              v-model="selectedOne"
                              :options="AppointWel"
                              placeholder="Appointment Reminder"
                            />
                          </div>
                          <div class="me-2">
                            <vue3-select
                              v-model="selectedTwo"
                              :options="AppointNum"
                              placeholder="01"
                            />
                          </div>
                          <span class="me-2"> Days Before </span>
                          <div class="d-flex align-items-center">
                            <a
                              href="javascript:void(0);"
                              class="btn btn-white p-2 border rounded-2 me-2"
                              ><i class="ti ti-edit"></i
                            ></a>
                            <a
                              href="javascript:void(0);"
                              class="btn btn-white p-2 border rounded-2 add-reminder"
                              ><i class="ti ti-plus"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row d-flex align-items-center mb-3 reminder-list-item">
                      <div class="col-md-2">
                        <h6 class="fs-14 fw-medium mb-0">Reminder</h6>
                      </div>
                      <div class="col-md-10 flex-grow-1">
                        <div class="d-flex align-items-center justify-content-end">
                          <div class="me-2">
                            <vue3-select
                              v-model="selectedThree"
                              :options="AppointEmailOne"
                              placeholder="Email"
                            />
                          </div>
                          <div class="me-2">
                            <vue3-select
                              v-model="selectedFour"
                              :options="AppointWelOne"
                              placeholder="Appointment Reminder"
                            />
                          </div>
                          <div class="me-2">
                            <vue3-select
                              v-model="selectedFive"
                              :options="AppointNumOne"
                              placeholder="01"
                            />
                          </div>
                          <span class="me-2"> Days Before </span>
                          <div class="d-flex align-items-center">
                            <a
                              href="javascript:void(0);"
                              class="btn btn-white p-2 border rounded-2 me-2"
                              ><i class="ti ti-edit"></i
                            ></a>
                            <a
                              href="javascript:void(0);"
                              class="btn btn-white p-2 border rounded-2 remove-reminder"
                              ><i class="ti ti-trash"></i
                            ></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="pb-3 mb-3 border-bottom">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <h5 class="fw-bold mb-0">Manual Reminders</h5>
                    </div>

                    <!-- start row -->
                    <div class="row align-items-center row-gap-2 mb-3">
                      <div class="col-lg-6">
                        <p class="text-dark fw-medium mb-0">SMS Reminder Template</p>
                      </div>
                      <!-- end col -->
                      <div class="col-lg-6">
                        <div class="d-flex align-items-center gap-3">
                          <vue3-select
                            v-model="selectedSix"
                            :options="AppointRedmin"
                            placeholder="Select"
                          />
                          <a
                            href="javascript:void(0);"
                            class="btn btn-white p-2 border rounded-2 me-2"
                            ><i class="ti ti-edit"></i
                          ></a>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->

                    <!-- start row -->
                    <div class="row align-items-center row-gap-2 mb-3">
                      <div class="col-lg-6">
                        <p class="text-dark fw-medium mb-0">Email Reminder Template</p>
                      </div>
                      <!-- end col -->
                      <div class="col-lg-6">
                        <div class="d-flex align-items-center gap-3">
                          <vue3-select
                            v-model="selectedSeven"
                            :options="AppointRedminOne"
                            placeholder="Select"
                          />
                          <a
                            href="javascript:void(0);"
                            class="btn btn-white p-2 border rounded-2 me-2"
                            ><i class="ti ti-edit"></i
                          ></a>
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->

                    <div class="border-top pt-3">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-9">
                          <p class="mb-0 text-dark fw-medium">
                            Send reminder automatically upon new appointment booking
                          </p>
                        </div>
                        <div class="col-3">
                          <div class="d-flex align-items-center justify-content-end">
                            <div class="form-check form-switch">
                              <input
                                class="form-check-input text-end me-1"
                                type="checkbox"
                                checked=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- start end -->

                      <!-- start row -->
                      <div class="row align-items-center row-gap-2">
                        <div class="col-xl-5 col-lg-3">
                          <p class="text-dark fw-medium mb-0">Reminder</p>
                        </div>
                        <!-- end col -->
                        <div class="col-xl-7 col-lg-9">
                          <div class="d-flex align-items-center gap-3">
                            <vue3-select
                              v-model="selectedEight"
                              :options="AppointEmailTwo"
                              placeholder="Email"
                            />
                            <vue3-select
                              v-model="selectedNine"
                              :options="AppointRedminTwo"
                              placeholder="Select"
                            />
                            <a
                              href="javascript:void(0);"
                              class="btn btn-white p-2 border rounded-2 me-2"
                              ><i class="ti ti-edit"></i
                            ></a>
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                  </div>

                  <div class="d-flex align-items-center justify-content-end">
                    <a href="javascript:void(0);" class="btn btn-light me-2">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy; <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All
        Rights Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      selectedNine: null,
      AppointEmail: [
        { label: "SMS", value: "SMS" },
        { label: "Email", value: "Email" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
      ],
      AppointNum: [
        { label: "01", value: "01" },
        { label: "02", value: "02" },
        { label: "03", value: "03" },
        { label: "05", value: "05" },
        { label: "10", value: "10" },
      ],
      AppointWel: [
        { label: "Select", value: "Select" },
        { label: "Welcome Email", value: "Welcome Email" },
        { label: "Appointment Reminder", value: "Appointment Reminder" },
        { label: "Appointment Confirmation", value: "Appointment Confirmation" },
        { label: "Appointment Rescheduled", value: "Appointment Rescheduled" },
        { label: "Appointment Cancelled", value: "Appointment Cancelled" },
        { label: "Test Result Notification", value: "Test Result Notification" },
      ],
      AppointEmailOne: [
        { label: "SMS", value: "SMS" },
        { label: "Email", value: "Email" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
      ],
      AppointNumOne: [
        { label: "01", value: "01" },
        { label: "02", value: "02" },
        { label: "03", value: "03" },
        { label: "05", value: "05" },
        { label: "10", value: "10" },
      ],
      AppointWelOne: [
        { label: "Select", value: "Select" },
        { label: "Welcome Email", value: "Welcome Email" },
        { label: "Appointment Reminder", value: "Appointment Reminder" },
        { label: "Appointment Confirmation", value: "Appointment Confirmation" },
        { label: "Appointment Rescheduled", value: "Appointment Rescheduled" },
        { label: "Appointment Cancelled", value: "Appointment Cancelled" },
        { label: "Test Result Notification", value: "Test Result Notification" },
      ],
      AppointRedmin: [
        { label: "Select", value: "Select" },
        { label: "Welcome Email", value: "Welcome Email" },
        { label: "Appointment Reminder", value: "Appointment Reminder" },
        { label: "Appointment Confirmation", value: "Appointment Confirmation" },
        { label: "Appointment Rescheduled", value: "Appointment Rescheduled" },
        { label: "Appointment Cancelled", value: "Appointment Cancelled" },
        { label: "Test Result Notification", value: "Test Result Notification" },
      ],
      AppointRedminOne: [
        { label: "Select", value: "Select" },
        { label: "Welcome Email", value: "Welcome Email" },
        { label: "Appointment Reminder", value: "Appointment Reminder" },
        { label: "Appointment Confirmation", value: "Appointment Confirmation" },
        { label: "Appointment Rescheduled", value: "Appointment Rescheduled" },
        { label: "Appointment Cancelled", value: "Appointment Cancelled" },
        { label: "Test Result Notification", value: "Test Result Notification" },
      ],
      AppointEmailTwo: [
        { label: "SMS", value: "SMS" },
        { label: "Email", value: "Email" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
      ],
      AppointRedminTwo: [
        { label: "Select", value: "Select" },
        { label: "Welcome Email", value: "Welcome Email" },
        { label: "Appointment Reminder", value: "Appointment Reminder" },
        { label: "Appointment Confirmation", value: "Appointment Confirmation" },
        { label: "Appointment Rescheduled", value: "Appointment Rescheduled" },
        { label: "Appointment Cancelled", value: "Appointment Cancelled" },
        { label: "Test Result Notification", value: "Test Result Notification" },
      ],
    };
  },
};
</script>
