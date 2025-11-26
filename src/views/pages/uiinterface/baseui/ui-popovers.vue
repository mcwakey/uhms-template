<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 pb-3">
        <div class="flex-grow-1">
          <h4 class="fs-18 fw-semibold mb-0">Popovers</h4>
        </div>

        <div class="text-end">
          <ol class="breadcrumb m-0 py-0">
            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>

            <li class="breadcrumb-item"><a href="javascript: void(0);">Base UI</a></li>

            <li class="breadcrumb-item active">Popovers</li>
          </ol>
        </div>
      </div>
      <!-- End Page Header  -->

      <!-- start row -->
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Simple Popover</h5>
            </div>

            <div class="card-body">
              <p>Click the button below to display a popover with additional content.</p>
              <button
                type="button"
                class="btn btn-danger"
                ref="popoverBtn"
                data-bs-toggle="popover"
                title="Popover title"
                data-bs-content="Here's some amazing content. It's very engaging, right?"
              >
                Click to toggle popover
              </button>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Dismiss on Next Click</h5>
            </div>

            <div class="card-body">
              <p>
                Use the <code>focus</code> trigger to dismiss popovers when the user
                clicks outside.
              </p>
              <button
                type="button"
                class="btn btn-success"
                ref="dismissiblePopover"
                data-bs-toggle="popover"
                data-bs-trigger="focus"
                title="Dismissible popover"
                data-bs-content="Here's some amazing content. It's very engaging, right?"
              >
                Dismissible popover
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- end row -->

      <!-- start row -->
      <div class="row">
        <!-- Hover Popover -->
        <div class="col-xl-6">
          <div class="card card-h-100">
            <div class="card-header">
              <h5 class="card-title">Hover</h5>
            </div>
            <div class="card-body">
              <p>
                Use <code>data-bs-trigger="hover"</code> to show the popover when
                hovering.
              </p>
              <button
                type="button"
                tabindex="0"
                class="btn btn-dark"
                ref="hoverPopover"
                data-bs-toggle="popover"
                data-bs-trigger="hover"
                data-bs-content="And here's some amazing content. It's very engaging. Right?"
                title="Ohh Wow!"
              >
                Please Hover Me
              </button>
            </div>
          </div>
        </div>

        <!-- Directional Popovers -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Four Directions</h5>
            </div>
            <div class="card-body">
              <p>Four placement options: **top, right, bottom, left**.</p>
              <div class="d-flex flex-wrap gap-2">
                <button
                  ref="popoverTop"
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="popover"
                  data-bs-placement="top"
                  data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                >
                  Popover on top
                </button>
                <button
                  ref="popoverBottom"
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="popover"
                  data-bs-placement="bottom"
                  data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                >
                  Popover on bottom
                </button>
                <button
                  ref="popoverRight"
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                >
                  Popover on right
                </button>
                <button
                  ref="popoverLeft"
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="popover"
                  data-bs-placement="left"
                  data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
                  title="Popover title"
                >
                  Popover on left
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- end row -->

      <!-- start row -->
      <div class="row">
        <!-- Custom Popovers -->
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Custom Popovers</h5>
            </div>
            <div class="card-body">
              <p>
                You can customize the appearance of popovers using CSS variables. We set a
                custom class with <code>data-bs-custom-class</code> to scope our custom
                appearance and override local styles.
              </p>
              <div class="d-flex flex-wrap gap-2">
                <button
                  ref="primaryPopover"
                  class="btn btn-primary"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  data-bs-custom-class="popover-primary"
                  data-bs-title="Primary popover"
                  data-bs-content="This popover is themed via CSS variables."
                >
                  Primary popover
                </button>
                <button
                  ref="successPopover"
                  class="btn btn-success"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  data-bs-custom-class="popover-success"
                  data-bs-title="Success popover"
                  data-bs-content="This popover is themed via CSS variables."
                >
                  Success popover
                </button>
                <button
                  ref="dangerPopover"
                  class="btn btn-danger"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  data-bs-custom-class="popover-danger"
                  data-bs-title="Danger popover"
                  data-bs-content="This popover is themed via CSS variables."
                >
                  Danger popover
                </button>
                <button
                  ref="infoPopover"
                  class="btn btn-info"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  data-bs-custom-class="popover-info"
                  data-bs-title="Info popover"
                  data-bs-content="This popover is themed via CSS variables."
                >
                  Info popover
                </button>
                <button
                  ref="darkPopover"
                  class="btn btn-dark"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  data-bs-custom-class="popover-dark"
                  data-bs-title="Dark popover"
                  data-bs-content="This popover is themed via CSS variables."
                >
                  Dark popover
                </button>
                <button
                  ref="secondaryPopover"
                  class="btn btn-secondary"
                  data-bs-toggle="popover"
                  data-bs-placement="right"
                  data-bs-custom-class="popover-secondary"
                  data-bs-title="Secondary popover"
                  data-bs-content="This popover is themed via CSS variables."
                >
                  Secondary popover
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Disabled Popovers -->
        <div class="col-xl-6">
          <div class="card card-h-100">
            <div class="card-header">
              <h5 class="card-title">Disabled Elements</h5>
            </div>
            <div class="card-body">
              <p>
                Disabled elements aren’t interactive, so we trigger the popover from a
                wrapper <code>&lt;span&gt;</code> and override pointer events.
              </p>
              <span
                ref="disabledPopover"
                class="d-inline-block"
                data-bs-toggle="popover"
                data-bs-content="Disabled popover"
              >
                <button
                  class="btn btn-primary"
                  style="pointer-events: none"
                  type="button"
                  disabled
                >
                  Disabled button
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- end row -->
    </div>
    <!-- End Content -->

    <!-- Start Footer -->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-dark">Version : 1.3.8</p>
    </div>
    <!-- End Footer -->
  </div>

  <!-- ========================
End Page Content
========================= -->
</template>
<script>
import { onMounted, onUnmounted, ref } from "vue";
import { Popover } from "bootstrap";

export default {
  setup() {
    // Refs for DOM elements
    const popoverBtn = ref(null);
    const dismissiblePopover = ref(null);
    const hoverPopover = ref(null);
    const popoverTop = ref(null);
    const popoverBottom = ref(null);
    const popoverRight = ref(null);
    const popoverLeft = ref(null);
    const primaryPopover = ref(null);
    const successPopover = ref(null);
    const dangerPopover = ref(null);
    const infoPopover = ref(null);
    const darkPopover = ref(null);
    const secondaryPopover = ref(null);
    const disabledPopover = ref(null);

    // Store active popovers for disposal
    const popovers = [];

    onMounted(() => {
      const refs = [
        popoverBtn,
        dismissiblePopover,
        hoverPopover,
        popoverTop,
        popoverBottom,
        popoverRight,
        popoverLeft,
        primaryPopover,
        successPopover,
        dangerPopover,
        infoPopover,
        darkPopover,
        secondaryPopover,
        disabledPopover,
      ];

      refs.forEach((popoverRef) => {
        if (popoverRef.value) {
          const popoverInstance = new Popover(popoverRef.value);
          popovers.push(popoverInstance);
        }
      });
    });

    // Dispose popovers when component is unmounted
    onUnmounted(() => {
      popovers.forEach((popover) => popover.dispose());
    });

    return {
      popoverBtn,
      dismissiblePopover,
      hoverPopover,
      popoverTop,
      popoverBottom,
      popoverRight,
      popoverLeft,
      primaryPopover,
      successPopover,
      dangerPopover,
      infoPopover,
      darkPopover,
      secondaryPopover,
      disabledPopover,
    };
  },
};
</script>
