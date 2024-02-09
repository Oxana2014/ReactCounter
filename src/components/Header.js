import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/index';

import classes from './Header.module.css';

const Header = () => {
const dispatch = useDispatch()

const auth = useSelector(state => state.auth.isAuthenticated)

function handleLogout() {
  dispatch(authActions.logout())
}

const navBar = (<nav>
  <ul>
    <li>
      <a href='/'>My Products</a>
    </li>
    <li>
      <a href='/'>My Sales</a>
    </li>
    <li>
      <button onClick={handleLogout}>Logout</button>
    </li>
  </ul>
</nav>)

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && navBar}
    </header>
  );
};

export default Header;
