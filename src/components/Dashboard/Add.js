import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ employeesData, onAddSuccess, handleAddCancel }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [salary, setSalary] = useState(null);
  const [date, setDate] = useState(null);

  const handleAdd = () => {
    if (firstName === null) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (lastName === null) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (email === null) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (salary === null) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (date === null) {
      return Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    }

    const id = employeesData.length + 1;
    const newEmployeeData = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    };

    employeesData.push(newEmployeeData);
    onAddSuccess(employeesData);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'New employee added',
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="container">
      <form>
        <h1>Add Employee</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="salary">Salary ($)</label>
        <input
          type="number"
          id="salary"
          onChange={e => setSalary(e.target.value)}
        />
        <label htmlFor="date">Date</label>
        <input type="date" id="date" onChange={e => setDate(e.target.value)} />
        <div className="main-btns">
          <input type="button" onClick={handleAdd} value="Add" />
          <input
            type="button"
            value="Cancel"
            style={{ marginLeft: '12px' }}
            className="muted-button"
            onClick={handleAddCancel}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
