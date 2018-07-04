import React, { Component } from 'react'
import {
  GalleryContainer,
  GalleryMainBlock,
  CentralPhoto,
  GalleryPhotoRow,
  GalleryPreviewPhoto,
  GalleryArrow,
} from './atoms'
import ArrowButton from '../../arrow-button/arrow-button'

class Gallery extends Component {
  render() {
    const { photos, selectedImage, onSelectPhoto } = this.props
    return (
      <GalleryContainer>
        <GalleryMainBlock>
          <GalleryArrow>
            <ArrowButton onClick={() => onSelectPhoto(selectedImage - 1)} />
          </GalleryArrow>
          <CentralPhoto src={photos[selectedImage].sizes.big.url} />
          <GalleryArrow>
            <ArrowButton onClick={() => onSelectPhoto(selectedImage + 1)} />
          </GalleryArrow>
        </GalleryMainBlock>
        <GalleryPhotoRow>
          {photos.map((photo, key) => (
            <GalleryPreviewPhoto
              src={photo.sizes.small.url}
              key={key}
              onClick={() => onSelectPhoto(key)}
            />
          ))}
        </GalleryPhotoRow>
      </GalleryContainer>
    )
  }
}

export default Gallery
