import css from './ContactsPage.module.css';

import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations.js';

export default function ContactsPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])
    

    return (
            <div className={css.container}>
                <PageTitle>Phonebook</PageTitle>
                <ContactForm />
                <SearchBox />
                <ContactList />
            </div>
    )
};