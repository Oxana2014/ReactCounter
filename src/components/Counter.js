import {useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
const counter = useSelector((state) => state.counter)

function handleIncrement() {
  dispatch({type: 'increment'})
}

function handleDecrement() {
  dispatch({type: 'decrement'})
}

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}> {counter} </div>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
