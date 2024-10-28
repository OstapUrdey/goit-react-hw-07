import PageTitle from '../../components/PageTitle/PageTitle.jsx';
import css from './HomePage.module.css';

export default function HomePage() {
    return (
            <div className={css.container}>
                <PageTitle>
                    Welcome to the Phonebook App
                </PageTitle>
                <p>This is the best place to manage your contacts.</p>
            </div>
    );
}