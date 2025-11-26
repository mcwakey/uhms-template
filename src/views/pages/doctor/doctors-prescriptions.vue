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
                    <h4 class="fw-bold mb-0"> Prescriptions </h4>
                </div>
                <div class="text-end d-flex">
                    <!-- dropdown-->
                    <div class="dropdown me-1">
                        <a href="javascript:void(0);" class="btn btn-md fs-14 fw-normal border bg-white rounded text-dark d-inline-flex align-items-center fw-regular"  data-bs-toggle="dropdown">
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
                            <form action="#">
                                <div class="filter-body pb-0">
                                    <div class="mb-3">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <label class="form-label mb-1">Doctor</label>
                                            <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                                        </div>
                                         <vue-multiselect
                                            v-model="selected"
                                            :options="Doctor"
                                            :multiple="true"
                                            label="name"
                                            track-by="id"
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <label class="form-label">Designation</label>
                                            <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                                        </div>
                                        <vue-multiselect
                                            v-model="selectedOne"
                                            :options="Designation"
                                            :multiple="true"
                                            label="name"
                                            track-by="id"
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <label class="form-label">Department</label>
                                            <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                                        </div>
                                        <vue-multiselect
                                            v-model="selectedTwo"
                                            :options="Department"
                                            :multiple="true"
                                            label="name"
                                            track-by="id"
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label mb-1 text-dark fs-14 fw-medium">Date<span class="text-danger">*</span></label>
                                        <div class="input-icon-end position-relative">  
                                            <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <label class="form-label">Amount</label>
                                            <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                                        </div>
                                        <vue-multiselect
                                            v-model="selectedThree"
                                            :options="Amount"
                                            :multiple="true"
                                            label="name"
                                            track-by="id"
                                        />
                                    </div>
                                    <div class="mb-3">
                                        <div class="d-flex align-items-center justify-content-between">
                                            <label class="form-label">Status</label>
                                            <a href="javascript:void(0);" class="link-primary mb-1">Reset</a>
                                        </div>
                                        <vue-multiselect
                                            v-model="selectedFour"
                                            :options="Status"
                                            :multiple="true"
                                            label="name"
                                            track-by="id"
                                        />
                                    </div>
                                </div>
                                <div class="filter-footer d-flex align-items-center justify-content-end border-top">
                                    <a href="javascript:void(0);" class="btn btn-light btn-md me-2 fw-medium" id="close-filter">Close</a>
                                    <button type="submit" class="btn btn-primary btn-md fw-medium">Filter</button>
                                </div>
                            </form>
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

            <div class="table-responsive">
                <a-table class="table table-nowrap datatable" :columns="columns" :data-source="filteredPages">
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'Prescription_ID'">
                            <router-link to="/doctor/doctors-prescription-details">{{record.Prescription_ID}}</router-link>
                        </template>
                        <template v-if="column.key === 'Patient'">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar avatar-sm me-2">
                                    <img :src="getImageUrl(record.Image)" alt="product" class="rounded-circle">
                                </a>
                                <a href="javascript:void(0);">{{record.Patient}}</a>
                            </div>
                        </template>
                        <template v-if="column.key === 'action'">
                            <div class="action-item">
                                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                    <i class="ti ti-dots-vertical"></i>
                                </a>
                                <ul class="dropdown-menu p-2">
                                    <li>
                                        <router-link to="/doctor/doctors-prescription-details" class="dropdown-item d-flex align-items-center">View</router-link>
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
    title: "Prescription ID",
    dataIndex: "Prescription_ID",
    key: "Prescription_ID",
    sorter: {
      compare: (a, b) =>
        a.Prescription_ID.toLowerCase() > b.Prescription_ID.toLowerCase() ? -1 : 1,
    },
  },
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
    title: "Prescribed On",
    dataIndex: "Prescribed_On",
    sorter: {
      compare: (a, b) => (a.Prescribed_On.toLowerCase() > b.Prescribed_On.toLowerCase() ? -1 : 1),
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
        "Prescription_ID": "#PRE0025",
        "Image": "user-14.jpg",
        "Patient": "John Richard",
        "Prescribed_On": "19 Jan 2025"
    },
    {
        "Prescription_ID": "#PRE0024",
        "Image": "user-15.jpg",
        "Patient": "Susan Babin",
        "Prescribed_On": "12 Mar 2025"
    },
    {
        "Prescription_ID": "#PRE0023",
        "Image": "user-16.jpg",
        "Patient": "Marsha Noland",
        "Prescribed_On": "27 Mar 2025"
    },
    {
        "Prescription_ID": "#PRE0022",
        "Image": "user-17.jpg",
        "Patient": "Irma Armstrong",
        "Prescribed_On": "12 Mar 2025"
    },
    {
        "Prescription_ID": "#PRE0021",
        "Image": "user-18.jpg",
        "Patient": "Ezra Belcher",
        "Prescribed_On": "24 Feb 2025"
    },
    {
        "Prescription_ID": "#PRE0020",
        "Image": "user-19.jpg",
        "Patient": "Glen Lentz",
        "Prescribed_On": "16 Feb 2025"
    },
    {
        "Prescription_ID": "#PRE0019",
        "Image": "user-01.jpg",
        "Patient": "Bernard Griffith",
        "Prescribed_On": "30 Apr 2025"
    },
    {
        "Prescription_ID": "#PRE0018",
        "Image": "user-21.jpg",
        "Patient": "John Elsass",
        "Prescribed_On": "30 Apr 2025"
    },
    {
        "Prescription_ID": "#PRE0017",
        "Image": "user-22.jpg",
        "Patient": "Carol Lam",
        "Prescribed_On": "10 Jan 2025"
    },
    {
        "Prescription_ID": "#PRE0016",
        "Image": "user-23.jpg",
        "Patient": "Alberto Ripley",
        "Prescribed_On": "25 Jan 2025"
    }
]

import { ref } from 'vue';
const valueOne = ref();

export default {
    data(){
        return{
            searchQuery: "",
            data,
            columns,
            valueOne,
            selected: [],
            selectedOne: [],
            selectedTwo: [],
            selectedThree: [],
            selectedFour: [],
            Doctor: [
                {id: 1, name: 'Dr. Mick Thompson'},
                {id: 2, name: 'Dr. Sarah Johnson'},
                {id: 3, name: 'Dr. Emily Carter'},
                {id: 4, name: 'Dr. David Lee'},
                {id: 5, name: 'Dr. Anna Kim'},
            ],
            Designation: [
                {id: 1, name: 'Cardiologist'},
                {id: 2, name: 'Orthopedic Surgeon'},
                {id: 3, name: 'Pediatrician'},
                {id: 4, name: 'Gynecologist'},
            ],
            Department: [
                {id: 1, name: 'Cardiology'},
                {id: 2, name: 'Orthopedics'},
                {id: 3, name: 'Pediatrics'},
            ],
            Amount: [
                {id: 1, name: '$501 - $1000'},
                {id: 2, name: '$501 - $1100'},
                {id: 3, name: '$701 - $1200'},
            ],
            Status: [
                {id: 1, name: 'Available'},
                {id: 2, name: 'Unavailable'},
            ],
        }
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
                    record.Prescription_ID.toLowerCase().includes(query) ||
                    record.Patient.toLowerCase().includes(query) ||
                    record.Prescribed_On.toLowerCase().includes(query)
                );
            });
        },
    },
}
</script>