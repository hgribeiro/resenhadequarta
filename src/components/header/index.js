import React from 'react';


import logo from '../../assets/Logo - Black.png';
import logo2 from '../../assets/Logo - Alternate Layout - Flush Mahogany.png'

export default class Header extends React.Component {
  render(){
    return (
      
      <header className='h-header'>
        <div className="h-header-row">
            <div className="h-header-row-logo">
                <img src={logo2} alt="logomarca"/>
            </div>

            <div className="h-header-row- menu">
              <nav className="navbar">
                <ul>
                  <li className="navbar-item">Sobre</li>
                  <li className="navbar-item">Produtos</li>
                  <li className="navbar-item">Contato</li>
                </ul>
                <div className="card">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
              </nav>
            </div>
        </div>  
        <div className="h-header-colum">
          <div className="h-header-colum-promo">
            <div className="redi"><p>promoçoes</p></div>
            <p className="nota">nosobreCOVID-19</p>
          </div>
          
        </div>
      </header>
     
    )
  }
}