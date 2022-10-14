import { Component } from 'react';
import { nanoid } from 'nanoid';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  name: '',
  number: '',
};

export class PhoneBook extends Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const name = evt.target.name;
    const value = evt.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number, contacts } = this.state;
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    contacts.push(contact);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number, filter, contacts } = this.state;
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleChange}
              type="text"
              name="name"
              value={name}
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
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            onChange={this.handleChange}
            type="text"
            name="filter"
            value={filter}
            required
          />
        </label>
        <ul>
          {filteredContacts.map(({ name, number, id }) => {
            return (
              <li key={id}>
                {name}: {number}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
