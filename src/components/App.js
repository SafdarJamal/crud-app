import React, { Component } from 'react';
import './App.css';
import employeesData from '../employeesData';
import Swal from 'sweetalert2';

import LoginForm from './LoginForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
      date: '',
      employeesData,
      addClicked: false,
      editeClicked: false,
      helper: true
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

  onLoginSuccess() {
    this.setState({ isLoggedIn: true });
  }

  dataTables() {
    return (
      <div className="container">
        <header>
          <h1>Employees Data</h1>
          <div className="main-btns">
            <button onClick={() => this.setState({ addClicked: true })}>
              Add Employee
            </button>
            <button
              onClick={() => this.logout()}
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
            {this.state.employeesData.length > 0 ? (
              this.state.employeesData.map((employee, i) => (
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

  addForm() {
    return (
      <div className="container">
        <form>
          <h1>Add Employee</h1>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            onChange={e => this.setState({ lastName: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label htmlFor="salary">Salary ($)</label>
          <input
            type="number"
            id="salary"
            onChange={e => this.setState({ salary: e.target.value })}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            onChange={e => this.setState({ date: e.target.value })}
          />
          <div className="main-btns">
            <input type="button" onClick={() => this.add()} value="Add" />
            <input
              type="button"
              onClick={() =>
                this.setState({
                  addClicked: false,
                  firstName: '',
                  lastName: '',
                  email: '',
                  salary: '',
                  date: ''
                })
              }
              value="Cancel"
              className="accent-button cancel"
            />
          </div>
        </form>
      </div>
    );
  }

  add() {
    const {
      firstName,
      lastName,
      email,
      salary,
      date,
      employeesData
    } = this.state;
    if (firstName === '') {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (lastName === '') {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (email === '') {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (salary === '') {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (date === '') {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    }
    const length = this.state.employeesData.length + 1;
    const userData = {
      id: length,
      firstName,
      lastName,
      email,
      salary,
      date
    };
    employeesData.push(userData);
    this.setState({
      employeesData,
      addClicked: false,
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
      date: ''
    });
    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'New employee added',
      showConfirmButton: false,
      timer: 1500
    });
    // console.log(this.state.employeesData);
  }

  delete(id) {
    const employeesData = this.state.employeesData;
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
      } else if (result.dismiss === 'cancel') {
        return false;
      }
    });
  }

  showUpdate(id) {
    const userData = this.state.employeesData.filter(
      employee => employee.id === id
    );
    this.setState({
      helper: false,
      editeClicked: true,
      // userData: userData[0],
      id: userData[0].id,
      firstName: userData[0].firstName,
      lastName: userData[0].lastName,
      email: userData[0].email,
      salary: userData[0].salary,
      date: userData[0].date
    });
    // console.log(userData[0]);
  }

  updateForm() {
    return (
      <div className="container">
        <form>
          <h1>Update Employee</h1>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            defaultValue={this.state.firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            defaultValue={this.state.lastName}
            onChange={e => this.setState({ lastName: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            defaultValue={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label htmlFor="salary">Salary ($)</label>
          <input
            type="number"
            id="salary"
            defaultValue={this.state.salary}
            onChange={e => this.setState({ salary: e.target.value })}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            defaultValue={this.state.date}
            onChange={e => this.setState({ date: e.target.value })}
          />
          <div className="main-btns">
            <input type="button" onClick={() => this.update()} value="Update" />
            <input
              type="button"
              onClick={() =>
                this.setState({
                  editeClicked: false,
                  helper: true,
                  id: '',
                  firstName: '',
                  lastName: '',
                  email: '',
                  salary: '',
                  date: ''
                })
              }
              value="Cancel"
              className="accent-button cancel"
            />
          </div>
        </form>
      </div>
    );
  }

  update() {
    const { id, employeesData } = this.state;
    let { firstName, lastName, email, salary, date } = this.state;
    if (firstName === '') {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (lastName === '') {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (email === '') {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (salary === '') {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (date === '') {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    }
    const newData = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    };
    employeesData.map((employee, i) => {
      employee.id === newData.id
        ? employeesData.splice(i, 1, newData)
        : Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          });
      return false;
    });
    this.setState({
      employeesData,
      editeClicked: false,
      helper: true,
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
      date: ''
    });
    Swal.fire({
      position: 'center',
      type: 'success',
      title: `${firstName} ${lastName} data updated.`,
      showConfirmButton: false,
      timer: 1500
    });
    // console.log(this.state.employeesData);
  }

  logout() {
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
            this.setState({
              inputEmail: '',
              inputPassword: '',
              isUser: false
            });
            // console.log(this.state);
          }
        });
      }
    });
  }

  render() {
    const { isLoggedIn, addClicked, editeClicked, helper } = this.state;
    return (
      <div>
        {!isLoggedIn && <LoginForm onLoginSuccess={this.onLoginSuccess} />}
        {isLoggedIn && helper && !addClicked && this.dataTables()}
        {isLoggedIn && addClicked && this.addForm()}
        {isLoggedIn && editeClicked && this.updateForm()}
      </div>
    );
  }
}

export default App;
