<template>
  <!-- Add New Event Start -->
  <div class="modal fade" id="add_event">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Add New Event</h4>
          <button
            type="button"
            class="btn-close btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <!-- start row -->
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Event Name</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Event Date</label>
                  <div class="input-icon-end position-relative">
                    <a-date-picker
                      v-model:value="valueOne"
                      class="form-control datetimepicker"
                      placeholder="20/08/2025"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Start Time</label>
                  <div class="input-icon-end position-relative">
                    <a-time-picker
                      v-model:value="valueThree"
                      class="form-control timepicker"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-clock text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">End Time</label>
                  <div class="input-icon-end position-relative">
                    <input type="text" class="form-control timepicker" />
                    <span class="input-icon-addon">
                      <i class="ti ti-clock text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Event Location</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-0">
                  <label class="form-label">Descriptions</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-md btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-md btn-primary">Add Event</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add New Event End -->

  <!-- Start Event -->
  <div class="modal fade" id="event_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark modal-bg">
          <div class="modal-title text-white"><span id="eventTitle"></span></div>
          <button
            type="button"
            class="btn-close btn-close-modal text-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="d-flex align-items-center fw-medium text-black mb-3">
            <i class="ti ti-calendar-check text-default me-2"></i>26 Jul,2024 to 31
            Jul,2024
          </p>
          <p class="d-flex align-items-center fw-medium text-black mb-3">
            <i class="ti ti-calendar-check text-default me-2"></i>11:00 AM to 12:15 PM
          </p>
          <p class="d-flex align-items-center fw-medium text-black mb-3">
            <i class="ti ti-map-pin-bolt text-default me-2"></i>Las Vegas, US
          </p>
          <p class="d-flex align-items-center fw-medium text-black mb-0">
            <i class="ti ti-calendar-check text-default me-2"></i>A recurring or repeating
            event is simply any event that you will occur more than once on your calendar.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- End Event -->

  <!-- Start Add New Appointment -->
  <div
    class="offcanvas offcanvas-offset offcanvas-end"
    tabindex="-1"
    id="new_appointment"
  >
    <div class="offcanvas-header d-block pb-0 px-0">
      <div
        class="border-bottom d-flex align-items-center justify-content-between pb-3 px-3"
      >
        <h5 class="offcanvas-title fs-18 fw-bold">New Appointment</h5>
        <button
          type="button"
          class="btn-close opacity-100"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
    </div>
    <div class="offcanvas-body pt-3">
      <form action="#">
        <!-- start row-->
        <div class="row">
          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label mb-1 text-dark fs-14 fw-medium"
                >Appointment ID <span class="text-danger">*</span></label
              >
              <div class="input-group">
                <input
                  type="text"
                  class="form-control rounded bg-light"
                  value="AP234354"
                />
              </div>
            </div>
          </div>
          <!-- end col-->

          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label mb-1 text-dark fs-14 fw-medium"
                >Patient<span class="text-danger">*</span></label
              >
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="true"
                >
                  Select
                </a>
                <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                  <div class="mb-3">
                    <div class="input-icon-start position-relative">
                      <span class="input-icon-addon fs-12">
                        <i class="ti ti-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                  <ul class="mb-3 list-style-none">
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        <span class="avatar avatar-sm rounded-circle me-2"
                          ><img
                            src="@/assets/img/users/user-02.jpg"
                            class="flex-shrink-0 rounded-circle"
                            alt="img" /></span
                        >Emily Clark
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        <span class="avatar avatar-sm rounded-circle me-2"
                          ><img
                            src="@/assets/img/profiles/avatar-01.jpg"
                            class="flex-shrink-0 rounded-circle"
                            alt="img" /></span
                        >John Carter
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        <span class="avatar avatar-sm rounded-circle me-2"
                          ><img
                            src="@/assets/img/profiles/avatar-16.jpg"
                            class="flex-shrink-0 rounded-circle"
                            alt="img" /></span
                        >Sophia White
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        <span class="avatar avatar-sm rounded-circle me-2"
                          ><img
                            src="@/assets/img/profiles/avatar-15.jpg"
                            class="flex-shrink-0 rounded-circle"
                            alt="img" /></span
                        >Michael Johnson
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        <span class="avatar avatar-sm rounded-circle me-2"
                          ><img
                            src="@/assets/img/profiles/avatar-14.jpg"
                            class="flex-shrink-0 rounded-circle"
                            alt="img" /></span
                        >Olivia Harris
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        <span class="avatar avatar-sm rounded-circle me-2"
                          ><img
                            src="@/assets/img/profiles/avatar-01.jpg"
                            class="flex-shrink-0 rounded-circle"
                            alt="img" /></span
                        >David Anderson
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- end col-->

          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label mb-1 text-dark fs-14 fw-medium"
                >Appointment Type <span class="text-danger">*</span></label
              >
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="true"
                >
                  Select
                </a>
                <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                  <div class="mb-3">
                    <div class="input-icon-start position-relative">
                      <span class="input-icon-addon fs-12">
                        <i class="ti ti-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <ul class="mb-3 list-style-none">
                    <li class="list-none">
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Online
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Member
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- end col-->

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label mb-1 text-dark fs-14 fw-medium">
                Date of Appointment <span class="text-danger">*</span></label
              >
              <div class="input-icon-end position-relative">
                <a-date-picker
                  v-model:value="valueTwo"
                  class="form-control datetimepicker"
                  placeholder="20/08/2025"
                />
                <span class="input-icon-addon">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <!-- end col-->

          <div class="col-lg-6">
            <div class="mb-3">
              <label class="form-label mb-1 text-dark fs-14 fw-medium">
                Time <span class="text-danger">*</span></label
              >
              <div class="input-icon-end position-relative">
                <input
                  type="text"
                  class="form-control timepicker"
                  placeholder="-- : --"
                />
                <span class="input-icon-addon">
                  <i class="ti ti-clock"></i>
                </span>
              </div>
            </div>
          </div>
          <!-- end col-->

          <div class="col-lg-12">
            <div class="mb-3">
              <div>
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Appointment Reason</label
                >
                <textarea rows="4" class="form-control rounded"> </textarea>
              </div>
            </div>
          </div>
          <!-- end col-->

          <div class="col-lg-12">
            <div class="mb-3">
              <label class="form-label mb-1 text-dark fs-14 fw-medium"
                >Status<span class="text-danger">*</span></label
              >
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="true"
                >
                  Select
                </a>
                <div class="dropdown-menu shadow-lg w-100 dropdown-info">
                  <div class="mb-3">
                    <div class="input-icon-start position-relative">
                      <span class="input-icon-addon fs-12">
                        <i class="ti ti-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <ul class="mb-3 list-style-none">
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Checked Out
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Checked In
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Cancelled
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center text-dark"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Scheduled
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- end col-->
        </div>
        <!-- end row-->
      </form>
    </div>
    <div class="offcanvas-footer mb-1 mt-3 p-3 border-1 border-top">
      <div class="d-flex justify-content-end gap-2">
        <a href="javascript:void(0);" class="btn btn-light btm-md">Cancel</a>
        <button
          data-bs-dismiss="offcanvas"
          class="btn btn-primary btm-md"
          id="filter-submit"
        >
          Create Create Appointment
        </button>
      </div>
    </div>
  </div>
  <!-- End Add New Appointment-->

  <!-- Start View Details -->
  <div class="offcanvas offcanvas-offset offcanvas-end" tabindex="-1" id="view_details">
    <div class="offcanvas-header d-block pb-0 px-0">
      <div
        class="border-bottom d-flex align-items-center justify-content-between pb-3 px-3"
      >
        <h5 class="offcanvas-title fs-18 fw-bold">
          Appointment Details
          <span
            class="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2"
            >#AP544658</span
          >
        </h5>
        <button
          type="button"
          class="btn-close opacity-100"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="ti ti-x bg-white fs-16 text-dark"></i>
        </button>
      </div>
    </div>
    <div class="offcanvas-body pt-0 px-0">
      <h6 class="bg-light py-2 px-3 text-dark fw-bold">When & Where</h6>
      <div class="px-3 my-4">
        <p
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Appointment On <span class="text-body fw-normal"> Saturday, 25 Apr 2025 </span>
        </p>
        <p
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Time <span class="text-body fw-normal"> 09:00 AM - 11:00 AM </span>
        </p>
        <p
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Location <span class="text-body fw-normal">Newyork , USA </span>
        </p>
        <p
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Appointment Type <span class="text-body fw-normal"> Online Consultation </span>
        </p>
        <div
          class="text-dark mb-3 fw-semibold d-flex align-items-center justify-content-between"
        >
          Patient Details
          <div class="text-body fw-normal d-flex align-items-center">
            <div class="avatar avatar-sm">
              <img
                src="@/assets/img/users/avatar-2.jpg"
                alt=""
                class="rounded-circle me-1"
              />
            </div>
            James Adrian
          </div>
        </div>
      </div>
      <h6 class="bg-light py-2 px-3 text-dark fw-bold">Appointment Details</h6>
      <div class="px-3 my-4">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <div class="d-flex align-items-center">
            Telehealth
            <label class="d-flex align-items-center form-switch ps-1">
              <input class="form-check-input m-0 me-2" type="checkbox" checked />
            </label>
          </div>
          <div>
            <a href="" class="btn-primary btn btn-sm rounded d-flex align-items-center">
              <i class="ti ti-video me-1"></i> Start
            </a>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p class="text-dark">Status</p>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="mb-0">
              <vue3-select v-model="selected" :options="StateOld" placeholder="Select" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add New Appointment-->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0"
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
            <a
              href="javascript:void(0);"
              class="btn btn-danger position-relative z-1"
              data-bs-dismiss="modal"
              >Yes, Delete</a
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
export default {
  data() {
    return {
      valueOne,
      valueTwo,
      valueThree,
      selected: null,
      StateOld: [
        { label: "Select", value: "Select" },
        { label: "Pending", value: "Pending" },
        { label: "Oldest", value: "Oldest" },
        { label: "Recent", value: "Recent" },
      ],
    };
  },
};
</script>
