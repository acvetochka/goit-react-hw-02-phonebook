import { Component } from 'react';
import { Message } from './Notification.styled';

export class Notification extends Component {
  render() {
    return (
      <Message>
        The contact book is empty! <br /> Add new contacts
      </Message>
    );
  }
}
