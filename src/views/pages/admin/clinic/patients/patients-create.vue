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
        <div class="mb-4 d-flex align-items-center justify-content-between">
          <h6 class="fw-bold mb-0 d-flex align-items-center">
            <router-link to="/patients/patients-list" class="text-dark">
              <i class="ti ti-chevron-left me-1"></i>{{ $t('patients.title') }}
            </router-link>
          </h6>
          <button type="button" class="btn btn-outline-secondary btn-sm" @click="fillRandomData">
            <i class="ti ti-wand me-1"></i> Fill Random Data (Test)
          </button>
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
                      <template #default="{ field, meta, errorMessage }">
                        <vue-multiselect
                          v-bind="field"
                          :model-value="field.value"
                          :options="GenderOptions"
                          label="label"
                          track-by="value"
                          @update:model-value="(val: any) => field.onChange(val)"
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
                      <template #default="{ field, meta, errorMessage }">
                        <vue-multiselect
                          v-bind="field"
                          :model-value="field.value"
                          :options="MaritalStatusOptions"
                          label="label"
                          track-by="value"
                          @update:model-value="(val: any) => field.onChange(val)"
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
                      <template #default="{ field, meta, errorMessage }">
                        <vue-multiselect
                          v-bind="field"
                          :model-value="field.value"
                          :options="ReligionOptions"
                          label="label"
                          track-by="value"
                          @update:model-value="(val: any) => field.onChange(val)"
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
                      <template #default="{ field, meta, errorMessage }">
                        <vue-multiselect
                          v-bind="field"
                          :model-value="field.value"
                          :options="CountryOptions"
                          label="label"
                          track-by="value"
                          @update:model-value="(val: any) => field.onChange(val)"
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
                      <template #default="{ field, meta, errorMessage }">
                        <vue-multiselect
                          v-bind="field"
                          :model-value="field.value"
                          :options="StateOptions"
                          label="label"
                          track-by="value"
                          @update:model-value="(val: any) => field.onChange(val)"
                          :class="{ 'is-invalid': meta.touched && !meta.valid }"
                          :placeholder="$t('patient_create.select')"
                          :loading="loadingStates"
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
                      <template #default="{ field, meta, errorMessage }">
                        <vue-multiselect
                          v-bind="field"
                          :model-value="field.value"
                          :options="CityOptions"
                          label="label"
                          track-by="value"
                          @update:model-value="(val: any) => field.onChange(val)"
                          :class="{ 'is-invalid': meta.touched && !meta.valid }"
                          :placeholder="$t('patient_create.select')"
                          :loading="loadingCities"
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
                      <template #default="{ field, meta, errorMessage }">
                        <vue-multiselect
                          v-bind="field"
                          :model-value="field.value"
                          :options="relationshipOptions"
                          :searchable="false"
                          :close-on-select="true"
                          :placeholder="$t('next_of_kin_modal.select_relationship')"
                          @update:model-value="(val: any) => field.onChange(val)"
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
                    <label class="form-label">{{ $t('patient_create.insurance_type') }}</label>
                    <Field name="insurance_type" v-model="formData.insurance_type">
                      <template #default="{ field, meta, errorMessage }">
                        <vue-multiselect
                          v-bind="field"
                          :model-value="field.value"
                          :options="insuranceTypes"
                          label="name"
                          track-by="id"
                          @update:model-value="(val: any) => { field.onChange(val); onInsuranceTypeSelect(val); }"
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
                    <label class="form-label">
                      {{ $t('patient_create.company') }}
                      <span v-if="insuranceFieldsRequired.company" class="text-danger">*</span>
                    </label>
                    <Field name="company" v-model="formData.company">
                      <template #default="{ field, meta, errorMessage }">
                        <vue-multiselect
                          v-bind="field"
                          :model-value="field.value"
                          :options="insuranceCompanies"
                          label="name"
                          track-by="id"
                          @update:model-value="(val: any) => { field.onChange(val); onInsuranceCompanySelect(val); }"
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
                    <label class="form-label">
                      {{ $t('patient_create.insurance_plan') }}
                      <span v-if="insuranceFieldsRequired.plan" class="text-danger">*</span>
                    </label>
                    <Field name="insurance_plan" v-model="formData.insurance_plan">
                      <template #default="{ field, meta, errorMessage }">
                        <vue-multiselect
                          v-bind="field"
                          :model-value="field.value"
                          :options="insurancePlans"
                          label="name"
                          track-by="id"
                          @update:model-value="(val: any) => { field.onChange(val); }"
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
                    <label class="form-label">
                      {{ $t('patient_create.insurance_schema') }}
                      <span v-if="insuranceFieldsRequired.schema" class="text-danger">*</span>
                    </label>
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
                    <label class="form-label">
                      {{ $t('patient_create.membership_number') }}
                      <span v-if="insuranceFieldsRequired.membership_number" class="text-danger">*</span>
                    </label>
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
                    <label class="form-label">
                      {{ $t('patient_create.serial_number') }}
                      <span v-if="insuranceFieldsRequired.serial_number" class="text-danger">*</span>
                    </label>
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
                    <label class="form-label">
                      {{ $t('patient_create.issue_date') }}
                      <span v-if="insuranceFieldsRequired.issue_date" class="text-danger">*</span>
                    </label>
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
                    <label class="form-label">
                      {{ $t('patient_create.expiry_date') }}
                      <span v-if="insuranceFieldsRequired.expiry_date" class="text-danger">*</span>
                    </label>
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
            <button type="submit" class="btn btn-primary px-4">{{ $t('patient_create.add_new_patient') }}</button>
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
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import constants from '@/assets/json/constants.json'
import type { SelectOption } from '@/types/common'
import axiosInstance from '@/utils/axios'
import { message } from 'ant-design-vue'
import dayjs from 'dayjs'

const { t } = useI18n()
const patientStore = usePatientStore()
const router = useRouter()

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

onMounted(async () => {
  await loadInsuranceTypes()
  
  // Set "Cash & Carry" as default insurance type
  const cashAndCarry = insuranceTypes.value.find(
    (type) => (type.name || '').toLowerCase() === 'cash & carry'
  )
  if (cashAndCarry) {
    formData.value.insurance_type = cashAndCarry
  }
})

// Validation schema with conditional insurance validation
const schema = computed(() => {
  const baseSchema = {
    first_name: yup.string().required(t('validation.first_name_required')),
    last_name: yup.string().required(t('validation.last_name_required')),
    date_of_birth: yup.date().required(t('validation.dob_required')),
    phone: yup.string().required(t('validation.phone_required')),
    gender: yup.mixed().required(t('validation.gender_required')),
    marital_status: yup.mixed().required(t('validation.marital_status_required')),
    religion: yup.mixed().required(t('validation.religion_required')),
    city: yup.mixed().required(t('validation.city_required')),
    state: yup.mixed().required(t('validation.state_required')),
    country: yup.mixed().required(t('validation.country_required')),
    address_line_1: yup.string().required(t('validation.address_required')),
    nok_name: yup.string().required(t('validation.nok_name_required')),
    nok_relation: yup.string().required(t('validation.nok_relation_required')),
    // nok_phone: yup.string().required(t('validation.nok_phone_required')),
  }

  // Get the insurance type name for validation logic
  const getInsuranceTypeName = () => {
    const type = formData.value.insurance_type
    if (!type) return null
    return (type?.name || type).toLowerCase()
  }

  const insuranceTypeName = getInsuranceTypeName()

  // Insurance validation is optional by default (Cash & Carry)
  let insuranceValidation: any = {
    insurance_type: yup.mixed().nullable(),
    insurance_schema: yup.string().nullable(),
    insurance_plan: yup.mixed().nullable(),
    membership_number: yup.string().nullable(),
    serial_number: yup.string().nullable(),
    company: yup.mixed().nullable(),
    issue_date: yup.date().nullable(),
    expiry_date: yup.date().nullable(),
  }

  // Apply conditional validation based on insurance type
  if (insuranceTypeName && insuranceTypeName !== 'CASH & CARRY') {
    switch (insuranceTypeName) {
      case 'nhia':
        // NHIA requires: scheme, membershipNumber, serialNumber, expiryDate
        insuranceValidation = {
          insurance_type: yup.mixed().required(t('validation.insurance_type_required')),
          insurance_schema: yup.string().required(t('validation.insurance_schema_required')),
          membership_number: yup.string().required(t('validation.membership_number_required')),
          serial_number: yup.string().required(t('validation.serial_number_required')),
          expiry_date: yup.date().required(t('validation.expiry_date_required')),
          // Optional fields
          insurance_plan: yup.mixed().nullable(),
          company: yup.mixed().nullable(),
          issue_date: yup.date().nullable(),
        }
        break

      case 'private':
      case 'corporate':
        // Private/Corporate requires: company, plan, membershipNumber, expiryDate
        insuranceValidation = {
          insurance_type: yup.mixed().required(t('validation.insurance_type_required')),
          company: yup.mixed().required(t('validation.company_required')),
          insurance_plan: yup.mixed().required(t('validation.insurance_plan_required')),
          membership_number: yup.string().required(t('validation.membership_number_required')),
          expiry_date: yup.date().required(t('validation.expiry_date_required')),
          // Optional fields
          insurance_schema: yup.string().nullable(),
          serial_number: yup.string().nullable(),
          issue_date: yup.date().nullable(),
        }
        break

      default:
        // For any other insurance type, make basic fields required
        insuranceValidation = {
          insurance_type: yup.mixed().required(t('validation.insurance_type_required')),
          insurance_schema: yup.string().nullable(),
          insurance_plan: yup.mixed().nullable(),
          membership_number: yup.string().nullable(),
          serial_number: yup.string().nullable(),
          company: yup.mixed().nullable(),
          issue_date: yup.date().nullable(),
          expiry_date: yup.date().nullable(),
        }
    }
  }

  return yup.object().shape({
    ...baseSchema,
    ...insuranceValidation,
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

// Loading states for location dropdowns
const loadingStates = ref(false)
const loadingCities = ref(false)

// Computed properties for conditional required fields based on insurance type
const insuranceTypeName = computed(() => {
  const type = formData.value.insurance_type
  if (!type) return null
  const name = (type?.name || type || '').toLowerCase()
  console.log('🔍 Insurance Type Selected:', name, type)
  return name
})

const isNHIA = computed(() => {
  const name = insuranceTypeName.value
  return name === 'nhia'
})

const isPrivateOrCorporate = computed(() => {
  const name = insuranceTypeName.value
  return name === 'private' || name === 'corporate'
})

const isCashAndCarry = computed(() => {
  return insuranceTypeName.value === 'CASH & CARRY'
})

// Determine which insurance fields are required
const insuranceFieldsRequired = computed(() => {
  let requiredFields
  
  if (isCashAndCarry.value || !formData.value.insurance_type) {
    requiredFields = {
      schema: false,
      company: false,
      plan: false,
      membership_number: false,
      serial_number: false,
      issue_date: false,
      expiry_date: false,
    }
  } else if (isNHIA.value) {
    requiredFields = {
      schema: true,
      company: false,
      plan: false,
      membership_number: true,
      serial_number: true,
      issue_date: false,
      expiry_date: true,
    }
  } else if (isPrivateOrCorporate.value) {
    requiredFields = {
      schema: false,
      company: true,
      plan: true,
      membership_number: true,
      serial_number: false,
      issue_date: false,
      expiry_date: true,
    }
  } else {
    // Default for other insurance types
    requiredFields = {
      schema: false,
      company: false,
      plan: false,
      membership_number: false,
      serial_number: false,
      issue_date: false,
      expiry_date: false,
    }
  }
  
  console.log('📋 Insurance Fields Required:', requiredFields)
  return requiredFields
})

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
  country: { label: 'Ghana', value: 'Ghana' },
  state: '',
  city: '',
  address_line_1: '',
  address_line_2: '',
  nok_name: '',
  nok_relation: '',
  nok_phone: '',
  nok_other_phone: '',
  profile_image: null,
  insurance_type: '',  // Will be set to Cash & Carry on mount
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

/**
 * Generates random data for testing purposes
 */
async function fillRandomData(): Promise<void> {
  try {
    const firstNames = ['John', 'Jane', 'Michael', 'Sarah', 'David', 'Emma', 'James', 'Olivia', 'Kwame', 'Ama', 'Kofi', 'Abena']
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Mensah', 'Osei', 'Boateng', 'Adjei']
    const emailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com']
    
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    
    // Generate random date of birth (18-80 years old)
    const today = new Date()
    const minAge = 18
    const maxAge = 80
    const age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge
    const dob = new Date(today.getFullYear() - age, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1)
    
    // Fill patient information
    formData.value.first_name = firstName
    formData.value.last_name = lastName
    formData.value.other_names = Math.random() > 0.5 ? firstNames[Math.floor(Math.random() * firstNames.length)] : ''
    formData.value.date_of_birth = dayjs(dob) as any
    formData.value.phone = `+233${Math.floor(Math.random() * 900000000 + 100000000)}`
    formData.value.other_phone = Math.random() > 0.5 ? `+233${Math.floor(Math.random() * 900000000 + 100000000)}` : ''
    formData.value.email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomains[Math.floor(Math.random() * emailDomains.length)]}`
    
    // Select random gender
    if (GenderOptions.value.length > 0) {
      formData.value.gender = GenderOptions.value[Math.floor(Math.random() * GenderOptions.value.length)] as any
    }
    
    // Select random marital status
    if (MaritalStatusOptions.value.length > 0) {
      formData.value.marital_status = MaritalStatusOptions.value[Math.floor(Math.random() * MaritalStatusOptions.value.length)] as any
    }
    
    // Select random religion
    if (ReligionOptions.value.length > 0) {
      formData.value.religion = ReligionOptions.value[Math.floor(Math.random() * ReligionOptions.value.length)] as any
    }
    
    // Address information
    formData.value.country = CountryOptions.value[0] as any // Ghana
    if (StateOptions.length > 0) {
      const randomState = StateOptions[Math.floor(Math.random() * StateOptions.length)]
      formData.value.state = randomState as any
      
      // Use nextTick to ensure reactivity updates before accessing computed
      await new Promise(resolve => setTimeout(resolve, 50))
      
      if (CityOptions.value.length > 0) {
        formData.value.city = CityOptions.value[Math.floor(Math.random() * CityOptions.value.length)] as any
      }
    }
    
    const streets = ['Main Street', 'Oak Avenue', 'High Street', 'Market Road', 'Independence Avenue', 'Liberation Road']
    formData.value.address_line_1 = `${Math.floor(Math.random() * 500 + 1)} ${streets[Math.floor(Math.random() * streets.length)]}`
    formData.value.address_line_2 = Math.random() > 0.6 ? `Apt ${Math.floor(Math.random() * 100 + 1)}` : ''
    
    // Next of Kin information
    formData.value.nok_name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`
    formData.value.nok_relation = relationshipOptions.value[Math.floor(Math.random() * relationshipOptions.value.length)]
    formData.value.nok_phone = `+233${Math.floor(Math.random() * 900000000 + 100000000)}`
    formData.value.nok_other_phone = Math.random() > 0.5 ? `+233${Math.floor(Math.random() * 900000000 + 100000000)}` : ''
    
    // Insurance information - randomly select type
    if (insuranceTypes.value.length > 0) {
      const randomInsuranceType = insuranceTypes.value[Math.floor(Math.random() * insuranceTypes.value.length)]
      formData.value.insurance_type = randomInsuranceType
      
      const typeName = (randomInsuranceType?.name || '').toLowerCase()
      
      // Fill insurance fields based on type
      if (typeName === 'nhia') {
        formData.value.insurance_schema = `NHIA-${Math.floor(Math.random() * 9000 + 1000)}`
        formData.value.membership_number = `NHIA${Math.floor(Math.random() * 900000000 + 100000000)}`
        formData.value.serial_number = `SN${Math.floor(Math.random() * 90000000 + 10000000)}`
        
        const expiryDate = new Date()
        expiryDate.setFullYear(expiryDate.getFullYear() + Math.floor(Math.random() * 3 + 1))
        formData.value.expiry_date = dayjs(expiryDate) as any
      } else if (typeName === 'private' || typeName === 'corporate') {
        // Load companies first
        if (randomInsuranceType.id) {
          await loadInsuranceCompanies(randomInsuranceType.id)
          
          if (insuranceCompanies.value.length > 0) {
            const randomCompany = insuranceCompanies.value[Math.floor(Math.random() * insuranceCompanies.value.length)]
            formData.value.company = randomCompany
            
            // Load plans
            if (randomCompany._links?.plans) {
              await loadInsurancePlans(randomCompany._links.plans)
              
              if (insurancePlans.value.length > 0) {
                formData.value.insurance_plan = insurancePlans.value[Math.floor(Math.random() * insurancePlans.value.length)]
              }
            }
          }
        }
        
        formData.value.membership_number = `PVT${Math.floor(Math.random() * 900000000 + 100000000)}`
        
        const issueDate = new Date()
        issueDate.setMonth(issueDate.getMonth() - Math.floor(Math.random() * 12))
        formData.value.issue_date = dayjs(issueDate) as any
        
        const expiryDate = new Date(issueDate)
        expiryDate.setFullYear(expiryDate.getFullYear() + 1)
        formData.value.expiry_date = dayjs(expiryDate) as any
      }
      // Cash & Carry doesn't need additional fields
    }
    
    message.success('Form filled with random data for testing')
  } catch (error) {
    console.error('Error filling random data:', error)
    message.error('Failed to fill random data')
  }
}

/**
 * Helper function to extract value from SelectOption objects or return primitive value
 */
const extractValue = (val: any) => {
  if (val && typeof val === 'object' && 'value' in val) {
    return val.value
  }
  return val
}

/**
 * Helper function to format date as YYYY-MM-DD
 */
const formatDate = (dateValue: any): string | null => {
  if (!dateValue) return null
  const date = new Date(dateValue)
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

/**
 * Builds the JSON payload for patient creation
 * Returns a JSON object instead of FormData
 */
function buildPayload(): any {
  // Extract values from form data
  const payload: any = {
    first_name: formData.value.first_name,
    last_name: formData.value.last_name,
    other_names: formData.value.other_names || '',
    date_of_birth: formatDate(formData.value.date_of_birth),
    phone: formData.value.phone,
    other_phone: formData.value.other_phone || '',
    email: formData.value.email || '',
    gender: extractValue(formData.value.gender),
    marital_status: extractValue(formData.value.marital_status),
    religion: extractValue(formData.value.religion),
  }

  // Address as nested object
  payload.address = {
    address_line_1: formData.value.address_line_1,
    address_line_2: formData.value.address_line_2 || '',
    city: extractValue(formData.value.city),
    state: extractValue(formData.value.state),
    country: extractValue(formData.value.country),
  }

  // Emergency contact as nested object
  payload.emergency_contact = {
    name: formData.value.nok_name,
    relation: formData.value.nok_relation,
    phone: formData.value.nok_phone,
    other_phone: formData.value.nok_other_phone || '',
  }

  // Insurance as nested object
  // Cash & Carry patients will have minimal insurance data
  const insuranceType = formData.value.insurance_type
  const insuranceTypeName = (insuranceType?.name || insuranceType || '').toLowerCase()
  
  payload.insurance = {
    type: (formData.value.insurance_type as any)?.id || formData.value.insurance_type,
  }

  // Only add insurance fields if not Cash & Carry
  if (insuranceTypeName !== 'CASH & CARRY' && insuranceType) {
    payload.insurance.schema = formData.value.insurance_schema || ''
    payload.insurance.plan = (formData.value.insurance_plan as any)?.id || formData.value.insurance_plan || null
    payload.insurance.membership_number = formData.value.membership_number || ''
    payload.insurance.serial_number = formData.value.serial_number || ''
    payload.insurance.company = (formData.value.company as any)?.id || formData.value.company || null
    payload.insurance.issue_date = formatDate(formData.value.issue_date)
    payload.insurance.expiry_date = formatDate(formData.value.expiry_date)
  }

  // Handle profile image separately if using FormData is needed
  // For JSON, you might need to upload the image separately or convert to base64
  if (formData.value.profile_image) {
    // If your API supports base64 images in JSON:
    // payload.profile_image = await convertToBase64(formData.value.profile_image)
    // Otherwise, you'll need to handle file upload separately
    console.log('Profile image will need separate upload handling')
  }

  return payload
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
