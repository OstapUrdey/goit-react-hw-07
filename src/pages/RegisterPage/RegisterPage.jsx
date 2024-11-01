import css from './RegisterPage.module.css';
import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';


export default function RegisterPage() {
    return(
        <div className={css.container}>
            <PageTitle>Register your account</PageTitle>
            <RegistrationForm />
        </div>
    )
}