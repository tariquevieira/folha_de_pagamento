import React, { Component } from 'react';
import Salary from './components/Salary/Salary';
import { calculateSalaryFrom } from './components/Helpers/calculeSalaryHelprs';
import Inss from './components/Inss/inss';
import IRPF from './components/Irpf/IRPF';
import NetSalary from './components/NetSalary/NetSalary';
import Bar from './components/Bar/Bar';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: 0.0,
      baseINSS: 0.0,
      discountINSS: 0.0,
      baseIRPF: 0.0,
      discountIRPF: 0.0,
      netSalary: 0.0,
      bar1: 0.0,
      bar2: 0.0,
      bar3: 100.0,
      percIRPF: 0.0,
      percINSS: 0.0,
    };
  }
  percentBars = (a, b) => {
    const value = Math.trunc((a / b) * 100);
    return value;
  };
  percentNumbers = (a, b) => {
    let value = (a / b) * 100;
    console.log(value);
    return value.toFixed(2);
  };

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
    /*
    ******************* Uma Alternativa ***************************
    const bar1 = Math.trunc((discountINSS / fullSalary) * 100) | 0;
    const bar2 = Math.trunc((discountIRPF / fullSalary) * 100) | 0;
    const bar3 = Math.trunc((netSalary / fullSalary) * 100);

    console.log('Bar1: ' + bar1);
    console.log('Bar2: ' + bar2);
    console.log('Bar3: ' + bar3);*/
    const bar1 = this.percentBars(discountINSS, fullSalary);
    const bar2 = this.percentBars(discountIRPF, fullSalary);
    const bar3 = this.percentBars(netSalary, fullSalary);
    console.log('Bar1: ' + bar1);
    console.log('Bar2: ' + bar2);
    console.log('Bar3: ' + bar3);

    const percINSS = this.percentNumbers(discountINSS, fullSalary);
    const percIRPF = this.percentNumbers(discountIRPF, fullSalary);
    this.setState({
      fullSalary: fullSalary,
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      bar1,
      bar2,
      bar3,
      percINSS,
      percIRPF,
    });
  };

  render() {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      bar1,
      bar2,
      bar3,
      percINSS,
      percIRPF,
    } = this.state;
    return (
      <div>
        <h1>Folha de Pagamento - Trabalho prático</h1>
        <br />
        <Salary onChangeSalary={this.handleSalary} />
        <br />
        <Inss
          inssFull={baseINSS}
          percINSSP={percINSS}
          discountINSSP={discountINSS}
        />
        <br />
        <IRPF
          baseIRPFP={baseIRPF}
          percIRPFP={percIRPF}
          discountIRPFP={discountIRPF}
        />
        <br />
        <NetSalary netSalaryP={netSalary} />
        <br />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Bar value={bar1} color="orange" />
          <Bar value={bar2} color="red" />
          <Bar value={bar3} color="green" />
        </div>
      </div>
    );
  }
}
