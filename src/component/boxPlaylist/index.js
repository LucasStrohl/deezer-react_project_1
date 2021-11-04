import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const BoxPlaylist = props => {
  const history = useHistory()

  return (
    <BoxTheme
      onClick={() => history.push(`/playlist/${props.playlistItem.id}`)}
    >
      <Playlists>
        <Image src={props.playlistItem.picture_small} />
        <Title>{props.playlistItem.title}</Title>
      </Playlists>
    </BoxTheme>
  )
}

const BoxTheme = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const Playlists = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 15px;
  height: 70px;
  background-color: ${props => props.theme.background_box};
  border-radius: 20px;
`

const Title = styled.p`
  color: ${props => props.theme.color};
`

const Image = styled.img`
  height: 80%;
  border-radius: 10px;
  margin-left: 7px;
  margin-right: 15px;
`

export default BoxPlaylist
