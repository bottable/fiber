import { Input, InputProps } from './'
import React, { useState } from 'react'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import VisibilityIcon from '@material-ui/icons/Visibility'

export interface PasswordProps extends InputProps {
  visibilityToggle?: boolean
  iconRender?: (visible: boolean) => React.ReactNode
}

const Password = React.forwardRef(
  (props: PasswordProps, ref: React.Ref<HTMLInputElement>) => {
    const [visible, setVisible] = useState(false)

    const { visibilityToggle, iconRender = () => null, disabled } = props

    const onVisibleChange = () => {
      if (disabled) {
        return
      }
      setVisible((prevVisible) => !prevVisible)
    }

    const getIcon = () => {
      const icon = iconRender(visible)
      const iconProps = {
        onClick: onVisibleChange,
        style: { cursor: 'pointer' }
      }
      return React.cloneElement(
        React.isValidElement(icon) ? icon : <span>{icon}</span>,
        iconProps
      )
    }

    return (
      <Input
        ref={ref}
        type={visible ? 'text' : 'password'}
        suffix={visibilityToggle && getIcon()}
        {...props}
      />
    )
  }
)

Password.defaultProps = {
  visibilityToggle: true,
  iconRender: (visible: boolean) =>
    visible ? <VisibilityIcon /> : <VisibilityOffIcon />
}

Password.displayName = 'Password'

export default Password
