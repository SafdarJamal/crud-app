import React, { Component } from 'react';

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
  }

  handleInputChange(propName, e) {
    this.setState({ [propName]: e.target.value });
  }

  render() {
    const { firstName } = this.state;
    console.log(firstName);

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
}

export default AddForm;
