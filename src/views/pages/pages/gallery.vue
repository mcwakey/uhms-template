<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <!-- Page Header -->
      <div class="pb-3 mb-3 border-bottom">
        <h4 class="fw-bold mb-0">Gallery</h4>
      </div>
      <!-- End Page Header -->

      <div class="card">
        <div class="card-body">
          <div class="row row-cols-2 row-cols-sm-4 row-cols-md-5">
            <div class="col mb-3" v-for="(image, index) in images" :key="index">
              <img
                :src="getImageUrl(image.thumb)"
                alt="img"
                class="img-fluid"
                @click="openLightbox(index)"
              />
            </div>
          </div>
          <vue-easy-lightbox
            :visible="showLightbox"
            :imgs="fullImages"
            :index="currentIndex"
            @close="closeLightbox"
            :close-icon="true"
            @click.self="closeLightbox"
          />
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->
    </div>
    <!-- End Content -->
  </div>
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
        { thumb: "gallery-01.jpg", full: "gallery-01.jpg" },
        { thumb: "gallery-02.jpg", full: "gallery-02.jpg" },
        { thumb: "gallery-03.jpg", full: "gallery-03.jpg" },
        { thumb: "gallery-04.jpg", full: "gallery-04.jpg" },
        { thumb: "gallery-05.jpg", full: "gallery-05.jpg" },
        { thumb: "gallery-06.jpg", full: "gallery-06.jpg" },
        { thumb: "gallery-07.jpg", full: "gallery-07.jpg" },
        { thumb: "gallery-08.jpg", full: "gallery-08.jpg" },
        { thumb: "gallery-09.jpg", full: "gallery-09.jpg" },
        { thumb: "gallery-10.jpg", full: "gallery-10.jpg" },
        { thumb: "gallery-11.jpg", full: "gallery-11.jpg" },
        { thumb: "gallery-12.jpg", full: "gallery-12.jpg" },
        { thumb: "gallery-13.jpg", full: "gallery-13.jpg" },
        { thumb: "gallery-14.jpg", full: "gallery-14.jpg" },
        { thumb: "gallery-15.jpg", full: "gallery-15.jpg" },
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
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/gallery/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
