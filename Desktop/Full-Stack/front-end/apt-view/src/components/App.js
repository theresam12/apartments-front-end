import React, { Component } from 'react';
import {
  Col,
  Button,
  Grid,
  PageHeader,
  Row,
  Nav,
  ButtonGroup,
  ButtonToolbar,
} from 'react-bootstrap'
import logo from '../images/logo.svg';
import '../css/App.css';
import withAuth from './withAuth';
import AuthService from '../services/AuthService';  // <- We use the AuthService to logout


const Auth = new AuthService() // <- Create a new instance of the Auth service

class App extends Component {
  handleLogout(){ // <- Remove local storage, and redirect the user
    Auth.logout()
    this.props.history.replace('/login');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>
        <PageHeader>
        <Nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <ButtonToolbar>
          <ButtonGroup>
            <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </Button>
            <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </Button>
            <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </Button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/apt_lists">Apartments for Rent <span class="sr-only"></span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="add_apt">Add an Apartment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
            </ul>
          </div>
          </ButtonGroup>
        </ButtonToolbar>
      </Nav>
    </PageHeader>
  </div>
    )
  }
}

export default withAuth(App)
