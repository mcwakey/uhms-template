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
                                            <input type="text" class="form-control" v-model="form.first_name">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Last Name<span class="text-danger ms-1">*</span></label>
                                            <input type="text" class="form-control" v-model="form.last_name">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Phone Number<span class="text-danger ms-1">*</span></label>
                                            <input type="tel" class="form-control" v-model="form.phone">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Email Address<span class="text-danger ms-1">*</span></label>
                                            <input type="email" class="form-control" v-model="form.email">
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">DOB<span class="text-danger ms-1">*</span></label>
                                            <div class="input-icon-end position-relative">  
                                                <a-date-picker v-model:value="form.dob" class="form-control datetimepicker" value-format="YYYY-MM-DD" placeholder="YYYY-MM-DD" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Gender<span class="text-danger ms-1">*</span></label>
                                            <vue3-select 
                                                v-model="form.gender"
                                                :options="genderOptions"
                                                placeholder="Select"
                                                :reduce="option => option.value"
                                            />
                                        </div>
                                    </div>

                                </div>

                                <h6 class="fw-bold mb-3 border-top pt-3">Address Information</h6> 

                                <div class="row">

                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label mb-1 fw-medium">Address<span class="text-danger ms-1">*</span></label>
                                            <input type="text" class="form-control" v-model="form.address">
                                        </div>
                                    </div>
                                    
                                </div>                                   
                            </div>
                        </div>
                    </div>
                    <!-- card end -->

                    <div class="d-flex align-items-center justify-content-end">
                        <a href="javascript:void(0);" class="btn btn-light me-2" @click="router.back()">Cancel</a>
                        <button type="button" class="btn btn-primary" @click="onSubmit" :disabled="isSubmitting">
                            <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Save Changes
                        </button>
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

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axiosInstance from '@/utils/axios';
import { message } from 'ant-design-vue';
import dayjs from 'dayjs';

const route = useRoute();
const router = useRouter();
const isSubmitting = ref(false);
const isLoading = ref(false);

const form = ref({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    dob: null,
    gender: null,
    address: ''
});

const genderOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
];

const fetchPatient = async () => {
    isLoading.value = true;
    try {
        const response = await axiosInstance.get(`patients/${route.params.id}/`);
        const data = response.data;
        form.value = {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
            dob: data.dob ? data.dob : null,
            gender: data.gender,
            address: data.address
        };
    } catch (error) {
        console.error('Error fetching patient:', error);
        message.error('Failed to load patient details');
        router.push('/patients/patients-list');
    } finally {
        isLoading.value = false;
    }
};

const onSubmit = async () => {
    if (!form.value.first_name || !form.value.last_name || !form.value.email) {
        message.error('Please fill in all required fields');
        return;
    }

    try {
        isSubmitting.value = true;
        await axiosInstance.put(`patients/${route.params.id}/`, form.value);
        message.success('Patient updated successfully');
        router.push('/patients/patients-list');
    } catch (error) {
        console.error('Error updating patient:', error);
        message.error(error.response?.data?.message || 'Failed to update patient');
    } finally {
        isSubmitting.value = false;
    }
};

onMounted(() => {
    fetchPatient();
});
</script>
