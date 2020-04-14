import React from 'react';
import axios from 'axios';

import Produto from './../produto';
import BarTitle from './../bar-title';
import Banner from './../banner';


import prod1 from '../../assets/prod2.png';

export default class Catalogo extends React.Component {

  state = {

  }
  componentDidMount () {
    console.log("aqui ta rodando o did mountttttttt");
    axios.get('https://my-json-server.typicode.com/luishmelo/jsondemo/items ').then(response => {
      this.setState(response.data[0]);
    });
  }


  render(){
    return (
      
      
      <>
        <div className="container-catalogo">
        <BarTitle
        title = 'LANÇAMENTOS'
        />  
          <ul className="h-catalogo">
            
            <Produto
            picture = {this.state.image}
            name = {this.state.name }
            price = { this.state.price }
            />
            <Produto
            picture = {prod1}
            />
            <Produto
            picture = {prod1}
            />
            <Produto
            picture = {prod1}
            />
          </ul>

          <Banner/>
          <BarTitle
        title = 'LANÇAMENTOS'
        />  
          <ul className="h-catalogo">
            
            <Produto
            picture = { prod1 }
            />
            <Produto
            picture = {prod1}
            />
            <Produto
            picture = {prod1}
            />
            <Produto
            picture = {prod1}
            />
          </ul>
          <Banner/>
          <BarTitle
        title = 'LANÇAMENTOS'
        />  
          <ul className="h-catalogo">
            
            <Produto
            picture = {prod1}
            />
            <Produto
            picture = {prod1}
            />
            <Produto
            picture = {prod1}
            />
            <Produto
            picture = {prod1}
            />
          </ul> 
          <Banner/>
          <BarTitle
        title = 'LANÇAMENTOS'
        />  
          <ul className="h-catalogo">
            
            <Produto
            picture = {prod1}
            />
            <Produto
            picture = {prod1}
            />
            <Produto
            picture = {prod1}
            />
            <Produto
            picture = {prod1}
            />
          </ul>    
        </div>
        

      </>
    )
  }
}