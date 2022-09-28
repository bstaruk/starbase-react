import styled from '@emotion/styled';

export const Wrapper = styled.button`
  padding: 8px 12px;
  font-size: 17px;
  background: none;
  border: 3px solid ${p => p.theme.colors.white};
  border-radius: 3px;
  color: ${p => p.theme.colors.white};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    font-style: italic;
  }
`;
