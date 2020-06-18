import React, { Component } from 'react';

export default class inss extends Component {
  render() {
    const { inssFull, discountINSSP } = this.props;
    console.log(inssFull + ' ' + discountINSSP);

    return (
      <div>
        <div>
          <span>Base INSS: </span>
          <span>R${inssFull}</span>
        </div>
        <div>
          <span>Desconto: </span>
          <span>R${discountINSSP}</span>
        </div>
      </div>
    );
  }
}
