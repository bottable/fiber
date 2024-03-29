import { Space } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Space', () => {
  it('renders correctly', () => {
    const directionBlockStyle = {
      margin: 0,
      padding: 4,
      flex: 'none',
      border: '1px solid blue'
    }
    const alignBlockStyle = {
      margin: '8px 4px',
      padding: 4,
      flex: 'none',
      border: '1px solid blue'
    }
    const grayStyle = {
      display: 'inline-block',
      padding: '32px 8px 16px',
      background: 'gray'
    }

    const space = render(
      <>
        <div>
          <Space size='sm'>
            <h1>Small</h1>
            <h1>Size</h1>
            <h1>!</h1>
          </Space>
        </div>
        <div>
          <Space size='md'>
            <h1>Middle</h1>
            <h1>Size</h1>
            <h1>!</h1>
          </Space>
        </div>
        <div>
          <Space size='lg'>
            <h1>Large</h1>
            <h1>Size</h1>
            <h1>!</h1>
          </Space>
        </div>
        <div>
          <Space size={100}>
            <h1>Number 100</h1>
            <h1>Size</h1>
            <h1>!</h1>
          </Space>
        </div>
        <div style={{ marginBottom: 10 }}>
          <Space direction='horizontal'>
            <div style={directionBlockStyle}>HELLO</div>
            <div style={directionBlockStyle}>HORIZONTAL</div>
          </Space>
        </div>
        <div>
          <Space direction='vertical'>
            <div style={directionBlockStyle}>HELLO</div>
            <div style={directionBlockStyle}>VERTICAL</div>
          </Space>
        </div>
        <div style={{ flexWrap: 'wrap', display: 'flex' }}>
          <div style={alignBlockStyle}>
            <Space align='center'>
              center
              <button>Primary</button>
              <span style={grayStyle}>Block</span>
            </Space>
          </div>
          <div style={alignBlockStyle}>
            <Space align='start'>
              start
              <button>Primary</button>
              <span style={grayStyle}>Block</span>
            </Space>
          </div>
          <div style={alignBlockStyle}>
            <Space align='end'>
              end
              <button>Primary</button>
              <span style={grayStyle}>Block</span>
            </Space>
          </div>
          <div style={alignBlockStyle}>
            <Space align='baseline'>
              baseline
              <button>Primary</button>
              <span style={grayStyle}>Block</span>
            </Space>
          </div>
        </div>
      </>
    )

    expect(space).toMatchSnapshot()
  })
})
