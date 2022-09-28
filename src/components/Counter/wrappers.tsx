import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > *:not(:last-child) {
    margin-right: 16px;
  }
`;

export const ValueWrapper = styled.span`
  font-size: 17px;
  font-weight: 700;
`;
