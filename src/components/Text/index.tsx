import React from 'react';

import { Wrapper } from './wrappers';

export interface TextProps {
  as?: React.ElementType;
  children: string | JSX.Element;
  variant?: 'h1' | 'body';
}

const Text = ({ as, children, variant = 'body' }: TextProps) => (
  <Wrapper {...{ as, variant }}>{children}</Wrapper>
);

export default Text;
