import React from 'react'
import styled from 'styled-components'

const Retry = () => {
  return (
    <RetryDiv>
      <RetryBtn onClick={() => location.reload()}>RÉESSAYER</RetryBtn>
    </RetryDiv>
  )
}

const RetryDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const RetryBtn = styled.button`
  background-color: #ef5466;
  border-radius: 50%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 0px;
  color: white;
  font-family: Roboto, sans-serif;
  font-weight: 510;
  font-size: 1rem;
  padding: 16px 20px;
  margin-top: 20px;
`

export default Retry
