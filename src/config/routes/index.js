import React from 'react'
import { BrowserRouter as Routeur, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../../pages/home'
import Playlist from '../../pages/playlist'
import Playlists from '../../pages/playlists'
import Header from '../../shared/header'
import Footer from '../../shared/footer'
import CallBackDeezer from '../../pages/callBackDeezer'

const Routes = () => {
  return (
    <Routeur>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/playlist/:id'>
          <Playlist></Playlist>
        </PrivateRoute>
        <PrivateRoute path='/playlists'>
          <Playlists></Playlists>
        </PrivateRoute>
        <Route path='/callback'>
          <CallBackDeezer></CallBackDeezer>
        </Route>
      </Switch>
      <Header />
    </Routeur>
  )
}

const PrivateRoute = ({children, ...rest}) => {
  const token = localStorage.getItem('tokenDeezer')
  return (
    <Route
      {...rest}
      render={({ location }) => token ? (children) : (<Redirect to={{ pathname: "/", state: { from: location }}} />)}
    />
  );
}

export default Routes
