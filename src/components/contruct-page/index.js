import React from 'react';
import Footer from '../footer';
import Header from '../header';
//Importar a fonte do google é só no css?!

import Chaves from '../../assets/chaves11.jpg';
import ChavesPerfil from '../../assets/chaves-perfil.jpg';

export default class ConstructPage extends React.Component {
  render(){
    return (
        
          <div className='h-about'>
            <Header/>
            <section className='h-about__section'>
{/*                 <figure className='h-about__backgroud'>
                  <img src={Chaves}/>
                </figure> */}
                
                <div className='h-about__content'>
                  <h2>Sobre</h2>
                  <figure>
                    <img src={ChavesPerfil}/>
                  </figure>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc erat, vehicula et accumsan vel, consequat ut felis. Nulla id ligula eros. Duis et facilisis mi, et hendrerit lectus. In ut convallis lorem, quis egestas dui. Suspendisse euismod erat nisl, vitae interdum risus egestas vitae. Praesent ac blandit elit, a ornare ex. Pellentesque ultricies, nisl eget iaculis tristique, tellus ante interdum ipsum, vel porttitor mauris est nec purus. Donec hendrerit ex nisi, ut viverra sapien dictum eu. Nam tristique diam volutpat orci fermentum viverra. Integer euismod lobortis leo ut sodales. Maecenas quis arcu ac enim molestie gravida in non dui.</p>

                </div>
                

            </section>
            <Footer/>
          </div>
        
    )
  }
}