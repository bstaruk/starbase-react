import React from 'react';

import { Wrapper } from './wrappers';

interface ButtonProps {
  ariaLabel?: string;
  children: string | JSX.Element;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ ariaLabel, children, disabled, onClick }: ButtonProps) => (
  <Wrapper aria-label={ariaLabel} {...{ disabled, onClick }}>
    {children}
  </Wrapper>
);

export default Button;
