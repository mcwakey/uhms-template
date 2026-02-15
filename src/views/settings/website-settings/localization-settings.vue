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
                <h5 class="fw-bold">Localization</h5>
              </div>
              <div class="card-body px-0 mx-3">
                <form>
                  <!-- start row -->
                  <div class="row border-bottom mb-3">
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Timezone </label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selected"
                            :options="TimeZon"
                            placeholder="(+5:30) GMT"
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Start Week On</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selectedOne"
                            :options="StarSele"
                            placeholder="Select"
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Date Format</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selectedTwo"
                            :options="Datefor"
                            placeholder="18 Mar 2025"
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Time Format</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selectedThree"
                            :options="Timesele"
                            placeholder="12 hrs"
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Default Language</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selectedFour"
                            :options="LangSele"
                            placeholder="English"
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Language Switcher</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <div class="form-check form-switch ps-0">
                            <input
                              class="form-check-input m-0"
                              type="checkbox"
                              checked=""
                            />
                          </div>
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->

                  <!-- start row -->
                  <div class="row border-bottom mb-3">
                    <div class="mb-3">
                      <h5 class="fw-bold mb-0">Currency Information</h5>
                    </div>
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Currency</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selectedFive"
                            :options="RupeSele"
                            placeholder="USD"
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Currency Symbol</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selectedSix"
                            :options="CurrSysel"
                            placeholder="$"
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Currency Position</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selectedSeven"
                            :options="PosiSele"
                            placeholder="$100"
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Decimal Seperator</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selectedEight"
                            :options="SeparSel"
                            placeholder="."
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                    <div class="col-lg-6">
                      <!-- start row -->
                      <div class="row align-items-center mb-3">
                        <div class="col-lg-4">
                          <label class="form-label mb-0">Thousand Seperator</label>
                        </div>
                        <!-- end col -->
                        <div class="col-lg-8">
                          <vue3-select
                            v-model="selectedNine"
                            :options="ThSepSel"
                            placeholder="."
                          />
                        </div>
                        <!-- end col -->
                      </div>
                      <!-- end row -->
                    </div>
                    <!-- end col -->
                  </div>
                  <!-- end row -->

                  <div class="d-flex align-items-center justify-content-end">
                    <a href="javascript:void(0);" class="btn btn-light me-3">Cancel</a>
                    <a href="javascript:void(0);" class="btn btn-primary">Save Changes</a>
                  </div>
                </form>
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
<script>
export default {
  data() {
    return {
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      selectedEight: null,
      selectedNine: null,
      ThSepSel: [
        { label: ".", value: "." },
        { label: ",", value: "," },
        { label: "'", value: "'" },
      ],
      SeparSel: [
        { label: ".", value: "." },
        { label: ",", value: "," },
      ],
      PosiSele: [
        { label: "$100", value: "$100" },
        { label: "100$", value: "100$" },
        { label: "$ 100", value: "$ 100" },
        { label: "100 $", value: "100 $" },
      ],
      CurrSysel: [
        { label: "$", value: "$" },
        { label: "₹", value: "₹" },
        { label: "£", value: "£" },
        { label: "€", value: "€" },
      ],
      RupeSele: [
        { label: "USD", value: "USD" },
        { label: "Dollar", value: "Dollar" },
        { label: "Euro", value: "Euro" },
        { label: "Pound", value: "Pound" },
        { label: "Rupee", value: "Rupee" },
      ],
      LangSele: [
        { label: "English", value: "English" },
        { label: "German", value: "German" },
        { label: "Arabic", value: "Arabic" },
        { label: "French", value: "French" },
      ],
      Timesele: [
        { label: "12 hrs", value: "12 hrs" },
        { label: "24 hrs", value: "24 hrs" },
      ],
      Datefor: ["18 Mar 2025", "Mar 18 2025", "2025 Mar 18"],
      StarSele: [
        { label: "Monday", value: "Monday" },
        { label: "Tuesday", value: "Tuesday" },
        { label: "Wednesday", value: "Wednesday" },
        { label: "Thursday", value: "Thursday" },
        { label: "Friday", value: "Friday" },
        { label: "Saturday", value: "Saturday" },
        { label: "Sunday", value: "Sunday" },
      ],
      TimeZon: [
        { label: "(+5:30) GMT", value: "(+5:30) GMT" },
        { label: "(GMT -10:00) Hawaii", value: "(GMT -10:00) Hawaii" },
        { label: "(GMT -9:30) Taiohae", value: "(GMT -9:30) Taiohae" },
        { label: "(GMT -9:00) Alaska", value: "(GMT -9:00) Alaska" },
        {
          label: "(GMT -8:00) Pacific Time, Canada",
          value: "(GMT -8:00) Pacific Time, Canada",
        },
      ],
    };
  },
};
</script>
