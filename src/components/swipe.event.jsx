import { Component } from 'react'
import canUseDom from 'can-use-dom'
class SwipeEventEmitter extends Component {
  state = {
    hammerElement: null,
  }

  horizontalStarted = true
  verticalStarted = true

  static defaultProps = {
    onHorizontalMove: () => {},
    onRelease: () => {},
    offset: 30,
  }

  componentDidMount() {
    if (canUseDom) {
      import('hammerjs').then(module => {
        const Hammer = module.default
        const hammerElement = new Hammer(document.body, {
          direction: module.DIRECTION_HORIZONTAL,
          threshold: this.props.offset,
        })
        hammerElement.on('panmove', this.handleMove)
        hammerElement.on('panend', this.handleEnd)
        this.setState({ hammerElement })
      })
    }
  }

  componentWillUnmount() {
    this.state.hammerElement.off('panmove', this.handleMove)
    this.state.hammerElement.off('panend', this.handleEnd)
  }

  handleEnd = e => {
    this.props.onRelease({ distance: e.deltaX || 0 })
  }

  handleMove = e => {
    this.props.onHorizontalMove({ distance: e.deltaX || 0 })
  }

  render() {
    return null
  }
}

export default SwipeEventEmitter
