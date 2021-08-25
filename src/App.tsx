import React, { useState, useEffect } from 'react';
import MoviesOverview from './views/MoviesOverview';
import { Container } from "@chakra-ui/react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MovieDetails from './views/MovieDetails';

interface AppProps {}

function App({}: AppProps) {
  return (
    <Container height="100vh" padding={8} maxW="container.xl">
      <Router>
        <Switch>
          <Route exact path="/">
            <MoviesOverview />
          </Route>
          <Route exact path="/movies/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
