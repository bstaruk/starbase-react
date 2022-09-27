import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from 'data/counter/selectors';
import { actions as counterActions } from 'data/counter/slice';
import { Wrapper, ButtonWrapper, ValueWrapper } from './wrappers';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ButtonWrapper
        aria-label="Decrement value"
        onClick={() => dispatch(counterActions.decrement())}
        disabled={count < 1}
      >
        Decrement
      </ButtonWrapper>

      <ValueWrapper>{count}</ValueWrapper>

      <ButtonWrapper
        aria-label="Increment value"
        onClick={() => dispatch(counterActions.increment())}
        disabled={count >= 10}
      >
        Increment
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Counter;
