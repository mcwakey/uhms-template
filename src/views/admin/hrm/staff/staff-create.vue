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
            <router-link to="/admin/hrm/staffs"
                ><i class="ti ti-chevron-left me-1 fs-14"></i>Staff</router-link
              >
          </h6>
        </div>
      </div>
      <!-- End Page Header -->
      <div id="add_staff">
        <div class="col-lg-12">
          <div class="card">
            <div class="card">
              <div class="card-header border-bottom border-dashed d-flex align-items-center">
                <h4 class="header-title">Create New Staff Member</h4>
              </div>

              <div class="card-body">
                <div id="progressbarwizard">
                  <ul class="nav nav-pills nav-justified form-wizard-header mb-3">
                    <li class="nav-item">
                      <a
                        href="#account-2"
                        data-bs-toggle="tab"
                        data-toggle="tab"
                        class="nav-link rounded-0 py-2"
                        :class="{ active: currentStep === 0, 'disabled-header': true }"
                      >
                        <i class="bi bi-person-circle fs-18 align-middle me-1"></i>
                        <span class="d-none d-sm-inline">Personal Info</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="#profile-tab-2"
                        data-bs-toggle="tab"
                        data-toggle="tab"
                        class="nav-link rounded-0 py-2"
                        :class="{ active: currentStep === 1, 'disabled-header': true }"
                      >
                        <i class="bi bi-person-workspace fs-18 align-middle me-1"></i>
                        <span class="d-none d-sm-inline">Professional Info</span>
                      </a>
                    </li>
                  </ul>

                  <div class="tab-content b-0 mb-0">
                    <div id="bar" class="progress mb-3" style="height: 7px" :abc="5">
                      <div
                        class="bar progress-bar progress-bar-striped progress-bar-animated bg-success"
                      ></div>
                    </div>

                    <div :class="{ active: currentStep === 0 }" class="tab-pane" id="account-2">
                      <VeeForm
                        :validation-schema="schema1"
                        v-slot="{ errors }"
                        @submit="nextStep"
                        id="personal-info"
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
                              <Field
                                name="gender"
                                v-slot="{ field, errorMessage }"
                                v-model="formData.gender"
                              >
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
                                placeholder="YYYY-MM-DD"
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
                              <Field
                                name="marital_status"
                                v-slot="{ field, errorMessage }"
                                v-model="formData.marital_status"
                              >
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
                              <Field
                                name="religion"
                                v-slot="{ field, errorMessage }"
                                v-model="formData.religion"
                              >
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
                        <!-- <!- - end row -->
                        <div class="bg-light px-3 py-2 mb-3">
                          <h6 class="fw-bold mb-0">Address Information</h6>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label class="form-label"
                                >Country <span class="text-danger">*</span></label
                              >
                              <Field
                                name="country"
                                v-slot="{ field, errorMessage }"
                                v-model="formData.address.country"
                              >
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
                              <label class="form-label"
                                >State <span class="text-danger">*</span></label
                              >
                              <Field
                                name="state"
                                v-slot="{ field, errorMessage }"
                                v-model="formData.address.state"
                              >
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
                              <label class="form-label"
                                >City <span class="text-danger">*</span></label
                              >
                              <Field
                                name="city"
                                v-slot="{ field, errorMessage }"
                                v-model="formData.address.city"
                              >
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
                              <label class="form-label"
                                >Address <span class="text-danger">*</span></label
                              >
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
                            <strong>Required:</strong> At least one emergency contact must be added.
                            Click "Add Contact" to add one.
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
                        <div class="d-flex wizard justify-content-center flex-wrap gap-2 mt-3">
                          <div class="d-flex flex-wrap gap-2">
                            <div class="previous" :class="{ 'disabled-link': prevDisabled }">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-primary"
                                @click="prevStep"
                              >
                                <i class="bx bx-left-arrow-alt me-2"></i>Previous
                              </a>
                            </div>
                            <div class="next" :class="{ 'disabled-link': nextDisabled }">
                              <button class="btn btn-primary mt-3 mt-md-0" type="submit">
                                {{ nextBtn }}
                              </button>
                            </div>
                          </div>
                        </div>
                      </VeeForm>
                    </div>
                    <div :class="{ active: currentStep === 1 }" class="tab-pane" id="profile-tab-2">
                      <VeeForm :validation-schema="schema2" v-slot="{ errors }" @submit="nextStep">
                        <div class="bg-light px-3 py-2 mb-3">
                          <h6 class="fw-bold mb-0">Job Information</h6>
                        </div>
                        <div class="row">
                          <div class="col-lg-6">
                            <div class="mb-3">
                              <label class="form-label">Designation </label>
                              <Field
                                name="designation"
                                v-slot="{ field, errorMessage }"
                                v-model="formData.designation"
                              >
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
                                >Department <span class="text-danger ms-1">*</span></label
                              >
                              <Field
                                name="department"
                                v-slot="{ field, errorMessage }"
                                v-model="formData.department"
                              >
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
                              <label class="form-label">Role </label>
                              <Field
                                name="role"
                                v-slot="{ field, errorMessage }"
                                v-model="formData.role"
                              >
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
                                >Specialization <span class="text-danger ms-1">*</span></label
                              >
                              <Field
                                name="specialization"
                                v-slot="{ field, errorMessage }"
                                v-model="formData.specialization"
                              >
                                <VueMultiselect
                                  v-bind="field"
                                  v-model="formData.specialization"
                                  :options="specialization || []"
                                  :searchable="false"
                                  :close-on-select="true"
                                  :show-labels="false"
                                  :loading="loadingSpecializations"
                                  :key="specializationKey"
                                  placeholder="Select Specialization"
                                  label="name"
                                  track-by="id"
                                  :class="{ 'is-invalid': errorMessage }"
                                  @update:model-value="field.onChange"
                                />
                              </Field>
                              <ErrorMessage name="specialization" class="invalid-feedback" />
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
                                placeholder="YYYY-MM-DD"
                                v-model="formData.employment_date"
                                :class="{ 'is-invalid': errors.employment_date }"
                              />
                              <ErrorMessage name="employment_date" class="invalid-feedback" />
                            </div>
                          </div>
                        </div>
                        <!-- end row -->
                        <div
                          class="bg-light px-3 py-2 mb-3 d-flex justify-content-between align-items-center"
                        >
                          <h6 class="fw-bold mb-0">
                            Educational Information <span class="text-muted">(Optional)</span>
                          </h6>
                          <button
                            type="button"
                            class="btn btn-sm btn-primary"
                            @click="addEducationEntry"
                          >
                            <i class="ti ti-plus me-1"></i>Add Education
                          </button>
                        </div>
                        <div
                          v-if="educationEntries.length === 0"
                          class="text-center text-muted py-4"
                        >
                          <i class="ti ti-school fs-24 mb-2"></i>
                          <p>No educational information added. Click "Add Education" to add one.</p>
                        </div>
                        <div
                          v-for="(education, index) in educationEntries"
                          :key="`education-${index}`"
                          class="mb-4"
                        >
                          <div class="row align-items-end">
                            <div class="col-lg-11">
                              <div class="row">
                                <div class="col-lg-3">
                                  <div class="mb-3">
                                    <label class="form-label">Educational Degree</label>
                                    <Field
                                      :name="`education[${index}].degree_position`"
                                      type="text"
                                      class="form-control"
                                      v-model="education.degree_position"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-3">
                                  <div class="mb-3">
                                    <label class="form-label">Institution</label>
                                    <Field
                                      :name="`education[${index}].institute_hospital`"
                                      type="text"
                                      class="form-control"
                                      v-model="education.institute_hospital"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-2">
                                  <div class="mb-3">
                                    <label class="form-label">From</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      v-model="education.year_from"
                                      placeholder="YYYY-MM-DD"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-2">
                                  <div class="mb-3">
                                    <label class="form-label">To</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      v-model="education.year_to"
                                      placeholder="YYYY-MM-DD"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-2">
                                  <div class="mb-3">
                                    <label class="form-label">Results</label>
                                    <Field
                                      :name="`education[${index}].result_feedback`"
                                      type="text"
                                      class="form-control"
                                      v-model="education.result_feedback"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-1">
                              <div class="mb-3">
                                <button
                                  type="button"
                                  class="btn btn-sm btn-danger"
                                  @click="removeEducationEntry(index)"
                                >
                                  <i class="ti ti-trash"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <hr v-if="index < educationEntries.length - 1" class="my-3" />
                        </div>
                        <div
                          class="bg-light px-3 py-2 mb-3 d-flex justify-content-between align-items-center"
                        >
                          <h6 class="fw-bold mb-0">
                            Work / Experience Information <span class="text-muted">(Optional)</span>
                          </h6>
                          <button
                            type="button"
                            class="btn btn-sm btn-primary"
                            @click="addExperienceEntry"
                          >
                            <i class="ti ti-plus me-1"></i>Add Experience
                          </button>
                        </div>
                        <div
                          v-if="experienceEntries.length === 0"
                          class="text-center text-muted py-4"
                        >
                          <i class="ti ti-briefcase fs-24 mb-2"></i>
                          <p>No work experience added. Click "Add Experience" to add one.</p>
                        </div>
                        <div
                          v-for="(experience, index) in experienceEntries"
                          :key="`experience-${index}`"
                          class="mb-4"
                        >
                          <div class="row align-items-end">
                            <div class="col-lg-11">
                              <div class="row">
                                <div class="col-lg-3">
                                  <div class="mb-3">
                                    <label class="form-label">Job Title</label>
                                    <Field
                                      :name="`experience[${index}].degree_position`"
                                      type="text"
                                      class="form-control"
                                      v-model="experience.degree_position"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-3">
                                  <div class="mb-3">
                                    <label class="form-label">Organization</label>
                                    <Field
                                      :name="`experience[${index}].institute_hospital`"
                                      type="text"
                                      class="form-control"
                                      v-model="experience.institute_hospital"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-2">
                                  <div class="mb-3">
                                    <label class="form-label">From</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      v-model="experience.year_from"
                                      placeholder="YYYY-MM-DD"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-2">
                                  <div class="mb-3">
                                    <label class="form-label">To</label>
                                    <input
                                      type="date"
                                      class="form-control"
                                      v-model="experience.year_to"
                                      placeholder="YYYY-MM-DD"
                                    />
                                  </div>
                                </div>
                                <div class="col-lg-2">
                                  <div class="mb-3">
                                    <label class="form-label">Feedback</label>
                                    <Field
                                      :name="`experience[${index}].result_feedback`"
                                      type="text"
                                      class="form-control"
                                      v-model="experience.result_feedback"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-1">
                              <div class="mb-3">
                                <button
                                  type="button"
                                  class="btn btn-sm btn-danger"
                                  @click="removeExperienceEntry(index)"
                                >
                                  <i class="ti ti-trash"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <hr v-if="index < experienceEntries.length - 1" class="my-3" />
                        </div>
                        <div class="d-flex wizard justify-content-center flex-wrap gap-2 mt-3">
                          <div class="d-flex flex-wrap gap-2">
                            <div class="previous" :class="{ 'disabled-link': prevDisabled }">
                              <a
                                href="javascript:void(0);"
                                class="btn btn-primary"
                                @click="prevStep"
                                >Previous
                              </a>
                            </div>
                            <div class="next" :class="{ 'disabled-link': nextDisabled }">
                              <button class="btn btn-primary mt-3 mt-md-0">{{ nextBtn }}</button>
                            </div>
                          </div>
                        </div>
                      </VeeForm>
                    </div>
                  </div>
                  <!-- tab-content -->
                </div>
                <!-- end #progressbarwizard-->
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
import * as yup from 'yup'
import { Form as VeeForm, Field, ErrorMessage } from 'vee-validate'
import { useAuthStore } from '@/stores/auth'
import { useCreateStore } from '@/stores/createStore'
import { notifyError } from '@/utils/notifications/toast'
import { router } from '@/router'
import { useGetStore } from '@/stores/getStore'
import VueMultiselect from 'vue-multiselect'
import axiosInstance from '@/utils/axios.js'
import constants from '@/assets/json/constants.json'

const currentStep = ref(0)
const prevDisabled = ref(true)
const nextDisabled = ref(false)
const nextBtn = ref('Next Step')

const schema1 = yup
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

const schema2 = yup.object().shape({
  // designation: yup.object().nullable().required('Designation is required').test('not-empty', 'Designation is required', value => value && value.value),
  department: yup
    .object()
    .nullable()
    .required('Department is required')
    .test('not-empty', 'Department is required', (value) => value && value.id),
  // role: yup.object().nullable().required('Role is required').test('not-empty', 'Role is required', value => value && value.id),
  specialization: yup
    .object()
    .nullable()
    .required('Specialization is required')
    .test('not-empty', 'Specialization is required', (value) => value && value.id),
  employment_date: yup.date().required('Employment date is required'),
})

const specialization = ref([])
const roles = ref([])
const departments = ref([])

// Form repeaters
const emergencyContacts = ref([])
const educationEntries = ref([])
const experienceEntries = ref([])

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
onMounted(async () => {
  try {
    loadingDepartments.value = true
    // specialization.value = await useGetStore().getObjects('specializations/');
    roles.value = await useGetStore().getObjects('auth/roles/')
    // roles.value = await axiosInstance.get('auth/roles/');
    console.log('Roles:', roles.value)
    departments.value = await useGetStore().getObjects('departments/')

    // Initialize form repeaters
    // Emergency contacts are required - start with one empty contact
    addEmergencyContact()
    // Education and Experience are optional - don't initialize any
  } catch (error) {
    console.error('Failed to load data:', error)
  } finally {
    loadingDepartments.value = false
  }
})

// Form repeater functions
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

const addEducationEntry = () => {
  educationEntries.value.push({
    degree_position: '',
    institute_hospital: '',
    year_from: null,
    year_to: null,
    result_feedback: '',
    type: 'education',
  })
}

const removeEducationEntry = (index) => {
  educationEntries.value.splice(index, 1)
}

const addExperienceEntry = () => {
  experienceEntries.value.push({
    degree_position: '',
    institute_hospital: '',
    year_from: null,
    year_to: null,
    result_feedback: '',
    type: 'experience',
  })
}

const removeExperienceEntry = (index) => {
  experienceEntries.value.splice(index, 1)
}

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

const auth = useAuthStore()
const store = useCreateStore()

const formCount = 2
const onSubmit = async () => {
  const values = formData.value;
  
  // Helpers
  const getValue = (v) => v?.value || v;
  const getId = (v) => v?.id || v;
  const formatDate = (d) => formatDateToYYYYMMDD(d);
  const ec = emergencyContacts.value[0] || {};

  const payload = {
     // Basic Fields 
     first_name: values.first_name, 
     last_name: values.last_name, 
     other_names: values.other_names || "", 
     email: values.email, 
     phone: values.phone, 
     date_of_birth: formatDate(values.date_of_birth), 
     gender: getValue(values.gender), 
     marital_status: getValue(values.marital_status), 
     religion: getValue(values.religion), 
     
     // Professional Info 
     employment_date: formatDate(values.employment_date), 
     specialization_id: Number(getId(values.specialization)), 
     about_short: values.about_short || "", 
     about_long: values.about_long || "", 
     
     // Nested Objects 
     address: { 
         address: values.address?.address, 
         city: getValue(values.address?.city), 
         state: getValue(values.address?.state), 
         country: getValue(values.address?.country), 
         zip_code: values.address?.zip_code 
     }, 
     emergency_contact: { 
         name: ec.name, 
         phone: ec.phone, 
         relation: getValue(ec.relation) 
     }, 
     
     education_experience: null 
  };

  if (!auth.isAdmin) {
    notifyError('You are not authorized to perform this action')
    return
  }

  try {
    await axiosInstance.post('/staff/', payload)
    // notifySuccess('Staff created successfully') // Assuming notifySuccess exists or use console
    console.log('Staff created successfully')
    router.push({ path: '/hrm/staff' }) // Redirect to list
  } catch (error) {
    console.error('Error creating staff:', error)
    notifyError(error.response?.data?.message || 'Failed to create staff')
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
  // Legacy function kept for compatibility if needed, but onSubmit uses its own logic now.
  // We can just return the same payload logic here if referenced elsewhere.
  // For now, leaving it as a proxy to onSubmit logic or just empty to avoid errors if called.
  // Actually, onSubmit was the only caller in the original code snippet provided.
  return {}
}
const nextStep = async (values, { setErrors }) => {
  console.log('Form values:', values)
  console.log('Current formData:', formData.value)
  console.log('Current step:', currentStep.value)

  try {
    // Create validation object with current form values
    const validationData = {
      ...values,
      // Extract values from multiselect objects for validation
      gender: values.gender || formData.value.gender,
      marital_status: values.marital_status || formData.value.marital_status,
      religion: values.religion || formData.value.religion,
      city: values.city || formData.value.address?.city,
      state: values.state || formData.value.address?.state,
      country: values.country || formData.value.address?.country,
      // Add emergency contacts for validation
      emergency_contact: emergencyContacts.value,
      // For professional info tab
      designation: values.designation || formData.value.designation,
      department: values.department || formData.value.department,
      role: values.role || formData.value.role,
      specialization: values.specialization || formData.value.specialization,
    }

    console.log('Validation data:', validationData)
    console.log('Emergency contacts:', emergencyContacts.value)

    // Validate the current step's schema
    let currentSchema
    if (currentStep.value === 0) {
      currentSchema = schema1
    } else if (currentStep.value === 1) {
      currentSchema = schema2
    }

    if (currentSchema) {
      await currentSchema.validate(validationData, { abortEarly: false })
    }

    // If validation passes, proceed to next step
    if (currentStep.value === formCount - 1) {
      onSubmit()
    } else if (currentStep.value < formCount) {
      currentStep.value++
      console.log('Moving to step:', currentStep.value)
      prevDisabled.value = false
    }
    if (currentStep.value === formCount - 1) nextBtn.value = 'Finish'
  } catch (error) {
    console.error('Validation failed:', error)

    // Display validation errors
    if (error.inner) {
      const errorFields = error.inner.map((err) => err.path).filter(Boolean)
      console.log('Invalid fields:', errorFields)

      // Show detailed validation errors
      const detailedErrors = error.inner.map((err) => `${err.path}: ${err.message}`)
      console.log('Detailed errors:', detailedErrors)

      // Show a notification with invalid fields
      if (errorFields.length > 0) {
        const fieldNames = errorFields.join(', ')
        alert(
          `Please fix the following fields: ${fieldNames}\n\nDetailed errors:\n${detailedErrors.join('\n')}`
        )
      }

      // Set form errors
      const formErrors = {}
      error.inner.forEach((err) => {
        if (err.path) {
          formErrors[err.path] = err.message
        }
      })
      setErrors(formErrors)
    } else {
      console.error('Single validation error:', error.message)

      // Handle emergency contacts validation error specifically
      if (error.message.includes('emergency contact')) {
        alert(
          `Validation error: ${error.message}\n\nPlease ensure you have at least one emergency contact with name, phone number, and relationship filled.`
        )
      } else {
        alert(`Validation error: ${error.message}`)
      }
    }
  }
}

const prevStep = () => {
  if (currentStep.value === 1) {
    prevDisabled.value = true
    currentStep.value--
  } else currentStep.value--
  if (currentStep.value < formCount) {
    nextDisabled.value = false
    nextBtn.value = 'Next Step'
  }
}
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
