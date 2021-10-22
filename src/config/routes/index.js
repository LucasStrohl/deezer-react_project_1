import React from 'react'
import { BrowserRouter as Routeur, Switch, Route } from 'react-router-dom'
import Home from '../../pages/home'
import Playlists from '../../pages/playlists'
import Header from '../../shared/header'
import Footer from '../../shared/footer'

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
      <Header />
    </Routeur>
  )
}

export default Routes
