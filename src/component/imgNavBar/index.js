import React from 'react'
import styled from 'styled-components'

const ImgNavBar = props => {
  return (
    <div>
      <Image src={props.src} alt={props.alt} />
    </div>
  )
}

const Image = styled.img`
  width: 30px;
  margin: 30px;
`

export default ImgNavBar
