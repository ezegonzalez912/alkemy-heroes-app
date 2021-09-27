import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const SearchForm = ({handleSubmit}) => {

    const valiidatesField = (values) => {
        const errors = {}
        if(!values.search){
            errors.search = "The field cannot be empty"
        }
        return errors
    }

    return (
        <div className="search-title-form">
            <h1>Search <span className="fw-400">Hero</span></h1>
            <Formik initialValues={{search: ''}} onSubmit={handleSubmit} validate={valiidatesField}>
                {({isSubmitting}) => (
                <Form className="search-form">
                    <Field className="form-control" placeholder="Batman" name="search" autoComplete="off"/>
                    <button className="btn-primary" type="submit" disabled={isSubmitting}>Search</button>
                    <ErrorMessage name="search"/>
                </Form>
                )}
            </Formik>
        </div>
    )
}

//disabled={!formik.isValid}
