import React from 'react'
import { ImageDiv, Img } from './atoms'

export let Photo = ({ image: { sizes }, onClick }) => {
  const { small: firstSize } = sizes
  const isHorizontal = firstSize.width > firstSize.height
  const type = isHorizontal ? 'horizontal' : 'vertical'

  return (
    <ImageDiv type={type}>
      <Img src={sizes.middle.url} onClick={onClick} />
      {/* TODO: Implement loading of small images of bad quality first */}
    </ImageDiv>
  )
}
