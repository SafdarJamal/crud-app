import React, { Component } from 'react';
import Swal from 'sweetalert2';

class EditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.selectedEmployee.id,
      firstName: props.selectedEmployee.firstName,
      lastName: props.selectedEmployee.lastName,
      email: props.selectedEmployee.email,
      salary: props.selectedEmployee.salary,
      date: props.selectedEmployee.date
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleInputChange(propName, e) {
    this.setState({ [propName]: e.target.value });
  }

  handleUpdate() {
    const { id, firstName, lastName, email, salary, date } = this.state;
    const { onUpdateSuccess } = this.props;

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
    } else if (email.indexOf(' ') !== -1) {
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

    const employeeData = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    };

    onUpdateSuccess(id, employeeData);
  }

  render() {
    const { firstName, lastName, email, salary, date } = this.state;
    const { handleEditCancel } = this.props;

    return (
      <div className="container">
        <form>
          <h1>Edit Employee Data</h1>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="firstName"
            defaultValue={firstName}
            onChange={e => this.handleInputChange('firstName', e)}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lastName"
            defaultValue={lastName}
            onChange={e => this.handleInputChange('lastName', e)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            defaultValue={email}
            onChange={e => this.handleInputChange('email', e)}
          />
          <label htmlFor="salary">Salary ($)</label>
          <input
            type="number"
            id="salary"
            defaultValue={salary}
            onChange={e => this.handleInputChange('salary', e)}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            defaultValue={date}
            onChange={e => this.handleInputChange('date', e)}
          />
          <div className="main-btns">
            <input type="button" onClick={this.handleUpdate} value="Update" />
            <input
              type="button"
              onClick={handleEditCancel}
              value="Cancel"
              className="accent-button cancel"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditForm;
