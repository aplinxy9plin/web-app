import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// screens
import Home from './screens/Home/Home';
import Map from './screens/Map/Map';
import Register from './screens/Register/Register';
import Login from './screens/Login/Login';
import PrivateCabinet from './screens/PrivateCabinet/PrivateCabinet';

// components
import Navbar from './components/Navbar/Navbar';
import Basket from './components/Basket/Basket';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar
            links={
              [
                { link: '/map', name: 'Карта' },
                { link: '/shops', name: 'Магазин' },
                { link: '/forum', name: 'Форум' },
              ]
            }
          />
          <Switch>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <PrivateCabinet />
            </Route>
            <Route path="/basket">
              <Basket />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
