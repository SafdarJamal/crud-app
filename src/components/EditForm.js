import React, { Component } from 'react';

class EditForm extends Component {
  render() {
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
}

export default EditForm;
