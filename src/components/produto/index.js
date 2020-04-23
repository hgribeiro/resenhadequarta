import React from 'react';

import sales from './../../assets/sale.jpg'

import {
  Link
} from 'react-router-dom';


export default class Produto extends React.Component {
  state = {

  }

  render(){

    const preco = this.props.valor/1;
    const parcelado = preco / this.props.qntParcelas;
    
    
    let saleTag='';
    if(this.props.sale) {
      saleTag = (
        <img className="h-product--img-sale"
              src={sales}
                />
      )
    }

    return (
      // onMouseOver={}
      <>
      <li className="h-catalogo-item" >
        <a href="#2222"  >
            <figure className="h-catalogo-item--product">
              
              <img className="h-product--img"
              src={this.props.picture}
              alt = {`Imagem do produto: ${this.props.titleProduto}`}
                />

              {saleTag}

            </figure>
            <div className="h-catalogo-item--description">
              <div className="h-item-title">
                   {this.props.titleProduto}
              </div>
              <div className="h-item-price">
                R$ {preco.toFixed(2)}
              </div>
              <div className="h-item-conditions">
                <b>{this.props.qntParcelas} x</b> de <b>R$ {parcelado.toFixed(2)}</b> sem juros 
              </div>
            </div>
        </a>
        <div className="h-holder">
          {/* <div className="h-button-black">
            <button>ADICIONAR AO CARRINHO</button>
          </div> */}
          <div className="h-button-black">
          <Link to="/cad"><button to= "/cad" >COMPRAR AGORA</button> </Link>
          </div>
        </div>
        
      </li>
      </>
      
    )
  }
}