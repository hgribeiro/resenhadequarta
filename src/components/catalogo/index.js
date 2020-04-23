import React from 'react';
import axios from 'axios';

import Produto from './../produto';
import BarTitle from './../bar-title';
import Banner from './../banner';


import prod1 from '../../assets/prod2.png';
import banner40 from '../../assets/bannter40.png';
import banner60 from '../../assets/banner60.png';
import banner50 from '../../assets/banner50.png';

export default class Catalogo extends React.Component {

  // state = {

  // }
  // componentDidMount () {
  //   console.log("aqui ta rodando o did mountttttttt");
  //   axios.get('https://my-json-server.typicode.com/luishmelo/jsondemo/items ').then(response => {
  //     this.setState(response.data[0]);
  //   });
  // }


  render(){
    return (
      
      
      <>
        <div className="container-catalogo">
        <BarTitle
        title = 'LANÇAMENTOS'
        />  
          <ul className="h-catalogo">
            
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            />
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            />
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            />
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            />
          </ul>
          <Banner
          picture = {banner40}
          />
          <BarTitle
        title = 'LANÇAMENTOS'
        />  
          <ul className="h-catalogo">
            
            <Produto
            picture = { prod1 }
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            />
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            />
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            />
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            />
          </ul>
          <Banner
          picture = {banner60}
          
          />
          <BarTitle
        title = 'LANÇAMENTOS'
        />  
          <ul className="h-catalogo">
            
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            />
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            />
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            />
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            />
          </ul> 
          <Banner
          picture = {banner50}
          />
          <BarTitle
        title = 'SALE'
        />  
          <ul className="h-catalogo">
            
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            sale = {true}
            />
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            sale = {true}
            />
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            sale = {true}
            />
            <Produto
            picture = {prod1}
            titleProduto = "um produto teste"
            valor = {605.00}
            qntParcelas = {6}
            sale = {true}
            />
          </ul>    
        </div>
        

      </>
    )
  }
}