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
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                  <p>DADOS PESSOAIS</p>
                </div>
                <form>
                  <p>Solicitamos apenas as informações essenciais para a realização da compra.</p>
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
          newsletter = 'false'
          />
    </>  
    )
  }
}