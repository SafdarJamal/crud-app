import React, { Component } from 'react';
import './App.css';
import Swal from 'sweetalert2';

import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
      date: '',
      addClicked: false,
      editeClicked: false,
      helper: true
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
  }

  onLoginSuccess() {
    this.setState({ isLoggedIn: true });
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
        {isLoggedIn && <Dashboard />}
        {/* {isLoggedIn && helper && !addClicked && <Dashboard />}
        {isLoggedIn && addClicked && this.addForm()}
        {isLoggedIn && editeClicked && this.updateForm()} */}
      </div>
    );
  }
}

export default App;
