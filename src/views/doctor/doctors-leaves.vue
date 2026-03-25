<template>
    <doctor-header></doctor-header>
    <doctor-sidebar></doctor-sidebar>

    <!-- ========================
        Start Page Content
    ========================= -->
        
    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <!-- Start Page Header -->
            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
                <div class="flex-grow-1">
                    <h4 class="fw-bold mb-0"> Leaves </h4>
                </div>
                <div class="text-end d-flex">
                    <!-- dropdown-->
                    <div class="dropdown me-1">
                        <a href="javascript:void(0);" class="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center"  data-bs-toggle="dropdown">
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
                    <a href="javascript:void(0);" class="btn btn-primary ms-2 fs-13 btn-md" data-bs-toggle="modal" data-bs-target="#add-leave"><i class="ti ti-plus me-1"></i>Add New Leave</a>
                </div>
            </div>
            <!-- End Page Header -->

            <!-- Start Filter -->
            <div class=" d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                <div class="search-set mb-3">
                    <div class="d-flex align-items-center flex-wrap gap-2">
                        <div class="table-search d-flex align-items-center mb-0">
                            <div class="search-input">
                                <a href="javascript:void(0);" class="btn-searchset"></a>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Search"
                                    v-model="searchQuery"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex table-dropdown mb-3 pb-1 right-content align-items-center flex-wrap row-gap-3">
                    <div class="dropdown me-2">
                        <a href="javascript:void(0);" class="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            <i class="ti ti-filter text-gray-5 me-1"></i>Filters
                        </a>
                        <div class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0" id="filter-dropdown">
                            <div class="d-flex align-items-center justify-content-between border-bottom filter-header">
                                <h4 class="mb-0 fw-bold">Filter</h4>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="link-danger text-decoration-underline">Clear All</a>
                                </div>
                            </div>
                            <filter-index></filter-index>
                        </div>
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14" data-bs-toggle="dropdown">
                            <span  class="me-1"> Sort By : </span>  Recent
                        </a>
                        <ul class="dropdown-menu  dropdown-menu-end p-2">
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
            <!-- End Filter -->

            <!-- Start Table -->
            <div class="table-responsive">
                <a-table class="table table-nowrap datatable" :columns="columns" :data-source="filteredPages">
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'Status'">
                            <span :class="[
                                    'badge badge-sm border rounded',
                                    {
                                        'badge-info text-info border-info': record.Status === 'Applied',
                                        'badge-success text-success border-success': record.Status === 'Approved',
                                        'badge-danger text-danger border-danger': record.Status === 'Rejected',
                                    },
                                ]"
                            > {{record.Status}} </span>
                        </template>
                        <template v-if="column.key === 'action'">
                            <div class="action-item"> 
                                <template v-if="record.Status === 'Applied'">
                                    <a href="#" class="" data-bs-toggle="modal" data-bs-target="#cancel-leave">
                                        <i class="ti ti-x"></i> 
                                    </a> 
                                </template>
                                <template v-else>
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="ti ti-dots-vertical"></i>
                                    </a>
                                    <ul class="dropdown-menu p-2">
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#edit-leave">Edit</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                        </li>
                                    </ul>
                                </template>
                            </div>                            
                        </template>
                    </template>
                </a-table>
            </div>
            <!-- End Table -->
            
        </div>
        <!-- End Content -->

        <!-- Footer Start -->
        <div class="footer text-center bg-white p-2 border-top">
            <p class="text-dark mb-0">2025 &copy; <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All Rights Reserved</p>
        </div>
        <!-- Footer End -->

    </div>


    <!-- ========================
        End Page Content
    ========================= -->

    <doctors-leave-modal></doctors-leave-modal>
</template>

<script>
const columns = [
  {
    title: "Date",
    dataIndex: "Date",
    sorter: {
      compare: (a, b) =>
        a.Date.toLowerCase() > b.Date.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Leave Type",
    dataIndex: "Leave_Type",
    sorter: {
      compare: (a, b) =>
        a.Leave_Type.toLowerCase() > b.Leave_Type.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Day",
    dataIndex: "Day",
    sorter: {
      compare: (a, b) => (a.Day.toLowerCase() > b.Day.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Applied On",
    dataIndex: "Applied_On",
    sorter: {
      compare: (a, b) => (a.Applied_On.toLowerCase() > b.Applied_On.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) =>
        a.Status.toLowerCase() > b.Status.toLowerCase() ? -1 : 1,
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
   "Date": "15 Apr 2025 - 15 Apr 2025",
   "Leave_Type": "Sick Leave",
   "Day": "01 Day",
   "Applied_On": "22 Apr 2025",
   "Status": "Applied",
 },
 {
   "Date": "30 Apr 2025 - 30 Apr 2025",
   "Leave_Type": "Sick Leave",
   "Day": "01 Day",
   "Applied_On": "22 Apr 2025",
   "Status": "Applied",
 },
 {
   "Date": "15 Apr 2025 - 15 Apr 2025",
   "Leave_Type": "Casual Leave",
   "Day": "01 Day",
   "Applied_On": "12 Apr 2025",
   "Status": "Approved",
 },
 {
   "Date": "02 Apr 2025 - 03 Apr 2025",
   "Leave_Type": "Emergency",
   "Day": "02 Days",
   "Applied_On": "01 Apr 2025",
   "Status": "Rejected",
 },
 {
   "Date": "12 Mar 2025 - 13 Mar 2025",
   "Leave_Type": "Vacation",
   "Day": "02 Days",
   "Applied_On": "05 Mar 2025",
   "Status": "Approved",
 },
 {
   "Date": "27 Mar 2025 - 29 Mar 2025",
   "Leave_Type": "Maternity",
   "Day": "03 Days",
   "Applied_On": "20 Mar 2025",
   "Status": "Rejected",
 },
 {
   "Date": "05 Mar 2025 - 05 Mar 2025",
   "Leave_Type": "Paternity",
   "Day": "01 Day",
   "Applied_On": "01 Mar 2025",
   "Status": "Approved",
 },
 {
   "Date": "24 Feb 2025 - 25 Feb 2025",
   "Leave_Type": "Sick Leave",
   "Day": "02 Days",
   "Applied_On": "15 Feb 2025",
   "Status": "Approved",
 },
 {
   "Date": "16 Feb 2025 - 17 Feb 2025",
   "Leave_Type": "Casual Leave",
   "Day": "01 Day",
   "Applied_On": "09 Feb 2025",
   "Status": "Rejected",
 },
 {
   "Date": "01 Feb 2025 - 01 Feb 2025",
   "Leave_Type": "Emergency",
   "Day": "01 Day",
   "Applied_On": "01 Feb 2025",
   "Status": "Applied",
 },
 {
   "Date": "25 Jan 2025 - 29 Jan 2025",
   "Leave_Type": "Vacation",
   "Day": "05 Days",
   "Applied_On": "12 Jan 2025",
   "Status": "Approved",
 }
]

export default {
    data(){
        return{
            searchQuery: "",
            data,
            columns,
        }
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase();
            return this.data.filter((record) => {
                return (
                    record.Date.toLowerCase().includes(query) ||
                    record.Leave_Type.toLowerCase().includes(query) ||
                    record.Day.toLowerCase().includes(query) ||
                    record.Applied_On.toLowerCase().includes(query) ||
                    record.Status.toLowerCase().includes(query)
                );
            });
        },
    },
}
</script>