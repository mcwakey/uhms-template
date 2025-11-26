<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div class="mb-3 pb-3 border-bottom">
        <h4 class="fw-bold mb-0">Attendance</h4>
      </div>
      <!-- End Page Header -->

      <div class="d-flex align-items-center justify-content-between flex-wrap">
        <div class="search-set mb-3">
          <div class="d-flex align-items-center">
            <div class="table-search d-flex align-items-center mb-0 me-2">
              <div class="search-input">
                <a href="javascript:void(0);" class="btn-searchset"></a>
                <input type="text" class="form-control" placeholder="Search" />
              </div>
            </div>
            <div class="d-flex right-content align-items-center flex-wrap">
              <div
                id="reportrange"
                class="reportrange-picker d-flex align-items-center"
                ref="dateRangeInput"
              >
                <i class="ti ti-calendar text-gray-5 fs-14 me-1"></i
                ><span class="reportrange-picker-field">16 Apr 25 - 16 Apr 25</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex table-dropdown mb-3 right-content align-items-center flex-wrap row-gap-3"
        >
          <span
            class="badge badge-sm badge-soft-success border border-success fw-medium me-2"
            >Present</span
          >
          <span
            class="badge badge-sm badge-soft-danger border border-danger fw-medium me-2"
            >Absent</span
          >
          <span class="badge badge-sm badge-soft-info border border-info fw-medium"
            >Holiday</span
          >
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-nowrap datatable">
          <thead class="thead-light">
            <tr>
              <th>Staff</th>
              <th>%</th>
              <th>01</th>
              <th>02</th>
              <th>03</th>
              <th>04</th>
              <th>05</th>
              <th>06</th>
              <th>07</th>
              <th>08</th>
              <th>09</th>
              <th>10</th>
              <th>11</th>
              <th>12</th>
              <th>13</th>
              <th>14</th>
              <th>15</th>
              <th>16</th>
              <th>17</th>
              <th>18</th>
              <th>19</th>
              <th>20</th>
              <th>21</th>
              <th>22</th>
              <th>23</th>
              <th>24</th>
              <th>25</th>
              <th>26</th>
              <th>27</th>
              <th>28</th>
              <th>29</th>
              <th>30</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#view_staff"
                  >
                    <img
                      src="@/assets/img/users/user-08.jpg"
                      alt="Doctor"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="mb-0 fs-14 fw-semibold">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_staff"
                        >James Adair</a
                      >
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="badge badge-soft-success border border-success fw-medium"
                  >100%</span
                >
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#view_staff"
                  >
                    <img
                      src="@/assets/img/users/user-03.jpg"
                      alt="Doctor"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="mb-0 fs-14 fw-semibold">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_staff"
                        >Adam Milne</a
                      >
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="badge badge-soft-warning border border-warning fw-medium"
                  >70%</span
                >
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#view_staff"
                  >
                    <img
                      src="@/assets/img/users/user-04.jpg"
                      alt="Doctor"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="mb-0 fs-14 fw-semibold">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_staff"
                        >Richard Clark</a
                      >
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="badge badge-soft-warning border border-warning fw-medium"
                  >75%</span
                >
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#view_staff"
                  >
                    <img
                      src="@/assets/img/users/user-05.jpg"
                      alt="Doctor"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="mb-0 fs-14 fw-semibold">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_staff"
                        >Robert Reid</a
                      >
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="badge badge-soft-danger border border-danger fw-medium"
                  >40%</span
                >
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#view_staff"
                  >
                    <img
                      src="@/assets/img/users/user-06.jpg"
                      alt="Doctor"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="mb-0 fs-14 fw-semibold">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_staff"
                        >Dottie Jeny</a
                      >
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="badge badge-soft-success border border-success fw-medium"
                  >85%</span
                >
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#view_staff"
                  >
                    <img
                      src="@/assets/img/users/user-07.jpg"
                      alt="Doctor"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="mb-0 fs-14 fw-semibold">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_staff"
                        >Cheryl Bilodeau</a
                      >
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="badge badge-soft-success border border-success fw-medium"
                  >92%</span
                >
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#view_staff"
                  >
                    <img
                      src="@/assets/img/users/user-02.jpg"
                      alt="Doctor"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="mb-0 fs-14 fw-semibold">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_staff"
                        >Valerie Padgett</a
                      >
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="badge badge-soft-info border border-info fw-medium"
                  >55%</span
                >
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#view_staff"
                  >
                    <img
                      src="@/assets/img/users/user-25.jpg"
                      alt="Doctor"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="mb-0 fs-14 fw-semibold">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_staff"
                        >Diane Nash</a
                      >
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="badge badge-soft-warning border border-warning fw-medium"
                  >70%</span
                >
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#view_staff"
                  >
                    <img
                      src="@/assets/img/users/user-29.jpg"
                      alt="Doctor"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="mb-0 fs-14 fw-semibold">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_staff"
                        >Sally Cavazos</a
                      >
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="badge badge-soft-info border border-info fw-medium"
                  >60%</span
                >
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
            </tr>
            <tr>
              <td>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="avatar me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#view_staff"
                  >
                    <img
                      src="@/assets/img/users/user-12.jpg"
                      alt="Doctor"
                      class="rounded-circle"
                    />
                  </a>
                  <div>
                    <h6 class="mb-0 fs-14 fw-semibold">
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#view_staff"
                        >Forest Heath</a
                      >
                    </h6>
                  </div>
                </div>
              </td>
              <td>
                <span class="badge badge-soft-success border border-success fw-medium"
                  >80%</span
                >
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-info"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-danger"><i class="ti ti-square-filled fs-14"></i></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
              <td>
                <span class="text-success"
                  ><i class="ti ti-square-filled fs-14"></i
                ></span>
              </td>
            </tr>
          </tbody>
        </table>
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
</template>
<script>
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
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
