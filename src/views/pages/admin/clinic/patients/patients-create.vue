<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <div class="content pb-0">
      <!-- <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3">
        <div class="flex-grow-1">
          <h6 class="fw-bold mb-0 d-flex align-items-center">
            <router-link :to="{ name: 'PatientList' }" class="text-dark">
              <i class="ti ti-chevron-left me-1 fs-14"></i>{{ $t('patients') }}
            </router-link>
          </h6>
        </div>
      </div> -->
<div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="mb-4">
                        <h6 class="fw-bold mb-0 d-flex align-items-center"> <router-link to="/patients/patients-list" class="text-dark"> <i class="ti ti-chevron-left me-1"></i>{{ $t('patients.title') }}</router-link></h6>
                    </div>
        <div class="card">
          <div class="card-body pb-0">
            <VeeForm
              :validation-schema="schema"
              v-slot="{ errors }"
              @submit="onSubmit"
              class="patient-form"
            >
              <!-- <div v-if="Object.keys(errors).length" class="alert alert-danger">
                <div v-for="(msg, key) in errors" :key="key">
                  <strong>{{ key }}:</strong> {{ msg }}
                </div>
              </div> -->
              <div class="bg-light px-3 py-2 mb-3">
                <h6 class="fw-bold mb-0">{{ $t('patient_create.patient_information') }}</h6>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="mb-3 d-flex align-items-center">
                    <label class="form-label mb-0">{{ $t('patient_create.profile_image') }}</label>
                    <div
                      class="drag-upload-btn avatar avatar-xxl rounded-circle bg-light text-muted position-relative overflow-hidden z-1 mb-2 ms-4 p-0"
                    >
                      <i class="ti ti-user-plus fs-16"></i>
                      <Field
                        type="file"
                        class="form-control image-sign"
                        name="profile_image"
                        @change="onFileChange"
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
                <div class="row">
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label"
                        >{{ $t('patient_create.first_name') }} <span class="text-danger">*</span></label
                      >
                      <Field
                        type="text"
                        class="form-control"
                        name="first_name"
                        v-model="formData.first_name"
                        :class="{ 'is-invalid': errors.first_name }"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label"
                        >{{ $t('patient_create.last_name') }} <span class="text-danger">*</span></label
                      >
                      <Field
                        type="text"
                        class="form-control"
                        name="last_name"
                        v-model="formData.last_name"
                        :class="{ 'is-invalid': errors.last_name }"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('patient_create.other_names') }}</label>
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
                        >{{ $t('patient_create.phone_no') }} <span class="text-danger">*</span></label
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
                          placeholder: $t('patient_create.placeholder_phone'),
                        }"
                        :validCharactersOnly="true"
                        :class="{ 'is-invalid': errors.phone }"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('patient_create.other_phone') }}</label>
                      <Field
                        type="tel"
                        as="vue-tel-input"
                        name="other_phone"
                        v-model="formData.other_phone"
                        :inputOptions="{
                          styleClasses: ['form-control'].join(' '),
                          name: 'other_phone',
                          type: 'tel',
                          placeholder: $t('patient_create.placeholder_phone'),
                        }"
                        :validCharactersOnly="true"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('patient_create.email') }}</label>
                      <Field
                        type="email"
                        class="form-control"
                        name="email"
                        v-model="formData.email"
                        :class="{ 'is-invalid': errors.email }"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label"
                        >{{ $t('patient_create.dob') }} <span class="text-danger">*</span></label
                      >
                      <Field
                        name="date_of_birth"
                        as="a-date-picker"
                        class="form-control datetimepicker"
                        :placeholder="$t('patient_create.placeholder_date')"
                        v-model="formData.date_of_birth"
                        :class="{ 'is-invalid': errors.date_of_birth }"
                        type="date"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label mb-1 fw-medium"
                        >{{ $t('patient_create.gender') }}<span class="text-danger ms-1">*</span></label
                      >
                      <Field
                        class="form-select"
                        name="gender"
                        as="select"
                        v-model="formData.gender"
                        :class="{ 'is-invalid': errors.gender }"
                      >
                        <option value="" disabled>{{ $t('patient_create.select') }}</option>
                        <option v-for="opt in GenderOptions" :key="opt.value" :value="opt.value">
                          {{ opt.label }}
                        </option>
                      </Field>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label"
                        >{{ $t('patient_create.marital_status') }} <span class="text-danger">*</span></label
                      >
                      <Field
                        class="form-select"
                        name="marital_status"
                        as="select"
                        v-model="formData.marital_status"
                        :class="{ 'is-invalid': errors.marital_status }"
                      >
                        <option value="" disabled>{{ $t('patient_create.select') }}</option>
                        <option
                          v-for="opt in MaritalStatusOptions"
                          :key="opt.value"
                          :value="opt.value"
                        >
                          {{ opt.label }}
                        </option>
                      </Field>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label"
                        >{{ $t('patient_create.religion') }} <span class="text-danger">*</span></label
                      >
                      <Field
                        class="form-select"
                        name="religion"
                        as="select"
                        v-model="formData.religion"
                        :class="{ 'is-invalid': errors.religion }"
                      >
                        <option value="" disabled>{{ $t('patient_create.select') }}</option>
                        <option value="Islam">{{ $t('patient_create.islam') }}</option>
                        <option value="Christianity">{{ $t('patient_create.christianity') }}</option>
                        <option value="Others">{{ $t('patient_create.others') }}</option>
                      </Field>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-light px-3 py-2 mb-3">
                <h6 class="fw-bold mb-0">{{ $t('patient_create.address_information') }}</h6>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.country') }}</label>
                    <Field
                      class="form-select"
                      name="country"
                      as="select"
                      v-model="formData.country"
                    >
                      <option value="Ghana" selected>{{ $t('patient_create.ghana') }}</option>
                    </Field>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.state') }}</label>
                    <Field
                      class="form-select"
                      name="state"
                      as="select"
                      v-model="formData.state"
                      :class="{ 'is-invalid': errors.state }"
                    >
                      <option value="" disabled>{{ $t('patient_create.select') }}</option>
                      <option
                        v-for="region in StateOptions"
                        :key="region.value"
                        :value="region.value"
                      >
                        {{ region.label }}
                      </option>
                    </Field>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.city') }}</label>
                    <Field
                      class="form-select"
                      name="city"
                      as="select"
                      v-model="formData.city"
                      :class="{ 'is-invalid': errors.city }"
                    >
                      <option value="" disabled>{{ $t('patient_create.select') }}</option>
                      <option v-for="city in CityOptions" :key="city.value" :value="city.value">
                        {{ city.label }}
                      </option>
                    </Field>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.address1') }}</label>
                    <Field
                      type="text"
                      class="form-control"
                      name="address_line_1"
                      v-model="formData.address_line_1"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.address2') }}</label>
                    <Field
                      type="text"
                      class="form-control"
                      name="address_line_2"
                      v-model="formData.address_line_2"
                    />
                  </div>
                </div>
              </div>
              <div class="bg-light px-3 py-2 mb-3">
                <h6 class="fw-bold mb-0">{{ $t('patient_create.next_of_kin_information') }}</h6>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >{{ $t('patient_create.nok_name') }} <span class="text-danger">*</span></label
                    >
                    <Field
                      type="text"
                      class="form-control"
                      name="nok_name"
                      v-model="formData.nok_name"
                      :class="{ 'is-invalid': errors.nok_name }"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >{{ $t('patient_create.nok_relation') }} <span class="text-danger">*</span></label
                    >
                    <Field
                      type="text"
                      class="form-control"
                      name="nok_relation"
                      v-model="formData.nok_relation"
                      :class="{ 'is-invalid': errors.nok_relation }"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label"
                      >{{ $t('patient_create.nok_phone') }} <span class="text-danger">*</span></label
                    >
                    <Field
                      type="tel"
                      as="vue-tel-input"
                      name="nok_phone"
                      v-model="formData.nok_phone"
                      :inputOptions="{
                        styleClasses: ['form-control'].join(' '),
                        name: 'nok_phone',
                          type: 'tel',
                          placeholder: $t('patient_create.placeholder_phone'),
                        }"
                      :validCharactersOnly="true"
                      :class="{ 'is-invalid': errors.nok_phone }"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.nok_other_phone') }}</label>
                    <Field
                      type="tel"
                      class="form-control nok"
                      name="nok_other_phone"
                      v-model="formData.nok_other_phone"
                    />
                  </div>
                </div>
              </div>
              <div class="bg-light px-3 py-2 mb-3">
                <h6 class="fw-bold mb-0">{{ $t('patient_create.insurance_information') }}</h6>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label"
                      >{{ $t('patient_create.insurance_type') }}<span class="text-danger">*</span></label
                    >
                    <Field
                      class="form-select"
                      name="insurance_type"
                      as="select"
                      v-model="formData.insurance_type"
                      :class="{ 'is-invalid': errors.insurance_type }"
                    >
                      <option value="" disabled>{{ $t('patient_create.select') }}</option>
                      <option v-for="opt in InsuranceOptions" :key="opt.value" :value="opt.value">
                        {{ opt.label }}
                      </option>
                    </Field>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label"
                      >{{ $t('patient_create.insurance_schema') }}<span class="text-danger">*</span></label
                    >
                    <Field
                      type="text"
                      class="form-control"
                      name="insurance_schema"
                      v-model="formData.insurance_schema"
                      :class="{ 'is-invalid': errors.insurance_schema }"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label"
                      >{{ $t('patient_create.insurance_plan') }}<span class="text-danger">*</span></label
                    >
                    <Field
                      type="text"
                      class="form-control"
                      name="insurance_plan"
                      v-model="formData.insurance_plan"
                      :class="{ 'is-invalid': errors.insurance_plan }"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label"
                      >{{ $t('patient_create.membership_number') }} <span class="text-danger">*</span></label
                    >
                    <Field
                      type="text"
                      class="form-control"
                      name="membership_number"
                      v-model="formData.membership_number"
                      :class="{ 'is-invalid': errors.membership_number }"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label"
                      >{{ $t('patient_create.serial_number') }} <span class="text-danger">*</span></label
                    >
                    <Field
                      type="text"
                      class="form-control"
                      name="serial_number"
                      v-model="formData.serial_number"
                      :class="{ 'is-invalid': errors.serial_number }"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label"
                      >{{ $t('patient_create.company') }}<span class="text-danger">*</span></label
                    >
                    <Field
                      type="text"
                      class="form-control"
                      name="company"
                      v-model="formData.company"
                      :class="{ 'is-invalid': errors.company }"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label"
                      >{{ $t('patient_create.issue_date') }} <span class="text-danger">*</span></label
                    >
                    <Field
                      name="issue_date"
                      as="a-date-picker"
                      class="form-control datetimepicker"
                        :placeholder="$t('patient_create.placeholder_date')"
                      v-model="formData.issue_date"
                      :class="{ 'is-invalid': errors.issue_date }"
                      type="date"
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label"
                      >{{ $t('patient_create.expiry_date') }} <span class="text-danger">*</span></label
                    >
                    <Field
                      name="expiry_date"
                      as="a-date-picker"
                      class="form-control datetimepicker"
                        :placeholder="$t('patient_create.placeholder_date')"
                      v-model="formData.expiry_date"
                      :class="{ 'is-invalid': errors.expiry_date }"
                      type="date"
                    />
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center justify-content-end mb-3">
                <router-link :to="{ name: 'PatientList' }" class="btn btn-light me-2">{{
                  $t('patient_create.cancel')
                }}</router-link>
                <button type="submit" class="btn btn-primary">{{ $t('patient_create.add_new_patient') }}</button>
              </div>
            </VeeForm>
          </div>
        </div>
      </div>
</div>
    </div>
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy; <a href="javascript:void(0);" class="link-primary">Preclinic</a>,
        {{ $t('patient_create.all_rights_reserved') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, type Ref, type ComputedRef } from 'vue'
import * as yup from 'yup'
import { Form as VeeForm, Field } from 'vee-validate'
import { usePatientStore } from '@/stores/patientStore'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import constants from '@/assets/json/constants.json'
import type { SelectOption } from '@/types/common'

const { t } = useI18n()
const patientStore = usePatientStore()
const router = useRouter()

// Validation schema
const schema = computed(() => {
  return yup.object().shape({
    first_name: yup.string().required(t('validation.first_name_required')),
    last_name: yup.string().required(t('validation.last_name_required')),
    date_of_birth: yup.date().required(t('validation.dob_required')),
    phone: yup.string().required(t('validation.phone_required')),
    gender: yup.string().required(t('validation.gender_required')),
    marital_status: yup.string().required(t('validation.marital_status_required')),
    religion: yup.string().required(t('validation.religion_required')),
    city: yup.string().required(t('validation.city_required')),
    state: yup.string().required(t('validation.state_required')),
    country: yup.string().required(t('validation.country_required')),
    address_line_1: yup.string().required(t('validation.address_required')),
    nok_name: yup.string().required(t('validation.nok_name_required')),
    nok_relation: yup.string().required(t('validation.nok_relation_required')),
    nok_phone: yup.string().required(t('validation.nok_phone_required')),
    insurance_schema: yup.string().required(t('validation.insurance_schema_required')),
    insurance_plan: yup.string().required(t('validation.insurance_plan_required')),
    membership_number: yup.string().required(t('validation.membership_number_required')),
    serial_number: yup.string().required(t('validation.serial_number_required')),
    company: yup.string().required(t('validation.company_required')),
    issue_date: yup.date().required(t('validation.issue_date_required')),
    expiry_date: yup.date().required(t('validation.expiry_date_required')),
  })
})

// Options
const allRegions = constants.filter((obj: any) => obj.region && obj.cities)
const StateOptions: SelectOption[] = allRegions.map((obj: any) => ({
  label: obj.region,
  value: obj.region,
}))
const selectedState: Ref<string> = ref('')

const CityOptions: ComputedRef<SelectOption[]> = computed(() => {
  const region = allRegions.find((r: any) => r.region === (selectedState.value || formData.value.state))
  return region ? region.cities.map((city: string) => ({ label: city, value: city })) : []
})

const GenderOptions = computed(() => {
  const options = constants.find((obj: any) => obj.genderOptions)?.genderOptions || []
  return options.map((opt: SelectOption) => ({
    ...opt,
    label: t(`gender.${opt.value.toLowerCase()}`),
  }))
})

const MaritalStatusOptions = computed(() => {
  const options = constants.find((obj: any) => obj.maritalStatusOptions)?.maritalStatusOptions || []
  return options.map((opt: SelectOption) => ({
    ...opt,
    label: t(`marital_status.${opt.value.toLowerCase()}`),
  }))
})
const InsuranceOptions: SelectOption[] =
  constants.find((obj: any) => obj.insuranceOptions)?.insuranceOptions || []

// Form data interface
interface FormData {
  first_name: string
  last_name: string
  other_names: string
  date_of_birth: string
  phone: string
  other_phone: string
  email: string
  gender: string
  marital_status: string
  religion: string
  country: string
  state: string
  city: string
  address_line_1: string
  address_line_2: string
  nok_name: string
  nok_relation: string
  nok_phone: string
  nok_other_phone: string
  profile_image: File | null
  insurance_type: string
  insurance_schema: string
  insurance_plan: string
  membership_number: string
  serial_number: string
  company: string
  issue_date: string
  expiry_date: string
  insurance: {
    type: string
    schema: string
    plan: string
    membership_number: string
    serial_number: string
    company: string
    issue_date: string
    expiry_date: string
  }
}

const formData: Ref<FormData> = ref({
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
  country: 'Ghana',
  state: '',
  city: '',
  address_line_1: '',
  address_line_2: '',
  nok_name: '',
  nok_relation: '',
  nok_phone: '',
  nok_other_phone: '',
  profile_image: null,
  insurance_type: '',
  insurance_schema: '',
  insurance_plan: '',
  membership_number: '',
  serial_number: '',
  company: '',
  issue_date: '',
  expiry_date: '',
  insurance: {
    type: '',
    schema: '',
    plan: '',
    membership_number: '',
    serial_number: '',
    company: '',
    issue_date: '',
    expiry_date: '',
  },
})

function onFileChange(e: Event): void {
  const target = e.target as HTMLInputElement
  if (target.files && target.files.length > 0) {
    formData.value.profile_image = target.files[0]
  }
}

function buildPayload(): FormData {
  const payload = new FormData()

  // Address as object
  const address = {
    address_line_1: formData.value.address_line_1,
    address_line_2: formData.value.address_line_2,
    city: formData.value.city,
    state: formData.value.state,
    country: formData.value.country,
  }

  // Emergency contact as object
  const emergency_contact = {
    name: formData.value.nok_name,
    relation: formData.value.nok_relation,
    phone: formData.value.nok_phone,
    other_phone: formData.value.nok_other_phone,
  }

  // Insurance as object
  const insurance = {
    type: formData.value.insurance.type || formData.value.insurance_type,
    schema: formData.value.insurance.schema || formData.value.insurance_schema,
    plan: formData.value.insurance.plan || formData.value.insurance_plan,
    membership_number:
      formData.value.insurance.membership_number || formData.value.membership_number,
    serial_number: formData.value.insurance.serial_number || formData.value.serial_number,
    company: formData.value.insurance.company || formData.value.company,
    issue_date: formData.value.insurance.issue_date || formData.value.issue_date,
    expiry_date: formData.value.insurance.expiry_date || formData.value.expiry_date,
  }

  // Append all fields
  Object.keys(formData.value).forEach((key) => {
    if (
      [
        'address1',
        'address2',
        'city',
        'state',
        'country',
        'nok_name',
        'nok_relation',
        'nok_phone',
        'nok_other_phone',
      ].includes(key)
    )
      return
    const value = formData.value[key as keyof FormData]
    if (value !== undefined && value !== null) {
      payload.append(key, value as string | Blob)
    }
  })

  // Format date_of_birth as YYYY-MM-DD
  if (formData.value.date_of_birth) {
    const date = new Date(formData.value.date_of_birth)
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    payload.set('date_of_birth', `${yyyy}-${mm}-${dd}`)
  }

  if (formData.value.issue_date) {
    const date = new Date(formData.value.issue_date)
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    payload.set('issue_date', `${yyyy}-${mm}-${dd}`)
  }

  if (formData.value.expiry_date) {
    const date = new Date(formData.value.expiry_date)
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    payload.set('expiry_date', `${yyyy}-${mm}-${dd}`)
  }

  // Append address fields
  Object.entries(address).forEach(([k, v]) => {
    payload.append(`address[${k}]`, v)
  })

  // Append emergency contact fields
  Object.entries(emergency_contact).forEach(([k, v]) => {
    payload.append(`emergency_contact[${k}]`, v)
  })

  // Remove insurance fields from root
  ;[
    'insurance_type',
    'insurance_schema',
    'insurance_plan',
    'membership_number',
    'serial_number',
    'company',
    'issue_date',
    'expiry_date',
  ].forEach((key) => payload.delete(key))

  // Append insurance as nested fields
  Object.entries(insurance).forEach(([k, v]) => {
    payload.append(`insurance[${k}]`, v)
  })

  return payload as any
}

async function onSubmit(): Promise<void> {
  const payload = buildPayload()
  try {
    await patientStore.createPatient(payload)
    router.push({ name: 'PatientList' })
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped>
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
</style>
