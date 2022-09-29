import styled from '@emotion/styled';
import { TextProps } from './index';

export const Wrapper = styled.div<TextProps>`
  color: ${p => p.theme.colors.white};

  /* body */
  ${p =>
    p.variant === 'body' &&
    `
    font-size: 17px;
  `}

  /* h1 */
  ${p =>
    p.variant === 'h1' &&
    `
    font-size: 40px;
  `}
`;
