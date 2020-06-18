import React, { Component } from 'react';

export default class Salary extends Component {
  handleInputChange = (event) => {
    const valueSalary = event.target.value;
    this.props.onChangeSalary(valueSalary);
  };
  render() {
    return (
      <div>
        <input type="number" onChange={this.handleInputChange} />
      </div>
    );
  }
}
