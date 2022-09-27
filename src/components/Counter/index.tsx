import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from 'data/counter/selectors';
import { actions as counterActions } from 'data/counter/slice';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(counterActions.increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(counterActions.decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
