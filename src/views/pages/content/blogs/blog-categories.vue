<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="d-flex align-items-center pb-3 mb-3 border-bottom">
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">Categories</h4>
        </div>
        <div class="text-end">
          <a
            href="javascript:void(0);"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add_categories"
            ><i class="ti ti-plus me-1"></i>Add New Categories</a
          >
        </div>
      </div>
      <!-- End Page Header -->

      <!-- Table List -->
      <div class="table-responsive border">
        <table class="table table-nowrap">
          <thead class="tablehead-light">
            <tr>
              <th>Categories</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>General Medicine</td>
              <td>30 Apr 2025</td>
              <td>
                <span
                  class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="btn p-1 btn-white border"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_categories"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_categories"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Disease & Conditions</td>
              <td>15 Apr 2025</td>
              <td>
                <span
                  class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="btn p-1 btn-white border"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_categories"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_categories"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Mental Health</td>
              <td>02 Apr 2025</td>
              <td>
                <span
                  class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="btn p-1 btn-white border"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_categories"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_categories"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Patient Education</td>
              <td>27 Mar 2025</td>
              <td>
                <span
                  class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="btn p-1 btn-white border"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_categories"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_categories"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Nutrition & Lifestyle Medicine</td>
              <td>12 Mar 2025</td>
              <td>
                <span
                  class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="btn p-1 btn-white border"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_categories"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_categories"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Women’s & Men’s Health</td>
              <td>05 Mar 2025</td>
              <td>
                <span
                  class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="btn p-1 btn-white border"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_categories"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_categories"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Preventive Care</td>
              <td>24 Feb 2025</td>
              <td>
                <span
                  class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="btn p-1 btn-white border"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_categories"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_categories"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Medical Technology & Innovations</td>
              <td>16 Feb 2025</td>
              <td>
                <span
                  class="badge bg-soft-success fs-13 fw-medium text-success border border-success py-1 px-2"
                  >Active</span
                >
              </td>
              <td class="action-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="btn p-1 btn-white border"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_categories"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_categories"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Healthcare Policy & News</td>
              <td>01 Feb 2025</td>
              <td>
                <span
                  class="badge bg-soft-danger fs-13 fw-medium text-danger border border-danger py-1 px-2"
                  >Inactive</span
                >
              </td>
              <td class="action-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="btn p-1 btn-white border"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_categories"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_categories"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Pediatrics & Geriatrics</td>
              <td>25 Jan 2025</td>
              <td>
                <span
                  class="badge bg-soft-danger fs-13 fw-medium text-danger border border-danger py-1 px-2"
                  >Inactive</span
                >
              </td>
              <td class="action-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="btn p-1 btn-white border"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_categories"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_categories"
                      >Delete</a
                    >
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /Table List -->
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
  <!-- Start Add Categories -->
  <div id="add_categories" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title">Add New Category</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-2">
              <label class="form-label"
                >Category Name<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selected"
                :options="BlogGenCat"
                placeholder="Select"
              />
            </div>
            <div class="mb-2">
              <label class="form-label"
                >Date<span class="text-danger ms-1">*</span></label
              >
              <div class="input-group position-relative">
                <input
                  type="text"
                  class="form-control date-range bookingrange rounded-end h-auto py-2 bg-white"
                  ref="dateRangeInput"
                />
                <span class="input-icon-addon fs-16 text-gray-9">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Status<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedOne"
                :options="BlogGenSta"
                placeholder="Select"
              />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Category</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Categories -->

  <!-- Start Edit Categories -->
  <div id="edit_categories" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title">Edit Category</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-2">
              <label class="form-label"
                >Category Name<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedTwo"
                :options="BlogGenCatEdit"
                placeholder="General Medicine"
              />
            </div>
            <div class="mb-2">
              <label class="form-label"
                >Date<span class="text-danger ms-1">*</span></label
              >
              <div class="input-group position-relative">
                <input
                  type="text"
                  class="form-control date-range bookingrange rounded-end h-auto py-2 bg-white"
                  ref="dateRangeInput"
                />
                <span class="input-icon-addon fs-16 text-gray-9">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Status<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedThree"
                :options="BlogGenStaEdit"
                placeholder="Active"
              />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Edit Categories -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_categories">
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
          <p class="mb-3">Are you sure, you want to delete Blog Category?</p>
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
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      BlogGenCat: [
        { label: "Select", value: "Select" },
        { label: "General Medicine", value: "General Medicine" },
        { label: "Disease & Conditions", value: "Disease & Conditions" },
        { label: "Mental Health", value: "Mental Health" },
        { label: "Patient Education", value: "Patient Education" },
        {
          label: "Nutrition & Lifestyle Medicine",
          value: "Nutrition & Lifestyle Medicine",
        },
      ],
      BlogGenSta: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      BlogGenCatEdit: [
        { label: "Select", value: "Select" },
        { label: "General Medicine", value: "General Medicine" },
        { label: "Disease & Conditions", value: "Disease & Conditions" },
        { label: "Mental Health", value: "Mental Health" },
        { label: "Patient Education", value: "Patient Education" },
        {
          label: "Nutrition & Lifestyle Medicine",
          value: "Nutrition & Lifestyle Medicine",
        },
      ],
      BlogGenStaEdit: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
    };
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
