<template>
    <!--  Start Filter -->
    <div class=" d-flex align-items-center justify-content-between flex-wrap">
        <div class="d-flex align-items-center gap-2">
            <div class="search-set mb-3">
                <div class="d-flex align-items-center flex-wrap gap-2">
                    <div class="table-search d-flex align-items-center mb-0">
                        <div class="search-input">
                            <a href="javascript:void(0);" class="btn-searchset"></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-flex right-content align-items-center flex-wrap mb-3">
                <div class="reportrange-picker d-flex align-items-center reportrange">
                    <i class="ti ti-calendar text-gray-5 fs-14 me-1"></i><span class="reportrange-picker-field">16 Apr 25 - 16 Apr 25</span>
                </div>
            </div>
        </div>

        <div class="d-flex table-dropdown mb-3 right-content align-items-center flex-wrap row-gap-3">
            <div class="dropdown me-2">
                <a href="javascript:void(0);" class="bg-white border rounded btn btn-md text-dark fs-14 py-1 align-items-center d-flex fw-normal" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                    <i class="ti ti-filter text-gray-5 me-1"></i>Filters
                </a>
                <div class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0">
                    <div class="d-flex align-items-center justify-content-between border-bottom filter-header">
                        <h4 class="mb-0 fw-bold">Filter</h4>
                        <div class="d-flex align-items-center">
                            <a href="javascript:void(0);" class="link-danger text-decoration-underline">Clear All</a>
                        </div>
                    </div>
                    <form action="#">
                        <div class="filter-body pb-0">
                            <div class="mb-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <label class="form-label">Transaction ID</label>
                                    <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                                </div>
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                                        Select <i class="ti ti-chevron-down ms-auto"></i>
                                    </a>
                                    <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                                        <div class="mb-3">
                                            <div class="input-icon-start input-icon position-relative">
                                                <span class="input-icon-addon fs-12">
                                                    <i class="ti ti-search"></i>
                                                </span>
                                                <input type="text" class="form-control form-control-md" placeholder="Search">
                                            </div>
                                        </div>
                                        <ul class="mb-3">
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    #TNX0025
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    #TNX0024
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    #TNX0023
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    #TNX0022
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    #TNX0021
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    #TNX0020
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    #TNX0019
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>
                                            </div>
                                            <div class="col-6">
                                                <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <label class="form-label">Description</label>
                                    <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                                </div>
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                                        Select <i class="ti ti-chevron-down ms-auto"></i>
                                    </a>
                                    <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                                        <div class="mb-3">
                                            <div class="input-icon-start input-icon position-relative">
                                                <span class="input-icon-addon fs-12">
                                                    <i class="ti ti-search"></i>
                                                </span>
                                                <input type="text" class="form-control form-control-md" placeholder="Search">
                                            </div>
                                        </div>
                                        <ul class="mb-3">
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    General Consultation
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Dental Cleaning
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Eye Checkup
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    X-Ray
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Physiotherapy Session
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Cardiac Screening
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Skin Allergy Test
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>
                                            </div>
                                            <div class="col-6">
                                                <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label mb-1 text-dark fs-14 fw-medium">Date<span class="text-danger">*</span></label>
                                <div class="input-icon-end position-relative">  
                                    <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <label class="form-label">Payment Method</label>
                                    <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                                </div>
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                                        Select <i class="ti ti-chevron-down ms-auto"></i>
                                    </a>
                                    <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                                        <div class="mb-3">
                                            <div class="input-icon-start input-icon position-relative">
                                                <span class="input-icon-addon fs-12">
                                                    <i class="ti ti-search"></i>
                                                </span>
                                                <input type="text" class="form-control form-control-md" placeholder="Search">
                                            </div>
                                        </div>
                                        <ul class="mb-3">
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    PayPal
                                                </label>
                                            </li>
                                            <li class="mb-0">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Debit Card
                                                </label>
                                            </li>
                                            <li class="mb-0">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Cheque
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <a href="javascript:void(0);" class="btn btn-outline-white w-100 close-filter">Cancel</a>
                                            </div>
                                            <div class="col-6">
                                                <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Amount</label>
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle form-control" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                                        Select
                                    </a>
                                    <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">							
                                        <div class="filter-range">
                                            <input type="text" id="range_03">
                                            <p>Range : <span class="text-gray-9">$200 - $5695</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <label class="form-label">Status</label>
                                    <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                                </div>
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="dropdown-toggle btn bg-white  d-flex align-items-center justify-content-start fs-13 p-2 fw-normal border" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                                        Select <i class="ti ti-chevron-down ms-auto"></i>
                                    </a>
                                    <div class="dropdown-menu shadow-lg w-100 dropdown-info p-3">
                                        <div class="mb-3">
                                            <div class="input-icon-start input-icon position-relative">
                                                <span class="input-icon-addon fs-12">
                                                    <i class="ti ti-search"></i>
                                                </span>
                                                <input type="text" class="form-control form-control-md" placeholder="Search">
                                            </div>
                                        </div>
                                        <ul class="mb-3">
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Completed
                                                </label>
                                            </li>
                                            <li class="mb-0">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Pending
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="row g-2">
                                            <div class="col-6">
                                                <a href="javascript:void(0);" class="btn btn-outline-white w-100 filter-close">Cancel</a>
                                            </div>
                                            <div class="col-6">
                                                <a href="javascript:void(0);" class="btn btn-primary w-100">Select</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter-footer d-flex align-items-center justify-content-end border-top">
                            <a href="javascript:void(0);" class="btn btn-light btn-md me-2 fw-medium close-filter">Close</a>
                            <button type="submit" class="btn btn-primary btn-md fw-medium">Filter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!--  End Filter -->

    <!--  Start Table -->
    <div class="table-responsive">        
        <a-table class="table table-nowrap datatable" :columns="columns" :data-source="data">
            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'Transaction_ID'">
                    <a href="javascript:void(0);">{{record.Transaction_ID}}5</a>
                </template>
                <template v-if="column.key === 'Description'">
                    <div class="text-dark"> {{record.Description}} </div>
                </template>
                <template v-if="column.key === 'Paid_Date'">
                    <div class="text-dark">{{ record.Paid_Date }}</div>
                </template>
                <template v-if="column.key === 'Payment_Method'">
                    <div class="text-dark"> {{record.Payment_Method}}</div>
                </template>
                <template v-if="column.key === 'Amount'">
                    <div class="text-dark">{{record.Amount}}</div>
                </template>
                <template v-if="column.key === 'Status'">
                    <span class="badge fs-13 badge-soft-success rounded text-success fw-medium border border-success"
                        :class="[
                            'badge fs-13 rounded fw-medium border',
                            {
                                'badge-soft-success text-success border-success': record.Status === 'Completed',
                                'badge-soft-info text-info border-info': record.Status === 'Pending',
                            },
                        ]"
                    >{{record.Status}}</span> 
                </template>
            </template>
        </a-table>
    </div>
    <!--  End Table -->
</template>

<script>

const columns = [
  {
    title: "Transaction ID",
    dataIndex: "Transaction_ID",
    key: "Transaction_ID",
    sorter: {
      compare: (a, b) =>
        a.Transaction_ID.toLowerCase() > b.Transaction_ID.toLowerCase() ? -1 : 1,
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
    title: "Paid Date",
    dataIndex: "Paid_Date",
    key: "Paid_Date",
    sorter: {
      compare: (a, b) => (a.Paid_Date.toLowerCase() > b.Paid_Date.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Payment Method",
    dataIndex: "Payment_Method",
    key: "Payment_Method",
    sorter: {
      compare: (a, b) => (a.Payment_Method.toLowerCase() > b.Payment_Method.toLowerCase() ? -1 : 1),
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
   "Transaction_ID": "#TNX0025",
   "Description": "General Consultation",
   "Paid_Date": "30 Apr 2025",
   "Payment_Method": "PayPal",
   "Amount": "$800",
   "Status": "Completed"
 },
 {
   "Transaction_ID": "#TNX0024",
   "Description": "Dental Cleaning",
   "Paid_Date": "15 Apr 2025",
   "Payment_Method": "Debit Card",
   "Amount": "$930",
   "Status": "Pending"
 },
 {
   "Transaction_ID": "#TNX0023",
   "Description": "Eye Checkup",
   "Paid_Date": "02 Apr 2025",
   "Payment_Method": "Cheque",
   "Amount": "$850",
   "Status": "Completed"
 },
 {
   "Transaction_ID": "#TNX0022",
   "Description": "X-Ray",
   "Paid_Date": "27 Mar 2025",
   "Payment_Method": "Debit Card",
   "Amount": "$80",
   "Status": "Completed"
 },
 {
   "Transaction_ID": "#TNX0021",
   "Description": "Physiotherapy Session",
   "Paid_Date": "12 Mar 2025",
   "Payment_Method": "PayPal",
   "Amount": "$650",
   "Status": "Completed"
 },
 {
   "Transaction_ID": "#TNX0020",
   "Description": "Cardiac Screening",
   "Paid_Date": "05 Mar 2025",
   "Payment_Method": "Cheque",
   "Amount": "$430",
   "Status": "Completed"
 },
 {
   "Transaction_ID": "#TNX0019",
   "Description": "Skin Allergy Test",
   "Paid_Date": "24 Feb 2025",
   "Payment_Method": "Debit Card",
   "Amount": "$300",
   "Status": "Pending"
 },
 {
   "Transaction_ID": "#TNX0018",
   "Description": "Blood Test",
   "Paid_Date": "16 Feb 2025",
   "Payment_Method": "Cheque",
   "Amount": "$450",
   "Status": "Completed"
 },
 {
   "Transaction_ID": "#TNX0017",
   "Description": "ENT Consultation",
   "Paid_Date": "01 Feb 2025",
   "Payment_Method": "Debit Card",
   "Amount": "$570",
   "Status": "completed"
 },
 {
   "Transaction_ID": "#TNX0017",
   "Description": "Nutrition Counseling",
   "Paid_Date": "25 Jan 2025",
   "Payment_Method": "PayPal",
   "Amount": "$800",
   "Status": "Completed"
 }
]

import { ref } from "vue";
const valueOne = ref();
export default {
    data(){
        return{
            data,
            columns,
            valueOne,
        }
    },
}
</script>