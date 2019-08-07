import React, { Component } from 'react';

class Table extends Component {
  render() {
    const { employeesData, handleEditClick, handleDelete } = this.props;

    for (let i = 0; i < employeesData.length; i++) {
      employeesData[i].id = i + 1;
    }

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: null
    });

    return (
      <div className="contain-table">
        <table className="striped-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Date</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {employeesData.length > 0 ? (
              employeesData.map((employee, i) => (
                <tr key={employee.id}>
                  <td>{i + 1}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{formatter.format(employee.salary)}</td>
                  <td>{employee.date} </td>
                  <td className="text-right">
                    <button
                      onClick={() => handleEditClick(employee.id)}
                      className="button muted-button"
                    >
                      Edit
                    </button>
                  </td>
                  <td className="text-left">
                    <button
                      onClick={() => handleDelete(employee.id)}
                      className="button muted-button"
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
      </div>
    );
  }
}

export default Table;
