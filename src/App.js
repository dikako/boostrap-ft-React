import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Pages Import
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Common/Contact';
import Login from './components/Pages/Login';
import AdminWrapper from './components/AdminWrapper';

function App() {
  return (
    <Router>

      <Route
        path="/admin"
        render={props => (
          <AdminWrapper>
            <Login/>
          </AdminWrapper>
        )}
      />

      <Route
        exact={true}
        path="/"
        render={props => (
          <PageWrapper>
            <Home {...props} />
          </PageWrapper>
        )}
      />

      <Route
        path="/about"
        render={props => (
          <PageWrapper>
            <About {...props} />
          </PageWrapper>
        )}
      />

      <Route
        path="/contact"
        redner={props => (
          <PageWrapper>
            <Contact {...props} />
          </PageWrapper>
        )}
      />
    </Router>
  );
}

export default App;
