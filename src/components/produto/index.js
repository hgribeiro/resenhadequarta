import React from 'react';

export default class Produto extends React.Component {
  render(){
    return (
      
      <>
      <li className="h-catalog-item">
        <figure className="h-catalogo-item--product">
          
          <img 
          src={this.props.picture}
            />

        </figure>
        <div className="h-catalog-item--description">

        </div>
      </li>
      </>
      
    )
  }
}