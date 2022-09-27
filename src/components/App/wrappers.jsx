import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const Wrapper = styled.div`
  text-align: center;
`

export const HeaderWrapper = styled.header`
  background-color: ${(p) => p.theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${(p) => p.theme.colors.white};
`

const appLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const LogoWrapper = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${appLogoSpin} infinite 20s linear;
`

export const LinkWrapper = styled.a`
  color: ${(p) => p.theme.colors.cyan};
`
