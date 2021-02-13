import Image from 'next/image'

import { PokemonTypesProps } from 'components/PokemonCard'
import * as S from './styles'

export type PokemonTypeIconProps = {
  type: PokemonTypesProps
}

const PokemonTypeIcon = ({ type }: PokemonTypeIconProps) => (
  <S.Wrapper typeIcon={type}>
    <Image
      src={`/img/type-icons/${type.toLowerCase()}.png`}
      alt={type}
      width={23}
      height={23}
    />
  </S.Wrapper>
)

export default PokemonTypeIcon
