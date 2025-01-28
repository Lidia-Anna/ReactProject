import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SimpleForm = () => {
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .email("wrong email format")
            .required("Email is required"),
        phone: Yup.string()
            .matches(/^\d+$/, "Phone number must contain only Numbers")
            .length(12, "Phone number must contain exactly 12 symbols")
            .required("Phone number is required"),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        validationSchema,
        onSubmit: () => {
            alert('The form has been successfully submitted!');
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{margin: '10px'}}>
                <label htmlFor="name">Name:</label><br/>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                    <div style={{ color: 'red', fontSize: '12px', margin: '5px' }}>{formik.errors.name}</div>
                )}
            </div>

            <div style={{margin: '10px'}}>
                <label htmlFor="email">Email:</label><br/>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                    <div style={{color: 'red', fontSize: '12px', margin: '5px'}}>{formik.errors.email}</div>
                )}
            </div>

            <div style={{margin: '10px'}}>
                <label htmlFor="phone">Phone number:</label><br/>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                    <div style={{color: 'red', fontSize: '12px', margin: '5px'}}>{formik.errors.phone}</div>
                )}
            </div>

            <button type="submit" style={{margin: '10px'}}>Submit</button>
        </form>
    );
};

export default SimpleForm;
