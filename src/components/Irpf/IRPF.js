import React, { Component } from 'react';

export default class IRPF extends Component {
  render() {
    const { baseIRPFP, discountIRPFP, percIRPFP } = this.props;
    console.log(baseIRPFP + ' ' + discountIRPFP);

    return (
      <div>
        <div>
          <span>Base IRPF: </span>
          <span>R${baseIRPFP.toFixed(2)}</span>
        </div>
        <div>
          <span>Desconto: </span>
          <span>
            R${discountIRPFP.toFixed(2)} ( {percIRPFP}%)
          </span>
        </div>
      </div>
    );
  }
}
