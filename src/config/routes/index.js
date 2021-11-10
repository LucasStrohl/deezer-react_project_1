import React from 'react'
import {
  BrowserRouter as Routeur,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Home from '../../pages/home'
import Playlist from '../../pages/playlist'
import Playlists from '../../pages/playlists'
import CallBackDeezer from '../../pages/callBackDeezer'
import { DarkTheme, LightTheme } from '../theme'
import styled from 'styled-components'
import Profil from '../../pages/profil'
import Footer from '../../shared/footer'
import PropTypes from 'prop-types'

const Routes = () => {
  return (
      <Container>
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
            <PrivateRoute path='/profil'>
              <Profil></Profil>
            </PrivateRoute>
            <Route path='/callback'>
              <CallBackDeezer></CallBackDeezer>
            </Route>
          </Switch>
          <Footer />
        </Routeur>
      </Container>
  )
}

const Container = styled.div`
  padding-bottom: 100px;
`

const PrivateRoute = ({ children, ...rest }) => {
  PrivateRoute.propTypes = {
    children: PropTypes.object
  }
  const token = localStorage.getItem('tokenDeezer')
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          children
        ) : (
          <Redirect to={{ pathname: '/', state: { from: location } }} />
        )
      }
    />
  )
}

Routes.propTypes = {
  children: PropTypes.object
}

export default Routes
