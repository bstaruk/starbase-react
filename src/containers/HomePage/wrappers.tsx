import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const HeaderWrapper = styled.header`
  max-width: 70ch;
  margin: 0 auto 24px;
  text-align: center;

  > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;
