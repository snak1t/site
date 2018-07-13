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

const photoWidth = 14

const calculateTranslation = (index, photoWidth) => {
  if (index <= 2) {
    return 0
  }

  return (index - 2) * photoWidth
}
class Gallery extends Component {
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
          <GalleryPhotoRow
            onDragOver={e => console.log(e)}
            style={{
              transform: `translateX(-${calculateTranslation(
                selectedPhotoIndex,
                photoWidth,
              )}rem)`,
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
}

export default Gallery
