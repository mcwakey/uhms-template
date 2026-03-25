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
            <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3">
                <div class="flex-grow-1">
                    <h4 class="fw-bold mb-0"> Doctor Grid <span class="badge badge-soft-primary fs-13 fw-medium ms-2">Total Doctors : 565</span></h4>
                </div>
                <div class="text-end d-flex">
                    <div class="dropdown me-2">
                        <a href="javascript:void(0);" class="btn btn-white bg-white fs-14 py-1 border d-inline-flex text-dark align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                            <i class="ti ti-filter text-gray-5 me-1"></i>Filters
                        </a>
                        <div class="dropdown-menu dropdown-lg dropdown-menu-end filter-dropdown p-0" id="filter-dropdown">
                            <div class="d-flex align-items-center justify-content-between border-bottom filter-header">
                                <h4 class="mb-0">Filter</h4>
                                <div class="d-flex align-items-center">
                                    <a href="javascript:void(0);" class="link-danger text-decoration-underline">Clear All</a>
                                </div>
                            </div>
                            <filter-index></filter-index>
                        </div>
                    </div>
                    <div class="bg-white border shadow-sm rounded px-1 pb-0 text-center d-flex align-items-center justify-content-center">
                        <router-link to="/doctors/doctors-list" class="bg-white rounded p-1 d-flex align-items-center justify-content-center"> <i class="ti ti-list fs-14 text-dark"></i></router-link>
                        <router-link to="/doctors/doctors-grid" class="bg-light rounded p-1 d-flex align-items-center justify-content-center"> <i class="ti ti-layout-grid fs-14 text-body"></i> </router-link>
                    </div>
                    <router-link to="/doctors/add-doctor" class="btn btn-primary ms-2 fs-13 btn-md"><i class="ti ti-plus me-1"></i>New Doctor</router-link>
                </div>
            </div>
            <!-- End Page Header -->

            <div class="row">

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img">
                                <router-link to="/doctors/doctor-details">
                                    <img src="@/assets/img/doctors/doctor-01.jpg" class="rounded" alt="">
                                </router-link>
                            </div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Mick Thompson</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Cardiologist</span>
                                <p class="mb-2 fs-13">Available : Mon, 20 Jan 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $499</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-02.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Sarah Johnson</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Orthopedic Surgeon</span>
                                <p class="mb-2 fs-13">Available : Wed, 22 Jan 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $450</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-03.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Emily Carter</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Pediatrician</span>
                                <p class="mb-2 fs-13">Available : Fri, 24 Jan 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $300</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-04.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. David Lee</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Gynecologist</span>
                                <p class="mb-2 fs-13">Available : Tue, 21 Jan 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $250</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-05.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Anna Kim</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Psychiatrist</span>
                                <p class="mb-2 fs-13">Available : Mon, 27 Jan 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $350</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-06.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. John Smith</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Neurosurgeon</span>
                                <p class="mb-2 fs-13">Available : Thu, Jan 30, 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $499</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-07.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Lisa White</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Oncologist</span>
                                <p class="mb-2 fs-13">Available : Sat, 25 Jan 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $200</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-08.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Patricia Brown</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Pulmonologist</span>
                                <p class="mb-2 fs-13">Available : Sun, 01 Feb 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $450</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-09.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Rachel Green</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Urologist</span>
                                <p class="mb-2 fs-13">Available : Tue, 28 Jan 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $400</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-10.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Michael Smith</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Cardiologist</span>
                                <p class="mb-2 fs-13">Available : Thu, 05 Feb 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $300</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-11.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Sarah Johnson</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Surgeon</span>
                                <p class="mb-2 fs-13">Available : Mon, 09 Feb 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $500</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-12.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Adrian White</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Practitioner</span>
                                <p class="mb-2 fs-13">Available : Sat, 25 Jan 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $200</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-13.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Ken Clark</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Dermatologist</span>
                                <p class="mb-2 fs-13">Available : Wed, 12 Feb 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $350</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-14.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Oliver King</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Orthopedist</span>
                                <p class="mb-2 fs-13">Available : Fri, 14 Feb 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $600</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

                <div class="col-xl-4 col-md-6">
                    <div class="card">
                        <div class="card-body d-flex align-items-center flex-sm-nowrap flex-wrap row-gap-3">
                            <div class="me-3 doctor-profile-img"><router-link to="/doctors/doctor-details"><img src="@/assets/img/doctors/doctor-15.jpg" class="rounded" alt=""></router-link></div>
                            <div class="flex-fill">
                                <div class="d-flex align-items-center justify-content-between mb-1">
                                    <h6 class="mb-0 fw-semibold"><router-link to="/doctors/doctor-details">Dr. Avan Davis</router-link></h6>
                                    <div class="action-item">
                                        <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li>
                                                <router-link to="/doctors/edit-doctor" class="dropdown-item d-flex align-items-center">Edit</router-link>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#delete_modal">Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="d-block mb-2 fs-13">Endocrinologist</span>
                                <p class="mb-2 fs-13">Available : Tue, 17 Feb 2025</p>
                                <div class="d-flex align-items-center justify-content-between">
                                    <h6 class="text-primary fs-14 mb-0"><span class="text-muted fs-13 fw-normal">Starts From : </span> $375</h6>
                                    <router-link to="/appointments/appointment-calendar" class="avatar avatar-xs border text-muted fs-14"><i class="ti ti-calendar-cog"></i></router-link>
                                </div>
                            </div>
                        </div><!-- end card body -->
                    </div><!-- end card -->
                </div><!-- end col -->

            </div>

            <div class="text-center">
                <a href="#" class="btn btn-white bg-white text-dark fs-13">Load More<span class="spinner-border spinner-border-sm ms-1"></span></a>
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
                <div class="modal-body text-center position-relative z-1">
                    <img src="@/assets/img/bg/delete-modal-bg-01.png" alt="" class="img-fluid position-absolute top-0 start-0 z-n1">
                    <img src="@/assets/img/bg/delete-modal-bg-02.png" alt="" class="img-fluid position-absolute bottom-0 end-0 z-n1">
                    <div class="mb-3">
                        <span class="avatar avatar-lg bg-danger text-white"><i class="ti ti-trash fs-24"></i></span>
                    </div>
                    <h5 class="fw-bold mb-1">Delete Confirmation</h5>
                    <p class="mb-3">Are you sure want to delete?</p>
                    <div class="d-flex justify-content-center">
                        <a href="javascript:void(0);" class="btn btn-light position-relative z-1 me-3" data-bs-dismiss="modal">Cancel</a>
                        <router-link to="/doctors/doctors-grid" class="btn btn-danger position-relative z-1">Yes, Delete</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete Modal  -->

    <!-- Start Delete Modal  -->
    <div class="modal fade" id="success_modal">
        <div class="modal-dialog modal-dialog-centered modal-sm">
            <div class="modal-content">
                <div class="modal-body text-center position-relative z-1">
                    <div class="mb-3">
                        <span class="avatar avatar-lg bg-success text-white"><i class="ti ti-check fs-24"></i></span>
                    </div>
                    <h5 class="fw-bold mb-1">Added Successfully</h5>
                    <p class="mb-3">Doctor has been added to your List</p>
                    <div class="d-flex justify-content-center">
                        <a href="javascript:void(0);" class="btn btn-light position-relative z-1 me-3" data-bs-dismiss="modal">Cancel</a>
                        <router-link to="/doctors/doctor-details" class="btn btn-primary position-relative z-1">View Details</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Delete Modal  -->
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>