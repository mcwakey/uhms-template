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
      <div class="page-header">
        <div class="row">
          <div class="col">
            <h3 class="page-title">Data Tables</h3>
          </div>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- start row -->
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Default Datatable</h4>
              <p class="card-text">
                This is the most basic example of the datatables with zero configuration.
                Use the
                <code>.datatable</code> class to initialize datatables.
              </p>
            </div>
            <!-- end card header -->
            <div class="card-body">
              <div class="table-search d-flex align-items-center">
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
              <div class="table-responsive">
                <a-table
                  class="table table-nowrap datatable"
                  :columns="columns"
                  :data-source="filteredPages"
                  :row-selection="rowSelection"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'name'">
                      <div>{{ record.name }}</div>
                    </template>
                  </template>
                </a-table>
              </div>
            </div>
            <!-- end card body -->
          </div>
          <!-- end card -->
        </div>
        <!-- end col -->
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
import { defineComponent } from "vue";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: {
      compare: (a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
    sorter: {
      compare: (a, b) => (a.position.toLowerCase() > b.position.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Office",
    dataIndex: "office",
    key: "office",
    sorter: {
      compare: (a, b) => (a.office.toLowerCase() > b.office.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: {
      compare: (a, b) => (a.age.toLowerCase() > b.age.toLowerCase() ? -1 : 1),
    },
  },
  {
    title: "Start date",
    dataIndex: "start_date",
    key: "start_date",
    sorter: {
      compare: (a, b) =>
        a.start_date.toLowerCase() > b.start_date.toLowerCase() ? -1 : 1,
    },
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
    sorter: {
      compare: (a, b) => (a.salary.toLowerCase() > b.salary.toLowerCase() ? -1 : 1),
    },
  },
];
const data = [
  {
    key: "1",
    name: "Airi Satou",
    position: "Accountant",
    office: "Tokyo",
    age: "33",
    start_date: "2008/11/28",
    salary: "$162,700",
  },
  {
    key: "2",
    name: "Angelica Ramos",
    position: "Chief Executive officer",
    office: "London",
    age: "47",
    start_date: "2009/10/09",
    salary: "$1,200,000",
  },
  {
    key: "3",
    name: "Ashton Cox",
    position: "Junior Technical Author",
    office: "San Francisco",
    age: "66",
    start_date: "2009/01/12",
    salary: "$86,000",
  },
  {
    key: "4",
    name: "Bradley Greer",
    position: "Software Engineer",
    office: "London",
    age: "41",
    start_date: "2012/10/13",
    salary: "$132,000",
  },
  {
    key: "5",
    name: "Brenden Wagner",
    position: "Software Engineer",
    office: "San Francisco",
    age: "28",
    start_date: "2011/06/07",
    salary: "$206,850",
  },
  {
    key: "6",
    name: "Brielle Williamson",
    position: "Integration Specialist",
    office: "New York",
    age: "61",
    start_date: "2012/12/02",
    salary: "$372,000",
  },
  {
    key: "7",
    name: "Caesar Vance",
    position: "Pre-Sales Support",
    office: "New York",
    age: "21",
    start_date: "2011/12/02",
    salary: "$106,450",
  },
  {
    key: "8",
    name: "Cedric Kelly",
    position: "Senior Javascript Developer",
    office: "Edinburgh",
    age: "22",
    start_date: "2012/03/29",
    salary: "$433,060",
  },
  {
    key: "9",
    name: "Charde Marshall",
    position: "Regional Director",
    office: "San Francisco",
    age: "36",
    start_date: "2008/10/16",
    salary: "$470,600",
  },
  {
    key: "10",
    name: "Colleen Hurst",
    position: "Javascript Developer",
    office: "San Francisco",
    age: "39",
    start_date: "2009/09/16",
    salary: "$205,500",
  },
  {
    key: "11",
    name: "Dai Rios",
    position: "Personnel Lead",
    office: "Edinburgh",
    age: "35",
    start_date: "2012/09/26",
    salary: "$217,500",
  },
  {
    key: "12",
    name: "Doris Wilder",
    position: "Sales Assistant",
    office: "Sidney",
    age: "23",
    start_date: "2010/09/20",
    salary: "$85,600",
  },
  {
    key: "13",
    name: "Fiona Green",
    position: "Chief Operating Officer (COO)",
    office: "San Francisco",
    age: "48",
    start_date: "2010/03/11",
    salary: "$850,000",
  },
  {
    key: "14",
    name: "Garrett Winters",
    position: "Accountant",
    office: "Tokyo",
    age: "63",
    start_date: "2011/07/25",
    salary: "$170,750",
  },
  {
    key: "15",
    name: "Gavin Joyce",
    position: "Developer",
    office: "Edinburgh",
    age: "42",
    start_date: "2010/12/22",
    salary: "$92,575",
  },
  {
    key: "16",
    name: "Gloria Little",
    position: "Systems Administrator",
    office: "New York",
    age: "59",
    start_date: "2009/04/10",
    salary: "$237,500",
  },
  {
    key: "17",
    name: "Haley Kennedy",
    position: "Senior Marketing Designer",
    office: "London",
    age: "43",
    start_date: "2012/12/18",
    salary: "$313,500",
  },
  {
    key: "18",
    name: "Herrod Chandler",
    position: "Sales Assistant",
    office: "San Francisco",
    age: "59",
    start_date: "2012/08/06",
    salary: "$137,500",
  },
  {
    key: "19",
    name: "Jena Gaines",
    position: "Office Manager",
    office: "London",
    age: "30",
    start_date: "2008/12/19",
    salary: "$90,560",
  },
  {
    key: "20",
    name: "Jenette Caldwell",
    position: "Development Lead",
    office: "New York",
    age: "30",
    start_date: "2011/09/03",
    salary: "$345,000",
  },
  {
    key: "21",
    name: "Jennifer Chang",
    position: "Regional Director",
    office: "Singapore",
    age: "28",
    start_date: "2010/11/14",
    salary: "$357,650",
  },
  {
    key: "22",
    name: "Michael Silva",
    position: "Marketing Designer",
    office: "London",
    age: "66",
    start_date: "2012/11/27",
    salary: "$198,500",
  },
  {
    key: "23",
    name: "Paul Byrd",
    position: "Chief Financial Officer (CFO)",
    office: "New York",
    age: "64",
    start_date: "2010/06/09",
    salary: "$725,000",
  },
  {
    key: "24",
    name: "Quinn Flynn",
    position: "Support Lead",
    office: "Edinburgh",
    age: "22",
    start_date: "2013/03/03",
    salary: "$342,000",
  },
  {
    key: "25",
    name: "Rhona Davidson",
    position: "Integration Specialist",
    office: "Tokyo",
    age: "55",
    start_date: "2010/10/14",
    salary: "$327,900",
  },
  {
    key: "26",
    name: "Shou Itou",
    position: "Regional Marketing",
    office: "Tokyo",
    age: "20",
    start_date: "2011/08/14",
    salary: "$163,000",
  },
  {
    key: "27",
    name: "Sonya Frost",
    position: "Software Engineer",
    office: "Edinburgh",
    age: "23",
    start_date: "2008/12/13",
    salary: "$103,600",
  },
  {
    key: "28",
    name: "Tatyana Fitzpatrick",
    position: "Regional Director",
    office: "London",
    age: "19",
    start_date: "2010/03/17",
    salary: "$385,750",
  },
  {
    key: "29",
    name: "Tiger Nixon",
    position: "System Architect",
    office: "Edinburgh",
    age: "61",
    start_date: "2011/04/25",
    salary: "$320,800",
  },
  {
    key: "30",
    name: "Yuri Berry",
    position: "Chief Marketing Officer (CMO)",
    office: "New York",
    age: "40",
    start_date: "2009/06/25",
    salary: "$675,000",
  },
];
export default defineComponent({
  computed: {
    filteredPages() {
      const query = this.searchQuery.toLowerCase();
      return this.data.filter((record) => {
        return (
          record.name.toLowerCase().includes(query) ||
          record.position.toLowerCase().includes(query) ||
          record.office.toLowerCase().includes(query) ||
          record.age.toLowerCase().includes(query) ||
          record.start_date.toLowerCase().includes(query) ||
          record.salary.toLowerCase().includes(query)
        );
      });
    },
  },
  setup() {
    return {
      title: "Home",
      text: "Data Tables",
      searchQuery: "",
      data,
      columns,
    };
  },
});
</script>
<style>
.ant-tooltip {
  display: none !important;
}
</style>
