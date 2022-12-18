import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/authSlice';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(authActions.logout());
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const loginNav = isLoggedIn && (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logOutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {loginNav}
    </header>
  );
};

export default Header;
