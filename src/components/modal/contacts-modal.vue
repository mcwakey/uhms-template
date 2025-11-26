<template>
  <!-- Start Add Customer -->
  <div class="modal fade" id="add-contact">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h5 class="mb-0">Add Contact</h5>
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
            <div class="d-flex align-items-center mb-3">
              <div
                class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0"
              >
                <i class="ti ti-photo text-primary"></i>
              </div>
              <div class="d-inline-flex flex-column align-items-start">
                <div
                  class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2"
                >
                  <i class="ti ti-photo me-1"></i>Upload Image
                  <input type="file" class="form-control image-sign" multiple="" />
                </div>
                <span class="text-gray-9 fs-12"
                  >JPG or PNG format, not exceeding 5MB.</span
                >
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 mb-3">
                <label class="form-label"
                  >First Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
              <div class="col-lg-6 mb-3">
                <label class="form-label"
                  >Last Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
              <div class="col-lg-12 mb-3">
                <label class="form-label"
                  >Email<span class="text-danger ms-1">*</span></label
                >
                <input type="email" class="form-control" />
              </div>
              <div class="col-lg-12 mb-3">
                <label class="form-label"
                  >Phone<span class="text-danger ms-1">*</span></label
                >
                <input type="tel" class="form-control" />
              </div>
              <div class="col-lg-12">
                <div class="mb-0">
                  <label class="form-label"
                    >Contact Type <span class="text-danger">*</span></label
                  >
                  <vue3-select
                    v-model="selected"
                    :options="Contacttype"
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn me-2 btn-light fs-13 fw-medium shadow-none"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary fs-13 fw-medium">
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Customer -->

  <!-- Start Edit Customer -->
  <div class="modal fade" id="edit-contact">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div class="page-title">
            <h5 class="mb-0">Edit Contact</h5>
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
            <div class="d-flex align-items-center mb-3">
              <div
                class="avatar avatar-xxl border border-dashed bg-light me-3 flex-shrink-0"
              >
                <div class="position-relative d-flex align-items-center">
                  <img
                    src="@/assets/img/profiles/avatar-01.jpg"
                    class="avatar avatar-xl"
                    alt="User Img"
                  />
                  <a
                    href="javascript:void(0);"
                    class="rounded-trash trash-top d-flex align-items-center justify-content-center"
                    ><i class="ti ti-trash"></i
                  ></a>
                </div>
              </div>
              <div class="d-inline-flex flex-column align-items-start">
                <div
                  class="drag-upload-btn btn btn-sm btn-primary position-relative mb-2"
                >
                  <i class="ti ti-photo me-1"></i>Upload Image
                  <input type="file" class="form-control image-sign" multiple="" />
                </div>
                <span class="text-gray-9 fs-12"
                  >JPG or PNG format, not exceeding 5MB.</span
                >
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 mb-3">
                <label class="form-label"
                  >First Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" value="Carl" />
              </div>
              <div class="col-lg-6 mb-3">
                <label class="form-label"
                  >Last Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" value="Evans" />
              </div>
              <div class="col-lg-12 mb-3">
                <label class="form-label"
                  >Email<span class="text-danger ms-1">*</span></label
                >
                <input type="email" class="form-control" value="carlevans@example.com" />
              </div>
              <div class="col-lg-12 mb-3">
                <label class="form-label"
                  >Phone<span class="text-danger ms-1">*</span></label
                >
                <input type="tel" class="form-control" value="+12163547758 " />
              </div>
              <div class="col-lg-12">
                <div class="mb-0">
                  <label class="form-label"
                    >Contact Type <span class="text-danger">*</span></label
                  >
                  <vue3-select
                    v-model="selectedOne"
                    :options="Contacttype"
                    placeholder="Admin"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn me-2 btn-light fs-13 fw-medium shadow-none"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary fs-13 fw-medium">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Edit Customer -->

  <!-- Start Modal  -->
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
            <router-link to="/applications/contacts" class="btn btn-danger"
              >Yes, Delete</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal  -->
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      Contacttype: [
        { label: "Admin", name: "Admin" },
        { label: "Salesman", name: "Salesman" },
      ],
    };
  },
};
</script>
