import React, { Component } from 'react';
import Swal from 'sweetalert2';

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      salary: null,
      date: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleInputChange(propName, e) {
    this.setState({ [propName]: e.target.value });
  }

  handleAdd() {
    const { firstName, lastName, email, salary, date } = this.state;
    const { employeesData, onAddSuccess } = this.props;

    if (firstName === null) {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (lastName === null) {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (email === null) {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (salary === null) {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    } else if (date === null) {
      return Swal.fire({
        position: 'center',
        type: 'error',
        title: 'All fields are required !',
        showConfirmButton: true
      });
    }

    const id = employeesData.length + 1;
    const newEmployeeData = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date
    };

    employeesData.push(newEmployeeData);
    onAddSuccess(employeesData);

    Swal.fire({
      position: 'center',
      type: 'success',
      title: 'New employee added',
      showConfirmButton: false,
      timer: 1500
    });
  }

  render() {
    const { handleAddCancel } = this.props;

    return (
      <div className="container">
        <form>
          <h1>Add Employee</h1>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={e => this.handleInputChange('firstName', e)}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={e => this.handleInputChange('lastName', e)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={e => this.handleInputChange('email', e)}
          />
          <label htmlFor="salary">Salary ($)</label>
          <input
            type="number"
            id="salary"
            onChange={e => this.handleInputChange('salary', e)}
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            onChange={e => this.handleInputChange('date', e)}
          />
          <div className="main-btns">
            <input type="button" onClick={this.handleAdd} value="Add" />
            <input
              type="button"
              onClick={handleAddCancel}
              value="Cancel"
              className="accent-button cancel"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddForm;
