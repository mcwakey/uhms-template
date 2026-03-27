<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
		Start Page Content
	========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="d-flex align-items-center pb-3 mb-3 border-bottom">
        <div class="d-flex align-items-center">
          <h4 class="fw-bold mb-0 me-2">Contact Message</h4>
          <span class="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium"
            >Total Contact Message : 565</span
          >
        </div>
      </div>
      <!-- End Page Header -->

      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set mb-3">
          <div class="d-flex align-items-center flex-wrap gap-2">
            <div class="table-search d-flex align-items-center mb-0">
              <div class="search-input">
                <a href="javascript:void(0);" class="btn-searchset"></a>
                <div id="DataTables_Table_0_filter" class="dataTables_filter">
                  <label>
                    <input
                      type="search"
                      class="form-control form-control-sm"
                      placeholder="Search"
                      v-model="searchQuery"
                      aria-controls="DataTables_Table_0"
                  /></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3"
        >
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <i class="ti ti-filter me-2 fs-14"></i>Filter
            </a>
            <div
              class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown"
              id="filter-dropdown"
            >
              <div
                class="d-flex align-items-center justify-content-between border-bottom filter-header"
              >
                <h4 class="fs-18 fw-bold">Filter</h4>
                <div class="d-flex align-items-center">
                  <a
                    href="javascript:void(0);"
                    class="link-danger text-decoration-underline me-3"
                    >Clear All</a
                  >
                </div>
              </div>
              <form action="#">
                <div class="filter-body pb-1">
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <div class="dropdown">
                      <a
                        href="javascript:void(0);"
                        class="dropdown-toggle btn bg-white d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-expanded="true"
                      >
                        Select
                      </a>
                      <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                        <div class="mb-3">
                          <div class="input-icon-start position-relative">
                            <span class="input-icon-addon fs-12">
                              <i class="isax isax-search-normal"></i>
                            </span>
                            <input
                              type="text"
                              class="form-control form-control-sm"
                              placeholder="Search"
                            />
                          </div>
                        </div>
                        <ul class="mb-3">
                          <li
                            class="d-flex align-items-center justify-content-between mb-3"
                          >
                            <label class="d-inline-flex align-items-center text-gray-9">
                              <input
                                class="form-check-input select-all m-0 me-2"
                                type="checkbox"
                              />
                              Select All
                            </label>
                            <a
                              href="javascript:void(0);"
                              class="link-danger fw-medium text-decoration-underline"
                              >Reset</a
                            >
                          </li>
                          <li>
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-sm rounded-circle me-2"
                                ><img
                                  src="@/assets/img/users/user-33.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Alberto Ripley
                            </label>
                          </li>
                          <li>
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-sm rounded-circle me-2"
                                ><img
                                  src="@/assets/img/users/user-12.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Bernard Griffith
                            </label>
                          </li>
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
                              >Carol Lam
                            </label>
                          </li>
                          <li>
                            <label
                              class="dropdown-item px-2 d-flex align-items-center text-dark"
                            >
                              <input class="form-check-input m-0 me-2" type="checkbox" />
                              <span class="avatar avatar-sm rounded-circle me-2"
                                ><img
                                  src="@/assets/img/users/user-08.jpg"
                                  class="flex-shrink-0 rounded-circle"
                                  alt="img" /></span
                              >Ezra Belcher
                            </label>
                          </li>
                        </ul>
                        <div class="row g-2">
                          <div class="col-6">
                            <a
                              href="javascript:void(0);"
                              class="btn btn-outline-white w-100 close-filter"
                              >Cancel</a
                            >
                          </div>
                          <div class="col-6">
                            <a href="javascript:void(0);" class="btn btn-primary w-100"
                              >Select</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <label class="form-label">Date</label>
                    </div>
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
                </div>
                <div
                  class="filter-footer d-flex align-items-center justify-content-end border-top"
                >
                  <a
                    href="javascript:void(0);"
                    class="btn btn-light btn-md me-2"
                    id="close-filter"
                    >Close</a
                  >
                  <button type="submit" class="btn btn-primary btn-md">Filter</button>
                </div>
              </form>
            </div>
          </div>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
            >
              <span class="me-1"> Sort By : </span> Recent
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Recent</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Oldest</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Name'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar avatar-sm me-2">
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="product"
                    class="rounded-circle"
                  />
                </a>
                <a href="javascript:void(0);" class="fw-medium">{{ record.Name }}</a>
              </div>
            </template>
            <template v-if="column.key === 'Message'">
              <p class="truncate-text">
                {{ record.Message }}
              </p>
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
                      data-bs-target="#edit_contact"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_contact"
                      >Delete</a
                    >
                  </li>
                </ul>
              </div>
            </template>
          </template>
        </a-table>
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

  <!-- ========================
		End Page Content
	========================= -->
  <!-- End Wrapper -->

  <!-- Start Edit Contact -->
  <div id="edit_contact" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title">Edit New Country</h5>
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
            <!-- start row -->
            <div class="row">
              <div class="col-lg-12">
                <div class="mb-2">
                  <label class="form-label"
                    >Name<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="John Carter" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Email Address<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" value="john@example.com" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-6">
                <div class="mb-2">
                  <label class="form-label"
                    >Phone Number<span class="text-danger ms-1">*</span></label
                  >
                  <input type="text" class="form-control" id="phone" />
                </div>
              </div>
              <!-- end col -->
              <div class="col-lg-12">
                <div class="mb-2">
                  <label class="form-label">Message</label>
                  <textarea class="form-control" rows="3">
Unable to log into my account. Can you assist?</textarea
                  >
                </div>
              </div>
              <!-- end col -->
            </div>
            <!-- end row -->
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
  <!-- End Edit Contact -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_contact">
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
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    key: "Phone",
    sorter: {
      compare: (a, b) => (a.Phone.toLowerCase() > b.Phone.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    key: "Email",
    sorter: {
      compare: (a, b) => (a.Email.toLowerCase() > b.Email.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Message",
    dataIndex: "Message",
    key: "Message",
    sorter: {
      compare: (a, b) => (a.Message.toLowerCase() > b.Message.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Created On",
    dataIndex: "CreatedOn",
    key: "CreatedOn",
    sorter: {
      compare: (a, b) => (a.CreatedOn.toLowerCase() > b.CreatedOn.toLowerCase() ? -1 : 1),
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
    Name: "Alberto Ripley",
    Phone: "+1 41245 54132",
    Email: "alberto@example.com",
    Image: "user-33.jpg",
    Message: "Unable to log into my account. Can you assist?",
    CreatedOn: "30 Apr 2025",
  },
  {
    Name: "Susan Babin",
    Phone: "+1 54554 54789",
    Email: "susan@example.com",
    Image: "user-01.jpg",
    Message: "My invoices are not being sent to clients. Please help!",
    CreatedOn: "15 Apr 2025",
  },
  {
    Name: "Carol Lam",
    Phone: "+1 43554 54985",
    Email: "carol@example.com",
    Image: "user-02.jpg",
    Message: "How do I integrate payment gateways for faster transactions?",
    CreatedOn: "02 Apr 2025",
  },
  {
    Name: "Marsha Noland",
    Phone: "+1 47554 54257",
    Email: "marsha@example.com",
    Image: "user-04.jpg",
    Message: "I need help generating financial reports for my business.",
    CreatedOn: "27 Mar 2025",
  },
  {
    Name: "Irma Armstrong",
    Phone: "+1 54114 57526",
    Email: "irma@example.com",
    Image: "user-05.jpg",
    Message: "Can I upgrade my plan without losing my existing data?",
    CreatedOn: "12 Mar 2025",
  },
  {
    Name: "Jesus Adams",
    Phone: "+1 51247 56574",
    Email: "jesus@example.com",
    Image: "user-07.jpg",
    Message: "How does the system calculate taxes automatically?",
    CreatedOn: "05 Mar 2025",
  },
  {
    Name: "Ezra Belcher",
    Phone: "+1 41452 25741",
    Email: "ezra@example.com",
    Image: "user-08.jpg",
    Message: "The mobile app crashes frequently when generating invoices.",
    CreatedOn: "19 Feb 2025",
  },
  {
    Name: "Glen Lentz",
    Phone: "+1 51425 21498",
    Email: "glen@example.com",
    Image: "user-10.jpg",
    Message: "How do I categorize expenses for better tracking?",
    CreatedOn: "16 Feb 2025",
  },
  {
    Name: "Bernard Griffith",
    Phone: "+1 45214 98741",
    Email: "bernard@example.com",
    Image: "user-12.jpg",
    Message: "Can I customize invoice templates with my company branding?",
    CreatedOn: "01 Feb 2025",
  },
  {
    Name: "John Elsass",
    Phone: "+1 41245 32540",
    Email: "john@example.com",
    Image: "user-14.jpg",
    Message: "How can I add team members with different permission levels?",
    CreatedOn: "20 Jas 2025",
  },
];
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
export default {
  data() {
    return {
      searchQuery: "",
      data,
      columns,
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Name.toLowerCase().includes(query) ||
          record.Phone.toLowerCase().includes(query) ||
          record.Email.toLowerCase().includes(query) ||
          record.Message.toLowerCase().includes(query) ||
          record.CreatedOn.toLowerCase().includes(query)
        );
      });
    },
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
