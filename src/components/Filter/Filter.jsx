import { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  changeFilter = evt => {
    this.props.onChangeFilter(evt.currentTarget.value);
  };
  render() {
    return (
      <div>
        <label>
          Find contact by name
          <input type="text" onChange={this.changeFilter} />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
