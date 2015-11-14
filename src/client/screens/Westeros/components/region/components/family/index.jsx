import React, {Component, PropTypes} from 'react';
import Relay from 'react-relay';
import {RootContainer} from 'react-relay';
import {MembersRoute} from 'core/routes.js';
import Members from './components/members/index.jsx';

require('./family.less');

export class Family extends Component {
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
    let {name, words, id, coatOfArms} = this.props.family;
    let className = `family ${name && name.toLowerCase() || ''}`;
    let style = {
      backgroundImage: `url(${coatOfArms})`
    };

    let memberRoute = new MembersRoute({
      familyId: id,
      regionId: this.props.relay.variables.regionId
    });

    return (
      <div className="family-container">
        <div className={className}>
          <div className="family__name">{name}</div>
          <div className="family__coat-of-arms" style={style}></div>
          <div className="family__words">{words}</div>
        </div>
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
