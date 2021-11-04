import { useState, useEffect } from 'react'
import styled from 'styled-components'
import DeezerPNG from '../../logo/deezer_black.png'

const Home = () => {
  const [isConnected, setIsConnected] = useState(false)
  const app_id = process.env.REACT_APP_DEEZER_APP_ID
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI
  const perms = process.env.REACT_APP_PERMS

  useEffect(() => {
    const token = localStorage.getItem('tokenDeezer')
    if (token !== null) {
      setIsConnected(true)
    }
  }, [])

  const oauthDeezer = () => {
    localStorage.removeItem('tokenDeezer')
    window.open(
      `https://connect.deezer.com/oauth/auth.php?app_id=${app_id}&redirect_uri=${redirect_uri}&perms=${perms}`,
      '_self'
    )
  }

  const disconnect = () => {
    localStorage.removeItem('tokenDeezer')
    setIsConnected(false)
  }

  return (
    <div>
      <LogoDeezer src={DeezerPNG} />
      <Btn onClick={isConnected ? () => disconnect() : () => oauthDeezer()}>
        {isConnected ? 'Se déconnecter' : 'Connexion à Deezer'}
      </Btn>
    </div>
  )
}

const Btn = styled.button`
  padding: 10px;
  border-radius: 13px;
  border: 0;
  background: #000000;
  color: #ffffff;
`

const LogoDeezer = styled.img`
  width: 70%;
  margin-top: 70%;
  margin-bottom: 50px;
`

export default Home
