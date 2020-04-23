import React from 'react';
import Footer from '../footer';
import Header from '../header';
import Catalogo from '../catalogo';



export default class MainPage extends React.Component {
  render(){
    return (
        
          <>
            <Header
            header = "main"
            />
            <div>
              
            </div>
            <Catalogo/>
            <Footer
            newsletter = 'sim'
            />
          </>
        
    )
  }
}