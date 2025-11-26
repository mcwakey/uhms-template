<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>

  <!-- ========================
        Start Page Content
    ========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content content-two">
      <div class="mb-3">
        <h4 class="fw-bold mb-0">Contacts</h4>
      </div>
      <div class="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
        <div class="search-set mb-0">
          <div class="d-flex align-items-center flex-wrap gap-2">
            <div class="table-search d-flex align-items-center mb-0">
              <div class="search-input">
                <a href="javascript:void(0);" class="btn-searchset"
                  ><i class="isax isax-search-normal fs-12"></i
                ></a>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  v-model="searchQuery"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex mb-3 align-items-center flex-wrap row-gap-3">
          <div class="dropdown me-2">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn fs-14 py-1 btn-outline-white bg-white btn-md d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Status
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-1">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Active</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Inactive</a>
              </li>
            </ul>
          </div>
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn fs-14 py-1 btn-outline-white bg-white btn-md d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              Sort By : Last 7 Days
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-1">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Recently Added</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Ascending</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Desending</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Last Month</a
                >
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1"
                  >Last 7 Days</a
                >
              </li>
            </ul>
          </div>
          <a
            href="javascript:void(0);"
            class="btn btn-primary ms-2"
            data-bs-toggle="modal"
            data-bs-target="#add-contact"
            ><i class="ti ti-circle-plus me-1"></i>Add Contact</a
          >
        </div>
      </div>
      <div class="table-responsive">
        <a-table
          class="table table-nowrap datatable"
          :columns="columns"
          :data-source="filteredPages"
          :row-selection="rowSelection"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'Name'">
              <div class="d-flex align-items-center">
                <a href="javascript:void(0);" class="avatar avatar-sm me-2">
                  <img
                    :src="getImageUrl(record.Image)"
                    alt="product"
                    class="rounded-circle"
                  />
                </a>
                <a href="javascript:void(0);">{{ record.Name }}</a>
              </div>
            </template>
            <template v-if="column.key === 'Status'">
              <span
                class="d-inline-flex align-items-center p-1 pe-2 rounded-1 badge badge-soft-success text-success fs-10"
              >
                <i class="ti ti-point-filled me-1 fs-11"></i>{{ record.Status }}
              </span>
            </template>
            <template v-if="column.key === 'action'">
              <div class="action-item">
                <a href="javascript:void(0);" data-bs-toggle="dropdown">
                  <i class="fa-solid fa-ellipsis"></i>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#edit-contact"
                      ><i class="isax isax-eye me-2"></i>Edit</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="dropdown-item d-flex align-items-center"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_modal"
                      ><i class="isax isax-trash me-2"></i>Delete</a
                    >
                  </li>
                </ul>
              </div>
            </template>
          </template>
        </a-table>
      </div>
    </div>
    <!-- End Content -->

    <!-- Start Footer-->
    <div
      class="footer d-sm-flex align-items-center justify-content-between bg-white py-2 px-4 border-top"
    >
      <p class="text-dark mb-0">
        &copy; 2025 <a href="javascript:void(0);" class="link-primary">Kanakku</a>, All
        Rights Reserved
      </p>
      <p class="text-dark">Version : 1.3.8</p>
    </div>
    <!-- End Footer-->
  </div>

  <!-- ========================
        End Page Content
    ========================= -->

  <contacts-modal></contacts-modal>
</template>

<script>
const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => (a.Email.toLowerCase() > b.Email.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Phone",
    dataIndex: "Phone",
    sorter: {
      compare: (a, b) => (a.Phone.toLowerCase() > b.Phone.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Role",
    dataIndex: "Role",
    sorter: {
      compare: (a, b) => (a.Role.toLowerCase() > b.Role.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => (a.Status.toLowerCase() > b.Status.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "",
    key: "action",
    sorter: false,
  },
];
const data = [
  {
    key: "1",
    Image: "user-33.jpg",
    Name: "Carl Evans",
    Email: "carlevans@example.com",
    Phone: "12163547758",
    Role: "Admin",
    Status: "Active",
  },
  {
    key: "2",
    Image: "user-02.jpg",
    Name: "Minerva Rameriz",
    Email: "rameriz@example.com",
    Phone: "11367529510",
    Role: "Manager",
    Status: "Active",
  },
  {
    key: "3",
    Image: "user-34.jpg",
    Name: "Robert Lamon",
    Email: "robert@example.com",
    Phone: "15362789414",
    Role: "Salesman",
    Status: "Active",
  },
  {
    key: "4",
    Image: "user-35.jpg",
    Name: "Patricia Lewis",
    Email: "patricia@example.com",
    Phone: "18513094627",
    Role: "Supervisor",
    Status: "Active",
  },
  {
    key: "5",
    Image: "user-36.jpg",
    Name: "Mark Joslyn",
    Email: "markjoslyn@example.com",
    Phone: "14678219025",
    Role: "Store Keeper",
    Status: "Active",
  },
  {
    key: "6",
    Image: "user-37.jpg",
    Name: "Marsha Betts",
    Email: "marshabetts@example.com",
    Phone: "10913278319",
    Role: "Purchase",
    Status: "Active",
  },
  {
    key: "7",
    Image: "user-28.jpg",
    Name: "Daniel Jude",
    Email: "daieljude@example.com",
    Phone: "19125852947",
    Role: "Delivery Biker",
    Status: "Active",
  },
  {
    key: "8",
    Image: "user-38.jpg",
    Name: "Emma Bates",
    Email: "emmabates@example.com",
    Phone: "13671835209",
    Role: "Maintenance",
    Status: "Active",
  },
  {
    key: "9",
    Image: "user-39.jpg",
    Name: "Richard Fralick",
    Email: "richard@example.com",
    Phone: "19756194733",
    Role: "Quality Analyst",
    Status: "Active",
  },
  {
    key: "10",
    Image: "user-03.jpg",
    Name: "Michelle Robison",
    Email: "robinson@example.com",
    Phone: "19167850925",
    Role: "Accountant",
    Status: "Active",
  },
];
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
};

export default {
  data() {
    return {
      title: "Home",
      text1: "Applications",
      text: "Contacts",
      searchQuery: "",
      data,
      columns,
      rowSelection,
    };
  },
  methods: {
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/users/${imageName}`, import.meta.url).href;
    },
  },
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.Name.toLowerCase().includes(query) ||
          record.Email.toLowerCase().includes(query) ||
          record.Phone.toLowerCase().includes(query) ||
          record.Role.toLowerCase().includes(query) ||
          record.Status.toLowerCase().includes(query)
        );
      });
    },
  },
};
</script>
