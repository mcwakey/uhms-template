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
                    <h4 class="fw-bold mb-0"> Reviews </h4>
                </div>
                <div class="text-end">
                    <!-- dropdown-->
                    <div class="dropdown me-1">
                        <a href="javascript:void(0);" class="btn btn-md fw-normal border bg-white rounded text-dark d-inline-flex align-items-center fs-14"  data-bs-toggle="dropdown">
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

            <div class="table-responsive">
                <a-table class="table table-nowrap datatable" :columns="columns" :data-source="filteredPages">
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'Reviewed_By'">
                            <div class="d-flex align-items-center">
                                <a href="javascript:void(0);" class="avatar avatar-sm me-2">
                                    <img :src="getImageUrl(record.Image)" alt="product" class="rounded-circle">
                                </a>
                                <a href="javascript:void(0);">{{record.Reviewed_By}}</a>
                            </div>
                        </template>
                        <template v-if="column.key === 'Ratings'">
                            <div class="star-ratings d-flex align-items-center">
                                <i class="ti ti-star-filled fs-14 text-warning"></i>
                                <i class="ti ti-star-filled fs-14 text-warning"></i>
                                <i class="ti ti-star-filled fs-14 text-warning"></i>
                                <i class="ti ti-star-filled fs-14 text-warning"></i>
                                <i class="ti ti-star-filled fs-14 text-warning"></i>
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
</template>

<script>
const columns = [
  {
    title: "Reviewed By",
    dataIndex: "Reviewed_By",
    key: "Reviewed_By",
    sorter: {
      compare: (a, b) =>
        a.Reviewed_By.toLowerCase() > b.Reviewed_By.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Review",
    dataIndex: "Review",
    sorter: {
      compare: (a, b) =>
        a.Review.toLowerCase() > b.Review.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Ratings",
    dataIndex: "Ratings",
    key: "Ratings",
    sorter: {
      compare: (a, b) => (a.Ratings.toLowerCase() > b.Ratings.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Date",
    dataIndex: "Date",
    sorter: {
      compare: (a, b) => (a.Date.toLowerCase() > b.Date.toLowerCase() ? -1 : 1),
    },
  },
];

const data = [
 {
   "Reviewed_By": "Alberto Ripley",
   "Image": "user-33.jpg",
   "Review": "The clinic was well-organized, and I didn’t have to wait long.",
   "Ratings": "",
   "Date": "30 Apr 2025"
 },
 {
   "Reviewed_By": "Susan Babin",
   "Image": "user-01.jpg",
   "Review": "Dr. Mick explained everything in simple terms and made sure I understood my condition and treatm.",
   "Ratings": "",
   "Date": "15 Apr 2025"
 },
 {
   "Reviewed_By": "Carol Lam",
   "Image": "user-02.jpg",
   "Review": "From the front desk to the consultation, everything was smooth. Dr. Mick and his staff were friend.",
   "Ratings": "",
   "Date": "02 Apr 2025"
 },
 {
   "Reviewed_By": "Marsha Noland",
   "Image": "user-04.jpg",
   "Review": "While the doctor was knowledgeable, I felt a bit rushed during my visit. I would’ve appreciated.",
   "Ratings": "",
   "Date": "27 Mar 2025"
 },
 {
   "Reviewed_By": "Irma Armstrong",
   "Image": "user-05.jpg",
   "Review": "This is helpful information! If anyone has ongoing symptoms, don’t hesitate to speak to a licensed",
   "Ratings": "",
   "Date": "12 Mar 2025"
 },
 {
   "Reviewed_By": "Jesus Adams",
   "Image": "user-07.jpg",
   "Review": "Very professional and caring staff. I felt heard and understood throughout my treatment.",
   "Ratings": "",
   "Date": "05 Mar 2025"
 },
 {
   "Reviewed_By": "Ezra Belcher",
   "Image": "user-08.jpg",
   "Review": "The doctors took time to explain everything clearly. I left feeling informed and reassured.",
   "Ratings": "",
   "Date": "19 Feb 2025"
 },
 {
   "Reviewed_By": "Glen Lentz",
   "Image": "user-10.jpg",
   "Review": "Exceptional care from start to finish. The clinic is clean, organized, and patient-focused.",
   "Ratings": "",
   "Date": "16 Feb 2025"
 },
 {
   "Reviewed_By": "Bernard Griffith",
   "Image": "user-12.jpg",
   "Review": "Booking was easy, the team was punctual, and I received excellent medical attention..",
   "Ratings": "",
   "Date": "01 Feb 2025"
 },
 {
   "Reviewed_By": "John Elsass",
   "Image": "user-14.jpg",
   "Review": "Great experience! The doctor truly listened and provided personalized advice.",
   "Ratings": "",
   "Date": "20 Jas 2025"
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
    },
    computed: {
        filteredPages() {
            const query = this.searchQuery.toLowerCase();
            return this.data.filter((record) => {
                return (
                    record.Reviewed_By.toLowerCase().includes(query) ||
                    record.Review.toLowerCase().includes(query) ||
                    record.Ratings.toLowerCase().includes(query) ||
                    record.Date.toLowerCase().includes(query) 
                );
            });
        },
    },
}
</script>