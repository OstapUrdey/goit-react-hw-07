import css from './RegistrationForm.module.css';
import {useDispatch} from 'react-redux';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().min(6, "Password too short").required("Required"),
});

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm}) => {
        dispatch(register(values));
        resetForm()
    }

    return (
        <div className={css.container}>
            <Formik
                initialValues={{name: "", email: "", password: ""}}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <label>
                        Name:
                        <Field name="name" type="text" className={css.input} />
                        <ErrorMessage name="name" component="div" className={css.error} />
                    </label>
                    <label>
                        Email:
                        <Field name="email" type="email" className={css.input} />
                        <ErrorMessage name="email" component="div" className={css.error} />
                    </label>
                    <label>
                        Password:
                        <Field name="password" type="password" className={css.input} />
                        <ErrorMessage name="password" component="div" className={css.error} />
                    </label>
                    <button type="submit" className={css.button}>Register</button>
                </Form>
            </Formik>
        </div>
    );
}