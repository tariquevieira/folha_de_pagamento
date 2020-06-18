import React, { Component } from 'react';

export default class NetSalary extends Component {
  render() {
    return (
      <div>
        <span>Salario Líquido: </span>
        <span>R${this.props.netSalaryP}</span>
      </div>
    );
  }
}
