import React from 'react';
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'

const index = () => {

  const [playlist, setPlaylist] = useState([])
  const [iFrame, setIFrame] = useState('')

  const {id} = useParams();
  console.log("🚀 ~ file: index.js ~ line 12 ~ index ~ id", id)

  const token = localStorage.getItem('tokenDeezer')

  useEffect(() => {

    axios({
        
      method: 'GET',
      url: 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/oembed',
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'origine': `http://localhost:3000/playlist/${id}`
      },
      params: {
        url:`https://www.deezer.com/playlist/${id}&autoplay=true&format=json`
      }

    }).then(response => {
    console.log("🚀 ~ file: index.js ~ line 27 ~ useEffect ~ response", response)
      

    }).catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
      console.log("🚀 ~ file: index.js ~ line 31 ~ useEffect ~ error", error)
      
    })

  }, [])

  return (
    <div>
      
      <h1>{ `Playlist ${id}` }</h1>
      {/* <iframe 
      id="deezer-widget" 
      src="https://widget.deezer.com/widget/dark/playlist/7592869282?app_id=434862&autoplay=true&radius=true&tracklist=true" 
      width="300" 
      height="300" 
      allowtransparency="true" 
      allowfullscreen="true" 
      allow="encrypted-media"></iframe> */}
      
    </div>
  );
};

export default index;