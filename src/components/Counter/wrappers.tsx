import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > *:not(:last-child) {
    margin-right: 16px;
  }
`;
