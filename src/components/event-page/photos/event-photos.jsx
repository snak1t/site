import React from 'react'
import { withState, lifecycle, compose } from 'recompose'
import clamp from 'ramda/src/clamp'
import { MorePicsBtn, Grid } from './atoms'
import { Photo } from './photo'
import Gallery from './gallery'
import Popup from '../../common/popup'
import BlockHeader from '../../common/block-header'

class EventPhotos extends React.Component {
  state = {
    page: 1,
    selectedPhotoIndex: -1,
  }

  static defaultProps = {
    offset: 10,
    photos: [],
  }

  render() {
    if (this.props.photos.length === 0) {
      return null
    }
    return (
      <React.Fragment>
        <BlockHeader>Past event photos</BlockHeader>
        <Grid>
          {this.photos.map((photo, key) => (
            <Photo
              onClick={() => this.setState({ selectedPhotoIndex: key })}
              key={key}
              image={photo}
            />
          ))}
        </Grid>
        {this.showLoadMoreBrn ? (
          <MorePicsBtn onClick={this.incrementPage}>more pics</MorePicsBtn>
        ) : null}
        {this.state.selectedPhotoIndex === -1 ? null : (
          <Popup
            onRequestClose={() => this.setState({ selectedPhotoIndex: -1 })}>
            <Gallery
              photos={this.props.photos}
              selectedPhotoIndex={this.state.selectedPhotoIndex}
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
      selectedPhotoIndex: clamp(0, this.props.photos.length, newPhotoIndex),
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
