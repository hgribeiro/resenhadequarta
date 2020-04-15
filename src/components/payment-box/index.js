import React from 'react';

import sales from './../../assets/sale.jpg'

export default class PaymentBox extends React.Component {
  render(){
    return (
      
      <>
          <div className="h-payment">
            <div className="h-card-form-title">
                 <i class="fa fa-credit-card" aria-hidden="true"></i>
                  <p>PAGAMENTO</p>
            </div>
            <div className="h-boleto">
              <input type="radio" id="my-radio-2" name="cartao" />
              <label>Boleto</label>
            </div>
            <div className="h-cartao">
            <input type="radio" id="my-radio-2" name="cartao" />
            <label>Cartão</label>
            </div>
          </div>
      </>
      
    )
  }
}