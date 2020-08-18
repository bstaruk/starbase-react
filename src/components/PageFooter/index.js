import React from 'react';
import styled from 'styled-components';

import { A } from 'components/Link';

const Wrapper = styled.footer`
  margin-top: 2.5rem;
  border-top: 1px solid ${(props) => props.theme.color.silver};
  color: ${(props) => props.theme.color.gray};
`;

const PageFooter = () => (
  <Wrapper role="contentinfo">
    <p>
      crafted in boston by{' '}
      <A
        href="https://brian.staruk.net"
        title="continue to brian.staruk.net"
        className="h-card"
      >
        brian staruk
      </A>
      {' | '}
      <A
        href="https://github.com/bstaruk/starbase-react"
        title="learn more about starbase-react on github"
      >
        starbase-react on github
      </A>
    </p>
  </Wrapper>
);

export default PageFooter;
