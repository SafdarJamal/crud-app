import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ selectedEmployee, onUpdateSuccess, handleEditCancel }) => {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const handleUpdate = () => {
    if (firstName === '') {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (lastName === '') {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (email === '') {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (email.indexOf(' ') !== -1) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (salary === '') {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (date === '') {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    }

    const employeeData = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    };

    onUpdateSuccess(id, employeeData);
  };

  return (
    <div className="container">
      <form>
        <h1>Edit Employee Data</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          defaultValue={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          defaultValue={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          defaultValue={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary ($)</label>
        <input
          type="number"
          id="salary"
          defaultValue={salary}
          onChange={e => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          defaultValue={date}
          onChange={e => setDate(e.target.value)}
        />
        <div className="main-btns">
          <input type="button" onClick={handleUpdate} value="Update" />
          <input
            type="button"
            value="Cancel"
            style={{ marginLeft: '12px' }}
            className="muted-button"
            onClick={handleEditCancel}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
