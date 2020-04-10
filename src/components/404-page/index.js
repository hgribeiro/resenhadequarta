import React from 'react';


import erroPicture from '../../assets/404-duotone.png';
export default class ServerErrorPage extends React.Component {
  render(){
    return (
      <>
        <div className="h-erro">
           <figure className="h-erro-image">
             <img src={erroPicture} alt="erro-page-image"/>
           </figure>
           <div className="h-erro-text">
              <h1>{this.props.title}</h1>
              <p>{this.props.text}</p>
           </div>
        </div>
      </>
    )
  }
}