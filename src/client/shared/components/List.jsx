import React, {PropTypes, Component} from 'react';

class List extends Component {
  static propTypes = {
    data: PropTypes.array,
    renderItemMethod: PropTypes.func,
    className: PropTypes.string
  };
  static defaultProps = {
    className: 'list',
    data: [],
    renderItemMethod: () => {}
  };

  render() {
    return (
      <div className={this.props.className}>
        {this.props.data.map((...args) => this.props.renderItemMethod(...args))}
      </div>
    );
  }
}

export default List;
