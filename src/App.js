import React, { Component } from 'react';
import Salary from './components/Salary/Salary';
import { calculateSalaryFrom } from './components/Helpers/calculeSalaryHelprs';
import Inss from './components/Inss/inss';
import IRPF from './components/Irpf/IRPF';
import NetSalary from './components/NetSalary/NetSalary';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: '',
      baseINSS: '',
      discountINSS: '',
      baseIRPF: '',
      discountIRPF: '',
      netSalary: '',
    };
  }
  handleSalary = (valueSalary) => {
    const fullSalary = valueSalary;
    const salary = calculateSalaryFrom(fullSalary);
    console.log(salary);
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = salary;
    console.log('Base INSS: ' + baseINSS);
    console.log('Discount INSS: ' + discountINSS);
    console.log('Base IRPF: ' + baseIRPF);
    console.log('Discount IRPF: ' + discountIRPF);
    console.log('netSalary: ' + netSalary);

    this.setState({
      fullSalary: fullSalary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    });
  };

  render() {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = this.state;
    return (
      <div>
        <h1>Folha de Pagamento - Trabalho prático</h1>
        <br />
        <Salary onChangeSalary={this.handleSalary} />
        <br />
        <Inss inssFull={baseINSS} discountINSSP={discountINSS} />
        <br />
        <IRPF baseIRPFP={baseIRPF} discountIRPFP={discountIRPF} />
        <br />
        <NetSalary netSalaryP={netSalary} />
      </div>
    );
  }
}
