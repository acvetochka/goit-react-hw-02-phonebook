import { Component } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Notification } from '../Notification/Notification';
import { Section } from 'components/Section/Section';
import { Container } from './App.styled';

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
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm handleSubmit={this.handleSubmit} />
        </Section>
        <Section title={'Contacts'}>
          <Filter onChangeFilter={this.onChangeFilter} />
          {this.state.contacts.length ? (
            <ContactList
              onVisibleContacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </Container>
    );
  }
}
