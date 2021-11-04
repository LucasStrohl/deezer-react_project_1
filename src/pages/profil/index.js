import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import Retry from '../../component/retry'
import Profile from '../../component/profil'
import BoxFlow from '../../component/boxFlow'

const Profil = () => {
  const token = localStorage.getItem('tokenDeezer')
  const [user, setUser] = useState([])
  const [flow, setFlow] = useState([])
  const [isChargedUser, setIsChargedUser] = useState(false)
  const [isChargedFlow, setIsChargedFlow] = useState(false)
  const [errorUser, setErrorUser] = useState(false)
  const [errorFlow, setErrorFlow] = useState(false)
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.deezer.com/user/me',
      params: {
        access_token: token
      }
    })
      .then(response => {
        console.log("🚀 ~ file: index.js ~ line 29 ~ useEffect ~ response", response)
        setUser(response.data)
        setIsChargedUser(true)
      })
      .catch(error => {
        console.log("🚀 ~ file: index.js ~ line 34 ~ useEffect ~ error", error)
        setErrorUser(true)
      })
  }, [])

  useEffect(() => {
    if (isChargedUser) {
      axios({
        method: 'GET',
        url: user.tracklist,
        params: {
          access_token: token
        }
      })
        .then(response => {
          console.log("🚀 ~ file: index.js ~ line 49 ~ useEffect ~ response", response)
          setFlow(response.data.data)
          setIsChargedFlow(true)
        })
        .catch(error => {
          console.log("🚀 ~ file: index.js ~ line 54 ~ useEffect ~ error", error)
          setErrorFlow(true)
        })
    }
  }, [isChargedUser])

  useEffect(() => {
    if (errorUser === true || errorFlow === true || isChargedFlow === true) {
      setLoader(false)
    }
  }, [errorUser, isChargedUser, errorFlow, isChargedFlow])

  return (
    <div>
      <h1>Profil</h1>
      {isChargedUser ? <Profile user={user}></Profile> : ''}
      {isChargedFlow ? <FlowTitle>Votre top 10 du flow</FlowTitle> : ''}
      {flow.map(tracklist => {
        return <BoxFlow track={tracklist}></BoxFlow>
      })}
      {errorUser || errorFlow ? <Retry page='profil'></Retry> : ''}
      {loader ? (
        <Loader type='TailSpin' color='#ffffff' height={50} width={50}></Loader>
      ) : (
        ''
      )}
    </div>
  )
}

const FlowTitle = styled.h3`
  display: flex;
  justify-content: left;
  align-items: left;
  margin-left: 20px;
`

export default Profil
