<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
		Start Page Content
	========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content" id="profilePage">
      <!-- Page Header -->
      <div class="mb-3 border-bottom pb-3">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <h4 class="fw-bold mb-0 me-2">Holidays</h4>
            <span class="badge badge-soft-primary border border-primary fw-medium"
              >Total Holidays : 33</span
            >
          </div>
          <a
            href="javascript:void(0);"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add_holiday"
            ><i class="ti ti-plus me-1"></i>Add Holiday</a
          >
        </div>
      </div>
      <!-- End Page Header -->

      <!-- Table List -->
      <div class="table-responsive border">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Days'">
              <div>{{ record.Days }}</div>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item">
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="dropdown"
                  class="btn p-1 btn-white border"
                >
                  <i class="ti ti-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu p-2">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit_holiday"
                      >Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_holiday"
                      >Delete</a
                    >
                  </li>
                </ul>
              </div>
            </template>
          </template>
        </a-table>
      </div>
      <!-- /Table List -->
    </div>
    <!-- End Content -->
  </div>

  <!-- ========================
		End Page Content
	========================= -->

  <!-- Start Add Categories -->
  <div id="add_holiday" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Add Holiday</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Title<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea class="form-control" rows="3"></textarea>
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Date<span class="text-danger ms-1">*</span></label
              >
              <div class="input-icon-end position-relative">
                <date-picker
                  v-model="startdate"
                  value="29-02-2020"
                  class="datetimepicker form-control"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
                />
                <span class="input-icon-addon">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Add Holiday</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Categories -->

  <!-- Start Edit Categories -->
  <div id="edit_holiday" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="text-dark modal-title fw-bold">Edit Holiday</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Title<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" value=" Mosquito Awareness Week " />
            </div>
            <div class="mb-3">
              <label class="form-label">Description</label>
              <textarea class="form-control" rows="3">
Encourage communities to eliminate mosquito breeding sites, especially standing water.</textarea
              >
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Date<span class="text-danger ms-1">*</span></label
              >
              <div class="input-icon-end position-relative">
                <date-picker
                  v-model="startdate"
                  value="29-02-2020"
                  class="datetimepicker form-control"
                  :editable="true"
                  :clearable="false"
                  :input-format="dateFormat"
                />
                <span class="input-icon-addon">
                  <i class="ti ti-calendar"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Edit Categories -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_holiday">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0"
          />
          <div class="mb-3">
            <span class="avatar avatar-lg bg-danger text-white"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="fw-bold mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure want to delete?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-danger position-relative z-1"
              data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Delete Modal  -->
</template>
<script>
const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Date",
    dataIndex: "Date",
    key: "Date",
    sorter: {
      compare: (a, b) => (a.Date.toLowerCase() > b.Date.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Days",
    dataIndex: "Days",
    key: "Days",
    sorter: {
      compare: (a, b) => (a.Days.toLowerCase() > b.Days.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    Name: "New Year",
    Date: "01 Jan 2025",
    Days: "Monday",
  },
  {
    Name: "World Braille Day",
    Date: "04 Jan 2025",
    Days: "Saturday",
  },
  {
    Name: "Republic Day of India",
    Date: "26 Jan 2025",
    Days: "Sunday",
  },
  {
    Name: "World Cancer Day",
    Date: "04 Feb 2025",
    Days: "Tuesday",
  },
  {
    Name: "World Birth Defects Day",
    Date: "03 Mar 2025",
    Days: "Saturday",
  },
  {
    Name: "International Women's Day",
    Date: "08 May 2025",
    Days: "Saturday",
  },
  {
    Name: "Good Friday",
    Date: "29 Mar 2025",
    Days: "Friday",
  },
  {
    Name: "Easter Monday",
    Date: "01 Apr 2025",
    Days: "Tuesday",
  },
  {
    Name: "May Day",
    Date: "01 May 2025",
    Days: "Thursday",
  },
  {
    Name: "Memorial Day",
    Date: "27 May 2025",
    Days: "Tuesday",
  },
];
import { ref } from "vue";
const valueOne = ref();
const currentDate = ref(new Date());
export default {
  data() {
    return {
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      searchQuery: "",
      data,
      columns,
    };
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Name.toLowerCase().includes(query) ||
          record.Date.toLowerCase().includes(query) ||
          record.Days.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
