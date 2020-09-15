import { Input, InputProps } from './Input'

import React from 'react'

export interface TagProps extends InputProps {}

const Tag = React.forwardRef(
  (props: TagProps, ref: React.Ref<HTMLInputElement>) => {
    return <Input ref={ref} {...props} />
  }
)

export { Tag }
