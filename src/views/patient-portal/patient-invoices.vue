<template>
  <patients-header></patients-header>
  <patients-sidebar></patients-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content content-two">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">
            Invoices
            <span
              class="badge badge-soft-primary border pt-1 px-2 border-primary fw-medium ms-2 fw-medium fs-13"
              >Total Invoices : 582</span
            >
          </h4>
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

      <!-- start row -->
      <div class="row">
        <div class="col-sm-12">
          <div>
            <div class="card-body p-0">
              <div class="table-responsive table-nowrap">
                <a-table
                  class="table border datatable"
                  :columns="columns"
                  :data-source="filteredPages"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'InvoiceID'">
                      <a href=""> {{ record.InvoiceID }}</a>
                    </template>
                    <template v-if="column.key === 'Status'">
                      <span
                        class="fw-medium fs-13"
                        :class="[
                          'badge',
                          {
                            'badge-soft-success': record.Status === 'Paid',
                            'badge-soft-warning': record.Status === 'Partially Paid',
                            'badge-soft-danger': record.Status === 'UnPaid',
                          },
                        ]"
                        ><i class="ti ti-point-filled me-1"></i>{{ record.Status }}
                      </span>
                    </template>
                    <template v-if="column.key === 'action'">
                      <div class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                          <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul class="dropdown-menu p-2">
                          <li>
                            <router-link
                              to="/patient/patient-invoice-details"
                              class="dropdown-item d-flex align-items-center"
                              >View</router-link
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
            </div>
          </div>
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
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
  <!-- Start Edit Modal -->
  <div id="edit_invoices" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title">Edit Invoices</h5>
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
            <div class="mb-2">
              <label class="form-label"
                >Edit Invoices<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control rounded-end h-auto py-2 bg-white" />
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
                v-model="selected"
                :options="ActsSatOne"
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
  <!-- End Edit Modal -->

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
    title: "Invoice ID",
    dataIndex: "InvoiceID",
    key: "InvoiceID",
    sorter: {
      compare: (a, b) => (a.InvoiceID.toLowerCase() > b.InvoiceID.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Description",
    dataIndex: "Description",
    key: "Description",
    sorter: {
      compare: (a, b) =>
        a.Description.toLowerCase() > b.Description.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Created Date",
    dataIndex: "CreatedDate",
    key: "CreatedDate",
    sorter: {
      compare: (a, b) =>
        a.CreatedDate.toLowerCase() > b.CreatedDate.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Due Date",
    dataIndex: "DueDate",
    key: "DueDate",
    sorter: {
      compare: (a, b) => (a.DueDate.toLowerCase() > b.DueDate.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    key: "Amount",
    sorter: {
      compare: (a, b) => (a.Amount.toLowerCase() > b.Amount.toLowerCase() ? -1 : 1),
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
    InvoiceID: "#INV0025",
    Description: "General Consultation",
    CreatedDate: "30 Apr 2025",
    DueDate: "30 Apr 2025",
    Amount: "$800",
    Status: "Paid",
  },
  {
    InvoiceID: "#INV0024",
    Description: "Dental Cleaning",
    CreatedDate: "15 Apr 2025",
    DueDate: "15 Apr 2025/td>",
    Amount: "$930",
    Status: "Partially Paid",
  },
  {
    InvoiceID: "#INV0023",
    Description: "Eye Checkup",
    CreatedDate: "02 Apr 2025",
    DueDate: "02 Apr 2025",
    Amount: "$850",
    Status: "Paid",
  },
  {
    InvoiceID: "#INV0022",
    Description: "X-Ray",
    CreatedDate: "27 Mar 2025",
    DueDate: "27 Mar 2025",
    Amount: "$700",
    Status: "Paid",
  },
  {
    InvoiceID: "#INV0021",
    Description: "Physiotherapy Session",
    CreatedDate: "12 Mar 2025",
    DueDate: "12 Mar 2025",
    Amount: "$650",
    Status: "Partially Paid",
  },
  {
    InvoiceID: "#INV0020",
    Description: "Cardiac Screening",
    CreatedDate: "05 Mar 2025",
    DueDate: "05 Mar 2025",
    Amount: "$430",
    Status: "UnPaid",
  },
  {
    InvoiceID: "#INV0019",
    Description: "Skin Allergy Test",
    CreatedDate: "24 Feb 2025",
    DueDate: "324 Feb 2025",
    Amount: "$300",
    Status: "Paid",
  },
  {
    InvoiceID: "#INV0018",
    Description: "Blood Test",
    CreatedDate: "16 Feb 2025",
    DueDate: "16 Feb 2025/td>",
    Amount: "$450",
    Status: "Partially Paid",
  },
  {
    InvoiceID: "#INV0017",
    Description: "ENT Consultation",
    CreatedDate: "01 Feb 2025",
    DueDate: "01 Feb 2025",
    Amount: "$750",
    Status: "Paid",
  },
  {
    InvoiceID: "#INV0017",
    Description: "Nutrition Counseling",
    CreatedDate: "25 Jan 2025",
    DueDate: "25 Jan 2025",
    Amount: "$800",
    Status: "UnPaid",
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
      selected: null,
      ActsSatOne: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
      searchQuery: "",
      data,
      columns,
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/doctors/${imageName}`, import.meta.url).href;
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.InvoiceID.toLowerCase().includes(query) ||
          record.Description.toLowerCase().includes(query) ||
          record.CreatedDate.toLowerCase().includes(query) ||
          record.DueDate.toLowerCase().includes(query) ||
          record.Amount.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
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
