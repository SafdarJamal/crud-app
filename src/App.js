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
      email: 'admin@a.com',
      password: 'qwerty',
      isUser: false,
      employeesData
    };

    // this.adminLogin = this.adminLogin.bind(this);
    // this.renderLogin = this.renderLogin.bind(this);
    // this.logout = this.logout.bind(this);
  }

  adminLogin() {
    const { email, password, inputEmail, inputPassword } = this.state;
    if (inputEmail === email && inputPassword === password) {
      this.setState({ isUser: true });
      alert('Succesfully logged in');
      console.log('Admin logged in');
    } else {
      alert('Incorrect credentials');
      console.log(this.state);
    }
  }

  renderLogin() {
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
            onClick={() => this.adminLogin()}
            value="Login"
          />
        </form>
      </div>
    );
  }

  employeesTable() {
    return (
      <div className="container">
        <header>
          <h1>Employees Data</h1>
          <div className="main-btns">
            <button>Add Employee</button>
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
                    <button className="button muted-button actions">
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

  logout() {
    this.setState({ inputEmail: '', inputPassword: '', isUser: false });
    console.log('Logged out');
    console.log(this.state);
  }

  render() {
    const { isUser } = this.state;
    return (
      <div>
        {!isUser && this.renderLogin()}
        {isUser && this.employeesTable()}
      </div>
    );
  }
}

export default App;
