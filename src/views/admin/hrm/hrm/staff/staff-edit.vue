<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content pb-0">
      <!-- Page Header -->
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3">
        <div class="flex-grow-1">
          <h6 class="fw-bold mb-0 d-flex align-items-center">
            <router-link to="/hrm/staff/"
              ><i class="ti ti-chevron-left me-1 fs-14"></i>Staff</router-link
            >
          </h6>
        </div>
      </div>
      <!-- End Page Header -->
      <div id="edit_staff">
        <div class="col-lg-12">
          <div class="card">
            <div class="card">
              <div class="card-header border-bottom border-dashed d-flex align-items-center">
                <h4 class="header-title">Edit Staff Member</h4>
                <LoadingIndicator
                  :show="loading"
                  variant="inline"
                  size="sm"
                  wrapperClass="ms-auto"
                  message="Loading staff data..."
                  messageClass="ms-2"
                />
              </div>

              <div class="card-body" v-if="!loading">
                <VeeForm
                  :validation-schema="schema"
                  v-slot="{ errors }"
                  @submit="onSubmit"
                  class="staff-form"
                >
                  <div class="bg-light px-3 py-2 mb-3">
                    <h6 class="fw-bold mb-0">Contact Information</h6>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="mb-3 d-flex align-items-center">
                        <label class="form-label">Profile Image</label>
                        <div
                          class="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0"
                        >
                          <i class="ti ti-user-plus fs-16"></i>
                          <Field
                            type="file"
                            class="form-control image-sign"
                            name="avatar"
                            multiple=""
                          />
                          <div
                            class="position-absolute bottom-0 end-0 star-0 w-100 h-25 bg-dark d-flex align-items-center justify-content-center z-n1"
                          >
                            <a
                              href="javascript:void(0);"
                              class="text-white d-flex align-items-center justify-content-center"
                            >
                              <i class="ti ti-photo fs-14"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <div class="row">
                    <div class="col-lg-4">
                      <div class="mb-3">
                        <label class="form-label"
                          >First Name <span class="text-danger">*</span></label
                        >
                        <Field
                          type="text"
                          class="form-control"
                          name="first_name"
                          v-model="formData.first_name"
                          :class="{ 'is-invalid': errors.first_name }"
                        />
                        <ErrorMessage name="first_name" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="mb-3">
                        <label class="form-label"
                          >Last Name <span class="text-danger">*</span></label
                        >
                        <Field
                          type="text"
                          class="form-control"
                          name="last_name"
                          v-model="formData.last_name"
                          :class="{ 'is-invalid': errors.last_name }"
                        />
                        <ErrorMessage name="last_name" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="mb-3">
                        <label class="form-label">Other Names</label>
                        <Field
                          type="text"
                          class="form-control"
                          name="other_names"
                          v-model="formData.other_names"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="mb-3">
                        <label class="form-label"
                          >Phone Number <span class="text-danger">*</span></label
                        >
                        <Field
                          type="tel"
                          as="vue-tel-input"
                          name="phone"
                          v-model="formData.phone"
                          :inputOptions="{
                            styleClasses: ['form-control'].join(' '),
                            name: 'phone',
                            type: 'tel',
                            placeholder: 'e.g. 0801234567',
                          }"
                          :validCharactersOnly="true"
                          :class="{ 'is-invalid': errors.phone }"
                        />
                        <ErrorMessage name="phone" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="mb-3">
                        <label class="form-label">Other Phone</label>
                        <Field
                          type="tel"
                          as="vue-tel-input"
                          name="other_phone"
                          v-model="formData.other_phone"
                          :inputOptions="{
                            styleClasses: ['form-control'].join(' '),
                            name: 'phone',
                            type: 'tel',
                            placeholder: 'e.g. 0801234567',
                          }"
                          :validCharactersOnly="true"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="mb-3">
                        <label class="form-label"
                          >Email Address <span class="text-danger">*</span></label
                        >
                        <Field
                          type="email"
                          class="form-control"
                          name="email"
                          rules="required|email"
                          v-model="formData.email"
                          :class="{ 'is-invalid': errors.email }"
                        />
                        <ErrorMessage name="email" class="invalid-feedback" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Gender<span class="text-danger ms-1">*</span></label
                        >
                        <Field name="gender" v-slot="{ field, errorMessage }">
                          <VueMultiselect
                            v-bind="field"
                            v-model="formData.gender"
                            :options="GenderOptions || []"
                            :searchable="false"
                            :close-on-select="true"
                            :show-labels="false"
                            placeholder="Select Gender"
                            label="label"
                            track-by="value"
                            :class="{ 'is-invalid': errorMessage }"
                            @update:model-value="field.onChange"
                          />
                        </Field>
                        <ErrorMessage name="gender" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Date of Birth <span class="text-danger">*</span></label
                        >
                        <Field
                          name="date_of_birth"
                          type="date"
                          class="form-control"
                          placeholder="dd/mm/yyyy"
                          v-model="formData.date_of_birth"
                          :class="{ 'is-invalid': errors.date_of_birth }"
                        />
                        <ErrorMessage name="date_of_birth" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Marital Status <span class="text-danger">*</span></label
                        >
                        <Field name="marital_status" v-slot="{ field, errorMessage }">
                          <VueMultiselect
                            v-bind="field"
                            v-model="formData.marital_status"
                            :options="MaritalStatusOptions || []"
                            :searchable="false"
                            :close-on-select="true"
                            :show-labels="false"
                            placeholder="Select Marital Status"
                            label="label"
                            track-by="value"
                            :class="{ 'is-invalid': errorMessage }"
                            @update:model-value="field.onChange"
                          />
                        </Field>
                        <ErrorMessage name="marital_status" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Religion <span class="text-danger">*</span></label
                        >
                        <Field name="religion" v-slot="{ field, errorMessage }">
                          <VueMultiselect
                            v-bind="field"
                            v-model="formData.religion"
                            :options="religionOptions || []"
                            :searchable="false"
                            :close-on-select="true"
                            :show-labels="false"
                            placeholder="Select Religion"
                            label="label"
                            track-by="value"
                            :class="{ 'is-invalid': errorMessage }"
                            @update:model-value="field.onChange"
                          />
                        </Field>
                        <ErrorMessage name="religion" class="invalid-feedback" />
                      </div>
                    </div>
                  </div>

                  <!-- Professional Information -->
                  <div class="bg-light px-3 py-2 mb-3">
                    <h6 class="fw-bold mb-0">Professional Information</h6>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Designation</label>
                        <Field name="designation" v-slot="{ field, errorMessage }">
                          <VueMultiselect
                            v-bind="field"
                            v-model="formData.designation"
                            :options="designationOptions || []"
                            :searchable="false"
                            :close-on-select="true"
                            :show-labels="false"
                            placeholder="Select Designation"
                            label="label"
                            track-by="value"
                            :class="{ 'is-invalid': errorMessage }"
                            @update:model-value="field.onChange"
                          />
                        </Field>
                        <ErrorMessage name="designation" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Department <span class="text-danger">*</span></label
                        >
                        <Field name="department" v-slot="{ field, errorMessage }">
                          <VueMultiselect
                            v-bind="field"
                            v-model="formData.department"
                            :options="departments || []"
                            :searchable="false"
                            :close-on-select="true"
                            :show-labels="false"
                            :loading="loadingDepartments"
                            placeholder="Select Department"
                            label="name"
                            track-by="id"
                            :class="{ 'is-invalid': errorMessage }"
                            @update:model-value="
                              (value) => {
                                field.onChange(value)
                                onDepartmentChange(value)
                              }
                            "
                          />
                        </Field>
                        <ErrorMessage name="department" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Specialization <span class="text-danger">*</span></label
                        >
                        <Field name="specialization" v-slot="{ field, errorMessage }">
                          <VueMultiselect
                            v-bind="field"
                            v-model="formData.specialization"
                            :options="specialization || []"
                            :searchable="false"
                            :close-on-select="true"
                            :show-labels="false"
                            :loading="loadingSpecializations"
                            placeholder="Select Specialization"
                            label="name"
                            track-by="id"
                            :key="specializationKey"
                            :class="{ 'is-invalid': errorMessage }"
                            @update:model-value="field.onChange"
                          />
                        </Field>
                        <ErrorMessage name="specialization" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Role</label>
                        <Field name="role" v-slot="{ field, errorMessage }">
                          <VueMultiselect
                            v-bind="field"
                            v-model="formData.role"
                            :options="roles || []"
                            :searchable="false"
                            :close-on-select="true"
                            :show-labels="false"
                            placeholder="Select Role"
                            label="name"
                            track-by="id"
                            :class="{ 'is-invalid': errorMessage }"
                            @update:model-value="field.onChange"
                          />
                        </Field>
                        <ErrorMessage name="role" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Employment Date <span class="text-danger">*</span></label
                        >
                        <Field
                          name="employment_date"
                          type="date"
                          class="form-control"
                          placeholder="dd/mm/yyyy"
                          v-model="formData.employment_date"
                          :class="{ 'is-invalid': errors.employment_date }"
                        />
                        <ErrorMessage name="employment_date" class="invalid-feedback" />
                      </div>
                    </div>
                  </div>

                  <!-- Address Information -->
                  <div class="bg-light px-3 py-2 mb-3">
                    <h6 class="fw-bold mb-0">Address Information</h6>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Country <span class="text-danger">*</span></label>
                        <Field name="country" v-slot="{ field, errorMessage }">
                          <VueMultiselect
                            v-bind="field"
                            v-model="formData.address.country"
                            :options="[{ label: 'Ghana', value: 'Ghana' }]"
                            :searchable="false"
                            :close-on-select="true"
                            :show-labels="false"
                            placeholder="Select Country"
                            label="label"
                            track-by="value"
                            :class="{ 'is-invalid': errorMessage }"
                            @update:model-value="field.onChange"
                          />
                        </Field>
                        <ErrorMessage name="country" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">State <span class="text-danger">*</span></label>
                        <Field name="state" v-slot="{ field, errorMessage }">
                          <VueMultiselect
                            v-bind="field"
                            v-model="formData.address.state"
                            :options="StateOptions || []"
                            :searchable="false"
                            :close-on-select="true"
                            :show-labels="false"
                            :loading="loadingStates"
                            placeholder="Select State"
                            label="label"
                            track-by="value"
                            :class="{ 'is-invalid': errorMessage }"
                            @update:model-value="
                              (value) => {
                                field.onChange(value)
                                selectedState = value?.value
                              }
                            "
                          />
                        </Field>
                        <ErrorMessage name="state" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">City <span class="text-danger">*</span></label>
                        <Field name="city" v-slot="{ field, errorMessage }">
                          <VueMultiselect
                            v-bind="field"
                            v-model="formData.address.city"
                            :options="CityOptions || []"
                            :searchable="false"
                            :close-on-select="true"
                            :show-labels="false"
                            :loading="loadingCities"
                            placeholder="Select City"
                            label="label"
                            track-by="value"
                            :class="{ 'is-invalid': errorMessage }"
                            @update:model-value="field.onChange"
                          />
                        </Field>
                        <ErrorMessage name="city" class="invalid-feedback" />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label class="form-label">Address <span class="text-danger">*</span></label>
                        <Field
                          type="text"
                          class="form-control"
                          name="address1"
                          v-model="formData.address.address_line_1"
                          :class="{ 'is-invalid': errors.address1 }"
                        />
                        <ErrorMessage name="address1" class="invalid-feedback" />
                      </div>
                    </div>
                  </div>
                  <!-- Emergency Contacts -->
                  <div
                    class="bg-light px-3 py-2 mb-3 d-flex justify-content-between align-items-center"
                  >
                    <h6 class="fw-bold mb-0">
                      Emergency Contacts <span class="text-danger">*</span>
                    </h6>
                    <button
                      type="button"
                      class="btn btn-sm btn-primary"
                      @click="addEmergencyContact"
                    >
                      <i class="ti ti-plus me-1"></i>Add Contact
                    </button>
                  </div>
                  <div
                    v-if="emergencyContacts.length === 0"
                    class="text-center text-muted py-4 border border-danger rounded"
                  >
                    <i class="ti ti-users fs-24 mb-2 text-danger"></i>
                    <p class="text-danger mb-0">
                      <strong>Required:</strong> At least one emergency contact must be added. Click
                      "Add Contact" to add one.
                    </p>
                  </div>
                  <div
                    v-for="(contact, index) in emergencyContacts"
                    :key="`emergency-${index}`"
                    class="mb-4"
                  >
                    <div class="row align-items-center">
                      <div class="col-lg-11">
                        <div class="row">
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label class="form-label"
                                >Name <span class="text-danger">*</span></label
                              >
                              <Field
                                :name="`emergency_contact[${index}].name`"
                                type="text"
                                class="form-control"
                                v-model="contact.name"
                                rules="required"
                                :class="{
                                  'is-invalid': errors[`emergency_contact[${index}].name`],
                                }"
                              />
                              <ErrorMessage
                                :name="`emergency_contact[${index}].name`"
                                class="invalid-feedback"
                              />
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label class="form-label"
                                >Relationship <span class="text-danger">*</span></label
                              >
                              <Field
                                :name="`emergency_contact[${index}].relation`"
                                v-slot="{ field, errorMessage }"
                                rules="required"
                              >
                                <VueMultiselect
                                  v-bind="field"
                                  v-model="contact.relation"
                                  :options="relationshipOptions || []"
                                  :searchable="false"
                                  :close-on-select="true"
                                  :show-labels="false"
                                  placeholder="Select Relationship"
                                  label="label"
                                  track-by="value"
                                  :class="{ 'is-invalid': errorMessage }"
                                  @update:model-value="field.onChange"
                                />
                              </Field>
                              <ErrorMessage
                                :name="`emergency_contact[${index}].relation`"
                                class="invalid-feedback"
                              />
                            </div>
                          </div>
                          <div class="col-lg-4">
                            <div class="mb-3">
                              <label class="form-label"
                                >Phone <span class="text-danger">*</span></label
                              >
                              <Field
                                :name="`emergency_contact[${index}].phone`"
                                type="tel"
                                as="vue-tel-input"
                                v-model="contact.phone"
                                rules="required"
                                :inputOptions="{
                                  styleClasses: ['form-control'].join(' '),
                                  name: `emergency_contact[${index}].phone`,
                                  type: 'tel',
                                  placeholder: 'e.g. 0801234567',
                                }"
                                :validCharactersOnly="true"
                                :class="{
                                  'is-invalid': errors[`emergency_contact[${index}].phone`],
                                }"
                              />
                              <ErrorMessage
                                :name="`emergency_contact[${index}].phone`"
                                class="invalid-feedback"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-1">
                        <div class="mt-2">
                          <button
                            type="button"
                            class="btn btn-sm btn-danger"
                            @click="removeEmergencyContact(index)"
                            :disabled="emergencyContacts.length === 1"
                            :title="
                              emergencyContacts.length === 1
                                ? 'At least one emergency contact is required'
                                : 'Remove contact'
                            "
                          >
                            <i class="ti ti-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr v-if="index < emergencyContacts.length - 1" class="my-3" />
                  </div>

                  <div class="d-flex align-items-center justify-content-end mb-3">
                    <router-link to="/hrm/staff/" class="btn btn-light me-2">Cancel</router-link>
                    <button type="submit" class="btn btn-primary">Update Staff</button>
                  </div>
                </VeeForm>
              </div>
              <div class="card-body text-center" v-else>
                <LoadingIndicator :show="loading" variant="center" message="Loading staff data..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import * as yup from 'yup'
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate'
import { useAuthStore } from '@/stores/authStore'
import { notifyError, notifySuccess } from '@/utils/notifications/toast'
import { useGetStore } from '@/stores/getStore'
import LoadingIndicator from '@/components/common/LoadingIndicator.vue'
import VueMultiselect from 'vue-multiselect'
import axiosInstance from '@/utils/axios.js'
import constants from '@/assets/json/constants.json'

const route = useRoute()
const router = useRouter()
const staffId = ref(route.params.id)

const loading = ref(true)

const schema = yup
  .object()
  .shape({
    first_name: yup.string().required('First name is required'),
    last_name: yup.string().required('Last name is required'),
    other_names: yup.string(),
    date_of_birth: yup.date().required('Date of birth is required'),
    phone: yup.string().required('Phone number is required'),
    other_phone: yup.string(),
    email: yup.string().email('Invalid email').required('Email is required'),
    gender: yup
      .object()
      .nullable()
      .required('Gender is required')
      .test('not-empty', 'Gender is required', (value) => value && value.value),
    marital_status: yup
      .object()
      .nullable()
      .required('Marital status is required')
      .test('not-empty', 'Marital status is required', (value) => value && value.value),
    religion: yup
      .object()
      .nullable()
      .required('Religion is required')
      .test('not-empty', 'Religion is required', (value) => value && value.value),
    city: yup
      .object()
      .nullable()
      .required('City is required')
      .test('not-empty', 'City is required', (value) => value && value.value),
    state: yup
      .object()
      .nullable()
      .required('State is required')
      .test('not-empty', 'State is required', (value) => value && value.value),
    country: yup
      .object()
      .nullable()
      .required('Country is required')
      .test('not-empty', 'Country is required', (value) => value && value.value),
    address1: yup.string().required('Address is required'),
    // Emergency contact validation
    emergency_contact: yup
      .array()
      .of(
        yup.object().shape({
          name: yup.string().required('Emergency contact name is required'),
          relation: yup
            .object()
            .nullable()
            .required('Emergency contact relationship is required')
            .test(
              'not-empty',
              'Emergency contact relationship is required',
              (value) => value && value.value
            ),
          phone: yup.string().required('Emergency contact phone is required'),
        })
      )
      .min(1, 'At least one emergency contact is required'),
  })
  .test('emergency-contacts', 'At least one emergency contact is required', function () {
    return (
      emergencyContacts.value &&
      emergencyContacts.value.length > 0 &&
      emergencyContacts.value.some((contact) => contact.name && contact.phone && contact.relation)
    )
  })

const specialization = ref([])
const roles = ref([])
const departments = ref([])

// Form repeaters
const emergencyContacts = ref([])

// Loading indicators
const loadingDepartments = ref(false)
const loadingSpecializations = ref(false)
const loadingStates = ref(false)
const loadingCities = ref(false)
const specializationKey = ref(0) // Force re-render key

// Form data - must be declared before computed properties that depend on it
const formData = ref({
  first_name: '',
  last_name: '',
  other_names: '',
  date_of_birth: '',
  phone: '',
  other_phone: '',
  email: '',
  gender: '',
  marital_status: '',
  religion: '',
  avatar: null,
  specialization: '',
  employment_date: '',
  role: null,
  designation: '',
  department: null,
  address: {
    address_line_1: '',
    address_line_2: '',
    city: '',
    state: '',
    country: { label: 'Ghana', value: 'Ghana' },
  },
})

// Address logic from constants like patient create
const allRegions = constants.filter((obj) => obj.region && obj.cities)
const StateOptions = allRegions.map((obj) => ({ label: obj.region, value: obj.region }))
const selectedState = ref('')
const CityOptions = computed(() => {
  const stateValue =
    selectedState.value || formData.value.address?.state?.value || formData.value.address?.state
  if (!stateValue) return []

  const region = allRegions.find((r) => r.region === stateValue)
  return region ? region.cities.map((city) => ({ label: city, value: city })) : []
})
const GenderOptions = constants.find((obj) => obj.genderOptions)?.genderOptions || []
const MaritalStatusOptions =
  constants.find((obj) => obj.maritalStatusOptions)?.maritalStatusOptions || []
const religionOptions = constants.find((obj) => obj.religionOptions)?.religionOptions || []
const relationshipOptions =
  constants.find((obj) => obj.relationshipOptions)?.relationshipOptions || []
const designationOptions = constants.find((obj) => obj.designationOptions)?.designationOptions || []

// Load specializations when department changes
const onDepartmentChange = async (selectedDepartment) => {
  formData.value.specialization = null // Reset specialization
  if (selectedDepartment) {
    try {
      loadingSpecializations.value = true
      const response = await axiosInstance.get(
        `/departments/${selectedDepartment.id}/specializations/`
      )
      specialization.value = response.data.results || response.data || []

      // Force reactivity by using nextTick and changing key
      specializationKey.value += 1
      await nextTick()
    } catch (error) {
      console.error('Error fetching specializations:', error)
    } finally {
      loadingSpecializations.value = false
    }
  } else {
    specialization.value = []
  }
}

// Watch for country changes to reset state and city
watch(
  () => formData.value.address?.country,
  (newCountry) => {
    if (newCountry) {
      loadingStates.value = true
      formData.value.address.state = null
      formData.value.address.city = null
      selectedState.value = ''
      setTimeout(() => {
        loadingStates.value = false
      }, 300)
    }
  }
)

// Watch for state changes to reset city
watch(
  () => formData.value.address?.state,
  (newState) => {
    if (newState) {
      loadingCities.value = true
      formData.value.address.city = null
      selectedState.value = newState?.value || newState
      setTimeout(() => {
        loadingCities.value = false
      }, 300)
    }
  }
)

// Load existing staff data
const loadStaffData = async () => {
  try {
    loading.value = true
    const response = await axiosInstance.get(`/staff/${staffId.value}`)
    const staff = response.data

    // Set selected state for city options FIRST to trigger city computation
    if (staff.address?.state) {
      selectedState.value = staff.address.state
      // Wait for reactive updates
      await nextTick()
    }

    // Populate form data with proper object structure for dropdowns
    formData.value = {
      first_name: staff.first_name || '',
      last_name: staff.last_name || '',
      other_names: staff.other_names || '',
      date_of_birth: staff.date_of_birth || '',
      phone: staff.phone || '',
      other_phone: '', // Not in API response, will be empty
      email: staff.email || '',
      gender: staff.gender ? GenderOptions.find((g) => g.value === staff.gender) || '' : '',
      marital_status: staff.marital_status
        ? MaritalStatusOptions.find((m) => m.value === staff.marital_status) || ''
        : '',
      religion: staff.religion ? religionOptions.find((r) => r.value === staff.religion) || '' : '',
      avatar: null,
      specialization: '', // Will be set after department loads specializations
      savedSpecializationId: staff.specialization?.id || null, // API returns object with id
      employment_date: staff.employment_date || '',
      role: staff.role || null, // Role from API if available
      designation: staff.designation
        ? designationOptions.find((d) => d.value === staff.designation) || ''
        : '', // Map designation to option
      department: staff.specialization?.department || null, // Extract from specialization
      address: {
        address_line_1: staff.address?.address_line_1 || '',
        address_line_2: staff.address?.address_line_2 || '',
        city: staff.address?.city ? { label: staff.address.city, value: staff.address.city } : '',
        state: staff.address?.state
          ? { label: staff.address.state, value: staff.address.state }
          : '',
        country: staff.address?.country
          ? { label: staff.address.country, value: staff.address.country }
          : { label: 'Ghana', value: 'Ghana' },
      },
    }

    // Use nextTick to ensure reactivity updates
    await nextTick()

    // Populate emergency contacts
    emergencyContacts.value = []
    if (staff.emergency_contact) {
      // API returns single object, not array
      emergencyContacts.value.push({
        name: staff.emergency_contact.name || '',
        relation: staff.emergency_contact.relation
          ? relationshipOptions.find((r) => r.value === staff.emergency_contact.relation) || null
          : null,
        phone: staff.emergency_contact.phone || '',
        other_phone: staff.emergency_contact.other_phone || '',
      })
    }

    // If no emergency contacts, add one empty contact
    if (emergencyContacts.value.length === 0) {
      addEmergencyContact()
    }
  } catch (error) {
    console.error('Failed to load staff data:', error)
    notifyError('Failed to load staff data')
    router.push('/hrm/staff/')
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  try {
    loadingDepartments.value = true

    // Load dropdown data
    roles.value = await useGetStore().getObjects('auth/roles/')
    departments.value = await useGetStore().getObjects('departments/')

    // Load staff data
    await loadStaffData()

    // If department is selected, load specializations and set the saved specialization
    if (formData.value.department) {
      await onDepartmentChange(formData.value.department)

      // Set the saved specialization after specializations are loaded
      const savedSpecializationId = formData.value.savedSpecializationId
      if (savedSpecializationId && specialization.value.length > 0) {
        const foundSpecialization = specialization.value.find((s) => s.id === savedSpecializationId)
        if (foundSpecialization) {
          formData.value.specialization = foundSpecialization
        }
      }
      // Clean up the temporary saved value
      delete formData.value.savedSpecializationId
    } else if (formData.value.savedSpecializationId) {
      // If no department but we have a specialization ID, try to find the department
      const savedSpecializationId = formData.value.savedSpecializationId

      // Try to find department that contains this specialization
      for (const dept of departments.value) {
        try {
          const response = await axiosInstance.get(`/departments/${dept.id}/specializations`)
          const deptSpecializations = response.data.results || response.data || []

          const foundSpecialization = deptSpecializations.find(
            (s) => s.id === savedSpecializationId
          )
          if (foundSpecialization) {
            // Found the department, set it and the specialization
            formData.value.department = dept
            specialization.value = deptSpecializations
            formData.value.specialization = foundSpecialization
            specializationKey.value += 1
            break
          }
        } catch (error) {
          console.error(`Error loading specializations for department ${dept.id}:`, error)
        }
      }

      // Clean up the temporary saved value
      delete formData.value.savedSpecializationId
    }
  } catch (error) {
    console.error('Failed to load data:', error)
  } finally {
    loadingDepartments.value = false
  }
})

const auth = useAuthStore()

// Simple form submission function
const onSubmit = async () => {
  const payload = convertDate()
  if (!auth.isAdmin) {
    notifyError('You are not authorized to perform this action')
    router.push({ name: '' })
  }

  try {
    await axiosInstance.put(`/staff/${staffId.value}/`, payload)
    notifySuccess('Staff updated successfully')
    router.push('/hrm/staff/')
  } catch (error) {
    console.error('Failed to update staff:', error)
    notifyError('Failed to update staff')
  }
}

// Helper function to format date to YYYY-MM-DD
const formatDateToYYYYMMDD = (dateValue) => {
  if (!dateValue) return null

  // If it's already a string in YYYY-MM-DD format, return as is
  if (typeof dateValue === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
    return dateValue
  }

  // If it's a string with time, extract date part
  if (typeof dateValue === 'string' && dateValue.includes('T')) {
    return dateValue.split('T')[0]
  }

  // If it's a Date object, convert to YYYY-MM-DD
  if (dateValue instanceof Date) {
    return dateValue.toISOString().split('T')[0]
  }

  // Try to parse as date if it's a string
  if (typeof dateValue === 'string') {
    const parsed = new Date(dateValue)
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString().split('T')[0]
    }
  }

  return null
}

const convertDate = () => {
  const payload = JSON.parse(JSON.stringify(formData.value))
  // Handle date formatting safely using helper function
  payload.date_of_birth = formatDateToYYYYMMDD(payload.date_of_birth)
  payload.employment_date = formatDateToYYYYMMDD(payload.employment_date)

  // Extract values from multiselect objects
  if (payload.gender && typeof payload.gender === 'object') {
    payload.gender = payload.gender.value
  }
  if (payload.marital_status && typeof payload.marital_status === 'object') {
    payload.marital_status = payload.marital_status.value
  }
  if (payload.religion && typeof payload.religion === 'object') {
    payload.religion = payload.religion.value
  }
  if (payload.designation && typeof payload.designation === 'object') {
    payload.designation = payload.designation.value
  }
  if (payload.department && typeof payload.department === 'object') {
    payload.department = payload.department.id
  }
  if (payload.role && typeof payload.role === 'object') {
    payload.role = payload.role.id
  }
  if (payload.specialization && typeof payload.specialization === 'object') {
    payload.specialization = payload.specialization.id
  }

  // Handle address object values
  if (payload.address) {
    if (payload.address.country && typeof payload.address.country === 'object') {
      payload.address.country = payload.address.country.value
    }
    if (payload.address.state && typeof payload.address.state === 'object') {
      payload.address.state = payload.address.state.value
    }
    if (payload.address.city && typeof payload.address.city === 'object') {
      payload.address.city = payload.address.city.value
    }
  }

  // Include emergency contact - API expects an object, not array
  if (emergencyContacts.value.length > 1) {
    payload.emergency_contact = emergencyContacts.value.map((contact) => ({
      name: contact.name || '',
      relation: contact.relation?.value || contact.relation || '',
      phone: contact.phone || '',
      other_phone: contact.other_phone || '',
    }))
  } else if (emergencyContacts.value.length === 1) {
    const contact = emergencyContacts.value[0]
    payload.emergency_contact = {
      name: contact.name || '',
      relation: contact.relation?.value || contact.relation || '',
      phone: contact.phone || '',
      other_phone: contact.other_phone || '',
    }
  } else {
    payload.emergency_contact = null
  }

  return payload
}

// Form repeater functions for emergency contacts
const addEmergencyContact = () => {
  emergencyContacts.value.push({
    name: '',
    relation: null,
    phone: '',
    other_phone: '',
  })
}

const removeEmergencyContact = (index) => {
  // Don't allow removal if it's the last emergency contact
  if (emergencyContacts.value.length > 1) {
    emergencyContacts.value.splice(index, 1)
  }
}

// Watch for country changes to reset state and city
watch(
  () => formData.value.address?.country,
  (newCountry) => {
    if (newCountry) {
      loadingStates.value = true
      formData.value.address.state = null
      formData.value.address.city = null
      selectedState.value = ''
      setTimeout(() => {
        loadingStates.value = false
      }, 300)
    }
  }
)

// Watch for state changes to reset city
watch(
  () => formData.value.address?.state,
  (newState) => {
    if (newState) {
      loadingCities.value = true
      formData.value.address.city = null
      selectedState.value = newState?.value || newState
      setTimeout(() => {
        loadingCities.value = false
      }, 300)
    }
  }
)
</script>

<style>
.disabled-link {
  pointer-events: none;
  opacity: 0.4;
}

.disabled-header {
  pointer-events: none;
}

.vue-tel-input,
.vue-tel-input:focus-within {
  border: none;
  box-shadow: none;
}

/* Reduce VueMultiselect font size */
.multiselect {
  font-size: 14px;
}

.multiselect__input,
.multiselect__single {
  font-size: 14px;
}

.multiselect__option {
  font-size: 14px;
}

.multiselect__placeholder {
  font-size: 14px;
}
</style>
