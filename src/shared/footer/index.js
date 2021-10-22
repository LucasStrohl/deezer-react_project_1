import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Foot>
      <CopiWrite>Copiwrite</CopiWrite>      
    </Foot>
  )
}

const Foot = styled.div`
  position: fixed;
  bottom: 0;
`

export default Footer
