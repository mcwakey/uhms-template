<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div
        class="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom"
      >
        <div class="d-flex align-items-center">
          <h4 class="fw-bold mb-0 me-2">City</h4>
          <span class="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium"
            >Total City : 365</span
          >
        </div>
        <div class="text-end">
          <a
            href="javascript:void(0);"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add_countries"
            ><i class="ti ti-plus me-1"></i>Add New City</a
          >
        </div>
      </div>
      <!-- End Page Header -->

      <!-- Table List -->
      <div class="table-responsive border bg-white">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Country'">
              <div class="d-flex align-items-center">
                <a
                  href="javascript:void(0);"
                  class="avatar avatar-sm rounded-circle me-2 flex-shrink-0"
                >
                  <img
                    :src="getImageUrl(record.Image)"
                    class="rounded-circle"
                    alt="img"
                  />
                </a>
                <div>
                  <h6 class="fs-14 fw-medium mb-0">
                    <a href="javascript:void(0);">{{ record.Country }}</a>
                  </h6>
                </div>
              </div>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class="fw-medium fs-13"
                :class="[
                  'badge',
                  {
                    'badge-soft-danger rounded text-danger border border-danger':
                      record.Status === 'Inactive',
                    'badge-soft-success rounded text-success border border-success':
                      record.Status === 'Active',
                  },
                ]"
                >{{ record.Status }}
              </span>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item">
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
                      data-bs-target="#edit_countries"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_countries"
                      >Delete</a
                    >
                  </li>
                </ul>
              </div>
            </template>
          </template>
        </a-table>
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
  <div id="add_countries" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title">Add New City</h5>
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
                >Country Name<span class="text-danger ms-1">*</span></label
              >
              <vue3-select v-model="selected" :options="CoundName" placeholder="Select" />
            </div>
            <div class="mb-2">
              <label class="form-label"
                >State<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedOne"
                :options="CoundSta"
                placholder="Select"
              />
            </div>
            <div class="mb-2">
              <label class="form-label"
                >City<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedTwo"
                :options="CitiesCound"
                placholder="Select"
              />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Status<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedThree"
                :options="CoundSta"
                placholder="Select"
              />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add City</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Categories -->

  <!-- Start Edit Categories -->
  <div id="edit_countries" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title">Edit New City</h5>
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
                >Country Name<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedFour"
                :options="CoundNameEdit"
                placeholder="USA"
              />
            </div>
            <div class="mb-2">
              <label class="form-label"
                >State<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedFive"
                :options="CoundStaEdit"
                placholder="California"
              />
            </div>
            <div class="mb-2">
              <label class="form-label"
                >City<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedSix"
                :options="CitiesCoundEdit"
                placholder="Los Angeles"
              />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Status<span class="text-danger ms-1">*</span></label
              >
              <vue3-select
                v-model="selectedSeven"
                :options="CoundSta"
                placholder="Active"
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
  <div class="modal fade" id="delete_countries">
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
const columns = [
  {
    title: "Country Code",
    dataIndex: "CountryCode",
    key: "CountryCode",
    sorter: {
      compare: (a, b) =>
        a.CountryCode.toLowerCase() > b.CountryCode.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Country",
    dataIndex: "Country",
    key: "Country",
    sorter: {
      compare: (a, b) => (a.Country.toLowerCase() > b.Country.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "State",
    dataIndex: "State",
    key: "State",
    sorter: {
      compare: (a, b) => (a.State.toLowerCase() > b.State.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "City",
    dataIndex: "City",
    key: "City",
    sorter: {
      compare: (a, b) => (a.City.toLowerCase() > b.City.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => (a.Status.toLowerCase() > b.Status.toLowerCase() ? -1 : 1),
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
    key: "1",
    CountryCode: "US",
    Country: "USA",
    Image: "us.svg",
    State: "California",
    Status: "Active",
    City: "Los Angeles",
  },
  {
    key: "2",
    CountryCode: "CA",
    Country: "Canada",
    Image: "ca.svg",
    State: "Ontario",
    Status: "Active",
    City: "Toronto",
  },
  {
    key: "3",
    CountryCode: "UK",
    Country: "UK",
    Image: "uk.svg",
    State: "England",
    Status: "Active",
    City: "London",
  },
  {
    key: "4",
    CountryCode: "DE",
    Country: "Germany",
    Image: "de.svg",
    State: "Bavaria",
    Status: "Active",
    City: "Munich",
  },
  {
    key: "5",
    CountryCode: "FR",
    Country: "France",
    Image: "fr.svg",
    State: "Le-de-France",
    Status: "Active",
    City: "Paris",
  },
  {
    key: "6",
    CountryCode: "AR",
    Country: "Argentina",
    Image: "ar.svg",
    State: "Buenos Aires",
    Status: "Active",
    City: "Buenos Aires",
  },
  {
    key: "7",
    CountryCode: "IN",
    Country: "India",
    Image: "in.svg",
    State: "Maharashtra",
    Status: "Active",
    City: "Mumbai",
  },
  {
    key: "8",
    CountryCode: "IT",
    Country: "Italy",
    Image: "it.svg",
    State: "Lombardy",
    Status: "Active",
    City: "Milan",
  },
  {
    key: "9",
    CountryCode: "NZ",
    Country: "New Zealand",
    Image: "nz.svg",
    State: "Wellington",
    Status: "Inactive",
    City: "Wellington",
  },
  {
    key: "10",
    CountryCode: "AU",
    Country: "Australia",
    Image: "au.svg",
    State: "New South Wales",
    Status: "Inactive",
    City: "Sydney",
  },
];

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
      searchQuery: "",
      data,
      columns,
      CoundName: [
        { label: "Select", value: "Select" },
        { label: "USA", value: "USA" },
        { label: "Canada", value: "Canada" },
        { label: "UK", value: "UK" },
        { label: "Germany", value: "Germany" },
        { label: "France", value: "France" },
      ],
      CoundSat: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "Ontario", value: "Ontario" },
        { label: "England", value: "England" },
        { label: "Bavaria", value: "Bavaria" },
        { label: "Le-de-France", value: "Le-de-France" },
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
      CoundSatEdit: [
        { label: "Select", value: "Select" },
        { label: "California", value: "California" },
        { label: "Ontario", value: "Ontario" },
        { label: "England", value: "England" },
        { label: "Bavaria", value: "Bavaria" },
        { label: "Le-de-France", value: "Le-de-France" },
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
      return new URL(`/src/assets/img/flags/${imageName}`, import.meta.url).href;
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.CountryCode.toLowerCase().includes(query) ||
          record.Country.toLowerCase().includes(query) ||
          record.State.toLowerCase().includes(query) ||
          record.City.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
