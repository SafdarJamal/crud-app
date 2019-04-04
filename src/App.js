import React, { Component } from 'react';
import './App.css';
import Swal from 'sweetalert2';

const employeesData = [
  {
    id: 1,
    firstName: 'Sarah',
    lastName: 'Edu',
    email: 'sarah@example.com',
    salary: '40000',
    date: '2019-03-10'
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'Martin',
    email: 'bob@example.com',
    salary: '175000',
    date: '2010-11-01'
  },
  {
    id: 3,
    firstName: 'Rolf',
    lastName: 'Hegdal',
    email: 'rolf@example.com',
    salary: '470000',
    date: '2010-06-15'
  },
  {
    id: 4,
    firstName: 'Susan',
    lastName: 'Jordon',
    email: 'susan@example.com',
    salary: '68000',
    date: '2019-02-05'
  },
  {
    id: 5,
    firstName: 'Arsenio',
    lastName: 'Grant',
    email: 'arsenio@example.com',
    salary: '68000',
    date: '2017-04-18'
  },
  {
    id: 6,
    firstName: 'Tim',
    lastName: 'Fisher',
    email: 'fisher@example.com',
    salary: '120000',
    date: '2014-04-19'
  },
  {
    id: 7,
    firstName: 'Alex',
    lastName: 'Smith',
    email: 'alex@example.com',
    salary: '87000',
    date: '2012-05-07'
  },
  {
    id: 8,
    firstName: 'Ede',
    lastName: 'Judge',
    email: 'ede@example.com',
    salary: '9000',
    date: '2018-01-20'
  },
  {
    id: 9,
    firstName: 'Mark',
    lastName: 'jonas',
    email: 'mark@example.com',
    salary: '71000',
    date: '2017-08-27'
  },
  {
    id: 10,
    firstName: 'Sasha',
    lastName: 'Grief',
    email: 'sasha@example.com',
    salary: '94000',
    date: '2016-07-11'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminEmail: 'admin@example.com',
      adminPassword: 'qwerty',
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
      date: '',
      isUser: false,
      employeesData,
      addClicked: false,
      editeClicked: false,
      helper: true
    };

    // this.delete = this.delete.bind(this);
    // this.adminLogin = this.adminLogin.bind(this);
    // this.loginForm = this.loginForm.bind(this);
    // this.logout = this.logout.bind(this);
  }

  loginForm() {
    return (
      <div className="container">
        <form>
          <h1>Admin Login</h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={e => this.setState({ inputEmail: e.target.value })}
            placeholder="admin@example.com"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e => this.setState({ inputPassword: e.target.value })}
            placeholder="qwerty"
          />
          <input
            type="button"
            onClick={() => this.login()}
            value="Login"
            className="login-btn"
          />
        </form>
      </div>
    );
  }

  login() {
    const { adminEmail, adminPassword, inputEmail, inputPassword } = this.state;
    if (inputEmail === adminEmail && inputPassword === adminPassword) {
      Swal.fire({
        timer: 1500,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
        onClose: () => {
          this.setState({ isUser: true });
          Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Succesfully logged in',
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    } else {
      Swal.fire({
        timer: 1500,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
        onClose: () => {
          Swal.fire({
            position: 'center',
            type: 'error',
            title: 'Incorrect credentials !',
            showConfirmButton: true
          });
        }
      });
    }
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
              onClick={() => this.setState({ addClicked: false })}
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
        let count = id;
        count -= 1;
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Deleted!',
          text: `${employeesData[count].firstName} ${
            employeesData[count].lastName
          } has been deleted.`,
          showConfirmButton: false,
          timer: 1500
        });
        const updatedList = this.state.employeesData.filter(
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
      userData: userData[0],
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
            defaultValue={this.state.userData.firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            defaultValue={this.state.userData.lastName}
            onChange={e => this.setState({ lastName: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            defaultValue={this.state.userData.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label htmlFor="salary">Salary ($)</label>
          <input
            type="number"
            id="salary"
            defaultValue={this.state.userData.salary}
            onChange={e => this.setState({ salary: e.target.value })}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            defaultValue={this.state.userData.date}
            onChange={e => this.setState({ date: e.target.value })}
          />
          <div className="main-btns">
            <input type="button" onClick={() => this.update()} value="Update" />
            <input
              type="button"
              onClick={() =>
                this.setState({ editeClicked: false, helper: true })
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
    const { userData, employeesData } = this.state;
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
      id: userData.id,
      firstName,
      lastName,
      email,
      salary,
      date
    };
    employeesData.map((employee, i) => {
      employee.id === newData.id
        ? employeesData.splice(i, 1, newData)
        : console.log();
      return '';
    });
    this.setState({
      employeesData,
      editeClicked: false,
      helper: true,
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
    // console.log(this.state);
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
    const { isUser, addClicked, editeClicked, helper } = this.state;
    // console.log(this.state);
    return (
      <div>
        {!isUser && this.loginForm()}
        {isUser && helper && !addClicked && this.dataTables()}
        {isUser && addClicked && this.addForm()}
        {isUser && editeClicked && this.updateForm()}
      </div>
    );
  }
}

export default App;
