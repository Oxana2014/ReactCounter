//import {Component} from 'react'
import {useSelector, useDispatch, connect } from 'react-redux'
import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
const counter = useSelector((state) => state.counter.counter)
const show = useSelector(state => state.counter.showCounter)

function handleIncrement() {
 // dispatch({type: 'increment'})
 dispatch(counterActions.increment())
}

function handleDecrement() {
  dispatch(counterActions.decrement())
}

function handleIncrease() {
 // dispatch({type: 'increase', value: 5})
 dispatch(counterActions.increase(5)) // redux create {type: 'UNIQUE _IDENTIFIER', payload: 5}
}

  const toggleCounterHandler = () => {
    //dispatch({type: 'toggle'})
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}> {counter} </div> }
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrease}>Increment by 5</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {

//   handleDecrement() {
//     this.props.decrement()
//   }
//   handleIncrement() {
//     this.props.increment()
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (<main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}> {this.props.counter} </div>
//       <div>
//         <button onClick={this.handleDecrement.bind(this)}>Decrement</button>
//         <button onClick={this.handleIncrement.bind(this)}>Increment</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>)
//   }
// }

// const mapStateToProps = state => {
//   return {
// counter: state.counter
//   }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     increment : () => dispatch({type: 'increment'}),
//     decrement: () => dispatch({type: 'decrement'})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)( Counter);
