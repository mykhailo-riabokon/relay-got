import React, {Component, PropTypes} from 'react';
import Relay from 'react-relay';
import {RootContainer} from 'react-relay';
import {MembersRoute} from 'core/routes.js';
import Members from './components/members/index.jsx';

require('./family.less');

export class Family extends Component {
  static propTypes = {
    family: PropTypes.object,
    relay: PropTypes.object.isRequired
  };

  getRullerFamily() {
    let {name, words, coatOfArms} = this.props.family;
    let style = {
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
    let {family} = this.props;

    let memberRoute = new MembersRoute({
      familyId: family && family.id || '',
      regionId: this.props.relay.variables.regionId
    });

    return (
      <div className="family-container">
        {family && this.getRullerFamily()}
        <RootContainer Component={Members} route={memberRoute}/>
      </div>
    );
  }
}

export default Relay.createContainer(Family, {
  initialVariables: {
    regionId: ''
  },

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
