import { useEffect, useState } from 'react'
import axios from 'axios'
import BoxPlaylist from '../../component/boxPlaylist'
import Loader from 'react-loader-spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import Retry from '../../component/retry'

const Playlists = () => {
  const [playlists, setPlaylists] = useState([])
  const [index, setIndex] = useState(0)
  const [hasMoreData, setHasMoreData] = useState(true)
  const [error, setError] = useState(false)
  const limit = 8
  const token = localStorage.getItem('tokenDeezer')

  useEffect(() => {
    if (token !== null) {
      axios({
        method: 'GET',
        url: 'https://api.deezer.com/user/me/playlists',
        params: {
          access_token: token,
          index: index,
          limit: limit
        }
      })
        .then(response => {
          if (response.data.data.length === 0) {
            setHasMoreData(false)
          }
          if (index === 0) {
            setPlaylists(response.data.data)
          } else {
            setPlaylists([...playlists, ...response.data.data])
          }
        })
        .catch(() => {
          setError(true)
        })
    }
  }, [index])

  const Next = () => {
    setIndex(index + limit)
  }

  return (
    <div>
      <h1>Vos playlists</h1>

      <InfiniteScroll
        dataLength={playlists.length}
        next={Next}
        hasMore={hasMoreData}
        //Le ternair permet de ne pas afficher le loader s'il n'y a pas de connexion
        loader={
          error ? (
            ''
          ) : (
            <Loader
              type='TailSpin'
              color='#ffffff'
              height={50}
              width={50}
            ></Loader>
          )
        }
        endMessage=''
        refreshFunction={() => setIndex(0)}
        pullDownToRefresh
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
        }
        releaseToRefreshContent={
          <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
        }
      >
        {playlists.map(playlist => {
          return (
            <div key={playlist.id}>
              <BoxPlaylist playlistItem={playlist}></BoxPlaylist>
            </div>
          )
        })}
      </InfiniteScroll>
      {/* Affichage d'un message d'erreur lors de la perte de connexion */}
      {error ? <Retry></Retry> : ''}
    </div>
  )
}

export default Playlists
