<template>
  <div class="card">
    <div class="card-header border-0 pb-0">
      <div
        class="d-flex align-items-center justify-content-between border-bottom flex-wrap row-gap-3 pb-3"
      >
        <div class="d-flex align-items-center">
          <a
            href="javascript:void(0);"
            class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"
            ><img src="@/assets/img/profiles/avatar-03.jpg" alt="Img"
          /></a>
          <div>
            <h6 class="fs-16 mb-1">
              <a href="javascript:void(0);"
                >Richard Smith <i class="ti ti-circle-check-filled text-success"></i
              ></a>
            </h6>
            <p class="d-flex align-items-center mb-0">
              <span class="text-info">@richard442</span>
              <i class="ti ti-circle-filled fs-7 mx-2"></i>United Kingdom
            </p>
          </div>
        </div>
        <div class="d-flex align-items-center">
          <p class="mb-0 text-dark">About 1 hr ago</p>
          <div class="dropdown ms-3 me-1">
            <button
              class="btn btn-icon bg-transparent d-flex align-items-center text-dark border-0 p-0 btn-sm"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="ti ti-world pe-1"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="javascript:void(0);">Private</a>
              </li>
              <li>
                <a class="dropdown-item" href="javascript:void(0);">Public</a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="d-inline-flex align-items-center show"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <i class="ti ti-dots-vertical"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-edit me-2"></i>Edit</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-eye me-2"></i>Hide Post</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-report me-2"></i>Report</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  ><i class="ti ti-trash-x me-2"></i>Delete</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="mb-2">
        <p class="text-dark fw-medium">
          "Believe in yourself and all that you are. Know that there is something inside
          you that is greater than any obstacle.
          <a href="javascript:void(0);" class="text-info link-hover">#MotivationMonday</a>
          <a href="javascript:void(0);" class="text-info link-hover"> #Inspiration</a> 🌟"
        </p>
      </div>
      <div class="mb-2">
        <img
          src="@/assets/img/social/social-feed-01.jpg"
          class="rounded img-fluid"
          alt="Img"
        />
      </div>
      <div class="d-flex gap-3 mb-3">
        <div v-for="(image, index) in images" :key="index" class="img-full-view">
          <a href="javascript:void(0);" class="gallery-item" @click="openLightbox(index)">
            <img
              :src="getImageUrl(image.thumb)"
              class="rounded w-100"
              :alt="`gallery-item-${index}`"
            />
            <span class="avatar avatar-md avatar-rounded"><i class="ti ti-eye"></i></span>
          </a>
        </div>
      </div>
      <div
        class="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3"
      >
        <div class="d-flex align-items-center flex-wrap row-gap-3">
          <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
            <i class="ti ti-heart me-2"></i>340K Likes
          </a>
          <a href="javascript:void(0);" class="d-inline-flex align-items-center me-3">
            <i class="ti ti-message-dots me-2"></i>45 Comments
          </a>
          <a href="javascript:void(0);" class="d-inline-flex align-items-center">
            <i class="ti ti-share-3 me-2"></i>28 Share
          </a>
        </div>
        <div class="d-flex align-items-center">
          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
            ><i class="ti ti-heart-filled text-danger"></i
          ></a>
          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
            ><i class="ti ti-share"></i
          ></a>
          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
            ><i class="ti ti-message-star"></i
          ></a>
          <a href="javascript:void(0);" class="btn btn-icon btn-sm rounded-circle"
            ><i class="ti ti-bookmark-filled text-warning"></i
          ></a>
        </div>
      </div>
      <div class="d-flex align-items-start">
        <a href="javascript:void(0);" class="avatar avatar-rounded me-2 flex-shrink-0"
          ><img src="@/assets/img/users/user-04.jpg" alt="Img"
        /></a>
        <input type="text" class="form-control" placeholder="Enter Comments" />
      </div>
    </div>
    <!-- end card body -->
  </div>
  <!-- end card -->

  <vue-easy-lightbox
    :visible="showLightbox"
    :imgs="fullImages"
    :index="currentIndex"
    @close="closeLightbox"
    :close-icon="true"
    @click.self="closeLightbox"
  />
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      images: [
        { thumb: "gallery-01.jpg", full: "gallery-01.jpg" },
        { thumb: "gallery-03.jpg", full: "gallery-03.jpg" },
        { thumb: "gallery-02.jpg", full: "gallery-02.jpg" },
        { thumb: "gallery-04.jpg", full: "gallery-04.jpg" },
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
      return new URL(`/src/assets/img/social/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
