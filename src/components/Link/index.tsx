import React from 'react';

import { Wrapper } from './wrappers';

export interface LinkProps {
  children: string | number | JSX.Element;
  href: string;
  target?: string;
}

const Link = ({ children, href, target }: LinkProps) => (
  <Wrapper {...{ href, target }}>{children}</Wrapper>
);

export default Link;
