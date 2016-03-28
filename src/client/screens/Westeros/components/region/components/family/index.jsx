import React, {Component, PropTypes} from 'react';
import Relay from 'react-relay';
import {RootContainer} from 'react-relay';
import {CharactersRoute} from 'core/routes.js';
import Characters from './components/characters/index.jsx';
import './family.less';

export class Family extends Component {
  static propTypes = {
    family: PropTypes.object,
    relay: PropTypes.object.isRequired
  };

  get rullerFamily() {
    const {name, words, coatOfArms} = this.props.family;
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
    const {family} = this.props;
    const charactersRoute = new CharactersRoute({
      familyId: family && family.id || '',
      regionId: this.props.relay.variables.regionId
    });

    return (
      <div className="family-container">
        {family.name && this.rullerFamily}
        <RootContainer Component={Characters} route={charactersRoute}/>
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
