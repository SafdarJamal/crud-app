import React from 'react';

const Table = ({ employees, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={employee.id}>
            <td>{index + 1}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.salary}</td>
            <td>{employee.date}</td>
            <td>
              <button onClick={() => handleEdit(employee.id)} className="button muted-button">Edit</button>
              <button onClick={() => handleDelete(employee.id)} className="button muted-button">Delete</button>

              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
