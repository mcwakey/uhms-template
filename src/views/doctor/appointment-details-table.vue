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
                                    <label class="form-label">Doctor</label>
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
                                                    <span class="avatar avatar-xs rounded-circle me-2"><img src="@/assets/img/doctors/doctor-01.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Dr. Mick Thompson
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    <span class="avatar avatar-xs rounded-circle me-2"><img src="@/assets/img/doctors/doctor-02.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Dr. Sarah Johnson
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    <span class="avatar avatar-xs rounded-circle me-2"><img src="@/assets/img/doctors/doctor-03.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Dr. Emily Carter
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    <span class="avatar avatar-xs rounded-circle me-2"><img src="@/assets/img/doctors/doctor-04.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Dr. David Lee
                                                </label>
                                            </li>
                                            <li class="mb-0">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    <span class="avatar avatar-xs rounded-circle me-2"><img src="@/assets/img/doctors/doctor-05.jpg" class="flex-shrink-0 rounded-circle" alt="img"></span>Dr. Anna Kim
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
                                    <label class="form-label">Designation</label>
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
                                                    Cardiologist
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Orthopedic Surgeon
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Pediatrician
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Gynecologist
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Psychiatrist
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Neurosurgeon
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Oncologist
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Pulmonologist
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Urologist
                                                </label>
                                            </li>
                                            <li class="mb-1">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Dermatologist
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
                                    <label class="form-label">Mode</label>
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
                                                    In Person
                                                </label>
                                            </li>
                                            <li class="mb-0">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Online
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
                                    <input type="text" class="form-control bookingrange" placeholder="dd/mm/yyyy">
                                    <span class="input-icon-addon">
                                        <i class="ti ti-calendar"></i>
                                    </span>
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
                                                    Checked Out
                                                </label>
                                            </li>
                                            <li class="mb-0">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Checked In
                                                </label>
                                            </li>
                                            <li class="mb-0">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Cancelled
                                                </label>
                                            </li>
                                            <li class="mb-0">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Schedule
                                                </label>
                                            </li>
                                            <li class="mb-0">
                                                <label class="dropdown-item px-2 d-flex align-items-center text-dark">
                                                    <input class="form-check-input m-0 me-2" type="checkbox">
                                                    Confirmed
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
                <template v-if="column.key === 'Doctor_Name'">
                    <div class="d-flex align-items-center">
                        <router-link to="/patient/patient-doctors" class="avatar me-2 flex-shrink-0">
                            <img :src="getImageUrl(record.Image)" alt="img" class="rounded-circle">
                        </router-link>
                        <div>
                            <h6 class="fs-14 mb-1 text-truncate">
                                <router-link to="/patient/patient-doctors" class="fw-semibold">{{record.Doctor_Name}}</router-link>
                            </h6>
                            <p class="mb-0 fs-13 text-truncate">{{record.Role}}</p>
                        </div>
                    </div>
                </template>
                <template v-if="column.key === 'Status'">
                    <span :class="[
                            'badge fs-13 rounded fw-medium',
                            {
                                'badge-soft-info text-info': record.Status === 'Checked Out',
                                'badge-soft-warning text-warning': record.Status === 'Checked In',
                                'badge-soft-danger text-danger': record.Status === 'Cancelled',
                                'badge-soft-primary text-primary': record.Status === 'Schedule',
                                'badge-soft-success text-success': record.Status === 'Confirmed',
                            },
                        ]"
                    >{{record.Status}}</span> 
                </template>
                <template v-if="column.key === 'action'">
                    <div class="action-item">
                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                            <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul class="dropdown-menu p-2">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="offcanvas" data-bs-target="#view_details">View</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                            </li>
                        </ul>
                    </div>
               </template>
            </template>
        </a-table>
    </div>
    <!--  End Table -->
</template>

<script>

const columns = [
  {
    title: "Date & Time",
    dataIndex: "Date_Time",
    sorter: {
      compare: (a, b) =>
        a.Date_Time.toLowerCase() > b.Date_Time.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Doctor Name",
    dataIndex: "Doctor_Name",
    key: "Doctor_Name",
    sorter: {
      compare: (a, b) =>
        a.Doctor_Name.toLowerCase() > b.Doctor_Name.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Mode",
    dataIndex: "Mode",
    sorter: {
      compare: (a, b) => (a.Mode.toLowerCase() > b.Mode.toLowerCase() ? -1 : 1),
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
   "Date_Time": "30 Apr 2025 - 09:30 AM",
   "Image": "doctor-01.jpg",
   "Doctor_Name": "Dr. Mick Thompson",
   "Role": "Cardiologist",
   "Mode": "In-person",
   "Status": "Checked Out"
 },
 {
   "Date_Time": "15 Apr 2025 - 11:20 AM",
   "Image": "doctor-02.jpg",
   "Doctor_Name": "Dr. Sarah Johnson",
   "Role": "Orthopedic Surgeon",
   "Mode": "Online",
   "Status": "Checked In"
 },
 {
   "Date_Time": "02 Apr 2025 - 08:15 AM",
   "Image": "doctor-03.jpg",
   "Doctor_Name": "Dr. Emily Carter",
   "Role": "Pediatrician",
   "Mode": "In-Person",
   "Status": "Cancelled"
 },
 {
   "Date_Time": "27 Mar 2025 - 02:00 PM",
   "Image": "doctor-04.jpg",
   "Doctor_Name": "Dr. David Lee",
   "Role": "Gynecologist",
   "Mode": "30 Apr 2025",
   "Status": "Schedule"
 },
 {
   "Date_Time": "12 Mar 2025 - 05:40 PM",
   "Image": "doctor-05.jpg",
   "Doctor_Name": "Dr. Anna Kim",
   "Role": "Psychiatrist",
   "Mode": "Online",
   "Status": "Confirmed"
 },
 {
   "Date_Time": "24 Feb 2025 - 09:20 AM",
   "Image": "doctor-06.jpg",
   "Doctor_Name": "Dr. John Smith",
   "Role": "Neurosurgeon",
   "Mode": "In-Person",
   "Status": "Cancelled"
 },
 {
   "Date_Time": "16 Feb 2025 - 11:40 AM",
   "Image": "doctor-07.jpg",
   "Doctor_Name": "Dr. Lisa White",
   "Role": "Oncologist",
   "Mode": "Online",
   "Status": "Confirmed"
 },
 {
   "Date_Time": "01 Feb 2025 - 04:00 PM",
   "Image": "doctor-08.jpg",
   "Doctor_Name": "Dr. Patricia Brown",
   "Role": "Pulmonologist",
   "Mode": "Online",
   "Status": "Checked Out"
 },
 {
   "Date_Time": "25 Jan 2025 - 03:10 PM",
   "Image": "doctor-09.jpg",
   "Doctor_Name": "Dr. Rachel Green",
   "Role": "Urologist",
   "Mode": "Online",
   "Status": "Schedule"
 },
 {
   "Date_Time": "12 Jan 2025 - 03:10 PM",
   "Image": "doctor-10.jpg",
   "Doctor_Name": "Dr. Michael Smith",
   "Role": "Cardiologist",
   "Mode": "In-Person",
   "Status": "cancelled"
 }
]

export default {
    data(){
        return{
            data,
            columns,
        }
    },
    methods: {
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/doctors/${imageName}`, import.meta.url).href;
        },
    },
}
</script>