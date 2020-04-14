import React from 'react';

import sales from './../../assets/sale.jpg'

export default class Produto extends React.Component {
  render(){
    return (
      
      <>
      <li className="h-catalogo-item">
        <a href="#">
            <figure className="h-catalogo-item--product">
              
              <img className="h-product--img"
              src={this.props.picture}
                />

              <img className="h-product--img-sale"
              src={sales}
                />

            </figure>
            <div className="h-catalogo-item--description">
              <div className="h-item-title">
                {this.props.name}
              </div>
              <div className="h-item-price">
                R$ {this.props.price}
              </div>
              <div className="h-item-conditions">
                <b>6 x</b> de <b>R$ 46,66</b> sem juros 
              </div>
            </div>
        </a>
      </li>
      </>
      
    )
  }
}