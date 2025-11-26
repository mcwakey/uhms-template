<template>
    <layouts-header></layouts-header>
    <layouts-sidebar></layouts-sidebar>

    <!-- ========================
        Start Page Content
    ========================= -->
        
    <div class="page-wrapper">

        <!-- Start Content -->
        <div class="content">

            <!-- row start -->
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <!-- page header start -->
                    <div class="mb-4">
                        <h6 class="fw-bold mb-0 d-flex align-items-center"> <router-link to="/patients/patients-list" class="text-dark"> <i class="ti ti-chevron-left me-1"></i>Patients</router-link></h6>
                    </div>
                    <!-- page header end -->

                    <!-- card start -->
                    <div class="card">
                        <div class="card-body pb-0">
                            <div class="form">
                                <h6 class="fw-bold mb-3">Patient Information</h6>
                                <div class="row">

                                    <div class="col-lg-12">
                                        <div class="mb-3 d-flex align-items-center">
                                            <label class="form-label mb-0">Profile Image</label>
                                            <div class="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0">
                                                <img src="@/assets/img/users/user-08.jpg" alt="img" class="position-relative z-n1">
                                                <input type="file" class="form-control image-sign" multiple="">
                                                <div class="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1">
                                                    <a href="javascript:void(0);" class="text-white d-flex align-items-center justify-content-center">
                                                        <i class="ti ti-photo fs-14"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">First Name<span class="text-danger ms-1">*</span></label>
                                            <input type="text" class="form-control" value="Alberto Ripleyto Ripley">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Last Name<span class="text-danger ms-1">*</span></label>
                                            <input type="text" class="form-control" value="Ripleyto">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Phone Number<span class="text-danger ms-1">*</span></label>
                                            <input type="tel" class="form-control" id="phone" name="phone" value="+1 43554 54584">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Email Address<span class="text-danger ms-1">*</span></label>
                                            <input type="email" class="form-control" value="alberto@example.com">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Primary Doctor<span class="text-danger ms-1">*</span></label>
                                            <vue3-select 
                                                v-model="selected"
                                                :options="Primary"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">DOB<span class="text-danger ms-1">*</span></label>
                                            <div class="input-icon-end position-relative">  
                                                <a-date-picker v-model="valueOne" class="form-control datetimepicker" placeholder="dd/mm/yyyy" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Gender<span class="text-danger ms-1">*</span></label>
                                            <vue3-select 
                                                v-model="selectedOne"
                                                :options="Gender"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Blood Group<span class="text-danger ms-1">*</span></label>
                                            <vue3-select 
                                                v-model="selectedTwo"
                                                :options="Bloodgroup"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Status<span class="text-danger ms-1">*</span></label>
                                            <vue3-select 
                                                v-model="selectedThree"
                                                :options="Status"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>

                                </div>

                                <h6 class="fw-bold mb-3 border-top pt-3">Address Information</h6> 

                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Address 1<span class="text-danger ms-1">*</span></label>
                                            <input type="text" class="form-control" value="123 Main Street">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Address 2<span class="text-danger ms-1">*</span></label>
                                            <input type="text" class="form-control" value="Apartment 4B">
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1">Country<span class="text-danger ms-1">*</span></label>
                                            <vue3-select 
                                                v-model="selectedFour"
                                                :options="Country"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>                        
            
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1">State<span class="text-danger ms-1">*</span></label>
                                            <vue3-select 
                                                v-model="selectedFive"
                                                :options="State"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>
            
                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1">City<span class="text-danger ms-1">*</span></label>
                                            <vue3-select 
                                                v-model="selectedSix"
                                                :options="City"
                                                placeholder="Select"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1">Pincode<span class="text-danger ms-1">*</span></label>
                                            <input type="text" class="form-control" value="90001">
                                        </div>
                                    </div>

                                </div>                                   
                            </div>
                        </div>
                    </div>
                    <!-- card end -->

                    <div class="d-flex align-items-center justify-content-end">
                        <a href="javascript:void(0);" class="btn btn-light me-2">Cancel</a>
                        <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
                    </div>

                </div>
            </div>
            <!-- row end -->               
            
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
import { ref } from 'vue';
const valueOne = ref();
export default {
    data(){
        return{
            valueOne,
            selected: "Dr. Mick Thompson",
            selectedOne: "Male",
            selectedTwo: "O+",
            selectedThree: "Available",
            selectedFour: "United States",
            selectedFive: "California",
            selectedSix: "Los Angeles",
            Primary: [
                {label: "Dr. Mick Thompson", value: "Dr. Mick Thompson"},
                {label: "Dr. Sarah Johnson", value: "Dr. Sarah Johnson"},
                {label: "Dr. Emily Carter", value: "Dr. Emily Carter"},
                {label: "Dr. David Lee", value: "Dr. David Lee"},
                {label: "Dr. Anna Kim", value: "Dr. Anna Kim"},
                {label: "Dr. John Smith", value: "Dr. John Smith"},
                {label: "Dr. Lisa White", value: "Dr. Lisa White"},
                {label: "Dr. Patrica Brown", value: "Dr. Patrica Brown"},
            ],
            Gender: [
                {label: "Male", value: "Male"},
                {label: "Female", value: "Female"},
            ],
            Bloodgroup: [
                {label: "O+", value: "O+"},
                {label: "O-", value: "O-"},
                {label: "A+", value: "A+"},
                {label: "A-", value: "A-"},
                {label: "B+", value: "B+"},
                {label: "B-", value: "B-"},
            ],
            Status: [
                {label: "Available", value: "Available"},
                {label: "Unavailable", value: "Unavailable"},
            ],
            Country: [
                {label: "United States", value: "United States"},
                {label: "Canada", value: "Canada"},
                {label: "UK", value: "UK"},
                {label: "Germany", value: "Germany"},
                {label: "France", value: "France"},
            ],
            State: [
                {label: "California", value: "California"},
                {label: "Ontario", value: "Ontario"},
                {label: "Bavaria", value: "Bavaria"},
                {label: "Wellington", value: "Wellington"},
                {label: "Le-de-France", value: "Le-de-France"},
            ],
            City: [
                {label: "Los Angeles", value: "Los Angeles"},
                {label: "Toronto", value: "Toronto"},
                {label: "London", value: "London"},
                {label: "Munich", value: "Munich"},
                {label: "Sydney", value: "Sydney"},
            ],
        }
    }
}
</script>