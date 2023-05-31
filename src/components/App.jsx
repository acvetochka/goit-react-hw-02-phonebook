import { Component } from 'react';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = contactItem => {
    const { name } = contactItem;
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contactItem, ...contacts],
      }));
    }
  };

  deleteContact = id => {
    this.setState(PrevState => ({
      contacts: PrevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onChangeFilter = value => {
    this.setState({ filter: value });
  };

  getFilterContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getFilterContact();
    return (
      <div>
        <div>
          <h2>Phonebook</h2>
          <ContactForm handleSubmit={this.handleSubmit} />
        </div>
        <div>
          <h2>Contacts</h2>
          <Filter onChangeFilter={this.onChangeFilter} />
          {this.state.contacts.length ? (
            <ContactList
              onVisibleContacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <Notification />
          )}
        </div>
      </div>
    );
  }
}
