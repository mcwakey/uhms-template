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
                        <h6 class="fw-bold mb-0 d-flex align-items-center"> <router-link to="/patients/patients-list" class="text-dark"> <i class="ti ti-chevron-left me-1"></i>{{ $t('patients.edit_title') || 'Edit Patient' }}</router-link></h6>
                    </div>
        <VeeForm
          :validation-schema="schema"
          v-slot="{ errors }"
          @submit="onSubmit"
          class="patient-form"
        >
          <!-- Patient Information Card -->
          <div class="card mb-4">
            <div class="card-header">
              <h5 class="card-title mb-0">{{ $t('patient_create.patient_information') }}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-12 mb-4">
                  <div class="d-flex align-items-center">
                    <div class="me-3">
                      <div class="avatar avatar-xl rounded-circle bg-light text-muted position-relative overflow-hidden">
                        <img v-if="formData.profile_image" :src="createObjectURL(formData.profile_image)" class="w-100 h-100 object-fit-cover" />
                        <img v-else-if="formData.profile_image_url" :src="formData.profile_image_url" class="w-100 h-100 object-fit-cover" />
                        <i v-else class="ti ti-user fs-24 position-absolute top-50 start-50 translate-middle"></i>
                      </div>
                    </div>
                    <div>
                      <label class="btn btn-primary btn-sm mb-0" for="profile_image_upload">
                        <i class="ti ti-upload me-1"></i> {{ $t('patient_create.profile_image') }}
                      </label>
                      <input
                        type="file"
                        id="profile_image_upload"
                        class="d-none"
                        accept="image/*"
                        @change="onFileChange"
                      />
                      <div class="form-text text-muted fs-12 mt-1">Allowed *.jpeg, *.jpg, *.png, *.gif</div>
                    </div>
                  </div>
                </div>
                
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.first_name') }} <span class="text-danger">*</span></label>
                    <Field
                      type="text"
                      class="form-control"
                      name="first_name"
                      v-model="formData.first_name"
                      :class="{ 'is-invalid': errors.first_name }"
                    />
                    <div class="invalid-feedback">{{ errors.first_name }}</div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.last_name') }} <span class="text-danger">*</span></label>
                    <Field
                      type="text"
                      class="form-control"
                      name="last_name"
                      v-model="formData.last_name"
                      :class="{ 'is-invalid': errors.last_name }"
                    />
                    <div class="invalid-feedback">{{ errors.last_name }}</div>
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
                    <label class="form-label">{{ $t('patient_create.phone_no') }} <span class="text-danger">*</span></label>
                    <Field
                      type="tel"
                      as="vue-tel-input"
                      name="phone"
                      v-model="formData.phone"
                      :inputOptions="{
                        styleClasses: 'form-control',
                        name: 'phone',
                        type: 'tel',
                        placeholder: $t('patient_create.placeholder_phone'),
                      }"
                      :validCharactersOnly="true"
                      :class="{ 'is-invalid': errors.phone }"
                    />
                    <div class="invalid-feedback d-block" v-if="errors.phone">{{ errors.phone }}</div>
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
                        styleClasses: 'form-control',
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
                    <div class="invalid-feedback">{{ errors.email }}</div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.dob') }} <span class="text-danger">*</span></label>
                    <Field
                      name="date_of_birth"
                      as="a-date-picker"
                      class="form-control datetimepicker w-100"
                      :placeholder="$t('patient_create.placeholder_date')"
                      v-model="formData.date_of_birth"
                      :class="{ 'is-invalid': errors.date_of_birth }"
                      type="date"
                    />
                    <div class="invalid-feedback">{{ errors.date_of_birth }}</div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.gender') }} <span class="text-danger">*</span></label>
                    <Field name="gender" v-model="formData.gender">
                      <template #default="{ field, meta, errorMessage, handleChange, handleBlur }">
                        <vue-multiselect
                          :model-value="field.value"
                          :options="GenderOptions"
                          label="label"
                          track-by="value"
                          @update:model-value="(val: any) => handleChange(val)"
                          @blur="handleBlur"
                          :class="{ 'is-invalid': meta.touched && !meta.valid }"
                          :placeholder="$t('patient_create.select')"
                          :searchable="false"
                        />
                        <div v-if="meta.touched && errorMessage" class="invalid-feedback d-block">
                          {{ errorMessage }}
                        </div>
                      </template>
                    </Field>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.marital_status') }} <span class="text-danger">*</span></label>
                    <Field name="marital_status" v-model="formData.marital_status">
                      <template #default="{ field, meta, errorMessage, handleChange, handleBlur }">
                        <vue-multiselect
                          :model-value="field.value"
                          :options="MaritalStatusOptions"
                          label="label"
                          track-by="value"
                          @update:model-value="(val: any) => handleChange(val)"
                          @blur="handleBlur"
                          :class="{ 'is-invalid': meta.touched && !meta.valid }"
                          :placeholder="$t('patient_create.select')"
                          :searchable="false"
                        />
                        <div v-if="meta.touched && errorMessage" class="invalid-feedback d-block">
                          {{ errorMessage }}
                        </div>
                      </template>
                    </Field>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.religion') }} <span class="text-danger">*</span></label>
                    <Field name="religion" v-model="formData.religion">
                      <template #default="{ field, meta, errorMessage, handleChange, handleBlur }">
                        <vue-multiselect
                          :model-value="field.value"
                          :options="ReligionOptions"
                          label="label"
                          track-by="value"
                          @update:model-value="(val: any) => handleChange(val)"
                          @blur="handleBlur"
                          :class="{ 'is-invalid': meta.touched && !meta.valid }"
                          :placeholder="$t('patient_create.select')"
                          :searchable="false"
                        />
                        <div v-if="meta.touched && errorMessage" class="invalid-feedback d-block">
                          {{ errorMessage }}
                        </div>
                      </template>
                    </Field>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Address Information Card -->
          <div class="card mb-4">
            <div class="card-header">
              <h5 class="card-title mb-0">{{ $t('patient_create.address_information') }}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.country') }}</label>
                    <Field name="country" v-model="formData.country">
                      <template #default="{ field, meta, errorMessage, handleChange, handleBlur }">
                        <vue-multiselect
                          :model-value="field.value"
                          :options="CountryOptions"
                          label="label"
                          track-by="value"
                          @update:model-value="(val: any) => handleChange(val)"
                          @blur="handleBlur"
                          :class="{ 'is-invalid': meta.touched && !meta.valid }"
                          :placeholder="$t('patient_create.select')"
                          :searchable="false"
                        />
                        <div v-if="meta.touched && errorMessage" class="invalid-feedback d-block">
                          {{ errorMessage }}
                        </div>
                      </template>
                    </Field>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.state') }}</label>
                    <Field name="state" v-model="formData.state">
                      <template #default="{ field, meta, errorMessage, handleChange, handleBlur }">
                        <vue-multiselect
                          :model-value="field.value"
                          :options="StateOptions"
                          label="label"
                          track-by="value"
                          @update:model-value="(val: any) => handleChange(val)"
                          @blur="handleBlur"
                          :class="{ 'is-invalid': meta.touched && !meta.valid }"
                          :placeholder="$t('patient_create.select')"
                        />
                        <div v-if="meta.touched && errorMessage" class="invalid-feedback d-block">
                          {{ errorMessage }}
                        </div>
                      </template>
                    </Field>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.city') }}</label>
                    <Field name="city" v-model="formData.city">
                      <template #default="{ field, meta, errorMessage, handleChange, handleBlur }">
                        <vue-multiselect
                          :model-value="field.value"
                          :options="CityOptions"
                          label="label"
                          track-by="value"
                          @update:model-value="(val: any) => handleChange(val)"
                          @blur="handleBlur"
                          :class="{ 'is-invalid': meta.touched && !meta.valid }"
                          :placeholder="$t('patient_create.select')"
                        />
                        <div v-if="meta.touched && errorMessage" class="invalid-feedback d-block">
                          {{ errorMessage }}
                        </div>
                      </template>
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
            </div>
          </div>

          <!-- Next of Kin Card -->
          <div class="card mb-4">
            <div class="card-header">
              <h5 class="card-title mb-0">{{ $t('patient_create.next_of_kin_information') }}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.nok_name') }} <span class="text-danger">*</span></label>
                    <Field
                      type="text"
                      class="form-control"
                      name="nok_name"
                      v-model="formData.nok_name"
                      :class="{ 'is-invalid': errors.nok_name }"
                    />
                    <div class="invalid-feedback">{{ errors.nok_name }}</div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.nok_relation') }} <span class="text-danger">*</span></label>
                    <Field name="nok_relation" v-model="formData.nok_relation">
                      <template #default="{ field, meta, errorMessage, handleChange, handleBlur }">
                        <vue-multiselect
                          :model-value="field.value"
                          :options="relationshipOptions"
                          :searchable="false"
                          :close-on-select="true"
                          :placeholder="$t('next_of_kin_modal.select_relationship')"
                          @update:model-value="(val: any) => handleChange(val)"
                          @blur="handleBlur"
                          :class="{ 'is-invalid': meta.touched && !meta.valid }"
                        />
                        <div v-if="meta.touched && errorMessage" class="invalid-feedback d-block">
                          {{ errorMessage }}
                        </div>
                      </template>
                    </Field>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.nok_phone') }} <span class="text-danger">*</span></label>
                    <Field
                      type="tel"
                      as="vue-tel-input"
                      name="nok_phone"
                      v-model="formData.nok_phone"
                      :inputOptions="{
                        styleClasses: 'form-control',
                        name: 'nok_phone',
                        type: 'tel',
                        placeholder: $t('patient_create.placeholder_phone'),
                      }"
                      :validCharactersOnly="true"
                      :class="{ 'is-invalid': errors.nok_phone }"
                    />
                    <div class="invalid-feedback d-block" v-if="errors.nok_phone">{{ errors.nok_phone }}</div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.nok_other_phone') }}</label>
                    <Field
                      type="tel"
                      as="vue-tel-input"
                      name="nok_other_phone"
                      v-model="formData.nok_other_phone"
                      :inputOptions="{
                        styleClasses: 'form-control',
                        name: 'nok_other_phone',
                        type: 'tel',
                        placeholder: $t('patient_create.placeholder_phone'),
                      }"
                      :validCharactersOnly="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Insurance Information Card -->
          <div class="card mb-4">
            <div class="card-header">
              <h5 class="card-title mb-0">{{ $t('patient_create.insurance_information') }}</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.insurance_type') }}<span class="text-danger">*</span></label>
                    <Field name="insurance_type" v-model="formData.insurance_type">
                      <template #default="{ field, meta, errorMessage, handleChange, handleBlur }">
                        <vue-multiselect
                          :model-value="field.value"
                          :options="insuranceTypes"
                          label="name"
                          track-by="id"
                          @update:model-value="(val: any) => { handleChange(val); onInsuranceTypeSelect(val); }"
                          @blur="handleBlur"
                          :class="{ 'is-invalid': meta.touched && !meta.valid }"
                          :placeholder="$t('insurance_modal.select_type')"
                          :loading="loadingInsuranceTypes"
                        />
                        <div v-if="meta.touched && errorMessage" class="invalid-feedback d-block">
                          {{ errorMessage }}
                        </div>
                      </template>
                    </Field>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.company') }}<span class="text-danger">*</span></label>
                    <Field name="company" v-model="formData.company">
                      <template #default="{ field, meta, errorMessage, handleChange, handleBlur }">
                        <vue-multiselect
                          :model-value="field.value"
                          :options="insuranceCompanies"
                          label="name"
                          track-by="id"
                          @update:model-value="(val: any) => { handleChange(val); onInsuranceCompanySelect(val); }"
                          @blur="handleBlur"
                          :class="{ 'is-invalid': meta.touched && !meta.valid }"
                          :placeholder="$t('insurance_modal.select_company')"
                          :loading="loadingInsuranceCompanies"
                          :disabled="!formData.insurance_type"
                        />
                        <div v-if="meta.touched && errorMessage" class="invalid-feedback d-block">
                          {{ errorMessage }}
                        </div>
                      </template>
                    </Field>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.insurance_plan') }}<span class="text-danger">*</span></label>
                    <Field name="insurance_plan" v-model="formData.insurance_plan">
                      <template #default="{ field, meta, errorMessage, handleChange, handleBlur }">
                        <vue-multiselect
                          :model-value="field.value"
                          :options="insurancePlans"
                          label="name"
                          track-by="id"
                          @update:model-value="(val: any) => { handleChange(val); }"
                          @blur="handleBlur"
                          :class="{ 'is-invalid': meta.touched && !meta.valid }"
                          :placeholder="$t('insurance_modal.select_plan')"
                          :loading="loadingInsurancePlans"
                          :disabled="!formData.company"
                        />
                        <div v-if="meta.touched && errorMessage" class="invalid-feedback d-block">
                          {{ errorMessage }}
                        </div>
                      </template>
                    </Field>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.insurance_schema') }}<span class="text-danger">*</span></label>
                    <Field
                      type="text"
                      class="form-control"
                      name="insurance_schema"
                      v-model="formData.insurance_schema"
                      :class="{ 'is-invalid': errors.insurance_schema }"
                    />
                    <div class="invalid-feedback">{{ errors.insurance_schema }}</div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.membership_number') }} <span class="text-danger">*</span></label>
                    <Field
                      type="text"
                      class="form-control"
                      name="membership_number"
                      v-model="formData.membership_number"
                      :class="{ 'is-invalid': errors.membership_number }"
                    />
                    <div class="invalid-feedback">{{ errors.membership_number }}</div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.serial_number') }} <span class="text-danger">*</span></label>
                    <Field
                      type="text"
                      class="form-control"
                      name="serial_number"
                      v-model="formData.serial_number"
                      :class="{ 'is-invalid': errors.serial_number }"
                    />
                    <div class="invalid-feedback">{{ errors.serial_number }}</div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.issue_date') }} <span class="text-danger">*</span></label>
                    <Field
                      name="issue_date"
                      as="a-date-picker"
                      class="form-control datetimepicker w-100"
                      :placeholder="$t('patient_create.placeholder_date')"
                      v-model="formData.issue_date"
                      :class="{ 'is-invalid': errors.issue_date }"
                      type="date"
                    />
                    <div class="invalid-feedback">{{ errors.issue_date }}</div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label class="form-label">{{ $t('patient_create.expiry_date') }} <span class="text-danger">*</span></label>
                    <Field
                      name="expiry_date"
                      as="a-date-picker"
                      class="form-control datetimepicker w-100"
                      :placeholder="$t('patient_create.placeholder_date')"
                      v-model="formData.expiry_date"
                      :class="{ 'is-invalid': errors.expiry_date }"
                      type="date"
                    />
                    <div class="invalid-feedback">{{ errors.expiry_date }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="d-flex align-items-center justify-content-end mb-4">
            <router-link :to="{ name: 'PatientList' }" class="btn btn-light me-2">{{ $t('patient_create.cancel') }}</router-link>
            <button type="submit" class="btn btn-primary px-4">{{ $t('patient_create.save_changes') || 'Save Changes' }}</button>
          </div>
        </VeeForm>
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
import { ref, computed, type Ref, type ComputedRef, onMounted } from 'vue'
import * as yup from 'yup'
import { Form as VeeForm, Field } from 'vee-validate'
import { usePatientStore } from '@/stores/patientStore'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import constants from '@/assets/json/constants.json'
import type { SelectOption } from '@/types/common'
import axiosInstance from '@/utils/axios'
import { message } from 'ant-design-vue'

const { t } = useI18n()
const patientStore = usePatientStore()
const router = useRouter()
const route = useRoute()

const createObjectURL = (file: File) => {
  return URL.createObjectURL(file)
}

// Insurance Options Data
const insuranceTypes = ref<any[]>([])
const insuranceCompanies = ref<any[]>([])
const insurancePlans = ref<any[]>([])

// Loading states
const loadingInsuranceTypes = ref(false)
const loadingInsuranceCompanies = ref(false)
const loadingInsurancePlans = ref(false)

const loadInsuranceTypes = async () => {
  try {
    loadingInsuranceTypes.value = true
    const response = await axiosInstance.get('/insurance/types/')
    insuranceTypes.value = response.data.results || response.data || []
  } catch (error) {
    console.error('Error loading insurance types:', error)
    message.error(t('insurance_modal.load_fail'))
    insuranceTypes.value = []
  } finally {
    loadingInsuranceTypes.value = false
  }
}

const loadInsuranceCompanies = async (typeId: number) => {
  try {
    loadingInsuranceCompanies.value = true
    const response = await axiosInstance.get(`/insurance/companies/?type=${typeId}`)
    insuranceCompanies.value = response.data.results || response.data || []
  } catch (error) {
    console.error('Error loading insurance companies:', error)
    message.error(t('insurance_modal.load_fail'))
    insuranceCompanies.value = []
  } finally {
    loadingInsuranceCompanies.value = false
  }
}

const loadInsurancePlans = async (companyLink: string) => {
  try {
    loadingInsurancePlans.value = true
    const response = await axiosInstance.get(companyLink)
    insurancePlans.value = response.data.results || response.data || []
  } catch (error) {
    console.error('Error loading insurance plans:', error)
    message.error(t('insurance_modal.load_fail'))
    insurancePlans.value = []
  } finally {
    loadingInsurancePlans.value = false
  }
}

const onInsuranceTypeSelect = (selectedType: any) => {
  // Reset dependent fields
  formData.value.company = ''
  formData.value.insurance_plan = ''
  insuranceCompanies.value = []
  insurancePlans.value = []

  if (selectedType && selectedType.id) {
    loadInsuranceCompanies(selectedType.id)
  }
}

const onInsuranceCompanySelect = (selectedCompany: any) => {
  // Reset dependent fields
  formData.value.insurance_plan = ''
  insurancePlans.value = []

  if (selectedCompany && selectedCompany._links?.plans) {
    loadInsurancePlans(selectedCompany._links.plans)
  }
}

const loadPatientData = async () => {
  const id = route.params.id
  if (!id) return

  try {
    const response = await axiosInstance.get(`/patients/${id}/`)
    const data = response.data

    const findOption = (options: any[], value: any) => {
      if (value === null || value === undefined) return ''
      // If options are objects {label, value}
      const found = options.find(opt => opt.value === value || opt.id === value)
      if (found) return found
      // If options are strings (like relationshipOptions might be treated if not mapped)
      if (options.includes(value)) return value
      return value
    }

    formData.value.first_name = data.first_name
    formData.value.last_name = data.last_name
    formData.value.other_names = data.other_names
    formData.value.phone = data.phone
    formData.value.other_phone = data.other_phone
    formData.value.email = data.email
    formData.value.date_of_birth = data.date_of_birth
    
    formData.value.gender = findOption(GenderOptions.value, data.gender)
    formData.value.marital_status = findOption(MaritalStatusOptions.value, data.marital_status)
    formData.value.religion = findOption(ReligionOptions.value, data.religion)
    
    if (data.address) {
        formData.value.address_line_1 = data.address.address_line_1
        formData.value.address_line_2 = data.address.address_line_2
        formData.value.country = findOption(CountryOptions.value, data.address.country)
        formData.value.state = findOption(StateOptions, data.address.state)
        
        const region = allRegions.find((r: any) => r.region === data.address.state)
        if (region) {
            const cities = region.cities.map((city: string) => ({ label: city, value: city }))
            formData.value.city = findOption(cities, data.address.city)
        }
    }

    if (data.emergency_contact) {
        formData.value.nok_name = data.emergency_contact.name
        formData.value.nok_relation = data.emergency_contact.relation
        formData.value.nok_phone = data.emergency_contact.phone
        formData.value.nok_other_phone = data.emergency_contact.other_phone
    }
    
    if (data.insurance) {
        formData.value.insurance_schema = data.insurance.schema
        formData.value.membership_number = data.insurance.membership_number
        formData.value.serial_number = data.insurance.serial_number
        formData.value.issue_date = data.insurance.issue_date
        formData.value.expiry_date = data.insurance.expiry_date

        if (data.insurance.type) {
            const typeId = typeof data.insurance.type === 'object' ? data.insurance.type.id : data.insurance.type
            const selectedType = insuranceTypes.value.find((t: any) => t.id === typeId)
            formData.value.insurance_type = selectedType || data.insurance.type

            if (typeId) {
                await loadInsuranceCompanies(typeId)
                
                if (data.insurance.company) {
                    const companyId = typeof data.insurance.company === 'object' ? data.insurance.company.id : data.insurance.company
                    const selectedCompany = insuranceCompanies.value.find((c: any) => c.id === companyId)
                    formData.value.company = selectedCompany || data.insurance.company

                    if (selectedCompany && selectedCompany._links?.plans) {
                        await loadInsurancePlans(selectedCompany._links.plans)
                        
                        if (data.insurance.plan) {
                            const planId = typeof data.insurance.plan === 'object' ? data.insurance.plan.id : data.insurance.plan
                            const selectedPlan = insurancePlans.value.find((p: any) => p.id === planId)
                            formData.value.insurance_plan = selectedPlan || data.insurance.plan
                        }
                    }
                }
            }
        }
    }

    if (data.profile_image) {
        formData.value.profile_image_url = data.profile_image
    }
    
  } catch (error) {
    console.error('Error loading patient:', error)
    message.error('Failed to load patient data')
  }
}

onMounted(async () => {
  await loadInsuranceTypes()
  if (route.params.id) {
    await loadPatientData()
  }
})

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
    insurance_type: yup.mixed().required(t('validation.insurance_type_required') || 'Insurance Type is required'),
    insurance_schema: yup.string().required(t('validation.insurance_schema_required')),
    insurance_plan: yup.mixed().required(t('validation.insurance_plan_required')),
    membership_number: yup.string().required(t('validation.membership_number_required')),
    serial_number: yup.string().required(t('validation.serial_number_required')),
    company: yup.mixed().required(t('validation.company_required')),
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
  const stateValue = (formData.value.state as any)?.value || formData.value.state || selectedState.value
  const region = allRegions.find((r: any) => r.region === stateValue)
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

const relationshipOptions = ref([
  'Spouse',
  'Parent',
  'Child',
  'Sibling',
  'Friend',
  'Other'
])

const ReligionOptions = computed(() => [
  { label: t('patient_create.islam'), value: 'Islam' },
  { label: t('patient_create.christianity'), value: 'Christianity' },
  { label: t('patient_create.others'), value: 'Others' }
])

const CountryOptions = computed(() => [
  { label: t('patient_create.ghana'), value: 'Ghana' }
])

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
  profile_image_url?: string
  insurance_type: any
  insurance_schema: string
  insurance_plan: any
  membership_number: string
  serial_number: string
  company: any
  issue_date: string
  expiry_date: string
  insurance: {
    type: any
    schema: string
    plan: any
    membership_number: string
    serial_number: string
    company: any
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
  profile_image_url: '',
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

  const extractValue = (val: any) => {
    if (val && typeof val === 'object' && 'value' in val) {
      return val.value
    }
    return val
  }

  // Address as object
  const address = {
    address_line_1: formData.value.address_line_1,
    address_line_2: formData.value.address_line_2,
    city: extractValue(formData.value.city),
    state: extractValue(formData.value.state),
    country: extractValue(formData.value.country),
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
    type: (formData.value.insurance.type as any)?.id || (formData.value.insurance_type as any)?.id || formData.value.insurance_type,
    schema: formData.value.insurance.schema || formData.value.insurance_schema,
    plan: (formData.value.insurance.plan as any)?.id || (formData.value.insurance_plan as any)?.id || formData.value.insurance_plan,
    membership_number:
      formData.value.insurance.membership_number || formData.value.membership_number,
    serial_number: formData.value.insurance.serial_number || formData.value.serial_number,
    company: (formData.value.insurance.company as any)?.id || (formData.value.company as any)?.id || formData.value.company,
    issue_date: formData.value.insurance.issue_date || formData.value.issue_date,
    expiry_date: formData.value.insurance.expiry_date || formData.value.expiry_date,
  }

  // Append all fields
  Object.keys(formData.value).forEach((key) => {
    if (
      [
        'address1',
        'address2',
        'address_line_1',
        'address_line_2',
        'city',
        'state',
        'country',
        'nok_name',
        'nok_relation',
        'nok_phone',
        'nok_other_phone',
        'profile_image_url',
        'insurance',
      ].includes(key)
    )
      return
    
    let value = formData.value[key as keyof FormData]
    
    // Handle SelectOption objects (extract value)
    if (value && typeof value === 'object' && 'value' in value) {
      value = (value as any).value
    }

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
    if (route.params.id) {
      // @ts-ignore
      await patientStore.updatePatient(route.params.id as string, payload)
      message.success(t('patient_create.update_success') || 'Patient updated successfully')
    } else {
      await patientStore.createPatient(payload)
      message.success(t('patient_create.create_success') || 'Patient created successfully')
    }
    router.push({ name: 'PatientList' })
  } catch (error) {
    console.error(error)
    message.error(t('patient_create.error') || 'An error occurred')
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

/* --- Uniform Input Styling --- */

/* Target all input containers to enforce consistent height and look */
.form-control,
.form-select,
.vue-tel-input,
:deep(.ant-picker),
:deep(.multiselect__tags) {
  min-height: 46px;
  height: 46px;
  border: 1px solid #dbe0e5;
  border-radius: 5px;
  font-size: 14px;
  box-shadow: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/* Target Focus States */
.form-control:focus,
.form-select:focus,
.vue-tel-input:focus-within,
:deep(.ant-picker-focused),
:deep(.multiselect--active .multiselect__tags) {
  border-color: #2c5cc5;
  box-shadow: 0 0 0 0.25rem rgba(44, 92, 197, 0.25);
  outline: 0;
}

/* Target Error States */
.is-invalid,
:deep(.is-invalid .multiselect__tags),
:deep(.ant-picker-status-error) {
  border-color: #dc3545 !important;
}

/* --- Component Specific Overrides --- */

/* Vue Tel Input */
.vue-tel-input {
  display: flex;
  align-items: center;
  padding: 0;
}
/* Remove border from inner input if class 'form-control' is applied */
.vue-tel-input :deep(.vti__input) {
  border: none !important;
  box-shadow: none !important;
  height: 100%;
  background: transparent;
  padding-left: 12px;
}
.vue-tel-input :deep(.vti__dropdown) {
  border-radius: 5px 0 0 5px;
}

/* Vue Multiselect */
:deep(.multiselect) {
  min-height: 46px;
}
:deep(.multiselect__tags) {
  padding-top: 10px;
}
:deep(.multiselect__placeholder) {
  margin-bottom: 0;
  padding-top: 0;
  color: #6c757d;
}
:deep(.multiselect__select) {
  height: 44px;
  top: 1px;
}
:deep(.multiselect__single) {
  margin-bottom: 0;
  padding-top: 0;
  font-size: 14px;
}

/* Ant Design Date Picker */
:deep(.ant-picker) {
  width: 100%;
  padding: 8px 11px;
}
:deep(.ant-picker-input > input) {
  font-size: 14px;
}
</style>
