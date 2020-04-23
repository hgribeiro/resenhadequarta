import React from 'react';
// import axios from 'axios';

import Footer from '../footer';
import Header from '../header';
import Input from '../input';
import PaymentForm from '../payment-form';

import {
  Redirect

} from 'react-router-dom';

export default class CadPage extends React.Component {
  
  state = {
    nome: '',
    nomeErro: false,
    sobrenome: '',
    sobrenomeError: '',
    email: '',
    emailError: '',
    celular: '',
    celularError: '',
    telefone: '',
    telefoneError: '',
    cep: '',
    cepError: '',
    endereco: '',
    enderecoError: '',
    bairro: '',
    bairroError: '',
    cidade: '',
    cidadeError: '',
    estado: '',
    estadoError: '',
    cpf: '',
    cpfError: '',
    rg: '',
    rgError: '',
    nascimento: '',
    nascimentoError: '',
    meioPagamento: '',
    cadastroValidado: false,

};

validateForm = (event) => {

  let erro = false;
  let novoEstado = {
      ...this.state
  };
  if (this.state.nome.length < 3) {
    erro = true;
    novoEstado['nomeError'] = 'Digite um nome válido'
  } else {
      novoEstado['nomeError'] = null;
  }
  if (this.state.email.length < 5) {
    erro = true;
    novoEstado['emailError'] = 'Digite um e-mail válido'
  } else {
    novoEstado['emailError'] = null;
  }
  if (this.state.endereco.length < 3) {
    erro = true;
    novoEstado['enderecoError'] = 'Digite um endereço válido'
  } else {
    novoEstado['enderecoError'] = null;
  }
  if (this.state.celular.length < 11) {
    erro = true;
    novoEstado['celularError'] = 'Digite um número de celular válido'
  } else {
    novoEstado['celularError'] = null;
  }
  if (this.state.cep.length < 8) {
    erro = true;
    novoEstado['cepError'] = 'Digite um cep válido'
  } else {
    novoEstado['cepError'] = null;
  }
  if (this.state.bairro.length < 2) {
    erro = true;
    novoEstado['bairroError'] = 'Digite um bairro válido'
  } else {
    novoEstado['bairroError'] = null;
  }
  if (this.state.cidade.length < 3) {
    erro = true;
    novoEstado['cidadeError'] = 'Digite uma cidade válido'
  } else {
    novoEstado['cidadeError'] = null;
  }
  if (this.state.cpf.length < 3) {
    erro = true;
    novoEstado['cpfError'] = 'Digite um cpf válido'
  } else {
    novoEstado['cpfError'] = null;
  }
  if (this.state.rg.length < 3) {
    erro = true;
    novoEstado['rgError'] = 'Digite uma RG válido'
  } else {
    novoEstado['rgError'] = null;
  }
  if (this.state.rg.length < 3) {
    erro = true;
    novoEstado['rgError'] = 'Digite uma RG válido'
  } else {
    novoEstado['rgError'] = null;
  }
  if (this.state.rg.length < 3) {
    erro = true;
    novoEstado['rgError'] = 'Digite uma RG válido'
  } else {
    novoEstado['rgError'] = null;
  }
  if (!erro) {
    novoEstado['cadastroValidado'] = true;
  }
  this.setState(novoEstado);

}

atualizarBox = (evento) => {
  let novoEstado = {
    ...this.state
  };
  novoEstado.meioPagamento = evento.target.id;
  this.setState(novoEstado);
}

updateInput = (evento) => {

  let novoEstado = {
      ...this.state
  };

  novoEstado[evento.target.name] = evento.target.value;

  this.setState(novoEstado);
}
  
  render(){
    if (this.state.cadastroValidado) {
      return (
          <Redirect to='/obrigado'/>
      );
  } 
    let meioPagamentoBox = '';
    if(this.state.meioPagamento === 'cartao') {
      meioPagamentoBox = (
        <div className="h-escola">
              <PaymentForm
              name='email'
              placeholderName='rover@rover.com'
              placeholderName='rover@rover.com'
              placeholderName='rover@rover.com'
              placeholderName='rover@rover.com'
              value={this.state.email}
              onChange={this.updateInput}
              help={this.state.emailError} 
              ></PaymentForm>
        </div>
      )
    }else {
       meioPagamentoBox = (
        <div className="h-escolha">
          <div className="h-numero">
            O NÚMERO DO BOLETO É: 654654468488694684654564865698656845
          </div>
          <div className="h-enviar">
            <button>ENVIAR POR E-MAL</button>
          </div>
        </div>
      )
    }
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
                      <Input 
                              name='email'
                              label='E-mail'
                              placeholder='rover@rover.com'
                              value={this.state.email}
                              onChange={this.updateInput}
                              help={this.state.emailError}  
                          />
                      </div>
                      <div className="h-form-dois">
                        <div className="h-form-campo">
                        <Input 
                              name='nome'
                              label='Primeiro Nome'
                              placeholder='João'
                              value={this.state.nome}
                              onChange={this.updateInput}
                              help={this.state.nomeError}   
                          />
                        </div>
                        <div className="h-form-campo">
                        <Input 
                              name='sobrenome'
                              label='Último Nome'
                              placeholder='Silva'
                              value={this.state.sobrenome}
                              onChange={this.updateInput}  
                          />
                        </div>
                      </div>
                      <div className="h-form-dois">
                        <div className="h-form-campo">
                        <Input 
                              name='celular'
                              label='WhatsApp'
                              placeholder='999 999 999'
                              value={this.state.celular}
                              onChange={this.updateInput}
                              help={this.state.celularError}   
                          />
                        </div>
                        <div className="h-form-campo">
                        <Input 
                              name='telefone'
                              label='Telefone'
                              placeholder='(ox) 999 999 999'
                              value={this.state.telefone}
                              onChange={this.updateInput}  
                          />
                        </div>
                      </div>
                      <div className="h-form-dois">
                        <div className="h-form-campo">
                        <Input 
                              name='cpf'
                              label='CPF'
                              placeholder='000.000.555-xx'
                              value={this.state.cpf}
                              onChange={this.updateInput}
                              help={this.state.cpfError}   
                          />
                        </div>
                        <div className="h-form-campo">
                        <Input 
                              name='rg'
                              label='RG'
                              placeholder='8.555.xxx'
                              value={this.state.rg}
                              onChange={this.updateInput}
                              help={this.state.rgError}   
                          />
                        </div>
                        <div className="h-form-campo">
                        <Input 
                              name='nascimento'
                              label='Nascimento'
                              placeholder='99/99/9999'
                              value={this.state.nascimento}
                              onChange={this.updateInput}
                              help={this.state.nascimentoError}   
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="h-card-form-item">
                    <div className="h-card-form-title">
                    <i class="fa fa-home" aria-hidden="true"></i>
                      <p>ENDEREÇO</p>
                    </div>
                    <p>Escreva seu melhor endereço para que possamos entregar esse produto maravilhoso.</p>
                    <form>
                    <div className="h-form-dois">
                        <div className="h-form-campo">
                          <Input 
                              name='cep'
                              label='CEP'
                              placeholder='00.000-00'
                              value={this.state.cep}
                              onChange={this.updateInput}
                              help={this.state.cepError}   
                          />
                        </div>
                        <div className="h-form-campo">
                        <Input 
                              name='endereco'
                              label='Endereço'
                              placeholder='Rua dos alfineiros'
                              value={this.state.endereco}
                              onChange={this.updateInput}
                              help={this.state.enderecoError}   
                          />
                        </div>
                      </div>
                      <div className="h-form-dois">
                        <div className="h-form-campo">
                        <Input 
                              name='bairro'
                              label='Bairro'
                              placeholder='seu bairro'
                              value={this.state.bairro}
                              onChange={this.updateInput}
                              help={this.state.bairroError}   
                          />
                        </div>
                        <div className="h-form-campo">
                        <Input 
                              name='cidade'
                              label='Cidade'
                              placeholder='Recife'
                              value={this.state.cidade}
                              onChange={this.updateInput}
                              help={this.state.cidadeError}   
                          />
                        </div>
                        <div className="h-form-campo">
                        <Input 
                              name='estado'
                              label='Estado'
                              placeholder='Pernambuco'
                              value={this.state.estado}
                              onChange={this.updateInput}
                              help={this.state.estadoError}   
                          />
                        </div>
                      </div>
                      <div className="h-form-campo promo">
                          <input type="checkbox" name="" id=""/>
                          <label htmlFor="nome">Quero receber e-mails com promoções.</label>
                        </div>
                    </form>   
                  </div>
                  <div className="h-card-form-item">
                  <div className="h-payment">
                <div className="h-card-form-title">
                    <i class="fa fa-credit-card" aria-hidden="true"></i>
                      <p>PAGAMENTO</p>
                </div>
                <div className="h-payment-box">
                  <div className="h-metodos">
                    <div className="h-boleto">
                        <input type="radio" id="boleto" name="pagamento" onChange={this.atualizarBox}/>
                        <label>Boleto</label>
                    </div>
                    <div className="h-cartao">
                        <input type="radio" id="cartao" name="pagamento" onChange={this.atualizarBox} />
                        <label>Cartão</label> 
                    </div>
                </div>
                {meioPagamentoBox}
              </div>
                <button type="submit" onClick={this.validateForm}>FINALIZAR</button>
              </div>
                  </div>
                </div>  
          </div>

          <Footer
          newsletter = ''
          />
    </>  
    )
  }
}