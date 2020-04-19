import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// screens
import Home from './screens/Home/Home';

// components
import Navbar from './components/Navbar/Navbar';

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
                { link: '/', name: 'Домой' },
              ]
            }
          />
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
