import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const HeaderWrapper = styled.header`
  text-align: center;
  margin-bottom: 24px;

  > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;
