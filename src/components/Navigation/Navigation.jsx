import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';


export default function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink className={css.link} to="/">
                Home
            </NavLink>
            <NavLink className={css.link} to="/contacts">
                Contacts
            </NavLink>
            <NavLink className={css.link} to="/login">
                Login
            </NavLink>
            <NavLink className={css.link} to="/register">
                Register
            </NavLink>
        </nav>
    )
}

// {/* <nav>
//       <NavLink className={css.link} to="/">
//         Home
//       </NavLink>
//       {isLoggedIn && (
//         <NavLink className={css.link} to="/tasks">
//           Tasks
//         </NavLink>
//       )}
//     </nav> */}