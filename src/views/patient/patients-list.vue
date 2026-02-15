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
                    <h4 class="fw-bold mb-0">Patients List <span class="badge badge-soft-primary fw-medium border py-1 px-2 border-primary fs-13 ms-1">Total Patients : {{ totalCount }}</span></h4>
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
                <a-table class="table table-nowrap datatable" :columns="columns" :data-source="patients" :pagination="false" :loading="loading">
                    <template #bodyCell="{ column, record }">
                        <template v-if="column.key === 'name'">
                            <div class="d-flex align-items-center">
                                <router-link to="/patients/patient-details" class="avatar avatar-md me-2">
                                    <img :src="getImageUrl(record.profile_image)" alt="product" class="rounded-circle">
                                </router-link>
                                <router-link to="/patients/patient-details" class="text-dark fw-semibold">{{ record.first_name }} {{ record.last_name }} <span class="text-body fs-13 fw-normal d-block"> {{ record.gender }} </span>  </router-link>
                            </div>
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
                                        <router-link :to="`/patients/edit-patient/${record.id}`" class="dropdown-item d-flex align-items-center">Edit</router-link>
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

            <!-- Custom Pagination -->
            <data-table-pagination
                :total="totalCount"
                v-model:currentPage="currentPage"
                v-model:pageSize="perPage"
                :pageSizeOptions="[10, 20, 50]"
            />
            
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

<script setup>
import { onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useTableStore } from '@/stores/dataTableStore';

const patientsStore = useTableStore('patients');
const { data: patients, loading, totalCount, currentPage, perPage, searchQuery } = storeToRefs(patientsStore);

const columns = [
  {
    title: "Name",
    key: "name",
    sorter: true,
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
    sorter: true,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    sorter: true,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    sorter: true,
  },
  {
    title: "Date of Birth",
    dataIndex: "dob",
    key: "dob",
    sorter: true,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    sorter: true,
  },
  {
    title: "Action",
    key: "action",
    sorter: false,
  },
];

onMounted(() => {
  patientsStore.fetchData();
});

watch([currentPage, perPage, searchQuery], () => {
  patientsStore.fetchData();
});

const getImageUrl = (imageName) => {
    // Placeholder logic for images if needed, or return default
    if (!imageName) return new URL(`/src/assets/img/users/user-01.jpg`, import.meta.url).href;
    try {
        return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
    } catch (e) {
        return new URL(`/src/assets/img/users/user-01.jpg`, import.meta.url).href;
    }
};
</script>