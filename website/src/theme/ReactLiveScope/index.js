import * as FiberUI from '../../../../src'

import React from 'react'
import * as MaterialUIIcons from '@material-ui/icons'

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...MaterialUIIcons,
  ...FiberUI
}

export default ReactLiveScope
