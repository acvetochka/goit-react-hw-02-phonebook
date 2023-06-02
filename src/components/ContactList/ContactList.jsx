import { Component } from 'react';
import PropTypes from 'prop-types';
import { Contact } from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    return (
      <ContactListStyled>
        {this.props.onVisibleContacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={this.props.onDeleteContact}
          />
        ))}
      </ContactListStyled>
    );
  }
}

ContactList.propTypes = {
  onVisibleContacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
