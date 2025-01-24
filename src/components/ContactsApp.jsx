import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm.jsx";
import ContactsTable from "./ContactsTable.jsx";

const ContactsApp = () => {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                const formattedContacts = data.map((user) => ({
                    id: user.id,
                    name: user.name,
                    phone: user.phone,
                }));
                setContacts(formattedContacts);
            });
    }, []);

    const handleDelete = (id) => {
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
    };

    const handleSave = (newContact) => {
        setContacts((prev) => [
            ...prev,
            { id: newContact.id, name: `${newContact.name} ${newContact.surname}`, phone: newContact.phone },
        ]);
        setShowForm(false);
    };

    return (
        <div>
            <h1>Контакти</h1>
            <ContactsTable contacts={contacts} onDelete={handleDelete} />
            <button onClick={() => setShowForm(true)}>Додати новий контакт</button>
            {showForm && <ContactForm onSave={handleSave} onCancel={() => setShowForm(false)} />}
        </div>
    );
};

export default ContactsApp;
