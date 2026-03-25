<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">Income Report</h4>
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

      <!-- row start -->
      <div class="row">
        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <div>
                  <p class="mb-1 text-truncate">Total Clinic Income</p>
                  <h6 class="mb-0 fw-bold">$18,750</h6>
                </div>
                <span
                  class="avatar avatar-lg bg-soft-primary text-primary rounded-circle flex-shrink-0"
                  ><i class="ti ti-currency-dollar fs-24"></i
                ></span>
              </div>
              <div class="progress mb-2 progress-sm">
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p class="mb-0 fs-13">
                <span class="text-success"
                  ><i class="ti ti-arrow-up-right me-1"></i>5.62%</span
                >
                from last month
              </p>
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <div>
                  <p class="mb-1 text-truncate">Doctor Fees Collected</p>
                  <h6 class="mb-0 fw-bold">$7,000</h6>
                </div>
                <span
                  class="avatar avatar-lg bg-soft-success text-success rounded-circle flex-shrink-0"
                  ><i class="ti ti-stethoscope fs-24"></i
                ></span>
              </div>
              <div class="progress mb-2 progress-sm">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p class="mb-0 fs-13">
                <span class="text-success"
                  ><i class="ti ti-arrow-up-right me-1"></i>11.4%</span
                >
                from last month
              </p>
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <div>
                  <p class="mb-1 text-truncate">Medicine Sales</p>
                  <h6 class="mb-0 fw-bold">$6,250</h6>
                </div>
                <span
                  class="avatar avatar-lg bg-soft-warning text-warning rounded-circle flex-shrink-0"
                  ><i class="ti ti-pill fs-24"></i
                ></span>
              </div>
              <div class="progress mb-2 progress-sm">
                <div
                  class="progress-bar bg-warning"
                  role="progressbar"
                  style="width: 75%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p class="mb-0 fs-13">
                <span class="text-success"
                  ><i class="ti ti-arrow-up-right me-1"></i>8.52%</span
                >
                from last month
              </p>
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <div>
                  <p class="mb-1 text-truncate">Lab Revenue</p>
                  <h6 class="mb-0 fw-bold">$5,500</h6>
                </div>
                <span
                  class="avatar avatar-lg bg-soft-danger text-danger rounded-circle flex-shrink-0"
                  ><i class="ti ti-flask fs-24"></i
                ></span>
              </div>
              <div class="progress mb-2 progress-sm">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 25%"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p class="mb-0 fs-13">
                <span class="text-danger"
                  ><i class="ti ti-arrow-down-right me-1"></i>7.45%</span
                >
                from last month
              </p>
            </div>
          </div>
        </div>
        <!-- col end -->
      </div>
      <!-- row end -->

      <div class="card">
        <div class="card-body">
          <!-- start row -->
          <div class="row row-gap-2">
            <div class="col-md-6">
              <div class="mb-0">
                <label class="form-label">Date</label>
                <div class="input-group position-relative">
                  <input
                    type="text"
                    class="form-control date-range bookingrange rounded-end bg-white"
                    ref="dateRangeInput"
                  />
                  <span class="input-icon-addon fs-14 text-dark">
                    <i class="ti ti-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
            <!-- end col -->
            <div class="col-md-6">
              <div class="mb-0">
                <label class="form-label">Received From</label>
                <vue3-select
                  v-model="selected"
                  :options="Incomereport"
                  placeholder="Select"
                />
              </div>
            </div>
            <!-- end col -->
            <div class="col-md-6">
              <div class="mb-0">
                <label class="form-label">Payment Method</label>
                <vue3-tags-input
                  class="input-tags form-control"
                  id="inputBox"
                  type="text"
                  data-role="tagsinput"
                  name="specialist"
                  value="Tag1"
                  :tags="tags"
                />
              </div>
            </div>
            <!-- end col -->
            <div class="col-md-6">
              <div class="mb-0">
                <label class="form-label">Status</label>
                <vue3-tags-input
                  class="input-tags form-control"
                  type="text"
                  data-role="tagsinput"
                  name="Label"
                  value="Tag1"
                  :tags="tagsOne"
                />
              </div>
            </div>
            <!-- end col -->
            <div class="col-md-12">
              <div class="d-flex align-items-center justify-content-end">
                <a href="javascript:void(0);" class="btn btn-dark"
                  ><i class="ti ti-player-play me-1"></i>Run Report</a
                >
              </div>
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->

      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Amount'">
              <div>
                <p class="text-dark fw-medium">{{ record.Amount }}</p>
              </div>
            </template>
            <template v-if="column.key === 'ReceivedFrom'">
              <div>
                <p class="text-dark fw-medium">{{ record.ReceivedFrom }}</p>
              </div>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class="fw-medium fs-13"
                :class="[
                  'badge',
                  {
                    'badge-soft-warning rounded text-warning border border-warning':
                      record.Status === 'Pending',
                    'badge-soft-success rounded text-success border border-success':
                      record.Status === 'Received',
                  },
                ]"
                >{{ record.Status }}
              </span>
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
</template>
<script>
const columns = [
  {
    title: "Income",
    dataIndex: "Income",
    key: "Income",
    sorter: {
      compare: (a, b) => (a.Income.toLowerCase() > b.Income.toLowerCase() ? -1 : 1),
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
    title: "Date",
    dataIndex: "Date",
    key: "Date",
    sorter: {
      compare: (a, b) => (a.Date.toLowerCase() > b.Date.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Received From",
    dataIndex: "ReceivedFrom",
    key: "ReceivedFrom",
    sorter: {
      compare: (a, b) =>
        a.ReceivedFrom.toLowerCase() > b.ReceivedFrom.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Payment Method",
    dataIndex: "PaymentMethod",
    key: "PaymentMethod",
    sorter: {
      compare: (a, b) =>
        a.PaymentMethod.toLowerCase() > b.PaymentMethod.toLowerCase() ? -1 : 1,
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
];
const data = [
  {
    Income: "Nurse",
    Amount: "$800",
    Date: "22 Apr 2025",
    ReceivedFrom: "James Carter",
    PaymentMethod: "PayPal",
    Status: "Received",
  },
  {
    Income: "Pharmacist",
    Amount: "$930",
    Date: "12 Apr 2025",
    ReceivedFrom: "Emily Johnson",
    PaymentMethod: "Debit Card",
    Status: "Pending",
  },
  {
    Income: "Receptionist",
    Amount: "$850",
    Date: "01 Apr 2025",
    ReceivedFrom: "Robert Mitchell",
    PaymentMethod: "Cheque",
    Status: "Received",
  },
  {
    Income: "Technician",
    Amount: "$700",
    Date: "05 Mar 2025",
    ReceivedFrom: "Sophia Miller",
    PaymentMethod: "Cheque",
    Status: "Received",
  },
  {
    Income: "Medical Assistant",
    Amount: "$650",
    Date: "20 Mar 2025",
    ReceivedFrom: "Daniel Anderson",
    PaymentMethod: "PayPal",
    Status: "Pending",
  },
  {
    Income: "Phlebotomist",
    Amount: "$430",
    Date: "01 Mar 2025",
    ReceivedFrom: "Olivia Davis",
    PaymentMethod: "Debit Card",
    Status: "Received",
  },
  {
    Income: "Dialysis Technician",
    Amount: "$300",
    Date: "15 Feb 2025",
    ReceivedFrom: "Michael Thompson",
    PaymentMethod: "Cheque",
    Status: "Received",
  },
  {
    Income: "Medical Coder",
    Amount: "$450",
    Date: "09 Feb 2025",
    ReceivedFrom: "Isabella Wilson",
    PaymentMethod: "PayPal",
    Status: "Pending",
  },
  {
    Income: "Chiropractor",
    Amount: "$570",
    Date: "01 Feb 2025",
    ReceivedFrom: "Michael Trade",
    PaymentMethod: "Debit Card",
    Status: "Received",
  },
  {
    Income: "Acupuncturist",
    Amount: "$800",
    Date: "12 Jan 2025",
    ReceivedFrom: "Ava Robinson",
    PaymentMethod: "Cheque",
    Status: "Received",
  },
];
import { ref } from "vue";
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import Vue3TagsInput from "vue3-tags-input";
export default {
  components: {
    Vue3TagsInput,
  },
  data() {
    return {
      selected: null,
      Incomereport: [
        { label: "Select", value: "Select" },
        { label: "Alberto Ripley", value: "Alberto Ripley" },
        { label: "Susan Babin", value: "Susan Babin" },
        { label: "Martin Lisa", value: "Martin Lisa" },
        { label: "Stella Mary", value: "Stella Mary" },
        { label: "Carol Lam", value: "Carol Lam" },
      ],
      tagsOne: ["Received", "Pending"],
      tags: ["PayPal", "Cheque"],
      searchQuery: "",
      data,
      columns,
    };
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Income.toLowerCase().includes(query) ||
          record.Amount.toLowerCase().includes(query) ||
          record.Date.toLowerCase().includes(query) ||
          record.ReceivedFrom.toLowerCase().includes(query) ||
          record.PaymentMethod.toLowerCase().includes(query) ||
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
