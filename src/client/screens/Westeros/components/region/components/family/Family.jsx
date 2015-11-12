import React, {Component, PropTypes} from 'react';

require('./family.less');

class Family extends Component {
  static propTypes = {
    family: PropTypes.object
  };
  static defaultProps = {
    family: {
      name: '',
      words: ''
    }
  };

  render() {
    let {name, words} = this.props.family;
    let className = `family ${name && name.toLowerCase() || ''}`;

    return (
      <div className={className}>
        <div className="family__name">{name}</div>
        <div className="family__crest"></div>
        <div className="family__words">{words}</div>
      </div>
    );
  }
}

export default Family;
