<template>
  <!-- Sidenav Menu Start -->
  <div class="sidebar" id="sidebar">
    <!-- Start Logo -->
    <div class="sidebar-logo">
      <div>
        <!-- Logo Normal -->
        <router-link to="/dashboard/" class="logo logo-normal">
          <img src="@/assets/img/logo.svg" alt="Logo" />
        </router-link>

        <!-- Logo Small -->
        <router-link to="/dashboard/" class="logo-small">
          <img src="@/assets/img/logo-small.svg" alt="Logo" />
        </router-link>

        <!-- Logo Dark -->
        <router-link to="/dashboard/" class="dark-logo">
          <img src="@/assets/img/logo-white.svg" alt="Logo" />
        </router-link>
      </div>
      <button
        class="sidenav-toggle-btn btn border-0 p-0 active"
        id="toggle_btn"
        @click="toggleSidebar"
      >
        <i class="ti ti-arrow-left"></i>
      </button>

      <!-- Sidebar Menu Close -->
      <button class="sidebar-close" @click="closeSidebar">
        <i class="ti ti-x align-middle"></i>
      </button>
    </div>
    <!-- End Logo -->

    <!-- Sidenav Menu -->
    <div class="sidebar-inner" data-simplebar>
      <simplebar id="scrollbar" class="h-100" ref="scrollbar">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="menu-title"><span>Main Menu</span></li>
            <li>
              <ul>
                <li :class="{ active: isActiveRoute('/doctor/doctor-dashboard') }">
                  <router-link to="/doctor/doctor-dashboard">
                    <i class="ti ti-layout-dashboard"></i><span>Dashboard</span>
                  </router-link>
                </li>
                <li class="submenu">
                  <a
                    href="javascript:void(0);"
                    @click="toggleSubmenu('Appointments')"
                    :class="{
                      subdrop:
                        openSubmenu === 'Appointments' || isSubmenuActive('Appointments'),
                      active:
                        openSubmenu === 'Appointments' || isSubmenuActive('Appointments'),
                    }"
                  >
                    <i class="ti ti-calendar-check"></i><span>Appointments</span>
                    <span class="menu-arrow"></span>
                  </a>
                  <ul
                    :class="{ subdrop: openSubmenu === 'Appointments' }"
                    :style="{
                      display: openSubmenu === 'Appointments' ? 'block' : 'none',
                    }"
                  >
                    <li
                      :class="{
                        active: isActiveRoute([
                          '/doctor/doctors-appointments',
                          '/doctor/doctors-appointment-details',
                          '/doctor/online-consultations',
                        ]),
                      }"
                    >
                      <router-link
                        to="/doctor/doctors-appointments"
                        :class="{ active: isActiveRoute('/doctor/doctors-appointments') }"
                        >Appointments</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/doctor/online-consultations"
                        :class="{ active: isActiveRoute('/doctor/online-consultations') }"
                        >Online Consultations</router-link
                      >
                    </li>
                  </ul>
                </li>
                <li :class="{ active: isActiveRoute('/doctor/doctors-schedules') }">
                  <router-link to="/doctor/doctors-schedules">
                    <i class="ti ti-clock-check"></i><span>My Schedule</span>
                  </router-link>
                </li>
                <li
                  :class="{
                    active: isActiveRoute([
                      '/doctor/doctors-prescriptions',
                      '/doctor/doctors-prescription-details',
                    ]),
                  }"
                >
                  <router-link to="/doctor/doctors-prescriptions">
                    <i class="ti ti-prescription"></i><span>Prescriptions</span>
                  </router-link>
                </li>
                <li :class="{ active: isActiveRoute('/doctor/doctors-leaves') }">
                  <router-link to="/doctor/doctors-leaves">
                    <i class="ti ti-calendar-x"></i><span>Leave</span>
                  </router-link>
                </li>
                <li :class="{ active: isActiveRoute('/doctor/doctors-reviews') }">
                  <router-link to="/doctor/doctors-reviews">
                    <i class="ti ti-star"></i><span>Reviews</span>
                  </router-link>
                </li>
                <li class="submenu">
                  <a
                    href="javascript:void(0);"
                    @click="toggleSubmenu('settings')"
                    :class="{
                      subdrop: openSubmenu === 'settings' || isSubmenuActive('settings'),
                      active: openSubmenu === 'settings' || isSubmenuActive('settings'),
                    }"
                  >
                    <i class="ti ti-settings"></i><span>Settings</span>
                    <span class="menu-arrow"></span>
                  </a>
                  <ul
                    :class="{ subdrop: openSubmenu === 'settings' }"
                    :style="{ display: openSubmenu === 'settings' ? 'block' : 'none' }"
                  >
                    <li>
                      <router-link
                        to="/doctor/settings/doctors-profile-settings"
                        :class="{
                          active: isActiveRoute(
                            '/doctor/settings/doctors-profile-settings'
                          ),
                        }"
                        >Profile Settings</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/doctor/settings/doctors-password-settings"
                        :class="{
                          active: isActiveRoute(
                            '/doctor/settings/doctors-password-settings'
                          ),
                        }"
                        >Change Password</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/doctor/settings/doctors-notification-settings"
                        :class="{
                          active: isActiveRoute(
                            '/doctor/settings/doctors-notification-settings'
                          ),
                        }"
                        >Notifications</router-link
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="sidebar-footer border-top mt-3">
          <div class="trial-item mt-0 p-3 text-center">
            <div
              class="trial-item-icon rounded-4 mb-3 p-2 text-center shadow-sm d-inline-flex"
            >
              <img src="@/assets/img/icons/sidebar-icon.svg" alt="img" />
            </div>
            <div>
              <h6 class="fs-14 fw-semibold mb-1">Upgrade To Pro</h6>
              <p class="fs-13 mb-0">
                Check 1 min video and begin use Preclinic like a pro
              </p>
            </div>
            <a href="javascript:void(0);" class="close-icon shadow-sm"
              ><i class="ti ti-x"></i
            ></a>
          </div>
        </div>
      </simplebar>
    </div>
  </div>
  <!-- Sidenav Menu End -->
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router";
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";

export default {
  components: {
    simplebar,
  },
  mounted() {
    this.initMouseoverListener();
  },
  methods: {
    toggleSidebar() {
      const body = document.body;
      body.classList.toggle("mini-sidebar");
    },
    closeSidebar() {
      const body = document.body;
      body.classList.remove("slide-nav");
    },
    initMouseoverListener() {
      document.addEventListener("mouseover", this.handleMouseover);
    },
    handleMouseover(e) {
      e.stopPropagation();

      const body = document.body;
      const toggleBtn = document.getElementById("toggle_btn");

      if (body.classList.contains("mini-sidebar")) {
        const target = e.target.closest(".sidebar, .header-left");

        if (target) {
          body.classList.add("expand-menu");
        } else if (body.classList.contains("expand-menu")) {
          body.classList.remove("expand-menu");
        }

        e.preventDefault();
      }
    },
  },
  beforeUnmount() {
    document.removeEventListener("mouseover", this.handleMouseover);
  },
  setup() {
    const route = useRoute();
    const openSubmenu = ref(null);

    const toggleSubmenu = (menuKey) => {
      openSubmenu.value = openSubmenu.value === menuKey ? null : menuKey;
    };

    const isActiveRoute = (path) => {
      return route.path.startsWith(path);
    };

    const isSubmenuActive = (key) => {
      const submenuRoutes = {
        settings: [
          "/doctor/settings/doctors-profile-settings",
          "/doctor/settings/doctors-password-settings",
          "/doctor/settings/doctors-notification-settings",
        ],
        Appointments: [
          "/doctor/doctors-appointments",
          "/doctor/doctors-appointment-details",
          "/doctor/online-consultations",
        ],
      };
      return submenuRoutes[key]?.some((routePath) => route.path.startsWith(routePath));
    };

    return {
      route,
      openSubmenu,
      toggleSubmenu,
      isActiveRoute,
      isSubmenuActive,
    };
  },
};
</script>
