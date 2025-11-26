<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Locations
            <span
              class="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1"
              >Total Location : 565</span
            >
          </h4>
        </div>
        <div class="text-end d-flex">
          <a
            href="javascript:void(0);"
            class="btn btn-primary fs-13 btn-md"
            data-bs-toggle="modal"
            data-bs-target="#add_modal"
            ><i class="ti ti-plus me-1"></i>New Location</a
          >
        </div>
      </div>
      <!-- End Page Header -->

      <!--  Start Table -->
      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'ClinicName'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar avatar-md me-2">
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="img"
                    class="rounded-circle"
                  />
                </a>
                <a href="javascript:void(0);" class="text-dark fw-semibold">{{
                  record.ClinicName
                }}</a>
                <span
                  :class="[
                    '',
                    {
                      'badge badge-soft-success rounded text-success border border-success fw-medium ms-2':
                        record.Default === 'Default',
                      '': record.Default === '',
                    },
                  ]"
                  >{{ record.Default }}
                </span>
              </div>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_modal"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      >Delete</a
                    >
                  </li>
                </ul>
              </div>
            </template>
          </template>
        </a-table>
      </div>
      <!--  End Table -->
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
          <h5 class="modal-title text-dark fw-bold">New Location</h5>
          <button
            type="button"
            class="btn-close custom-btn-close opacity-100"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body pb-0">
          <!-- start row -->
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3 d-flex align-items-center">
                <label class="form-label mb-0">Image</label>
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

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Location Type<span class="text-danger ms-1">*</span></label
                >
                <vue3-select v-model="selected" :options="Locatp" placeholder="Select" />
              </div>
            </div>

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Email Address<span class="text-danger ms-1">*</span></label
                >
                <input type="email" class="form-control" />
              </div>
            </div>

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Phone Number<span class="text-danger ms-1">*</span></label
                >
                <input type="tel" class="form-control" />
              </div>
            </div>

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Address 1<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" />
              </div>
            </div>

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1"
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
                  v-model="selectedOne"
                  :options="CoundName"
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
                  v-model="selectedTwo"
                  :options="CoundSta"
                  placholder="Select"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >City<span class="text-danger ms-1">*</span></label
                >
                <vue3-select
                  v-model="selectedThree"
                  :options="CitiesCound"
                  placholder="Select"
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
          <!-- end row -->
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
            Add New Location
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Add modal  -->

  <!-- Start edit modal -->
  <div class="modal fade" id="edit_modal">
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark fw-bold">Edit Location</h5>
          <button
            type="button"
            class="btn-close custom-btn-close opacity-100"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body pb-0">
          <!-- start row -->
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3 d-flex align-items-center">
                <label class="form-label mb-0">Image</label>
                <div
                  class="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0"
                >
                  <img
                    src="@/assets/img/icons/clinic-08.svg"
                    class="position-relative z-n1"
                    alt="img"
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

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Name<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" value="James Carter" />
              </div>
            </div>

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Location Type<span class="text-danger ms-1">*</span></label
                >
                <vue3-select
                  v-model="selectedFour"
                  :options="LocatpEdit"
                  placeholder="Select"
                />
              </div>
            </div>

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Email Address<span class="text-danger ms-1">*</span></label
                >
                <input type="email" class="form-control" value="james@example.com" />
              </div>
            </div>

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Phone Number<span class="text-danger ms-1">*</span></label
                >
                <input type="tel" class="form-control" value="+1 43554 54584" />
              </div>
            </div>

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Address 1<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" value="123 Main Street" />
              </div>
            </div>

            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Address 2<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" value=" Apartment 4B" />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Country<span class="text-danger ms-1">*</span></label
                >
                <vue3-select
                  v-model="selectedFive"
                  :options="CoundNameEdit"
                  placeholder="USA"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >State<span class="text-danger ms-1">*</span></label
                >
                <vue3-select
                  v-model="selectedSix"
                  :options="CoundStaEdit"
                  placholder="California"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >City<span class="text-danger ms-1">*</span></label
                >
                <vue3-select
                  v-model="selectedSeven"
                  :options="CitiesCoundEdit"
                  placholder="Los Angeles"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label mb-1"
                  >Pincode<span class="text-danger ms-1">*</span></label
                >
                <input type="text" class="form-control" value="90001" />
              </div>
            </div>
          </div>
          <!-- end row -->
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
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End edit modal  -->

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
const columns = [
  {
    title: "Clinic Name",
    dataIndex: "ClinicName",
    key: "ClinicName",
    sorter: {
      compare: (a, b) =>
        a.ClinicName.toLowerCase() > b.ClinicName.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Address",
    dataIndex: "Address",
    key: "Address",
    sorter: {
      compare: (a, b) => (a.Address.toLowerCase() > b.Address.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    ClinicName: "Harmony Health Clinic",
    Image: "clinic-08.svg",
    Default: "Default",
    Address: "California",
  },
  {
    ClinicName: "WellCare Medical Center",
    Image: "clinic-07.svg",
    Default: "",
    Address: "Texas",
  },
  {
    ClinicName: "VitalLife Clinic",
    Image: "clinic-06.svg",
    Default: "",
    Address: "Florida",
  },
  {
    ClinicName: "BrightPath Family Clinic",
    Image: "clinic-05.svg",
    Default: "",
    Address: "New York",
  },
  {
    ClinicName: "Greeny Medical Clinic",
    Image: "clinic-04.svg",
    Default: "",
    Address: "Illinois",
  },
  {
    ClinicName: "CureWell Medical Hub",
    Image: "clinic-01.svg",
    Default: "",
    Address: "Ohio",
  },
  {
    ClinicName: "NovaCare Medical",
    Image: "clinic-03.svg",
    Default: "",
    Address: "Washington",
  },
];
import { ref } from "vue";
const valueOne = ref();
export default {
  data() {
    return {
      searchQuery: "",
      data,
      columns,
      valueOne,
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      CoundName: [
        { label: "Select", value: "Select" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
        { label: "France", value: "France" },
      ],
      Locatp: [
        { label: "Select", value: "Select" },
        { label: "In Person", value: "In Person" },
        { label: "Video Consultation", value: "Video Consultation" },
        { label: "Both", value: "Both" },
      ],
      CoundSta: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      CitiesCound: [
        { label: "Select", value: "Select" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "Toronto", value: "Toronto" },
        { label: "London", value: "London" },
        { label: "Munich", value: "Munich" },
        { label: "Paris", value: "Paris" },
      ],
      CoundNameEdit: [
        { label: "Select", value: "Select" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
        { label: "France", value: "France" },
      ],
      LocatpEdit: [
        { label: "Select", value: "Select" },
        { label: "In Person", value: "In Person" },
        { label: "Video Consultation", value: "Video Consultation" },
        { label: "Both", value: "Both" },
      ],
      CoundStaEdit: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      CitiesCoundEdit: [
        { label: "Select", value: "Select" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "Toronto", value: "Toronto" },
        { label: "London", value: "London" },
        { label: "Munich", value: "Munich" },
        { label: "Paris", value: "Paris" },
      ],
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.ClinicName.toLowerCase().includes(query) ||
          record.Address.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
