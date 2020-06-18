import React, { Component } from 'react';
import Salary from './components/Salary/Salary';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      salary: 0,
    };
  }
  handleSalary = (valueSalary) => {};
  render() {
    return (
      <div>
        <h1>Folha de Pagamento - Trabalho prático</h1>
        <br />
        <Salary onChangeFilter={this.handleSalary} />
      </div>
    );
  }
}
