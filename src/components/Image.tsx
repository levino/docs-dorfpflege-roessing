import React, { ComponentProps } from 'react'

import { omit } from 'fp-ts-std/Struct'

export type Props = ComponentProps<'img'>

export const Image: React.FC<Props> = (props = { loading: 'lazy' }) => (
  <img {...removeExtraProps(props)} />
)

const removeExtraProps = omit(['toString', 'images']) as (props: Props) => Props
