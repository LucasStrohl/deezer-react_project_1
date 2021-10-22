import React from 'react';
import {
    BrowserRouter as Routeur,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Home from '../../pages/home';
import Playlists from '../../pages/playlists';


const Routes = () => {
  return (
    <Routeur>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/playlists'>
          <Playlists></Playlists>
        </Route>
      </Switch>
    </Routeur>
  );
};

export default Routes;