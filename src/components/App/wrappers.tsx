import styled from '@emotion/styled';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.white};
`;

export const HeadingWrapper = styled.h1`
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;
