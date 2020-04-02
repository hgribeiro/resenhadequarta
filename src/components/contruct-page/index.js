import React from 'react';
import Footer from '../footer';
import Header from '../header';
//Importar a fonte do google é só no css?!


export default class ConstructPage extends React.Component {
  render(){
    return (
        
          <div className='h-about'>
            <Header/>
            <section className='h-about__section'>
              <h2>This page is being built!</h2>
              <figure>
              <div>sdsd</div>
            </figure>
            </section>
            <Footer/>
          </div>
        
    )
  }
}