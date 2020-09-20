import styles from './styles.module.css'

import { Button } from 'fiber-ui'
import React, { useState } from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'
import { MdCode, MdRefresh } from 'react-icons/md'

function LiveCode({ defaultShowCode, refreshPreview, onChangeCode }) {
  const [showCode, setShowCode] = useState(defaultShowCode)

  return (
    <div className={styles.playground}>
      <div className={styles.playgroundPreview}>
        <LivePreview />
      </div>
      {showCode && (
        <div className={styles.playgroundCode}>
          <LiveEditor onChange={onChangeCode} />
          <LiveError />
        </div>
      )}
      <div className={styles.playgroundControls}>
        <Button
          icon={MdRefresh}
          className={styles.playgroundButton}
          style={{ width: '49%' }}
          onClick={refreshPreview}
        >
          REFRESH
        </Button>
        <Button
          icon={MdCode}
          className={styles.playgroundButton}
          variant={showCode ? 'regular' : 'normal'}
          style={{ width: '49%' }}
          onClick={() => setShowCode((prevShowCode) => !prevShowCode)}
        >
          {showCode ? 'HIDE' : 'SHOW'} CODE
        </Button>
      </div>
    </div>
  )
}

function Playground({
  theme,
  transformCode,
  children,
  showCode: defaultShowCode = false,
  ...props
}) {
  const [, setCount] = useState(0)
  const [code, setCode] = useState(children.replace(/\n$/, ''))

  return (
    <LiveProvider
      transformCode={transformCode || ((codeString) => `${codeString};`)}
      theme={theme}
      code={code}
      {...props}
    >
      <LiveCode
        defaultShowCode={defaultShowCode}
        refreshPreview={() => setCount((prev) => prev + 1)}
        onChangeCode={(newCode) => setCode(newCode.replace(/\n$/, ''))}
      />
    </LiveProvider>
  )
}

export default Playground
