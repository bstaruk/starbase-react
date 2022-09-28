import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCount } from 'data/app/selectors';
import { actions as appActions } from 'data/app/slice';
import { Wrapper, ButtonWrapper, ValueWrapper } from './wrappers';

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const onMinusClick = () => {
    dispatch(appActions.setCount(count - 1));
  };

  const onPlusClick = () => {
    dispatch(appActions.setCount(count + 1));
  };

  return (
    <Wrapper>
      <ButtonWrapper aria-label="Decrement value" onClick={onMinusClick} disabled={count < 1}>
        Decrement
      </ButtonWrapper>

      <ValueWrapper>{count}</ValueWrapper>

      <ButtonWrapper aria-label="Increment value" onClick={onPlusClick} disabled={count >= 10}>
        Increment
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Counter;
