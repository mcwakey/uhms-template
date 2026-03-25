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
                    <h4 class="fw-bold mb-0"> Patient Details </h4>
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

                </div>
            </div>
            <!-- End Page Header -->
                
            <!-- card start -->
            <div class="card">
                <div class="row align-items-end">
                    <div class="col-xl-9 col-lg-8">
                        <div class="d-sm-flex align-items-center position-relative z-0 overflow-hidden p-3">
                            <img src="@/assets/img/icons/shape-01.svg" alt="img" class="z-n1 position-absolute end-0 top-0 d-none d-lg-flex">
                            <a href="javascript:void(0);" class="avatar avatar-xxxl patient-avatar me-2 flex-shrink-0">
                                <img src="@/assets/img/users/user-08.jpg" alt="product" class="rounded">
                            </a>
                            <div>
                                <p class="text-primary mb-1">#PT0025</p>
                                <h5 class="mb-1"><a href="javascript:void(0);" class="fw-bold">Alberto Ripley</a></h5>
                                <p class="mb-3">4150 Hiney Road, Las Vegas, NV 89109</p>
                                <div class="d-flex align-items-center flex-wrap">
                                    <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-phone me-1 text-dark"></i>Phone : <span class="text-dark ms-1">+1 54546 45648</span></p>
                                    <span class="mx-2 text-light">|</span>
                                    <p class="mb-0 d-inline-flex align-items-center"><i class="ti ti-calendar-time me-1 text-dark"></i>Last Visited : <span class="text-dark ms-1">30 Apr 2025</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4">
                        <div class="p-3 text-lg-end">
                            <div class="mb-4">
                                <a href="javascript:void(0);" class="btn btn-outline-white shadow-sm rounded-circle d-inline-flex align-items-center p-2 fs-14 me-2"><i class="ti ti-phone"></i></a>
                                <a href="javascript:void(0);" class="btn btn-outline-white shadow-sm rounded-circle d-inline-flex align-items-center p-2 fs-14 me-2"><i class="ti ti-message-circle"></i></a>
                                <a href="javascript:void(0);" class="btn btn-outline-white shadow-sm rounded-circle d-inline-flex align-items-center p-2 fs-14"><i class="ti ti-video"></i></a>
                            </div>
                            <router-link to="/patient/patient-appointment-details" class="btn btn-primary"><i class="ti ti-calendar-event me-1"></i>Book Apppointment</router-link>
                        </div>
                    </div>
                    </div>
            </div>
            <!-- card end -->

            <!-- row start -->
            <div class="row">
                <div class="col-xl-5 d-flex">
                    <div class="card shadow-sm flex-fill w-100">
                        <div class="card-header">
                            <h5 class="fw-bold mb-0"><i class="ti ti-user-star me-1"></i>About</h5>
                        </div>
                        <div class="card-body pb-0">
                            <div class="row">
                                <div class="col-sm-5">
                                    <div class="d-flex align-items-center mb-3">
                                    <span class="avatar rounded-circle bg-light text-dark flex-shrink-0 me-2"><i class="ti ti-calendar-event fs-16"></i></span>
                                    <div>
                                        <h6 class="fs-13 fw-bold mb-1">DOB</h6>
                                        <p class="mb-0">25 Jan 1990</p>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-sm-7">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar rounded-circle bg-light text-dark flex-shrink-0 me-2"><i class="ti ti-droplet fs-16"></i></span>
                                    <div>
                                        <h6 class="fs-13 fw-bold mb-1">Blood Group</h6>
                                        <p class="mb-0">O +ve</p>
                                    </div>
                                </div>
                                </div>
                                <div class="col-sm-5">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar rounded-circle bg-light text-dark flex-shrink-0 me-2"><i class="ti ti-gender-male fs-16"></i></span>
                                    <div>
                                        <h6 class="fs-13 fw-bold mb-1">Gender</h6>
                                        <p class="mb-0">Male</p>
                                    </div>
                                </div>
                                </div>
                                <div class="col-sm-7">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar rounded-circle bg-light text-dark flex-shrink-0 me-2"><i class="ti ti-mail fs-16"></i></span>
                                    <div>
                                        <h6 class="fs-13 fw-bold mb-1">Email</h6>
                                        <p class="mb-0 text-break">alberto@example.com</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 d-flex">
                    <div class="card shadow-sm flex-fill w-100">
                        <div class="card-header">
                            <h5 class="fw-bold mb-0"><i class="ti ti-book me-1"></i>Vital Signs</h5>
                        </div>
                        <div class="card-body pb-0">
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="d-flex align-items-center mb-3">
                                        <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-2 border"><i class="ti ti-droplet fs-16"></i></span>
                                        <div>
                                            <h6 class="fs-13 fw-bold mb-1 text-truncate">Blood Pressure</h6>
                                            <p class="mb-0 d-inline-flex align-items-center text-truncate"><i class="ti ti-point-filled me-1 text-success fs-18"></i>100/67 mmHg</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-2 border"><i class="ti ti-heart-rate-monitor fs-16"></i></span>
                                    <div>
                                        <h6 class="fs-13 fw-bold mb-1 text-truncate">Heart Rate</h6>
                                        <p class="mb-0 d-inline-flex align-items-center text-truncate"><i class="ti ti-point-filled me-1 text-danger fs-18"></i>89 Bpm</p>
                                    </div>
                                </div>
                                </div>
                                <div class="col-sm-4">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-2 border"><i class="ti ti-hexagons fs-16"></i></span>
                                    <div>
                                        <h6 class="fs-13 fw-bold mb-1">SPO2</h6>
                                        <p class="mb-0 d-inline-flex align-items-center text-truncate"><i class="ti ti-point-filled me-1 text-success fs-18"></i>98 %</p>
                                    </div>
                                </div>
                                </div>
                                <div class="col-sm-4">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-2 border"><i class="ti ti-temperature fs-16"></i></span>
                                    <div>
                                        <h6 class="fs-13 fw-bold mb-1 text-truncate">Temperature</h6>
                                        <p class="mb-0 d-inline-flex align-items-center text-truncate"><i class="ti ti-point-filled me-1 text-success fs-18"></i>101 C</p>
                                    </div>
                                </div>
                                </div>
                                <div class="col-sm-4">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-2 border"><i class="ti ti-activity fs-16"></i></span>
                                    <div>
                                        <h6 class="fs-13 fw-bold mb-1 text-truncate">Respiratory Rate</h6>
                                        <p class="mb-0 d-inline-flex align-items-center text-truncate"><i class="ti ti-point-filled me-1 text-danger fs-18"></i>24 rpm</p>
                                    </div>
                                </div>
                                </div>
                                <div class="col-sm-4">
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar rounded-2 bg-light text-dark flex-shrink-0 me-2 border"><i class="ti ti-weight fs-16"></i></span>
                                    <div>
                                        <h6 class="fs-13 fw-bold mb-1 text-truncate">Weight</h6>
                                        <p class="mb-0 d-inline-flex align-items-center text-truncate"><i class="ti ti-point-filled me-1 text-success fs-18"></i>100 kg</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
            <!-- row end -->

            <!-- tab start -->
            <ul class="nav nav-tabs nav-bordered mb-3">
                <li class="nav-item">
                    <a href="#appointments" data-bs-toggle="tab" aria-expanded="false" class="nav-link active bg-transparent">
                        <span>Appointments</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="#transactions" data-bs-toggle="tab" aria-expanded="true" class="nav-link bg-transparent">
                        <span>Transactions</span>
                    </a>
                </li>
            </ul>
            <!-- tab end -->                

            <!-- tab content start -->
            <div class="tab-content">
                <div class="tab-pane show active" id="appointments">
                    <appointment-details-table></appointment-details-table>
                </div>
                <div class="tab-pane" id="transactions">
                    <transactions-details-table></transactions-details-table>
                </div>
            </div>
            <!-- tab content end -->

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