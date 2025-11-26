<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content" id="profilePage">
      <!-- Page Header -->
      <div class="mb-3 border-bottom pb-3">
        <h4 class="fw-bold mb-0">Settings</h4>
      </div>
      <!-- End Page Header -->

      <div class="card">
        <div class="card-body p-0">
          <div class="settings-wrapper d-flex">
            <!-- Start Settings Sidebar -->
            <settings-sidebar></settings-sidebar>
            <!-- End Settings Sidebar -->

            <div class="card flex-fill mb-0 border-0 bg-light-500 shadow-none">
              <div class="card-header border-bottom px-0 mx-3">
                <div class="d-flex align-items-center">
                  <h5 class="fw-bold">Working Hours</h5>
                </div>
              </div>
              <div
                class="card-body px-0 mx-3 break-hours-section"
                id="break-hours-section"
              >
                <div
                  class="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom"
                >
                  <h6 class="fs-14 fw-medium">
                    Expected Productive Time<span class="text-danger ms-1">*</span>
                  </h6>
                  <div class="d-flex align-items-center">
                    <div class="input-icon-end position-relative me-2">
                      <a-time-picker
                        class="form-control timepicker"
                        v-model:value="strValue"
                        value-format="HH:mm:ss"
                      />
                      <span class="input-icon-addon">
                        <i class="ti ti-clock text-gray-7"></i>
                      </span>
                    </div>
                    <span class="flex-shrink-0 align-items-center">Hours / Day</span>
                  </div>
                </div>
                <div>
                  <h5 class="fw-bold mb-3">Working Days</h5>

                  <!-- start row -->
                  <div class="row align-items-center row-gap-2 pb-3 mb-3 border-bottom">
                    <div class="col-lg-6">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input me-1"
                          type="checkbox"
                          checked
                          id="check1"
                        />
                        <label for="check1" class="fw-normal">Monday</label>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="d-flex align-items-center">
                        <div class="input-icon-end position-relative me-2">
                          <a-time-picker
                            class="form-control timepicker"
                            v-model:value="strValueone"
                            value-format="HH:mm:ss"
                          />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                        <span class="text-dark me-2">to</span>
                        <div class="input-icon-end position-relative">
                          <a-time-picker
                            class="form-control timepicker"
                            v-model:value="strValuetwo"
                            value-format="HH:mm:ss"
                          />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input me-1"
                          type="checkbox"
                          checked
                          id="check2"
                        />
                        <label for="check2" class="fw-normal">Tuesday</label>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="d-flex align-items-center">
                        <div class="input-icon-end position-relative me-2">
                          <a-time-picker
                            class="form-control timepicker"
                            v-model:value="strValuethree"
                            value-format="HH:mm:ss"
                          />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                        <span class="text-dark me-2">to</span>
                        <div class="input-icon-end position-relative">
                          <a-time-picker
                            class="form-control timepicker"
                            v-model:value="strValuefour"
                            value-format="HH:mm:ss"
                          />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input me-1"
                          type="checkbox"
                          checked
                          id="check3"
                        />
                        <label for="check3" class="fw-normal">Wednesday</label>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="d-flex align-items-center">
                        <div class="input-icon-end position-relative me-2">
                          <a-time-picker
                            class="form-control timepicker"
                            v-model:value="strValuefive"
                            value-format="HH:mm:ss"
                          />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                        <span class="text-dark me-2">to</span>
                        <div class="input-icon-end position-relative">
                          <a-time-picker
                            class="form-control timepicker"
                            v-model:value="strValuesix"
                            value-format="HH:mm:ss"
                          />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input me-1"
                          type="checkbox"
                          checked
                          id="check4"
                        />
                        <label for="check4" class="fw-normal">Thursday</label>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="d-flex align-items-center">
                        <div class="input-icon-end position-relative me-2">
                          <a-time-picker
                            class="form-control timepicker"
                            v-model:value="strValueseven"
                            value-format="HH:mm:ss"
                          />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                        <span class="text-dark me-2">to</span>
                        <div class="input-icon-end position-relative">
                          <a-time-picker
                            class="form-control timepicker"
                            v-model:value="strValueeight"
                            value-format="HH:mm:ss"
                          />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input me-1"
                          type="checkbox"
                          checked
                          id="check5"
                        />
                        <label for="check5" class="fw-normal">Friday</label>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="d-flex align-items-center">
                        <div class="input-icon-end position-relative me-2">
                          <a-time-picker
                            class="form-control timepicker"
                            v-model:value="strValuenine"
                            value-format="HH:mm:ss"
                          />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                        <span class="text-dark me-2">to</span>
                        <div class="input-icon-end position-relative">
                          <a-time-picker
                            class="form-control timepicker"
                            v-model:value="strValueten"
                            value-format="HH:mm:ss"
                          />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input me-1"
                          type="checkbox"
                          id="check6"
                        />
                        <label for="check6" class="fw-normal">Saturday</label>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="d-flex align-items-center">
                        <div class="input-icon-end position-relative me-2">
                          <input type="text" disabled class="form-control timepicker" />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                        <span class="text-dark me-2">to</span>
                        <div class="input-icon-end position-relative">
                          <input type="text" disabled class="form-control timepicker" />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input me-1"
                          type="checkbox"
                          id="check7"
                        />
                        <label for="check7" class="fw-normal">Sunday</label>
                      </div>
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <div class="d-flex align-items-center">
                        <div class="input-icon-end position-relative me-2">
                          <input type="text" disabled class="form-control timepicker" />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                        <span class="text-dark me-2">to</span>
                        <div class="input-icon-end position-relative">
                          <input type="text" disabled class="form-control timepicker" />
                          <span class="input-icon-addon">
                            <i class="ti ti-clock text-gray-7"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->

                  <div class="pb-3 mb-3 border-bottom">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <h5 class="fw-bold">Break Hours</h5>
                      <a href="javascript:void(0);" @click="addBreak" class="add-break"
                        ><i class="ti ti-plus me-1"></i>Add New</a
                      >
                    </div>

                    <!-- start row -->
                    <div
                      class="row align-items-center row-gap-2 mb-3 break1"
                      v-for="(breakItem, index) in breaks"
                      :key="index"
                    >
                      <div class="col-lg-6">
                        <p class="text-dark fw-medium mb-0">{{ breakItem.label }}</p>
                      </div>

                      <div class="col-lg-6">
                        <div class="d-flex align-items-center">
                          <div class="input-icon-end position-relative me-2">
                            <a-time-picker
                              class="form-control timepicker"
                              v-model:value="breakItem.start"
                              value-format="HH:mm:ss"
                            />
                            <span class="input-icon-addon">
                              <i class="ti ti-clock text-gray-7"></i>
                            </span>
                          </div>
                          <span class="text-dark me-2">to</span>
                          <div class="input-icon-end position-relative me-2">
                            <a-time-picker
                              class="form-control timepicker"
                              v-model:value="breakItem.end"
                              value-format="HH:mm:ss"
                            />
                            <span class="input-icon-addon">
                              <i class="ti ti-clock text-gray-7"></i>
                            </span>
                          </div>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-white p-2 border rounded-2 me-2"
                          >
                            <i class="ti ti-edit"></i>
                          </a>
                          <a
                            href="javascript:void(0);"
                            class="btn btn-white p-2 border rounded-2"
                            @click="removeBreak(index)"
                          >
                            <i class="ti ti-trash"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- end row -->
                  </div>

                  <div class="pb-3 mb-3 border-bottom">
                    <div class="d-flex align-items-center justify-content-between mb-3">
                      <h5 class="fw-bold">Lunch Hours</h5>
                    </div>

                    <!-- start row -->
                    <div class="row align-items-center row-gap-2">
                      <div class="col-lg-6">
                        <p class="text-dark fw-medium mb-0">Lunch Break</p>
                      </div>
                      <!-- end col -->
                      <div class="col-lg-6">
                        <div class="d-flex align-items-center">
                          <vue3-select
                            v-model="selected"
                            :options="Workhour"
                            placeholder="45 Mins"
                          />

                          <span class="text-dark flex-shrink-0 mx-2">Lunch at</span>
                          <vue3-select
                            v-model="selectedOne"
                            :options="Workhourone"
                            placeholder="01:00 PM"
                          />
                        </div>
                      </div>
                      <!-- end col -->
                    </div>
                    <!-- end row -->
                  </div>

                  <div class="d-flex align-items-center justify-content-end">
                    <a href="javascript:void(0);" class="btn btn-light me-2">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy; <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All
        Rights Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>
</template>
<script setup>
import { ref, watch } from "vue";

const strValue = ref("09:00:00");
const strValueone = ref("09:00:00");
const strValuetwo = ref("09:00:00");
const strValuethree = ref("09:00:00");
const strValuefour = ref("09:00:00");
const strValuefive = ref("09:00:00");
const strValuesix = ref("09:00:00");
const strValueseven = ref("09:00:00");
const strValueeight = ref("09:00:00");
const strValuenine = ref("09:00:00");
const strValueten = ref("09:00:00");
const strValuetenone = ref("09:00:00");
const strValuetentwo = ref("09:00:00");
watch(strValue, () => {
  console.log(strValue.value);
});

const selected = ref(null);
const selectedOne = ref(null);

const Workhour = ref([
  { label: "Select", value: "Select" },
  { label: "15 Mins", value: "15 Mins" },
  { label: "30 Mins", value: "30 Mins" },
  { label: "45 Mins", value: "45 Mins" },
  { label: "60 Mins", value: "60 Mins" },
]);

const Workhourone = ref([
  { label: "Select", value: "Select" },
  { label: "11 AM", value: "11 AM" },
  { label: "01:00 PM", value: "01:00 PM" },
  { label: "05:00 PM", value: "05:00 PM" },
]);

const breaks = ref([
  {
    label: "Morning Break",
    start: "",
    end: "",
  },
]);

const addBreak = () => {
  breaks.value.push({
    label: `New Break`,
    start: "",
    end: "",
  });
};

const removeBreak = (index) => {
  breaks.value.splice(index, 1);
};

const editBreak = (index) => {
  console.log("Edit break at:", index);
  // Add any edit logic here if needed
};
</script>
