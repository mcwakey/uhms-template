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
            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3 mb-3 border-1 border-bottom">
                <div class="flex-grow-1">
                    <h4 class="fw-bold mb-0">Patients List <span class="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">Total Patients : 565</span></h4>
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
                    <div class="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                        <router-link to="/patients/patients-list" class="bg-light rounded p-1 d-flex align-items-center justify-content-center"> <i class="ti ti-list fs-14 text-dark"></i></router-link>
                        <router-link to="/patients/patients-grid" class="bg-white rounded p-1 d-flex align-items-center justify-content-center"> <i class="ti ti-layout-grid fs-14 text-body"></i> </router-link>
                    </div>
                    <router-link to="/patients/create-patient" class="btn btn-primary ms-2 fs-13 btn-md"><i class="ti ti-plus me-1"></i>New Patient</router-link>
                </div>
            </div>
            <!-- End Page Header -->

            <!--  Start Filter -->
            <div class=" d-flex align-items-center justify-content-between flex-wrap">
                <div>
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
                </div>

                <div class="d-flex table-dropdown mb-3 right-content align-items-center flex-wrap row-gap-3">
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
            <!--  End Filter -->

            <!--  Start Table -->
            <div class="table-responsive">
                <a-table class="table table-nowrap datatable" :columns="columns" :data-source="filteredPages">
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'Patient'">
                            <div class="d-flex align-items-center">
                                <router-link to="/patients/patient-details" class="avatar avatar-md me-2">
                                    <img :src="getImageUrl(record.Patient_Img)" alt="product" class="rounded-circle">
                                </router-link>
                                <router-link to="/patients/patient-details" class="text-dark fw-semibold">{{record.Patient}} <span class="text-body fs-13 fw-normal d-block"> {{record.Gender}} </span>  </router-link>
                            </div>
                        </template>
                        <template v-if="column.key === 'Doctor'">
                            <div class="d-flex align-items-center">
                                <router-link to="/doctors/doctor-details" class="avatar me-2 flex-shrink-0">
                                    <img :src="getOneImageUrl(record.Doctor_img)" alt="img" class="rounded-circle">
                                </router-link>
                                <div>
                                    <h6 class="fs-14 mb-1"><router-link to="/doctors/doctor-details" class="fw-semibold">{{record.Doctor}}</router-link></h6>
                                    <p class="mb-0 fs-13">{{record.Role}}</p>
                                </div>
                            </div>
                        </template>
                        <template v-if="column.key === 'Status'">
                            <span :class="[
                                    'badge border rounded fs-13 fw-medium',
                                    {
                                        'badge-soft-success border-success text-success': record.Status === 'Available',
                                        'badge-soft-danger border-danger text-danger': record.Status === 'Unavailable',
                                    },
                                ]"
                            >{{record.Status}}</span>
                        </template>
                        <template v-if="column.key === 'action'">
                            <div class="d-flex align-items-center gap-1">
                                <router-link to="/appointments/appointments-list" class="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1">
                                    <i class="ti ti-calendar-cog"></i>
                                </router-link>
                                <a href="javascript:void(0);" class="shadow-sm fs-14 d-inline-flex border rounded-2 p-1 me-1" data-bs-toggle="dropdown">
                                    <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul class="dropdown-menu p-2">
                                    <li>
                                        <router-link to="/patients/edit-patient" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/patients/patient-details" class="dropdown-item d-flex align-items-center">View</router-link>
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

    <!-- Start Delete Modal  -->
    <div class="modal fade" id="delete_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center position-relative">
                    <img src="@/assets/img/bg/delete-modal-bg-01.png" alt="" class="img-fluid position-absolute top-0 start-0 z-0">
                    <img src="@/assets/img/bg/delete-modal-bg-02.png" alt="" class="img-fluid position-absolute bottom-0 end-0 z-0">
                    <div class="mb-3 position-relative z-1">
                        <span class="avatar avatar-lg bg-danger text-white"><i class="ti ti-trash fs-24"></i></span>
                    </div>
                    <h5 class="fw-bold mb-1 position-relative z-1">Delete Confirmation</h5>
                    <p class="mb-3 position-relative z-1">Are you sure want to delete?</p>
                    <div class="d-flex justify-content-center">
                        <a href="javascript:void(0);" class="btn btn-light position-relative z-1 me-3" data-bs-dismiss="modal">Cancel</a>
                        <a href="" class="btn btn-danger position-relative z-1" data-bs-dismiss="modal">Yes, Delete</a>
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
    title: "Patient",
    dataIndex: "Patient",
    key: "Patient",
    sorter: {
      compare: (a, b) =>
        a.Patient.toLowerCase() > b.Patient.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: {
      compare: (a, b) => (a.Phone.toLowerCase() > b.Phone.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Doctor",
    dataIndex: "Doctor",
    key: "Doctor",
    sorter: {
      compare: (a, b) =>
        a.Doctor.toLowerCase() > b.Doctor.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Address",
    dataIndex: "Address",
    sorter: {
      compare: (a, b) =>
        a.Address.toLowerCase() > b.Address.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Last Visit",
    dataIndex: "Last_Visit",
    sorter: {
      compare: (a, b) =>
        a.Last_Visit.toLowerCase() > b.Last_Visit.toLowerCase() ? -1 : 1,
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
   "Patient": "Alberto Ripley",
   "Patient_Img": "user-08.jpg",
   "Gender": "26, Male",
   "Phone": "+1 41245 54132",
   "Doctor": "Dr. Mick Thompson",
   "Doctor_img": "doctor-01.jpg",
   "Role": "Cardiologist",
   "Address": "Miami, Florida",
   "Last_Visit": "30 Apr 2025",
   "Status": "Available"
 },
 {
   "Patient": "Susan Babin",
   "Patient_Img": "user-16.jpg",
   "Gender":  "21, Female",
   "Phone": "+1 54554 54789",
   "Doctor": "Dr. Sarah Johnson",
   "Doctor_img": "doctor-02.jpg",
   "Role": "Orthopedic Surgeon",
   "Address": "Austin, Texas",
   "Last_Visit": "15 Apr 2025",
   "Status": "Unavailable"
 },
 {
   "Patient": "Carol Lam",
   "Patient_Img": "user-06.jpg",
   "Gender": "28, Female",
   "Phone": "+1  43554 54985",
   "Doctor": "Dr. Emily Carter",
   "Doctor_img": "doctor-03.jpg",
   "Role": "Pediatrician",
   "Address": "Seattle, Washington",
   "Last_Visit": "02 Apr 2025",
   "Status": "Available"
 },
 {
   "Patient": "Marsha Noland",
   "Patient_Img": "user-25.jpg",
   "Gender": "25, Female",
   "Phone": "+1 47554 54257",
   "Doctor": "Dr. David Lee",
   "Doctor_img": "doctor-04.jpg",
   "Role": "Gynecologist",
   "Address": "Chicago, Illinois",
   "Last_Visit": "27 Mar 2025",
   "Status": "Unavailable"
 },
 {
   "Patient": "Irma Armstrong",
   "Patient_Img": "user-39.jpg",
   "Gender": "32, Female",
   "Phone": "+1 54114 57526",
   "Doctor": "Dr. Anna Kim",
   "Doctor_img": "doctor-05.jpg",
   "Role": "pPsychiatrist",
   "Address": "Phoenix, Arizona",
   "Last_Visit": "12 Mar 2025",
   "Status": "Available"
 },
 {
   "Patient": "Jesus Adams",
   "Patient_Img": "user-14.jpg",
   "Gender": "27, Male",
   "Phone": "+1 51247 56574",
   "Doctor": "Dr. John Smith",
   "Doctor_img": "doctor-06.jpg",
   "Role": "Neurosurgeon",
   "Address": "Atlanta, Georgia",
   "Last_Visit": "05 Mar 2025",
   "Status": "Unavailable"
 },
 {
   "Patient": "Ezra Belcher",
   "Patient_Img": "user-27.jpg",
   "Gender": "28, Male",
   "Phone": "+1 41452 25741",
   "Doctor": "Dr. Lisa White",
   "Doctor_img": "doctor-07.jpg",
   "Role": "Oncologist",
   "Address": "San Diego, California",
   "Last_Visit": "24 Feb 2025",
   "Status": "Available"
 },
 {
   "Patient": "Glen Lentz",
   "Patient_Img": "user-05.jpg",
   "Gender": "22, Male",
   "Phone": "+1 51425 21498",
   "Doctor": "Dr. Patricia Brown",
   "Doctor_img": "doctor-08.jpg",
   "Role": "Pulmonologist",
   "Address": "Denver, Colorado",
   "Last_Visit": "16 Feb 2025",
   "Status": "Unavailable"
 },
 {
   "Patient": "Bernard Griffith",
   "Patient_Img": "user-07.jpg",
   "Gender": "34, Male",
   "Phone": "+1 45214 98741",
   "Doctor": "Dr. Rachel Green",
   "Doctor_img": "doctor-09.jpg",
   "Role": "Urologist",
   "Address": "Boston, Massachusetts",
   "Last_Visit": "01 Feb 2025",
   "Status": "Available"
 },
 {
   "Patient": "John Elsass",
   "Patient_Img": "user-17.jpg",
   "Gender": "23, Male",
   "Phone": "+1 41245 32540",
   "Doctor": "Dr. Michael Smith",
   "Doctor_img": "doctor-09.jpg",
   "Role": "Cardiologist",
   "Address": "Orlando, Florida",
   "Last_Visit": "25 Jan 2025",
   "Status": "Unavailable"
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
    methods: {
        getImageUrl(imageName) {
            return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
        },
        getOneImageUrl(imageName) {
            return new URL(`/src/assets/img/doctors/${imageName}`, import.meta.url).href;
        },
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase();
            return this.data.filter((record) => {
                return (
                    record.Patient.toLowerCase().includes(query) ||
                    record.Phone.toLowerCase().includes(query) ||
                    record.Doctor.toLowerCase().includes(query) ||
                    record.Address.toLowerCase().includes(query) || 
                    record.Last_Visit.toLowerCase().includes(query) || 
                    record.Status.toLowerCase().includes(query) 
                );
            });
        },
    },
}
</script>