import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    cvcError: '',
    expiry: '',
    focus: '',
    name: '',
    nameError: '',
    number: '',
    numberError: '',
  };

  validateFildName = (evento) => {
    let novoEstado = {
      ...this.state
  };
    if(!this.state.name.length) {
      novoEstado['nameError'] = 'Digite um nome válido';
      
    }else {
      novoEstado['nameError'] = null;
    }
    this.setState(novoEstado);
   
  }
  validateFildNumber = (evento) => {
    let novoEstado = {
      ...this.state
  };
    if(this.state.number.length<16) {
      novoEstado['numberError'] = 'Digite um número válido';
      
    }else {
      novoEstado['numberError'] = null;
    }
    this.setState(novoEstado);
    
  }
  validateFildCvc = (evento) => {
    let novoEstado = {
      ...this.state
  };
    if(this.state.cvc.length !== 3 ) {
      novoEstado['cvcError'] = 'Digite um cvc válido';
      
    }else {
      novoEstado['cvcError'] = null;
    }
    this.setState(novoEstado);
    
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  render() {
    let helpStyle = {
      'font-size': '10px',
      color: 'red'
  };

   

    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
         
           <form className="h-form">
            <input
                type="text"
                name="name"
                placeholder="Nome"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                onBlur={this.validateFildName}
              />
              <small style={helpStyle} onClick={this.props.onClick}>
                    {this.state.nameError}
                </small>
              
              <input
                type="tel"
                name="number"
                placeholder="número do cartão"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                onBlur={this.validateFildNumber}
              />
              <small style={helpStyle} onClick={this.props.onClick}>
                    {this.state.numberError}
                </small>
              <div className="h-form-dois-pay">
                 <input
                type="text"
                name="cvc"
                placeholder="CVC"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                onBlur={this.validateFildCvc}
              />
                <small style={helpStyle} onClick={this.props.onClick}>
                    {this.state.cvcError}
                </small>
              <input
                type="text"
                name="expiry"
                placeholder="Data de Expiração"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              </div>
             
          </form>
        
       
      </div>
    );
  }
}