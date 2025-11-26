<template>
  <patients-header></patients-header>
  <patients-sidebar></patients-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-semibold mb-0">Doctor Details</h4>
        </div>
        <div class="text-end d-flex">
          <!-- dropdown-->
          <div class="dropdown me-1">
            <a
              href="javascript:void(0);"
              class="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Export<i class="ti ti-chevron-down ms-2"></i>
            </a>
            <ul class="dropdown-menu p-2">
              <li>
                <a class="dropdown-item" href="#">Download as PDF</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Download as Excel</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="card">
        <div
          class="card-body d-flex align-items-center justify-content-between flex-wrap row-gap-3"
        >
          <div class="d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
            <div class="me-3 doctor-profile-img">
              <router-link to="/doctors/doctor-details"
                ><img src="@/assets/img/doctors/doctor-06.jpg" class="rounded" alt=""
              /></router-link>
            </div>
            <div class="flex-fill">
              <div class="d-flex align-items-center mb-1">
                <h6 class="mb-0 fw-semibold">Dr. John Smith</h6>
                <span class="badge border bg-white text-dark fw-medium ms-2"
                  ><i class="ti ti-point-filled me-1 text-info"></i>Cardiology</span
                >
              </div>
              <span class="d-block mb-3 fs-13">MBBS, M.D, Cardiology</span>
              <div class="d-flex align-items-center">
                <p class="mb-0 fs-13">
                  <i class="ti ti-building-hospital me-1"></i>Clinic : Downtown Medical
                  Clinic
                </p>
                <span class="badge badge-soft-success fw-medium ms-2"
                  ><i class="ti ti-point-filled me-1 text-success"></i>Available</span
                >
              </div>
            </div>
          </div>
          <div>
            <p class="mb-2">Consultation Charge</p>
            <h6 class="fs-18 fw-bold mb-3">
              $499 <span class="fw-normal text-body fs-14"> / 30 Min</span>
            </h6>
            <router-link to="/patient/patient-appointment-details" class="btn btn-primary"
              ><i class="ti ti-calendar-event me-1"></i>Book Apppointment</router-link
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-8">
          <div>
            <div class="card">
              <div class="card-body">
                <h5 class="fw-bold mb-3">Availability</h5>
                <ul class="nav nav-tabs nav-bordered nav-border-bottom mb-3">
                  <li class="nav-item flex-fill">
                    <a
                      class="nav-link text-center active fw-semibold"
                      href="javascript:void(0);"
                      data-bs-toggle="tab"
                      data-bs-target="#available-tab-1"
                      >Monday</a
                    >
                  </li>
                  <li class="nav-item flex-fill">
                    <a
                      class="nav-link text-center fw-semibold"
                      href="javascript:void(0);"
                      data-bs-toggle="tab"
                      data-bs-target="#available-tab-2"
                      >Tuesday</a
                    >
                  </li>
                  <li class="nav-item flex-fill">
                    <a
                      class="nav-link text-center fw-semibold"
                      href="javascript:void(0);"
                      data-bs-toggle="tab"
                      data-bs-target="#available-tab-3"
                      >Wednesday</a
                    >
                  </li>
                  <li class="nav-item flex-fill">
                    <a
                      class="nav-link text-center fw-semibold"
                      href="javascript:void(0);"
                      data-bs-toggle="tab"
                      data-bs-target="#available-tab-4"
                      >Thursday</a
                    >
                  </li>
                  <li class="nav-item flex-fill">
                    <a
                      class="nav-link text-center fw-semibold"
                      href="javascript:void(0);"
                      data-bs-toggle="tab"
                      data-bs-target="#available-tab-5"
                      >Friday</a
                    >
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade active show"
                    id="available-tab-1"
                    role="tabpanel"
                  >
                    <div class="d-flex align-items-center flex-wrap gap-2">
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >11:30 AM - 12:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >12:30 PM - 01:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >02:30 PM - 03:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >04:30 PM - 05:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >06:00 PM - 07:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >07:00 PM - 08:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >09:00 PM - 11:00 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >11:00 PM - 11:30 PM</a
                      >
                    </div>
                  </div>
                  <div class="tab-pane fade" id="available-tab-2" role="tabpanel">
                    <div class="d-flex align-items-center flex-wrap gap-2">
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >11:30 AM - 12:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >12:30 PM - 01:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >02:30 PM - 03:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >04:30 PM - 05:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >06:00 PM - 07:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >07:00 PM - 08:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >09:00 PM - 11:00 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >11:00 PM - 11:30 PM</a
                      >
                    </div>
                  </div>
                  <div class="tab-pane fade" id="available-tab-3" role="tabpanel">
                    <div class="d-flex align-items-center flex-wrap gap-2">
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >11:30 AM - 12:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >12:30 PM - 01:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >02:30 PM - 03:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >04:30 PM - 05:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >06:00 PM - 07:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >07:00 PM - 08:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >09:00 PM - 11:00 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >11:00 PM - 11:30 PM</a
                      >
                    </div>
                  </div>
                  <div class="tab-pane fade" id="available-tab-4" role="tabpanel">
                    <div class="d-flex align-items-center flex-wrap gap-2">
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >11:30 AM - 12:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >12:30 PM - 01:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >02:30 PM - 03:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >04:30 PM - 05:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >06:00 PM - 07:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >07:00 PM - 08:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >09:00 PM - 11:00 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >11:00 PM - 11:30 PM</a
                      >
                    </div>
                  </div>
                  <div class="tab-pane fade" id="available-tab-5" role="tabpanel">
                    <div class="d-flex align-items-center flex-wrap gap-2">
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >11:30 AM - 12:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >12:30 PM - 01:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >02:30 PM - 03:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >04:30 PM - 05:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >06:00 PM - 07:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >07:00 PM - 08:30 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >09:00 PM - 11:00 PM</a
                      >
                      <a
                        href="#"
                        class="d-inline-flex align-items-center bg-light rounded flex-fill text-center justify-content-center p-1 text-dark"
                        >11:00 PM - 11:30 PM</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="fw-bold mb-3">Short Bio</h5>
                <p>
                  Dr. John Smith has been practicing family medicine for over 10 years.
                  She has extensive experience in managing chronic illnesses, preventive
                  care, and treating a wide range of medical conditions for patients of
                  all ages.
                </p>
                <div>
                  <div class="more-menu">
                    <p>
                      Dr. Smith is dedicated to providing patient-centered care and
                      emphasizes building long-term relationships with her patients.
                    </p>
                  </div>
                  <div class="view-all mt-2">
                    <a
                      href="javascript:void(0);"
                      class="viewall-button text-primary fw-medium"
                      ><span>See More</span><i class="ti ti-chevron-down fs-10 ms-2"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="fw-bold mb-3">Education Information</h5>
                <ul class="activity-feed rounded">
                  <li class="feed-item timeline-item">
                    <h6 class="fw-bold mb-2">Boston Medicine Institutuion - MD</h6>
                    <p>25 May 1990 - 29 Jan 1992</p>
                  </li>
                  <li class="feed-item timeline-item">
                    <h6 class="fw-bold mb-2">Harvard Medical School, Boston - MBBS</h6>
                    <p>25 May 1985 - 29 Jan 1990</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="fw-bold mb-3">Awards & Recognition</h5>
                <div class="mb-3">
                  <div class="d-flex align-items-center mb-2">
                    <span class="me-2"><i class="ti ti-award"></i></span>
                    <h6 class="mb-0 fw-bold">Top Doctor Award (2023)</h6>
                  </div>
                  <p>
                    Recognized by U.S. News & World Report for outstanding achievements in
                    family medicine.
                  </p>
                </div>
                <div>
                  <div class="d-flex align-items-center mb-2">
                    <span class="me-2"><i class="ti ti-award"></i></span>
                    <h6 class="mb-0 fw-bold">Patient Choice Award (2022)</h6>
                  </div>
                  <p>
                    Awarded by Vitals.com for consistently receiving high patient ratings
                    in satisfaction and care.
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="fw-bold mb-3">Certifications</h5>
                <div class="mb-3">
                  <div class="d-flex align-items-center mb-2">
                    <span class="me-2"><i class="ti ti-award"></i></span>
                    <h6 class="mb-0 fw-bold">
                      Certification by the American Board of Family Medicine (ABFM), 2015
                    </h6>
                  </div>
                  <p>
                    Demonstrates mastery of comprehensive, ongoing care for individuals
                    and families, across all ages and genders.
                  </p>
                </div>
                <div>
                  <div class="d-flex align-items-center mb-2">
                    <span class="me-2"><i class="ti ti-award"></i></span>
                    <h6 class="mb-0 fw-bold">American Heart Association, 2024</h6>
                  </div>
                  <p>
                    Certification in performing life-saving techniques, including CPR and
                    emergency cardiac care for adults and children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 theiaStickySidebar">
          <div class="card">
            <div class="card-body">
              <h6 class="fw-bold mb-3">About</h6>
              <div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                    ><i class="ti ti-file"></i
                  ></span>
                  <div>
                    <h6 class="fw-semibold fs-13 mb-1">Medical Liscence Number</h6>
                    <p>ML566659898</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                    ><i class="ti ti-phone"></i
                  ></span>
                  <div>
                    <h6 class="fw-semibold fs-13 mb-1">Phone Number</h6>
                    <p>+1 54546 45648</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                    ><i class="ti ti-mail"></i
                  ></span>
                  <div>
                    <h6 class="fw-semibold fs-13 mb-1">Email Address</h6>
                    <p>john@example.com</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                    ><i class="ti ti-map-pin-check"></i
                  ></span>
                  <div>
                    <h6 class="fw-semibold fs-13 mb-1">Location</h6>
                    <p>4150 Hiney Road, Las Vegas, NV 89109</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                    ><i class="ti ti-calendar-event"></i
                  ></span>
                  <div>
                    <h6 class="fw-semibold fs-13 mb-1">DOB</h6>
                    <p>25 Jan 1990</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                    ><i class="ti ti-droplet"></i
                  ></span>
                  <div>
                    <h6 class="fw-semibold fs-13 mb-1">Blood Group</h6>
                    <p>O +ve</p>
                  </div>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <span
                    class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                    ><i class="ti ti-user-check"></i
                  ></span>
                  <div>
                    <h6 class="fw-semibold fs-13 mb-1">Year of Experience</h6>
                    <p>15+ Years</p>
                  </div>
                </div>
                <div class="d-flex align-items-center">
                  <span
                    class="avatar rounded-circle bg-light text-dark fs-16 flex-shrink-0 me-2"
                    ><i class="ti ti-gender-male"></i
                  ></span>
                  <div>
                    <h6 class="fw-semibold fs-13 mb-1">Gender</h6>
                    <p>Male</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
          class="btn-close custom-btn-close opacity-100"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i class="ti ti-x bg-white fs-16 text-dark"></i>
        </button>
      </div>
    </div>
    <div class="offcanvas-body pt-0 px-0">
      <h6 class="bg-light py-2 px-3 fw-bold">When & Where</h6>
      <div class="px-3 my-4">
        <div
          class="bg-light p-3 mb-3 border rounded-3 d-flex align-items-center justify-content-between"
        >
          <div class="d-flex align-items-center">
            <a href="javascript:void(0);" class="avatar avatar-md me-2">
              <img
                src="@/assets/img/doctors/doctor-03.jpg"
                alt="product"
                class="rounded-circle"
              />
            </a>
            <a href="javascript:void(0);" class="text-dark fw-semibold"
              >Dr. Emily Carter
              <span class="text-body fs-13 fw-normal d-block">Pediatrician </span>
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
            <div class="avatar avatar-xs flex-shrink-0">
              <img
                src="@/assets/img/users/avatar-2.jpg"
                alt=""
                class="rounded-circle me-1 flex-shrink-0"
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
            <router-link
              to="/appointment-consultations"
              class="btn-primary btn btn-sm rounded d-flex align-items-center"
            >
              <i class="ti ti-video me-1"></i> Start
            </router-link>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <p class="text-dark">Status</p>
          </div>

          <div class="col-lg-6 col-md-6">
            <div class="mb-3">
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle form-control rounded d-flex align-items-center justify-content-between border"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="true"
                >
                  Pending
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
                  <ul class="mb-0 list-style-none">
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
            class="img-fluid position-absolute top-0 start-0 z-0"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0 z-0"
          />
          <div class="mb-3 position-relative z-1">
            <span class="avatar avatar-lg bg-danger text-white"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="fw-bold mb-1 position-relative z-1">Delete Confirmation</h5>
          <p class="mb-3 position-relative z-1">Are you sure want to delete?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href=""
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
