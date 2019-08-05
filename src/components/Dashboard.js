import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { EMPLOYEES_DATA } from '../constants/employeesData';

import Header from './Header';
import DataTable from './DataTable';
import AddForm from './AddForm';

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

    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
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

  handleAddClick() {
    this.setState({ addClicked: true });
  }

  render() {
    const { employeesData, addClicked } = this.state;

    return (
      <div className="container">
        {!addClicked && (
          <Header
            handleAddClick={this.handleAddClick}
            handleLogout={this.handleLogout}
          />
        )}
        {!addClicked && (
          <DataTable employeesData={employeesData} delete={this.delete} />
        )}
        {addClicked && <AddForm />}
      </div>
    );
  }
}

export default Dashboard;
