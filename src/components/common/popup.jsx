import * as React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import styled, { injectGlobal } from 'styled-components'

injectGlobal`
  body.ReactModal__Body--open {
    overflow: hidden;
    & > *:not(.ReactModalPortal) {
      filter: blur(3px);
    }
  }
`

const PopupWindowContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PopupWindow = styled.div`
  position: relative;

  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
`

const customStyles = {
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(94, 94, 94, 0.13)',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    border: 'none',
    borderRadius: 'none',
    maxHeight: '100vh',
    overflow: 'initial',
    padding: '0',
    position: 'static',
    width: '90%',
    maxWidth: '75rem',
    backgroundColor: 'transparent',
  },
}

let { NODE_ENV } = process.env

if (NODE_ENV !== 'test' && NODE_ENV !== 'travisci') {
  Modal.setAppElement('#___gatsby')
}

const Popup = ({ children, onRequestClose, ...rest }) => (
  <Modal
    {...rest}
    isOpen={true}
    onRequestClose={onRequestClose}
    parentSelector={() => document.body}
    style={customStyles}>
    <PopupWindow>
      <PopupWindowContainer>{children}</PopupWindowContainer>
    </PopupWindow>
  </Modal>
)

export default Popup

Popup.propTypes = {
  onRequestClose: PropTypes.func.isRequired,
}
