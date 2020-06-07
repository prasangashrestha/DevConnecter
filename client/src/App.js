import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
