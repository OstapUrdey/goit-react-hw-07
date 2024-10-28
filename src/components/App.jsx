import {Route, Routes} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout/Layout.jsx';


const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage.jsx'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage.jsx'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage.jsx'));


export default function App() {
    return (
        <div>
            <Layout />
            <Suspense fallback={null}>
                <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contacts" element={<ContactsPage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}