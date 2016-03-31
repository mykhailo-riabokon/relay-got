import React, {Component, PropTypes} from 'react';
import Relay from 'react-relay';
import './family.less';

export class Family extends Component {
  static propTypes = {
    family: PropTypes.object,
  };

  get rullerFamily() {
    const { name, words, coatOfArms } = this.props.family;
    const style = {
      backgroundImage: `url(${coatOfArms})`
    };

    return (
      <div className="family">
        <div className="info">
          <div className="label">Rulers:</div>
          <div className="value">{`House ${name}`}</div>
        </div>
        <div className="family__coat-of-arms" style={style}></div>
        <div className="info">
          <div className="label">Words:</div>
          <div className="value">{words}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="family-container">
        {this.props.family && this.rullerFamily}
      </div>
    );
  }
}

export default Relay.createContainer(Family, {
  fragments: {
    family: () => Relay.QL`
      fragment on Family {
        id,
        name,
        words,
        coatOfArms
      }
    `
  }
});
