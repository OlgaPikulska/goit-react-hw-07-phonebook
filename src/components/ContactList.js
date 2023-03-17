import { Contact } from './Contact';
import { selectContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    console.log(contacts)

    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <Contact contact={contact} />
                </li>
            ))}
        </ul>
    )
}