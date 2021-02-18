/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components'
import { MenuProps } from '.'
import { ArrowBack } from '@styled-icons/ionicons-outline/ArrowBack'

export const wrapperModifiers = {
  left: () => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
  right: () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      margin-right: 1rem;
    }
  `,
  center: () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
}

export const BackButton = styled(ArrowBack)`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    width: 3rem;
    height: 3rem;
  `}
`

export const Wrapper = styled.header<MenuProps>`
  ${({ theme, bgColor, positionLogo }) => css`
    height: 6.4rem;
    width: 100%;
    overflow: hidden;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    margin-bottom: ${theme.spacings.xsmall};

    min-width: 450px;
    z-index: ${theme.layers.menu};

    position: sticky;
    top: 0;

    @keyframes fadeInMenu {
      0% {
        background-color: ${theme.colors.pokemonText.transparent};
      }

      100% {
        background-color: ${theme.colors.pokemonText[bgColor!]};
      }
    }

    @keyframes fadeInLogo {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    &.menu-appear {
      animation: fadeInMenu 1s ease-out;
    }

    img {
      cursor: pointer;
      &.menu-appear {
        animation: fadeInLogo 1s ease-out;
      }
    }

    background-color: ${theme.colors.pokemonText[bgColor!]};

    ${positionLogo && wrapperModifiers[positionLogo]}

    backdrop-filter: saturate(180%) blur(0.2rem);
    box-shadow: 0 0 40px 8px rgb(0 0 0 / 18%);
  `}
`
