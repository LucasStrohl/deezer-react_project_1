import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImgNavBar = props => {
  return (
    <div>
      <Image src={props.src} alt={props.alt}/>
    </div>
  )
}

ImgNavBar.propTypes = {
  
}

const Image = styled.img`
  width: 30px;
  margin: 30px;
`

export default ImgNavBar
