import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const index = () => {
  const { id } = useParams()

  return (
    <Widget>
      <WidgetPlaylist
        title='deezer-widget'
        src={`https://widget.deezer.com/widget/dark/playlist/${id}?radius=false&autoplay=true`}
        frameborder='0'
        allowtransparency='true'
        allow='encrypted-media; clipboard-write'
      ></WidgetPlaylist>
    </Widget>
  )
}

const Widget = styled.div`
  height: 100vh;
`

const WidgetPlaylist = styled.iframe`
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  padding: -10px;
  margin-bottom: 100px;
  border: 0;
`

export default index
