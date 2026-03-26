<template>
  <!-- Topbar Start -->
  <header class="navbar-header">
    <div class="page-container topbar-menu">
      <div class="d-flex align-items-center gap-2">
        <!-- Logo -->
        <router-link to="/dashboard/" class="logo">
          <!-- Logo Normal -->
          <span class="logo-light">
            <span class="logo-lg"><img src="@/assets/img/logo.svg" alt="logo" /></span>
            <span class="logo-sm"
              ><img src="@/assets/img/logo-small.svg" alt="small logo"
            /></span>
          </span>

          <!-- Logo Dark -->
          <span class="logo-dark">
            <span class="logo-lg"
              ><img src="@/assets/img/logo-white.svg" alt="dark logo"
            /></span>
          </span>
        </router-link>

        <!-- Sidebar Mobile Button -->
        <a id="mobile_btn" class="mobile-btn" href="#sidebar" @click="toggleSidebar1">
          <i class="ti ti-menu-deep fs-24"></i>
        </a>

        <button class="sidenav-toggle-btn btn border-0 p-0 active" id="toggle_btn2">
          <i class="ti ti-arrow-right"></i>
        </button>

        <!-- Search -->
        <div class="me-auto d-flex align-items-center header-search d-lg-flex d-none">
          <!-- Search -->
          <div class="input-icon-start position-relative me-2">
            <span class="input-icon-addon">
              <i class="ti ti-search"></i>
            </span>
            <input type="text" class="form-control shadow-sm" :placeholder="t('header.search')" />
            <span
              class="input-icon-addon text-dark shadow fs-18 d-inline-flex p-0 header-search-icon"
              ><i class="ti ti-command"></i
            ></span>
          </div>
          <!-- /Search -->
        </div>
      </div>

      <div class="d-flex align-items-center">
        <!-- Search for Mobile -->
        <div class="header-item d-flex d-lg-none me-2">
          <button
            class="topbar-link btn btn-icon"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
            type="button"
          >
            <i class="ti ti-search fs-16"></i>
          </button>
        </div>

        <!-- AI Assistance -->
        <a href="javascript:void(0);" class="btn btn-liner-gradient me-3 d-lg-flex d-none"
          >{{ t('header.ai_assistance') }}<i class="ti ti-chart-bubble-filled ms-1"></i
        ></a>
        <!-- AI Assistance -->

        

        <!-- Localization Dropdown -->
        <div class="header-item">
          <div class="dropdown me-3">
            <a
              href="javascript:void(0);"
              class="topbar-link dropdown-toggle drop-arrow-none"
              data-bs-toggle="dropdown"
            >
              <img
                v-if="locale === 'en'"
                src="@/assets/img/flags/us.svg"
                class="rounded-circle"
                width="24"
                alt="flag"
              />
              <img
                v-if="locale === 'fr'"
                src="@/assets/img/flags/fr.svg"
                class="rounded-circle"
                width="24"
                alt="flag"
              />
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <a
                href="javascript:void(0);"
                class="dropdown-item d-flex align-items-center"
                @click="setLanguage('en')"
              >
                <img
                  src="@/assets/img/flags/us.svg"
                  class="rounded-circle me-2"
                  width="20"
                  alt="flag"
                />
                {{ t('header.english') }}
              </a>
              <a
                href="javascript:void(0);"
                class="dropdown-item d-flex align-items-center"
                @click="setLanguage('fr')"
              >
                <img
                  src="@/assets/img/flags/fr.svg"
                  class="rounded-circle me-2"
                  width="20"
                  alt="flag"
                />
                {{ t('header.french') }}
              </a>
            </div>
          </div>
        </div>

        <!-- Appointment -->
        <!-- <div class="header-item">
          <div class="dropdown me-2">
            <router-link to="/appointments/new-appointment" class="btn topbar-link"
              ><i class="ti ti-calendar-due"></i
            ></router-link>
          </div>
        </div> -->
        <!-- Appointment -->

        <!-- Settings -->
        <div class="header-item">
          <div class="dropdown me-2">
            <a href="javascript:void(0);" class="btn topbar-link"><i class="ti ti-settings-2"></i></a>
          </div>
        </div>
        <!-- Settings -->

        <!-- Light/Dark Mode Button -->
        <div class="header-item d-none d-sm-flex me-2">
          <button
            class="topbar-link btn btn-icon topbar-link"
            id="light-dark-mode"
            type="button" @click="toggleDarkMode"
          >
            <i class="fs-16 ti" :class="[isDarkMode ? 'ti-sun' : 'ti-moon']"></i>
          </button>
        </div>

        <!-- Notification Dropdown -->
        <div class="header-item">
          <div class="dropdown me-3">
            <button
              class="topbar-link btn btn-icon topbar-link dropdown-toggle drop-arrow-none"
              data-bs-toggle="dropdown"
              data-bs-offset="0,24"
              type="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i class="ti ti-bell-check fs-16 animate-ring"></i>
              <span class="notification-badge"></span>
            </button>

            <div
              class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg"
              style="min-height: 300px"
            >
              <div class="p-2 border-bottom">
                <div class="row align-items-center">
                  <div class="col">
                    <h6 class="m-0 fs-16 fw-semibold">{{ t('header.notifications') }}</h6>
                  </div>
                </div>
              </div>

              <!-- Notification Body -->
              <div
                class="notification-body position-relative z-2 rounded-0"
                data-simplebar
              >
                <!-- Item-->
                <div
                  class="dropdown-item notification-item py-3 text-wrap border-bottom"
                  id="notification-1"
                >
                  <div class="d-flex">
                    <div class="me-2 position-relative flex-shrink-0">
                      <img
                        src="@/assets/img/doctors/doctor-01.jpg"
                        class="avatar-md rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow-1">
                      <p class="mb-0 fw-medium text-dark">Dr. Smith</p>
                      <p class="mb-1 text-wrap">
                        updated the
                        <span class="fw-medium text-dark">surgery</span> schedule.
                      </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-12"
                          ><i class="ti ti-clock me-1"></i>4 min ago</span
                        >
                        <div
                          class="notification-action d-flex align-items-center float-end gap-2"
                        >
                          <a
                            href="javascript:void(0);"
                            class="notification-read rounded-circle bg-danger"
                            data-bs-toggle="tooltip"
                            title=""
                            data-bs-original-title="Make as Read"
                            aria-label="Make as Read"
                          ></a>
                          <button
                            class="btn rounded-circle p-0"
                            data-dismissible="#notification-1"
                          >
                            <i class="ti ti-x"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item-->
                <div
                  class="dropdown-item notification-item py-3 text-wrap border-bottom"
                  id="notification-2"
                >
                  <div class="d-flex">
                    <div class="me-2 position-relative flex-shrink-0">
                      <img
                        src="@/assets/img/doctors/doctor-06.jpg"
                        class="avatar-md rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow-1">
                      <p class="mb-0 fw-medium text-dark">Dr. Patel</p>
                      <p class="mb-1 text-wrap">
                        completed a
                        <span class="fw-medium text-dark">follow-up</span> report for
                        patient <span class="fw-medium text-dark">Emily</span>.
                      </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-12"
                          ><i class="ti ti-clock me-1"></i>8 min ago</span
                        >
                        <div
                          class="notification-action d-flex align-items-center float-end gap-2"
                        >
                          <a
                            href="javascript:void(0);"
                            class="notification-read rounded-circle bg-danger"
                            data-bs-toggle="tooltip"
                            title=""
                            data-bs-original-title="Make as Read"
                            aria-label="Make as Read"
                          ></a>
                          <button
                            class="btn rounded-circle p-0"
                            data-dismissible="#notification-2"
                          >
                            <i class="ti ti-x"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item-->
                <div
                  class="dropdown-item notification-item py-3 text-wrap border-bottom"
                  id="notification-3"
                >
                  <div class="d-flex">
                    <div class="me-2 position-relative flex-shrink-0">
                      <img
                        src="@/assets/img/doctors/doctor-02.jpg"
                        class="avatar-md rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow-1">
                      <p class="mb-0 fw-medium text-dark">Emily</p>
                      <p class="mb-1 text-wrap">
                        booked an appointment with
                        <span class="fw-medium text-dark">Dr. Patel</span> for
                        <span class="fw-medium text-dark">April 15</span>
                      </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-12"
                          ><i class="ti ti-clock me-1"></i>15 min ago</span
                        >
                        <div
                          class="notification-action d-flex align-items-center float-end gap-2"
                        >
                          <a
                            href="javascript:void(0);"
                            class="notification-read rounded-circle bg-danger"
                            data-bs-toggle="tooltip"
                            title=""
                            data-bs-original-title="Make as Read"
                            aria-label="Make as Read"
                          ></a>
                          <button
                            class="btn rounded-circle p-0"
                            data-dismissible="#notification-3"
                          >
                            <i class="ti ti-x"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Item-->
                <div
                  class="dropdown-item notification-item py-3 text-wrap"
                  id="notification-4"
                >
                  <div class="d-flex">
                    <div class="me-2 position-relative flex-shrink-0">
                      <img
                        src="@/assets/img/doctors/doctor-07.jpg"
                        class="avatar-md rounded-circle"
                        alt=""
                      />
                    </div>
                    <div class="flex-grow-1">
                      <p class="mb-0 fw-medium text-dark">Amelia</p>
                      <p class="mb-1 text-wrap">
                        completed the
                        <span class="fw-medium text-dark">pre-visit</span> health
                        questionnaire.
                      </p>
                      <div class="d-flex justify-content-between align-items-center">
                        <span class="fs-12"
                          ><i class="ti ti-clock me-1"></i>20 min ago</span
                        >
                        <div
                          class="notification-action d-flex align-items-center float-end gap-2"
                        >
                          <a
                            href="javascript:void(0);"
                            class="notification-read rounded-circle bg-danger"
                            data-bs-toggle="tooltip"
                            title=""
                            data-bs-original-title="Make as Read"
                            aria-label="Make as Read"
                          ></a>
                          <button
                            class="btn rounded-circle p-0"
                            data-dismissible="#notification-4"
                          >
                            <i class="ti ti-x"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- View All-->
              <div class="p-2 rounded-bottom border-top text-center">
                <a href="javascript:void(0);" class="text-center text-decoration-underline fs-14 mb-0">
                  {{ t('header.view_all_notifications') }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- User Dropdown -->
        <div
          class="dropdown profile-dropdown d-flex align-items-center justify-content-center"
        >
          <a
            href="javascript:void(0);"
            class="topbar-link dropdown-toggle drop-arrow-none position-relative"
            data-bs-toggle="dropdown"
            data-bs-offset="0,22"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <img
              src="@/assets/img/users/user-01.jpg"
              width="32"
              class="rounded-circle d-flex"
              alt="user-image"
            />
            <span class="online text-success"
              ><i
                class="ti ti-circle-filled d-flex bg-white rounded-circle border border-1 border-white"
              ></i
            ></span>
          </a>
          <div class="dropdown-menu dropdown-menu-end dropdown-menu-md p-2">
            <div class="d-flex align-items-center bg-light rounded-3 p-2 mb-2">
              <img
                src="@/assets/img/users/user-01.jpg"
                class="rounded-circle"
                width="42"
                height="42"
                alt=""
              />
              <div class="ms-2">
                <p class="fw-medium text-dark mb-0">{{ userDisplayName }}</p>
                <span class="d-block fs-13">{{ userRoleDisplay }}</span>
              </div>
            </div>

            <!-- Item-->
            <a href="javascript:void(0);" class="dropdown-item">
              <i class="ti ti-user-circle me-1 align-middle"></i>
              <span class="align-middle">{{ t('header.profile_settings') }}</span>
            </a>

            <!-- Item-->
            <a href="javascript:void(0);" class="dropdown-item">
              <i class="ti ti-settings me-1 align-middle"></i>
              <span class="align-middle">{{ t('header.account_settings') }}</span>
            </a>

            <!-- item -->
            <div
              class="form-check form-switch form-check-reverse d-flex align-items-center justify-content-between dropdown-item mb-0"
            >
              <label class="form-check-label" for="notify"
                ><i class="ti ti-bell me-1"></i>{{ t('header.notifications') }}</label
              >
              <input
                class="form-check-input me-0"
                type="checkbox"
                role="switch"
                id="notify"
              />
            </div>

            <!-- Item-->
            <router-link to="/finance/transactions" class="dropdown-item">
              <i class="ti ti-transition-right me-1 align-middle"></i>
              <span class="align-middle">{{ t('header.transactions') }}</span>
            </router-link>

            <!-- Item-->
            <div class="pt-2 mt-2 border-top">
              <router-link to="/" class="dropdown-item text-danger" @click.prevent="onLogout">
                <i class="ti ti-logout me-1 fs-17 align-middle"></i>
                <span class="align-middle">{{ t('header.logout') }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Topbar End -->

  <theme-settings></theme-settings>
</template>

<script setup lang="ts">
/**
 * LayoutsHeader Component
 *
 * The main header component for the application layout.
 * Contains the logo, sidebar toggle, search, quick actions (appointments, settings),
 * dark mode toggle, notifications, localization, and user profile menu.
 *
 * Features:
 * - Sidebar visibility toggle
 * - Dark/Light mode switching with persistence
 * - Localization (Language switching)
 * - Notification dropdown
 * - User profile actions
 * - Dynamic user information from AuthStore
 */
import { ref, onMounted, computed } from "vue";
import { useI18n } from 'vue-i18n';
import { useAuthStore } from '@/stores/authStore';
import { notifySuccess, notifyError } from '@/utils/notifications/toast'
import { storeToRefs } from 'pinia';

const { t, locale } = useI18n();
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const isDarkMode = ref(false);

/**
 * Toggles the sidebar navigation on mobile/tablet views.
 * Adds/removes the 'slide-nav' class on the body element.
 */
const toggleSidebar1 = () => {
  const body = document.body;
  body.classList.toggle("slide-nav");
};

/**
 * Sets the theme attribute on the document element.
 * @param {boolean} enabled - True for dark mode, false for light mode
 */
const setThemeAttribute = (enabled: boolean) => {
  document.documentElement.setAttribute("data-bs-theme", enabled ? "dark" : "light");
};

/**
 * Toggles the application theme between Dark and Light mode.
 * Persists the preference to localStorage.
 */
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem("dark", isDarkMode.value ? "enabled" : "disabled");
  setThemeAttribute(isDarkMode.value);
};

/**
 * Updates the active locale for the application.
 * @param {string} lang - The locale code (e.g., 'en', 'fr')
 */
const setLanguage = (lang: string) => {
  locale.value = lang;
  localStorage.setItem('user_locale', lang);
};

/**
 * Initializes the theme based on localStorage preference.
 * Runs on component mount.
 */
const initializeDarkMode = () => {
  const darkMode = localStorage.getItem("dark");
  isDarkMode.value = darkMode === "enabled";
  setThemeAttribute(isDarkMode.value);
};

/**
 * Handles user logout.
 * Calls the logout action from the auth store.
 */
const onLogout = async () => {
  try {
  await authStore.logout();

  notifySuccess(t('logout.success_message'))
    
    // Delay navigation to ensure toast displays
    // setTimeout(() => {
    //   authStore.handleRouteChange()
    // }, 100)
  } catch (error) {
    notifyError(authStore.error || t('logout.error_message'))
  }
};

// Computed properties for user display
const userDisplayName = computed(() => user.value?.name || 'User');
const userRoleDisplay = computed(() => {
  if (user.value?.is_superuser) return 'Super Administrator';
  if (user.value?.role) return user.value.role.charAt(0).toUpperCase() + user.value.role.slice(1);
  return 'User';
});

onMounted(() => {
  initializeDarkMode();
});
</script>
