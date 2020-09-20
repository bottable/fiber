import styles from './styles.module.css'

import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import clsx from 'clsx'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'

function Playground({ children, theme, transformCode, ...props }) {
  const [showCode, setShowCode] = React.useState(false)

  return (
    <LiveProvider
      code={children.replace(/\n$/, '')}
      transformCode={transformCode || ((code) => `${code};`)}
      theme={theme}
      {...props}
    >
      <div
        className={clsx(
          styles.playgroundHeader,
          styles.playgroundPreviewHeader
        )}
      >
        Result
      </div>
      <div className={styles.playgroundPreview}>
        <LivePreview />
        <LiveError />
      </div>
      <div
        className={clsx(styles.playgroundHeader, styles.playgroundEditorHeader)}
        onClick={() => setShowCode(!showCode)}
      >
        Live Editor
        {showCode ? <MdExpandLess /> : <MdExpandMore />}
      </div>
      <LiveEditor
        className={styles.playgroundEditor}
        style={{ display: showCode ? 'block' : 'none' }}
      />
    </LiveProvider>
  )
}

export default Playground
