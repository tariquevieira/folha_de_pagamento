import React, { Component } from 'react';

export default class NetSalary extends Component {
  render() {
    const { netSalaryP, percNetSalaryP } = this.props;
    return (
      <div>
        <span>Salario Líquido: </span>
        <span>
          R${netSalaryP.toFixed(2)} ({percNetSalaryP}%)
        </span>
      </div>
    );
  }
}
