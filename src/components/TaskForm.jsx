import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Form as BootstrapForm } from 'react-bootstrap';
import * as Yup from 'yup';

const TaskForm = ({ initialValues, onSubmit }) => {
    const validationSchema = Yup.object({
        title: Yup.string().required('Обов\'язкове поле'),
        description: Yup.string(),
        status: Yup.string().oneOf(['нове', 'в роботі', 'завершене']),
        priority: Yup.string().oneOf(['low', 'medium', 'high']),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <BootstrapForm.Group className="mb-3">
                        <BootstrapForm.Label>Назва</BootstrapForm.Label>
                        <Field name="title" className="form-control" />
                        <ErrorMessage name="title" component="div" className="text-danger" />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group className="mb-3">
                        <BootstrapForm.Label>Опис</BootstrapForm.Label>
                        <Field name="description" as="textarea" className="form-control" />
                        <ErrorMessage name="description" component="div" className="text-danger" />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group className="mb-3">
                        <BootstrapForm.Label>Статус</BootstrapForm.Label>
                        <Field name="status" as="select" className="form-select">
                            <option value="нове">нове</option>
                            <option value="в роботі">в роботі</option>
                            <option value="завершене">завершене</option>
                        </Field>
                        <ErrorMessage name="status" component="div" className="text-danger" />
                    </BootstrapForm.Group>
                    <BootstrapForm.Group className="mb-3">
                        <BootstrapForm.Label>Пріоритет</BootstrapForm.Label>
                        <Field name="priority" as="select" className="form-select">
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>
                        </Field>
                        <ErrorMessage name="priority" component="div" className="text-danger" />
                    </BootstrapForm.Group>
                    <Button type="submit" disabled={isSubmitting}>
                        Зберегти
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default TaskForm;