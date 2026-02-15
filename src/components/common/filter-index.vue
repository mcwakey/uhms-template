<template>
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
</template>

<script>
import { ref } from 'vue';
const valueOne = ref();
export default {
    data() {
        return {
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
        };
    },
    methods: {
        addTag (newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.options.push(tag)
            this.value.push(tag)
        }
    },
};
</script>