import React from 'react';
import MainPage from '../main-page';
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
          <Route path='*'>
            <MainPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>

    );
  }
}

export default App;
