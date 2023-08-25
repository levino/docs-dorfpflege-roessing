import React, { ComponentProps } from 'react'

import { omit } from 'fp-ts-std/Struct'
import Zoom from 'react-medium-image-zoom'
export type Props = ComponentProps<'img'>

export const Image: React.FC<Props> = (props = { loading: 'lazy' }) => (
  <Zoom>
    <img {...removeExtraProps(props)} />
  </Zoom>
)

const removeExtraProps = omit(['toString', 'images']) as (props: Props) => Props
