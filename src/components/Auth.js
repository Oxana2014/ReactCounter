import {  useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/auth';

const Auth = () => {
const dispatch = useDispatch()

function handleLogin(event) {
  event.preventDefault()
  dispatch(authActions.login())
}

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' required minLength={4} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
