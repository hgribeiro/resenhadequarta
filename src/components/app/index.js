import React from 'react';

import CadPage from '../cad-page';
import ObrigadoPage from '../obg-page';
import MainPage from '../main-page';
import ServerErrorPage from '../404-page';
import '../../styles/app.css';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <>
      <BrowserRouter>
        
        <Switch>
          <Route path='/' exact>
            <MainPage/>
          </Route>
          
          {/* MUDANÇA TEMPORARIA NO CAMINHO DA MAIN E CAD PAGES. */}

          <Route path='/cad' exact>
            <CadPage/>
          </Route>
          <Route path='/obrigado' exact>
            <ObrigadoPage/>
          </Route>

          <Route exact path='/500'>
              <ServerErrorPage
              title='500 - Erro de servidor'
              text='Por favor, volte para a página principal.'
              />
          </Route>

          <Route path='*'>
              <ServerErrorPage
              title='400 - Página não encontrada'
              text='The earthquake was not good to the bike lane on your way to work. A large gap in the pavement (too big to be called a pothole) had swallowed three oblivious bikers whole. So the city had put up two pylons and yellow caution tape. Pretty frustrating for you given your propensity to do 360 jumps over the gap.'
              />
          </Route>  
        </Switch>
      </BrowserRouter>
    </>

    );
  }
}

export default App;
