import css from './LoginForm.module.css';
// import {useDispatch} from 'react-redux';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().min(6, "Password too short").required("Required"),
});

export default function LoginForm() {
        // const dispatch = useDispatch();



        return (
            <div className={css.container}>
                <h1>Log In</h1>
                <Formik
                    initialValues={{email: "", password: ""}}
                    validationSchema={validationSchema}
                >
                    <Form>
                        <label>
                            Email:
                            <Field name="email" type="email" className={css.input} />
                            <ErrorMessage name="eamil" component="div" className={css.error} />
                        </label>
                        <label>
                            Password:
                            <Field name="password" type="password" className={css.input} />
                            <ErrorMessage name="password" component="div" className={css.error} />
                        </label>
                        <button type="submit" className={css.button}>Log In</button>
                    </Form>
                </Formik>
            </div>
        );    
}