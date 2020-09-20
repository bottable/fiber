import React from 'react'
import * as FiberUI from 'fiber-ui'
import * as MaterialUIIcons from '@material-ui/icons'

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...FiberUI,
  ...MaterialUIIcons
}

export default ReactLiveScope
