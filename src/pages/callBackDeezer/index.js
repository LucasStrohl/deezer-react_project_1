import { useEffect, useState } from "react";
import { useParams, useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const CallBackDeezer = () => {

  const [token, setToken] = useState('')

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)
  const code = query.get('code')
  const error = query.get('error')

  useEffect(() => {

    if(code){

      axios({

        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/https://connect.deezer.com/oauth/access_token.php',
        params: {
          app_id: '434862',
          secret: 'ec9f71bc9aac843681df83fe2989a8e7',
          code: code
        }

      }).then(response => {

        const res= response.request.response
        const posTokenFirst = res.indexOf('=')
        const posTokenLast = res.lastIndexOf('&')
        const token = res.substr(posTokenFirst+1, posTokenLast - posTokenFirst-1)
        console.log("🚀 ~ file: index.js ~ line 37 ~ useEffect ~ token", token)

        if (token !== null){

          localStorage.setItem('tokenDeezer', token)

          history.push('/playlists')

        }else{

          // history.push('/')

        }

      }).catch(error => {

        // history.push('/')

      })

    }

  }, [])

  return (
    <div>

      <p>{code}</p>
      <p>{token}</p>
      
    </div>
  );
};

export default CallBackDeezer
