import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ImgNavBar from '../../component/imgNavBar'
import Home from '../../logo/home.png'
import Connection from '../../logo/connection.png'
import Playlist from '../../logo/playlist.png'
import { useHistory } from 'react-router'

const Header = () => {

  const history = useHistory()

  const lienVers = (lien) => {
    history.push(lien)
  }

  return (
    <div>
      <NavBar>
        <Lien onClick={() => lienVers('/')}>
          <ImgNavBar src={Home} alt={`Connection`}></ImgNavBar>
        </Lien>
        <Lien onClick={() => lienVers('/playlists')}>
          <ImgNavBar src={Playlist} alt={`Playlists`}/>
        </Lien>
        <Lien onClick={() => lienVers('/connection')}>
          <ImgNavBar src={Connection} alt={`Connection`}/>
        </Lien>
      </NavBar>
    </div>
  )
}

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #00344f;
  color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
`

const Lien = styled.div`
  width: 100%;
`

export default Header
