import React, { useState, useEffect } from 'react';

const ContactsTable = ({ contacts, onDelete }) => {
    return (
        <table border="1">
            <thead>
            <tr>
                <th>Ім'я</th>
                <th>Прізвище</th>
                <th>Телефон</th>
                <th>Дія</th>
            </tr>
            </thead>
            <tbody>
            {contacts.map((contact) => (
                <tr key={contact.id}>
                    <td>{contact.name.split(' ')[0]}</td>
                    <td>{contact.name.split(' ')[1] || ''}</td>
                    <td>{contact.phone}</td>
                    <td>
                        <button onClick={() => onDelete(contact.id)}>Видалити</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ContactsTable