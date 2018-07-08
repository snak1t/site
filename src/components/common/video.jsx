import React, { Component } from 'react'
import styled from 'styled-components'

import VideoLoader from './loader'
import Popup from './popup'
import { Media } from '../../utils/css-utils'

import CloseIcon from '../icons/close-icon'

const initialState = {
  isPlaying: false,
  isLoaded: false,
}
const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  position: absolute;
  width: auto;
  height: auto;
  right: -4rem;
  top: -2rem;
  left: auto;

  &:hover #closeIcon {
    stroke: #ababab;
  }
`
class Video extends Component {
  state = initialState

  showPopup = event => {
    event.preventDefault()
    this.setState({ isPlaying: true })
  }

  closePopup = () => {
    this.setState(initialState)
  }

  onVideoLoad = () => {
    this.setState({ isLoaded: true })
  }

  render() {
    return (
      <React.Fragment>
        {this.props.children({
          onClick: this.showPopup,
        })}
        <Popup onRequestClose={this.closePopup} isOpen={this.state.isPlaying}>
          <Media.TabletPlus>
            <IconButton onClick={this.closePopup}>
              <CloseIcon />
            </IconButton>
          </Media.TabletPlus>
          {!this.state.isLoaded ? <VideoLoader size="80" border="8" /> : null}
          <iframe
            src={this.props.src}
            title="Youtube video"
            onLoad={this.onVideoLoad}
            style={{
              display: this.state.isLoaded ? 'initial' : 'none',
              width: '100%',
              height: '100%',
            }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </Popup>
      </React.Fragment>
    )
  }
}

export default Video
