/**
 * Created by mikhail on 05.11.15.
 */
import React, {PropTypes, Component} from 'react';
import ReactModal from 'react-modal';

let styles = {
  overlay : {
    backgroundColor: 'rgba(0,0,0, 0.6)'
  },
  content : {
    border: 'none',
    background: 'rgba(0,0,0, 0.9)'
  }
};

class Modal extends Component {
  static propTypes = {
    onRequestClose: PropTypes.func,
    isOpen: PropTypes.bool
  };

  render() {
    return (
      <ReactModal style={styles} {...this.props}>{this.props.children}</ReactModal>
    )
  }
}

export default Modal;
