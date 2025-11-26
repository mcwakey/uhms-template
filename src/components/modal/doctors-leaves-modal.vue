<template>
  <!-- Start Add leave -->
  <div class="modal fade" id="add-leave">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">Add New Leave</h5>
          <button
            type="button"
            class="btn-close btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Leave Type<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    Select
                  </a>
                  <ul class="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                    <li>
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control form-control"
                          placeholder="Search"
                        />
                      </div>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Casual Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Sick Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Maternity Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Paternity Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Compensatory Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Emergency Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Bereavement Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Study/Exam Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Paid Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Unpaid Leave
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >From Date<span class="text-danger">*</span></label
                >
                <div class="input-group position-relative">
                  <a-date-picker
                    v-model="valueOne"
                    class="form-control datetimepicker"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >To Date<span class="text-danger">*</span></label
                >
                <div class="input-group position-relative">
                  <a-date-picker
                    v-model="valueTwo"
                    class="form-control datetimepicker"
                    placeholder="dd/mm/yyyy"
                  />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >No of Days<span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <div class="row p-2 bg-light rounded align-items-center flex-wrap">
                  <div class="col-lg-6">
                    <label class="form-label mb-1 text-body fs-14 fw-medium"
                      >dd/mm/yyyy</label
                    >
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label mb-1 text-dark fs-14 fw-medium"
                      >Leave Type<span class="text-danger">*</span></label
                    >
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100"
                      >
                        <li>
                          <label
                            class="dropdown-item px-2 d-flex align-items-center rounded-1"
                          >
                            <input class="form-check-input m-0 me-2" type="checkbox" />
                            Applied
                          </label>
                        </li>
                        <li>
                          <label
                            class="dropdown-item px-2 d-flex align-items-center rounded-1"
                          >
                            <input
                              class="form-check-input m-0 me-2"
                              type="checkbox"
                              checked
                            />
                            Approved
                          </label>
                        </li>
                        <li>
                          <label
                            class="dropdown-item px-2 d-flex align-items-center rounded-1"
                          >
                            <input
                              class="form-check-input m-0 me-2"
                              type="checkbox"
                              checked
                            />
                            Rejected
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <div>
                  <label class="form-label mb-1 text-dark fs-14 fw-medium">Reason</label>
                  <textarea
                    rows="4"
                    class="form-control rounded"
                    placeholder="Description"
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <!-- end col -->
          </div>
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
            Add New Leave
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add New leave  -->

  <!-- Start Cancel Modal -->
  <div class="modal fade" id="cancel-leave">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">Cancel Reason</h5>
          <button
            type="button"
            class="btn-close opacity-100"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <div>
              <label class="form-label mb-1 text-dark fs-14 fw-medium">Reason</label>
              <textarea rows="4" class="form-control rounded" placeholder="Description">
              </textarea>
            </div>
          </div>
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
            Cancel Leave
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Cancel Modal  -->

  <!-- Start Add leave -->
  <div class="modal fade" id="edit-leave">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">Edit New Leave</h5>
          <button
            type="button"
            class="btn-close btn-close-modal"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >Leave Type<span class="text-danger">*</span></label
                >
                <div class="dropdown">
                  <a
                    href="javascript:void(0);"
                    class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="true"
                  >
                    Casual Leave
                  </a>
                  <ul class="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100">
                    <li>
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control form-control"
                          placeholder="Search"
                        />
                      </div>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Casual Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Sick Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Maternity Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Paternity Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Compensatory Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Emergency Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Bereavement Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input
                          class="form-check-input m-0 me-2"
                          type="checkbox"
                          checked
                        />
                        Study/Exam Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Paid Leave
                      </label>
                    </li>
                    <li>
                      <label
                        class="dropdown-item px-2 d-flex align-items-center rounded-1"
                      >
                        <input class="form-check-input m-0 me-2" type="checkbox" />
                        Unpaid Leave
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >From Date<span class="text-danger">*</span></label
                >
                <div class="input-group position-relative">
                  <a-date-picker
                    v-model="valueOne"
                    class="form-control datetimepicker"
                    placeholder="20/09/2025"
                  />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >To Date<span class="text-danger">*</span></label
                >
                <div class="input-group position-relative">
                  <a-date-picker
                    v-model="valueTwo"
                    class="form-control datetimepicker"
                    placeholder="20/09/2025"
                  />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1 text-dark fs-14 fw-medium"
                  >No of Days<span class="text-danger">*</span></label
                >
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="30" />
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <div class="row p-2 bg-light rounded align-items-center flex-wrap">
                  <div class="col-lg-6">
                    <label class="form-label mb-1 text-body fs-14 fw-medium"
                      >dd/mm/yyyy</label
                    >
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label mb-1 text-dark fs-14 fw-medium"
                      >Leave Type<span class="text-danger">*</span></label
                    >
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle form-control w-100 d-flex align-items-center justify-content-between"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Applied
                      </a>
                      <ul
                        class="dropdown-menu dropdown-menu-lg p-2 dropdown-employee w-100"
                      >
                        <li>
                          <label
                            class="dropdown-item px-2 d-flex align-items-center rounded-1"
                          >
                            <input class="form-check-input m-0 me-2" type="checkbox" />
                            Applied
                          </label>
                        </li>
                        <li>
                          <label
                            class="dropdown-item px-2 d-flex align-items-center rounded-1"
                          >
                            <input
                              class="form-check-input m-0 me-2"
                              type="checkbox"
                              checked
                            />
                            Approved
                          </label>
                        </li>
                        <li>
                          <label
                            class="dropdown-item px-2 d-flex align-items-center rounded-1"
                          >
                            <input
                              class="form-check-input m-0 me-2"
                              type="checkbox"
                              checked
                            />
                            Rejected
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end col -->

            <div class="col-lg-12">
              <div class="mb-3">
                <div>
                  <label class="form-label mb-1 text-dark fs-14 fw-medium">Reason</label>
                  <textarea
                    rows="4"
                    class="form-control rounded"
                    placeholder="Description"
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <!-- end col -->
          </div>
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
            Edit Leave
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add New leave  -->

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

<script>
import { ref } from "vue";
const valueOne = ref();
const valueTwo = ref();
export default {
  data() {
    return {
      valueOne,
      valueTwo,
    };
  },
};
</script>
