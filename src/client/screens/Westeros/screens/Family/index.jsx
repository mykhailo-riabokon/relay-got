import React, {Component, PropTypes} from 'react';
import Relay from 'react-relay';
import ReactModal from 'react-modal';
// import ReactModal
// import {RootContainer} from 'react-relay';
// import {CharactersRoute} from 'core/routes.js';
// import Characters from './components/characters/index.jsx';
import './family.less';

export class Family extends Component {
  static propTypes = {
    family: PropTypes.object,
    //
    // relay: PropTypes.object
  };

  static contextTypes = {
    router: PropTypes.object,
  };


  // get rullerFamily() {
  //   const {name, words, coatOfArms} = this.props.family;
  //   const style = {
  //     backgroundImage: `url(${coatOfArms})`
  //   };
  //
  //   return (
  //     <div className="family">
  //       <div className="info">
  //         <div className="label">Rulers:</div>
  //         <div className="value">{`House ${name}`}</div>
  //       </div>
  //       <div className="family__coat-of-arms" style={style}></div>
  //       <div className="info">
  //         <div className="label">Words:</div>
  //         <div className="value">{words}</div>
  //       </div>
  //     </div>
  //   );
  // }

  backToWesteros = () => {
    this.context.router.push({ pathname: '/' });
  };

  render() {
    // const {family} = this.props;
    // const charactersRoute = new CharactersRoute({
    //   familyId: family && family.id || '',
    //   regionId: this.props.relay.variables.regionId
    // });

    const styles = {
      overlay : {
        backgroundColor: 'rgba(0,0,0, 0.6)'
      },
      content : {
        border: 'none',
        background: 'rgba(0,0,0, 0.9)'
      }
    };

    debugger;

    return (
      <ReactModal isOpen={true} onRequestClose={this.backToWesteros} style={styles}>
        <div className="family-container">
          <h1>asdasd</h1>
        </div>
      </ReactModal>
    );
  }
}

export default Family;

// export default Relay.createContainer(Family, {
//   initialVariables: {
//     regionId: ''
//   },
//
//   fragments: {
//     viewer: () => Relay.QL`
//       fragment on viewer {
//         family(regionId: $regionId) {
//           id,
//           name,
//           words,
//           coatOfArms
//         }
//       }
//     `
//   }
// });
