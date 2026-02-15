<template>
  <div class="sidebars settings-sidebar" id="sidebar2">
    <div class="sidebar-inner" data-simplebar>
      <div id="sidebar-menu5" class="sidebar-menu mt-0 p-0">
        <ul>
          <li class="submenu-open">
            <ul>
              <template v-for="menu in sideBarData" :key="menu.menuValue">
                <template v-for="subMenu in menu.subMenus" :key="subMenu.menuValue">
                  <li class="submenu">
                    <a
                      href="javascript:void(0);"
                      @click="toggleSubmenu(subMenu.menuValue)"
                      :class="{
                        subdrop:
                          openSubmenuOneItem === subMenu.menuValue ||
                          isParentMenuActive(subMenu),
                        active: isParentMenuActive(subMenu),
                      }"
                    >
                      <i class="ti" :class="'ti-' + subMenu.icon"></i
                      ><span>{{ subMenu.menuValue }}</span>
                      <span class="menu-arrow"></span>
                    </a>

                    <ul
                      :class="
                        openSubmenuOneItem === subMenu.menuValue ||
                        isParentMenuActive(subMenu)
                          ? 'd-block'
                          : 'd-none'
                      "
                    >
                      <li v-for="subMenu2 in subMenu.subMenus" :key="subMenu2.menuValue">
                        <router-link
                          :to="subMenu2.route"
                          class="nav-link justify-content-start fw-medium"
                          :class="{
                            'text-dark': currentRoute !== subMenu2.route,
                            active: currentRoute === subMenu2.route,
                          }"
                        >
                          {{ subMenu2.menuValue }}
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </template>
              </template>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const currentRoute = ref(route.fullPath);
const openSubmenuOneItem = ref(null);

const sideBarData = ref([
  {
    menuValue: "Settings",
    subMenus: [
      {
        menuValue: "Account Settings",
        icon: "user-cog",
        page: "account-settings",
        subMenus: [
          { menuValue: "Profile", route: "/account-settings/profile-settings" },
          {
            menuValue: "Security",
            route: "/account-settings/security-settings",
          },
          {
            menuValue: "Notifications",
            route: "/account-settings/notifications-settings",
          },
          {
            menuValue: "Integrations",
            route: "/account-settings/integrations-settings",
          },
        ],
      },
      {
        menuValue: "Website Settings",
        icon: "world-cog",
        page: "website-settings",
        subMenus: [
          {
            menuValue: "Company Settings",
            route: "/website-settings/organization-settings",
          },
          { menuValue: "Localization", route: "/website-settings/localization-settings" },
          { menuValue: "Prefixes", route: "/website-settings/prefixes-settings" },
          { menuValue: "SEO Setup", route: "/website-settings/seo-setup-settings" },
          { menuValue: "Language", route: "/website-settings/language-settings" },
          {
            menuValue: "Maintenance Mode",
            route: "/website-settings/maintenance-mode-settings",
          },
          {
            menuValue: "Login & Register",
            route: "/website-settings/login-and-register-settings",
          },
          { menuValue: "Preferences", route: "/website-settings/preferences-settings" },
        ],
      },
      {
        menuValue: "Clinic Settings",
        icon: "building-hospital",
        page: "clinic-settings",
        subMenus: [
          { menuValue: "Appointment", route: "/clinic-settings/appointment-settings" },
          {
            menuValue: "Working Hours",
            route: "/clinic-settings/working-hours-settings",
          },
          {
            menuValue: "Cancellation Reason",
            route: "/clinic-settings/cancellation-reason-settings",
          },
        ],
      },
      {
        menuValue: "App Settings",
        icon: "device-mobile-cog",
        page: "app-settings",
        subMenus: [
          { menuValue: "Invoice Settings", route: "/app-settings/invoice-settings" },
          {
            menuValue: "Invoice Templates",
            route: "/app-settings/invoice-templates-settings",
          },
          { menuValue: "Signatures", route: "/app-settings/signatures-settings" },
          { menuValue: "Custom Fields", route: "/app-settings/custom-fields-settings" },
        ],
      },
      {
        menuValue: "System Settings",
        icon: "device-desktop-cog",
        page: "system-settings",
        subMenus: [
          { menuValue: "Email Settings", route: "/system-settings/email-settings" },
          {
            menuValue: "Email Templates",
            route: "/system-settings/email-templates-settings",
          },
          { menuValue: "SMS Gateways", route: "/system-settings/sms-gateways-settings" },
          {
            menuValue: "SMS Templates",
            route: "/system-settings/sms-templates-settings",
          },
          { menuValue: "GDPR Cookies", route: "/system-settings/gdpr-cookies-settings" },
        ],
      },
      {
        menuValue: "Finance & Accounts",
        icon: "settings-dollar",
        page: "finance-settings",
        subMenus: [
          {
            menuValue: "Payment Methods",
            route: "/finance-settings/payment-methods-settings",
          },
          {
            menuValue: "Bank Accounts",
            route: "/finance-settings/bank-accounts-settings",
          },
          { menuValue: "Tax Rates", route: "/finance-settings/tax-rates-settings" },
          { menuValue: "Currencies", route: "/finance-settings/currencies-settings" },
        ],
      },
      {
        menuValue: "Other Settings",
        icon: "settings-2",
        page: "other-settings",
        subMenus: [
          { menuValue: "Sitemap", route: "/others-settings/sitemap-settings" },
          { menuValue: "Clear Cache", route: "/others-settings/clear-cache-settings" },
          { menuValue: "Storage", route: "/others-settings/storage-settings" },
          { menuValue: "Cronjob", route: "/others-settings/cronjob-settings" },
          {
            menuValue: "Ban IP Address",
            route: "/others-settings/ban-ip-address-settings",
          },
          {
            menuValue: "System Backup",
            route: "/others-settings/system-backup-settings",
          },
          {
            menuValue: "Database Backup",
            route: "/others-settings/database-backup-settings",
          },
          { menuValue: "System Update", route: "/others-settings/system-update" },
        ],
      },
    ],
  },
]);

watch(
  () => route.fullPath,
  (newPath) => {
    currentRoute.value = newPath;
  },
  { immediate: true }
);

const toggleSubmenu = (menuValue) => {
  openSubmenuOneItem.value = openSubmenuOneItem.value === menuValue ? null : menuValue;
};

const isParentMenuActive = (subMenu) => {
  return subMenu.subMenus?.some((item) => currentRoute.value.startsWith(item.route));
};

onMounted(() => {
  sideBarData.value.forEach((menu) => {
    menu.subMenus.forEach((sub) => {
      if (isParentMenuActive(sub)) {
        openSubmenuOneItem.value = sub.menuValue;
      }
    });
  });
});
</script>
