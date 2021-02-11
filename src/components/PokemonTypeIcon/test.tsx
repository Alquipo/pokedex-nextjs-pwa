import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import PokemonTypeIcon, { PokemonTypeIconProps } from '.'

const props: PokemonTypeIconProps = {
  typeIcon: 'Fire'
}

describe('<PokemonTypeIcon />', () => {
  it('should render the PokemonTypeIcon correctly', () => {
    const { container } = renderWithTheme(<PokemonTypeIcon {...props} />)

    expect(screen.getByRole('img', { name: props.typeIcon })).toHaveAttribute(
      'src',
      `img/type-icons/Fire.png`
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the style PokemonTypeIcon', () => {
    const { container } = renderWithTheme(<PokemonTypeIcon {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundColor: theme.pokemonTypeColors[props.typeIcon],
      boxShadow: `0 0 2rem ${theme.pokemonTypeColors[props.typeIcon]}`
    })
  })
})