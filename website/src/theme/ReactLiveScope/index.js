import * as FiberUI from '../../../../src'

import React from 'react'
import * as MDIcons from 'react-icons/md'
import * as ADIcons from 'react-icons/ai'

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  ...MDIcons,
  ...ADIcons,
  ...FiberUI
}

export default ReactLiveScope
