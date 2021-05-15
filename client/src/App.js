import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 
import './App.css';
import MainNavBar from './MainNavBar';
import HomeView from './HomeView';
import AboutView from './AboutView';
import ContactView from './ContactView';
import GalleryView from './GalleryView';

const App = () => (
  <Router>
    <Container>
      <MainNavBar/>
      <Switch>
          <Route exact path="/">
            <HomeView/>
          </Route>
          <Route path="/about">
            <AboutView/>
          </Route>
          <Route path="/contactus">
            <ContactView/>
          </Route>
          <Route path="/gallery">
            <GalleryView/>
          </Route>
        </Switch>
    </Container>
  </Router>
);

export default App;