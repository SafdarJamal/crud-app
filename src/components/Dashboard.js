import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { EMPLOYEES_DATA } from '../constants/employeesData';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employeesData: EMPLOYEES_DATA,
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
      date: '',
      addClicked: false,
      editeClicked: false,
      helper: true
    };

    this.handleLogout = this.handleLogout.bind(this);
  }

  delete(id) {
    const { employeesData } = this.state;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        const x = employeesData.filter(employee => employee.id === id);

        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Deleted!',
          text: `${x[0].firstName} ${x[0].lastName} has been deleted.`,
          showConfirmButton: false,
          timer: 1500
        });

        const updatedList = employeesData.filter(
          employee => employee.id !== id
        );

        // console.log(updatedList);
        this.setState({ employeesData: updatedList });
      }
    });
  }

  handleLogout() {
    Swal.fire({
      title: 'Are you sure?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, log me out!',
      cancelButtonText: 'No, keep me in'
    }).then(result => {
      if (result.value) {
        Swal.fire({
          timer: 1500,
          onBeforeOpen: () => {
            Swal.showLoading();
          },
          onClose: () => {
            this.props.onLogoutSuccess();
          }
        });
      }
    });
  }

  render() {
    const { employeesData } = this.state;

    return (
      <div className="container">
        <header>
          <h1>Employees Data</h1>
          <div className="main-btns">
            <button onClick={() => this.setState({ addClicked: true })}>
              Add Employee
            </button>
            <button
              onClick={this.handleLogout}
              className="logout-btn accent-button"
            >
              Logout
            </button>
          </div>
        </header>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary ($)</th>
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
                  <td>{employee.salary}</td>
                  <td>{employee.date} </td>
                  <td>
                    <button
                      onClick={() => this.showUpdate(employee.id)}
                      className="button muted-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => this.delete(employee.id)}
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
      </div>
    );
  }
}

export default Dashboard;
