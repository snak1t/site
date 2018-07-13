import styled from 'styled-components'

export let Grid = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-auto-rows: 50px;
  margin: 6.4rem 0;
`

export let ImageDiv = styled.div`
  overflow: hidden;
  grid-row-end: span ${({ type }) => (type === 'vertical' ? 7 : 3)};
`

export let Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: sepia(3) grayscale(1) brightness(0.6);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    filter: initial;
    transform: scale(1.1);
  }
`
export let MorePicsBtn = styled.button`
  width: 100%;
  background: #ffffff;
  border: 0.3rem solid ${({ theme: { lipstick } }) => lipstick};
  color: ${({ theme: { lipstick } }) => lipstick};
  font: bold 1.8rem/6rem Rubik, sans-serif;
  text-align: center;
  padding: 0;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
`

export let GalleryContainer = styled.section`
  background: #fff;
  padding: 4.8rem 4.4rem;
  width: 70rem;
`

export let GalleryMainBlock = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: space-between;
`

export let CentralPhoto = styled.img`
  height: 100%;
  object-fit: contain;
  object-position: center center;
  flex: 1;
`

export let GalleryPhotoSlider = styled.div`
  width: 100%;
  height: 110px;
  overflow: hidden;
  margin: 1rem 0;
`

export let GalleryPhotoRow = styled.div`
  display: flex;
  height: 100%;
`
export let GalleryPreviewPhoto = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 13rem;
  margin: 0 0.5rem;
  cursor: pointer;
`

export let GalleryArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
