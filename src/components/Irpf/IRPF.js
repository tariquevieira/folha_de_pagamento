import React, { Component } from 'react';

export default class IRPF extends Component {
  render() {
    const { baseIRPFP, discountIRPFP } = this.props;
    console.log(baseIRPFP + ' ' + discountIRPFP);

    return (
      <div>
        <div>
          <span>Base IRPF: </span>
          <span>R${baseIRPFP}</span>
        </div>
        <div>
          <span>Desconto: </span>
          <span>R${discountIRPFP}</span>
        </div>
      </div>
    );
  }
}
