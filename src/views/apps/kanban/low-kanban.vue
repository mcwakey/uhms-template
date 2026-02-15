<template>
    <div class="d-flex align-items-start overflow-auto project-status">
        <div class="p-3 rounded bg-light border w-100 me-3"
            v-for="(module, color) in modules" :key="color">
            <div class="bg-white border p-2 rounded mb-2">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <span :class="module.DotClass" class="p-1 d-flex rounded-circle me-2">
                            <span :class="module.DotClassOne" class="rounded-circle d-block p-1"></span>
                        </span>
                        <h6 class="me-2 mb-0">{{ module.Title }}</h6>
                        <span class="badge badge-soft-light  text-dark rounded-pill">{{module.Count}}</span>
                    </div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                            <i class="ti ti-dots-vertical"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end p-3">
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-edit me-2"></i>Edit</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash me-2"></i>Delete</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="kanban-drag-wrap">
                <draggable
                    :list="module.Cards"
                    :group="{ name: 'kanban', pull: true, put: true }"
                    @end="onDragEnd(color)"
                    >
                    <div v-for="Card in module.Cards" :key="Card.id">
                        <div class="card kanban-card mb-2">
                            <div class="card-body">
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <div class="d-flex align-items-center">
                                        <span :class="Card.BadgeClass" class="badge-xs d-flex align-items-center justify-content-center">
                                            <i class="fas fa-circle fs-6 me-1"></i>{{Card.BadgeName}}
                                        </span>
                                    </div>
                                    <div class="dropdown">
                                        <a href="javascript:void(0);" class="d-inline-flex align-items-center" data-bs-toggle="dropdown">
                                            <i class="ti ti-dots-vertical"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-end p-3">
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item rounded-1"><i class="ti ti-edit me-2"></i>Edit</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0);" class="dropdown-item rounded-1" data-bs-toggle="modal" data-bs-target="#delete_modal"><i class="ti ti-trash me-2"></i>Delete</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mb-3">
                                    <span class="avatar avatar-xs rounded-circle bg-warning me-2">
                                    <img src="@/assets/img/icons/kanban-arrow.svg" class="w-auto h-auto" alt="Img">
                                </span>
                                    <h6 class="d-flex align-items-center mb-0">{{Card.Title}}</h6>
                                </div>
                                <div class="d-flex align-items-center border-bottom mb-3 pb-3">
                                    <div class="me-3 pe-3 border-end">
                                        <span class="fw-medium fs-12 d-block mb-1">Budget</span>
                                        <p class="fs-12 text-dark">$24,000</p>
                                    </div>
                                    <div class="me-3 pe-3 border-end">
                                        <span class="fw-medium fs-12 d-block mb-1">Tasks</span>
                                        <p class="fs-12 text-dark">12/15</p>
                                    </div>
                                    <div class="">
                                        <span class="fw-medium fs-12 d-block mb-1">Due on</span>
                                        <p class="fs-12 text-dark">15 Apr</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="avatar-list-stacked avatar-group-sm me-3">
                                        <span class="avatar avatar-rounded">
                                            <img class="border border-white" src="@/assets/img/profiles/avatar-10.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img class="border border-white" src="@/assets/img/profiles/avatar-08.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img class="border border-white" src="@/assets/img/profiles/avatar-07.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img class="border border-white" src="@/assets/img/profiles/avatar-02.jpg" alt="img">
                                        </span>
                                        <span class="avatar avatar-rounded">
                                            <img class="border border-white" src="@/assets/img/profiles/avatar-03.jpg" alt="img">
                                        </span>
                                        <a href="#" class="avatar avatar-rounded bg-primary fs-12 text-white">
                                        1+
                                        </a>
                                    </div>
                                    <div class="d-flex align-items-center">
                                        <a href="javascript:void(0);" class="d-flex align-items-center text-dark me-2"><i class="ti ti-message-circle text-gray me-1"></i></a>
                                        <a href="javascript:void(0);" class="d-flex align-items-center text-dark"><i class="ti ti-paperclip text-gray me-1"></i></a>
                                    </div>
                                </div>
                            </div><!-- end card body -->
                        </div><!-- end card -->
                    </div>
                </draggable>
            </div>
            <div class="pt-2">
                <a href="#" class="btn btn-outline-white border border-dashed d-flex align-items-center justify-content-center">
                    <i class="ti ti-plus me-2"></i> New Project
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { VueDraggableNext } from "vue-draggable-next";
export default {
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      modules: {
         New: {
          DotClass: "bg-soft-warning",
          DotClassOne: "bg-warning",
          Title: "New",
          Count: "02",
          Cards: [
            {
                BadgeName: "Low",
                BadgeClass: "badge bg-success",
                Title: "Project Title",
            },
            {
                BadgeName: "Low",
                BadgeClass: "badge bg-success",
                Title: "Project Title",
            },
          ],
        },     
        Inprogress: {
          DotClass: "bg-soft-primary",
          DotClassOne: "bg-primary",
          Title: "Inprogress",
          Count: "13",
          Cards: [
              {
                  BadgeName: "Low",
                  BadgeClass: "badge bg-success",
                  Title: "Project Title",
              },
            {
                BadgeName: "Low",
                BadgeClass: "badge bg-success",
                Title: "Project Title",
            },
          ],
        }, 
        Onhold: {
          DotClass: "bg-soft-danger",
          DotClassOne: "bg-danger",
          Title: "On Hold",
          Count: "04",
          Cards: [
              {
                BadgeName: "Low",
                BadgeClass: "badge bg-success",
                  Title: "Project Title",
              },
          ],
        },      
        Completed: {
          DotClass: "bg-soft-success",
          DotClassOne: "bg-success",
          Title: "Completed",
          Count: "10",
          Cards: [
              {
                BadgeName: "Low",
                BadgeClass: "badge bg-success",
                  Title: "Project Title",
              },
          ],
        },      
      },
    };
  },
  methods: {
    onDragEnd() {},
    onModuleDragEnd() {},
  },
};
</script>