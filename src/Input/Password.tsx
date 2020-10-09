import { Input, InputProps } from './Input'

import React, { useState } from 'react'
import { MdVisibilityOff, MdVisibility } from 'react-icons/md'

export interface PasswordProps extends InputProps {
  visibilityToggle?: boolean
  iconRender?: (visible: boolean) => React.ReactElement
}

const Password = React.forwardRef(
  (props: PasswordProps, ref: React.Ref<HTMLInputElement>) => {
    const [visible, setVisible] = useState(false)

    const { visibilityToggle, iconRender, disabled } = props

    const onVisibleChange = () => {
      if (disabled) {
        return
      }
      setVisible((prevVisible) => !prevVisible)
    }

    const getIcon = () => {
      let icon: React.ReactElement

      if (typeof iconRender === 'function') icon = iconRender(visible)
      else {
        icon = visible ? (
          <MdVisibility style={{ color: '#595959' }} />
        ) : (
          <MdVisibilityOff style={{ color: '#595959' }} />
        )
      }

      const iconProps = {
        onClick: onVisibleChange,
        style: { cursor: 'pointer', ...icon.props.style }
      }

      return React.cloneElement(icon, iconProps)
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
  visibilityToggle: true
}

export { Password }
