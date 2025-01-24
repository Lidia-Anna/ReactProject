import React, { useState, useEffect } from 'react';

const ContactForm = ({ onSave, onCancel }) => {
    const [formData, setFormData] = useState({ name: '', surname: '', phone: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...formData, id: Date.now() });
        setFormData({ name: '', surname: '', phone: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Ім'я:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Прізвище:</label>
                <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Телефон:</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Зберегти</button>
            <button type="button" onClick={onCancel}>
                Скасувати
            </button>
        </form>
    );
};
export default ContactForm;