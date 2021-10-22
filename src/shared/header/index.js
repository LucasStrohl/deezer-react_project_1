import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavBar>
        <Link to='/'>Home</Link>
        <Link to='/playlists'>Playlists</Link>
      </NavBar>
    </div>
  )
}

const NavBar = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #00344f;
  color: #fff;
`

export default Header
