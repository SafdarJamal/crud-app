import React, { Component } from 'react';

class DataTable extends Component {
  render() {
    const { employeesData, handleEditClick, handleDelete } = this.props;
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: null
    });

    return (
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.length > 0 ? (
            employeesData.map((employee, i) => (
              <tr key={employee.id}>
                <td>{++i}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.date} </td>
                <td>
                  <button
                    onClick={() => handleEditClick(employee.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button actions"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}

export default DataTable;
