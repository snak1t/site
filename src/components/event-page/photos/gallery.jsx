// @flow
import React, { Component } from 'react'
import {
  GalleryContainer,
  GalleryMainBlock,
  CentralPhoto,
  GalleryPhotoRow,
  GalleryPreviewPhoto,
  GalleryArrow,
  GalleryPhotoSlider,
} from './atoms'
import ArrowButton from '../../arrow-button/arrow-button'
import SwipeEventEmitter from '../../swipe.event'

const photoWidth = 14

const calculateTranslation = (index, photoWidth) => {
  if (index <= 2) {
    return 0
  }

  return (index - 2) * photoWidth
}

type State = {
  translationDistance: number,
}

type Photo = {
  sizes: {
    big: {
      url: string,
    },
    small: {
      url: string,
    },
  },
}

type Props = {
  selectedPhotoIndex: number,
  onSelectPhoto: (index: number) => void,
  photos: [Photo],
}
class Gallery extends Component<Props, State> {
  state = {
    translationDistance: 0, // calculateTranslation(selectedPhotoIndex, photoWidth),
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const translationDistance = calculateTranslation(
      nextProps.selectedPhotoIndex,
      photoWidth,
    )
    return {
      translationDistance,
    }
  }
  render() {
    const { photos, selectedPhotoIndex, onSelectPhoto } = this.props
    return (
      <GalleryContainer>
        <GalleryMainBlock>
          <GalleryArrow>
            <ArrowButton
              onClick={() => onSelectPhoto(selectedPhotoIndex - 1)}
            />
          </GalleryArrow>
          <CentralPhoto src={photos[selectedPhotoIndex].sizes.big.url} />
          <GalleryArrow>
            <ArrowButton
              onClick={() => onSelectPhoto(selectedPhotoIndex + 1)}
            />
          </GalleryArrow>
        </GalleryMainBlock>
        <GalleryPhotoSlider>
          <SwipeEventEmitter
            onRelease={this.onSwipeRelease}
            onHorizontalMove={this.updatePosition}
          />
          <GalleryPhotoRow
            style={{
              transform: `translateX(-${this.state.translationDistance}rem)`,
            }}>
            {photos.map((photo, key) => (
              <GalleryPreviewPhoto
                src={photo.sizes.small.url}
                key={key}
                onClick={() => onSelectPhoto(key)}
              />
            ))}
          </GalleryPhotoRow>
        </GalleryPhotoSlider>
      </GalleryContainer>
    )
  }

  onSwipeRelease = (e: { distance: number }) => {
    console.log(e)
  }
  updatePosition = (e: { distance: number }) => {
    console.log(e)
    // this.setState(pState => ({
    //   ...pState,
    //   translationDistance: (pState.translationDistance * 10 + e.distance) / 10,
    // }))
  }
}

export default Gallery
