<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
    Start Page Content
  ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content content-two">
      <div>
        <!-- Page Header -->
        <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
          <div class="flex-grow-1">
            <h4 class="fs-18 fw-semibold mb-0">Call History</h4>
          </div>
          <div class="text-end">
            <ol class="breadcrumb m-0 py-0">
              <li class="breadcrumb-item">
                <router-link to="/dashboard/">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <a href="javascript:void(0);">Applications</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Call History</li>
            </ol>
          </div>
        </div>
        <!-- End Page Header -->

        <div
          class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3"
        >
          <div
            id="reportrange"
            class="reportrange-picker d-flex align-items-center"
            ref="dateRangeInput"
          >
            <i class="ti ti-calendar text-gray-5 fs-14 me-1"></i
            ><span class="reportrange-picker-field">16 Apr 25 - 16 Apr 25</span>
          </div>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="btn fs-14 btn-outline-light bg-white text-dark d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="ti ti-sort-descending-2 me-1"></i>Sort By :
              <span class="ms-1">Newest</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Newest</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Oldest</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Table List Start -->
        <div class="table-responsive border rounded">
          <table class="table">
            <thead>
              <tr>
                <th>
                  <div class="form-check form-check-md">
                    <input class="form-check-input" type="checkbox" id="select-all" />
                  </div>
                </th>
                <th>Name</th>
                <th>Phone</th>
                <th>Call Type</th>
                <th>Duration</th>
                <th>Date & Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="form-check form-check-md">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a
                      href="#"
                      class="avatar avatar-md"
                      data-bs-toggle="modal"
                      data-bs-target="#view_details"
                    >
                      <img
                        src="@/assets/img/users/user-01.jpg"
                        class="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div class="ms-2">
                      <p class="text-dark fw-medium mb-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_details"
                          >Anthony Lewis</a
                        >
                      </p>
                      <span class="fs-12">anthony@example.com</span>
                    </div>
                  </div>
                </td>
                <td>(123) 4567 890</td>
                <td>
                  <div class="d-inline-flex align-items-center">
                    <i class="ti ti-phone-incoming text-success me-2"></i>Incoming
                  </div>
                </td>
                <td>00.25</td>
                <td>14 Jan 2024, 04:27 AM</td>
                <td>
                  <div class="action-icon d-inline-flex align-items-center">
                    <a
                      href="#"
                      class="me-2 p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#call_history"
                      ><i class="ti ti-eye"></i
                    ></a>
                    <a
                      href="#"
                      class="p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check form-check-md">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a
                      href="#"
                      class="avatar avatar-md"
                      data-bs-toggle="modal"
                      data-bs-target="#view_details"
                    >
                      <img
                        src="@/assets/img/users/user-09.jpg"
                        class="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div class="ms-2">
                      <p class="text-dark fw-medium mb-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_details"
                          >Brian Villalobos</a
                        >
                      </p>
                      <span class="fs-12">brian@example.com</span>
                    </div>
                  </div>
                </td>
                <td>(179) 7382 829</td>
                <td>
                  <div class="d-inline-flex align-items-center">
                    <i class="ti ti-phone-outgoing text-success me-2"></i>Outgoing
                  </div>
                </td>
                <td>00.10</td>
                <td>21 Jan 2024, 03:19 AM</td>
                <td>
                  <div class="action-icon d-inline-flex align-items-center">
                    <a
                      href="#"
                      class="me-2 p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#call_history"
                      ><i class="ti ti-eye"></i
                    ></a>
                    <a
                      href="#"
                      class="p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check form-check-md">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a
                      href="#"
                      class="avatar avatar-md"
                      data-bs-toggle="modal"
                      data-bs-target="#view_details"
                    >
                      <img
                        src="@/assets/img/users/user-02.jpg"
                        class="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div class="ms-2">
                      <p class="text-dark fw-medium mb-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_details"
                          >Harvey Smith</a
                        >
                      </p>
                      <span class="fs-12">harvey@example.com</span>
                    </div>
                  </div>
                </td>
                <td>(184) 2719 738</td>
                <td>
                  <div class="d-inline-flex align-items-center">
                    <i class="ti ti-video text-success me-2"></i>Incoming
                  </div>
                </td>
                <td>00.40</td>
                <td>20 Feb 2024, 12:15 PM</td>
                <td>
                  <div class="action-icon d-inline-flex align-items-center">
                    <a
                      href="#"
                      class="me-2 p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#call_history"
                      ><i class="ti ti-eye"></i
                    ></a>
                    <a
                      href="#"
                      class="p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check form-check-md">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a
                      href="#"
                      class="avatar avatar-md"
                      data-bs-toggle="modal"
                      data-bs-target="#view_details"
                    >
                      <img
                        src="@/assets/img/users/user-03.jpg"
                        class="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div class="ms-2">
                      <p class="text-dark fw-medium mb-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_details"
                          >peral@example.com</a
                        >
                      </p>
                      <span class="fs-12">peral@example.com</span>
                    </div>
                  </div>
                </td>
                <td>(193) 7839 748</td>
                <td>
                  <div class="d-inline-flex align-items-center">
                    <i class="ti ti-phone-x text-danger me-2"></i>Missed Call
                  </div>
                </td>
                <td>00.00</td>
                <td>15 Mar 2024, 12:11 AM</td>
                <td>
                  <div class="action-icon d-inline-flex align-items-center">
                    <a
                      href="#"
                      class="me-2 p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#call_history"
                      ><i class="ti ti-eye"></i
                    ></a>
                    <a
                      href="#"
                      class="p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check form-check-md">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a
                      href="#"
                      class="avatar avatar-md"
                      data-bs-toggle="modal"
                      data-bs-target="#view_details"
                      ><img
                        src="@/assets/img/users/user-10.jpg"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="text-dark fw-medium mb-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_details"
                          >Doglas Martini</a
                        >
                      </p>
                      <span class="fs-12">martniwr@example.com</span>
                    </div>
                  </div>
                </td>
                <td>(183) 9302 890</td>
                <td>
                  <div class="d-inline-flex align-items-center">
                    <i class="ti ti-video text-success me-2"></i>Outgoing
                  </div>
                </td>
                <td>00.35</td>
                <td>12 Apr 2024, 05:48 PM</td>
                <td>
                  <div class="action-icon d-inline-flex align-items-center">
                    <a
                      href="#"
                      class="me-2 p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#call_history"
                      ><i class="ti ti-eye"></i
                    ></a>
                    <a
                      href="#"
                      class="p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check form-check-md">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a
                      href="#"
                      class="avatar avatar-md"
                      data-bs-toggle="modal"
                      data-bs-target="#view_details"
                    >
                      <img
                        src="@/assets/img/users/user-04.jpg"
                        class="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div class="ms-2">
                      <p class="text-dark fw-medium mb-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_details"
                          >Linda Ray</a
                        >
                      </p>
                      <span class="fs-12">ray456@example.com</span>
                    </div>
                  </div>
                </td>
                <td>(120) 3728 039</td>
                <td>
                  <div class="d-inline-flex align-items-center">
                    <i class="ti ti-phone-incoming text-success me-2"></i>Incomiing
                  </div>
                </td>
                <td>01.40</td>
                <td>20 Apr 2024, 06:11 PM</td>
                <td>
                  <div class="action-icon d-inline-flex align-items-center">
                    <a
                      href="#"
                      class="me-2 p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#call_history"
                      ><i class="ti ti-eye"></i
                    ></a>
                    <a
                      href="#"
                      class="p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check form-check-md">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a
                      href="#"
                      class="avatar avatar-md"
                      data-bs-toggle="modal"
                      data-bs-target="#view_details"
                    >
                      <img
                        src="@/assets/img/users/user-05.jpg"
                        class="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div class="ms-2">
                      <p class="text-dark fw-medium mb-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_details"
                          >Elliot Murray</a
                        >
                      </p>
                      <span class="fs-12">murray@example.com</span>
                    </div>
                  </div>
                </td>
                <td>(102) 8480 832</td>
                <td>
                  <div class="d-inline-flex align-items-center">
                    <i class="ti ti-video text-danger me-2"></i>Missed call
                  </div>
                </td>
                <td>00.00</td>
                <td>06 Jul 2024, 07:15 PM</td>
                <td>
                  <div class="action-icon d-inline-flex align-items-center">
                    <a
                      href="#"
                      class="me-2 p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#call_history"
                      ><i class="ti ti-eye"></i
                    ></a>
                    <a
                      href="#"
                      class="p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check form-check-md">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a
                      href="#"
                      class="avatar avatar-md"
                      data-bs-toggle="modal"
                      data-bs-target="#view_details"
                    >
                      <img
                        src="@/assets/img/users/user-06.jpg"
                        class="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div class="ms-2">
                      <p class="text-dark fw-medium mb-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_details"
                          >Rebecca Smtih</a
                        >
                      </p>
                      <span class="fs-12">smtih@example.com</span>
                    </div>
                  </div>
                </td>
                <td>(162) 8920 713</td>
                <td>
                  <div class="d-inline-flex align-items-center">
                    <i class="ti ti-phone-outgoing text-success me-2"></i>Outgoing
                  </div>
                </td>
                <td>00.45</td>
                <td>02 Sep 2024, 09:21 PM</td>
                <td>
                  <div class="action-icon d-inline-flex align-items-center">
                    <a
                      href="#"
                      class="me-2 p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#call_history"
                      ><i class="ti ti-eye"></i
                    ></a>
                    <a
                      href="#"
                      class="p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check form-check-md">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a
                      href="#"
                      class="avatar avatar-md"
                      data-bs-toggle="modal"
                      data-bs-target="#view_details"
                      ><img
                        src="@/assets/img/users/user-07.jpg"
                        class="img-fluid rounded-circle"
                        alt="img"
                    /></a>
                    <div class="ms-2">
                      <p class="text-dark fw-medium mb-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_details"
                          >Connie Waters</a
                        >
                      </p>
                      <span class="fs-12">connie@example.com</span>
                    </div>
                  </div>
                </td>
                <td>(189) 0920 723</td>
                <td>
                  <div class="d-inline-flex align-items-center">
                    <i class="ti ti-phone-incoming text-success me-2"></i>Incoming
                  </div>
                </td>
                <td>00.50</td>
                <td>15 Nov 2024, 12:44 PM</td>
                <td>
                  <div class="action-icon d-inline-flex align-items-center">
                    <a
                      href="#"
                      class="me-2 p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#call_history"
                      ><i class="ti ti-eye"></i
                    ></a>
                    <a
                      href="#"
                      class="p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="form-check form-check-md">
                    <input class="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <a
                      href="#"
                      class="avatar avatar-md"
                      data-bs-toggle="modal"
                      data-bs-target="#view_details"
                    >
                      <img
                        src="@/assets/img/users/user-08.jpg"
                        class="img-fluid rounded-circle"
                        alt="img"
                      />
                    </a>
                    <div class="ms-2">
                      <p class="text-dark fw-medium mb-0">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#view_details"
                          >Lori Broaddus</a
                        >
                      </p>
                      <span class="fs-12">broaddus@example.com</span>
                    </div>
                  </div>
                </td>
                <td>(168) 8392 823</td>
                <td>
                  <div class="d-inline-flex align-items-center">
                    <i class="ti ti-phone-x text-danger me-2"></i>Missed call
                  </div>
                </td>
                <td>00.00</td>
                <td>10 Dec 2024, 11:23 PM</td>
                <td>
                  <div class="action-icon d-inline-flex align-items-center">
                    <a
                      href="#"
                      class="me-2 p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#call_history"
                      ><i class="ti ti-eye"></i
                    ></a>
                    <a
                      href="#"
                      class="p-1 rounded-circle d-flex"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="ti ti-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Table List End -->
      </div>
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy;
        <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All Rights
        Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- ========================
    End Page Content
  ========================= -->

  <!-- Edit Employee Start -->
  <div class="modal fade" id="call_history">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="d-flex align-items-center">
            <h4 class="modal-title">Caller Details</h4>
          </div>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="card shadow-none">
              <div class="card-body">
                <div class="text-center">
                  <div class="avatar avatar-xxxl mb-3">
                    <img
                      src="@/assets/img/users/user-01.jpg"
                      alt="img"
                      class="rounded-circle"
                    />
                  </div>
                </div>
                <div class="d-flex align-items-center justify-content-center">
                  <router-link
                    to="/calls/video-call"
                    class="btn btn-light btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center me-3"
                    ><i class="ti ti-video fs-13"></i
                  ></router-link>
                  <router-link
                    to="/applications/chat"
                    class="btn btn-light btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center me-3"
                    ><i class="ti ti-message fs-13"></i
                  ></router-link>
                  <router-link
                    to="/calls/voice-call"
                    class="btn btn-light btn-icon rounded-circle p-0 d-flex align-items-center justify-content-center"
                    ><i class="ti ti-phone fs-13"></i
                  ></router-link>
                </div>
              </div>
            </div>
            <!-- start row -->
            <div class="row g-4">
              <div class="col-md-6">
                <div>
                  <p class="mb-1 fs-13">Name</p>
                  <h6 class="fw-medium fs-14">Anthony Lewis</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div>
                  <p class="mb-1 fs-13">Total Calls</p>
                  <h6 class="fw-medium fs-14">20</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div>
                  <p class="mb-1 fs-13">Phone</p>
                  <h6 class="fw-medium fs-14">(123) 4567 890</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div>
                  <p class="mb-1 fs-13">Average Call Timing</p>
                  <h6 class="fw-medium fs-14">00:30</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div>
                  <p class="mb-1 fs-13">Email</p>
                  <h6 class="fw-medium fs-14">anthony@example.com</h6>
                </div>
              </div>
              <div class="col-md-6">
                <div>
                  <p class="mb-1 fs-13">Average Waiting Time</p>
                  <h6 class="fw-medium fs-14">00:05</h6>
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Edit Employee End -->

  <!-- Delete Modal Start -->
  <div class="modal fade" id="delete_modal">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div class="mb-3">
            <span class="avatar bg-danger"><i class="ti ti-trash fs-24"></i></span>
          </div>
          <h6 class="mb-1">Delete Confirmation</h6>
          <p class="mb-3">Are you sure want to delete?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <router-link to="/calls/call-history" class="btn btn-danger"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Delete Modal End -->
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { ref } from "vue";
export default {
  data() {
    return {};
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    return {
      dateRangeInput,
    };
  },
};
</script>
