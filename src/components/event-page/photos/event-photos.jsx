import React from 'react'
import styled from 'styled-components'

import image1 from '../../../1.jpg'
import image2 from '../../../2.jpg'
import image3 from '../../../3.jpg'

const photoArray = Array(25)
  .fill(1)
  .map(() => {
    const r = Math.random() * 100
    if (r < 33) {
      return { src: image1, type: 'horizontal' }
    }
    if (r > 66) {
      return { src: image3, type: 'horizontal' }
    }

    return { src: image2, type: 'vertical' }
  })

let Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 200px;
`

let ImageDiv = styled.div`
  overflow: hidden;
  grid-row-end: span ${props => props.rowSpan};
`

let Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const Image = ({ image: { src, type } }) => {
  return (
    <ImageDiv rowSpan={type === 'vertical' ? 2 : 1}>
      <Img src={src} />
    </ImageDiv>
  )
}

const EventPhotos = ({ photos = photoArray }) => {
  return (
    <Grid>{photos.map((photo, key) => <Image key={key} image={photo} />)}</Grid>
  )
}

export default EventPhotos
