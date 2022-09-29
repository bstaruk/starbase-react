import styled from '@emotion/styled';
import { TextProps } from './index';

export const Wrapper = styled.div<TextProps>`
  color: ${p => p.theme.colors.white};
  font-size: ${p => (p.variant === 'h1' ? '40px' : '17px')};
`;
