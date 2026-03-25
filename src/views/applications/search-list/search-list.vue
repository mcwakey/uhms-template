<template>
  <layouts-header :title="title" :text1="text1" :text="text" />
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <div class="card">
        <div class="card-body">
          <form action="/applications/search-list">
            <div class="d-flex align-items-center">
              <input type="text" class="form-control flex-fill me-3" value="Kanakku" />
              <button type="submit" class="btn btn-primary">Search</button>
            </div>
          </form>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->
      <div class="card">
        <div class="card-body">
          <h6 class="mb-3 text-capitalize">Search result for "Preclinic"</h6>

          <!-- start row -->
          <div class="row">
            <div class="col-md-6">
              <div class="card shadow-none">
                <div class="card-body">
                  <a href="#" class="text-info text-truncate mb-2 text-wrap"
                    >https://themeforest.net/search/preclinic</a
                  >
                  <p class="text-truncate line-clamb-2 mb-2">
                    Preclinic - Html, Vue 3, Angular 17+, React & Node HR Project
                    Management & CRM Admin Dashboard Template
                  </p>
                  <div class="d-flex align-items-center flex-wrap row-gap-2">
                    <span class="text-gray-9 me-3 pe-3 border-end">1.7K Sales</span>
                    <div
                      class="text-gray-9 d-flex align-items-center me-3 pe-3 border-end"
                    >
                      <i class="ti ti-star-filled text-warning me-1"></i>
                      <i class="ti ti-star-filled text-warning me-1"></i>
                      <i class="ti ti-star-filled text-warning me-1"></i>
                      <i class="ti ti-star-filled text-warning me-1"></i>
                      <i class="ti ti-star-filled text-light me-1"></i>
                      (45)
                    </div>
                    <span class="text-gray-9">$35</span>
                  </div>
                </div>
                <!-- end card body -->
              </div>
              <!-- end card -->
            </div>
            <!-- end col -->
          </div>
          <!-- end row -->

          <h6 class="mb-3">Images</h6>

          <!-- start row -->
          <div class="row g-3">
            <div
              class="col-xl-2 col-md-4 col-6"
              v-for="(image, index) in images"
              :key="index"
            >
              <a href="#" class="gallery-item" @click="openLightbox(index)">
                <img :src="getImageUrl(image.thumb)" class="rounded" alt="img" />
              </a>
            </div>
            <!-- end col -->

            <vue-easy-lightbox
              :visible="showLightbox"
              :imgs="fullImages"
              :index="currentIndex"
              @close="closeLightbox"
              :close-icon="true"
              @click.self="closeLightbox"
            />
          </div>
          <!-- end row -->
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->
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
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      title: "Home",
      text: "Pages",
      images: [
        { thumb: "media-15.jpg", full: "media-15.jpg" },
        { thumb: "media-16.jpg", full: "media-16.jpg" },
        { thumb: "media-17.jpg", full: "media-17.jpg" },
        { thumb: "media-18.jpg", full: "media-18.jpg" },
        { thumb: "media-19.jpg", full: "media-19.jpg" },
        { thumb: "media-20.jpg", full: "media-20.jpg" },
        { thumb: "media-21.jpg", full: "media-21.jpg" },
        { thumb: "media-22.jpg", full: "media-22.jpg" },
        { thumb: "media-23.jpg", full: "media-23.jpg" },
        { thumb: "media-24.jpg", full: "media-24.jpg" },
        { thumb: "media-25.jpg", full: "media-25.jpg" },
        { thumb: "media-26.jpg", full: "media-26.jpg" },
      ],
      showLightbox: false,
      currentIndex: 0,
    };
  },
  computed: {
    fullImages() {
      return this.images.map((img) => this.getImageUrl(img.full));
    },
  },
  methods: {
    openLightbox(index) {
      this.currentIndex = index;
      this.showLightbox = true;
    },
    closeLightbox() {
      this.showLightbox = false;
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/media/${imageName}`, import.meta.url).href;
    },
  },
};
</script>

<style scoped>
.vue-easy-lightbox__overlay {
  cursor: pointer;
}
</style>
