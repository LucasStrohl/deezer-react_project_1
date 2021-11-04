import React from 'react'
import styled from 'styled-components'

const BoxFlow = props => {
  return (
    <BoxTheme>
      <Playlists>
        <Image src={props?.track.album.cover_small} />
        <Title>{props.track.title}</Title>
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

export default BoxFlow
