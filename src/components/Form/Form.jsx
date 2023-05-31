import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    const { name, number } = evt.currentTarget.elements;

    const contactItem = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };

    evt.currentTarget.reset();
    this.props.handleSubmit(contactItem);
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          Name
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
};
