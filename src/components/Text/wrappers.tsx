import styled from '@emotion/styled';
import { TextProps } from './index';

export const Wrapper = styled.div<TextProps>`
  color: ${p => p.theme.colors.white};

  /* p */
  ${p =>
    p.variant === 'p' &&
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
