<template>
  <!-- Sidenav Menu Start -->
  <div class="sidebar" id="sidebar">
    <!-- Start Logo -->
    <div class="sidebar-logo">
      <div>
        <!-- Logo Normal -->
        <router-link to="/dashboard/admin-dashboard" class="logo logo-normal">
          <img src="@/assets/img/logo.svg" alt="Logo" />
        </router-link>

        <!-- Logo Small -->
        <router-link to="/dashboard/admin-dashboard" class="logo-small">
          <img src="@/assets/img/logo-small.svg" alt="Logo" />
        </router-link>

        <!-- Logo Dark -->
        <router-link to="/dashboard/admin-dashboard" class="dark-logo">
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
    <div class="sidebar-inner one" data-simplebar>
      <simplebar id="scrollbar" class="h-100" ref="scrollbar">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="menu-title"><span>Main Menu</span></li>
            <li>
              <ul>
                <li
                  :class="{
                    active: isActiveRoute('/patient/patient-dashboard'),
                  }"
                >
                  <router-link to="/patient/patient-dashboard">
                    <i class="ti ti-layout-dashboard"></i><span>Dashboard</span>
                  </router-link>
                </li>
                <li
                  :class="{
                    active: isActiveRoute([
                      '/patient/patient-appointments',
                      '/patient/patient-doctor-details',
                      '/patient/patient-appointment-details',
                    ]),
                  }"
                >
                  <router-link to="/patient/patient-appointments">
                    <i class="ti ti-calendar-check"></i><span>Appointments</span>
                  </router-link>
                </li>

                <li
                  :class="{
                    active: isActiveRoute('/patient/patient-doctors'),
                  }"
                >
                  <router-link to="/patient/patient-doctors">
                    <i class="ti ti-stethoscope"></i><span>Doctors</span>
                  </router-link>
                </li>
                <li
                  :class="{
                    active: isActiveRoute([
                      '/patient/patient-prescriptions',
                      '/patient/patient-prescription-details',
                    ]),
                  }"
                >
                  <router-link to="/patient/patient-prescriptions">
                    <i class="ti ti-prescription"></i><span>Prescriptions</span>
                  </router-link>
                </li>

                <li
                  :class="{
                    active: isActiveRoute('/patient/patient-invoices'),
                  }"
                >
                  <router-link to="/patient/patient-invoices">
                    <i class="ti ti-star"></i><span>Invoice</span>
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
                        to="/patient/settings/patient-profile-settings"
                        :class="{
                          active: isActiveRoute(
                            '/patient/settings/patient-profile-settings'
                          ),
                        }"
                        >Profile Settings</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/patient/settings/patient-password-settings"
                        :class="{
                          active: isActiveRoute(
                            '/patient/settings/patient-password-settings'
                          ),
                        }"
                        >Change Password</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/patient/settings/patient-notifications-settings"
                        :class="{
                          active: isActiveRoute(
                            '/patient/settings/patient-notifications-settings'
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
    isActiveRoute(routes) {
      return routes.includes(this.$route.path);
    },
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

    const isActiveRoute = (paths) => {
      if (Array.isArray(paths)) {
        return paths.some((path) => route.path.startsWith(path));
      }
      return route.path.startsWith(paths);
    };

    const isSubmenuActive = (key) => {
      const submenuRoutes = {
        settings: [
          "/patient/settings/patient-profile-settings",
          "/patient/settings/patient-password-settings",
          "/patient/settings/patient-notifications-settings",
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

<!-- <script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

// Access the current route
const route = useRoute();
const openSubmenu = ref(null);

// Toggle the submenu visibility
const toggleSubmenu = (menuKey) => {
  openSubmenu.value = openSubmenu.value === menuKey ? null : menuKey;
};

// Check if a route is active
const isActiveRoute = (paths) => {
  if (Array.isArray(paths)) {
    return paths.some((path) => route.path.startsWith(path));
  }
  return route.path.startsWith(paths);
};

// Check if any submenu is active based on the current route
const isSubmenuActive = (key) => {
  const submenuRoutes = {
    settings: [
      "/patient/settings/patient-profile-settings",
      "/patient/settings/patient-password-settings",
      "/patient/settings/patient-notifications-settings",
    ],
  };
  return submenuRoutes[key]?.some((routePath) => route.path.startsWith(routePath));
};

// Computed example for specific route matches
</script> -->
