import React from 'react'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'

const Playlists = () => {

  const history = useHistory()
  
  const [playlists, setPlaylists] = useState([])

  const token = localStorage.getItem('tokenDeezer')
  console.log("🚀 ~ file: index.js ~ line 11 ~ Playlists ~ token", token)

  useEffect(() => {

    if (token !== null){

      axios({
        
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/user/me/playlists',
        params: {
          access_token: token
        }

      }).then(response => {
        console.log("🚀 ~ file: index.js ~ line 23 ~ useEffect ~ response", response)
        setPlaylists(response.data.data)

      }).catch(error => {
        
      })

    }

  }, [])

  return (
    <div>
      <h1>Your Playlists</h1>

      {
        playlists.map((playlist) => {

          return (

            <p onClick={() => history.push(`/playlist/${playlist.id}`)}>{playlist.title}</p>

          )

        })

      }

    </div>
  )
}

export default Playlists
