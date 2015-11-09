import React, {Component, PropTypes} from 'react';

let style = {
  color: '#f00'
};

class Family extends Component {
  static propTypes = {
    viewer: PropTypes.object
  };

  static defaultProps = {
    families: null
  };

  render() {
    return (
      <h1 style={style}>Family</h1>
    );
  }
}

export default Family;
