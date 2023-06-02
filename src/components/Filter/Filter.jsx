import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, FilterLabel, FilterInput } from './Filter.styled';

export class Filter extends Component {
  changeFilter = evt => {
    this.props.onChangeFilter(evt.currentTarget.value);
  };
  render() {
    return (
      <Container>
        <FilterLabel>
          Find contact by name
          <FilterInput type="text" onChange={this.changeFilter} />
        </FilterLabel>
      </Container>
    );
  }
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
