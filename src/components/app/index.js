import React from 'react';
import ConstructPage from '../contruct-page';
import '../../styles/app.css';
// por que funciona sem esse impor em cima, precisa??


import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';


class App extends React.Component {

  render() {
    return (
      <div>
      <BrowserRouter>
        
        <Switch>
          <Route path='*'>
            <ConstructPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>

    );
  }
}

export default App;
