import React from 'react';

import { Wrapper } from './wrappers';

export interface TextProps {
  children: string | JSX.Element;
  variant?: 'h1' | 'p';
}

const Text = ({ children, variant = 'p' }: TextProps) => (
  <Wrapper {...{ variant }}>{children}</Wrapper>
);

export default Text;
