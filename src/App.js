import React, { Component } from 'react';
import './App.css';

const employeesData = [
  {
    id: 1,
    firstName: 'Sarah',
    lastName: 'Edu',
    email: 'sarah@example.com',
    salary: '40000',
    date: '2019-3-10'
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
    date: '2014-6-15'
  },
  {
    id: 4,
    firstName: 'Susan',
    lastName: 'Jordon',
    email: 'susan@example.com',
    salary: '68000',
    date: '2019-2-05'
  },
  {
    id: 5,
    firstName: 'Arsenio',
    lastName: 'Grant',
    email: 'arsenio@example.com',
    salary: '68000',
    date: '2017-4-18'
  },
  {
    id: 6,
    firstName: 'Tim',
    lastName: 'Fisher',
    email: 'fisher@example.com',
    salary: '120000',
    date: '2014-4-19'
  },
  {
    id: 7,
    firstName: 'Alex',
    lastName: 'Smith',
    email: 'alex@example.com',
    salary: '87000',
    date: '2012-5-07'
  },
  {
    id: 8,
    firstName: 'Ede',
    lastName: 'Judge',
    email: 'ede@example.com',
    salary: '9000',
    date: '2018-1-20'
  },
  {
    id: 9,
    firstName: 'Mark',
    lastName: 'jonas',
    email: 'mark@example.com',
    salary: '71000',
    date: '2017-8-27'
  },
  {
    id: 10,
    firstName: 'Sasha',
    lastName: 'Grief',
    email: 'sasha@example.com',
    salary: '94000',
    date: '2016-7-11'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminEmail: 'admin@g.com',
      adminPassword: 'qwerty',
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

  login() {
    const { adminEmail, adminPassword, inputEmail, inputPassword } = this.state;
    if (inputEmail === adminEmail && inputPassword === adminPassword) {
      this.setState({ isUser: true });
      alert('Succesfully logged in');
      // console.log('Admin logged in');
    } else {
      alert('Incorrect credentials');
      // console.log(this.state);
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
            placeholder="admin@g.com"
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
    // console.log(this.state.employeesData);
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

  delete(id) {
    const updatedList = this.state.employeesData.filter(
      employee => employee.id !== id
    );
    this.setState({ employeesData: updatedList });
    // console.log(updatedList);
  }

  showUpdate(id) {
    // console.log(id);
    const userData = this.state.employeesData.filter(
      employee => employee.id === id
    );
    // this.setState({ employeesData: updatedList });
    this.setState({ helper: false, editeClicked: true, userData: userData[0] });
    // console.log(userData[0]);
  }

  update() {
    const {
      firstName,
      lastName,
      email,
      salary,
      date,
      userData,
      employeesData
    } = this.state;
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
        : console.log('');
      return '';
    });
    this.setState({
      employeesData,
      editeClicked: false,
      helper: true
    });
    // console.log(this.state);
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
            placeholder={this.state.userData.firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            placeholder={this.state.userData.lastName}
            onChange={e => this.setState({ lastName: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder={this.state.userData.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <label htmlFor="salary">Salary ($)</label>
          <input
            type="number"
            id="salary"
            placeholder={this.state.userData.salary}
            onChange={e => this.setState({ salary: e.target.value })}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            placeholder={this.state.userData.date}
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

  logout() {
    this.setState({ inputEmail: '', inputPassword: '', isUser: false });
    // console.log('Logged out');
    // console.log(this.state);
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
