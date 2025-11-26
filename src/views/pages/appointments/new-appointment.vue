<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- row start -->
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- page header start -->
          <div class="mb-4">
            <h6 class="fw-bold mb-0 d-flex align-items-center">
              <router-link to="/appointments/appointments-list" class="text-dark">
                <i class="ti ti-chevron-left me-1"></i>Appointments</router-link
              >
            </h6>
          </div>
          <!-- page header end -->

          <!-- card start -->
          <div class="card">
            <div class="card-body">
              <div class="form">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Appointment ID<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="AP234354" disabled />
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <div class="d-flex align-items-center justify-content-between mb-1">
                        <label class="form-label mb-0 fw-medium"
                          >Patient<span class="text-danger ms-1">*</span></label
                        >
                        <a
                          href="javascript:void(0);"
                          class="link-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#add_modal"
                          ><i class="ti ti-circle-plus me-1"></i>Add New</a
                        >
                      </div>
                      <vue3-select
                        v-model="selected"
                        :options="PatiSele"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label mb-1 fw-medium"
                        >Department<span class="text-danger ms-1">*</span></label
                      >
                      <vue3-select
                        v-model="selectedOne"
                        :options="DepartSel"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label mb-1 fw-medium"
                        >Doctor<span class="text-danger ms-1">*</span></label
                      >
                      <vue3-select
                        v-model="selectedTwo"
                        :options="DoctoSele"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label mb-1 fw-medium"
                        >Appointment Type<span class="text-danger ms-1">*</span></label
                      >
                      <vue3-select
                        v-model="selectedThree"
                        :options="AppointSele"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label mb-1 fw-medium"
                        >Date of Appointment<span class="text-danger ms-1">*</span></label
                      >
                      <div class="input-icon-end position-relative">
                        <a-date-picker
                          v-model:value="valueOne"
                          class="form-control datetimepicker"
                          placeholder="dd/mm/yyyy"
                        />
                        <span class="input-icon-addon">
                          <i class="ti ti-calendar"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="form-label mb-1 fw-medium"
                        >Time<span class="text-danger ms-1">*</span></label
                      >
                      <div class="input-icon-end position-relative">
                        <input type="text" class="form-control timepicker" />
                        <span class="input-icon-addon">
                          <i class="ti ti-clock text-gray-7"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Appointment Reason<span class="text-danger ms-1">*</span></label
                  >
                  <textarea class="form-control" rows="3"></textarea>
                </div>
                <div class="mb-0">
                  <label class="form-label mb-1 fw-medium"
                    >Status<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedFour"
                    :options="CheckStat"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- card end -->

          <div class="d-flex align-items-center justify-content-end">
            <a href="javascript:void(0);" class="btn btn-light me-2">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary">Create Appointment</a>
          </div>
        </div>
      </div>
      <!-- row end -->
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

  <!-- ========================
			End Page Content
		========================= -->
  <!-- End Wrapper -->

  <!-- Start Add modal -->
  <div class="modal fade" id="add_modal">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">Add New Patient</h5>
          <button
            type="button"
            class="btn-close custom-btn-close opacity-100"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x bg-white fs-16 text-dark"></i>
          </button>
        </div>
        <div class="modal-body pb-0">
          <!-- form start -->
          <div class="form">
            <h6 class="fw-bold mb-3">Patient Information</h6>
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-3 d-flex align-items-center">
                  <label class="form-label mb-0">Profile Image</label>
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

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >First Name<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Last Name<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Phone Number<span class="text-danger ms-1">*</span></label
                  >
                  <input type="tel" class="form-control" id="phone" name="phone" />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Email Address<span class="text-danger ms-1">*</span></label
                  >
                  <input type="email" class="form-control" />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Primary Doctor<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedFive"
                    :options="DoctoSeleEdit"
                    placeholder="Select"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >DOB<span class="text-danger ms-1">*</span></label
                  >
                  <div class="input-icon-end position-relative">
                    <a-date-picker
                      v-model:value="valueOne"
                      class="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Gender<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedSeven"
                    :options="GenSele"
                    placeholder="Select"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Blood Group<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedEight"
                    :options="BlodSele"
                    placeholder="Select"
                  />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Status<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedTenTwo"
                    :options="StatSele"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>

            <h6 class="fw-bold mb-3 border-top pt-3">Address Information</h6>

            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Address 1<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>

              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label mb-1 fw-medium"
                    >Address 2<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label mb-1"
                    >Country<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedNine"
                    :options="CountSele"
                    placeholder="Select"
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label mb-1"
                    >State<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedTen"
                    :options="StateSele"
                    placeholder="Select"
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label mb-1"
                    >City<span class="text-danger ms-1">*</span></label
                  >
                  <vue3-select
                    v-model="selectedTenOne"
                    :options="CitySele"
                    placeholder="Select"
                  />
                </div>
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="form-label mb-1"
                    >Pincode<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
          </div>
          <!-- form end -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-light btn-sm me-2 fs-13 fw-medium"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary btn-sm fs-13 fw-medium">
            Add New Patient
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add modal  -->
</template>
<script>
import { ref } from "vue";
const valueOne = ref();
export default {
  data() {
    return {
      valueOne,
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
      selectedTen: null,
      selectedTenOne: null,
      selectedTenTwo: null,
      CheckStat: [
        { label: "Select", value: "Select" },
        { label: "Checked Out", value: "Checked Out" },
        { label: "Checked In", value: "Checked In" },
        { label: "Cancelled", value: "Cancelled" },
        { label: "Confirmed", value: "Confirmed" },
      ],
      BlodSele: [
        { label: "Select", value: "Select" },
        { label: "O+", value: "O+" },
        { label: "O-", value: "O-" },
        { label: "A+", value: "A+" },
        { label: "A-", value: "A-" },
        { label: "B+", value: "B+" },
        { label: "B-", value: "B-" },
      ],
      CountSele: [
        { label: "Select", value: "Select" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
      ],
      StateSele: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "Ontario", value: "Ontario" },
        { label: "England", value: "England" },
        { label: "Bavaria", value: "Bavaria" },
      ],
      CitySele: [
        { label: "Select", value: "Select" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "Toronto", value: "Toronto" },
        { label: "London", value: "London" },
        { label: "Munich", value: "Munich" },
      ],
      GenSele: [
        { label: "Select", value: "Select" },
        { label: "Male", value: "Male" },
        { label: "Femaler", value: "Femaler" },
      ],
      StatSele: [
        { label: "Select", value: "Select" },
        { label: "Available", value: "Available" },
        { label: "Unavailable", value: "Unavailable" },
      ],
      PatiSele: [
        { label: "Select", value: "Select" },
        { label: "Alberto Ripley", value: "Alberto Ripley" },
        { label: "Susan Babin", value: "Susan Babin" },
        { label: "Martin Lisa", value: "Martin Lisa" },
        { label: "Stella Mary", value: "Stella Mary" },
        { label: "Carol Lam", value: "Carol Lam" },
        { label: "Jesus Adams", value: "Jesus Adams" },
        { label: "Ezra Belcher", value: "Ezra Belcher" },
        { label: "Unit Manager", value: "Unit Manager" },
        { label: "Bernard Griffith", value: "Bernard Griffith" },
      ],
      DepartSel: [
        { label: "Select", value: "Select" },
        { label: "General Medicine", value: "General Medicine" },
        { label: "Pediatrics", value: "Pediatrics" },
        { label: "Gynecology", value: "Gynecology" },
        { label: "Orthopedics", value: "Orthopedics" },
        { label: "Dermatology", value: "Dermatology" },
        { label: "ENT", value: "ENT" },
        { label: "Neurology", value: "Neurology" },
      ],
      AppointSele: [
        { label: "Select", value: "Select" },
        { label: "In Person", value: "In Person" },
        { label: "Online", value: "Online" },
      ],
      DoctoSele: [
        { label: "Select", value: "Select" },
        { label: "Dr. Mick Thompson", value: "Dr. Mick Thompson" },
        { label: "Dr. Sarah Johnson", value: "Dr. Sarah Johnson" },
        { label: "Dr. Emily Carter", value: "Dr. Emily Carter" },
        { label: "Dr. David Lee", value: "Dr. David Lee" },
        { label: "Dr. Anna Kim", value: "Dr. Anna Kim" },
        { label: "Dr. John Smith", value: "Dr. John Smith" },
        { label: "Dr. Lisa White", value: "Dr. Lisa White" },
        { label: "Dr. Patrica Brown", value: "Dr. Patrica Brown" },
      ],
      DoctoSeleEdit: [
        { label: "Select", value: "Select" },
        { label: "Dr. Mick Thompson", value: "Dr. Mick Thompson" },
        { label: "Dr. Sarah Johnson", value: "Dr. Sarah Johnson" },
        { label: "Dr. Emily Carter", value: "Dr. Emily Carter" },
        { label: "Dr. David Lee", value: "Dr. David Lee" },
        { label: "Dr. Anna Kim", value: "Dr. Anna Kim" },
        { label: "Dr. John Smith", value: "Dr. John Smith" },
        { label: "Dr. Lisa White", value: "Dr. Lisa White" },
        { label: "Dr. Patrica Brown", value: "Dr. Patrica Brown" },
      ],
    };
  },
};
</script>
