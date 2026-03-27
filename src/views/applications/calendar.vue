<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content content-two">
      <!-- Page Header -->
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Calendar</h4>
        </div>
        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item">
              <router-link to="/dashboard/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">Applications</a>
            </li>
            <li class="breadcrumb-item active">Calendar</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <div class="dropdown">
          <a
            href="javascript:void(0);"
            class="dropdown-toggle btn btn-outline-light btn-sm bg-white text-dark d-inline-flex align-items-center drop-arrow-none"
            data-bs-toggle="dropdown"
          >
            <i class="ti ti-file-export me-1"></i>Export<i
              class="ti ti-chevron-down align-middle ms-1"
            ></i>
          </a>
          <ul class="dropdown-menu dropdown-menu-start">
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1"
                ><i class="ti ti-file-type-pdf me-1"></i>Export as PDF</a
              >
            </li>
            <li>
              <a href="javascript:void(0);" class="dropdown-item rounded-1"
                ><i class="ti ti-file-type-xls me-1"></i>Export as Excel
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#add_event"
            class="btn btn-sm btn-primary"
          >
            <i class="ti ti-plus me-1"></i>Create
          </a>
        </div>
      </div>

      <!-- start Card -->
      <div class="card mb-0">
        <div class="card-body">
          <div id="calendar">
            <FullCalendar ref="calendarEl" :options="calendarOptions" />
          </div>
        </div>
      </div>
      <!-- end card -->
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy;
        <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All Rights
        Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- ========================
        End Page Content
    ========================= -->

  <!-- Add New Event Start -->
  <div class="modal fade" id="add_event">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Event</h5>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <!-- start row -->
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Event Name</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Event Date</label>
                  <div class="input-icon-end position-relative">
                    <a-date-picker
                      v-model="valueOne"
                      class="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                    />
                    <span class="input-icon-addon">
                      <i class="ti ti-calendar text-gray-7"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Start Time</label>
                  <div class="input-icon-end position-relative">
                    <a-time-picker
                      v-model="valueTwo"
                      class="form-control timepicker"
                      placeholder="03 : 05  AM"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">End Time</label>
                  <div class="input-icon-end position-relative">
                    <a-time-picker
                      v-model="valueThree"
                      class="form-control timepicker"
                      placeholder="03 : 05  AM"
                    />
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label">Event Location</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="mb-0">
                  <label class="form-label">Descriptions</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-md btn-light me-2"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-md btn-primary">Add Event</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Add New Event End -->

  <!-- Start Event -->
  <div class="modal fade" id="event_modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-dark modal-bg">
          <div class="modal-title text-white">
            <span id="eventTitle"></span>
          </div>
          <button
            type="button"
            class="btn-close btn-close-modal btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p class="d-flex align-items-center fw-medium text-black mb-3">
            <i class="ti ti-calendar-check text-default me-2"></i>26 Jul,2024 to 31
            Jul,2024
          </p>
          <p class="d-flex align-items-center fw-medium text-black mb-3">
            <i class="ti ti-calendar-check text-default me-2"></i>11:00 AM to 12:15 PM
          </p>
          <p class="d-flex align-items-center fw-medium text-black mb-3">
            <i class="ti ti-map-pin-bolt text-default me-2"></i>Las Vegas, US
          </p>
          <p class="d-flex align-items-center fw-medium text-black mb-0">
            <i class="ti ti-calendar-check text-default me-2"></i>A recurring or repeating
            event is simply any event that you will occur more than once on your calendar.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- End Event -->
</template>

<script>
import { ref } from "vue";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const valueOne = ref();
const valueTwo = ref();
const valueThree = ref();

// Define the getImageUrl function outside the component scope
function getImageUrl(avatar) {
  const imgPath = typeof avatar === "object" && avatar.img ? avatar.img : avatar;

  return new URL(`/src/assets/img/users/${imgPath}`, import.meta.url).href;
}

export default {
  data() {
    return {
      valueOne,
      valueTwo,
      valueThree,
    };
  },
  mounted() {
    const calendarEl = document.getElementById("calendar");

    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, interactionPlugin],
      headerToolbar: {
        start: "today prev,next",
        center: "title",
        end: "dayGridMonth,dayGridWeek,dayGridDay",
      },
      initialView: "dayGridMonth",
      editable: true,
      droppable: true,
      events: [
        {
          title: "Team A",
          start: "2025-05-04",
          backgroundColor: "transparent",
          extendedProps: {
            avatars: [
              { img: "user-01.jpg" },
              { img: "user-02.jpg" },
              { img: "user-03.jpg" },
            ],
          },
        },
        {
          title: "Team B",
          start: "2025-05-06",
          backgroundColor: "transparent",
          extendedProps: {
            avatars: [
              { img: "user-04.jpg" },
              { img: "user-05.jpg" },
              { img: "user-06.jpg" },
            ],
          },
        },
        {
          title: "Meeting",
          start: "2025-05-18",
          backgroundColor: "transparent",
          extendedProps: {
            avatars: [{ img: "user-10.jpg" }, { img: "user-11.jpg" }],
          },
        },
        {
          title: "Follow-up",
          start: "2025-05-20",
          backgroundColor: "transparent",
          extendedProps: {
            avatars: [{ img: "user-12.jpg" }, { img: "user-13.jpg" }],
          },
        },
        {
          title: "Review",
          start: "2025-05-25",
          backgroundColor: "transparent",
          extendedProps: {
            avatars: [{ img: "user-14.jpg" }],
          },
        },
        {
          title: "Wrap-up",
          start: "2025-05-30",
          backgroundColor: "transparent",
          extendedProps: {
            avatars: [{ img: "user-15.jpg" }],
          },
        },
      ],
      eventContent: function (arg) {
        const avatars = arg.event.extendedProps.avatars || [];
        let avatarHtml = "";

        avatars.slice(0, 4).forEach((avatar) => {
          avatarHtml += `<img src="${getImageUrl(
            avatar
          )}" class="avatar" style="width: 24px; height: 24px; border-radius: 50%; margin-right: 2px;">`;
        });

        if (avatars.length > 4) {
          avatarHtml += `<span style="font-size: 12px; background: #ccc; padding: 2px 6px; border-radius: 12px;">+${
            avatars.length - 4
          }</span>`;
        }

        return {
          html: `<div style="display:flex; align-items:center;">${avatarHtml}</div>`,
        };
      },
      eventClick: function (info) {
        document.getElementById("event_modal").style.display = "block";
        document.getElementById("eventTitle").innerText = info.event.title;
      },
      drop: function (info) {
        console.log("Event dropped");
      },
      eventReceive: function (info) {
        console.log("Event added", info.event.title);
      },
    });

    calendar.render();
  },
};
</script>
