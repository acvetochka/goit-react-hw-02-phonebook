import { Component } from 'react';
import PropTypes from 'prop-types';

export class Contact extends Component {
  deleteContact = () => {
    this.props.onDeleteContact(this.props.id);
  };

  render() {
    return (
      <li key={this.props.id}>
        <p>
          {this.props.name}: {this.props.number}
        </p>
        <button type="button" onClick={this.deleteContact}>
          Delete
        </button>
      </li>
    );
  }
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
