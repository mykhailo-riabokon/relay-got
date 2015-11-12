import React, {Component, PropTypes} from 'react';
import {RootContainer} from 'react-relay';
import {MembersRoute} from '../../../../../../routes.js';
import Members from './components/memebers/index.js';

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
    let {name, words, id} = this.props.family;
    let className = `family ${name && name.toLowerCase() || ''}`;

    return (
      <div className="family-container">
        <div className={className}>
          <div className="family__name">{name}</div>
          <div className="family__crest"></div>
          <div className="family__words">{words}</div>
        </div>
        <RootContainer Component={Members} route={new MembersRoute({familyId: id})}/>
      </div>
    );
  }
}

export default Family;
