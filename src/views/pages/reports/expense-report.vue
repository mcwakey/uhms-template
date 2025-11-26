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
          <h4 class="fw-bold mb-0">Expenses Report</h4>
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
          <div class="card shadow-sm flex-fill w-100 z-0">
            <img
              src="@/assets/img/bg/widget-bg-05.svg"
              alt="img"
              class="position-absolute start-0 top-0 z-n1"
            />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-end">
                <div>
                  <p class="mb-1 text-truncate">Total Expenses</p>
                  <h6 class="mb-2 fw-bold">$13,500</h6>
                  <p class="mb-0 fs-13 text-truncate">
                    <span class="text-success"
                      ><i class="ti ti-arrow-up-right me-1"></i>5.62%</span
                    >
                    from last month
                  </p>
                </div>
                <span
                  class="avatar avatar-md widget-icon bg-soft-primary border border-primary text-primary rounded-2 flex-shrink-0"
                  ><i class="ti ti-currency-dollar fs-14"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100 z-0">
            <img
              src="@/assets/img/bg/widget-bg-06.svg"
              alt="img"
              class="position-absolute start-0 top-0 z-n1"
            />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-end">
                <div>
                  <p class="mb-1 text-truncate">Doctor Payouts</p>
                  <h6 class="mb-2 fw-bold">$4,500</h6>
                  <p class="mb-0 fs-13 text-truncate">
                    <span class="text-success"
                      ><i class="ti ti-arrow-up-right me-1"></i>11.4%</span
                    >
                    from last month
                  </p>
                </div>
                <span
                  class="avatar avatar-md widget-icon bg-soft-success border border-success text-success rounded-2 flex-shrink-0"
                  ><i class="ti ti-stethoscope fs-14"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100 z-0">
            <img
              src="@/assets/img/bg/widget-bg-07.svg"
              alt="img"
              class="position-absolute start-0 top-0 z-n1"
            />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-end">
                <div>
                  <p class="mb-1 text-truncate">Staff Salaries</p>
                  <h6 class="mb-2 fw-bold">$3,200</h6>
                  <p class="mb-0 fs-13 text-truncate">
                    <span class="text-success"
                      ><i class="ti ti-arrow-up-right me-1"></i>8.52%</span
                    >
                    from last month
                  </p>
                </div>
                <span
                  class="avatar avatar-md widget-icon bg-soft-warning border border-warning text-warning rounded-2 flex-shrink-0"
                  ><i class="ti ti-pill fs-14"></i
                ></span>
              </div>
            </div>
          </div>
        </div>
        <!-- col end -->

        <!-- col start -->
        <div class="col-xl-3 col-md-6 d-flex">
          <div class="card shadow-sm flex-fill w-100 z-0">
            <img
              src="@/assets/img/bg/widget-bg-08.svg"
              alt="img"
              class="position-absolute start-0 top-0 z-n1"
            />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-end">
                <div>
                  <p class="mb-1 text-truncate">Utilities & Rent</p>
                  <h6 class="mb-2 fw-bold">$2,000</h6>
                  <p class="mb-0 fs-13 text-truncate">
                    <span class="text-danger"
                      ><i class="ti ti-arrow-down-right me-1"></i>7.45%</span
                    >
                    from last month
                  </p>
                </div>
                <span
                  class="avatar avatar-md widget-icon bg-soft-danger border border-danger text-danger rounded-2 flex-shrink-0"
                  ><i class="ti ti-flask fs-14"></i
                ></span>
              </div>
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
                <label class="form-label">Category</label>
                <vue3-select v-model="selected" :options="CateExp" placeholder="Select" />
              </div>
            </div>
            <!-- end col -->
            <div class="col-md-6">
              <div class="mb-0">
                <label class="form-label">Purchased By</label>
                <vue3-select
                  v-model="selectedOne"
                  :options="PurchExp"
                  placeholder="Select"
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
            <template v-if="column.key === 'PurchasedBy'">
              <div>
                <p class="text-dark fw-medium">{{ record.PurchasedBy }}</p>
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
                      record.Status === 'Approved',
                    'badge-soft-danger rounded text-danger border border-danger':
                      record.Status === 'Rejected',
                    'badge-soft-primary rounded text-primary border border-primary':
                      record.Status === 'New',
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
    title: "Expense",
    dataIndex: "Expense",
    key: "Expense",
    sorter: {
      compare: (a, b) => (a.Expense.toLowerCase() > b.Expense.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Amount",
    dataIndex: "Category",
    key: "Category",
    sorter: {
      compare: (a, b) => (a.Category.toLowerCase() > b.Category.toLowerCase() ? -1 : 1),
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
    title: "Purchased By",
    dataIndex: "PurchasedBy",
    key: "PurchasedBy",
    sorter: {
      compare: (a, b) =>
        a.PurchasedBy.toLowerCase() > b.PurchasedBy.toLowerCase() ? -1 : 1,
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
    title: "Payment Method",
    dataIndex: "PaymentMethod",
    key: "PaymentMethod",
    sorter: {
      compare: (a, b) =>
        a.PaymentMethod.toLowerCase() > b.PaymentMethod.toLowerCase() ? -1 : 1,
    },
  },
];
const data = [
  {
    Expense: "Gloves & Masks",
    Category: "Medical Supplies",
    Amount: "$800",
    Date: "22 Apr 2025",
    PurchasedBy: "James Carter",
    Status: "Approved",
    PaymentMethod: "PayPal",
  },
  {
    Expense: "Microscope Parts",
    Category: "Laboratory",
    Amount: "$930",
    Date: "12 Apr 2025",
    PurchasedBy: "Emily Johnson",
    Status: "Pending",
    PaymentMethod: "Debit Card",
  },
  {
    Expense: "Thermometers",
    Category: "Medical Supplies",
    Amount: "$850",
    Date: "01 Apr 2025",
    PurchasedBy: "Robert Mitchell",
    Status: "Approved",
    PaymentMethod: "Cheque",
  },
  {
    Expense: "Disinfectant Supplies",
    Category: "Cleaning Services",
    Amount: "$700",
    Date: "05 Mar 2025",
    PurchasedBy: "Sophia Miller",
    Status: "Rejected",
    PaymentMethod: "Cheque",
  },
  {
    Expense: "IV Sets",
    Category: "Medical Supplies",
    Amount: "$650",
    Date: "20 Mar 2025",
    PurchasedBy: "Daniel Anderson",
    Status: "New",
    PaymentMethod: "PayPal",
  },
  {
    Expense: "Reagent Refill",
    Category: "Laboratory",
    Amount: "$430",
    Date: "01 Mar 2025",
    PurchasedBy: "Olivia Davis",
    Status: "Rejected",
    PaymentMethod: "Debit Card",
  },
  {
    Expense: "Syringes & Gauze",
    Category: "Medical Supplies",
    Amount: "$300",
    Date: "15 Feb 2025",
    PurchasedBy: "Michael Thompson",
    Status: "New",
    PaymentMethod: "Cheque",
  },
  {
    Expense: "Blood Collection Tubes",
    Category: "Laboratory",
    Amount: "$450",
    Date: "09 Feb 2025",
    PurchasedBy: "Isabella Wilson",
    Status: "Approved",
    PaymentMethod: "PayPal",
  },
  {
    Expense: "Bandages & Tapes",
    Category: "Medical Supplies",
    Amount: "$570",
    Date: "01 Feb 2025",
    PurchasedBy: "Michael Trade",
    Status: "New",
    PaymentMethod: "Debit Card",
  },
  {
    Expense: "Tissue Slides",
    Category: "Laboratory",
    Amount: "$800",
    Date: "12 Jan 2025",
    PurchasedBy: "Ava Robinson",
    Status: "Approved",
    PaymentMethod: "Cheque",
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
      selectedOne: null,
      CateExp: [
        { label: "Select", value: "Select" },
        { label: "Medical Supplies", value: "Medical Supplies" },
        { label: "Laboratory", value: "Laboratory" },
        { label: "Cleaning Services", value: "Cleaning Services" },
      ],
      PurchExp: [
        { label: "Select", value: "Select" },
        { label: "James Allaire", value: "James Allaire" },
        { label: "Esther Schmidt", value: "Esther Schmidt" },
        { label: "Judi Lenahan", value: "Judi Lenahan" },
        { label: "Robert Reid", value: "Robert Reid" },
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
          record.Expense.toLowerCase().includes(query) ||
          record.Category.toLowerCase().includes(query) ||
          record.Amount.toLowerCase().includes(query) ||
          record.Date.toLowerCase().includes(query) ||
          record.PurchasedBy.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query) ||
          record.PaymentMethod.toLowerCase().includes(query)
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
