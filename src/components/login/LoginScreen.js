import React from 'react'
import { useLogin } from '../../hooks/useLogin'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const LoginScreen = () => {

    const { handleLogin, error } = useLogin()

    const validateFields = (values) => {
        const errors = {}
        if(!values.email){
            errors.email = "Required Email"
        }
        if(!values.password){
            errors.password = "Required Password"
        }
        return errors
    }

    const handleSubmit = (values, {setSubmitting}) => {
        handleLogin(values)
        .then(() => setSubmitting(false))
    }

    return (
        <div className="login_screen">
            <div className="login_container">
                <div className="login_title">
                    <p>WELCOME TO</p>
                    <h1 className="c-primary">HEROES APP</h1>
                </div>
                <div className="login_box-container">
                    <h1 className="login_box-title">Please <span className="fw-400 c-primary">login</span></h1>
                    <Formik 
                        initialValues={{ email: '', password: '' }} 
                        onSubmit={handleSubmit}
                        validate={validateFields}
                    >
                        {({isSubmitting}) => (
                            <Form className="login_form">
                                <div className="login_form-fm">
                                    <Field className="login_form-field" placeholder="Your email" type="email" name="email"/>
                                    <ErrorMessage className="login_form-msg" name="email" component="p"/>
                                </div>
                                <div className="login_form-fm">
                                    <Field className="login_form-field" placeholder="Your password" type="password" name="password"/>
                                    <ErrorMessage className="login_form-msg" name="password" component="p"/>
                                </div>
                                <button className="btn-primary login_form-btn" type="submit" disabled={isSubmitting}> Login </button>
                            </Form>
                        )}
                    </Formik>
                    {error && <p className="login_form-msg">Email or password incorrect.</p>}
                </div>
            </div>
        </div>
    )
}
