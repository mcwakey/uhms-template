<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content">
      <h6 class="fs-14 mb-3">
        <router-link to="/users/roles-and-permissions"
          ><i class="ti ti-chevron-left me-1"></i>Roles</router-link
        >
      </h6>

      <!-- Start Page Header -->
      <div
        class="d-flex align-items-sm-center flex-sm-row flex-column gap-2 mb-3 pb-3 border-bottom"
      >
        <div class="flex-grow-1">
          <h4 class="fw-bold mb-0">Permissions</h4>
        </div>
        <div class="text-end d-flex">
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn bg-white btn-md d-inline-flex align-items-center fw-normal rounded border text-dark px-2 py-1 fs-14"
              data-bs-toggle="dropdown"
            >
              <span class="text-body me-1">Role : </span> Admin
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-2">
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">Admin</a>
              </li>
              <li>
                <a href="javascript:void(0);" class="dropdown-item rounded-1">User</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="card mb-3">
        <div class="card-header">
          <div class="d-flex align-items-center justify-content-between">
            <h6 class="fw-bold mb-0">Clinic</h6>
            <div class="form-check form-check-md">
              <input class="form-check-input" type="checkbox" id="select-all" />
              <label for="select-all">Allow All</label>
            </div>
          </div>
        </div>
        <!-- end card header -->
        <div class="card-body">
          <div class="table-responsive border">
            <table class="table table-nowrap">
              <thead class="thead-light">
                <tr>
                  <th>Module</th>
                  <th>CREATE</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                  <th>VIEW</th>
                  <th>ALLOW ALL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Doctors</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Patients</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Appointments</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Locations</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Visits</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Services</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Designations</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Departments</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Activities</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->

      <div class="card mb-3">
        <div class="card-header">
          <div class="d-flex align-items-center justify-content-between">
            <h6 class="fw-bold mb-0">Hrm</h6>
            <div class="form-check form-check-md">
              <input class="form-check-input" type="checkbox" id="select-all2" />
              <label for="select-all">Allow All</label>
            </div>
          </div>
        </div>
        <!-- end card header -->
        <div class="card-body">
          <div class="table-responsive border">
            <table class="table table-nowrap">
              <thead class="thead-light">
                <tr>
                  <th>Module</th>
                  <th>CREATE</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                  <th>VIEW</th>
                  <th>ALLOW ALL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Staffs</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Departments</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Designation</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Attendance</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Leaves</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Holidays</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Payroll</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->

      <div class="card mb-3">
        <div class="card-header">
          <div class="d-flex align-items-center justify-content-between">
            <h6 class="fw-bold mb-0">Finance & Accounts</h6>
            <div class="form-check form-check-md">
              <input class="form-check-input" type="checkbox" id="select-all3" />
              <label for="select-all">Allow All</label>
            </div>
          </div>
        </div>
        <!-- end card header -->
        <div class="card-body">
          <div class="table-responsive border">
            <table class="table table-nowrap">
              <thead class="thead-light">
                <tr>
                  <th>Module</th>
                  <th>CREATE</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                  <th>VIEW</th>
                  <th>ALLOW ALL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Expenses</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Income</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Invoices</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Payments</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Transactions</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->

      <div class="card mb-3">
        <div class="card-header">
          <div class="d-flex align-items-center justify-content-between">
            <h6 class="fw-bold mb-0">Administration</h6>
            <div class="form-check form-check-md">
              <input class="form-check-input" type="checkbox" id="select-all4" />
              <label for="select-all">Allow All</label>
            </div>
          </div>
        </div>
        <!-- end card header -->
        <div class="card-body">
          <div class="table-responsive border">
            <table class="table table-nowrap">
              <thead class="thead-light">
                <tr>
                  <th>Module</th>
                  <th>CREATE</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                  <th>VIEW</th>
                  <th>ALLOW ALL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p class="fw-medium text-dark">Reports</p>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" checked />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <div class="form-check form-check-md">
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- end card body -->
      </div>
      <!-- end card -->
    </div>
    <!-- End Content -->

    <!-- Footer Start -->
    <div class="footer text-center bg-white p-2 border-top">
      <p class="text-dark mb-0">
        2025 &copy; <a href="javascript:void(0);" class="link-primary">Preclinic</a>, All
        Rights Reserved
      </p>
    </div>
    <!-- Footer End -->
  </div>

  <!-- ========================
			End Page Content
		========================= -->

  <!-- Start Add Modal -->
  <div id="add_role" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">New Role</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-0">
              <label class="form-label"
                >Role<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Add New Role
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Add Modal -->
  <div id="edit_role" class="modal fade">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="text-dark modal-title fw-bold">Edit Role</h4>
          <button
            type="button"
            class="btn-close btn-close-modal custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >Role<span class="text-danger ms-1">*</span></label
              >
              <input type="text" class="form-control" value="Doctor" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Status<span class="text-danger ms-1">*</span></label
              >
              <vue3-select v-model="selected" :options="StatRole" placeholder="Select" />
            </div>
          </div>
          <div class="modal-footer d-flex align-items-center gap-1">
            <button type="button" class="btn btn-white border" data-bs-dismiss="modal">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- End Add Modal -->

  <!-- Start Delete Modal  -->
  <div class="modal fade" id="delete_role">
    <div class="modal-dialog modal-dialog-centered modal-sm">
      <div class="modal-content">
        <div class="modal-body text-center position-relative z-1">
          <img
            src="@/assets/img/bg/delete-modal-bg-01.png"
            alt=""
            class="img-fluid position-absolute top-0 start-0 z-n1"
          />
          <img
            src="@/assets/img/bg/delete-modal-bg-02.png"
            alt=""
            class="img-fluid position-absolute bottom-0 end-0 z-n1"
          />
          <div class="mb-3">
            <span class="avatar avatar-lg bg-danger text-white"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="fw-bold mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure want to delete?</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-3"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-danger position-relative z-1"
              data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Delete Modal  -->
</template>
<script>
export default {
  data() {
    return {
      selected: null,
      StatRole: [
        { label: "Select", value: "Select" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
    };
  },
};
</script>
