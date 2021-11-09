import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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

Profile.propTypes = {
  user: PropTypes.object.isRequired
}

const HeaderProfil = styled.div`
  display: flex;
  box-sizing: content-box;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: space-around;
`

const Informations = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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
