<template>
  <LayoutsHeader />
  <LayoutsSidebar />
  <div class="page-wrapper">
    <div class="content pb-0">
<div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="mb-4 d-flex align-items-center justify-content-between">
          <h6 class="fw-bold mb-0 d-flex align-items-center">
            <router-link :to="{ name: 'PatientList' }" class="text-dark">
              <i class="ti ti-chevron-left me-1 fs-14"></i>{{ $t('patients.edit_title') || 'Edit Patient' }}
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
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="card-title mb-0">{{ $t('patient_create.next_of_kin_information') }}</h5>
              <button 
                type="button" 
                class="btn btn-sm btn-primary" 
                @click="addNextOfKin"
              >
                <i class="ti ti-plus me-1"></i>{{ $t('patient_create.add_next_of_kin') }}
              </button>
            </div>
            <div class="card-body">
              <!-- NOK Entry -->
              <div 
                v-for="(nok, index) in nextOfKinEntries" 
                :key="index"
                class="nok-entry mb-4 pb-4"
                :class="{ 'border-bottom': index < nextOfKinEntries.length - 1 }"
              >
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="mb-0 text-primary">
                    <i class="ti ti-user-check me-1"></i>
                    {{ $t('patient_create.nok_entry') }} #{{ index + 1 }}
                  </h6>
                  <button 
                    v-if="nextOfKinEntries.length > 1"
                    type="button" 
                    class="btn btn-sm btn-outline-danger" 
                    @click="removeNextOfKin(index)"
                    :title="$t('patient_create.remove_next_of_kin')"
                  >
                    <i class="ti ti-trash"></i>
                  </button>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('patient_create.nok_name') }}<span class="text-danger">*</span></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="nok.name"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('patient_create.nok_relation') }}<span class="text-danger">*</span></label>
                      <vue-multiselect
                        v-model="nok.relation"
                        :options="relationshipOptions"
                        :searchable="false"
                        :close-on-select="true"
                        :placeholder="$t('next_of_kin_modal.select_relationship')"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('patient_create.nok_phone') }}<span class="text-danger">*</span></label>
                      <vue-tel-input
                        v-model="nok.phone"
                        class="form-control"
                        :validCharactersOnly="true"
                        :inputOptions="{
                          styleClasses: 'form-control',
                          type: 'tel',
                          placeholder: $t('patient_create.placeholder_phone'),
                        }"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('patient_create.nok_other_phone') }}</label>
                      <vue-tel-input
                        v-model="nok.other_phone"
                        class="form-control"
                        :validCharactersOnly="true"
                        :inputOptions="{
                          styleClasses: 'form-control',
                          type: 'tel',
                          placeholder: $t('patient_create.placeholder_phone'),
                        }"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Insurance Information Card -->
          <div class="card mb-4">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="card-title mb-0">{{ $t('patient_create.insurance_information') }}</h5>
              <button 
                type="button" 
                class="btn btn-sm btn-primary" 
                @click="addInsurance"
              >
                <i class="ti ti-plus me-1"></i>{{ $t('patient_create.add_insurance') }}
              </button>
            </div>
            <div v-if="insuranceEntries.length > 0" class="card-body">
              
              <!-- Insurance Entry -->
              <div 
                v-for="(insurance, index) in insuranceEntries" 
                :key="index"
                class="insurance-entry mb-4 pb-4"
                :class="{ 'border-bottom': index < insuranceEntries.length - 1 }"
              >
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h6 class="mb-0 text-primary">
                    <i class="ti ti-shield-check me-1"></i>
                    {{ $t('patient_create.insurance_entry') }} #{{ index + 1 }}
                  </h6>
                  <button 
                    type="button" 
                    class="btn btn-sm btn-outline-danger" 
                    @click="removeInsurance(index)"
                    :title="$t('patient_create.remove_insurance')"
                  >
                    <i class="ti ti-trash"></i>
                  </button>
                </div>
                <div class="row">
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label">{{ $t('patient_create.insurance_type') }}</label>
                      <vue-multiselect
                        v-model="insurance.insurance_type"
                        :options="insuranceTypes"
                        label="name"
                        track-by="id"
                        @update:model-value="(val: any) => onInsuranceTypeSelect(val, index)"
                        :placeholder="$t('insurance_modal.select_type')"
                        :loading="loadingInsuranceTypes"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label">
                        {{ $t('patient_create.company') }}
                        <span v-if="getInsuranceFieldsRequired(insurance).company" class="text-danger">*</span>
                      </label>
                      <vue-multiselect
                        v-model="insurance.company"
                        :options="insurance.companiesOptions || []"
                        label="name"
                        track-by="id"
                        @update:model-value="(val: any) => onInsuranceCompanySelect(val, index)"
                        :placeholder="$t('insurance_modal.select_company')"
                        :loading="insurance.loadingCompanies"
                        :disabled="!insurance.insurance_type"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label">
                        {{ $t('patient_create.insurance_plan') }}
                        <span v-if="getInsuranceFieldsRequired(insurance).plan" class="text-danger">*</span>
                      </label>
                      <vue-multiselect
                        v-model="insurance.insurance_plan"
                        :options="insurance.plansOptions || []"
                        label="name"
                        track-by="id"
                        :placeholder="$t('insurance_modal.select_plan')"
                        :loading="insurance.loadingPlans"
                        :disabled="!insurance.company"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label">
                        {{ $t('patient_create.insurance_schema') }}
                        <span v-if="getInsuranceFieldsRequired(insurance).schema" class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="insurance.insurance_schema"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label">
                        {{ $t('patient_create.membership_number') }}
                        <span v-if="getInsuranceFieldsRequired(insurance).membership_number" class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="insurance.membership_number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label">
                        {{ $t('patient_create.serial_number') }}
                        <span v-if="getInsuranceFieldsRequired(insurance).serial_number" class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="insurance.serial_number"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label">
                        {{ $t('patient_create.issue_date') }}
                        <span v-if="getInsuranceFieldsRequired(insurance).issue_date" class="text-danger">*</span>
                      </label>
                      <a-date-picker
                        class="form-control datetimepicker w-100"
                        :placeholder="$t('patient_create.placeholder_date')"
                        v-model:value="insurance.issue_date"
                        type="date"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="mb-3">
                      <label class="form-label">
                        {{ $t('patient_create.expiry_date') }}
                        <span v-if="getInsuranceFieldsRequired(insurance).expiry_date" class="text-danger">*</span>
                      </label>
                      <a-date-picker
                        class="form-control datetimepicker w-100"
                        :placeholder="$t('patient_create.placeholder_date')"
                        v-model:value="insurance.expiry_date"
                        type="date"
                      />
                    </div>
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
  </div>
  <LayoutsFooter />
</template>

<script setup lang="ts">
import { ref, computed, type Ref, type ComputedRef, onMounted, onBeforeUnmount } from 'vue'
import * as yup from 'yup'
import { Form as VeeForm, Field } from 'vee-validate'
import LayoutsHeader from '@/views/layouts/layouts-header.vue'
import LayoutsSidebar from '@/views/layouts/layouts-sidebar.vue'
import LayoutsFooter from '@/views/layouts/layouts-footer.vue'
import { usePatientStore } from '@/stores/patientStore'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import constants from '@/assets/json/constants.json'
import type { SelectOption } from '@/types/common'
import axiosInstance from '@/utils/axios'
import { message } from 'ant-design-vue'
import dayjs from 'dayjs'

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
  if (!isMounted.value) return
  
  try {
    loadingInsuranceTypes.value = true
    const response = await axiosInstance.get('/insurance/types/')
    if (!isMounted.value) return // Check after async operation
    insuranceTypes.value = response.data.results || response.data || []
  } catch (error) {
    console.error('Error loading insurance types:', error)
    message.error(t('insurance_modal.load_fail'))
    insuranceTypes.value = []
  } finally {
    loadingInsuranceTypes.value = false
  }
}

// Insurance Entries Array (for form repeater)
interface InsuranceEntry {
  insurance_type: any
  company: any
  insurance_plan: any
  insurance_schema: string
  membership_number: string
  serial_number: string
  issue_date: any
  expiry_date: any
  // Per-entry dropdown options and loading states
  companiesOptions: any[]
  plansOptions: any[]
  loadingCompanies: boolean
  loadingPlans: boolean
}

const insuranceEntries = ref<InsuranceEntry[]>([])

// Initialize with one empty insurance entry
const createEmptyInsuranceEntry = (): InsuranceEntry => ({
  insurance_type: null,
  company: null,
  insurance_plan: null,
  insurance_schema: '',
  membership_number: '',
  serial_number: '',
  issue_date: null,
  expiry_date: null,
  companiesOptions: [],
  plansOptions: [],
  loadingCompanies: false,
  loadingPlans: false,
})

const addInsurance = () => {
  insuranceEntries.value.push(createEmptyInsuranceEntry())
}

// Next of Kin Entries Array (for form repeater)
interface NextOfKinEntry {
  name: string
  relation: string
  phone: string
  other_phone: string
}

const nextOfKinEntries = ref<NextOfKinEntry[]>([])

const createEmptyNextOfKinEntry = (): NextOfKinEntry => ({
  name: '',
  relation: '',
  phone: '',
  other_phone: '',
})

const addNextOfKin = () => {
  nextOfKinEntries.value.push(createEmptyNextOfKinEntry())
}

const removeNextOfKin = (index: number) => {
  if (nextOfKinEntries.value.length > 1) {
    nextOfKinEntries.value.splice(index, 1)
  }
}

const removeInsurance = (index: number) => {
  insuranceEntries.value.splice(index, 1)
}

// Load insurance companies for a specific entry
const loadInsuranceCompaniesForEntry = async (typeId: number, index: number) => {
  const entry = insuranceEntries.value[index]
  if (!entry || !isMounted.value) return

  try {
    entry.loadingCompanies = true
    const response = await axiosInstance.get(`/insurance/companies/?type=${typeId}`)
    if (!isMounted.value) return // Check after async operation
    entry.companiesOptions = response.data.results || response.data || []
  } catch (error) {
    console.error('Error loading insurance companies:', error)
    message.error(t('insurance_modal.load_fail'))
    entry.companiesOptions = []
  } finally {
    entry.loadingCompanies = false
  }
}

// Load insurance plans for a specific entry
const loadInsurancePlansForEntry = async (companyLink: string, index: number) => {
  const entry = insuranceEntries.value[index]
  if (!entry || !isMounted.value) return

  try {
    entry.loadingPlans = true
    const response = await axiosInstance.get(companyLink)
    if (!isMounted.value) return // Check after async operation
    entry.plansOptions = response.data.results || response.data || []
  } catch (error) {
    console.error('Error loading insurance plans:', error)
    message.error(t('insurance_modal.load_fail'))
    entry.plansOptions = []
  } finally {
    entry.loadingPlans = false
  }
}

const onInsuranceTypeSelect = async (selectedType: any, index: number) => {
  const entry = insuranceEntries.value[index]
  if (!entry) return

  // Reset dependent fields
  entry.company = null
  entry.insurance_plan = null
  entry.companiesOptions = []
  entry.plansOptions = []

  if (selectedType && selectedType.id) {
    await loadInsuranceCompaniesForEntry(selectedType.id, index)
  }
}

const onInsuranceCompanySelect = async (selectedCompany: any, index: number) => {
  const entry = insuranceEntries.value[index]
  if (!entry) return

  // Reset dependent fields
  entry.insurance_plan = null
  entry.plansOptions = []

  if (selectedCompany && selectedCompany._links?.plans) {
    await loadInsurancePlansForEntry(selectedCompany._links.plans, index)
  }
}

// Determine which insurance fields are required for a specific entry
const getInsuranceFieldsRequired = (entry: InsuranceEntry) => {
  if (!entry.insurance_type) {
    return {
      schema: false,
      company: false,
      plan: false,
      membership_number: false,
      serial_number: false,
      issue_date: false,
      expiry_date: false,
    }
  }

  const typeName = (entry.insurance_type?.name || entry.insurance_type || '').toLowerCase()

  if (typeName === 'cash & carry') {
    return {
      schema: false,
      company: false,
      plan: false,
      membership_number: false,
      serial_number: false,
      issue_date: false,
      expiry_date: false,
    }
  } else if (typeName === 'nhia') {
    return {
      schema: true,
      company: false,
      plan: false,
      membership_number: true,
      serial_number: true,
      issue_date: false,
      expiry_date: true,
    }
  } else if (typeName === 'private' || typeName === 'corporate') {
    return {
      schema: false,
      company: true,
      plan: true,
      membership_number: true,
      serial_number: false,
      issue_date: false,
      expiry_date: true,
    }
  } else {
    return {
      schema: false,
      company: false,
      plan: false,
      membership_number: false,
      serial_number: false,
      issue_date: false,
      expiry_date: false,
    }
  }
}

const loadPatientData = async () => {
  const id = route.params.id
  if (!id || !isMounted.value) return

  try {
    const response = await axiosInstance.get(`/patients/${id}/`)
    if (!isMounted.value) return // Check again after async operation
    
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
        const nokEntry = createEmptyNextOfKinEntry()
        nokEntry.name = data.emergency_contact.name
        nokEntry.relation = data.emergency_contact.relation
        nokEntry.phone = data.emergency_contact.phone
        nokEntry.other_phone = data.emergency_contact.other_phone
        nextOfKinEntries.value.push(nokEntry)
    }
    
    if (data.insurance) {
        const insuranceData = Array.isArray(data.insurance) ? data.insurance : [data.insurance]
        
        for (const ins of insuranceData) {
            const entry = createEmptyInsuranceEntry()
            entry.insurance_schema = ins.schema
            entry.membership_number = ins.membership_number
            entry.serial_number = ins.serial_number
            entry.issue_date = ins.issue_date
            entry.expiry_date = ins.expiry_date

            if (ins.type) {
                const typeId = typeof ins.type === 'object' ? ins.type.id : ins.type
                const selectedType = insuranceTypes.value.find((t: any) => t.id === typeId)
                entry.insurance_type = selectedType || ins.type

                if (typeId) {
                    await loadInsuranceCompaniesForEntry(typeId, insuranceEntries.value.length)
                    
                    if (ins.company) {
                        const companyId = typeof ins.company === 'object' ? ins.company.id : ins.company
                        const selectedCompany = entry.companiesOptions.find((c: any) => c.id === companyId)
                        entry.company = selectedCompany || ins.company

                        if (selectedCompany && selectedCompany._links?.plans) {
                            await loadInsurancePlansForEntry(selectedCompany._links.plans, insuranceEntries.value.length)
                            
                            if (ins.plan) {
                                const planId = typeof ins.plan === 'object' ? ins.plan.id : ins.plan
                                const selectedPlan = entry.plansOptions.find((p: any) => p.id === planId)
                                entry.insurance_plan = selectedPlan || ins.plan
                            }
                        }
                    }
                }
            }
            
            insuranceEntries.value.push(entry)
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

// Track if component is mounted to prevent operations after unmount
const isMounted = ref(false)

onMounted(async () => {
  isMounted.value = true
  await loadInsuranceTypes()
  
  // Initialize with NO entries (will be filled when loading patient data)
  insuranceEntries.value = []
  nextOfKinEntries.value = []
  
  if (route.params.id) {
    await loadPatientData()
  } else {
    // Initialize with one Next of Kin entry (required)
    nextOfKinEntries.value.push(createEmptyNextOfKinEntry())
  }
})

onBeforeUnmount(() => {
  isMounted.value = false
  // Clear refs to help with garbage collection
  insuranceEntries.value = []
  nextOfKinEntries.value = []
})

// Validation schema - simplified for array-based NOK and Insurance
const schema = computed(() => {
  // Only validate the VeeValidate Field components in the form
  // NOK and Insurance arrays are validated manually before submission
  return yup.object().shape({
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
    
    // Clear existing Next of Kin entries and create 1-2 new ones
    nextOfKinEntries.value = []
    const numNOKs = Math.floor(Math.random() * 2) + 1 // 1 or 2
    
    for (let i = 0; i < numNOKs; i++) {
      const nokEntry = createEmptyNextOfKinEntry()
      nokEntry.name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`
      nokEntry.relation = relationshipOptions.value[Math.floor(Math.random() * relationshipOptions.value.length)]
      nokEntry.phone = `+233${Math.floor(Math.random() * 900000000 + 100000000)}`
      nokEntry.other_phone = Math.random() > 0.5 ? `+233${Math.floor(Math.random() * 900000000 + 100000000)}` : ''
      nextOfKinEntries.value.push(nokEntry)
    }
    
    // Clear existing insurance entries
    insuranceEntries.value = []
    
    // Generate 1-2 random insurance entries
    const numInsurances = Math.floor(Math.random() * 2) + 1 // 1 or 2
    
    for (let i = 0; i < numInsurances; i++) {
      const entry = createEmptyInsuranceEntry()
      
      if (insuranceTypes.value.length > 0) {
        const randomInsuranceType = insuranceTypes.value[Math.floor(Math.random() * insuranceTypes.value.length)]
        entry.insurance_type = randomInsuranceType
        
        const typeName = (randomInsuranceType?.name || '').toLowerCase()
        
        // Fill insurance fields based on type
        if (typeName === 'nhia') {
          entry.insurance_schema = `NHIA-${Math.floor(Math.random() * 9000 + 1000)}`
          entry.membership_number = `NHIA${Math.floor(Math.random() * 900000000 + 100000000)}`
          entry.serial_number = `SN${Math.floor(Math.random() * 90000000 + 10000000)}`
          
          const expiryDate = new Date()
          expiryDate.setFullYear(expiryDate.getFullYear() + Math.floor(Math.random() * 3 + 1))
          entry.expiry_date = dayjs(expiryDate) as any
        } else if (typeName === 'private' || typeName === 'corporate') {
          // Load companies first
          if (randomInsuranceType.id) {
            await loadInsuranceCompaniesForEntry(randomInsuranceType.id, i)
            
            if (entry.companiesOptions.length > 0) {
              const randomCompany = entry.companiesOptions[Math.floor(Math.random() * entry.companiesOptions.length)]
              entry.company = randomCompany
              
              // Load plans
              if (randomCompany._links?.plans) {
                await loadInsurancePlansForEntry(randomCompany._links.plans, i)
                
                if (entry.plansOptions.length > 0) {
                  entry.insurance_plan = entry.plansOptions[Math.floor(Math.random() * entry.plansOptions.length)]
                }
              }
            }
          }
          
          entry.membership_number = `PVT${Math.floor(Math.random() * 900000000 + 100000000)}`
          
          const issueDate = new Date()
          issueDate.setMonth(issueDate.getMonth() - Math.floor(Math.random() * 12))
          entry.issue_date = dayjs(issueDate) as any
          
          const expiryDate = new Date(issueDate)
          expiryDate.setFullYear(expiryDate.getFullYear() + 1)
          entry.expiry_date = dayjs(expiryDate) as any
        }
        // Cash & Carry doesn't need additional fields
      }
      
      insuranceEntries.value.push(entry)
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
 * Builds the JSON payload for patient update
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

  // Emergency contacts as array of nested objects
  // API expects singular 'emergency_contact' but we send the first complete entry
  const validNOKs = (nextOfKinEntries.value || []).filter(nok => 
    nok && nok.name && nok.relation && nok.phone
  )
  
  if (validNOKs.length > 0) {
    // Send the first valid NOK as emergency_contact (singular)
    payload.emergency_contact = {
      name: validNOKs[0].name,
      relation: validNOKs[0].relation,
      phone: validNOKs[0].phone,
      other_phone: validNOKs[0].other_phone || '',
    }
    
    // If there are additional NOKs, send them as emergency_contacts (plural) array
    if (validNOKs.length > 1) {
      payload.emergency_contacts = validNOKs.slice(1).map(nok => ({
        name: nok.name,
        relation: nok.relation,
        phone: nok.phone,
        other_phone: nok.other_phone || '',
      }))
    }
  }

  // Insurances as array of nested objects
  payload.insurances = (insuranceEntries.value || []).map(entry => {
    if (!entry) return null
    
    const insuranceType = entry.insurance_type
    const insuranceTypeName = (insuranceType?.name || insuranceType || '').toLowerCase()
    
    const insurance: any = {
      type: (entry.insurance_type as any)?.id || entry.insurance_type,
    }

    // Only add insurance fields if not Cash & Carry
    if (insuranceTypeName !== 'cash & carry' && insuranceType) {
      insurance.schema = entry.insurance_schema || ''
      insurance.plan = (entry.insurance_plan as any)?.id || entry.insurance_plan || null
      insurance.membership_number = entry.membership_number || ''
      insurance.serial_number = entry.serial_number || ''
      insurance.company = (entry.company as any)?.id || entry.company || null
      insurance.issue_date = formatDate(entry.issue_date)
      insurance.expiry_date = formatDate(entry.expiry_date)
    }

    return insurance
  }).filter(insurance => insurance && insurance.type) // Filter out null entries and entries without a type selected

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
  // Manual validation for Next of Kin (at least one complete entry required)
  const validNOKs = (nextOfKinEntries.value || []).filter(nok => 
    nok && nok.name && nok.relation && nok.phone
  )
  
  if (validNOKs.length === 0) {
    message.error(t('validation.at_least_one_nok_required') || 'At least one complete Next of Kin is required (Name, Relationship, and Phone)')
    return
  }
  
  // Manual validation for Insurance entries (if added, must be complete)
  const entries = insuranceEntries.value || []
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i]
    if (!entry) continue
    const entryNum = i + 1
    
    if (!entry.insurance_type) {
      message.error(`Insurance #${entryNum}: Please select an insurance type`)
      return
    }
    
    const typeName = (entry.insurance_type?.name || '').toLowerCase()
    const required = getInsuranceFieldsRequired(entry)
    
    // Validate based on insurance type
    if (typeName !== 'cash & carry') {
      if (required.schema && !entry.insurance_schema) {
        message.error(`Insurance #${entryNum}: Schema is required for ${entry.insurance_type?.name}`)
        return
      }
      if (required.company && !entry.company) {
        message.error(`Insurance #${entryNum}: Company is required for ${entry.insurance_type?.name}`)
        return
      }
      if (required.plan && !entry.insurance_plan) {
        message.error(`Insurance #${entryNum}: Plan is required for ${entry.insurance_type?.name}`)
        return
      }
      if (required.membership_number && !entry.membership_number) {
        message.error(`Insurance #${entryNum}: Membership number is required for ${entry.insurance_type?.name}`)
        return
      }
      if (required.serial_number && !entry.serial_number) {
        message.error(`Insurance #${entryNum}: Serial number is required for ${entry.insurance_type?.name}`)
        return
      }
      if (required.expiry_date && !entry.expiry_date) {
        message.error(`Insurance #${entryNum}: Expiry date is required for ${entry.insurance_type?.name}`)
        return
      }
    }
  }
  
  const payload = buildPayload()
  
  // Log payload for debugging
  console.log('📤 Submitting patient payload:', JSON.stringify(payload, null, 2))
  
  try {
    if (route.params.id) {
      // @ts-ignore
      await patientStore.updatePatient(route.params.id as string, payload)
      message.success(t('patient_create.update_success') || 'Patient updated successfully')
    } else {
      await patientStore.createPatient(payload)
      message.success(t('validation.patient_created_success') || 'Patient created successfully')
    }
    router.push({ name: 'PatientList' })
  } catch (error: any) {
    console.error('❌ Error saving patient:', error)
    
    // Try to extract meaningful error message from API response
    let errorMessage = t('validation.patient_create_failed') || 'Failed to save patient. Please try again.'
    
    if (error?.response?.data) {
      const errorData = error.response.data
      
      // Check for various error message formats
      if (typeof errorData === 'string') {
        errorMessage = errorData
      } else if (errorData.message) {
        errorMessage = errorData.message
      } else if (errorData.error) {
        errorMessage = errorData.error
      } else if (errorData.detail) {
        errorMessage = errorData.detail
      } else {
        // If error data is an object with field-specific errors
        const fieldErrors = Object.entries(errorData)
          .filter(([key, value]) => key !== 'status' && key !== 'statusCode')
          .map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`)
        
        if (fieldErrors.length > 0) {
          errorMessage = fieldErrors.join('\n')
        }
      }
      
      console.log('📋 API Error Details:', errorData)
    }
    
    message.error(errorMessage, 10) // Show for 10 seconds
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

/* Insurance Entry Repeater */
.insurance-entry {
  position: relative;
}

.insurance-entry.border-bottom {
  border-color: #e9ecef !important;
}

.insurance-entry h6 {
  font-weight: 600;
  color: #2c5cc5;
}

.insurance-entry .btn-outline-danger {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.insurance-entry .btn-outline-danger:hover {
  background-color: #dc3545;
  color: white;
}

/* Next of Kin Entry Repeater */
.nok-entry {
  position: relative;
}

.nok-entry.border-bottom {
  border-color: #e9ecef !important;
}

.nok-entry h6 {
  font-weight: 600;
  color: #2c5cc5;
}

.nok-entry .btn-outline-danger {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}

.nok-entry .btn-outline-danger:hover {
  background-color: #dc3545;
  color: white;
}
</style>
