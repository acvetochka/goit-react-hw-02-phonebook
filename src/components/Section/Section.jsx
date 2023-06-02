import { Component } from 'react';
import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export class Section extends Component {
  render() {
    return (
      <section>
        <Title>{this.props.title}</Title>
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
