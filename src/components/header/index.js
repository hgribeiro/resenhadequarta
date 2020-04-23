import React from 'react';


import logo from '../../assets/Logomark - Black.png';
import logo2 from '../../assets/Logo - Alternate Layout - Flush Mahogany.png'
import { Link } from 'react-router-dom';

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
                  <Link to="/"><li className="navbar-item">Sobre</li></Link>
                  <li className="navbar-item">Produtos</li>
                  <li className="navbar-item">Contato</li>
                </ul>
                <div className="card">
                <Link to="/cad"><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
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
                        <i className="fa fa-truck" aria-hidden="true"></i>
                        <p> FRETE GRÁTIS </p>  
                      </div>
                      <div className="h-header-cad-item">
                      <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                      
                        <p> ENTREGA  AGENDADA </p>  
                         
                      
                      </div>
                </div>
                    
                <div className="h-header-cad-itens1">
                      <div className="h-header-cad-item end">
                        <i className="fa fa-shield" aria-hidden="true"></i>
                        <p> COMPRA <i>SEGURA</i> </p>  
                      </div>
                      <div className="h-header-cad-item end">
                         <i className="fa fa-exchange" aria-hidden="true"></i>
                        <p> TROCA <i>GRÁTIS </i></p>  
                      </div>
                </div>
              </div>
      </header>
      )
    }


  }
}