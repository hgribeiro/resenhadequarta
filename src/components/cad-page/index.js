import React from 'react';

import Footer from '../footer';

export default class CadPage extends React.Component {
  render(){
    return (
      
      <>
          <div className="h-card">
            <div className="h-card-form">
              <div className="h-card-form-item">
                <div className="h-card-form-item title">
                  <i className="fa fa-user-o" aria-hidden="true"></i>
                  <p>DADOS PESSOAIS</p>
                </div>
                <form>
                  <p>Solicitamos apenas as informações essenciais para a realização da compra.</p>
                  <div className="h-form-campo">
                    <label htmlFor="email">E-MAIL</label>
                     <input type="email" placeholder="Seu melhor e-mail"/>
                  </div>
                  <div className="h-form-dois">
                    <div className="h-form-campo">
                      <label htmlFor="nome">PRIMEIRO NOME</label>
                      <input type="name" name="" id=""/>
                    </div>
                    <div className="h-form-campo">
                      <label htmlFor="nome">ÚLTIMO NOME</label>
                      <input type="name" name="" id=""/>
                    </div>
                  </div>
                  <div className="h-form-dois">
                    <div className="h-form-campo">
                      <label htmlFor="nome">PRIMEIRO NOME</label>
                      <input type="name" name="" id=""/>
                    </div>
                    <div className="h-form-campo">
                      <label htmlFor="nome">ÚLTIMO NOME</label>
                      <input type="name" name="" id=""/>
                    </div>
                  </div>
                </form>
              </div>
              <div className="h-card-form-item">
                endereço from
              </div>
              <div className="h-card-form-item">
                item que coloquei no carrinho
              </div>
            </div>
            <div className="h-card-payment">
                agamento
            </div>
          </div>

          <Footer
          newsletter = ''
          />
    </>  
    )
  }
}