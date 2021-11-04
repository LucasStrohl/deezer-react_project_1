import React from 'react'
import styled from 'styled-components'

const Profile = props => {
  return (
    <>
      <HeaderProfil>
        <ImgProfil src={props.user.picture} />
        <Informations>
          <Texte>{props.user.name}</Texte>
          <Texte>{props.user.email}</Texte>
        </Informations>
      </HeaderProfil>
    </>
  )
}

const HeaderProfil = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 30px 40px;
  margin-bottom: 50px;
`

const Informations = styled.div`
  display: flex;
  flex-direction: column;
`

const ImgProfil = styled.img`
  width: 30%;
  height: 30%;
  margin-left: 30px;
  border-radius: 50%;
`
const Texte = styled.p`
  color: ${props => props.theme.color};
`

export default Profile
