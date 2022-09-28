import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCount } from 'data/app/selectors';
import { actions as appActions } from 'data/app/slice';
import Button from 'components/Button';
import { Wrapper, ValueWrapper } from './wrappers';

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
      <Button ariaLabel="Decrement value" onClick={onMinusClick} disabled={count < 1}>
        Decrement
      </Button>

      <ValueWrapper>{count}</ValueWrapper>

      <Button ariaLabel="Increment value" onClick={onPlusClick} disabled={count >= 10}>
        Increment
      </Button>
    </Wrapper>
  );
};

export default Counter;
