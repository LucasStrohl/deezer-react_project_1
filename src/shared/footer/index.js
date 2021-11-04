import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { CgProfile } from 'react-icons/cg'
import { MdLibraryMusic } from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'

const Footer = () => {
  const history = useHistory()
  const lienVers = lien => {
    history.push(lien)
  }

  return (
    <div>
      <NavBar>
        <Lien onClick={() => lienVers('/')}>
          <AiFillHome size={30} />
        </Lien>
        <Lien onClick={() => lienVers('/playlists')}>
          <MdLibraryMusic size={30} />
        </Lien>
        <Lien onClick={() => lienVers('/profil')}>
          <CgProfile size={30} />
        </Lien>
      </NavBar>
    </div>
  )
}

const NavBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${props => props.theme.background_navbar};
  position: fixed;
  bottom: 0;
  width: 100%;
`

const Lien = styled.div`
  width: 100%;
  margin: 30px;
`

export default Footer
