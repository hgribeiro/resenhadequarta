import React from 'react';


import logo from '../../assets/Logomark - Black.png';
import logo2 from '../../assets/Logo - Alternate Layout - Flush Mahogany.png'
import MainPage from '../main-page';

export default class Header extends React.Component {
  render(){

    if (this.props.header === "main"){
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

          </div>
          
        </div>
      </header>
      )
    }

    if (this.props.header === "cad"){
      return (
        <header className='h-header-cad'>
          
              <div className="h-header-cad-logo">
                  <img src={logo} alt="logomarca"/>
              </div>
              <div className="h-header-cad-itens">
                <div className="h-header-cad-itens1">
                      <div className="h-header-cad-item">
                        <i class="fa fa-truck" aria-hidden="true"></i>
                        <p> FRETE GRÁTIS </p>  
                      </div>
                      <div className="h-header-cad-item">
                        <i class="fa fa-truck" aria-hidden="true"></i>
                        <p> FRETE GRÁTIS </p>  
                      </div>
                </div>
                    
                <div className="h-header-cad-itens1">
                      <div className="h-header-cad-item">
                        <i class="fa fa-truck" aria-hidden="true"></i>
                        <p> FRETE GRÁTIS </p>  
                      </div>
                      <div className="h-header-cad-item">
                        <i class="fa fa-truck" aria-hidden="true"></i>
                        <p> FRETE GRÁTIS </p>  
                      </div>
                </div>
              </div>
      </header>
      )
    }


  }
}