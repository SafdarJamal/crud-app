import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { EMPLOYEES_DATA } from '../../data/employees';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

const Dashboard = ({ onLogoutSuccess }) => {
  const [employeesData, setEmployeesData] = useState(EMPLOYEES_DATA);
  const [addClicked, setAddClicked] = useState(false);
  const [editeClicked, setEditClicked] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleAddClick = () => {
    setAddClicked(true);
  };

  const handleEditClick = id => {
    const result = employeesData.filter(employee => employee.id === id);

    const employee = result[0];
    setEditClicked(true);
    setSelectedEmployee(employee);
  };

  const handleAddCancel = () => {
    setAddClicked(false);
  };

  const handleEditCancel = () => {
    setEditClicked(false);
  };

  const onAddSuccess = employeesData => {
    setEmployeesData(employeesData);
    setAddClicked(false);
  };

  const onUpdateSuccess = (id, employeeData) => {
    employeesData.map((employee, i) => {
      id === employee.id
        ? employeesData.splice(i, 1, employeeData)
        : Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          });
      return false;
    });

    setEmployeesData(employeesData);
    setEditClicked(false);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `${employeeData.firstName} ${employeeData.lastName} data updated.`,
      showConfirmButton: false,
      timer: 1500
    });

    // console.log(employeesData);
  };

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        const result = employeesData.filter(employee => employee.id === id);
        const employee = result[0];

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.firstName} ${employee.lastName} has been deleted.`,
          showConfirmButton: false,
          timer: 1500
        });

        const updatedList = employeesData.filter(
          employee => employee.id !== id
        );

        // console.log(updatedList);
        setEmployeesData(updatedList);
      }
    });
  };

  return (
    <div className="container">
      {!addClicked && !editeClicked && (
        <Header
          handleAddClick={handleAddClick}
          onLogoutSuccess={onLogoutSuccess}
        />
      )}
      {!addClicked && !editeClicked && (
        <Table
          employeesData={employeesData}
          handleEditClick={handleEditClick}
          handleDelete={handleDelete}
        />
      )}
      {addClicked && (
        <Add
          employeesData={employeesData}
          onAddSuccess={onAddSuccess}
          handleAddCancel={handleAddCancel}
        />
      )}
      {editeClicked && (
        <Edit
          selectedEmployee={selectedEmployee}
          onUpdateSuccess={onUpdateSuccess}
          handleEditCancel={handleEditCancel}
        />
      )}
    </div>
  );
};

export default Dashboard;
