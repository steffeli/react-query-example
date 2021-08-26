import React, { useState, useEffect } from "react";
import MoviesOverview from "./views/MoviesOverview";
import { Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieDetails from "./views/MovieDetails";
import AddMovie from "./views/admin/AddMovie";
import EditMovie from "./views/admin/EditMovie";

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
          <Route exact path="/admin/add-movie">
            <AddMovie />
          </Route>
          <Route exact path="/admin/edit-movie/:id">
            <EditMovie />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
