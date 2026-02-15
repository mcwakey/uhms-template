<template>
  <layouts-header :title="title" :text1="text1" :text="text" />
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content content-two">
      <!-- Page Header -->
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Invoices</h4>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item">
              <router-link to="/dashboard/">Home</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Invoices</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-xl-3 col-sm-6">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="d-flex align-items-center overflow-hidden mb-2">
                <div>
                  <p class="mb-1 text-truncate">Total Invoice</p>
                  <h6>$3,237.94</h6>
                </div>
              </div>
              <div class="attendance-report-bar mb-2">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div class="progress-bar bg-pink" style="width: 85%"></div>
                </div>
              </div>
              <div>
                <p class="d-flex align-items-center text-truncate">
                  <span class="text-success fs-12 d-flex align-items-center me-1"
                    ><i class="ti ti-arrow-wave-right-up me-1"></i>+32.40%</span
                  >from last month
                </p>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
        <div class="col-xl-3 col-sm-6">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="d-flex align-items-center overflow-hidden mb-2">
                <div>
                  <p class="mb-1 text-truncate">Outstanding</p>
                  <h6>$3,237.94</h6>
                </div>
              </div>
              <div class="attendance-report-bar mb-2">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div class="progress-bar bg-purple" style="width: 50%"></div>
                </div>
              </div>
              <div>
                <p class="d-flex align-items-center text-truncate">
                  <span class="text-danger fs-12 d-flex align-items-center me-1"
                    ><i class="ti ti-arrow-wave-right-up me-1"></i>-4.40%</span
                  >from last month
                </p>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
        <div class="col-xl-3 col-sm-6">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="d-flex align-items-center overflow-hidden mb-2">
                <div>
                  <p class="mb-1 text-truncate">Draft</p>
                  <h6>$3,237.94</h6>
                </div>
              </div>
              <div class="attendance-report-bar mb-2">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div class="progress-bar bg-warning" style="width: 30%"></div>
                </div>
              </div>
              <div>
                <p class="d-flex align-items-center text-truncate">
                  <span class="text-success fs-12 d-flex align-items-center me-1"
                    ><i class="ti ti-arrow-wave-right-up me-1"></i>12%</span
                  >from last month
                </p>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
        <div class="col-xl-3 col-sm-6">
          <div class="card flex-fill">
            <div class="card-body">
              <div class="d-flex align-items-center overflow-hidden mb-2">
                <div>
                  <p class="mb-1 text-truncate">Total Overdue</p>
                  <h6>$3,237.94</h6>
                </div>
              </div>
              <div class="attendance-report-bar mb-2">
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Success example"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="height: 5px"
                >
                  <div class="progress-bar bg-danger" style="width: 20%"></div>
                </div>
              </div>
              <div>
                <p class="d-flex align-items-center text-truncate">
                  <span class="text-danger fs-12 d-flex align-items-center me-1"
                    ><i class="ti ti-arrow-wave-right-up me-1"></i>-15.40%</span
                  >from last month
                </p>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
      </div>
      <!-- end row -->

      <!-- start row -->
      <div class="row">
        <div class="col-sm-12">
          <div>
            <div
              class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3"
            >
              <h5 class="d-flex align-items-center mb-0">
                Invoices<span class="badge bg-soft-dark ms-2 text-dark fs-12"
                  >2000 Invoices</span
                >
              </h5>
              <router-link
                to="/invoices/add-invoice"
                class="btn btn-md btn-primary d-flex align-items-center"
                ><i class="ti ti-circle-plus me-2"></i>Add Invoices</router-link
              >
            </div>
            <div class="card-body p-0">
              <div class="table-responsive table-nowrap">
                <a-table
                  class="table table-nowrap datatable"
                  :columns="columns"
                  :data-source="filteredPages"
                  :row-selection="rowSelection"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'Invoice'">
                      <router-link to="/invoice/invoice-details" class="tb-data">{{
                        record.Invoice
                      }}</router-link>
                    </template>
                    <template v-if="column.key === 'Name'">
                      <div class="d-flex align-items-center">
                        <router-link
                          to="/invoice/invoice-details"
                          class="avatar avatar-lg me-2"
                        >
                          <img
                            :src="getImageUrl(record.Image)"
                            class="rounded-circle"
                            alt="user"
                          />
                        </router-link>
                        <div>
                          <h6 class="fw-medium fs-14">
                            <router-link to="/invoice/invoice-details">{{
                              record.Name
                            }}</router-link>
                          </h6>
                          <span class="fs-12">{{ record.Email }}</span>
                        </div>
                      </div>
                    </template>
                    <template v-if="column.key === 'Status'">
                      <span
                        :class="[
                          'badge',
                          {
                            'badge-soft-success': record.Status === 'Paid',
                            'badge-soft-danger': record.Status === 'Overdue',
                            'badge-soft-primary': record.Status === 'Pending',
                            'badge-soft-warning': record.Status === 'Draft',
                          },
                          'd-inline-flex align-items-center',
                        ]"
                      >
                        <i class="ti ti-point-filled me-1"></i>{{ record.Status }}
                      </span>
                    </template>
                    <template v-if="column.key === 'action'">
                      <div class="action-icon d-inline-flex">
                        <router-link to="/invoice/invoice-details" class="me-2"
                          ><i class="ti ti-eye"></i
                        ></router-link>
                        <a href="#" class="me-2"><i class="ti ti-edit"></i></a>
                        <a
                          href="#delete_modal"
                          class=""
                          data-bs-toggle="modal"
                          data-bs-target="#delete_modal"
                          ><i class="ti ti-trash"></i
                        ></a>
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

    <!-- Start Footer -->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-dark">Version : 1.3.8</p>
    </div>
    <!-- End Footer -->
  </div>

  <!-- ========================
        End Page Content
    ========================= -->

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
            <router-link to="/invoice/invoice-list" class="btn btn-danger"
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
const data = [
  {
    key: "1",
    Invoice: "INV-1454",
    Image: "user-01.jpg",
    Name: "Anthony Lewis",
    Email: "anthony@example.com",
    Created_On: "14 Jan 2024, 04:27 AM",
    Total: "$300",
    Amount_Due: "$0",
    Due_Date: "14 Jan 2024, 04:27 AM",
    Status: "Paid",
  },
  {
    key: "2",
    Invoice: "INV-6571",
    Image: "user-09.jpg",
    Name: "Brian Villalobos",
    Email: "brian@example.com",
    Created_On: "21 Jan 2024, 03:19 AM",
    Total: "$547",
    Amount_Due: "$200",
    Due_Date: "21 Jan 2024, 03:19 AM",
    Status: "Overdue",
  },
  {
    key: "3",
    Invoice: "INV-2245",
    Image: "user-01.jpg",
    Name: "Harvey Smith",
    Email: "harvey@example.com",
    Created_On: "20 Feb 2024, 12:15 PM",
    Total: "$325",
    Amount_Due: "$65",
    Due_Date: "20 Feb 2024, 12:15 PM",
    Status: "Pending",
  },
  {
    key: "4",
    Invoice: "INV-1456",
    Image: "user-02.jpg",
    Name: "Stephan Peralt",
    Email: "peral@example.com",
    Created_On: "15 Mar 2024, 12:11 AM",
    Total: "$471",
    Amount_Due: "$145",
    Due_Date: "15 Mar 2024, 12:11 AM",
    Status: "Pending",
  },
  {
    key: "5",
    Invoice: "INV-0045",
    Image: "user-03.jpg",
    Name: "Doglas Martini",
    Email: "martniwr@example.com",
    Created_On: "12 Apr 2024, 05:48 PM",
    Total: "$147",
    Amount_Due: "$32",
    Due_Date: "12 Apr 2024, 05:48 PM",
    Status: "Overdue",
  },
  {
    key: "6",
    Invoice: "INV-6244",
    Image: "user-02.jpg",
    Name: "Linda Ray",
    Email: "ray456@example.com",
    Created_On: "20 Apr 2024, 06:11 PM",
    Total: "$654",
    Amount_Due: "$140",
    Due_Date: "20 Apr 2024, 06:11 PM",
    Status: "Draft",
  },
  {
    key: "7",
    Invoice: "INV-9565",
    Image: "user-06.jpg",
    Name: "Elliot Murray",
    Email: "murray@example.com",
    Created_On: "14 Jan 2024, 04:27 AM",
    Total: "$300",
    Amount_Due: "$0",
    Due_Date: "14 Jan 2024, 04:27 AM",
    Status: "Paid",
  },
  {
    key: "8",
    Invoice: "INV-6874",
    Image: "user-07.jpg",
    Name: "Rebecca Smtih",
    Email: "smtih@example.com",
    Created_On: "02 Sep 2024, 09:21 PM",
    Total: "$654",
    Amount_Due: "$65",
    Due_Date: "02 Sep 2024, 09:21 PM",
    Status: "Paid",
  },
  {
    key: "9",
    Invoice: "INV-1454",
    Image: "user-08.jpg",
    Name: "Anthony Lewis",
    Email: "anthony@example.com",
    Created_On: "14 Jan 2024, 04:27 AM",
    Total: "$300",
    Amount_Due: "$0",
    Due_Date: "14 Jan 2024, 04:27 AM",
    Status: "Draft",
  },
  {
    key: "10",
    Invoice: "INV-6587",
    Image: "user-09.jpg",
    Name: "Connie Waters",
    Email: "connie@example.com",
    Created_On: "15 Nov 2024, 12:44 PM",
    Total: "$987",
    Amount_Due: "$47",
    Due_Date: "15 Nov 2024, 12:44 PM",
    Status: "Pending",
  },
  {
    key: "11",
    Invoice: "INV-5879",
    Image: "user-10.jpg",
    Name: "Lori Broaddus",
    Email: "broaddus@example.com",
    Created_On: "10 Dec 2024, 11:23 PM",
    Total: "$365",
    Amount_Due: "$21",
    Due_Date: "10 Dec 2024, 11:23 PM",
    Status: "Overdue",
  },
];

const columns = [
  {
    title: "Invoice",
    dataIndex: "Invoice",
    key: "Invoice",
    sorter: {
      compare: (a, b) => (a.Invoice.toLowerCase() > b.Invoice.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Created On",
    dataIndex: "Created_On",
    sorter: {
      compare: (a, b) =>
        a.Created_On.toLowerCase() > b.Created_On.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Total",
    dataIndex: "Total",
    sorter: {
      compare: (a, b) => (a.Total.toLowerCase() > b.Total.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Amount Due",
    dataIndex: "Amount_Due",
    sorter: {
      compare: (a, b) =>
        a.Amount_Due.toLowerCase() > b.Amount_Due.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Due Date",
    dataIndex: "Due_Date",
    sorter: {
      compare: (a, b) => (a.Due_Date.toLowerCase() > b.Due_Date.toLowerCase() ? -1 : 1),
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

const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};

import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      title: "Home",
      text1: "Applications",
      text: "Invoice",
      searchQuery: "",
      data,
      columns,
      rowSelection,
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
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
          record.Invoice.toLowerCase().includes(query) ||
          record.Name.toLowerCase().includes(query) ||
          record.Created_On.toLowerCase().includes(query) ||
          record.Total.toLowerCase().includes(query) ||
          record.Amount_Due.toLowerCase().includes(query) ||
          record.Due_Date.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
