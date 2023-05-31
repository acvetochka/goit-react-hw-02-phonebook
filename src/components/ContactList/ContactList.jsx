import { Component } from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';

export class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.onVisibleContacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={this.props.onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  onVisibleContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
