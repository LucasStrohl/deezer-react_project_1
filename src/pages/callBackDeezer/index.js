import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const CallBackDeezer = () => {
  const app_id = process.env.REACT_APP_DEEZER_APP_ID
  const secret = process.env.REACT_APP_DEEZER_APP_SECRET

  const history = useHistory()
  const query = new URLSearchParams(useLocation().search)

  const code = query.get('code')

  useEffect(() => {
    if (code) {
      axios({
        method: 'GET',
        url: 'https://connect.deezer.com/oauth/access_token.php',
        params: {
          app_id: app_id,
          secret: secret,
          code: code
        }
      })
        .then(response => {
          const res = response.request.response
          const posTokenFirst = res.indexOf('=')
          const posTokenLast = res.lastIndexOf('&')
          const token = res.substr(
            posTokenFirst + 1,
            posTokenLast - posTokenFirst - 1
          )

          if (token !== null) {
            localStorage.setItem('tokenDeezer', token)
            history.push('/playlists')
          } else {
            history.push('/')
          }
        })
        .catch(() => {
          history.push('/')
        })
    }
  }, [])

  return <div></div>
}

export default CallBackDeezer
