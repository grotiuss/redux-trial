import React from 'react'
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Login from './pages/Login'

class App extends React.Component {
  componentDidMount() {
    // console.log(this.props.userSession)
  }

  render() {
    console.log(this.props.userSession)
    return(
      <>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </>
    )
  }
}

// export default App;
export default connect(state => ({
  userSession: state.loginSession
}))(App)