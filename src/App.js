import React, { Component } from 'react';
import './App.css';

const employeesData = [
  {
    id: 1,
    firstName: 'Sarah',
    lastName: 'jane',
    email: 'jane@example.com',
    salary: '40000',
    date: '10-3-2019'
  },
  {
    id: 2,
    firstName: 'Sarah',
    lastName: 'jane',
    email: 'jane@example.com',
    salary: '40000',
    date: '10-3-2019'
  },
  {
    id: 3,
    firstName: 'Sarah',
    lastName: 'jane',
    email: 'jane@example.com',
    salary: '40000',
    date: '10-3-2019'
  },
  {
    id: 4,
    firstName: 'Sarah',
    lastName: 'jane',
    email: 'jane@example.com',
    salary: '40000',
    date: '10-3-2019'
  },
  {
    id: 5,
    firstName: 'Sarah',
    lastName: 'jane',
    email: 'jane@example.com',
    salary: '40000',
    date: '10-3-2019'
  },
  {
    id: 6,
    firstName: 'Sarah',
    lastName: 'jane',
    email: 'jane@example.com',
    salary: '40000',
    date: '10-3-2019'
  },
  {
    id: 7,
    firstName: 'Sarah',
    lastName: 'jane',
    email: 'jane@example.com',
    salary: '40000',
    date: '10-3-2019'
  },
  {
    id: 8,
    firstName: 'Sarah',
    lastName: 'jane',
    email: 'jane@example.com',
    salary: '40000',
    date: '10-3-2019'
  },
  {
    id: 9,
    firstName: 'Sarah',
    lastName: 'jane',
    email: 'jane@example.com',
    salary: '40000',
    date: '10-3-2019'
  },
  {
    id: 10,
    firstName: 'Sarah',
    lastName: 'jane',
    email: 'jane@example.com',
    salary: '40000',
    date: '10-3-2019'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminEmail: 'admin@a.com',
      adminPassword: 'qwerty',
      isUser: true,
      employeesData,
      addClicked: false
    };

    // this.delete = this.delete.bind(this);
    // this.adminLogin = this.adminLogin.bind(this);
    // this.loginForm = this.loginForm.bind(this);
    // this.logout = this.logout.bind(this);
  }

  login() {
    const { adminEmail, adminPassword, inputEmail, inputPassword } = this.state;
    if (inputEmail === adminEmail && inputPassword === adminPassword) {
      this.setState({ isUser: true });
      // alert('Succesfully logged in');
      console.log('Admin logged in');
    } else {
      alert('Incorrect credentials');
      console.log(this.state);
    }
  }

  loginForm() {
    return (
      <div className="container">
        <form>
          <h1>Admin login</h1>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={e => this.setState({ inputEmail: e.target.value })}
            placeholder="admin@a.com"
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
              this.state.employeesData.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.email}</td>
                  <td>{employee.salary}</td>
                  <td>{employee.date} </td>
                  <td>
                    <button className="button muted-button">Edit</button>
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
                <td colSpan={6}>No Employees</td>
              </tr>
            )}
          </tbody>
        </table>
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
      addClicked: false
    });
    console.log(this.state.employeesData);
  }

  addForm() {
    return (
      <div className="container">
        <form>
          <h1>Add Emplyee</h1>
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

  delete(id) {
    const updatedList = this.state.employeesData.filter(
      employee => employee.id !== id
    );
    this.setState({ employeesData: updatedList });
    console.log(updatedList);
  }
  logout() {
    this.setState({ inputEmail: '', inputPassword: '', isUser: false });
    console.log('Logged out');
    console.log(this.state);
  }

  render() {
    const { isUser, addClicked } = this.state;
    console.log(this.state);
    return (
      <div>
        {!isUser && this.loginForm()}
        {isUser && !addClicked && this.dataTables()}
        {isUser && addClicked && this.addForm()}
      </div>
    );
  }
}

export default App;
