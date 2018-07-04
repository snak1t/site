import React from 'react'
import { withState, lifecycle, compose } from 'recompose'
import { MorePicsBtn, Grid } from './atoms'
import { Photo } from './photo'
import Gallery from './gallery'
import Popup from '../../common/popup'
import clamp from 'ramda/src/clamp'

class EventPhotos extends React.Component {
  state = {
    page: 1,
    selectedImage: -1,
  }

  static defaultProps = {
    offset: 10,
    photos: [],
  }

  render() {
    return (
      <React.Fragment>
        <Grid>
          {this.photos.map((photo, key) => (
            <Photo
              onClick={() => this.setState({ selectedImage: key })}
              key={key}
              image={photo}
            />
          ))}
        </Grid>
        {this.showLoadMoreBrn ? (
          <MorePicsBtn onClick={this.incrementPage}>more pics</MorePicsBtn>
        ) : null}
        {this.state.selectedImage === -1 ? null : (
          <Popup
            isOpen={true}
            onRequestClose={() => this.setState({ selectedImage: -1 })}>
            <Gallery
              photos={this.props.photos}
              selectedImage={this.state.selectedImage}
              onSelectPhoto={this.handlePhotoSelection}
            />
          </Popup>
        )}
      </React.Fragment>
    )
  }

  get photos() {
    return this.props.photos.slice(0, this.state.page * this.props.offset)
  }

  incrementPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  get showLoadMoreBrn() {
    return this.props.photos.length - this.state.page * this.props.offset > 0
  }

  handlePhotoSelection = newPhotoIndex =>
    this.setState({
      selectedImage: clamp(0, this.props.photos.length, newPhotoIndex),
    })
}

const dimensions = new Map([['q', 'small'], ['y', 'middle'], ['w', 'big']])

export default compose(
  withState('photos', 'setPhotos'),
  lifecycle({
    componentDidMount() {
      fetch(
        'http://webpurple-provider.herokuapp.com/albums/-94098151/254801191?token=6a2750226a2750226a275022',
      )
        .then(r => r.json())
        .then(({ items }) =>
          items.map(item => {
            const newSizes = item.sizes
              .filter(({ type }) => dimensions.has(type))
              .reduce((acc, i) => {
                acc[dimensions.get(i.type)] = i
                return acc
              }, {})
            return { ...item, sizes: newSizes }
          }),
        )
        .then(photos => this.props.setPhotos(photos))
    },
  }),
)(EventPhotos)
