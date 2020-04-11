import React from 'react';
import Produto from './../produto';


import prod1 from '../../assets/prod2.png';

export default class Catalogo extends React.Component {
  render(){
    return (
      
      
      <>
        <div className="container-catalogo">
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
             <Produto
            picture = {prod1}
            />
             
          </ul>
        </div>
        

      </>
    )
  }
}