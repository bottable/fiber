import { MergeElementProps } from '../utils'

import React from 'react'

export type InputProps = MergeElementProps<
  'input',
  {
    variant?: String
  }
>

const Input = React.forwardRef((props: InputProps, ref: any) => {
  return <input {...props} ref={ref} />
})

export { Input }
