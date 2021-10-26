import React from 'react'
import { useHistory } from 'react-router'

const Home = () => {

  const history = useHistory()

  const oauthDeezer = () => {
    window.open('https://connect.deezer.com/oauth/auth.php?app_id=434862&redirect_uri=http://localhost:3000/callback&perms=acces_basique,email,offline_access,manage_library,manage_communitydelete_library,Listen_history', '_self')
  }

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => oauthDeezer()}>Se connecter à Deezer</button>
    </div>
  )
}

export default Home
