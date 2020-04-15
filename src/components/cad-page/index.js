import React from 'react';
import axios from 'axios';

import Footer from '../footer';
import PaymentBox from '../payment-box';
import Header from '../header';

export default class CadPage extends React.Component {
  
  state = {
    nome: '',
    nomeErro: false,
    sobrenome: '',
    email: '',
    senha: '',
    idade: null,
    confirma_senha: '',
    erros: [],
    rotate: 0,
    mensagemDeSucesso: '',
    cadastroValidado: false
};

  
  render(){
    return (
      
      <>  

          <Header
          header = "cad"
          />  

          <div className="h-card">
            <div className="h-card-form">
              <div className="h-card-form-item">
                <div className="h-card-form-title">
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
                      <label htmlFor="nome">WHATSAPP</label>
                      <input type="name" name="" id=""/>
                    </div>
                    <div className="h-form-campo">
                      <label htmlFor="nome">TELEFONE</label>
                      <input type="name" name="" id=""/>
                    </div>
                  </div>
                    <div className="h-form-campo promo">
                      <input type="checkbox" name="" id=""/>
                      <label htmlFor="nome">Quero receber e-mails com promoções.</label>
                    </div>
                </form>
              </div>
              <div className="h-card-form-item">
                <div className="h-card-form-title">
                <i class="fa fa-home" aria-hidden="true"></i>
                  <p>ENDEREÇO</p>
                </div>
                <p>Escreva seu melhor endereço para que possamos entregar esse produto maravilhoso.</p>
                <form action="">
                <div className="h-form-dois">
                    <div className="h-form-campo">
                      <label htmlFor="nome">CEP</label>
                      <input type="name" name="" id=""/>
                    </div>
                    <div className="h-form-campo">
                      <label htmlFor="nome">ENDERECO</label>
                      <input type="name" name="" id=""/>
                    </div>
                  </div>
                  <div className="h-form-dois">
                    <div className="h-form-campo">
                      <label htmlFor="nome">BAIRRO</label>
                      <input type="name" name="" id=""/>
                    </div>
                    <div className="h-form-campo">
                      <label htmlFor="nome">CIDADE</label>
                      <input type="name" name="" id=""/>
                    </div>
                    <div className="h-form-campo">
                      <label htmlFor="nome">ESTADO</label>
                      <input type="name" name="" id=""/>
                    </div>
                  </div>
                  <div className="h-form-dois">
                    <div className="h-form-campo">
                      <label htmlFor="nome">CPF</label>
                      <input type="name" name="" id=""/>
                    </div>
                    <div className="h-form-campo">
                      <label htmlFor="nome">RG</label>
                      <input type="name" name="" id=""/>
                    </div>
                    <div className="h-form-campo">
                      <label htmlFor="nome">NASCIMENTO</label>
                      <input type="name" name="" id=""/>
                    </div>
                  </div>
                  <button type="submit">FINALIZAR</button>
                </form>
                
              </div>
              <div className="h-card-form-item">
              <div className="h-card-form-title">
              <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
                  <p>RESUMO DO PEDIDO</p>
                </div>
                <div className="h-resumo">

                </div>
                <div className="h-valor">

                </div>
              </div>
            </div>
            <div className="h-card-payment">
               <PaymentBox/>
            </div>
          </div>

          <Footer
          newsletter = ''
          />
    </>  
    )
  }
}